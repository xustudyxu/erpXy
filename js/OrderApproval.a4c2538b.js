(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["OrderApproval"],{1100:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"error-main"},[0!=t.pageStyle?e("div",{staticClass:"status"},[e("div",{class:t.getCss()}),e("h3",[t._v(t._s(t.getTitle()))]),e("van-button",{directives:[{name:"show",rawName:"v-show",value:t.showButton,expression:"showButton"}],attrs:{type:"info"},on:{click:t.errorButton}},[t._v(t._s(t.getButton()))])],1):t._e()])},r=[],o={name:"Error",props:{pageStyle:{type:null,required:!0},showButton:{default:!0,type:Boolean}},data:function(){return{}},watch:{pageTitle:function(t){}},created:function(){},methods:{errorButton:function(){-1==this.pageStyle?this.$router.push("/login"):this.$emit("errorButton")},getTitle:function(){return-1==this.pageStyle?"未登录，请先登录":0==this.pageStyle?"正常状态不显示":1==this.pageStyle?"暂无数据":2==this.pageStyle?"无网络，请检查当前网络":3==this.pageStyle?"网络请求失败，请再次尝试":4==this.pageStyle?this.pageTitle:void 0},getCss:function(){return-1==this.pageStyle?"status-icon no-result":0==this.pageStyle?"status-icon no-network":1==this.pageStyle?"status-icon no-result":2==this.pageStyle?"status-icon no-network":3==this.pageStyle?"status-icon no-network":4==this.pageStyle?"status-icon no-xiangmu":void 0},getButton:function(){return-1==this.pageStyle?"登录":"再试一次"}}},i=o,s=e("2877"),c=Object(s["a"])(i,n,r,!1,null,"409e994e",null);a["a"]=c.exports},"33de":function(t,a,e){"use strict";e.d(a,"Yb",(function(){return r})),e.d(a,"L",(function(){return o})),e.d(a,"M",(function(){return u})),e.d(a,"T",(function(){return p})),e.d(a,"A",(function(){return l})),e.d(a,"Vb",(function(){return h})),e.d(a,"Eb",(function(){return b})),e.d(a,"R",(function(){return y})),e.d(a,"W",(function(){return g})),e.d(a,"ab",(function(){return k})),e.d(a,"O",(function(){return v})),e.d(a,"B",(function(){return U})),e.d(a,"P",(function(){return j})),e.d(a,"C",(function(){return x})),e.d(a,"r",(function(){return _})),e.d(a,"s",(function(){return C})),e.d(a,"Rb",(function(){return D})),e.d(a,"bb",(function(){return P})),e.d(a,"F",(function(){return q})),e.d(a,"K",(function(){return w})),e.d(a,"N",(function(){return L})),e.d(a,"Ab",(function(){return ht})),e.d(a,"zb",(function(){return mt})),e.d(a,"ub",(function(){return A})),e.d(a,"Tb",(function(){return O})),e.d(a,"Ub",(function(){return $})),e.d(a,"n",(function(){return B})),e.d(a,"qb",(function(){return E})),e.d(a,"sb",(function(){return I})),e.d(a,"yb",(function(){return z})),e.d(a,"wb",(function(){return N})),e.d(a,"Z",(function(){return R})),e.d(a,"fb",(function(){return V})),e.d(a,"X",(function(){return F})),e.d(a,"Qb",(function(){return J})),e.d(a,"x",(function(){return X})),e.d(a,"y",(function(){return Z})),e.d(a,"nb",(function(){return M})),e.d(a,"e",(function(){return Y})),e.d(a,"eb",(function(){return G})),e.d(a,"db",(function(){return H})),e.d(a,"cb",(function(){return K})),e.d(a,"Db",(function(){return Q})),e.d(a,"Ob",(function(){return W})),e.d(a,"Nb",(function(){return tt})),e.d(a,"d",(function(){return at})),e.d(a,"lb",(function(){return et})),e.d(a,"Y",(function(){return nt})),e.d(a,"hb",(function(){return rt})),e.d(a,"f",(function(){return ot})),e.d(a,"k",(function(){return it})),e.d(a,"z",(function(){return st})),e.d(a,"w",(function(){return ct})),e.d(a,"Hb",(function(){return ut})),e.d(a,"u",(function(){return dt})),e.d(a,"o",(function(){return pt})),e.d(a,"Xb",(function(){return lt})),e.d(a,"pb",(function(){return ft})),e.d(a,"xb",(function(){return bt})),e.d(a,"g",(function(){return yt})),e.d(a,"kb",(function(){return gt})),e.d(a,"Lb",(function(){return vt})),e.d(a,"U",(function(){return Ut})),e.d(a,"V",(function(){return jt})),e.d(a,"t",(function(){return xt})),e.d(a,"v",(function(){return _t})),e.d(a,"Pb",(function(){return Ct})),e.d(a,"b",(function(){return Dt})),e.d(a,"c",(function(){return Pt})),e.d(a,"Sb",(function(){return qt})),e.d(a,"D",(function(){return wt})),e.d(a,"tb",(function(){return Lt})),e.d(a,"Kb",(function(){return St})),e.d(a,"Ib",(function(){return Tt})),e.d(a,"Mb",(function(){return At})),e.d(a,"jb",(function(){return Ot})),e.d(a,"mb",(function(){return $t})),e.d(a,"m",(function(){return Bt})),e.d(a,"rb",(function(){return Et})),e.d(a,"Gb",(function(){return It})),e.d(a,"l",(function(){return zt})),e.d(a,"ib",(function(){return kt})),e.d(a,"ob",(function(){return Nt})),e.d(a,"h",(function(){return Rt})),e.d(a,"a",(function(){return Vt})),e.d(a,"j",(function(){return Ft})),e.d(a,"i",(function(){return Jt})),e.d(a,"Cb",(function(){return Xt})),e.d(a,"Jb",(function(){return Zt})),e.d(a,"q",(function(){return Mt})),e.d(a,"Bb",(function(){return Yt})),e.d(a,"Fb",(function(){return Gt})),e.d(a,"gb",(function(){return Ht})),e.d(a,"Zb",(function(){return Kt})),e.d(a,"p",(function(){return Qt})),e.d(a,"vb",(function(){return Wt})),e.d(a,"J",(function(){return d})),e.d(a,"H",(function(){return i})),e.d(a,"I",(function(){return s})),e.d(a,"G",(function(){return c})),e.d(a,"S",(function(){return S})),e.d(a,"Q",(function(){return T})),e.d(a,"E",(function(){return m})),e.d(a,"Wb",(function(){return f}));var n=e("80d5"),r={url:"/app/jck/zgrwgysList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},o={url:"/app/dsxj/dsxjjgList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},i={url:"/app/jj/dsjjjgList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},s={url:"/app/jj/getZbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},c={url:"/app/jj/getBjls",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},u={url:"/app/dsxj/dsxjzqList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},d={url:"/app/jj/dsjjzqList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},p={url:"/app/dsxj/finishDsxj",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},l={url:"/app/dsxj/deleteDbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},h={url:"/app/dsxj/setDbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},m={url:"/app/jj/deleteDbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},f={url:"/app/jj/setDbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},b={url:"/app/dsxj/getZbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},y={url:"/app/dsxj/execStopDsxj",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},g={url:"/app/dsxj/getBjls",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},k={url:"/app/jj/getDsjjxmxq",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},v={url:"/app/jj/execRevokeDsjjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},U={url:"/app/jj/deleteDsjjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},j={url:"/app/dsxj/execRevokeDsxjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},x={url:"/app/dsxj/deleteDsxjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},_={url:"/app/jj/createDsjjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},C={url:"/app/dsxj/createDsxjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},D={url:"/app/dsxj/saveDsxjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},P={url:"/app/dsxj/getDsxjxmxq",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},q={url:"/app/jj/dsjjList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},w={url:"/app/dsxj/dsxjList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},L={url:"/app/jj/execJbxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},S={url:"/app/jj/finishDsjj",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},T={url:"/app/jj/execStopDsjj",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},A={url:"app/ananymous/address/getSfcsq",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},O={url:"/app/ananymous/product/searchProduct",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},$={url:"/app/ananymous/product/searchProductList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},B={url:"/app/ananymous/category/category",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},E={url:"/app/ananymous/product/e_product",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},I={url:"/app/ananymous/product/e_product_text",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},z={url:"/app/ananymous/product/supplierList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},N={url:"app/authentication/address/list",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},R={url:"app/ananymous/address/getDefAddress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},V={url:"app/authentication/order/getLessStock",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},F={url:"app/authentication/chart/listCart",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},J={url:"app/authentication/chart/saveCart",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},X={url:"app/authentication/chart/deleteCart",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Z={url:"app/authentication/chart/deleteCarts",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},M={url:"app/authentication/chart/listOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Y={url:"app/authentication/chart/addCart",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},G={url:"app/authentication/invoice/list",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},H={url:"app/authentication/invoice/listInvoiceAddress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},K={url:"app/authentication/order/freight",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Q={url:"app/authentication/address/getYsAddress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},W={url:"app/authentication/order/placeOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},tt={url:"app/authentication/order/payOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},at={url:"app/ananymous/product/accessoryList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},et={url:"app/authentication/order/listOrderDetailByPro",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},nt={url:"app/authentication/comparision/listComparisionProduct",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},rt={url:"app/ananymous/product/listmyfavorite",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},ot={url:"app/authentication/comparision/addComparision",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},it={url:"app/authentication/comparision/cancleComparision",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},st={url:"app/authentication/comparision/deleteComparision",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},ct={url:"app/authentication/comparision/deleteAllComparision",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},ut={url:"app/authentication/comparision/listComparisionDetail",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},dt={url:"app/authentication/chart/deleteAccessory",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},pt={url:"app/ananymous/product/checkPrice",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},lt={url:"app/authentication/order/validateOrderApproal",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},ht={url:"/app/ananymous/product/hotProduct",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},mt={url:"/app/ananymous/product/dszqhotProduct",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},ft={url:"/app/ananymous/ww/main/proImgList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},bt={url:"/app/authentication/xtgl/hotwordsList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},yt={url:"/app/authentication/xtgl/savehotword",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},gt={url:"/app/authentication/order/getOrderCount",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},kt={url:"/app/ananymous/ww/main/noteTicesList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},vt={url:"/app/authentication/order/myOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Ut={url:"/app/authentication/address/list",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},jt={url:"/app/authentication/address/listAll",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},xt={url:"/app/authentication/address/defaultAddress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},_t={url:"/app/authentication/address/deleteAddress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Ct={url:"/app/authentication/address/save",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Dt={url:"/app/authentication/invoice/list",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Pt={url:"/app/authentication/invoice/listAll",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},qt={url:"/app/authentication/invoice/save",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},wt={url:"/app/authentication/invoice/deleteInvoice",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Lt={url:"/app/authentication/afs/servicesList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},St={url:"/app/authentication/afs/myAfsOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Tt={url:"/app/authentication/order/listOrderLog",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},At={url:"/app/authentication/order/orderExpress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Ot={url:"/app/authentication/order/getOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},$t={url:"/app/authentication/order/getOrder_invoice",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Bt={url:"/app/authentication/order/cancle",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Et={url:"/app/authentication/order/getOrder_detail_id",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},It={url:"/app/authentication/approval/list",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},zt={url:"/app/authentication/approval/cancleApproval",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Nt={url:"/app/router/getVueRoleRouteJson",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},Rt={url:"/app/ca/login/applogin",method:"",data:"",baseUrl:Object(n["d"])("VUE_APP_CFCA_API"),param:"",token:!0,encryption:!1},Vt={url:"/app/cfca/certDownload",method:"",data:"",baseUrl:Object(n["d"])("VUE_APP_CFCA_API"),param:"",token:!0,encryption:!1},Ft={url:"/app/xm/saveKbylbqm",method:"",data:"",baseUrl:Object(n["d"])("VUE_APP_CFCA_API"),param:"",token:!0,encryption:!1},Jt=(Object(n["d"])("VUE_APP_CFCA_API"),{url:"/app/ewm/saveEwm",method:"",data:"",baseUrl:Object(n["d"])("VUE_APP_CFCA_API"),param:"",token:!0,encryption:!1}),Xt=(Object(n["d"])("VUE_APP_FILE_API"),Object(n["d"])("VUE_APP_FILE_API"),{url:"/app/router/getVantRoleRouteJson",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!1}),Zt={url:"/app/login/applogin",method:"",data:"",baseUrl:"",param:"",token:"",encryption:!1},Mt={url:"/app/login/codelogin",method:"",data:"",baseUrl:"",param:"",token:"",encryption:!1},Yt={url:"",method:"get",data:"",baseUrl:"",param:"",token:!0,encryption:!1},Gt={url:"",method:"get",data:"",baseUrl:"",param:"",token:"",encryption:!1},Ht={url:"",method:"get",data:"",baseUrl:"",param:"",token:"",encryption:!1},Kt={url:"/app/login/zj/saveJc_pszj",method:"",data:"",baseUrl:"",param:"",token:"",encryption:!1},Qt={url:"/app/login/zj/checkZjhm",method:"",data:"",baseUrl:"",param:"",token:"",encryption:!1},Wt={url:"app/qrcode/getParam",method:"",data:"",baseUrl:"",param:"",token:"",encryption:!1}},"445c":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"nav-bar"},[t.headerData.leftText?e("div",{staticClass:"nav-bar-left"},[e("div",{on:{click:function(a){return a.stopPropagation(),t.handelClick(t.headerData.leftUrl)}}},[e("i",{staticClass:"iconfont iconicon-back"}),e("div",{staticClass:"nav-bar-txt"},[t._v(t._s(t.headerData.leftText))])])]):t._e(),e("div",{staticClass:"nav-bar-title"},[t._v(t._s(t.headerData.title))]),e("div",{staticClass:"nav-bar-right"},[t.headerData.rightText?e("div",{staticClass:"nav-bar-txt",on:{click:function(a){return t.handelClick(t.headerData.rightUrl,t.headerData.rightCallBackClick)}}},[t._v(t._s(t.headerData.rightText))]):t._e(),t.headerData.showSearch?e("i",{staticClass:"iconfont iconsousuo",on:{click:function(a){return t.searchClick()}}}):t._e()])])},r=[],o={name:"HeaderBar",props:{headerData:{type:null,required:!0}},data:function(){return{}},created:function(){this.headerData&&(this.headerData.rightCallBackClick||(this.headerData.rightCallBackClick=!1))},methods:{searchClick:function(){this.$bus.$emit("showMeun",!0)},handelClick:function(t,a){if(console.log("targetUrl=====================",t),"back"!==t)if("needConfirm"!==t){if(t)this.$router.push(t);else if(a){var e="callback";this.headerData&&this.headerData.rightText&&(e=this.headerData.rightText),this.$emit("callbackClick",e)}}else this.$emit("on-exit");else this.$router.go(-1)}}},i=o,s=e("2877"),c=Object(s["a"])(i,n,r,!1,null,"416ac0a2",null);a["a"]=c.exports},"651f":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showTop,expression:"showTop"}],staticClass:"scrollTop",on:{click:t.toTop}},[t._m(0)])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aside-icon"},[e("i",{staticClass:"iconfont iconfanhuidingbu"})])}],o={name:"ScrollTop",data:function(){return{scrollTop:0,time:0,dParams:20,scrollState:0}},computed:{showTop:function(){var t=this.scrollTop>300;return t}},mounted:function(){window.addEventListener("scroll",this.getScrollTop)},methods:{toTop:function(t){if(!this.scrollState){this.scrollState=1,t.preventDefault();var a=document.documentElement.scrollTop||document.body.scrollTop;console.log("dis---------------------------------",a);var e=this;this.time=setInterval((function(){e.gotoTop(e.scrollTop-e.dParams)}),10)}},gotoTop:function(t){this.dParams+=20,t=t>0?t:0,document.documentElement.scrollTop=t,document.body.scrollTop=t,this.scrollTop<10&&(clearInterval(this.time),this.dParams=20,this.scrollState=0)},getScrollTop:function(){this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}}},i=o,s=e("2877"),c=Object(s["a"])(i,n,r,!1,null,"4a569401",null);a["a"]=c.exports},"73c4":function(t,a,e){"use strict";var n=e("b0ee"),r=e.n(n);r.a},"7a87":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"didaList"}},[0==t.pageStyles?e("div",[e("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(a){t.isLoading=a},expression:"isLoading"}},[e("van-list",{attrs:{finished:t.finished,"finished-text":t.finishedText,"error-text":t.errorText,"immediate-check":t.firstFresh},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},[t._t("default")],2)],1)],1):t.noDataShow?e("div",[e("error-page",{attrs:{"page-style":t.pageStyles},on:{errorButton:t.parentReceive}})],1):t._e()])},r=[],o=(e("99af"),e("1100")),i={components:{errorPage:o["a"]},props:{firstFresh:{type:Boolean,default:!1},postUrl:{type:null,required:!0},dataName:{type:null,required:!0},reqData:{type:null,required:!0},apptypeShow:{type:Boolean,default:!0},noDataShow:{type:Boolean,default:!0}},data:function(){return{list:[],pageStyles:0,loading:!1,finished:!1,isLoading:!1,query:{},pagesize:10,xxList:[],currentPage:1,totalpageno:0,finishedText:"没有更多了",errorText:"请求失败，点击重新加载",total:0}},created:function(){this.reqNewData=this.reqData,console.info("reqData-----------------",this.reqData);var t=this;this.$bus.$on("refList",(function(a){var e=this;t.query=a,t.currentPage=1,t.getListData(a).then((function(t){e.loading=!1,e.totalpageno<=e.currentPage&&(e.finished=!0)}))}))},beforeDestroy:function(){this.$bus.$off("refList")},methods:{getListData:function(){var t=this,a=this.reqData;console.info("query--11--",this.query);if(this.apptypeShow){if(null!=this.query&&""!==this.query){var e={apptype:"APP"};this.query=Object.assign(this.query,e)}else this.query={apptype:"APP"};({pageno:this.currentPage,query:JSON.stringify(this.query)})}else console.log("this.query============================",this.query),this.query.currentPage=this.currentPage;return this.$store.dispatch(this.postUrl,Object.assign(a,this.query)).then((function(a){t.totalpageno=a.totalPages,t.pageStyles=0,0===t.totalpageno&&(t.pageStyles=1),1===t.currentPage?(t.list=t.dataName?a[t.dataName]:a,null!=t.list&&0!==t.list.length||(t.pageStyles=1),t.currentPage++):0===a.length?t.finished=!0:a.totalPages>=t.currentPage?t.list=t.list.concat(t.dataName?a[t.dataName]:a):t.finished=!0,a&&a.title?(t.xxList.data=t.list,t.xxList.title=a.title,t.$emit("returnData",t.xxList)):t.$emit("returnData",t.list)})).catch((function(a){t.$toast(a),t.loading=!1}))},parentReceive:function(){this.onRefresh(this.query)},onLoad:function(){var t=this;this.getListData().then((function(a){t.loading=!1,t.currentPage++,t.totalpageno<t.currentPage&&(t.finished=!0),console.log("this.finished==================================================",t.finished)}))},onRefresh:function(t){var a=this;this.query=null!=t&&""!==t?t:{},this.list=[],this.currentPage=1,this.getListData(1).then((function(){a.isLoading=!1,a.finished=!1}))},hideLoading:function(){this.loading=!1},hideIsLoading:function(){this.isLoading=!1}}},s=i,c=e("2877"),u=Object(c["a"])(s,n,r,!1,null,null,null);a["a"]=u.exports},b0ee:function(t,a,e){},c4a8:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("headerBar",{attrs:{"header-data":t.headerData}}),e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("common-list",{ref:"ggcommonlist",staticClass:"common-list",attrs:{"post-url":t.list.postUrl,"req-data":t.list.reqData,"data-name":t.list.dataName},on:{returnData:function(a){return t.getPrizeLog(a)}}},t._l(t.reviewList,(function(a,n){return e("div",{key:n,staticClass:"common-main box"},[e("div",{staticClass:"common-list"},[e("div",{staticClass:"list"},[e("h3",[e("div",{staticClass:"tit"},[t._v(t._s(a.bpbh))]),e("span",{staticClass:"label"},[t._v(t._s(a.ztValue))])]),e("div",{staticClass:"info"},[e("span",[e("i",{staticClass:"iconfont iconjinqian"}),t._v(" 总金额："+t._s(a.approval_amount)+" ")]),e("span",[e("i",{staticClass:"iconfont iconshijian"}),t._v(" 发起时间："+t._s(a.add_timeValue)+" ")])]),e("div",{staticClass:"info"},[e("span",[e("i",{staticClass:"iconfont icondaiban"}),t._v(" 事由："+t._s(a.sy)+" ")])]),e("div",{staticClass:"list-btn"},[e("ul",[e("li",[e("van-button",{attrs:{type:"default",plain:"",size:"small"},on:{click:function(a){return t.viewSp()}}},[e("i",{staticClass:"iconfont iconxiangqing"}),t._v(" 审批详情查看")])],1),15===a.zt?e("li",[e("van-button",{attrs:{type:"default",plain:"",size:"small"},on:{click:function(e){return t.ConfirmOrder(a.id)}}},[e("i",{staticClass:"iconfont iconchexiao"}),t._v(" 撤销审批")])],1):t._e()])])])])])})),0)],1)]),e("Backtop",{staticClass:"scrollTop-bar"})],1)},r=[],o=(e("5319"),e("445c")),i=e("7a87"),s=e("33de"),c=e("651f"),u={name:"OrderApproval",components:{headerBar:o["a"],commonList:i["a"],Backtop:c["a"]},data:function(){return{list:{items:[],error:!1,postUrl:"",reqData:"",dataName:"",noDataText:""},reviewList:[],checked:!0,SearchInput:{ddbh:"",spbh:"",spzt:"",fqsj:["",""]},headerData:{title:"订单审批",leftUrl:"back",leftText:" "}}},created:function(){this.init()},methods:{viewSp:function(t){this.$toast("请前往PC端操作")},getPrizeLog:function(t){this.reviewList=t},init:function(){this.list.postUrl=s["Gb"],this.list.reqData={pageno:1,pagerow:5,status_query:this.SearchInput.spzt,ddbh_query:this.SearchInput.ddbh,bpbh_query:this.SearchInput.spbh,kssj_query:this.SearchInput.fqsj[0].replace("-","").replace("-","").replace(" ","").replace(":","").replace(":",""),jssj_query:this.SearchInput.fqsj[1].replace("-","").replace("-","").replace(" ","").replace(":","").replace(":","")},this.list.dataName="list",this.list.noDataText="暂无更多数据"},ConfirmOrder:function(t){var a=this;this.$dialog.confirm({title:"提示",message:"确认撤销审批吗？"}).then((function(){s["l"].data={id:t},a.asyncApiModule(s["l"]).then((function(t){t.success?a.$toast.success("撤销审批成功"):a.$toast.fail("撤销审批失败"),a.$bus.$emit("refList1")})).catch((function(){a.loading=!1}))})).catch((function(){a.$toast.fail("撤销审批已取消")}))}}},d=u,p=(e("73c4"),e("2877")),l=Object(p["a"])(d,n,r,!1,null,"91197ae4",null);a["default"]=l.exports}}]);
//# sourceMappingURL=OrderApproval.a4c2538b.js.map