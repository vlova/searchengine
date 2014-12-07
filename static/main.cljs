(ns main
  (:require
   [cljs.reader :as reader]
   [goog.events :as events]
   [goog.dom :as gdom]
   [om.core :as om :include-macros true]
   [sablono.core :as html :refer-macros [html]])
  (:import
   [goog.net XhrIo]
   goog.net.EventType
   [goog.events EventType]))

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(defn edn-xhr [{:keys [method url data on-complete]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE
      (fn [e]
        (on-complete (reader/read-string (.getResponseText xhr)))))
    (. xhr
      (send url (meths method) (when data (pr-str data))
        #js {"Content-Type" "application/edn"}))))

(defonce app-state
  (atom
   {:query ""
    :search-results
    [{:uri "http://google.com"
      :title "Title"
      :content "Abc"}]}))

(defn handle-query-change [e state]
  (let [query (.. e -target -value)]
    (swap! app-state assoc :query query)))


(defn widget [data]
  (om/component
   (html [:div "Search here"
          [:input {:type "text" :value (:query data)
                   :onChange #(handle-query-change % data)}]
          [:div#results
           (for [{:keys [uri title content]} (:search-results data)]
             [:div.result
              [:h5 [:a {:href uri} title]]
              [:span content]])]])))

(om/root widget
         app-state
         {:target js/document.body})
