(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5989],{20225:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/voronoi",function(){return n(90110)}])},61651:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(85893);n(67294);var s=n(49871),r=n(28843),o=n(77522);let a={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function l(e){let{chartFamily:t}=e,n=r.c.filter(e=>e.family===t).map((e,t)=>{let n=(0,o.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(s.Z,{link:n,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==a?void 0:a[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:n})]})}},81122:function(e,t,n){"use strict";n.d(t,{$:function(){return c}});var i=n(85893),s=n(67294),r=n(59973),o=n(80615),a=n(88578),l=n(5);let c=e=>{let{VizComponent:t,vizName:n,height:c=400,maxWidth:d=800,caption:h}=e,[u,x]=(0,s.useState)(!1),p=(0,s.useRef)(null),m=(0,r.B)(p);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(a.X,{vizName:n})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(l.z,{size:"sm",onClick:()=>x(!u),children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:p,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:c,width:m.width})})}),(0,i.jsx)(o.Y,{children:h}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(l.z,{size:"sm",onClick:()=>x(!u),children:"Show code"})})]})})}},88578:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var i=n(85893);n(67294);let s=e=>{let{vizName:t}=e;return(0,i.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},26820:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(85893);n(67294);var s=n(28843),r=n(56438);let o=e=>{let{imgLink:t,height:n,opacity:s,children:r}=e;return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{style:{backgroundImage:"url("+t+")",height:n,backgroundAttachment:"fixed",opacity:s,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,i.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:r})]})};function a(e){var t;let{chartId:n}=e,a=(null===(t=s.c.find(e=>e.id===n))||void 0===t?void 0:t.label)||"chart";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{id:"inspiration",children:a+" inspiration"}),(0,i.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,i.jsx)("span",{children:a}),", note that"," ",(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,i.jsx)("div",{className:"border mb-10",children:(0,i.jsx)(o,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,i.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,i.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,i.jsxs)("p",{className:"text-center text-sm",children:[(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,i.jsx)("span",{children:a})," ","looks good!"]}),(0,i.jsx)(r.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},52450:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(85893);n(67294);var s=n(92050),r=n(49975),o=n(59942);function a(e){let{images:t}=e,n=s.F.filter(e=>t.includes(e.img)).map((e,t)=>(0,i.jsx)(r.X,{link:e.link,title:e.title,description:(0,i.jsx)("p",{children:e.description}),img:e.img,alt:e.alt},t));return(0,i.jsx)(o.E,{children:n})}},80153:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var i=n(85893),s=n(49700),r=n(63476),o=n(67294),a=n(63084),l=n.n(a);function c(){let[e,t]=(0,o.useState)([]),[n,s]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,o.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),n=window.scrollY+150,i=t.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e,0),r=t.findIndex(e=>e===i);s(-1===r?0:r)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,i.jsx)("div",{className:l().tableOfContent,children:e.map((t,s)=>(0,i.jsx)("p",{className:n===s?"".concat(l().tocItem," ").concat(l().tocItemActive):l().tocItem,onClick:t=>{t.preventDefault(),e[s].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=n(17414),h=n(62594);let u=e=>{let{children:t,title:n,seoDescription:o}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:n,seoDescription:o}),(0,i.jsx)(s.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:t}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(r.Z,{})}),(0,i.jsx)(c,{})]})}},90505:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var i=n(85893),s=n(41664),r=n.n(s),o=n(28843),a=n(66717),l=n(3572);let c=e=>{let{chartId:t}=e,n=o.c.filter(e=>e.id===t)[0].label;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{id:"responsiveness",children:"Responsive "+n+" with react"}),(0,i.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,i.jsx)("code",{children:"width"})," and ",(0,i.jsx)("code",{children:"height"})," and will render a ",n," of those dimensions."]}),(0,i.jsxs)("p",{children:["Making the ",n," responsive requires adding a ",(0,i.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,i.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,i.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,i.jsx)(a.U,{title:(0,i.jsxs)("span",{children:[(0,i.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,i.jsx)(l.d,{code:d})}),(0,i.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,i.jsx)(r(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})},d='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},49871:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(85893);n(67294);var s=n(95887),r=n(28843),o=n(41664),a=n.n(o);let l=r.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:n,link:r,isAvailable:o,size:c}=e,h=l.includes(t),u=o?"opacity-100":"opacity-20";return(0,i.jsx)(a(),{href:o?r:"subscribe",className:"no-underline",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(o?"cursor-pointer":"cursor-not-allowed"),children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(s.Z,{chartLogo:t,size:c})}),h?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(d,{size:c})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:n})]})})}let d=e=>{let{size:t}=e;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},66717:function(e,t,n){"use strict";n.d(t,{U:function(){return s}});var i=n(85893);let s=e=>{let{title:t,children:n}=e;return(0,i.jsxs)("details",{className:"bg-gray-50 py-2 px-4 rounded-md my-2",children:[(0,i.jsx)("summary",{className:"cursor-pointer",children:t}),(0,i.jsx)("div",{className:"pt-4",children:n})]})}},80615:function(e,t,n){"use strict";n.d(t,{Y:function(){return s}});var i=n(85893);let s=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return d}});var i=n(85893),s=n(32581),r=n(15660),o=n.n(r),a=n(67294),l=n(45993),c=n.n(l);let d=e=>{let{code:t}=e,[n,r]=(0,a.useState)(!1),l=(0,a.useRef)(null);(0,a.useEffect)(()=>{l.current&&o().highlightElement(l.current)},[l,t]);let d=(0,i.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),r(!0)},className:c().codeChunckCopyButton,children:n?"Copied":(0,i.jsx)(s.Z,{size:14,style:{padding:0}})});return(0,i.jsxs)("div",{className:"mb-6 relative",children:[(0,i.jsx)("pre",{className:"rounded-md line-numbers",children:(0,i.jsx)("code",{ref:l,className:"language-javascript",children:t})}),(0,i.jsx)("div",{className:c().copyButtonContainer,children:d})]})}},18893:function(e,t,n){"use strict";n.d(t,{H:function(){return s}});var i=n(85893);let s=e=>{let{text:t}=e;return(0,i.jsxs)("blockquote",{className:"mt-10 opacity-20",children:[(0,i.jsx)("b",{className:"text-reactGallery mr-4",children:"ToDo"}),t]})}},59973:function(e,t,n){"use strict";n.d(t,{B:function(){return s}});var i=n(67294);let s=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,s]=(0,i.useState)(t),r=()=>{s(t())};return(0,i.useEffect)(()=>(window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)),[]),(0,i.useEffect)(()=>{r()},[e]),n}},90110:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var i=n(85893),s=n(67294),r=n(80153),o=n(43710),a=n(61651),l=n(3572),c=n(81122);let d=[{x:10,y:10},{x:4,y:4},{x:35,y:90},{x:67,y:34},{x:89,y:65},{x:23,y:10},{x:12,y:32},{x:45,y:78},{x:67,y:98},{x:23,y:23}];var h=n(88657);let u=e=>{let{width:t,height:n,data:r}=e,o=h.BYU().domain([0,100]).range([0,t]),a=h.BYU().domain([0,100]).range([0,n]),l=r.map((e,t)=>(0,i.jsx)("circle",{cx:o(e.x),cy:a(e.y),r:4},t)),c=(0,s.useMemo)(()=>{let e=r.map(e=>[o(e.x),a(e.y)]);return h.oc6.from(e)},[]),d=c.render(),u=(0,i.jsx)("path",{d:d,stroke:"grey",fill:"transparent",opacity:.2}),x=(0,s.useMemo)(()=>c.voronoi([0,0,t,n]),[r]),p=x.render(),m=(0,i.jsx)("path",{d:p,stroke:"black",fill:"red"});return(0,i.jsxs)("svg",{width:t,height:n,children:[l,u,m]})},x=e=>{let{width:t=700,height:n=400}=e;return 0===t||0===n?null:(0,i.jsx)("div",{children:(0,i.jsx)(u,{width:t,height:n,data:d})})};var p=n(41664),m=n.n(p);let j=[{x:10,y:10},{x:4,y:4},{x:35,y:90},{x:67,y:34},{x:89,y:65},{x:23,y:10},{x:12,y:32},{x:45,y:78},{x:67,y:98},{x:23,y:23}],f=e=>{let{width:t,height:n,data:s}=e,r=h.BYU().domain([0,100]).range([0,t]),o=h.BYU().domain([0,100]).range([0,n]),a=s.map((e,t)=>(0,i.jsx)("circle",{cx:r(e.x),cy:o(e.y),r:4},t));return(0,i.jsx)("svg",{width:t,height:n,children:a})},g=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)("div",{style:{marginTop:20,marginBottom:20},children:(0,i.jsx)(f,{width:t,height:n-40,data:j})})},y=[{x:10,y:10},{x:4,y:4},{x:35,y:90},{x:67,y:34},{x:89,y:65},{x:23,y:10},{x:12,y:32},{x:45,y:78},{x:67,y:98},{x:23,y:23}],v=e=>{let{width:t,height:n,data:r}=e,o=h.BYU().domain([0,100]).range([0,t]),a=h.BYU().domain([0,100]).range([0,n]),l=r.map((e,t)=>(0,i.jsx)("circle",{cx:o(e.x),cy:a(e.y),r:4},t)),c=(0,s.useMemo)(()=>{let e=r.map(e=>[o(e.x),a(e.y)]);return h.oc6.from(e)},[]),d=c.render(),u=(0,i.jsx)("path",{d:d,stroke:"grey",fill:"transparent",opacity:.8});return(0,i.jsxs)("svg",{width:t,height:n,children:[l,u]})},b=e=>{let{width:t=700,height:n=400}=e;return 0===t||0===n?null:(0,i.jsx)("div",{children:(0,i.jsx)(v,{width:t,height:n,data:y})})};var w=n(90505),k=n(26820);let N=[{x:10,y:10},{x:4,y:4},{x:35,y:90},{x:67,y:34},{x:89,y:65},{x:23,y:10},{x:12,y:32},{x:45,y:78},{x:67,y:98},{x:23,y:23}],z=e=>{let{width:t,height:n,data:r}=e,o=h.BYU().domain([0,100]).range([0,t]),a=h.BYU().domain([0,100]).range([0,n]),l=(0,s.useMemo)(()=>{let e=r.map(e=>[o(e.x),a(e.y)]);return h.oc6.from(e)},[r]),[c,d]=(0,s.useState)(null),u=(0,s.useMemo)(()=>l.voronoi([0,0,t,n]),[l,t,n]),x=r.map((e,t)=>{let n=u.renderCell(t);return(0,i.jsx)("path",{d:n,stroke:"grey",fill:"transparent",opacity:.1,onMouseOver:()=>{d(t)}},t)}),p=r.map((e,t)=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("circle",{cx:o(e.x),cy:a(e.y),r:4},t),c===t&&(0,i.jsx)("circle",{cx:o(e.x),cy:a(e.y),r:10,fill:"transparent",stroke:"red",strokeWidth:3},t)]}));return(0,i.jsxs)("svg",{width:t,height:n,children:[p,x]})},D=e=>{let{width:t=700,height:n=400}=e;return 0===t||0===n?null:(0,i.jsx)("div",{children:(0,i.jsx)(z,{width:t,height:n,data:N})})};var C=n(56438),_=n(18893),T=n(52450);let A=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["A"," ",(0,i.jsx)("a",{href:"https://en.wikipedia.org/wiki/Voronoi_diagram",children:"voronoi diagram"})," ","is a partition of a plane into regions called ",(0,i.jsx)("b",{children:"voronoi cells"}),". A voronoi cell consists of every point in the plane whose distance to its linked data point is less than or equal to its distance to"," ",(0,i.jsx)("b",{children:"any other data point"}),"."," "]}),(0,i.jsxs)("p",{children:["This page is a step-by-step guide on how to build your own voronoi diagram for the web, using ",(0,i.jsx)("a",{href:"https://reactjs.org/",children:"React"})," and"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com",children:"D3.js"}),"."]}),(0,i.jsxs)("p",{children:["It starts by describing how the ",(0,i.jsx)("b",{children:"data"})," should be organized and explains how to run and plot a ",(0,i.jsx)("b",{children:"Delaunay triangulation"}),". Based on this, it explains how to build the voronoi diagram. Finally it shows how this can be used for real life application like for a ",(0,i.jsx)("b",{children:"scatterplot"})," ","or to build a ",(0,i.jsx)("b",{children:"voronoi treemap"}),"."]})]});function B(){return(0,i.jsxs)(r.A,{title:"How to build a Voronoi Diagram with React and D3.",seoDescription:"A step-by-step guide to build your very own voronoi diagram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,i.jsx)(o.Z,{title:"Voronoi Diagram",description:A,chartType:"voronoi"}),(0,i.jsx)("h2",{id:"data",children:"The Data"}),(0,i.jsxs)("p",{children:["Everything starts with a set of ",(0,i.jsx)("b",{children:"two-dimensional points"}),". Their coordinates are available with ",(0,i.jsx)("code",{children:"x"})," representing the position on the ",(0,i.jsx)("b",{children:"horizontal"})," axis and ",(0,i.jsx)("code",{children:"y"})," being for the"," ",(0,i.jsx)("b",{children:"vertical"})," axis."]}),(0,i.jsxs)("p",{children:["As a result, the dataset is pretty simple: an ",(0,i.jsx)("code",{children:"array"})," of"," ","objects that looks like this:"]}),(0,i.jsx)("br",{}),(0,i.jsx)(l.d,{code:E}),(0,i.jsxs)("p",{children:["Note: this is the same dataset as the one used for a"," ",(0,i.jsx)(m(),{href:"/scatter-plot",children:"scatterplot"}),"."]}),(0,i.jsx)("h2",{id:"2d plane",children:"A set of two-dimensional points"}),(0,i.jsxs)("p",{children:["Let's start by plotting those data points on a two-dimensional points. This is basically a ",(0,i.jsx)(m(),{href:"/scatter-plot",children:"scatterplot"})," except that we're not drawing the axes."]}),(0,i.jsxs)("p",{children:["If you're not familiar with the basic steps used in the following sandbox, please take a look at the"," ",(0,i.jsx)(m(),{href:"/scatter-plot",children:"scatterplot"})," section of the gallery that goes in deep on what's going on here."]}),(0,i.jsx)(C.J,{isFilled:!0,size:"sm",href:"scatter-plot",children:"Scatterplot section"}),(0,i.jsx)("p",{children:(0,i.jsx)("br",{})}),(0,i.jsxs)("p",{children:["You need a good understanding about ",(0,i.jsx)("b",{children:"d3 scales"}),", how to"," ",(0,i.jsx)("b",{children:"loop through a data"})," array to create ",(0,i.jsx)("b",{children:"svg elements"})," and how to make the component ",(0,i.jsx)("b",{children:"renders"})," them."]}),(0,i.jsx)(c.$,{VizComponent:g,vizName:"VoronoiScatterOnly",maxWidth:600,height:300,caption:"A voronoi diagram starts with a set of 2d coordinate points plotted on a plane."}),(0,i.jsx)("h2",{id:"delaunay",children:"Delaunay triangulation"}),(0,i.jsxs)("p",{children:["The first required step to build a voronoi diagram is to run a"," ",(0,i.jsx)("a",{href:"https://en.wikipedia.org/wiki/Delaunay_triangulation",children:"Delaunay triangulation"}),"."]}),(0,i.jsxs)("p",{children:["You don't necessarily need to understand what a Delaunay triangulation is. But if you're interested in the topic, it will be covered in the"," ",(0,i.jsx)(m(),{href:"subscribe",children:"dataviz universe"})," newsletter soon."]}),(0,i.jsxs)("p",{children:["Fortunately, d3.js has a module called"," ",(0,i.jsx)("a",{href:"https://github.com/d3/d3-delaunay",children:"d3-delaunay"})," that does this triangulation for us. You can import this module as follow. You can also read its complete doc on"," ",(0,i.jsx)("a",{href:"https://github.com/d3/d3-delaunay",children:"github"}),"."]}),(0,i.jsx)(l.d,{code:L}),(0,i.jsxs)("p",{children:["Start by creating a ",(0,i.jsx)("code",{children:"delaunay"})," object thanks to the"," ",(0,i.jsx)("code",{children:"Delaunay.from()"})," function. This function expects an array of array of numbers, so there is a tiny bit of data wrangling to do here."]}),(0,i.jsx)(l.d,{code:R}),(0,i.jsxs)("p",{children:["This ",(0,i.jsx)("code",{children:"delaunay"})," object contains all the information about the triangulation \uD83C\uDF89. It also has a method called ",(0,i.jsx)("code",{children:"render()"})," that provides the svg path of all the ",(0,i.jsx)("code",{children:"adjacent triangles"}),"."]}),(0,i.jsx)(l.d,{code:I}),(0,i.jsxs)("p",{children:["This path is provided as a string that we can pass to a"," ",(0,i.jsx)("code",{children:"path"})," svg element as follow:"]}),(0,i.jsx)(l.d,{code:S}),(0,i.jsxs)("p",{children:["We can now render this inside an ",(0,i.jsx)("code",{children:"svg"})," element to get an overview of this ",(0,i.jsx)("b",{children:"delaunay triangulation"}),":"]}),(0,i.jsx)(c.$,{VizComponent:b,vizName:"VoronoidelaunayOnly",maxWidth:600,height:300,caption:"Second step: run a Delaunay triangulation on the set of two-dimensional points."}),(0,i.jsx)("h2",{id:"voronoi",children:"Voronoi diagram"}),(0,i.jsxs)("p",{children:["The Delaunay triangulation above corresponds to the ",(0,i.jsx)("b",{children:"dual graph"})," of the Voronoi diagram. Basically, it means that the ",(0,i.jsx)("b",{children:"circumcenters"})," ","of the Delaunay triangles are the ",(0,i.jsx)("b",{children:"vertices"})," of the Voronoi diagram."]}),(0,i.jsxs)("p",{children:["But no worries, the ",(0,i.jsx)("code",{children:"delaunay"})," object we built in the previous section has a ",(0,i.jsx)("code",{children:"voronoi()"})," method. It computes the voronoi cell coordinates based on the delaunay information:"]}),(0,i.jsx)(l.d,{code:V}),(0,i.jsx)("p",{children:"We can plot the voronoi cells using the same kind of code as for the delaunay triangles. Resulting in our first voronoi diagram! \uD83C\uDF89"}),(0,i.jsx)("br",{}),(0,i.jsx)(c.$,{VizComponent:x,vizName:"VoronoiBasic",maxWidth:600,height:300,caption:"Last step: join the circumcenters of each triangle to get the voronoi diagram."}),(0,i.jsx)(w.r,{chartId:"voronoi"}),(0,i.jsx)(k.Z,{chartId:"voronoi"}),(0,i.jsx)("h2",{id:"closest point",children:"Closest point detection"}),(0,i.jsxs)("p",{children:["The voronoi diagram is commonly used to detect the ",(0,i.jsx)("b",{children:"closest"})," data point of the mouse position. This can be pretty useful to highlight the closest point without having to hover ",(0,i.jsx)("b",{children:"exactly"})," over it."]}),(0,i.jsx)("p",{children:"In the example below, the closest dot will be highlighted with a red circle ⭕️ using the voronoi cells."}),(0,i.jsx)("br",{}),(0,i.jsx)(c.$,{VizComponent:D,vizName:"VoronoiClosestPoint",maxWidth:600,height:300,caption:"Use the voronoi algorithm to detect the closest point of the mouse position."}),(0,i.jsx)("h2",{id:"variations",children:"Variations"}),(0,i.jsx)("p",{children:"A glimpse of what it is possible to do using the voronoi diagram for data visualization."}),(0,i.jsx)("p",{children:"Click on the overview below to get details and code."}),(0,i.jsx)("br",{}),(0,i.jsx)(T.Z,{images:["scatterplot-tooltip-with-voronoi-for-closest-point-detection.gif"]}),(0,i.jsx)(_.H,{text:"Add voronoi treemap example"}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,i.jsx)(a.Z,{chartFamily:"partOfAWhole"}),(0,i.jsx)("div",{className:"mt-20"})]})}let E="\nexport const data = [\n  { x: 10, y: 10 },\n  { x: 4, y: 4 },\n  { x: 35, y: 90 },\n  { x: 67, y: 34 },\n  ...\n];\n".trim(),L='\nimport { Delaunay } from "d3";\n'.trim(),R="\nconst delaunay = useMemo(() => {\n  const formattedData = data.map((d) => [xScale(d.x), yScale(d.y)]);\n  return Delaunay.from(formattedData);\n}, []);\n".trim(),I="\nconst delaunayPath = delaunay.render();\n".trim(),S='\nconst allDelaunayShapes = (\n  <path d={delaunayPath} stroke="grey" fill="transparent" opacity={0.2} />\n);\n'.trim(),V="\nconst voronoi = useMemo(() => {\n  return delaunay.voronoi([0, 0, width, height]);\n}, [data]);\n".trim()},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[2343,7754,8657,7823,8190,3710,2594,693,9774,2888,179],function(){return e(e.s=20225)}),_N_E=e.O()}]);