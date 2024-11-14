(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[738],{52388:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/line-chart",function(){return n(18953)}])},52450:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(85893);n(67294);var s=n(92050),r=n(49975),a=n(59942);function o(e){let{images:t}=e,n=s.F.filter(e=>t.includes(e.img)).map((e,t)=>(0,i.jsx)(r.X,{link:e.link,title:e.title,description:(0,i.jsx)("p",{children:e.description}),img:e.img,alt:e.alt},t));return(0,i.jsx)(a.E,{children:n})}},90505:function(e,t,n){"use strict";n.d(t,{r:function(){return h}});var i=n(85893),s=n(41664),r=n.n(s),a=n(28843),o=n(66717),l=n(3572);let h=e=>{let{chartId:t}=e,n=a.c.filter(e=>e.id===t)[0].label;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{id:"responsiveness",children:"Responsive "+n+" with react"}),(0,i.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,i.jsx)("code",{children:"width"})," and ",(0,i.jsx)("code",{children:"height"})," and will render a ",n," of those dimensions."]}),(0,i.jsxs)("p",{children:["Making the ",n," responsive requires adding a ",(0,i.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,i.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,i.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,i.jsx)(o.U,{title:(0,i.jsxs)("span",{children:[(0,i.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,i.jsx)(l.d,{code:d})}),(0,i.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,i.jsx)(r(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})},d='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},66717:function(e,t,n){"use strict";n.d(t,{U:function(){return s}});var i=n(85893);let s=e=>{let{title:t,children:n}=e;return(0,i.jsxs)("details",{className:"bg-gray-50 py-2 px-4 rounded-md my-2",children:[(0,i.jsx)("summary",{className:"cursor-pointer",children:t}),(0,i.jsx)("div",{className:"pt-4",children:n})]})}},18893:function(e,t,n){"use strict";n.d(t,{H:function(){return s}});var i=n(85893);let s=e=>{let{text:t}=e;return(0,i.jsxs)("blockquote",{className:"mt-10 opacity-20",children:[(0,i.jsx)("b",{className:"text-reactGallery mr-4",children:"ToDo"}),t]})}},18953:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var i=n(85893),s=n(67294),r=n(80153),a=n(43710),o=n(61651),l=n(3572),h=n(81122),d=n(41664),c=n.n(d);let x=[{x:1,y:90},{x:2,y:12},{x:3,y:34},{x:4,y:53},{x:5,y:52},{x:6,y:9},{x:7,y:18},{x:8,y:78},{x:9,y:28},{x:10,y:34}];var p=n(2354);let u={top:30,right:30,bottom:50,left:50},j=e=>{let{width:t,height:n,data:r}=e,a=(0,s.useRef)(null),o=t-u.right-u.left,l=n-u.top-u.bottom,[h,d]=p.Wem(r,e=>e.y),c=(0,s.useMemo)(()=>p.BYU().domain([0,d||0]).range([l,0]),[r,n]),[x,j]=p.Wem(r,e=>e.x),m=(0,s.useMemo)(()=>p.BYU().domain([0,j||0]).range([0,o]),[r,t]);(0,s.useEffect)(()=>{let e=p.Ys(a.current);e.selectAll("*").remove();let t=p.LLu(m);e.append("g").attr("transform","translate(0,"+l+")").call(t);let n=p.y4O(c);e.append("g").call(n)},[m,c,l]);let g=p.jvg().x(e=>m(e.x)).y(e=>c(e.y)),f=g(r);return f?(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:t,height:n,children:[(0,i.jsx)("g",{width:o,height:l,transform:"translate(".concat([u.left,u.top].join(","),")"),children:(0,i.jsx)("path",{d:f,opacity:1,stroke:"#9a6fb0",fill:"none",strokeWidth:2})}),(0,i.jsx)("g",{width:o,height:l,ref:a,transform:"translate(".concat([u.left,u.top].join(","),")")})]})}):null},m=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(j,{data:x,width:t,height:n})};var g=n(26820),f=n(90505),b=n(73367),w=n(66717),y=n(56438),v=n(18893),k=n(52450);let L=[{x:"2023-01-01",y:90},{x:"2023-02-01",y:12},{x:"2023-03-01",y:34},{x:"2023-04-01",y:53},{x:"2023-05-01",y:52},{x:"2023-06-01",y:9},{x:"2023-07-01",y:18},{x:"2023-08-01",y:78},{x:"2023-09-01",y:28},{x:"2023-12-01",y:34}],D=e=>{let{xScale:t,width:n}=e,r=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e=p.Ys(r.current);e.selectAll("*").remove();let n=p.LLu(t);e.append("g").call(n);let i=p.sPX().on("zoom",function(i){let s=i.transform;t.domain(s.rescaleX(t).domain()),e.select("g").call(n)});return e.call(i),()=>{e.on(".zoom",null)}},[t]),(0,i.jsx)("g",{width:n,ref:r})},T={top:30,right:30,bottom:50,left:50},z=e=>{let{width:t,height:n,data:r}=e,a=t-T.right-T.left,o=n-T.top-T.bottom,[l,h]=(0,s.useState)(!1),[d,c]=(0,s.useState)(null),[x,u]=(0,s.useState)(null),j=p.Fp7(r,e=>e.y),m=p.BYU().domain([0,j||0]).range([o,0]),g=p.Z1g("%Y-%m-%d"),f=r.map(e=>g(e.x)).filter(e=>e instanceof Date),b=p.Wem(f),[w,y]=(0,s.useState)([b]),v=p.Xf().domain(w).range([0,a]),k=p.jvg().x(e=>v(g(e.x))).y(e=>m(e.y)),L=k(r);return L?(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:t,height:n,children:[(0,i.jsx)("g",{width:a,height:o,transform:"translate(".concat([T.left,T.top].join(","),")"),children:(0,i.jsx)("path",{d:L,opacity:1,stroke:"#9a6fb0",fill:"none",strokeWidth:2})}),(0,i.jsx)("g",{transform:"translate(".concat([T.left,o+T.top].join(","),")"),children:(0,i.jsx)(D,{xScale:v,width:a})}),(0,i.jsx)("rect",{width:a,height:o,fill:"transparent",onMouseDown:e=>{h(!0),c(e.nativeEvent.offsetX),u(null)},onMouseMove:e=>{l&&null!==d&&u(e.nativeEvent.offsetX)},onMouseUp:()=>{if(l&&null!==d&&null!==x){let e=[v.invert(Math.min(d,x)),v.invert(Math.max(d,x))];y(e)}h(!1),c(null),u(null)}}),l&&null!==d&&null!==x&&(0,i.jsx)("rect",{x:Math.min(d,x),width:Math.abs(x-d),height:o,fill:"rgba(154, 111, 176, 0.3)",pointerEvents:"none"})]})}):null},S=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(z,{data:L,width:t,height:n})},M=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["A ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/graph/line.html",children:"line chart"})," or line graph displays the evolution of one or several numeric variables. This page is a step-by-step guide on how to build your own line chart component for the web, using ",(0,i.jsx)("a",{href:"https://reactjs.org/",children:"React"})," and"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/line",children:"D3.js"}),"."]}),(0,i.jsxs)("p",{children:["It starts by describing how the ",(0,i.jsx)("b",{children:"data"})," should be organized and how to initialize the ",(0,i.jsx)("b",{children:"react component"}),". It then explains how to compute the scales, and axes. Once this is done, it shows how to render the lines and suggests a few variations. \uD83D\uDE47‍♂️."]})]});function R(){return(0,i.jsxs)(r.A,{title:"Line chart | The React Graph Gallery",seoDescription:"How to build a line chart with React and D3.js. A set of re-usable components coming with editable code and explanations.",children:[(0,i.jsx)(a.Z,{title:"Line chart",description:M,chartType:"line"}),(0,i.jsx)("h2",{id:"data",children:"The Data"})," ",(0,i.jsxs)("p",{children:["The dataset required to build a line chart is usually an array where each item is an object providing the ",(0,i.jsx)("code",{children:"x"})," and the"," ",(0,i.jsx)("code",{children:"y"})," values of the data point."]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Here is a minimal example:"}),(0,i.jsx)(l.d,{code:C}),(0,i.jsxs)("p",{children:[(0,i.jsx)("u",{children:"Note"}),": if your data is in ",(0,i.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,i.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"here"}),"."]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("u",{children:"Note"}),": a line chart is often made to represent ",(0,i.jsx)("b",{children:"time"}),". If your ",(0,i.jsx)("code",{children:"x"})," property is a ",(0,i.jsx)("b",{children:"date"}),", please visit the"," ",(0,i.jsx)(c(),{href:"/timeseries",children:"timeseries"})," section."]}),(0,i.jsx)(y.J,{href:"/timeseries",size:"sm",isFilled:!0,children:"Timeseries section"}),(0,i.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,i.jsxs)("p",{children:["The goal here is to create a ",(0,i.jsx)("code",{children:"LineChart"})," component that will be stored in a ",(0,i.jsx)("code",{children:"LineChart.tsx"})," file. This component requires 3 props to render: a ",(0,i.jsx)("code",{children:"width"}),", a ",(0,i.jsx)("code",{children:"height"}),", and some"," ",(0,i.jsx)("code",{children:"data"}),"."]}),(0,i.jsxs)("p",{children:["The shape of the ",(0,i.jsx)("code",{children:"data"})," is described above. The"," ",(0,i.jsx)("code",{children:"width"})," and ",(0,i.jsx)("code",{children:"height"})," will be used to render an"," ",(0,i.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the LineChart."]}),(0,i.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our"," ",(0,i.jsx)("code",{children:"LineChart"})," component:"]}),(0,i.jsx)(l.d,{code:I}),(0,i.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the SVG ",(0,i.jsx)("code",{children:"path"}),", but it's React that will render them in the ",(0,i.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,i.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,i.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,i.jsx)("h2",{id:"scales & axes",children:"Scales and Axes"}),(0,i.jsxs)("p",{children:["Like for many charts, everything starts with ",(0,i.jsx)("b",{children:"scales"}),". A scale is a"," ",(0,i.jsx)("b",{children:"function"})," that transform the value of a data point in a position in ",(0,i.jsx)("b",{children:"pixel"}),"."]}),(0,i.jsxs)("p",{children:["Two scales are required here. One for the X axis, and one for the Y axis. They are both ",(0,i.jsx)("b",{children:"linear"})," scales."]}),(0,i.jsxs)("p",{children:["This concept of scale is thoroughly described in other chart type pages like for the ",(0,i.jsx)(c(),{href:"/scatter-plot",children:"scatterplot"})," so I won't repeat it here. Also, dealing with the ",(0,i.jsx)("code",{children:"Date"})," format shoud drive you to the ",(0,i.jsx)(c(),{href:"/timeseries",children:"timeseries section"}),"."]}),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(y.J,{href:"/scatter-plot",size:"sm",children:"Scatterplot"}),(0,i.jsx)(y.J,{href:"/timeseries",size:"sm",isFilled:!0,children:"Timeseries"})]}),(0,i.jsxs)("h2",{id:"d3.line()",children:["The ",(0,i.jsx)("code",{children:"d3.line()"})," function"]}),(0,i.jsxs)("p",{children:["From the dataset described above, we want to draw a line in SVG. In the DOM this is done using a ",(0,i.jsx)("code",{children:"path"})," element that has a"," ",(0,i.jsx)("code",{children:"d"})," attribute."]}),(0,i.jsxs)("p",{children:["Fortunately, d3.js offers the ",(0,i.jsx)("code",{children:"d3.line()"})," function that helps us doing this. ",(0,i.jsx)("code",{children:"d3.line()"})," is a function that returns a function. It can be invoked this way:"]}),(0,i.jsx)(l.d,{code:N}),(0,i.jsxs)("p",{children:["Here 2 ",(0,i.jsx)("b",{children:"accessor functions"})," are provided. An accessor function tells to d3 how to find the position in pixel of a datapoint based on an item of the initial dataset."]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("code",{children:"lineBuilder"})," is now a function that expects a dataset as input and returns a SVG ",(0,i.jsx)("code",{children:"path"})," from it."," "]})," ",(0,i.jsx)(l.d,{code:E}),(0,i.jsxs)("p",{children:[" ","This path can easily be plotted as shown in the following section. \uD83C\uDF89"]}),(0,i.jsx)("h2",{id:"basic",children:"Most basic line chart"}),(0,i.jsxs)("p",{children:["Most of the job is done already. It is just a matter of passing the"," ",(0,i.jsx)("code",{children:"path"})," computed above to the SVG element. Something like this:"]}),(0,i.jsx)(l.d,{code:H}),(0,i.jsx)("p",{children:"Leading to our first line chart! \uD83D\uDD25"}),(0,i.jsx)(h.$,{vizName:"LineChartBasic",VizComponent:m,height:500,maxWidth:600,caption:"Most basic line chart made with react (rendering) and d3.js (path computation)"}),(0,i.jsxs)("p",{children:["Note: you can compare this with a"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"d3.js only approach"})]}),(0,i.jsx)(f.r,{chartId:"line"}),(0,i.jsx)(g.Z,{chartId:"line"}),(0,i.jsx)("h2",{id:"transition",children:"Transition"}),(0,i.jsxs)("p",{children:["How can we ",(0,i.jsx)("b",{children:"smoothly animate"})," the transition between 2 datasets on a line chart? Click on the buttons on top of the chart below to trigger an animation between 2 groups of a dataset."]}),(0,i.jsxs)("p",{children:["This is possible thanks to the"," ",(0,i.jsx)("a",{href:"https://react-spring.dev/",children:"react spring"})," library. Basically, instead of rendering usual a ",(0,i.jsx)("code",{children:"path"})," element, the library provides an ",(0,i.jsx)("code",{children:"animated.path"})," element, that is linked to a"," ",(0,i.jsx)("code",{children:"useSpring"})," hook."]}),(0,i.jsxs)("p",{children:["This is what the ",(0,i.jsx)("code",{children:"LineItem"})," component I use looks like:"]}),(0,i.jsx)(w.U,{startOpen:!1,title:(0,i.jsxs)("span",{children:[(0,i.jsx)("code",{children:"LineItem"}),": a component that animates the transition of a"," ",(0,i.jsx)("code",{children:"path"})]}),children:(0,i.jsx)(l.d,{code:_})}),(0,i.jsx)(h.$,{vizName:"LineChartDatasetTransition",VizComponent:b.H,height:400,maxWidth:600,caption:"Click on the buttons to trigger a smooth transition between the 2 line charts."}),(0,i.jsxs)("p",{children:[(0,i.jsx)("b",{children:"Animation"})," in dataviz using React is a ",(0,i.jsx)("b",{children:"big"})," topic. It's impossible to go in-depth here! I will publish a dedicated blog post on the topic soon. Please ",(0,i.jsx)(c(),{href:"subscribe",children:"subscribe"})," to the newsletter if you want to be notified."]}),(0,i.jsx)("h2",{id:"variation",children:"Variations"}),(0,i.jsxs)("p",{children:["You now have the basic understanding on how to build a ",(0,i.jsx)("b",{children:"basic"})," line chart component with React and d3.js. Below are a few examples showing how to build more ",(0,i.jsx)("b",{children:"complex"})," graphs based on those principles."]}),(0,i.jsx)(k.Z,{images:["line-chart-synced-cursor.gif","timeseries-moving-average.png","radar-chart-animation.png"]}),(0,i.jsx)("h2",{id:"next",children:"Next"}),(0,i.jsxs)("p",{children:["The"," ",(0,i.jsx)("a",{href:"https://www.react-graph-gallery.com",children:"react graph gallery"})," is under heavy development. Here is a list of things that will be added soon."]}),(0,i.jsx)(v.H,{text:"How to add a tooltip"}),(0,i.jsx)(v.H,{text:"Multi groups line charts aka Spaghetti chart"}),(0,i.jsx)(v.H,{text:"Sync with a bar chart"}),(0,i.jsx)(v.H,{text:"Dual Y Axis"}),(0,i.jsx)(v.H,{text:"Inline legend with Reppel"}),(0,i.jsx)("p",{children:(0,i.jsx)("br",{})})," ",(0,i.jsx)("p",{children:"Subscribe to the gallery to know when it is ready!"}),(0,i.jsx)(y.J,{isFilled:!0,size:"sm",href:"/subscribe",children:"Subscribe"}),(0,i.jsx)("p",{children:(0,i.jsx)("br",{})})," ",(0,i.jsx)(h.$,{vizName:"LineChartPanning",VizComponent:S,height:500,maxWidth:600,caption:"Most basic line chart made with react (rendering) and d3.js (path computation)"}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,i.jsx)(o.Z,{chartFamily:"evolution"}),(0,i.jsx)("div",{className:"mt-20"})]})}let C="\nconst data = [\n  {x:1, y: 90},\n  {x: 2, y: 12},\n  {x: 3, y: 34},\n  {x: 4, y: 53},\n  {x: 5, y: 98},\n]\n".trim(),I='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype LineChartProps = {\n  width: number;\n  height: number;\n  data: {x: number, y: number}[];\n};\n\nexport const LineChart = ({ width, height, data }: LineChartProps) => {\n\n  // read the data\n  // build the scales and axes\n  // build the lines\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render axes\n        // render all the <path>\n      </svg>\n    </div>\n  );\n};\n'.trim(),N="\nconst lineBuilder = d3\n  .line()\n  .x((d) => xScale(d.x))\n  .y((d) => yScale(d.y));\n".trim(),E="\nconst linePath = lineBuilder(data);\n\n// console.log(linePath)\n// 'M31.02,26.99 L63.02,59.9 L287.1,194.4 L319,178.2'\n".trim(),H='\n<svg width={width} height={height}>\n  <g ...some translation >\n    <path\n      d={linePath}\n      stroke="#9a6fb0"\n      fill="none"\n      strokeWidth={2}\n    />\n  </g>\n</svg>\n'.trim(),_='\ntype LineItemProps = {\n  path: string;\n  color: string;\n};\n\nconst LineItem = ({ path, color }: LineItemProps) => {\n  const springProps = useSpring({\n    to: {\n      path,\n      color,\n    },\n    config: {\n      friction: 100,\n    },\n  });\n\n  return (\n    <animated.path\n      d={springProps.path}\n      fill={"none"}\n      stroke={color}\n      strokeWidth={2}\n    />\n  );\n};'.trim()},73367:function(e,t,n){"use strict";n.d(t,{H:function(){return p}});var i=n(85893),s=n(67294);let r=[{x:1,melanie:90,yan:34},{x:2,melanie:12,yan:24},{x:3,melanie:34,yan:14},{x:4,melanie:53,yan:45},{x:5,melanie:52,yan:45},{x:6,melanie:9,yan:67},{x:7,melanie:18,yan:67},{x:8,melanie:78,yan:87},{x:9,melanie:28,yan:87},{x:10,melanie:34,yan:45}];var a=n(2354),o=n(2719);let l={top:30,right:30,bottom:50,left:50},h=e=>{let{width:t,height:n,data:r,selectedGroup:o}=e,h=(0,s.useRef)(null),c=t-l.right-l.left,x=n-l.top-l.bottom,p=(0,s.useMemo)(()=>a.BYU().domain([0,100]).range([x,0]),[r,n]),u=(0,s.useMemo)(()=>a.BYU().domain([0,10]).range([0,c]),[r,t]);(0,s.useEffect)(()=>{let e=a.Ys(h.current);e.selectAll("*").remove();let t=a.LLu(u);e.append("g").attr("transform","translate(0,"+x+")").call(t);let n=a.y4O(p);e.append("g").call(n)},[u,p,x]);let j=a.jvg().x(e=>u(e.x)).y(e=>p(e[o])),m=j(r);return m?(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:t,height:n,children:[(0,i.jsx)("g",{width:c,height:x,transform:"translate(".concat([l.left,l.top].join(","),")"),children:(0,i.jsx)(d,{path:m,color:"yan"===o?"#69b3a2":"#9a6fb0"})}),(0,i.jsx)("g",{width:c,height:x,ref:h,transform:"translate(".concat([l.left,l.top].join(","),")")})]})}):null},d=e=>{let{path:t,color:n}=e,s=(0,o.q_)({to:{path:t,color:n},config:{friction:100}});return(0,i.jsx)(o.q.path,{d:s.path,fill:"none",stroke:n,strokeWidth:2})},c={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},x=e=>{let{width:t,height:n}=e,[a,o]=(0,s.useState)("melanie");return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{height:50},children:[(0,i.jsx)("button",{style:c,onClick:()=>o("melanie"),children:"Melanie"}),(0,i.jsx)("button",{style:c,onClick:()=>o("yan"),children:"Yan"})]}),(0,i.jsx)(h,{width:t,height:n-50,data:r,selectedGroup:a})]})},p=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(x,{width:t,height:n})}}},function(e){e.O(0,[2343,7754,2354,7823,2719,8190,3710,2594,6588,693,9774,2888,179],function(){return e(e.s=52388)}),_N_E=e.O()}]);