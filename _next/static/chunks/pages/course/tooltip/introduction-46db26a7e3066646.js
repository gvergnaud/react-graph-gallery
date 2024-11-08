(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[346],{89108:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/tooltip/introduction",function(){return i(28601)}])},81122:function(e,t,i){"use strict";i.d(t,{$:function(){return c}});var s=i(85893),n=i(67294),r=i(59973),o=i(80615),l=i(88578),a=i(5);let c=e=>{let{VizComponent:t,vizName:i,height:c=400,maxWidth:h=800,caption:d,fileToOpen:u}=e,[p,x]=(0,n.useState)(!1),f=(0,n.useRef)(null),m=(0,r.B)(f);return(0,s.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:p?(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,s.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,s.jsx)(l.X,{vizName:i,fileToOpen:u})}),(0,s.jsx)("div",{className:"flex justify-center mt-2",children:(0,s.jsx)(a.z,{size:"sm",onClick:()=>x(!p),children:"Hide Sandbox"})})]}):(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,s.jsx)("div",{style:{height:c,width:"100%",maxWidth:h},ref:f,className:"pointer-events-auto",children:(0,s.jsx)(t,{height:c,width:m.width})})}),(0,s.jsx)(o.Y,{children:d}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(a.z,{size:"sm",onClick:()=>x(!p),children:"Show code"})})]})})}},88578:function(e,t,i){"use strict";i.d(t,{X:function(){return n}});var s=i(85893);i(67294);let n=e=>{let{vizName:t,height:i="500px",fileToOpen:n}=e;return(0,s.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split"+(n?"&module=/".concat(n):""),style:{width:"100%",height:i,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},41843:function(e,t,i){"use strict";i.d(t,{p:function(){return c}});var s=i(85893),n=i(49700),r=i(63476),o=i(17414),l=i(41664),a=i.n(l);let c=e=>{let{children:t,title:i,seoDescription:l,previousTocItem:c,nextTocItem:h}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{title:i,seoDescription:l}),(0,s.jsx)(n.Z,{}),(0,s.jsx)("div",{className:"wrapper",children:t}),(0,s.jsxs)("div",{className:"flex justify-center items-center space-x-6 my-24 py-12  bg-muted/50",children:[c?(0,s.jsxs)(a(),{href:c.link,className:"text-gray-500 no-underline flex flex-col justify-start items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted ",children:[(0,s.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text",children:"← Previous"}),(0,s.jsx)("p",{children:c.name})]}):(0,s.jsx)("div",{className:"w-96"}),h&&(0,s.jsxs)(a(),{href:h.link,className:"text-gray-500 no-underline flex flex-col justify-start w-96 h-32 border-l border-black  p-8 hover:bg-muted ",children:[(0,s.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text",children:"Next →"}),(0,s.jsx)("p",{children:h.name})]})]}),(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsx)(r.Z,{})})]})}},72182:function(e,t,i){"use strict";i.d(t,{b:function(){return n}});var s=i(85893);let n=e=>{let{children:t}=e;return(0,s.jsx)("span",{className:"font-semibol bg-purple-100 p-1",children:t})}},80615:function(e,t,i){"use strict";i.d(t,{Y:function(){return n}});var s=i(85893);let n=e=>{let{children:t}=e;return(0,s.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},59973:function(e,t,i){"use strict";i.d(t,{B:function(){return n}});var s=i(67294);let n=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[i,n]=(0,s.useState)(t),r=()=>{n(t())};return(0,s.useEffect)(()=>(window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)),[]),(0,s.useEffect)(()=>{r()},[e]),i}},28601:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return p}});var s=i(85893);i(67294);var n=i(43710),r=i(41843),o=i(11236),l=i(41664),a=i.n(l),c=i(80615),h=i(32428),d=i(81122),u=i(72182);function p(){let e=o.Y.find(e=>"/course/tooltip/introduction"===e.link);return e?(0,s.jsxs)(r.p,{title:e.name,seoDescription:"",nextTocItem:o.Y.find(e=>"/course/tooltip/tooltip-component"===e.link),previousTocItem:o.Y.find(e=>"/course/hover-effect/internal-state"===e.link),children:[(0,s.jsx)(n.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,selectedLesson:e,description:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["One of the most frustrating experiences in visual design is seeing a graph element on the screen but ",(0,s.jsx)("b",{children:"missing crucial details"})," ","about it—even though that information exists!"]}),(0,s.jsxs)("p",{children:["This module will end that frustration by showing you how to create"," ",(0,s.jsx)("b",{children:"reusable tooltip components"}),". Let’s dive in."]})]})}),(0,s.jsx)("h2",{children:"\uD83E\uDD14 Tooltip: Why?"}),(0,s.jsxs)("p",{children:["The graph below is a ",(0,s.jsx)(a(),{href:"/scatter-plot",children:"scatterplot"})," ","originally published by Datawrapper. It shows a strong"," ",(0,s.jsx)("b",{children:"negative correlation"})," between vulnerability to climate change and CO₂ emissions \uD83D\uDE14."]}),(0,s.jsx)("p",{children:"The graph looks good, and the message is clear."}),(0,s.jsxs)("p",{children:["But while a few countries are labeled on the chart,"," ",(0,s.jsx)(u.b,{children:"isn’t it frustrating not to know which country each data point represents"}),"?"]}),(0,s.jsx)("p",{children:(0,s.jsx)("br",{})}),(0,s.jsx)("p",{children:"In my opinion, it definitely is!"}),(0,s.jsx)("p",{children:"This is where tooltips come into play. Try hovering over a square: an informative tooltip with everything you need to know will appear."}),(0,s.jsx)(d.$,{VizComponent:h.z,vizName:"ScatterplotClimateCrisis",maxWidth:700,height:900,caption:(0,s.jsxs)("span",{children:["Reproduction of a chart originally published by"," ",(0,s.jsx)("a",{href:"https://blog.datawrapper.de/climate-risk-readiness-responsibility/",children:"Data Wrapper"})," ","using react and d3.js."]})}),(0,s.jsx)("h2",{children:"Design consideration"}),(0,s.jsx)("p",{children:"A few stuff to keep in mind to create a good tooltip:"}),(0,s.jsx)("h3",{children:"⚡️ Fast, but not too fast"}),(0,s.jsxs)("p",{children:["Tooltips should appear ",(0,s.jsx)("b",{children:"quickly upon hovering"}),", but not so fast that they flicker with small mouse movements"]}),(0,s.jsx)("h3",{children:"\uD83D\uDCA7 Show only crucial information"}),(0,s.jsxs)("p",{children:["Do not ",(0,s.jsx)("b",{children:"overwhelm"})," the user with a ton of information. Pick only what's truly informative. Tooltip are not always necessary, if it's just to remind the marker value, do not build a tooltip."]}),(0,s.jsx)("h3",{children:"\uD83D\uDCCD Positionning"}),(0,s.jsxs)("p",{children:["Tooltips should appear ",(0,s.jsx)("b",{children:"near the cursor"})," without obstructing the view of other data points. They should ",(0,s.jsx)("b",{children:"reposition"})," based on available screen space."]}),(0,s.jsx)("h3",{children:"\uD83D\uDC68‍\uD83E\uDDBD Accessibility"}),(0,s.jsx)("p",{children:"Tooltips should be accessible for all users, including those navigating via keyboard."}),(0,s.jsx)("h3",{children:"\uD83D\uDC6F Consistency"}),(0,s.jsx)("p",{children:"consistent formatting and style across all tooltips within the chart and within the application. Make tooltip style fits marker style."}),(0,s.jsx)("h2",{children:"Tooltip: How?"}),(0,s.jsx)("p",{children:"The tooltip isn’t built in SVG, but in HTML."}),(0,s.jsx)("p",{children:"Formatting text in SVG can be cumbersome, and HTML offers useful CSS features like borders and shadows that are perfect for tooltips."}),(0,s.jsxs)("p",{children:["The strategy is straightforward: place a ",(0,s.jsx)("code",{children:"div"})," on top of the SVG area with matching dimensions. This ",(0,s.jsx)("code",{children:"div"})," will host the tooltip React component, rendering HTML directly inside it."]}),(0,s.jsx)("p",{children:(0,s.jsx)("br",{})}),(0,s.jsxs)("center",{children:[(0,s.jsx)("img",{src:"/excalidraw/tooltip-layer.png",width:550,alt:"Anatomy of a graph with separate layers for SVG and tooltips"}),(0,s.jsx)(c.Y,{children:"Anatomy of a Graph with an SVG area and an overlaying tooltip layer"})]})," ",(0,s.jsx)("p",{children:(0,s.jsx)("br",{})}),(0,s.jsx)("p",{children:"Now, we have two tasks ahead:"}),(0,s.jsx)("p",{children:"1️⃣ Create a Tooltip component that displays the information."}),(0,s.jsx)("p",{children:"2️⃣ Ensure the tooltip appears only when the user hovers over a graph element."})," ",(0,s.jsx)("p",{children:(0,s.jsx)("br",{})}),(0,s.jsx)("p",{children:"That’s the plan for the next two lessons!"})]}):null}}},function(e){e.O(0,[2343,7754,3950,8190,3710,2428,9774,2888,179],function(){return e(e.s=89108)}),_N_E=e.O()}]);