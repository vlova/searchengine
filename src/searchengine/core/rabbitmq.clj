(ns searchengine.core.rabbitmq
  (:require
   (langohr
    [core      :as rabbitmq]
    [exchange  :as exchange]
    [channel   :as channel]
    [queue     :as queue]
    [consumers :as consumer]
    [basic     :as basic])
   [searchengine.deps     :refer :all]
   [searchengine.helpers  :refer :all]))

(hook-arguments
 {}
 (defn wrap-with-rabbitmq [fn & [close?]]
   (with-resources
     [[rabbitmq-connection
       (rabbitmq/connect)
       (when (and (not= close? false) (rabbitmq/open? $))
         (rabbitmq/close $))
       $]
      [rabbitmq-channel
       (channel/open @rabbitmq-connection)
       (when (and (not= close? false) (channel/open? $))
         (channel/close $))
       $]]
     (fn)))

 (defn initialize-rabbitmq []
   (exchange/declare "nuresearch" "fanout" {:durable true :auto-delete false})
   (queue/declare "nuresearch" {:exclusive false :auto-delete false})
   (queue/bind "nuresearch" "nuresearch"))

 (defn publish [message]
   (basic/publish "nuresearch" "" message))

 (defn subscribe [handler]
   (consumer/subscribe "nuresearch" handler
                       {:auto-ack true}))
 )
