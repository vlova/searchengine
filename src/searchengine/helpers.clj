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

(defn- transform-node [node transformer]
  (let [node (transformer node)]
    (cond (map? node)
          (zipmap
           (map #(transform-node (key %) transformer) node)
           (map #(transform-node (val %) transformer) node))

          (vector? node)
          (apply vector (map #(transform-node % transformer) node))

          (list? node)
          (apply list (map #(transform-node % transformer) node))

          (seq? node)
          (apply list (map #(transform-node % transformer) node))

          :else
          node)))

(defn- get-ns [fn-sym]
  (let [alias (symbol (string/replace (str fn-sym) #"/.*" ""))
        ns-aliases (ns-aliases *ns*)]
    (str
     (if (contains? ns-aliases alias)
       (get ns-aliases alias)
       alias))))

(defn- hook-arguments-one
  [option code]
  (letfn
    [(transformer
      [node]
      (if (seq? node)
        (let [method-call (first node)]
          (if (or (in? (:for option) method-call)
                  (in? (map get-ns (:for-ns option))
                     (get-ns method-call)))
            (concat (list method-call)
                    (:prepend option)
                    (rest node))
            node))
        node))]
    (transform-node code transformer)))

(defn- hook-arguments-with-options
  [options code]
  (if (seq? options)
    (loop [option (first options)
           options (next options)
           code code]
      (if (nil? option)
        code
        (recur (first options)
               (next options)
               (hook-arguments-one option code))))
    (hook-arguments-one options code)))

(defmacro hook-arguments
  [options & code]
  (hook-arguments-with-options
   (concat deps/hook-options options)
   `(do ~@code)))

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
