(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["WddbXxxx","WdxmBj"],{"0898":function(t,e,i){"use strict";var n=i("20f6"),a=i.n(n);a.a},"20f6":function(t,e,i){},"2a66":function(t,e,i){},"3b1c":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"nav-bar-white"},[i("headerBar",{attrs:{"header-data":t.headerData}})],1),i("van-sticky",{attrs:{"offset-top":"0"}},[i("div",{staticClass:"fixed-project fit-project fixed-project-color"},[i("div",{staticClass:"list"},[i("h3",[t._v(t._s(t.dbxq.processName))]),i("div",{staticClass:"info"},[i("span",[i("i",{staticClass:"iconfont iconlianxiren"}),t._v(" "+t._s(t.dbxq.preUsers)+" ")]),i("span",[i("i",{staticClass:"iconfont iconshijian"}),t._v(" "+t._s(t.dbxq.showTime)+" ")]),i("span",[i("i",{staticClass:"iconfont iconshijian"}),t._v(" "+t._s(t.dbxq.taskName)+" ")])])])])]),t._l(t.tabs,(function(e){return i("div",{key:e.name,attrs:{title:e.name}},["lzrz"==e.appsrvurl?i("jbrlzrz",{attrs:{processid:t.dbxq.processId}}):i("jbrzbxx",{attrs:{appsrvurl:e.appsrvurl,bizid:t.dbxq.bizid,executorid:t.dbxq.executorid}})],1)})),t.lcButton.hasBtn?i("div",{staticClass:"foot-btn fixed"},[i("ul",[t.lcButton.backToPreBtn.isShow?i("li",[i("van-button",{attrs:{type:"info",round:"",plain:"",size:"large"},on:{click:function(e){return t.popupClick(0)}}},[t._v(t._s(t.lcButton.backToPreBtn.btnName))])],1):t._e(),t.lcButton.backBtn.isShow?i("li",[i("van-button",{attrs:{type:"info",round:"",plain:"",size:"large"},on:{click:function(e){return t.popupClick(2)}}},[t._v(t._s(t.lcButton.backBtn.btnName))])],1):t._e(),t.lcButton.submitBtn.isShow?i("li",[i("van-button",{attrs:{type:"info",round:"",size:"large "},on:{click:function(e){return t.popupClick(1)}}},[t._v(t._s(t.lcButton.submitBtn.btnName))])],1):t._e(),t.lcButton.hqBtn.isShow?i("li",[i("van-button",{attrs:{type:"info",round:"",size:"large "},on:{click:function(e){return t.popupClick(3,t.lcButton.hqBtn.btnName)}}},[t._v(t._s(t.lcButton.hqBtn.btnName))])],1):t._e()])]):t._e(),i("van-dialog",{attrs:{title:"校验信息"},model:{value:t.showCheck,callback:function(e){t.showCheck=e},expression:"showCheck"}},[i("div",{staticClass:"content"},[i("div",{staticClass:"check-title"},[t._v("您提交的信息有如下错误:")]),i("div",{staticClass:"check-message"},[i("ul",t._l(t.checkMsgs,(function(e,n){return i("div",{key:n},[i("li",{staticClass:"undone"},[t._v(t._s(e.jyx))])])})),0)])])])],2)},a=[],s=(i("a4d3"),i("4de4"),i("b0c0"),i("e439"),i("dbb4"),i("b64b"),i("159b"),i("ade3")),o=i("445c"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("div",{staticClass:"common-main box"},[t._l(t.homedata,(function(e,n){return i("div",{key:n,staticClass:"list"},[1===e[0]?i("div",[i("div",{staticClass:"title title-page"},[i("div",{staticClass:"title-left"},[i("h2",[t._v(t._s(e[1]))])])]),t._l(e[2],(function(e,n){return i("div",{key:n},[i("div",{staticClass:"page-list"},[i("div",{staticClass:"pagelist-left"},[t._v(t._s(e.name))]),1===e.type?i("div",{staticClass:"pagelist-right"},[t._v(t._s(e.value))]):9===e.type?i("div",{staticClass:"pagelist-right  "},[""!==e.file&&null!==e.file?i("div",{on:{click:function(i){return t.getFile(e.type,e.file,e.value)}}},[t._v(" "+t._s(e.value)+" ")]):i("div",t._l(e.values,(function(n,a){return i("ul",{key:a},[i("li",{on:{click:function(i){return t.getFiles(e.type,e.files[a])}}},[t._v(" "+t._s(n)+" ")])])})),0)]):i("div",{staticClass:"pagelist-right  blue"},[""!==e.file&&null!==e.file?i("div",{on:{click:function(i){return t.getFile(e.type,e.file,e.value)}}},[i("i",{staticClass:"iconfont iconxiazai"}),t._v(" "+t._s(e.value)+" ")]):i("div",t._l(e.values,(function(n,a){return i("ul",{key:a},[i("li",{on:{click:function(i){return t.getFiles(e.type,e.files[a],e.values[a])}}},[i("i",{staticClass:"iconfont iconxiazai"}),t._v(" "+t._s(n)+" ")])])})),0)])])])}))],2):i("div",[i("div",{staticClass:"seg-line"}),t._l(e[2],(function(n,a){return i("div",{key:a},[0==a?i("div",{staticClass:"title title-page"},[i("div",{staticClass:"title-left"},[i("h2",[t._v(t._s(e[1]))])])]):t._e(),t._l(n,(function(e,n){return i("div",{key:n,staticClass:"page-list"},[i("div",{staticClass:"pagelist-left"},[t._v(t._s(e.name))]),1===e.type?i("div",{staticClass:"pagelist-right"},[t._v(t._s(e.value))]):9===e.type?i("div",{staticClass:"pagelist-right  "},[""!==e.file&&null!==e.file?i("div",{on:{click:function(i){return t.getFile(e.type,e.file,e.value)}}},[t._v(" "+t._s(e.value)+" ")]):i("div",t._l(e.values,(function(n,a){return i("ul",{key:a},[i("li",{on:{click:function(i){return t.getFiles(e.type,e.files[a])}}},[t._v(" "+t._s(n)+" ")])])})),0)]):i("div",{staticClass:"pagelist-right  blue"},[""!==e.file&&null!==e.file?i("div",{on:{click:function(i){return t.getFile(e.type,e.file,e.value)}}},[i("i",{staticClass:"iconfont iconxiazai"}),t._v(" "+t._s(e.value)+" ")]):i("div",t._l(e.values,(function(n,a){return i("ul",{key:a},[i("li",{on:{click:function(i){return t.getFiles(e.type,e.files[a],e.values[a])}}},[i("i",{staticClass:"iconfont iconxiazai"}),t._v(" "+t._s(n)+" ")])])})),0)])])})),t._m(0,!0),i("div",{staticClass:"seg-line"})],2)}))],2)])})),i("div",{staticClass:"sub-space"})],2)])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-list"},[i("div",{staticClass:"pagelist-left"})])}],l=(i("baa5"),i("2f62"));function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var h={name:"One",components:{},props:{appsrvurl:{type:null,required:!0},executorid:{type:null,required:!0},bizid:{type:null,required:!0}},data:function(){return{ind:"",pageUrl:"",jbrzdxxPage:{pageStyles:1,pageTitle:""},list:{items:[],error:!1,postUrl:"",reqData:"",dataName:"",noDataText:""},homedata:[],showMoreList:[],isLoading:!1,finished:!0,loading:!1}},computed:d({},Object(l["d"])({dbitem:function(t){return t.jbrdbsx.listItem}})),watch:{},mounted:function(){window.ScrollViewTrigger1=function(){}},created:function(){this.getzbxxData()},methods:d({},Object(l["c"])(["jbrdbsx/SET_XMXQ_MORE","jbrdbsx/SET_LOAD_MORE","jbrdbsx/SET_GO_PDF","jbrdbsx/SET_GO_IMG","jbrdbsx/SET_GO_HTML"]),{changeBgc:function(t){this.ind=t},getFile:function(t,e){10===t?window.location("/app/static/pdf/web/viewer.html?file="+e):11===t?this.SET_GO_IMG(e):12===t&&this.SET_GO_HTML(e)},getFilesType:function(t){var e=t.lastIndexOf("."),i=t.length,n=t.substring(e,i);return".pdf"===n||".html"===n||".jpg"===n||".png"===n||".jpg"===n||".jpeg"===n},getFiles:function(t,e,i){var n=i.lastIndexOf("."),a=i.length,s=i.substring(n,a);".pdf"===s?window.open("/app/static/pdf/web/viewer.html?file="+e):".jpg"===s||".png"===s||".jpeg"===s?this.SET_GO_IMG(e):".html"===s?this.SET_GO_HTML(e):this.$toast.fail("暂不支持该附件类型")},goMore:function(t){var e=[];this.showMoreList[t].length>0?(e.push(this.showMoreList[t]),e.push(this.homedata[t-1].title),this.$emit("goXmxqMore",null)):this.$toast("暂无更新信息")},onLoad:function(){this.getzbxxData()},getzbxxData:function(){var t=this;console.log("wddbzbxx:",this.appsrvurl,this.bizid,this.executorid),this.$store.dispatch("jbrdbsx/getjbrZbxxAction",{url:this.appsrvurl,bizid:this.bizid,executorid:this.executorid}).then((function(e){for(var i=[],n=0;n<e.length;n++){var a=[];if(1===e[n].type){for(var s=0;s<e[n].data.length;s++)0===s&&(i.push(1),i.push(e[n].title),t.showMoreList.push("")),a.push(e[n].data[s]);i.push(a),t.homedata.push(i)}else if(2===e[n].type){var o=[],r=[];if(e[n].data.length>0){for(var c=0;c<e[n].data.length;c++)0===c&&(o.push(2),o.push(e[n].title),t.showMoreList.push(e[n].showmore)),r.push(e[n].data[c]);o.push(r),t.homedata.push(o)}}}})).catch((function(e){t.$toast(e)}))}})},f=h,p=(i("6b01"),i("2877")),g=Object(p["a"])(f,r,c,!1,null,"11f0629a",null),b=g.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("div",{staticClass:"common-main box"},[t._m(0),i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("div",{staticClass:"vertical-container-sprz"},[i("div",{staticClass:"vertical-timeline-block lcsp-done"},[i("div",{staticClass:"vertical-timeline-icon"}),i("div",{staticClass:"vertical-timeline-content"},[i("h4",[t._v("开始")])])]),t._l(t.loglist,(function(e,n){return i("div",{key:n,staticClass:"vertical-timeline-block ",class:t.getStatus(e.status)},[i("div",{staticClass:"vertical-timeline-icon"},[i("i",{staticClass:"iconfont iconduihao"})]),i("div",{staticClass:"vertical-timeline-content"},[i("h4",[t._v(" "+t._s(e.taskName)+" "),2==e.status?i("van-tag",{attrs:{plain:"",type:"primary"}},[t._v("进行中")]):3==e.status&&2==e.backStatus?i("van-tag",{attrs:{plain:"",type:"danger"}},[t._v("退回")]):3==e.status?i("van-tag",{attrs:{plain:"",type:"success"}},[t._v("已完成")]):t._e()],1),1!=e.status?i("div",{staticClass:"vertical-timeline-hide"},[i("p",[i("span",{staticClass:"sprz-name"},[t._v(" "+t._s(e.userName))]),i("span",{staticClass:"sprz-info"},[t._v(t._s(e.preDepts))])]),i("p",[i("span",{staticClass:"sprz-date"},[i("em",[t._v("送达时间")]),t._v(" "+t._s(t._f("formatTime14")(e.createTime))+" ")]),i("span",{staticClass:"sprz-date"},[i("em",[t._v("提交时间")]),t._v(" "+t._s(t._f("formatTime14")(e.submitTime)))])]),i("div",{staticClass:"text-detail"},[i("span",{staticClass:"sprz-title"},[t._v(t._s(e.taskCommentLabel)+"：")]),t._v(t._s(e.taskComment)+" ")])]):t._e()])])})),i("div",{staticClass:"vertical-timeline-block lcsp-undone"},[i("div",{staticClass:"vertical-timeline-icon"}),i("div",{staticClass:"vertical-timeline-content"},[i("h4",[t._v("结束")])])])],2),i("div",{staticClass:"common-space"})])],1)])},m=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("div",{staticClass:"title-left"},[i("h2",[t._v("流转日志")])])])}],_=(i("99af"),i("4abd"));function y(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function x(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?y(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var w={name:"One",components:{},props:{zxrid:{type:String,default:""},processid:{type:String,default:""}},data:function(){return{ind:"",loglist:[],loading:!1,finished:!1,jbrdballPage:{pageStyles:0,pageTitle:""}}},computed:x({},Object(l["d"])({userInfo:function(t){return t.user.userInfo}})),created:function(){this.XMZT=_["a"].XMZT,this.CGFS=_["a"].CGFS,this.TimeDay=_["a"].TimeDay,this.pageno=1},methods:{changeBgc:function(t){this.ind=t},getStatus:function(t){switch(t){case 1:return"lcsp-undone";case 2:return"lcsp-done lcsp-current";case 3:return"lcsp-done"}},onLoad:function(){var t=this;this.$store.dispatch("jbrdbsx/getlzrzlistActions",{pageno:this.pageno,id:this.processid,query:""}).then((function(e){t.pageno=e.pageno,t.totalpageno=e.totalpageno,0===e.totalpageno?(t.jbrdballPage.pageStyles=1,t.finished=!0):1===t.pageno?null!=e.data&&""!==e.data&&(t.loglist=[],t.loglist=e.data):null!=e.data&&""!==e.data&&(t.loglist=t.loglist.concat(e.data)),e.totalpageno<=e.pageno&&(t.finished=!0)})).catch((function(e){t.jbrdballPage.pageStyles=2,console.log("error=====",e)}))}}},O=w,j=(i("0898"),Object(p["a"])(O,v,m,!1,null,"09b82d82",null)),C=j.exports,k=i("251e"),S=i("2241"),P=i("510f");function D(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function $(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?D(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):D(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var N={name:"WddbXxxx",components:{headerBar:o["a"],jbrzbxx:b,jbrlzrz:C},mixins:[P["d"]],data:function(){return{headerData:{title:"",leftUrl:"back",leftText:" "},tabs:[],active:0,dbxq:{},lcButton:{},checkMsgs:[],showCheck:!1}},computed:$({},Object(l["d"])({txBizid:function(t){return t.jbrdbsx.txBizid},goXmxqMore:function(t){return t.jbrdbsx.goXmxqMore},goPdf:function(t){return t.jbrdbsx.goPdf},goImages:function(t){return t.jbrdbsx.goImages},goHtml:function(t){return t.jbrdbsx.goHtml},userInfo:function(t){return t.mh.mhUserInfo}})),watch:{goXmxqMore:function(t){"1"===t&&this.$router.push({name:"sjbqmore"})},goPdf:function(t){""!==t&&(this.SET_GO_PDF(""),this.$router.push({name:"pdf",params:{url:t}}))},goImages:function(t){""!==t&&(this.SET_GO_IMG(""),this.$router.push({name:"GgImages",params:{url:t}}))},goHtml:function(t){""!==t&&(this.SET_GO_HTML(""),this.$router.push({name:"GgHtml",params:{url:t}}))}},created:function(){this.headerData.title=this.$route.params.title,this.getTaskData()},methods:$({},Object(l["c"])(["SET_GO_PDF","SET_GO_IMG","SET_GO_HTML","jbrdbsx/SET_Refresh"]),{getTaskData:function(){var t=this;console.log("executorid:",this.txBizid),Object(k["f"])({executorid:this.txBizid}).then((function(e){if(console.log("task:",e),0===e.length)t.$toast.fail("暂无数据！");else{t.dbxq=e;for(var i=JSON.stringify(t.dbxq.datatabs),n=JSON.parse(i),a=0;a<n.length;a++){var s={name:n[a].name,appsrvurl:n[a].appsrvurl,appurl:n[a].appurl};t.tabs.push(s)}t.lcButton=t.dbxq.lcButton;var o=t.lcButton.logBtn.isShow;if(o){var r={name:"流转日志",appsrvurl:"lzrz",appurl:"lzrz"};t.tabs.push(r)}}}))},goBack:function(){this.$router.push("/jbrsphome")},popupClick:function(t,e){var i=this;this.$store.dispatch("jbrdbsx/setDbsxspxz",t),Object(k["h"])({id:this.txBizid}).then((function(n){2===n.data?0===t?null===i.dbxq.thyjbt||3===i.dbxq.thyjbt||2===i.dbxq.thyjbt?i.clickBackOneStepSP():i.$router.push({name:"backonestep"}):1===t?(console.log("this.dbxq.executorid:",i.dbxq.executorid),Object(k["c"])({executorid:i.dbxq.executorid}).then((function(t){console.log("datatab msgs:",t),0===t.length?2===i.dbxq.tjyjbt?i.clickSubmitSP():i.$router.push({name:"submit"}):(i.checkMsgs=t,i.showCheck=!0)}))):2===t?null===i.dbxq.thyjbt||2===i.dbxq.thyjbt?i.clickBackSP():i.$router.push({name:"back"}):i.$router.push({name:"hq",params:{btnMc:e}}):S["a"].alert({message:"该任务已提交！"}).then((function(){i.SET_Refresh("true")}))}))},clickSubmitSP:function(){var t=this;S["a"].confirm({message:"是否提交当前任务？"}).then((function(){t.$store.dispatch("jbrdbsx/sendSP",{id:t.txBizid,dqjgid:t.userInfo.zzid,dqryid:t.userInfo.id}).then((function(e){t.$toast("审批成功！"),setTimeout((function(){t.$router.push("/DbsxIndex"),t.SET_Refresh("true")}),2e3)})).catch((function(e){t.$toast(e)}))}))},clickBackSP:function(){var t=this;S["a"].confirm({message:"是否退回当前任务？"}).then((function(){t.$store.dispatch("jbrdbsx/sendBackSP",{executorid:t.txBizid}).then((function(e){t.$toast("退回成功！"),setTimeout((function(){t.$router.push("/DbsxIndex"),t.SET_Refresh("true")}),2e3)})).catch((function(e){t.$toast(e)}))}))},clickBackOneStepSP:function(){var t=this;S["a"].confirm({message:"是否退回到上一步？"}).then((function(){t.$store.dispatch("jbrdbsx/sendBackOneStepSP",{id:t.txBizid}).then((function(e){t.$toast("退回成功！"),setTimeout((function(){t.$router.push("/DbsxIndex"),t.SET_Refresh("true")}),2e3)})).catch((function(e){t.$toast(e)}))}))},clickIndex:function(t){this.slideIndex=t},slideSendNav:function(t){this.swiperToNav=t}})},T=N,z=(i("c57f"),Object(p["a"])(T,n,a,!1,null,"3b39329a",null));e["default"]=z.exports},"3bc7":function(t,e,i){},"445c":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"nav-bar"},[t.headerData.leftText?i("div",{staticClass:"nav-bar-left"},[i("div",{on:{click:function(e){return e.stopPropagation(),t.handelClick(t.headerData.leftUrl)}}},[i("i",{staticClass:"iconfont iconicon-back"}),i("div",{staticClass:"nav-bar-txt"},[t._v(t._s(t.headerData.leftText))])])]):t._e(),i("div",{staticClass:"nav-bar-title"},[t._v(t._s(t.headerData.title))]),i("div",{staticClass:"nav-bar-right"},[t.headerData.rightText?i("div",{staticClass:"nav-bar-txt",on:{click:function(e){return t.handelClick(t.headerData.rightUrl,t.headerData.rightCallBackClick)}}},[t._v(t._s(t.headerData.rightText))]):t._e(),t.headerData.showSearch?i("i",{staticClass:"iconfont iconsousuo",on:{click:function(e){return t.searchClick()}}}):t._e()])])},a=[],s={name:"HeaderBar",props:{headerData:{type:null,required:!0}},data:function(){return{}},created:function(){this.headerData&&(this.headerData.rightCallBackClick||(this.headerData.rightCallBackClick=!1))},methods:{searchClick:function(){this.$bus.$emit("showMeun",!0)},handelClick:function(t,e){if(console.log("targetUrl=====================",t),"back"!==t)if("needConfirm"!==t){if(t)this.$router.push(t);else if(e){var i="callback";this.headerData&&this.headerData.rightText&&(i=this.headerData.rightText),this.$emit("callbackClick",i)}}else this.$emit("on-exit");else this.$router.go(-1)}}},o=s,r=i("2877"),c=Object(r["a"])(o,n,a,!1,null,"416ac0a2",null);e["a"]=c.exports},"4abd":function(t,e,i){"use strict";var n={NOLOGIN:-1,NOMORE:0,NODATA:1,NONET:2,NOAPACHE:3},a={1:"货物",2:"工程",3:"服务"},s={1:"初始化",2:"已发布",3:"撤回"},o={0:"否",1:"是"},r={1:"男",2:"女",0:"未知性别",9:"未说明的性别"},c={0:"初始化",5:"项目立项",15:"项目组织中",20:"已公告",22:"已发布",25:"开标中",27:"第一次开标完成",30:"开标完成",35:"评审中",40:"评标结束",45:"已评审公示",50:"已定标",55:"已结果公告",65:"项目完成"},l={"00380002":"公开招标","00380003":"邀请招标","00380020":"政府采购-竞争性谈判","00380024":"政府采购-竞争性磋商","00380005":"政府采购-询价","00380011":"政府采购-单一来源","00380004":"企采-谈判","00380018":"企采-询比","00380012":"企采-竞价","00380006":"企采-直接采购","00380007":"其他","00380008":"协议供货","00380010":"定点采购","00380013":"土地拍卖","00380014":"土地挂牌","00380015":"电商竞价","00380026":"招标转议标","00380022":"招标转议标","00380021":"非在线采购","00380023":"非在线采购(框架采购)","00380009":"方案评审"},u={1:"今",2:"昨",3:"前",4:"更"},d={1:"运维",2:"外部招标代理机构",3:"供应商",4:"评审专家",5:"采购主体",8:"采购人",9:"安全认证供应商",10:"监标人",99:"信源运维"},h=[{title_en:"cc",title:"出差"},{title_en:"bs",title:"市内办事"},{title_en:"wc",title:"因私外出"},{title_en:"jjbg",title:"居家办公"}],f={"":"请选择考勤状态",wzt:"请选择考勤状态",cc:"出差",bs:"市内办事",qj:"请假",tx:"调休",wc:"因私外出","cd<20":"迟到<20","cd>20":"迟到>20",qq:"缺勤",nj:"年假",dk:"上班打卡",zc:"正常上班",cl:"迟到<20",cg:"迟到>20",qjspz:"请假审批中",jjbg:"居家办公"},p=[{title_en:"cc",title:"出差"},{title_en:"bs",title:"市内办事"},{title_en:"wc",title:"因私外出"},{title_en:"zc",title:"上班打卡"},{title_en:"jjbg",title:"居家办公"}],g=[{title_en:"cc",title:"出差"},{title_en:"bs",title:"市内办事"},{title_en:"wc",title:"因私外出"},{title_en:"zc",title:"上班打卡"},{title_en:"jjbg",title:"居家办公"}];e["a"]={XMZT:c,SFTYYQ:o,CGFS:l,XMLX:a,TimeDay:u,pageStyle:n,XTGGZT:s,XB:r,ZZXZ:d,QdShareDataList:f,QdAmData_zc:h,QdAmData_dzwl:p,QdPmData:g}},"510f":function(t,e,i){"use strict";i.d(e,"d",(function(){return r})),i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return l}));i("a4d3"),i("4de4"),i("c975"),i("a434"),i("b0c0"),i("e439"),i("dbb4"),i("b64b"),i("159b");var n=i("ade3"),a=i("2f62");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){Object(n["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var r={mounted:function(){},data:function(){return{}},methods:{goPage:function(t,e){this.$store.dispatch("router/setPageParams",e),this.$router.push({name:t,params:{keyName:e}})},getParams:function(){return this.$store.state.router.pageParams}},beforeRouteEnter:function(t,e,i){i((function(e){if("MhHome"!==t.name&&"MallHome"!==t.name){var i=e.$store.state.router.keepAlive,n=i.indexOf(t.name);-1===n&&i.push(t.name),e.$store.commit("router/SET_KEEP_ALIVE",i)}else e.$store.commit("router/SET_KEEP_ALIVE",[]);console.log("PageRoute=进入页面==",i)}))},beforeRouteLeave:function(t,e,i){var n=[];if(n=this.$store.state.router.keepAlive,"GysXmbm"===e.name){var a=n.indexOf(e.name);n.splice(a,1)}var s=n.indexOf(e.name),o=n.indexOf(t.name);-1!==o&&n.splice(s,1);for(var r=[],c=0;c<this.$store.state.router.footMeun.length;c++)r.push(this.$store.state.router.footMeun[c].component);var l=r.indexOf(e.name),u=r.indexOf(t.name);-1!==l&&-1!==u&&n.splice(s,1),console.log("PageRoute=退出页面======================",n),this.$store.commit("router/SET_KEEP_ALIVE",n),i()}},c={mounted:function(){var t=this;window["showSoftKeyBoard"]=function(e){console.info("showSoftKeyBoard-----",e),t.Native_ShowSoftKeyBoard=e},window["getRotuerPage"]=function(e){return t.$store.state.router.keepAlive},window["updateScanData"]=function(e){console.info("updateScan======",e),t.Native_ScanData=e},window["updateHandImage"]=function(e){t.Native_PhoneImageData=e}},data:function(){return{Native_ShowSoftKeyBoard:"",Native_ScanData:{},Native_PhoneImageData:{},Native_CaLoad:"",Native_CaList:{}}},computed:{},methods:{NativeLoadCA:function(){var t=this;try{this.Native_CaLoad=window.myapp.LoadCA(),console.info("NativeLoadCA======",window.myapp.LoadCA())}catch(e){console.log(e)}this.$bridge.callhandler("LoadCA","{page:1}",(function(e){var i=JSON.parse(e);console.log("goScanView------",e),t.Native_CaLoad=i}))},NativeGetAllCAInfo:function(){try{console.info("NativeGetAllCAInfo======",window.myapp.getAllCAInfo());var t=window.myapp.getAllCAInfo();this.Native_CaList=JSON.parse(t)}catch(e){console.log(e)}this.$bridge.callhandler("getAllCAInfo",(function(t){}))},NativeGetOnelCAInfo:function(t){try{console.info("NativeGetAllCAInfo======",window.myapp.getOneCAInfo())}catch(e){console.log(e)}this.$bridge.callhandler("getOneCAInfo",t,(function(t){}))},NativeChangePin:function(t){try{window.myapp.changePin(t)}catch(e){console.log(e)}this.$bridge.callhandler("changePin",t,(function(t){}))},NativeEnvelopeDecrypt:function(t){try{window.myapp.envelopeDecrypt(t)}catch(e){console.log(e)}this.$bridge.callhandler("envelopeDecrypt",t,(function(t){}))},NativeEnvelopeEncrypt:function(t){try{window.myapp.envelopeEncrypt(t)}catch(e){console.log(e)}this.$bridge.callhandler("envelopeEncrypt",t,(function(t){}))}}},l={mounted:function(){var t=this;window["getRotuerPage"]=function(e){return t.$store.state.router.keepAlive},window["updateScanData"]=function(e){console.info("updateScan======",e),t.Native_ScanData=e},window["updateHandImage"]=function(e){t.Native_PhoneImageData=e}},data:function(){return{Native_ScanData:{},Native_PhoneImageData:{}}},computed:{},methods:{NativeAddPush:function(t){try{window.myapp.addPush(t)}catch(e){console.log(e)}this.$bridge.callhandler("addPush",t,(function(t){}))},NativeDissPush:function(){try{window.myapp.dissPush()}catch(t){console.log(t)}this.$bridge.callhandler("dissPush",(function(t){}))},NativeDissDialog:function(){try{window.myapp.dissDialog()}catch(t){console.log(t)}this.$bridge.callhandler("dissDialog",(function(t){}))},NativeLoginAction:function(t){try{window.myapp.loginAction(t)}catch(e){console.log(e)}this.$bridge.callhandler("loginAction",t,(function(t){}))},NativeCheakUpdate:function(){try{window.myapp.cheakUpdate()}catch(t){console.log(t)}this.$bridge.callhandler("cheakUpdate",(function(t){}))},NativeGetLjSize:function(){try{window.myapp.getlj()}catch(t){console.log(t)}this.$bridge.callhandler("getlj",(function(t){}))},NativeCleanLj:function(){try{window.myapp.cleanlj()}catch(t){console.log(t)}this.$bridge.callhandler("cleanlj",(function(t){}))},NativeDownFiles:function(t){try{window.myapp.downloadFile(t)}catch(e){console.log(e)}this.$bridge.callhandler("downloadFile",String(t),(function(t){}))},NativeScan:function(){var t=this;try{window.myapp.goScanView()}catch(e){console.log(e)}this.$bridge.callhandler("goScanView","{page:1}",(function(e){var i=JSON.parse(e);console.log("goScanView------",e),t.Native_ScanData=i}))},NativePhone:function(t){var e=this;try{window.myapp.goIDCards(t)}catch(i){console.log(i)}this.$bridge.callhandler("goIDCards",t,(function(t){var i=JSON.parse(t);console.log("goIDCards------",i),e.Native_PhoneImageData=i}))},NativeHandSing:function(){var t=this;try{window.myapp.goHandWriteView()}catch(e){console.log(e)}this.$bridge.callhandler("goHandWriteView",(function(e){t.Native_PhoneImageData=e}))},NativeCallPhone:function(t){try{window.myapp.call(t)}catch(e){console.log(e)}this.$bridge.callhandler("call",t,(function(t){}))},NativeUpdateImage:function(){try{window.myapp.CameraOrImage()}catch(t){console.log(t)}this.$bridge.callhandler("CameraOrImage",(function(t){}))}}};o({onQueryChange:function(t){this.query=t},blurInput:function(){this.$refs.searchBox.blur()},addQuery:function(t){this.$refs.searchBox.setQuery(t)},saveSearch:function(){this.updateHostorList(this.query)}},Object(a["b"])(["updateHostorList","deleteSearchHistory"])),o({wybmAction:function(){this.wybmfbAction()}},Object(a["b"])(["wybmfbAction"]))},"6b01":function(t,e,i){"use strict";var n=i("2a66"),a=i.n(n);a.a},baa5:function(t,e,i){var n=i("23e7"),a=i("e58c");n({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})},c57f:function(t,e,i){"use strict";var n=i("3bc7"),a=i.n(n);a.a},e58c:function(t,e,i){"use strict";var n=i("fc6a"),a=i("a691"),s=i("50c4"),o=i("b301"),r=Math.min,c=[].lastIndexOf,l=!!c&&1/[1].lastIndexOf(1,-0)<0,u=o("lastIndexOf");t.exports=l||u?function(t){if(l)return c.apply(this,arguments)||0;var e=n(this),i=s(e.length),o=i-1;for(arguments.length>1&&(o=r(o,a(arguments[1]))),o<0&&(o=i+o);o>=0;o--)if(o in e&&e[o]===t)return o||0;return-1}:c}}]);
//# sourceMappingURL=WddbXxxx.e94c3f7e.js.map