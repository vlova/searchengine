(ns searchengine.core.elastic
  (:require
   [clojurewerkz.elastisch.rest :as elastic]
   [clojurewerkz.elastisch.rest.index :as index]
   [searchengine.deps :refer :all]
   [searchengine.helpers :refer :all]))

(def ^:private page-analyzer
  {:page-analyzer
   {:type :standard
    :tokenizer :standard,
    :filter[ :cjk_width, :cjk_bigram, :lowercase,
             :whitespace, :english_stop, :russian_stop,
             :russian_keywords, :russian_stemmer,
             :length_filter :russian_morphology :english_morphology]
    }})

(def ^:private settings
  {:index
   {:analysis
    {:analyzer page-analyzer
     :filter {:length_filter {:type :length :min 0 :max 100}}
     }}})

(def ^:private mapping-types
  {:page
   {:_id {:path "uri" }

    :properties
    {:uri {:type :string :store :yes}
     :content {:type :string :store :yes :analyzer :page-analyzer}
     :last-updated {:type :date :format "basic_date_time_no_millis"}
     }}})

(hook-arguments []
 (defn initialize-elastic []
  (when (index/exists?)
    (index/delete))
  (when (not (index/exists?))
    (index/create
     :settings settings
     :mappings mapping-types))))


(defn wrap-with-elastic [fn]
  (with-resources
    [[elastic-connection (elastic/connect) nil $]]
    (fn)))
