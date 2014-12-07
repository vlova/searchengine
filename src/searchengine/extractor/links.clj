(ns searchengine.extractor.links
  (:require
   [hickory.core :as hc]
   [hickory.select :as hs]
   [clojure.string :as str]))

(defn- valid? [link]
  "checks whether the link is valid and can be crawled"
  (let [startsWith #(.startsWith link %)
        endsWith #(.endsWith link %)]
    (and (or (startsWith "http://nure.ua")
             (startsWith "https://nure.ua"))
         (not (endsWith ".jpg"))
         (not (endsWith ".png"))
         (not (endsWith ".bmp"))
         (not (endsWith ".gif"))
         (not (endsWith ".mp3"))
         (not (endsWith ".doc"))
         (not (endsWith ".pdf"))
         (not (endsWith ".zip")))))

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
   ))
