(ns main
  (:require
   [cljs.reader :as reader]
   [goog.events :as events]
   [goog.dom :as gdom]
   [om.core :as om :include-macros true]
   [clojure.string :as string]
   [sablono.core :as html :refer-macros [html]])
  (:import
   [goog.net XhrIo EventType]
   [goog.events EventType]))

(enable-console-print!)

(def results-count 10)

(defn ?? [a b]
  (if (nil? a) b a))

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
       (send url
             (meths method)
             (when data (pr-str data))
             #js {"Content-Type" "application/edn"}))))


(defonce search-result-no (atom 0))

(defonce app-state
  (atom
   {:query ""
    :search-total 0
    :page 1
    :search-results
    []}))

(defn hit->result [hit]
  (let [{:keys [_source highlight]} hit
        uri (:uri _source)
        content (as->
                 (:content highlight) $
                 (apply str $)
                 (string/replace $ "&lt;" "<")
                 (string/replace $ "&gt;" ">"))]
    {:uri uri
     :title uri
     :content content}))

(defn update-search-results [results]
  (let [{:keys [hits, total]} (:hits results)]
    (swap! app-state assoc :search-results (vec (map hit->result hits)))
    (swap! app-state assoc :search-total (?? total 0))))

(defn get-search-results [query]
  (swap! search-result-no inc)
  (let [current-no @search-result-no
        page (:page @app-state)
        from (* (dec page) results-count)]
    (edn-xhr
     {:method :get
      :url (str "/search?q=" query "&from=" from "&count=" results-count)
      :data {}
      :on-complete
      (fn [res]
        (when (= current-no @search-result-no)
          (update-search-results res)))
          })))

(defn search []
  (update-search-results [])
  (get-search-results (:query @app-state)))

(defn handle-query-change [e]
  (let [query (.. e -target -value)]
    (swap! app-state assoc :query query)
    (swap! app-state assoc :page 1)
    (search)))

(defn handle-page-change [e]
  (let [page (int (.. e -target (getAttribute "data-page")))]
    (swap! app-state assoc :page page)
    (search)))

(defn pagination [data]
  (let [total (int (?? (:search-total data) 0))
        current-page (:page data)
        pages-total (int (/ (+ total (dec results-count)) results-count))]
    (when (not (zero? total))
      (html
       [:p (str "Пагинация: ")
        (let [pages (as->
                     (range 1 pages-total) $
                     (drop (max 0 (- current-page 5)) $)
                     (take 10 $))]
          [:span
           (if (not (= (first pages) 1))
             "... ")
           (for [page pages]
             [:span
              [:a {:href "#"
                   :class "disabled"
                   :data-page page
                   :onClick handle-page-change} page]
              " "])
           (if (not (= (last pages) (dec pages-total)))
             " ...")])]))))

(defn widget [data]
  (om/component
   (html [:div
          "Поиск: "
          [:input {:type "text" :value (:query data) :onChange handle-query-change}]
          [:h4 "Результаты"]
          [:p (str "Всего найдено: " (:search-total data))]
          (pagination data)
          (let [search-results (:search-results data)]
            (when (seq search-results)
              [:div#results
               (for [{:keys [uri title content index]}
                     (map-indexed #(merge %2 {:index (inc %1)}) search-results)]
                 [:div.result
                  [:h5 index ". " [:a {:href uri} title]]
                  (om.dom/div #js {:dangerouslySetInnerHTML #js {:__html content }})])])
            )])))

(om/root widget
         app-state
         {:target js/document.body})

app-state
