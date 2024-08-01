(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5444],{8283:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/histogram-with-several-groups",function(){return r(4693)}])},1651:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5893);r(7294);var s=r(9871),i=r(8843),a=r(4588);let l={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function o(e){let{chartFamily:t}=e,r=i.c.filter(e=>e.family===t).map((e,t)=>{let r=(0,a.y)(e.reactURL);return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,n.jsx)(s.Z,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==l?void 0:l[t]}),(0,n.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},1122:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var n=r(5893),s=r(7294),i=r(9973),a=r(8107),l=r(615),o=r(8578);let c=e=>{let{VizComponent:t,vizName:r,height:c=400,maxWidth:d=800,caption:h}=e,[u,m]=(0,s.useState)(!1),p=(0,s.useRef)(null),x=(0,i.B)(p);return(0,n.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,n.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,n.jsx)(o.X,{vizName:r})}),(0,n.jsx)("div",{className:"flex justify-center mt-2",children:(0,n.jsx)(a.z,{size:"sm",onClick:()=>m(!u),children:"Hide Sandbox"})})]}):(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,n.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:p,className:"pointer-events-auto",children:(0,n.jsx)(t,{height:c,width:x.width})})}),(0,n.jsx)(l.Y,{children:h}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(a.z,{size:"sm",onClick:()=>m(!u),children:"Show code"})})]})})}},8578:function(e,t,r){"use strict";r.d(t,{X:function(){return s}});var n=r(5893);r(7294);let s=e=>{let{vizName:t}=e;return(0,n.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},153:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var n=r(5893),s=r(9700),i=r(3476),a=r(7294),l=r(3084),o=r.n(l);function c(){let[e,t]=(0,a.useState)([]),[r,s]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,a.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,n=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),i=t.findIndex(e=>e===n);s(-1===i?0:i)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,n.jsx)("div",{className:o().tableOfContent,children:e.map((t,s)=>(0,n.jsx)("p",{className:r===s?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[s].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=r(7414),h=r(2594);let u=e=>{let{children:t,title:r,seoDescription:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{title:r,seoDescription:a}),(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(s.Z,{})}),(0,n.jsx)("div",{className:"wrapper",children:t}),(0,n.jsx)(h.Z,{}),(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(i.Z,{})}),(0,n.jsx)(c,{})]})}},6438:function(e,t,r){"use strict";r.d(t,{J:function(){return a}});var n=r(5893),s=r(1664),i=r.n(s);let a=e=>{let{children:t,href:r,isFilled:s,size:a="md",isFaded:l}=e,o=r.startsWith("www")||r.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";s?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===a&&(c+="text-sm py-1 px-2 "),"md"===a&&(c+="text-md py-2 px-4 "),l&&(c+="opacity-60");let d=(0,n.jsx)("span",{className:c,children:t});return o?(0,n.jsx)("a",{href:r,target:"_blank",children:d}):(0,n.jsx)(i(),{href:r,passHref:!0,children:d})}},9871:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893);r(7294);var s=r(5887),i=r(8843),a=r(1664),l=r.n(a);let o=i.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:r,link:i,isAvailable:a,size:c}=e,h=o.includes(t),u=a?"opacity-100":"opacity-20";return(0,n.jsx)(l(),{href:a?i:"subscribe",className:"no-underline",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(a?"cursor-pointer":"cursor-not-allowed"),children:[(0,n.jsx)("div",{className:"absolute",children:(0,n.jsx)(s.Z,{chartLogo:t,size:c})}),h?(0,n.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,n.jsx)(d,{size:c})}):(0,n.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,n.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,n.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:r})]})})}let d=e=>{let{size:t}=e;return(0,n.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,n.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},9965:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(5893);r(7294);var s=r(8843),i=r(4588),a=r(1859),l=r(6438),o=r(1832),c=r.n(o);let d=e=>{let{direction:t,text:r,children:s}=e;return(0,n.jsx)("span",{className:c().tooltip+" "+c()[t],id:r,children:s})};var h=r(5887);function u(e){let{title:t,description:r,chartType:o,showSectionLink:c=!1,showInspirationLink:u=!0,showD3GalleryLink:m=!0}=e,p=s.c.find(e=>e.id===o);return(0,n.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,n.jsxs)("div",{className:"flex justify-start items-center",children:[(0,n.jsx)("h1",{children:t}),o&&p&&(0,n.jsx)("div",{className:"w-20 ml-4",children:(0,n.jsx)(h.Z,{chartLogo:null==p?void 0:p.logo})})]}),(0,n.jsx)(a.r,{}),(0,n.jsx)("div",{className:"max-w-xxl  py-2",children:r}),o&&(0,n.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),p&&(0,n.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,n.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,n.jsx)(l.J,{href:(0,i.y)(p.reactURL),size:"sm",children:p.label+" section"})}),u&&(0,n.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,n.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+p.id,size:"sm",children:"inspiration"})}),m&&(0,n.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,n.jsx)(l.J,{href:p.d3URL,size:"sm",children:"d3 gallery"})}),(0,n.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,n.jsx)(l.J,{href:p.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})}},8107:function(e,t,r){"use strict";r.d(t,{z:function(){return s}});var n=r(5893);let s=e=>{let{children:t,onClick:r,isFilled:s,size:i="md"}=e,a="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===i&&(a+="text-sm py-1 px-2"),"md"===i&&(a+="text-md py-2 px-4"),s?a+=" bg-reactGallery hover:bg-reactGallery text-white":a+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,n.jsx)("button",{className:a,onClick:r,children:t})}},615:function(e,t,r){"use strict";r.d(t,{Y:function(){return s}});var n=r(5893);let s=e=>{let{children:t}=e;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,r){"use strict";r.d(t,{d:function(){return d}});var n=r(5893),s=r(6715),i=r(5660),a=r.n(i),l=r(7294),o=r(5993),c=r.n(o);let d=e=>{let{code:t}=e,[r,i]=(0,l.useState)(!1),o=(0,l.useRef)(null);(0,l.useEffect)(()=>{o.current&&a().highlightElement(o.current)},[o,t]);let d=(0,n.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),i(!0)},className:c().codeChunckCopyButton,children:r?"Copied":(0,n.jsx)(s.Z,{size:14,style:{padding:0}})});return(0,n.jsxs)("div",{className:"mb-6 relative",children:[(0,n.jsx)("pre",{className:"rounded-md line-numbers",children:(0,n.jsx)("code",{ref:o,className:"language-javascript",children:t})}),(0,n.jsx)("div",{className:c().copyButtonContainer,children:d})]})}},9973:function(e,t,r){"use strict";r.d(t,{B:function(){return s}});var n=r(7294);let s=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[r,s]=(0,n.useState)(t),i=()=>{s(t())};return(0,n.useEffect)(()=>(window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)),[]),(0,n.useLayoutEffect)(()=>{i()},[e]),r}},4693:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(5893),s=r(7294),i=r(153),a=r(9965),l=r(1651),o=r(3572),c=r(1122);let d=[{name:"A",values:[0,0,2,2,2,0,0,1,1,1,1,1,1,1,1,1,2,3,3,1,2,2,4,3,5,6,4,3,7,2]},{name:"B",values:[19,20,19,18,18,18,12,13,13,15,18,18,13,20,20,19,19,19,19,19,17,20,16,16,16]},{name:"C",values:[7,8,8,9,9,9,10,10,10,10,11,11,12,13,10,10,10,10,10,10,10]}];var h=r(8657);let u={top:30,right:30,bottom:40,left:50},m=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"],p=e=>{let{width:t,height:r,data:i}=e,a=(0,s.useRef)(null),l=t-u.right-u.left,o=r-u.top-u.bottom,c=i.map(e=>e.name),d=h.PKp().domain(c).range(m),p=(0,s.useMemo)(()=>{let e=i.map(e=>Math.max(...e.values)),t=Math.max(...e);return h.BYU().domain([0,t]).range([10,l]).nice()},[i,t]),x=(0,s.useMemo)(()=>h.Ly_().value(e=>e).domain(p.domain()).thresholds(p.ticks(20)),[p]),f=(0,s.useMemo)(()=>i.map(e=>({name:e.name,buckets:x(e.values)})),[i]),g=(0,s.useMemo)(()=>{let e=Math.max(...f.map(e=>Math.max(...e.buckets.map(e=>null==e?void 0:e.length))));return h.BYU().range([o,0]).domain([0,e]).nice()},[i,r]);(0,s.useEffect)(()=>{let e=h.Ys(a.current);e.selectAll("*").remove();let t=h.LLu(p);e.append("g").attr("transform","translate(0,"+o+")").call(t);let r=h.y4O(g);e.append("g").call(r)},[p,g,o]);let j=f.map((e,t)=>e.buckets.map((r,s)=>{let{x0:i,x1:a}=r;return void 0==i||void 0==a?null:(0,n.jsx)("rect",{fill:d(e.name),opacity:.7,x:p(i)+2,width:p(a)-p(i)-4,y:g(r.length),height:o-g(r.length)},t+"_"+s)}));return(0,n.jsxs)("svg",{width:t,height:r,children:[(0,n.jsx)("g",{width:l,height:o,transform:"translate(".concat([u.left,u.top].join(","),")"),children:j}),(0,n.jsx)("g",{width:l,height:o,ref:a,transform:"translate(".concat([u.left,u.top].join(","),")")})]})},x=e=>{let{width:t=700,height:r=400}=e;return(0,n.jsx)(p,{width:t,height:r,data:d})};var f=r(1664),g=r.n(f);let j=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["This tutorial is a variation around the general"," ",(0,n.jsx)(g(),{href:"histogram",children:"introduction to histogram with react"})," and d3.js. You should probably understand the concepts described there before reading here."]}),(0,n.jsxs)("p",{children:["This example explains how to plot several groups on the ",(0,n.jsx)("b",{children:"same"})," ","histogram, by ",(0,n.jsx)("b",{children:"overlapping"})," them on the same X axis. It can be useful to ",(0,n.jsx)("b",{children:"compare the distribution"})," of several items in a dataset."]}),(0,n.jsx)("p",{children:"A code sandbox is provided for the final result, but explanations target what's different compared to an usual histogram."})]});function b(){return(0,n.jsxs)(i.A,{title:"How to build a histogram with React and D3.",seoDescription:"A step-by-step guide to build your very own histogram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,n.jsx)(a.Z,{title:(0,n.jsxs)("h1",{children:["Histogram"," ",(0,n.jsx)("span",{className:"text-gray-600 font-light hidden sm:inline",children:"with several groups"})]}),description:j,chartType:"histogram",showSectionLink:!0}),(0,n.jsx)("h2",{id:"plot",children:"Plot and code"}),(0,n.jsx)("p",{children:"If you are in a hurry, this is what we're trying to achieve here.\uD83D\uDE47‍♂️"}),(0,n.jsxs)("p",{children:["The distribution of ",(0,n.jsx)("b",{children:"several groups"})," are displayed on the same figure, allowing to easily compare them. Please note that this kind of visual works well when there is a clear distinction between groups. Otherwise, bars will overlap each other resulting in an"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/graph/histogram.html",children:"unreadable chart"}),"."]}),(0,n.jsx)(c.$,{VizComponent:x,vizName:"HistogramSeveralGroups",maxWidth:700,height:300,caption:"Histogram representing the distribution of 3 groups in a dataset. Made with react (rendering) and d3.js (scales)"}),(0,n.jsx)("h2",{id:"data",children:"The Data"}),(0,n.jsxs)("p",{children:["The dataset used here is slightly different as"," ",(0,n.jsx)(g(),{href:"/histogram#data",children:"the one"})," used for the simple 1 group histogram."]}),(0,n.jsxs)("p",{children:["An ",(0,n.jsx)("b",{children:"array"})," is used, with each object in it providing the name (",(0,n.jsx)("code",{children:"group"})," property here) and the ",(0,n.jsx)("code",{children:"values"})," of a group."]}),(0,n.jsx)("p",{children:"Here is a minimal example of the data structure:"}),(0,n.jsx)(o.d,{code:v}),(0,n.jsx)("h2",{id:"color scale",children:"Color scale"}),(0,n.jsxs)("p",{children:["There is a finite number of groups here. We need to assign a specific color to each group. This is called an ",(0,n.jsx)("b",{children:"ordinal"})," scale and is implemented in the d3 ",(0,n.jsx)("code",{children:"scaleOrdinal"})," function."]}),(0,n.jsxs)("p",{children:["What's needed here is thus a list of colors to use (the"," ",(0,n.jsx)("code",{children:"range"}),") and a list of group names: the ",(0,n.jsx)("code",{children:"domain"}),"."]}),(0,n.jsx)("p",{children:"To put it in a nutshell, that's how the color scale is implemented:"}),(0,n.jsx)(o.d,{code:w}),(0,n.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the svg ",(0,n.jsx)("code",{children:"circle"}),", but it's react that will render them in the ",(0,n.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,n.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,n.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,n.jsx)("h2",{id:"buckets",children:"Building the histogram buckets"}),(0,n.jsxs)("p",{children:["The exact same logic as the one"," ",(0,n.jsx)(g(),{href:"/histogram#binning",children:"used on the 1 group histogram"})," ","must be used here. But the ",(0,n.jsx)("code",{children:"bucketGenerator"})," must be run on each group of the dataset."]}),(0,n.jsxs)("p",{children:["Once it is done we'll have to ",(0,n.jsx)("code",{children:"map"})," twice to render the rectangles. Once for each group, and a second time for each bar in the group."]}),(0,n.jsx)(o.d,{code:y}),(0,n.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,n.jsx)(l.Z,{chartFamily:"distribution"}),(0,n.jsx)("div",{className:"mt-20"})]})}let v='\nconst data = [\n  {\n    group: "A",\n    values: [0, 0, 2, 2, 2, 0]\n  },\n  {\n    group: "B",\n    values: [0, 0, 2, 2, 2, 0]\n  },\n  ...\n];'.trim(),w='\n// List of arbitrary colors\nconst COLORS = ["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"];\n\n// List of all group names\nconst allGroups = data.map((group) => group.group);\n\n// Color scale\nconst colorScale = d3.scaleOrdinal<string>()\n  .domain(allGroups)\n  .range(COLORS);\n'.trim(),y='\n// Create a function that creates buckets from a blob of data\nconst bucketGenerator = useMemo(() => {\n  return d3\n    .bin()\n    .value((d) => d)\n    .domain(xScale.domain())\n    .thresholds(xScale.ticks(BUCKET_NUMBER));\n}, [xScale]);\n\n// Use the function for all groups of the dataset, one by one\n// The result is an array with bucket details of each group\nconst groupBuckets = useMemo(() => {\n  return data.map((group) => {\n    return { group, buckets: bucketGenerator(group.values) };\n  });\n}, [data]);\n\n// render the rects: group by group, bar by bar\nconst allRects = groupBuckets.map((group, i) =>\n  group.buckets.map((bucket, j) => (\n    <rect\n      key={i + "_" + j}\n      fill={colorScale(group.group)}\n      opacity={0.7}\n      x={xScale(bucket.x0) + BUCKET_PADDING / 2}\n      width={xScale(bucket.x1) - xScale(bucket.x0) - BUCKET_PADDING}\n      y={yScale(bucket.length)}\n      height={boundsHeight - yScale(bucket.length)}\n    />\n  ))\n);\n\n'.trim()},5993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},1832:function(e){e.exports={tooltip:"tooltip_tooltip__b_kg5",right:"tooltip_right__zvLDU",left:"tooltip_left__mQ0Xf",bottom:"tooltip_bottom__MVFNa",top:"tooltip_top__kPfp4"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[3996,8657,3213,645,9774,2888,179],function(){return e(e.s=8283)}),_N_E=e.O()}]);