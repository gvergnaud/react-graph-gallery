(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9682],{71458:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/scatterplot-basic-canvas",function(){return n(6842)}])},61651:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(85893);n(67294);var s=n(49871),i=n(28843),a=n(77522);let l={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function o(e){let{chartFamily:t}=e,n=i.c.filter(e=>e.family===t).map((e,t)=>{let n=(0,a.y)(e.reactURL);return(0,r.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,r.jsx)(s.Z,{link:n,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:122})},t)});return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==l?void 0:l[t]}),(0,r.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:n})]})}},81122:function(e,t,n){"use strict";n.d(t,{$:function(){return c}});var r=n(85893),s=n(67294),i=n(59973),a=n(80615),l=n(88578),o=n(5);let c=e=>{let{VizComponent:t,vizName:n,height:c=400,maxWidth:d=800,caption:h}=e,[u,x]=(0,s.useState)(!1),f=(0,s.useRef)(null),p=(0,i.B)(f);return(0,r.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,r.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,r.jsx)(l.X,{vizName:n})}),(0,r.jsx)("div",{className:"flex justify-center mt-2",children:(0,r.jsx)(o.z,{size:"sm",onClick:()=>x(!u),children:"Hide Sandbox"})})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,r.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:f,className:"pointer-events-auto",children:(0,r.jsx)(t,{height:c,width:p.width})})}),(0,r.jsx)(a.Y,{children:h}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(o.z,{size:"sm",onClick:()=>x(!u),children:"Show code"})})]})})}},88578:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(85893);n(67294);let s=e=>{let{vizName:t,height:n="500px",fileToOpen:s}=e;return(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split"+(s?"&module=/".concat(s):""),style:{width:"100%",height:n,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},80153:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var r=n(85893),s=n(49700),i=n(63476),a=n(67294),l=n(63084),o=n.n(l);function c(){let[e,t]=(0,a.useState)([]),[n,s]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,a.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),n=window.scrollY+150,r=t.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e,0),i=t.findIndex(e=>e===r);s(-1===i?0:i)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,r.jsx)("div",{className:o().tableOfContent,children:e.map((t,s)=>(0,r.jsx)("p",{className:n===s?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[s].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=n(17414),h=n(62594);let u=e=>{let{children:t,title:n,seoDescription:a}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.A,{title:n,seoDescription:a}),(0,r.jsx)(s.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:t}),(0,r.jsx)(h.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(c,{})]})}},49871:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(85893);n(67294);var s=n(95887),i=n(28843),a=n(41664),l=n.n(a);let o=i.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:n,link:i,isAvailable:a,size:c}=e,h=o.includes(t),u=a?"opacity-100":"opacity-20";return(0,r.jsx)(l(),{href:a?i:"subscribe",className:"no-underline",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(a?"cursor-pointer":"cursor-not-allowed"),children:[(0,r.jsx)("div",{className:"absolute",children:(0,r.jsx)(s.Z,{chartLogo:t,size:c})}),h?(0,r.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,r.jsx)(d,{size:c})}):(0,r.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,r.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,r.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:n})]})})}let d=e=>{let{size:t}=e;return(0,r.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,r.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},80615:function(e,t,n){"use strict";n.d(t,{Y:function(){return s}});var r=n(85893);let s=e=>{let{children:t}=e;return(0,r.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return d}});var r=n(85893),s=n(32581),i=n(15660),a=n.n(i),l=n(67294),o=n(45993),c=n.n(o);let d=e=>{let{code:t}=e,[n,i]=(0,l.useState)(!1),o=(0,l.useRef)(null);(0,l.useEffect)(()=>{o.current&&a().highlightElement(o.current)},[o,t]);let d=(0,r.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),i(!0)},className:c().codeChunckCopyButton,children:n?"Copied":(0,r.jsx)(s.Z,{size:14,style:{padding:0}})});return(0,r.jsxs)("div",{className:"mb-6 relative",children:[(0,r.jsx)("pre",{className:"rounded-md line-numbers",children:(0,r.jsx)("code",{ref:o,className:"language-javascript",children:t})}),(0,r.jsx)("div",{className:c().copyButtonContainer,children:d})]})}},59973:function(e,t,n){"use strict";n.d(t,{B:function(){return s}});var r=n(67294);let s=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,s]=(0,r.useState)(t),i=()=>{s(t())};return(0,r.useEffect)(()=>(window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)),[]),(0,r.useEffect)(()=>{i()},[e]),n}},6842:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(85893),s=n(67294),i=n(80153),a=n(43710),l=n(61651),o=n(3572),c=n(81122),d=n(41664),h=n.n(d),u=n(56438);let x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4,t=[];for(let n=0;n<e;n++){let e=10*Math.random(),n=5+4*Math.sin(e)+5*(Math.random()-.1);t.push({x:e,y:n})}return t}();var f=n(43950);let p=e=>{let{yScale:t,pixelsPerTick:n,width:i}=e,a=t.range(),l=(0,s.useMemo)(()=>{let e=a[0]-a[1];return t.ticks(Math.floor(e/n)).map(e=>({value:e,yOffset:t(e)}))},[t]);return(0,r.jsx)(r.Fragment,{children:l.map(e=>{let{value:t,yOffset:n}=e;return(0,r.jsxs)("g",{transform:"translate(0, ".concat(n,")"),shapeRendering:"crispEdges",children:[(0,r.jsx)("line",{x1:-10,x2:i+10,stroke:"#D2D7D3",strokeWidth:.5}),(0,r.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateX(-20px)",fill:"#D2D7D3"},children:t},t)]},t)})})},m=e=>{let{xScale:t,pixelsPerTick:n,height:i}=e,a=t.range(),l=(0,s.useMemo)(()=>{let e=a[1]-a[0];return t.ticks(Math.floor(e/n)).map(e=>({value:e,xOffset:t(e)}))},[t]);return(0,r.jsx)(r.Fragment,{children:l.map(e=>{let{value:t,xOffset:n}=e;return(0,r.jsxs)("g",{transform:"translate(".concat(n,", 0)"),shapeRendering:"crispEdges",children:[(0,r.jsx)("line",{y1:10,y2:-i-10,stroke:"#D2D7D3",strokeWidth:.5}),(0,r.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateY(20px)",fill:"#D2D7D3"},children:t},t)]},t)})})},j={top:60,right:60,bottom:60,left:60},v=e=>{let{width:t,height:n,data:i}=e,a=t-j.right-j.left,l=n-j.top-j.bottom,o=f.BYU().domain([0,16]).range([l,0]),c=f.BYU().domain([0,10]).range([0,a]),d=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e=d.current;if(!e)return;let r=e.getContext("2d");r.clearRect(0,0,t,n),i.forEach(e=>{r.beginPath(),r.arc(c(e.x),o(e.y),1,0,2*Math.PI),r.globalAlpha=.5,r.fillStyle="#cb1dd1",r.fill()})},[i,c,o,t,n]),(0,r.jsx)("div",{style:{position:"relative"},children:(0,r.jsxs)("div",{style:{transform:"translate(".concat(j.left,"px, ").concat(j.top,"px)"),width:a,height:l},children:[(0,r.jsxs)("svg",{width:a,height:l,style:{position:"absolute",top:0,left:0,overflow:"visible"},children:[(0,r.jsx)(p,{yScale:o,pixelsPerTick:40,width:a}),(0,r.jsx)("g",{transform:"translate(0, ".concat(l,")"),children:(0,r.jsx)(m,{xScale:c,pixelsPerTick:40,height:l})})]}),(0,r.jsx)("canvas",{style:{position:"relative"},ref:d,width:a,height:l})]})})},g=e=>{let{width:t=700,height:n=400}=e;return(0,r.jsx)(v,{data:x,width:t,height:n})},y=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["This tutorial is a variation around the general"," ",(0,r.jsx)(h(),{href:"/scatter-plot",children:"introduction to scatterplot with react"})," ","and d3.js. You should probably understand the concepts described there before reading here."]}),(0,r.jsxs)("p",{children:["Rendering a scatterplot using SVG can ",(0,r.jsx)("b",{children:"arm the performance"})," of your webpage if the number of data points is high. A common workaround is to draw the circles in ",(0,r.jsx)("b",{children:"canvas"})," instead."]}),(0,r.jsxs)("p",{children:["This post explains how to ",(0,r.jsx)("b",{children:"combine"})," SVG for the axes and canvas for the scatterplot markers in React."]})]});function w(){return(0,r.jsxs)(i.A,{title:"Scatterplot with Canvas",seoDescription:"Learn how to build a scatterplot rendered in canvas with React for better performance. Code and explanation provided.",children:[(0,r.jsx)(a.Z,{title:"Scatterplot with Canvas",description:y,chartType:"scatter"}),(0,r.jsx)("h2",{id:"Why Canvas",children:"Why using canvas? \uD83E\uDD14"}),(0,r.jsxs)("p",{children:["A scatterplot is a chart type that is commonly used to display a"," ",(0,r.jsx)("b",{children:"high amount of data points"}),"."]}),(0,r.jsxs)("p",{children:["When you draw it in SVG, it means adding a bunch of ",(0,r.jsx)("code",{children:"circle"})," ","elements. As a result, your ",(0,r.jsx)("b",{children:"DOM will quickly become really heavy"}),". It can result in ",(0,r.jsx)("b",{children:"poor performances"}),". If you want to add some animation on top of it, you are pretty sure to freeze the page."]}),(0,r.jsxs)("p",{children:["When using canvas, you add ",(0,r.jsx)("b",{children:"only 1 node in your DOM"}),", and benefit the very high speed of it. It is game changer for any viz type that requires good performances."]}),(0,r.jsx)("h2",{id:"Implementation",children:"Scatterplot canvas implementation"}),(0,r.jsx)("p",{children:"The trick here is to use 2 layers of drawing:"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["The first layer is for the ",(0,r.jsx)("b",{children:"axes"}),". It is an SVG element that will add the X and Y axes using some usual ",(0,r.jsx)("code",{children:"AxisLeft"})," and"," ",(0,r.jsx)("code",{children:"AxisBottom"})," components."]}),(0,r.jsxs)("li",{children:["The second layer is for the ",(0,r.jsx)("b",{children:"markers"}),", it is the"," ",(0,r.jsx)("code",{children:"canvas"})," element. It has a ",(0,r.jsx)("code",{children:"ref"}),". We can then call a function in a ",(0,r.jsx)("code",{children:"useEffect"})," hook to draw inside this canvas element."]})]}),(0,r.jsx)("p",{children:"This is how the useEffect hook looks like, drawing our circles:"}),(0,r.jsx)(o.d,{code:b}),(0,r.jsx)("p",{children:"Here is a complete implementation of the scatterplot using this technique with 10000 data points:"}),(0,r.jsx)(c.$,{vizName:"ScatterplotCanvasBasicDemo",VizComponent:g,maxWidth:500,height:500,caption:"A scatterplot made with React, using SVG for the axes and Canvas for the markers to improve performance."}),(0,r.jsxs)("p",{children:[(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),(0,r.jsxs)("p",{children:["Canvas is an important topic in data visualization for the web. I plan to write complete articles on the topic. You can know when it's ready by"," ",(0,r.jsx)(h(),{href:"/subscribe",children:"subscribing"})," to the project."]}),(0,r.jsx)(u.J,{size:"sm",isFilled:!0,href:"/subscribe",children:"Tell me when the canvas post is ready!"}),(0,r.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,r.jsx)(l.Z,{chartFamily:"flow"}),(0,r.jsx)("div",{className:"mt-20"})]})}let b="\nuseEffect(() => {\n  const canvas = canvasRef.current;\n\n  if (!canvas) {\n    return;\n  }\n  const ctx = canvas.getContext('2d');\n\n  // Clear the canvas\n  ctx.clearRect(0, 0, width, height);\n\n  // Draw each data point as a circle\n  data.forEach((point) => {\n    ctx.beginPath();\n    ctx.arc(xScale(point.x), yScale(point.y), CIRCLE_RADIUS, 0, 2 * Math.PI);\n    ctx.globalAlpha = 0.5;\n    ctx.fillStyle = '#cb1dd1';\n    ctx.fill();\n  });\n}, [data, xScale, yScale, width, height]);\n".trim()},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[2343,7754,3950,7823,8190,3710,2594,9774,2888,179],function(){return e(e.s=71458)}),_N_E=e.O()}]);