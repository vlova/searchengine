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
cljs.core.enable_console_print_BANG_.call(null);
main.results_count = (10);
main._QMARK__QMARK_ = (function _QMARK__QMARK_(a,b){if((a == null))
{return b;
} else
{return a;
}
});
main.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
main.edn_xhr = (function edn_xhr(p__12750){var map__12752 = p__12750;var map__12752__$1 = ((cljs.core.seq_QMARK_.call(null,map__12752))?cljs.core.apply.call(null,cljs.core.hash_map,map__12752):map__12752);var on_complete = cljs.core.get.call(null,map__12752__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));var data = cljs.core.get.call(null,map__12752__$1,new cljs.core.Keyword(null,"data","data",-232669377));var url = cljs.core.get.call(null,map__12752__$1,new cljs.core.Keyword(null,"url","url",276297046));var method = cljs.core.get.call(null,map__12752__$1,new cljs.core.Keyword(null,"method","method",55703592));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__12752,map__12752__$1,on_complete,data,url,method){
return (function (e){return on_complete.call(null,cljs.reader.read_string.call(null,xhr.getResponseText()));
});})(xhr,map__12752,map__12752__$1,on_complete,data,url,method))
);
return xhr.send(url,main.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Content-Type": "application/edn"});
});
if(typeof main.search_result_no !== 'undefined')
{} else
{main.search_result_no = cljs.core.atom.call(null,(0));
}
if(typeof main.app_state !== 'undefined')
{} else
{main.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),"",new cljs.core.Keyword(null,"search-total","search-total",-474756951),(0),new cljs.core.Keyword(null,"page","page",849072397),(1),new cljs.core.Keyword(null,"search-results","search-results",306464634),cljs.core.PersistentVector.EMPTY], null));
}
main.hit__GT_result = (function hit__GT_result(hit){var map__12754 = hit;var map__12754__$1 = ((cljs.core.seq_QMARK_.call(null,map__12754))?cljs.core.apply.call(null,cljs.core.hash_map,map__12754):map__12754);var highlight = cljs.core.get.call(null,map__12754__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));var _source = cljs.core.get.call(null,map__12754__$1,new cljs.core.Keyword(null,"_source","_source",-812884485));var uri = new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(_source);var content = (function (){var $ = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(highlight);var $__$1 = cljs.core.apply.call(null,cljs.core.str,$);var $__$2 = clojure.string.replace.call(null,$__$1,"&lt;","<");var $__$3 = clojure.string.replace.call(null,$__$2,"&gt;",">");return $__$3;
})();return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"title","title",636505583),uri,new cljs.core.Keyword(null,"content","content",15833224),content], null);
});
main.update_search_results = (function update_search_results(results){var map__12756 = new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(results);var map__12756__$1 = ((cljs.core.seq_QMARK_.call(null,map__12756))?cljs.core.apply.call(null,cljs.core.hash_map,map__12756):map__12756);var total = cljs.core.get.call(null,map__12756__$1,new cljs.core.Keyword(null,"total","total",1916810418));var hits = cljs.core.get.call(null,map__12756__$1,new cljs.core.Keyword(null,"hits","hits",-2120002930));cljs.core.swap_BANG_.call(null,main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"search-results","search-results",306464634),cljs.core.vec.call(null,cljs.core.map.call(null,main.hit__GT_result,hits)));
return cljs.core.swap_BANG_.call(null,main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"search-total","search-total",-474756951),main._QMARK__QMARK_.call(null,total,(0)));
});
main.get_search_results = (function get_search_results(query){cljs.core.swap_BANG_.call(null,main.search_result_no,cljs.core.inc);
var current_no = cljs.core.deref.call(null,main.search_result_no);var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,main.app_state));var from = ((page - (1)) * main.results_count);return main.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),("/search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)+"&from="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(from)+"&count="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(main.results_count)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (current_no,page,from){
return (function (res){if(cljs.core._EQ_.call(null,current_no,cljs.core.deref.call(null,main.search_result_no)))
{return main.update_search_results.call(null,res);
} else
{return null;
}
});})(current_no,page,from))
], null));
});
main.search = (function search(){main.update_search_results.call(null,cljs.core.PersistentVector.EMPTY);
return main.get_search_results.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,main.app_state)));
});
main.handle_query_change = (function handle_query_change(e){var query = e.target.value;cljs.core.swap_BANG_.call(null,main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"query","query",-1288509510),query);
cljs.core.swap_BANG_.call(null,main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),(1));
return main.search.call(null);
});
main.handle_page_change = (function handle_page_change(e){var page = (e.target.getAttribute("data-page") | (0));cljs.core.swap_BANG_.call(null,main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),page);
return main.search.call(null);
});
main.pagination = (function pagination(data){var total = (main._QMARK__QMARK_.call(null,new cljs.core.Keyword(null,"search-total","search-total",-474756951).cljs$core$IFn$_invoke$arity$1(data),(0)) | (0));var current_page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(data);var pages_total = (((total + (main.results_count - (1))) / main.results_count) | (0));if(!((total === (0))))
{var attrs12766 = ("\u041F\u0430\u0433\u0438\u043D\u0430\u0446\u0438\u044F: ");return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs12766))?sablono.interpreter.attributes.call(null,attrs12766):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12766))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,(function (){var pages = (function (){var $ = cljs.core.range.call(null,(1),pages_total);var $__$1 = cljs.core.drop.call(null,(function (){var x__3963__auto__ = (0);var y__3964__auto__ = (current_page - (5));return ((x__3963__auto__ > y__3964__auto__) ? x__3963__auto__ : y__3964__auto__);
})(),$);var $__$2 = cljs.core.take.call(null,(10),$__$1);return $__$2;
})();return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((!(cljs.core._EQ_.call(null,cljs.core.first.call(null,pages),(1))))?"... ":null),(function (){var iter__4395__auto__ = ((function (pages,attrs12766,total,current_page,pages_total){
return (function iter__12767(s__12768){return (new cljs.core.LazySeq(null,((function (pages,attrs12766,total,current_page,pages_total){
return (function (){var s__12768__$1 = s__12768;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12768__$1);if(temp__4126__auto__)
{var s__12768__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12768__$2))
{var c__4393__auto__ = cljs.core.chunk_first.call(null,s__12768__$2);var size__4394__auto__ = cljs.core.count.call(null,c__4393__auto__);var b__12770 = cljs.core.chunk_buffer.call(null,size__4394__auto__);if((function (){var i__12769 = (0);while(true){
if((i__12769 < size__4394__auto__))
{var page = cljs.core._nth.call(null,c__4393__auto__,i__12769);cljs.core.chunk_append.call(null,b__12770,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"disabled",new cljs.core.Keyword(null,"data-page","data-page",798770447),page,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),main.handle_page_change], null),page], null)," "], null));
{
var G__12775 = (i__12769 + (1));
i__12769 = G__12775;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12770),iter__12767.call(null,cljs.core.chunk_rest.call(null,s__12768__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12770),null);
}
} else
{var page = cljs.core.first.call(null,s__12768__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"disabled",new cljs.core.Keyword(null,"data-page","data-page",798770447),page,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),main.handle_page_change], null),page], null)," "], null),iter__12767.call(null,cljs.core.rest.call(null,s__12768__$2)));
}
} else
{return null;
}
break;
}
});})(pages,attrs12766,total,current_page,pages_total))
,null,null));
});})(pages,attrs12766,total,current_page,pages_total))
;return iter__4395__auto__.call(null,pages);
})(),((!(cljs.core._EQ_.call(null,cljs.core.last.call(null,pages),(pages_total - (1)))))?" ...":null)], null);
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12766),sablono.interpreter.interpret.call(null,(function (){var pages = (function (){var $ = cljs.core.range.call(null,(1),pages_total);var $__$1 = cljs.core.drop.call(null,(function (){var x__3963__auto__ = (0);var y__3964__auto__ = (current_page - (5));return ((x__3963__auto__ > y__3964__auto__) ? x__3963__auto__ : y__3964__auto__);
})(),$);var $__$2 = cljs.core.take.call(null,(10),$__$1);return $__$2;
})();return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((!(cljs.core._EQ_.call(null,cljs.core.first.call(null,pages),(1))))?"... ":null),(function (){var iter__4395__auto__ = ((function (pages,attrs12766,total,current_page,pages_total){
return (function iter__12771(s__12772){return (new cljs.core.LazySeq(null,((function (pages,attrs12766,total,current_page,pages_total){
return (function (){var s__12772__$1 = s__12772;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12772__$1);if(temp__4126__auto__)
{var s__12772__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12772__$2))
{var c__4393__auto__ = cljs.core.chunk_first.call(null,s__12772__$2);var size__4394__auto__ = cljs.core.count.call(null,c__4393__auto__);var b__12774 = cljs.core.chunk_buffer.call(null,size__4394__auto__);if((function (){var i__12773 = (0);while(true){
if((i__12773 < size__4394__auto__))
{var page = cljs.core._nth.call(null,c__4393__auto__,i__12773);cljs.core.chunk_append.call(null,b__12774,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"disabled",new cljs.core.Keyword(null,"data-page","data-page",798770447),page,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),main.handle_page_change], null),page], null)," "], null));
{
var G__12776 = (i__12773 + (1));
i__12773 = G__12776;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12774),iter__12771.call(null,cljs.core.chunk_rest.call(null,s__12772__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12774),null);
}
} else
{var page = cljs.core.first.call(null,s__12772__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"disabled",new cljs.core.Keyword(null,"data-page","data-page",798770447),page,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),main.handle_page_change], null),page], null)," "], null),iter__12771.call(null,cljs.core.rest.call(null,s__12772__$2)));
}
} else
{return null;
}
break;
}
});})(pages,attrs12766,total,current_page,pages_total))
,null,null));
});})(pages,attrs12766,total,current_page,pages_total))
;return iter__4395__auto__.call(null,pages);
})(),((!(cljs.core._EQ_.call(null,cljs.core.last.call(null,pages),(pages_total - (1)))))?" ...":null)], null);
})())], null))));
} else
{return null;
}
});
main.widget = (function widget(data){if(typeof main.t12793 !== 'undefined')
{} else
{
/**
* @constructor
*/
main.t12793 = (function (data,widget,meta12794){
this.data = data;
this.widget = widget;
this.meta12794 = meta12794;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
main.t12793.cljs$lang$type = true;
main.t12793.cljs$lang$ctorStr = "main/t12793";
main.t12793.cljs$lang$ctorPrWriter = (function (this__4233__auto__,writer__4234__auto__,opt__4235__auto__){return cljs.core._write.call(null,writer__4234__auto__,"main/t12793");
});
main.t12793.prototype.om$core$IRender$ = true;
main.t12793.prototype.om$core$IRender$render$arity$1 = (function (this__5233__auto__){var self__ = this;
var this__5233__auto____$1 = this;return React.DOM.div(null,"\u041F\u043E\u0438\u0441\u043A: ",sablono.interpreter.input.call(null,{"type": "text", "value": new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(self__.data), "onChange": main.handle_query_change}),React.DOM.h4(null,"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B"),(function (){var attrs12798 = ("\u0412\u0441\u0435\u0433\u043E \u043D\u0430\u0439\u0434\u0435\u043D\u043E: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"search-total","search-total",-474756951).cljs$core$IFn$_invoke$arity$1(self__.data)));return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs12798))?sablono.interpreter.attributes.call(null,attrs12798):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12798))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12798)], null))));
})(),sablono.interpreter.interpret.call(null,main.pagination.call(null,self__.data)),sablono.interpreter.interpret.call(null,(function (){var search_results = new cljs.core.Keyword(null,"search-results","search-results",306464634).cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.seq.call(null,search_results))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#results","div#results",1053720212),(function (){var iter__4395__auto__ = ((function (search_results,this__5233__auto____$1){
return (function iter__12799(s__12800){return (new cljs.core.LazySeq(null,((function (search_results,this__5233__auto____$1){
return (function (){var s__12800__$1 = s__12800;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12800__$1);if(temp__4126__auto__)
{var s__12800__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12800__$2))
{var c__4393__auto__ = cljs.core.chunk_first.call(null,s__12800__$2);var size__4394__auto__ = cljs.core.count.call(null,c__4393__auto__);var b__12802 = cljs.core.chunk_buffer.call(null,size__4394__auto__);if((function (){var i__12801 = (0);while(true){
if((i__12801 < size__4394__auto__))
{var map__12805 = cljs.core._nth.call(null,c__4393__auto__,i__12801);var map__12805__$1 = ((cljs.core.seq_QMARK_.call(null,map__12805))?cljs.core.apply.call(null,cljs.core.hash_map,map__12805):map__12805);var index = cljs.core.get.call(null,map__12805__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var content = cljs.core.get.call(null,map__12805__$1,new cljs.core.Keyword(null,"content","content",15833224));var title = cljs.core.get.call(null,map__12805__$1,new cljs.core.Keyword(null,"title","title",636505583));var uri = cljs.core.get.call(null,map__12805__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));cljs.core.chunk_append.call(null,b__12802,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result","div.result",285078839),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),index,". ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),uri], null),title], null)], null),React.DOM.div({"dangerouslySetInnerHTML": {"__html": content}})], null));
{
var G__12807 = (i__12801 + (1));
i__12801 = G__12807;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12802),iter__12799.call(null,cljs.core.chunk_rest.call(null,s__12800__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12802),null);
}
} else
{var map__12806 = cljs.core.first.call(null,s__12800__$2);var map__12806__$1 = ((cljs.core.seq_QMARK_.call(null,map__12806))?cljs.core.apply.call(null,cljs.core.hash_map,map__12806):map__12806);var index = cljs.core.get.call(null,map__12806__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var content = cljs.core.get.call(null,map__12806__$1,new cljs.core.Keyword(null,"content","content",15833224));var title = cljs.core.get.call(null,map__12806__$1,new cljs.core.Keyword(null,"title","title",636505583));var uri = cljs.core.get.call(null,map__12806__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result","div.result",285078839),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),index,". ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),uri], null),title], null)], null),React.DOM.div({"dangerouslySetInnerHTML": {"__html": content}})], null),iter__12799.call(null,cljs.core.rest.call(null,s__12800__$2)));
}
} else
{return null;
}
break;
}
});})(search_results,this__5233__auto____$1))
,null,null));
});})(search_results,this__5233__auto____$1))
;return iter__4395__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__4395__auto__,search_results,this__5233__auto____$1){
return (function (p1__12778_SHARP_,p2__12777_SHARP_){return cljs.core.merge.call(null,p2__12777_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),(p1__12778_SHARP_ + (1))], null));
});})(iter__4395__auto__,search_results,this__5233__auto____$1))
,search_results));
})()], null);
} else
{return null;
}
})()));
});
main.t12793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12795){var self__ = this;
var _12795__$1 = this;return self__.meta12794;
});
main.t12793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12795,meta12794__$1){var self__ = this;
var _12795__$1 = this;return (new main.t12793(self__.data,self__.widget,meta12794__$1));
});
main.__GT_t12793 = (function __GT_t12793(data__$1,widget__$1,meta12794){return (new main.t12793(data__$1,widget__$1,meta12794));
});
}
return (new main.t12793(data,widget,null));
});
om.core.root.call(null,main.widget,main.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.body], null));

//# sourceMappingURL=main.js.map