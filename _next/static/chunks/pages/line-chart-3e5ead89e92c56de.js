(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[738],{2388:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/line-chart",function(){return i(8504)}])},6820:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var a=i(5893);i(7294);var n=i(8843),o=i(6438);let r=t=>{let{imgLink:e,height:i,opacity:n,children:o}=t;return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{style:{backgroundImage:"url("+e+")",height:i,backgroundAttachment:"fixed",opacity:n,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:o})]})};function s(t){var e;let{chartId:i}=t,s=(null===(e=n.c.find(t=>t.id===i))||void 0===e?void 0:e.label)||"chart";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{id:"inspiration",children:s+" inspiration"}),(0,a.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,a.jsx)("span",{children:s}),", note that"," ",(0,a.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,a.jsx)("div",{className:"border mb-10",children:(0,a.jsx)(r,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,a.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,a.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,a.jsxs)("p",{className:"text-center text-sm",children:[(0,a.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,a.jsx)("span",{children:s})," ","looks good!"]}),(0,a.jsx)(o.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},2450:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var a=i(5893);i(7294);var n=i(2050),o=i(9975),r=i(9942);function s(t){let{images:e}=t,i=n.F.filter(t=>e.includes(t.img)).map((t,e)=>(0,a.jsx)(o.X,{link:t.link,title:t.title,description:(0,a.jsx)("p",{children:t.description}),img:t.img,alt:t.alt},e));return(0,a.jsx)(r.E,{children:i})}},505:function(t,e,i){"use strict";i.d(e,{r:function(){return c}});var a=i(5893),n=i(1664),o=i.n(n),r=i(8843),s=i(88),l=i(3572);let c=t=>{let{chartId:e}=t,i=r.c.filter(t=>t.id===e)[0].label;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{id:"responsiveness",children:"Responsive "+i+" with react"}),(0,a.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,a.jsx)("code",{children:"width"})," and ",(0,a.jsx)("code",{children:"height"})," and will render a ",i," of those dimensions."]}),(0,a.jsxs)("p",{children:["Making the ",i," responsive requires adding a ",(0,a.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,a.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,a.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,a.jsx)(s.U,{startOpen:!1,title:(0,a.jsxs)("span",{children:[(0,a.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,a.jsx)(l.d,{code:h})}),(0,a.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,a.jsx)(o(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})},h='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},9975:function(t,e,i){"use strict";i.d(e,{X:function(){return r}});var a=i(5893),n=i(6395),o=i.n(n);let r=t=>{let{img:e,title:i,description:n,link:r,alt:s}=t;return(0,a.jsxs)("figure",{className:o().container,children:[(0,a.jsx)("img",{src:"/chart/"+e,className:o().image,alt:s}),(0,a.jsxs)("figcaption",{children:[(0,a.jsx)("p",{className:o().title,children:(0,a.jsx)("b",{children:i})}),(0,a.jsx)("div",{className:"font-light",children:n}),(0,a.jsx)("a",{href:r})]})]})}},9942:function(t,e,i){"use strict";i.d(e,{E:function(){return n}});var a=i(5893);i(7294);let n=t=>{let{children:e}=t;return(0,a.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:e})}},8893:function(t,e,i){"use strict";i.d(e,{H:function(){return n}});var a=i(5893);let n=t=>{let{text:e}=t;return(0,a.jsxs)("blockquote",{className:"mt-10 opacity-20",children:[(0,a.jsx)("b",{className:"text-reactGallery mr-4",children:"ToDo"}),e]})}},8504:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return D}});var a=i(5893),n=i(7294),o=i(153),r=i(9965),s=i(7262),l=i(3572),c=i(1122),h=i(1664),d=i.n(h);let p=[{x:1,y:90},{x:2,y:12},{x:3,y:34},{x:4,y:53},{x:5,y:52},{x:6,y:9},{x:7,y:18},{x:8,y:78},{x:9,y:28},{x:10,y:34}];var m=i(7875);let g={top:30,right:30,bottom:50,left:50},u=t=>{let{width:e,height:i,data:o}=t,r=(0,n.useRef)(null),s=e-g.right-g.left,l=i-g.top-g.bottom,[c,h]=m.Wem(o,t=>t.y),d=(0,n.useMemo)(()=>m.BYU().domain([0,h||0]).range([l,0]),[o,i]),[p,u]=m.Wem(o,t=>t.x),x=(0,n.useMemo)(()=>m.BYU().domain([0,u||0]).range([0,s]),[o,e]);(0,n.useEffect)(()=>{let t=m.Ys(r.current);t.selectAll("*").remove();let e=m.LLu(x);t.append("g").attr("transform","translate(0,"+l+")").call(e);let i=m.y4O(d);t.append("g").call(i)},[x,d,l]);let f=m.jvg().x(t=>x(t.x)).y(t=>d(t.y)),b=f(o);return b?(0,a.jsx)("div",{children:(0,a.jsxs)("svg",{width:e,height:i,children:[(0,a.jsx)("g",{width:s,height:l,transform:"translate(".concat([g.left,g.top].join(","),")"),children:(0,a.jsx)("path",{d:b,opacity:1,stroke:"#9a6fb0",fill:"none",strokeWidth:2})}),(0,a.jsx)("g",{width:s,height:l,ref:r,transform:"translate(".concat([g.left,g.top].join(","),")")})]})}):null},x=t=>{let{width:e=700,height:i=400}=t;return(0,a.jsx)(u,{data:p,width:e,height:i})};var f=i(6820),b=i(505);let w=[{x:1,melanie:90,yan:34},{x:2,melanie:12,yan:24},{x:3,melanie:34,yan:14},{x:4,melanie:53,yan:45},{x:5,melanie:52,yan:45},{x:6,melanie:9,yan:67},{x:7,melanie:18,yan:67},{x:8,melanie:78,yan:87},{x:9,melanie:28,yan:87},{x:10,melanie:34,yan:45}];var j=i(2236);let v={top:30,right:30,bottom:50,left:50},k=t=>{let{width:e,height:i,data:o,selectedGroup:r}=t,s=(0,n.useRef)(null),l=e-v.right-v.left,c=i-v.top-v.bottom,h=(0,n.useMemo)(()=>m.BYU().domain([0,100]).range([c,0]),[o,i]),d=(0,n.useMemo)(()=>m.BYU().domain([0,10]).range([0,l]),[o,e]);(0,n.useEffect)(()=>{let t=m.Ys(s.current);t.selectAll("*").remove();let e=m.LLu(d);t.append("g").attr("transform","translate(0,"+c+")").call(e);let i=m.y4O(h);t.append("g").call(i)},[d,h,c]);let p=m.jvg().x(t=>d(t.x)).y(t=>h(t[r])),g=p(o);return g?(0,a.jsx)("div",{children:(0,a.jsxs)("svg",{width:e,height:i,children:[(0,a.jsx)("g",{width:l,height:c,transform:"translate(".concat([v.left,v.top].join(","),")"),children:(0,a.jsx)(y,{path:g,color:"yan"===r?"#69b3a2":"#9a6fb0"})}),(0,a.jsx)("g",{width:l,height:c,ref:s,transform:"translate(".concat([v.left,v.top].join(","),")")})]})}):null},y=t=>{let{path:e,color:i}=t,n=(0,j.q_)({to:{path:e,color:i},config:{friction:100}});return(0,a.jsx)(j.q.path,{d:n.path,fill:"none",stroke:i,strokeWidth:2})},z={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},P=t=>{let{width:e,height:i}=t,[o,r]=(0,n.useState)("melanie");return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{style:{height:50},children:[(0,a.jsx)("button",{style:z,onClick:()=>r("melanie"),children:"Melanie"}),(0,a.jsx)("button",{style:z,onClick:()=>r("yan"),children:"Yan"})]}),(0,a.jsx)(k,{width:e,height:i-50,data:w,selectedGroup:o})]})},R=t=>{let{width:e=700,height:i=400}=t;return(0,a.jsx)(P,{width:e,height:i})};var S=i(88),L=i(6438),B=i(8893),H=i(2450);let I=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["A ",(0,a.jsx)("a",{href:"https://www.data-to-viz.com/graph/line.html",children:"line chart"})," or line graph displays the evolution of one or several numeric variables. This page is a step-by-step guide on how to build your own line chart component for the web, using ",(0,a.jsx)("a",{href:"https://reactjs.org/",children:"React"})," and"," ",(0,a.jsx)("a",{href:"https://d3-graph-gallery.com/line",children:"D3.js"}),"."]}),(0,a.jsxs)("p",{children:["It starts by describing how the ",(0,a.jsx)("b",{children:"data"})," should be organized and how to initialize the ",(0,a.jsx)("b",{children:"react component"}),". It then explains how to compute the scales, and axes. Once this is done, it shows how to render the lines and suggests a few variations. \uD83D\uDE47‍♂️."]})]});function D(){return(0,a.jsxs)(o.A,{title:"Line chart | The React Graph Gallery",seoDescription:"How to build a line chart with React and D3.js. A set of re-usable components coming with editable code and explanations.",children:[(0,a.jsx)(r.Z,{title:"Line chart",description:I,chartType:"line"}),(0,a.jsx)("h2",{id:"data",children:"The Data"})," ",(0,a.jsxs)("p",{children:["The dataset required to build a line chart is usually an array where each item is an object providing the ",(0,a.jsx)("code",{children:"x"})," and the"," ",(0,a.jsx)("code",{children:"y"})," values of the data point."]}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"Here is a minimal example:"}),(0,a.jsx)(l.d,{code:T}),(0,a.jsxs)("p",{children:[(0,a.jsx)("u",{children:"Note"}),": if your data is in ",(0,a.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,a.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,a.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"here"}),"."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("u",{children:"Note"}),": a line chart is often made to represent ",(0,a.jsx)("b",{children:"time"}),". If your ",(0,a.jsx)("code",{children:"x"})," property is a ",(0,a.jsx)("b",{children:"date"}),", please visit the"," ",(0,a.jsx)(d(),{href:"/timeseries",children:"timeseries"})," section."]}),(0,a.jsx)(L.J,{href:"/timeseries",size:"sm",isFilled:!0,children:"Timeseries section"}),(0,a.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,a.jsxs)("p",{children:["The goal here is to create a ",(0,a.jsx)("code",{children:"LineChart"})," component that will be stored in a ",(0,a.jsx)("code",{children:"LineChart.tsx"})," file. This component requires 3 props to render: a ",(0,a.jsx)("code",{children:"width"}),", a ",(0,a.jsx)("code",{children:"height"}),", and some"," ",(0,a.jsx)("code",{children:"data"}),"."]}),(0,a.jsxs)("p",{children:["The shape of the ",(0,a.jsx)("code",{children:"data"})," is described above. The"," ",(0,a.jsx)("code",{children:"width"})," and ",(0,a.jsx)("code",{children:"height"})," will be used to render an"," ",(0,a.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the LineChart."]}),(0,a.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our"," ",(0,a.jsx)("code",{children:"LineChart"})," component:"]}),(0,a.jsx)(l.d,{code:M}),(0,a.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the SVG ",(0,a.jsx)("code",{children:"path"}),", but it's React that will render them in the ",(0,a.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,a.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,a.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,a.jsx)("h2",{id:"scales & axes",children:"Scales and Axes"}),(0,a.jsxs)("p",{children:["Like for many charts, everything starts with ",(0,a.jsx)("b",{children:"scales"}),". A scale is a"," ",(0,a.jsx)("b",{children:"function"})," that transform the value of a data point in a position in ",(0,a.jsx)("b",{children:"pixel"}),"."]}),(0,a.jsxs)("p",{children:["Two scales are required here. One for the X axis, and one for the Y axis. They are both ",(0,a.jsx)("b",{children:"linear"})," scales."]}),(0,a.jsxs)("p",{children:["This concept of scale is thoroughly described in other chart type pages like for the ",(0,a.jsx)(d(),{href:"/scatter-plot",children:"scatterplot"})," so I won't repeat it here. Also, dealing with the ",(0,a.jsx)("code",{children:"Date"})," format shoud drive you to the ",(0,a.jsx)(d(),{href:"/timeseries",children:"timeseries section"}),"."]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(L.J,{href:"/scatter-plot",size:"sm",children:"Scatterplot"}),(0,a.jsx)(L.J,{href:"/timeseries",size:"sm",isFilled:!0,children:"Timeseries"})]}),(0,a.jsxs)("h2",{id:"d3.line()",children:["The ",(0,a.jsx)("code",{children:"d3.line()"})," function"]}),(0,a.jsxs)("p",{children:["From the dataset described above, we want to draw a line in SVG. In the DOM this is done using a ",(0,a.jsx)("code",{children:"path"})," element that has a"," ",(0,a.jsx)("code",{children:"d"})," attribute."]}),(0,a.jsxs)("p",{children:["Fortunately, d3.js offers the ",(0,a.jsx)("code",{children:"d3.line()"})," function that helps us doing this. ",(0,a.jsx)("code",{children:"d3.line()"})," is a function that returns a function. It can be invoked this way:"]}),(0,a.jsx)(l.d,{code:A}),(0,a.jsxs)("p",{children:["Here 2 ",(0,a.jsx)("b",{children:"accessor functions"})," are provided. An accessor function tells to d3 how to find the position in pixel of a datapoint based on an item of the initial dataset."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("code",{children:"lineBuilder"})," is now a function that expects a dataset as input and returns a SVG ",(0,a.jsx)("code",{children:"path"})," from it."," "]})," ",(0,a.jsx)(l.d,{code:C}),(0,a.jsxs)("p",{children:[" ","This path can easily be plotted as shown in the following section. \uD83C\uDF89"]}),(0,a.jsx)("h2",{id:"basic",children:"Most basic line chart"}),(0,a.jsxs)("p",{children:["Most of the job is done already. It is just a matter of passing the"," ",(0,a.jsx)("code",{children:"path"})," computed above to the SVG element. Something like this:"]}),(0,a.jsx)(l.d,{code:N}),(0,a.jsx)("p",{children:"Leading to our first line chart! \uD83D\uDD25"}),(0,a.jsx)(c.$,{vizName:"LineChartBasic",VizComponent:x,height:500,maxWidth:600,caption:"Most basic line chart made with react (rendering) and d3.js (path computation)"}),(0,a.jsxs)("p",{children:["Note: you can compare this with a"," ",(0,a.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"d3.js only approach"})]}),(0,a.jsx)(b.r,{chartId:"line"}),(0,a.jsx)(f.Z,{chartId:"line"}),(0,a.jsx)("h2",{id:"transition",children:"Transition"}),(0,a.jsxs)("p",{children:["How can we ",(0,a.jsx)("b",{children:"smoothly animate"})," the transition between 2 datasets on a line chart? Click on the buttons on top of the chart below to trigger an animation between 2 groups of a dataset."]}),(0,a.jsxs)("p",{children:["This is possible thanks to the"," ",(0,a.jsx)("a",{href:"https://react-spring.dev/",children:"react spring"})," library. Basically, instead of rendering usual a ",(0,a.jsx)("code",{children:"path"})," element, the library provides an ",(0,a.jsx)("code",{children:"animated.path"})," element, that is linked to a"," ",(0,a.jsx)("code",{children:"useSpring"})," hook."]}),(0,a.jsxs)("p",{children:["This is what the ",(0,a.jsx)("code",{children:"LineItem"})," component I use looks like:"]}),(0,a.jsx)(S.U,{startOpen:!1,title:(0,a.jsxs)("span",{children:[(0,a.jsx)("code",{children:"LineItem"}),": a component that animates the transition of a"," ",(0,a.jsx)("code",{children:"path"})]}),children:(0,a.jsx)(l.d,{code:F})}),(0,a.jsx)(c.$,{vizName:"LineChartDatasetTransition",VizComponent:R,height:400,maxWidth:600,caption:"Click on the buttons to trigger a smooth transition between the 2 line charts."}),(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"Animation"})," in dataviz using React is a ",(0,a.jsx)("b",{children:"big"})," topic. It's impossible to go in-depth here! I will publish a dedicated blog post on the topic soon. Please ",(0,a.jsx)(d(),{href:"subscribe",children:"subscribe"})," to the newsletter if you want to be notified."]}),(0,a.jsx)("h2",{id:"variation",children:"Variations"}),(0,a.jsxs)("p",{children:["You now have the basic understanding on how to build a ",(0,a.jsx)("b",{children:"basic"})," line chart component with React and d3.js. Below are a few examples showing how to build more ",(0,a.jsx)("b",{children:"complex"})," graphs based on those principles."]}),(0,a.jsx)(H.Z,{images:["line-chart-synced-cursor.gif","timeseries-moving-average.png"]}),(0,a.jsx)("h2",{id:"next",children:"Next"}),(0,a.jsxs)("p",{children:["The"," ",(0,a.jsx)("a",{href:"https://www.react-graph-gallery.com",children:"react graph gallery"})," is under heavy development. Here is a list of things that will be added soon."]}),(0,a.jsx)(B.H,{text:"How to add a tooltip"}),(0,a.jsx)(B.H,{text:"Multi groups line charts aka Spaghetti chart"}),(0,a.jsx)(B.H,{text:"Sync with a bar chart"}),(0,a.jsx)(B.H,{text:"Dual Y Axis"}),(0,a.jsx)(B.H,{text:"Inline legend with Reppel"}),(0,a.jsx)("p",{children:(0,a.jsx)("br",{})})," ",(0,a.jsx)("p",{children:"Subscribe to the gallery to know when it is ready!"}),(0,a.jsx)(L.J,{isFilled:!0,size:"sm",href:"Subscribe",children:"Subscribe"}),(0,a.jsx)("p",{children:(0,a.jsx)("br",{})})," ",(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,a.jsx)(s.Z,{chartFamily:"evolution"}),(0,a.jsx)("div",{className:"mt-20"})]})}let T="\nconst data = [\n  {x:1, y: 90},\n  {x: 2, y: 12},\n  {x: 3, y: 34},\n  {x: 4, y: 53},\n  {x: 5, y: 98},\n]\n".trim(),M='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype LineChartProps = {\n  width: number;\n  height: number;\n  data: {x: number, y: number}[];\n};\n\nexport const LineChart = ({ width, height, data }: LineChartProps) => {\n\n  // read the data\n  // build the scales and axes\n  // build the lines\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render axes\n        // render all the <path>\n      </svg>\n    </div>\n  );\n};\n'.trim(),A="\nconst lineBuilder = d3\n  .line()\n  .x((d) => xScale(d.x))\n  .y((d) => yScale(d.y));\n".trim(),C="\nconst linePath = lineBuilder(data);\n\n// console.log(linePath)\n// 'M31.02,26.99 L63.02,59.9 L287.1,194.4 L319,178.2'\n".trim(),N='\n<svg width={width} height={height}>\n  <g ...some translation >\n    <path\n      d={linePath}\n      stroke="#9a6fb0"\n      fill="none"\n      strokeWidth={2}\n    />\n  </g>\n</svg>\n'.trim(),F='\ntype LineItemProps = {\n  path: string;\n  color: string;\n};\n\nconst LineItem = ({ path, color }: LineItemProps) => {\n  const springProps = useSpring({\n    to: {\n      path,\n      color,\n    },\n    config: {\n      friction: 100,\n    },\n  });\n\n  return (\n    <animated.path\n      d={springProps.path}\n      fill={"none"}\n      stroke={color}\n      strokeWidth={2}\n    />\n  );\n};'.trim()},2050:function(t,e,i){"use strict";i.d(e,{F:function(){return a}});let a=[{link:"/scatter-plot#scales%20and%20axes",title:"Scales and axes",description:"How to map your data in a 2d space, and how to draw the axes",img:"axis-basic-demo.png",alt:"Picture of an empty chart area with X and Y axes"},{link:"/scatterplot",title:"Scatterplot Hover effect",description:"How to add a hover effect to highlight a group on a scatterplot",img:"scatterplotHoverEffect.gif",alt:"GIF of a scatterplot with hover effect"},{link:"/scatter-plot#circles",title:"Basic scatter plot",description:"Add circles to get a basic scatter plot",img:"scatterplot-most-basic.png",alt:"Most basic scatterplot made with react and d3"},{link:"/scatter-plot#tooltip",title:"Add tooltip",description:"Get more details about each datapoint by adding a tooltip on hover",img:"scatterplot-tooltip.png",alt:"Scatterplot with tooltip made with react and d3"},{link:"/scatter-plot#hover%20effect",title:"Add a hover effect",description:"Highlight a specific group on hover",img:"scatterplot-hover-effect.png",alt:"Scatterplot with hover effect made with react and d3"},{link:"/scatter-plot#real%20life",title:"Real life use-case",description:"Reproduction of a data wrapper chart representing countries CO2 data",img:"scatterplot-co2.png",alt:"Real life example of a scatterplot made with react and d3"},{link:"/example/scatterplot-tooltip-with-voronoi-for-closest-point-detection",title:"Closest point detection with Voronoi",description:"Using a voronoi diagram in the scatterplot background is a smart way to efficiently find the mouse closest point",img:"scatterplot-tooltip-with-voronoi-for-closest-point-detection.gif",alt:"gif of a scatterplot with voronoi diagram for closest point detection"},{link:"/example/scatterplot-basic-canvas",title:"Scatterplot in Canvas",description:"Learn how to render a scatterplot in canvas to improve performances",img:"scatterplot-basic-canvas.png",alt:"a scatterplot made with react and rendered in canvas"},{link:"/heatmap",title:"Basic heatmap",description:"Most basic heatmap",img:"heatmapBasic.png",alt:"Picture of a simple heatmap made with react and d3.js"},{link:"/heatmap#tooltip",title:"Heatmap with tooltip",description:"Learn how to add a tooltip to a heatmap with react",img:"heatmapTooltip.png",alt:"Picture of a heatmap with a tooltip that appears on hover"},{link:"/heatmap#legend",title:"Continuous color scale",description:"How to add a color legend to your chart that uses a continuous color scale",img:"continuousColorLegend.png",alt:"Picture of a continuous color scale built with d3.js"},{link:"/heatmap#application",title:"Vaccination heatmap",description:"Reproduction of a famous vaccination heatmap using d3 and react",img:"heatmapVaccination.png",alt:"Picture of a heatmap showing the effect of vaccination, built with react and d3"},{link:"/correlogram",title:"Basic correlogram",description:"Learn how to build a correlogram with react and d3",img:"correlogramBasic.png",alt:"Picture of a correlogram built with react and d3"},{link:"/bubble-plot",title:"Bubble plot",description:"Learn how to build a bubble plot with react and d3.js",img:"bubble-plot-with-legend.png",alt:"Picture of a simple bubble plot with a legend made with react and d3.js"},{link:"/bubble-plot#transition",title:"Bubble plot data set transition",description:"How to smoothly animate the transition between dataset",img:"bubble-plot-dataset-transition.gif",alt:"GIF of a bubble plot smoothly transitioning data"},{link:"/2d-density-plot",title:"Hexbin chart",description:"A hexbin chart split the figure in hexagons to show a 2d density",img:"2d-density-plot.png",alt:"Picture of a hexbin chart made with React and d3.js"},{link:"/connected-scatter-plot",title:"Simple connected scatterplot",description:"A very simple connected scatter plot showing the evolution of 1 numeric variable",img:"connected-scatterplot-basic.png",alt:"Picture of a connected scatter plot made with React and d3.js"},{link:"/example/boxplot-jitter",title:"Boxplot with jitter",description:"Add individual data points using jitter on top of the boxplot",img:"boxplot-jitter.png",alt:"Picture of a boxplot with jitter built using react and d3.js"},{link:"/boxplot#box%20component",title:"Boxplot shape",description:"How to build a boxplot shape in SVG",img:"boxplotShape.png",alt:"Picture of a box component, allowing to build a boxplot later on"},{link:"/boxplot",title:"Basic boxplot",description:"How to build a basic boxplot with react",img:"boxplotBasic.png",alt:"Picture of a basic boxplot built with react and d3"},{link:"/example/boxplot-horizontal",title:"Horizontal boxplot",description:"How to build a horizontal boxplot with react",img:"boxplot-horizontal.png",alt:"Picture of a horizontal boxplot built with react and d3"},{link:"/histogram",title:"Histogram",description:"Learn how to build a histogram with react and d3.js",img:"histogram-basic.png",alt:"Picture of a simple histogram made with react and d3.js"},{link:"/histogram#transition",title:"Histogram dataset transition",description:"How to animate the transition between datasets",img:"histogram-dataset-transition.gif",alt:"GIF of a histogram with animated data transition"},{link:"/example/histogram-mirror",title:"Mirror histogram",description:"Create a mirror histogram to compare the distribution of 2 groups in a dataset",img:"histogram-mirror.png",alt:"picture of a mirror histogram made with react and d3.js"},{link:"/example/histogram-small-multiple",title:"Small multiple",description:"Create one panel per group to show its distribution separately",img:"histogram-small-multiple.png",alt:"Picture of a histogram with small multiple built with react and d3.js"},{link:"/example/histogram-with-several-groups",title:"Multiple groups",description:"A histogram with <b>multiple</b> groups displayed on the same axis.",img:"histogram-with-several-groups.png",alt:"Picture of a histogram with multiple groups built with react and d3.js"},{link:"/violin-plot",title:"Violin to Boxplot transition",description:"Using shape morphism to smoothly transition from a boxplot to a violin and reverse",img:"violinBoxplotTransition.png",alt:"gif of a violin plot smoothly transitioning to a boxplot using shape morphism"},{link:"/violin-plot#bucket%20size",title:"Bucket size effect",description:"Interactive example showing the bucket size effect on a violin chart",img:"violin-bucket-size-effect.gif",alt:"GIF showing a violin plot with varying bucket size"},{link:"/violin-plot#violin%20component",title:"Violin shape",description:"How to build the shape of a violin with SVG",img:"violinShape.png",alt:"Picture of a violin shape built with react and d3"},{link:"/violin-plot",title:"Boxplot to Violin plot",description:"Interactive example showing the difference between a boxplot and a violin",img:"boxplot-violin-transition.gif",alt:"GIF showing a mirror transition between a boxplot and a violin plot"},{link:"/violin-plot",title:"Basic violin plot",description:"Learn how to build a basic violin chart with d3 and react",img:"violinBasic.png",alt:"Picture of a basic violin chart built in react"},{link:"/violin-plot#bucket%20size",title:"Violin with variable bucket size",description:"A violin plot with a slider to change the bucket size in use",img:"violinBucketSize.png",alt:"Picture of a violin plot with variable bucket size"},{link:"/barplot",title:"Basic barplot",description:"Most basic barplot built with React and d3",img:"barplot-basic.png",alt:"Picture of a horizontal barplot made with React and d3"},{link:"/example/barplot-data-transition-animation",title:"Barplot dataset transition",description:"How to smoothly animate the transition between dataset",img:"barplotDatasetAnimation.gif",alt:"GIF of a data update on a React barplot"},{link:"/example/barplot-stacked-horizontal",title:"Horizontal Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-horizontal.png",alt:"Picture of a stacked barchart made with react and d3"},{link:"/example/barplot-stacked-vertical",title:"Vertical Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-vertical.png",alt:"Picture of a vertical stacked barchart made with react and d3"},{link:"/density-plot",title:"Basic density plot",description:"Most basic density plot built with React and d3",img:"densityBasic.png",alt:"Picture of a basic density plot built with React and d3"},{link:"/density-plot#variations",title:"Density plot with multiple groups",description:"How to add several groups on the same density plot",img:"densityMultipleGroups.png",alt:"Picture of a density plot with multiple groups"},{link:"/ridgeline",title:"Basic ridgeline chart",description:"Most basic version of a ridgeline plot",img:"ridgelineBasic.png",alt:"Picture of a basic ridgeline chart built with react and d3"},{link:"/line-chart#basic",title:"Most basic line chart",description:"The most basic line chart one can make using d3 and react",img:"line-chart-basic.png",alt:"Picture of a very simple line chart made with react and d3"},{link:"/line-chart#transition",title:"Line chart with dataset transition",description:"How to smoothly animate the transition between 2 dataset on a line chart",img:"line-chart-data-transition.gif",alt:"GIF of a line chart that animates between 2 dataset"},{link:"/example/line-chart-synchronized-cursors",title:"Synchronized cursors",description:"Add a cursor synchronized on all your charts",img:"line-chart-synced-cursor.gif",alt:"line charts with synchronized cursors"},{link:"/area-plot",title:"Basic Area Chart",description:"Most basic version of an area chart made with react and d3.js",img:"area-chart-basic.png",alt:"Picture of a basic area chart made with React and D3"},{link:"/stacked-area-plot",title:"Basis stacked area chart",description:"Most basic version of a stacked area chart. Explains how to use the stack() function of d3.js",img:"stacked-area-plot-basic.png",alt:"picture of a basic stacked area plot made with react"},{link:"/streamchart",title:"Basic Streamgraph",description:"Most basic streamgraph one can build using d3 and react",img:"streamgraph-basic.png",alt:"Picture of a basic streamgraph made using Reacrt and d3.js"},{link:"/streamchart#hover&effect",title:"Streamgraph with hover effect",description:"How to add a hover effect on a streamgraph to highlight a group",img:"streamgraph-hover-effect.gif",alt:"GIF of a streamgraph react component that supports hover effect"},{link:"/streamchart#transition",title:"Offset and Smoothing transition",description:"An interactive streamgraph example showing how to animate transition between the chart stacking features.",img:"streamgraph-offset-type-transition.gif",alt:"GIF of a streamgraph"},{link:"/streamchart#application",title:"Streamgraph application",description:"Streamgraph with a slider to zoom on a time stamp and with interactive inline legends",img:"streamgraph-application.gif",alt:"GIF of a streamgraph with multiple interactive features"},{link:"/example/timeseries-moving-average",title:"Timeseries with moving average",description:"A scatterplot used for timeseries, with the moving average shown as a line chart on top.",img:"timeseries-moving-average.png",alt:"Picture of a timeseries chart made with React and D3.js: scatterplot and line chart in use."},{link:"/circular-packing",title:"Most basic circular packing chart",description:"The most basic circular packing chart one can make using d3.js and React.",img:"circle-pack-basic.png",alt:"Picture of a very basic circle packing chart"},{link:"/circular-packing",title:"Circular packing: 2 levels of hierarchy",description:"A simple circular packing chart with 2 levels of hierarchy built with React and d3.",img:"circle-pack-2-levels.png",alt:"Picture of a very basic circle packing chart with 2 levels of hierarchy"},{link:"/example/circle-packing-with-d3-force",title:"Circle Pack with d3-force",description:"Another approach to build a circle packing chart using physical forces to compute node positions.",img:"circle-pack-d3-force.png",alt:"Picture of a circle packing chart made using the d3-force plugin"},{link:"/example/arc-diagram-vertical",title:"Vertical arc diagram",description:"The vertical version of the arc diagram is more convenient to display labels",img:"vertical-arc-diagram.png",alt:"Picture of a vertical arc diagram"},{link:"/network-chart#rendering",title:"Most basic network chart",description:"Most basic network chart using the d3-force plugin to apply physical forces.",img:"network-chart-basic.png",alt:"Picture of a very simple network chart built with React and D3.js."},{link:"/network-chart#rendering",title:"Play with forces",description:"A playground to discover the effect of the various forces you can apply to your particles",img:"network-chart-force-playground.png",alt:"Picture of a playground allowing to play with the various d3 forces"},{link:"/example/network-diagram-with-colored-groups",title:"Force directed graph",description:"A force directed network chart showing character co-occurence in les miserables",img:"network-les-miserables.png",alt:"Picture of a force directed network chart showing character co-occurence in les miserables"}]},6395:function(t){t.exports={container:"graphLinkImage_container__vhwty",title:"graphLinkImage_title__zwMK0"}}},function(t){t.O(0,[3996,7875,5660,2236,645,1188,9774,2888,179],function(){return t(t.s=2388)}),_N_E=t.O()}]);