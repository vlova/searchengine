(
  (:require
   [org.httpkit.server :as httpkit :refer :all]
   [ring.middleware.edn :refer [wrap-edn-params]]
   [compojure.handler :refer [site]]
   [searchengine.site.routes :refer [app-routes]]
   [searchengine.helpers :refer [to-middleware]]
   (searchengine.core
    [elastic :refer [wrap-with-elastic]]
    [rabbitmq :refer [wrap-with-rabbitmq]])))

(defn run [port]
  (run-server
   (-> #'app-routes
       site
       wrap-edn-params
       ((to-middleware wrap-with-elastic))
       ((to-middleware wrap-with-rabbitmq)))
   {:port port}))


