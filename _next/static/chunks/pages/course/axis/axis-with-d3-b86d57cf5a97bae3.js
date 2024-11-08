(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3856],{90111:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/axis/axis-with-d3",function(){return s(70703)}])},81122:function(e,t,s){"use strict";s.d(t,{$:function(){return o}});var n=s(85893),i=s(67294),r=s(59973),a=s(80615),c=s(88578),l=s(5);let o=e=>{let{VizComponent:t,vizName:s,height:o=400,maxWidth:d=800,caption:h,fileToOpen:x}=e,[u,f]=(0,i.useState)(!1),p=(0,i.useRef)(null),m=(0,r.B)(p);return(0,n.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,n.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,n.jsx)(c.X,{vizName:s,fileToOpen:x})}),(0,n.jsx)("div",{className:"flex justify-center mt-2",children:(0,n.jsx)(l.z,{size:"sm",onClick:()=>f(!u),children:"Hide Sandbox"})})]}):(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,n.jsx)("div",{style:{height:o,width:"100%",maxWidth:d},ref:p,className:"pointer-events-auto",children:(0,n.jsx)(t,{height:o,width:m.width})})}),(0,n.jsx)(a.Y,{children:h}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(l.z,{size:"sm",onClick:()=>f(!u),children:"Show code"})})]})})}},88578:function(e,t,s){"use strict";s.d(t,{X:function(){return i}});var n=s(85893);s(67294);let i=e=>{let{vizName:t,height:s="500px",fileToOpen:i}=e;return(0,n.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split"+(i?"&module=/".concat(i):""),style:{width:"100%",height:s,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},41843:function(e,t,s){"use strict";s.d(t,{p:function(){return o}});var n=s(85893),i=s(49700),r=s(63476),a=s(17414),c=s(41664),l=s.n(c);let o=e=>{let{children:t,title:s,seoDescription:c,previousTocItem:o,nextTocItem:d}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:s,seoDescription:c}),(0,n.jsx)(i.Z,{}),(0,n.jsx)("div",{className:"wrapper",children:t}),(0,n.jsxs)("div",{className:"flex justify-center items-center space-x-6 my-24 py-12  bg-muted/50",children:[o?(0,n.jsxs)(l(),{href:o.link,className:"text-gray-500 no-underline flex flex-col justify-start items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted ",children:[(0,n.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text",children:"← Previous"}),(0,n.jsx)("p",{children:o.name})]}):(0,n.jsx)("div",{className:"w-96"}),d&&(0,n.jsxs)(l(),{href:d.link,className:"text-gray-500 no-underline flex flex-col justify-start w-96 h-32 border-l border-black  p-8 hover:bg-muted ",children:[(0,n.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text",children:"Next →"}),(0,n.jsx)("p",{children:d.name})]})]}),(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(r.Z,{})})]})}},63265:function(e,t,s){"use strict";s.d(t,{D:function(){return i}});var n=s(85893);let i=e=>{let{text:t}=e;return(0,n.jsxs)("div",{className:"hidden absolute w-60 top-1/2 -right-10 border-l text-card-foreground border-card-foreground h-28 translate-x-full -translate-y-1/2 xl:flex items-center ",children:[(0,n.jsx)("span",{className:"",children:"→"}),(0,n.jsx)("span",{className:"text-sm ml-2 opacity-70",children:t})]})}},72182:function(e,t,s){"use strict";s.d(t,{b:function(){return i}});var n=s(85893);let i=e=>{let{children:t}=e;return(0,n.jsx)("span",{className:"font-semibol bg-purple-100 p-1",children:t})}},80615:function(e,t,s){"use strict";s.d(t,{Y:function(){return i}});var n=s(85893);let i=e=>{let{children:t}=e;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,s){"use strict";s.d(t,{d:function(){return d}});var n=s(85893),i=s(32581),r=s(15660),a=s.n(r),c=s(67294),l=s(45993),o=s.n(l);let d=e=>{let{code:t}=e,[s,r]=(0,c.useState)(!1),l=(0,c.useRef)(null);(0,c.useEffect)(()=>{l.current&&a().highlightElement(l.current)},[l,t]);let d=(0,n.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),r(!0)},className:o().codeChunckCopyButton,children:s?"Copied":(0,n.jsx)(i.Z,{size:14,style:{padding:0}})});return(0,n.jsxs)("div",{className:"mb-6 relative",children:[(0,n.jsx)("pre",{className:"rounded-md line-numbers",children:(0,n.jsx)("code",{ref:l,className:"language-javascript",children:t})}),(0,n.jsx)("div",{className:o().copyButtonContainer,children:d})]})}},59973:function(e,t,s){"use strict";s.d(t,{B:function(){return i}});var n=s(67294);let i=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[s,i]=(0,n.useState)(t),r=()=>{i(t())};return(0,n.useEffect)(()=>(window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)),[]),(0,n.useEffect)(()=>{r()},[e]),s}},70703:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var n=s(85893);s(67294);var i=s(43710),r=s(41843),a=s(11236),c=s(3572),l=s(19618),o=s(81122),d=s(80615),h=s(72182),x=s(63265);function u(){let e=a.Y.find(e=>"/course/axis/axis-with-d3"===e.link);return e?(0,n.jsxs)(r.p,{title:e.name,seoDescription:"",nextTocItem:a.Y.find(e=>"/course/axis/project"===e.link),previousTocItem:a.Y.find(e=>"/course/axis/axis-variations"===e.link),children:[(0,n.jsx)(i.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,selectedLesson:e,description:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["The previous lessons taught us how to build React"," ",(0,n.jsx)("b",{children:"axis components"})," that can be used in any of your charts."]}),(0,n.jsxs)("p",{children:["However, there's an alternative worth mentioning:"," ",(0,n.jsx)("b",{children:"D3 can also draw axes"}),". Let's explore this option and see which one works best for you."]})]})}),(0,n.jsx)("h2",{children:"The d3 axis module"}),(0,n.jsxs)("p",{children:["D3 has a"," ",(0,n.jsx)("a",{href:"https://d3js.org/d3-axis",target:"_blank",children:"whole module"})," ","dedicated to drawing axes! It is called ... ",(0,n.jsx)("code",{children:"d3-axis"})," \uD83D\uDE43"]}),(0,n.jsxs)("p",{children:["It performs essentially the same function as the ",(0,n.jsx)("code",{children:"AxisBottom"})," ","and",(0,n.jsx)("code",{children:"AxisLeft"})," components we created in the previous lesson: taking a scale and ",(0,n.jsx)("b",{children:"rendering"})," lines and ticks based on it on the screen."]}),(0,n.jsx)("p",{children:(0,n.jsx)("br",{})}),(0,n.jsxs)("center",{children:[(0,n.jsx)("img",{src:"/img/d3-axis-overview.png",width:700,className:"border p-2"}),(0,n.jsx)(d.Y,{children:(0,n.jsxs)("p",{children:["A few axes made with d3.js and its ",(0,n.jsx)("code",{children:"d3-axis"})," module."]})})]}),(0,n.jsx)("h2",{children:"\uD83D\uDE33 Did you say rendering?"}),(0,n.jsxs)("p",{children:[(0,n.jsx)(h.b,{children:"We have a challenge"}),": in a React environment where rendering is managed by React, how can we ",(0,n.jsx)("b",{children:"delegate"})," part of the rendering process to D3?"]}),(0,n.jsxs)("p",{children:["This is possible using a react ",(0,n.jsx)("code",{children:"useEffect()"}),"!"]}),(0,n.jsx)("p",{children:"Here is an example:"}),(0,n.jsx)(o.$,{vizName:"AxisBasicD3",VizComponent:l.d,maxWidth:600,height:300,caption:"This axis is rendered using d3. The d3 necessary functions are called from a useEffect"}),(0,n.jsx)("h2",{children:"How to Use D3 to Render Axes in a React App"}),(0,n.jsx)("p",{children:"Let's clarify the code from the example above."}),(0,n.jsxs)("h3",{children:["⛳️ Using a ",(0,n.jsx)("code",{children:"ref"})]}),(0,n.jsxs)("p",{children:["A ",(0,n.jsx)("a",{href:"https://react.dev/reference/react/useRef",children:"ref"})," acts as a pointer to a specific part of the DOM. We need to initialize a"," ",(0,n.jsx)("code",{children:"ref"})," and assign it to the SVG element we want to manipulate with JavaScript later on."]}),(0,n.jsxs)("p",{children:["To create the ",(0,n.jsx)("code",{children:"ref"}),", use the following code:"]}),(0,n.jsx)(c.d,{code:"\nconst axesRef = useRef(null);\n  ".trim()}),(0,n.jsxs)("p",{children:["Next, assign the ",(0,n.jsx)("code",{children:"ref"})," to the ",(0,n.jsx)("code",{children:"<g>"})," element where D3 will render the axis:"]}),(0,n.jsx)(c.d,{code:"\n<g\n  width={boundsWidth}\n  height={boundsHeight}\n  ref={axesRef}\n  transform={...do the translate}\n/>\n  ".trim()}),(0,n.jsxs)("h3",{children:["\uD83D\uDD27 Implementing a ",(0,n.jsx)("code",{children:"useEffect"})," to modify the ",(0,n.jsx)("code",{children:"ref"})]}),(0,n.jsxs)("p",{children:["Now, we need a"," ",(0,n.jsx)("a",{href:"https://react.dev/reference/react/useEffect",children:"useEffect"})," that selects this ",(0,n.jsx)("code",{children:"ref"})," and applies changes to it."]}),(0,n.jsxs)("p",{children:["The ",(0,n.jsx)("code",{children:"useEffect"})," hook allows us to run a function each time the component mounts and whenever specified variables are updated."]}),(0,n.jsx)(c.d,{code:"\nuseEffect(() => {\n  const svgElement = d3.select(axesRef.current);\n  // Now do some stuff to this svgElement...\n}, [xScale, width]); // Rerun this function when xScale or chart width changes to redraw the axis\n  ".trim()}),(0,n.jsx)("h3",{children:"✏️ Let's draw"}),(0,n.jsxs)("p",{children:["Now we can use some d3.js code inside the ",(0,n.jsx)("code",{children:"useEffect"}),". This will draw a bottom axis!"]}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)(x.D,{text:(0,n.jsxs)("p",{children:["This code is often considered ",(0,n.jsx)("b",{children:"imperative"}),", whereas React code is typically ",(0,n.jsx)("b",{children:"declarative"}),"."]})}),(0,n.jsx)(c.d,{code:'\nconst svgElement = d3.select(axesRef.current);\n\n// remove potential previous axes\nsvgElement.selectAll("*").remove();\n\n// d3 code to render a bottom axis:\nconst xAxisGenerator = d3.axisBottom(xScale);\nsvgElement\n  .append("g")\n  .attr("transform", "translate(0," + boundsHeight + ")")\n  .call(xAxisGenerator);\n\n  '.trim()})]}),(0,n.jsx)("p",{children:"Done! \uD83C\uDF89"}),(0,n.jsx)("h2",{children:"So, React or D3.js for Axes?"}),(0,n.jsxs)("p",{children:["Both options have their merits, each with its own set of pros and cons. Personally, ",(0,n.jsx)(h.b,{children:"I prefer the React component approach"})," ","for creating axes. Here’s why:"]}),(0,n.jsx)("p",{children:(0,n.jsx)("br",{})}),(0,n.jsxs)("p",{children:["\uD83C\uDFA8 ",(0,n.jsx)("strong",{children:"Styling:"})," You can customize axis elements individually, allowing for precise styling."]}),(0,n.jsxs)("p",{children:["\uD83D\uDD04 ",(0,n.jsx)("strong",{children:"Lifecycle:"})," When using D3 to create axes, they operate outside of React's lifecycle events, making it challenging to ensure they update at the right times."]}),(0,n.jsxs)("p",{children:["♻️ ",(0,n.jsx)("strong",{children:"Reusability:"})," React emphasizes the creation of reusable components. Building axes with D3 each time goes against this philosophy, which simplifies development."]}),(0,n.jsxs)("p",{children:["\uD83D\uDEE0️ ",(0,n.jsx)("strong",{children:"Maintainability / Readability:"})," Other developers in your organization will likely find it easier to understand the SVG markup of the AxisBottom component compared to the D3.js functions from the d3-axis module."]})]}):null}},19618:function(e,t,s){"use strict";s.d(t,{d:function(){return o}});var n=s(85893),i=s(67294),r=s(43950);let a=e=>{let{width:t,height:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("defs",{children:(0,n.jsx)("pattern",{id:"pattern_rkDsm",patternUnits:"userSpaceOnUse",width:"9.5",height:"2.5",patternTransform:"rotate(41)",children:(0,n.jsx)("line",{x1:"0",y:"0",x2:"0",y2:"9.5",stroke:"#D9B9F3",strokeWidth:"1"})})}),(0,n.jsx)("rect",{width:t,height:s,fill:"url(#pattern_rkDsm)",opacity:"1"})]})},c={top:30,right:30,bottom:50,left:50},l=e=>{let{width:t,height:s}=e,l=(0,i.useRef)(null),o=t-c.right-c.left,d=s-c.top-c.bottom,h=(0,i.useMemo)(()=>r.BYU().domain([0,10]).range([0,o]),[t]),x=(0,i.useMemo)(()=>r.BYU().domain([0,10]).range([d,0]),[s]);return(0,i.useEffect)(()=>{let e=r.Ys(l.current);e.selectAll("*").remove();let t=r.LLu(h);e.append("g").attr("transform","translate(0,"+d+")").call(t);let s=r.y4O(x);e.append("g").call(s)},[h,x,d]),(0,n.jsx)("div",{children:(0,n.jsxs)("svg",{width:t,height:s,style:{display:"inline-block"},children:[(0,n.jsx)("g",{width:o,height:d,transform:"translate(".concat([c.left,c.top].join(","),")"),children:(0,n.jsx)(a,{width:o,height:d})}),(0,n.jsx)("g",{width:o,height:d,ref:l,transform:"translate(".concat([c.left,c.top].join(","),")")})]})})},o=e=>{let{width:t=700,height:s=400}=e;return(0,n.jsx)(l,{width:t,height:s})}},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}}},function(e){e.O(0,[2343,7754,3950,7823,8190,3710,9774,2888,179],function(){return e(e.s=90111)}),_N_E=e.O()}]);