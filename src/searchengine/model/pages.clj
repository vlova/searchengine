(ns searchengine.model.pages
  (:require
   [clojurewerkz.elastisch.rest.document :as document]
   [searchengine.deps :refer :all]
   [searchengine.helpers :refer :all]))

(defn index [page]
  (document/create @elastic-connection "nuresearch" "page" page))

(defn exists? [uri]
  (let [response (document/search
                  @elastic-connection "nuresearch" "page"
                  :query {:term {:_id uri}})]
    (> (get-in response [:hits :total]) 0)))

(defn query [query from size]
  (document/search
   @elastic-connection "nuresearch" "page"
   :from from
   :size size
   :query {:query_string { :query query }}
   :highlight {:order :score
               :fields
               {:content
                {:type :plain
                 :fragment_size 300
                 :number_of_fragments 1
                 :pre_tags  ["&lt;b&gt;"]
                 :post_tags  ["&lt;/b&gt;"]}}
               }))
