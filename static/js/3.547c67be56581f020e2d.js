webpackJsonp([3],{"+Rt6":function(t,a){},Dirm:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={components:{sectionOne:e("6+qR").a},data:function(){return{chargingService:[],bMap:{center:"",zoom:3,positions:["BMAP_ANCHOR_TOP_LEFT","BMAP_ANCHOR_TOP_RIGHT","BMAP_ANCHOR_BOTTOM_LEFT","BMAP_ANCHOR_BOTTOM_RIGHT"],mapTypes:["BMAP_NORMAL_MAP","BMAP_HYBRID_MAP"]}}},created:function(){var t=this;this.$axios.get("/api/chargingService").then(function(a){t.chargingService=a.data.data,console.log(t.chargingService)}).catch(function(t){console.log(t)})},methods:{handler:function(t){var a=t.BMap,e=t.map;console.log(a,e),this.bMap.center="西安",this.bMap.zoom=15}},computed:{}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"section"},[e("baidu-map",{staticClass:"map",attrs:{center:t.bMap.center,zoom:t.bMap.zoom},on:{ready:t.handler}},[e("bm-scale",{attrs:{anchor:t.bMap.positions[3]}}),t._v(" "),e("bm-navigation",{attrs:{anchor:t.bMap.positions[3]}}),t._v(" "),e("bm-map-type",{attrs:{"map-types":t.bMap.mapTypes,anchor:t.bMap.positions[1]}}),t._v(" "),e("bm-city-list",{attrs:{anchor:t.bMap.positions[0]}}),t._v(" "),e("bm-overview-map",{attrs:{anchor:t.bMap.positions[2],isOpen:!0}})],1),t._v(" "),e("section-one",{attrs:{dataOne:t.chargingService}})],1)},staticRenderFns:[]};var i=e("VU/8")(n,o,!1,function(t){e("+Rt6")},null,null);a.default=i.exports}});
//# sourceMappingURL=3.547c67be56581f020e2d.js.map