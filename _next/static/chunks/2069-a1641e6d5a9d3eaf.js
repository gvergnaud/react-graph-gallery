(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2069],{61651:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(85893);r(67294);var s=r(49871),l=r(28843),i=r(77522);let o={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function a(e){let{chartFamily:t}=e,r=l.c.filter(e=>e.family===t).map((e,t)=>{let r=(0,i.y)(e.reactURL);return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,n.jsx)(s.Z,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==o?void 0:o[t]}),(0,n.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},81122:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var n=r(85893),s=r(67294),l=r(59973),i=r(80615),o=r(88578),a=r(71415);let c=e=>{let{VizComponent:t,vizName:r,height:c=400,maxWidth:d=800,caption:u}=e,[h,f]=(0,s.useState)(!1),x=(0,s.useRef)(null),m=(0,l.B)(x);return(0,n.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:h?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,n.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,n.jsx)(o.X,{vizName:r})}),(0,n.jsx)("div",{className:"flex justify-center mt-2",children:(0,n.jsx)(a.z,{size:"sm",onClick:()=>f(!h),children:"Hide Sandbox"})})]}):(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,n.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:x,className:"pointer-events-auto",children:(0,n.jsx)(t,{height:c,width:m.width})})}),(0,n.jsx)(i.Y,{children:u}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(a.z,{size:"sm",onClick:()=>f(!h),children:"Show code"})})]})})}},88578:function(e,t,r){"use strict";r.d(t,{X:function(){return s}});var n=r(85893);r(67294);let s=e=>{let{vizName:t}=e;return(0,n.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},80153:function(e,t,r){"use strict";r.d(t,{A:function(){return h}});var n=r(85893),s=r(49700),l=r(63476),i=r(67294),o=r(63084),a=r.n(o);function c(){let[e,t]=(0,i.useState)([]),[r,s]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,i.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,n=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),l=t.findIndex(e=>e===n);s(-1===l?0:l)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,n.jsx)("div",{className:a().tableOfContent,children:e.map((t,s)=>(0,n.jsx)("p",{className:r===s?"".concat(a().tocItem," ").concat(a().tocItemActive):a().tocItem,onClick:t=>{t.preventDefault(),e[s].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=r(17414),u=r(62594);let h=e=>{let{children:t,title:r,seoDescription:i}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{title:r,seoDescription:i}),(0,n.jsx)(s.Z,{}),(0,n.jsx)("div",{className:"wrapper",children:t}),(0,n.jsx)(u.Z,{}),(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(l.Z,{})}),(0,n.jsx)(c,{})]})}},49871:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(85893);r(67294);var s=r(95887),l=r(28843),i=r(41664),o=r.n(i);let a=l.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:r,link:l,isAvailable:i,size:c}=e,u=a.includes(t),h=i?"opacity-100":"opacity-20";return(0,n.jsx)(o(),{href:i?l:"subscribe",className:"no-underline",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+h+" "+(i?"cursor-pointer":"cursor-not-allowed"),children:[(0,n.jsx)("div",{className:"absolute",children:(0,n.jsx)(s.Z,{chartLogo:t,size:c})}),u?(0,n.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,n.jsx)(d,{size:c})}):(0,n.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,n.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,n.jsx)("p",{className:"font-light text-sm text-gray-600 "+h,children:r})]})})}let d=e=>{let{size:t}=e;return(0,n.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,n.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},80615:function(e,t,r){"use strict";r.d(t,{Y:function(){return s}});var n=r(85893);let s=e=>{let{children:t}=e;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,r){"use strict";r.d(t,{d:function(){return d}});var n=r(85893),s=r(32581),l=r(15660),i=r.n(l),o=r(67294),a=r(45993),c=r.n(a);let d=e=>{let{code:t}=e,[r,l]=(0,o.useState)(!1),a=(0,o.useRef)(null);(0,o.useEffect)(()=>{a.current&&i().highlightElement(a.current)},[a,t]);let d=(0,n.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),l(!0)},className:c().codeChunckCopyButton,children:r?"Copied":(0,n.jsx)(s.Z,{size:14,style:{padding:0}})});return(0,n.jsxs)("div",{className:"mb-6 relative",children:[(0,n.jsx)("pre",{className:"rounded-md line-numbers",children:(0,n.jsx)("code",{ref:a,className:"language-javascript",children:t})}),(0,n.jsx)("div",{className:c().copyButtonContainer,children:d})]})}},59973:function(e,t,r){"use strict";r.d(t,{B:function(){return s}});var n=r(67294);let s=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[r,s]=(0,n.useState)(t),l=()=>{s(t())};return(0,n.useEffect)(()=>(window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)),[]),(0,n.useEffect)(()=>{l()},[e]),r}},34699:function(e,t,r){"use strict";r.d(t,{X:function(){return d}});var n=r(85893),s=r(88657);let l=e=>{let{width:t,height:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("defs",{children:(0,n.jsx)("pattern",{id:"pattern_rkDsm",patternUnits:"userSpaceOnUse",width:"9.5",height:"2.5",patternTransform:"rotate(41)",children:(0,n.jsx)("line",{x1:"0",y:"0",x2:"0",y2:"9.5",stroke:"#D9B9F3",strokeWidth:"1"})})}),(0,n.jsx)("rect",{width:t,height:r,fill:"url(#pattern_rkDsm)",opacity:"1"})]})};var i=r(67294);let o=e=>{let{xScale:t,pixelsPerTick:r}=e,s=t.range(),l=(0,i.useMemo)(()=>{let e=s[1]-s[0];return t.ticks(Math.floor(e/r)).map(e=>({value:e,xOffset:t(e)}))},[t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{d:["M",s[0],0,"L",s[1],0].join(" "),fill:"none",stroke:"currentColor"}),l.map(e=>{let{value:t,xOffset:r}=e;return(0,n.jsxs)("g",{transform:"translate(".concat(r,", 0)"),children:[(0,n.jsx)("line",{y2:6,stroke:"currentColor"}),(0,n.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateY(20px)"},children:t},t)]},t)})]})},a=e=>{let{yScale:t,pixelsPerTick:r}=e,s=t.range(),l=(0,i.useMemo)(()=>{let e=s[0]-s[1];return t.ticks(Math.floor(e/r)).map(e=>({value:e,yOffset:t(e)}))},[t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{d:["M",0,s[0],"L",0,s[1]].join(" "),fill:"none",stroke:"currentColor"}),l.map(e=>{let{value:t,yOffset:r}=e;return(0,n.jsxs)("g",{transform:"translate(0, ".concat(r,")"),children:[(0,n.jsx)("line",{x2:-6,stroke:"currentColor"}),(0,n.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateX(-20px)"},children:t},t)]},t)})]})},c={top:30,right:30,bottom:50,left:50},d=e=>{let{width:t,height:r}=e,i=t-c.right-c.left,d=r-c.top-c.bottom,u=s.BYU().domain([0,10]).range([0,i]),h=s.BYU().domain([0,11]).range([d,0]);return s.p2C().domain([1e-24,10]).range(["red","blue"]).clamp(!0),(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:t,height:r,shapeRendering:"crispEdges",children:(0,n.jsxs)("g",{width:i,height:d,transform:"translate(".concat([c.left,c.top].join(","),")"),overflow:"visible",children:[(0,n.jsx)(l,{width:i,height:d}),(0,n.jsx)(a,{yScale:h,pixelsPerTick:30}),(0,n.jsx)("g",{transform:"translate(0, ".concat(d,")"),children:(0,n.jsx)(o,{xScale:u,pixelsPerTick:60})})]})})})}},81341:function(e,t,r){"use strict";r.d(t,{c:function(){return l}});var n=r(85893),s=r(34699);let l=e=>{let{width:t=700,height:r=400}=e;return(0,n.jsx)(s.X,{width:t,height:r})}},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}}]);