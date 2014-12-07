(defproject searchengine "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [om "0.8.0-beta2"]
                 [sablono "0.2.22"]
                 [fogus/ring-edn "0.2.0"]
                 [javax.servlet/servlet-api "2.5"]
                 [ring/ring-core "1.3.1"]
                 [compojure "1.3.1"]
                 [org.clojure/data.json "0.2.5"]
                 [org.clojure/tools.logging "0.3.1"]
                 [ch.qos.logback/logback-classic "1.1.2"]
                 [http-kit "2.1.16"]
                 [clojurewerkz/elastisch "2.1.0-rc1"]
                 [clj-http "1.0.1"]
                 [hickory "0.5.4"]
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
                        :output-dir "static/out"
                        :optimizations :none
                        :pretty-print true
                        :source-map "static/main.js.map"}}]})
