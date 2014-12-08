(defproject searchengine "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0-alpha4"]
                 [org.clojure/clojurescript "0.0-2411"]
                 [om "0.8.0-beta2"]
                 [sablono "0.2.22"]
                 [fogus/ring-edn "0.2.0"]
                 [javax.servlet/servlet-api "2.5"]
                 [ring/ring-core "1.3.2"]
                 [compojure "1.3.1"]
                 [org.clojure/data.json "0.2.5"]
                 [org.clojure/tools.logging "0.3.1"]
                 [ch.qos.logback/logback-classic "1.1.2"]
                 [http-kit "2.1.19"]
                 [clojurewerkz/elastisch "2.1.0"]
                 [clj-http "1.0.1"]
                 [hickory "0.5.4"]
                 [org.apache.commons/commons-lang3 "3.3.2"]
                 [com.novemberain/langohr "3.0.0-rc4"]]
  :plugins [[hiccup-bridge "1.0.1"]
            [lein-swank "1.4.5"]
            [lein-cljsbuild "1.0.3"]]
  :main searchengine.core
  :aot :all
  :cljsbuild
  {
   :builds [{:source-paths ["src-cljs"]
             :compiler {:output-to "static/main.js"
                        :optimizations :advanced
                        :externs ["static/react-0.11.2-min.js"]
                        :pretty-print false}}]})
