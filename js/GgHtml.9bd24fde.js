(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GgHtml"],{1100:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"error-main"},[0!=t.pageStyle?a("div",{staticClass:"status"},[a("div",{class:t.getCss()}),a("h3",[t._v(t._s(t.getTitle()))]),a("van-button",{directives:[{name:"show",rawName:"v-show",value:t.showButton,expression:"showButton"}],attrs:{type:"info"},on:{click:t.errorButton}},[t._v(t._s(t.getButton()))])],1):t._e()])},n=[],l={name:"Error",props:{pageStyle:{type:null,required:!0},showButton:{default:!0,type:Boolean}},data:function(){return{}},watch:{pageTitle:function(t){}},created:function(){},methods:{errorButton:function(){-1==this.pageStyle?this.$router.push("/login"):this.$emit("errorButton")},getTitle:function(){return-1==this.pageStyle?"未登录，请先登录":0==this.pageStyle?"正常状态不显示":1==this.pageStyle?"暂无数据":2==this.pageStyle?"无网络，请检查当前网络":3==this.pageStyle?"网络请求失败，请再次尝试":4==this.pageStyle?this.pageTitle:void 0},getCss:function(){return-1==this.pageStyle?"status-icon no-result":0==this.pageStyle?"status-icon no-network":1==this.pageStyle?"status-icon no-result":2==this.pageStyle?"status-icon no-network":3==this.pageStyle?"status-icon no-network":4==this.pageStyle?"status-icon no-xiangmu":void 0},getButton:function(){return-1==this.pageStyle?"登录":"再试一次"}}},r=l,s=a("2877"),o=Object(s["a"])(r,i,n,!1,null,"409e994e",null);e["a"]=o.exports},"445c":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"nav-bar"},[t.headerData.leftText?a("div",{staticClass:"nav-bar-left"},[a("div",{on:{click:function(e){return e.stopPropagation(),t.handelClick(t.headerData.leftUrl)}}},[a("i",{staticClass:"iconfont iconicon-back"}),a("div",{staticClass:"nav-bar-txt"},[t._v(t._s(t.headerData.leftText))])])]):t._e(),a("div",{staticClass:"nav-bar-title"},[t._v(t._s(t.headerData.title))]),a("div",{staticClass:"nav-bar-right"},[t.headerData.rightText?a("div",{staticClass:"nav-bar-txt",on:{click:function(e){return t.handelClick(t.headerData.rightUrl,t.headerData.rightCallBackClick)}}},[t._v(t._s(t.headerData.rightText))]):t._e(),t.headerData.showSearch?a("i",{staticClass:"iconfont iconsousuo",on:{click:function(e){return t.searchClick()}}}):t._e()])])},n=[],l={name:"HeaderBar",props:{headerData:{type:null,required:!0}},data:function(){return{}},created:function(){this.headerData&&(this.headerData.rightCallBackClick||(this.headerData.rightCallBackClick=!1))},methods:{searchClick:function(){this.$bus.$emit("showMeun",!0)},handelClick:function(t,e){if(console.log("targetUrl=====================",t),"back"!==t)if("needConfirm"!==t){if(t)this.$router.push(t);else if(e){var a="callback";this.headerData&&this.headerData.rightText&&(a=this.headerData.rightText),this.$emit("callbackClick",a)}}else this.$emit("on-exit");else this.$router.go(-1)}}},r=l,s=a("2877"),o=Object(s["a"])(r,i,n,!1,null,"416ac0a2",null);e["a"]=o.exports},"45a0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"html-page level"},[a("headerBar",{attrs:{"header-data":t.headerData}}),t.loadFlag?a("div",{staticClass:"html-content"},[a("p",{domProps:{innerHTML:t._s(t.html)}})]):a("div",[a("error-page",{attrs:{"page-style":t.jbrdballPage.pageStyles,"page-title":t.jbrdballPage.pageTitle},on:{errorButton:t.parentReceive}})],1)],1)},n=[],l=a("445c"),r=a("1100"),s={name:"GgHtml",components:{headerBar:l["a"],errorPage:r["a"]},data:function(){return{loading:!1,html:"",headerData:{title:"文件查看",leftUrl:"back",leftText:" "},jbrdballPage:{pageStyles:0,pageTitle:""},loadFlag:!1,url:"http://61.163.210.202:9017/gqcg/ananymous/file/download/bba5fdf1faf248889077b4c3f08ef16a"}},watch:{},created:function(){this.load(this.$route.params.url)},mounted:function(){},methods:{parentReceive:function(t){this.load(this.$route.params.url)},load:function(t){var e=this;if(t&&t.length>0){this.$showLoading(!0),this.loading=!0;var a={accept:"text/html, text/plain"};this.$http.get(t,a).then((function(t){e.loading=!1,e.loadFlag=!0,e.$hideLoading(!0),t.data.length>0?e.html=t.data:(e.loadFlag=!1,e.jbrdballPage.pageStyles=1,e.html="加载失败",e.$toast.fail("暂无数据"))})).catch((function(){e.loading=!1,e.loadFlag=!1,e.$hideLoading(!0),e.html="加载失败"}))}}}},o=s,c=a("2877"),h=Object(c["a"])(o,i,n,!1,null,"2713708c",null);e["default"]=h.exports}}]);
//# sourceMappingURL=GgHtml.9bd24fde.js.map