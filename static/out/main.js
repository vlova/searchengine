// Compiled by ClojureScript 0.0-2371
goog.provide('main');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.core');
goog.require('goog.events.EventType');
goog.require('sablono.core');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('cljs.reader');
main.results_count = (2);
main._QMARK__QMARK_ = (function _QMARK__QMARK_(a,b){if((a == null))
{return b;
} else
{return a;
}
});
main.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
main.edn_xhr = (function edn_xhr(p__7525){var map__7527 = p__7525;var map__7527__$1 = ((cljs.core.seq_QMARK_.call(null,map__7527))?cljs.core.apply.call(null,cljs.core.hash_map,map__7527):map__7527);var on_complete = cljs.core.get.call(null,map__7527__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));var data = cljs.core.get.call(null,map__7527__$1,new cljs.core.Keyword(null,"data","data",-232669377));var url = cljs.core.get.call(null,map__7527__$1,new cljs.core.Keyword(null,"url","url",276297046));var method = cljs.core.get.call(null,map__7527__$1,new cljs.core.Keyword(null,"method","method",55703592));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__7527,map__7527__$1,on_complete,data,url,method){
return (function (e){return on_complete.call(null,cljs.reader.read_string.call(null,xhr.getResponseText()));
});})(xhr,map__7527,map__7527__$1,on_complete,data,url,method))
);
return xhr.send(url,main.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Content-Type": "application/edn"});
});
if(typeof main.search_result_no !== 'undefined')
{} else
{main.search_result_no = cljs.core.atom.call(null,(0));
}
if(typeof main.app_state !== 'undefined')
{} else
{main.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),"",new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"search-total","search-total",-474756951),(0),new cljs.core.Keyword(null,"page","page",849072397),(1),new cljs.core.Keyword(null,"search-results","search-results",306464634),cljs.core.PersistentVector.EMPTY], null));
}
main.update_in_state = (function update_in_state(key,value){return cljs.core.swap_BANG_.call(null,main.app_state,cljs.core.assoc,key,value);
});
main.fix_content_highlight = (function fix_content_highlight(content){var $ = content;var $__$1 = cljs.core.apply.call(null,cljs.core.str,$);var $__$2 = clojure.string.replace.call(null,$__$1,"&lt;","<");var $__$3 = clojure.string.replace.call(null,$__$2,"&gt;",">");return $__$3;
});
main.hit__GT_result = (function hit__GT_result(hit){var map__7531 = hit;var map__7531__$1 = ((cljs.core.seq_QMARK_.call(null,map__7531))?cljs.core.apply.call(null,cljs.core.hash_map,map__7531):map__7531);var highlight = cljs.core.get.call(null,map__7531__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));var _source = cljs.core.get.call(null,map__7531__$1,new cljs.core.Keyword(null,"_source","_source",-812884485));var map__7532 = _source;var map__7532__$1 = ((cljs.core.seq_QMARK_.call(null,map__7532))?cljs.core.apply.call(null,cljs.core.hash_map,map__7532):map__7532);var title = cljs.core.get.call(null,map__7532__$1,new cljs.core.Keyword(null,"title","title",636505583));var uri = cljs.core.get.call(null,map__7532__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));var map__7533 = highlight;var map__7533__$1 = ((cljs.core.seq_QMARK_.call(null,map__7533))?cljs.core.apply.call(null,cljs.core.hash_map,map__7533):map__7533);var content = cljs.core.get.call(null,map__7533__$1,new cljs.core.Keyword(null,"content","content",15833224));var content__$1 = main.fix_content_highlight.call(null,content);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"content","content",15833224),content__$1], null);
});
main.update_search_results = (function update_search_results(results){var map__7535 = new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(results);var map__7535__$1 = ((cljs.core.seq_QMARK_.call(null,map__7535))?cljs.core.apply.call(null,cljs.core.hash_map,map__7535):map__7535);var total = cljs.core.get.call(null,map__7535__$1,new cljs.core.Keyword(null,"total","total",1916810418));var hits = cljs.core.get.call(null,map__7535__$1,new cljs.core.Keyword(null,"hits","hits",-2120002930));main.update_in_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",306464634),cljs.core.vec.call(null,cljs.core.map.call(null,main.hit__GT_result,hits)));
return main.update_in_state.call(null,new cljs.core.Keyword(null,"search-total","search-total",-474756951),main._QMARK__QMARK_.call(null,total,(0)));
});
main.get_search_results = (function get_search_results(query){cljs.core.swap_BANG_.call(null,main.search_result_no,cljs.core.inc);
var current_no = cljs.core.deref.call(null,main.search_result_no);var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,main.app_state));var from = ((page - (1)) * main.results_count);return main.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),("/search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)+"&from="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(from)+"&count="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(main.results_count)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (current_no,page,from){
return (function (res){if(cljs.core._EQ_.call(null,current_no,cljs.core.deref.call(null,main.search_result_no)))
{main.update_in_state.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"none","none",1333468478));
return main.update_search_results.call(null,res);
} else
{return null;
}
});})(current_no,page,from))
], null));
});
main.search = (function search(){main.update_in_state.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"searching","searching",1101390875));
main.update_search_results.call(null,cljs.core.PersistentVector.EMPTY);
return main.get_search_results.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,main.app_state)));
});
main.handle_query_change = (function handle_query_change(e){var query = e.target.value;main.update_in_state.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),query);
main.update_in_state.call(null,new cljs.core.Keyword(null,"page","page",849072397),(1));
return main.search.call(null);
});
main.handle_page_change = (function handle_page_change(e){var page = (e.target.getAttribute("data-page") | (0));main.update_in_state.call(null,new cljs.core.Keyword(null,"page","page",849072397),page);
return main.search.call(null);
});
main.render_search_control = (function render_search_control(p__7536){var map__7540 = p__7536;var map__7540__$1 = ((cljs.core.seq_QMARK_.call(null,map__7540))?cljs.core.apply.call(null,cljs.core.hash_map,map__7540):map__7540);var query = cljs.core.get.call(null,map__7540__$1,new cljs.core.Keyword(null,"query","query",-1288509510));return React.DOM.div({"className": "search-control"},React.DOM.p({"className": "search-header"},"Find it!"),sablono.interpreter.input.call(null,{"type": "text", "value": query, "placeholder": "\u0447\u0442\u043E \u0431\u044B \u0432\u044B \u0445\u043E\u0442\u0435\u043B\u0438 \u043D\u0430\u0439\u0442\u0438?", "onChange": main.handle_query_change}));
});
main.render_pagination_page = (function render_pagination_page(page,current_page){var attrs7544 = ((cljs.core._EQ_.call(null,page,current_page))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"disabled",new cljs.core.Keyword(null,"data-page","data-page",798770447),page,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){return false;
})], null),page], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-page","data-page",798770447),page,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),main.handle_page_change], null),page], null));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs7544))?sablono.interpreter.attributes.call(null,attrs7544):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs7544))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs7544)," "], null))));
});
main.render_pagination = (function render_pagination(data){var total = (main._QMARK__QMARK_.call(null,new cljs.core.Keyword(null,"search-total","search-total",-474756951).cljs$core$IFn$_invoke$arity$1(data),(0)) | (0));var current_page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(data);var pages_total = (((total + (main.results_count - (1))) / main.results_count) | (0));if((pages_total > (1)))
{return React.DOM.p({"className": "pagination"},sablono.interpreter.interpret.call(null,(function (){var pages = (function (){var $ = cljs.core.range.call(null,(1),(pages_total + (1)));var $__$1 = cljs.core.drop.call(null,(function (){var x__3963__auto__ = (0);var y__3964__auto__ = (current_page - (5));return ((x__3963__auto__ > y__3964__auto__) ? x__3963__auto__ : y__3964__auto__);
})(),$);var $__$2 = cljs.core.take.call(null,(10),$__$1);return $__$2;
})();return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((!(cljs.core._EQ_.call(null,cljs.core.first.call(null,pages),(1))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),main.render_pagination_page.call(null,(1),current_page)," \u2026 "], null):null),(function (){var iter__4395__auto__ = ((function (pages,total,current_page,pages_total){
return (function iter__7549(s__7550){return (new cljs.core.LazySeq(null,((function (pages,total,current_page,pages_total){
return (function (){var s__7550__$1 = s__7550;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7550__$1);if(temp__4126__auto__)
{var s__7550__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7550__$2))
{var c__4393__auto__ = cljs.core.chunk_first.call(null,s__7550__$2);var size__4394__auto__ = cljs.core.count.call(null,c__4393__auto__);var b__7552 = cljs.core.chunk_buffer.call(null,size__4394__auto__);if((function (){var i__7551 = (0);while(true){
if((i__7551 < size__4394__auto__))
{var page = cljs.core._nth.call(null,c__4393__auto__,i__7551);cljs.core.chunk_append.call(null,b__7552,main.render_pagination_page.call(null,page,current_page));
{
var G__7553 = (i__7551 + (1));
i__7551 = G__7553;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7552),iter__7549.call(null,cljs.core.chunk_rest.call(null,s__7550__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7552),null);
}
} else
{var page = cljs.core.first.call(null,s__7550__$2);return cljs.core.cons.call(null,main.render_pagination_page.call(null,page,current_page),iter__7549.call(null,cljs.core.rest.call(null,s__7550__$2)));
}
} else
{return null;
}
break;
}
});})(pages,total,current_page,pages_total))
,null,null));
});})(pages,total,current_page,pages_total))
;return iter__4395__auto__.call(null,pages);
})(),((!(cljs.core._EQ_.call(null,cljs.core.last.call(null,pages),pages_total)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," \u2026 ",main.render_pagination_page.call(null,pages_total,current_page)], null):null)], null);
})()));
} else
{return null;
}
});
main.render_search_results = (function render_search_results(p__7556){var map__7566 = p__7556;var map__7566__$1 = ((cljs.core.seq_QMARK_.call(null,map__7566))?cljs.core.apply.call(null,cljs.core.hash_map,map__7566):map__7566);var page = cljs.core.get.call(null,map__7566__$1,new cljs.core.Keyword(null,"page","page",849072397));var query = cljs.core.get.call(null,map__7566__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var search_total = cljs.core.get.call(null,map__7566__$1,new cljs.core.Keyword(null,"search-total","search-total",-474756951));var search_results = cljs.core.get.call(null,map__7566__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));return sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,query)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-total","div.search-total",-712859666),("(\u0432\u0441\u0435\u0433\u043E \u043D\u0430\u0439\u0434\u0435\u043D\u043E: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(search_total)+")")], null),((cljs.core.seq.call(null,search_results))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#results","div#results",1053720212),(function (){var iter__4395__auto__ = ((function (map__7566,map__7566__$1,page,query,search_total,search_results){
return (function iter__7567(s__7568){return (new cljs.core.LazySeq(null,((function (map__7566,map__7566__$1,page,query,search_total,search_results){
return (function (){var s__7568__$1 = s__7568;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7568__$1);if(temp__4126__auto__)
{var s__7568__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7568__$2))
{var c__4393__auto__ = cljs.core.chunk_first.call(null,s__7568__$2);var size__4394__auto__ = cljs.core.count.call(null,c__4393__auto__);var b__7570 = cljs.core.chunk_buffer.call(null,size__4394__auto__);if((function (){var i__7569 = (0);while(true){
if((i__7569 < size__4394__auto__))
{var map__7573 = cljs.core._nth.call(null,c__4393__auto__,i__7569);var map__7573__$1 = ((cljs.core.seq_QMARK_.call(null,map__7573))?cljs.core.apply.call(null,cljs.core.hash_map,map__7573):map__7573);var index = cljs.core.get.call(null,map__7573__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var content = cljs.core.get.call(null,map__7573__$1,new cljs.core.Keyword(null,"content","content",15833224));var title = cljs.core.get.call(null,map__7573__$1,new cljs.core.Keyword(null,"title","title",636505583));var uri = cljs.core.get.call(null,map__7573__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));cljs.core.chunk_append.call(null,b__7570,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-result","div.search-result",1848288768),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),uri], null),index,". ",title], null)], null),React.DOM.span({"className": "content", "dangerouslySetInnerHTML": {"className": "content", "__html": content}})], null));
{
var G__7575 = (i__7569 + (1));
i__7569 = G__7575;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7570),iter__7567.call(null,cljs.core.chunk_rest.call(null,s__7568__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7570),null);
}
} else
{var map__7574 = cljs.core.first.call(null,s__7568__$2);var map__7574__$1 = ((cljs.core.seq_QMARK_.call(null,map__7574))?cljs.core.apply.call(null,cljs.core.hash_map,map__7574):map__7574);var index = cljs.core.get.call(null,map__7574__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var content = cljs.core.get.call(null,map__7574__$1,new cljs.core.Keyword(null,"content","content",15833224));var title = cljs.core.get.call(null,map__7574__$1,new cljs.core.Keyword(null,"title","title",636505583));var uri = cljs.core.get.call(null,map__7574__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-result","div.search-result",1848288768),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),uri], null),index,". ",title], null)], null),React.DOM.span({"className": "content", "dangerouslySetInnerHTML": {"className": "content", "__html": content}})], null),iter__7567.call(null,cljs.core.rest.call(null,s__7568__$2)));
}
} else
{return null;
}
break;
}
});})(map__7566,map__7566__$1,page,query,search_total,search_results))
,null,null));
});})(map__7566,map__7566__$1,page,query,search_total,search_results))
;return iter__4395__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__4395__auto__,map__7566,map__7566__$1,page,query,search_total,search_results){
return (function (p1__7555_SHARP_,p2__7554_SHARP_){return cljs.core.merge.call(null,p2__7554_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),(((1) + (main.results_count * (page - (1)))) + p1__7555_SHARP_)], null));
});})(iter__4395__auto__,map__7566,map__7566__$1,page,query,search_total,search_results))
,search_results));
})()], null):null)], null):null));
});
main.widget = (function widget(data){if(typeof main.t7582 !== 'undefined')
{} else
{
/**
* @constructor
*/
main.t7582 = (function (data,widget,meta7583){
this.data = data;
this.widget = widget;
this.meta7583 = meta7583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
main.t7582.cljs$lang$type = true;
main.t7582.cljs$lang$ctorStr = "main/t7582";
main.t7582.cljs$lang$ctorPrWriter = (function (this__4233__auto__,writer__4234__auto__,opt__4235__auto__){return cljs.core._write.call(null,writer__4234__auto__,"main/t7582");
});
main.t7582.prototype.om$core$IRender$ = true;
main.t7582.prototype.om$core$IRender$render$arity$1 = (function (this__5233__auto__){var self__ = this;
var this__5233__auto____$1 = this;return React.DOM.div({"className": "container"},sablono.interpreter.interpret.call(null,main.render_search_control.call(null,self__.data)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"searching","searching",1101390875)))?React.DOM.div({"className": "waiting"},React.DOM.img({"src": "/ajax-loader.gif"})):(function (){var attrs7587 = main.render_pagination.call(null,self__.data);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs7587))?sablono.interpreter.attributes.call(null,attrs7587):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs7587))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,main.render_search_results.call(null,self__.data)),sablono.interpreter.interpret.call(null,main.render_pagination.call(null,self__.data))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs7587),sablono.interpreter.interpret.call(null,main.render_search_results.call(null,self__.data)),sablono.interpreter.interpret.call(null,main.render_pagination.call(null,self__.data))], null))));
})()));
});
main.t7582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7584){var self__ = this;
var _7584__$1 = this;return self__.meta7583;
});
main.t7582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7584,meta7583__$1){var self__ = this;
var _7584__$1 = this;return (new main.t7582(self__.data,self__.widget,meta7583__$1));
});
main.__GT_t7582 = (function __GT_t7582(data__$1,widget__$1,meta7583){return (new main.t7582(data__$1,widget__$1,meta7583));
});
}
return (new main.t7582(data,widget,null));
});
om.core.root.call(null,main.widget,main.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.body], null));

//# sourceMappingURL=main.js.map