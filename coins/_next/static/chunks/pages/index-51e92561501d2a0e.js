(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7314:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(2170)}])},2170:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return y}});var t=e(2322),a=e(2579),c=e.n(a),o=e(5632),i=function(n){var r=n.coins,e=void 0===r?[]:r;return(0,t.jsx)("div",{className:"border rounded",children:e.map((function(n){var r,e=n.uuid,a=n.name,c=n.price,o=n.iconUrl,i=n.coinrankingUrl;return(0,t.jsx)("div",{className:"p-4 border-b",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)("div",{className:"w-8 h-8 bg-cover bg-center",style:{backgroundImage:"url(".concat(o,")")}}),(0,t.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:a})]}),(0,t.jsx)("div",{children:(0,t.jsx)("b",{children:(r=parseFloat(c),new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,currencyDisplay:"symbol"}).format(r))})})]})},"coin-".concat(e))}))})},u=e(4776),s=e.n(u),l=e(2784),d=e(9644),f=e.n(d),v=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(e,t){f().get(n,r).then((function(n){return e(n.data)})).catch((function(n){var r;return t(null===n||void 0===n||null===(r=n.response)||void 0===r?void 0:r.data)}))}))};function h(n,r,e,t,a,c,o){try{var i=n[c](o),u=i.value}catch(s){return void e(s)}i.done?r(u):Promise.resolve(u).then(t,a)}function m(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var c=n.apply(r,e);function o(n){h(c,t,a,o,i,"next",n)}function i(n){h(c,t,a,o,i,"throw",n)}o(void 0)}))}}function p(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function g(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},t=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),t.forEach((function(r){p(n,r,e[r])}))}return n}var b=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=(0,l.useState)({loading:!1,error:null,data:null}),t=e[0],a=e[1],c=(0,l.useState)(0),o=c[0],i=c[1],u=(0,l.useCallback)((function(){return i((function(n){return n+1}))}),[]);return(0,l.useEffect)((function(){var e=function(){var e=m(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({loading:!0,error:null,data:null}),e.prev=1,e.next=4,v(n,r);case 4:t=e.sent,a({loading:!1,error:null,data:t}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),a({loading:!1,error:e.t0,data:null});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[o]),g({},t,{refetch:u})},x=e(3542).env.NEXT_PUBLIC_COIN_RANKING_KEY||"",y=function(){var n=(0,o.useRouter)().query,r=("http://localhost:3000/api/coins?tags=".concat(n.tags||""),"https://api.coinranking.com/v2/coins?tags=".concat(n.tags||"")),e=b(r,{headers:{"x-access-token":x}}),a=e.data,u=e.loading,s=e.error;if(u)return(0,t.jsx)(t.Fragment,{});if(s){var l=c()(s,"message","Error");return(0,t.jsx)("div",{className:"container mx-auto p-8",children:(0,t.jsx)("div",{className:"border rounded p-4 text-center",children:l})})}var d=c()(a,"data.coins",[]);return(0,t.jsx)("div",{className:"container mx-auto p-8",children:(0,t.jsx)(i,{coins:d})})}}},function(n){n.O(0,[334,774,888,179],(function(){return r=7314,n(n.s=r);var r}));var r=n.O();_N_E=r}]);