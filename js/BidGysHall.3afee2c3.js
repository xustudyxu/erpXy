(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BidGysHall"],{"651f":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.showTop,expression:"showTop"}],staticClass:"scrollTop",on:{click:t.toTop}},[t._m(0)])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"aside-icon"},[a("i",{staticClass:"iconfont iconfanhuidingbu"})])}],n={name:"ScrollTop",data:function(){return{scrollTop:0,time:0,dParams:20,scrollState:0}},computed:{showTop:function(){var t=this.scrollTop>300;return t}},mounted:function(){window.addEventListener("scroll",this.getScrollTop)},methods:{toTop:function(t){if(!this.scrollState){this.scrollState=1,t.preventDefault();var s=document.documentElement.scrollTop||document.body.scrollTop;console.log("dis---------------------------------",s);var a=this;this.time=setInterval((function(){a.gotoTop(a.scrollTop-a.dParams)}),10)}},gotoTop:function(t){this.dParams+=20,t=t>0?t:0,document.documentElement.scrollTop=t,document.body.scrollTop=t,this.scrollTop<10&&(clearInterval(this.time),this.dParams=20,this.scrollState=0)},getScrollTop:function(){this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}}},l=n,c=a("2877"),o=Object(c["a"])(l,i,e,!1,null,"4a569401",null);s["a"]=o.exports},"6e1c":function(t,s,a){},"793e":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("van-sticky",[i("div",{staticClass:"special-nav"},[i("div",{staticClass:"nav-bar nobg noshadow"},[i("div",{staticClass:"nav-bar-left",on:{click:function(s){return t.goBack()}}},[i("i",{staticClass:"iconfont iconicon-back"})]),i("div",{staticClass:"nav-bar-title"},[i("div",{staticClass:"operation-btn",class:t.flag?"operation-fixed":""},t._l(["竞价信息","明细报价","相应条款"],(function(s,a){return i("div",{key:a,staticClass:"item",on:{click:function(s){return t.goTarget(a)}}},[t._v(t._s(s)+" ")])})),0)]),i("div",{staticClass:"nav-bar-right",on:{click:function(s){return t.goBack()}}},[i("i",{staticClass:"iconfont iconshenglvehao"})])])])]),i("div",{staticClass:"biddetail-img"},[i("van-swipe",{on:{change:t.onChange}},[t._l(t.slide,(function(t,s){return i("van-swipe-item",{key:s},[i("div",{staticClass:"slide-item"},[i("img",{attrs:{src:t.imgUrl}})])])})),i("div",{staticClass:"custom-indicator",attrs:{slot:"indicator"},slot:"indicator"},[t._v(" "+t._s(t.current+1)+"/4 ")])],2)],1),t._m(0),t._m(1),t._m(2),i("div",{staticClass:"content",attrs:{id:"section-2"}},[i("div",{staticClass:"common-main box"},[t._m(3),i("table",[t._m(4),i("tbody",[i("tr",[i("td",{attrs:{align:"center"}},[t._v("郑州信源信息技术股份有限公司")]),i("td",{attrs:{align:"center"}},[t._v("整机")]),i("td",{attrs:{align:"center"}},[t._v("23")]),i("td",{attrs:{align:"center"}},[t._v("台")]),i("td",{attrs:{align:"center"}},[t._v("8000")]),i("td",{attrs:{align:"center"}},[i("van-field",{attrs:{type:"number"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1)]),i("tr",[i("td",{attrs:{align:"center"}},[t._v("信源")]),i("td",{attrs:{align:"center"}},[t._v("整机")]),i("td",{attrs:{align:"center"}},[t._v("23")]),i("td",{attrs:{align:"center"}},[t._v("台")]),i("td",{attrs:{align:"center"}},[t._v("8000")]),i("td",{attrs:{align:"center"}},[i("van-field",{attrs:{type:"number"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1)]),i("tr",[i("td",{attrs:{align:"center"}},[t._v("信源")]),i("td",{attrs:{align:"center"}},[t._v("整机")]),i("td",{attrs:{align:"center"}},[t._v("23")]),i("td",{attrs:{align:"center"}},[t._v("台")]),i("td",{attrs:{align:"center"}},[t._v("8000")]),i("td",{attrs:{align:"center"}},[i("van-field",{attrs:{type:"number"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1)]),i("tr",[i("td",{attrs:{align:"center"}},[t._v("信源")]),i("td",{attrs:{align:"center"}},[t._v("整机")]),i("td",{attrs:{align:"center"}},[t._v("23")]),i("td",{attrs:{align:"center"}},[t._v("台")]),i("td",{attrs:{align:"center"}},[t._v("8000")]),i("td",{attrs:{align:"center"}},[i("van-field",{attrs:{type:"number"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1)]),i("tr",[i("td",{attrs:{align:"center"}},[t._v("信源")]),i("td",{attrs:{align:"center"}},[t._v("整机")]),i("td",{attrs:{align:"center"}},[t._v("23")]),i("td",{attrs:{align:"center"}},[t._v("台")]),i("td",{attrs:{align:"center"}},[t._v("8000")]),i("td",{attrs:{align:"center"}},[i("van-field",{attrs:{type:"number"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1)])])])])]),i("div",{staticClass:"content",attrs:{id:"section-3"}},[i("div",{staticClass:"common-main box"},[t._m(5),i("van-cell",{attrs:{title:"税种","is-link":"",value:"请选择税种"},on:{click:t.showszPopup}}),i("van-cell",{attrs:{title:"税率","is-link":"",value:"请选择税率"},on:{click:t.showslPopup}}),i("van-cell",{attrs:{title:"交货期","is-link":"",value:"2020年2月20日"},on:{click:t.showjhqPopup}}),i("van-cell",{attrs:{title:"交付方式","is-link":"",value:"请选择交付方式"},on:{click:t.showjffsPopup}})],1)]),t._m(6),i("van-tabs",{attrs:{swipeable:"",animated:""}},[i("van-tab",{attrs:{title:"报价记录"}},[i("div",{staticClass:"content"},[i("div",{staticClass:"common-main box"},[i("div",{staticClass:"title"},[i("div",{staticClass:"title-left"},[i("h2",[t._v("报价记录")]),i("div",{staticClass:"text"},[t._v(" 我的竞买号: U2901 ")])]),i("div",{staticClass:"title-right"},[t._v(" 全部 "),i("i",{staticClass:"iconfont iconarrowright"})])]),i("div",{staticClass:"bid-record"},[i("dl",[i("dt",[i("span",{staticClass:"r-text"},[t._v("U9981")]),i("span",{staticClass:"r-text"},[t._v("领先")]),i("span",{staticClass:"r-text"},[t._v("2020/01/10 10:45:25")])]),i("dd",[t._v("55000元")])]),i("dl",[i("dt",[i("span",{staticClass:"r-text"},[t._v("U9981")]),i("span",{staticClass:"r-text"},[t._v("出局")]),i("span",{staticClass:"r-text"},[t._v("2020/01/10 10:45:25")])]),i("dd",[t._v("55000元")])]),i("dl",[i("dt",[i("span",{staticClass:"r-text"},[t._v("U9981")]),i("span",{staticClass:"r-text"},[t._v("出局")]),i("span",{staticClass:"r-text"},[t._v("2020/01/10 10:45:25")])]),i("dd",[t._v("55000元")])]),i("dl",[i("dt",[i("span",{staticClass:"r-text"},[t._v("U9981")]),i("span",{staticClass:"r-text"},[t._v("出局")]),i("span",{staticClass:"r-text"},[t._v("2020/01/10 10:45:25")])]),i("dd",[t._v("55000元")])]),i("dl",[i("dt",[i("span",{staticClass:"r-text"},[t._v("U9981")]),i("span",{staticClass:"r-text"},[t._v("出局")]),i("span",{staticClass:"r-text"},[t._v("2020/01/10 10:45:25")])]),i("dd",[t._v("55000元")])]),i("dl",[i("dt",[i("span",{staticClass:"r-text"},[t._v("U9981")]),i("span",{staticClass:"r-text"},[t._v("出局")]),i("span",{staticClass:"r-text"},[t._v("2020/01/10 10:45:25")])]),i("dd",[t._v("55000元")])]),i("dl",[i("dt",[i("span",{staticClass:"r-text"},[t._v("U9981")]),i("span",{staticClass:"r-text"},[t._v("出局")]),i("span",{staticClass:"r-text"},[t._v("2020/01/10 10:45:25")])]),i("dd",[t._v("55000元")])])])])])]),i("van-tab",{attrs:{title:"系统消息"}},[i("div",{staticClass:"content"},[i("div",{staticClass:"common-main box"},[i("div",{staticClass:"title"},[i("div",{staticClass:"title-left"},[i("h2",[t._v("系统消息")])])]),i("div",{staticClass:"bid-notice"},[i("div",{staticClass:"notice-selet"},[i("div",{staticClass:"left"},[t._v("选择对象")]),i("div",{staticClass:"right",on:{click:function(s){return t.goSuplist()}}},[t._v(" 选择供应商 "),i("i",{staticClass:"iconfont iconarrowright"})])]),i("div",{staticClass:"notice-selet"},[i("div",{staticClass:"left"},[i("div",{staticClass:"sup"},[t._v(" 郑州信源信息技术股份有限公司 "),i("i",{staticClass:"iconfont iconguanbi"})]),i("div",{staticClass:"sup"},[t._v(" 杭州艺福堂茶业有限公司 "),i("i",{staticClass:"iconfont iconguanbi"})])]),i("div",{staticClass:"right",on:{click:function(s){return t.goSuplist()}}},[t._v(" 选择供应商 "),i("i",{staticClass:"iconfont iconarrowright"})])]),i("div",{staticClass:"notice-c"},[i("div",{staticClass:"notice-c-t"},[t._v("消息内容")]),i("van-field",{attrs:{rows:"2",autosize:"",type:"textarea",placeholder:"请输入留言"},model:{value:t.message,callback:function(s){t.message=s},expression:"message"}}),i("div",{staticClass:"notice-c-fs",on:{click:function(s){return t.SendXx()}}},[t._v("发送")])],1)])])]),i("div",{staticClass:"content"},[i("div",{staticClass:"common-main box"},[i("van-cell",{attrs:{title:"消息列表","is-link":"",value:""},on:{click:function(s){return t.goMsglist()}}})],1)]),i("div",{staticClass:"content"},[i("div",{staticClass:"common-main box"},[i("div",{staticClass:"title"},[i("div",{staticClass:"title-left"},[i("h2",[t._v("系统消息")])])]),i("div",{staticClass:"bid-notice"},[i("div",{staticClass:"noticelist"},[i("div",{staticClass:"noticelist-t"},[i("span",{staticClass:"text"},[i("em",[t._v("经办人")]),t._v("对所有供应商说:")]),i("span",{staticClass:"date"},[t._v("2020/01/10 10:45:25")])]),i("div",{staticClass:"noticelist-c"},[t._v(" 正式竞价已经开始，请所有供应商抓紧时间进行报价! ")])]),i("div",{staticClass:"noticelist"},[i("div",{staticClass:"noticelist-t"},[i("span",{staticClass:"text"},[i("em",[t._v("经办人")]),t._v("对所有供应商说:")]),i("span",{staticClass:"date"},[t._v("2020/01/10 10:45:25")])]),i("div",{staticClass:"noticelist-c"},[t._v(" 正式竞价已经开始，请所有供应商抓紧时间进行报价! 正式竞价已经开始，请所有供应商抓紧时间进行报价! 正式竞价已经开始，请所有供应商抓紧时间进行报价! ")])]),i("div",{staticClass:"noticelist"},[i("div",{staticClass:"noticelist-t"},[i("span",{staticClass:"text"},[i("em",[t._v("经办人")]),t._v("对所有供应商说:")]),i("span",{staticClass:"date"},[t._v("2020/01/10 10:45:25")])]),i("div",{staticClass:"noticelist-c"},[t._v(" 正式竞价已经开始，请所有供应商抓紧时间进行报价! ")])])])])])])],1),i("div",{staticClass:"common-space"}),i("div",{staticClass:"foot-btn fixed"},[i("ul",[i("li",[i("van-button",{attrs:{type:"info",round:"",size:"large"},on:{click:t.showcjPopup}},[t._v("出价")])],1)])]),i("van-popup",{attrs:{position:"bottom",closeable:"",round:""},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[i("van-picker",{attrs:{columns:t.columns}})],1),i("van-popup",{attrs:{position:"bottom",closeable:"",round:""},model:{value:t.show1,callback:function(s){t.show1=s},expression:"show1"}},[i("van-picker",{attrs:{columns:t.columns1}})],1),i("van-popup",{style:{height:"40%"},attrs:{position:"bottom",round:""},model:{value:t.show2,callback:function(s){t.show2=s},expression:"show2"}},[i("van-datetime-picker",{attrs:{type:"datetime","min-date":t.minDate,"max-date":t.maxDate},model:{value:t.currentDate,callback:function(s){t.currentDate=s},expression:"currentDate"}})],1),i("van-popup",{style:{height:"30%"},attrs:{position:"bottom",closeable:"",round:""},model:{value:t.show3,callback:function(s){t.show3=s},expression:"show3"}},[i("van-picker",{attrs:{columns:t.columns2}})],1),i("van-popup",{style:{height:"auto"},attrs:{position:"bottom",closeable:"",round:""},model:{value:t.show4,callback:function(s){t.show4=s},expression:"show4"}},[i("div",{staticClass:"bidshow"},[i("div",{staticClass:"bidshow-list"},[i("div",{staticClass:"bid-img"},[i("img",{attrs:{src:a("acaf")}})]),i("div",{staticClass:"bid-list-c"},[i("div",{staticClass:"bid-price"},[t._v("当前价 "),i("em",[t._v("2900元")])]),i("div",{staticClass:"bid-name"},[t._v("中国北方稀土高科技股份限公司25加仑桶装饮用水采购")])])]),i("div",{staticClass:"bidshow-stepper"},[i("van-stepper",{model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1),i("div",{staticClass:"bidshow-tag"},[i("div",{staticClass:"tag"},[t._v("+1000")]),i("div",{staticClass:"tag"},[t._v("+2000")]),i("div",{staticClass:"tag active"},[t._v("+3000")]),i("div",{staticClass:"tag"},[t._v("+4000")]),i("div",{staticClass:"tag"},[t._v("+5000")]),i("div",{staticClass:"tag"},[t._v("+8000")])]),i("div",{staticClass:"bidshow-rank"},[t._v(" 我的排名 "),i("span",{staticClass:"text"},[t._v("第3名"),i("em",[t._v("[62000元]")])])]),i("div",{staticClass:"foot-btn"},[i("ul",[i("li",[i("van-button",{attrs:{type:"info",round:"",size:"large"},on:{click:t.ConfirmCj}},[t._v("出价")])],1)])])])]),i("Backtop")],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bid-time"},[a("div",{staticClass:"mode"},[a("i",{staticClass:"iconfont iconshijian"}),t._v(" 正在进行 ")]),a("div",{staticClass:"time"},[t._v(" 距结束"),a("span",{staticClass:"n-time"},[t._v("36")]),t._v("时"),a("span",{staticClass:"n-time"},[t._v("26")]),t._v("分"),a("span",{staticClass:"n-time"},[t._v("10")]),t._v("秒 ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"biddetail-top"},[a("div",{staticClass:"detail-price"},[t._v(" 当前价 "),a("span",{staticClass:"num"},[t._v("1999元")])]),a("div",{staticClass:"detail-title"},[t._v("中国北方稀土高科技股份限公司25加仑桶装饮用水采购竞价项目")]),a("div",{staticClass:"detail-text"},[a("span",[t._v("在线供应商 "),a("em",[t._v("26")])]),a("span",[t._v("总竞价次数 "),a("em",[t._v("359")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content",attrs:{id:"section-1"}},[a("div",{staticClass:"common-main box"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-left"},[a("h2",[t._v("竞价信息")])])]),a("div",{staticClass:"fit-text fit-text2"},[a("dl",[a("dt",[t._v("出价方向")]),a("dd",[t._v("反拍")])]),a("dl",[a("dt",[t._v("出价形式")]),a("dd",[t._v("密封式出价")])]),a("dl",[a("dt",[t._v("起拍价")]),a("dd",[t._v("2000元")])]),a("dl",[a("dt",[t._v("保证金")]),a("dd",[t._v("500元")])]),a("dl",[a("dt",[t._v("每次延时")]),a("dd",[t._v("5分钟")])]),a("dl",[a("dt",[t._v("延时次数")]),a("dd",[t._v("10次")])]),a("dl",[a("dt",[t._v("加价幅度")]),a("dd",[t._v("1000元")])]),a("dl",[a("dt",[t._v("剩余延时")]),a("dd",[t._v("7次")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"title"},[a("div",{staticClass:"title-left"},[a("h2",[t._v("明细报价")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{staticStyle:{width:"20%"},attrs:{align:"center"}},[t._v("供应商")]),a("th",{staticStyle:{width:"15%"},attrs:{align:"center"}},[t._v("规格")]),a("th",{staticStyle:{width:"15%"},attrs:{align:"center"}},[t._v("数量")]),a("th",{staticStyle:{width:"15%"},attrs:{align:"center"}},[t._v("单位")]),a("th",{staticStyle:{width:"15%"},attrs:{align:"center"}},[t._v("起拍价")]),a("th",{staticStyle:{width:"20%"},attrs:{align:"center"}},[t._v("报价")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"title"},[a("div",{staticClass:"title-left"},[a("h2",[t._v("响应条款")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("div",{staticClass:"common-main box"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-left"},[a("h2",[t._v("补充说明及要求")])])]),a("div",{staticClass:"p-text"},[t._v(" 即日起至2018/6/29 17:00:00,进入采购中心供应商库的供应商登录政府采购网首页，用注册时设定的用户名和密码进入“政府采购电子招标 系统”中的“电子竞价”栏目，查看采购项目详细需求，在竞价截止时间前报价并提交相关资料，在线参与网上竞价。 ")])])])}],n=a("651f"),l={name:"BidGysHall",components:{Backtop:n["a"]},data:function(){return{activeStep:0,flag:!1,btnScrollTop:0,current:0,slide:[{imgUrl:a("acaf")},{imgUrl:a("acaf")},{imgUrl:a("acaf")},{imgUrl:a("acaf")}],show:!1,show1:!1,show2:!1,show3:!1,show4:!1,date:"2020年2月20日",columns:["普通税","增值税"],columns1:["7%","15%","20%"],columns2:["交付方式1","交付方式2","交付方式3"],minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),currentDate:new Date}},mounted:function(){var t=this,s=document.querySelector(".operation-btn").offsetTop;this.btnScrollTop=s,document.addEventListener("scroll",(function(){var s=document.documentElement.scrollTop;s>=t.btnScrollTop?t.flag=!0:t.flag=!1}))},methods:{onChange:function(t){this.current=t},showszPopup:function(){this.show=!0},showslPopup:function(){this.show1=!0},showjhqPopup:function(){this.show2=!0},showjffsPopup:function(){this.show3=!0},showcjPopup:function(){this.show4=!0},goMsglist:function(){this.$router.push({name:"JjMsgList"})},goSuplist:function(){this.$router.push({name:"JjSupList"})},ConfirmCj:function(){this.$dialog.confirm({title:"提示",message:"确认提交报价吗？"}).then((function(){})).catch((function(){}))},SendXx:function(){this.$toast.success("消息发送成功")},goTarget:function(t){var s="#section-"+(t+1),a=document.querySelector("body"),i=this.$el.querySelector(s);a.scrollHeight<=a.scrollTop+a.clientHeight&&(this.activeStep=t),document.documentElement.scrollTop=i.offsetTop-60}}},c=l,o=(a("9e6b"),a("2877")),r=Object(o["a"])(c,i,e,!1,null,"1d0fb87e",null);s["default"]=r.exports},"9e6b":function(t,s,a){"use strict";var i=a("6e1c"),e=a.n(i);e.a},acaf:function(t,s,a){t.exports=a.p+"img/01.483faf07.png"}}]);
//# sourceMappingURL=BidGysHall.3afee2c3.js.map