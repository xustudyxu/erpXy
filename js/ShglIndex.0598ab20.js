(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ShglIndex"],{1100:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"error-main"},[0!=t.pageStyle?i("div",{staticClass:"status"},[i("div",{class:t.getCss()}),i("h3",[t._v(t._s(t.getTitle()))]),i("van-button",{directives:[{name:"show",rawName:"v-show",value:t.showButton,expression:"showButton"}],attrs:{type:"info"},on:{click:t.errorButton}},[t._v(t._s(t.getButton()))])],1):t._e()])},a=[],s={name:"Error",props:{pageStyle:{type:null,required:!0},showButton:{default:!0,type:Boolean}},data:function(){return{}},watch:{pageTitle:function(t){}},created:function(){},methods:{errorButton:function(){-1==this.pageStyle?this.$router.push("/login"):this.$emit("errorButton")},getTitle:function(){return-1==this.pageStyle?"未登录，请先登录":0==this.pageStyle?"正常状态不显示":1==this.pageStyle?"暂无数据":2==this.pageStyle?"无网络，请检查当前网络":3==this.pageStyle?"网络请求失败，请再次尝试":4==this.pageStyle?this.pageTitle:void 0},getCss:function(){return-1==this.pageStyle?"status-icon no-result":0==this.pageStyle?"status-icon no-network":1==this.pageStyle?"status-icon no-result":2==this.pageStyle?"status-icon no-network":3==this.pageStyle?"status-icon no-network":4==this.pageStyle?"status-icon no-xiangmu":void 0},getButton:function(){return-1==this.pageStyle?"登录":"再试一次"}}},o=s,r=i("2877"),h=Object(r["a"])(o,n,a,!1,null,"409e994e",null);e["a"]=h.exports},3835:function(t,e,i){"use strict";function n(t){if(Array.isArray(t))return t}i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("d3b7"),i("25f0"),i("3ca3"),i("ddb0");function a(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var i=[],n=!0,a=!1,s=void 0;try{for(var o,r=t[Symbol.iterator]();!(n=(o=r.next()).done);n=!0)if(i.push(o.value),e&&i.length===e)break}catch(h){a=!0,s=h}finally{try{n||null==r["return"]||r["return"]()}finally{if(a)throw s}}return i}}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,e){return n(t)||a(t,e)||s()}i.d(e,"a",(function(){return o}))},"445c":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"nav-bar"},[t.headerData.leftText?i("div",{staticClass:"nav-bar-left"},[i("div",{on:{click:function(e){return e.stopPropagation(),t.handelClick(t.headerData.leftUrl)}}},[i("i",{staticClass:"iconfont iconicon-back"}),i("div",{staticClass:"nav-bar-txt"},[t._v(t._s(t.headerData.leftText))])])]):t._e(),i("div",{staticClass:"nav-bar-title"},[t._v(t._s(t.headerData.title))]),i("div",{staticClass:"nav-bar-right"},[t.headerData.rightText?i("div",{staticClass:"nav-bar-txt",on:{click:function(e){return t.handelClick(t.headerData.rightUrl,t.headerData.rightCallBackClick)}}},[t._v(t._s(t.headerData.rightText))]):t._e(),t.headerData.showSearch?i("i",{staticClass:"iconfont iconsousuo",on:{click:function(e){return t.searchClick()}}}):t._e()])])},a=[],s={name:"HeaderBar",props:{headerData:{type:null,required:!0}},data:function(){return{}},created:function(){this.headerData&&(this.headerData.rightCallBackClick||(this.headerData.rightCallBackClick=!1))},methods:{searchClick:function(){this.$bus.$emit("showMeun",!0)},handelClick:function(t,e){if(console.log("targetUrl=====================",t),"back"!==t)if("needConfirm"!==t){if(t)this.$router.push(t);else if(e){var i="callback";this.headerData&&this.headerData.rightText&&(i=this.headerData.rightText),this.$emit("callbackClick",i)}}else this.$emit("on-exit");else this.$router.go(-1)}}},o=s,r=i("2877"),h=Object(r["a"])(o,n,a,!1,null,"416ac0a2",null);e["a"]=h.exports},6595:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"didaList"}},[0==t.pageStyles?i("div",[i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":t.finishedText,"error-text":t.errorText},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t._t("default")],2)],1)],1):i("div",[i("error-page",{attrs:{"page-style":t.pageStyles},on:{errorButton:t.parentReceive}})],1)])},a=[],s=(i("99af"),i("1100")),o={components:{errorPage:s["a"]},props:{postUrl:{type:null,required:!0},dataName:{type:null,required:!0},reqData:{type:null,required:!0},apptypeShow:{type:Boolean,default:!0}},data:function(){return{list:[],pageStyles:0,loading:!1,finished:!1,isLoading:!1,query:"",pagesize:10,xxList:[],currentpage:1,totalpageno:0,finishedText:"没有更多了",errorText:"请求失败，点击重新加载",total:0}},created:function(){this.reqNewData=this.reqData,console.info("reqData-----------------",this.reqData);var t=this;this.$bus.$on("refList",(function(e){var i=this;t.query=e,t.currentpage=1,t.getListData(e).then((function(t){i.loading=!1,i.totalpageno<=i.currentpage&&(i.finished=!0)}))}))},beforeDestroy:function(){this.$bus.$off("refList")},methods:{getListData:function(){var t=this,e=this.reqData;console.info("query--11--",this.query);var i={};if(this.apptypeShow){if(null!=this.query&&""!==this.query){var n={apptype:"APP"};this.query=Object.assign(this.query,n)}else this.query={apptype:"APP"};i={pageno:this.currentpage,query:JSON.stringify(this.query)}}else null!=this.query&&""!==this.query?(this.query=Object.assign(this.query),i={pageno:this.currentpage,query:JSON.stringify(this.query)}):i={pageno:this.currentpage};return console.info("form111-----------------",e),this.$store.dispatch(this.postUrl,Object.assign(e,i)).then((function(e){t.totalpageno=e.totalpageno?e.totalpageno:e.totalPages,t.pageStyles=0,0===t.totalpageno&&(t.pageStyles=1),1===t.currentpage?(t.list=t.dataName?e[t.dataName]:e,null!=t.list&&0!==t.list.length||(t.pageStyles=1)):0===e.length?t.finished=!0:t.totalpageno>=t.currentpage?t.list=t.list.concat(t.dataName?e[t.dataName]:e):t.finished=!0,console.log("this.list===============================",t.list),e&&e.title?(t.xxList.data=t.list,t.xxList.title=e.title,t.$emit("returnData",t.xxList)):t.$emit("returnData",t.list)})).catch((function(e){t.pageStyles=3,t.loading=!1,t.errorText=e}))},parentReceive:function(){this.onRefresh(this.query)},onLoad:function(){var t=this;this.getListData().then((function(e){t.loading=!1,t.currentpage++,t.totalpageno<t.currentpage&&(t.finished=!0)}))},onRefresh:function(t){var e=this;this.query=null!=t&&""!==t?t:{},this.list=[],this.currentpage=1,this.getListData(1).then((function(){e.isLoading=!1,e.finished=!1}))},hideLoading:function(){this.loading=!1},hideIsLoading:function(){this.isLoading=!1}}},r=o,h=i("2877"),c=Object(h["a"])(r,n,a,!1,null,null,null);e["a"]=c.exports},ac8a:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("headerBar",{attrs:{"header-data":t.headerData},on:{searchClick:function(e){return t.searchAction()}}}),i("div",{staticClass:"container"},[i("common-list",{ref:"dida_list",staticClass:"common-list common-list-spe",attrs:{"post-url":t.list.postUrl,"req-data":t.list.reqData,"data-name":t.list.dataName,"apptype-show":!1},on:{returnData:function(e){return t.getPrizeLog(e)}}},t._l(t.GysFhxxList,(function(e,n){return i("div",{key:n,staticClass:"content"},[i("div",{staticClass:"common-main box"},[i("div",{staticClass:"common-list common-list-spe"},[i("div",{staticClass:"list"},[i("h3",[t._v(t._s(e.fhdmc))]),i("div",{class:1==e.showMore?"list-flex active":"list-flex"},[i("div",{staticClass:"info"},[i("span",{staticClass:"label"},[t._v(t._s(e.zt))]),i("span",[i("i",{staticClass:"iconfont iconbianma"}),t._v(" 发货单编号："+t._s(e.fhdbh)+" ")]),i("span",[i("i",{staticClass:"iconfont iconwuliuqiache"}),t._v(" 物流方式："+t._s(e.wllx)+" ")]),i("span",[i("i",{staticClass:"iconfont iconwuliuqiache"}),t._v(" 物流公司："+t._s(e.wlgsmc)+" ")]),i("span",[i("i",{staticClass:"iconfont icondaibanshixiang"}),t._v(" 物流单据编号："+t._s(e.ydh)+" ")]),i("span",[i("i",{staticClass:"iconfont iconlianxiren"}),t._v(" 送货联系人："+t._s(e.wllxr)+" ")]),i("span",[i("i",{staticClass:"iconfont iconshijian"}),t._v(" 发货时间："+t._s(t.zhTime(e.fhsj))+" ")]),i("span",[i("i",{staticClass:"iconfont iconshijian"}),t._v(" 签收时间："+t._s(t.zhTime(e.dhsj))+" ")])]),i("div",{class:1==e.showMore?"info-more active":"info-more",on:{click:function(e){return t.showMoreInfo(n)}}},[i("i",{staticClass:"iconfont iconarrow-down"})])]),i("div",{staticClass:"list-btn"},[i("ul",["草稿"===e.zt?i("li",[i("van-button",{attrs:{type:"default",plain:"",size:"small"},on:{click:function(i){return t.goShglAdd(e.id)}}},[i("i",{staticClass:"iconfont iconxieruqianming"}),t._v(" 修改")])],1):t._e(),"草稿"===e.zt?i("li",[i("van-button",{attrs:{type:"default",plain:"",size:"small"},on:{click:function(i){return t.submit(e.id)}}},[i("i",{staticClass:"iconfont iconhegezhihuizonglei"}),t._v(" 提交")])],1):t._e(),"草稿"===e.zt?i("li",[i("van-button",{attrs:{type:"default",plain:"",size:"small"},on:{click:function(i){return t.deletGysFhxx(e.id)}}},[i("i",{staticClass:"iconfont iconshanchu"}),t._v(" 删除")])],1):t._e(),"草稿"!==e.zt?i("li",[i("van-button",{attrs:{type:"default",plain:"",size:"small"},on:{click:function(i){return t.goView(e.id)}}},[i("i",{staticClass:"iconfont iconxiangqing"}),t._v(" 查看")])],1):t._e()])])])])])])})),0)],1),i("searchMeun",{on:{goSearchAction:function(e){return t.search(e)},reSet:t.goReset}},[i("van-field",{attrs:{label:"发货单名称",placeholder:"请输入发货单名称","input-align":"right"},model:{value:t.fhdmc,callback:function(e){t.fhdmc=e},expression:"fhdmc"}}),i("van-field",{attrs:{label:"发货单编号",placeholder:"请输入发货单编号","input-align":"right"},model:{value:t.fhdbh,callback:function(e){t.fhdbh=e},expression:"fhdbh"}}),i("van-cell",{attrs:{title:"发货时间","is-link":"",value:t.fhsj},on:{click:function(e){return t.showFhCalendar()}}}),i("van-cell",{attrs:{title:"状态","is-link":"",value:t.ztShow},on:{click:function(e){return t.showZtPopup()}}}),i("van-cell",{attrs:{title:"签收时间","is-link":"",value:t.qssj},on:{click:function(e){return t.showDhCalendar()}}}),i("van-cell",{attrs:{title:"是否过磅","is-link":"",value:t.sfgbShow},on:{click:function(e){return t.showSfgbPopup()}}})],1),i("van-popup",{attrs:{position:"bottom",round:""},model:{value:t.ZtShow,callback:function(e){t.ZtShow=e},expression:"ZtShow"}},[i("van-picker",{attrs:{columns:t.ZtColumns,"show-toolbar":""},on:{cancel:function(e){t.ZtShow=!1},confirm:t.onClick}})],1),i("van-calendar",{key:t.key1+"fh",attrs:{type:"range",color:"#1890FF","min-date":t.mindate},on:{confirm:t.onConfirm},model:{value:t.FhShow,callback:function(e){t.FhShow=e},expression:"FhShow"}}),i("van-calendar",{key:t.key2+"dh",attrs:{type:"range",color:"#1890FF","min-date":t.mindate},on:{confirm:t.onConfirm1},model:{value:t.DhShow,callback:function(e){t.DhShow=e},expression:"DhShow"}}),i("van-popup",{attrs:{position:"bottom",round:""},model:{value:t.SfgbShow,callback:function(e){t.SfgbShow=e},expression:"SfgbShow"}},[i("van-picker",{attrs:{columns:t.SfgbColumns,"show-toolbar":""},on:{cancel:function(e){t.SfgbShow=!1},confirm:t.onClick1}})],1),i("div",{staticClass:"common-space"}),i("div",{staticClass:"foot-btn fixed"},[i("ul",[i("li",{on:{click:function(e){return t.goShglAdd("")}}},[i("van-button",{attrs:{type:"info",round:"",size:"large"}},[t._v("新增")])],1)])])],1)},a=[],s=(i("99af"),i("fb6a"),i("a434"),i("3835")),o=i("6595"),r=i("c46f"),h=i("445c"),c={components:{commonList:o["a"],searchMeun:r["a"],headerBar:h["a"]},data:function(){return{headerData:{title:"发货信息",leftUrl:"back",leftText:" ",showSearch:!0},key1:1,key2:1,mindate:new Date(2010,0,1),pageno:1,GysFhxxList:[],date:"2/12 - 2/14",value1:"",value2:"",show:!1,ZtShow:!1,FhShow:!1,DhShow:!1,SfgbShow:!1,ZtColumns:["请选择状态","草稿","配送中","已收货","已退回"],SfgbColumns:["请选择是否过磅","是","否"],list:{items:[],error:!1,postUrl:"",reqData:"",dataName:"",noDataText:""},fhdmc:"",fhdbh:"",fhsj:"请选择发货时间",qssj:"请选择签收时间",fhsjStart:"",fhsjEnd:"",zt:"",dhsjStart:"",dhsjEnd:"",sfgb:"",ztShow:"请选择状态",sfgbShow:"请选择是否过磅",ztMap:{"草稿":0,"配送中":1,"已收货":2,"已退回":-1,"请选择状态":""}}},computed:{},created:function(){this.init()},methods:{goReset:function(){this.key1++,this.key2++,this.fhdmc="",this.fhdbh="",this.fhsj="请选择发货时间",this.ztShow="请选择状态",this.qssj="请选择签收时间",this.sfgbShow="请选择是否过磅",this.fhsjStart="",this.fhsjEnd="",this.zt="",this.dhsjStart="",this.dhsjEnd="",this.sfgb=""},onClick1:function(t){this.sfgbShow=t,this.sfgb="是"===t?1:"否"===t?0:"",this.SfgbShow=!1},onClick:function(t){this.ztShow=t,this.zt=this.ztMap[t],this.ZtShow=!1},search:function(){this.$bus.$emit("showMeun",!1);var t={fhdmc:this.fhdmc,fhdbh:this.fhdbh,fhsjStart:this.fhsjStart,fhsjEnd:this.fhsjEnd,zt:this.zt,dhsjStart:this.dhsjStart,dhsjEnd:this.dhsjEnd,sfgb:this.sfgb};this.$refs.dida_list.onRefresh(t),this.show=!1},init:function(){this.list.postUrl="fhgl/getXm_fhdhListAction",this.list.reqData={ryid:this.$store.state.mh.mhUserInfo.id,pageno:this.pageno},this.list.dataName="list"},getPrizeLog:function(t){this.GysFhxxList=t},goView:function(t){this.$store.commit("fhgl/SET_FHBH",t),this.$router.push({name:"ShglView"})},goBack:function(){this.$router.back()},submit:function(t){var e=this;this.$dialog.confirm({title:"提示",message:"确认提交当前信息么？"}).then((function(){e.$store.dispatch("fhgl/submitXm_fhdhAction",{fhbh:t,ryid:e.$store.state.mh.mhUserInfo.id}).then((function(t){e.$toast("提交成功！"),e.$refs.dida_list.onRefresh()})).catch((function(t){e.$toast(t)}))})).catch((function(){}))},deletGysFhxx:function(t){var e=this;this.$dialog.confirm({title:"提示",message:"确认删除当前信息么？"}).then((function(){e.$store.dispatch("fhgl/deleteXm_fhdhAction",{fhbh:t}).then((function(t){e.$toast("删除成功！"),e.$refs.dida_list.onRefresh()}))})).catch((function(){}))},zhTime:function(t){if(t)return t+="",t.slice(0,4)+"-"+t.slice(4,6)+"-"+t.slice(6,8)},showPopup:function(){this.show=!0},showZtPopup:function(){this.ZtShow=!0},showFhCalendar:function(){this.FhShow=!0},showDhCalendar:function(){this.DhShow=!0},showSfgbPopup:function(){this.SfgbShow=!0},formatDate:function(t){var e=t.getFullYear(),i=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth(),n=t.getDate()<10?"0"+t.getDate():t.getDate();return e+"-"+i+"-"+n},formatDate1:function(t){var e=t.getFullYear(),i=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth(),n=t.getDate()<10?"0"+t.getDate():t.getDate();return e+""+i+n},onConfirm:function(t){var e=Object(s["a"])(t,2),i=e[0],n=e[1];this.FhShow=!1,this.fhsj="".concat(this.formatDate(i)," - ").concat(this.formatDate(n)),this.fhsjStart="".concat(this.formatDate1(i)),this.fhsjEnd="".concat(this.formatDate1(n))},onConfirm1:function(t){var e=Object(s["a"])(t,2),i=e[0],n=e[1];this.DhShow=!1,this.qssj="".concat(this.formatDate(i)," - ").concat(this.formatDate(n)),this.dhsjStart="".concat(this.formatDate1(i)),this.dhsjEnd="".concat(this.formatDate1(n))},showMoreInfo:function(t){this.GysFhxxList[t].showMore=!this.GysFhxxList[t].showMore,this.GysFhxxList.splice(t,1,this.GysFhxxList[t])},goShglAdd:function(t){this.$store.commit("fhgl/SET_FHBH",t),this.$router.push({name:"ShglAdd"})}}},l=c,u=i("2877"),f=Object(u["a"])(l,n,a,!1,null,"93dc8b46",null);e["default"]=f.exports},c46f:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-popup",{staticClass:"search-popup",attrs:{position:"top","overlay-class":"transparent-overlay"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("div",{staticClass:"common-main box"},[i("div",{staticClass:"spe-input"},[t._t("default")],2),i("div",{staticClass:"search-popup-btn"},[i("van-button",{attrs:{type:"info",block:"",plain:"",round:""},on:{click:function(e){return t.reSet()}}},[t._v("重置")]),i("van-button",{attrs:{type:"info",block:"",round:""},on:{click:function(e){return t.searchXmxx()}}},[t._v("搜索")])],1)])])],1)},a=[],s={components:{},props:{},data:function(){return{show:!1}},computed:{},created:function(){var t=this;this.$bus.$on("showMeun",(function(e){console.log("searchClick=====aaa======="),t.show=e}))},methods:{reSet:function(){this.$emit("reSet")},test:function(){this.show=!0,console.log("searchClick=====aabbba=======")},searchXmxx:function(){this.$emit("goSearchAction","search")}}},o=s,r=i("2877"),h=Object(r["a"])(o,n,a,!1,null,null,null);e["a"]=h.exports}}]);
//# sourceMappingURL=ShglIndex.0598ab20.js.map