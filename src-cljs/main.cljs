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

(def results-count 2)

(defn ?? [a b] (if (nil? a) b a))

(def ^:private meths {:get "GET" :put "PUT" :post "POST" :delete "DELETE"})

(defn edn-xhr [{:keys [method url data on-complete]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE (fn [e] (on-complete (reader/read-string (.getResponseText xhr)))))
    (. xhr (send url (meths method) (when data (pr-str data)) #js {"Content-Type" "application/edn"}))))

(defonce search-result-no (atom 0))

(defonce app-state
  (atom
   {:query ""
    :state :none
    :search-total 0
    :page 1
    :search-results []}))

(defn update-in-state [key value]
  (swap! app-state assoc key value))

(defn fix-content-highlight [content]
  (as->
   content $
   (apply str $)
   (string/replace $ "&lt;" "<")
   (string/replace $ "&gt;" ">")))

(defn hit->result [hit]
  (let [{:keys [_source highlight]} hit
        {:keys [uri title]} _source
        {:keys [content]} highlight
        content (fix-content-highlight content)]
    {:uri uri
     :title title
     :content content}))

(defn update-search-results [results]
  (let [{:keys [hits, total]} (:hits results)]
    (update-in-state :search-results (vec (map hit->result hits)))
    (update-in-state :search-total (?? total 0))))

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
          (update-in-state :state :none)
          (update-search-results res)))
          })))

(defn search []
  (update-in-state :state :searching)
  (update-search-results [])
  (get-search-results (:query @app-state)))

(defn handle-query-change [e]
  (let [query (.. e -target -value)]
    (update-in-state :query query)
    (update-in-state :page 1)
    (search)))

(defn handle-page-change [e]
  (let [page (int (.. e -target (getAttribute "data-page")))]
    (update-in-state :page page)
    (search)))

(defn render-search-control [{:keys [query]}]
  (html
   [:div {:class "search-control"}
     [:p {:class "search-header"} "Find it!"]
     [:input {:type "text"
              :value query
              :placeholder "что бы вы хотели найти?"
              :onChange handle-query-change}]]))

(defn render-pagination-page [page current-page]
  (html [:span
         (if (= page current-page)
           [:a {:class "disabled"
                :data-page page
                :onClick (fn [e] false)} page]
           [:a {:href "#"
                :data-page page
                :onClick handle-page-change} page])
         " "]))

(defn render-pagination [data]
  (let [total (int (?? (:search-total data) 0))
        current-page (:page data)
        pages-total (int (/ (+ total (dec results-count)) results-count))]
    (when (> pages-total 1)
      (html
       [:p {:class "pagination"}
        (let [pages (as->
                     (range 1 (inc pages-total)) $
                     (drop (max 0 (- current-page 5)) $)
                     (take 10 $))]
          [:span
           (if (not (= (first pages) 1))
             [:span
              (render-pagination-page 1 current-page)
              " … "])
           (for [page pages]
             (render-pagination-page page current-page))
           (if (not (= (last pages) pages-total))
             [:span " … "
              (render-pagination-page pages-total current-page)
              ])])]))))

(defn render-search-results [{:keys [search-results search-total query page]}]
  (html
   (when (not (string/blank? query))
     [:div
      [:div.search-total (str "(всего найдено: " search-total ")")]
      (when (seq search-results)
        [:div#results
         (for [{:keys [uri title content index]}
               (map-indexed #(merge %2 {:index (+ 1 (* results-count (dec page)) %1)}) search-results)]
           [:div.search-result
            [:h5 [:a {:href uri} index ". "  title]]
            (om.dom/span
             #js {:dangerouslySetInnerHTML #js {:__html content :className "content"}
                  :className "content"}
             )])])
      ])))

(defn widget [data]
  (om/component
   (html [:div {:class "container"}
          (render-search-control data)
          (if (= (:state data) :searching)
            [:div.waiting [:img {:src "/ajax-loader.gif"}]]
            [:div
             (render-pagination data)
             (render-search-results data)
             (render-pagination data)])
          ])))

(om/root widget
         app-state
         {:target js/document.body})

