(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3856],{90111:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/axis/axis-with-d3",function(){return n(70703)}])},81122:function(e,t,n){"use strict";n.d(t,{$:function(){return o}});var s=n(85893),i=n(67294),r=n(59973),a=n(80615),l=n(88578),c=n(5);let o=e=>{let{VizComponent:t,vizName:n,height:o=400,maxWidth:d=800,caption:h}=e,[u,x]=(0,i.useState)(!1),f=(0,i.useRef)(null),m=(0,r.B)(f);return(0,s.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,s.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,s.jsx)(l.X,{vizName:n})}),(0,s.jsx)("div",{className:"flex justify-center mt-2",children:(0,s.jsx)(c.z,{size:"sm",onClick:()=>x(!u),children:"Hide Sandbox"})})]}):(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,s.jsx)("div",{style:{height:o,width:"100%",maxWidth:d},ref:f,className:"pointer-events-auto",children:(0,s.jsx)(t,{height:o,width:m.width})})}),(0,s.jsx)(a.Y,{children:h}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(c.z,{size:"sm",onClick:()=>x(!u),children:"Show code"})})]})})}},88578:function(e,t,n){"use strict";n.d(t,{X:function(){return i}});var s=n(85893);n(67294);let i=e=>{let{vizName:t}=e;return(0,s.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},41843:function(e,t,n){"use strict";n.d(t,{p:function(){return o}});var s=n(85893),i=n(49700),r=n(63476),a=n(17414),l=n(41664),c=n.n(l);let o=e=>{let{children:t,title:n,seoDescription:l,previousTocItem:o,nextTocItem:d}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:n,seoDescription:l}),(0,s.jsx)(i.Z,{}),(0,s.jsx)("div",{className:"wrapper",children:t}),(0,s.jsxs)("div",{className:"flex justify-center items-center space-x-6 my-24 py-12  bg-muted/50",children:[o?(0,s.jsxs)(c(),{href:o.link,className:"text-gray-500 no-underline flex flex-col justify-start items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted ",children:[(0,s.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text",children:"← Previous"}),(0,s.jsx)("p",{children:o.name})]}):(0,s.jsx)("div",{className:"w-96"}),d&&(0,s.jsxs)(c(),{href:d.link,className:"text-gray-500 no-underline flex flex-col justify-start w-96 h-32 border-l border-black  p-8 hover:bg-muted ",children:[(0,s.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text",children:"Next →"}),(0,s.jsx)("p",{children:d.name})]})]}),(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsx)(r.Z,{})})]})}},80615:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});var s=n(85893);let i=e=>{let{children:t}=e;return(0,s.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return d}});var s=n(85893),i=n(32581),r=n(15660),a=n.n(r),l=n(67294),c=n(45993),o=n.n(c);let d=e=>{let{code:t}=e,[n,r]=(0,l.useState)(!1),c=(0,l.useRef)(null);(0,l.useEffect)(()=>{c.current&&a().highlightElement(c.current)},[c,t]);let d=(0,s.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),r(!0)},className:o().codeChunckCopyButton,children:n?"Copied":(0,s.jsx)(i.Z,{size:14,style:{padding:0}})});return(0,s.jsxs)("div",{className:"mb-6 relative",children:[(0,s.jsx)("pre",{className:"rounded-md line-numbers",children:(0,s.jsx)("code",{ref:c,className:"language-javascript",children:t})}),(0,s.jsx)("div",{className:o().copyButtonContainer,children:d})]})}},59973:function(e,t,n){"use strict";n.d(t,{B:function(){return i}});var s=n(67294);let i=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,i]=(0,s.useState)(t),r=()=>{i(t())};return(0,s.useEffect)(()=>(window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)),[]),(0,s.useEffect)(()=>{r()},[e]),n}},70703:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var s=n(85893);n(67294);var i=n(43710),r=n(41843),a=n(11236),l=n(3572),c=n(19618),o=n(81122);let d=void 0;function h(){let e=a.Y.find(e=>"/course/axis/axis-with-d3"===e.link);return e?(0,s.jsxs)(r.p,{title:e.name,seoDescription:"",nextTocItem:a.Y.find(e=>e.link===d),previousTocItem:a.Y.find(e=>"/course/axis/axis-variations"===e.link),children:[(0,s.jsx)(i.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,selectedLesson:e,description:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"d3 offers some very smart functions when it comes to building axes."}),(0,s.jsx)("p",{children:"I personnaly prefer to avoid using d3 rendering functions like this. I have more control when using react for rendering. But if you are familiar with d3, it can be very handy to use those functions, and here is how to wrap them in a usEffect"})]})}),(0,s.jsx)("h2",{children:"The d3 axis module"}),(0,s.jsx)("p",{children:"Explain what it is with links and examples"}),(0,s.jsx)("h2",{children:"How to use in a react app."}),(0,s.jsxs)("p",{children:["If you're a d3.js afficionados and want to deal with as little react as possible, you can still use the good old ",(0,s.jsx)("code",{children:"axisBottom()"})," and"," ",(0,s.jsx)("code",{children:"axisLeft()"})," methods of d3 and wrap them in a",(0,s.jsx)("code",{children:"useEffect()"})," hook."]}),(0,s.jsx)("p",{children:"Here is an example below:"}),(0,s.jsx)(o.$,{vizName:"AxisBasicD3",VizComponent:c.d,maxWidth:600,height:300,caption:"This axis is rendered using d3. The d3 necessary functions are called from a useEffect"}),(0,s.jsx)("h2",{children:"Explanation"}),(0,s.jsx)("p",{children:"Everything starts with a ref"}),(0,s.jsx)(l.d,{code:"\nconst axesRef = useRef(null);\n  ".trim()}),(0,s.jsx)("p",{children:"This ref is used to target a specific svg element where the axis will be drawn:"}),(0,s.jsx)(l.d,{code:"\n<g\n  width={boundsWidth}\n  height={boundsHeight}\n  ref={axesRef}\n  transform={...do the translate}\n/>".trim()}),(0,s.jsxs)("p",{children:["And then a ",(0,s.jsx)("code",{children:"useEffect"})," is used to call the d3 functions that render the axis."]}),(0,s.jsx)(l.d,{code:'\nuseEffect(() => {\n  const svgElement = d3.select(axesRef.current);\n  svgElement.selectAll("*").remove();\n  const xAxisGenerator = d3.axisBottom(xScale);\n  svgElement\n    .append("g")\n    .attr("transform", "translate(0," + boundsHeight + ")")\n    .call(xAxisGenerator);\n\n  const yAxisGenerator = d3.axisLeft(yScale);\n  svgElement.append("g").call(yAxisGenerator);\n}, [xScale, yScale, boundsHeight]);\n\n  '.trim()})]}):null}},19618:function(e,t,n){"use strict";n.d(t,{d:function(){return o}});var s=n(85893),i=n(67294),r=n(43950);let a=e=>{let{width:t,height:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("defs",{children:(0,s.jsx)("pattern",{id:"pattern_rkDsm",patternUnits:"userSpaceOnUse",width:"9.5",height:"2.5",patternTransform:"rotate(41)",children:(0,s.jsx)("line",{x1:"0",y:"0",x2:"0",y2:"9.5",stroke:"#D9B9F3",strokeWidth:"1"})})}),(0,s.jsx)("rect",{width:t,height:n,fill:"url(#pattern_rkDsm)",opacity:"1"})]})},l={top:30,right:30,bottom:50,left:50},c=e=>{let{width:t,height:n}=e,c=(0,i.useRef)(null),o=t-l.right-l.left,d=n-l.top-l.bottom,h=(0,i.useMemo)(()=>r.BYU().domain([0,10]).range([0,o]),[t]),u=(0,i.useMemo)(()=>r.BYU().domain([0,10]).range([d,0]),[n]);return(0,i.useEffect)(()=>{let e=r.Ys(c.current);e.selectAll("*").remove();let t=r.LLu(h);e.append("g").attr("transform","translate(0,"+d+")").call(t);let n=r.y4O(u);e.append("g").call(n)},[h,u,d]),(0,s.jsx)("div",{children:(0,s.jsxs)("svg",{width:t,height:n,style:{display:"inline-block"},children:[(0,s.jsx)("g",{width:o,height:d,transform:"translate(".concat([l.left,l.top].join(","),")"),children:(0,s.jsx)(a,{width:o,height:d})}),(0,s.jsx)("g",{width:o,height:d,ref:c,transform:"translate(".concat([l.left,l.top].join(","),")")})]})})},o=e=>{let{width:t=700,height:n=400}=e;return(0,s.jsx)(c,{width:t,height:n})}},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}}},function(e){e.O(0,[2343,7754,3950,7823,8190,3710,9774,2888,179],function(){return e(e.s=90111)}),_N_E=e.O()}]);