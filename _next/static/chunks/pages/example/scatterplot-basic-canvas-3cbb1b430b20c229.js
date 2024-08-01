(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9682],{1458:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/scatterplot-basic-canvas",function(){return r(6842)}])},1651:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5893);r(7294);var i=r(9871),s=r(8843),a=r(4588);let l={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function o(e){let{chartFamily:t}=e,r=s.c.filter(e=>e.family===t).map((e,t)=>{let r=(0,a.y)(e.reactURL);return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,n.jsx)(i.Z,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==l?void 0:l[t]}),(0,n.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},1122:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var n=r(5893),i=r(7294),s=r(9973),a=r(8107),l=r(615),o=r(8578);let c=e=>{let{VizComponent:t,vizName:r,height:c=400,maxWidth:d=800,caption:h}=e,[u,x]=(0,i.useState)(!1),f=(0,i.useRef)(null),p=(0,s.B)(f);return(0,n.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,n.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,n.jsx)(o.X,{vizName:r})}),(0,n.jsx)("div",{className:"flex justify-center mt-2",children:(0,n.jsx)(a.z,{size:"sm",onClick:()=>x(!u),children:"Hide Sandbox"})})]}):(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,n.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:f,className:"pointer-events-auto",children:(0,n.jsx)(t,{height:c,width:p.width})})}),(0,n.jsx)(l.Y,{children:h}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(a.z,{size:"sm",onClick:()=>x(!u),children:"Show code"})})]})})}},8578:function(e,t,r){"use strict";r.d(t,{X:function(){return i}});var n=r(5893);r(7294);let i=e=>{let{vizName:t}=e;return(0,n.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},153:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var n=r(5893),i=r(9700),s=r(3476),a=r(7294),l=r(3084),o=r.n(l);function c(){let[e,t]=(0,a.useState)([]),[r,i]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,a.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,n=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),s=t.findIndex(e=>e===n);i(-1===s?0:s)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,n.jsx)("div",{className:o().tableOfContent,children:e.map((t,i)=>(0,n.jsx)("p",{className:r===i?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[i].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=r(7414),h=r(2594);let u=e=>{let{children:t,title:r,seoDescription:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{title:r,seoDescription:a}),(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(i.Z,{})}),(0,n.jsx)("div",{className:"wrapper",children:t}),(0,n.jsx)(h.Z,{}),(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(s.Z,{})}),(0,n.jsx)(c,{})]})}},6438:function(e,t,r){"use strict";r.d(t,{J:function(){return a}});var n=r(5893),i=r(1664),s=r.n(i);let a=e=>{let{children:t,href:r,isFilled:i,size:a="md",isFaded:l}=e,o=r.startsWith("www")||r.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";i?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===a&&(c+="text-sm py-1 px-2 "),"md"===a&&(c+="text-md py-2 px-4 "),l&&(c+="opacity-60");let d=(0,n.jsx)("span",{className:c,children:t});return o?(0,n.jsx)("a",{href:r,target:"_blank",children:d}):(0,n.jsx)(s(),{href:r,passHref:!0,children:d})}},9871:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893);r(7294);var i=r(5887),s=r(8843),a=r(1664),l=r.n(a);let o=s.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:r,link:s,isAvailable:a,size:c}=e,h=o.includes(t),u=a?"opacity-100":"opacity-20";return(0,n.jsx)(l(),{href:a?s:"subscribe",className:"no-underline",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(a?"cursor-pointer":"cursor-not-allowed"),children:[(0,n.jsx)("div",{className:"absolute",children:(0,n.jsx)(i.Z,{chartLogo:t,size:c})}),h?(0,n.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,n.jsx)(d,{size:c})}):(0,n.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,n.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,n.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:r})]})})}let d=e=>{let{size:t}=e;return(0,n.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,n.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},9965:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(5893);r(7294);var i=r(8843),s=r(4588),a=r(1859),l=r(6438),o=r(1832),c=r.n(o);let d=e=>{let{direction:t,text:r,children:i}=e;return(0,n.jsx)("span",{className:c().tooltip+" "+c()[t],id:r,children:i})};var h=r(5887);function u(e){let{title:t,description:r,chartType:o,showSectionLink:c=!1,showInspirationLink:u=!0,showD3GalleryLink:x=!0}=e,f=i.c.find(e=>e.id===o);return(0,n.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,n.jsxs)("div",{className:"flex justify-start items-center",children:[(0,n.jsx)("h1",{children:t}),o&&f&&(0,n.jsx)("div",{className:"w-20 ml-4",children:(0,n.jsx)(h.Z,{chartLogo:null==f?void 0:f.logo})})]}),(0,n.jsx)(a.r,{}),(0,n.jsx)("div",{className:"max-w-xxl  py-2",children:r}),o&&(0,n.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),f&&(0,n.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,n.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,n.jsx)(l.J,{href:(0,s.y)(f.reactURL),size:"sm",children:f.label+" section"})}),u&&(0,n.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,n.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+f.id,size:"sm",children:"inspiration"})}),x&&(0,n.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,n.jsx)(l.J,{href:f.d3URL,size:"sm",children:"d3 gallery"})}),(0,n.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,n.jsx)(l.J,{href:f.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})}},8107:function(e,t,r){"use strict";r.d(t,{z:function(){return i}});var n=r(5893);let i=e=>{let{children:t,onClick:r,isFilled:i,size:s="md"}=e,a="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===s&&(a+="text-sm py-1 px-2"),"md"===s&&(a+="text-md py-2 px-4"),i?a+=" bg-reactGallery hover:bg-reactGallery text-white":a+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,n.jsx)("button",{className:a,onClick:r,children:t})}},615:function(e,t,r){"use strict";r.d(t,{Y:function(){return i}});var n=r(5893);let i=e=>{let{children:t}=e;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,r){"use strict";r.d(t,{d:function(){return d}});var n=r(5893),i=r(6715),s=r(5660),a=r.n(s),l=r(7294),o=r(5993),c=r.n(o);let d=e=>{let{code:t}=e,[r,s]=(0,l.useState)(!1),o=(0,l.useRef)(null);(0,l.useEffect)(()=>{o.current&&a().highlightElement(o.current)},[o,t]);let d=(0,n.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),s(!0)},className:c().codeChunckCopyButton,children:r?"Copied":(0,n.jsx)(i.Z,{size:14,style:{padding:0}})});return(0,n.jsxs)("div",{className:"mb-6 relative",children:[(0,n.jsx)("pre",{className:"rounded-md line-numbers",children:(0,n.jsx)("code",{ref:o,className:"language-javascript",children:t})}),(0,n.jsx)("div",{className:c().copyButtonContainer,children:d})]})}},9973:function(e,t,r){"use strict";r.d(t,{B:function(){return i}});var n=r(7294);let i=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[r,i]=(0,n.useState)(t),s=()=>{i(t())};return(0,n.useEffect)(()=>(window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)),[]),(0,n.useLayoutEffect)(()=>{s()},[e]),r}},6842:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(5893),i=r(7294),s=r(153),a=r(9965),l=r(1651),o=r(3572),c=r(1122),d=r(1664),h=r.n(d),u=r(6438);let x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4,t=[];for(let r=0;r<e;r++){let e=10*Math.random(),r=5+4*Math.sin(e)+5*(Math.random()-.1);t.push({x:e,y:r})}return t}();var f=r(8657);let p=e=>{let{yScale:t,pixelsPerTick:r,width:s}=e,a=t.range(),l=(0,i.useMemo)(()=>{let e=a[0]-a[1];return t.ticks(Math.floor(e/r)).map(e=>({value:e,yOffset:t(e)}))},[t]);return(0,n.jsx)(n.Fragment,{children:l.map(e=>{let{value:t,yOffset:r}=e;return(0,n.jsxs)("g",{transform:"translate(0, ".concat(r,")"),shapeRendering:"crispEdges",children:[(0,n.jsx)("line",{x1:-10,x2:s+10,stroke:"#D2D7D3",strokeWidth:.5}),(0,n.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateX(-20px)",fill:"#D2D7D3"},children:t},t)]},t)})})},m=e=>{let{xScale:t,pixelsPerTick:r,height:s}=e,a=t.range(),l=(0,i.useMemo)(()=>{let e=a[1]-a[0];return t.ticks(Math.floor(e/r)).map(e=>({value:e,xOffset:t(e)}))},[t]);return(0,n.jsx)(n.Fragment,{children:l.map(e=>{let{value:t,xOffset:r}=e;return(0,n.jsxs)("g",{transform:"translate(".concat(r,", 0)"),shapeRendering:"crispEdges",children:[(0,n.jsx)("line",{y1:10,y2:-s-10,stroke:"#D2D7D3",strokeWidth:.5}),(0,n.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateY(20px)",fill:"#D2D7D3"},children:t},t)]},t)})})},j={top:60,right:60,bottom:60,left:60},v=e=>{let{width:t,height:r,data:s}=e,a=t-j.right-j.left,l=r-j.top-j.bottom,o=f.BYU().domain([0,16]).range([l,0]),c=f.BYU().domain([0,10]).range([0,a]),d=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=d.current;if(!e)return;let n=e.getContext("2d");n.clearRect(0,0,t,r),s.forEach(e=>{n.beginPath(),n.arc(c(e.x),o(e.y),1,0,2*Math.PI),n.globalAlpha=.5,n.fillStyle="#cb1dd1",n.fill()})},[s,c,o,t,r]),(0,n.jsx)("div",{style:{position:"relative"},children:(0,n.jsxs)("div",{style:{transform:"translate(".concat(j.left,"px, ").concat(j.top,"px)"),width:a,height:l},children:[(0,n.jsxs)("svg",{width:a,height:l,style:{position:"absolute",top:0,left:0,overflow:"visible"},children:[(0,n.jsx)(p,{yScale:o,pixelsPerTick:40,width:a}),(0,n.jsx)("g",{transform:"translate(0, ".concat(l,")"),children:(0,n.jsx)(m,{xScale:c,pixelsPerTick:40,height:l})})]}),(0,n.jsx)("canvas",{style:{position:"relative"},ref:d,width:a,height:l})]})})},g=e=>{let{width:t=700,height:r=400}=e;return(0,n.jsx)(v,{data:x,width:t,height:r})},y=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["This tutorial is a variation around the general"," ",(0,n.jsx)(h(),{href:"/scatter-plot",children:"introduction to scatterplot with react"})," ","and d3.js. You should probably understand the concepts described there before reading here."]}),(0,n.jsxs)("p",{children:["Rendering a scatterplot using SVG can ",(0,n.jsx)("b",{children:"arm the performance"})," of your webpage if the number of data points is high. A common workaround is to draw the circles in ",(0,n.jsx)("b",{children:"canvas"})," instead."]}),(0,n.jsxs)("p",{children:["This post explains how to ",(0,n.jsx)("b",{children:"combine"})," SVG for the axes and canvas for the scatterplot markers in React."]})]});function b(){return(0,n.jsxs)(s.A,{title:"Scatterplot with Canvas",seoDescription:"Learn how to build a scatterplot rendered in canvas with React for better performance. Code and explanation provided.",children:[(0,n.jsx)(a.Z,{title:"Scatterplot with Canvas",description:y,chartType:"scatter"}),(0,n.jsx)("h2",{id:"Why Canvas",children:"Why using canvas? \uD83E\uDD14"}),(0,n.jsxs)("p",{children:["A scatterplot is a chart type that is commonly used to display a"," ",(0,n.jsx)("b",{children:"high amount of data points"}),"."]}),(0,n.jsxs)("p",{children:["When you draw it in SVG, it means adding a bunch of ",(0,n.jsx)("code",{children:"circle"})," ","elements. As a result, your ",(0,n.jsx)("b",{children:"DOM will quickly become really heavy"}),". It can result in ",(0,n.jsx)("b",{children:"poor performances"}),". If you want to add some animation on top of it, you are pretty sure to freeze the page."]}),(0,n.jsxs)("p",{children:["When using canvas, you add ",(0,n.jsx)("b",{children:"only 1 node in your DOM"}),", and benefit the very high speed of it. It is game changer for any viz type that requires good performances."]}),(0,n.jsx)("h2",{id:"Implementation",children:"Scatterplot canvas implementation"}),(0,n.jsx)("p",{children:"The trick here is to use 2 layers of drawing:"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["The first layer is for the ",(0,n.jsx)("b",{children:"axes"}),". It is an SVG element that will add the X and Y axes using some usual ",(0,n.jsx)("code",{children:"AxisLeft"})," and"," ",(0,n.jsx)("code",{children:"AxisBottom"})," components."]}),(0,n.jsxs)("li",{children:["The second layer is for the ",(0,n.jsx)("b",{children:"markers"}),", it is the"," ",(0,n.jsx)("code",{children:"canvas"})," element. It has a ",(0,n.jsx)("code",{children:"ref"}),". We can then call a function in a ",(0,n.jsx)("code",{children:"useEffect"})," hook to draw inside this canvas element."]})]}),(0,n.jsx)("p",{children:"This is how the useEffect hook looks like, drawing our circles:"}),(0,n.jsx)(o.d,{code:w}),(0,n.jsx)("p",{children:"Here is a complete implementation of the scatterplot using this technique with 10000 data points:"}),(0,n.jsx)(c.$,{vizName:"ScatterplotCanvasBasicDemo",VizComponent:g,maxWidth:500,height:500,caption:"A scatterplot made with React, using SVG for the axes and Canvas for the markers to improve performance."}),(0,n.jsxs)("p",{children:[(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]}),(0,n.jsxs)("p",{children:["Canvas is an important topic in data visualization for the web. I plan to write complete articles on the topic. You can know when it's ready by"," ",(0,n.jsx)(h(),{href:"/subscribe",children:"subscribing"})," to the project."]}),(0,n.jsx)(u.J,{size:"sm",isFilled:!0,href:"/subscribe",children:"Tell me when the canvas post is ready!"}),(0,n.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,n.jsx)(l.Z,{chartFamily:"flow"}),(0,n.jsx)("div",{className:"mt-20"})]})}let w="\nuseEffect(() => {\n  const canvas = canvasRef.current;\n\n  if (!canvas) {\n    return;\n  }\n  const ctx = canvas.getContext('2d');\n\n  // Clear the canvas\n  ctx.clearRect(0, 0, width, height);\n\n  // Draw each data point as a circle\n  data.forEach((point) => {\n    ctx.beginPath();\n    ctx.arc(xScale(point.x), yScale(point.y), CIRCLE_RADIUS, 0, 2 * Math.PI);\n    ctx.globalAlpha = 0.5;\n    ctx.fillStyle = '#cb1dd1';\n    ctx.fill();\n  });\n}, [data, xScale, yScale, width, height]);\n".trim()},5993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},1832:function(e){e.exports={tooltip:"tooltip_tooltip__b_kg5",right:"tooltip_right__zvLDU",left:"tooltip_left__mQ0Xf",bottom:"tooltip_bottom__MVFNa",top:"tooltip_top__kPfp4"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[3996,8657,3213,645,9774,2888,179],function(){return e(e.s=1458)}),_N_E=e.O()}]);