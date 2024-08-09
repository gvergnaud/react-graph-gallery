(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3959],{81072:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/barplot-stacked-vertical",function(){return r(26934)}])},61651:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var i=r(85893);r(67294);var n=r(49871),s=r(28843),o=r(77522);let a={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function l(e){let{chartFamily:t}=e,r=s.c.filter(e=>e.family===t).map((e,t)=>{let r=(0,o.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(n.Z,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==a?void 0:a[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},81122:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var i=r(85893),n=r(67294),s=r(59973),o=r(80615),a=r(88578),l=r(71415);let c=e=>{let{VizComponent:t,vizName:r,height:c=400,maxWidth:d=800,caption:u}=e,[p,h]=(0,n.useState)(!1),x=(0,n.useRef)(null),g=(0,s.B)(x);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:p?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(a.X,{vizName:r})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(l.z,{size:"sm",onClick:()=>h(!p),children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:x,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:c,width:g.width})})}),(0,i.jsx)(o.Y,{children:u}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(l.z,{size:"sm",onClick:()=>h(!p),children:"Show code"})})]})})}},88578:function(e,t,r){"use strict";r.d(t,{X:function(){return n}});var i=r(85893);r(67294);let n=e=>{let{vizName:t}=e;return(0,i.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},52450:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var i=r(85893);r(67294);var n=r(92050),s=r(49975),o=r(59942);function a(e){let{images:t}=e,r=n.F.filter(e=>t.includes(e.img)).map((e,t)=>(0,i.jsx)(s.X,{link:e.link,title:e.title,description:(0,i.jsx)("p",{children:e.description}),img:e.img,alt:e.alt},t));return(0,i.jsx)(o.E,{children:r})}},80153:function(e,t,r){"use strict";r.d(t,{A:function(){return p}});var i=r(85893),n=r(49700),s=r(63476),o=r(67294),a=r(63084),l=r.n(a);function c(){let[e,t]=(0,o.useState)([]),[r,n]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,o.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,i=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),s=t.findIndex(e=>e===i);n(-1===s?0:s)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,i.jsx)("div",{className:l().tableOfContent,children:e.map((t,n)=>(0,i.jsx)("p",{className:r===n?"".concat(l().tocItem," ").concat(l().tocItemActive):l().tocItem,onClick:t=>{t.preventDefault(),e[n].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=r(17414),u=r(62594);let p=e=>{let{children:t,title:r,seoDescription:o}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:r,seoDescription:o}),(0,i.jsx)(n.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:t}),(0,i.jsx)(u.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(s.Z,{})}),(0,i.jsx)(c,{})]})}},49871:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var i=r(85893);r(67294);var n=r(95887),s=r(28843),o=r(41664),a=r.n(o);let l=s.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:r,link:s,isAvailable:o,size:c}=e,u=l.includes(t),p=o?"opacity-100":"opacity-20";return(0,i.jsx)(a(),{href:o?s:"subscribe",className:"no-underline",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+p+" "+(o?"cursor-pointer":"cursor-not-allowed"),children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(n.Z,{chartLogo:t,size:c})}),u?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(d,{size:c})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+p,children:r})]})})}let d=e=>{let{size:t}=e;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},80615:function(e,t,r){"use strict";r.d(t,{Y:function(){return n}});var i=r(85893);let n=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},59973:function(e,t,r){"use strict";r.d(t,{B:function(){return n}});var i=r(67294);let n=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[r,n]=(0,i.useState)(t),s=()=>{n(t())};return(0,i.useEffect)(()=>(window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)),[]),(0,i.useEffect)(()=>{s()},[e]),r}},26934:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var i=r(85893);r(67294);var n=r(80153),s=r(43710),o=r(61651),a=r(81122),l=r(41664),c=r.n(l),d=r(52450),u=r(57563);let p=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["This tutorial is a variation around the general"," ",(0,i.jsx)(c(),{href:"/barplot",children:"introduction to barplot with react"})," and d3.js. You should probably understand the concepts described there before digging into ",(0,i.jsx)("b",{children:"stacking"}),"."]}),(0,i.jsxs)("p",{children:["This example shows how to represent ",(0,i.jsx)("b",{children:"2 levels of grouping"})," in a barplot, resulting in a"," ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/graph/barplot.html",children:"stacked barplot"}),". The items of the dataset are divided in ",(0,i.jsx)("b",{children:"groups"})," (reprented as bars) and ",(0,i.jsx)("b",{children:"subgroups"})," (represented as sections in each bar)."]}),(0,i.jsx)("p",{children:"A code sandbox is provided for the final result, but explanations target what's different compared to an usual barplot."})]});function h(){return(0,i.jsxs)(n.A,{title:"Vertical stacked barplot.",seoDescription:"A step-by-step guide to build a vertical stacked barplot with React and d3.js. Comes with explanation, code sandboxes, and ready-to-use templates.",children:[(0,i.jsx)(s.Z,{title:(0,i.jsx)("h1",{children:"Vertical Stacked Barplot"}),description:p,chartType:"barplot"}),(0,i.jsx)("h2",{id:"plot",children:"Plot and code"}),(0,i.jsxs)("p",{children:["This is a ",(0,i.jsx)("b",{children:"vertical stacked barplot"})," built using React and d3.js. It is very similar to the horizontal version. So very little explanation is provided here. Enjoy the sandbox!"]}),(0,i.jsx)(a.$,{vizName:"BarplotStackedBasic",VizComponent:u.x,height:400,maxWidth:600,caption:"Most basic barplot built with d3.js for scales, and react for rendering"}),(0,i.jsx)("h2",{id:"variation",children:"Variation"}),(0,i.jsx)("p",{children:"Check those other barplot and stacked barplot that can interest you:"}),(0,i.jsx)(d.Z,{images:["barplot-basic.png","barplotDatasetAnimation.gif","barplot-stacked-horizontal.png"]}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,i.jsx)(o.Z,{chartFamily:"ranking"}),(0,i.jsx)("div",{className:"mt-20"})]})}},57563:function(e,t,r){"use strict";r.d(t,{x:function(){return c}});var i=r(85893);let n=[{x:"Jan",groupA:12,groupB:19,groupC:9,groupD:2},{x:"Feb",groupA:16,groupB:21,groupC:13,groupD:8},{x:"Mar",groupA:23,groupB:21,groupC:24,groupD:9},{x:"Apr",groupA:38,groupB:34,groupC:25,groupD:23},{x:"May",groupA:42,groupB:46,groupC:34,groupD:26},{x:"Jun",groupA:34,groupB:42,groupC:32,groupD:26},{x:"Jul",groupA:2,groupB:34,groupC:21,groupD:27},{x:"Aug",groupA:21,groupB:32,groupC:16,groupD:18},{x:"Sept",groupA:18,groupB:31,groupC:18,groupD:12},{x:"Oct",groupA:12,groupB:21,groupC:14,groupD:10},{x:"Nov",groupA:12,groupB:18,groupC:14,groupD:10},{x:"Dec",groupA:2,groupB:8,groupC:4,groupD:10}];var s=r(67294),o=r(88657);let a={top:30,right:30,bottom:50,left:50},l=e=>{let{width:t,height:r,data:n}=e,l=(0,s.useRef)(null),c=t-a.right-a.left,d=r-a.top-a.bottom,u=n.map(e=>String(e.x)),p=o.knu().keys(["groupA","groupB","groupC","groupD"]).order(o.Qxt),h=p(n),x=(0,s.useMemo)(()=>o.BYU().domain([0,200]).range([d,0]),[n,r]),g=(0,s.useMemo)(()=>o.tiA().domain(u).range([0,c]).padding(.05),[n,t]);var f=o.PKp().domain(u).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]);(0,s.useEffect)(()=>{let e=o.Ys(l.current);e.selectAll("*").remove();let t=o.LLu(g);e.append("g").attr("transform","translate(0,"+d+")").call(t);let r=o.y4O(x);e.append("g").call(r)},[g,x,d]);let m=h.map((e,t)=>(0,i.jsx)("g",{children:e.map((t,r)=>(0,i.jsx)("rect",{x:g(t.data.x),y:x(t[1]),height:x(t[0])-x(t[1]),width:g.bandwidth(),fill:f(e.key),opacity:.9},r))},t));return(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:t,height:r,children:[(0,i.jsx)("g",{width:c,height:d,transform:"translate(".concat([a.left,a.top].join(","),")"),children:m}),(0,i.jsx)("g",{width:c,height:d,ref:l,transform:"translate(".concat([a.left,a.top].join(","),")")})]})})},c=e=>{let{width:t=700,height:r=400}=e;return(0,i.jsx)(l,{data:n,width:t,height:r})}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[2343,7754,8657,8190,3710,2594,693,9774,2888,179],function(){return e(e.s=81072)}),_N_E=e.O()}]);