(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3891],{22938:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/radar-chart",function(){return a(17675)}])},61651:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(85893);a(67294);var r=a(49871),s=a(28843),i=a(77522);let o={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function l(e){let{chartFamily:t}=e,a=s.c.filter(e=>e.family===t).map((e,t)=>{let a=(0,i.y)(e.reactURL);return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,n.jsx)(r.Z,{link:a,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:122})},t)});return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==o?void 0:o[t]}),(0,n.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:a})]})}},81122:function(e,t,a){"use strict";a.d(t,{$:function(){return c}});var n=a(85893),r=a(67294),s=a(59973),i=a(80615),o=a(88578),l=a(5);let c=e=>{let{VizComponent:t,vizName:a,height:c=400,maxWidth:d=800,caption:h}=e,[x,m]=(0,r.useState)(!1),u=(0,r.useRef)(null),p=(0,s.B)(u);return(0,n.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:x?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,n.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,n.jsx)(o.X,{vizName:a})}),(0,n.jsx)("div",{className:"flex justify-center mt-2",children:(0,n.jsx)(l.z,{size:"sm",onClick:()=>m(!x),children:"Hide Sandbox"})})]}):(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,n.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:u,className:"pointer-events-auto",children:(0,n.jsx)(t,{height:c,width:p.width})})}),(0,n.jsx)(i.Y,{children:h}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(l.z,{size:"sm",onClick:()=>m(!x),children:"Show code"})})]})})}},88578:function(e,t,a){"use strict";a.d(t,{X:function(){return r}});var n=a(85893);a(67294);let r=e=>{let{vizName:t,height:a="500px",fileToOpen:r}=e;return(0,n.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split"+(r?"&module=/".concat(r):""),style:{width:"100%",height:a,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},26820:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(85893);a(67294);var r=a(28843),s=a(56438);let i=e=>{let{imgLink:t,height:a,opacity:r,children:s}=e;return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{style:{backgroundImage:"url("+t+")",height:a,backgroundAttachment:"fixed",opacity:r,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,n.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:s})]})};function o(e){var t;let{chartId:a}=e,o=(null===(t=r.c.find(e=>e.id===a))||void 0===t?void 0:t.label)||"chart";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{id:"inspiration",children:o+" inspiration"}),(0,n.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,n.jsx)("span",{children:o}),", note that"," ",(0,n.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,n.jsx)("div",{className:"border mb-10",children:(0,n.jsx)(i,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,n.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,n.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,n.jsxs)("p",{className:"text-center text-sm",children:[(0,n.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,n.jsx)("span",{children:o})," ","looks good!"]}),(0,n.jsx)(s.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},52450:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(85893);a(67294);var r=a(92050),s=a(49975),i=a(59942);function o(e){let{images:t}=e,a=r.F.filter(e=>t.includes(e.img)).map((e,t)=>(0,n.jsx)(s.X,{link:e.link,title:e.title,description:(0,n.jsx)("p",{children:e.description}),img:e.img,alt:e.alt},t));return(0,n.jsx)(i.E,{children:a})}},80153:function(e,t,a){"use strict";a.d(t,{A:function(){return x}});var n=a(85893),r=a(49700),s=a(63476),i=a(67294),o=a(63084),l=a.n(o);function c(){let[e,t]=(0,i.useState)([]),[a,r]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,i.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),a=window.scrollY+150,n=t.reduce((e,t)=>Math.abs(t-a)<Math.abs(e-a)?t:e,0),s=t.findIndex(e=>e===n);r(-1===s?0:s)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,n.jsx)("div",{className:l().tableOfContent,children:e.map((t,r)=>(0,n.jsx)("p",{className:a===r?"".concat(l().tocItem," ").concat(l().tocItemActive):l().tocItem,onClick:t=>{t.preventDefault(),e[r].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=a(17414),h=a(62594);let x=e=>{let{children:t,title:a,seoDescription:i}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{title:a,seoDescription:i}),(0,n.jsx)(r.Z,{}),(0,n.jsx)("div",{className:"wrapper",children:t}),(0,n.jsx)(h.Z,{}),(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(s.Z,{})}),(0,n.jsx)(c,{})]})}},90505:function(e,t,a){"use strict";a.d(t,{r:function(){return c}});var n=a(85893),r=a(41664),s=a.n(r),i=a(28843),o=a(66717),l=a(3572);let c=e=>{let{chartId:t}=e,a=i.c.filter(e=>e.id===t)[0].label;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{id:"responsiveness",children:"Responsive "+a+" with react"}),(0,n.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,n.jsx)("code",{children:"width"})," and ",(0,n.jsx)("code",{children:"height"})," and will render a ",a," of those dimensions."]}),(0,n.jsxs)("p",{children:["Making the ",a," responsive requires adding a ",(0,n.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,n.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,n.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,n.jsx)(o.U,{title:(0,n.jsxs)("span",{children:[(0,n.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,n.jsx)(l.d,{code:d})}),(0,n.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,n.jsx)(s(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})},d='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},49871:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(85893);a(67294);var r=a(95887),s=a(28843),i=a(41664),o=a.n(i);let l=s.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:a,link:s,isAvailable:i,size:c}=e,h=l.includes(t),x=i?"opacity-100":"opacity-20";return(0,n.jsx)(o(),{href:i?s:"subscribe",className:"no-underline",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+x+" "+(i?"cursor-pointer":"cursor-not-allowed"),children:[(0,n.jsx)("div",{className:"absolute",children:(0,n.jsx)(r.Z,{chartLogo:t,size:c})}),h?(0,n.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,n.jsx)(d,{size:c})}):(0,n.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,n.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,n.jsx)("p",{className:"font-light text-sm text-gray-600 "+x,children:a})]})})}let d=e=>{let{size:t}=e;return(0,n.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,n.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},66717:function(e,t,a){"use strict";a.d(t,{U:function(){return r}});var n=a(85893);let r=e=>{let{title:t,children:a}=e;return(0,n.jsxs)("details",{className:"bg-gray-50 py-2 px-4 rounded-md my-2",children:[(0,n.jsx)("summary",{className:"cursor-pointer",children:t}),(0,n.jsx)("div",{className:"pt-4",children:a})]})}},80615:function(e,t,a){"use strict";a.d(t,{Y:function(){return r}});var n=a(85893);let r=e=>{let{children:t}=e;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,a){"use strict";a.d(t,{d:function(){return d}});var n=a(85893),r=a(32581),s=a(15660),i=a.n(s),o=a(67294),l=a(45993),c=a.n(l);let d=e=>{let{code:t}=e,[a,s]=(0,o.useState)(!1),l=(0,o.useRef)(null);(0,o.useEffect)(()=>{l.current&&i().highlightElement(l.current)},[l,t]);let d=(0,n.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),s(!0)},className:c().codeChunckCopyButton,children:a?"Copied":(0,n.jsx)(r.Z,{size:14,style:{padding:0}})});return(0,n.jsxs)("div",{className:"mb-6 relative",children:[(0,n.jsx)("pre",{className:"rounded-md line-numbers",children:(0,n.jsx)("code",{ref:l,className:"language-javascript",children:t})}),(0,n.jsx)("div",{className:c().copyButtonContainer,children:d})]})}},18893:function(e,t,a){"use strict";a.d(t,{H:function(){return r}});var n=a(85893);let r=e=>{let{text:t}=e;return(0,n.jsxs)("blockquote",{className:"mt-10 opacity-20",children:[(0,n.jsx)("b",{className:"text-reactGallery mr-4",children:"ToDo"}),t]})}},59973:function(e,t,a){"use strict";a.d(t,{B:function(){return r}});var n=a(67294);let r=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[a,r]=(0,n.useState)(t),s=()=>{r(t())};return(0,n.useEffect)(()=>(window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)),[]),(0,n.useEffect)(()=>{s()},[e]),a}},17675:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return B}});var n=a(85893);a(67294);var r=a(80153),s=a(43710),i=a(61651),o=a(3572),l=a(81122),c=a(26820),d=a(90505),h=a(41664),x=a.n(h);let m={speed:5.1,acceleration:9.5,conso:1.4,safety:.1,style:90,price:7,name:"mercedes"};var u=a(43950);let p=(e,t)=>({x:t*Math.cos(e),y:t*Math.sin(e)}),f="lightGrey",j=e=>{let{outerRadius:t,xScale:a,axisConfig:r}=e,s=u.XBu(),i=r.map((e,r)=>{let i=a(e.name);if(void 0===i)return null;let o=s([[i,40],[i,t]]),l=p(i-Math.PI/2,t+10);return(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{d:o,stroke:f,strokeWidth:.5,rx:1}),(0,n.jsx)("text",{x:l.x,y:l.y,fontSize:12,fill:f,textAnchor:l.x>0?"start":"end",dominantBaseline:"middle",children:e.name})]},r)}),o=[...[,,,,,].keys()].map((e,a)=>(0,n.jsx)("circle",{cx:0,cy:0,r:40+e*(t-40)/4,stroke:f,fill:"none"},a));return(0,n.jsxs)("g",{children:[i,o]})},g=e=>{let{width:t,height:a,data:r,axisConfig:s}=e,i=Math.min(t,a)/2-30,o=s.map(e=>e.name),l=u.tiA().domain(o).range([0,2*Math.PI]),c={};s.forEach(e=>{c[e.name]=u.s$j().domain([0,e.max]).range([40,i])});let d=u.XBu(),h=s.map(e=>{var t;let a=c[e.name],n=null!==(t=l(e.name))&&void 0!==t?t:0,s=a(r[e.name]);return[n,s]});h.push(h[0]);let x=d(h);return(0,n.jsx)("svg",{width:t,height:a,children:(0,n.jsxs)("g",{transform:"translate("+t/2+","+a/2+")",children:[(0,n.jsx)(j,{outerRadius:i,xScale:l,axisConfig:s}),(0,n.jsx)("path",{d:x,stroke:"#cb1dd1",strokeWidth:3,fill:"#cb1dd1",fillOpacity:.1})]})})},v=e=>{let{width:t=700,height:a=400}=e;return(0,n.jsx)(g,{data:m,width:t,height:a,axisConfig:[{name:"speed",max:10},{name:"acceleration",max:10},{name:"conso",max:10},{name:"safety",max:2},{name:"style",max:1e3},{name:"price",max:100}]})},w=[{speed:5.1,acceleration:9.5,conso:1.4,safety:.1,style:90,price:7,name:"mercedes"},{speed:4.9,acceleration:3,conso:9.4,safety:.2,style:590,price:76,name:"peugeot"},{speed:2.7,acceleration:1.2,conso:1.3,safety:.9,style:990,price:96,name:"honda"}],b=(e,t)=>({x:t*Math.cos(e),y:t*Math.sin(e)}),y="grey",k=e=>{let{outerRadius:t,xScale:a,axisConfig:r}=e,s=u.XBu(),i=r.map((e,r)=>{let i=a(e.name);if(void 0===i)return null;let o=s([[i,40],[i,t]]),l=b(i-Math.PI/2,t+10);return(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{d:o,stroke:y,strokeWidth:.5,rx:1}),(0,n.jsx)("text",{x:l.x,y:l.y,fontSize:12,fill:y,textAnchor:l.x>0?"start":"end",dominantBaseline:"middle",children:e.name})]},r)}),o=[...[,,,,,].keys()].map((e,a)=>(0,n.jsx)("circle",{cx:0,cy:0,r:40+e*(t-40)/4,stroke:y,fill:"none"},a));return(0,n.jsxs)("g",{children:[i,o]})},N=e=>{let{width:t,height:a,data:r,axisConfig:s}=e,i=Math.min(t,a)/2-40,o=s.map(e=>e.name),l=u.tiA().domain(o).range([0,2*Math.PI]),c={};return s.forEach(e=>{c[e.name]=u.s$j().domain([0,e.max]).range([40,i])}),(0,n.jsx)("svg",{width:t,height:a,children:(0,n.jsx)("g",{transform:"translate("+t/2+","+a/2+")",children:(0,n.jsx)(k,{outerRadius:i,xScale:l,axisConfig:s})})})},R=e=>{let{width:t=700,height:a=400}=e;return(0,n.jsx)(N,{data:w,width:t,height:a,axisConfig:[{name:"speed",max:10},{name:"acceleration",max:10},{name:"conso",max:10},{name:"safety",max:2},{name:"style",max:1e3},{name:"price",max:100}]})},z=[{speed:5.1,acceleration:9.5,conso:1.4,safety:.1,style:90,price:7,name:"mercedes"},{speed:4.9,acceleration:3,conso:9.4,safety:.2,style:590,price:76,name:"peugeot"},{speed:2.7,acceleration:1.2,conso:1.3,safety:.9,style:990,price:96,name:"honda"}],C=(e,t)=>({x:t*Math.cos(e),y:t*Math.sin(e)}),I="lightGrey",T=e=>{let{outerRadius:t,xScale:a,axisConfig:r}=e,s=u.XBu(),i=r.map((e,r)=>{let i=a(e.name);if(void 0===i)return null;let o=s([[i,40],[i,t]]),l=C(i-Math.PI/2,t+10);return(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{d:o,stroke:I,strokeWidth:.5,rx:1}),(0,n.jsx)("text",{x:l.x,y:l.y,fontSize:12,fill:I,textAnchor:l.x>0?"start":"end",dominantBaseline:"middle",children:e.name})]},r)}),o=[...[,,,,,].keys()].map((e,a)=>(0,n.jsx)("circle",{cx:0,cy:0,r:40+e*(t-40)/4,stroke:I,fill:"none"},a));return(0,n.jsxs)("g",{children:[i,o]})},M=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],S=e=>{let{width:t,height:a,data:r,axisConfig:s}=e,i=Math.min(t,a)/2-30,o=s.map(e=>e.name),l=u.tiA().domain(o).range([0,2*Math.PI]),c={};s.forEach(e=>{c[e.name]=u.s$j().domain([0,e.max]).range([40,i])});let d=r.map(e=>e.name),h=u.PKp().domain(d).range(M),x=u.XBu(),m=r.map((e,t)=>{let a=s.map(t=>{var a;let n=c[t.name],r=null!==(a=l(t.name))&&void 0!==a?a:0,s=n(e[t.name]);return[r,s]});a.push(a[0]);let r=x(a);if(r)return(0,n.jsx)("path",{d:r,stroke:h(e.name),strokeWidth:3,fill:h(e.name),fillOpacity:.1},t)});return(0,n.jsx)("svg",{width:t,height:a,children:(0,n.jsxs)("g",{transform:"translate("+t/2+","+a/2+")",children:[(0,n.jsx)(T,{outerRadius:i,xScale:l,axisConfig:s}),m]})})},E=e=>{let{width:t=700,height:a=400}=e;return(0,n.jsx)(S,{data:z,width:t,height:a,axisConfig:[{name:"speed",max:10},{name:"acceleration",max:10},{name:"conso",max:10},{name:"safety",max:2},{name:"style",max:1e3},{name:"price",max:100}]})};var _=a(18893),A=a(52450);let D=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["A"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/caveat/spider.html",children:"radar or spider or web chart"})," ","is a two-dimensional chart type designed to plot one or more series of values over ",(0,n.jsx)("b",{children:"multiple quantitative variables"}),". Each variable has its"," ",(0,n.jsx)("b",{children:"own axis"}),", all axes are joined in the ",(0,n.jsx)("b",{children:"center"})," of the figure."]}),(0,n.jsxs)("p",{children:["This page is a step-by-step guide on how to build your own radar chart for the web, using ",(0,n.jsx)("a",{href:"https://reactjs.org/",children:"React"})," (for rendering) and ",(0,n.jsx)("a",{href:"https://d3-graph-gallery.com/histogram",children:"D3.js"})," (to compute the axis, and shape coordinates)."]}),(0,n.jsxs)("p",{children:["It starts by describing how the ",(0,n.jsx)("b",{children:"data"})," should be organized and how to initialize the ",(0,n.jsx)("code",{children:"Radar"})," component. It then explains how to compute axis dynamically, and plot the lines and axis. Once this is done, it shows how to deal with scaling and how to add an interactive legend. \uD83D\uDE47‍♂️."]})]});function B(){return(0,n.jsxs)(r.A,{title:"Radar chart | React graph gallery",seoDescription:"A step-by-step guide on how to build your very own radar chart react component from scratch. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,n.jsx)(s.Z,{title:"Radar Chart",description:D,chartType:"radar"}),(0,n.jsx)("h2",{id:"data",children:"The Data"}),(0,n.jsxs)("p",{children:["The dataset provides several ",(0,n.jsx)("b",{children:"numeric"})," values for a set of data items."]}),(0,n.jsxs)("p",{children:["The suggested data structure is an array of ",(0,n.jsx)("code",{children:"object"}),", where each object is a data item. It can have as many numeric properties as needed. It also has a ",(0,n.jsx)("code",{children:"name"})," property that identifies the data item."]}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:"Here is a minimal example of the data structure:"}),(0,n.jsx)(o.d,{code:W}),(0,n.jsxs)("p",{children:["Note: this is the same data format as for a"," ",(0,n.jsx)(x(),{href:"/correlogram",children:"correlogram"})," or for a"," ",(0,n.jsx)(x(),{href:"parallel-plot",children:"parralel chart"}),"."]}),(0,n.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,n.jsxs)("p",{children:["The goal here is to create a ",(0,n.jsx)("code",{children:"Radar"})," component that will be stored in a ",(0,n.jsx)("code",{children:"Radar.tsx"})," file. This component requires 4 props to render: a ",(0,n.jsx)("code",{children:"width"}),", a ",(0,n.jsx)("code",{children:"height"}),", some"," ",(0,n.jsx)("code",{children:"data"})," and an array providing the name of the variables to display."]}),(0,n.jsxs)("p",{children:["The shape of the ",(0,n.jsx)("code",{children:"data"})," is described above. The"," ",(0,n.jsx)("code",{children:"width"})," and ",(0,n.jsx)("code",{children:"height"})," will be used to render an"," ",(0,n.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the radar chart."]}),(0,n.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our ",(0,n.jsx)("code",{children:"Radar"})," ","component:"]}),(0,n.jsx)(o.d,{code:L}),(0,n.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the SVG ",(0,n.jsx)("code",{children:"path"}),", but it's React that will render them in the ",(0,n.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,n.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,n.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,n.jsx)("h2",{id:"scales",children:"Scales"}),(0,n.jsxs)("p",{children:["Building a radar chart requires several ",(0,n.jsx)("b",{children:"scales"})," and ",(0,n.jsx)("b",{children:"axes"}),". Understanding how those scales work and how to draw the background grid using ",(0,n.jsx)("b",{children:"polar coordinates"})," is probably the trickiest part or the radar chart creation."]}),(0,n.jsxs)("p",{children:["D3.js comes with a handful set of"," ",(0,n.jsx)("a",{href:"https://github.com/d3/d3-scale",children:"predefined scales"}),"."," ",(0,n.jsx)("code",{children:"scaleBand"})," and ",(0,n.jsx)("code",{children:"scaleRadial"})," are the ones we are going to use here."]}),(0,n.jsx)("h3",{children:"→ X Scale"}),(0,n.jsxs)("p",{children:["We need only 1 X scale. This scale is gonna allocate an ",(0,n.jsx)("b",{children:"angle"})," for each variable name of the dataset. The first variable will be directed to the top of the figure, the second a few more radians clock-wise and so on."]}),(0,n.jsx)("p",{children:"This is how the scale is defined:"}),(0,n.jsx)(o.d,{code:P}),(0,n.jsx)("h3",{children:"→ Y Scales"}),(0,n.jsxs)("p",{children:["Several Y scales are required, one per variable in the dataset. The corresponding axes will be drawn from the center of the figure to the outer part, with an angle determined by the ",(0,n.jsx)("code",{children:"xScale"}),"."]}),(0,n.jsxs)("p",{children:["The y scales are computed using the ",(0,n.jsx)("code",{children:"scaleRadial()"})," function as follow. They are all stored in a ",(0,n.jsx)("code",{children:"yScales"})," object."]}),(0,n.jsx)(o.d,{code:X}),(0,n.jsx)("h2",{id:"grid",children:"Radar chart background grid"}),(0,n.jsxs)("p",{children:["Once those scales are available, we need to draw the"," ",(0,n.jsx)("b",{children:"background grid"})," of the radar chart."]}),(0,n.jsxs)("p",{children:["A bunch of options exist for this. Here I suggest to loop through the"," ",(0,n.jsx)("code",{children:"axisConfig"})," to draw the axes, and add some concentric circles to create a ",(0,n.jsx)("b",{children:"grid"}),"."]}),(0,n.jsxs)("p",{children:["Since the code is a bit long to create this grid, I strongly advise to place it in a separate component (",(0,n.jsx)("code",{children:"RadarGrid"})," here)."]}),(0,n.jsx)(l.$,{VizComponent:R,vizName:"RadarGridOnly",maxWidth:800,height:400,caption:"Background grid of a radar chart built with react and d3.js. 6 Variables are represented using 6 axes with polar coordinates"}),(0,n.jsxs)("p",{children:["Note that placing the labels requires to translate some ",(0,n.jsx)("b",{children:"polar"})," ","coordinates to ",(0,n.jsx)("b",{children:"cartesian"})," coordinates. This can be done using the following function:"]}),(0,n.jsx)(o.d,{code:Z}),(0,n.jsx)("h2",{id:"1-group",children:"Radar chart with 1 group"}),(0,n.jsx)("p",{children:"Finally! ✨"}),(0,n.jsxs)("p",{children:["We can now ",(0,n.jsx)("code",{children:"map"})," through the data array and draw a"," ",(0,n.jsx)("b",{children:"path"})," per item thanks to the scales computed above."]}),(0,n.jsxs)("p",{children:["What's tricky here is that we are dealing with ",(0,n.jsx)("b",{children:"polar coordinates"}),". We have a set of points that are defined by an ",(0,n.jsx)("b",{children:"angle"})," (x scale) and by a distance to the center of the figure (y scale)."]}),(0,n.jsxs)("p",{children:["Fortunately, the ",(0,n.jsx)("code",{children:"lineRadial()"})," function of d3 is here to help. We can define a radial line generator using the following statement:"]}),(0,n.jsx)(o.d,{code:O}),(0,n.jsxs)("p",{children:["It works pretty much the same as the classic"," ",(0,n.jsx)(x(),{href:"line-chart",children:"line()"})," function of d3, but expects an angle and a distance instead of a ",(0,n.jsx)("code",{children:"x"})," and a ",(0,n.jsx)("code",{children:"y"})," ","position."]}),(0,n.jsx)(o.d,{code:G}),(0,n.jsx)("p",{children:"Note that in order to close the shape, we need to add the first data point again after reaching the last data point, to close the loop."}),(0,n.jsx)(l.$,{VizComponent:v,vizName:"RadarBasic",maxWidth:600,height:400,caption:"A first basic radar chart with only 1 group represented. Made with React and d3.js"}),(0,n.jsx)(d.r,{chartId:"radar"}),(0,n.jsx)(c.Z,{chartId:"radar"}),(0,n.jsx)("h2",{id:"several groups",children:"Radar chart with several groups"}),(0,n.jsxs)("p",{children:["The process to get a radar chart with ",(0,n.jsx)("b",{children:"several groups"})," is very similar to the previous example."]}),(0,n.jsxs)("p",{children:["We just need to create a ",(0,n.jsx)("b",{children:"color scale"})," and add a shape for each item of the dataset through a loop. Do not try to add too many groups on the same figure, it make it totally"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/caveat/spider.html",children:"unreadable"}),"."]}),(0,n.jsx)(l.$,{VizComponent:E,vizName:"RadarMultipleGroups",maxWidth:600,height:400,caption:"A radar chart with several groups displayed on the same figure. Made with React and d3.js"}),(0,n.jsx)(_.H,{text:"spider chart with small multiple to make it more readable"}),(0,n.jsx)("h2",{id:"animation",children:"Animation"}),(0,n.jsxs)("p",{children:["It is common to have a radar chart that is ",(0,n.jsx)("b",{children:"updated"})," when a button is clicked on the application. It is possible to implement a"," ",(0,n.jsx)("b",{children:"smooth, animated transitio"}),"n between states thanks to the"," ",(0,n.jsx)("code",{children:"react-spring"})," library."]}),(0,n.jsxs)("p",{children:["The ",(0,n.jsx)(x(),{href:"/example/radar-chart-animation",children:"following example"})," ","illustrates this with a real world example. The radar chart is animated, together with a ",(0,n.jsx)(x(),{href:"line-chart",children:"line"})," chart and a"," ",(0,n.jsx)(x(),{href:"/lollipop-plot",children:"lollipop"}),"."]}),(0,n.jsx)("p",{children:(0,n.jsx)("br",{})}),(0,n.jsx)(A.Z,{images:["radar-chart-animation.png"]}),(0,n.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,n.jsx)(i.Z,{chartFamily:"ranking"}),(0,n.jsx)("div",{className:"mt-20"})]})}let W="\nconst data = [\n  {var1: 5.1, var2: 3.5, ..., name: 'Mark'},\n  {var1: 4.9, var2: 3.0, ..., name: 'Rosa'},\n  ...\n]\n".trim(),L='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype DataItem = {\n  [variable: string]: number;\n} & { name: string };\n\n\ntype RadarProps = {\n  width: number;\n  height: number;\n  data: DataItem[];\n  variables: string[]\n};\n\nexport const Radar = ({ width, height, data, variables }: RadarProps) => {\n\n  // read the data & get a list of groups\n  // build X scale\n  // build Y scales: 1 per variable\n  // build color scales\n  // loop through variables to add axes\n  // loop through data items and through variables to draw lines\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render all the <lines>\n      </svg>\n    </div>\n  );\n};\n'.trim(),P="\nconst allVariableNames = axisConfig.map((axis) => axis.name);\n\n// The x scale provides an angle for each variable of the dataset\nconst xScale = d3\n  .scaleBand()\n  .domain(allVariableNames)\n  .range([0, 2 * Math.PI]);\n".trim(),X="\n// Compute the y scales: 1 scale per variable.\n// Provides the distance to the center.\nlet yScales: { [name: string]: YScale } = {};\n\naxisConfig.forEach((axis) => {\n  yScales[axis.name] = d3\n    .scaleRadial()\n    .domain([0, axis.max])\n    .range([INNER_RADIUS, outerRadius]);\n});\n\n".trim(),Z="\nexport const polarToCartesian = (angle: number, distance: number) => {\n  const x = distance * Math.cos(angle);\n  const y = distance * Math.sin(angle);\n  return { x, y };\n};\n".trim(),O="\n// Create a radial line generator\nconst lineGenerator = d3.lineRadial();\n".trim(),G="\n// Use the radial line generator\nconst path = lineGenerator([\n  [0, 100], // first data point, 0 is its angle, 100 is its distance to the center\n  [Math.PI / 2, 50], // second data point = second variable\n  [Math.PI, 10],\n]);\n\n// Result is a path that you can pass to the d argument of a SVG <path>\n// console.log(path)\n// M0,-100 L50,-3.06 L1.2246,10\n\n".trim()},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[2343,7754,3950,7823,8190,3710,2594,693,9774,2888,179],function(){return e(e.s=22938)}),_N_E=e.O()}]);