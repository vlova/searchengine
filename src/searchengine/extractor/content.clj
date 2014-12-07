(ns searchengine.extractor.content
  (:require
   [hickory.core :as hc]
   [hickory.select :as hs]
   [clojure.string :as str]
   [searchengine.helpers :refer :all]
   [clj-http.client :as http]))


(defn- junk-node? [node]
  (or (in? [:document-type :comment] (:type node))
      (in? [:head :nav :header] (:tag node))
      (in? ["footer"] (get-in node [:attrs :id]))
      (in? ["main_menu" "breadcrumbs"] (get-in node [:attrs :class]))
      ))

(defn- node->content [node]
  (cond
   (string? node) (str " " node " ")
   (= :br (:tag node)) "\n"

   :else
   (when (not (junk-node? node))
      (as->
       (:content node) $
       (map (fn [node] @(future (node->content node))) $)
       (filter (comp not nil?) $)
       (flatten $)
       @(future (apply str $))))))

(defn- normalize-content [node]
  (as->
   node $
   (node->content $)
   (str/replace $ #"\n" " ")
   (str/replace $ #"\t" " ")
   (str/replace $ #"\s" " ")
   (str/replace $ #" +" " ")
   (str/trim $)))

(defn extract-content [body]
  (as->
   body $
   (hc/parse $)
   (hc/as-hickory $)
   (normalize-content $)))

(defn- filter-title [node]
  "finds valid links in the html node"
  (as->
   node $
   (hs/select (hs/tag :title) $)
   (first $)))

(defn extract-title [body]
  (as->
   body $
   (hc/parse $)
   (hc/as-hickory $)
   (filter-title $)
   (apply str (:content $))
   (normalize-content $)))
