(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6229],{927:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/scatterplot-tooltip-with-voronoi-for-closest-point-detection",function(){return r(3659)}])},1651:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var i=r(5893);r(7294);var s=r(9871),n=r(8843),o=r(4588);let l={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function a(e){let{chartFamily:t}=e,r=n.c.filter(e=>e.family===t).map((e,t)=>{let r=(0,o.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(s.Z,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==l?void 0:l[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},1122:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var i=r(5893),s=r(7294),n=r(9973),o=r(8107),l=r(615),a=r(8578);let c=e=>{let{VizComponent:t,vizName:r,height:c=400,maxWidth:d=800,caption:h}=e,[u,x]=(0,s.useState)(!1),p=(0,s.useRef)(null),m=(0,n.B)(p);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(a.X,{vizName:r})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(o.z,{size:"sm",onClick:()=>x(!u),children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:p,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:c,width:m.width})})}),(0,i.jsx)(l.Y,{children:h}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(o.z,{size:"sm",onClick:()=>x(!u),children:"Show code"})})]})})}},8578:function(e,t,r){"use strict";r.d(t,{X:function(){return s}});var i=r(5893);r(7294);let s=e=>{let{vizName:t}=e;return(0,i.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},153:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var i=r(5893),s=r(9700),n=r(3476),o=r(7294),l=r(3084),a=r.n(l);function c(){let[e,t]=(0,o.useState)([]),[r,s]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,o.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,i=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),n=t.findIndex(e=>e===i);s(-1===n?0:n)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,i.jsx)("div",{className:a().tableOfContent,children:e.map((t,s)=>(0,i.jsx)("p",{className:r===s?"".concat(a().tocItem," ").concat(a().tocItemActive):a().tocItem,onClick:t=>{t.preventDefault(),e[s].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=r(7414),h=r(2594);let u=e=>{let{children:t,title:r,seoDescription:o}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:r,seoDescription:o}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(s.Z,{})}),(0,i.jsx)("div",{className:"wrapper",children:t}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(n.Z,{})}),(0,i.jsx)(c,{})]})}},6438:function(e,t,r){"use strict";r.d(t,{J:function(){return o}});var i=r(5893),s=r(1664),n=r.n(s);let o=e=>{let{children:t,href:r,isFilled:s,size:o="md",isFaded:l}=e,a=r.startsWith("www")||r.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";s?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===o&&(c+="text-sm py-1 px-2 "),"md"===o&&(c+="text-md py-2 px-4 "),l&&(c+="opacity-60");let d=(0,i.jsx)("span",{className:c,children:t});return a?(0,i.jsx)("a",{href:r,target:"_blank",children:d}):(0,i.jsx)(n(),{href:r,passHref:!0,children:d})}},9871:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var i=r(5893);r(7294);var s=r(5887),n=r(8843),o=r(1664),l=r.n(o);let a=n.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:r,link:n,isAvailable:o,size:c}=e,h=a.includes(t),u=o?"opacity-100":"opacity-20";return(0,i.jsx)(l(),{href:o?n:"subscribe",className:"no-underline",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(o?"cursor-pointer":"cursor-not-allowed"),children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(s.Z,{chartLogo:t,size:c})}),h?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(d,{size:c})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:r})]})})}let d=e=>{let{size:t}=e;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},9965:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var i=r(5893);r(7294);var s=r(8843),n=r(4588),o=r(1859),l=r(6438),a=r(1832),c=r.n(a);let d=e=>{let{direction:t,text:r,children:s}=e;return(0,i.jsx)("span",{className:c().tooltip+" "+c()[t],id:r,children:s})};var h=r(5887);function u(e){let{title:t,description:r,chartType:a,showSectionLink:c=!1,showInspirationLink:u=!0,showD3GalleryLink:x=!0}=e,p=s.c.find(e=>e.id===a);return(0,i.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,i.jsxs)("div",{className:"flex justify-start items-center",children:[(0,i.jsx)("h1",{children:t}),a&&p&&(0,i.jsx)("div",{className:"w-20 ml-4",children:(0,i.jsx)(h.Z,{chartLogo:null==p?void 0:p.logo})})]}),(0,i.jsx)(o.r,{}),(0,i.jsx)("div",{className:"max-w-xxl  py-2",children:r}),a&&(0,i.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),p&&(0,i.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,i.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,i.jsx)(l.J,{href:(0,n.y)(p.reactURL),size:"sm",children:p.label+" section"})}),u&&(0,i.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,i.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+p.id,size:"sm",children:"inspiration"})}),x&&(0,i.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,i.jsx)(l.J,{href:p.d3URL,size:"sm",children:"d3 gallery"})}),(0,i.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,i.jsx)(l.J,{href:p.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})}},8107:function(e,t,r){"use strict";r.d(t,{z:function(){return s}});var i=r(5893);let s=e=>{let{children:t,onClick:r,isFilled:s,size:n="md"}=e,o="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===n&&(o+="text-sm py-1 px-2"),"md"===n&&(o+="text-md py-2 px-4"),s?o+=" bg-reactGallery hover:bg-reactGallery text-white":o+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,i.jsx)("button",{className:o,onClick:r,children:t})}},615:function(e,t,r){"use strict";r.d(t,{Y:function(){return s}});var i=r(5893);let s=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,r){"use strict";r.d(t,{d:function(){return d}});var i=r(5893),s=r(6715),n=r(5660),o=r.n(n),l=r(7294),a=r(5993),c=r.n(a);let d=e=>{let{code:t}=e,[r,n]=(0,l.useState)(!1),a=(0,l.useRef)(null);(0,l.useEffect)(()=>{a.current&&o().highlightElement(a.current)},[a,t]);let d=(0,i.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),n(!0)},className:c().codeChunckCopyButton,children:r?"Copied":(0,i.jsx)(s.Z,{size:14,style:{padding:0}})});return(0,i.jsxs)("div",{className:"mb-6 relative",children:[(0,i.jsx)("pre",{className:"rounded-md line-numbers",children:(0,i.jsx)("code",{ref:a,className:"language-javascript",children:t})}),(0,i.jsx)("div",{className:c().copyButtonContainer,children:d})]})}},9973:function(e,t,r){"use strict";r.d(t,{B:function(){return s}});var i=r(7294);let s=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[r,s]=(0,i.useState)(t),n=()=>{s(t())};return(0,i.useEffect)(()=>(window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)),[]),(0,i.useLayoutEffect)(()=>{n()},[e]),r}},3659:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var i=r(5893),s=r(7294),n=r(153),o=r(9965),l=r(1651),a=r(3572),c=r(1122),d=r(1664),h=r.n(d);let u=[{x:10,y:10},{x:4,y:4},{x:35,y:90},{x:67,y:34},{x:89,y:65},{x:23,y:10},{x:12,y:32},{x:45,y:78},{x:67,y:98},{x:23,y:23}];var x=r(8657);let p=e=>{let{yScale:t,pixelsPerTick:r,width:n}=e,o=t.range(),l=(0,s.useMemo)(()=>{let e=o[0]-o[1];return t.ticks(Math.floor(e/r)).map(e=>({value:e,yOffset:t(e)}))},[t]);return(0,i.jsx)(i.Fragment,{children:l.map(e=>{let{value:t,yOffset:r}=e;return(0,i.jsxs)("g",{transform:"translate(0, ".concat(r,")"),shapeRendering:"crispEdges",children:[(0,i.jsx)("line",{x1:-10,x2:n+10,stroke:"#D2D7D3",strokeWidth:.5}),(0,i.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",dominantBaseline:"central",transform:"translateX(-20px)",fill:"grey"},children:t},t)]},t)})})},m=e=>{let{xScale:t,pixelsPerTick:r,height:n}=e,o=t.range(),l=(0,s.useMemo)(()=>{let e=o[1]-o[0];return t.ticks(Math.floor(e/r)).map(e=>({value:e,xOffset:t(e)}))},[t]);return(0,i.jsx)(i.Fragment,{children:l.map(e=>{let{value:t,xOffset:r}=e;return(0,i.jsxs)("g",{transform:"translate(".concat(r,", 0)"),shapeRendering:"crispEdges",children:[(0,i.jsx)("line",{y1:10,y2:-n-10,stroke:"#D2D7D3",strokeWidth:.5}),(0,i.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateY(20px)",fill:"grey"},children:t},t)]},t)})})},f={top:60,right:60,bottom:60,left:60},j=e=>{let{width:t,height:r,data:n}=e,o=t-f.right-f.left,l=r-f.top-f.bottom,a=x.BYU().domain([0,100]).range([0,o]),c=x.BYU().domain([0,100]).range([l,0]),d=(0,s.useMemo)(()=>{let e=n.map(e=>[a(e.x),c(e.y)]);return x.oc6.from(e)},[n]),[h,u]=(0,s.useState)(null),j=(0,s.useMemo)(()=>d.voronoi([0,0,o,l]),[d,o,l]),g=n.map((e,t)=>{let r=j.renderCell(t);return(0,i.jsx)("path",{d:r,opacity:.3,stroke:"lightgrey",fill:"transparent",onMouseOver:()=>{u(t)}},t)}),v=n.map((e,t)=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("circle",{cx:a(e.x),cy:c(e.y),r:6},t),h===t&&(0,i.jsx)("circle",{cx:a(e.x),cy:c(e.y),r:15,fill:"transparent",stroke:"red",strokeWidth:3},t)]}));return(0,i.jsx)("svg",{width:t,height:r,children:(0,i.jsxs)("g",{width:o,height:l,transform:"translate(".concat([f.left,f.top].join(","),")"),children:[(0,i.jsx)(p,{yScale:c,pixelsPerTick:40,width:o}),(0,i.jsx)("g",{transform:"translate(0, ".concat(l,")"),children:(0,i.jsx)(m,{xScale:a,pixelsPerTick:40,height:l})}),v,g]})})},g=e=>{let{width:t=700,height:r=400}=e;return 0===t||0===r?null:(0,i.jsx)("div",{children:(0,i.jsx)(j,{width:t,height:r,data:u})})};var v=r(6438);let y=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["This tutorial is a variation around the general"," ",(0,i.jsx)(h(),{href:"scatter-plot",children:"introduction to scatterplot with react"})," ","and d3.js. You should probably understand the concepts described there before reading here."]}),(0,i.jsxs)("p",{children:["This example explains how to use an invisible"," ",(0,i.jsx)(h(),{href:"voronoi",children:"Voronoi diagram"})," in the background to detect the mouse ",(0,i.jsx)("b",{children:"closest point"})," of the scatterplot."]}),(0,i.jsx)("p",{children:"A code sandbox is provided for the final result, but explanations target what's different compared to an usual scatter plot."})]});function w(){return(0,i.jsxs)(n.A,{title:"Scatterplot tooltip with React and D3: use Voronoi to detect closest point.",seoDescription:"This post explains how to detect the closest point on a react histogram using Voronoi. Useful to show a tooltip with great performance.",children:[(0,i.jsx)(o.Z,{title:"Scatterplot tooltip: use Voronoi for closest point detection",description:y,chartType:"scatter",showSectionLink:!0}),(0,i.jsx)("h2",{id:"plot",children:"Plot and code"}),(0,i.jsx)("p",{children:"If you are in a hurry, this is what we're trying to achieve here.\uD83D\uDE47‍♂️"}),(0,i.jsxs)("p",{children:["This is a ",(0,i.jsx)("b",{children:"scatterplot with voronoi detection"}),". When you enter the chart area with your mouse, the ",(0,i.jsx)("b",{children:"closest point"})," is found using a Delaunay triangulation. The corresponding circle is highlighted on the chart."]}),(0,i.jsx)("p",{children:"Same concept could easily be used to add a tooltip with great performance."}),(0,i.jsx)(c.$,{VizComponent:g,vizName:"ScatterplotVoronoiTooltip",maxWidth:600,height:600,caption:"A scatterplot with tooltip. The closest point is detected using Voronoi to trigger the tooltip apparition."}),(0,i.jsx)("h2",{id:"data",children:"The Data"}),(0,i.jsxs)("p",{children:["The dataset used here is the same as for an usual"," ",(0,i.jsx)(h(),{href:"scatter-plot",children:"scatterplot"}),"."]}),(0,i.jsxs)("p",{children:["It is an ",(0,i.jsx)("b",{children:"array"})," of objects where each object is a data point. The object can have many properties, but at least a ",(0,i.jsx)("code",{children:"x"})," and a"," ",(0,i.jsx)("code",{children:"y"})," prop are needed to provide the"," ",(0,i.jsx)("code",{children:"2d coordinates"}),"."]}),(0,i.jsx)("p",{children:"Here is a minimal example of the data structure:"}),(0,i.jsx)(a.d,{code:b}),(0,i.jsx)("h2",{id:"buckets",children:"Building the Voronoi diagram"}),(0,i.jsxs)("p",{children:["The shapes drawn in the background are called a"," ",(0,i.jsx)(h(),{href:"voronoi",children:"Voronoi diagram"}),"."]}),(0,i.jsxs)("p",{children:["A voronoi diagram is a is a partition of a plane into regions called"," ",(0,i.jsx)("b",{children:"voronoi cells"}),". A voronoi cell consists of every point in the plane whose distance to its linked data point is less than or equal to its distance to any other data point."]}),(0,i.jsx)("p",{children:"This is very handy to detect the mouse closest point on a scatterplot! \uD83D\uDD25"}),(0,i.jsxs)("p",{children:["The react graph gallery has a"," ",(0,i.jsx)(h(),{href:"voronoi",children:"dedicated section"})," on the topic. Once you understood how Voronoi works with d3, it is just a matter of adding axes to get a scatterplot with point detection."]}),(0,i.jsx)(v.J,{href:"voronoi",size:"sm",isFilled:!0,children:"Voronoi section"}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,i.jsx)(l.Z,{chartFamily:"distribution"}),(0,i.jsx)("div",{className:"mt-20"})]})}let b="\nconst data = [\n  { x: 10, y: 10 },\n  { x: 4, y: 4 },\n  ...\n];\n".trim()},5993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},1832:function(e){e.exports={tooltip:"tooltip_tooltip__b_kg5",right:"tooltip_right__zvLDU",left:"tooltip_left__mQ0Xf",bottom:"tooltip_bottom__MVFNa",top:"tooltip_top__kPfp4"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[3996,8657,3213,645,9774,2888,179],function(){return e(e.s=927)}),_N_E=e.O()}]);