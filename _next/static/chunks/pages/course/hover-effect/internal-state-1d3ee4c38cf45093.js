(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5517],{99591:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/hover-effect/internal-state",function(){return n(46544)}])},81122:function(e,t,n){"use strict";n.d(t,{$:function(){return c}});var r=n(85893),s=n(67294),i=n(59973),a=n(80615),o=n(88578),l=n(5);let c=e=>{let{VizComponent:t,vizName:n,height:c=400,maxWidth:d=800,caption:h}=e,[u,p]=(0,s.useState)(!1),x=(0,s.useRef)(null),m=(0,i.B)(x);return(0,r.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,r.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,r.jsx)(o.X,{vizName:n})}),(0,r.jsx)("div",{className:"flex justify-center mt-2",children:(0,r.jsx)(l.z,{size:"sm",onClick:()=>p(!u),children:"Hide Sandbox"})})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,r.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:x,className:"pointer-events-auto",children:(0,r.jsx)(t,{height:c,width:m.width})})}),(0,r.jsx)(a.Y,{children:h}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(l.z,{size:"sm",onClick:()=>p(!u),children:"Show code"})})]})})}},88578:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(85893);n(67294);let s=e=>{let{vizName:t,height:n="500px",fileToOpen:s}=e;return(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split"+(s?"&module=/".concat(s):""),style:{width:"100%",height:n,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},52450:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(85893);n(67294);var s=n(92050),i=n(49975),a=n(59942);function o(e){let{images:t}=e,n=s.F.filter(e=>t.includes(e.img)).map((e,t)=>(0,r.jsx)(i.X,{link:e.link,title:e.title,description:(0,r.jsx)("p",{children:e.description}),img:e.img,alt:e.alt},t));return(0,r.jsx)(a.E,{children:n})}},41843:function(e,t,n){"use strict";n.d(t,{p:function(){return c}});var r=n(85893),s=n(49700),i=n(63476),a=n(17414),o=n(41664),l=n.n(o);let c=e=>{let{children:t,title:n,seoDescription:o,previousTocItem:c,nextTocItem:d}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:n,seoDescription:o}),(0,r.jsx)(s.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:t}),(0,r.jsxs)("div",{className:"flex justify-center items-center space-x-6 my-24 py-12  bg-muted/50",children:[c?(0,r.jsxs)(l(),{href:c.link,className:"text-gray-500 no-underline flex flex-col justify-start items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted ",children:[(0,r.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text",children:"← Previous"}),(0,r.jsx)("p",{children:c.name})]}):(0,r.jsx)("div",{className:"w-96"}),d&&(0,r.jsxs)(l(),{href:d.link,className:"text-gray-500 no-underline flex flex-col justify-start w-96 h-32 border-l border-black  p-8 hover:bg-muted ",children:[(0,r.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text",children:"Next →"}),(0,r.jsx)("p",{children:d.name})]})]}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(i.Z,{})})]})}},80615:function(e,t,n){"use strict";n.d(t,{Y:function(){return s}});var r=n(85893);let s=e=>{let{children:t}=e;return(0,r.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return d}});var r=n(85893),s=n(32581),i=n(15660),a=n.n(i),o=n(67294),l=n(45993),c=n.n(l);let d=e=>{let{code:t}=e,[n,i]=(0,o.useState)(!1),l=(0,o.useRef)(null);(0,o.useEffect)(()=>{l.current&&a().highlightElement(l.current)},[l,t]);let d=(0,r.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),i(!0)},className:c().codeChunckCopyButton,children:n?"Copied":(0,r.jsx)(s.Z,{size:14,style:{padding:0}})});return(0,r.jsxs)("div",{className:"mb-6 relative",children:[(0,r.jsx)("pre",{className:"rounded-md line-numbers",children:(0,r.jsx)("code",{ref:l,className:"language-javascript",children:t})}),(0,r.jsx)("div",{className:c().copyButtonContainer,children:d})]})}},59973:function(e,t,n){"use strict";n.d(t,{B:function(){return s}});var r=n(67294);let s=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,s]=(0,r.useState)(t),i=()=>{s(t())};return(0,r.useEffect)(()=>(window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)),[]),(0,r.useEffect)(()=>{i()},[e]),n}},46544:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(85893),s=n(67294),i=n(43710),a=n(41843),o=n(11236),l=n(81122),c=n(3572),d=n(8117),h=n(52450),u=n(80615),p=n(41664),x=n.n(p);let m=[{name:"A",value:90},{name:"B",value:12},{name:"C",value:34},{name:"D",value:53},{name:"E",value:98}];var j=n(43950);let f={top:30,right:30,bottom:30,left:30},g=["#98abc5","#8a89a6","#7b6888","#6b486b","#a05d56"],v=e=>{let{width:t,height:n,data:s,hoveredGroup:i,setHoveredGroup:a}=e,o=t-f.right-f.left,l=n-f.top-f.bottom,c=s.sort((e,t)=>t.value-e.value).map(e=>e.name),d=j.tiA().domain(c).range([0,l]).padding(.3),[h,u]=j.Wem(s.map(e=>e.value)),p=j.BYU().domain([0,u||10]).range([0,o]),x=s.map((e,t)=>{let n=d(e.name),s=e.name===i?1:.7,o=e.name===i?"black":g[t];return void 0===n?null:(0,r.jsxs)("g",{children:[(0,r.jsx)("rect",{x:p(0),y:d(e.name),width:p(e.value),height:d.bandwidth(),opacity:s,stroke:o,fill:g[t],fillOpacity:s,strokeWidth:1,rx:1,onMouseOver:()=>a(e.name),onMouseLeave:()=>a(null),cursor:"pointer"}),(0,r.jsx)("text",{x:p(0)+7,y:n+d.bandwidth()/2,textAnchor:"start",alignmentBaseline:"central",fontSize:12,opacity:s,children:e.name})]},t)});return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:n,children:(0,r.jsx)("g",{width:o,height:l,transform:"translate(".concat([f.left,f.top].join(","),")"),children:x})})})},b=["#98abc5","#8a89a6","#7b6888","#6b486b","#a05d56"],w=e=>{let{width:t,height:n,data:s,hoveredGroup:i,setHoveredGroup:a}=e,o=Math.min(t,n)/2-30,l=j.ve8().value(e=>e.value),c=l(s),d=j.Nb1(),h=c.map(e=>d({innerRadius:0,outerRadius:o,startAngle:e.startAngle,endAngle:e.endAngle}));return(0,r.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,r.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:h.map((e,t)=>{let n=s[t].name,o=n===i?1:.7,l=n===i?"black":b[t];return(0,r.jsx)("path",{d:e,fill:b[t],stroke:l,onMouseOver:()=>a(n),onMouseLeave:()=>a(null),cursor:"pointer",opacity:o},t)})})})},y=e=>{let{width:t=700,height:n=400}=e,[i,a]=(0,s.useState)(null);return(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)(v,{data:m,width:t/2,height:n,hoveredGroup:i,setHoveredGroup:a}),(0,r.jsx)(w,{data:m,width:t/2,height:n,hoveredGroup:i,setHoveredGroup:a})]})},k=e=>{let{width:t=700,height:n=400}=e;return(0,r.jsx)(y,{width:t,height:n})},N="/course/hover-effect/internal-state";function C(){let e=o.Y.find(e=>e.link===N);return(o.Y.findIndex(e=>e.link===N),e)?(0,r.jsxs)(a.p,{title:e.name,seoDescription:"",nextTocItem:o.Y.find(e=>""===e.link),previousTocItem:o.Y.find(e=>"/course/hover-effect/toggle-class-in-js"===e.link),children:[(0,r.jsx)(i.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,selectedLesson:e,description:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["We've already explored three different strategies for adding hover effects to a chart! \uD83D\uDE33 Each relies heavily on CSS, which is ideal as it requires ",(0,r.jsx)("b",{children:"minimal redrawing"}),"."]}),(0,r.jsxs)("p",{children:["However, sometimes a more traditional React approach is needed, using a ",(0,r.jsx)("b",{children:"central state"})," to trigger redraws when the state updates. Let’s explore why. ⬇️"]})]})}),(0,r.jsx)("h2",{children:"⚙️ Why and How"}),(0,r.jsxs)("p",{children:["Imagine you have multiple UI components. Say, a"," ",(0,r.jsx)(x(),{href:"/barplot",children:"barplot"})," and a"," ",(0,r.jsx)(x(),{href:"/pie-plot",children:"pie chart"}),", both displaying numbers for the same groups."]}),(0,r.jsxs)("p",{children:["When you hover over Group ",(0,r.jsx)("code",{children:"B"})," on the barplot, you also want group ",(0,r.jsx)("code",{children:"B"})," to be highlighted on the pie chart. This setup is common in dashboards."]}),(0,r.jsxs)("p",{children:["The CSS-focused strategies we've used before ",(0,r.jsx)("b",{children:"won’t work here"}),". Instead, we need a",(0,r.jsx)("b",{children:" parent component "}),"that wraps both charts and manages a ",(0,r.jsx)("b",{children:"shared state"}),". When one chart is hovered, it updates the shared state, which in turn updates both charts."]}),(0,r.jsxs)("div",{className:"flex flex-col items-center mt-8 mb-12",children:[(0,r.jsx)("img",{src:"/excalidraw/state-update.png",style:{maxWidth:650},alt:"Anatomy of a state update connection 2 charts."}),(0,r.jsx)(u.Y,{children:"Anatomy of a state update, connecting 2 charts together."})]}),(0,r.jsx)("p",{children:"Here’s a step-by-step breakdown:"}),(0,r.jsxs)("p",{children:["1️⃣ The mouse hovers over group ",(0,r.jsx)("code",{children:"B"})," on the bar plot, triggering a function thanks to ",(0,r.jsx)("code",{children:"onMouseEnter"})]}),(0,r.jsxs)("p",{children:["2️⃣ This function calls ",(0,r.jsx)("code",{children:"setHoverGroup"}),", updating the"," ",(0,r.jsx)("b",{children:"global state"})," in the parent component."]}),(0,r.jsxs)("p",{children:["3️⃣ ",(0,r.jsx)("code",{children:"hoveredGroup"}),", the global state, is passed to the pie chart as a prop."]}),(0,r.jsxs)("p",{children:["4️⃣ When ",(0,r.jsx)("code",{children:"hoveredGroup"})," updates, the pie chart re-renders, highlighting the group ",(0,r.jsx)("code",{children:"B"})," slice."]}),(0,r.jsx)("h2",{children:"Let's code!"}),(0,r.jsx)("h3",{children:"1️⃣ Internal state"}),(0,r.jsxs)("p",{children:["First, we need an internal state (called ",(0,r.jsx)("code",{children:"hoveredGroup"}),") that stores which group is hovered hover. It can also be ",(0,r.jsx)("code",{children:"null"})," if there is nothing hovered!"]}),(0,r.jsxs)("p",{children:["This is possible thanks to the"," ",(0,r.jsx)("a",{href:"https://react.dev/reference/react/useState",children:"useState"})," hook:"]}),(0,r.jsx)(c.d,{code:"\nconst [hoveredGroup, setHoveredGroup] = useState<string | null>(null);\n".trim()}),(0,r.jsx)("h3",{children:"2️⃣ Updating the state"}),(0,r.jsxs)("p",{children:["Now, this state needs to be updated when a user hovers over a bar in the"," ",(0,r.jsx)("code",{children:"Barplot"})," component."]}),(0,r.jsxs)("p",{children:["To do so, the ",(0,r.jsx)("code",{children:"setHoveredGroup()"})," function can be passed as a prop to the Barplot component."]}),(0,r.jsx)(c.d,{code:"\n<Barplot width={300} height={300} setHoveredGroup={setHoveredGroup}>".trim()}),(0,r.jsxs)("p",{children:["Then, the ",(0,r.jsx)("code",{children:"onMouseOver"})," attribute of each rectangle can call this setter function!"]}),(0,r.jsx)(c.d,{code:"\n<svg>\n  {data.map(d => {\n    return(\n      <rect\n        x={}\n        y={}\n        onMouseOver={() => setHoveredGroup(d.group)} // update the state\n        onMouseLeave={() => setHoveredGroup(null)} // and to set it back to null\n</svg>".trim()}),(0,r.jsx)("p",{children:"That's it, the state is updated!"}),(0,r.jsx)("h3",{children:"3️⃣ Update the pie chart"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("code",{children:"hoveredGroup"})," is now updated. We just have to pass it to the pie chart component!"]}),(0,r.jsx)(c.d,{code:"\n<Pie width={300} height={300} hoveredGroup={hoveredGroup}>".trim()}),(0,r.jsxs)("p",{children:["This will trigger a rerender of the ",(0,r.jsx)("code",{children:"Pie"})," component, since a prop just changed."]}),(0,r.jsx)("h3",{children:"4️⃣ Highlight a slice"}),(0,r.jsxs)("p",{children:["Now, we can use the value of ",(0,r.jsx)("code",{children:"hoveredGroup"})," in the rendering logic to change the style of the slice that must be highlighted."]}),(0,r.jsx)(c.d,{code:'\n<path\n    fill = {d.group === hoveredGroup ? "blue" : "red"}\n/>\n'.trim()}),(0,r.jsx)("h2",{children:"Example"}),(0,r.jsxs)("p",{children:["Here’s a preview of this strategy in action. Hover over one graph, and watch the ",(0,r.jsx)("b",{children:"corresponding section"})," in the other graph highlight as well:"]}),(0,r.jsx)(l.$,{vizName:"ConnectionBarPie",VizComponent:k,maxWidth:800,height:400,caption:"Two graphs inter-connected thanks to a hover effect"}),(0,r.jsx)("h2",{children:"Pros & Cons"}),(0,r.jsx)("p",{children:(0,r.jsx)(d.C,{children:"Pros"})}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Enables synchronization across ",(0,r.jsx)("b",{children:"multiple"})," UI components, allowing hover effects, tooltips, and text highlights to update together. Highly versatile."]}),(0,r.jsxs)("li",{children:["Provides flexibility for hover effects by using JavaScript animations, for instance, with ",(0,r.jsx)("code",{children:"react-spring"}),"."]})]}),(0,r.jsx)("p",{children:(0,r.jsx)(d.C,{variant:"destructive",children:"Cons"})}),(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:"Performance \uD83D\uDEA8\uD83D\uDEA8\uD83D\uDEA8: Redrawing all elements on each hover event can significantly impact performance, especially with many elements, such as thousands of circles."})}),(0,r.jsx)("h2",{children:"More examples"}),(0,r.jsx)("p",{children:"The examples below all use this strategy to implement their hover effect."}),(0,r.jsx)(h.Z,{images:["line-chart-synced-cursor.gif","streamgraph-application.gif"]}),(0,r.jsx)("h2",{children:"Exercise"}),(0,r.jsx)("p",{children:"Open a new sandbox, and build the barplot + pie chart example above from scratch!"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),(0,r.jsx)("blockquote",{className:"bg-fuchsia-50 py-8",children:(0,r.jsxs)("p",{children:["Remember, this strategy can have ",(0,r.jsx)("b",{children:"performance drawbacks"}),"! We'll cover a workaround using Canvas later in this course."]})})]}):null}},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}}},function(e){e.O(0,[2343,7754,3950,7823,8190,3710,693,9774,2888,179],function(){return e(e.s=99591)}),_N_E=e.O()}]);