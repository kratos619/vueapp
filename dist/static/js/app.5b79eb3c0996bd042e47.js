webpackJsonp([0],{0:function(t,e){},"8JbI":function(t,e){},"9E/p":function(t,e){},DSB2:function(t,e){},Jmt5:function(t,e){},"KS/7":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),s={props:["quoteCount","maxQuotes"],data:function(){return{progressBarWidth:0}},updated:function(){this.progressBarWidth=this.$props.quoteCount/this.$props.maxQuotes*100,console.log(this.progressBarWidth)}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 mx-auto"},[e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar bg-primary",style:{width:this.progressBarWidth+"%"},attrs:{role:"progressbar"}},[this._v(this._s(this.quoteCount)+" / "+this._s(this.maxQuotes))])])])])])])},staticRenderFns:[]};var u=n("VU/8")(s,r,!1,function(t){n("KS/7")},null,null).exports,i={data:function(){return{quot:""}},methods:{createNew:function(){this.quot.length<=1?alert("write something"):(this.$emit("quoteAdded",this.quot),this.quot="")}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",[n("label",{attrs:{for:"quots"}},[t._v("Quots")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quot,expression:"quot"}],attrs:{cols:"30",rows:"3"},domProps:{value:t.quot},on:{input:function(e){e.target.composing||(t.quot=e.target.value)}}}),t._v(" "),n("p",[t._v(t._s(t.quot))]),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:function(e){return e.preventDefault(),t.createNew(e)}}},[t._v("Add")])])])},staticRenderFns:[]};var c=n("VU/8")(i,a,!1,function(t){n("9E/p")},"data-v-01ac2dce",null).exports,l={render:function(){var t=this.$createElement;return(this._self._c||t)("li",[this._t("default")],2)},staticRenderFns:[]};var d=n("VU/8")({},l,!1,function(t){n("8JbI")},null,null).exports,f={props:["quots"],components:{Quote:d},methods:{deleteQuote:function(t){console.log(t),this.$emit("quoteDelete",t)}},data:function(){return{}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ol",t._l(t.quots,function(e,o){return n("Quote",{key:o,staticClass:"quotes",nativeOn:{click:function(e){t.deleteQuote(o)}}},[t._v(t._s(e))])}))])},staticRenderFns:[]};var h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("this is Author")])])}]};var p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("this is New")]),t._v(" "),n("button",{on:{click:function(e){t.counter++}}},[t._v("Click Me")]),t._v(" "),n("p",[t._v(t._s(t.counter))])])},staticRenderFns:[]};var _={name:"App",data:function(){return{maxQuotes:10,quots:["a wondeerfull quote"]}},methods:{newQuote:function(t){this.quots.length>=this.maxQuotes?alert("only 10 quots"):this.quots.push(t),console.log(this.quots)},deletequote:function(t){this.quots.splice(t,1),console.log(this.quots)}},components:{CreateQuots:c,OuoteGrid:n("VU/8")(f,v,!1,function(t){n("bZQF")},"data-v-5ecbefb6",null).exports,ProgreeBar:u,Quote:d,Author:n("VU/8")({},h,!1,function(t){n("l7q8")},"data-v-17fc229f",null).exports,New:n("VU/8")({data:function(){return{counter:0}}},p,!1,function(t){n("DSB2")},"data-v-79d4b8e6",null).exports}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("ProgreeBar",{attrs:{quoteCount:t.quots.length,maxQuotes:t.maxQuotes}}),t._v(" "),n("CreateQuots",{on:{quoteAdded:t.newQuote}}),t._v(" "),n("OuoteGrid",{attrs:{quots:t.quots},on:{quoteDelete:t.deletequote}}),t._v(" "),n("p",{staticClass:"lead"},[t._v("clik on quots to delete")])],1)},staticRenderFns:[]};var q=n("VU/8")(_,m,!1,function(t){n("mUit")},null,null).exports,g=(n("Jmt5"),n("8+8L"));o.a.use(g.a),o.a.config.productionTip=!1,new o.a({el:"#app",components:{App:q},template:"<App/>"})},bZQF:function(t,e){},l7q8:function(t,e){},mUit:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5b79eb3c0996bd042e47.js.map