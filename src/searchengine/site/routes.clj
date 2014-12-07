(ns searchengine.site.routes
  (:require
   (compojure
    [core :refer [defroutes GET POST]]
    [route :refer [files resources not-found]]
    [handler :refer [site]]
    [route :refer [not-found]])
   [ring.util.response :refer [file-response]]
   [searchengine.model.pages :as pages])
  (:import
   (org.apache.commons.lang3
    StringEscapeUtils)))

(defn generate-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(defroutes app-routes
  (GET "/" [] (file-response "index.html" {:root "static"}))
  (GET "/search" [q from count]
       (generate-response
        (pages/query (StringEscapeUtils/unescapeHtml4 q) from count)))
  (files "" {:root "static"})
  (not-found "<p>Page not found.</p>"))
