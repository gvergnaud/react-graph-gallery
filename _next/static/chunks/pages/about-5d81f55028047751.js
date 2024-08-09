(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2521],{39212:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return s(60570)}])},81122:function(e,t,s){"use strict";s.d(t,{$:function(){return c}});var r=s(85893),i=s(67294),n=s(59973),a=s(80615),o=s(88578),l=s(71415);let c=e=>{let{VizComponent:t,vizName:s,height:c=400,maxWidth:h=800,caption:d}=e,[x,u]=(0,i.useState)(!1),p=(0,i.useRef)(null),f=(0,n.B)(p);return(0,r.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:x?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,r.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,r.jsx)(o.X,{vizName:s})}),(0,r.jsx)("div",{className:"flex justify-center mt-2",children:(0,r.jsx)(l.z,{size:"sm",onClick:()=>u(!x),children:"Hide Sandbox"})})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,r.jsx)("div",{style:{height:c,width:"100%",maxWidth:h},ref:p,className:"pointer-events-auto",children:(0,r.jsx)(t,{height:c,width:f.width})})}),(0,r.jsx)(a.Y,{children:d}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(l.z,{size:"sm",onClick:()=>u(!x),children:"Show code"})})]})})}},88578:function(e,t,s){"use strict";s.d(t,{X:function(){return i}});var r=s(85893);s(67294);let i=e=>{let{vizName:t}=e;return(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},80153:function(e,t,s){"use strict";s.d(t,{A:function(){return x}});var r=s(85893),i=s(49700),n=s(63476),a=s(67294),o=s(63084),l=s.n(o);function c(){let[e,t]=(0,a.useState)([]),[s,i]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,a.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),s=window.scrollY+150,r=t.reduce((e,t)=>Math.abs(t-s)<Math.abs(e-s)?t:e,0),n=t.findIndex(e=>e===r);i(-1===n?0:n)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,r.jsx)("div",{className:l().tableOfContent,children:e.map((t,i)=>(0,r.jsx)("p",{className:s===i?"".concat(l().tocItem," ").concat(l().tocItemActive):l().tocItem,onClick:t=>{t.preventDefault(),e[i].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var h=s(17414),d=s(62594);let x=e=>{let{children:t,title:s,seoDescription:a}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.A,{title:s,seoDescription:a}),(0,r.jsx)(i.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:t}),(0,r.jsx)(d.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(n.Z,{})}),(0,r.jsx)(c,{})]})}},80615:function(e,t,s){"use strict";s.d(t,{Y:function(){return i}});var r=s(85893);let i=e=>{let{children:t}=e;return(0,r.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},59973:function(e,t,s){"use strict";s.d(t,{B:function(){return i}});var r=s(67294);let i=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[s,i]=(0,r.useState)(t),n=()=>{i(t())};return(0,r.useEffect)(()=>(window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)),[]),(0,r.useEffect)(()=>{n()},[e]),s}},60570:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var r=s(85893);s(67294);var i=s(80153),n=s(43710),a=s(19618),o=s(81122),l=s(21202),c=s(41664),h=s.n(c);let d=(0,r.jsx)("p",{className:"text-gray-400",children:(0,r.jsxs)("i",{children:["A love story – So ",(0,r.jsx)("del",{children:"simple"})," ",(0,r.jsx)("b",{children:"powerful"})," yet so"," ",(0,r.jsx)("b",{children:"complicated"})]})});function x(){return(0,r.jsxs)(i.A,{title:"About the gallery",seoDescription:"How to build an area chart with React and D3.js. A set of re-usable components",children:[(0,r.jsx)(n.Z,{title:"React + D3.js = ❤️",description:d}),(0,r.jsxs)("p",{children:["A few years ago I created the"," ",(0,r.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3 graph gallery"}),", a website showcasing hundreds of simple charts made with"," ",(0,r.jsx)("a",{href:"https://d3js.org/",children:"d3.js"}),". It worked well! Thousands of people use it daily to learn d3. \uD83C\uDF89"]}),(0,r.jsxs)("p",{children:["Since then, ",(0,r.jsx)("a",{href:"https://reactjs.org/",children:"React"})," became the"," ",(0,r.jsx)("a",{href:"https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190",children:"most popular"})," ","framework to build user interfaces. This rose a question:"," ",(0,r.jsx)("b",{children:"how to build a chart in react"}),"? That's a complicated question with many answers. Here are the 3 most common approaches."]}),(0,r.jsx)("h2",{children:"3 ways to draw a chart in react"}),(0,r.jsx)("h3",{children:"→ 1️⃣ Charting libraries"}),(0,r.jsxs)("p",{children:["There is a ",(0,r.jsx)("b",{children:"myriad"})," of charting libraries offering react components for every chart type."," ",(0,r.jsx)("a",{href:"https://www.highcharts.com/",children:"HighChart"}),","," ",(0,r.jsx)("a",{href:"https://github.com/recharts/recharts",children:"ReCharts"}),","," ",(0,r.jsx)("a",{href:"https://uber.github.io/react-vis/",children:"React-viz"}),","," ",(0,r.jsx)("a",{href:"https://github.com/observablehq/plot",children:"plot"}),","," ",(0,r.jsx)("a",{href:"https://airbnb.io/visx/",children:"visX"})," and so many more. Those libraries are awesome: you'll get a working chart in minutes using them."]}),(0,r.jsxs)("p",{children:["But ",(0,r.jsx)("b",{children:"simplicity comes with a cost"}),": the time you saved in the first place will be lost when you'll try to reach a high level of customization."]}),(0,r.jsxs)("p",{children:["If you want to build something ",(0,r.jsx)("b",{children:"unique"}),", you need to draw shapes one by one."]}),(0,r.jsxs)("h3",{children:["→ 2️⃣ D3 for rendering in a ",(0,r.jsx)("code",{children:"useEffect"})," hook"]}),(0,r.jsxs)("p",{children:["If you're familiar with d3.js already, it's possible to use any of its examples (from a ",(0,r.jsx)("a",{href:"https://bl.ocks.org/",children:"block"})," or the"," ",(0,r.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"gallery"}),") by using a"," ",(0,r.jsx)("code",{children:"useEffect"})," hook."]}),(0,r.jsxs)("p",{children:["Basically, you can create a ",(0,r.jsx)("code",{children:"div"})," in the DOM using react. You can then use the drawing methods of the"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-selection",children:"d3-selection"})," module like ",(0,r.jsx)("code",{children:"append"})," or ",(0,r.jsx)("code",{children:"axisBottom"})," to target this"," ",(0,r.jsx)("code",{children:"div"}),", and add the content of the chart."]}),(0,r.jsx)("p",{children:"Let's apply this to draw axes:"}),(0,r.jsx)(o.$,{vizName:"AxisBasicD3",VizComponent:a.d,maxWidth:600,height:300,caption:"You can use all the d3 knowlege you have in a useEffect hook to build the graph in a react context."}),(0,r.jsxs)("p",{children:["This ",(0,r.jsx)("b",{children:"works"})," but comes with some ",(0,r.jsx)("b",{children:"caveats"}),". To put it in a nutshell you now have 2 tools trying to ",(0,r.jsx)("b",{children:"control the DOM"}),": react and d3. That's hard to maintain for large applications."]}),(0,r.jsx)("h3",{children:"→ 3️⃣ D3 for maths, React for rendering"}),(0,r.jsxs)("p",{children:["This gallery suggests using ",(0,r.jsx)("b",{children:"d3.js only for the math"})," utils it provides. And to add entries to the DOM using react, like for any other UI element."]}),(0,r.jsxs)("p",{children:["Let's say we want to build a ",(0,r.jsx)("a",{href:"scatter-plot",children:"scatterplot"}),". The"," ",(0,r.jsx)("code",{children:"scaleLinear"})," function of d3.js is used to build the scales. Now that we can easily know the position of a circle on the screen, we can just loop through all data items and render them as a"," ",(0,r.jsx)("code",{children:"circle"})," svg element."]}),(0,r.jsx)(o.$,{VizComponent:l.C,vizName:"ScatterplotBasic",maxWidth:500,height:500,caption:"Use d3.js to compute the scales. Use React to render the circles."}),(0,r.jsx)("h2",{children:"Learn concepts, Get templates"}),(0,r.jsxs)("p",{children:["This gallery is all about using the power of the ",(0,r.jsx)("b",{children:"d3"})," math utils and the ",(0,r.jsx)("b",{children:"react"})," rendering engine."]}),(0,r.jsxs)("p",{children:["The first goal is to ",(0,r.jsx)("b",{children:"teach the concepts"}),". Many examples are provided for each chart type. Each one targets a specific theme like color, axis, responsiveness, hover effect, or tooltips."]}),(0,r.jsxs)("p",{children:["The second goal is to ",(0,r.jsx)("b",{children:"provide templates"})," for each viz type. Building a viz from scratch is time-consuming, so better tweak an existing example."]}),(0,r.jsxs)("p",{children:["All graph examples come with an explanation and a ",(0,r.jsx)("b",{children:"code sandbox"})," ","allowing you to play with the code."]}),(0,r.jsxs)("p",{className:"mt-8 mb-12",children:["I built this website with ❤️. I hope it will help you create"," ",(0,r.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"stunning vizs"})," in a minimum amount of time. Reach me on"," ",(0,r.jsx)("a",{href:"https://twitter.com/R_Graph_Gallery",children:"Twitter"}),", contribute on"," ",(0,r.jsx)("a",{href:"https://github.com/holtzy/react-graph-gallery",children:"github"})," and subscribe to the ",(0,r.jsx)(h(),{href:"/subscribe",children:"newsletter"})," to know when new chart types are published!"]})]})}},19618:function(e,t,s){"use strict";s.d(t,{d:function(){return c}});var r=s(85893),i=s(67294),n=s(88657);let a=e=>{let{width:t,height:s}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"pattern_rkDsm",patternUnits:"userSpaceOnUse",width:"9.5",height:"2.5",patternTransform:"rotate(41)",children:(0,r.jsx)("line",{x1:"0",y:"0",x2:"0",y2:"9.5",stroke:"#D9B9F3",strokeWidth:"1"})})}),(0,r.jsx)("rect",{width:t,height:s,fill:"url(#pattern_rkDsm)",opacity:"1"})]})},o={top:30,right:30,bottom:50,left:50},l=e=>{let{width:t,height:s}=e,l=(0,i.useRef)(null),c=t-o.right-o.left,h=s-o.top-o.bottom,d=(0,i.useMemo)(()=>n.BYU().domain([0,10]).range([0,c]),[t]),x=(0,i.useMemo)(()=>n.BYU().domain([0,10]).range([h,0]),[s]);return(0,i.useEffect)(()=>{let e=n.Ys(l.current);e.selectAll("*").remove();let t=n.LLu(d);e.append("g").attr("transform","translate(0,"+h+")").call(t);let s=n.y4O(x);e.append("g").call(s)},[d,x,h]),(0,r.jsx)("div",{children:(0,r.jsxs)("svg",{width:t,height:s,style:{display:"inline-block"},children:[(0,r.jsx)("g",{width:c,height:h,transform:"translate(".concat([o.left,o.top].join(","),")"),children:(0,r.jsx)(a,{width:c,height:h})}),(0,r.jsx)("g",{width:c,height:h,ref:l,transform:"translate(".concat([o.left,o.top].join(","),")")})]})})},c=e=>{let{width:t=700,height:s=400}=e;return(0,r.jsx)(l,{width:t,height:s})}},21202:function(e,t,s){"use strict";s.d(t,{C:function(){return d}});var r=s(85893);let i=[{x:2,y:4},{x:3,y:5},{x:1,y:2},{x:5,y:5},{x:7,y:8},{x:9,y:9},{x:6,y:8},{x:5,y:4},{x:7,y:5},{x:8,y:9},{x:6,y:9},{x:3,y:6},{x:2,y:1}];var n=s(88657),a=s(67294);let o=e=>{let{yScale:t,pixelsPerTick:s,width:i}=e,n=t.range(),o=(0,a.useMemo)(()=>{let e=n[0]-n[1];return t.ticks(Math.floor(e/s)).map(e=>({value:e,yOffset:t(e)}))},[t]);return(0,r.jsx)(r.Fragment,{children:o.map(e=>{let{value:t,yOffset:s}=e;return(0,r.jsxs)("g",{transform:"translate(0, ".concat(s,")"),shapeRendering:"crispEdges",children:[(0,r.jsx)("line",{x1:-10,x2:i+10,stroke:"#D2D7D3",strokeWidth:.5}),(0,r.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateX(-20px)",fill:"#D2D7D3"},children:t},t)]},t)})})},l=e=>{let{xScale:t,pixelsPerTick:s,height:i}=e,n=t.range(),o=(0,a.useMemo)(()=>{let e=n[1]-n[0];return t.ticks(Math.floor(e/s)).map(e=>({value:e,xOffset:t(e)}))},[t]);return(0,r.jsx)(r.Fragment,{children:o.map(e=>{let{value:t,xOffset:s}=e;return(0,r.jsxs)("g",{transform:"translate(".concat(s,", 0)"),shapeRendering:"crispEdges",children:[(0,r.jsx)("line",{y1:10,y2:-i-10,stroke:"#D2D7D3",strokeWidth:.5}),(0,r.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateY(20px)",fill:"#D2D7D3"},children:t},t)]},t)})})},c={top:60,right:60,bottom:60,left:60},h=e=>{let{width:t,height:s,data:i}=e,a=t-c.right-c.left,h=s-c.top-c.bottom,d=n.BYU().domain([0,10]).range([h,0]),x=n.BYU().domain([0,10]).range([0,a]),u=i.map((e,t)=>(0,r.jsx)("circle",{r:13,cx:x(e.y),cy:d(e.x),opacity:1,stroke:"#cb1dd1",fill:"#cb1dd1",fillOpacity:.2,strokeWidth:1},t));return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:s,children:(0,r.jsxs)("g",{width:a,height:h,transform:"translate(".concat([c.left,c.top].join(","),")"),children:[(0,r.jsx)(o,{yScale:d,pixelsPerTick:40,width:a}),(0,r.jsx)("g",{transform:"translate(0, ".concat(h,")"),children:(0,r.jsx)(l,{xScale:x,pixelsPerTick:40,height:h})}),u]})})})},d=e=>{let{width:t=700,height:s=400}=e;return(0,r.jsx)(h,{data:i,width:t,height:s})}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[2343,7754,8657,8190,3710,2594,9774,2888,179],function(){return e(e.s=39212)}),_N_E=e.O()}]);