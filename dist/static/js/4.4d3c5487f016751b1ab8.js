webpackJsonp([4],{578:function(t,i,e){function a(t){e(619)}var n=e(10)(e(596),e(631),a,"data-v-319eba0b",null);t.exports=n.exports},587:function(t,i,e){"use strict";e.d(i,"a",function(){return o});var a=e(66),n=e.n(a),s=e(57),o={computed:n()({},e.i(s.c)(["playlist"])),mounted:function(){this.handlePlaylist(this.playlist)},activated:function(){this.handlePlaylist(this.playlist)},watch:{playlist:function(t){this.handlePlaylist(t)}},methods:{handlePlaylist:function(){throw new Error("component must implement handlePlaylist method")}}}},588:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(66),n=e.n(a),s=e(204),o=e.n(s),l=e(67),A=e.n(l),r=e(203),c=e.n(r),d=e(57),p=e(587);i.default={mixins:[p.a],components:{MySongList:o.a,MyScroll:A.a,MyLoading:c.a},data:function(){return{scrollY:0}},props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},watch:{scrollY:function(t){var i=40-this.bgImageHeight,e=Math.max(i,t),a=0;this.$refs.bgLayerRef.style.transform="translate3d(0 ,"+e+"px, 0)",this.$refs.bgLayerRef.style.webkitTransform="translate3d(0 ,"+e+"px, 0)";var n=1,s=0,o=Math.abs(t/this.bgImageHeight);t>0?(a=10,n=1+o,this.$refs.bgImageRef.style.transform="scale("+n+")",this.$refs.bgImageRef.style.webkitTransform="scale("+n+")"):(s=Math.min(20*o,20),this.$refs.filterRef.style["backdrop-filter"]="blur("+s+"px)",this.$refs.filterRef.style["webkitBackdrop-filter"]="blur("+s+"px)"),t<i?(a=10,this.$refs.bgImageRef.style.paddingTop=0,this.$refs.bgImageRef.style.height="40px",this.$refs.playRef.style.display="none"):(this.$refs.bgImageRef.style.paddingTop="70%",this.$refs.bgImageRef.style.height=0,this.$refs.playRef.style.display="block"),this.$refs.bgImageRef.style.zIndex=a}},methods:n()({},e.i(d.b)(["selectPlay","randomPlay"]),{handlePlaylist:function(t){var i=t.length>0?"60px":"";this.$refs.scrollRef.$el.style.bottom=i,this.$refs.scrollRef.refresh()},back:function(){this.$router.back()},scroll:function(t){this.scrollY=t.y},selectItem:function(t,i){this.selectPlay({list:this.songs,index:i})},playRandom:function(){this.randomPlay({list:this.songs})}}),computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.bgImageHeight=this.$refs.bgImageRef.clientHeight,this.$refs.scrollRef.$el.style.top=this.$refs.bgImageRef.clientHeight+"px"},destroyed:function(){}}},589:function(t,i,e){i=t.exports=e(576)(!0),i.push([t.i,".my-music-list[data-v-bc0086ca]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.my-music-list .back[data-v-bc0086ca]{position:absolute;top:0;left:6px;z-index:100}.my-music-list .back .icon-back[data-v-bc0086ca]{display:block;padding:10px;font-size:22px;color:#ffcd32}.my-music-list .title[data-v-bc0086ca]{position:absolute;top:0;left:10%;z-index:40;width:80%;-ms-text-overflow:ellipsis;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.my-music-list .bg-image[data-v-bc0086ca]{position:relative;width:100%;height:0;padding-top:70%;-webkit-transform-origin:top;transform-origin:top;background-size:cover}.my-music-list .bg-image .play-wrapper[data-v-bc0086ca]{position:absolute;bottom:20px;z-index:50;width:100%}.my-music-list .bg-image .play-wrapper .play[data-v-bc0086ca]{-webkit-box-sizing:border-box;box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.my-music-list .bg-image .play-wrapper .play .icon-play[data-v-bc0086ca]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.my-music-list .bg-image .play-wrapper .play .text[data-v-bc0086ca]{display:inline-block;vertical-align:middle;font-size:12px}.my-music-list .bg-image .filter[data-v-bc0086ca]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.my-music-list .bg-layer[data-v-bc0086ca]{position:relative;height:100%;background:#222}.my-music-list .list[data-v-bc0086ca]{position:fixed;top:0;bottom:0;width:100%;background:#222}.my-music-list .list .song-list-wrapper[data-v-bc0086ca]{padding:20px 30px}.my-music-list .list .loading-container[data-v-bc0086ca]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["C:/Users/Administrator/Desktop/vue-music-webapp-master/src/components/MyMusicList/MyMusicList.vue"],names:[],mappings:"AACA,gCACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,eAAiB,CAClB,AACD,sCACI,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAa,CAChB,AACD,iDACM,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CACpB,AACD,uCACI,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,UAAW,AACX,2BAA4B,AAC5B,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACf,AACD,0CACI,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,6BAA8B,AACtB,qBAAsB,AAC9B,qBAAuB,CAC1B,AACD,wDACM,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,UAAY,CACjB,AACD,8DACQ,8BAA+B,AACvB,sBAAuB,AAC/B,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,oBAAqB,AACrB,WAAa,CACpB,AACD,yEACU,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACzB,AACD,oEACU,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACzB,AACD,kDACM,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAAiC,CACtC,AACD,0CACI,kBAAmB,AACnB,YAAa,AACb,eAAiB,CACpB,AACD,sCACI,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,eAAiB,CACpB,AACD,yDACM,iBAAmB,CACxB,AACD,yDACM,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACzC",file:"MyMusicList.vue",sourcesContent:["\n.my-music-list[data-v-bc0086ca] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #222;\n}\n.my-music-list .back[data-v-bc0086ca] {\n    position: absolute;\n    top: 0;\n    left: 6px;\n    z-index: 100;\n}\n.my-music-list .back .icon-back[data-v-bc0086ca] {\n      display: block;\n      padding: 10px;\n      font-size: 22px;\n      color: #ffcd32;\n}\n.my-music-list .title[data-v-bc0086ca] {\n    position: absolute;\n    top: 0;\n    left: 10%;\n    z-index: 40;\n    width: 80%;\n    -ms-text-overflow: ellipsis;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    text-align: center;\n    line-height: 40px;\n    font-size: 18px;\n    color: #fff;\n}\n.my-music-list .bg-image[data-v-bc0086ca] {\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-top: 70%;\n    -webkit-transform-origin: top;\n            transform-origin: top;\n    background-size: cover;\n}\n.my-music-list .bg-image .play-wrapper[data-v-bc0086ca] {\n      position: absolute;\n      bottom: 20px;\n      z-index: 50;\n      width: 100%;\n}\n.my-music-list .bg-image .play-wrapper .play[data-v-bc0086ca] {\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        width: 135px;\n        padding: 7px 0;\n        margin: 0 auto;\n        text-align: center;\n        border: 1px solid #ffcd32;\n        color: #ffcd32;\n        border-radius: 100px;\n        font-size: 0;\n}\n.my-music-list .bg-image .play-wrapper .play .icon-play[data-v-bc0086ca] {\n          display: inline-block;\n          vertical-align: middle;\n          margin-right: 6px;\n          font-size: 16px;\n}\n.my-music-list .bg-image .play-wrapper .play .text[data-v-bc0086ca] {\n          display: inline-block;\n          vertical-align: middle;\n          font-size: 12px;\n}\n.my-music-list .bg-image .filter[data-v-bc0086ca] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(7, 17, 27, 0.4);\n}\n.my-music-list .bg-layer[data-v-bc0086ca] {\n    position: relative;\n    height: 100%;\n    background: #222;\n}\n.my-music-list .list[data-v-bc0086ca] {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    background: #222;\n}\n.my-music-list .list .song-list-wrapper[data-v-bc0086ca] {\n      padding: 20px 30px;\n}\n.my-music-list .list .loading-container[data-v-bc0086ca] {\n      position: absolute;\n      width: 100%;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n}\n"],sourceRoot:""}])},590:function(t,i,e){var a=e(589);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(577)("5605df1d",a,!0,{})},591:function(t,i,e){function a(t){e(590)}var n=e(10)(e(588),e(592),a,"data-v-bc0086ca",null);t.exports=n.exports},592:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"my-music-list"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("div",{ref:"bgImageRef",staticClass:"bg-image",style:t.bgStyle},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length > 0"}],ref:"playRef",staticClass:"play-wrapper",on:{click:t.playRandom}},[t._m(0)]),t._v(" "),e("div",{ref:"filterRef",staticClass:"filter"})]),t._v(" "),e("div",{ref:"bgLayerRef",staticClass:"bg-layer"}),t._v(" "),e("my-scroll",{ref:"scrollRef",staticClass:"list",attrs:{data:t.songs,"probe-type":t.probeType,"listen-scroll":t.listenScroll},on:{scroll:t.scroll}},[e("div",{staticClass:"song-list-wrapper"},[e("my-song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[e("my-loading")],1)])],1)},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"play"},[e("i",{staticClass:"icon-play"}),t._v(" "),e("span",{staticClass:"text"},[t._v("随机播放全部")])])}]}},593:function(t,i,e){"use strict";function a(){var t=o()({},A.a,{uin:0,format:"h5",needNewCode:1});return e.i(l.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,A.b)}function n(t){var i=o()({},A.a,{hostUin:0,platform:"h5",needNewCode:1,order:"listen",begin:0,uin:0,num:100,songstatus:1,format:"json",type:"top",tpl:3,page:"detail",topid:t});return e.i(l.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",i,A.b)}i.b=a,i.a=n;var s=e(88),o=e.n(s),l=e(202),A=e(130)},596:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(66),n=e.n(a),s=e(57),o=e(593),l=e(131),A=e(591),r=e.n(A);i.default={components:{MyMusicList:r.a},data:function(){return{songs:[]}},props:{},watch:{},filters:{},methods:{_getRankDetail:function(){var t=this;if(!this.rankList.id)return void this.$router.push("/rank");e.i(o.a)(this.rankList.id).then(function(i){0===i.code&&(t.songs=t._formatSongs(i.songlist))})},_formatSongs:function(t){var i=[];return t.forEach(function(t){t.data.songid&&t.data.albummid&&i.push(e.i(l.b)(t.data))}),i}},computed:n()({},e.i(s.c)(["rankList"]),{title:function(){return this.rankList.topTitle},bgImage:function(){if(this.songs.length)return this.songs[0].img}}),created:function(){this._getRankDetail()},mounted:function(){},destroyed:function(){}}},609:function(t,i,e){i=t.exports=e(576)(!0),i.push([t.i,".slide-enter-active[data-v-319eba0b],.slide-leave-active[data-v-319eba0b]{-webkit-transition:all .3s ease;transition:all .3s ease}.slide-enter[data-v-319eba0b],.slide-leave-to[data-v-319eba0b]{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}","",{version:3,sources:["C:/Users/Administrator/Desktop/vue-music-webapp-master/src/components/MyRankDetail/MyRankDetail.vue"],names:[],mappings:"AACA,0EACE,gCAAiC,AACjC,uBAAyB,CAC1B,AACD,+DACE,UAAW,AACX,wCAA2C,AACnC,+BAAmC,CAC5C",file:"MyRankDetail.vue",sourcesContent:["\n.slide-enter-active[data-v-319eba0b], .slide-leave-active[data-v-319eba0b] {\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n}\n.slide-enter[data-v-319eba0b], .slide-leave-to[data-v-319eba0b] {\n  opacity: 0;\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}\n"],sourceRoot:""}])},619:function(t,i,e){var a=e(609);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(577)("86bf074a",a,!0,{})},631:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{staticClass:"my-rank-detail",attrs:{name:"slide"}},[e("my-music-list",{attrs:{songs:t.songs,title:t.title,"bg-image":t.bgImage,rank:!0}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=4.4d3c5487f016751b1ab8.js.map