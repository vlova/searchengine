(ns searchengine.extractor.content
  (:require
   [hickory.core :as hc]
   [hickory.select :as hs]
   [clojure.string :as str]
   [searchengine.helpers :refer :all]))


(defn- junk-node? [node]
  (or (in? [:document-type :comment] (:type node))
      (in? [:head] (:tag node))
      (in? ["footer"] (get-in node [:attrs :id]))
      (in? ["main_menu"] (get-in node [:attrs :class]))
      ))

(defn- node->content [node]
  (cond
   (string? node) (str " " node " ")
   (= :br (:tag node)) "\n"

   :else
   (when (not (junk-node? node))
      (as->
       (:content node) $
       (map node->content $)
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
