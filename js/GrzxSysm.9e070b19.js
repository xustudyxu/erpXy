(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GrzxSysm","WdxmBj"],{"3afa":function(t,e,a){"use strict";var n=a("f066"),o=a.n(n);o.a},"445c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"nav-bar"},[t.headerData.leftText?a("div",{staticClass:"nav-bar-left"},[a("div",{on:{click:function(e){return e.stopPropagation(),t.handelClick(t.headerData.leftUrl)}}},[a("i",{staticClass:"iconfont iconicon-back"}),a("div",{staticClass:"nav-bar-txt"},[t._v(t._s(t.headerData.leftText))])])]):t._e(),a("div",{staticClass:"nav-bar-title"},[t._v(t._s(t.headerData.title))]),a("div",{staticClass:"nav-bar-right"},[t.headerData.rightText?a("div",{staticClass:"nav-bar-txt",on:{click:function(e){return t.handelClick(t.headerData.rightUrl,t.headerData.rightCallBackClick)}}},[t._v(t._s(t.headerData.rightText))]):t._e(),t.headerData.showSearch?a("i",{staticClass:"iconfont iconsousuo",on:{click:function(e){return t.searchClick()}}}):t._e()])])},o=[],i={name:"HeaderBar",props:{headerData:{type:null,required:!0}},data:function(){return{}},created:function(){this.headerData&&(this.headerData.rightCallBackClick||(this.headerData.rightCallBackClick=!1))},methods:{searchClick:function(){this.$bus.$emit("showMeun",!0)},handelClick:function(t,e){if(console.log("targetUrl=====================",t),"back"!==t)if("needConfirm"!==t){if(t)this.$router.push(t);else if(e){var a="callback";this.headerData&&this.headerData.rightText&&(a=this.headerData.rightText),this.$emit("callbackClick",a)}}else this.$emit("on-exit");else this.$router.go(-1)}}},r=i,c=a("2877"),s=Object(c["a"])(r,n,o,!1,null,"416ac0a2",null);e["a"]=s.exports},"510f":function(t,e,a){"use strict";a.d(e,"d",(function(){return c})),a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return l}));a("a4d3"),a("4de4"),a("c975"),a("a434"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("159b");var n=a("ade3"),o=a("2f62");function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var c={mounted:function(){},data:function(){return{}},methods:{goPage:function(t,e){this.$store.dispatch("router/setPageParams",e),this.$router.push({name:t,params:{keyName:e}})},getParams:function(){return this.$store.state.router.pageParams}},beforeRouteEnter:function(t,e,a){a((function(e){if("MhHome"!==t.name&&"MallHome"!==t.name){var a=e.$store.state.router.keepAlive,n=a.indexOf(t.name);-1===n&&a.push(t.name),e.$store.commit("router/SET_KEEP_ALIVE",a)}else e.$store.commit("router/SET_KEEP_ALIVE",[]);console.log("PageRoute=进入页面==",a)}))},beforeRouteLeave:function(t,e,a){var n=[];if(n=this.$store.state.router.keepAlive,"GysXmbm"===e.name){var o=n.indexOf(e.name);n.splice(o,1)}var i=n.indexOf(e.name),r=n.indexOf(t.name);-1!==r&&n.splice(i,1);for(var c=[],s=0;s<this.$store.state.router.footMeun.length;s++)c.push(this.$store.state.router.footMeun[s].component);var l=c.indexOf(e.name),d=c.indexOf(t.name);-1!==l&&-1!==d&&n.splice(i,1),console.log("PageRoute=退出页面======================",n),this.$store.commit("router/SET_KEEP_ALIVE",n),a()}},s={mounted:function(){var t=this;window["showSoftKeyBoard"]=function(e){console.info("showSoftKeyBoard-----",e),t.Native_ShowSoftKeyBoard=e},window["getRotuerPage"]=function(e){return t.$store.state.router.keepAlive},window["updateScanData"]=function(e){console.info("updateScan======",e),t.Native_ScanData=e},window["updateHandImage"]=function(e){t.Native_PhoneImageData=e}},data:function(){return{Native_ShowSoftKeyBoard:"",Native_ScanData:{},Native_PhoneImageData:{},Native_CaLoad:"",Native_CaList:{}}},computed:{},methods:{NativeLoadCA:function(){var t=this;try{this.Native_CaLoad=window.myapp.LoadCA(),console.info("NativeLoadCA======",window.myapp.LoadCA())}catch(e){console.log(e)}this.$bridge.callhandler("LoadCA","{page:1}",(function(e){var a=JSON.parse(e);console.log("goScanView------",e),t.Native_CaLoad=a}))},NativeGetAllCAInfo:function(){try{console.info("NativeGetAllCAInfo======",window.myapp.getAllCAInfo());var t=window.myapp.getAllCAInfo();this.Native_CaList=JSON.parse(t)}catch(e){console.log(e)}this.$bridge.callhandler("getAllCAInfo",(function(t){}))},NativeGetOnelCAInfo:function(t){try{console.info("NativeGetAllCAInfo======",window.myapp.getOneCAInfo())}catch(e){console.log(e)}this.$bridge.callhandler("getOneCAInfo",t,(function(t){}))},NativeChangePin:function(t){try{window.myapp.changePin(t)}catch(e){console.log(e)}this.$bridge.callhandler("changePin",t,(function(t){}))},NativeEnvelopeDecrypt:function(t){try{window.myapp.envelopeDecrypt(t)}catch(e){console.log(e)}this.$bridge.callhandler("envelopeDecrypt",t,(function(t){}))},NativeEnvelopeEncrypt:function(t){try{window.myapp.envelopeEncrypt(t)}catch(e){console.log(e)}this.$bridge.callhandler("envelopeEncrypt",t,(function(t){}))}}},l={mounted:function(){var t=this;window["getRotuerPage"]=function(e){return t.$store.state.router.keepAlive},window["updateScanData"]=function(e){console.info("updateScan======",e),t.Native_ScanData=e},window["updateHandImage"]=function(e){t.Native_PhoneImageData=e}},data:function(){return{Native_ScanData:{},Native_PhoneImageData:{}}},computed:{},methods:{NativeAddPush:function(t){try{window.myapp.addPush(t)}catch(e){console.log(e)}this.$bridge.callhandler("addPush",t,(function(t){}))},NativeDissPush:function(){try{window.myapp.dissPush()}catch(t){console.log(t)}this.$bridge.callhandler("dissPush",(function(t){}))},NativeDissDialog:function(){try{window.myapp.dissDialog()}catch(t){console.log(t)}this.$bridge.callhandler("dissDialog",(function(t){}))},NativeLoginAction:function(t){try{window.myapp.loginAction(t)}catch(e){console.log(e)}this.$bridge.callhandler("loginAction",t,(function(t){}))},NativeCheakUpdate:function(){try{window.myapp.cheakUpdate()}catch(t){console.log(t)}this.$bridge.callhandler("cheakUpdate",(function(t){}))},NativeGetLjSize:function(){try{window.myapp.getlj()}catch(t){console.log(t)}this.$bridge.callhandler("getlj",(function(t){}))},NativeCleanLj:function(){try{window.myapp.cleanlj()}catch(t){console.log(t)}this.$bridge.callhandler("cleanlj",(function(t){}))},NativeDownFiles:function(t){try{window.myapp.downloadFile(t)}catch(e){console.log(e)}this.$bridge.callhandler("downloadFile",String(t),(function(t){}))},NativeScan:function(){var t=this;try{window.myapp.goScanView()}catch(e){console.log(e)}this.$bridge.callhandler("goScanView","{page:1}",(function(e){var a=JSON.parse(e);console.log("goScanView------",e),t.Native_ScanData=a}))},NativePhone:function(t){var e=this;try{window.myapp.goIDCards(t)}catch(a){console.log(a)}this.$bridge.callhandler("goIDCards",t,(function(t){var a=JSON.parse(t);console.log("goIDCards------",a),e.Native_PhoneImageData=a}))},NativeHandSing:function(){var t=this;try{window.myapp.goHandWriteView()}catch(e){console.log(e)}this.$bridge.callhandler("goHandWriteView",(function(e){t.Native_PhoneImageData=e}))},NativeCallPhone:function(t){try{window.myapp.call(t)}catch(e){console.log(e)}this.$bridge.callhandler("call",t,(function(t){}))},NativeUpdateImage:function(){try{window.myapp.CameraOrImage()}catch(t){console.log(t)}this.$bridge.callhandler("CameraOrImage",(function(t){}))}}};r({onQueryChange:function(t){this.query=t},blurInput:function(){this.$refs.searchBox.blur()},addQuery:function(t){this.$refs.searchBox.setQuery(t)},saveSearch:function(){this.updateHostorList(this.query)}},Object(o["b"])(["updateHostorList","deleteSearchHistory"])),r({wybmAction:function(){this.wybmfbAction()}},Object(o["b"])(["wybmfbAction"]))},b178:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("headerBar",{attrs:{"header-data":t.headerData}}),a("div",{staticClass:"container"},[a("div",{staticClass:"common-main box"},[a("iframe",{staticClass:"iframe-gonggao",attrs:{src:t.urlData,scrolling:"yes",frameborder:"0"}})])])],1)},o=[],i=(a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),r=a("445c"),c=a("510f"),s=a("2f62");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u={name:"GrzxSysm",components:{headerBar:r["a"]},mixins:[c["d"]],data:function(){return{headerData:{title:"使用说明",leftUrl:"back",leftText:" "},urlData:""}},computed:d({},Object(s["d"])({userInfo:function(t){return t.mh.mhUserInfo}})),created:function(){5===this.userInfo.zzxz?this.urlData="http://www.china-tender.com.cn/appjbr.jhtml":4===this.userInfo.zzxz?this.urlData="http://www.china-tender.com.cn/appzj.jhtml":this.urlData="http://www.china-tender.com.cn/appgys.jhtml"}},h=u,f=(a("3afa"),a("2877")),p=Object(f["a"])(h,n,o,!1,null,"d478821a",null);e["default"]=p.exports},f066:function(t,e,a){}}]);
//# sourceMappingURL=GrzxSysm.9e070b19.js.map