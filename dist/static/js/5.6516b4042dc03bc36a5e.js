webpackJsonp([5],{579:function(t,n,a){function i(t){a(616)}var e=a(10)(a(597),a(628),i,"data-v-1aa304aa",null);t.exports=e.exports},587:function(t,n,a){"use strict";a.d(n,"a",function(){return s});var i=a(66),e=a.n(i),o=a(57),s={computed:e()({},a.i(o.c)(["playlist"])),mounted:function(){this.handlePlaylist(this.playlist)},activated:function(){this.handlePlaylist(this.playlist)},watch:{playlist:function(t){this.handlePlaylist(t)}},methods:{handlePlaylist:function(){throw new Error("component must implement handlePlaylist method")}}}},593:function(t,n,a){"use strict";function i(){var t=s()({},l.a,{uin:0,format:"h5",needNewCode:1});return a.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,l.b)}function e(t){var n=s()({},l.a,{hostUin:0,platform:"h5",needNewCode:1,order:"listen",begin:0,uin:0,num:100,songstatus:1,format:"json",type:"top",tpl:3,page:"detail",topid:t});return a.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,l.b)}n.b=i,n.a=e;var o=a(88),s=a.n(o),A=a(202),l=a(130)},597:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=a(66),e=a.n(i),o=a(203),s=a.n(o),A=a(67),l=a.n(A),r=a(593),p=a(587),c=a(57);n.default={mixins:[p.a],components:{MyLoading:s.a,MyScroll:l.a},data:function(){return{toplist:[]}},props:{},watch:{},filters:{},methods:e()({},a.i(c.a)({setRankList:"SET_RANKLIST"}),{selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setRankList(t)},handlePlaylist:function(t){var n=t.length>0?"60px":"";this.$refs.rankRef.style.bottom=n,this.$refs.scrollRef.refresh()},loadImg:function(){this.flag||(this.$refs.scrollRef.refresh(),this.flag=!0)},_getRankList:function(){var t=this;a.i(r.b)().then(function(n){0===n.code&&(t.toplist=n.data.topList)})}}),computed:{},created:function(){this._getRankList()},mounted:function(){},destroyed:function(){}}},606:function(t,n,a){n=t.exports=a(576)(!0),n.push([t.i,".my-rank[data-v-1aa304aa]{position:fixed;width:100%;top:88px;bottom:0}.my-rank .toplist[data-v-1aa304aa]{height:100%;overflow:hidden}.my-rank .toplist .item[data-v-1aa304aa]{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 20px;padding-top:20px;height:100px}.my-rank .toplist .item[data-v-1aa304aa]:last-child{padding-bottom:20px}.my-rank .toplist .item .icon[data-v-1aa304aa]{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;height:100px}.my-rank .toplist .item .songlist[data-v-1aa304aa]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 20px;height:100px;overflow:hidden;background:#333;color:hsla(0,0%,100%,.3);font-size:12px}.my-rank .toplist .item .songlist .song[data-v-1aa304aa]{-ms-text-overflow:ellipsis;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:26px}.my-rank .toplist .item .songlist .song .singername[data-v-1aa304aa]{color:hsla(0,0%,100%,.2)}.my-rank .toplist .loading-container[data-v-1aa304aa]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["C:/Users/Administrator/Desktop/vue-music-webapp-master/src/components/MyRank/MyRank.vue"],names:[],mappings:"AACA,0BACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,mCACI,YAAa,AACb,eAAiB,CACpB,AACD,yCACM,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,cAAe,AACf,iBAAkB,AAClB,YAAc,CACnB,AACD,oDACQ,mBAAqB,CAC5B,AACD,+CACQ,mBAAoB,AAChB,mBAAoB,AAChB,eAAgB,AACxB,YAAa,AACb,YAAc,CACrB,AACD,mDACQ,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,eAAgB,AAChB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,yBAAgC,AAChC,cAAgB,CACvB,AACD,yDACU,2BAA4B,AAC5B,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,gBAAkB,CAC3B,AACD,qEACY,wBAAgC,CAC3C,AACD,sDACM,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACzC",file:"MyRank.vue",sourcesContent:["\n.my-rank[data-v-1aa304aa] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.my-rank .toplist[data-v-1aa304aa] {\n    height: 100%;\n    overflow: hidden;\n}\n.my-rank .toplist .item[data-v-1aa304aa] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin: 0 20px;\n      padding-top: 20px;\n      height: 100px;\n}\n.my-rank .toplist .item[data-v-1aa304aa]:last-child {\n        padding-bottom: 20px;\n}\n.my-rank .toplist .item .icon[data-v-1aa304aa] {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 100px;\n                flex: 0 0 100px;\n        width: 100px;\n        height: 100px;\n}\n.my-rank .toplist .item .songlist[data-v-1aa304aa] {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        padding: 0 20px;\n        height: 100px;\n        overflow: hidden;\n        background: #333;\n        color: rgba(255, 255, 255, 0.3);\n        font-size: 12px;\n}\n.my-rank .toplist .item .songlist .song[data-v-1aa304aa] {\n          -ms-text-overflow: ellipsis;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          white-space: nowrap;\n          line-height: 26px;\n}\n.my-rank .toplist .item .songlist .song .singername[data-v-1aa304aa] {\n            color: rgba(255, 255, 255, 0.2);\n}\n.my-rank .toplist .loading-container[data-v-1aa304aa] {\n      position: absolute;\n      width: 100%;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n}\n"],sourceRoot:""}])},616:function(t,n,a){var i=a(606);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(577)("67f660e1",i,!0,{})},628:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{ref:"rankRef",staticClass:"my-rank"},[a("my-scroll",{ref:"scrollRef",staticClass:"toplist",attrs:{data:t.toplist}},[a("ul",t._l(t.toplist,function(n){return a("li",{staticClass:"item",on:{click:function(a){return t.selectItem(n)}}},[a("div",{staticClass:"icon"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100"},on:{load:t.loadImg}})]),t._v(" "),a("ul",{staticClass:"songlist"},t._l(n.songList,function(n,i){return a("li",{staticClass:"song"},[a("span",[t._v(t._s(i+1))]),t._v(" "),a("span",[t._v(t._s(n.songname))]),t._v(" "),a("span",{staticClass:"singername"},[t._v(" - "+t._s(n.singername))])])}),0)])}),0),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.toplist.length,expression:"!toplist.length"}],staticClass:"loading-container"},[a("my-loading")],1)]),t._v(" "),a("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.6516b4042dc03bc36a5e.js.map