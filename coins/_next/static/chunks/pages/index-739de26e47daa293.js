(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7314:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6159)}])},6159:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return y}});var t=r(2322),a=r(2579),c=r.n(a),i=r(5632),o=function(n){var e=n.coins,r=void 0===e?[]:e;return(0,t.jsx)("div",{className:"border rounded",children:r.map((function(n){var e,r=n.uuid,a=n.name,c=n.price,i=n.iconUrl,o=n.coinrankingUrl;return(0,t.jsx)("div",{className:"p-4 border-b",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)("div",{className:"w-8 h-8 bg-cover bg-center",style:{backgroundImage:"url(".concat(i,")")}}),(0,t.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",children:a})]}),(0,t.jsx)("div",{children:(0,t.jsx)("b",{children:(e=parseFloat(c),new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,currencyDisplay:"symbol"}).format(e))})})]})},"coin-".concat(r))}))})},u=r(4776),s=r.n(u),l=r(2784),d=r(9644),f=r.n(d),v=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(r,t){f().get(n,e).then((function(n){return r(n.data)})).catch((function(n){var e;return t(null===n||void 0===n||null===(e=n.response)||void 0===e?void 0:e.data)}))}))};function p(n,e,r,t,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void r(s)}o.done?e(u):Promise.resolve(u).then(t,a)}function m(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var c=n.apply(e,r);function i(n){p(c,t,a,i,o,"next",n)}function o(n){p(c,t,a,i,o,"throw",n)}i(void 0)}))}}function h(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function g(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){h(n,e,r[e])}))}return n}var b,x=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,l.useState)({loading:!1,error:null,data:null}),t=r[0],a=r[1],c=(0,l.useState)(0),i=c[0],o=c[1],u=(0,l.useCallback)((function(){return o((function(n){return n+1}))}),[]);return(0,l.useEffect)((function(){var r=function(){var r=m(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a({loading:!0,error:null,data:null}),r.prev=1,r.next=4,v(n,e);case 4:t=r.sent,a({loading:!1,error:null,data:t}),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(1),console.error(r.t0),a({loading:!1,error:r.t0,data:null});case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(){return r.apply(this,arguments)}}();r()}),[i]),g({},t,{refetch:u})};!function(n){n.DEFI="defi",n.STABLECOIN="stablecoin",n.NFT="nft",n.DEX="dex",n.EXCHANGE="exchange",n.STAKING="staking",n.DAO="dao",n.MEME="meme",n.PRIVACY="privacy",n.METAVERSE="metaverse",n.GAMING="gaming",n.WRAPPED="wrapped",n.LAYER_1="layer-1",n.LAYER_2="layer-2"}(b||(b={}));var y=function(){var n,e=(null===(n=(0,i.useRouter)().query.tags)||void 0===n?void 0:n.toString())||b.LAYER_1,r="https://proxy-as-as-service.vercel.app/api/coins?tags=".concat(e),a=x(r),u=a.data,s=a.loading,l=a.error;if(s)return(0,t.jsx)(t.Fragment,{});if(l){var d=c()(l,"message","Error");return(0,t.jsx)("div",{className:"container mx-auto p-8",children:(0,t.jsx)("div",{className:"border rounded p-4 text-center",children:d})})}var f=c()(u,"data.coins",[]);return(0,t.jsx)("div",{className:"container mx-auto p-8",children:(0,t.jsx)(o,{coins:f})})}}},function(n){n.O(0,[334,774,888,179],(function(){return e=7314,n(n.s=e);var e}));var e=n.O();_N_E=e}]);