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

(defn wrap-with-rabbitmq [fn & [close?]]
  (with-resources
    [[rabbitmq-connection
      (rabbitmq/connect)
      (when (and close?
                 (rabbitmq/open? $))
        (rabbitmq/close $))
      $]
     [rabbitmq-channel
      (channel/open @rabbitmq-connection)
      (when (and close?
                 (channel/open? $))
        (channel/close $))
      $]]
    (fn)))

(defn initialize-rabbitmq []
  (exchange/declare @rabbitmq-channel "nuresearch" "fanout" {:durable true :auto-delete false})
  (queue/declare @rabbitmq-channel "nuresearch" {:exclusive false :auto-delete false})
  (queue/bind @rabbitmq-channel "nuresearch" "nuresearch"))

(defn publish [message]
  (basic/publish @rabbitmq-channel "nuresearch" "" message))

(defn subscribe [handler]
  (consumer/subscribe @rabbitmq-channel "nuresearch" handler
                      {:auto-ack true}))
