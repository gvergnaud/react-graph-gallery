(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6387],{132:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/donut",function(){return n(83012)}])},61651:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(85893);n(67294);var s=n(49871),a=n(28843),r=n(77522);let l={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function o(e){let{chartFamily:t}=e,n=a.c.filter(e=>e.family===t).map((e,t)=>{let n=(0,r.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(s.Z,{link:n,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:122})},t)});return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==l?void 0:l[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:n})]})}},81122:function(e,t,n){"use strict";n.d(t,{$:function(){return c}});var i=n(85893),s=n(67294),a=n(59973),r=n(80615),l=n(88578),o=n(5);let c=e=>{let{VizComponent:t,vizName:n,height:c=400,maxWidth:d=800,caption:h}=e,[u,p]=(0,s.useState)(!1),x=(0,s.useRef)(null),m=(0,a.B)(x);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(l.X,{vizName:n})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(o.z,{size:"sm",onClick:()=>p(!u),children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:x,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:c,width:m.width})})}),(0,i.jsx)(r.Y,{children:h}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(o.z,{size:"sm",onClick:()=>p(!u),children:"Show code"})})]})})}},88578:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var i=n(85893);n(67294);let s=e=>{let{vizName:t,height:n="500px",fileToOpen:s}=e;return(0,i.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split"+(s?"&module=/".concat(s):""),style:{width:"100%",height:n,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},26820:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(85893);n(67294);var s=n(28843),a=n(56438);let r=e=>{let{imgLink:t,height:n,opacity:s,children:a}=e;return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{style:{backgroundImage:"url("+t+")",height:n,backgroundAttachment:"fixed",opacity:s,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,i.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:a})]})};function l(e){var t;let{chartId:n}=e,l=(null===(t=s.c.find(e=>e.id===n))||void 0===t?void 0:t.label)||"chart";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{id:"inspiration",children:l+" inspiration"}),(0,i.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,i.jsx)("span",{children:l}),", note that"," ",(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,i.jsx)("div",{className:"border mb-10",children:(0,i.jsx)(r,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,i.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,i.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,i.jsxs)("p",{className:"text-center text-sm",children:[(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,i.jsx)("span",{children:l})," ","looks good!"]}),(0,i.jsx)(a.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},80153:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var i=n(85893),s=n(49700),a=n(63476),r=n(67294),l=n(63084),o=n.n(l);function c(){let[e,t]=(0,r.useState)([]),[n,s]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,r.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),n=window.scrollY+150,i=t.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e,0),a=t.findIndex(e=>e===i);s(-1===a?0:a)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,i.jsx)("div",{className:o().tableOfContent,children:e.map((t,s)=>(0,i.jsx)("p",{className:n===s?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[s].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=n(17414),h=n(62594);let u=e=>{let{children:t,title:n,seoDescription:r}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:n,seoDescription:r}),(0,i.jsx)(s.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:t}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(a.Z,{})}),(0,i.jsx)(c,{})]})}},90505:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var i=n(85893),s=n(41664),a=n.n(s),r=n(28843),l=n(66717),o=n(3572);let c=e=>{let{chartId:t}=e,n=r.c.filter(e=>e.id===t)[0].label;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{id:"responsiveness",children:"Responsive "+n+" with react"}),(0,i.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,i.jsx)("code",{children:"width"})," and ",(0,i.jsx)("code",{children:"height"})," and will render a ",n," of those dimensions."]}),(0,i.jsxs)("p",{children:["Making the ",n," responsive requires adding a ",(0,i.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,i.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,i.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,i.jsx)(l.U,{title:(0,i.jsxs)("span",{children:[(0,i.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,i.jsx)(o.d,{code:d})}),(0,i.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,i.jsx)(a(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})},d='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},49871:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(85893);n(67294);var s=n(95887),a=n(28843),r=n(41664),l=n.n(r);let o=a.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:n,link:a,isAvailable:r,size:c}=e,h=o.includes(t),u=r?"opacity-100":"opacity-20";return(0,i.jsx)(l(),{href:r?a:"subscribe",className:"no-underline",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(r?"cursor-pointer":"cursor-not-allowed"),children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(s.Z,{chartLogo:t,size:c})}),h?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(d,{size:c})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:n})]})})}let d=e=>{let{size:t}=e;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},66717:function(e,t,n){"use strict";n.d(t,{U:function(){return s}});var i=n(85893);let s=e=>{let{title:t,children:n}=e;return(0,i.jsxs)("details",{className:"bg-gray-50 py-2 px-4 rounded-md my-2",children:[(0,i.jsx)("summary",{className:"cursor-pointer",children:t}),(0,i.jsx)("div",{className:"pt-4",children:n})]})}},80615:function(e,t,n){"use strict";n.d(t,{Y:function(){return s}});var i=n(85893);let s=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return d}});var i=n(85893),s=n(32581),a=n(15660),r=n.n(a),l=n(67294),o=n(45993),c=n.n(o);let d=e=>{let{code:t}=e,[n,a]=(0,l.useState)(!1),o=(0,l.useRef)(null);(0,l.useEffect)(()=>{o.current&&r().highlightElement(o.current)},[o,t]);let d=(0,i.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),a(!0)},className:c().codeChunckCopyButton,children:n?"Copied":(0,i.jsx)(s.Z,{size:14,style:{padding:0}})});return(0,i.jsxs)("div",{className:"mb-6 relative",children:[(0,i.jsx)("pre",{className:"rounded-md line-numbers",children:(0,i.jsx)("code",{ref:o,className:"language-javascript",children:t})}),(0,i.jsx)("div",{className:c().copyButtonContainer,children:d})]})}},59973:function(e,t,n){"use strict";n.d(t,{B:function(){return s}});var i=n(67294);let s=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,s]=(0,i.useState)(t),a=()=>{s(t())};return(0,i.useEffect)(()=>(window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)),[]),(0,i.useEffect)(()=>{a()},[e]),n}},83012:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var i=n(85893),s=n(67294),a=n(80153),r=n(43710),l=n(81122),o=n(61651),c=n(3572);let d=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98}];var h=n(43950);let u=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],p=e=>{let{width:t,height:n,data:a}=e,r=Math.min(t,n)/2-30,l=(0,s.useMemo)(()=>{let e=h.ve8().value(e=>e.value);return e(a)},[a]),o=(0,s.useMemo)(()=>{let e=h.Nb1();return l.map(t=>e({innerRadius:70,outerRadius:r,startAngle:t.startAngle,endAngle:t.endAngle}))},[r,l]);return(0,i.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,i.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:o.map((e,t)=>(0,i.jsx)("path",{d:e,fill:u[t]},t))})})},x=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(p,{data:d,width:t,height:n})};var m=n(41664),f=n.n(m);let j=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:58}],g=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],v=e=>{let{width:t,height:n,data:a}=e,r=Math.min(t-300,n-100)/2,l=r/2,o=(0,s.useMemo)(()=>{let e=h.ve8().value(e=>e.value);return e(a)},[a]),c=h.Nb1(),d=o.map((e,t)=>{let n={innerRadius:l,outerRadius:r,startAngle:e.startAngle,endAngle:e.endAngle},s=c.centroid(n),a=c(n),o={innerRadius:r+20,outerRadius:r+20,startAngle:e.startAngle,endAngle:e.endAngle},d=c.centroid(o),h=d[0]>0,u=d[0]+50*(h?1:-1),p=e.data.name+" ("+e.value+")";return(0,i.jsxs)("g",{children:[(0,i.jsx)("path",{d:a,fill:g[t]}),(0,i.jsx)("circle",{cx:s[0],cy:s[1],r:2}),(0,i.jsx)("line",{x1:s[0],y1:s[1],x2:d[0],y2:d[1],stroke:"black",fill:"black"}),(0,i.jsx)("line",{x1:d[0],y1:d[1],x2:u,y2:d[1],stroke:"black",fill:"black"}),(0,i.jsx)("text",{x:u+(h?2:-2),y:d[1],textAnchor:h?"start":"end",dominantBaseline:"middle",fontSize:14,children:p})]},t)});return(0,i.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,i.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:d})})},b=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(v,{data:j,width:t,height:n})};var w=n(95789),y=n(53810),k=n(56438),N=n(90505),A=n(26820),z=n(77936);let R=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["The ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/graph/donut.html",children:"donut chart"})," ","is a very common yet"," ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/caveat/pie.html",children:"criticized"})," way to represent the value of a few groups in a dataset. It is very close to the ",(0,i.jsx)(f(),{href:"/pie-plot",children:"pie chart"})," and thus suffers the same downsides."]}),(0,i.jsxs)("p",{children:["This page explains how to build a donut chart using ",(0,i.jsx)("b",{children:"d3.js"})," and"," ",(0,i.jsx)("b",{children:"React"}),". It starts with a basic example and then focus on customization like ",(0,i.jsx)("b",{children:"legends"}),", ",(0,i.jsx)("b",{children:"hover effect"})," and"," ",(0,i.jsx)("b",{children:"dataset transition"}),"."]})]});function M(){return(0,i.jsxs)(a.A,{title:"Donut chart | The React Graph Gallery",seoDescription:"How to build a donut chart with React and D3.js. A set of re-usable components with explanation and interactive code sandboxes.",children:[(0,i.jsx)(r.Z,{title:"Donut chart",description:R,chartType:"donut"}),(0,i.jsx)("h2",{id:"data",children:"The Data"}),(0,i.jsxs)("p",{children:["The dataset required to build a donut chart is an array where each item represents a group. Each item is an object with 2 properties. They provide the group name (",(0,i.jsx)("code",{children:"name"}),") and its value (",(0,i.jsx)("code",{children:"value"}),")."]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"For instance, here is the dataset used for the simple donut chart below:"}),(0,i.jsx)(c.d,{code:T}),(0,i.jsx)("h2",{id:"basic",children:"Most basic donut chart"})," ",(0,i.jsxs)("p",{children:["The process to build a donut chart is highly similar as the process to build a ",(0,i.jsx)(f(),{href:"/pie-plot",children:"pie chart"}),". It is extensively described in ",(0,i.jsx)(f(),{href:"/pie-plot",children:"its dedicated section"}),"."]}),(0,i.jsx)(k.J,{href:"/pie-plot",size:"sm",isFilled:!0,children:"Long size tutorial"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:["Basically, the ",(0,i.jsx)("code",{children:"pie()"})," function of d3 is used to compute the start and end angles of each group."]}),(0,i.jsx)(c.d,{code:_}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:["This allows to compute arcs thanks to the ",(0,i.jsx)("code",{children:"arc()"})," function of d3. This function expects a ",(0,i.jsx)("code",{children:"innerRadius"})," argument that controls the size of the inner circle of the donut chart. The only difference between a pie and a donut is this inner radius."]}),(0,i.jsx)(c.d,{code:C}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:["And that's it. This array of path can be renderer with react using a"," ",(0,i.jsx)("code",{children:"map"})," as shown in the example below."]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(l.$,{vizName:"DonutChartBasic",VizComponent:x,maxWidth:400,height:400,caption:"Basic donut chart with react and d3.js"})," ",(0,i.jsx)("h2",{id:"legend",children:"Adding inline labels"}),(0,i.jsxs)("p",{children:["The minimal donut chart above is completely useless as long as it does not display the ",(0,i.jsx)("b",{children:"group names"}),". Adding a side legend would be straightforward but that's a bad practice. It's indeed very annoying for the reader to continuously ",(0,i.jsx)("b",{children:"switch"})," between the legend and the chart."]}),(0,i.jsxs)("p",{children:["Instead I suggest to add clean ",(0,i.jsx)("b",{children:"inline labels"}),". A little dot will be located on each slice ",(0,i.jsx)("b",{children:"centroid"}),". From there a first segment will go out of the donut, followed by a second horizontal segment that goes to the label."]}),(0,i.jsxs)("p",{children:["The difficulty here is to get the position of the slice centroid and of the line ",(0,i.jsx)("b",{children:"inflexion point"}),"."]}),(0,i.jsxs)("p",{children:["The ",(0,i.jsx)("code",{children:"centroid()"})," function of d3 is all we need for that. It gives the ",(0,i.jsx)("code",{children:"x"})," and ",(0,i.jsx)("code",{children:"y"})," positions of the centroid of an ",(0,i.jsx)("code",{children:"arc"}),", arc that we used to build the donut slice anyway."]}),(0,i.jsx)(c.d,{code:E}),(0,i.jsxs)("p",{children:["For more in depth explanation, please refer to the"," ",(0,i.jsx)(f(),{href:"/pie-plot",children:"pie chart section"})," that uses the exact same process."]}),(0,i.jsx)(l.$,{vizName:"DonutChartLegend",VizComponent:b,maxWidth:800,height:400,caption:"A donut chart with clean inline legends, built thanks to the centroid function of d3.js."}),(0,i.jsxs)("p",{children:["This approach is a good start when it comes to add legend on a donut chart. It has some ",(0,i.jsx)("b",{children:"limitations"})," though."]}),(0,i.jsxs)("p",{children:["If many groups are available, we will likely get some ",(0,i.jsx)("b",{children:"overlaps"})," ","between labels, resulting in a messy figure. This could be avoided but would require a good amount of additional code. It is thus ignored here."]}),(0,i.jsx)(N.r,{chartId:"donut"}),(0,i.jsx)(A.Z,{chartId:"donut"}),(0,i.jsx)("h2",{id:"hover effect",children:"Hover effect"}),(0,i.jsx)("p",{children:"On the graph below, hovering over a slice will smoothly highlight it, giving a nice polish touch to the widget."}),(0,i.jsxs)("p",{children:["The process is quickly described on the"," ",(0,i.jsx)(f(),{href:"/pie-plot",children:"pie chart hover effect"})," section. But hover effect is a topic on itself. As a result, I plan to write a full tutorial targeting this topic only. You can"," ",(0,i.jsx)(f(),{href:"/subscribe",children:"subscribe"})," to know when it's ready!"]}),(0,i.jsx)(k.J,{size:"sm",isFilled:!0,href:"/subscribe",children:"Tell me when the Hover effect post is ready!"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Meanwhile, here is a donut chart with a hover effect, together with its React code:"}),(0,i.jsx)(l.$,{vizName:"DonutChartHover",VizComponent:w.W,maxWidth:800,height:400,caption:"A donut chart with clean inline legends, built thanks to the centroid function of d3.js."}),(0,i.jsx)("h2",{id:"data transition",children:"Data transition"}),(0,i.jsxs)("p",{children:["The ",(0,i.jsx)("code",{children:"Pie"})," component expects a ",(0,i.jsx)("code",{children:"data"})," prop. What should we do when this data changes?"]}),(0,i.jsxs)("p",{children:["By default, the chart will update ",(0,i.jsx)("b",{children:"instantly"}),", with no transition. Adding a ",(0,i.jsx)("b",{children:"smooth transition"})," gives a nice polish touch to the graph. Try to switch between the 2 datasets below to see the animation in action."]}),(0,i.jsxs)("p",{children:["The code below relies on the ",(0,i.jsx)("code",{children:"react-spring"})," library. Instead of rendering a ",(0,i.jsx)("code",{children:"path"})," for each slice, it uses a"," ",(0,i.jsx)("code",{children:"animated.path"})," component that handles the spring animation for us."]}),(0,i.jsxs)("p",{children:["The implementation is ",(0,i.jsx)("b",{children:"not trivial"}),". I plan to publish a full tutorial on react-spring for data visualization soon. You can"," ",(0,i.jsx)(f(),{href:"/subscribe",children:"subscribe here"})," to be notified when it is ready."]}),(0,i.jsx)(l.$,{vizName:"DonutDatasetTransition",VizComponent:y.M,maxWidth:800,height:400,caption:"A donut chart with clean inline legends, built thanks to the centroid function of d3.js."}),(0,i.jsxs)("p",{children:[(0,i.jsx)("u",{children:"Note"}),": check the blue group that appears / disappears between dataset. This kind of ",(0,i.jsx)("b",{children:"enter/exit pattern"})," is something to keep in mind when building animations."]}),(0,i.jsx)("h2",{id:"barplot transition",children:"Pie chart to barplot"}),(0,i.jsxs)("p",{children:["Pie charts are often"," ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/caveat/pie.html",children:"criticized"})," ","since angles are ",(0,i.jsx)("b",{children:"hard to read"}),". Let's represent the same data using a pie chart or a ",(0,i.jsx)(f(),{href:"/barplot",children:"barplot"}),", to see what's the most insightful \uD83E\uDD37‍♂️."]}),(0,i.jsxs)("p",{children:["Note that here we animate the transition between"," ",(0,i.jsx)("b",{children:"different shape types"}),": each arc becomes a rectangle and reciprocally. This is made possible thanks to the"," ",(0,i.jsx)("a",{href:"https://github.com/veltman/flubber",children:"flubber"})," library, used in coordination with"," ",(0,i.jsx)("a",{href:"https://react-spring.dev/",children:"react-spring"}),"."]}),(0,i.jsxs)("p",{children:["Once more, a full tutorial is needed here. You can"," ",(0,i.jsx)(f(),{href:"/subscribe",children:"subscribe here"})," to be notified when it is ready. In the meanwhile, the code of this specific example is provided below."]}),(0,i.jsx)(l.$,{vizName:"DonutBarplotTransition",VizComponent:z.f,maxWidth:500,height:400,caption:"Transition from a pie chart to a barplot with a smooth animation using the buttons on top."}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,i.jsx)(o.Z,{chartFamily:"partOfAWhole"}),(0,i.jsx)("div",{className:"mt-20"})]})}let T='\nconst data = [\n  {name:"Mark", value: 90},\n  {name:"Robert", value: 12},\n  {name:"Emily", value: 34},\n  {name:"Marion", value: 53},\n  {name:"Nicolas", value: 98},\n]\n'.trim(),_="\nconst pieGenerator = d3.pie().value((d) => d.value);\nconst pie = pieGenerator(data);\n".trim(),C="\nconst arcPathGenerator = d3.arc();\nconst arcs pie.map((p) =>\n      arcPathGenerator({\n        innerRadius: 50, // makes a donut instead of a pie\n        outerRadius: radius,\n        startAngle: p.startAngle,\n        endAngle: p.endAngle,\n      })\n    );\n".trim(),E="\nconst sliceInfo = {\n  innerRadius,\n  outerRadius: radius,\n  startAngle: start,\n  endAngle: end,\n};\nconst centroid = arcGenerator.centroid(sliceInfo); // [x,y] position of the centroid\nconst slicePath = arcGenerator(sliceInfo); // string: the path of the slice\n".trim()},77936:function(e,t,n){"use strict";n.d(t,{f:function(){return x}});var i=n(85893),s=n(67294);let a=[{name:"Mark",value:40},{name:"Robert",value:38},{name:"Etienne",value:37},{name:"Emily",value:36},{name:"Nicolas",value:35},{name:"Marion",value:34}];var r=n(43950),l=n(95334),o=n(86824);let c=e=>{let{path:t,color:n}=e,a=(0,s.useRef)(t),r=(0,s.useMemo)(()=>(0,l.interpolate)(a.current,t),[t]),c=(0,o.q_)({from:{t:0},to:{t:1},reset:a.current!==t,onChange:e=>{let{t}=e;a.current=r(t||1)},config:o.vc.molasses});return(0,i.jsx)(o.q.path,{d:(0,o.to)(c.t,r),opacity:c.opacity,stroke:"black",fill:n,fillOpacity:.8,strokeWidth:1})},d=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],h=e=>{let{width:t,height:n,data:a,type:l}=e,o=a.sort((e,t)=>t.value-e.value),h=o.map(e=>e.name),u=Math.min(t,n)/2-30,p=(0,s.useMemo)(()=>{let e=r.ve8().value(e=>e.value||0).sort(null);return e(o)},[a]),x=t-30-30,m=n-30-30,f=(0,s.useMemo)(()=>r.tiA().domain(h).range([0,m]).padding(.3),[a,n]),j=(0,s.useMemo)(()=>{let e=r.Fp7(a.map(e=>e.value||0));return r.BYU().domain([0,e||10]).range([0,x])},[a,t]),g=p.map((e,s)=>{let a=r.Nb1(),o=a({innerRadius:40,outerRadius:u,startAngle:e.startAngle,endAngle:e.endAngle}),h=f(e.data.name)-n/2,p=j(e.value)-t/2,x=j(0)-t/2,m=f.bandwidth(),g="M ".concat(x," ").concat(h," L ").concat(p," ").concat(h," L ").concat(p," ").concat(h+m," L ").concat(x," ").concat(h+m," Z");return(0,i.jsx)(c,{path:"pie"===l?o:g,color:d[s]},e.data.name)});return(0,i.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,i.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:g})})},u={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"0px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},p=e=>{let{width:t,height:n}=e,[r,l]=(0,s.useState)("pie");return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{height:50},children:[(0,i.jsx)("button",{style:u,onClick:()=>l("pie"),children:"Pie chart"}),(0,i.jsx)("button",{style:u,onClick:()=>l("bar"),children:"Barplot"})]}),(0,i.jsx)(h,{width:t,height:n-50,data:a,type:r})]})},x=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(p,{width:t,height:n})}},95789:function(e,t,n){"use strict";n.d(t,{W:function(){return h}});var i=n(85893);let s=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:58}];var a=n(67294),r=n(43950),l=n(18431),o=n.n(l);let c=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],d=e=>{let{width:t,height:n,data:s}=e,l=(0,a.useRef)(null),d=Math.min(t-300,n-100)/2,h=d/2,u=(0,a.useMemo)(()=>{let e=r.ve8().value(e=>e.value);return e(s)},[s]),p=r.Nb1(),x=u.map((e,t)=>{let n={innerRadius:h,outerRadius:d,startAngle:e.startAngle,endAngle:e.endAngle},s=p.centroid(n),a=p(n),r={innerRadius:d+20,outerRadius:d+20,startAngle:e.startAngle,endAngle:e.endAngle},u=p.centroid(r),x=u[0]>0,m=u[0]+50*(x?1:-1),f=e.data.name+" ("+e.value+")";return(0,i.jsxs)("g",{className:o().slice,onMouseEnter:()=>{l.current&&l.current.classList.add(o().hasHighlight)},onMouseLeave:()=>{l.current&&l.current.classList.remove(o().hasHighlight)},children:[(0,i.jsx)("path",{d:a,fill:c[t]}),(0,i.jsx)("circle",{cx:s[0],cy:s[1],r:2}),(0,i.jsx)("line",{x1:s[0],y1:s[1],x2:u[0],y2:u[1],stroke:"black",fill:"black"}),(0,i.jsx)("line",{x1:u[0],y1:u[1],x2:m,y2:u[1],stroke:"black",fill:"black"}),(0,i.jsx)("text",{x:m+(x?2:-2),y:u[1],textAnchor:x?"start":"end",dominantBaseline:"middle",fontSize:14,children:f})]},t)});return(0,i.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,i.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),className:o().container,ref:l,children:x})})},h=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(d,{data:s,width:t,height:n})}},24109:function(e,t,n){"use strict";n.d(t,{M:function(){return p}});var i=n(85893),s=n(67294);let a=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Etienne",value:void 0},{name:"Emily",value:34},{name:"Nicolas",value:98},{name:"Marion",value:53}],r=[{name:"Mark",value:80},{name:"Robert",value:10},{name:"Etienne",value:48},{name:"Emily",value:6},{name:"Nicolas",value:8},{name:"Marion",value:45}];var l=n(43950),o=n(86824);let c=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],d=e=>{let{width:t,height:n,data:a}=e,r=a.sort((e,t)=>e<t?-1:e>t?1:0),o=Math.min(t,n)/2-30,d=(0,s.useMemo)(()=>{let e=l.ve8().value(e=>e.value||0).sort(null);return e(r)},[a]),u=d.map((e,t)=>(0,i.jsx)(h,{radius:o,slice:e,color:c[t]},e.data.name));return(0,i.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,i.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:u})})},h=e=>{let{slice:t,radius:n,color:s}=e,a=l.Nb1(),r=(0,o.q_)({to:{pos:[t.startAngle,t.endAngle]}});return(0,i.jsx)(o.q.path,{d:r.pos.to((e,t)=>a({innerRadius:40,outerRadius:n,startAngle:e,endAngle:t})),fill:s})},u={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"0px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},p=e=>{let{width:t,height:n}=e,[l,o]=(0,s.useState)(a);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{height:50},children:[(0,i.jsx)("button",{style:u,onClick:()=>o(a),children:"Data 1"}),(0,i.jsx)("button",{style:u,onClick:()=>o(r),children:"Data 2"})]}),(0,i.jsx)(d,{width:t,height:n-50,data:l})]})}},53810:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var i=n(85893),s=n(24109);let a=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(s.M,{width:t,height:n})}},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}},18431:function(e){e.exports={container:"donut-chart_container__TD26m",slice:"donut-chart_slice__DiRt3",hasHighlight:"donut-chart_hasHighlight__CYvny"}}},function(e){e.O(0,[2343,7754,3950,7823,2719,7303,8190,3710,2594,9774,2888,179],function(){return e(e.s=132)}),_N_E=e.O()}]);