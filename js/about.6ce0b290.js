(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"07ac":function(t,e,n){var i=n("23e7"),r=n("6f53").values;i({target:"Object",stat:!0},{values:function(t){return r(t)}})},"13d5":function(t,e,n){"use strict";var i=n("23e7"),r=n("d58f").left,a=n("a640"),o=n("ae40"),s=n("2d00"),l=n("605d"),u=a("reduce"),c=o("reduce",{1:0}),d=!l&&s>79&&s<83;i({target:"Array",proto:!0,forced:!u||!c||d},{reduce:function(t){return r(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"3f42":function(t,e,n){},"5b0b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[0==t.slides.length?n("div",[n("h1",[t._v("Není vložen žádný snímek.")]),n("router-link",{staticClass:"btn",attrs:{to:"/"}},[t._v("Návrat zpět")])],1):n("div",[n("ToolBar",{attrs:{totalDuration:t.totalDuration},on:{setToAll:t.setToAll}}),n("div",{staticClass:"container"},t._l(t.slides,(function(e,i){return n("div",{key:i,staticClass:"preview"},[n("div",{staticClass:"header"},[t._v("Snímek "+t._s(i+1))]),n("img",{attrs:{src:t.slides[i],alt:""}}),n("div",{staticClass:"footer"},[t._v(" Doba trvání : "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.durations[i],expression:"durations[index]",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.durations[i]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.target.parentElement.parentElement.nextElementSibling.children[2].children[0].focus()},input:function(e){e.target.composing||t.$set(t.durations,i,t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" min. "),n("button",{staticClass:"btn-small",attrs:{tabindex:"-1"},on:{click:function(e){return t.increaseMin(i)}}},[t._v(" + ")]),n("button",{staticClass:"btn-small",attrs:{tabindex:"-1"},on:{click:function(e){return t.decreaseMin(i)}}},[t._v(" - ")])])])})),0)],1)])},r=[],a=(n("4160"),n("13d5"),n("07ac"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toolbar"},[n("div",{staticStyle:{display:"flex"}},[n("router-link",{staticClass:"btn-light",attrs:{to:"/"}},[t._v("Zpět na nastavení")]),n("div",{staticClass:"timeForAll"},[n("label",{attrs:{for:"timeToAll"}},[t._v("Nastavit všem ")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.timeForAll,expression:"timeForAll",modifiers:{number:!0}}],attrs:{id:"timeToAll",type:"number"},domProps:{value:t.timeForAll},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("setToAll",t.timeForAll)},input:function(e){e.target.composing||(t.timeForAll=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("button",{staticClass:"input-submit",attrs:{type:"submit"},on:{click:function(e){return t.$emit("setToAll",t.timeForAll)}}},[t._v(" Ok ")])])],1),n("p",{staticClass:"totalTime"},[t._v("Celková doba prezentace: "+t._s(t.totalDuration)+" min.")]),n("router-link",{staticClass:"btn-light btn-red",attrs:{to:"/presentation"}},[t._v("Spustit prezentaci")])],1)}),o=[],s={name:"ToolBar",props:["totalDuration"],data:function(){return{timeForAll:5}}},l=s,u=(n("c675"),n("2877")),c=Object(u["a"])(l,a,o,!1,null,"db701e3e",null),d=c.exports,f={name:"SlidesPreview",components:{ToolBar:d},props:["slides"],data:function(){return{durations:{}}},methods:{increaseMin:function(t){this.durations[t]+=1},decreaseMin:function(t){this.durations[t]>0&&(this.durations[t]-=1)},setToAll:function(t){var e=this;this.slides.forEach((function(n,i){console.log("nastavuji index ".concat(i,".")),e.$set(e.durations,i,t)}))}},computed:{totalDuration:function(){return Object.values(this.durations).reduce((function(t,e){return t+=e,t}),0)}},watch:{totalDuration:function(){this.$emit("durationsChanged",this.totalDuration,this.durations)}}},v=f,m=(n("c3f3"),Object(u["a"])(v,i,r,!1,null,"60c19fba",null));e["default"]=m.exports},"6f53":function(t,e,n){var i=n("83ab"),r=n("df75"),a=n("fc6a"),o=n("d1e7").f,s=function(t){return function(e){var n,s=a(e),l=r(s),u=l.length,c=0,d=[];while(u>c)n=l[c++],i&&!o.call(s,n)||d.push(t?[n,s[n]]:s[n]);return d}};t.exports={entries:s(!0),values:s(!1)}},c3f3:function(t,e,n){"use strict";n("3f42")},c675:function(t,e,n){"use strict";n("caca")},caca:function(t,e,n){},d58f:function(t,e,n){var i=n("1c0b"),r=n("7b0b"),a=n("44ad"),o=n("50c4"),s=function(t){return function(e,n,s,l){i(n);var u=r(e),c=a(u),d=o(u.length),f=t?d-1:0,v=t?-1:1;if(s<2)while(1){if(f in c){l=c[f],f+=v;break}if(f+=v,t?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;t?f>=0:d>f;f+=v)f in c&&(l=n(l,c[f],f,u));return l}};t.exports={left:s(!1),right:s(!0)}}}]);
//# sourceMappingURL=about.6ce0b290.js.map