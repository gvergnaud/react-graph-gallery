(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1119],{97600:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dataset-transition",function(){return n(84419)}])},61651:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(85893);n(67294);var a=n(49871),r=n(28843),s=n(77522);let l={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function o(e){let{chartFamily:t}=e,n=r.c.filter(e=>e.family===t).map((e,t)=>{let n=(0,s.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(a.Z,{link:n,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:122})},t)});return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==l?void 0:l[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:n})]})}},81122:function(e,t,n){"use strict";n.d(t,{$:function(){return c}});var i=n(85893),a=n(67294),r=n(59973),s=n(80615),l=n(88578),o=n(5);let c=e=>{let{VizComponent:t,vizName:n,height:c=400,maxWidth:d=800,caption:h,fileToOpen:u}=e,[m,x]=(0,a.useState)(!1),p=(0,a.useRef)(null),f=(0,r.B)(p);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:m?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(l.X,{vizName:n,fileToOpen:u})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(o.z,{size:"sm",onClick:()=>x(!m),children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:p,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:c,width:f.width})})}),(0,i.jsx)(s.Y,{children:h}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(o.z,{size:"sm",onClick:()=>x(!m),children:"Show code"})})]})})}},88578:function(e,t,n){"use strict";n.d(t,{X:function(){return a}});var i=n(85893);n(67294);let a=e=>{let{vizName:t,height:n="500px",fileToOpen:a}=e;return console.log("rerendeeeerrrrr"),(0,i.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split"+(a?"&module=/".concat(a):""),style:{width:"100%",height:n,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},80153:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var i=n(85893),a=n(49700),r=n(63476),s=n(67294),l=n(63084),o=n.n(l);function c(){let[e,t]=(0,s.useState)([]),[n,a]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,s.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),n=window.scrollY+150,i=t.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e,0),r=t.findIndex(e=>e===i);a(-1===r?0:r)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,i.jsx)("div",{className:o().tableOfContent,children:e.map((t,a)=>(0,i.jsx)("p",{className:n===a?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[a].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=n(17414),h=n(62594);let u=e=>{let{children:t,title:n,seoDescription:s}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:n,seoDescription:s}),(0,i.jsx)(a.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:t}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(r.Z,{})}),(0,i.jsx)(c,{})]})}},49871:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(85893);n(67294);var a=n(95887),r=n(28843),s=n(41664),l=n.n(s);let o=r.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:n,link:r,isAvailable:s,size:c}=e,h=o.includes(t),u=s?"opacity-100":"opacity-20";return(0,i.jsx)(l(),{href:s?r:"subscribe",className:"no-underline",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(s?"cursor-pointer":"cursor-not-allowed"),children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(a.Z,{chartLogo:t,size:c})}),h?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(d,{size:c})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:n})]})})}let d=e=>{let{size:t}=e;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},80615:function(e,t,n){"use strict";n.d(t,{Y:function(){return a}});var i=n(85893);let a=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return d}});var i=n(85893),a=n(32581),r=n(15660),s=n.n(r),l=n(67294),o=n(45993),c=n.n(o);let d=e=>{let{code:t}=e,[n,r]=(0,l.useState)(!1),o=(0,l.useRef)(null);(0,l.useEffect)(()=>{o.current&&s().highlightElement(o.current)},[o,t]);let d=(0,i.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),r(!0)},className:c().codeChunckCopyButton,children:n?"Copied":(0,i.jsx)(a.Z,{size:14,style:{padding:0}})});return(0,i.jsxs)("div",{className:"mb-6 relative",children:[(0,i.jsx)("pre",{className:"rounded-md line-numbers",children:(0,i.jsx)("code",{ref:o,className:"language-javascript",children:t})}),(0,i.jsx)("div",{className:c().copyButtonContainer,children:d})]})}},59973:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});var i=n(67294);let a=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,a]=(0,i.useState)(t),r=()=>{a(t())};return(0,i.useEffect)(()=>(window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)),[]),(0,i.useEffect)(()=>{r()},[e]),n}},84419:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var i=n(85893),a=n(67294),r=n(80153),s=n(43710),l=n(62594),o=n(81122),c=n(61651),d=n(59973),h=n(24109),u=n(46228);let m=[{x:50,y:50,name:"A"},{x:12,y:90,name:"B"},{x:8,y:20,name:"C"},{x:89,y:22,name:"D"},{x:19,y:67,name:"E"},{x:56,y:23,name:"F"},{x:12,y:29,name:"G"},{x:11,y:67,name:"H"},{x:13,y:25,name:"I"},{x:18,y:46,name:"J"},{x:9,y:98,name:"K"},{x:98,y:98,name:"L"},{x:34,y:48,name:"M"}],x=[{x:19,y:75,name:"B"},{x:18,y:25,name:"C"},{x:49,y:22,name:"D"},{x:19,y:97,name:"E"},{x:26,y:23,name:"F"},{x:2,y:29,name:"G"},{x:91,y:47,name:"H"},{x:13,y:25,name:"I"},{x:18,y:46,name:"J"},{x:9,y:98,name:"K"},{x:98,y:98,name:"L"},{x:34,y:48,name:"M"},{x:20,y:20,name:"N"}];var p=n(43950),f=n(2719);let v={top:30,right:30,bottom:50,left:50},j=e=>{let{width:t,height:n,data:r}=e,s=(0,a.useRef)(null),l=t-v.right-v.left,o=n-v.top-v.bottom,c=(0,a.useMemo)(()=>p.BYU().domain([0,100]).range([o,0]),[r,n]),d=(0,a.useMemo)(()=>p.BYU().domain([0,100]).range([0,l]),[r,t]);(0,a.useEffect)(()=>{let e=p.Ys(s.current);e.selectAll("*").remove();let t=p.LLu(d);e.append("g").attr("transform","translate(0,"+o+")").call(t);let n=p.y4O(c);e.append("g").call(n)},[d,c,o]);let h=r.map((e,t)=>{let n=50===e.x&&50===e.y?"blue":20===e.x&&20===e.y?"red":"purple";return(0,i.jsx)(y,{x:d(e.x),y:c(e.y),color:n},e.name)});return(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:t,height:n,children:[(0,i.jsx)("g",{width:l,height:o,transform:"translate(".concat([v.left,v.top].join(","),")"),children:h}),(0,i.jsx)("g",{width:l,height:o,ref:s,transform:"translate(".concat([v.left,v.top].join(","),")")})]})})},y=e=>{let{x:t,y:n,color:a}=e,r=(0,f.q_)({from:{opacity:0,r:0},to:{x:t,y:n,opacity:1,r:8},config:{friction:100}});return(0,i.jsx)(f.q.circle,{r:r.r,cx:r.x,cy:r.y,opacity:1,fill:a,fillOpacity:r.opacity})},g={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},b=e=>{let{width:t,height:n}=e,[r,s]=(0,a.useState)(m);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{height:50},children:[(0,i.jsx)("button",{style:g,onClick:()=>s(m),children:"Data 1"}),(0,i.jsx)("button",{style:g,onClick:()=>s(x),children:"Data 2"})]}),(0,i.jsx)(j,{width:t,height:n-50,data:r})]})},w=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(b,{width:t,height:n})};var N=n(53810),k=n(3572);let C=(0,i.jsxs)("p",{children:["How to smoothly transition from a dataset to the other. Use the"," ",(0,i.jsx)("code",{children:"react-spring"})," library. Several examples with explanation. Start simple. Then focus on tricky things like enter, exit, axis, path."]}),_="\nconst springProps = useSpring({\n  to: {\n    barWidth,\n  }\n});\n".trim(),z='\n<animated.rect\n  x={x}\n  y={y}\n  width={springProps.barWidth}\n  height={height}\n  fill="#9d174d"\n/>\n'.trim();function A(){let e=(0,a.useRef)(null),t=(0,d.B)(e);return(0,i.jsxs)(r.A,{title:"Smooth dataset transition",seoDescription:"This blogpost explains how to animate the a dataset transition using react-spring.",children:[(0,i.jsx)(s.Z,{title:"Animated dataset transition",description:C}),(0,i.jsxs)("div",{className:"w-full flex flex-col justify-center items-center",children:[(0,i.jsx)("div",{style:{height:250,width:"100%",maxWidth:500},ref:e,children:(0,i.jsx)(h.M,{width:t.width,height:t.height})}),(0,i.jsxs)("p",{className:"text-sm text-gray-500 max-w-md italic text-center mt-8 font-light",children:["A minimal react-spring dataviz example. A viz component expect a"," ",(0,i.jsx)("code",{children:"position"})," and a ",(0,i.jsx)("code",{children:"color"})," prop. But it smoothly animates the transition."]})]}),(0,i.jsx)("h2",{id:"most basic",children:"Most basic"}),(0,i.jsx)("p",{children:"Consider a change where dataset has the same structure, just the values change. Same number of items."}),(0,i.jsx)("p",{children:"Also, just animating a prop of a shape"}),(0,i.jsx)("p",{children:"Very simple, just animate the bar width"}),(0,i.jsx)("p",{children:"Spring looks like this"}),(0,i.jsx)(k.d,{code:_}),(0,i.jsxs)("p",{children:["Now, we have a springProps object that has a ",(0,i.jsx)("code",{children:"barWidth"})," ","property."]}),(0,i.jsxs)("p",{children:["We can pass it to a ",(0,i.jsx)("code",{children:"animated.rect"})," svg element."]}),(0,i.jsx)(k.d,{code:z}),(0,i.jsx)(o.$,{vizName:"BarplotDatasetTransition",VizComponent:u.P,maxWidth:800,height:450,caption:"Most basic dataviz animation with react spring. The width of each bar is smoothly updated with an animation."}),(0,i.jsx)("h2",{id:"custom enter",children:"Scatterplot transition"}),(0,i.jsx)("p",{children:"Axis limits set to 0 to 100. No need to animate axis for now."}),(0,i.jsx)("p",{children:"Most of the circles just have their x and Y positions that update, no big deal."}),(0,i.jsx)("p",{children:"Blue and red point exist only in dataset 1 and 2 respectively. We need to make them enter and leave the scene properly."}),(0,i.jsx)(o.$,{vizName:"ScatterplotDatasetTransition",VizComponent:w,maxWidth:500,height:450,caption:"A very basic animation using react and react-spring."}),(0,i.jsx)("h2",{id:"left",children:"Animating a path"}),(0,i.jsx)("p",{children:"Donut is more tricky since each shape is a path. As a result, we need to compute the d property for each frame of the animation."}),(0,i.jsxs)("p",{children:["This is possible thanks to the ",(0,i.jsx)("code",{children:"to()"})," function"]}),(0,i.jsx)(o.$,{vizName:"DonutDatasetTransition",VizComponent:N.M,maxWidth:500,height:450,caption:"A very basic animation using react and react-spring."}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("hr",{className:"full-bleed  bord er bg-gray-200 mb-3 mt-10"}),(0,i.jsx)(c.Z,{chartFamily:"general"}),(0,i.jsx)("div",{className:"mt-20"}),(0,i.jsx)(l.Z,{})]})}},46228:function(e,t,n){"use strict";n.d(t,{P:function(){return x}});var i=n(85893),a=n(67294);let r=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"M\xe9lanie",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Paul",value:2}],s=[{name:"Mark",value:9},{name:"Robert",value:19},{name:"Emily",value:31},{name:"Marion",value:23},{name:"Nicolas",value:38},{name:"M\xe9lanie",value:123},{name:"Gabriel",value:4},{name:"Jean",value:23},{name:"Christophe",value:22}];var l=n(43950),o=n(2719);let c=e=>{var t,n,a,r;let{name:s,value:l,barHeight:c,barWidth:d,x:h,y:u}=e,m=(0,o.q_)({from:{value:0,barWidth:0,valueOpacity:0},to:{value:l,barWidth:d,valueOpacity:d>80?1:0,y:u},config:{friction:100}});return(0,i.jsxs)("g",{children:[(0,i.jsx)(o.q.rect,{x:h,y:m.y,width:m.barWidth,height:c,opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1}),(0,i.jsx)(o.q.text,{x:null===(t=m.barWidth)||void 0===t?void 0:t.to(e=>e-7),y:null===(n=m.y)||void 0===n?void 0:n.to(e=>e+c/2),textAnchor:"end",alignmentBaseline:"central",fontSize:12,opacity:m.valueOpacity,children:null===(a=m.value)||void 0===a?void 0:a.to(e=>e.toFixed(0))}),(0,i.jsx)(o.q.text,{x:h+7,y:null===(r=m.y)||void 0===r?void 0:r.to(e=>e+c/2),textAnchor:"start",alignmentBaseline:"central",fontSize:12,children:s})]})},d={top:30,right:30,bottom:30,left:30},h=e=>{let{width:t,height:n,data:r}=e,s=t-d.right-d.left,o=n-d.top-d.bottom,h=r.sort((e,t)=>t.value-e.value).map(e=>e.name),u=(0,a.useMemo)(()=>l.tiA().domain(h).range([0,o]).padding(.3),[r,n]),m=l.Fp7(r.map(e=>e.value)),x=l.BYU().domain([0,m]).range([0,s]),p=r.map(e=>(0,i.jsx)(c,{name:e.name,value:e.value,barHeight:u.bandwidth(),barWidth:x(e.value),x:x(0),y:u(e.name)},e.name));return(0,i.jsx)("div",{children:(0,i.jsx)("svg",{width:t,height:n,children:(0,i.jsx)("g",{width:s,height:o,transform:"translate(".concat([d.left,d.top].join(","),")"),children:p})})})},u={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},m=e=>{let{width:t,height:n}=e,[l,o]=(0,a.useState)(r);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{height:50},children:[(0,i.jsx)("button",{style:u,onClick:()=>o(r),children:"Data 1"}),(0,i.jsx)("button",{style:u,onClick:()=>o(s),children:"Data 2"})]}),(0,i.jsx)(h,{width:t,height:n-50,data:l})]})},x=e=>{let{width:t=700,height:n=400}=e;return t&&n?(0,i.jsx)(m,{width:t,height:n}):null}},24109:function(e,t,n){"use strict";n.d(t,{M:function(){return m}});var i=n(85893),a=n(67294);let r=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Etienne",value:void 0},{name:"Emily",value:34},{name:"Nicolas",value:98},{name:"Marion",value:53}],s=[{name:"Mark",value:80},{name:"Robert",value:10},{name:"Etienne",value:48},{name:"Emily",value:6},{name:"Nicolas",value:8},{name:"Marion",value:45}];var l=n(43950),o=n(86824);let c=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],d=e=>{let{width:t,height:n,data:r}=e,s=r.sort((e,t)=>e<t?-1:e>t?1:0),o=Math.min(t,n)/2-30,d=(0,a.useMemo)(()=>{let e=l.ve8().value(e=>e.value||0).sort(null);return e(s)},[r]),u=d.map((e,t)=>(0,i.jsx)(h,{radius:o,slice:e,color:c[t]},e.data.name));return(0,i.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,i.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:u})})},h=e=>{let{slice:t,radius:n,color:a}=e,r=l.Nb1(),s=(0,o.q_)({to:{pos:[t.startAngle,t.endAngle]}});return(0,i.jsx)(o.q.path,{d:s.pos.to((e,t)=>r({innerRadius:40,outerRadius:n,startAngle:e,endAngle:t})),fill:a})},u={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"0px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},m=e=>{let{width:t,height:n}=e,[l,o]=(0,a.useState)(r);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{height:50},children:[(0,i.jsx)("button",{style:u,onClick:()=>o(r),children:"Data 1"}),(0,i.jsx)("button",{style:u,onClick:()=>o(s),children:"Data 2"})]}),(0,i.jsx)(d,{width:t,height:n-50,data:l})]})}},53810:function(e,t,n){"use strict";n.d(t,{M:function(){return r}});var i=n(85893),a=n(24109);let r=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(a.M,{width:t,height:n})}},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}},86824:function(e,t,n){"use strict";n.d(t,{q:function(){return i.q},q_:function(){return i.q_},to:function(){return i.to},vc:function(){return i.vc}});var i=n(2719)}},function(e){e.O(0,[2343,7754,3950,7823,2719,8190,3710,2594,9774,2888,179],function(){return e(e.s=97600)}),_N_E=e.O()}]);