(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4200],{8697:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hierarchical-edge-bundling",function(){return n(5797)}])},1651:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893);n(7294);var a=n(9871),i=n(8843),s=n(4588);let l={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function o(e){let{chartFamily:t}=e,n=i.c.filter(e=>e.family===t).map((e,t)=>{let n=(0,s.y)(e.reactURL);return(0,r.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,r.jsx)(a.Z,{link:n,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==l?void 0:l[t]}),(0,r.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:n})]})}},1122:function(e,t,n){"use strict";n.d(t,{$:function(){return d}});var r=n(5893),a=n(7294),i=n(9973),s=n(8107),l=n(615),o=n(8578);let d=e=>{let{VizComponent:t,vizName:n,height:d=400,maxWidth:c=800,caption:h}=e,[u,m]=(0,a.useState)(!1),x=(0,a.useRef)(null),p=(0,i.B)(x);return(0,r.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,r.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,r.jsx)(o.X,{vizName:n})}),(0,r.jsx)("div",{className:"flex justify-center mt-2",children:(0,r.jsx)(s.z,{size:"sm",onClick:()=>m(!u),children:"Hide Sandbox"})})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,r.jsx)("div",{style:{height:d,width:"100%",maxWidth:c},ref:x,className:"pointer-events-auto",children:(0,r.jsx)(t,{height:d,width:p.width})})}),(0,r.jsx)(l.Y,{children:h}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(s.z,{size:"sm",onClick:()=>m(!u),children:"Show code"})})]})})}},8578:function(e,t,n){"use strict";n.d(t,{X:function(){return a}});var r=n(5893);n(7294);let a=e=>{let{vizName:t}=e;return(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},153:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var r=n(5893),a=n(9700),i=n(3476),s=n(7294),l=n(3084),o=n.n(l);function d(){let[e,t]=(0,s.useState)([]),[n,a]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,s.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),n=window.scrollY+150,r=t.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e,0),i=t.findIndex(e=>e===r);a(-1===i?0:i)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,r.jsx)("div",{className:o().tableOfContent,children:e.map((t,a)=>(0,r.jsx)("p",{className:n===a?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[a].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var c=n(7414),h=n(2594);let u=e=>{let{children:t,title:n,seoDescription:s}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{title:n,seoDescription:s}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(a.Z,{})}),(0,r.jsx)("div",{className:"wrapper",children:t}),(0,r.jsx)(h.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(d,{})]})}},6438:function(e,t,n){"use strict";n.d(t,{J:function(){return s}});var r=n(5893),a=n(1664),i=n.n(a);let s=e=>{let{children:t,href:n,isFilled:a,size:s="md",isFaded:l}=e,o=n.startsWith("www")||n.startsWith("http"),d="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";a?d+=" bg-reactGallery hover:bg-reactGallery text-white ":d+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===s&&(d+="text-sm py-1 px-2 "),"md"===s&&(d+="text-md py-2 px-4 "),l&&(d+="opacity-60");let c=(0,r.jsx)("span",{className:d,children:t});return o?(0,r.jsx)("a",{href:n,target:"_blank",children:c}):(0,r.jsx)(i(),{href:n,passHref:!0,children:c})}},9871:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893);n(7294);var a=n(5887),i=n(8843),s=n(1664),l=n.n(s);let o=i.c.filter(e=>"general"===e.family).map(e=>e.logo);function d(e){let{chartLogo:t,caption:n,link:i,isAvailable:s,size:d}=e,h=o.includes(t),u=s?"opacity-100":"opacity-20";return(0,r.jsx)(l(),{href:s?i:"subscribe",className:"no-underline",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsxs)("div",{style:{width:d,height:d},className:"relative mr-2 rounded-full "+u+" "+(s?"cursor-pointer":"cursor-not-allowed"),children:[(0,r.jsx)("div",{className:"absolute",children:(0,r.jsx)(a.Z,{chartLogo:t,size:d})}),h?(0,r.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,r.jsx)(c,{size:d})}):(0,r.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,r.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,r.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:n})]})})}let c=e=>{let{size:t}=e;return(0,r.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,r.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},9965:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893);n(7294);var a=n(8843),i=n(4588),s=n(1859),l=n(6438),o=n(1832),d=n.n(o);let c=e=>{let{direction:t,text:n,children:a}=e;return(0,r.jsx)("span",{className:d().tooltip+" "+d()[t],id:n,children:a})};var h=n(5887);function u(e){let{title:t,description:n,chartType:o,showSectionLink:d=!1,showInspirationLink:u=!0,showD3GalleryLink:m=!0}=e,x=a.c.find(e=>e.id===o);return(0,r.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,r.jsxs)("div",{className:"flex justify-start items-center",children:[(0,r.jsx)("h1",{children:t}),o&&x&&(0,r.jsx)("div",{className:"w-20 ml-4",children:(0,r.jsx)(h.Z,{chartLogo:null==x?void 0:x.logo})})]}),(0,r.jsx)(s.r,{}),(0,r.jsx)("div",{className:"max-w-xxl  py-2",children:n}),o&&(0,r.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),x&&(0,r.jsxs)("div",{className:"flex flex-row flex-wrap",children:[d&&(0,r.jsx)(c,{text:"visit related section in the gallery",direction:"bottom",children:(0,r.jsx)(l.J,{href:(0,i.y)(x.reactURL),size:"sm",children:x.label+" section"})}),u&&(0,r.jsx)(c,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,r.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+x.id,size:"sm",children:"inspiration"})}),m&&(0,r.jsx)(c,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,r.jsx)(l.J,{href:x.d3URL,size:"sm",children:"d3 gallery"})}),(0,r.jsx)(c,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,r.jsx)(l.J,{href:x.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})}},8107:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var r=n(5893);let a=e=>{let{children:t,onClick:n,isFilled:a,size:i="md"}=e,s="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===i&&(s+="text-sm py-1 px-2"),"md"===i&&(s+="text-md py-2 px-4"),a?s+=" bg-reactGallery hover:bg-reactGallery text-white":s+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,r.jsx)("button",{className:s,onClick:n,children:t})}},615:function(e,t,n){"use strict";n.d(t,{Y:function(){return a}});var r=n(5893);let a=e=>{let{children:t}=e;return(0,r.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return c}});var r=n(5893),a=n(6715),i=n(5660),s=n.n(i),l=n(7294),o=n(5993),d=n.n(o);let c=e=>{let{code:t}=e,[n,i]=(0,l.useState)(!1),o=(0,l.useRef)(null);(0,l.useEffect)(()=>{o.current&&s().highlightElement(o.current)},[o,t]);let c=(0,r.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),i(!0)},className:d().codeChunckCopyButton,children:n?"Copied":(0,r.jsx)(a.Z,{size:14,style:{padding:0}})});return(0,r.jsxs)("div",{className:"mb-6 relative",children:[(0,r.jsx)("pre",{className:"rounded-md line-numbers",children:(0,r.jsx)("code",{ref:o,className:"language-javascript",children:t})}),(0,r.jsx)("div",{className:d().copyButtonContainer,children:c})]})}},9973:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});var r=n(7294);let a=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,a]=(0,r.useState)(t),i=()=>{a(t())};return(0,r.useEffect)(()=>(window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)),[]),(0,r.useLayoutEffect)(()=>{i()},[e]),n}},5797:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),a=n(7294),i=n(153),s=n(9965),l=n(1651),o=n(3572),d=n(1122),c=n(3623),h=n(1664),u=n.n(h),m=n(6438);let x={type:"node",name:"boss",value:0,children:[{type:"node",name:"Team Dataviz",value:0,children:[{type:"leaf",name:"Mark",value:90,links:["Robert","Emily","Marion","Malki","Einstein"]},{type:"leaf",name:"Robert",value:12,links:["Robert","Emily","Marion","Malki","Einstein"]},{type:"leaf",name:"Emily",value:34,links:["Robert","Emily","Marion","Malki","Einstein"]},{type:"leaf",name:"Marion",value:53,links:["Robert","Emily","Marion","Malki","Einstein"]},{type:"leaf",name:"Edy",value:53,links:["Robert","Emily","Marion","Malki","Einstein"]},{type:"leaf",name:"Gab",value:53,links:["Robert","Emily","Marion","Malki","Einstein"]},{type:"leaf",name:"Yan",value:53,links:["Robert","Emily","Marion","Malki","Einstein"]}]},{type:"node",name:"Team DevOps",value:0,children:[{type:"leaf",name:"Nicolas",value:98,links:["Robert","Emily","Marion","Malki","Einstein"]},{type:"leaf",name:"Malki",value:22,links:["Robert","Emily","Marion","Malki","Einstein"]},{type:"leaf",name:"Dj\xe9",value:12,links:["Robert","Einstein"]},{type:"leaf",name:"Joe",value:12,links:["Robert","Einstein"]},{type:"leaf",name:"Karl",value:12,links:["Joe","Mam"]},{type:"leaf",name:"Mam",value:12,links:["Karl"]},{type:"leaf",name:"Toto",value:12,links:["Karl"]},{type:"leaf",name:"Tuck",value:12,links:["Yam"]},{type:"leaf",name:"Yam",value:12,links:["Toto","Karl"]}]},{type:"node",name:"Team Sales",value:0,children:[{type:"leaf",name:"M\xe9lanie",value:45,links:["Robert","Emily","Marion","Malki","Einstein"]},{type:"leaf",name:"Einstein",value:76,links:["Robert","Emily","Marion","Malki","Einstein"]}]}]};var p=n(8657);let f=e=>{let{width:t,height:n,data:i}=e,s=(0,a.useMemo)(()=>p.bT9(i).sum(e=>e.value),[i]),l=Math.min(t,n)/2-80,o=(0,a.useMemo)(()=>{let e=p.ki8().size([360,l]).separation((e,t)=>e.parent==t.parent?1:6);return e(s)},[s,t,n]),d=o.descendants().filter(e=>"leaf"===e.data.type).map(e=>{let t=e.x>180;return(0,r.jsxs)("g",{transform:"rotate("+(e.x-90)+")translate("+e.y+")",children:[(0,r.jsx)("circle",{cx:0,cy:0,r:5,stroke:"transparent",fill:"#69b3a2"}),!e.children&&(0,r.jsx)("text",{x:t?-15:15,y:0,fontSize:12,textAnchor:t?"end":"start",transform:t?"rotate(180)":"rotate(0)",alignmentBaseline:"middle",children:e.data.name})]},e.id)}),c=p.XBu().radius(e=>e.y).angle(e=>e.x/180*Math.PI).curve(p.tFB.beta(.95)),h={};o.descendants().map(e=>{h[e.data.name]=e});let u=o.descendants().filter(e=>"leaf"===e.data.type&&e.data.links.length>0).map((e,t)=>e.data.links.map(n=>{let a=e.path(h[n]),i=a.map(e=>({x:e.x,y:e.y}));return(0,r.jsx)("path",{fill:"none",stroke:"grey",d:c(i)},t)}));return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:n,children:(0,r.jsxs)("g",{transform:"translate("+(l+80)+","+(l+80)+")",children:[u,d]})})})},j=e=>{let{width:t=700,height:n=400}=e;return(0,r.jsx)(f,{data:x,width:t,height:n})},y=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["A"," ",(0,r.jsx)("a",{href:"https://www.data-to-viz.com/graph/edge_bundling.html",children:"hierarchical edge bundling"})," ","chart allows to visualize ",(0,r.jsx)("b",{children:"relationships"})," between entities organized in a ",(0,r.jsx)("b",{children:"hierarchy"}),". The idea is to ",(0,r.jsx)("b",{children:"bundle"})," the adjacency edges together to decrease the clutter usually observed in complex networks."]}),(0,r.jsxs)("p",{children:["This page explains how to build a hierarchical edge bundling chart using"," ",(0,r.jsx)("b",{children:"d3.js"})," to compute the node position, and ",(0,r.jsx)("b",{children:"React"})," to render the nodes and edges. It starts by describing the required ",(0,r.jsx)("b",{children:"data"})," format, explains how to build a very ",(0,r.jsx)("b",{children:"basic"})," hierarchical edge bundling and then shows how to ",(0,r.jsx)("b",{children:"customize"})," it."]})]});function v(){return(0,r.jsxs)(i.A,{title:"Hierarchical Edge Bundling | React Graph Gallery",seoDescription:"How to build a hierarchical edge bundling chart with React and D3.js. A set of re-usable components with explanation and code.",children:[(0,r.jsx)(s.Z,{title:"Hierarchical edge bundling",description:y,chartType:"edgeBundling"}),(0,r.jsx)("h2",{id:"data",children:"The Data"})," ",(0,r.jsxs)("p",{children:["The dataset describes a ",(0,r.jsx)("b",{children:"hierarchy"})," using a ",(0,r.jsx)("b",{children:"recursive"})," ","structure."]}),(0,r.jsxs)("p",{children:["Each item in this structure is called a ",(0,r.jsx)("b",{children:"node"}),". The lowest nodes of the hierarchy being called ",(0,r.jsx)("b",{children:"leaves"}),"."," "]}),(0,r.jsxs)("p",{children:["The dataset is an object that has at least 3 properties:"," ",(0,r.jsx)("code",{children:"name"}),", ",(0,r.jsx)("code",{children:"value"})," and ",(0,r.jsx)("code",{children:"children"}),"."," ",(0,r.jsx)("code",{children:"children"})," is an array of nodes that have this structure too."]}),(0,r.jsxs)("p",{children:["This kind of data is very close to what's required for a"," ",(0,r.jsx)(u(),{href:"/dendrogram",children:"dendrogram"}),". But an additional property is added for the leaves: ",(0,r.jsx)("code",{children:"links"}),". It provides a list of all the other leaves this leaf is connected with."]}),(0,r.jsx)("p",{children:"Here is a minimal example of the data structure:"}),(0,r.jsx)(o.d,{code:g}),(0,r.jsxs)("p",{children:[(0,r.jsx)("u",{children:"Note"}),": if your data is not formatted this way at all, don't fret! I provide explanation on how to reach this format from other common formats ",(0,r.jsx)(u(),{href:"/dendrogram#hierarchy",children:"here"}),"."]}),(0,r.jsx)("h2",{id:"hierarchy",children:'The hierarchy format or "root node"'}),(0,r.jsxs)("p",{children:["A hierarchical edge bundling chart is a ",(0,r.jsx)("b",{children:"hierarchical layout"}),"."]}),(0,r.jsxs)("p",{children:["D3.js has a lot of"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-hierarchy",children:"utility functions"})," ","allowing to deal with this kind of hierarchical data. To use those functions we first need to create a ",(0,r.jsx)("b",{children:'"Root node"'})," or"," ",(0,r.jsx)("b",{children:'"Hierarchy"'}),"."]}),(0,r.jsxs)("p",{children:["This is possible thanks to the ",(0,r.jsx)("code",{children:"hierarchy"})," function of d3, and I extensively described the process in the"," ",(0,r.jsx)(u(),{href:"/dendrogram",children:"dendrogram section"})," of this gallery."]}),(0,r.jsx)(o.d,{code:b}),(0,r.jsx)("p",{children:"Once this is done, we have a js object that will be very convenient to manipulate to create our chart."}),(0,r.jsx)(m.J,{isFilled:!0,size:"sm",href:"/dendrogram#hierarchy",children:"More explanation"}),(0,r.jsxs)("h2",{id:"cluster",children:["The ",(0,r.jsx)("code",{children:"cluster()"})," function"]}),(0,r.jsxs)("p",{children:["We now have a ",(0,r.jsx)("code",{children:"hierarchy"})," object that is a convenient data structure. From this, we need to compute the position of each node in our ",(0,r.jsx)("b",{children:"2d space"}),"."]}),(0,r.jsxs)("p",{children:["This is made possible thanks to the ",(0,r.jsx)("code",{children:"cluster()"})," function of d3.js. You can check its"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-hierarchy#cluster",children:"offical documentation"}),"."]}),(0,r.jsxs)("p",{children:["The work done here is exactly the same as for a ",(0,r.jsx)("b",{children:"radial dendrogram"}),", so I suggest to follow the ",(0,r.jsx)(u(),{href:"/dendrogram",children:"dendrogram"})," ","page for more in-depth explanation."]}),(0,r.jsx)(o.d,{code:w}),(0,r.jsxs)("p",{children:["The output is almost the same as the initial ",(0,r.jsx)("b",{children:"hierarchy"})," object. But for each node we have 2 additional properties: ",(0,r.jsx)("code",{children:"x"})," and"," ",(0,r.jsx)("code",{children:"y"})," that are the coordinates we need to build the dendrogram!"]}),(0,r.jsx)("h2",{id:"Radial dendrogram",children:"Radial dendrogram"}),(0,r.jsxs)("p",{children:["Once more, it is crucial to understand that a hierarchical edge bundling starts with the layout of a ",(0,r.jsx)("b",{children:"radial dendrogram"}),"."]}),(0,r.jsx)("p",{children:"To understand how to deal with polar coordinates and how to draw clean circular labels, please visit the dendrogram and the circular barplot sections. \uD83D\uDC47"}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(m.J,{href:"/circular-barplot",size:"sm",children:"Circular barplot"})," ",(0,r.jsx)(m.J,{href:"/dendrogram",isFilled:!0,size:"sm",children:"Dendrogram"})]}),(0,r.jsx)("p",{children:(0,r.jsx)("br",{})}),(0,r.jsx)("p",{children:"If you are in your confort zone here, you can also just read the code directly"}),(0,r.jsx)(d.$,{vizName:"DendrogramRadial",VizComponent:c.X,maxWidth:600,height:600,caption:"A minimalist radial dendrogram built using d3 and react."}),(0,r.jsx)("h2",{id:"Links",children:"Hierarchical edge bundling"}),(0,r.jsxs)("p",{children:["The last but trickiest part of our graph creation is to draw the"," ",(0,r.jsx)("b",{children:"links"})," between leaves."]}),(0,r.jsxs)("h3",{children:["→ Drawing curves with ",(0,r.jsx)("code",{children:"d3.curveBundle"})]}),(0,r.jsxs)("p",{children:["We need a specific way to draw connections using curves. It can be done as follow. ",(0,r.jsx)("code",{children:"BUNDLE_COEFF"})," is a value between 0 and 1, 0 beeing a straight line and 1 being more influenced by dots on the path."]}),(0,r.jsx)(o.d,{code:k}),(0,r.jsx)("h3",{children:"→ Find the path from leaf to leaf"}),(0,r.jsxs)("p",{children:["We want to draw a connection between a leaf to another, passing through all the common ancestors. It is possible to find the list of nodes to traverse thanks to the ",(0,r.jsx)("code",{children:"path()"})," method attached to a node!"]}),(0,r.jsx)("p",{children:"Here is the whole pipeline with comments:"}),(0,r.jsx)(o.d,{code:N}),(0,r.jsx)("p",{children:"Resulting in our first hierarchical edge bundling example \uD83C\uDF89"}),(0,r.jsx)(d.$,{vizName:"HierarchicalEdgeBundlingBasic",VizComponent:j,maxWidth:600,height:600,caption:"A first hierarchical edge bundling chart made with d3 and react."}),(0,r.jsx)("h2",{id:"next",children:"Coming soon"}),(0,r.jsxs)("p",{children:["Using ",(0,r.jsx)("code",{children:"canvas"})," for rendering is often a requirement when the number of nodes gets big. ",(0,r.jsx)("b",{children:"Interactivity"})," is often necessary, for"," ",(0,r.jsx)("b",{children:"hover effect"})," or to ",(0,r.jsx)("b",{children:"collapse"})," a part of the tree. It also possible to ",(0,r.jsx)("b",{children:"map"})," the node circle size to a numeric variable."]}),(0,r.jsxs)("p",{children:["This will come soon! I have a newsletter called the"," ",(0,r.jsx)(u(),{href:"/subscribe",children:"dataviz universe"})," where I share my latest updates."]}),(0,r.jsx)(m.J,{href:"/subscribe",children:"Subscribe"}),(0,r.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3 mt-20"}),(0,r.jsx)(l.Z,{chartFamily:"flow"}),(0,r.jsx)("div",{className:"mt-20"})]})}let g="\nconst data = {\n  type: 'node',\n  name: \"boss\",\n  value: 2300,\n  children: [\n    {type: 'leaf', name:\"Mark\", value: 90, links: ['Robert', 'Emily']},\n    {type: 'leaf', name:\"Robert\", value: 12, links: ['Emily']},\n    {type: 'leaf', name:\"Emily\", value: 34, links: []},\n    ...\n}\n".trim(),b="\nconst hierarchy = useMemo(() => {\n  return d3.hierarchy(data);\n}, [data]);\n".trim(),w="\nconst dendrogramGenerator = d3\n      .cluster<Tree>()\n      .size([360, radius])\n\nconst dendrogram = dendrogramGenerator(hierarchy);\n".trim(),k="\nconst linksGenerator = d3\n  .lineRadial()\n  .radius((d) => d.y)\n  .angle((d) => (d.x / 180) * Math.PI)\n  .curve(d3.curveBundle.beta(BUNDLE_COEFF));\n".trim(),N='\n// Compute a map from name to node.\nlet nameToNodeMap = {};\ndendrogram.descendants().map((node) => {\n  nameToNodeMap[node.data.name] = node;\n});\n\n// Draw connections\nconst allEdges = dendrogram\n  .descendants() // find all nodes of the tree\n  .filter((node) => node.data.type === "leaf" && node.data.links.length > 0) // keep only leaves that have links\n  .map((sourceNode, i) => {\n    return sourceNode.data.links.map((targetNodeName: string) => { // Loop through all the links we need to draw\n      const traversedNodes = sourceNode.path(nameToNodeMap[targetNodeName]); // The path function provides a list of all the nodes we need to traverse from source to target!\n\n      const traversedCoords = traversedNodes.map((node) => { // Find the coordinates of all nodes on the way\n        return { x: node.x, y: node.y };\n      });\n\n      return (\n        <path\n          key={i}\n          fill="none"\n          stroke="grey"\n          d={linksGenerator(traversedCoords)} // transform the list of coordinates to an SVG path\n        />\n      );\n    });\n  });\n'.trim()},3623:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var r=n(5893);let a={type:"node",name:"boss",value:0,children:[{type:"node",name:"Team Dataviz",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53}]},{type:"node",name:"Team DevOps",value:0,children:[{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12}]},{type:"node",name:"Team Sales",value:0,children:[{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]}]};var i=n(7294),s=n(8657);let l=e=>2*e*Math.PI/360,o=e=>{let{width:t,height:n,data:a}=e,o=(0,i.useMemo)(()=>s.bT9(a).sum(e=>e.value),[a]),d=Math.min(t,n)/2-70,c=(0,i.useMemo)(()=>{let e=s.ki8().size([360,d]);return e(o)},[o,t,n]),h=c.descendants().map(e=>{let t=e.x>180;return(0,r.jsxs)("g",{transform:"rotate("+(e.x-90)+")translate("+e.y+")",children:[(0,r.jsx)("circle",{cx:0,cy:0,r:5,stroke:"transparent",fill:"#69b3a2"}),!e.children&&(0,r.jsx)("text",{x:t?-15:15,y:0,fontSize:12,textAnchor:t?"end":"start",transform:t?"rotate(180)":"rotate(0)",alignmentBaseline:"middle",children:e.data.name})]},e.id)}),u=s.M4Z().angle(e=>l(e.x)).radius(e=>e.y),m=c.links().map(e=>0===e.source.depth?(0,r.jsxs)("g",{transform:"rotate("+(e.target.x-90)+")",children:[(0,r.jsx)("line",{x1:0,y1:0,x2:e.target.y,y2:0,stroke:"grey"}),";"]},e.source+"_"+e.target):(0,r.jsx)("path",{fill:"none",stroke:"grey",d:u(e)||void 0},e.source+"_"+e.target));return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:n,children:(0,r.jsxs)("g",{transform:"translate("+(d+35)+","+(d+35)+")",children:[m,h]})})})},d=e=>{let{width:t=700,height:n=400}=e;return(0,r.jsx)(o,{data:a,width:t,height:n})}},5993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},1832:function(e){e.exports={tooltip:"tooltip_tooltip__b_kg5",right:"tooltip_right__zvLDU",left:"tooltip_left__mQ0Xf",bottom:"tooltip_bottom__MVFNa",top:"tooltip_top__kPfp4"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[3996,8657,3213,645,9774,2888,179],function(){return e(e.s=8697)}),_N_E=e.O()}]);