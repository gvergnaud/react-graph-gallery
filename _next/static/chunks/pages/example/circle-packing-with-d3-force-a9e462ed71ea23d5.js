(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3918],{11097:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/circle-packing-with-d3-force",function(){return r(32407)}])},61651:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var i=r(85893);r(67294);var n=r(49871),a=r(28843),l=r(77522);let s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function c(e){let{chartFamily:t}=e,r=a.c.filter(e=>e.family===t).map((e,t)=>{let r=(0,l.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(n.Z,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==s?void 0:s[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},81122:function(e,t,r){"use strict";r.d(t,{$:function(){return o}});var i=r(85893),n=r(67294),a=r(59973),l=r(80615),s=r(88578),c=r(5);let o=e=>{let{VizComponent:t,vizName:r,height:o=400,maxWidth:d=800,caption:h}=e,[u,m]=(0,n.useState)(!1),p=(0,n.useRef)(null),f=(0,a.B)(p);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(s.X,{vizName:r})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(c.z,{size:"sm",onClick:()=>m(!u),children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:o,width:"100%",maxWidth:d},ref:p,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:o,width:f.width})})}),(0,i.jsx)(l.Y,{children:h}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(c.z,{size:"sm",onClick:()=>m(!u),children:"Show code"})})]})})}},88578:function(e,t,r){"use strict";r.d(t,{X:function(){return n}});var i=r(85893);r(67294);let n=e=>{let{vizName:t}=e;return(0,i.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},80153:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var i=r(85893),n=r(49700),a=r(63476),l=r(67294),s=r(63084),c=r.n(s);function o(){let[e,t]=(0,l.useState)([]),[r,n]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,l.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,i=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),a=t.findIndex(e=>e===i);n(-1===a?0:a)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,i.jsx)("div",{className:c().tableOfContent,children:e.map((t,n)=>(0,i.jsx)("p",{className:r===n?"".concat(c().tocItem," ").concat(c().tocItemActive):c().tocItem,onClick:t=>{t.preventDefault(),e[n].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=r(17414),h=r(62594);let u=e=>{let{children:t,title:r,seoDescription:l}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:r,seoDescription:l}),(0,i.jsx)(n.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:t}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(a.Z,{})}),(0,i.jsx)(o,{})]})}},49871:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(85893);r(67294);var n=r(95887),a=r(28843),l=r(41664),s=r.n(l);let c=a.c.filter(e=>"general"===e.family).map(e=>e.logo);function o(e){let{chartLogo:t,caption:r,link:a,isAvailable:l,size:o}=e,h=c.includes(t),u=l?"opacity-100":"opacity-20";return(0,i.jsx)(s(),{href:l?a:"subscribe",className:"no-underline",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:o,height:o},className:"relative mr-2 rounded-full "+u+" "+(l?"cursor-pointer":"cursor-not-allowed"),children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(n.Z,{chartLogo:t,size:o})}),h?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(d,{size:o})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:r})]})})}let d=e=>{let{size:t}=e;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},80615:function(e,t,r){"use strict";r.d(t,{Y:function(){return n}});var i=r(85893);let n=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,r){"use strict";r.d(t,{d:function(){return d}});var i=r(85893),n=r(32581),a=r(15660),l=r.n(a),s=r(67294),c=r(45993),o=r.n(c);let d=e=>{let{code:t}=e,[r,a]=(0,s.useState)(!1),c=(0,s.useRef)(null);(0,s.useEffect)(()=>{c.current&&l().highlightElement(c.current)},[c,t]);let d=(0,i.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),a(!0)},className:o().codeChunckCopyButton,children:r?"Copied":(0,i.jsx)(n.Z,{size:14,style:{padding:0}})});return(0,i.jsxs)("div",{className:"mb-6 relative",children:[(0,i.jsx)("pre",{className:"rounded-md line-numbers",children:(0,i.jsx)("code",{ref:c,className:"language-javascript",children:t})}),(0,i.jsx)("div",{className:o().copyButtonContainer,children:d})]})}},59973:function(e,t,r){"use strict";r.d(t,{B:function(){return n}});var i=r(67294);let n=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[r,n]=(0,i.useState)(t),a=()=>{n(t())};return(0,i.useEffect)(()=>(window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)),[]),(0,i.useEffect)(()=>{a()},[e]),r}},32407:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var i=r(85893),n=r(67294),a=r(80153),l=r(43710),s=r(61651),c=r(3572),o=r(81122),d=r(41664),h=r.n(d),u=r(56438);let m=[{id:"Myriel",group:"team1",value:90},{id:"Anne",group:"team1",value:10},{id:"Gabriel",group:"team1",value:34},{id:"Mel",group:"team1",value:9},{id:"Yan",group:"team2",value:16},{id:"Tom",group:"team2",value:93},{id:"Cyril",group:"team2",value:23},{id:"Tuck",group:"team2",value:54},{id:"Antoine",group:"team3",value:9},{id:"Rob",group:"team3",value:78},{id:"Napoleon",group:"team3",value:45},{id:"Toto",group:"team4",value:78},{id:"Tutu",group:"team4",value:98},{id:"Titi",group:"team4",value:9},{id:"Tata",group:"team4",value:5},{id:"Turlututu",group:"team4",value:45},{id:"Tita",group:"team4",value:59}];var p=r(88657);let f=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],x=(e,t,r,i,n)=>{let a=[...new Set(i.map(e=>e.group))],l=(0,p.PKp)().domain(a).range(f);e.clearRect(0,0,t,r),i.forEach(t=>{t.x&&t.y&&(e.beginPath(),e.moveTo(t.x+12,t.y),e.arc(t.x,t.y,n(t.value),0,2*Math.PI),e.fillStyle=l(t.group),e.fill())})},g=e=>{let{width:t,height:r,data:a}=e,l=a.map(e=>({...e})),s=(0,n.useRef)(null),[c,o]=(0,p.Wem)(l.map(e=>e.value)),d=(0,p.PUr)().domain([c,o]).range([4,80]);return(0,n.useEffect)(()=>{let e=s.current,i=null==e?void 0:e.getContext("2d");i&&p.A4v(l).force("collide",p.Hh().radius(e=>d(e.value)+1)).force("charge",p.q5i().strength(80)).force("center",p.wqt(t/2,r/2)).force("charge",p.Mrm(0).strength(.05)).on("tick",()=>{x(i,t,r,l,d)})},[t,r,l,d]),(0,i.jsx)("div",{children:(0,i.jsx)("canvas",{ref:s,style:{width:t,height:r},width:t,height:r})})},j=e=>{let{width:t=700,height:r=400}=e;return 0===t?null:(0,i.jsx)(g,{data:m,width:t,height:r})},v=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["This tutorial is a variation around the general"," ",(0,i.jsx)(h(),{href:"/circular-packing",children:"introduction to circle packing with react"})," ","and d3.js. You should probably understand the concepts described there before reading here."]}),(0,i.jsxs)("p",{children:["Instead of relying on the ",(0,i.jsx)("code",{children:"pack()"})," function of d3.js to compute the best node positions, this example suggests to rely on the"," ",(0,i.jsx)(h(),{href:"/network-diagram",children:"d3-force"})," plugin to apply"," ",(0,i.jsx)("b",{children:"physical forces"})," on each node."]}),(0,i.jsxs)("p",{children:["A code sandbox is provided for the final result, but explanations target what's different compared to a classic"," ",(0,i.jsx)(h(),{href:"/circular-packing",children:"circular packing"})," based on some concepts described in the"," ",(0,i.jsx)(h(),{href:"/network-diagram",children:"network diagram"})," section."]})]});function b(){return(0,i.jsxs)(a.A,{title:"Circle Packing with d3-force.",seoDescription:"Example of a network diagram react component. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,i.jsx)(l.Z,{title:"Circle Packing with d3-force",description:v,chartType:"circularPacking"}),(0,i.jsx)("h2",{id:"plot",children:"Plot and code"}),(0,i.jsx)("p",{children:"Here is the final plot we're trying to achieve here, together with its code:\uD83D\uDE47‍♂️"}),(0,i.jsx)("p",{children:"It is a circular packing chart where all circles represent an item of the dataset."}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:["The circle area is proportional to the ",(0,i.jsx)("code",{children:"value"})," property of the data item."]}),(0,i.jsxs)("li",{children:["All circles are close to each other but ",(0,i.jsx)("b",{children:"do not collide"}),". They are also attracted by the ",(0,i.jsx)("code",{children:"y=0"})," horizontal axis, what"," ",(0,i.jsx)("b",{children:"aligns them horizontally"})]})]}),(0,i.jsx)("p",{children:"To understand how this chart works, you need the concepts described in the Network diagram and Circle pack sections."}),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(u.J,{isFilled:!0,size:"sm",href:"/network-chart",children:"Network section"}),(0,i.jsx)(u.J,{isFilled:!0,size:"sm",href:"/circular-packing",children:"Circle Packing section"})]}),(0,i.jsx)(o.$,{vizName:"CircularPackingWithD3Force",VizComponent:j,maxWidth:800,height:700,caption:(0,i.jsxs)("span",{children:["A circle packing chart made using the d3-force plugin, with bubbles being attracted by the ",(0,i.jsx)("code",{children:"y=0"})," baseline."]})}),(0,i.jsxs)("h2",{id:"forces",children:["Using ",(0,i.jsx)("code",{children:"d3-force"})]}),(0,i.jsxs)("p",{children:["This example is actually a variation of a"," ",(0,i.jsx)(h(),{href:"/network-diagram",children:"network diagram"}),", but with no links between nodes."]}),(0,i.jsx)("p",{children:"Some physical forces are applied to each node to compute their position through an iterative simulation:"}),(0,i.jsx)(c.d,{code:w}),(0,i.jsx)("p",{children:"Here is a reminder:"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"collide"})," avoids circle overlap. It uses each node radius to make sure there is no collision."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"manyBody"})," makes sure that nodes are attracted one to each other since the ",(0,i.jsx)("code",{children:"strength"})," in use is positive."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"forceCenter"})," center the whole chart on the canvas."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"forceY"})," aligns bubble on a horizontal line."]})]}),(0,i.jsx)("h2",{id:"bubble size",children:"Bubble Size"}),(0,i.jsxs)("p",{children:["As explained in the"," ",(0,i.jsx)(h(),{href:"/bubble-plot",children:"bubble chart section"}),", it is very important to have the bubble ",(0,i.jsx)("b",{children:"area"})," being proportional to the numeric",(0,i.jsx)("code",{children:"value"})," of the data point."]}),(0,i.jsxs)("p",{children:["It is a very"," ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/caveat/radius_or_area.html",target:"_blank",children:"common mistake"})," ","to make the ",(0,i.jsx)("b",{children:"radius"})," proportional to numeric value, which leads to a misleading visualization."]}),(0,i.jsxs)("p",{children:["Fortunately, it is very straightforward to scale the bubble appropriately thanks to the ",(0,i.jsx)("code",{children:"scaleSqrt()"})," function."]}),(0,i.jsx)(c.d,{code:y}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,i.jsx)(s.Z,{chartFamily:"flow"}),(0,i.jsx)("div",{className:"mt-20"})]})}let w="\nd3.forceSimulation(nodes)\n  .force(\n    'collide',\n    d3.forceCollide().radius((node) => sizeScale(node.value) + 1)\n  )\n  .force('charge', d3.forceManyBody().strength(80))\n  .force('center', d3.forceCenter(width / 2, height / 2))\n  .force('charge', d3.forceY(0).strength(0.05))\n".trim(),y="\nconst sizeScale = scaleSqrt()\n  .domain([min, max])\n  .range([BUBBLE_MIN_SIZE, BUBBLE_MAX_SIZE]);\n".trim()},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[2343,7754,8657,7823,8190,3710,2594,9774,2888,179],function(){return e(e.s=11097)}),_N_E=e.O()}]);