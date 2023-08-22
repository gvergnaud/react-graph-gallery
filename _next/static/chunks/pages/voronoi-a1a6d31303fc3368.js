(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5989],{225:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/voronoi",function(){return i(110)}])},6820:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var a=i(5893);i(7294);var o=i(8843),n=i(6438);let r=t=>{let{imgLink:e,height:i,opacity:o,children:n}=t;return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{style:{backgroundImage:"url("+e+")",height:i,backgroundAttachment:"fixed",opacity:o,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:n})]})};function s(t){var e;let{chartId:i}=t,s=(null===(e=o.c.find(t=>t.id===i))||void 0===e?void 0:e.label)||"chart";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{id:"inspiration",children:s+" inspiration"}),(0,a.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,a.jsx)("span",{children:s}),", note that"," ",(0,a.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,a.jsx)("div",{className:"border mb-10",children:(0,a.jsx)(r,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,a.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,a.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,a.jsxs)("p",{className:"text-center text-sm",children:[(0,a.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,a.jsx)("span",{children:s})," ","looks good!"]}),(0,a.jsx)(n.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},2450:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var a=i(5893);i(7294);var o=i(2050),n=i(9975),r=i(9942);function s(t){let{images:e}=t,i=o.F.filter(t=>e.includes(t.img)).map((t,e)=>(0,a.jsx)(n.X,{link:t.link,title:t.title,description:(0,a.jsx)("p",{children:t.description}),img:t.img,alt:t.alt},e));return(0,a.jsx)(r.E,{children:i})}},505:function(t,e,i){"use strict";i.d(e,{r:function(){return c}});var a=i(5893),o=i(1664),n=i.n(o),r=i(8843),s=i(88),l=i(3572);let c=t=>{let{chartId:e}=t,i=r.c.filter(t=>t.id===e)[0].label;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{id:"responsiveness",children:"Responsive "+i+" with react"}),(0,a.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,a.jsx)("code",{children:"width"})," and ",(0,a.jsx)("code",{children:"height"})," and will render a ",i," of those dimensions."]}),(0,a.jsxs)("p",{children:["Making the ",i," responsive requires adding a ",(0,a.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,a.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,a.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,a.jsx)(s.U,{startOpen:!1,title:(0,a.jsxs)("span",{children:[(0,a.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,a.jsx)(l.d,{code:d})}),(0,a.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,a.jsx)(n(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})},d='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},9975:function(t,e,i){"use strict";i.d(e,{X:function(){return r}});var a=i(5893),o=i(6395),n=i.n(o);let r=t=>{let{img:e,title:i,description:o,link:r,alt:s}=t;return(0,a.jsxs)("figure",{className:n().container,children:[(0,a.jsx)("img",{src:"/chart/"+e,className:n().image,alt:s}),(0,a.jsxs)("figcaption",{children:[(0,a.jsx)("p",{className:n().title,children:(0,a.jsx)("b",{children:i})}),(0,a.jsx)("div",{className:"font-light",children:o}),(0,a.jsx)("a",{href:r})]})]})}},9942:function(t,e,i){"use strict";i.d(e,{E:function(){return o}});var a=i(5893);i(7294);let o=t=>{let{children:e}=t;return(0,a.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:e})}},8893:function(t,e,i){"use strict";i.d(e,{H:function(){return o}});var a=i(5893);let o=t=>{let{text:e}=t;return(0,a.jsxs)("blockquote",{className:"mt-10 opacity-20",children:[(0,a.jsx)("b",{className:"text-reactGallery mr-4",children:"ToDo"}),e]})}},110:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return H}});var a=i(5893),o=i(7294),n=i(153),r=i(9965),s=i(7262),l=i(3572),c=i(1122);let d=[{x:10,y:10},{x:4,y:4},{x:35,y:90},{x:67,y:34},{x:89,y:65},{x:23,y:10},{x:12,y:32},{x:45,y:78},{x:67,y:98},{x:23,y:23}];var h=i(7875);let p=t=>{let{width:e,height:i,data:n}=t,r=h.BYU().domain([0,100]).range([0,e]),s=h.BYU().domain([0,100]).range([0,i]),l=n.map((t,e)=>(0,a.jsx)("circle",{cx:r(t.x),cy:s(t.y),r:4},e)),c=(0,o.useMemo)(()=>{let t=n.map(t=>[r(t.x),s(t.y)]);return h.oc6.from(t)},[]),d=c.render(),p=(0,a.jsx)("path",{d:d,stroke:"grey",fill:"transparent",opacity:.2}),m=(0,o.useMemo)(()=>c.voronoi([0,0,e,i]),[n]),g=m.render(),u=(0,a.jsx)("path",{d:g,stroke:"black",fill:"red"});return(0,a.jsxs)("svg",{width:e,height:i,children:[l,p,u]})},m=t=>{let{width:e=700,height:i=400}=t;return 0===e||0===i?null:(0,a.jsx)("div",{children:(0,a.jsx)(p,{width:e,height:i,data:d})})};var g=i(1664),u=i.n(g);let x=[{x:10,y:10},{x:4,y:4},{x:35,y:90},{x:67,y:34},{x:89,y:65},{x:23,y:10},{x:12,y:32},{x:45,y:78},{x:67,y:98},{x:23,y:23}],f=t=>{let{width:e,height:i,data:o}=t,n=h.BYU().domain([0,100]).range([0,e]),r=h.BYU().domain([0,100]).range([0,i]),s=o.map((t,e)=>(0,a.jsx)("circle",{cx:n(t.x),cy:r(t.y),r:4},e));return(0,a.jsx)("svg",{width:e,height:i,children:s})},b=t=>{let{width:e=700,height:i=400}=t;return(0,a.jsx)("div",{style:{marginTop:20,marginBottom:20},children:(0,a.jsx)(f,{width:e,height:i-40,data:x})})},w=[{x:10,y:10},{x:4,y:4},{x:35,y:90},{x:67,y:34},{x:89,y:65},{x:23,y:10},{x:12,y:32},{x:45,y:78},{x:67,y:98},{x:23,y:23}],v=t=>{let{width:e,height:i,data:n}=t,r=h.BYU().domain([0,100]).range([0,e]),s=h.BYU().domain([0,100]).range([0,i]),l=n.map((t,e)=>(0,a.jsx)("circle",{cx:r(t.x),cy:s(t.y),r:4},e)),c=(0,o.useMemo)(()=>{let t=n.map(t=>[r(t.x),s(t.y)]);return h.oc6.from(t)},[]),d=c.render(),p=(0,a.jsx)("path",{d:d,stroke:"grey",fill:"transparent",opacity:.8});return(0,a.jsxs)("svg",{width:e,height:i,children:[l,p]})},j=t=>{let{width:e=700,height:i=400}=t;return 0===e||0===i?null:(0,a.jsx)("div",{children:(0,a.jsx)(v,{width:e,height:i,data:w})})};var y=i(505),k=i(6820);let z=[{x:10,y:10},{x:4,y:4},{x:35,y:90},{x:67,y:34},{x:89,y:65},{x:23,y:10},{x:12,y:32},{x:45,y:78},{x:67,y:98},{x:23,y:23}],B=t=>{let{width:e,height:i,data:n}=t,r=h.BYU().domain([0,100]).range([0,e]),s=h.BYU().domain([0,100]).range([0,i]),l=(0,o.useMemo)(()=>{let t=n.map(t=>[r(t.x),s(t.y)]);return h.oc6.from(t)},[n]),[c,d]=(0,o.useState)(null),p=(0,o.useMemo)(()=>l.voronoi([0,0,e,i]),[l,e,i]),m=n.map((t,e)=>{let i=p.renderCell(e);return(0,a.jsx)("path",{d:i,stroke:"grey",fill:"transparent",opacity:.1,onMouseOver:()=>{d(e)}},e)}),g=n.map((t,e)=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("circle",{cx:r(t.x),cy:s(t.y),r:4},e),c===e&&(0,a.jsx)("circle",{cx:r(t.x),cy:s(t.y),r:10,fill:"transparent",stroke:"red",strokeWidth:3},e)]}));return(0,a.jsxs)("svg",{width:e,height:i,children:[g,m]})},P=t=>{let{width:e=700,height:i=400}=t;return 0===e||0===i?null:(0,a.jsx)("div",{children:(0,a.jsx)(B,{width:e,height:i,data:z})})};var D=i(6438),R=i(8893),S=i(2450);let A=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["A"," ",(0,a.jsx)("a",{href:"https://en.wikipedia.org/wiki/Voronoi_diagram",children:"voronoi diagram"})," ","is a partition of a plane into regions called ",(0,a.jsx)("b",{children:"voronoi cells"}),". A voronoi cell consists of every point in the plane whose distance to its linked data point is less than or equal to its distance to"," ",(0,a.jsx)("b",{children:"any other data point"}),"."," "]}),(0,a.jsxs)("p",{children:["This page is a step-by-step guide on how to build your own voronoi diagram for the web, using ",(0,a.jsx)("a",{href:"https://reactjs.org/",children:"React"})," and"," ",(0,a.jsx)("a",{href:"https://d3-graph-gallery.com",children:"D3.js"}),"."]}),(0,a.jsxs)("p",{children:["It starts by describing how the ",(0,a.jsx)("b",{children:"data"})," should be organized and explains how to run and plot a ",(0,a.jsx)("b",{children:"Delaunay triangulation"}),". Based on this, it explains how to build the voronoi diagram. Finally it shows how this can be used for real life application like for a ",(0,a.jsx)("b",{children:"scatterplot"})," ","or to build a ",(0,a.jsx)("b",{children:"voronoi treemap"}),"."]})]});function H(){return(0,a.jsxs)(n.A,{title:"How to build a Voronoi Diagram with React and D3.",seoDescription:"A step-by-step guide to build your very own voronoi diagram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,a.jsx)(r.Z,{title:"Voronoi Diagram",description:A,chartType:"voronoi"}),(0,a.jsx)("h2",{id:"data",children:"The Data"}),(0,a.jsxs)("p",{children:["Everything starts with a set of ",(0,a.jsx)("b",{children:"two-dimensional points"}),". Their coordinates are available with ",(0,a.jsx)("code",{children:"x"})," representing the position on the ",(0,a.jsx)("b",{children:"horizontal"})," axis and ",(0,a.jsx)("code",{children:"y"})," being for the"," ",(0,a.jsx)("b",{children:"vertical"})," axis."]}),(0,a.jsxs)("p",{children:["As a result, the dataset is pretty simple: an ",(0,a.jsx)("code",{children:"array"})," of"," ","objects that looks like this:"]}),(0,a.jsx)("br",{}),(0,a.jsx)(l.d,{code:M}),(0,a.jsxs)("p",{children:["Note: this is the same dataset as the one used for a"," ",(0,a.jsx)(u(),{href:"/scatter-plot",children:"scatterplot"}),"."]}),(0,a.jsx)("h2",{id:"2d plane",children:"A set of two-dimensional points"}),(0,a.jsxs)("p",{children:["Let's start by plotting those data points on a two-dimensional points. This is basically a ",(0,a.jsx)(u(),{href:"/scatter-plot",children:"scatterplot"})," except that we're not drawing the axes."]}),(0,a.jsxs)("p",{children:["If you're not familiar with the basic steps used in the following sandbox, please take a look at the"," ",(0,a.jsx)(u(),{href:"/scatter-plot",children:"scatterplot"})," section of the gallery that goes in deep on what's going on here."]}),(0,a.jsx)(D.J,{isFilled:!0,size:"sm",href:"scatter-plot",children:"Scatterplot section"}),(0,a.jsx)("p",{children:(0,a.jsx)("br",{})}),(0,a.jsxs)("p",{children:["You need a good understanding about ",(0,a.jsx)("b",{children:"d3 scales"}),", how to"," ",(0,a.jsx)("b",{children:"loop through a data"})," array to create ",(0,a.jsx)("b",{children:"svg elements"})," and how to make the component ",(0,a.jsx)("b",{children:"renders"})," them."]}),(0,a.jsx)(c.$,{VizComponent:b,vizName:"VoronoiScatterOnly",maxWidth:600,height:300,caption:"A voronoi diagram starts with a set of 2d coordinate points plotted on a plane."}),(0,a.jsx)("h2",{id:"delaunay",children:"Delaunay triangulation"}),(0,a.jsxs)("p",{children:["The first required step to build a voronoi diagram is to run a"," ",(0,a.jsx)("a",{href:"https://en.wikipedia.org/wiki/Delaunay_triangulation",children:"Delaunay triangulation"}),"."]}),(0,a.jsxs)("p",{children:["You don't necessarily need to understand what a Delaunay triangulation is. But if you're interested in the topic, it will be covered in the"," ",(0,a.jsx)(u(),{href:"subscribe",children:"dataviz universe"})," newsletter soon."]}),(0,a.jsxs)("p",{children:["Fortunately, d3.js has a module called"," ",(0,a.jsx)("a",{href:"https://github.com/d3/d3-delaunay",children:"d3-delaunay"})," that does this triangulation for us. You can import this module as follow. You can also read its complete doc on"," ",(0,a.jsx)("a",{href:"https://github.com/d3/d3-delaunay",children:"github"}),"."]}),(0,a.jsx)(l.d,{code:V}),(0,a.jsxs)("p",{children:["Start by creating a ",(0,a.jsx)("code",{children:"delaunay"})," object thanks to the"," ",(0,a.jsx)("code",{children:"Delaunay.from()"})," function. This function expects an array of array of numbers, so there is a tiny bit of data wrangling to do here."]}),(0,a.jsx)(l.d,{code:I}),(0,a.jsxs)("p",{children:["This ",(0,a.jsx)("code",{children:"delaunay"})," object contains all the information about the triangulation \uD83C\uDF89. It also has a method called ",(0,a.jsx)("code",{children:"render()"})," that provides the svg path of all the ",(0,a.jsx)("code",{children:"adjacent triangles"}),"."]}),(0,a.jsx)(l.d,{code:N}),(0,a.jsxs)("p",{children:["This path is provided as a string that we can pass to a"," ",(0,a.jsx)("code",{children:"path"})," svg element as follow:"]}),(0,a.jsx)(l.d,{code:F}),(0,a.jsxs)("p",{children:["We can now render this inside an ",(0,a.jsx)("code",{children:"svg"})," element to get an overview of this ",(0,a.jsx)("b",{children:"delaunay triangulation"}),":"]}),(0,a.jsx)(c.$,{VizComponent:j,vizName:"VoronoidelaunayOnly",maxWidth:600,height:300,caption:"Second step: run a Delaunay triangulation on the set of two-dimensional points."}),(0,a.jsx)("h2",{id:"voronoi",children:"Voronoi diagram"}),(0,a.jsxs)("p",{children:["The Delaunay triangulation above corresponds to the ",(0,a.jsx)("b",{children:"dual graph"})," of the Voronoi diagram. Basically, it means that the ",(0,a.jsx)("b",{children:"circumcenters"})," ","of the Delaunay triangles are the ",(0,a.jsx)("b",{children:"vertices"})," of the Voronoi diagram."]}),(0,a.jsxs)("p",{children:["But no worries, the ",(0,a.jsx)("code",{children:"delaunay"})," object we built in the previous section has a ",(0,a.jsx)("code",{children:"voronoi()"})," method. It computes the voronoi cell coordinates based on the delaunay information:"]}),(0,a.jsx)(l.d,{code:T}),(0,a.jsx)("p",{children:"We can plot the voronoi cells using the same kind of code as for the delaunay triangles. Resulting in our first voronoi diagram! \uD83C\uDF89"}),(0,a.jsx)("br",{}),(0,a.jsx)(c.$,{VizComponent:m,vizName:"VoronoiBasic",maxWidth:600,height:300,caption:"Last step: join the circumcenters of each triangle to get the voronoi diagram."}),(0,a.jsx)(y.r,{chartId:"voronoi"}),(0,a.jsx)(k.Z,{chartId:"voronoi"}),(0,a.jsx)("h2",{id:"closest point",children:"Closest point detection"}),(0,a.jsxs)("p",{children:["The voronoi diagram is commonly used to detect the ",(0,a.jsx)("b",{children:"closest"})," data point of the mouse position. This can be pretty useful to highlight the closest point without having to hover ",(0,a.jsx)("b",{children:"exactly"})," over it."]}),(0,a.jsx)("p",{children:"In the example below, the closest dot will be highlighted with a red circle ⭕️ using the voronoi cells."}),(0,a.jsx)("br",{}),(0,a.jsx)(c.$,{VizComponent:P,vizName:"VoronoiClosestPoint",maxWidth:600,height:300,caption:"Use the voronoi algorithm to detect the closest point of the mouse position."}),(0,a.jsx)("h2",{id:"variations",children:"Variations"}),(0,a.jsx)("p",{children:"A glimpse of what it is possible to do using the voronoi diagram for data visualization."}),(0,a.jsx)("p",{children:"Click on the overview below to get details and code."}),(0,a.jsx)("br",{}),(0,a.jsx)(S.Z,{images:["scatterplot-tooltip-with-voronoi-for-closest-point-detection.gif"]}),(0,a.jsx)(R.H,{text:"Add voronoi treemap example"}),(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,a.jsx)(s.Z,{chartFamily:"partOfAWhole"}),(0,a.jsx)("div",{className:"mt-20"})]})}let M="\nexport const data = [\n  { x: 10, y: 10 },\n  { x: 4, y: 4 },\n  { x: 35, y: 90 },\n  { x: 67, y: 34 },\n  ...\n];\n".trim(),V='\nimport { Delaunay } from "d3";\n'.trim(),I="\nconst delaunay = useMemo(() => {\n  const formattedData = data.map((d) => [xScale(d.x), yScale(d.y)]);\n  return Delaunay.from(formattedData);\n}, []);\n".trim(),N="\nconst delaunayPath = delaunay.render();\n".trim(),F='\nconst allDelaunayShapes = (\n  <path d={delaunayPath} stroke="grey" fill="transparent" opacity={0.2} />\n);\n'.trim(),T="\nconst voronoi = useMemo(() => {\n  return delaunay.voronoi([0, 0, width, height]);\n}, [data]);\n".trim()},2050:function(t,e,i){"use strict";i.d(e,{F:function(){return a}});let a=[{link:"/scatter-plot#scales%20and%20axes",title:"Scales and axes",description:"How to map your data in a 2d space, and how to draw the axes",img:"axis-basic-demo.png",alt:"Picture of an empty chart area with X and Y axes"},{link:"/scatterplot",title:"Scatterplot Hover effect",description:"How to add a hover effect to highlight a group on a scatterplot",img:"scatterplotHoverEffect.gif",alt:"GIF of a scatterplot with hover effect"},{link:"/scatter-plot#circles",title:"Basic scatter plot",description:"Add circles to get a basic scatter plot",img:"scatterplot-most-basic.png",alt:"Most basic scatterplot made with react and d3"},{link:"/scatter-plot#tooltip",title:"Add tooltip",description:"Get more details about each datapoint by adding a tooltip on hover",img:"scatterplot-tooltip.png",alt:"Scatterplot with tooltip made with react and d3"},{link:"/scatter-plot#hover%20effect",title:"Add a hover effect",description:"Highlight a specific group on hover",img:"scatterplot-hover-effect.png",alt:"Scatterplot with hover effect made with react and d3"},{link:"/scatter-plot#real%20life",title:"Real life use-case",description:"Reproduction of a data wrapper chart representing countries CO2 data",img:"scatterplot-co2.png",alt:"Real life example of a scatterplot made with react and d3"},{link:"/example/scatterplot-tooltip-with-voronoi-for-closest-point-detection",title:"Closest point detection with Voronoi",description:"Using a voronoi diagram in the scatterplot background is a smart way to efficiently find the mouse closest point",img:"scatterplot-tooltip-with-voronoi-for-closest-point-detection.gif",alt:"gif of a scatterplot with voronoi diagram for closest point detection"},{link:"/heatmap",title:"Basic heatmap",description:"Most basic heatmap",img:"heatmapBasic.png",alt:"Picture of a simple heatmap made with react and d3.js"},{link:"/heatmap#tooltip",title:"Heatmap with tooltip",description:"Learn how to add a tooltip to a heatmap with react",img:"heatmapTooltip.png",alt:"Picture of a heatmap with a tooltip that appears on hover"},{link:"/heatmap#legend",title:"Continuous color scale",description:"How to add a color legend to your chart that uses a continuous color scale",img:"continuousColorLegend.png",alt:"Picture of a continuous color scale built with d3.js"},{link:"/heatmap#application",title:"Vaccination heatmap",description:"Reproduction of a famous vaccination heatmap using d3 and react",img:"heatmapVaccination.png",alt:"Picture of a heatmap showing the effect of vaccination, built with react and d3"},{link:"/correlogram",title:"Basic correlogram",description:"Learn how to build a correlogram with react and d3",img:"correlogramBasic.png",alt:"Picture of a correlogram built with react and d3"},{link:"/bubble-plot",title:"Bubble plot",description:"Learn how to build a bubble plot with react and d3.js",img:"bubble-plot-with-legend.png",alt:"Picture of a simple bubble plot with a legend made with react and d3.js"},{link:"/bubble-plot#transition",title:"Bubble plot data set transition",description:"How to smoothly animate the transition between dataset",img:"bubble-plot-dataset-transition.gif",alt:"GIF of a bubble plot smoothly transitioning data"},{link:"/2d-density-plot",title:"Hexbin chart",description:"A hexbin chart split the figure in hexagons to show a 2d density",img:"2d-density-plot.png",alt:"Picture of a hexbin chart made with React and d3.js"},{link:"/connected-scatter-plot",title:"Simple connected scatterplot",description:"A very simple connected scatter plot showing the evolution of 1 numeric variable",img:"connected-scatterplot-basic.png",alt:"Picture of a connected scatter plot made with React and d3.js"},{link:"/example/boxplot-jitter",title:"Boxplot with jitter",description:"Add individual data points using jitter on top of the boxplot",img:"boxplot-jitter.png",alt:"Picture of a boxplot with jitter built using react and d3.js"},{link:"/boxplot#box%20component",title:"Boxplot shape",description:"How to build a boxplot shape in SVG",img:"boxplotShape.png",alt:"Picture of a box component, allowing to build a boxplot later on"},{link:"/boxplot",title:"Basic boxplot",description:"How to build a basic boxplot with react",img:"boxplotBasic.png",alt:"Picture of a basic boxplot built with react and d3"},{link:"/histogram",title:"Histogram",description:"Learn how to build a histogram with react and d3.js",img:"histogram-basic.png",alt:"Picture of a simple histogram made with react and d3.js"},{link:"/histogram#transition",title:"Histogram dataset transition",description:"How to animate the transition between datasets",img:"histogram-dataset-transition.gif",alt:"GIF of a histogram with animated data transition"},{link:"/example/histogram-mirror",title:"Mirror histogram",description:"Create a mirror histogram to compare the distribution of 2 groups in a dataset",img:"histogram-mirror.png",alt:"picture of a mirror histogram made with react and d3.js"},{link:"/example/histogram-small-multiple",title:"Small multiple",description:"Create one panel per group to show its distribution separately",img:"histogram-small-multiple.png",alt:"Picture of a histogram with small multiple built with react and d3.js"},{link:"/example/histogram-with-several-groups",title:"Multiple groups",description:"A histogram with <b>multiple</b> groups displayed on the same axis.",img:"histogram-with-several-groups.png",alt:"Picture of a histogram with multiple groups built with react and d3.js"},{link:"/violin-plot",title:"Violin to Boxplot transition",description:"Using shape morphism to smoothly transition from a boxplot to a violin and reverse",img:"violinBoxplotTransition.png",alt:"gif of a violin plot smoothly transitioning to a boxplot using shape morphism"},{link:"/violin-plot#bucket%20size",title:"Bucket size effect",description:"Interactive example showing the bucket size effect on a violin chart",img:"violin-bucket-size-effect.gif",alt:"GIF showing a violin plot with varying bucket size"},{link:"/violin-plot#violin%20component",title:"Violin shape",description:"How to build the shape of a violin with SVG",img:"violinShape.png",alt:"Picture of a violin shape built with react and d3"},{link:"/violin-plot",title:"Boxplot to Violin plot",description:"Interactive example showing the difference between a boxplot and a violin",img:"boxplot-violin-transition.gif",alt:"GIF showing a mirror transition between a boxplot and a violin plot"},{link:"/violin-plot",title:"Basic violin plot",description:"Learn how to build a basic violin chart with d3 and react",img:"violinBasic.png",alt:"Picture of a basic violin chart built in react"},{link:"/violin-plot#bucket%20size",title:"Violin with variable bucket size",description:"A violin plot with a slider to change the bucket size in use",img:"violinBucketSize.png",alt:"Picture of a violin plot with variable bucket size"},{link:"/barplot",title:"Basic barplot",description:"Most basic barplot built with React and d3",img:"barplot-basic.png",alt:"Picture of a horizontal barplot made with React and d3"},{link:"/example/barplot-data-transition-animation",title:"Barplot dataset transition",description:"How to smoothly animate the transition between dataset",img:"barplotDatasetAnimation.gif",alt:"GIF of a data update on a React barplot"},{link:"/example/barplot-stacked-horizontal",title:"Horizontal Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-horizontal.png",alt:"Picture of a stacked barchart made with react and d3"},{link:"/example/barplot-stacked-vertical",title:"Vertical Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-vertical.png",alt:"Picture of a vertical stacked barchart made with react and d3"},{link:"/density-plot",title:"Basic density plot",description:"Most basic density plot built with React and d3",img:"densityBasic.png",alt:"Picture of a basic density plot built with React and d3"},{link:"/density-plot#variations",title:"Density plot with multiple groups",description:"How to add several groups on the same density plot",img:"densityMultipleGroups.png",alt:"Picture of a density plot with multiple groups"},{link:"/ridgeline",title:"Basic ridgeline chart",description:"Most basic version of a ridgeline plot",img:"ridgelineBasic.png",alt:"Picture of a basic ridgeline chart built with react and d3"},{link:"/line-chart#basic",title:"Most basic line chart",description:"The most basic line chart one can make using d3 and react",img:"line-chart-basic.png",alt:"Picture of a very simple line chart made with react and d3"},{link:"/line-chart#transition",title:"Line chart with dataset transition",description:"How to smoothly animate the transition between 2 dataset on a line chart",img:"line-chart-data-transition.gif",alt:"GIF of a line chart that animates between 2 dataset"},{link:"/area-plot",title:"Basic Area Chart",description:"Most basic version of an area chart made with react and d3.js",img:"area-chart-basic.png",alt:"Picture of a basic area chart made with React and D3"},{link:"/stacked-area-plot",title:"Basis stacked area chart",description:"Most basic version of a stacked area chart. Explains how to use the stack() function of d3.js",img:"stacked-area-plot-basic.png",alt:"picture of a basic stacked area plot made with react"},{link:"/streamchart",title:"Basic Streamgraph",description:"Most basic streamgraph one can build using d3 and react",img:"streamgraph-basic.png",alt:"Picture of a basic streamgraph made using Reacrt and d3.js"},{link:"/streamchart#hover&effect",title:"Streamgraph with hover effect",description:"How to add a hover effect on a streamgraph to highlight a group",img:"streamgraph-hover-effect.gif",alt:"GIF of a streamgraph react component that supports hover effect"},{link:"/streamchart#transition",title:"Offset and Smoothing transition",description:"An interactive streamgraph example showing how to animate transition between the chart stacking features.",img:"streamgraph-offset-type-transition.gif",alt:"GIF of a streamgraph"},{link:"/streamchart#application",title:"Streamgraph application",description:"Streamgraph with a slider to zoom on a time stamp and with interactive inline legends",img:"streamgraph-application.gif",alt:"GIF of a streamgraph with multiple interactive features"},{link:"/circular-packing",title:"Most basic circular packing chart",description:"The most basic circular packing chart one can make using d3.js and React.",img:"circle-pack-basic.png",alt:"Picture of a very basic circle packing chart"},{link:"/circular-packing",title:"Circular packing: 2 levels of hierarchy",description:"A simple circular packing chart with 2 levels of hierarchy built with React and d3.",img:"circle-pack-2-levels.png",alt:"Picture of a very basic circle packing chart with 2 levels of hierarchy"},{link:"/example/circle-packing-with-d3-force",title:"Circle Pack with d3-force",description:"Another approach to build a circle packing chart using physical forces to compute node positions.",img:"circle-pack-d3-force.png",alt:"Picture of a circle packing chart made using the d3-force plugin"},{link:"/example/arc-diagram-vertical",title:"Vertical arc diagram",description:"The vertical version of the arc diagram is more convenient to display labels",img:"vertical-arc-diagram.png",alt:"Picture of a vertical arc diagram"},{link:"/network-chart#rendering",title:"Most basic network chart",description:"Most basic network chart using the d3-force plugin to apply physical forces.",img:"network-chart-basic.png",alt:"Picture of a very simple network chart built with React and D3.js."},{link:"/network-chart#rendering",title:"Play with forces",description:"A playground to discover the effect of the various forces you can apply to your particles",img:"network-chart-force-playground.png",alt:"Picture of a playground allowing to play with the various d3 forces"},{link:"/example/network-diagram-with-colored-groups",title:"Force directed graph",description:"A force directed network chart showing character co-occurence in les miserables",img:"network-les-miserables.png",alt:"Picture of a force directed network chart showing character co-occurence in les miserables"}]},6395:function(t){t.exports={container:"graphLinkImage_container__vhwty",title:"graphLinkImage_title__zwMK0"}}},function(t){t.O(0,[3996,7875,5660,645,1188,9774,2888,179],function(){return t(t.s=225)}),_N_E=t.O()}]);