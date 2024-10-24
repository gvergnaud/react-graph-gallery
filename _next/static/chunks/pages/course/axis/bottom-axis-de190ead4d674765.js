(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4445],{487:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/axis/bottom-axis",function(){return n(24008)}])},81122:function(e,t,n){"use strict";n.d(t,{$:function(){return c}});var r=n(85893),s=n(67294),i=n(59973),a=n(80615),o=n(88578),l=n(5);let c=e=>{let{VizComponent:t,vizName:n,height:c=400,maxWidth:d=800,caption:u}=e,[h,x]=(0,s.useState)(!1),m=(0,s.useRef)(null),f=(0,i.B)(m);return(0,r.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:h?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,r.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,r.jsx)(o.X,{vizName:n})}),(0,r.jsx)("div",{className:"flex justify-center mt-2",children:(0,r.jsx)(l.z,{size:"sm",onClick:()=>x(!h),children:"Hide Sandbox"})})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,r.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:m,className:"pointer-events-auto",children:(0,r.jsx)(t,{height:c,width:f.width})})}),(0,r.jsx)(a.Y,{children:u}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(l.z,{size:"sm",onClick:()=>x(!h),children:"Show code"})})]})})}},88578:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(85893);n(67294);let s=e=>{let{vizName:t}=e;return(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},41843:function(e,t,n){"use strict";n.d(t,{p:function(){return c}});var r=n(85893),s=n(49700),i=n(63476),a=n(17414),o=n(41664),l=n.n(o);let c=e=>{let{children:t,title:n,seoDescription:o,previousTocItem:c,nextTocItem:d}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:n,seoDescription:o}),(0,r.jsx)(s.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:t}),(0,r.jsxs)("div",{className:"flex justify-center items-center space-x-6 my-24 py-12  bg-muted/50",children:[c?(0,r.jsxs)(l(),{href:c.link,className:"text-gray-500 no-underline flex flex-col justify-start items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted ",children:[(0,r.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text",children:"← Previous"}),(0,r.jsx)("p",{children:c.name})]}):(0,r.jsx)("div",{className:"w-96"}),d&&(0,r.jsxs)(l(),{href:d.link,className:"text-gray-500 no-underline flex flex-col justify-start w-96 h-32 border-l border-black  p-8 hover:bg-muted ",children:[(0,r.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text",children:"Next →"}),(0,r.jsx)("p",{children:d.name})]})]}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(i.Z,{})})]})}},72182:function(e,t,n){"use strict";n.d(t,{b:function(){return s}});var r=n(85893);let s=e=>{let{children:t}=e;return(0,r.jsx)("span",{className:"font-semibol bg-purple-100 p-1",children:t})}},80615:function(e,t,n){"use strict";n.d(t,{Y:function(){return s}});var r=n(85893);let s=e=>{let{children:t}=e;return(0,r.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return d}});var r=n(85893),s=n(32581),i=n(15660),a=n.n(i),o=n(67294),l=n(45993),c=n.n(l);let d=e=>{let{code:t}=e,[n,i]=(0,o.useState)(!1),l=(0,o.useRef)(null);(0,o.useEffect)(()=>{l.current&&a().highlightElement(l.current)},[l,t]);let d=(0,r.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),i(!0)},className:c().codeChunckCopyButton,children:n?"Copied":(0,r.jsx)(s.Z,{size:14,style:{padding:0}})});return(0,r.jsxs)("div",{className:"mb-6 relative",children:[(0,r.jsx)("pre",{className:"rounded-md line-numbers",children:(0,r.jsx)("code",{ref:l,className:"language-javascript",children:t})}),(0,r.jsx)("div",{className:c().copyButtonContainer,children:d})]})}},59973:function(e,t,n){"use strict";n.d(t,{B:function(){return s}});var r=n(67294);let s=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,s]=(0,r.useState)(t),i=()=>{s(t())};return(0,r.useEffect)(()=>(window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)),[]),(0,r.useEffect)(()=>{i()},[e]),n}},24008:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(85893);n(67294);var s=n(43710),i=n(41843),a=n(11236),o=n(3572),l=n(72182),c=n(81122),d=n(81341);function u(){let e=a.Y.find(e=>"/course/axis/bottom-axis"===e.link);return e?(0,r.jsxs)(i.p,{title:e.name,seoDescription:"",nextTocItem:a.Y.find(e=>"/course/axis/axis-variations"===e.link),previousTocItem:a.Y.find(e=>"/course/axis/margin-and-translation"===e.link),children:[(0,r.jsx)(s.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,selectedLesson:e,description:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"In the previous lesson we learnt how to manage margins efficiently on our chart."}),(0,r.jsx)("p",{children:"Now, let's see how we can actually create a component that draws a bottom axis!"})]})}),(0,r.jsx)("h2",{children:"Re-usable Bottom Axis component"}),(0,r.jsxs)("p",{children:["The code snippet below builds a ",(0,r.jsx)("code",{children:"AxisBottom"})," component. It is"," ",(0,r.jsxs)(l.b,{children:["very much inspired from"," ",(0,r.jsx)("a",{href:"https://wattenberger.com/blog/react-and-d3",children:"this blogpost"})," ","by Amelia Wattenberger"]}),". I've just changed a few things, notably passing a scale as input instead of a range and a domain."]}),(0,r.jsxs)("p",{children:["The logic mainly relies on the ",(0,r.jsx)("code",{children:"ticks()"})," method of a d3 scale. It takes a target number of ticks as input, find the most appropriate way to build smart ticks based on this target, and returns an array with all the tick positions."]}),(0,r.jsx)("p",{children:"What follows is just some svg drawings based on those tick positions."}),(0,r.jsx)(o.d,{code:h}),(0,r.jsx)("h2",{children:"Using the component"}),(0,r.jsx)("p",{children:"Once you have the bottom and left axis component described above you just need to call them properly. You need to compute the bounds area by substracting the margins to the total svg area."}),(0,r.jsx)("p",{children:"Don't forget to add an additional translation to the bottom axis to render it... at the bottom."}),(0,r.jsx)(c.$,{vizName:"AxisBasic",VizComponent:d.c,maxWidth:600,height:300,caption:"This axis is rendered without using d3.js to render."})]}):null}let h='\nconst TICK_LENGTH = 6;\n\nexport const AxisBottom = ({ xScale, pixelsPerTick }) => {\n  const range = xScale.range();\n\n  const ticks = useMemo(() => {\n    const width = range[1] - range[0];\n    const numberOfTicksTarget = Math.floor(width / pixelsPerTick);\n\n    return xScale.ticks(numberOfTicksTarget).map((value) => ({\n      value,\n      xOffset: xScale(value),\n    }));\n  }, [xScale]);\n\n  return (\n    <>\n      {/* Main horizontal line */}\n      <path\n        d={["M", range[0], 0, "L", range[1], 0].join(" ")}\n        fill="none"\n        stroke="currentColor"\n      />\n\n      {/* Ticks and labels */}\n      {ticks.map(({ value, xOffset }) => (\n        <g key={value} transform={`translate(${xOffset}, 0)`}>\n          <line y2={TICK_LENGTH} stroke="currentColor" />\n          <text\n            key={value}\n            style={{\n              fontSize: "10px",\n              textAnchor: "middle",\n              transform: "translateY(20px)",\n            }}\n          >\n            {value}\n          </text>\n        </g>\n      ))}\n    </>\n  );\n};\n'.trim()},34699:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var r=n(85893),s=n(43950);let i=e=>{let{width:t,height:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"pattern_rkDsm",patternUnits:"userSpaceOnUse",width:"9.5",height:"2.5",patternTransform:"rotate(41)",children:(0,r.jsx)("line",{x1:"0",y:"0",x2:"0",y2:"9.5",stroke:"#D9B9F3",strokeWidth:"1"})})}),(0,r.jsx)("rect",{width:t,height:n,fill:"url(#pattern_rkDsm)",opacity:"1"})]})};var a=n(67294);let o=e=>{let{xScale:t,pixelsPerTick:n}=e,s=t.range(),i=(0,a.useMemo)(()=>{let e=s[1]-s[0];return t.ticks(Math.floor(e/n)).map(e=>({value:e,xOffset:t(e)}))},[t]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{d:["M",s[0],0,"L",s[1],0].join(" "),fill:"none",stroke:"currentColor"}),i.map(e=>{let{value:t,xOffset:n}=e;return(0,r.jsxs)("g",{transform:"translate(".concat(n,", 0)"),children:[(0,r.jsx)("line",{y2:6,stroke:"currentColor"}),(0,r.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateY(20px)"},children:t},t)]},t)})]})},l=e=>{let{yScale:t,pixelsPerTick:n}=e,s=t.range(),i=(0,a.useMemo)(()=>{let e=s[0]-s[1];return t.ticks(Math.floor(e/n)).map(e=>({value:e,yOffset:t(e)}))},[t]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{d:["M",0,s[0],"L",0,s[1]].join(" "),fill:"none",stroke:"currentColor"}),i.map(e=>{let{value:t,yOffset:n}=e;return(0,r.jsxs)("g",{transform:"translate(0, ".concat(n,")"),children:[(0,r.jsx)("line",{x2:-6,stroke:"currentColor"}),(0,r.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateX(-20px)"},children:t},t)]},t)})]})},c={top:30,right:30,bottom:50,left:50},d=e=>{let{width:t,height:n}=e,a=t-c.right-c.left,d=n-c.top-c.bottom,u=s.BYU().domain([0,10]).range([0,a]),h=s.BYU().domain([0,11]).range([d,0]);return s.p2C().domain([1e-24,10]).range(["red","blue"]).clamp(!0),(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:n,shapeRendering:"crispEdges",children:(0,r.jsxs)("g",{width:a,height:d,transform:"translate(".concat([c.left,c.top].join(","),")"),overflow:"visible",children:[(0,r.jsx)(i,{width:a,height:d}),(0,r.jsx)(l,{yScale:h,pixelsPerTick:30}),(0,r.jsx)("g",{transform:"translate(0, ".concat(d,")"),children:(0,r.jsx)(o,{xScale:u,pixelsPerTick:60})})]})})})}},81341:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var r=n(85893),s=n(34699);let i=e=>{let{width:t=700,height:n=400}=e;return(0,r.jsx)(s.X,{width:t,height:n})}},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}}},function(e){e.O(0,[2343,7754,3950,7823,8190,3710,9774,2888,179],function(){return e(e.s=487)}),_N_E=e.O()}]);