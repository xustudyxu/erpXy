(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Xmggnr"],{1100:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"error-main"},[0!=t.pageStyle?a("div",{staticClass:"status"},[a("div",{class:t.getCss()}),a("h3",[t._v(t._s(t.getTitle()))]),a("van-button",{directives:[{name:"show",rawName:"v-show",value:t.showButton,expression:"showButton"}],attrs:{type:"info"},on:{click:t.errorButton}},[t._v(t._s(t.getButton()))])],1):t._e()])},n=[],i={name:"Error",props:{pageStyle:{type:null,required:!0},showButton:{default:!0,type:Boolean}},data:function(){return{}},watch:{pageTitle:function(t){}},created:function(){},methods:{errorButton:function(){-1==this.pageStyle?this.$router.push("/login"):this.$emit("errorButton")},getTitle:function(){return-1==this.pageStyle?"未登录，请先登录":0==this.pageStyle?"正常状态不显示":1==this.pageStyle?"暂无数据":2==this.pageStyle?"无网络，请检查当前网络":3==this.pageStyle?"网络请求失败，请再次尝试":4==this.pageStyle?this.pageTitle:void 0},getCss:function(){return-1==this.pageStyle?"status-icon no-result":0==this.pageStyle?"status-icon no-network":1==this.pageStyle?"status-icon no-result":2==this.pageStyle?"status-icon no-network":3==this.pageStyle?"status-icon no-network":4==this.pageStyle?"status-icon no-xiangmu":void 0},getButton:function(){return-1==this.pageStyle?"登录":"再试一次"}}},s=i,o=a("2877"),c=Object(o["a"])(s,r,n,!1,null,"409e994e",null);e["a"]=c.exports},"445c":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"nav-bar"},[t.headerData.leftText?a("div",{staticClass:"nav-bar-left"},[a("div",{on:{click:function(e){return e.stopPropagation(),t.handelClick(t.headerData.leftUrl)}}},[a("i",{staticClass:"iconfont iconicon-back"}),a("div",{staticClass:"nav-bar-txt"},[t._v(t._s(t.headerData.leftText))])])]):t._e(),a("div",{staticClass:"nav-bar-title"},[t._v(t._s(t.headerData.title))]),a("div",{staticClass:"nav-bar-right"},[t.headerData.rightText?a("div",{staticClass:"nav-bar-txt",on:{click:function(e){return t.handelClick(t.headerData.rightUrl,t.headerData.rightCallBackClick)}}},[t._v(t._s(t.headerData.rightText))]):t._e(),t.headerData.showSearch?a("i",{staticClass:"iconfont iconsousuo",on:{click:function(e){return t.searchClick()}}}):t._e()])])},n=[],i={name:"HeaderBar",props:{headerData:{type:null,required:!0}},data:function(){return{}},created:function(){this.headerData&&(this.headerData.rightCallBackClick||(this.headerData.rightCallBackClick=!1))},methods:{searchClick:function(){this.$bus.$emit("showMeun",!0)},handelClick:function(t,e){if(console.log("targetUrl=====================",t),"back"!==t)if("needConfirm"!==t){if(t)this.$router.push(t);else if(e){var a="callback";this.headerData&&this.headerData.rightText&&(a=this.headerData.rightText),this.$emit("callbackClick",a)}}else this.$emit("on-exit");else this.$router.go(-1)}}},s=i,o=a("2877"),c=Object(o["a"])(s,r,n,!1,null,"416ac0a2",null);e["a"]=c.exports},7558:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("headerBar",{attrs:{"header-data":t.headerData}}),0===t.pageStyles?a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[a("div",{staticClass:"common-main box"},[a("div",{staticClass:"notice-content",domProps:{innerHTML:t._s(t.ggnr)}})])])]):a("div",[a("error-page",{attrs:{"page-style":t.pageStyles},on:{errorButton:t.parentReceive}})],1)],1)},n=[],i=(a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),s=a("445c"),o=a("2f62"),c=a("1100");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var h={name:"One",components:{headerBar:s["a"],errorPage:c["a"]},data:function(){return{pageStyles:0,ggnr:"",showMore:!1,headerData:{title:"公告内容",leftUrl:"back",leftText:" "}}},computed:u({},Object(o["d"])({userInfo:function(t){return t.mh.mhUserInfo},wybmListItem:function(t){return t.gyswybm.wybmListItem}})),created:function(){this.ggid=this.$route.params.ggid,this.getCqxx()},methods:{parentReceive:function(){this.getCqxx()},getCqxx:function(){var t=this;this.$store.dispatch("gyswdxm/getGysGgnrAction",{ggid:this.ggid,zzid:this.userInfo.zzid}).then((function(e){e?(t.ggnr=e,t.pageStyles=0):t.pageStyles=1})).catch((function(e){t.pageStyles=3,t.$toast(e)}))},MoreAction:function(t){console.log("MoreAction======",t);var e=[];e.push(t.showmore),e.push(t.title),this.$router.push({name:"DbsxSjbqMore",params:{morexx:e}})}}},d=h,g=a("2877"),p=Object(g["a"])(d,r,n,!1,null,"4d97f3b2",null);e["default"]=p.exports}}]);
//# sourceMappingURL=Xmggnr.8184fab9.js.map