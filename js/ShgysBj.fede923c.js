(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ShgysBj"],{"445c":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",{staticClass:"nav-bar"},[t.headerData.leftText?a("div",{staticClass:"nav-bar-left"},[a("div",{on:{click:function(s){return s.stopPropagation(),t.handelClick(t.headerData.leftUrl)}}},[a("i",{staticClass:"iconfont iconicon-back"}),a("div",{staticClass:"nav-bar-txt"},[t._v(t._s(t.headerData.leftText))])])]):t._e(),a("div",{staticClass:"nav-bar-title"},[t._v(t._s(t.headerData.title))]),a("div",{staticClass:"nav-bar-right"},[t.headerData.rightText?a("div",{staticClass:"nav-bar-txt",on:{click:function(s){return t.handelClick(t.headerData.rightUrl,t.headerData.rightCallBackClick)}}},[t._v(t._s(t.headerData.rightText))]):t._e(),t.headerData.showSearch?a("i",{staticClass:"iconfont iconsousuo",on:{click:function(s){return t.searchClick()}}}):t._e()])])},e=[],l={name:"HeaderBar",props:{headerData:{type:null,required:!0}},data:function(){return{}},created:function(){this.headerData&&(this.headerData.rightCallBackClick||(this.headerData.rightCallBackClick=!1))},methods:{searchClick:function(){this.$bus.$emit("showMeun",!0)},handelClick:function(t,s){if(console.log("targetUrl=====================",t),"back"!==t)if("needConfirm"!==t){if(t)this.$router.push(t);else if(s){var a="callback";this.headerData&&this.headerData.rightText&&(a=this.headerData.rightText),this.$emit("callbackClick",a)}}else this.$emit("on-exit");else this.$router.go(-1)}}},c=l,v=a("2877"),r=Object(v["a"])(c,i,e,!1,null,"416ac0a2",null);s["a"]=r.exports},7592:function(t,s,a){"use strict";var i=a("d5ac"),e=a.n(i);e.a},d5ac:function(t,s,a){},e1db:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("headerBar",{attrs:{"header-data":t.headerData}}),a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[a("div",{staticClass:"common-main box"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-left"},[a("h2",[t._v("郑州信源信息技术股份有限公司"),a("van-tag",{attrs:{type:"danger"}},[t._v("高")])],1)])]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4)])]),a("div",{staticClass:"content"},[a("div",{staticClass:"common-main box"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-left"},[a("h2",{staticClass:"red"},[t._v("河南军辉工贸有限责任公司"),a("van-tag",{attrs:{type:"success"}},[t._v("低")])],1)])]),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9)])]),t._m(10),t._m(11),t._m(12)])],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("报价轮次")]),a("div",{staticClass:"pagelist-right"},[t._v("1")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("单价（含税）")]),a("div",{staticClass:"pagelist-right"},[t._v("500")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("小计（含税）")]),a("div",{staticClass:"pagelist-right"},[t._v("30000.0")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("小计（含税）")]),a("div",{staticClass:"pagelist-right"},[t._v("30000.0")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("成交")]),a("div",{staticClass:"pagelist-right"},[t._v("40")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("报价轮次")]),a("div",{staticClass:"pagelist-right red"},[t._v("1")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("单价（含税）")]),a("div",{staticClass:"pagelist-right red"},[t._v("500")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("小计（含税）")]),a("div",{staticClass:"pagelist-right red"},[t._v("30000.0")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("小计（含税）")]),a("div",{staticClass:"pagelist-right red"},[t._v("30000.0")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("成交")]),a("div",{staticClass:"pagelist-right red"},[t._v("40")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("div",{staticClass:"common-main box"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-left"},[a("h2",[t._v("河南军辉工贸有限责任公司")])])]),a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("报价轮次")]),a("div",{staticClass:"pagelist-right"},[t._v("1")])]),a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("单价（含税）")]),a("div",{staticClass:"pagelist-right"},[t._v("500")])]),a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("小计（含税）")]),a("div",{staticClass:"pagelist-right"},[t._v("30000.0")])]),a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("小计（含税）")]),a("div",{staticClass:"pagelist-right"},[t._v("30000.0")])]),a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("成交")]),a("div",{staticClass:"pagelist-right"},[t._v("40")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("div",{staticClass:"common-main box"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-left"},[a("h2",[t._v("河南军辉工贸有限责任公司")])])]),a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("报价轮次")]),a("div",{staticClass:"pagelist-right"},[t._v("1")])]),a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("单价（含税）")]),a("div",{staticClass:"pagelist-right"},[t._v("500")])]),a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("小计（含税）")]),a("div",{staticClass:"pagelist-right"},[t._v("30000.0")])]),a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("小计（含税）")]),a("div",{staticClass:"pagelist-right"},[t._v("30000.0")])]),a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("成交")]),a("div",{staticClass:"pagelist-right"},[t._v("40")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("div",{staticClass:"common-main box"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-left"},[a("h2",[t._v("河南军辉工贸有限责任公司")])])]),a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("报价轮次")]),a("div",{staticClass:"pagelist-right"},[t._v("1")])]),a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("单价（含税）")]),a("div",{staticClass:"pagelist-right"},[t._v("500")])]),a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("小计（含税）")]),a("div",{staticClass:"pagelist-right"},[t._v("30000.0")])]),a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("小计（含税）")]),a("div",{staticClass:"pagelist-right"},[t._v("30000.0")])]),a("div",{staticClass:"page-list"},[a("div",{staticClass:"pagelist-left"},[t._v("成交")]),a("div",{staticClass:"pagelist-right"},[t._v("40")])])])])}],l=a("445c"),c={name:"Jbrshbj",components:{headerBar:l["a"]},data:function(){return{headerData:{title:"供应商报价",leftUrl:"/xxxx",leftText:" "}}},computed:{},created:function(){},methods:{}},v=c,r=(a("7592"),a("2877")),n=Object(r["a"])(v,i,e,!1,null,"4831e998",null);s["default"]=n.exports}}]);
//# sourceMappingURL=ShgysBj.fede923c.js.map