(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["InvoiceAddressAdd"],{"3e7b":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"addressadd"},[t("headerBar",{attrs:{"header-data":e.headerData}}),t("div",{staticClass:"container"},[t("div",{staticClass:"content"},[t("div",{staticClass:"common-main box"},[t("div",{staticClass:"content common-main"},[t("van-field",{attrs:{label:"收货人姓名","label-width":"110px",required:"",placeholder:"请输入收货人姓名"},model:{value:e.header,callback:function(a){e.header=a},expression:"header"}}),t("van-field",{attrs:{label:"手机号码","label-width":"110px",required:"",placeholder:"请输入手机号码"},model:{value:e.company_code,callback:function(a){e.company_code=a},expression:"company_code"}}),t("van-field",{attrs:{label:"固定电话","label-width":"110px",required:"",placeholder:"请输入固定电话"},model:{value:e.company_address,callback:function(a){e.company_address=a},expression:"company_address"}}),t("div",{staticClass:"spe-list"},[e._m(0),t("div",{staticClass:"spe-right"},[t("van-switch",{attrs:{size:"20px"},model:{value:e.checked,callback:function(a){e.checked=a},expression:"checked"}})],1)]),t("div",{on:{click:e.showPopup}},[t("van-field",{attrs:{label:"收货地址","label-width":"110px",required:"",placeholder:"请选择地址"},model:{value:e.address,callback:function(a){e.address=a},expression:"address"}})],1)],1),t("div",{staticClass:"bt-group"},[t("van-button",{attrs:{type:"info",size:"small"},on:{click:function(a){return e.saveInvoice()}}},[e._v("保存")])],1)])])]),t("van-popup",{style:{height:"70%"},attrs:{position:"bottom"},model:{value:e.show,callback:function(a){e.show=a},expression:"show"}},[t("XyAddress",{on:{getCheckResult:e.getCheckResult}})],1)],1)},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"spe-left"},[t("span",{staticClass:"tit"},[e._v("默认地址")])])}],n=(t("b0c0"),t("445c")),c=t("a001"),o={name:"InvoiceAddressAdd",components:{headerBar:n["a"],XyAddress:c["a"]},data:function(){return{addressShow:"",address:"",invoice:"",header:"",company_code:"",company_address:"",company_phone:"",company_bank:"",company_bankname:"",szjd:"",invoiceprovice:"",invoicecity:"",invoicecounty:"",invoicetown:"",invoiceaddress:"",checked:!0,show:!1,radio:"1",addressmodel:"",id:"",invoicecontent:"",fptt:"",nsrsbm:"",fpnr:"",headerData:{title:"新增发票地址",leftUrl:"back",leftText:" "}}},created:function(){},methods:{getCheckResult:function(e,a,t,s,i){i||(this.show=!1),e&&(this.address=e.text,this.invoiceprovice=e.value),a&&(this.address=this.address+"/"+a.text,this.invoicecity=a.value),t&&(this.address=this.address+"/"+t.text,this.invoicecounty=t.value),s&&(this.address=this.address+"/"+s.text,this.invoicetown=s.value)},saveInvoice:function(){this.$router.back()},showPopup:function(){this.show=!0},onChange:function(e,a,t){var s=e.getValues();console.log(s);for(var i="",n=0;n<s.length;n++)i=i+(0===n?"":"/")+s[n].name;this.addressmodel=i},onConfirm:function(e){console.log("val-----",e),this.invoiceprovice=e[0].name,this.invoicecity=e[1].name,this.invoicecounty=e[2].name,this.address=e[0].name+"/"+e[1].name+"/"+e[2].name,this.addressShow=e[2].code,this.show=!1},onCancel:function(){this.show=!1,this.$refs.myArea.reset()}}},r=o,l=t("2877"),d=Object(l["a"])(r,s,i,!1,null,"1b2cb7ae",null);a["default"]=d.exports},"445c":function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("header",{staticClass:"nav-bar"},[e.headerData.leftText?t("div",{staticClass:"nav-bar-left"},[t("div",{on:{click:function(a){return a.stopPropagation(),e.handelClick(e.headerData.leftUrl)}}},[t("i",{staticClass:"iconfont iconicon-back"}),t("div",{staticClass:"nav-bar-txt"},[e._v(e._s(e.headerData.leftText))])])]):e._e(),t("div",{staticClass:"nav-bar-title"},[e._v(e._s(e.headerData.title))]),t("div",{staticClass:"nav-bar-right"},[e.headerData.rightText?t("div",{staticClass:"nav-bar-txt",on:{click:function(a){return e.handelClick(e.headerData.rightUrl,e.headerData.rightCallBackClick)}}},[e._v(e._s(e.headerData.rightText))]):e._e(),e.headerData.showSearch?t("i",{staticClass:"iconfont iconsousuo",on:{click:function(a){return e.searchClick()}}}):e._e()])])},i=[],n={name:"HeaderBar",props:{headerData:{type:null,required:!0}},data:function(){return{}},created:function(){this.headerData&&(this.headerData.rightCallBackClick||(this.headerData.rightCallBackClick=!1))},methods:{searchClick:function(){this.$bus.$emit("showMeun",!0)},handelClick:function(e,a){if(console.log("targetUrl=====================",e),"back"!==e)if("needConfirm"!==e){if(e)this.$router.push(e);else if(a){var t="callback";this.headerData&&this.headerData.rightText&&(t=this.headerData.rightText),this.$emit("callbackClick",t)}}else this.$emit("on-exit");else this.$router.go(-1)}}},c=n,o=t("2877"),r=Object(o["a"])(c,s,i,!1,null,"416ac0a2",null);a["a"]=r.exports}}]);
//# sourceMappingURL=InvoiceAddressAdd.09573d98.js.map