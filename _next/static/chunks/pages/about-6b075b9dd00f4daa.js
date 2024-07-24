(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2521],{9212:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(570)}])},1122:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var s=r(5893),i=r(7294),n=r(9973),a=r(8107),l=r(615),o=r(8578);let c=e=>{let{VizComponent:t,vizName:r,height:c=400,maxWidth:h=800,caption:d}=e,[x,u]=(0,i.useState)(!1),p=(0,i.useRef)(null),m=(0,n.B)(p);return(0,s.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:x?(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,s.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,s.jsx)(o.X,{vizName:r})}),(0,s.jsx)("div",{className:"flex justify-center mt-2",children:(0,s.jsx)(a.z,{size:"sm",onClick:()=>u(!x),children:"Hide Sandbox"})})]}):(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,s.jsx)("div",{style:{height:c,width:"100%",maxWidth:h},ref:p,className:"pointer-events-auto",children:(0,s.jsx)(t,{height:c,width:m.width})})}),(0,s.jsx)(l.Y,{children:d}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(a.z,{size:"sm",onClick:()=>u(!x),children:"Show code"})})]})})}},8578:function(e,t,r){"use strict";r.d(t,{X:function(){return i}});var s=r(5893);r(7294);let i=e=>{let{vizName:t}=e;return(0,s.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},153:function(e,t,r){"use strict";r.d(t,{A:function(){return x}});var s=r(5893),i=r(9700),n=r(3476),a=r(7294),l=r(3084),o=r.n(l);function c(){let[e,t]=(0,a.useState)([]),[r,i]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,a.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,s=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),n=t.findIndex(e=>e===s);i(-1===n?0:n)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,s.jsx)("div",{className:o().tableOfContent,children:e.map((t,i)=>(0,s.jsx)("p",{className:r===i?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[i].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var h=r(7414),d=r(2594);let x=e=>{let{children:t,title:r,seoDescription:a}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.A,{title:r,seoDescription:a}),(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsx)(i.Z,{})}),(0,s.jsx)("div",{className:"wrapper",children:t}),(0,s.jsx)(d.Z,{}),(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsx)(n.Z,{})}),(0,s.jsx)(c,{})]})}},6438:function(e,t,r){"use strict";r.d(t,{J:function(){return a}});var s=r(5893),i=r(1664),n=r.n(i);let a=e=>{let{children:t,href:r,isFilled:i,size:a="md",isFaded:l}=e,o=r.startsWith("www")||r.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";i?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===a&&(c+="text-sm py-1 px-2 "),"md"===a&&(c+="text-md py-2 px-4 "),l&&(c+="opacity-60");let h=(0,s.jsx)("span",{className:c,children:t});return o?(0,s.jsx)("a",{href:r,target:"_blank",children:h}):(0,s.jsx)(n(),{href:r,passHref:!0,children:h})}},9965:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var s=r(5893);r(7294);var i=r(8843),n=r(4588),a=r(1859),l=r(6438),o=r(1832),c=r.n(o);let h=e=>{let{direction:t,text:r,children:i}=e;return(0,s.jsx)("span",{className:c().tooltip+" "+c()[t],id:r,children:i})};var d=r(5887);function x(e){let{title:t,description:r,chartType:o,showSectionLink:c=!1,showInspirationLink:x=!0,showD3GalleryLink:u=!0}=e,p=i.c.find(e=>e.id===o);return(0,s.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,s.jsxs)("div",{className:"flex justify-start items-center",children:[(0,s.jsx)("h1",{children:t}),o&&p&&(0,s.jsx)("div",{className:"w-20 ml-4",children:(0,s.jsx)(d.Z,{chartLogo:null==p?void 0:p.logo})})]}),(0,s.jsx)(a.r,{}),(0,s.jsx)("div",{className:"max-w-xxl  py-2",children:r}),o&&(0,s.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),p&&(0,s.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,s.jsx)(h,{text:"visit related section in the gallery",direction:"bottom",children:(0,s.jsx)(l.J,{href:(0,n.y)(p.reactURL),size:"sm",children:p.label+" section"})}),x&&(0,s.jsx)(h,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,s.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+p.id,size:"sm",children:"inspiration"})}),u&&(0,s.jsx)(h,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,s.jsx)(l.J,{href:p.d3URL,size:"sm",children:"d3 gallery"})}),(0,s.jsx)(h,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,s.jsx)(l.J,{href:p.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})}},8107:function(e,t,r){"use strict";r.d(t,{z:function(){return i}});var s=r(5893);let i=e=>{let{children:t,onClick:r,isFilled:i,size:n="md"}=e,a="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===n&&(a+="text-sm py-1 px-2"),"md"===n&&(a+="text-md py-2 px-4"),i?a+=" bg-reactGallery hover:bg-reactGallery text-white":a+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,s.jsx)("button",{className:a,onClick:r,children:t})}},615:function(e,t,r){"use strict";r.d(t,{Y:function(){return i}});var s=r(5893);let i=e=>{let{children:t}=e;return(0,s.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},9973:function(e,t,r){"use strict";r.d(t,{B:function(){return i}});var s=r(7294);let i=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[r,i]=(0,s.useState)(t),n=()=>{i(t())};return(0,s.useEffect)(()=>(window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)),[]),(0,s.useLayoutEffect)(()=>{n()},[e]),r}},570:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var s=r(5893);r(7294);var i=r(153),n=r(9965),a=r(9618),l=r(1122),o=r(1202),c=r(1664),h=r.n(c);let d=(0,s.jsx)("p",{className:"text-gray-400",children:(0,s.jsxs)("i",{children:["A love story – So ",(0,s.jsx)("del",{children:"simple"})," ",(0,s.jsx)("b",{children:"powerful"})," yet so"," ",(0,s.jsx)("b",{children:"complicated"})]})});function x(){return(0,s.jsxs)(i.A,{title:"About the gallery",seoDescription:"How to build an area chart with React and D3.js. A set of re-usable components",children:[(0,s.jsx)(n.Z,{title:"React + D3.js = ❤️",description:d}),(0,s.jsxs)("p",{children:["A few years ago I created the"," ",(0,s.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3 graph gallery"}),", a website showcasing hundreds of simple charts made with"," ",(0,s.jsx)("a",{href:"https://d3js.org/",children:"d3.js"}),". It worked well! Thousands of people use it daily to learn d3. \uD83C\uDF89"]}),(0,s.jsxs)("p",{children:["Since then, ",(0,s.jsx)("a",{href:"https://reactjs.org/",children:"React"})," became the"," ",(0,s.jsx)("a",{href:"https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190",children:"most popular"})," ","framework to build user interfaces. This rose a question:"," ",(0,s.jsx)("b",{children:"how to build a chart in react"}),"? That's a complicated question with many answers. Here are the 3 most common approaches."]}),(0,s.jsx)("h2",{children:"3 ways to draw a chart in react"}),(0,s.jsx)("h3",{children:"→ 1️⃣ Charting libraries"}),(0,s.jsxs)("p",{children:["There is a ",(0,s.jsx)("b",{children:"myriad"})," of charting libraries offering react components for every chart type."," ",(0,s.jsx)("a",{href:"https://www.highcharts.com/",children:"HighChart"}),","," ",(0,s.jsx)("a",{href:"https://github.com/recharts/recharts",children:"ReCharts"}),","," ",(0,s.jsx)("a",{href:"https://uber.github.io/react-vis/",children:"React-viz"}),","," ",(0,s.jsx)("a",{href:"https://github.com/observablehq/plot",children:"plot"}),","," ",(0,s.jsx)("a",{href:"https://airbnb.io/visx/",children:"visX"})," and so many more. Those libraries are awesome: you'll get a working chart in minutes using them."]}),(0,s.jsxs)("p",{children:["But ",(0,s.jsx)("b",{children:"simplicity comes with a cost"}),": the time you saved in the first place will be lost when you'll try to reach a high level of customization."]}),(0,s.jsxs)("p",{children:["If you want to build something ",(0,s.jsx)("b",{children:"unique"}),", you need to draw shapes one by one."]}),(0,s.jsxs)("h3",{children:["→ 2️⃣ D3 for rendering in a ",(0,s.jsx)("code",{children:"useEffect"})," hook"]}),(0,s.jsxs)("p",{children:["If you're familiar with d3.js already, it's possible to use any of its examples (from a ",(0,s.jsx)("a",{href:"https://bl.ocks.org/",children:"block"})," or the"," ",(0,s.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"gallery"}),") by using a"," ",(0,s.jsx)("code",{children:"useEffect"})," hook."]}),(0,s.jsxs)("p",{children:["Basically, you can create a ",(0,s.jsx)("code",{children:"div"})," in the DOM using react. You can then use the drawing methods of the"," ",(0,s.jsx)("a",{href:"https://github.com/d3/d3-selection",children:"d3-selection"})," module like ",(0,s.jsx)("code",{children:"append"})," or ",(0,s.jsx)("code",{children:"axisBottom"})," to target this"," ",(0,s.jsx)("code",{children:"div"}),", and add the content of the chart."]}),(0,s.jsx)("p",{children:"Let's apply this to draw axes:"}),(0,s.jsx)(l.$,{vizName:"AxisBasicD3",VizComponent:a.d,maxWidth:600,height:300,caption:"You can use all the d3 knowlege you have in a useEffect hook to build the graph in a react context."}),(0,s.jsxs)("p",{children:["This ",(0,s.jsx)("b",{children:"works"})," but comes with some ",(0,s.jsx)("b",{children:"caveats"}),". To put it in a nutshell you now have 2 tools trying to ",(0,s.jsx)("b",{children:"control the DOM"}),": react and d3. That's hard to maintain for large applications."]}),(0,s.jsx)("h3",{children:"→ 3️⃣ D3 for maths, React for rendering"}),(0,s.jsxs)("p",{children:["This gallery suggests using ",(0,s.jsx)("b",{children:"d3.js only for the math"})," utils it provides. And to add entries to the DOM using react, like for any other UI element."]}),(0,s.jsxs)("p",{children:["Let's say we want to build a ",(0,s.jsx)("a",{href:"scatter-plot",children:"scatterplot"}),". The"," ",(0,s.jsx)("code",{children:"scaleLinear"})," function of d3.js is used to build the scales. Now that we can easily know the position of a circle on the screen, we can just loop through all data items and render them as a"," ",(0,s.jsx)("code",{children:"circle"})," svg element."]}),(0,s.jsx)(l.$,{VizComponent:o.C,vizName:"ScatterplotBasic",maxWidth:500,height:500,caption:"Use d3.js to compute the scales. Use React to render the circles."}),(0,s.jsx)("h2",{children:"Learn concepts, Get templates"}),(0,s.jsxs)("p",{children:["This gallery is all about using the power of the ",(0,s.jsx)("b",{children:"d3"})," math utils and the ",(0,s.jsx)("b",{children:"react"})," rendering engine."]}),(0,s.jsxs)("p",{children:["The first goal is to ",(0,s.jsx)("b",{children:"teach the concepts"}),". Many examples are provided for each chart type. Each one targets a specific theme like color, axis, responsiveness, hover effect, or tooltips."]}),(0,s.jsxs)("p",{children:["The second goal is to ",(0,s.jsx)("b",{children:"provide templates"})," for each viz type. Building a viz from scratch is time-consuming, so better tweak an existing example."]}),(0,s.jsxs)("p",{children:["All graph examples come with an explanation and a ",(0,s.jsx)("b",{children:"code sandbox"})," ","allowing you to play with the code."]}),(0,s.jsxs)("p",{className:"mt-8 mb-12",children:["I built this website with ❤️. I hope it will help you create"," ",(0,s.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"stunning vizs"})," in a minimum amount of time. Reach me on"," ",(0,s.jsx)("a",{href:"https://twitter.com/R_Graph_Gallery",children:"Twitter"}),", contribute on"," ",(0,s.jsx)("a",{href:"https://github.com/holtzy/react-graph-gallery",children:"github"})," and subscribe to the ",(0,s.jsx)(h(),{href:"/subscribe",children:"newsletter"})," to know when new chart types are published!"]})]})}},9618:function(e,t,r){"use strict";r.d(t,{d:function(){return c}});var s=r(5893),i=r(7294),n=r(8657);let a=e=>{let{width:t,height:r}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("defs",{children:(0,s.jsx)("pattern",{id:"pattern_rkDsm",patternUnits:"userSpaceOnUse",width:"9.5",height:"2.5",patternTransform:"rotate(41)",children:(0,s.jsx)("line",{x1:"0",y:"0",x2:"0",y2:"9.5",stroke:"#D9B9F3",strokeWidth:"1"})})}),(0,s.jsx)("rect",{width:t,height:r,fill:"url(#pattern_rkDsm)",opacity:"1"})]})},l={top:30,right:30,bottom:50,left:50},o=e=>{let{width:t,height:r}=e,o=(0,i.useRef)(null),c=t-l.right-l.left,h=r-l.top-l.bottom,d=(0,i.useMemo)(()=>n.BYU().domain([0,10]).range([0,c]),[t]),x=(0,i.useMemo)(()=>n.BYU().domain([0,10]).range([h,0]),[r]);return(0,i.useEffect)(()=>{let e=n.Ys(o.current);e.selectAll("*").remove();let t=n.LLu(d);e.append("g").attr("transform","translate(0,"+h+")").call(t);let r=n.y4O(x);e.append("g").call(r)},[d,x,h]),(0,s.jsx)("div",{children:(0,s.jsxs)("svg",{width:t,height:r,style:{display:"inline-block"},children:[(0,s.jsx)("g",{width:c,height:h,transform:"translate(".concat([l.left,l.top].join(","),")"),children:(0,s.jsx)(a,{width:c,height:h})}),(0,s.jsx)("g",{width:c,height:h,ref:o,transform:"translate(".concat([l.left,l.top].join(","),")")})]})})},c=e=>{let{width:t=700,height:r=400}=e;return(0,s.jsx)(o,{width:t,height:r})}},1202:function(e,t,r){"use strict";r.d(t,{C:function(){return d}});var s=r(5893);let i=[{x:2,y:4},{x:3,y:5},{x:1,y:2},{x:5,y:5},{x:7,y:8},{x:9,y:9},{x:6,y:8},{x:5,y:4},{x:7,y:5},{x:8,y:9},{x:6,y:9},{x:3,y:6},{x:2,y:1}];var n=r(8657),a=r(7294);let l=e=>{let{yScale:t,pixelsPerTick:r,width:i}=e,n=t.range(),l=(0,a.useMemo)(()=>{let e=n[0]-n[1];return t.ticks(Math.floor(e/r)).map(e=>({value:e,yOffset:t(e)}))},[t]);return(0,s.jsx)(s.Fragment,{children:l.map(e=>{let{value:t,yOffset:r}=e;return(0,s.jsxs)("g",{transform:"translate(0, ".concat(r,")"),shapeRendering:"crispEdges",children:[(0,s.jsx)("line",{x1:-10,x2:i+10,stroke:"#D2D7D3",strokeWidth:.5}),(0,s.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateX(-20px)",fill:"#D2D7D3"},children:t},t)]},t)})})},o=e=>{let{xScale:t,pixelsPerTick:r,height:i}=e,n=t.range(),l=(0,a.useMemo)(()=>{let e=n[1]-n[0];return t.ticks(Math.floor(e/r)).map(e=>({value:e,xOffset:t(e)}))},[t]);return(0,s.jsx)(s.Fragment,{children:l.map(e=>{let{value:t,xOffset:r}=e;return(0,s.jsxs)("g",{transform:"translate(".concat(r,", 0)"),shapeRendering:"crispEdges",children:[(0,s.jsx)("line",{y1:10,y2:-i-10,stroke:"#D2D7D3",strokeWidth:.5}),(0,s.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateY(20px)",fill:"#D2D7D3"},children:t},t)]},t)})})},c={top:60,right:60,bottom:60,left:60},h=e=>{let{width:t,height:r,data:i}=e,a=t-c.right-c.left,h=r-c.top-c.bottom,d=n.BYU().domain([0,10]).range([h,0]),x=n.BYU().domain([0,10]).range([0,a]),u=i.map((e,t)=>(0,s.jsx)("circle",{r:13,cx:x(e.y),cy:d(e.x),opacity:1,stroke:"#cb1dd1",fill:"#cb1dd1",fillOpacity:.2,strokeWidth:1},t));return(0,s.jsx)("div",{children:(0,s.jsx)("svg",{width:t,height:r,children:(0,s.jsxs)("g",{width:a,height:h,transform:"translate(".concat([c.left,c.top].join(","),")"),children:[(0,s.jsx)(l,{yScale:d,pixelsPerTick:40,width:a}),(0,s.jsx)("g",{transform:"translate(0, ".concat(h,")"),children:(0,s.jsx)(o,{xScale:x,pixelsPerTick:40,height:h})}),u]})})})},d=e=>{let{width:t=700,height:r=400}=e;return(0,s.jsx)(h,{data:i,width:t,height:r})}},1832:function(e){e.exports={tooltip:"tooltip_tooltip__b_kg5",right:"tooltip_right__zvLDU",left:"tooltip_left__mQ0Xf",bottom:"tooltip_bottom__MVFNa",top:"tooltip_top__kPfp4"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[3996,8657,645,9774,2888,179],function(){return e(e.s=9212)}),_N_E=e.O()}]);