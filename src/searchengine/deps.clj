(ns searchengine.deps)

(def ^:dynamic elastic-connection)
(def ^:dynamic rabbitmq-connection)
(def ^:dynamic rabbitmq-channel)

(defmacro def-hook-optins []
  (def ^:dynamic elastic-connection)
  (def ^:dynamic rabbitmq-connection)
  (def ^:dynamic rabbitmq-channel)

  (def hook-options
    [{:for-ns ["clojurewerkz.elastisch.rest.document"]
      :prepend [`@elastic-connection `"nuresearch" `"page"]}
     {:for-ns ["clojurewerkz.elastisch.rest.index"]
      :prepend [`@elastic-connection `"nuresearch"]}
     {:for-ns ["langohr.queue" "langohr.consumers" "langohr.basic" "langohr.exchange"]
      :prepend [`@rabbitmq-channel]}]))

(def-hook-optins)
