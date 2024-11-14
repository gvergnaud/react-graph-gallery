(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3053],{77399:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pie-plot",function(){return n(27660)}])},90505:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var i=n(85893),a=n(41664),s=n.n(a),r=n(28843),o=n(66717),l=n(3572);let c=e=>{let{chartId:t}=e,n=r.c.filter(e=>e.id===t)[0].label;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{id:"responsiveness",children:"Responsive "+n+" with react"}),(0,i.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,i.jsx)("code",{children:"width"})," and ",(0,i.jsx)("code",{children:"height"})," and will render a ",n," of those dimensions."]}),(0,i.jsxs)("p",{children:["Making the ",n," responsive requires adding a ",(0,i.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,i.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,i.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,i.jsx)(o.U,{title:(0,i.jsxs)("span",{children:[(0,i.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,i.jsx)(l.d,{code:h})}),(0,i.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,i.jsx)(s(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})},h='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},66717:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var i=n(85893);let a=e=>{let{title:t,children:n}=e;return(0,i.jsxs)("details",{className:"bg-gray-50 py-2 px-4 rounded-md my-2",children:[(0,i.jsx)("summary",{className:"cursor-pointer",children:t}),(0,i.jsx)("div",{className:"pt-4",children:n})]})}},27660:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var i=n(85893),a=n(67294),s=n(80153),r=n(43710),o=n(81122),l=n(61651),c=n(3572);let h=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98}];var d=n(2354);let u=["#98abc5","#8a89a6","#7b6888","#6b486b","#a05d56"],p=e=>{let{width:t,height:n,data:s}=e,r=Math.min(t,n)/2-30,o=(0,a.useMemo)(()=>{let e=d.ve8().value(e=>e.value);return e(s)},[s]),l=(0,a.useMemo)(()=>{let e=d.Nb1();return o.map(t=>e({innerRadius:0,outerRadius:r,startAngle:t.startAngle,endAngle:t.endAngle}))},[r,o]);return(0,i.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,i.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:l.map((e,t)=>(0,i.jsx)("path",{d:e,fill:u[t]},t))})})},x=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(p,{data:h,width:t,height:n})},m=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:58}],j=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],g=e=>{let{width:t,height:n,data:s}=e,r=Math.min(t-300,n-100)/2,o=(0,a.useMemo)(()=>{let e=d.ve8().value(e=>e.value);return e(s)},[s]),l=d.Nb1(),c=o.map((e,t)=>{let n={innerRadius:0,outerRadius:r,startAngle:e.startAngle,endAngle:e.endAngle},a=l.centroid(n),s=l(n),o={innerRadius:r+20,outerRadius:r+20,startAngle:e.startAngle,endAngle:e.endAngle},c=l.centroid(o),h=c[0]>0,d=c[0]+50*(h?1:-1),u=e.data.name+" ("+e.value+")";return(0,i.jsxs)("g",{children:[(0,i.jsx)("path",{d:s,fill:j[t]}),(0,i.jsx)("circle",{cx:a[0],cy:a[1],r:2}),(0,i.jsx)("line",{x1:a[0],y1:a[1],x2:c[0],y2:c[1],stroke:"black",fill:"black"}),(0,i.jsx)("line",{x1:c[0],y1:c[1],x2:d,y2:c[1],stroke:"black",fill:"black"}),(0,i.jsx)("text",{x:d+(h?2:-2),y:c[1],textAnchor:h?"start":"end",dominantBaseline:"middle",fontSize:14,children:u})]},t)});return(0,i.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,i.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:c})})},f=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(g,{data:m,width:t,height:n})};var b=n(80615),v=n(41664),w=n.n(v);let y=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:58}];var k=n(60406),A=n.n(k);let R=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],M=e=>{let{width:t,height:n,data:s}=e,r=(0,a.useRef)(null),o=Math.min(t-300,n-100)/2,l=(0,a.useMemo)(()=>{let e=d.ve8().value(e=>e.value);return e(s)},[s]),c=d.Nb1(),h=l.map((e,t)=>{let n={innerRadius:0,outerRadius:o,startAngle:e.startAngle,endAngle:e.endAngle},a=c.centroid(n),s=c(n),l={innerRadius:o+20,outerRadius:o+20,startAngle:e.startAngle,endAngle:e.endAngle},h=c.centroid(l),d=h[0]>0,u=h[0]+50*(d?1:-1),p=e.data.name+" ("+e.value+")";return(0,i.jsxs)("g",{className:A().slice,onMouseEnter:()=>{r.current&&r.current.classList.add(A().hasHighlight)},onMouseLeave:()=>{r.current&&r.current.classList.remove(A().hasHighlight)},children:[(0,i.jsx)("path",{d:s,fill:R[t]}),(0,i.jsx)("circle",{cx:a[0],cy:a[1],r:2}),(0,i.jsx)("line",{x1:a[0],y1:a[1],x2:h[0],y2:h[1],stroke:"black",fill:"black"}),(0,i.jsx)("line",{x1:h[0],y1:h[1],x2:u,y2:h[1],stroke:"black",fill:"black"}),(0,i.jsx)("text",{x:u+(d?2:-2),y:h[1],textAnchor:d?"start":"end",dominantBaseline:"middle",fontSize:14,children:p})]},t)});return(0,i.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,i.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),className:A().container,ref:r,children:h})})},T=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(M,{data:y,width:t,height:n})};var N=n(53810),z=n(77936),C=n(90505),I=n(26820);let P=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["A ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/caveat/pie.html",children:"pie chart"})," is a type of graph used to visually represent data as a circular, segmented chart. The chart is divided into ",(0,i.jsx)("b",{children:"slices"}),", where the size of each slice represents the proportion of data that falls within a particular category or group."]}),(0,i.jsxs)("p",{children:["This post explains how to build a pie chart with"," ",(0,i.jsx)("a",{href:"https://react.dev/",children:"react"}),", using the ",(0,i.jsx)("code",{children:"pie()"})," ","function of d3.js. It describes the expected ",(0,i.jsx)("b",{children:"data format"}),", how the"," ",(0,i.jsx)("code",{children:"Pie"})," component must be structured, how to compute the slice positions and how to render those slices. Last but not least, it provides the implementation for common use-cases like ",(0,i.jsx)("b",{children:"hover effect"})," and"," ",(0,i.jsx)("b",{children:"data transition"}),"."]})]});function D(){return(0,i.jsxs)(s.A,{title:"Pie chart with React",seoDescription:"How to build a pie chart with React and D3.js. A set of re-usable components",children:[(0,i.jsx)(r.Z,{title:"Pie chart",description:P,chartType:"pie"}),(0,i.jsx)("h2",{id:"data",children:"The Data"})," ",(0,i.jsxs)("p",{children:["The dataset required to build a pie chart is pretty simple. It is an array where each item represents a group of the pie chart. Each item is an object with 2 properties. They provide the group name (",(0,i.jsx)("code",{children:"name"}),") and its value (",(0,i.jsx)("code",{children:"value"}),")."]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"For instance, here is the dataset used for the simple pie chart below:"}),(0,i.jsx)(c.d,{code:E}),(0,i.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,i.jsxs)("p",{children:["The goal here is to create a ",(0,i.jsx)("code",{children:"PieChart"})," component that will be stored in a ",(0,i.jsx)("code",{children:"PieChart.tsx"})," file. This component requires 3 props to render: a ",(0,i.jsx)("code",{children:"width"}),", a ",(0,i.jsx)("code",{children:"height"}),", and some"," ",(0,i.jsx)("code",{children:"data"}),"."]}),(0,i.jsxs)("p",{children:["The shape of the ",(0,i.jsx)("code",{children:"data"})," is described above. The"," ",(0,i.jsx)("code",{children:"width"})," and ",(0,i.jsx)("code",{children:"height"})," will be used to render an"," ",(0,i.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the pie chart."]}),(0,i.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our"," ",(0,i.jsx)("code",{children:"PieChart"})," component:"]}),(0,i.jsx)(c.d,{code:_}),(0,i.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the SVG arcs, but it's React that will render them in the ",(0,i.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,i.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,i.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,i.jsx)("h2",{id:"build arcs",children:"From data to arcs"}),(0,i.jsx)("h3",{children:"→ A pie chart is a set of arcs"}),(0,i.jsxs)("p",{children:["A pie chart is actually a set of ",(0,i.jsx)("b",{children:"arcs"}),". An arc is a slice of a"," ",(0,i.jsx)("b",{children:"ring"}),". It is defined using 4 numbers:"]}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:["Start and end ",(0,i.jsx)("b",{children:"angle"}),". An angle of 0 is at the very top. An angle of ",(0,i.jsx)("code",{children:"Pi / 2"})," is at the most right. ",(0,i.jsx)("code",{children:"Pi"})," is bottom. And so on."]}),(0,i.jsxs)("li",{children:["Inner and outer ",(0,i.jsx)("b",{children:"radius"}),". For a pie chart, the inner radius will be set to 0. This is what makes it different from a"," ",(0,i.jsx)(w(),{href:"donut",children:"donut chart"}),"."]})]}),(0,i.jsxs)("div",{className:"col-span-w flex flex-col items-center justify-center",children:[(0,i.jsx)("img",{src:"/img/arcDefinition.png",style:{maxWidth:600},alt:"schema of an arc built with d3.js to make a pie chart"}),(0,i.jsx)(b.Y,{children:"A pie chart is built from a set of arcs. An arc is a slice defined by its inner radius, outer radius, start angle and end angle."})]}),(0,i.jsxs)("h3",{children:["→ use ",(0,i.jsx)("code",{children:"d3.pie()"})," to get arc coordinates"]}),(0,i.jsxs)("p",{children:["The ",(0,i.jsx)("code",{children:"pie()"})," function of d3 is here to transform the dataset in a set of arcs with their coordinates. It returns a function (called"," ",(0,i.jsx)("code",{children:"pieGenerator"})," here) that is an ",(0,i.jsx)("b",{children:"arc generator"}),"."]}),(0,i.jsx)("p",{children:"You can pass the dataset described at the beginning of this tutorial to this generator, it will return an array where each item provides the coordinates of an arc:"}),(0,i.jsx)(c.d,{code:W}),(0,i.jsxs)("h3",{children:["→ ",(0,i.jsx)("code",{children:"d3.arc()"})," to compute the svg path"]}),(0,i.jsxs)("p",{children:["From those start and end angles we now need to build a proper string that we can pass as the ",(0,i.jsx)("code",{children:"d"})," attribute of a ",(0,i.jsx)("code",{children:"path"}),". This is pretty easy thanks to the ",(0,i.jsx)("code",{children:"arc()"})," function of d3. This function must be applied to every item of the pie object created above."]}),(0,i.jsx)(c.d,{code:L}),(0,i.jsx)("h2",{id:"basic pie",children:"Basic pie chart"}),(0,i.jsxs)("p",{children:["We now have a set of svg path that we need to draw! We just need to loop through all of them and render a ",(0,i.jsx)("code",{children:"path"})," element in our svg area. Something like:"]}),(0,i.jsx)(c.d,{code:F}),(0,i.jsxs)("p",{children:["The only unusual thing here is that we need to translate our svg element to put the ",(0,i.jsx)("code",{children:"0,0"})," coordinate at the ",(0,i.jsx)("b",{children:"center"})," of the figure (it is usually top left)"]}),(0,i.jsx)("p",{children:"And that's it, we finally have the most basic pie chart built with react for rendering, and d3 for layout computation."}),(0,i.jsx)(o.$,{vizName:"PieChartBasic",VizComponent:x,maxWidth:400,height:400,caption:"Most basic pie chart built with react (rendering) and d3.js (layout)"}),(0,i.jsx)("h2",{id:"warning",children:"Warning"}),(0,i.jsxs)("p",{children:["Now is a good time to remind you that pie charts"," ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/caveat/pie.html",children:"have flaws"}),". To put it in a nutshell, humans are pretty ",(0,i.jsx)("b",{children:"bad at reading angles"}),", what makes pie charts pretty weak to compare values."]}),(0,i.jsx)("p",{children:"In the figure below, what trend can you spot in the dataset?"}),(0,i.jsxs)("div",{className:"col-span-w flex flex-col items-center justify-center",children:[(0,i.jsx)("img",{src:"/img/pie-caveat.png",style:{maxWidth:800},alt:"Three pie charts one beside each other. Finding the pattern is hard and a barplot should be used instead."}),(0,i.jsx)(b.Y,{children:"Three datasets visualized with pie charts. Can you spot the trend?"})]}),(0,i.jsxs)("p",{className:"mt-4",children:["Hard to find out isn't it? Check this"," ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/caveat/pie.html",children:"pie chart dedicated post"})," ","to see it visualized as a barplot. You'll see why pie charts are weak (and will learn good alternatives)."]}),(0,i.jsx)("p",{children:"If you're convinced you need a pie chart (there are some reason for this sometimes!), keep reading!"}),(0,i.jsx)("h2",{id:"legend",children:"Legend"}),(0,i.jsxs)("p",{children:["There is one very common caveat with pie charts: adding a"," ",(0,i.jsx)("b",{children:"legend on the side"})," to link each color with a label. It's much better to label each slice ",(0,i.jsx)("b",{children:"directly next to it"})," to ease the reading."]}),(0,i.jsxs)("p",{children:["In the example below a little dot is located on each slice"," ",(0,i.jsx)("b",{children:"centroid"}),". From there a first segment goes out of the slice, followed by a second horizontal segment that goes to the label."]}),(0,i.jsx)("p",{children:"The difficulty here is to get the position of the slice centroid and of the line inflexion point."}),(0,i.jsxs)("p",{children:["Fortunately the ",(0,i.jsx)("code",{children:"centroid()"})," function of d3 is all we need for that. It gives the ",(0,i.jsx)("code",{children:"x"})," and ",(0,i.jsx)("code",{children:"y"})," coordinates of the centroid of an ",(0,i.jsx)("code",{children:"arc"}),", arc that we used to build the donut slice anyway."]}),(0,i.jsx)(c.d,{code:H}),(0,i.jsxs)("p",{children:["The exact same technique is used to get the position of the"," ",(0,i.jsx)("b",{children:"inflexion point"}),". An ",(0,i.jsx)("b",{children:"additional arc"})," is computed, located out of the donut area, and with a thickness of 0. Its centroid is the inflexion point."]}),(0,i.jsx)(o.$,{vizName:"PieChartLegend",VizComponent:f,maxWidth:700,height:600,caption:"A pie chart with clean inline legend. Centroid are used for both the starting and inflexion points."}),(0,i.jsx)("h2",{id:"hover effect",children:"Hover effect"}),(0,i.jsxs)("p",{children:["Adding a ",(0,i.jsx)("b",{children:"hover effect"})," to your pie chart is a nice polish detail. Here I suggest to highlight the slice that is hovered over by"," ",(0,i.jsx)("b",{children:"dimming"})," all the other slices."]}),(0,i.jsxs)("p",{children:["There are several strategies available to implement such an effect. One can rely on css ",(0,i.jsx)("b",{children:"pseudo classes"})," only, or ",(0,i.jsx)("b",{children:"add a css class"})," ","using javascript and the ",(0,i.jsx)("code",{children:"onMouseEnter"})," event. It's also possible to rely on an ",(0,i.jsx)("b",{children:"animation library"})," like"," ",(0,i.jsx)("code",{children:"react-spring"}),"."]}),(0,i.jsxs)("p",{children:["I'm preparing a full section on the topic. You can subscribe to my"," ",(0,i.jsx)(w(),{href:"/subscribe",children:"dataviz-universe newsletter"})," to know when it will be ready. Meanwhile, there is a code sandbox waiting for you below to reveal the code of this example."]}),(0,i.jsx)(o.$,{vizName:"PieChartHover",VizComponent:T,maxWidth:700,height:600,caption:"A pie chart with hover effect. Hover over a slice to highlight it and fade other groups."}),(0,i.jsx)(C.r,{chartId:"pie"}),(0,i.jsx)(I.Z,{chartId:"pie"}),(0,i.jsx)("h2",{id:"data transition",children:"Data transition"}),(0,i.jsxs)("p",{children:["The ",(0,i.jsx)("code",{children:"Pie"})," component expects a ",(0,i.jsx)("code",{children:"data"})," prop. What should we do when this data changes?"]}),(0,i.jsxs)("p",{children:["By default, the chart will update ",(0,i.jsx)("b",{children:"instantly"}),", with no transition. Adding a ",(0,i.jsx)("b",{children:"smooth transition"})," gives a nice polish touch to the graph. Try to switch between the 2 datasets below to see the animation in action."]}),(0,i.jsxs)("p",{children:["The code below relies on the ",(0,i.jsx)("code",{children:"react-spring"})," library. Instead of rendering a ",(0,i.jsx)("code",{children:"path"})," for each slice, it uses a"," ",(0,i.jsx)("code",{children:"animated.path"})," component that handles the spring animation for us."]}),(0,i.jsxs)("p",{children:["The implementation is ",(0,i.jsx)("b",{children:"not trivial"}),". I plan to publish a full tutorial on react-spring for data visualization soon. You can"," ",(0,i.jsx)(w(),{href:"/subscribe",children:"subscribe here"})," to be notified when it is ready."]}),(0,i.jsx)(o.$,{vizName:"DonutDatasetTransition",VizComponent:N.M,maxWidth:800,height:400,caption:"A donut chart with clean inline legends, built thanks to the centroid function of d3.js."}),(0,i.jsxs)("p",{children:[(0,i.jsx)("u",{children:"Note"}),": check the blue group that appears / disappears between dataset. This kind of ",(0,i.jsx)("b",{children:"enter/exit pattern"})," is something to keep in mind when building animations."]}),(0,i.jsx)("h2",{id:"barplot transition",children:"Pie chart to barplot"}),(0,i.jsxs)("p",{children:["Pie charts are often"," ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/caveat/pie.html",children:"criticized"})," ","since angles are ",(0,i.jsx)("b",{children:"hard to read"}),". Let's represent the same data using a pie chart or a ",(0,i.jsx)(w(),{href:"/barplot",children:"barplot"}),", to see what's the most insightful \uD83E\uDD37‍♂️."]}),(0,i.jsxs)("p",{children:["Note that here we animate the transition between"," ",(0,i.jsx)("b",{children:"different shape types"}),": each arc becomes a rectangle and reciprocally. This is made possible thanks to the"," ",(0,i.jsx)("a",{href:"https://github.com/veltman/flubber",children:"flubber"})," library, used in coordination with"," ",(0,i.jsx)("a",{href:"https://react-spring.dev/",children:"react-spring"}),"."]}),(0,i.jsxs)("p",{children:["Once more, a full tutorial is needed here. You can"," ",(0,i.jsx)(w(),{href:"/subscribe",children:"subscribe here"})," to be notified when it is ready. In the meanwhile, the code of this specific example is provided below."]}),(0,i.jsx)(o.$,{vizName:"DonutBarplotTransition",VizComponent:z.f,maxWidth:500,height:400,caption:"Transition from a pie chart to a barplot with a smooth animation using the buttons on top."}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,i.jsx)(l.Z,{chartFamily:"partOfAWhole"}),(0,i.jsx)("div",{className:"mt-20"})]})}let E='\nconst data = [\n  {name:"Mark", value: 90},\n  {name:"Robert", value: 12},\n  {name:"Emily", value: 34},\n  {name:"Marion", value: 53},\n  {name:"Nicolas", value: 98},\n]\n'.trim(),_='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype PieChartProps = {\n  width: number;\n  height: number;\n  data: {name: string, value: number}[];\n};\n\nexport const PieChart = ({ width, height, data }: PieChartProps) => {\n\n  // read the data\n  // generate position of each slice with d3.pie()\n  // build the arcs\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render all the arcs\n      </svg>\n    </div>\n  );\n};\n'.trim(),W='\n// Compute a pie generator = a function that transforms a dataset in a list of arcs\nconst pieGenerator = d3.pie().value((d) => d.value);\n\n// Use this pie generator on our initial dataset\nconst pie = pieGenerator(data);\n\n/* Result looks like this:\n[\n  {\n      "data": {"name": "Mark", "value": 90},\n      "index": 1,\n      "value": 90,\n      "startAngle": 2.145477909768639,\n      "endAngle": 4.115814765678614,\n      "padAngle": 0\n  }, .... same for other groups\n]\n*/\n'.trim(),L='\n// Compute an arc generator = a function that transforms arc coordinates in a svg path\nconst arcPathGenerator = d3.arc();\n\n// For each arc, use the path generator\nconst arcs = pie.map((p) =>\n      arcPathGenerator({\n        innerRadius: 0,\n        outerRadius: radius,\n        startAngle: p.startAngle,\n        endAngle: p.endAngle,\n      })\n    );\n\n/* Result looks like:\n[\n  "M151,97 A180,180,0,0,1,-148,101 L0,0Z",\n  .... other groups\n]\n*/\n'.trim(),F="\n<g transform={..}>\n    {arcs.map((arc, i) => {\n      return <path key={i} d={arc} />;\n    })}\n</g>\n".trim(),H="\nconst sliceInfo = {\n  innerRadius,\n  outerRadius: radius,\n  startAngle: start,\n  endAngle: end,\n};\nconst centroid = arcGenerator.centroid(sliceInfo); // [x,y] position of the centroid\nconst slicePath = arcGenerator(sliceInfo); // string: the path of the slice\n".trim()},77936:function(e,t,n){"use strict";n.d(t,{f:function(){return x}});var i=n(85893),a=n(67294);let s=[{name:"Mark",value:40},{name:"Robert",value:38},{name:"Etienne",value:37},{name:"Emily",value:36},{name:"Nicolas",value:35},{name:"Marion",value:34}];var r=n(2354),o=n(95334),l=n(86824);let c=e=>{let{path:t,color:n}=e,s=(0,a.useRef)(t),r=(0,a.useMemo)(()=>(0,o.interpolate)(s.current,t),[t]),c=(0,l.q_)({from:{t:0},to:{t:1},reset:s.current!==t,onChange:e=>{let{t}=e;s.current=r(t||1)},config:l.vc.molasses});return(0,i.jsx)(l.q.path,{d:(0,l.to)(c.t,r),opacity:c.opacity,stroke:"black",fill:n,fillOpacity:.8,strokeWidth:1})},h=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],d=e=>{let{width:t,height:n,data:s,type:o}=e,l=s.sort((e,t)=>t.value-e.value),d=l.map(e=>e.name),u=Math.min(t,n)/2-30,p=(0,a.useMemo)(()=>{let e=r.ve8().value(e=>e.value||0).sort(null);return e(l)},[s]),x=t-30-30,m=n-30-30,j=(0,a.useMemo)(()=>r.tiA().domain(d).range([0,m]).padding(.3),[s,n]),g=(0,a.useMemo)(()=>{let e=r.Fp7(s.map(e=>e.value||0));return r.BYU().domain([0,e||10]).range([0,x])},[s,t]),f=p.map((e,a)=>{let s=r.Nb1(),l=s({innerRadius:40,outerRadius:u,startAngle:e.startAngle,endAngle:e.endAngle}),d=j(e.data.name)-n/2,p=g(e.value)-t/2,x=g(0)-t/2,m=j.bandwidth(),f="M ".concat(x," ").concat(d," L ").concat(p," ").concat(d," L ").concat(p," ").concat(d+m," L ").concat(x," ").concat(d+m," Z");return(0,i.jsx)(c,{path:"pie"===o?l:f,color:h[a]},e.data.name)});return(0,i.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,i.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:f})})},u={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"0px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},p=e=>{let{width:t,height:n}=e,[r,o]=(0,a.useState)("pie");return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{height:50},children:[(0,i.jsx)("button",{style:u,onClick:()=>o("pie"),children:"Pie chart"}),(0,i.jsx)("button",{style:u,onClick:()=>o("bar"),children:"Barplot"})]}),(0,i.jsx)(d,{width:t,height:n-50,data:s,type:r})]})},x=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(p,{width:t,height:n})}},24109:function(e,t,n){"use strict";n.d(t,{M:function(){return p}});var i=n(85893),a=n(67294);let s=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Etienne",value:void 0},{name:"Emily",value:34},{name:"Nicolas",value:98},{name:"Marion",value:53}],r=[{name:"Mark",value:80},{name:"Robert",value:10},{name:"Etienne",value:48},{name:"Emily",value:6},{name:"Nicolas",value:8},{name:"Marion",value:45}];var o=n(2354),l=n(86824);let c=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],h=e=>{let{width:t,height:n,data:s}=e,r=s.sort((e,t)=>e<t?-1:e>t?1:0),l=Math.min(t,n)/2-30,h=(0,a.useMemo)(()=>{let e=o.ve8().value(e=>e.value||0).sort(null);return e(r)},[s]),u=h.map((e,t)=>(0,i.jsx)(d,{radius:l,slice:e,color:c[t]},e.data.name));return(0,i.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,i.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:u})})},d=e=>{let{slice:t,radius:n,color:a}=e,s=o.Nb1(),r=(0,l.q_)({to:{pos:[t.startAngle,t.endAngle]}});return(0,i.jsx)(l.q.path,{d:r.pos.to((e,t)=>s({innerRadius:40,outerRadius:n,startAngle:e,endAngle:t})),fill:a})},u={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"0px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},p=e=>{let{width:t,height:n}=e,[o,l]=(0,a.useState)(s);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{height:50},children:[(0,i.jsx)("button",{style:u,onClick:()=>l(s),children:"Data 1"}),(0,i.jsx)("button",{style:u,onClick:()=>l(r),children:"Data 2"})]}),(0,i.jsx)(h,{width:t,height:n-50,data:o})]})}},53810:function(e,t,n){"use strict";n.d(t,{M:function(){return s}});var i=n(85893),a=n(24109);let s=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(a.M,{width:t,height:n})}},60406:function(e){e.exports={container:"pie-chart_container__DqoOe",slice:"pie-chart_slice__jHrFW",hasHighlight:"pie-chart_hasHighlight__fIRFG"}}},function(e){e.O(0,[2343,7754,2354,7823,2719,7303,8190,3710,2594,6588,9774,2888,179],function(){return e(e.s=77399)}),_N_E=e.O()}]);