(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["flash"],{ae4c:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flash-main",on:{touchmove:function(e){e.preventDefault()}}},[e._m(0),n("div",{staticClass:"flash-loding",on:{click:e.handleSubmit}},[e._v("跳过"),n("span",{attrs:{plain:"",round:""}},[e._v(e._s(e.computedTime)+"s")])])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flash"},[n("div",{staticClass:"flash-top"},[n("h1",[e._v("专业的电子化采购软件开发商")])])])}],s=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),c=n("2f62"),o=n("2c18"),a=n("510f");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f="",p={baseURL:"",name:"Flash",mixins:[a["ddMixin"]],data:function(){return{computedTime:3}},created:function(){var e=this;this.timer=setInterval((function(){e.computedTime--,0===e.computedTime&&(clearInterval(e.timer),e.handleSubmit())}),1e3),this.getLXR()},methods:l({},Object(c["c"])(["SET_DDTYPE"]),{getLXR:function(){o["ready"]((function(){o["runtime"].permission.requestAuthCode({corpId:"ding88fc6e2f569030b335c2f4657eb6378f",onSuccess:function(e){f=e},onFail:function(){}})}))},handleSubmit:function(){""!==f&&null!==f&&void 0!==f?(this.SET_DDTYPE(!0),this.SET_SQM(f.code),this.$router.push({name:"jbrhome",params:{sqm:f}})):this.$router.push({name:"jbrlogin"}),this.SET_DDTYPE(!0),this.SET_SQM(f.code),this.$router.push({name:"jbrhome",params:{sqm:f}})}})},d=p,h=n("2877"),m=Object(h["a"])(d,r,i,!1,null,"257d0be6",null);t["default"]=m.exports}}]);
//# sourceMappingURL=flash.2b61c1d5.js.map