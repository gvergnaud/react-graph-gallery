(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3212],{8990:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/treemap",function(){return a(64519)}])},61651:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(85893);a(67294);var r=a(49871),i=a(28843),s=a(77522);let l={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function o(e){let{chartFamily:t}=e,a=i.c.filter(e=>e.family===t).map((e,t)=>{let a=(0,s.y)(e.reactURL);return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,n.jsx)(r.Z,{link:a,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:122})},t)});return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==l?void 0:l[t]}),(0,n.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:a})]})}},81122:function(e,t,a){"use strict";a.d(t,{$:function(){return c}});var n=a(85893),r=a(67294),i=a(59973),s=a(80615),l=a(88578),o=a(5);let c=e=>{let{VizComponent:t,vizName:a,height:c=400,maxWidth:h=800,caption:d}=e,[u,m]=(0,r.useState)(!1),p=(0,r.useRef)(null),x=(0,i.B)(p);return(0,n.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,n.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,n.jsx)(l.X,{vizName:a})}),(0,n.jsx)("div",{className:"flex justify-center mt-2",children:(0,n.jsx)(o.z,{size:"sm",onClick:()=>m(!u),children:"Hide Sandbox"})})]}):(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,n.jsx)("div",{style:{height:c,width:"100%",maxWidth:h},ref:p,className:"pointer-events-auto",children:(0,n.jsx)(t,{height:c,width:x.width})})}),(0,n.jsx)(s.Y,{children:d}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(o.z,{size:"sm",onClick:()=>m(!u),children:"Show code"})})]})})}},88578:function(e,t,a){"use strict";a.d(t,{X:function(){return r}});var n=a(85893);a(67294);let r=e=>{let{vizName:t}=e;return(0,n.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},80153:function(e,t,a){"use strict";a.d(t,{A:function(){return u}});var n=a(85893),r=a(49700),i=a(63476),s=a(67294),l=a(63084),o=a.n(l);function c(){let[e,t]=(0,s.useState)([]),[a,r]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,s.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),a=window.scrollY+150,n=t.reduce((e,t)=>Math.abs(t-a)<Math.abs(e-a)?t:e,0),i=t.findIndex(e=>e===n);r(-1===i?0:i)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,n.jsx)("div",{className:o().tableOfContent,children:e.map((t,r)=>(0,n.jsx)("p",{className:a===r?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[r].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var h=a(17414),d=a(62594);let u=e=>{let{children:t,title:a,seoDescription:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.A,{title:a,seoDescription:s}),(0,n.jsx)(r.Z,{}),(0,n.jsx)("div",{className:"wrapper",children:t}),(0,n.jsx)(d.Z,{}),(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(i.Z,{})}),(0,n.jsx)(c,{})]})}},49871:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(85893);a(67294);var r=a(95887),i=a(28843),s=a(41664),l=a.n(s);let o=i.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:a,link:i,isAvailable:s,size:c}=e,d=o.includes(t),u=s?"opacity-100":"opacity-20";return(0,n.jsx)(l(),{href:s?i:"subscribe",className:"no-underline",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(s?"cursor-pointer":"cursor-not-allowed"),children:[(0,n.jsx)("div",{className:"absolute",children:(0,n.jsx)(r.Z,{chartLogo:t,size:c})}),d?(0,n.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,n.jsx)(h,{size:c})}):(0,n.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,n.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,n.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:a})]})})}let h=e=>{let{size:t}=e;return(0,n.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,n.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},80615:function(e,t,a){"use strict";a.d(t,{Y:function(){return r}});var n=a(85893);let r=e=>{let{children:t}=e;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,a){"use strict";a.d(t,{d:function(){return h}});var n=a(85893),r=a(32581),i=a(15660),s=a.n(i),l=a(67294),o=a(45993),c=a.n(o);let h=e=>{let{code:t}=e,[a,i]=(0,l.useState)(!1),o=(0,l.useRef)(null);(0,l.useEffect)(()=>{o.current&&s().highlightElement(o.current)},[o,t]);let h=(0,n.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),i(!0)},className:c().codeChunckCopyButton,children:a?"Copied":(0,n.jsx)(r.Z,{size:14,style:{padding:0}})});return(0,n.jsxs)("div",{className:"mb-6 relative",children:[(0,n.jsx)("pre",{className:"rounded-md line-numbers",children:(0,n.jsx)("code",{ref:o,className:"language-javascript",children:t})}),(0,n.jsx)("div",{className:c().copyButtonContainer,children:h})]})}},59973:function(e,t,a){"use strict";a.d(t,{B:function(){return r}});var n=a(67294);let r=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[a,r]=(0,n.useState)(t),i=()=>{r(t())};return(0,n.useEffect)(()=>(window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)),[]),(0,n.useEffect)(()=>{i()},[e]),a}},64519:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var n=a(85893),r=a(67294),i=a(80153),s=a(43710),l=a(61651),o=a(3572),c=a(81122);let h={type:"node",name:"boss",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53},{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12},{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]};var d=a(88657);let u=e=>{let{width:t,height:a,data:i}=e,s=(0,r.useMemo)(()=>d.bT9(i).sum(e=>e.value),[i]),l=(0,r.useMemo)(()=>{let e=d.pNI().size([t,a]).padding(4);return e(s)},[s,t,a]),o=l.leaves().map(e=>(0,n.jsxs)("g",{children:[(0,n.jsx)("rect",{x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,stroke:"transparent",fill:"#69b3a2",className:"opacity-80 hover:opacity-100"}),(0,n.jsx)("text",{x:e.x0+3,y:e.y0+3,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-bold",children:e.data.name}),(0,n.jsx)("text",{x:e.x0+3,y:e.y0+18,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-light",children:e.data.value})]},e.id));return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:t,height:a,children:o})})},m=e=>{let{width:t=700,height:a=400}=e;return(0,n.jsx)(u,{data:h,width:t,height:a})};var p=a(98332),x=a(60390),f=a(41664),j=a.n(f),v=a(56438);let y=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["A ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/graph/treemap.html",children:"treemap"})," ","displays a hierarchical dataset (a ",(0,n.jsx)("i",{children:"tree"}),") as a set of"," ",(0,n.jsx)("b",{children:"rectangles"}),". Rectangle sizes are proportional to their numeric value."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("code",{children:"d3.js"})," has some handy functions to compute the rectangle positions. ",(0,n.jsx)("code",{children:"React"})," becomes useful to render those rectangles, animate transitions and more. This post explains how to make those 2 tools work together to build a ",(0,n.jsx)("code",{children:"Treemap"})," component."]})]});function g(){return(0,n.jsxs)(i.A,{title:"Treemap with React",seoDescription:"How to build a treemap with React and D3.js. A set of re-usable components",children:[(0,n.jsx)(s.Z,{title:"Treemap",description:y,chartType:"treemap"}),(0,n.jsx)("h2",{id:"data",children:"The Data"})," ",(0,n.jsxs)("p",{children:["The dataset describes a ",(0,n.jsx)("b",{children:"hierarchy"})," using a ",(0,n.jsx)("b",{children:"recursive"})," ","structure. Each item in this structure is called a ",(0,n.jsx)("b",{children:"node"}),", the lowest nodes of the hierarchy being called ",(0,n.jsx)("b",{children:"leaves"}),"."]}),(0,n.jsxs)("p",{children:["The dataset is an ",(0,n.jsx)("b",{children:"object"})," that has at least 3 properties:"," ",(0,n.jsx)("code",{children:"name"}),", ",(0,n.jsx)("code",{children:"value"})," and ",(0,n.jsx)("code",{children:"children"}),".",(0,n.jsx)("code",{children:"children"})," is an array of nodes that have this structure too."]}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:"Here is a minimal example of the data structure:"}),(0,n.jsx)(o.d,{code:b}),(0,n.jsxs)("p",{children:["It's very likely that your dataset is not formatted as above ",(0,n.jsx)("b",{children:"yet"}),". But don't fret, the next section will teach you how to ",(0,n.jsx)("b",{children:"convert"})," ","it. ⬇️"]})," ",(0,n.jsx)("div",{className:"bg-gray-50 full-bleed mt-12",children:(0,n.jsxs)("div",{className:"wrapper pb-20",children:[(0,n.jsx)("h2",{id:"reformat data",children:"Data wrangling"})," ",(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Three main input data formats"})," are usually encountered when it comes to store hierarchical information. It's always a struggle to deal with those various formats:"]}),(0,n.jsx)("p",{children:"→ list of connection (csv)"}),(0,n.jsx)("p",{children:"→ list of connection (js object)"}),(0,n.jsx)("p",{children:"→ json with hierarchy"}),(0,n.jsxs)("p",{children:["I described in depth how to deal with those format in the"," ",(0,n.jsx)(j(),{href:"/dendrogram",children:"dendrogram section"})," of the gallery that shares the same kind of input format. Please take a look there!"]}),(0,n.jsx)(v.J,{isFilled:!0,size:"sm",href:"/dendrogram#hierarchy",children:"Read more"})]})}),(0,n.jsx)("h2",{id:"hierarchy()",children:'The hierarchy format or "root node"'}),(0,n.jsxs)("p",{children:["A treemap is a ",(0,n.jsx)("b",{children:"hierarchical layout"}),". D3.js has a lot of"," ",(0,n.jsx)("a",{href:"https://github.com/d3/d3-hierarchy",children:"utility functions"})," ","allowing to deal with this kind of hierarchical data. To use those functions we first need to create a ",(0,n.jsx)("b",{children:'"Root node"'})," or"," ",(0,n.jsx)("b",{children:'"Hierarchy"'}),"."]}),(0,n.jsxs)("p",{children:["But ",(0,n.jsx)("i",{children:"what the heck is this"}),"? \uD83E\uDD14"]}),(0,n.jsxs)("p",{children:['A "root node" or "hierarchy" is a ',(0,n.jsx)("b",{children:"javascript object"}),". It has almost the same shape as the input data described above. But with some additional properties and methods that will make our life easier."]}),(0,n.jsx)("h3",{children:"→ how to build a root node"}),(0,n.jsxs)("p",{children:["If your dealing with the format describe in the previous section, you just have to pass it to the d3 ",(0,n.jsx)("code",{children:"hierarchy"})," function:"]}),(0,n.jsx)(o.d,{code:w}),(0,n.jsxs)("p",{children:["Note that this concept of ",(0,n.jsx)("b",{children:"root node"})," is ",(0,n.jsx)("b",{children:"key"})," for all the charts representing a hierarchy like"," ",(0,n.jsx)(j(),{href:"/dendrogram",children:"dendrograms"}),","," ",(0,n.jsx)(j(),{href:"/circular-packing",children:"circle packing"}),","," ",(0,n.jsx)(j(),{href:"/network-chart",children:"networks"})," and more. Please check the dendrogram page where I explain it in detail."]}),(0,n.jsx)(v.J,{isFilled:!0,size:"sm",href:"/dendrogram#hierarchy",children:"Read more"}),(0,n.jsxs)("h2",{id:"treemap()",children:["Compute rectangle positions with ",(0,n.jsx)("code",{children:"d3.treemap()"})]}),(0,n.jsxs)("p",{children:["From the ",(0,n.jsx)("code",{children:"hierarchy"})," object computed above we need to compute the position of every rectangles of the treemap."]}),(0,n.jsxs)("p",{children:["This is possible thanks to the ",(0,n.jsx)("code",{children:"treemap()"})," function of d3.js that can be invoked like this:"]}),(0,n.jsx)(o.d,{code:N}),(0,n.jsxs)("p",{children:["The result is an object that has almost the same shape as the initial"," ",(0,n.jsx)("code",{children:"hierarchy"})," object. But for each node, an additional"," ",(0,n.jsx)("code",{children:"x0"}),", ",(0,n.jsx)("code",{children:"x1"}),", ",(0,n.jsx)("code",{children:"y0"})," and ",(0,n.jsx)("code",{children:"y1"})," ","are available. Those are the coordinates of the rectangle in our SVG space! \uD83D\uDD25"]}),(0,n.jsx)("h2",{id:"1 level",children:"Treemap with 1️⃣ level of hierarchy"}),(0,n.jsxs)("p",{children:["With the coordinates of each rectangle being available, it is just a matter of ",(0,n.jsx)("b",{children:"looping"})," through all of them and drawing them using SVG."]}),(0,n.jsxs)("p",{children:["The ",(0,n.jsx)("code",{children:"leaves()"})," method is usefull to list all leaves, allowing to make the loop easily:"]}),(0,n.jsx)(o.d,{code:k}),(0,n.jsx)("p",{children:"This results in a first basic treemap \uD83D\uDE0B"}),(0,n.jsx)(c.$,{vizName:"TreemapBasic",VizComponent:m,maxWidth:600,height:400,caption:"The most basic treemap with 1 level of hierarchy made with react and d3.js."}),(0,n.jsx)("h2",{id:"2 levels",children:"Treemap with 2️⃣ levels of hierarchy"}),(0,n.jsxs)("p",{children:["Treemaps are also handy to display ",(0,n.jsx)("b",{children:"nested data structure"}),". For instance, let's consider a company with a CEO, several teams, and a few employees per team. This result in a structure with"," ",(0,n.jsx)("b",{children:"several levels"})," of hierarchy."]}),(0,n.jsxs)("p",{children:["Pretty much the same strategy is used to draw the treemap. But note that each leaf has a ",(0,n.jsx)("code",{children:"parent"})," property that is very handy to use a"," ",(0,n.jsx)("b",{children:"categorical color scale"})," to the graph."]}),(0,n.jsx)(o.d,{code:T}),(0,n.jsx)(c.$,{vizName:"Treemap2Levels",VizComponent:p.e,maxWidth:600,height:400,caption:"Treemap with 2 levels of hierarchy and a color scale, made with react and d3.js."}),(0,n.jsx)("h2",{id:"hover effect",children:"Hover effect"}),(0,n.jsxs)("p",{children:["Adding a ",(0,n.jsx)("b",{children:"hover effect"})," to your treemap is a nice polish detail. Here I suggest to highlight the slice that is hovered over by"," ",(0,n.jsx)("b",{children:"dimming"})," all the other slices."]}),(0,n.jsxs)("p",{children:["There are several strategies available to implement such an effect. One can rely on css ",(0,n.jsx)("b",{children:"pseudo classes"})," only, or ",(0,n.jsx)("b",{children:"add a css class"})," ","using javascript and the ",(0,n.jsx)("code",{children:"onMouseEnter"})," event. It's also possible to rely on an ",(0,n.jsx)("b",{children:"animation library"})," like"," ",(0,n.jsx)("code",{children:"react-spring"}),"."]}),(0,n.jsxs)("p",{children:["I'm preparing a full section on the topic. You can subscribe to my"," ",(0,n.jsx)(j(),{href:"/subscribe",children:"dataviz-universe newsletter"})," to know when it will be ready. Meanwhile, there is a code sandbox waiting for you below to reveal the code of this example."]}),(0,n.jsx)(v.J,{isFilled:!0,size:"sm",href:"/subscribe",children:"Subscribe"}),(0,n.jsx)(c.$,{vizName:"TreemapHoverEffect",VizComponent:x.C,maxWidth:600,height:400,caption:"Hover over a group on the treemap to see the other groups fading."}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,n.jsx)(l.Z,{chartFamily:"partOfAWhole"}),(0,n.jsx)("div",{className:"mt-20"})]})}let b="\nconst data = {\n  type: 'node',\n  name: \"boss\",\n  value: 2300,\n  children: [\n    {type: 'leaf', name:\"Mark\", value: 90},\n    {type: 'leaf', name:\"Robert\", value: 12},\n    {type: 'leaf', name:\"Emily\", value: 34},\n    ...\n}\n".trim(),w="\nconst hierarchy =  d3.hierarchy(data)\n".trim(),N="\nconst treeGenerator = d3.treemap()\n  .size([width, height])\n  .padding(4); // space between rectangles\n\n// Use the generator on the hierarchy object built in previous section\nconst treeLayout =  treeGenerator(hierarchy);\n".trim(),k="\nconst rects = treeLayout.leaves().map((leaf) => {\n  return (\n    <g key={leaf.id}>\n      <rect\n        x={leaf.x0}\n        y={leaf.y0}\n        width={leaf.x1 - leaf.x0}\n        height={leaf.y1 - leaf.y0}\n      />\n    </g>\n  )\n}\n".trim(),T="\n// Create a color scale\nconst firstLevelGroups = hierarchy?.children?.map((child) => child.data.name);\nvar colorScale = d3\n  .scaleOrdinal()\n  .domain(firstLevelGroups)\n  .range(['red', 'green', 'blue', ...]);\n\n// Then In the loop through each leaves:\ntreeLayout.leaves().map((leaf) => {\n  const parentName = leaf.parent?.data.name;\n  const color = colorScale(parentName)\n\n  // ... render rect using this color\n}\n".trim()},98332:function(e,t,a){"use strict";a.d(t,{e:function(){return c}});var n=a(85893);let r={type:"node",name:"boss",value:0,children:[{type:"node",name:"Team Dataviz",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53}]},{type:"node",name:"Team DevOps",value:0,children:[{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12}]},{type:"node",name:"Team Sales",value:0,children:[{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]}]};var i=a(67294),s=a(88657);let l=["#e0ac2b","#6689c6","#a4c969","#e85252","#9a6fb0","#a53253","#7f7f7f"],o=e=>{let{width:t,height:a,data:r}=e,o=(0,i.useMemo)(()=>s.bT9(r).sum(e=>e.value),[r]),c=null==o?void 0:null===(h=o.children)||void 0===h?void 0:h.map(e=>e.data.name);var h,d=s.PKp().domain(c||[]).range(l);let u=(0,i.useMemo)(()=>{let e=s.pNI().size([t,a]).padding(4);return e(o)},[o,t,a]),m=u.leaves().map((e,t)=>{var a;let r=null===(a=e.parent)||void 0===a?void 0:a.data.name;return(0,n.jsxs)("g",{children:[(0,n.jsx)("rect",{x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,stroke:"transparent",fill:d(r),className:"opacity-80 hover:opacity-100"}),(0,n.jsx)("text",{x:e.x0+3,y:e.y0+3,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-bold",children:e.data.name}),(0,n.jsx)("text",{x:e.x0+3,y:e.y0+18,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-light",children:e.data.value})]},e.id)});return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:t,height:a,children:m})})},c=e=>{let{width:t=700,height:a=400}=e;return(0,n.jsx)(o,{data:r,width:t,height:a})}},60390:function(e,t,a){"use strict";a.d(t,{C:function(){return d}});var n=a(85893);let r={type:"node",name:"boss",value:0,children:[{type:"node",name:"Team Dataviz",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53}]},{type:"node",name:"Team DevOps",value:0,children:[{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12}]},{type:"node",name:"Team Sales",value:0,children:[{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]}]};var i=a(67294),s=a(88657),l=a(87552),o=a.n(l);let c=["#e0ac2b","#6689c6","#a4c969","#e85252","#9a6fb0","#a53253","#7f7f7f"],h=e=>{let{width:t,height:a,data:r}=e,l=(0,i.useMemo)(()=>s.bT9(r).sum(e=>e.value),[r]),h=null==l?void 0:null===(d=l.children)||void 0===d?void 0:d.map(e=>e.data.name);var d,u=s.PKp().domain(h||[]).range(c);let m=(0,i.useMemo)(()=>{let e=s.pNI().size([t,a]).padding(4);return e(l)},[l,t,a]),p=m.leaves().map((e,t)=>{var a;let r=null===(a=e.parent)||void 0===a?void 0:a.data.name;return(0,n.jsxs)("g",{className:o().rectangle,children:[(0,n.jsx)("rect",{x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,stroke:"transparent",fill:u(r),className:"opacity-80 hover:opacity-100"}),(0,n.jsx)("text",{x:e.x0+3,y:e.y0+3,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-bold",children:e.data.name}),(0,n.jsx)("text",{x:e.x0+3,y:e.y0+18,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-light",children:e.data.value})]},e.id)});return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:t,height:a,className:o().container,children:p})})},d=e=>{let{width:t=700,height:a=400}=e;return(0,n.jsx)(h,{data:r,width:t,height:a})}},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}},87552:function(e){e.exports={container:"treemap_container__nYrjn",rectangle:"treemap_rectangle__xOWar"}}},function(e){e.O(0,[2343,7754,8657,7823,8190,3710,2594,9774,2888,179],function(){return e(e.s=8990)}),_N_E=e.O()}]);