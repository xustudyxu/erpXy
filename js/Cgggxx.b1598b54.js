(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cgggxx"],{"445c":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"nav-bar"},[t.headerData.leftText?e("div",{staticClass:"nav-bar-left"},[e("div",{on:{click:function(a){return a.stopPropagation(),t.handelClick(t.headerData.leftUrl)}}},[e("i",{staticClass:"iconfont iconicon-back"}),e("div",{staticClass:"nav-bar-txt"},[t._v(t._s(t.headerData.leftText))])])]):t._e(),e("div",{staticClass:"nav-bar-title"},[t._v(t._s(t.headerData.title))]),e("div",{staticClass:"nav-bar-right"},[t.headerData.rightText?e("div",{staticClass:"nav-bar-txt",on:{click:function(a){return t.handelClick(t.headerData.rightUrl,t.headerData.rightCallBackClick)}}},[t._v(t._s(t.headerData.rightText))]):t._e(),t.headerData.showSearch?e("i",{staticClass:"iconfont iconsousuo",on:{click:function(a){return t.searchClick()}}}):t._e()])])},n=[],s={name:"HeaderBar",props:{headerData:{type:null,required:!0}},data:function(){return{}},created:function(){this.headerData&&(this.headerData.rightCallBackClick||(this.headerData.rightCallBackClick=!1))},methods:{searchClick:function(){this.$bus.$emit("showMeun",!0)},handelClick:function(t,a){if(console.log("targetUrl=====================",t),"back"!==t)if("needConfirm"!==t){if(t)this.$router.push(t);else if(a){var e="callback";this.headerData&&this.headerData.rightText&&(e=this.headerData.rightText),this.$emit("callbackClick",e)}}else this.$emit("on-exit");else this.$router.go(-1)}}},c=s,r=e("2877"),l=Object(r["a"])(c,i,n,!1,null,"416ac0a2",null);a["a"]=l.exports},"929e":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("headerBar",{attrs:{"header-data":t.headerData}}),t._m(0)],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("div",{staticClass:"common-main box"},[e("div",{staticClass:"notice-title"},[t._v("采购风险管控的升级和多元：以风险模型、大数据技术为基础")]),e("div",{staticClass:"notice-date"},[e("span",[e("i",{staticClass:"iconfont iconjingbanren"}),t._v(" 李冰冰 ")]),e("span",[e("i",{staticClass:"iconfont iconshijian"}),t._v(" 2020-07-31 10:00:50 ")])]),e("div",{staticClass:"notice-content"},[t._v(" 2019年度佛山供电局配网第一批常用材料框架招标(招标编号：0002200000059924)，已由项目审批机关批准，项目资金来源为其他，招标人为广东电网有限责任公司佛山供电局。本项目已具备招标条件，现进行公开招标。 招标项目所在地区：广东省佛山市 项目信息 1.1. 项目名称：2019年度佛山供电局配网第一批常用材料框架招标（二次招标） 1.2. 招标编号：0002200000059924 1.3. 招标人：广东电网有限责任公司佛山供电局 1.4. 采购方式：公开招标 1.5. 招标方式：框架 1.6. 项目类别：货物 1.7. 资金来源：其他 1.8. 资格审查方式：资格后审 1.9. 招标代理机构：广东电网物资有限公司 ")])])])])}],s=e("445c"),c={components:{headerBar:s["a"]},data:function(){return{headerData:{title:"采购公告信息",leftUrl:"/Wdxmxmxq",leftText:" "}}},computed:{},created:function(){},methods:{}},r=c,l=e("2877"),o=Object(l["a"])(r,i,n,!1,null,"787059e4",null);a["default"]=o.exports}}]);
//# sourceMappingURL=Cgggxx.b1598b54.js.map