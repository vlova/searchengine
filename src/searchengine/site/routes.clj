(ns searchengine.site.routes
  (:require
   (compojure
    [core :refer [defroutes GET POST]]
    [route :refer [files resources not-found]]
    [handler :refer [site]]
    [route :refer [not-found]])
   [searchengine.model.pages :as pages]))

(defn main-page []
  "hi")


(defn generate-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(defroutes app-routes
  (GET "/" [] (main-page))
  (GET "/search" [q from count] (generate-response (pages/query q from count)))
  (GET "/crawl" [link] link)
  (files "" {:root "static"})
  (not-found "<p>Page not found.</p>"))
