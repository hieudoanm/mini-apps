(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7314:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3092)}])},3092:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return Z}});var a=r(2322),t=r(2841),i=r(3989),s=r(7527),c=r(5867),l=r(9260),u=r(2579),o=r.n(u),d=r(2784),h=function(e){return isNaN(e)?"N/A":new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,currencyDisplay:"symbol"}).format(e)},f=function(e){var n=e.children;return(0,a.jsx)("div",{className:"px-8 py-4",children:n})},v=function(e){var n=e.className,r=e.children;return(0,a.jsx)("div",{className:"px-8 py-4 border-t ".concat(n),children:r})};v.displayName="List.Item",v.defaultProps={className:""};var m=v,x=function(e){var n=e.className,r=void 0===n?"":n,t=e.children;return(0,a.jsx)("div",{className:"border rounded ".concat(r),children:t})};x.displayName="List",x.defaultProps={className:""};var j=Object.assign(x,{Header:f,Item:m}),p=function(e){var n=e.coins,r=void 0===n?[]:n;return(0,a.jsx)(a.Fragment,{children:r.map((function(e){var n=e.uuid,r=e.name,t=e.price,i=e.iconUrl,s=e.coinrankingUrl,c=e.marketCap;return(0,a.jsx)(j.Item,{children:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("div",{className:"w-8 h-8 bg-cover bg-center",style:{backgroundImage:"url(".concat(i,")")}}),(0,a.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:r})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:h(parseFloat(t))}),(0,a.jsxs)("span",{className:"ml-1",children:["(",h(parseFloat(c)),")"]})]})]})},"coin-".concat(n))}))})},g=function(e){var n=e.children;return(0,a.jsx)("div",{className:"container mx-auto p-8",children:n})},b=r(4776),N=r.n(b),y=r(9644),E=r.n(y),O=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(r,a){E().get(e,n).then((function(e){return r(e.data)})).catch((function(e){var n;return a(null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.data)}))}))};function w(e,n,r,a,t,i,s){try{var c=e[i](s),l=c.value}catch(u){return void r(u)}c.done?n(l):Promise.resolve(l).then(a,t)}function A(e){return function(){var n=this,r=arguments;return new Promise((function(a,t){var i=e.apply(n,r);function s(e){w(i,a,t,s,c,"next",e)}function c(e){w(i,a,t,s,c,"throw",e)}s(void 0)}))}}function P(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function D(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(n){P(e,n,r[n])}))}return e}var _,I=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,d.useState)({loading:!1,error:null,data:null}),a=r[0],t=r[1],i=(0,d.useState)(0),s=i[0],c=i[1],l=(0,d.useCallback)((function(){return c((function(e){return e+1}))}),[]);return(0,d.useEffect)((function(){var r=function(){var r=A(N().mark((function r(){var a;return N().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t({loading:!0,error:null,data:null}),r.prev=1,r.next=4,O(e,n);case 4:a=r.sent,t({loading:!1,error:null,data:a}),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(1),console.error(r.t0),t({loading:!1,error:r.t0,data:null});case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(){return r.apply(this,arguments)}}();r()}),[s]),D({},a,{refetch:l})};function S(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}!function(e){e.DAO="dao",e.DEFI="defi",e.DEX="dex",e.EXCHANGE="exchange",e.GAMING="gaming",e.LAYER_1="layer-1",e.LAYER_2="layer-2",e.MEME="meme",e.METAVERSE="metaverse",e.NFT="nft",e.PRIVACY="privacy",e.STABLECOIN="stablecoin",e.STAKING="staking",e.WRAPPED="wrapped"}(_||(_={}));var Z=function(){var e=(0,d.useState)({tags:_.LAYER_1}),n=e[0],r=e[1],u=I("https://proxy-as-as-service.vercel.app/api/coins",{params:n}),h=u.data,f=u.loading,v=u.error,m=u.refetch;if(f)return(0,a.jsx)(g,{children:(0,a.jsxs)(j,{children:[(0,a.jsx)(j.Header,{children:(0,a.jsx)("h1",{className:"text-2xl uppercase",children:"Coins"})}),(0,a.jsx)(j.Item,{className:"flex items-center justify-center",children:(0,a.jsx)(t.Z,{})})]})});if(v){var x=o()(v,"message","Error");return(0,a.jsx)(g,{children:(0,a.jsxs)(j,{children:[(0,a.jsx)(j.Header,{children:(0,a.jsx)("h1",{className:"text-2xl uppercase",children:"Coins"})}),(0,a.jsx)(j.Item,{children:(0,a.jsx)("p",{children:x})})]})})}var b=o()(h,"data.coins",[]);return(0,a.jsx)(g,{children:(0,a.jsxs)(j,{children:[(0,a.jsx)(j.Header,{children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("h1",{className:"text-2xl uppercase",children:["Coins (",b.length,")"]}),(0,a.jsx)("div",{children:(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(s.Z,{id:"label-tags",children:"Tags"}),(0,a.jsxs)(l.Z,{labelId:"label-tags",id:"tags",value:n.tags,label:"Tags",onChange:function(e){var a=e.target.value;r(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(n){S(e,n,r[n])}))}return e}({},n,{tags:a})),m()},children:[(0,a.jsxs)(c.Z,{value:_.DAO,children:["DAO",(0,a.jsx)("span",{className:"hidden sm:inline ml-1",children:"(Decentralized Autonomous Organization)"})]}),(0,a.jsxs)(c.Z,{value:_.DEFI,children:["DeFi",(0,a.jsx)("span",{className:"hidden sm:inline ml-1",children:"(Decentralized Finance)"})]}),(0,a.jsxs)(c.Z,{value:_.DEX,children:["DEX",(0,a.jsx)("span",{className:"hidden sm:inline ml-1",children:"(Decentralized Exchange)"})]}),(0,a.jsx)(c.Z,{value:_.EXCHANGE,children:"Exchange"}),(0,a.jsx)(c.Z,{value:_.GAMING,children:"Gaming"}),(0,a.jsx)(c.Z,{value:_.LAYER_1,children:"Layer 1"}),(0,a.jsx)(c.Z,{value:_.LAYER_2,children:"Layer 2"}),(0,a.jsx)(c.Z,{value:_.MEME,children:"Meme"}),(0,a.jsx)(c.Z,{value:_.METAVERSE,children:"Metaverse"}),(0,a.jsxs)(c.Z,{value:_.NFT,children:["NFT",(0,a.jsx)("span",{className:"hidden sm:inline ml-1",children:"(Non-fungible Token)"})]}),(0,a.jsx)(c.Z,{value:_.STABLECOIN,children:"Stable Coin"}),(0,a.jsx)(c.Z,{value:_.STAKING,children:"Staking"}),(0,a.jsx)(c.Z,{value:_.WRAPPED,children:"Wrapped"})]})]})})]})}),(0,a.jsx)(p,{coins:b})]})})}}},function(e){e.O(0,[977,774,888,179],(function(){return n=7314,e(e.s=n);var n}));var n=e.O();_N_E=n}]);