(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5503],{87591:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/streamchart",function(){return r(42030)}])},90505:function(e,t,r){"use strict";r.d(t,{r:function(){return h}});var n=r(85893),i=r(41664),s=r.n(i),o=r(28843),a=r(66717),l=r(3572);let h=e=>{let{chartId:t}=e,r=o.c.filter(e=>e.id===t)[0].label;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{id:"responsiveness",children:"Responsive "+r+" with react"}),(0,n.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,n.jsx)("code",{children:"width"})," and ",(0,n.jsx)("code",{children:"height"})," and will render a ",r," of those dimensions."]}),(0,n.jsxs)("p",{children:["Making the ",r," responsive requires adding a ",(0,n.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,n.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,n.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,n.jsx)(a.U,{title:(0,n.jsxs)("span",{children:[(0,n.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,n.jsx)(l.d,{code:c})}),(0,n.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,n.jsx)(s(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})},c='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},66717:function(e,t,r){"use strict";r.d(t,{U:function(){return i}});var n=r(85893);let i=e=>{let{title:t,children:r}=e;return(0,n.jsxs)("details",{className:"bg-gray-50 py-2 px-4 rounded-md my-2",children:[(0,n.jsx)("summary",{className:"cursor-pointer",children:t}),(0,n.jsx)("div",{className:"pt-4",children:r})]})}},18893:function(e,t,r){"use strict";r.d(t,{H:function(){return i}});var n=r(85893);let i=e=>{let{text:t}=e;return(0,n.jsxs)("blockquote",{className:"mt-10 opacity-20",children:[(0,n.jsx)("b",{className:"text-reactGallery mr-4",children:"ToDo"}),t]})}},42030:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return U}});var n=r(85893),i=r(67294),s=r(80153),o=r(43710),a=r(61651),l=r(3572),h=r(81122),c=r(41664),d=r.n(c),p=r(26820);let u=[{x:1,groupA:38,groupB:19,groupC:9,groupD:4},{x:2,groupA:16,groupB:14,groupC:96,groupD:40},{x:3,groupA:64,groupB:96,groupC:64,groupD:40},{x:4,groupA:32,groupB:48,groupC:64,groupD:40},{x:5,groupA:12,groupB:18,groupC:14,groupD:10}];var g=r(43950);let x={top:30,right:30,bottom:50,left:50},m=e=>{let{width:t,height:r,data:s}=e,o=t-x.right-x.left,a=r-x.top-x.bottom,l=["groupA","groupB","groupC","groupD"],h=g.knu().keys(l).order(g.Qxt).offset(g.KuJ),c=h(s),d=(0,i.useMemo)(()=>g.BYU().domain([-200,200]).range([a,0]),[s,r]),[p,u]=g.Wem(s,e=>e.x),m=(0,i.useMemo)(()=>g.BYU().domain([p||0,u||0]).range([0,o]),[s,t]),f=g.PKp().domain(l).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]),j=g.SOn().x(e=>m(e.data.x)).y1(e=>d(e[1])).y0(e=>d(e[0])).curve(g.zgE),v=c.map((e,t)=>{let r=j(e);return(0,n.jsx)("path",{d:r,opacity:1,stroke:"grey",fill:f(e.key),fillOpacity:.8},t)}),y=m.ticks(5).map((e,t)=>(0,n.jsxs)("g",{children:[(0,n.jsx)("line",{x1:m(e),x2:m(e),y1:0,y2:a,stroke:"#808080",opacity:.2}),(0,n.jsx)("text",{x:m(e),y:a+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t));return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:t,height:r,children:(0,n.jsxs)("g",{width:o,height:a,transform:"translate(".concat([x.left,x.top].join(","),")"),children:[y,v]})})})},f=e=>{let{width:t=700,height:r=400}=e;return(0,n.jsx)(m,{data:u,width:t,height:r})};var j=r(90505);let v=e=>{let t=[];return e.forEach(e=>{let r=t.find(t=>t.date===e.date);if(r)r[e.group]=e.value;else{let r={date:e.date};r[e.group]=e.value,t.push(r)}}),t},y=g.i$Z("%B %Y"),b=e=>{let{xScale:t,height:r}=e,i=t.ticks(5).map((e,i)=>(0,n.jsxs)("g",{children:[(0,n.jsx)("line",{x1:t(e),x2:t(e),y1:0,y2:r,stroke:"#808080",opacity:.2}),(0,n.jsx)("text",{x:t(e),y:r+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",fill:"none",opacity:.8,children:y(e)})]},i));return(0,n.jsx)(n.Fragment,{children:i})};var w=r(2719);let k=e=>{let{labelInfos:t,xStart:r,xEnd:i,biggestValue:s}=e,o=g.BYU().domain([0,s]).range([r+30,i-20]),a=t.map((e,t)=>{let i=Math.floor(e.value/1e6);return(0,n.jsxs)("g",{children:[(0,n.jsx)("line",{x1:r+2,x2:r+30-2,y1:e.position,y2:e.position,stroke:"#808080",opacity:.9,"stroke-dasharray":2}),(0,n.jsx)(S,{color:e.color,x:o(0),y:e.position-10,width:o(e.value)-o(0)}),(0,n.jsx)("text",{x:r+30+2,y:e.position,textAnchor:"start",alignmentBaseline:"central",fontSize:12,fill:"#808080",children:e.name+" | "+i+"M"})]},t)});return(0,n.jsx)(n.Fragment,{children:a})},S=e=>{let{color:t,x:r,y:i,width:s}=e,o=(0,w.q_)({to:{width:s},config:{friction:10,bounce:0}});return(0,n.jsx)(w.q.rect,{x:r,y:i,width:o.width,height:20,opacity:.7,stroke:t,fill:t,fillOpacity:.3,strokeWidth:1,rx:1})},B=e=>{let{x:t,height:r}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("line",{x1:t,x2:t,y1:0,y2:r,stroke:"black",strokeWidth:1})})};var D=r(21833),C=r.n(D);let A={top:10,right:250,bottom:90,left:0},z=g.Z1g("%Y-%m-%d"),T=e=>{let{width:t,height:r,data:s,startDate:o}=e,[a,l]=(0,i.useState)(null),h=t-A.right-A.left,c=r-A.top-A.bottom,d=s.filter(e=>z(e.date)>o),p=g.Fp7(d.map(e=>e.value)),u=[...new Set(s.map(e=>e.group))],x=v(d),m=g.knu().keys(u).order(g.Qxt).offset(g.KuJ),f=m(x),j=f.flatMap(e=>e.map(e=>e[1])),y=f.flatMap(e=>e.map(e=>e[0])),w=g.BYU().domain([Math.min(...y),Math.max(...j)]).range([c,0]),S=g.Wem(d.map(e=>z(e.date))),D=g.Xf().domain(S).range([0,h]),T=g.PKp().domain(u).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]),M=g.SOn().x(e=>D(z(e.data.date))).y1(e=>w(e[1])).y0(e=>w(e[0])).curve(g.zgE),_=f.map((e,t)=>{let r=M(e);return(0,n.jsx)("path",{className:C().shape,d:r,opacity:1,stroke:"grey",fill:T(e.key),fillOpacity:.8},t)}),I=f.map(e=>{let t=e[e.length-1],r=a?a[e.key]:t[1]-t[0];return{name:e.key,color:T(e.key),value:r,position:w((t[0]+t[1])/2)}}),E=e=>{let t=D.invert(e),r=1/0,n=null;for(let e of x){var i;let s=null===(i=z(e.date))||void 0===i?void 0:i.getTime();if(!s)return null;let o=Math.abs(s-t.getTime());o<r&&(r=o,n=e)}return n},N=e=>{let t=e.currentTarget.getBoundingClientRect(),r=e.clientX-t.left,n=E(r);l(n)};return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:t,height:r,children:(0,n.jsxs)("g",{width:h,height:c,transform:"translate(".concat([A.left,A.top].join(","),")"),onMouseMove:N,onMouseLeave:()=>l(null),children:[(0,n.jsx)("rect",{x:0,y:0,width:h,height:c,onMouseMove:N,onMouseLeave:()=>l(null),visibility:"hidden",pointerEvents:"all",cursor:"pointer"}),(0,n.jsx)(b,{xScale:D,height:c}),(0,n.jsx)(k,{labelInfos:I,xStart:D.range()[1],xEnd:t,biggestValue:p}),(0,n.jsx)("g",{className:C().container,children:_}),a&&(0,n.jsx)(B,{height:c,x:D(z(a.date)),biggestValue:p})]})})})},M=g.i$Z("%B %Y"),_=e=>{var t,r;let{width:s,height:o}=e,[a,l]=(0,i.useState)(),[h,c]=(0,i.useState)(z("2015-01-01"));return((0,i.useEffect)(()=>{let e=async()=>{let e=await fetch("https://raw.githubusercontent.com/holtzy/react-graph-gallery/main/data/data_page_views.csv"),t=await e.text(),r=(0,g.ueB)(t);l(r)};e()},[]),a&&h)?(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{style:{height:150},children:[(0,n.jsx)("p",{style:{fontSize:17,paddingTop:40,marginBottom:0},children:(0,n.jsx)("b",{children:"Chat-GPT hasn't impacted tech websites traffic significantly (yet)"})}),(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)("p",{style:{fontSize:12,width:155,paddingTop:11},children:["Data since ",(0,n.jsx)("b",{children:M(h)})]}),(0,n.jsx)("input",{type:"range",min:null===(t=z("2015-01-01"))||void 0===t?void 0:t.getTime(),max:null===(r=z("2022-09-01"))||void 0===r?void 0:r.getTime(),value:h.getTime(),step:1e4,onChange:e=>c(new Date(Number(e.target.value))),style:{height:1,opacity:.5,width:80}})]})]}),(0,n.jsx)(T,{width:s,height:o-150,data:a,startDate:h})]}):null},I=e=>{let{width:t=700,height:r=400}=e;return(0,n.jsx)(_,{width:t,height:r})};var E=r(66717),N=r(56438);let R=[{x:1,groupA:38,groupB:19,groupC:9,groupD:4},{x:2,groupA:16,groupB:14,groupC:96,groupD:40},{x:3,groupA:164,groupB:96,groupC:64,groupD:40},{x:4,groupA:32,groupB:65,groupC:64,groupD:40},{x:5,groupA:12,groupB:80,groupC:14,groupD:10},{x:6,groupA:12,groupB:180,groupC:14,groupD:10},{x:7,groupA:12,groupB:70,groupC:14,groupD:10},{x:8,groupA:12,groupB:30,groupC:24,groupD:10},{x:9,groupA:190,groupB:18,groupC:34,groupD:10},{x:10,groupA:10,groupB:18,groupC:4,groupD:10}];var W=r(17518),O=r.n(W);let Y={top:30,right:30,bottom:50,left:50},G=e=>{let{width:t,height:r,data:s}=e,o=t-Y.right-Y.left,a=r-Y.top-Y.bottom,l=["groupA","groupB","groupC","groupD"],h=g.knu().keys(l).order(g.Qxt).offset(g.KuJ),c=h(s),d=c.flatMap(e=>e.map(e=>e[1])),p=Math.max(...d),u=c.flatMap(e=>e.map(e=>e[0])),x=Math.min(...u),m=(0,i.useMemo)(()=>g.BYU().domain([x,p]).range([a,0]),[s,r]),[f,j]=g.Wem(s,e=>e.x),v=(0,i.useMemo)(()=>g.BYU().domain([f||0,j||0]).range([0,o]),[s,t]),y=g.PKp().domain(l).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]),b=g.SOn().x(e=>v(e.data.x)).y1(e=>m(e[1])).y0(e=>m(e[0])).curve(g.zgE),w=c.map((e,t)=>{let r=b(e);return(0,n.jsx)("path",{className:O().shape,d:r,opacity:1,stroke:"grey",fill:y(e.key),fillOpacity:.8,cursor:"pointer"},t)}),k=v.ticks(5).map((e,t)=>(0,n.jsxs)("g",{children:[(0,n.jsx)("line",{x1:v(e),x2:v(e),y1:0,y2:a,stroke:"#808080",opacity:.2}),(0,n.jsx)("text",{x:v(e),y:a+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t));return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:t,height:r,children:(0,n.jsxs)("g",{width:o,height:a,transform:"translate(".concat([Y.left,Y.top].join(","),")"),children:[k,(0,n.jsx)("g",{className:O().container,children:w})]})})})},P=e=>{let{width:t=700,height:r=400}=e;return(0,n.jsx)(G,{data:R,width:t,height:r})};var H=r(65079),F=r(18893);let L=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["A"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/graph/streamgraph.html",children:"streamgraph"})," ","is a variation of the more common"," ",(0,n.jsx)(d(),{href:"stacked-area-plot",children:"stacked area chart"}),". It rounds edges and displays areas around the central axis which gives a nice impression of flow."]}),(0,n.jsxs)("p",{children:["This section explains how to ",(0,n.jsx)("b",{children:"stack"})," and ",(0,n.jsx)("b",{children:"smooth"})," the data with"," ",(0,n.jsx)("code",{children:"d3.js"}),", and render the shapes with ",(0,n.jsx)("code",{children:"react"}),". It starts from the basic and goes until necessary customization like"," ",(0,n.jsx)("b",{children:"tooltips"}),", ",(0,n.jsx)("b",{children:"hover effect"}),", legend and ",(0,n.jsx)("b",{children:"annotation"}),". Examples always come with editable sandboxes."]})]});function U(){return(0,n.jsxs)(s.A,{title:"Streamchart with React",seoDescription:"How to build a stream chart with React and D3.js. A set of re-usable components",children:[(0,n.jsx)(o.Z,{title:"Streamchart",description:L,chartType:"stream"}),(0,n.jsx)("h2",{id:"data",children:"The Data"})," ",(0,n.jsxs)("p",{children:["Most of the time the input dataset is an ",(0,n.jsx)("b",{children:"array"})," where each item is an ",(0,n.jsx)("b",{children:"object"}),"."]}),(0,n.jsxs)("p",{children:["Each object provides information for a step on the X axis. It has a value like ",(0,n.jsx)("code",{children:"x"})," or ",(0,n.jsx)("code",{children:"date"})," that provides the exact position on the X axis. Then it has several numeric values, one for"," ",(0,n.jsx)("b",{children:"each group"})," of the dataset."]}),(0,n.jsx)("p",{children:"Here is a minimal example:"}),(0,n.jsx)(l.d,{code:q}),(0,n.jsx)("h3",{children:"→ Wide and Long formats"}),(0,n.jsxs)("p",{children:["The format described above is often called the ",(0,n.jsx)("b",{children:"wide"})," format. Another common format is the ",(0,n.jsx)("b",{children:"long"})," format, where each object in the array provides information for 1 group only. (The array becomes way"," ",(0,n.jsx)("i",{children:"longer"})," \uD83D\uDE43)"]}),(0,n.jsxs)("p",{children:["If your dataset is formatted using the long format, you can transform it using the ",(0,n.jsx)("code",{children:"pivotWider"})," function below:"]}),(0,n.jsx)(E.U,{startOpen:!1,title:(0,n.jsx)("span",{children:"Pivot function"}),children:(0,n.jsx)(l.d,{code:X})}),(0,n.jsxs)("h3",{children:["→ ",(0,n.jsx)("code",{children:".csv"})," data"]}),(0,n.jsxs)("p",{children:["If your data is in ",(0,n.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,n.jsx)("code",{children:"csvParse()"})," function of d3. I'll write a blogpost soon on how to deal with the csv format."," ",(0,n.jsx)(d(),{href:"/subscribe",children:"Subscribe"})," to the project to know when it is ready!"]}),(0,n.jsx)(F.H,{text:"Add some more hints on how to type those data objects"}),(0,n.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,n.jsxs)("p",{children:["The goal here is to create a ",(0,n.jsx)("code",{children:"StreamGraph"})," component that will be stored in a ",(0,n.jsx)("code",{children:"StreamGraph.tsx"})," file. This component requires 3 props to render: a ",(0,n.jsx)("code",{children:"width"}),", a ",(0,n.jsx)("code",{children:"height"}),", and some ",(0,n.jsx)("code",{children:"data"}),"."]}),(0,n.jsxs)("p",{children:["The shape of the ",(0,n.jsx)("code",{children:"data"})," is described above. The"," ",(0,n.jsx)("code",{children:"width"})," and ",(0,n.jsx)("code",{children:"height"})," will be used to render an"," ",(0,n.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the graph."]}),(0,n.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our"," ",(0,n.jsx)("code",{children:"StreamGraph"})," component:"]}),(0,n.jsx)(l.d,{code:V}),(0,n.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the SVG ",(0,n.jsx)("code",{children:"circle"}),", but it's React that will render them in the ",(0,n.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,n.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,n.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,n.jsx)("h2",{id:"Stacking",children:"Stacking series"}),(0,n.jsxs)("p",{children:["Building a stream chart requires to ",(0,n.jsx)("b",{children:"stack"})," the data. Series are displayed one on top of each other and you have to compute their positions on the Y axis."]}),(0,n.jsxs)("p",{children:["Fortunately, ",(0,n.jsx)("code",{children:"D3.js"})," has a handy ",(0,n.jsx)("code",{children:"stack()"})," ","function that does exactly that. The process is deeply explained in the"," ",(0,n.jsx)(d(),{href:"stacked-area-plot",children:"stacked area chart"})," section of the gallery."]}),(0,n.jsx)(N.J,{href:"stacked-area-plot",isFilled:!0,size:"sm",children:"Stacking explanation"}),(0,n.jsxs)("p",{className:"mt-10",children:["The only variation required here is to use the"," ",(0,n.jsx)("code",{children:"d3.stackOffsetSilhouette"})," offset option. Instead of stacking everything ",(0,n.jsx)("b",{children:"above"})," the 0 baseline, it will put groups on both parts of it."]}),(0,n.jsx)("p",{children:"Computing the position of the chart series should look something like:"}),(0,n.jsx)(l.d,{code:K}),(0,n.jsx)("h2",{id:"basic example",children:"Basic streamgraph example"})," ",(0,n.jsxs)("p",{children:["Once more, the process to render the shape is very close to the"," ",(0,n.jsx)(d(),{href:"stacked-area-plot",children:"stacked area chart"}),". A few variations are required though."]}),(0,n.jsx)("h3",{children:"→ Smoothing"}),(0,n.jsxs)("p",{children:["We need to smooth the area shape to get the good-looking organic flow. Once more d3 is here to the rescue with a"," ",(0,n.jsx)("a",{href:"https://github.com/d3/d3-shape#curves",children:"curve"})," function that does all the work for us."]}),(0,n.jsxs)("p",{children:["This is how to call the ",(0,n.jsx)("code",{children:"curve"})," function and the end of the"," ",(0,n.jsx)("code",{children:"area"})," function call:"]}),(0,n.jsx)(l.d,{code:Z}),(0,n.jsx)("h3",{children:"→ Axis"}),(0,n.jsxs)("p",{children:[(0,n.jsx)(d(),{href:"build-axis-with-react",children:"Usual axes"})," do not work for streamgraphs. The Y axis would make no sense since shapes are on both side of the 0 baseline. It is commonly"," ",(0,n.jsx)("a",{href:"https://www.dataviz-inspiration.com/stream",children:"removed"}),". The X axis would feel lost alone at the very bottom of the chart."]}),(0,n.jsxs)("p",{children:["Here I suggest to replace the X axis with ",(0,n.jsx)("b",{children:"vertical ablines"})," and remove the Y axis completely."]}),(0,n.jsx)(h.$,{vizName:"StreamGraphBasic",VizComponent:f,height:400,maxWidth:600,caption:"Most basic streamgraph with react and d3.js"}),(0,n.jsx)(j.r,{chartId:"stream"}),(0,n.jsx)("h2",{id:"hover effect",children:"Hover effect"}),(0,n.jsxs)("p",{children:["It is pretty hard to follow the evolution of a ",(0,n.jsx)("b",{children:"specific group"})," on a streamgraph."]}),(0,n.jsxs)("p",{children:["It is common to add an hover effect to the figure: hovering over a group will ",(0,n.jsx)("b",{children:"highlight"})," it, making it easier to follow its evolution. Try it on the graph below:"]}),(0,n.jsx)(h.$,{vizName:"StreamGraphHoverEffect",VizComponent:P,height:400,maxWidth:600,caption:"StreamGraph with hover effect that highlights a specific series"}),(0,n.jsx)("p",{children:"There are various strategies to implement such an hover effect."}),(0,n.jsxs)("p",{children:["Here, I suggest to do everything in ",(0,n.jsx)("b",{children:"css"})," using"," ",(0,n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes",children:"pseudo classes"}),", and targetting svg elements only. Basically, everything in the svg container will be ",(0,n.jsx)("b",{children:"dimmed"})," (lower ",(0,n.jsx)("b",{children:"opacity"})," and"," ",(0,n.jsx)("b",{children:"saturation"}),") when the mouse goes over the chart. But the specific shape that is hovered over will keep its full opacity thanks to a more"," ",(0,n.jsx)("b",{children:"specific"})," css selector."]}),(0,n.jsx)("p",{children:"Hover effect is a big topic and I will post more about it soon!"}),(0,n.jsx)(N.J,{href:"/subscribe",isFilled:!0,size:"sm",children:"Know when"}),(0,n.jsx)(p.Z,{chartId:"stream"}),(0,n.jsx)("h2",{id:"transition",children:"Streamgraph algorithm with transition"}),(0,n.jsxs)("p",{children:["Our streamgraph is renderer using a set of ",(0,n.jsx)("code",{children:"path"}),". The"," ",(0,n.jsx)("code",{children:"d"})," attribute of those paths provides the boundary"," ",(0,n.jsx)("b",{children:"coordinates"})," of those paths."]}),(0,n.jsxs)("p",{children:["When a prop of the ",(0,n.jsx)("code",{children:"StreamGraph"})," component updates, we might want to update the paths to represent the latest state of our application. It can be an update of the ",(0,n.jsx)("b",{children:"dataset"}),", or an update of the function used to ",(0,n.jsx)("b",{children:"stack"})," the data or ",(0,n.jsx)("b",{children:"smooth"})," the area as below."]}),(0,n.jsxs)("p",{children:["It is possible to smoothly animate this transition thanks to"," ",(0,n.jsx)("code",{children:"react-spring"}),"."]}),(0,n.jsx)(h.$,{vizName:"StreamGraphShapeTransition",VizComponent:H.v,height:600,maxWidth:600,caption:"Try d3.js various options to offset the data and smooth shapes. See a smooth transition between options."}),(0,n.jsxs)("p",{children:["The animation suggested above is a bit tricky to implement. Indeed, we need to transition from paths that ",(0,n.jsx)("b",{children:"do not have the same number"})," of edges. It is possible thanks to a library called ",(0,n.jsx)("code",{children:"flubber"})," ","but definitely deserves its own blogpost."]}),(0,n.jsx)("p",{children:"I'll publish a full blogpost on the topic soon!"}),(0,n.jsx)(N.J,{href:"/subscribe",isFilled:!0,size:"sm",children:"Get notified"}),(0,n.jsx)(F.H,{text:"find why flubber does some weird interpolation in some cases"}),(0,n.jsx)("h2",{id:"application",children:"Application"})," ",(0,n.jsxs)("p",{children:["The following chart is a real-life application of a ",(0,n.jsx)("b",{children:"streamgraph"}),". It shows the evolution if the ",(0,n.jsx)("b",{children:"number of page-views"})," for 5 tech websites in the last 7 years. My goal was to assess if the rise of"," ",(0,n.jsx)("a",{href:"https://openai.com/blog/chatgpt",children:"chat-GPT"})," had an impact on it."]}),(0,n.jsxs)("p",{children:["This ",(0,n.jsx)("b",{children:"interactive"})," chart has several interesting features:"]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"slider"}),": you can control the displayed time-frame thanks to a slider."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"inline legend"}),": label of each series are written inline. A background proportional to their value provides additional insight."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"hover effect"}),": legend will be updated with precise values at the hovered timestamp."]})]}),(0,n.jsx)(h.$,{vizName:"StreamGraphPageViews",VizComponent:I,height:600,maxWidth:900,caption:"A customized streamgraph built with React and D3.js. It has inline legends, slider to control timeframe, hover effect and more."}),(0,n.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,n.jsx)(a.Z,{chartFamily:"evolution"}),(0,n.jsx)("div",{className:"mt-20"})]})}let q="\nconst data = [\n  {\n    x: 1,\n    groupA: 38,\n    groupB: 19,\n  },\n  {\n    x: 2,\n    groupA: 16,\n    groupB: 14,\n  },\n  ...\n];\n".trim(),K="\nconst stackSeries = d3\n  .stack()\n  .keys(groups)\n  .order(d3.stackOrderNone)\n  .offset(d3.stackOffsetSilhouette);\nconst series = stackSeries(data);\n".trim(),X="\ntype LongDataItem = {\n  date: string;\n  group: string;\n  value: number;\n};\n\ntype WideDataItem = {\n  date: string;\n} & { [key: string]: number }\n\nconst pivotWider = (data: LongDataItem[]) => {\n  const result: WideDataItem[] = [];\n\n  data.forEach((item) => {\n      const existingEntry = result.find((entry) => entry.date === item.date);\n\n      if (existingEntry) {\n          existingEntry[item.group] = item.value;\n      } else {\n          const newEntry = { date: item.date };\n          newEntry[item.group] = item.value;\n          result.push(newEntry);\n      }\n  });\n\n  return result;\n}\n".trim(),V='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype WideDataItem = {\n  date: string;\n} & { [key: string]: number }\n\ntype StreamGraphProps = {\n  width: number;\n  height: number;\n  data: WideDataItem[];\n};\n\nexport const StreamGraph = ({ width, height, data }: StreamGraphProps) => {\n\n  // read the data\n  // find the list of groups to display\n  // stack the data\n  // build the shapes\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render all the shapes\n      </svg>\n    </div>\n  );\n};\n'.trim(),Z="\nconst areaBuilder = d3\n  .area()\n  .x(d => xScale(x))\n  .y1(d => yScale(d[1]))\n  .y0(d => yScale(d[0]))\n  .curve(curveCatmullRom);\n".trim()},65079:function(e,t,r){"use strict";r.d(t,{v:function(){return f}});var n=r(85893),i=r(67294),s=r(43950),o=r(40295),a=r.n(o),l=r(95334),h=r(86824);let c=e=>{let{path:t,color:r}=e,s=(0,i.useRef)(t),o=(0,i.useMemo)(()=>(0,l.interpolate)(s.current,t),[t]),c=(0,h.q_)({from:{t:0},to:{t:1},reset:s.current!==t,onChange:e=>{let{t}=e;s.current=o(t||1)},config:{friction:100,bounce:0}});return(0,n.jsx)(h.q.path,{d:(0,h.to)(c.t,o),className:a().shape,opacity:1,stroke:"grey",fill:r,fillOpacity:.8,cursor:"pointer"})},d={top:30,right:30,bottom:50,left:50},p={silouhette:s.KuJ,wiggle:s.YGu,none:s.HLf,diverging:s.W$j,expand:s.pBl},u={curveBasis:s.$0Z,bumpX:s.qpX,bumpY:s.u93,curveCardinal:s.YY7,catMullRom:s.zgE,curveLinear:s.c_6,curveNatural:s.SxZ,curveStep:s.eA_},g=e=>{let{width:t,height:r,data:i,offsetType:o,curveType:l}=e,h=t-d.right-d.left,g=r-d.top-d.bottom,x=["groupA","groupB","groupC","groupD"],m=s.knu().keys(x).order(s.Qxt).offset(p[o]),f=m(i),j=f.flatMap(e=>e.map(e=>e[1])),v=f.flatMap(e=>e.map(e=>e[0])),y=s.BYU().domain([Math.min(...v),Math.max(...j)]).range([g,0]),[b,w]=s.Wem(i,e=>e.x),k=s.BYU().domain([b||0,w||0]).range([0,h]),S=s.PKp().domain(x).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]),B=s.SOn().x(e=>k(e.data.x)).y1(e=>y(e[1])).y0(e=>y(e[0])).curve(u[l]),D=f.map((e,t)=>{let r=B(e);return r?(0,n.jsx)(c,{path:r,color:S(e.key)},t):null}),C=k.ticks(5).map((e,t)=>(0,n.jsxs)("g",{children:[(0,n.jsx)("line",{x1:k(e),x2:k(e),y1:0,y2:g,stroke:"#808080",opacity:.2}),(0,n.jsx)("text",{x:k(e),y:g+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t));return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:t,height:r,children:(0,n.jsxs)("g",{width:h,height:g,transform:"translate(".concat([d.left,d.top].join(","),")"),children:[C,(0,n.jsx)("g",{className:a().container,children:D})]})})})},x=[{x:1,groupA:38,groupB:19,groupC:9,groupD:4},{x:2,groupA:16,groupB:14,groupC:96,groupD:40},{x:3,groupA:164,groupB:96,groupC:64,groupD:40},{x:4,groupA:32,groupB:65,groupC:64,groupD:40},{x:5,groupA:12,groupB:80,groupC:14,groupD:10},{x:6,groupA:12,groupB:180,groupC:14,groupD:10},{x:7,groupA:12,groupB:70,groupC:14,groupD:10},{x:8,groupA:12,groupB:30,groupC:24,groupD:10},{x:9,groupA:190,groupB:18,groupC:34,groupD:10},{x:10,groupA:10,groupB:18,groupC:4,groupD:10}],m=e=>{let{width:t=700,height:r=400}=e,[s,o]=(0,i.useState)("silouhette"),[a,l]=(0,i.useState)("catMullRom");return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{style:{height:250,display:"flex",marginTop:20,alignItems:"center"},children:[(0,n.jsx)("span",{style:{fontSize:14,marginRight:5},children:"Offset type"}),(0,n.jsxs)("select",{onChange:e=>{o(e.target.value)},value:s,style:{fontSize:14},children:[(0,n.jsx)("option",{value:"silouhette",children:"Silouhette"}),(0,n.jsx)("option",{value:"none",children:"None"}),(0,n.jsx)("option",{value:"wiggle",children:"Wiggle"}),(0,n.jsx)("option",{value:"diverging",children:"Diverging"}),(0,n.jsx)("option",{value:"expand",children:"Expand"})]}),(0,n.jsx)("span",{style:{fontSize:14,marginRight:5,marginLeft:35},children:"Curve type"}),(0,n.jsxs)("select",{onChange:e=>{l(e.target.value)},value:a,style:{fontSize:14},children:[(0,n.jsx)("option",{value:"curveBasis",children:"Cubic basis spline"}),(0,n.jsx)("option",{value:"bumpX",children:"Bezier Curve Horizontal"}),(0,n.jsx)("option",{value:"bumpY",children:"Bezier Curve Vertical"}),(0,n.jsx)("option",{value:"curveCardinal",children:"Cubic cardinal spline "}),(0,n.jsx)("option",{value:"catMullRom",children:"Catmull–Rom spline"}),(0,n.jsx)("option",{value:"curveLinear",children:"Polyline"}),(0,n.jsx)("option",{value:"curveNatural",children:"Natural cubic spline"}),(0,n.jsx)("option",{value:"curveStep",children:"Step function"})]})]}),(0,n.jsx)(g,{data:x,width:t,height:r-250,offsetType:s,curveType:a})]})},f=e=>{let{width:t=700,height:r=400}=e;return(0,n.jsx)(m,{width:t,height:r})}},17518:function(e){e.exports={container:"streamgraph_container__PYC39",shape:"streamgraph_shape__uzF2l"}},21833:function(e){e.exports={container:"streamgraph_container__CKZPD",shape:"streamgraph_shape__yACWA"}},40295:function(e){e.exports={container:"streamgraph_container__MBKks",shape:"streamgraph_shape__C8gBF"}}},function(e){e.O(0,[2343,7754,3950,7823,2719,7303,8190,3710,2594,6588,9774,2888,179],function(){return e(e.s=87591)}),_N_E=e.O()}]);