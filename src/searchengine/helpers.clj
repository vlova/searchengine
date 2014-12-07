(ns searchengine.helpers
  (:require
   [clojure.string :as string]
   [searchengine.deps :as deps]))

(defn to-middleware [wrapper]
  (fn [handler]
    (fn [request]
      (wrapper (partial handler request)))))

(defn in?
  "true if seq contains elm"
  [seq elm]
  (some #(= elm %) seq))

(defmacro with-resources
  [resources f]
  `(binding
     [~@(apply
         concat
         (for [[name create close] resources]
           [`~name
            `(delay ~create)]
           ))]
     (try
       ~f
       (finally
        (do
          ~@(for [[name create close] (reverse resources)
                  :when (not (nil? close))]
              `(if (realized? ~name)
                 (let [~'$ @~name]
                   ~close))))))))
