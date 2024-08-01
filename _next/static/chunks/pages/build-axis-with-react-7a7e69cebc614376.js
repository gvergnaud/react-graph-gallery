(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4316],{1662:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/build-axis-with-react",function(){return n(7763)}])},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return d}});var s=n(5893),r=n(6715),i=n(5660),a=n.n(i),o=n(7294),l=n(5993),c=n.n(l);let d=e=>{let{code:t}=e,[n,i]=(0,o.useState)(!1),l=(0,o.useRef)(null);(0,o.useEffect)(()=>{l.current&&a().highlightElement(l.current)},[l,t]);let d=(0,s.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),i(!0)},className:c().codeChunckCopyButton,children:n?"Copied":(0,s.jsx)(r.Z,{size:14,style:{padding:0}})});return(0,s.jsxs)("div",{className:"mb-6 relative",children:[(0,s.jsx)("pre",{className:"rounded-md line-numbers",children:(0,s.jsx)("code",{ref:l,className:"language-javascript",children:t})}),(0,s.jsx)("div",{className:c().copyButtonContainer,children:d})]})}},7763:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var s=n(5893),r=n(7294),i=n(153),a=n(9965),o=n(2594),l=n(1122),c=n(1651),d=n(6260),h=n(9973),x=n(4699),u=n(3572),p=n(2182),m=n(1341),f=n(9618);let g=(0,s.jsxs)("p",{children:["This post explains how to build axes from d3 scales for a chart. It relies on the ",(0,s.jsx)("code",{children:"tick()"})," method to compute the tick positions and use react for the rendering. The code of the ",(0,s.jsx)("code",{children:"BottomAxis"})," and"," ",(0,s.jsx)("code",{children:"LeftAxis"}),"components is provided, together with some reproducible examples."]}),j='\nconst TICK_LENGTH = 6;\n\nexport const AxisBottom = ({ xScale, pixelsPerTick }) => {\n  const range = xScale.range();\n\n  const ticks = useMemo(() => {\n    const width = range[1] - range[0];\n    const numberOfTicksTarget = Math.floor(width / pixelsPerTick);\n\n    return xScale.ticks(numberOfTicksTarget).map((value) => ({\n      value,\n      xOffset: xScale(value),\n    }));\n  }, [xScale]);\n\n  return (\n    <>\n      {/* Main horizontal line */}\n      <path\n        d={["M", range[0], 0, "L", range[1], 0].join(" ")}\n        fill="none"\n        stroke="currentColor"\n      />\n\n      {/* Ticks and labels */}\n      {ticks.map(({ value, xOffset }) => (\n        <g key={value} transform={`translate(${xOffset}, 0)`}>\n          <line y2={TICK_LENGTH} stroke="currentColor" />\n          <text\n            key={value}\n            style={{\n              fontSize: "10px",\n              textAnchor: "middle",\n              transform: "translateY(20px)",\n            }}\n          >\n            {value}\n          </text>\n        </g>\n      ))}\n    </>\n  );\n};\n'.trim(),b='\nconst TICK_LENGTH = 6;\n\nexport const AxisLeft = ({ yScale, pixelsPerTick }) => {\n  const range = yScale.range();\n\n  const ticks = useMemo(() => {\n    const height = range[0] - range[1];\n    const numberOfTicksTarget = Math.floor(height / pixelsPerTick);\n\n    return yScale.ticks(numberOfTicksTarget).map((value) => ({\n      value,\n      yOffset: yScale(value),\n    }));\n  }, [yScale]);\n\n  return (\n    <>\n      {/* Main vertical line */}\n      <path\n        d={["M", 0, range[0], "L", 0, range[1]].join(" ")}\n        fill="none"\n        stroke="currentColor"\n      />\n\n      {/* Ticks and labels */}\n      {ticks.map(({ value, yOffset }) => (\n        <g key={value} transform={`translate(0, ${yOffset})`}>\n          <line x2={-TICK_LENGTH} stroke="currentColor" />\n          <text\n            key={value}\n            style={{\n              fontSize: "10px",\n              textAnchor: "middle",\n              transform: "translateX(-20px)",\n            }}\n          >\n            {value}\n          </text>\n        </g>\n      ))}\n    </>\n  );\n};\n'.trim();function k(){let e=(0,r.useRef)(null),t=(0,h.B)(e);return(0,s.jsxs)(i.A,{title:"Building graph axes with React (and d3.js)",seoDescription:"This blogpost explains how to build axes from d3 scales for a chart. It relies on the tick() method to compute the tick positions and use react for the rendering.",children:[(0,s.jsx)(a.Z,{title:"Building graph axes with React (and d3.js)",description:g}),(0,s.jsxs)("div",{className:"w-full flex flex-col justify-center items-center",children:[(0,s.jsx)("div",{style:{height:250,width:"100%",maxWidth:500},ref:e,children:(0,s.jsx)(x.X,{width:t.width,height:t.height})}),(0,s.jsxs)("p",{className:"text-sm text-gray-500 max-w-md italic text-center mt-4 font-light",children:["This minimal example uses ",(0,s.jsx)("code",{children:"scaleLinear()"})," to compute the scales, ",(0,s.jsx)("code",{children:"ticks()"})," to compute tick positions and react to render the axes."]})]}),(0,s.jsxs)(d.U,{title:"Building a bottom axis with React",startOpen:!0,children:[(0,s.jsxs)("p",{children:["The code snippet below builds a ",(0,s.jsx)("code",{children:"AxisBottom"})," component. It is"," ",(0,s.jsxs)(p.b,{children:["very much inspired from"," ",(0,s.jsx)("a",{href:"https://wattenberger.com/blog/react-and-d3",children:"this blogpost"})," ","by Amelia Wattenberger"]}),". I've just changed a few things, notably passing a scale as input instead of a range and a domain."]}),(0,s.jsxs)("p",{children:["The logic mainly relies on the ",(0,s.jsx)("code",{children:"ticks()"})," method of a d3 scale. It takes a target number of ticks as input, find the most appropriate way to build smart ticks based on this target, and returns an array with all the tick positions."]}),(0,s.jsx)("p",{children:"What follows is just some svg drawings based on those tick positions."}),(0,s.jsx)(u.d,{code:j})]}),(0,s.jsxs)(d.U,{title:"Building a left axis with React",startOpen:!1,children:[(0,s.jsx)("p",{children:"Exactly the same idea than for the bottom axis above"}),(0,s.jsx)(u.d,{code:b})]}),(0,s.jsxs)(d.U,{title:"Dealing with margins",startOpen:!0,children:[(0,s.jsx)("p",{children:"The bottom and left axes are not displays at the border of the main chart component. Some margins are computed by the viz component. It is important to understand that a chart is composed by:"}),(0,s.jsxs)("ul",{className:"list-disc list-inside pl-10",children:[(0,s.jsxs)("li",{children:["the global chart area, often specified by the ",(0,s.jsx)("code",{children:"width"})," and"," ",(0,s.jsx)("code",{children:"height"})," properties of the chart components."]}),(0,s.jsx)("li",{children:'the "bounds" area, i.e. the area located inside the x and y axis. It is calculated by substracting the margins'})]})]}),(0,s.jsxs)(d.U,{title:"Use the axes",startOpen:!0,children:[(0,s.jsx)("p",{children:"Once you have the bottom and left axis component described above you just need to call them properly. You need to compute the bounds area by substracting the margins to the total svg area."}),(0,s.jsx)("p",{children:"Don't forget to add an additional translation to the bottom axis to render it... at the bottom."}),(0,s.jsx)(l.$,{vizName:"AxisBasic",VizComponent:m.c,maxWidth:600,height:300,caption:"This axis is rendered without using d3.js to render."})]}),(0,s.jsxs)(d.U,{title:"Alternative: the d3 way",startOpen:!0,children:[(0,s.jsxs)("p",{children:["If you're a d3.js afficionados and want to deal with as little react as possible, you can still use the good old ",(0,s.jsx)("code",{children:"axisBottom()"})," ","and ",(0,s.jsx)("code",{children:"axisLeft()"})," methods of d3 and wrap them in a",(0,s.jsx)("code",{children:"useEffect()"})," hook."]}),(0,s.jsx)("p",{children:"Here is an example below:"}),(0,s.jsx)(l.$,{vizName:"AxisBasicD3",VizComponent:f.d,maxWidth:600,height:300,caption:"This axis is rendered using d3. The d3 necessary functions are called from a useEffect"})]}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("hr",{className:"full-bleed  bord er bg-gray-200 mb-3 mt-10"}),(0,s.jsx)(c.Z,{chartFamily:"general"}),(0,s.jsx)("div",{className:"mt-20"}),(0,s.jsx)(o.Z,{})]})}},4699:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var s=n(5893),r=n(8657);let i=e=>{let{width:t,height:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("defs",{children:(0,s.jsx)("pattern",{id:"pattern_rkDsm",patternUnits:"userSpaceOnUse",width:"9.5",height:"2.5",patternTransform:"rotate(41)",children:(0,s.jsx)("line",{x1:"0",y:"0",x2:"0",y2:"9.5",stroke:"#D9B9F3",strokeWidth:"1"})})}),(0,s.jsx)("rect",{width:t,height:n,fill:"url(#pattern_rkDsm)",opacity:"1"})]})};var a=n(7294);let o=e=>{let{xScale:t,pixelsPerTick:n}=e,r=t.range(),i=(0,a.useMemo)(()=>{let e=r[1]-r[0];return t.ticks(Math.floor(e/n)).map(e=>({value:e,xOffset:t(e)}))},[t]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("path",{d:["M",r[0],0,"L",r[1],0].join(" "),fill:"none",stroke:"currentColor"}),i.map(e=>{let{value:t,xOffset:n}=e;return(0,s.jsxs)("g",{transform:"translate(".concat(n,", 0)"),children:[(0,s.jsx)("line",{y2:6,stroke:"currentColor"}),(0,s.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateY(20px)"},children:t},t)]},t)})]})},l=e=>{let{yScale:t,pixelsPerTick:n}=e,r=t.range(),i=(0,a.useMemo)(()=>{let e=r[0]-r[1];return t.ticks(Math.floor(e/n)).map(e=>({value:e,yOffset:t(e)}))},[t]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("path",{d:["M",0,r[0],"L",0,r[1]].join(" "),fill:"none",stroke:"currentColor"}),i.map(e=>{let{value:t,yOffset:n}=e;return(0,s.jsxs)("g",{transform:"translate(0, ".concat(n,")"),children:[(0,s.jsx)("line",{x2:-6,stroke:"currentColor"}),(0,s.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateX(-20px)"},children:t},t)]},t)})]})},c={top:30,right:30,bottom:50,left:50},d=e=>{let{width:t,height:n}=e,a=t-c.right-c.left,d=n-c.top-c.bottom,h=r.BYU().domain([0,10]).range([0,a]),x=r.BYU().domain([0,11]).range([d,0]);return r.p2C().domain([1e-24,10]).range(["red","blue"]).clamp(!0),(0,s.jsx)("div",{children:(0,s.jsx)("svg",{width:t,height:n,shapeRendering:"crispEdges",children:(0,s.jsxs)("g",{width:a,height:d,transform:"translate(".concat([c.left,c.top].join(","),")"),overflow:"visible",children:[(0,s.jsx)(i,{width:a,height:d}),(0,s.jsx)(l,{yScale:x,pixelsPerTick:30}),(0,s.jsx)("g",{transform:"translate(0, ".concat(d,")"),children:(0,s.jsx)(o,{xScale:h,pixelsPerTick:60})})]})})})}},1341:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var s=n(5893),r=n(4699);let i=e=>{let{width:t=700,height:n=400}=e;return(0,s.jsx)(r.X,{width:t,height:n})}},9618:function(e,t,n){"use strict";n.d(t,{d:function(){return c}});var s=n(5893),r=n(7294),i=n(8657);let a=e=>{let{width:t,height:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("defs",{children:(0,s.jsx)("pattern",{id:"pattern_rkDsm",patternUnits:"userSpaceOnUse",width:"9.5",height:"2.5",patternTransform:"rotate(41)",children:(0,s.jsx)("line",{x1:"0",y:"0",x2:"0",y2:"9.5",stroke:"#D9B9F3",strokeWidth:"1"})})}),(0,s.jsx)("rect",{width:t,height:n,fill:"url(#pattern_rkDsm)",opacity:"1"})]})},o={top:30,right:30,bottom:50,left:50},l=e=>{let{width:t,height:n}=e,l=(0,r.useRef)(null),c=t-o.right-o.left,d=n-o.top-o.bottom,h=(0,r.useMemo)(()=>i.BYU().domain([0,10]).range([0,c]),[t]),x=(0,r.useMemo)(()=>i.BYU().domain([0,10]).range([d,0]),[n]);return(0,r.useEffect)(()=>{let e=i.Ys(l.current);e.selectAll("*").remove();let t=i.LLu(h);e.append("g").attr("transform","translate(0,"+d+")").call(t);let n=i.y4O(x);e.append("g").call(n)},[h,x,d]),(0,s.jsx)("div",{children:(0,s.jsxs)("svg",{width:t,height:n,style:{display:"inline-block"},children:[(0,s.jsx)("g",{width:c,height:d,transform:"translate(".concat([o.left,o.top].join(","),")"),children:(0,s.jsx)(a,{width:c,height:d})}),(0,s.jsx)("g",{width:c,height:d,ref:l,transform:"translate(".concat([o.left,o.top].join(","),")")})]})})},c=e=>{let{width:t=700,height:n=400}=e;return(0,s.jsx)(l,{width:t,height:n})}},5993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}}},function(e){e.O(0,[3996,8657,3213,645,9142,9774,2888,179],function(){return e(e.s=1662)}),_N_E=e.O()}]);