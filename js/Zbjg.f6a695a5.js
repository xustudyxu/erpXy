(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Zbjg","WdxmBj"],{"510f":function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return l}));n("a4d3"),n("4de4"),n("c975"),n("a434"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("159b");var o=n("ade3"),a=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var r={mounted:function(){},data:function(){return{}},methods:{goPage:function(t,e){this.$store.dispatch("router/setPageParams",e),this.$router.push({name:t,params:{keyName:e}})},getParams:function(){return this.$store.state.router.pageParams}},beforeRouteEnter:function(t,e,n){n((function(e){if("MhHome"!==t.name&&"MallHome"!==t.name){var n=e.$store.state.router.keepAlive,o=n.indexOf(t.name);-1===o&&n.push(t.name),e.$store.commit("router/SET_KEEP_ALIVE",n)}else e.$store.commit("router/SET_KEEP_ALIVE",[]);console.log("PageRoute=进入页面==",n)}))},beforeRouteLeave:function(t,e,n){var o=[];if(o=this.$store.state.router.keepAlive,"GysXmbm"===e.name){var a=o.indexOf(e.name);o.splice(a,1)}var i=o.indexOf(e.name),c=o.indexOf(t.name);-1!==c&&o.splice(i,1);for(var r=[],s=0;s<this.$store.state.router.footMeun.length;s++)r.push(this.$store.state.router.footMeun[s].component);var l=r.indexOf(e.name),u=r.indexOf(t.name);-1!==l&&-1!==u&&o.splice(i,1),console.log("PageRoute=退出页面======================",o),this.$store.commit("router/SET_KEEP_ALIVE",o),n()}},s={mounted:function(){var t=this;window["showSoftKeyBoard"]=function(e){console.info("showSoftKeyBoard-----",e),t.Native_ShowSoftKeyBoard=e},window["getRotuerPage"]=function(e){return t.$store.state.router.keepAlive},window["updateScanData"]=function(e){console.info("updateScan======",e),t.Native_ScanData=e},window["updateHandImage"]=function(e){t.Native_PhoneImageData=e}},data:function(){return{Native_ShowSoftKeyBoard:"",Native_ScanData:{},Native_PhoneImageData:{},Native_CaLoad:"",Native_CaList:{}}},computed:{},methods:{NativeLoadCA:function(){var t=this;try{this.Native_CaLoad=window.myapp.LoadCA(),console.info("NativeLoadCA======",window.myapp.LoadCA())}catch(e){console.log(e)}this.$bridge.callhandler("LoadCA","{page:1}",(function(e){var n=JSON.parse(e);console.log("goScanView------",e),t.Native_CaLoad=n}))},NativeGetAllCAInfo:function(){try{console.info("NativeGetAllCAInfo======",window.myapp.getAllCAInfo());var t=window.myapp.getAllCAInfo();this.Native_CaList=JSON.parse(t)}catch(e){console.log(e)}this.$bridge.callhandler("getAllCAInfo",(function(t){}))},NativeGetOnelCAInfo:function(t){try{console.info("NativeGetAllCAInfo======",window.myapp.getOneCAInfo())}catch(e){console.log(e)}this.$bridge.callhandler("getOneCAInfo",t,(function(t){}))},NativeChangePin:function(t){try{window.myapp.changePin(t)}catch(e){console.log(e)}this.$bridge.callhandler("changePin",t,(function(t){}))},NativeEnvelopeDecrypt:function(t){try{window.myapp.envelopeDecrypt(t)}catch(e){console.log(e)}this.$bridge.callhandler("envelopeDecrypt",t,(function(t){}))},NativeEnvelopeEncrypt:function(t){try{window.myapp.envelopeEncrypt(t)}catch(e){console.log(e)}this.$bridge.callhandler("envelopeEncrypt",t,(function(t){}))}}},l={mounted:function(){var t=this;window["getRotuerPage"]=function(e){return t.$store.state.router.keepAlive},window["updateScanData"]=function(e){console.info("updateScan======",e),t.Native_ScanData=e},window["updateHandImage"]=function(e){t.Native_PhoneImageData=e}},data:function(){return{Native_ScanData:{},Native_PhoneImageData:{}}},computed:{},methods:{NativeAddPush:function(t){try{window.myapp.addPush(t)}catch(e){console.log(e)}this.$bridge.callhandler("addPush",t,(function(t){}))},NativeDissPush:function(){try{window.myapp.dissPush()}catch(t){console.log(t)}this.$bridge.callhandler("dissPush",(function(t){}))},NativeDissDialog:function(){try{window.myapp.dissDialog()}catch(t){console.log(t)}this.$bridge.callhandler("dissDialog",(function(t){}))},NativeLoginAction:function(t){try{window.myapp.loginAction(t)}catch(e){console.log(e)}this.$bridge.callhandler("loginAction",t,(function(t){}))},NativeCheakUpdate:function(){try{window.myapp.cheakUpdate()}catch(t){console.log(t)}this.$bridge.callhandler("cheakUpdate",(function(t){}))},NativeGetLjSize:function(){try{window.myapp.getlj()}catch(t){console.log(t)}this.$bridge.callhandler("getlj",(function(t){}))},NativeCleanLj:function(){try{window.myapp.cleanlj()}catch(t){console.log(t)}this.$bridge.callhandler("cleanlj",(function(t){}))},NativeDownFiles:function(t){try{window.myapp.downloadFile(t)}catch(e){console.log(e)}this.$bridge.callhandler("downloadFile",String(t),(function(t){}))},NativeScan:function(){var t=this;try{window.myapp.goScanView()}catch(e){console.log(e)}this.$bridge.callhandler("goScanView","{page:1}",(function(e){var n=JSON.parse(e);console.log("goScanView------",e),t.Native_ScanData=n}))},NativePhone:function(t){var e=this;try{window.myapp.goIDCards(t)}catch(n){console.log(n)}this.$bridge.callhandler("goIDCards",t,(function(t){var n=JSON.parse(t);console.log("goIDCards------",n),e.Native_PhoneImageData=n}))},NativeHandSing:function(){var t=this;try{window.myapp.goHandWriteView()}catch(e){console.log(e)}this.$bridge.callhandler("goHandWriteView",(function(e){t.Native_PhoneImageData=e}))},NativeCallPhone:function(t){try{window.myapp.call(t)}catch(e){console.log(e)}this.$bridge.callhandler("call",t,(function(t){}))},NativeUpdateImage:function(){try{window.myapp.CameraOrImage()}catch(t){console.log(t)}this.$bridge.callhandler("CameraOrImage",(function(t){}))}}};c({onQueryChange:function(t){this.query=t},blurInput:function(){this.$refs.searchBox.blur()},addQuery:function(t){this.$refs.searchBox.setQuery(t)},saveSearch:function(){this.updateHostorList(this.query)}},Object(a["b"])(["updateHostorList","deleteSearchHistory"])),c({wybmAction:function(){this.wybmfbAction()}},Object(a["b"])(["wybmfbAction"]))},"7df6":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"common-info"},[t.dataItem.title?n("div",{staticClass:"title title-page"},[n("div",{staticClass:"title-left"},[n("h2",[t._v(t._s(t.dataItem.title))])])]):t._e(),t._l(t.dataItem.data,(function(e,o){return n("div",{key:o,staticClass:"common-main box"},t._l(e,(function(e,a){return n("div",{key:a,staticClass:"page-list"},[0!==e.type?n("div",{staticClass:"pagelist-left"},[t._v(t._s(e.name))]):t._e(),1===e.type?n("div",{staticClass:"pagelist-right"},[t._v(t._s(e.value))]):2===e.type?n("div",{staticClass:"pagelist-right"},[t._v(t._s(t.getTime(e.value)))]):9===e.type||10===e.type||11===e.type||12===e.type?n("div",{staticClass:"pagelist-right  "},[""!==e.files&&null!==e.files?n("div",t._l(e.values,(function(a,i){return n("ul",{key:i},[n("li",{on:{click:function(n){return t.loadFiles(a,e.files[o])}}},[n("i",{staticClass:"iconfont iconxiazai"}),t._v(" "+t._s(a)+" ")])])})),0):t._e()]):t._e()])})),0)})),t.dataItem.totalpageno>1&&t.showMore?n("div",{staticClass:"page-more",on:{click:function(e){return t.goMore(t.dataItem)}}},[t._v(" 查看更多信息 "),n("i",{staticClass:"iconfont iconarrowright"})]):t._e()],2)},a=[],i=n("510f"),c=n("8b55"),r={components:{},mixins:[i["b"]],props:{dataItem:{type:null,required:!0},showMore:{type:null,required:!0}},data:function(){return{}},watch:{},created:function(){},mounted:function(){},methods:{getTime:function(t){var e=Object(c["b"])(t);return e},loadFiles:function(t,e){console.log("fjItem=====",t),console.log("url=====",e),this.NativeDownFiles(e)},goMore:function(t){this.$emit("goMoreAction",t)}}},s=r,l=n("2877"),u=Object(l["a"])(s,o,a,!1,null,null,null);e["a"]=u.exports},fc26:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.list,(function(e,o){return n("div",{key:o},[n("mouldsList",{attrs:{"data-item":e,"show-more":t.showMore},on:{goMoreAction:function(e){return t.MoreAction(e)}}})],1)})),0)},a=[],i=n("510f"),c=n("7df6"),r={name:"Zbjg",components:{mouldsList:c["a"]},mixins:[i["b"]],props:{appsrvurl:{type:null,default:""},xmid:{type:null,default:""},sfdlbb:{type:null,default:""}},data:function(){return{zzid:"",list:[],showMore:!1}},computed:{},created:function(){this.zzid=this.$store.state.mh.mhUserInfo.zzid,this.$store.state.gyswdxm.zbjg?this.list=this.$store.state.gyswdxm.zbjg:this.getJggg()},methods:{getJggg:function(){var t=this;this.$store.dispatch("gyswdxm/getGysJdxqAction",{xmid:this.xmid,zzid:this.zzid,appsrvurl:this.appsrvurl}).then((function(e){t.list=e,t.$store.commit("gyswdxm/SET_ZBJG",e)}))},loadFiles:function(t,e){console.log("fjItem=====",t),console.log("url=====",e),this.NativeDownFiles(e)},MoreAction:function(t){console.log("MoreAction======",t);var e=[];e.push(t.showmore),e.push(t.title),this.$router.push({name:"DbsxSjbqMore",params:{morexx:e}})}}},s=r,l=n("2877"),u=Object(l["a"])(s,o,a,!1,null,"368d715e",null);e["default"]=u.exports}}]);
//# sourceMappingURL=Zbjg.f6a695a5.js.map