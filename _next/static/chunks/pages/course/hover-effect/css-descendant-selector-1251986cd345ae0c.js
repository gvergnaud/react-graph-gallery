(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9548],{53458:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/hover-effect/css-descendant-selector",function(){return n(37344)}])},81122:function(e,t,n){"use strict";n.d(t,{$:function(){return o}});var r=n(85893),s=n(67294),i=n(59973),a=n(80615),l=n(88578),c=n(5);let o=e=>{let{VizComponent:t,vizName:n,height:o=400,maxWidth:d=800,caption:h}=e,[u,m]=(0,s.useState)(!1),x=(0,s.useRef)(null),p=(0,i.B)(x);return(0,r.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,r.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,r.jsx)(l.X,{vizName:n})}),(0,r.jsx)("div",{className:"flex justify-center mt-2",children:(0,r.jsx)(c.z,{size:"sm",onClick:()=>m(!u),children:"Hide Sandbox"})})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,r.jsx)("div",{style:{height:o,width:"100%",maxWidth:d},ref:x,className:"pointer-events-auto",children:(0,r.jsx)(t,{height:o,width:p.width})})}),(0,r.jsx)(a.Y,{children:h}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(c.z,{size:"sm",onClick:()=>m(!u),children:"Show code"})})]})})}},88578:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(85893);n(67294);let s=e=>{let{vizName:t}=e;return(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},52450:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(85893);n(67294);var s=n(92050),i=n(49975),a=n(59942);function l(e){let{images:t}=e,n=s.F.filter(e=>t.includes(e.img)).map((e,t)=>(0,r.jsx)(i.X,{link:e.link,title:e.title,description:(0,r.jsx)("p",{children:e.description}),img:e.img,alt:e.alt},t));return(0,r.jsx)(a.E,{children:n})}},41843:function(e,t,n){"use strict";n.d(t,{p:function(){return o}});var r=n(85893),s=n(49700),i=n(63476),a=n(17414),l=n(41664),c=n.n(l);let o=e=>{let{children:t,title:n,seoDescription:l,previousTocItem:o,nextTocItem:d}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:n,seoDescription:l}),(0,r.jsx)(s.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:t}),(0,r.jsxs)("div",{className:"flex justify-center items-center space-x-6 my-24 py-12  bg-muted/50",children:[o?(0,r.jsxs)(c(),{href:o.link,className:"text-gray-500 no-underline flex flex-col justify-start items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted ",children:[(0,r.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text",children:"← Previous"}),(0,r.jsx)("p",{children:o.name})]}):(0,r.jsx)("div",{className:"w-96"}),d&&(0,r.jsxs)(c(),{href:d.link,className:"text-gray-500 no-underline flex flex-col justify-start w-96 h-32 border-l border-black  p-8 hover:bg-muted ",children:[(0,r.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text",children:"Next →"}),(0,r.jsx)("p",{children:d.name})]})]}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(i.Z,{})})]})}},80615:function(e,t,n){"use strict";n.d(t,{Y:function(){return s}});var r=n(85893);let s=e=>{let{children:t}=e;return(0,r.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return d}});var r=n(85893),s=n(32581),i=n(15660),a=n.n(i),l=n(67294),c=n(45993),o=n.n(c);let d=e=>{let{code:t}=e,[n,i]=(0,l.useState)(!1),c=(0,l.useRef)(null);(0,l.useEffect)(()=>{c.current&&a().highlightElement(c.current)},[c,t]);let d=(0,r.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),i(!0)},className:o().codeChunckCopyButton,children:n?"Copied":(0,r.jsx)(s.Z,{size:14,style:{padding:0}})});return(0,r.jsxs)("div",{className:"mb-6 relative",children:[(0,r.jsx)("pre",{className:"rounded-md line-numbers",children:(0,r.jsx)("code",{ref:c,className:"language-javascript",children:t})}),(0,r.jsx)("div",{className:o().copyButtonContainer,children:d})]})}},59973:function(e,t,n){"use strict";n.d(t,{B:function(){return s}});var r=n(67294);let s=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,s]=(0,r.useState)(t),i=()=>{s(t())};return(0,r.useEffect)(()=>(window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)),[]),(0,r.useEffect)(()=>{i()},[e]),n}},37344:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(85893);n(67294);var s=n(43710),i=n(41843),a=n(11236),l=n(81122),c=n(3572),o=n(8117),d=n(52450),h=n(60390),u=n(41664),m=n.n(u);let x="/course/hover-effect/css-descendant-selector";function p(){let e=a.Y.find(e=>e.link===x),t=a.Y.findIndex(e=>e.link===x);return e?(0,r.jsxs)(i.p,{title:e.name,seoDescription:"",nextTocItem:a.Y.find(e=>"/course/hover-effect/toggle-class-in-js"===e.link),previousTocItem:a.Y.find(e=>"/course/hover-effect/css-pseudo-class"===e.link),children:[(0,r.jsx)(s.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,topBadge:"Lesson "+t,description:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["In the previous lesson, we learned how to modify a hovered graph item using the ",(0,r.jsx)("code",{children:":hover"})," CSS pseudo-class."]}),(0,r.jsxs)("p",{children:["However, this approach has ",(0,r.jsx)("b",{children:"design limitations"}),". To achieve a more effective highlighting effect, it's better to simultaneously"," ",(0,r.jsx)("b",{children:"dim the other graph items"}),"."]}),(0,r.jsx)("p",{children:"This can be accomplished using CSS alone, with the help of the CSS descendant selector."})]})}),(0,r.jsx)("h2",{children:"What is a css descendant selector?"}),(0,r.jsxs)("p",{children:["A"," ",(0,r.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator",children:"descendant selector"})," ","allows to target elements that are children of another element."]}),(0,r.jsx)("p",{children:"Here’s an example:"}),(0,r.jsx)(c.d,{code:"\n.rectangle {\n  opacity: 1;\n}\n.container:hover .rectangle {\n  opacity: .1;\n}\n.container .rectangle:hover {\n  opacity: 1;\n}\n".trim()}),(0,r.jsxs)("p",{children:["We assign a class called ",(0,r.jsx)("code",{children:"container"})," to the SVG container and a class called ",(0,r.jsx)("code",{children:"rectangle"})," to each rectangle in the chart."]}),(0,r.jsxs)("p",{children:["Then we set the default rectangle ",(0,r.jsx)("code",{children:"opacity"})," to 1. Using the descendant selector, you can reduce the opacity of all rectangles to 0.1 when the ",(0,r.jsx)("code",{children:"container"})," is hovered."]}),(0,r.jsx)("p",{children:"Then, use a hover selector to set the opacity of the hovered rectangle back to 1."}),(0,r.jsx)("h2",{children:"Application: treemap"}),(0,r.jsx)(l.$,{vizName:"TreemapHoverEffect",VizComponent:h.C,maxWidth:600,height:400,caption:"Strategy 2: use CSS descendant combinator to dim all markers except the one that is hovered."}),(0,r.jsx)("h2",{children:"Pros & Cons"}),(0,r.jsx)("p",{children:(0,r.jsx)(o.C,{children:"Pros"})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Easy to implement"}),(0,r.jsx)("li",{children:"Improves design by making hover effects more noticeable"}),(0,r.jsx)("li",{children:"Excellent performance (no JS computation, minimal redrawing)"})]}),(0,r.jsx)("p",{children:(0,r.jsx)(o.C,{variant:"destructive",children:"Cons"})}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Fades all circles if the mouse enters the chart area without hovering over a specific circle. This technique works for chart where the whole svg area is covered by markers, like a"," ",(0,r.jsx)(m(),{href:"/treemap",children:"treemap"}),"."]}),(0,r.jsxs)("li",{children:["Cannot highlight circles that are obscured by other elements. (Potentially fixed using ",(0,r.jsx)("code",{children:"z-index"}),")."]})]}),(0,r.jsx)("h2",{children:"More examples"}),(0,r.jsx)("p",{children:"The examples below all use this strategy to implement their hover effect."}),(0,r.jsx)(d.Z,{images:["lollipop-plot-hover-effect.png","streamgraph-hover-effect.gif"]})]}):null}},60390:function(e,t,n){"use strict";n.d(t,{C:function(){return h}});var r=n(85893);let s={type:"node",name:"boss",value:0,children:[{type:"node",name:"Team Dataviz",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53}]},{type:"node",name:"Team DevOps",value:0,children:[{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12}]},{type:"node",name:"Team Sales",value:0,children:[{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]}]};var i=n(67294),a=n(43950),l=n(87552),c=n.n(l);let o=["#e0ac2b","#6689c6","#a4c969","#e85252","#9a6fb0","#a53253","#7f7f7f"],d=e=>{let{width:t,height:n,data:s}=e,l=(0,i.useMemo)(()=>a.bT9(s).sum(e=>e.value),[s]),d=null==l?void 0:null===(h=l.children)||void 0===h?void 0:h.map(e=>e.data.name);var h,u=a.PKp().domain(d||[]).range(o);let m=(0,i.useMemo)(()=>{let e=a.pNI().size([t,n]).padding(4);return e(l)},[l,t,n]),x=m.leaves().map((e,t)=>{var n;let s=null===(n=e.parent)||void 0===n?void 0:n.data.name;return(0,r.jsxs)("g",{className:c().rectangle,children:[(0,r.jsx)("rect",{x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,stroke:"transparent",fill:u(s),className:"opacity-80 hover:opacity-100"}),(0,r.jsx)("text",{x:e.x0+3,y:e.y0+3,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-bold",children:e.data.name}),(0,r.jsx)("text",{x:e.x0+3,y:e.y0+18,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-light",children:e.data.value})]},e.id)});return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:n,className:c().container,children:x})})},h=e=>{let{width:t=700,height:n=400}=e;return(0,r.jsx)(d,{data:s,width:t,height:n})}},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},87552:function(e){e.exports={container:"treemap_container__nYrjn",rectangle:"treemap_rectangle__xOWar"}}},function(e){e.O(0,[2343,7754,3950,7823,8190,3710,693,9774,2888,179],function(){return e(e.s=53458)}),_N_E=e.O()}]);