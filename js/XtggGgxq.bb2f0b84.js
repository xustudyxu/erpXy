(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["XtggGgxq","WdxmBj"],{"445c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"nav-bar"},[t.headerData.leftText?a("div",{staticClass:"nav-bar-left"},[a("div",{on:{click:function(e){return e.stopPropagation(),t.handelClick(t.headerData.leftUrl)}}},[a("i",{staticClass:"iconfont iconicon-back"}),a("div",{staticClass:"nav-bar-txt"},[t._v(t._s(t.headerData.leftText))])])]):t._e(),a("div",{staticClass:"nav-bar-title"},[t._v(t._s(t.headerData.title))]),a("div",{staticClass:"nav-bar-right"},[t.headerData.rightText?a("div",{staticClass:"nav-bar-txt",on:{click:function(e){return t.handelClick(t.headerData.rightUrl,t.headerData.rightCallBackClick)}}},[t._v(t._s(t.headerData.rightText))]):t._e(),t.headerData.showSearch?a("i",{staticClass:"iconfont iconsousuo",on:{click:function(e){return t.searchClick()}}}):t._e()])])},i=[],o={name:"HeaderBar",props:{headerData:{type:null,required:!0}},data:function(){return{}},created:function(){this.headerData&&(this.headerData.rightCallBackClick||(this.headerData.rightCallBackClick=!1))},methods:{searchClick:function(){this.$bus.$emit("showMeun",!0)},handelClick:function(t,e){if(console.log("targetUrl=====================",t),"back"!==t)if("needConfirm"!==t){if(t)this.$router.push(t);else if(e){var a="callback";this.headerData&&this.headerData.rightText&&(a=this.headerData.rightText),this.$emit("callbackClick",a)}}else this.$emit("on-exit");else this.$router.go(-1)}}},c=o,r=a("2877"),s=Object(r["a"])(c,n,i,!1,null,"416ac0a2",null);e["a"]=s.exports},"4abd":function(t,e,a){"use strict";var n={NOLOGIN:-1,NOMORE:0,NODATA:1,NONET:2,NOAPACHE:3},i={1:"货物",2:"工程",3:"服务"},o={1:"初始化",2:"已发布",3:"撤回"},c={0:"否",1:"是"},r={1:"男",2:"女",0:"未知性别",9:"未说明的性别"},s={0:"初始化",5:"项目立项",15:"项目组织中",20:"已公告",22:"已发布",25:"开标中",27:"第一次开标完成",30:"开标完成",35:"评审中",40:"评标结束",45:"已评审公示",50:"已定标",55:"已结果公告",65:"项目完成"},l={"00380002":"公开招标","00380003":"邀请招标","00380020":"政府采购-竞争性谈判","00380024":"政府采购-竞争性磋商","00380005":"政府采购-询价","00380011":"政府采购-单一来源","00380004":"企采-谈判","00380018":"企采-询比","00380012":"企采-竞价","00380006":"企采-直接采购","00380007":"其他","00380008":"协议供货","00380010":"定点采购","00380013":"土地拍卖","00380014":"土地挂牌","00380015":"电商竞价","00380026":"招标转议标","00380022":"招标转议标","00380021":"非在线采购","00380023":"非在线采购(框架采购)","00380009":"方案评审"},d={1:"今",2:"昨",3:"前",4:"更"},u={1:"运维",2:"外部招标代理机构",3:"供应商",4:"评审专家",5:"采购主体",8:"采购人",9:"安全认证供应商",10:"监标人",99:"信源运维"},h=[{title_en:"cc",title:"出差"},{title_en:"bs",title:"市内办事"},{title_en:"wc",title:"因私外出"},{title_en:"jjbg",title:"居家办公"}],f={"":"请选择考勤状态",wzt:"请选择考勤状态",cc:"出差",bs:"市内办事",qj:"请假",tx:"调休",wc:"因私外出","cd<20":"迟到<20","cd>20":"迟到>20",qq:"缺勤",nj:"年假",dk:"上班打卡",zc:"正常上班",cl:"迟到<20",cg:"迟到>20",qjspz:"请假审批中",jjbg:"居家办公"},p=[{title_en:"cc",title:"出差"},{title_en:"bs",title:"市内办事"},{title_en:"wc",title:"因私外出"},{title_en:"zc",title:"上班打卡"},{title_en:"jjbg",title:"居家办公"}],g=[{title_en:"cc",title:"出差"},{title_en:"bs",title:"市内办事"},{title_en:"wc",title:"因私外出"},{title_en:"zc",title:"上班打卡"},{title_en:"jjbg",title:"居家办公"}];e["a"]={XMZT:s,SFTYYQ:c,CGFS:l,XMLX:i,TimeDay:d,pageStyle:n,XTGGZT:o,XB:r,ZZXZ:u,QdShareDataList:f,QdAmData_zc:h,QdAmData_dzwl:p,QdPmData:g}},"510f":function(t,e,a){"use strict";a.d(e,"d",(function(){return r})),a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return l}));a("a4d3"),a("4de4"),a("c975"),a("a434"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("159b");var n=a("ade3"),i=a("2f62");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var r={mounted:function(){},data:function(){return{}},methods:{goPage:function(t,e){this.$store.dispatch("router/setPageParams",e),this.$router.push({name:t,params:{keyName:e}})},getParams:function(){return this.$store.state.router.pageParams}},beforeRouteEnter:function(t,e,a){a((function(e){if("MhHome"!==t.name&&"MallHome"!==t.name){var a=e.$store.state.router.keepAlive,n=a.indexOf(t.name);-1===n&&a.push(t.name),e.$store.commit("router/SET_KEEP_ALIVE",a)}else e.$store.commit("router/SET_KEEP_ALIVE",[]);console.log("PageRoute=进入页面==",a)}))},beforeRouteLeave:function(t,e,a){var n=[];if(n=this.$store.state.router.keepAlive,"GysXmbm"===e.name){var i=n.indexOf(e.name);n.splice(i,1)}var o=n.indexOf(e.name),c=n.indexOf(t.name);-1!==c&&n.splice(o,1);for(var r=[],s=0;s<this.$store.state.router.footMeun.length;s++)r.push(this.$store.state.router.footMeun[s].component);var l=r.indexOf(e.name),d=r.indexOf(t.name);-1!==l&&-1!==d&&n.splice(o,1),console.log("PageRoute=退出页面======================",n),this.$store.commit("router/SET_KEEP_ALIVE",n),a()}},s={mounted:function(){var t=this;window["showSoftKeyBoard"]=function(e){console.info("showSoftKeyBoard-----",e),t.Native_ShowSoftKeyBoard=e},window["getRotuerPage"]=function(e){return t.$store.state.router.keepAlive},window["updateScanData"]=function(e){console.info("updateScan======",e),t.Native_ScanData=e},window["updateHandImage"]=function(e){t.Native_PhoneImageData=e}},data:function(){return{Native_ShowSoftKeyBoard:"",Native_ScanData:{},Native_PhoneImageData:{},Native_CaLoad:"",Native_CaList:{}}},computed:{},methods:{NativeLoadCA:function(){var t=this;try{this.Native_CaLoad=window.myapp.LoadCA(),console.info("NativeLoadCA======",window.myapp.LoadCA())}catch(e){console.log(e)}this.$bridge.callhandler("LoadCA","{page:1}",(function(e){var a=JSON.parse(e);console.log("goScanView------",e),t.Native_CaLoad=a}))},NativeGetAllCAInfo:function(){try{console.info("NativeGetAllCAInfo======",window.myapp.getAllCAInfo());var t=window.myapp.getAllCAInfo();this.Native_CaList=JSON.parse(t)}catch(e){console.log(e)}this.$bridge.callhandler("getAllCAInfo",(function(t){}))},NativeGetOnelCAInfo:function(t){try{console.info("NativeGetAllCAInfo======",window.myapp.getOneCAInfo())}catch(e){console.log(e)}this.$bridge.callhandler("getOneCAInfo",t,(function(t){}))},NativeChangePin:function(t){try{window.myapp.changePin(t)}catch(e){console.log(e)}this.$bridge.callhandler("changePin",t,(function(t){}))},NativeEnvelopeDecrypt:function(t){try{window.myapp.envelopeDecrypt(t)}catch(e){console.log(e)}this.$bridge.callhandler("envelopeDecrypt",t,(function(t){}))},NativeEnvelopeEncrypt:function(t){try{window.myapp.envelopeEncrypt(t)}catch(e){console.log(e)}this.$bridge.callhandler("envelopeEncrypt",t,(function(t){}))}}},l={mounted:function(){var t=this;window["getRotuerPage"]=function(e){return t.$store.state.router.keepAlive},window["updateScanData"]=function(e){console.info("updateScan======",e),t.Native_ScanData=e},window["updateHandImage"]=function(e){t.Native_PhoneImageData=e}},data:function(){return{Native_ScanData:{},Native_PhoneImageData:{}}},computed:{},methods:{NativeAddPush:function(t){try{window.myapp.addPush(t)}catch(e){console.log(e)}this.$bridge.callhandler("addPush",t,(function(t){}))},NativeDissPush:function(){try{window.myapp.dissPush()}catch(t){console.log(t)}this.$bridge.callhandler("dissPush",(function(t){}))},NativeDissDialog:function(){try{window.myapp.dissDialog()}catch(t){console.log(t)}this.$bridge.callhandler("dissDialog",(function(t){}))},NativeLoginAction:function(t){try{window.myapp.loginAction(t)}catch(e){console.log(e)}this.$bridge.callhandler("loginAction",t,(function(t){}))},NativeCheakUpdate:function(){try{window.myapp.cheakUpdate()}catch(t){console.log(t)}this.$bridge.callhandler("cheakUpdate",(function(t){}))},NativeGetLjSize:function(){try{window.myapp.getlj()}catch(t){console.log(t)}this.$bridge.callhandler("getlj",(function(t){}))},NativeCleanLj:function(){try{window.myapp.cleanlj()}catch(t){console.log(t)}this.$bridge.callhandler("cleanlj",(function(t){}))},NativeDownFiles:function(t){try{window.myapp.downloadFile(t)}catch(e){console.log(e)}this.$bridge.callhandler("downloadFile",String(t),(function(t){}))},NativeScan:function(){var t=this;try{window.myapp.goScanView()}catch(e){console.log(e)}this.$bridge.callhandler("goScanView","{page:1}",(function(e){var a=JSON.parse(e);console.log("goScanView------",e),t.Native_ScanData=a}))},NativePhone:function(t){var e=this;try{window.myapp.goIDCards(t)}catch(a){console.log(a)}this.$bridge.callhandler("goIDCards",t,(function(t){var a=JSON.parse(t);console.log("goIDCards------",a),e.Native_PhoneImageData=a}))},NativeHandSing:function(){var t=this;try{window.myapp.goHandWriteView()}catch(e){console.log(e)}this.$bridge.callhandler("goHandWriteView",(function(e){t.Native_PhoneImageData=e}))},NativeCallPhone:function(t){try{window.myapp.call(t)}catch(e){console.log(e)}this.$bridge.callhandler("call",t,(function(t){}))},NativeUpdateImage:function(){try{window.myapp.CameraOrImage()}catch(t){console.log(t)}this.$bridge.callhandler("CameraOrImage",(function(t){}))}}};c({onQueryChange:function(t){this.query=t},blurInput:function(){this.$refs.searchBox.blur()},addQuery:function(t){this.$refs.searchBox.setQuery(t)},saveSearch:function(){this.updateHostorList(this.query)}},Object(i["b"])(["updateHostorList","deleteSearchHistory"])),c({wybmAction:function(){this.wybmfbAction()}},Object(i["b"])(["wybmfbAction"]))},"651f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.showTop,expression:"showTop"}],staticClass:"scrollTop",on:{click:t.toTop}},[t._m(0)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aside-icon"},[a("i",{staticClass:"iconfont iconfanhuidingbu"})])}],o={name:"ScrollTop",data:function(){return{scrollTop:0,time:0,dParams:20,scrollState:0}},computed:{showTop:function(){var t=this.scrollTop>300;return t}},mounted:function(){window.addEventListener("scroll",this.getScrollTop)},methods:{toTop:function(t){if(!this.scrollState){this.scrollState=1,t.preventDefault();var e=document.documentElement.scrollTop||document.body.scrollTop;console.log("dis---------------------------------",e);var a=this;this.time=setInterval((function(){a.gotoTop(a.scrollTop-a.dParams)}),10)}},gotoTop:function(t){this.dParams+=20,t=t>0?t:0,document.documentElement.scrollTop=t,document.body.scrollTop=t,this.scrollTop<10&&(clearInterval(this.time),this.dParams=20,this.scrollState=0)},getScrollTop:function(){this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}}},c=o,r=a("2877"),s=Object(r["a"])(c,n,i,!1,null,"4a569401",null);e["a"]=s.exports},c324:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("headerBar",{attrs:{"header-data":t.headerData}}),a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[a("div",{staticClass:"common-main box"},[a("div",{staticClass:"notice-title"},[t._v(t._s(t.ggxq.bt))]),a("div",{staticClass:"notice-date"},[a("span",[a("i",{staticClass:"iconfont iconjingbanren"}),t._v(" "+t._s(t.ggxq.fbrxm)+" ")]),a("span",[a("i",{staticClass:"iconfont iconshijian"}),t._v(" "+t._s(t._f("formatTime12")(t.ggxq.fbsj))+" ")])]),a("div",{staticClass:"notice-content"},[a("div",{domProps:{innerHTML:t._s(t.ggxq.nr)}})])])]),a("div",{staticClass:"content"},[a("div",{staticClass:"common-main box"},[t._m(0),a("div",{staticClass:"attachment-list"},t._l(t.ggxq.ggfjArr,(function(e,n){return a("dl",{key:n},[t._m(1,!0),a("dd",{on:{click:function(a){return t.loadFiles(e.xzlj)}}},[t._v(t._s(e.fjmc))])])})),0)])])]),a("Backtop")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("div",{staticClass:"title-left"},[a("h2",[t._v("附件列表")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dt",[a("i",{staticClass:"iconfont iconfujian"})])}],o=(a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),c=a("4abd"),r=a("8b55"),s=a("2f62"),l=a("510f"),d=a("445c"),u=a("651f");function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={name:"XtggGgxq",components:{headerBar:d["a"],Backtop:u["a"]},mixins:[l["d"],l["b"]],data:function(){return{headerData:{title:"公告详情",leftUrl:"back",leftText:" "},wybmListItem:{},status:{isShowPublish:!1,topNum:30},ggxq:"",id:""}},computed:f({},Object(s["d"])({})),created:function(){this.id=this.$route.params.id,this.XTGGZT=c["a"].XTGGZT,this.getGgxq()},methods:f({loadFiles:function(t){this.NativeDownFiles(t)},getGgxq:function(){var t=this;this.$store.dispatch("erp/getXtggByIdAction",{id:this.id}).then((function(e){t.ggxq=e})).catch((function(e){t.$toast(e)}))}},Object(s["b"])([]),{getTime:function(t){var e=Object(r["b"])(t);return e},closeDialog:function(){null!==this.gysyqk&&0!==this.gysyqk?this.status.isShowPublish=!1:this.$toast.fail("暂无数据！")}})},g=p,m=a("2877"),v=Object(m["a"])(g,n,i,!1,null,"ee2bdaaa",null);e["default"]=v.exports}}]);
//# sourceMappingURL=XtggGgxq.bb2f0b84.js.map