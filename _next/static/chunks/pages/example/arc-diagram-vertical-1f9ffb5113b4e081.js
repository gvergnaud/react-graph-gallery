(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3892],{2225:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/arc-diagram-vertical",function(){return r(84638)}])},61651:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(85893);r(67294);var a=r(49871),n=r(28843),l=r(77522);let s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function o(e){let{chartFamily:t}=e,r=n.c.filter(e=>e.family===t).map((e,t)=>{let r=(0,l.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(a.Z,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==s?void 0:s[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},81122:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var i=r(85893),a=r(67294),n=r(59973),l=r(80615),s=r(88578),o=r(71415);let c=e=>{let{VizComponent:t,vizName:r,height:c=400,maxWidth:d=800,caption:u}=e,[h,m]=(0,a.useState)(!1),x=(0,a.useRef)(null),f=(0,n.B)(x);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:h?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(s.X,{vizName:r})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(o.z,{size:"sm",onClick:()=>m(!h),children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:x,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:c,width:f.width})})}),(0,i.jsx)(l.Y,{children:u}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(o.z,{size:"sm",onClick:()=>m(!h),children:"Show code"})})]})})}},88578:function(e,t,r){"use strict";r.d(t,{X:function(){return a}});var i=r(85893);r(67294);let a=e=>{let{vizName:t}=e;return(0,i.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},80153:function(e,t,r){"use strict";r.d(t,{A:function(){return h}});var i=r(85893),a=r(49700),n=r(63476),l=r(67294),s=r(63084),o=r.n(s);function c(){let[e,t]=(0,l.useState)([]),[r,a]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,l.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,i=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),n=t.findIndex(e=>e===i);a(-1===n?0:n)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,i.jsx)("div",{className:o().tableOfContent,children:e.map((t,a)=>(0,i.jsx)("p",{className:r===a?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[a].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=r(17414),u=r(62594);let h=e=>{let{children:t,title:r,seoDescription:l}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:r,seoDescription:l}),(0,i.jsx)(a.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:t}),(0,i.jsx)(u.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(n.Z,{})}),(0,i.jsx)(c,{})]})}},49871:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var i=r(85893);r(67294);var a=r(95887),n=r(28843),l=r(41664),s=r.n(l);let o=n.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:r,link:n,isAvailable:l,size:c}=e,u=o.includes(t),h=l?"opacity-100":"opacity-20";return(0,i.jsx)(s(),{href:l?n:"subscribe",className:"no-underline",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+h+" "+(l?"cursor-pointer":"cursor-not-allowed"),children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(a.Z,{chartLogo:t,size:c})}),u?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(d,{size:c})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+h,children:r})]})})}let d=e=>{let{size:t}=e;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},80615:function(e,t,r){"use strict";r.d(t,{Y:function(){return a}});var i=r(85893);let a=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,r){"use strict";r.d(t,{d:function(){return d}});var i=r(85893),a=r(32581),n=r(15660),l=r.n(n),s=r(67294),o=r(45993),c=r.n(o);let d=e=>{let{code:t}=e,[r,n]=(0,s.useState)(!1),o=(0,s.useRef)(null);(0,s.useEffect)(()=>{o.current&&l().highlightElement(o.current)},[o,t]);let d=(0,i.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),n(!0)},className:c().codeChunckCopyButton,children:r?"Copied":(0,i.jsx)(a.Z,{size:14,style:{padding:0}})});return(0,i.jsxs)("div",{className:"mb-6 relative",children:[(0,i.jsx)("pre",{className:"rounded-md line-numbers",children:(0,i.jsx)("code",{ref:o,className:"language-javascript",children:t})}),(0,i.jsx)("div",{className:c().copyButtonContainer,children:d})]})}},59973:function(e,t,r){"use strict";r.d(t,{B:function(){return a}});var i=r(67294);let a=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[r,a]=(0,i.useState)(t),n=()=>{a(t())};return(0,i.useEffect)(()=>(window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)),[]),(0,i.useEffect)(()=>{n()},[e]),r}},84638:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var i=r(85893);r(67294);var a=r(80153),n=r(43710),l=r(61651),s=r(3572),o=r(81122),c=r(41664),d=r.n(c);let u={nodes:[{id:"Myriel",group:"team1"},{id:"Anne",group:"team1"},{id:"Gabriel",group:"team1"},{id:"Mel",group:"team1"},{id:"Yan",group:"team2"},{id:"Tom",group:"team2"},{id:"Cyril",group:"team2"},{id:"Tuck",group:"team2"},{id:"Antoine",group:"team3"},{id:"Rob",group:"team3"}],links:[{source:"Anne",target:"Myriel",value:1},{source:"Napoleon",target:"Myriel",value:1},{source:"Gabriel",target:"Myriel",value:1},{source:"Mel",target:"Myriel",value:1},{source:"Yan",target:"Tom",value:1},{source:"Tom",target:"Cyril",value:1},{source:"Tuck",target:"Myriel",value:1},{source:"Tuck",target:"Mel",value:1},{source:"Tuck",target:"Myriel",value:1},{source:"Mel",target:"Myriel",value:1},{source:"Rob",target:"Antoine",value:1}]};var h=r(88657);let m=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"],x={top:70,right:10,bottom:70,left:80},f=e=>{let{width:t,height:r,data:a}=e,n=t-x.right-x.left,l=r-x.top-x.bottom,s=a.nodes.map(e=>e.id),o=[...new Set(a.nodes.map(e=>e.group))],c=h.q2y().range([0,l]).domain(s),d=h.PKp().domain(o).range(m),u=a.nodes.map(e=>(0,i.jsxs)("g",{children:[(0,i.jsx)("circle",{cx:0,cy:c(e.id),r:8,fill:d(e.group)}),(0,i.jsx)("text",{x:-20,y:c(e.id),"text-anchor":"end",fontSize:14,alignmentBaseline:"middle",children:e.id})]},e.id)),f=a.links.map((e,t)=>{let r=c(e.source),a=c(e.target);if(void 0!==r&&void 0!==a)return(0,i.jsx)("path",{d:p(0,r,0,a),stroke:"black",fill:"none"},t)});return(0,i.jsx)("div",{children:(0,i.jsx)("svg",{width:t,height:r,children:(0,i.jsxs)("g",{width:n,height:l,transform:"translate(".concat([x.left,x.top].join(","),")"),children:[u,f]})})})},p=(e,t,r,i)=>["M",e,t,"A",(t-i)/2*2,(t-i)/2,0,1,t<i?1:0,r,",",i].join(" "),g=e=>{let{width:t=700,height:r=400}=e;return 0===t?null:(0,i.jsx)(f,{data:u,width:t,height:r})};var v=r(56438);let j=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["This tutorial is a variation around the general"," ",(0,i.jsx)(d(),{href:"/arc-diagram",children:"introduction to arc diagram with react"})," ","and d3.js. You should probably understand the concepts described there before reading here."]}),(0,i.jsxs)("p",{children:["This example explains how to make a ",(0,i.jsx)("b",{children:"vertical"})," version of the"," ",(0,i.jsx)(d(),{href:"/arc-diagram",children:"arc diagram"}),". The vertical version is sometimes prefered as it makes it easier to read the node labels."]}),(0,i.jsx)("p",{children:"A code sandbox is provided for the final result, but explanations target what's different compared to a classic horizontal arc diagram."})]});function b(){return(0,i.jsxs)(a.A,{title:"How to build a vertical arc diagram with React and D3.js.",seoDescription:"A step-by-step guide to build an arc diagram. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,i.jsx)(n.Z,{title:"Vertical arc diagram",description:j,chartType:"arc"}),(0,i.jsx)("h2",{id:"plot",children:"Plot and code"}),(0,i.jsx)("p",{children:"If you are in a hurry, here is the final plot we're trying to achieve here, together with its code:\uD83D\uDE47‍♂️"}),(0,i.jsxs)("p",{children:["It is a very simple vertical ",(0,i.jsx)("b",{children:"arc diagram"}),", a variation of the",(0,i.jsx)("b",{children:"horizontal"})," version deeply described in the"," ",(0,i.jsx)(d(),{href:"/arc-diagram",children:"arc diagram section"})," of the gallery"]}),(0,i.jsx)(v.J,{isFilled:!0,size:"sm",href:"/arc-diagram",children:"Arc section"}),(0,i.jsx)(o.$,{vizName:"ArcDiagramVertical",VizComponent:g,maxWidth:500,height:500,caption:"A vertical arc diagram made with d3.js and react."}),(0,i.jsx)("h2",{id:"vertical arcs",children:"Vertical arcs"}),(0,i.jsxs)("p",{children:["The main difficulty when it comes to make an arc diagram is to draw"," ",(0,i.jsx)("b",{children:"arcs"})," in SVG."]}),(0,i.jsxs)("p",{children:["The ",(0,i.jsx)(d(),{href:"/arc-diagram#connections",children:"function"})," allowing to draw arcs between 2 data points is a bit complicated since it requires to use ",(0,i.jsx)("b",{children:"elliptical arc curves"}),"."]}),(0,i.jsxs)("p",{children:["You can read more explanation about the syntax in the"," ",(0,i.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve",children:"official doc"}),". But in the meantime here is the function I suggest to draw an arc connecting 2 points ",(0,i.jsx)("code",{children:"vertically"}),":"]}),(0,i.jsx)(s.d,{code:y}),(0,i.jsx)("h2",{id:"labels",children:"Labels"}),(0,i.jsxs)("p",{children:["Note that some ",(0,i.jsx)("b",{children:"labels"})," have been added here compared to the vertical version."]}),(0,i.jsxs)("p",{children:["This is the main advantage of choosing the"," ",(0,i.jsx)(d(),{href:"/arc-diagram",children:"horizontal layout"}),"!"]}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,i.jsx)(l.Z,{chartFamily:"flow"}),(0,i.jsx)("div",{className:"mt-20"})]})}let y='\nconst verticalArcGenerator = (\n  xStart: number,\n  yStart: number,\n  xEnd: number,\n  yEnd: number\n) => {\n  return [\n    // the arc starts at the coordinate xStart, yStart\n    "M",\n    xStart,\n    yStart,\n    // A means we\'re gonna build an Elliptical Arc Curve\n    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve\n    "A",\n    ((yStart - yEnd) / 2) * 2, // rx: first radii of the ellipse (inflexion point)\n    (yStart - yEnd) / 2, // ry: second radii of the ellipse  (inflexion point)\n    0, // angle: rotation (in degrees) of the ellipse relative to the x-axis\n    1, // large-arc-flag: large arc (1) or small arc (0)\n    yStart < yEnd ? 1 : 0, // sweep-flag: the clockwise turning arc (1) or counterclockwise turning arc (0)\n    // Position of the end of the arc\n    xEnd,\n    ",",\n    yEnd,\n  ].join(" ");\n};\n'.trim()},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[2343,7754,8657,7823,8190,3710,2594,9774,2888,179],function(){return e(e.s=2225)}),_N_E=e.O()}]);