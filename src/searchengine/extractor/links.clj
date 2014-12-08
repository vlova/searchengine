(ns searchengine.extractor.links
  (:require
   [hickory.core :as hc]
   [hickory.select :as hs]
   [clojure.string :as str]))

(def badExtensions [".jpg" ".jpeg" ".png" ".bmp" ".gif" ".mp3" ".doc" ".pdf" ".zip" ".jsp"])

(defn- valid? [link]
  "checks whether the link is valid and can be crawled"
  (let [link (str/lower-case link)
        startsWith #(.startsWith link %)
        endsWith #(.endsWith link %)]
    (and (or (startsWith "http://nure.ua")
             (startsWith "https://nure.ua"))
         (empty? (filter (fn [ext] (endsWith ext)) badExtensions)))))

(defn- filter-links [node]
  "finds valid links in the html node"
  (hs/select
   (hs/and
    (hs/tag :a)
    (hs/attr :href (comp not nil?))
    (hs/attr :href valid?))
   node))

(defn extract-links [body]
  "extract links from some html"
  (as->
   body $
   (hc/parse $)
   (hc/as-hickory $)
   (filter-links $)
   (map (comp :href :attrs ) $)
   (map str/lower-case $)
   ))
