// Compiled by ClojureScript 0.0-2371
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__8019__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__8018 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__8018,(0),null);var body = cljs.core.nthnext.call(null,vec__8018,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__8019 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8019__delegate.call(this,args);};
G__8019.cljs$lang$maxFixedArity = 0;
G__8019.cljs$lang$applyTo = (function (arglist__8020){
var args = cljs.core.seq(arglist__8020);
return G__8019__delegate(args);
});
G__8019.cljs$core$IFn$_invoke$arity$variadic = G__8019__delegate;
return G__8019;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4395__auto__ = (function iter__8025(s__8026){return (new cljs.core.LazySeq(null,(function (){var s__8026__$1 = s__8026;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8026__$1);if(temp__4126__auto__)
{var s__8026__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8026__$2))
{var c__4393__auto__ = cljs.core.chunk_first.call(null,s__8026__$2);var size__4394__auto__ = cljs.core.count.call(null,c__4393__auto__);var b__8028 = cljs.core.chunk_buffer.call(null,size__4394__auto__);if((function (){var i__8027 = (0);while(true){
if((i__8027 < size__4394__auto__))
{var args = cljs.core._nth.call(null,c__4393__auto__,i__8027);cljs.core.chunk_append.call(null,b__8028,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__8029 = (i__8027 + (1));
i__8027 = G__8029;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8028),iter__8025.call(null,cljs.core.chunk_rest.call(null,s__8026__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8028),null);
}
} else
{var args = cljs.core.first.call(null,s__8026__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__8025.call(null,cljs.core.rest.call(null,s__8026__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4395__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4395__auto__ = (function iter__8034(s__8035){return (new cljs.core.LazySeq(null,(function (){var s__8035__$1 = s__8035;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8035__$1);if(temp__4126__auto__)
{var s__8035__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8035__$2))
{var c__4393__auto__ = cljs.core.chunk_first.call(null,s__8035__$2);var size__4394__auto__ = cljs.core.count.call(null,c__4393__auto__);var b__8037 = cljs.core.chunk_buffer.call(null,size__4394__auto__);if((function (){var i__8036 = (0);while(true){
if((i__8036 < size__4394__auto__))
{var style = cljs.core._nth.call(null,c__4393__auto__,i__8036);cljs.core.chunk_append.call(null,b__8037,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__8038 = (i__8036 + (1));
i__8036 = G__8038;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8037),iter__8034.call(null,cljs.core.chunk_rest.call(null,s__8035__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8037),null);
}
} else
{var style = cljs.core.first.call(null,s__8035__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__8034.call(null,cljs.core.rest.call(null,s__8035__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4395__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__8039){
var styles = cljs.core.seq(arglist__8039);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to8040 = (function() { 
var link_to8040__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to8040 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to8040__delegate.call(this,url,content);};
link_to8040.cljs$lang$maxFixedArity = 1;
link_to8040.cljs$lang$applyTo = (function (arglist__8041){
var url = cljs.core.first(arglist__8041);
var content = cljs.core.rest(arglist__8041);
return link_to8040__delegate(url,content);
});
link_to8040.cljs$core$IFn$_invoke$arity$variadic = link_to8040__delegate;
return link_to8040;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to8040);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to8042 = (function() { 
var mail_to8042__delegate = function (e_mail,p__8043){var vec__8045 = p__8043;var content = cljs.core.nth.call(null,vec__8045,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3656__auto__ = content;if(cljs.core.truth_(or__3656__auto__))
{return or__3656__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to8042 = function (e_mail,var_args){
var p__8043 = null;if (arguments.length > 1) {
  p__8043 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to8042__delegate.call(this,e_mail,p__8043);};
mail_to8042.cljs$lang$maxFixedArity = 1;
mail_to8042.cljs$lang$applyTo = (function (arglist__8046){
var e_mail = cljs.core.first(arglist__8046);
var p__8043 = cljs.core.rest(arglist__8046);
return mail_to8042__delegate(e_mail,p__8043);
});
mail_to8042.cljs$core$IFn$_invoke$arity$variadic = mail_to8042__delegate;
return mail_to8042;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to8042);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list8047 = (function unordered_list8047(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4395__auto__ = (function iter__8052(s__8053){return (new cljs.core.LazySeq(null,(function (){var s__8053__$1 = s__8053;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8053__$1);if(temp__4126__auto__)
{var s__8053__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8053__$2))
{var c__4393__auto__ = cljs.core.chunk_first.call(null,s__8053__$2);var size__4394__auto__ = cljs.core.count.call(null,c__4393__auto__);var b__8055 = cljs.core.chunk_buffer.call(null,size__4394__auto__);if((function (){var i__8054 = (0);while(true){
if((i__8054 < size__4394__auto__))
{var x = cljs.core._nth.call(null,c__4393__auto__,i__8054);cljs.core.chunk_append.call(null,b__8055,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__8056 = (i__8054 + (1));
i__8054 = G__8056;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8055),iter__8052.call(null,cljs.core.chunk_rest.call(null,s__8053__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8055),null);
}
} else
{var x = cljs.core.first.call(null,s__8053__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__8052.call(null,cljs.core.rest.call(null,s__8053__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4395__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list8047);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list8057 = (function ordered_list8057(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4395__auto__ = (function iter__8062(s__8063){return (new cljs.core.LazySeq(null,(function (){var s__8063__$1 = s__8063;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8063__$1);if(temp__4126__auto__)
{var s__8063__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8063__$2))
{var c__4393__auto__ = cljs.core.chunk_first.call(null,s__8063__$2);var size__4394__auto__ = cljs.core.count.call(null,c__4393__auto__);var b__8065 = cljs.core.chunk_buffer.call(null,size__4394__auto__);if((function (){var i__8064 = (0);while(true){
if((i__8064 < size__4394__auto__))
{var x = cljs.core._nth.call(null,c__4393__auto__,i__8064);cljs.core.chunk_append.call(null,b__8065,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__8066 = (i__8064 + (1));
i__8064 = G__8066;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8065),iter__8062.call(null,cljs.core.chunk_rest.call(null,s__8063__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8065),null);
}
} else
{var x = cljs.core.first.call(null,s__8063__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__8062.call(null,cljs.core.rest.call(null,s__8063__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4395__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list8057);
/**
* Create an image element.
*/
sablono.core.image8067 = (function() {
var image8067 = null;
var image8067__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image8067__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image8067 = function(src,alt){
switch(arguments.length){
case 1:
return image8067__1.call(this,src);
case 2:
return image8067__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image8067.cljs$core$IFn$_invoke$arity$1 = image8067__1;
image8067.cljs$core$IFn$_invoke$arity$2 = image8067__2;
return image8067;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image8067);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__8068_SHARP_,p2__8069_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8068_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__8069_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__8070_SHARP_,p2__8071_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8070_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__8071_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field8072 = (function() {
var color_field8072 = null;
var color_field8072__1 = (function (name__5145__auto__){return color_field8072.call(null,name__5145__auto__,null);
});
var color_field8072__2 = (function (name__5145__auto__,value__5146__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5145__auto__,value__5146__auto__);
});
color_field8072 = function(name__5145__auto__,value__5146__auto__){
switch(arguments.length){
case 1:
return color_field8072__1.call(this,name__5145__auto__);
case 2:
return color_field8072__2.call(this,name__5145__auto__,value__5146__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field8072.cljs$core$IFn$_invoke$arity$1 = color_field8072__1;
color_field8072.cljs$core$IFn$_invoke$arity$2 = color_field8072__2;
return color_field8072;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field8072);
/**
* Creates a date input field.
*/
sablono.core.date_field8073 = (function() {
var date_field8073 = null;
var date_field8073__1 = (function (name__5145__auto__){return date_field8073.call(null,name__5145__auto__,null);
});
var date_field8073__2 = (function (name__5145__auto__,value__5146__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5145__auto__,value__5146__auto__);
});
date_field8073 = function(name__5145__auto__,value__5146__auto__){
switch(arguments.length){
case 1:
return date_field8073__1.call(this,name__5145__auto__);
case 2:
return date_field8073__2.call(this,name__5145__auto__,value__5146__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field8073.cljs$core$IFn$_invoke$arity$1 = date_field8073__1;
date_field8073.cljs$core$IFn$_invoke$arity$2 = date_field8073__2;
return date_field8073;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field8073);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field8074 = (function() {
var datetime_field8074 = null;
var datetime_field8074__1 = (function (name__5145__auto__){return datetime_field8074.call(null,name__5145__auto__,null);
});
var datetime_field8074__2 = (function (name__5145__auto__,value__5146__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5145__auto__,value__5146__auto__);
});
datetime_field8074 = function(name__5145__auto__,value__5146__auto__){
switch(arguments.length){
case 1:
return datetime_field8074__1.call(this,name__5145__auto__);
case 2:
return datetime_field8074__2.call(this,name__5145__auto__,value__5146__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field8074.cljs$core$IFn$_invoke$arity$1 = datetime_field8074__1;
datetime_field8074.cljs$core$IFn$_invoke$arity$2 = datetime_field8074__2;
return datetime_field8074;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field8074);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field8075 = (function() {
var datetime_local_field8075 = null;
var datetime_local_field8075__1 = (function (name__5145__auto__){return datetime_local_field8075.call(null,name__5145__auto__,null);
});
var datetime_local_field8075__2 = (function (name__5145__auto__,value__5146__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5145__auto__,value__5146__auto__);
});
datetime_local_field8075 = function(name__5145__auto__,value__5146__auto__){
switch(arguments.length){
case 1:
return datetime_local_field8075__1.call(this,name__5145__auto__);
case 2:
return datetime_local_field8075__2.call(this,name__5145__auto__,value__5146__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field8075.cljs$core$IFn$_invoke$arity$1 = datetime_local_field8075__1;
datetime_local_field8075.cljs$core$IFn$_invoke$arity$2 = datetime_local_field8075__2;
return datetime_local_field8075;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field8075);
/**
* Creates a email input field.
*/
sablono.core.email_field8076 = (function() {
var email_field8076 = null;
var email_field8076__1 = (function (name__5145__auto__){return email_field8076.call(null,name__5145__auto__,null);
});
var email_field8076__2 = (function (name__5145__auto__,value__5146__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5145__auto__,value__5146__auto__);
});
email_field8076 = function(name__5145__auto__,value__5146__auto__){
switch(arguments.length){
case 1:
return email_field8076__1.call(this,name__5145__auto__);
case 2:
return email_field8076__2.call(this,name__5145__auto__,value__5146__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field8076.cljs$core$IFn$_invoke$arity$1 = email_field8076__1;
email_field8076.cljs$core$IFn$_invoke$arity$2 = email_field8076__2;
return email_field8076;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field8076);
/**
* Creates a file input field.
*/
sablono.core.file_field8077 = (function() {
var file_field8077 = null;
var file_field8077__1 = (function (name__5145__auto__){return file_field8077.call(null,name__5145__auto__,null);
});
var file_field8077__2 = (function (name__5145__auto__,value__5146__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5145__auto__,value__5146__auto__);
});
file_field8077 = function(name__5145__auto__,value__5146__auto__){
switch(arguments.length){
case 1:
return file_field8077__1.call(this,name__5145__auto__);
case 2:
return file_field8077__2.call(this,name__5145__auto__,value__5146__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field8077.cljs$core$IFn$_invoke$arity$1 = file_field8077__1;
file_field8077.cljs$core$IFn$_invoke$arity$2 = file_field8077__2;
return file_field8077;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field8077);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field8078 = (function() {
var hidden_field8078 = null;
var hidden_field8078__1 = (function (name__5145__auto__){return hidden_field8078.call(null,name__5145__auto__,null);
});
var hidden_field8078__2 = (function (name__5145__auto__,value__5146__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5145__auto__,value__5146__auto__);
});
hidden_field8078 = function(name__5145__auto__,value__5146__auto__){
switch(arguments.length){
case 1:
return hidden_field8078__1.call(this,name__5145__auto__);
case 2:
return hidden_field8078__2.call(this,name__5145__auto__,value__5146__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field8078.cljs$core$IFn$_invoke$arity$1 = hidden_field8078__1;
hidden_field8078.cljs$core$IFn$_invoke$arity$2 = hidden_field8078__2;
return hidden_field8078;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field8078);
/**
* Creates a month input field.
*/
sablono.core.month_field8079 = (function() {
var month_field8079 = null;
var month_field8079__1 = (function (name__5145__auto__){return month_field8079.call(null,name__5145__auto__,null);
});
var month_field8079__2 = (function (name__5145__auto__,value__5146__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5145__auto__,value__5146__auto__);
});
month_field8079 = function(name__5145__auto__,value__5146__auto__){
switch(arguments.length){
case 1:
return month_field8079__1.call(this,name__5145__auto__);
case 2:
return month_field8079__2.call(this,name__5145__auto__,value__5146__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field8079.cljs$core$IFn$_invoke$arity$1 = month_field8079__1;
month_field8079.cljs$core$IFn$_invoke$arity$2 = month_field8079__2;
return month_field8079;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field8079);
/**
* Creates a number input field.
*/
sablono.core.number_field8080 = (function() {
var number_field8080 = null;
var number_field8080__1 = (function (name__5145__auto__){return number_field8080.call(null,name__5145__auto__,null);
});
var number_field8080__2 = (function (name__5145__auto__,value__5146__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5145__auto__,value__5146__auto__);
});
number_field8080 = function(name__5145__auto__,value__5146__auto__){
switch(arguments.length){
case 1:
return number_field8080__1.call(this,name__5145__auto__);
case 2:
return number_field8080__2.call(this,name__5145__auto__,value__5146__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field8080.cljs$core$IFn$_invoke$arity$1 = number_field8080__1;
number_field8080.cljs$core$IFn$_invoke$arity$2 = number_field8080__2;
return number_field8080;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field8080);
/**
* Creates a password input field.
*/
sablono.core.password_field8081 = (function() {
var password_field8081 = null;
var password_field8081__1 = (function (name__5145__auto__){return password_field8081.call(null,name__5145__auto__,null);
});
var password_field8081__2 = (function (name__5145__auto__,value__5146__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5145__auto__,value__5146__auto__);
});
password_field8081 = function(name__5145__auto__,value__5146__auto__){
switch(arguments.length){
case 1:
return password_field8081__1.call(this,name__5145__auto__);
case 2:
return password_field8081__2.call(this,name__5145__auto__,value__5146__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field8081.cljs$core$IFn$_invoke$arity$1 = password_field8081__1;
password_field8081.cljs$core$IFn$_invoke$arity$2 = password_field8081__2;
return password_field8081;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field8081);
/**
* Creates a range input field.
*/
sablono.core.range_field8082 = (function() {
var range_field8082 = null;
var range_field8082__1 = (function (name__5145__auto__){return range_field8082.call(null,name__5145__auto__,null);
});
var range_field8082__2 = (function (name__5145__auto__,value__5146__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5145__auto__,value__5146__auto__);
});
range_field8082 = function(name__5145__auto__,value__5146__auto__){
switch(arguments.length){
case 1:
return range_field8082__1.call(this,name__5145__auto__);
case 2:
return range_field8082__2.call(this,name__5145__auto__,value__5146__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field8082.cljs$core$IFn$_invoke$arity$1 = range_field8082__1;
range_field8082.cljs$core$IFn$_invoke$arity$2 = range_field8082__2;
return range_field8082;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field8082);
/**
* Creates a search input field.
*/
sablono.core.search_field8083 = (function() {
var search_field8083 = null;
var search_field8083__1 = (function (name__5145__auto__){return search_field8083.call(null,name__5145__auto__,null);
});
var search_field8083__2 = (function (name__5145__auto__,value__5146__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5145__auto__,value__5146__auto__);
});
search_field8083 = function(name__5145__auto__,value__5146__auto__){
switch(arguments.length){
case 1:
return search_field8083__1.call(this,name__5145__auto__);
case 2:
return search_field8083__2.call(this,name__5145__auto__,value__5146__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field8083.cljs$core$IFn$_invoke$arity$1 = search_field8083__1;
search_field8083.cljs$core$IFn$_invoke$arity$2 = search_field8083__2;
return search_field8083;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field8083);
/**
* Creates a tel input field.
*/
sablono.core.tel_field8084 = (function() {
var tel_field8084 = null;
var tel_field8084__1 = (function (name__5145__auto__){return tel_field8084.call(null,name__5145__auto__,null);
});
var tel_field8084__2 = (function (name__5145__auto__,value__5146__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5145__auto__,value__5146__auto__);
});
tel_field8084 = function(name__5145__auto__,value__5146__auto__){
switch(arguments.length){
case 1:
return tel_field8084__1.call(this,name__5145__auto__);
case 2:
return tel_field8084__2.call(this,name__5145__auto__,value__5146__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field8084.cljs$core$IFn$_invoke$arity$1 = tel_field8084__1;
tel_field8084.cljs$core$IFn$_invoke$arity$2 = tel_field8084__2;
return tel_field8084;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field8084);
/**
* Creates a text input field.
*/
sablono.core.text_field8085 = (function() {
var text_field8085 = null;
var text_field8085__1 = (function (name__5145__auto__){return text_field8085.call(null,name__5145__auto__,null);
});
var text_field8085__2 = (function (name__5145__auto__,value__5146__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5145__auto__,value__5146__auto__);
});
text_field8085 = function(name__5145__auto__,value__5146__auto__){
switch(arguments.length){
case 1:
return text_field8085__1.call(this,name__5145__auto__);
case 2:
return text_field8085__2.call(this,name__5145__auto__,value__5146__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field8085.cljs$core$IFn$_invoke$arity$1 = text_field8085__1;
text_field8085.cljs$core$IFn$_invoke$arity$2 = text_field8085__2;
return text_field8085;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field8085);
/**
* Creates a time input field.
*/
sablono.core.time_field8086 = (function() {
var time_field8086 = null;
var time_field8086__1 = (function (name__5145__auto__){return time_field8086.call(null,name__5145__auto__,null);
});
var time_field8086__2 = (function (name__5145__auto__,value__5146__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5145__auto__,value__5146__auto__);
});
time_field8086 = function(name__5145__auto__,value__5146__auto__){
switch(arguments.length){
case 1:
return time_field8086__1.call(this,name__5145__auto__);
case 2:
return time_field8086__2.call(this,name__5145__auto__,value__5146__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field8086.cljs$core$IFn$_invoke$arity$1 = time_field8086__1;
time_field8086.cljs$core$IFn$_invoke$arity$2 = time_field8086__2;
return time_field8086;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field8086);
/**
* Creates a url input field.
*/
sablono.core.url_field8087 = (function() {
var url_field8087 = null;
var url_field8087__1 = (function (name__5145__auto__){return url_field8087.call(null,name__5145__auto__,null);
});
var url_field8087__2 = (function (name__5145__auto__,value__5146__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5145__auto__,value__5146__auto__);
});
url_field8087 = function(name__5145__auto__,value__5146__auto__){
switch(arguments.length){
case 1:
return url_field8087__1.call(this,name__5145__auto__);
case 2:
return url_field8087__2.call(this,name__5145__auto__,value__5146__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field8087.cljs$core$IFn$_invoke$arity$1 = url_field8087__1;
url_field8087.cljs$core$IFn$_invoke$arity$2 = url_field8087__2;
return url_field8087;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field8087);
/**
* Creates a week input field.
*/
sablono.core.week_field8088 = (function() {
var week_field8088 = null;
var week_field8088__1 = (function (name__5145__auto__){return week_field8088.call(null,name__5145__auto__,null);
});
var week_field8088__2 = (function (name__5145__auto__,value__5146__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5145__auto__,value__5146__auto__);
});
week_field8088 = function(name__5145__auto__,value__5146__auto__){
switch(arguments.length){
case 1:
return week_field8088__1.call(this,name__5145__auto__);
case 2:
return week_field8088__2.call(this,name__5145__auto__,value__5146__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field8088.cljs$core$IFn$_invoke$arity$1 = week_field8088__1;
week_field8088.cljs$core$IFn$_invoke$arity$2 = week_field8088__2;
return week_field8088;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field8088);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box8089 = (function() {
var check_box8089 = null;
var check_box8089__1 = (function (name){return check_box8089.call(null,name,null);
});
var check_box8089__2 = (function (name,checked_QMARK_){return check_box8089.call(null,name,checked_QMARK_,"true");
});
var check_box8089__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box8089 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box8089__1.call(this,name);
case 2:
return check_box8089__2.call(this,name,checked_QMARK_);
case 3:
return check_box8089__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box8089.cljs$core$IFn$_invoke$arity$1 = check_box8089__1;
check_box8089.cljs$core$IFn$_invoke$arity$2 = check_box8089__2;
check_box8089.cljs$core$IFn$_invoke$arity$3 = check_box8089__3;
return check_box8089;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box8089);
/**
* Creates a radio button.
*/
sablono.core.radio_button8090 = (function() {
var radio_button8090 = null;
var radio_button8090__1 = (function (group){return radio_button8090.call(null,group,null);
});
var radio_button8090__2 = (function (group,checked_QMARK_){return radio_button8090.call(null,group,checked_QMARK_,"true");
});
var radio_button8090__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button8090 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button8090__1.call(this,group);
case 2:
return radio_button8090__2.call(this,group,checked_QMARK_);
case 3:
return radio_button8090__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button8090.cljs$core$IFn$_invoke$arity$1 = radio_button8090__1;
radio_button8090.cljs$core$IFn$_invoke$arity$2 = radio_button8090__2;
radio_button8090.cljs$core$IFn$_invoke$arity$3 = radio_button8090__3;
return radio_button8090;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button8090);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options8091 = (function() {
var select_options8091 = null;
var select_options8091__1 = (function (coll){return select_options8091.call(null,coll,null);
});
var select_options8091__2 = (function (coll,selected){var iter__4395__auto__ = (function iter__8100(s__8101){return (new cljs.core.LazySeq(null,(function (){var s__8101__$1 = s__8101;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8101__$1);if(temp__4126__auto__)
{var s__8101__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8101__$2))
{var c__4393__auto__ = cljs.core.chunk_first.call(null,s__8101__$2);var size__4394__auto__ = cljs.core.count.call(null,c__4393__auto__);var b__8103 = cljs.core.chunk_buffer.call(null,size__4394__auto__);if((function (){var i__8102 = (0);while(true){
if((i__8102 < size__4394__auto__))
{var x = cljs.core._nth.call(null,c__4393__auto__,i__8102);cljs.core.chunk_append.call(null,b__8103,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__8106 = x;var text = cljs.core.nth.call(null,vec__8106,(0),null);var val = cljs.core.nth.call(null,vec__8106,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__8106,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options8091.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__8108 = (i__8102 + (1));
i__8102 = G__8108;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8103),iter__8100.call(null,cljs.core.chunk_rest.call(null,s__8101__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8103),null);
}
} else
{var x = cljs.core.first.call(null,s__8101__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__8107 = x;var text = cljs.core.nth.call(null,vec__8107,(0),null);var val = cljs.core.nth.call(null,vec__8107,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__8107,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options8091.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__8100.call(null,cljs.core.rest.call(null,s__8101__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4395__auto__.call(null,coll);
});
select_options8091 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options8091__1.call(this,coll);
case 2:
return select_options8091__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options8091.cljs$core$IFn$_invoke$arity$1 = select_options8091__1;
select_options8091.cljs$core$IFn$_invoke$arity$2 = select_options8091__2;
return select_options8091;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options8091);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down8109 = (function() {
var drop_down8109 = null;
var drop_down8109__2 = (function (name,options){return drop_down8109.call(null,name,options,null);
});
var drop_down8109__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down8109 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down8109__2.call(this,name,options);
case 3:
return drop_down8109__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down8109.cljs$core$IFn$_invoke$arity$2 = drop_down8109__2;
drop_down8109.cljs$core$IFn$_invoke$arity$3 = drop_down8109__3;
return drop_down8109;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down8109);
/**
* Creates a text area element.
*/
sablono.core.text_area8110 = (function() {
var text_area8110 = null;
var text_area8110__1 = (function (name){return text_area8110.call(null,name,null);
});
var text_area8110__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area8110 = function(name,value){
switch(arguments.length){
case 1:
return text_area8110__1.call(this,name);
case 2:
return text_area8110__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area8110.cljs$core$IFn$_invoke$arity$1 = text_area8110__1;
text_area8110.cljs$core$IFn$_invoke$arity$2 = text_area8110__2;
return text_area8110;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area8110);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label8111 = (function label8111(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label8111);
/**
* Creates a submit button.
*/
sablono.core.submit_button8112 = (function submit_button8112(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button8112);
/**
* Creates a form reset button.
*/
sablono.core.reset_button8113 = (function reset_button8113(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button8113);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to8114 = (function() { 
var form_to8114__delegate = function (p__8115,body){var vec__8117 = p__8115;var method = cljs.core.nth.call(null,vec__8117,(0),null);var action = cljs.core.nth.call(null,vec__8117,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to8114 = function (p__8115,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to8114__delegate.call(this,p__8115,body);};
form_to8114.cljs$lang$maxFixedArity = 1;
form_to8114.cljs$lang$applyTo = (function (arglist__8118){
var p__8115 = cljs.core.first(arglist__8118);
var body = cljs.core.rest(arglist__8118);
return form_to8114__delegate(p__8115,body);
});
form_to8114.cljs$core$IFn$_invoke$arity$variadic = form_to8114__delegate;
return form_to8114;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to8114);

//# sourceMappingURL=core.js.map