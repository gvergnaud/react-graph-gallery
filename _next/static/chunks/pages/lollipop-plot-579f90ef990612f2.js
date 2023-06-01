(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5764],{5121:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lollipop-plot",function(){return i(2892)}])},6820:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(5893);i(7294);var a=i(8843),s=i(6438);let l=e=>{let{imgLink:t,height:i,opacity:a,children:s}=e;return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{style:{backgroundImage:"url("+t+")",height:i,backgroundAttachment:"fixed",opacity:a,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,n.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:s})]})};function r(e){var t;let{chartId:i}=e,r=(null===(t=a.c.find(e=>e.id===i))||void 0===t?void 0:t.label)||"chart";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{id:"inspiration",children:r+" inspiration"}),(0,n.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,n.jsx)("span",{children:r}),", note that"," ",(0,n.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,n.jsx)("div",{className:"border mb-10",children:(0,n.jsx)(l,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,n.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,n.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,n.jsxs)("p",{className:"text-center text-sm",children:[(0,n.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,n.jsx)("span",{children:r})," ","looks good!"]}),(0,n.jsx)(s.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},505:function(e,t,i){"use strict";i.d(t,{r:function(){return h}});var n=i(5893),a=i(1664),s=i.n(a),l=i(8843),r=i(88),o=i(3572);let h=e=>{let{chartId:t}=e,i=l.c.filter(e=>e.id===t)[0].label;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{id:"responsiveness",children:"Responsive "+i+" with react"}),(0,n.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,n.jsx)("code",{children:"width"})," and ",(0,n.jsx)("code",{children:"height"})," and will render a ",i," of those dimensions."]}),(0,n.jsxs)("p",{children:["Making the ",i," responsive requires adding a ",(0,n.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,n.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,n.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,n.jsx)(r.U,{startOpen:!1,title:(0,n.jsxs)("span",{children:[(0,n.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,n.jsx)(o.d,{code:d})}),(0,n.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,n.jsx)(s(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})},d='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},2892:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return V}});var n=i(5893),a=i(7294),s=i(153),l=i(9965),r=i(7262),o=i(3572),h=i(1122),d=i(1664),c=i.n(d),u=i(6820);let p=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"M\xe9lanie",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Paul",value:2}];var x=i(6020);let m={top:30,right:30,bottom:30,left:80},v=e=>{let{width:t,height:i,data:s}=e,l=t-m.right-m.left,r=i-m.top-m.bottom,o=s.sort((e,t)=>t.value-e.value).map(e=>e.name),h=(0,a.useMemo)(()=>x.tiA().domain(o).range([0,r]),[s,i]),d=(0,a.useMemo)(()=>{let[e,t]=x.Wem(s.map(e=>e.value));return x.BYU().domain([0,t||10]).range([0,l])},[s,t]),c=s.map((e,t)=>{let i=h(e.name)+h.bandwidth()/2;return(0,n.jsxs)("g",{children:[(0,n.jsx)("line",{x1:d(0),y1:i,y2:i,x2:d(e.value),opacity:.7,stroke:"#9d174d",strokeWidth:1}),(0,n.jsx)("circle",{cy:i,cx:d(e.value),opacity:.7,stroke:"#9d174d",fill:"#9d174d",strokeWidth:1,r:3}),(0,n.jsx)("text",{x:d(0)-7,y:i,textAnchor:"end",alignmentBaseline:"central",fontSize:12,children:e.name})]},t)}),u=d.ticks(5).slice(1).map((e,t)=>(0,n.jsxs)("g",{children:[(0,n.jsx)("line",{x1:d(e),x2:d(e),y1:0,y2:r,stroke:"#808080",opacity:.2}),(0,n.jsx)("text",{x:d(e),y:r+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t));return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:t,height:i,children:(0,n.jsxs)("g",{width:l,height:r,transform:"translate(".concat([m.left,m.top].join(","),")"),children:[u,c]})})})},j=e=>{let{width:t=700,height:i=400}=e;return(0,n.jsx)(v,{data:p,width:t,height:i})};var g=i(505);let b=[{name:"Mark",value1:90,value2:72},{name:"Robert",value1:12,value2:10},{name:"Emily",value1:34,value2:14},{name:"Marion",value1:53,value2:24},{name:"Nicolas",value1:98,value2:58},{name:"M\xe9lanie",value1:23,value2:20},{name:"Gabriel",value1:18,value2:10},{name:"Jean",value1:104,value2:70},{name:"Paul",value1:2,value2:1}],f={top:30,right:30,bottom:30,left:80},w=e=>{let{width:t,height:i,data:s}=e,l=t-f.right-f.left,r=i-f.top-f.bottom,o=s.sort((e,t)=>t.value1-e.value1).map(e=>e.name),h=(0,a.useMemo)(()=>x.tiA().domain(o).range([0,r]),[s,i]),d=(0,a.useMemo)(()=>{let[e,t]=x.Wem(s.map(e=>e.value1));return x.BYU().domain([0,t||10]).range([0,l])},[s,t]),c=s.map((e,t)=>{let i=h(e.name)+h.bandwidth()/2;return(0,n.jsxs)("g",{children:[(0,n.jsx)("line",{x1:d(e.value1),y1:i,y2:i,x2:d(e.value2),opacity:.7,stroke:"grey",strokeWidth:1}),(0,n.jsx)("circle",{cy:i,cx:d(e.value1),opacity:.7,stroke:"#69b3a2",fill:"#69b3a2",strokeWidth:1,r:5}),(0,n.jsx)("circle",{cy:i,cx:d(e.value2),opacity:.7,stroke:"#9d174d",fill:"#9d174d",strokeWidth:1,r:5}),(0,n.jsx)("text",{x:d(0)-7,y:i,textAnchor:"end",alignmentBaseline:"central",fontSize:12,children:e.name})]},t)}),u=d.ticks(5).slice(1).map((e,t)=>(0,n.jsxs)("g",{children:[(0,n.jsx)("line",{x1:d(e),x2:d(e),y1:0,y2:r,stroke:"#808080",opacity:.2}),(0,n.jsx)("text",{x:d(e),y:r+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t));return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:t,height:i,children:(0,n.jsxs)("g",{width:l,height:r,transform:"translate(".concat([f.left,f.top].join(","),")"),children:[u,c]})})})},y=e=>{let{width:t=700,height:i=400}=e;return(0,n.jsx)(w,{data:b,width:t,height:i})},k=[{name:"Mark",value1:87,value2:90},{name:"Robert",value1:10,value2:12},{name:"Emily",value1:67,value2:34},{name:"Marion",value1:34,value2:53},{name:"Nicolas",value1:87,value2:98},{name:"M\xe9lanie",value1:12,value2:23},{name:"Gabriel",value1:8,value2:18},{name:"Jean",value1:79,value2:104},{name:"Paul",value1:10,value2:80}],z=[{name:"Mark",value1:1,value2:9},{name:"Robert",value1:18,value2:19},{name:"Emily",value1:12,value2:31},{name:"Marion",value1:54,value2:23},{name:"Nicolas",value1:14,value2:38},{name:"M\xe9lanie",value1:87,value2:123},{name:"Gabriel",value1:2,value2:4},{name:"Jean",value1:12,value2:23},{name:"Christophe",value1:18,value2:22}];var T=i(2236);let M=e=>{let{name:t,xValue1:i,xValue2:a,y:s}=e,l=(0,T.q_)({from:{xValue1:0,xValue2:0,valueOpacity:0},to:{xValue1:i,xValue2:a,valueOpacity:1,y:s},config:{friction:100}});return(0,n.jsxs)("g",{children:[(0,n.jsx)(T.q.line,{x1:l.xValue1,y1:l.y,y2:l.y,x2:l.xValue2,opacity:.7,stroke:"grey",strokeWidth:1}),(0,n.jsx)(T.q.circle,{cy:l.y,cx:l.xValue1,opacity:.7,stroke:"#69b3a2",fill:"#69b3a2",strokeWidth:1,r:5}),(0,n.jsx)(T.q.circle,{cy:l.y,cx:l.xValue2,opacity:.7,stroke:"#9d174d",fill:"#9d174d",strokeWidth:1,r:5}),(0,n.jsx)(T.q.text,{x:-7,y:l.y,textAnchor:"end",alignmentBaseline:"central",fontSize:12,children:t})]})},R={top:30,right:30,bottom:30,left:70},N=e=>{let{width:t,height:i,data:s}=e,l=t-R.right-R.left,r=i-R.top-R.bottom,o=s.map(e=>e.name).sort(),h=(0,a.useMemo)(()=>x.tiA().domain(o).range([0,r]),[s,i]),d=(0,a.useMemo)(()=>x.BYU().domain([0,120]).range([0,l]),[s,t]),c=s.map(e=>(0,n.jsx)(M,{name:e.name,xValue1:d(e.value1),xValue2:d(e.value2),y:h(e.name)},e.name)),u=d.ticks(5).slice(1).map((e,t)=>(0,n.jsxs)("g",{children:[(0,n.jsx)("line",{x1:d(e),x2:d(e),y1:0,y2:r,stroke:"#808080",opacity:.2}),(0,n.jsx)("text",{x:d(e),y:r+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t));return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:t,height:i,children:(0,n.jsxs)("g",{width:l,height:r,transform:"translate(".concat([R.left,R.top].join(","),")"),children:[u,c]})})})},A={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},I=e=>{let{width:t,height:i}=e,[s,l]=(0,a.useState)(k);return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{style:{height:50},children:[(0,n.jsx)("button",{style:A,onClick:()=>l(k),children:"Data 1"}),(0,n.jsx)("button",{style:A,onClick:()=>l(z),children:"Data 2"})]}),(0,n.jsx)(N,{width:t,height:i-50,data:s})]})},D=e=>{let{width:t=700,height:i=400}=e;return t&&i?(0,n.jsx)(I,{width:t,height:i}):null},W=[{name:"Mark",value1:90,value2:72},{name:"Robert",value1:12,value2:10},{name:"Emily",value1:34,value2:14},{name:"Marion",value1:53,value2:24},{name:"Nicolas",value1:98,value2:58},{name:"M\xe9lanie",value1:23,value2:20},{name:"Gabriel",value1:18,value2:10},{name:"Jean",value1:104,value2:70},{name:"Paul",value1:2,value2:1}];var _=i(6437),S=i.n(_);let E={top:30,right:30,bottom:30,left:80},L=e=>{let{width:t,height:i,data:s}=e,l=t-E.right-E.left,r=i-E.top-E.bottom,o=s.sort((e,t)=>t.value1-e.value1).map(e=>e.name),h=(0,a.useMemo)(()=>x.tiA().domain(o).range([0,r]),[s,i]),d=(0,a.useMemo)(()=>{let[e,t]=x.Wem(s.map(e=>e.value1));return x.BYU().domain([0,t||10]).range([0,l])},[s,t]),c=s.map((e,i)=>{let a=h(e.name);if(!a)return null;let s=a+h.bandwidth()/2;return(0,n.jsxs)("g",{className:S().row,children:[(0,n.jsx)("rect",{width:t,height:h.bandwidth(),x:0,y:s,fill:"transparent"}),(0,n.jsx)("rect",{width:t,height:h.bandwidth()-6,x:-E.left,y:a+3,fill:"grey",rx:5,className:S().highlightRect}),(0,n.jsx)("line",{x1:d(e.value1),y1:s,y2:s,x2:d(e.value2),opacity:.7,stroke:"grey",strokeWidth:1}),(0,n.jsx)("circle",{cy:s,cx:d(e.value1),opacity:.7,stroke:"#69b3a2",fill:"#69b3a2",strokeWidth:1,r:5}),(0,n.jsx)("circle",{cy:s,cx:d(e.value2),opacity:.7,stroke:"#9d174d",fill:"#9d174d",strokeWidth:1,r:5}),(0,n.jsx)("text",{x:d(0)-7,y:s,textAnchor:"end",alignmentBaseline:"central",fontSize:12,children:e.name})]},i)}),u=d.ticks(5).slice(1).map((e,t)=>(0,n.jsxs)("g",{children:[(0,n.jsx)("line",{x1:d(e),x2:d(e),y1:0,y2:r,stroke:"#808080",opacity:.2}),(0,n.jsx)("text",{x:d(e),y:r+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t));return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:t,height:i,children:(0,n.jsxs)("g",{width:l,height:r,transform:"translate(".concat([E.left,E.top].join(","),")"),children:[u,(0,n.jsx)("g",{className:S().rowsContainer,children:c})]})})})},C=e=>{let{width:t=700,height:i=400}=e;return(0,n.jsx)(L,{data:W,width:t,height:i})},B=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["A"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/graph/lollipop.html",children:"lollipop plot"})," ","is a variation of the more common ",(0,n.jsx)(c(),{href:"barplot",children:"barplot"}),". This page is a step-by-step guide on how to build your own lollipop for the web, using ",(0,n.jsx)("a",{href:"https://reactjs.org/",children:"React"})," and"," ",(0,n.jsx)("a",{href:"https://d3-graph-gallery.com/histogram",children:"D3.js"}),"."]}),(0,n.jsxs)("p",{children:["It starts by describing how the ",(0,n.jsx)("b",{children:"data"})," should be organized and how to initialize the ",(0,n.jsx)("b",{children:"lollipop component"}),". It explains how to build the"," ",(0,n.jsx)("b",{children:"scales"})," and ",(0,n.jsx)("b",{children:"axes"})," and how to add the shapes. A few variations are described and a focus is made on the ",(0,n.jsx)("b",{children:"hover interaction"}),". \uD83D\uDE47‍♂️."]})]});function V(){return(0,n.jsxs)(s.A,{title:"Lollipop plot with React",seoDescription:"How to build a lollipop plot with React and D3.js. A set of re-usable components",children:[(0,n.jsx)(l.Z,{title:"Lollipop plot",description:B,chartType:"lollipop"}),(0,n.jsx)("h2",{id:"data",children:"The Data"}),(0,n.jsxs)("p",{children:["The dataset required to build a lollipop is usually an array where each item is an object providing the ",(0,n.jsx)("code",{children:"name"})," and the"," ",(0,n.jsx)("code",{children:"value"})," of the group."]}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:"Here is a minimal example:"}),(0,n.jsx)(o.d,{code:q}),(0,n.jsxs)("p",{children:["Note: if your data is in ",(0,n.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,n.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,n.jsx)("a",{href:"https://d3-graph-gallery.com/graph/barplot_horizontal.html",children:"here"}),"."]}),(0,n.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,n.jsxs)("p",{children:["The goal here is to create a ",(0,n.jsx)("code",{children:"Lollipop"})," component that will be stored in a ",(0,n.jsx)("code",{children:"Lollipop.tsx"})," file. This component requires 3 props to render: a ",(0,n.jsx)("code",{children:"width"}),", a ",(0,n.jsx)("code",{children:"height"}),", and some"," ",(0,n.jsx)("code",{children:"data"}),"."]}),(0,n.jsxs)("p",{children:["The shape of the ",(0,n.jsx)("code",{children:"data"})," is described above. The"," ",(0,n.jsx)("code",{children:"width"})," and ",(0,n.jsx)("code",{children:"height"})," will be used to render an"," ",(0,n.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the histogram."]}),(0,n.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our"," ",(0,n.jsx)("code",{children:"Lollipop"})," component:"]}),(0,n.jsx)(o.d,{code:P}),(0,n.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the SVG ",(0,n.jsx)("code",{children:"circle"}),", but it's React that will render them in the ",(0,n.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,n.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,n.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,n.jsx)("h2",{id:"basic",children:"Most basic lollipop"}),(0,n.jsxs)("p",{children:["A lollipop chart is a variation of the better known"," ",(0,n.jsx)(c(),{href:"barplot",children:"barplot"}),". The implementation of a barplot with react is extensively described in the"," ",(0,n.jsx)(c(),{href:"barplot",children:"barplot section"})," of the gallery. So I will just provide a quick recap here."]}),(0,n.jsxs)("p",{children:["To put it in a nutshell, ",(0,n.jsx)("b",{children:"2 scales"})," must be created. The x axis transforms a numeric value in a position in pixel: it is a linear scale built with the ",(0,n.jsx)("code",{children:"scaleLinear()"})," function of d3. The y axis transforms a group name in a position in pixel: it is a band scale built with ",(0,n.jsx)("code",{children:"scaleBand()"}),"."]}),(0,n.jsxs)("p",{children:["Once the scales are available, ",(0,n.jsx)("b",{children:"loop"})," through each item of the dataset. Instead of drawing a rectangle for each item, draw a line and a circle. Instead of adding a proper X and Y axes, I suggest to create a grid manually and to draw labels at an arbitrary position."]}),(0,n.jsx)(h.$,{vizName:"LollipopBasic",VizComponent:j,height:400,maxWidth:600,caption:"Most basic Lollipop built with d3.js for scales, and react for rendering"}),(0,n.jsx)(g.r,{chartId:"lollipop"}),(0,n.jsx)(u.Z,{chartId:"lollipop"}),(0,n.jsx)("h2",{id:"dumbbell",children:"Dumbbel plot"}),(0,n.jsxs)("p",{children:["A"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/graph/lollipop.html",children:"dumbbell plot"}),", also known as a cleveland plot or a connected dot plot, is a visual representation of the ",(0,n.jsx)("b",{children:"difference"})," or ",(0,n.jsx)("b",{children:"change"})," between two related variables. It consists of two endpoints, represented by circles or dots, connected by a horizontal line, which represents the magnitude of the difference or change."," "]}),(0,n.jsxs)("p",{children:["This type of plot is commonly used in scientific research to display the effect of an intervention or treatment on a particular outcome, or to compare two different groups or time periods. The plot allows for"," ",(0,n.jsx)("b",{children:"easy comparison"})," of the magnitude and direction of change between the two variables."]}),(0,n.jsxs)("p",{children:["The implementation is very close to the"," ",(0,n.jsx)("a",{href:"#basic",children:"basic lollipop"})," chart described above. The dataset provides 2 data points for each item in the dataset: ",(0,n.jsx)("code",{children:"value1"})," ","and ",(0,n.jsx)("code",{children:"value2"}),". The scales and axes are exactly the same. Instead of drawing 1 line and 1 circle, 2 circles are joined by the line."]}),(0,n.jsx)(h.$,{vizName:"LollipopDumbbell",VizComponent:y,height:400,maxWidth:600,caption:"A basic yet clean dumbbell plot built with d3.js and React"}),(0,n.jsx)("h2",{id:"hover effect",children:"Hover effect"}),(0,n.jsxs)("p",{children:["The circles can be quite ",(0,n.jsx)("b",{children:"far from their label"})," for the biggest values on the chart (see Mark below). Adding an ",(0,n.jsx)("b",{children:"hover interaction"})," ","on the lollipop charts allows to ",(0,n.jsx)("b",{children:"highlight a specific row"}),". As a result, the label/data point connection becomes more obvious."]}),(0,n.jsxs)("p",{children:["There are various strategies to implement such an hover effect. Here, I suggest to do everything in ",(0,n.jsx)("b",{children:"css"})," using"," ",(0,n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes",children:"pseudo classes"}),", and targetting svg elements only."]}),(0,n.jsx)("p",{children:"Two different things happen when a row is hovered:"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["All other rows are ",(0,n.jsx)("b",{children:"faded out"}),". Their ",(0,n.jsx)("code",{children:"opacity"})," is lowered to ",(0,n.jsx)("code",{children:".3"})]}),(0,n.jsxs)("li",{children:["A ",(0,n.jsx)("b",{children:"grey rectangle"})," that wraps the row is drawn."]})]}),(0,n.jsxs)("p",{children:["→ For the first effect, a ",(0,n.jsx)("code",{children:"rowsContainer"})," class is added to the element that wraps all rows. When it is hovered hover (",(0,n.jsx)("code",{children:"rowsContainer:hover"}),"), everything that's inside it has a lower opacity. But a specific rule is added at the hovered row level to keep it with a strong opacity. To put it in a nutshell, css looks like:"]}),(0,n.jsx)(o.d,{code:O}),(0,n.jsxs)("p",{children:["→ For the second effect, ",(0,n.jsx)("b",{children:"2 svg rectangles"})," must be drawn. The first one fills the ",(0,n.jsx)("b",{children:"full"})," width and height of the row. It is the one that triggers the mouse event. (It is important to remember that a svg ",(0,n.jsx)("code",{children:"g"})," element does ",(0,n.jsx)("b",{children:"not"})," trigger mouse events. Only what is drawn inside it does). The second rectangle is the one that we see. We can add some ",(0,n.jsx)("b",{children:"vertical padding"})," to it since it is not use for mouse detection."]}),(0,n.jsx)(h.$,{vizName:"LollipopHoverEffect",VizComponent:C,height:400,maxWidth:600,caption:"Try to hover a row in the lollipop above to reveal the hover interaction."}),(0,n.jsx)("h2",{id:"data transition",children:"Data transition"}),(0,n.jsxs)("p",{children:["It is very common to deal with ",(0,n.jsx)("b",{children:"various variables"})," and compare the behaviour of some data items for them. It adds a nice touch to the graph to smoothly transition between 2 states using a quick ",(0,n.jsx)("b",{children:"animation"}),"."]}),(0,n.jsxs)("p",{children:["For the example below I rely on the"," ",(0,n.jsx)("a",{href:"https://react-spring.dev/",children:"react-spring"})," library. This lib allows to quickly create spring animations using javascript. It results in a very a ",(0,n.jsx)("b",{children:"natural transition"})," that can be ",(0,n.jsx)("b",{children:"interrupted"})," ","without restarting from 0. (try to toggle between datasets quickly)."]}),(0,n.jsxs)("p",{children:["It would be too long to explain the code here. Instead, I'm currently writing a set of dedicated tutorials. Please"," ",(0,n.jsx)("a",{href:"https://datavizuniverse.substack.com/",children:"subscribe to the newsletter"})," ","to know when this will be released."]}),(0,n.jsx)(h.$,{vizName:"LollipopDatasetTransition",VizComponent:D,height:400,maxWidth:600,caption:"A lollipop chart with smooth transition between dataset."}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,n.jsx)(r.Z,{chartFamily:"ranking"}),(0,n.jsx)("div",{className:"mt-20"})]})}let q='\nconst data = [\n  {name:"Mark", value: 90},\n  {name:"Robert", value: 12},\n  {name:"Emily", value: 34},\n  {name:"Marion", value: 53},\n  {name:"Nicolas", value: 98},\n]\n'.trim(),P='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype LollipopProps = {\n  width: number;\n  height: number;\n  data: number[];\n};\n\nexport const Lollipop = ({ width, height, data }: LollipopProps) => {\n\n  // read the data\n  // build the scales\n  // build the lines and circles\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render axes\n        // render all the lines and rects\n      </svg>\n    </div>\n  );\n};\n'.trim(),O="\n/* Row has an opacity of 1 by default */\n.row {\n  opacity: 1;\n  cursor: pointer;\n}\n\n/* But if the container is hovered somewhere, opacity is decreased to .3 */\n.rowsContainer:hover .row {\n  opacity: 0.3;\n}\n\n/* Except for the specific row that is hovered hover that keeps its opacity to 1 */\n.rowsContainer .row:hover {\n  opacity: 1;\n}\n".trim()},6437:function(e){e.exports={row:"dumbbell_row__QpX5s",rowsContainer:"dumbbell_rowsContainer__PbeSS",highlightRect:"dumbbell_highlightRect___4gZV"}}},function(e){e.O(0,[3996,6020,5660,2236,645,1188,9774,2888,179],function(){return e(e.s=5121)}),_N_E=e.O()}]);