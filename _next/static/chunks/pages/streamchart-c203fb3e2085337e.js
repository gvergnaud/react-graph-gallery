(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5503],{7591:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/streamchart",function(){return s(2510)}])},6260:function(e,t,s){"use strict";s.d(t,{U:function(){return r}});var n=s(5893),i=s(7294);let r=e=>{let{startOpen:t,title:s,children:r,toc:a}=e,[o,h]=(0,i.useState)(t);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h2",{className:"cursor-pointer",onClick:()=>h(!o),id:a,children:[o?(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),s]}),(0,n.jsx)("div",{className:"transition-max-height ease-in duration-300  "+(o?"max-h-full":"max-h-0")+" "+(o?"overflow-visible":"overflow-hidden"),children:r})]})}},6820:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var n=s(5893);s(7294);var i=s(8843),r=s(6438);let a=e=>{let{imgLink:t,height:s,opacity:i,children:r}=e;return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{style:{backgroundImage:"url("+t+")",height:s,backgroundAttachment:"fixed",opacity:i,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,n.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:r})]})};function o(e){var t;let{chartId:s}=e,o=(null===(t=i.c.find(e=>e.id===s))||void 0===t?void 0:t.label)||"chart";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{id:"inspiration",children:o+" inspiration"}),(0,n.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,n.jsx)("span",{children:o}),", note that"," ",(0,n.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,n.jsx)("div",{className:"border mb-10",children:(0,n.jsx)(a,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,n.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,n.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,n.jsxs)("p",{className:"text-center text-sm",children:[(0,n.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,n.jsx)("span",{children:o})," ","looks good!"]}),(0,n.jsx)(r.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},505:function(e,t,s){"use strict";s.d(t,{r:function(){return c}});var n=s(5893),i=s(1664),r=s.n(i),a=s(8843),o=s(88),h=s(3572);let c=e=>{let{chartId:t}=e,s=a.c.filter(e=>e.id===t)[0].label;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{id:"responsiveness",children:"Responsive "+s+" with react"}),(0,n.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,n.jsx)("code",{children:"width"})," and ",(0,n.jsx)("code",{children:"height"})," and will render a ",s," of those dimensions."]}),(0,n.jsxs)("p",{children:["Making the ",s," responsive requires adding a ",(0,n.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,n.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,n.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,n.jsx)(o.U,{startOpen:!1,title:(0,n.jsxs)("span",{children:[(0,n.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,n.jsx)(h.d,{code:d})}),(0,n.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,n.jsx)(r(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})},d='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},2510:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return z}});var n=s(5893),i=s(7294),r=s(153),a=s(9965),o=s(7262),h=s(2594),c=s(6260),d=s(3572),l=s(1122),p=s(1664),u=s.n(p),x=s(6820);let m=[{x:1,groupA:38,groupB:19,groupC:9,groupD:4},{x:2,groupA:16,groupB:14,groupC:96,groupD:40},{x:3,groupA:64,groupB:96,groupC:64,groupD:40},{x:4,groupA:32,groupB:48,groupC:64,groupD:40},{x:5,groupA:12,groupB:18,groupC:14,groupD:10}];var g=s(6020);let f={top:30,right:30,bottom:50,left:50},j=e=>{let{width:t,height:s,data:r}=e,a=t-f.right-f.left,o=s-f.top-f.bottom,h=["groupA","groupB","groupC","groupD"],c=g.knu().keys(h).order(g.Qxt).offset(g.KuJ),d=c(r),l=(0,i.useMemo)(()=>g.BYU().domain([-200,200]).range([o,0]),[r,s]),[p,u]=g.Wem(r,e=>e.x),x=(0,i.useMemo)(()=>g.BYU().domain([p||0,u||0]).range([0,a]),[r,t]),m=g.PKp().domain(h).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]),j=g.SOn().x(e=>x(e.data.x)).y1(e=>l(e[1])).y0(e=>l(e[0])).curve(g.zgE),v=d.map((e,t)=>{let s=j(e);return(0,n.jsx)("path",{d:s,opacity:1,stroke:"grey",fill:m(e.key),fillOpacity:.8},t)}),w=x.ticks(5).map((e,t)=>(0,n.jsxs)("g",{children:[(0,n.jsx)("line",{x1:x(e),x2:x(e),y1:0,y2:o,stroke:"#808080",opacity:.2}),(0,n.jsx)("text",{x:x(e),y:o+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t));return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:t,height:s,children:(0,n.jsxs)("g",{width:a,height:o,transform:"translate(".concat([f.left,f.top].join(","),")"),children:[w,v]})})})},v=e=>{let{width:t=700,height:s=400}=e;return(0,n.jsx)(j,{data:m,width:t,height:s})};var w=s(505);let b=(0,n.jsxs)("p",{children:["A"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/graph/streamgraph.html",children:"streamgraph"})," ","is a variation of the more common"," ",(0,n.jsx)(u(),{href:"stacked-area-plot",children:"stacked area chart"}),". This section explains how to stack and smooth the data with ",(0,n.jsx)("code",{children:"d3.js"}),", and render the shapes with ",(0,n.jsx)("code",{children:"react"}),". It starts from the basic and goes until necessary customization like tooltips, hover effect, legend and annotation, always with editable sandboxes."]}),k="\nconst data = [\n  {\n    x: 1,\n    groupA: 38,\n    groupB: 19,\n  },\n  {\n    x: 2,\n    groupA: 16,\n    groupB: 14,\n  },\n  ...\n];\n".trim(),y="\nconst stackSeries = d3\n  .stack()\n  .keys(groups)\n  .order(d3.stackOrderNone)\n  .offset(d3.stackOffsetSilhouette);\nconst series = stackSeries(data);\n".trim();function z(){return(0,n.jsxs)(r.A,{title:"Streamchart with React",seoDescription:"How to build a stream chart with React and D3.js. A set of re-usable components",children:[(0,n.jsx)(a.Z,{title:"Streamcharts",description:b,chartType:"stream"}),(0,n.jsxs)(c.U,{title:"Dataset",startOpen:!0,children:[(0,n.jsx)("p",{children:"Most of the time the input dataset is an array where each item is an object."}),(0,n.jsxs)("p",{children:["Each object provides information for a step on the X axis. It has a value like ",(0,n.jsx)("code",{children:"x"})," that provides the exact position on the X axis. It then has several numeric values, one for each group of the dataset."]}),(0,n.jsx)("p",{children:"Here is a minimal example:"}),(0,n.jsx)(d.d,{code:k}),(0,n.jsxs)("p",{children:["Note: if your data is in ",(0,n.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,n.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,n.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"here"}),"."]})]}),(0,n.jsxs)(c.U,{title:"Data wrangling",startOpen:!0,children:[(0,n.jsx)("p",{children:"Building a stream chart requires to stack the data. Series are displayed one on top of each other and you have to compute their positions on the Y axis."}),(0,n.jsxs)("p",{children:["Fortunately, ",(0,n.jsx)("code",{children:"D3.js"})," has a handy ",(0,n.jsx)("code",{children:"stack()"})," ","function that does exactly that. The process is deeply explained in the ",(0,n.jsx)(u(),{href:"stacked-area-plot",children:"stacked area chart"})," section of the gallery."]}),(0,n.jsxs)("p",{children:["The only variation required here is to use the",(0,n.jsx)("code",{children:"d3.stackOffsetSilhouette"})," offset option. Instead of stacking everything above the 0 baseline, it will put groups on both part of it."]}),(0,n.jsx)("p",{children:"Computing the position of the chart series should look something like:"}),(0,n.jsx)(d.d,{code:y})]}),(0,n.jsxs)(c.U,{title:"Most basic streamgraph",startOpen:!0,children:[(0,n.jsxs)("p",{children:["Once more, the process to render the shape is very close to the"," ",(0,n.jsx)(u(),{href:"stacked-area-plot",children:"stacked area chart"}),". A few variations are required though."]}),(0,n.jsx)("h3",{children:"→ Smoothing"}),(0,n.jsxs)("p",{children:["We need to smooth the area shape to get the good-looking organic flow. Once more d3 is here to the rescue with a"," ",(0,n.jsx)("a",{href:"https://github.com/d3/d3-shape#curves",children:"curve"})," function that does all the work for us."]}),(0,n.jsx)("h3",{children:"→ Axis"}),(0,n.jsxs)("p",{children:[(0,n.jsx)(u(),{href:"build-axis-with-react",children:"Usual axes"})," do not work for streamgraphs. The Y axis would make no sense since shapes are on both side of the 0 baseline. It is commonly"," ",(0,n.jsx)("a",{href:"https://www.dataviz-inspiration.com/stream",children:"removed"}),". The X axis would feel lost alone at the very bottom of the chart."]}),(0,n.jsx)("p",{children:"Here I suggest to replace the X axis with vertical ablines. The Y axis is removed and we will see later how"}),(0,n.jsx)(l.$,{vizName:"StreamGraphBasic",VizComponent:v,height:400,maxWidth:600,caption:"Most basic streamgraph with react and d3.js"})]}),(0,n.jsx)(w.r,{chartId:"stream"}),(0,n.jsx)(x.Z,{chartId:"stackedArea"}),(0,n.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,n.jsx)(o.Z,{chartFamily:"evolution"}),(0,n.jsx)("div",{className:"mt-20"}),(0,n.jsx)(h.Z,{})]})}}},function(e){e.O(0,[3996,6020,5660,645,1188,9774,2888,179],function(){return e(e.s=7591)}),_N_E=e.O()}]);