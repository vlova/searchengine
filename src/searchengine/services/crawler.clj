(ns searchengine.services.crawler
  (:require
   [clojure.string :as string]
   [clj-http.client :as http]
   [searchengine.model.pages :as pages]
   [searchengine.core.elastic :as elastic :refer [wrap-with-elastic]]
   [searchengine.core.rabbitmq :as rabbitmq :refer [wrap-with-rabbitmq]]
   [searchengine.extractor.links :refer :all]
   [searchengine.extractor.content :refer :all]
   ))

(defn now [] (new java.util.Date))

(defn- download [uri]
  (:body (http/get uri)))

(defn crawl [uri]
  (when (not (pages/exists? uri))
    (let [body (download uri)]
      (doseq [link (extract-links body)]
        (when (not (pages/exists? link))
          (rabbitmq/publish link)))
      (pages/index
       {:uri uri
        :content (extract-content body)
        :title (let [title (extract-title body)]
                 (if-not (string/blank? title) title uri))})
      nil)))

(defn- link-received [channel metadata ^bytes payload]
  (wrap-with-elastic
   (fn []
     (wrap-with-rabbitmq
      (fn []
        (try
          (crawl (String. payload "UTF-8"))
          (catch Throwable ex
            (println ex))))))))

(defn start-crawler []
  (wrap-with-rabbitmq
   (fn [] (rabbitmq/subscribe link-received))
   false))
