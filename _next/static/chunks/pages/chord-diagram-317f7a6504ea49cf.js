(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4594],{13827:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chord-diagram",function(){return n(9397)}])},61651:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(85893);n(67294);var i=n(49871),s=n(28843),o=n(77522);let a={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function d(e){let{chartFamily:t}=e,n=s.c.filter(e=>e.family===t).map((e,t)=>{let n=(0,o.y)(e.reactURL);return(0,r.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,r.jsx)(i.Z,{link:n,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:122})},t)});return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==a?void 0:a[t]}),(0,r.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:n})]})}},81122:function(e,t,n){"use strict";n.d(t,{$:function(){return c}});var r=n(85893),i=n(67294),s=n(59973),o=n(80615),a=n(88578),d=n(5);let c=e=>{let{VizComponent:t,vizName:n,height:c=400,maxWidth:l=800,caption:h}=e,[u,x]=(0,i.useState)(!1),m=(0,i.useRef)(null),p=(0,s.B)(m);return(0,r.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,r.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,r.jsx)(a.X,{vizName:n})}),(0,r.jsx)("div",{className:"flex justify-center mt-2",children:(0,r.jsx)(d.z,{size:"sm",onClick:()=>x(!u),children:"Hide Sandbox"})})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,r.jsx)("div",{style:{height:c,width:"100%",maxWidth:l},ref:m,className:"pointer-events-auto",children:(0,r.jsx)(t,{height:c,width:p.width})})}),(0,r.jsx)(o.Y,{children:h}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(d.z,{size:"sm",onClick:()=>x(!u),children:"Show code"})})]})})}},88578:function(e,t,n){"use strict";n.d(t,{X:function(){return i}});var r=n(85893);n(67294);let i=e=>{let{vizName:t,height:n="500px"}=e;return(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:n,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},26820:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(85893);n(67294);var i=n(28843),s=n(56438);let o=e=>{let{imgLink:t,height:n,opacity:i,children:s}=e;return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{style:{backgroundImage:"url("+t+")",height:n,backgroundAttachment:"fixed",opacity:i,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,r.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:s})]})};function a(e){var t;let{chartId:n}=e,a=(null===(t=i.c.find(e=>e.id===n))||void 0===t?void 0:t.label)||"chart";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{id:"inspiration",children:a+" inspiration"}),(0,r.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,r.jsx)("span",{children:a}),", note that"," ",(0,r.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,r.jsx)("div",{className:"border mb-10",children:(0,r.jsx)(o,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,r.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,r.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,r.jsxs)("p",{className:"text-center text-sm",children:[(0,r.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,r.jsx)("span",{children:a})," ","looks good!"]}),(0,r.jsx)(s.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},80153:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var r=n(85893),i=n(49700),s=n(63476),o=n(67294),a=n(63084),d=n.n(a);function c(){let[e,t]=(0,o.useState)([]),[n,i]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,o.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),n=window.scrollY+150,r=t.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e,0),s=t.findIndex(e=>e===r);i(-1===s?0:s)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,r.jsx)("div",{className:d().tableOfContent,children:e.map((t,i)=>(0,r.jsx)("p",{className:n===i?"".concat(d().tocItem," ").concat(d().tocItemActive):d().tocItem,onClick:t=>{t.preventDefault(),e[i].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var l=n(17414),h=n(62594);let u=e=>{let{children:t,title:n,seoDescription:o}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A,{title:n,seoDescription:o}),(0,r.jsx)(i.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:t}),(0,r.jsx)(h.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(s.Z,{})}),(0,r.jsx)(c,{})]})}},90505:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var r=n(85893),i=n(41664),s=n.n(i),o=n(28843),a=n(66717),d=n(3572);let c=e=>{let{chartId:t}=e,n=o.c.filter(e=>e.id===t)[0].label;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{id:"responsiveness",children:"Responsive "+n+" with react"}),(0,r.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,r.jsx)("code",{children:"width"})," and ",(0,r.jsx)("code",{children:"height"})," and will render a ",n," of those dimensions."]}),(0,r.jsxs)("p",{children:["Making the ",n," responsive requires adding a ",(0,r.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,r.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,r.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,r.jsx)(a.U,{title:(0,r.jsxs)("span",{children:[(0,r.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,r.jsx)(d.d,{code:l})}),(0,r.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,r.jsx)(s(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})},l='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},49871:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(85893);n(67294);var i=n(95887),s=n(28843),o=n(41664),a=n.n(o);let d=s.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:n,link:s,isAvailable:o,size:c}=e,h=d.includes(t),u=o?"opacity-100":"opacity-20";return(0,r.jsx)(a(),{href:o?s:"subscribe",className:"no-underline",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(o?"cursor-pointer":"cursor-not-allowed"),children:[(0,r.jsx)("div",{className:"absolute",children:(0,r.jsx)(i.Z,{chartLogo:t,size:c})}),h?(0,r.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,r.jsx)(l,{size:c})}):(0,r.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,r.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,r.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:n})]})})}let l=e=>{let{size:t}=e;return(0,r.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,r.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},66717:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});var r=n(85893);let i=e=>{let{title:t,children:n}=e;return(0,r.jsxs)("details",{className:"bg-gray-50 py-2 px-4 rounded-md my-2",children:[(0,r.jsx)("summary",{className:"cursor-pointer",children:t}),(0,r.jsx)("div",{className:"pt-4",children:n})]})}},80615:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});var r=n(85893);let i=e=>{let{children:t}=e;return(0,r.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return l}});var r=n(85893),i=n(32581),s=n(15660),o=n.n(s),a=n(67294),d=n(45993),c=n.n(d);let l=e=>{let{code:t}=e,[n,s]=(0,a.useState)(!1),d=(0,a.useRef)(null);(0,a.useEffect)(()=>{d.current&&o().highlightElement(d.current)},[d,t]);let l=(0,r.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),s(!0)},className:c().codeChunckCopyButton,children:n?"Copied":(0,r.jsx)(i.Z,{size:14,style:{padding:0}})});return(0,r.jsxs)("div",{className:"mb-6 relative",children:[(0,r.jsx)("pre",{className:"rounded-md line-numbers",children:(0,r.jsx)("code",{ref:d,className:"language-javascript",children:t})}),(0,r.jsx)("div",{className:c().copyButtonContainer,children:l})]})}},18893:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});var r=n(85893);let i=e=>{let{text:t}=e;return(0,r.jsxs)("blockquote",{className:"mt-10 opacity-20",children:[(0,r.jsx)("b",{className:"text-reactGallery mr-4",children:"ToDo"}),t]})}},59973:function(e,t,n){"use strict";n.d(t,{B:function(){return i}});var r=n(67294);let i=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,i]=(0,r.useState)(t),s=()=>{i(t())};return(0,r.useEffect)(()=>(window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)),[]),(0,r.useEffect)(()=>{s()},[e]),n}},9397:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(85893);n(67294);var i=n(80153),s=n(43710),o=n(61651),a=n(3572),d=n(81122),c=n(26820),l=n(90505);let h=[[11975,0,8916,2868],[1951,10048,2060,6171],[0,16145,8090,8045],[1013,990,940,6907]];var u=n(43950);let x=e=>{let{width:t,height:n,data:i}=e,s=u.fFo().padAngle(.05).sortSubgroups(u.$1i),o=s(i),a=Math.min(t,n)/2-30,d=u.Nb1(),c=o.groups.map((e,t)=>{let n=d({innerRadius:a-15,outerRadius:a,startAngle:e.startAngle,endAngle:e.endAngle});if(n)return(0,r.jsx)("path",{d:n,fill:"#69b3a2"},t)}),l=u.N22().radius(a-15-5),h=o.map((e,t)=>{let n=l(e);return(0,r.jsx)("path",{d:n,fill:"#69b3a2",opacity:".3"},t)});return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:n,children:(0,r.jsxs)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:[c,h]})})})},m=e=>{let{width:t=700,height:n=400}=e;return 0===t?null:(0,r.jsx)(x,{data:h,width:t,height:n})};var p=n(41664),f=n.n(p);let j=[[11975,0,8916,2868],[1951,10048,2060,6171],[0,16145,8090,8045],[1013,990,940,6907]],g=e=>{let{width:t,height:n,data:i}=e,s=u.fFo().padAngle(.05).sortSubgroups(u.$1i),o=s(i),a=Math.min(t,n)/2-30,d=u.Nb1(),c=o.groups.map((e,t)=>{let n=d({innerRadius:a-15,outerRadius:a,startAngle:e.startAngle,endAngle:e.endAngle});if(n)return(0,r.jsx)("path",{d:n,fill:"#69b3a2"},t)});return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:n,children:(0,r.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:c})})})},b=e=>{let{width:t=700,height:n=400}=e;return 0===t?null:(0,r.jsx)(g,{data:j,width:t,height:n})};var w=n(56438);let v=[[11975,0,8916,2868],[1951,10048,2060,6171],[0,16145,8090,8045],[1013,990,940,6907]],y=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"],N=e=>{let{width:t,height:n,data:i,groups:s}=e,o=u.fFo().padAngle(.05).sortSubgroups(u.$1i),a=o(i),d=Math.min(t,n)/2-30,c=u.Nb1(),l=a.groups.map((e,t)=>{let n=c({innerRadius:d-15,outerRadius:d,startAngle:e.startAngle,endAngle:e.endAngle});if(n)return(0,r.jsx)("path",{d:n,fill:y[e.index]},t)}),h=u.N22().radius(d-15-5),x=a.map((e,t)=>{let n=h(e),i=y[e.source.index];return(0,r.jsx)("path",{d:n,fill:i,stroke:i,strokeOpacity:".4",fillOpacity:".3"},t)}),m=a.groups.map((e,t)=>{let n={innerRadius:d-15,outerRadius:d,startAngle:e.startAngle,endAngle:e.endAngle},i=c.centroid(n);c(n);let o={innerRadius:d-15+20,outerRadius:d+20,startAngle:e.startAngle,endAngle:e.endAngle},a=c.centroid(o),l=a[0]>0,h=a[0]+50*(l?1:-1),u=s[e.index]+" ("+e.value+")";return(0,r.jsxs)("g",{children:[(0,r.jsx)("circle",{cx:i[0],cy:i[1],r:2}),(0,r.jsx)("line",{x1:i[0],y1:i[1],x2:a[0],y2:a[1],stroke:"black",fill:"black"}),(0,r.jsx)("line",{x1:a[0],y1:a[1],x2:h,y2:a[1],stroke:"black",fill:"black"}),(0,r.jsx)("text",{x:h+(l?2:-2),y:a[1],textAnchor:l?"start":"end",dominantBaseline:"middle",fontSize:14,children:u})]},t)});return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:n,children:(0,r.jsxs)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:[l,x,m]})})})},k=e=>{let{width:t=700,height:n=400}=e;return 0===t?null:(0,r.jsx)(N,{data:v,width:t,height:n,groups:["Barcelona","Paris","Dakar","NY"]})};var A=n(18893);let z=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["A ",(0,r.jsx)("a",{href:"https://www.data-to-viz.com/graph/chord.html",children:"chord diagram"})," ","represents ",(0,r.jsx)("b",{children:"flows"})," between several entities called ",(0,r.jsx)("b",{children:"nodes"}),". Each node is represented by a fragment on the outer part of the circular layout. Then, ",(0,r.jsx)("b",{children:"arcs"})," are drawn between each entities. The size of the arc is proportional to the importance of the flow.."]}),(0,r.jsxs)("p",{children:["Building a chord diagram with React and D3.js relies on the"," ",(0,r.jsx)("code",{children:"d3-chord"})," module that computes the node and arc positions for us. ",(0,r.jsx)("code",{children:"React"})," can then be used to draw everything in SVG. This page is a step by step tutorial with code sandboxes. It will teach you how to build a ",(0,r.jsx)("code",{children:"ChordDiagram"})," component."]})]});function C(){return(0,r.jsxs)(i.A,{title:"How to build a chord diagram with React and D3.",seoDescription:"A step-by-step guide to build your very own chord diagram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,r.jsx)(s.Z,{title:"Chord diagram",description:z,chartType:"chordDiagram"}),(0,r.jsx)("h2",{id:"data",children:"The Data"}),(0,r.jsxs)("p",{children:["The dataset required to build a chord diagram is a ",(0,r.jsx)("b",{children:"square matrix"}),". It has a dimension of ",(0,r.jsx)("code",{children:"n x n"})," where ",(0,r.jsx)("code",{children:"n"})," is the number of ",(0,r.jsx)("b",{children:"nodes"}),"."]}),(0,r.jsxs)("p",{children:["In javascript, this matrix is represented as an"," ",(0,r.jsxs)("b",{children:["array of ",(0,r.jsx)("code",{children:"n"})," array"]}),". Each individual array also has ",(0,r.jsx)("code",{children:"n"})," items. The matrix of flow has a ",(0,r.jsx)("b",{children:"direction"}),": the second item of the third row gives the flow from element 2 to element 3."]}),(0,r.jsxs)("p",{children:["Usually an additional array is provided, giving the ",(0,r.jsx)("b",{children:"name"})," of each node."]}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"Here is a minimal example of the data structure:"}),(0,r.jsx)(a.d,{code:D}),(0,r.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,r.jsxs)("p",{children:["The goal here is to create a ",(0,r.jsx)("code",{children:"ChordDiagram"})," component that will be stored in a ",(0,r.jsx)("code",{children:"ChordDiagram.tsx"})," file. This component requires 3 props to render: a ",(0,r.jsx)("code",{children:"width"}),", a ",(0,r.jsx)("code",{children:"height"}),", some ",(0,r.jsx)("code",{children:"data"})," and a list of ",(0,r.jsx)("code",{children:"names"}),"."]}),(0,r.jsxs)("p",{children:["The shape of the ",(0,r.jsx)("code",{children:"data"})," is described above. The"," ",(0,r.jsx)("code",{children:"width"})," and ",(0,r.jsx)("code",{children:"height"})," will be used to render an"," ",(0,r.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the chord diagram."]}),(0,r.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our"," ",(0,r.jsx)("code",{children:"ChordDiagram"})," component:"]}),(0,r.jsx)(a.d,{code:T}),(0,r.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the SVG ",(0,r.jsx)("code",{children:"circle"}),", but it's React that will render them in the ",(0,r.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,r.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,r.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,r.jsxs)("h2",{id:"chord()",children:["The ",(0,r.jsx)("code",{children:"chord()"})," function"]}),(0,r.jsxs)("p",{children:["We need to transform the flow matrix described in the"," ",(0,r.jsx)(f(),{href:"#data",children:"data"})," section into a list of node and connection coordinates. This is easy thanks to the ",(0,r.jsx)("code",{children:"chord()"})," ","function of d3.js."]}),(0,r.jsx)("p",{children:"The function can be used as follow:"}),(0,r.jsx)(a.d,{code:R}),(0,r.jsxs)("p",{children:["The returned object (",(0,r.jsx)("code",{children:"chord"})," in this example) is an array listing all the connections. For each, details about the"," ",(0,r.jsx)("code",{children:"source"})," and the ",(0,r.jsx)("code",{children:"target"})," are provided:"]}),(0,r.jsx)(a.d,{code:_}),(0,r.jsxs)("p",{children:["Last but not least, the array also has a ",(0,r.jsx)("code",{children:"group"})," property with details about all nodes of the chord diagram."]}),(0,r.jsx)(w.J,{href:"https://github.com/d3/d3-chord",isFilled:!0,size:"sm",children:"chord() official documentation"}),(0,r.jsx)("h2",{id:"Nodes",children:"Draw the nodes"}),(0,r.jsxs)("p",{children:["Nodes are drawn using the ",(0,r.jsx)("code",{children:"group"})," property of the"," ",(0,r.jsx)("code",{children:"chord"})," object computed above. For each group, the"," ",(0,r.jsx)("b",{children:"start"})," and ",(0,r.jsx)("b",{children:"end"})," angles are provided."]}),(0,r.jsxs)("p",{children:["From this information it is possible to draw an arc thanks to the"," ",(0,r.jsx)("code",{children:"arc()"})," function of d3. It is exactly the same process as for a ",(0,r.jsx)(f(),{href:"donut",children:"donut chart"}),". Please visit the donut section of the gallery for more explanation!"]}),(0,r.jsx)(w.J,{href:"donut",isFilled:!0,size:"sm",children:"Donut section"}),(0,r.jsx)(d.$,{VizComponent:b,vizName:"ChordDiagramNodeOnly",maxWidth:400,height:400,caption:"Nodes are drawn thanks to the arc() function of d3.js, like for a donut chart."}),(0,r.jsx)("h2",{id:"connections",children:"Draw the connections"}),(0,r.jsxs)("p",{children:["We now have to draw the connections between nodes that are listed in the initial square matrix (",(0,r.jsx)("code",{children:"data"}),")."]}),(0,r.jsxs)("p",{children:["The connection coordinates are listed in the ",(0,r.jsx)("code",{children:"chord"})," object computed in the ",(0,r.jsx)(f(),{href:"#chord()",children:"previous section"}),". For each connection we know the ",(0,r.jsx)("code",{children:"startAngle"})," and ",(0,r.jsx)("code",{children:"endAngle"})," ","of the ",(0,r.jsx)("code",{children:"source"})," and of the",(0,r.jsx)("code",{children:"target"}),"."]}),(0,r.jsxs)("p",{children:["This is everything we need to compute the connections thanks to the"," ",(0,r.jsx)("code",{children:"ribbon()"})," function of d3 as follow:"]}),(0,r.jsx)(a.d,{code:E}),(0,r.jsx)(d.$,{VizComponent:m,vizName:"ChordDiagramRibbon",maxWidth:400,height:400,caption:"Connections between nodes are drawn thanks to the ribbon() function of d3.js."}),(0,r.jsxs)(w.J,{href:"https://github.com/d3/d3-chord#ribbon",isFilled:!0,size:"sm",children:[(0,r.jsx)("code",{children:"d3.ribbon()"})," documentation"]}),(0,r.jsx)(l.r,{chartId:"chordDiagram"}),(0,r.jsx)(c.Z,{chartId:"chordDiagram"}),(0,r.jsx)("h2",{id:"basic",children:"First chord diagram"}),(0,r.jsx)("p",{children:"I suggest 2 improvements to get a descent chord diagram:"}),(0,r.jsx)("h3",{children:"→ Colors"}),(0,r.jsxs)("p",{children:["Pretty straightforward to implement. You just need to create an"," ",(0,r.jsx)("code",{children:"array of colors"}),". Then, for each item to draw the"," ",(0,r.jsx)("code",{children:"index"})," is always available. It can be used to retrieve the color in the color array."]}),(0,r.jsx)("h3",{children:"→ Labels"}),(0,r.jsxs)("p",{children:["A new ",(0,r.jsx)("b",{children:"prop"})," needs to be passed to the component with a list of names for the nodes. I suggest to position labels as for a"," ",(0,r.jsx)(f(),{href:"donut",children:"donut chart"})," but many other possibilities are available."]}),(0,r.jsx)(d.$,{VizComponent:k,vizName:"ChordDiagramBasic",maxWidth:700,height:450,caption:"Connections between nodes are drawn thanks to the ribbon() function of d3.js."}),(0,r.jsx)(A.H,{text:"Add section on hover effect"}),(0,r.jsx)(A.H,{text:"Talk about chordDirected() and chordTranspose()"}),(0,r.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,r.jsx)(o.Z,{chartFamily:"flow"}),(0,r.jsx)("div",{className:"mt-20"})]})}let D="\n// matrix of flow\nconst data = [\n  [11975,  0, 8916, 2868],\n  [ 1951, 10048, 2060, 6171],\n  [ 0, 16145, 8090, 8045],\n  [ 1013,   990,  940, 6907]\n];\n\n// node names\nconst nodeNames = ['Barcelona', 'Paris', 'Dakar', 'NY']\n".trim(),T='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype ChordDiagramProps = {\n  width: number;\n  height: number;\n  data: number[];\n};\n\nexport const ChordDiagram = ({ width, height, data }: ChordDiagramProps) => {\n\n  // read the data\n  // compute the nodes and ribbon position\n  // build the arcs\n  // build the ribbon\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render all the arcs and ribbons\n      </svg>\n    </div>\n  );\n};\n'.trim(),R="\nconst chordGenerator = d3\n.chord()\n.padAngle(0.05) // padding between nodes\n.sortSubgroups(d3.descending);\n\nconst chord = chordGenerator(data);\n".trim(),_="\n[\n  // first connection: flow between node 1 and node 1\n  {\n    source: { index: 0, startAngle: 0, endAngle: 0.84, value: 11975 },\n    target: { index: 0, startAngle: 0, endAngle: 0.84, value: 11975\n    }\n  },\n  // second connection: flow between node 2 and node 1\n  {\n    source: { index: 1, startAngle: 3.01, endAngle: 3.15, value: 1951 },\n    target: { index: 1, startAngle: 1.67, endAngle: 1.67, value: 0\n    }\n  },\n  // ...\n]\n".trim(),E="\nconst allConnections = chord.map((connection, i) => {\n  const d = ribbonGenerator(connection);\n  return <path key={i} d={d} />;\n});\n".trim()},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[2343,7754,3950,7823,8190,3710,2594,9774,2888,179],function(){return e(e.s=13827)}),_N_E=e.O()}]);