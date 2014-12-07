(ns searchengine.core
  (:gen-class)
  (:require
   [clojure.tools.logging :refer [info]]
   [searchengine.core.elastic :refer [initialize-elastic wrap-with-elastic]]
   [searchengine.core.rabbitmq :refer [initialize-rabbitmq wrap-with-rabbitmq]]
   [searchengine.site.core :as site]
   [searchengine.services.crawler :as crawler]))

(defn -main [& args]
  (let [port 9899]
    (future
      (do
        (wrap-with-elastic
         (fn []
           (wrap-with-rabbitmq
            (fn []
              (initialize-elastic)
              (initialize-rabbitmq)
              (Thread/sleep 500)
              (crawler/crawl "http://nure.ua/")
              ))))
        (crawler/start-crawler)))
    (site/run port)
    (info "server started, visit http://localhost:" port "/")))

(-main)
