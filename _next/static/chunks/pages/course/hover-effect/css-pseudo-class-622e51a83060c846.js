(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2172],{74730:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/hover-effect/css-pseudo-class",function(){return s(27157)}])},81122:function(e,t,s){"use strict";s.d(t,{$:function(){return a}});var n=s(85893),i=s(67294),r=s(59973),c=s(80615),l=s(88578),o=s(71415);let a=e=>{let{VizComponent:t,vizName:s,height:a=400,maxWidth:d=800,caption:h}=e,[u,p]=(0,i.useState)(!1),x=(0,i.useRef)(null),m=(0,r.B)(x);return(0,n.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,n.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,n.jsx)(l.X,{vizName:s})}),(0,n.jsx)("div",{className:"flex justify-center mt-2",children:(0,n.jsx)(o.z,{size:"sm",onClick:()=>p(!u),children:"Hide Sandbox"})})]}):(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,n.jsx)("div",{style:{height:a,width:"100%",maxWidth:d},ref:x,className:"pointer-events-auto",children:(0,n.jsx)(t,{height:a,width:m.width})})}),(0,n.jsx)(c.Y,{children:h}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(o.z,{size:"sm",onClick:()=>p(!u),children:"Show code"})})]})})}},88578:function(e,t,s){"use strict";s.d(t,{X:function(){return i}});var n=s(85893);s(67294);let i=e=>{let{vizName:t}=e;return(0,n.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},52450:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var n=s(85893);s(67294);var i=s(92050),r=s(49975),c=s(59942);function l(e){let{images:t}=e,s=i.F.filter(e=>t.includes(e.img)).map((e,t)=>(0,n.jsx)(r.X,{link:e.link,title:e.title,description:(0,n.jsx)("p",{children:e.description}),img:e.img,alt:e.alt},t));return(0,n.jsx)(c.E,{children:s})}},80615:function(e,t,s){"use strict";s.d(t,{Y:function(){return i}});var n=s(85893);let i=e=>{let{children:t}=e;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,s){"use strict";s.d(t,{d:function(){return d}});var n=s(85893),i=s(32581),r=s(15660),c=s.n(r),l=s(67294),o=s(45993),a=s.n(o);let d=e=>{let{code:t}=e,[s,r]=(0,l.useState)(!1),o=(0,l.useRef)(null);(0,l.useEffect)(()=>{o.current&&c().highlightElement(o.current)},[o,t]);let d=(0,n.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),r(!0)},className:a().codeChunckCopyButton,children:s?"Copied":(0,n.jsx)(i.Z,{size:14,style:{padding:0}})});return(0,n.jsxs)("div",{className:"mb-6 relative",children:[(0,n.jsx)("pre",{className:"rounded-md line-numbers",children:(0,n.jsx)("code",{ref:o,className:"language-javascript",children:t})}),(0,n.jsx)("div",{className:a().copyButtonContainer,children:d})]})}},59973:function(e,t,s){"use strict";s.d(t,{B:function(){return i}});var n=s(67294);let i=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[s,i]=(0,n.useState)(t),r=()=>{i(t())};return(0,n.useEffect)(()=>(window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)),[]),(0,n.useEffect)(()=>{r()},[e]),s}},27157:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return p}});var n=s(85893);s(67294);var i=s(43710),r=s(41843),c=s(11236),l=s(81122),o=s(421),a=s(3572),d=s(8117),h=s(52450);let u="/course/hover-effect/css-pseudo-class";function p(){let e=c.Y.find(e=>e.link===u),t=c.Y.findIndex(e=>e.link===u);return e?(0,n.jsxs)(r.p,{title:e.name,seoDescription:"",nextTocItem:c.Y.find(e=>"/course/hover-effect/css-descendant-selector"===e.link),previousTocItem:c.Y.find(e=>"/course/hover-effect/introduction"===e.link),children:[(0,n.jsx)(i.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,topBadge:"Lesson "+t,description:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"The simplest strategy."}),(0,n.jsxs)("p",{children:["Let's explore how to use a CSS pseudo-class to modify ",(0,n.jsx)("b",{children:"only"})," ","the graph item that is being hovered over."]})]})}),(0,n.jsx)("h2",{children:"What is a pseudo class"}),(0,n.jsxs)("p",{children:["A CSS ",(0,n.jsx)("b",{children:"pseudo-class"})," is a keyword added to a CSS selector that specifies a special state of the selected element(s). You can learn more about pseudo-classes in the"," ",(0,n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes",children:"MDN doc"}),"."]}),(0,n.jsxs)("p",{children:["Essentially, this means you can assign a class to each shape in a graph and change its appearance ",(0,n.jsx)("b",{children:"when the user hovers"})," over it."]}),(0,n.jsx)("p",{children:"Here is an example:"}),(0,n.jsx)(a.d,{code:"\n.scatterplotCircle {\n  cursor: pointer;\n  fill-opacity: .3;\n  stroke-width: 2px;\n}\n\n.scatterplotCircle:hover {\n  fill-opacity: 1;\n  stroke-width: 1px;\n}\n".trim()}),(0,n.jsx)("h2",{children:"Application on a scatterplot"}),(0,n.jsxs)("p",{children:["Consider a scatterplot with multiple SVG ",(0,n.jsx)("code",{children:"circle"})," elements, each assigned a ",(0,n.jsx)("code",{children:".scatterplotCircle"})," class. In the CSS file, you can set the ",(0,n.jsx)("code",{children:"fill-opacity"})," to ",(0,n.jsx)("code",{children:"0.3"})," using this class."]}),(0,n.jsxs)("p",{children:["To change the appearance on hover, use the"," ",(0,n.jsx)("code",{children:".scatterplotCircle:hover"})," selector to increase the opacity to 1."]}),(0,n.jsx)(l.$,{vizName:"ScatterplotHoverHighlightPseudoClass",VizComponent:o.z,maxWidth:400,height:500,caption:"Strategy 1: use a pseudo-class to change the appearance of the hovered marker"}),(0,n.jsx)("h2",{children:"Pros & Cons"}),(0,n.jsx)("p",{children:(0,n.jsx)(d.C,{children:"Pros"})}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Easy to implement"}),(0,n.jsx)("li",{children:"Excellent performance (no JS computation, minimal redrawing)"})]}),(0,n.jsx)("p",{children:(0,n.jsx)(d.C,{variant:"destructive",children:"Cons"})}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Poor design: non-hovered circles remain prominent, so the highlight effect is weak"}),(0,n.jsx)("li",{children:"If the highlight information comes as a prop, another solution is needed"})]}),(0,n.jsx)("h2",{children:"More examples"}),(0,n.jsx)("p",{children:"The examples below all use this strategy to implement their hover effect."}),(0,n.jsx)(h.Z,{images:["heatmapVaccination.png","treemap-most-basic.png"]})]}):null}},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}}},function(e){e.O(0,[2343,7754,8657,7823,8190,3710,693,2830,9774,2888,179],function(){return e(e.s=74730)}),_N_E=e.O()}]);