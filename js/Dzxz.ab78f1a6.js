(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Dzxz"],{"0f01":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mymapM"},[a("div",{staticClass:"nav-bar"},[a("div",{staticClass:"nav-bar-left",on:{click:function(e){return t.$router.go(-1)}}},[a("i",{staticClass:"iconfont iconicon-back"})]),a("div",{staticClass:"nav-bar-search"},[a("div",{staticClass:"search-map"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search_key,expression:"search_key"}],attrs:{type:"text",placeholder:"输入关键字搜索"},domProps:{value:t.search_key},on:{input:function(e){e.target.composing||(t.search_key=e.target.value)}}}),t.search_key?a("span",{staticClass:"clear",on:{click:function(e){t.search_key=""}}},[a("van-icon",{attrs:{color:"#8f8f8f",name:"clear"}})],1):t._e(),a("van-button",{attrs:{plain:"",type:"info",size:"mini"},on:{click:function(e){return t.keySearch()}}},[t._v("捜索")])],1)])]),t.loading?a("div",{staticClass:"loading"},[a("van-loading",{attrs:{type:"spinner"}})],1):t._e(),t.search_key?t._e():a("div",{staticClass:"con-box con-map"},[t._m(0)]),t.search_key?t._e():a("div",{staticClass:"con-box"},[a("div",{staticClass:"Hlist-box"},[a("ul",t._l(t.lists,(function(e,s){return a("li",{key:s,on:{click:function(a){return t.onAddressLi(e)}}},[a("div",{staticClass:"add"},[a("div",{staticClass:"add-name"},[a("van-icon",{attrs:{name:"location-o"}}),t._v(t._s(e.name))],1),a("div",{staticClass:"add-address"},[t._v(t._s(e.address))])])])})),0)])]),t.search_key?a("div",{staticClass:"searchlist"},[a("ul",t._l(t.search_list,(function(e,s){return a("li",{key:s,on:{click:function(a){return t.onSearchLi(e.location)}}},[a("div",{staticClass:"add"},[a("div",{staticClass:"add-name"},[a("van-icon",{attrs:{name:"location-o"}}),t._v(t._s(e.name))],1),a("div",{staticClass:"add-address"},[t._v(t._s(e.address))])])])})),0),t.noSearchShow?a("div",[t._m(1)]):t._e()]):t._e()])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mapbox"},[a("div",{staticClass:"map",attrs:{id:"container"}}),a("div",{staticClass:"sign"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"status",staticStyle:{"margin-top":"50%"}},[a("div",{staticClass:"status-icon"}),a("h3",[t._v("暂无结果")])])}],i=(a("841c"),{data:function(){return{center:[this.$route.params.lng,this.$route.params.lat],search_key:"",lists:[],search_list:[],marker:"",loading:!1,noSearchShow:!1}},watch:{search_key:function(t,e){var a=this;""===t&&(this.search_list=[],this.noSearchShow=!1,setTimeout((function(){a.adMap()}),1e3))}},mounted:function(){var t=this;setTimeout((function(){t.adMap()}),1e3)},methods:{adMap:function(){var t=this;this.loading=!0;var e=new AMap.Map("container",{zoom:14,center:this.center,resizeEnable:!0}),a=e.getCenter();this.center=[a.lng,a.lat],console.log(this.center),this.marker=new AMap.Marker({position:new AMap.LngLat(a.lng,a.lat)}),e.add(this.marker),this.centerSearch();var s=function(s){a=e.getCenter(),t.center=[a.lng,a.lat],t.marker.setPosition([a.lng,a.lat])},n=function(){t.loading=!0,t.centerSearch()};e.on("mapmove",s),e.on("moveend",n)},centerSearch:function(){var t=this;AMap.service(["AMap.PlaceSearch"],(function(){var e=new AMap.PlaceSearch({type:"汽车服务|餐饮服务|购物服务|生活服务|体育休闲服务|医疗保健服务|住宿服务|风景名胜|商务住宅|政府机构及社会团体|科教文化服务|交通设施服务|金融保险服务|公司企业|地名地址信息",pageSize:30,pageIndex:1,city:"全国",autoFitView:!1});e.searchNearBy("",[t.center[0],t.center[1]],200,(function(e,a){"complete"==e&&(t.lists=a.poiList.pois,t.loading=!1)}))}))},keySearch:function(){var t=this;this.loading=!0,AMap.service(["AMap.PlaceSearch"],(function(){var e=new AMap.PlaceSearch({type:"汽车服务|餐饮服务|购物服务|生活服务|体育休闲服务|医疗保健服务|住宿服务|风景名胜|商务住宅|政府机构及社会团体|科教文化服务|交通设施服务|金融保险服务|公司企业|地名地址信息",pageSize:30,pageIndex:1,city:"全国",citylimit:!1,autoFitView:!1});e.search(t.search_key,(function(e,a){"complete"==e?0===a.poiList.count?t.noSearchShow=!0:(t.search_list=a.poiList.pois,t.noSearchShow=!1,t.loading=!1):(t.search_list=[],t.noSearchShow=!0)}))}))},onAddressLi:function(t){console.log(t),this.$bus.$emit("getAddress",t.address),window.localStorage.setItem("getAddress",t.address),this.marker.setPosition([t.location.lng,t.location.lat]),this.$router.go(-1)},onSearchLi:function(t){var e=this;console.log(t.lng+"-"+t.lat),this.$bus.$emit("getAddress",t.address),this.center=[t.lng,t.lat],console.log(this.center),this.search_key="",setTimeout((function(){e.adMap()}),1e3),this.$router.go(-1)}}}),c=i,r=(a("daae"),a("2877")),o=Object(r["a"])(c,s,n,!1,null,"57e970f8",null);e["default"]=o.exports},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"841c":function(t,e,a){"use strict";var s=a("d784"),n=a("825a"),i=a("1d80"),c=a("129f"),r=a("14c3");s("search",1,(function(t,e,a){return[function(e){var a=i(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,a):new RegExp(e)[t](String(a))},function(t){var s=a(e,t,this);if(s.done)return s.value;var i=n(t),o=String(this),l=i.lastIndex;c(l,0)||(i.lastIndex=0);var d=r(i,o);return c(i.lastIndex,l)||(i.lastIndex=l),null===d?-1:d.index}]}))},b3a0:function(t,e,a){},daae:function(t,e,a){"use strict";var s=a("b3a0"),n=a.n(s);n.a}}]);
//# sourceMappingURL=Dzxz.ab78f1a6.js.map