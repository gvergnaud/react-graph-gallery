(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[579],{3058:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/barplot-stacked-horizontal",function(){return i(9615)}])},7262:function(t,e,i){"use strict";i.d(e,{Z:function(){return u}});var a=i(5893);i(7294);var r=i(5887),o=i(8843),n=i(1664),l=i.n(n);let s=o.c.filter(t=>"general"===t.family).map(t=>t.logo);function c(t){let{chartLogo:e,caption:i,link:o,isAvailable:n,size:c}=t,p=s.includes(e),h=n?"opacity-100":"opacity-20";return(0,a.jsx)(l(),{href:n?o:"subscribe",className:"no-underline",children:(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+h+" "+(n?"cursor-pointer":"cursor-not-allowed"),children:[(0,a.jsx)("div",{className:"absolute",children:(0,a.jsx)(r.Z,{chartLogo:e,size:c})}),p?(0,a.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,a.jsx)(d,{size:c})}):(0,a.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,a.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,a.jsx)("p",{className:"font-light text-sm text-gray-600 "+h,children:i})]})})}let d=t=>{let{size:e}=t;return(0,a.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,a.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})};var p=i(4588);let h={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function u(t){let{chartFamily:e}=t,i=o.c.filter(t=>t.family===e).map((t,e)=>{let i=(0,p.y)(t.reactURL);return(0,a.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,a.jsx)(c,{link:i,chartLogo:t.logo,caption:t.label,isAvailable:t.isAvailable,size:129})},e)});return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:e+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==h?void 0:h[e]}),(0,a.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:i})]})}},1122:function(t,e,i){"use strict";i.d(e,{$:function(){return c}});var a=i(5893),r=i(7294),o=i(9973),n=i(8107),l=i(615),s=i(8578);let c=t=>{let{VizComponent:e,vizName:i,height:c=400,maxWidth:d=800,caption:p}=t,[h,u]=(0,r.useState)(!1),g=(0,r.useRef)(null),m=(0,o.B)(g);return(0,a.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:h?(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,a.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,a.jsx)(s.X,{vizName:i})}),(0,a.jsx)("div",{className:"flex justify-center mt-2",children:(0,a.jsx)(n.z,{size:"sm",onClick:()=>u(!h),children:"Hide Sandbox"})})]}):(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,a.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,a.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:g,className:"pointer-events-auto",children:(0,a.jsx)(e,{height:c,width:m.width})})}),(0,a.jsx)(l.Y,{children:p}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(n.z,{size:"sm",onClick:()=>u(!h),children:"Show code"})})]})})}},8578:function(t,e,i){"use strict";i.d(e,{X:function(){return r}});var a=i(5893);i(7294);let r=t=>{let{vizName:e}=t;return(0,a.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},2450:function(t,e,i){"use strict";i.d(e,{Z:function(){return l}});var a=i(5893);i(7294);var r=i(2050),o=i(9975),n=i(9942);function l(t){let{images:e}=t,i=r.F.filter(t=>e.includes(t.img)).map((t,e)=>(0,a.jsx)(o.X,{link:t.link,title:t.title,description:(0,a.jsx)("p",{children:t.description}),img:t.img,alt:t.alt},e));return(0,a.jsx)(n.E,{children:i})}},153:function(t,e,i){"use strict";i.d(e,{A:function(){return h}});var a=i(5893),r=i(9700),o=i(3476),n=i(7294),l=i(3084),s=i.n(l);function c(){let[t,e]=(0,n.useState)([]),[i,r]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let t=Array.from(document.querySelectorAll("h2"));e(t)},[]),(0,n.useEffect)(()=>{let e=()=>{let e=t.map(t=>t.offsetTop-t.scrollTop+t.clientTop),i=window.scrollY+150,a=e.reduce((t,e)=>Math.abs(e-i)<Math.abs(t-i)?e:t,0),o=e.findIndex(t=>t===a);r(-1===o?0:o)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[t]),(0,a.jsx)("div",{className:s().tableOfContent,children:t.map((e,r)=>(0,a.jsx)("p",{className:i===r?"".concat(s().tocItem," ").concat(s().tocItemActive):s().tocItem,onClick:e=>{e.preventDefault(),t[r].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:e.id.charAt(0).toUpperCase()+e.id.slice(1)},e.id))})}var d=i(7414),p=i(2594);let h=t=>{let{children:e,title:i,seoDescription:n}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.A,{title:i,seoDescription:n}),(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)(r.Z,{})}),(0,a.jsx)("div",{className:"wrapper",children:e}),(0,a.jsx)(p.Z,{}),(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)(o.Z,{})}),(0,a.jsx)(c,{})]})}},6438:function(t,e,i){"use strict";i.d(e,{J:function(){return n}});var a=i(5893),r=i(1664),o=i.n(r);let n=t=>{let{children:e,href:i,isFilled:r,size:n="md",isFaded:l}=t,s=i.startsWith("www")||i.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";r?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===n&&(c+="text-sm py-1 px-2 "),"md"===n&&(c+="text-md py-2 px-4 "),l&&(c+="opacity-60");let d=(0,a.jsx)("span",{className:c,children:e});return s?(0,a.jsx)("a",{href:i,target:"_blank",children:d}):(0,a.jsx)(o(),{href:i,passHref:!0,children:d})}},9965:function(t,e,i){"use strict";i.d(e,{Z:function(){return h}});var a=i(5893);i(7294);var r=i(8843),o=i(4588),n=i(1859),l=i(6438),s=i(1832),c=i.n(s);let d=t=>{let{direction:e,text:i,children:r}=t;return(0,a.jsx)("span",{className:c().tooltip+" "+c()[e],id:i,children:r})};var p=i(5887);function h(t){let{title:e,description:i,chartType:s,showSectionLink:c=!1,showInspirationLink:h=!0,showD3GalleryLink:u=!0}=t,g=r.c.find(t=>t.id===s);return g?(0,a.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,a.jsxs)("div",{className:"flex justify-start items-center",children:[(0,a.jsx)("h1",{children:e}),(0,a.jsx)("div",{className:"w-20 ml-4",children:(0,a.jsx)(p.Z,{chartLogo:null==g?void 0:g.logo})})]}),(0,a.jsx)(n.r,{}),(0,a.jsx)("div",{className:"max-w-xxl  py-2",children:i}),s&&(0,a.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),s&&(0,a.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,a.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,a.jsx)(l.J,{href:(0,o.y)(g.reactURL),size:"sm",children:g.label+" section"})}),h&&(0,a.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,a.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+g.id,size:"sm",children:"inspiration"})}),u&&(0,a.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,a.jsx)(l.J,{href:g.d3URL,size:"sm",children:"d3 gallery"})}),(0,a.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,a.jsx)(l.J,{href:g.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]}):null}},8107:function(t,e,i){"use strict";i.d(e,{z:function(){return r}});var a=i(5893);let r=t=>{let{children:e,onClick:i,isFilled:r,size:o="md"}=t,n="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===o&&(n+="text-sm py-1 px-2"),"md"===o&&(n+="text-md py-2 px-4"),r?n+=" bg-reactGallery hover:bg-reactGallery text-white":n+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,a.jsx)("button",{className:n,onClick:i,children:e})}},615:function(t,e,i){"use strict";i.d(e,{Y:function(){return r}});var a=i(5893);let r=t=>{let{children:e}=t;return(0,a.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:e})}},3572:function(t,e,i){"use strict";i.d(e,{d:function(){return l}});var a=i(5893),r=i(5660),o=i.n(r),n=i(7294);let l=t=>{let{code:e}=t,i=(0,n.useRef)(null);return(0,n.useEffect)(()=>{i.current&&o().highlightElement(i.current)},[i,e]),(0,a.jsx)("div",{className:"mb-6",children:(0,a.jsx)("pre",{className:"rounded-md line-numbers",children:(0,a.jsx)("code",{ref:i,className:"p-0 language-js",children:e})})})}},9975:function(t,e,i){"use strict";i.d(e,{X:function(){return n}});var a=i(5893),r=i(6395),o=i.n(r);let n=t=>{let{img:e,title:i,description:r,link:n,alt:l}=t;return(0,a.jsxs)("figure",{className:o().container,children:[(0,a.jsx)("img",{src:"/chart/"+e,className:o().image,alt:l}),(0,a.jsxs)("figcaption",{children:[(0,a.jsx)("p",{className:o().title,children:(0,a.jsx)("b",{children:i})}),(0,a.jsx)("div",{className:"font-light",children:r}),(0,a.jsx)("a",{href:n})]})]})}},9942:function(t,e,i){"use strict";i.d(e,{E:function(){return r}});var a=i(5893);i(7294);let r=t=>{let{children:e}=t;return(0,a.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:e})}},9973:function(t,e,i){"use strict";i.d(e,{B:function(){return r}});var a=i(7294);let r=t=>{let e=()=>({width:t.current?t.current.offsetWidth:0,height:t.current?t.current.offsetHeight:0}),[i,r]=(0,a.useState)(e),o=()=>{r(e())};return(0,a.useEffect)(()=>(window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)),[]),(0,a.useLayoutEffect)(()=>{o()},[]),i}},9615:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return w}});var a=i(5893),r=i(7294),o=i(153),n=i(9965),l=i(7262),s=i(3572),c=i(1122),d=i(1664),p=i.n(d);let h=[{group:"Mark",subgroup:"travel",value:90},{group:"Mark",subgroup:"food",value:23},{group:"Mark",subgroup:"beer",value:14},{group:"Robert",subgroup:"travel",value:12},{group:"Robert",subgroup:"food",value:9},{group:"Robert",subgroup:"beer",value:2},{group:"Emily",subgroup:"travel",value:34},{group:"Emily",subgroup:"food",value:0},{group:"Emily",subgroup:"beer",value:4},{group:"Marion",subgroup:"travel",value:53},{group:"Marion",subgroup:"food",value:14},{group:"Marion",subgroup:"beer",value:102},{group:"Nicolas",subgroup:"travel",value:98},{group:"Nicolas",subgroup:"food",value:9},{group:"Nicolas",subgroup:"beer",value:8},{group:"M\xe9lanie",subgroup:"travel",value:23},{group:"M\xe9lanie",subgroup:"food",value:23},{group:"M\xe9lanie",subgroup:"beer",value:3},{group:"Gabriel",subgroup:"travel",value:18},{group:"Gabriel",subgroup:"food",value:11},{group:"Gabriel",subgroup:"beer",value:18},{group:"Jean",subgroup:"travel",value:104},{group:"Jean",subgroup:"food",value:10},{group:"Jean",subgroup:"beer",value:14},{group:"Paul",subgroup:"travel",value:2},{group:"Paul",subgroup:"food",value:12},{group:"Paul",subgroup:"beer",value:92}];var u=i(7875);let g={top:0,right:30,bottom:30,left:30},m=["#e85252","#6689c6","#9a6fb0"],f=t=>{let{width:e,height:i,data:o}=t,n=e-g.right-g.left,l=i-g.top-g.bottom,s=[...new Set(o.map(t=>t.group))],c=[...new Set(o.map(t=>t.subgroup))],d=u.knu().keys(c).value(t=>o.filter(e=>e.group===t)[0].value),p=d(s),h=p[p.length-1]||[],f=h.map(t=>{let e=t[t.length-1]||0;return{name:t.data,value:e}}),b=f.sort((t,e)=>e.value-t.value),x=b[0].value,v=(0,r.useMemo)(()=>u.tiA().domain(f.map(t=>t.name)).range([0,l]).padding(.2),[o,i]),w=(0,r.useMemo)(()=>u.BYU().domain([0,x]).range([0,n]),[o,e]);var j=u.PKp().domain(c).range(m);let k=p.map((t,e)=>(0,a.jsx)("g",{children:t.map((e,i)=>(0,a.jsx)("rect",{y:v(e.data),height:v.bandwidth(),x:w(e[0]),width:w(e[1])-w(e[0]),fill:j(t.key),opacity:.6},i))},e)),y=b.map((t,e)=>{let i=v(t.name);return i?(0,a.jsxs)("g",{children:[(0,a.jsx)("text",{x:w(t.value)-7,y:i+v.bandwidth()/2,textAnchor:"end",alignmentBaseline:"central",fontSize:12,opacity:w(t.value)>90?1:0,children:t.value}),(0,a.jsx)("text",{x:w(0)+7,y:i+v.bandwidth()/2,textAnchor:"start",alignmentBaseline:"central",fontSize:12,children:t.name})]},e):null}),z=w.ticks(5).slice(1).map((t,e)=>(0,a.jsxs)("g",{children:[(0,a.jsx)("line",{x1:w(t),x2:w(t),y1:0,y2:l,stroke:"#808080",opacity:.2}),(0,a.jsx)("text",{x:w(t),y:l+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,opacity:.8,children:t})]},e));return(0,a.jsx)("div",{children:(0,a.jsx)("svg",{width:e,height:i,children:(0,a.jsxs)("g",{width:n,height:l,transform:"translate(".concat([g.left,g.top].join(","),")"),children:[(0,a.jsx)("g",{children:z}),(0,a.jsx)("g",{children:k}),(0,a.jsx)("g",{children:y})]})})})},b=t=>{let{width:e=700,height:i=400}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{height:60,display:"flex",alignItems:"center"},children:(0,a.jsxs)("span",{style:{fontSize:17,marginLeft:30},children:["How much my friends spend on"," ",(0,a.jsx)("span",{style:{color:m[0]},children:(0,a.jsx)("b",{children:"travel"})}),","," ",(0,a.jsx)("span",{style:{color:m[1]},children:(0,a.jsx)("b",{children:"food"})})," ","and"," ",(0,a.jsx)("span",{style:{color:m[2]},children:(0,a.jsx)("b",{children:"beer"})}),"."]})}),(0,a.jsx)(f,{data:h,width:e,height:i-60})]})};var x=i(2450);let v=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["This tutorial is a variation around the general"," ",(0,a.jsx)(p(),{href:"/barplot",children:"introduction to barplot with react"})," and d3.js. You should probably understand the concepts described there before digging into ",(0,a.jsx)("b",{children:"stacking"}),"."]}),(0,a.jsxs)("p",{children:["This example shows how to represent ",(0,a.jsx)("b",{children:"2 levels of grouping"})," in a barplot, resulting in a"," ",(0,a.jsx)("a",{href:"https://www.data-to-viz.com/graph/barplot.html",children:"stacked barplot"}),". The items of the dataset are divided in ",(0,a.jsx)("b",{children:"groups"})," (reprented as bars) and ",(0,a.jsx)("b",{children:"subgroups"})," (represented as sections in each bar)."]}),(0,a.jsx)("p",{children:"A code sandbox is provided for the final result, but explanations target what's different compared to an usual barplot."})]});function w(){return(0,a.jsxs)(o.A,{title:"Horizontal stacked barplot.",seoDescription:"A step-by-step guide to build a horizontal stacked barplot with React and d3.js. Comes with explanation, code sandboxes, and ready-to-use templates.",children:[(0,a.jsx)(n.Z,{title:(0,a.jsx)("h1",{children:"Horizontal Stacked Barplot"}),description:v,chartType:"barplot"}),(0,a.jsx)("h2",{id:"plot",children:"Plot and code"}),(0,a.jsxs)("p",{children:["This is a ",(0,a.jsx)("b",{children:"stacked barplot"})," built using React and d3.js. The dummy dataset provides information about how much my friends spent the last month. The people are the ",(0,a.jsx)("b",{children:"group"})," here. Each ",(0,a.jsx)("b",{children:"bar"})," represents a group."]}),(0,a.jsxs)("p",{children:["A ",(0,a.jsx)("b",{children:"second level"})," of grouping is available. We know if the money was spent on travel, food or beer. It is possible to represent this additional amount of info using a process called ",(0,a.jsx)("b",{children:"stacking"}),"."]}),(0,a.jsx)(c.$,{vizName:"BarplotStackedHorizontal",VizComponent:b,height:500,maxWidth:600,caption:"A horizontal stacked barplot built with d3.js for scales, and react for rendering"}),(0,a.jsx)("p",{children:"Now, let's see how to implement such a graph."}),(0,a.jsx)("h2",{id:"data",children:"The Data"}),(0,a.jsxs)("p",{children:["There are several ways to store this information in javascript. I suggest an ",(0,a.jsx)("b",{children:"array of object"})," where each object provides the"," ",(0,a.jsx)("code",{children:"value"}),"of 1 specific expense, with the ",(0,a.jsx)("code",{children:"group"})," (friend name) and the"," ",(0,a.jsx)("code",{children:"subgroup"})," (category of expense)."]}),(0,a.jsx)(s.d,{code:j}),(0,a.jsx)("h2",{id:"stacking",children:"Stacking"}),(0,a.jsxs)("p",{children:["The trickiest part of the stacked barplot implementation is the"," ",(0,a.jsx)("b",{children:"stacking"})," step."]}),(0,a.jsxs)("p",{children:["Subgroups are displayed one next to each other. We need to compute their positions on the X axis. Fortunately ",(0,a.jsx)("code",{children:"d3.js"})," is here to the rescue with a ",(0,a.jsx)("code",{children:"d3.stack()"})," function."]}),(0,a.jsx)("h3",{children:"→ Build a stack generator"}),(0,a.jsxs)("p",{children:[(0,a.jsx)("code",{children:"d3.stack()"})," constructs a ",(0,a.jsx)("b",{children:"stack generator"}),". This stack generator is a function that takes a list of group names and will stack the data for each item."]}),(0,a.jsx)("p",{children:"This is how it can be applied to our dataset:"}),(0,a.jsx)(s.d,{code:k}),(0,a.jsx)("h3",{children:"→ Use the generator"}),(0,a.jsx)("p",{children:"Now that this stack generator is available, we just have to run it on our list of group names to get the stacked values:"}),(0,a.jsx)(s.d,{code:y}),(0,a.jsx)("h3",{children:"→ Output"}),(0,a.jsx)("p",{children:"The output has kind of an usual shape and it's important to understand how it's formatted. It's an array with the same length than the initial dataset. Once more, each item is linked to a positon on the x axis."}),(0,a.jsx)("p",{children:"Each item is an array of length 2, associated with a specific series. This is a mess to explain."}),(0,a.jsx)(s.d,{code:z}),(0,a.jsx)("h2",{id:"rendering",children:"Rendering"}),(0,a.jsxs)("p",{children:["Once you get the ",(0,a.jsx)("b",{children:"stacked data"})," above, rendering the chart is business as usual. You can loop through the object and plot a"," ",(0,a.jsx)("code",{children:"rect"})," for each item."]}),(0,a.jsx)(c.$,{vizName:"BarplotStackedHorizontal",VizComponent:b,height:500,maxWidth:600,caption:"A horizontal stacked barplot built with d3.js for scales, and react for rendering"}),(0,a.jsx)("h2",{id:"variation",children:"Variation"}),(0,a.jsx)("p",{children:"Check those other barplot and stacked barplot that can interest you:"}),(0,a.jsx)(x.Z,{images:["barplot-basic.png","barplotDatasetAnimation.gif","barplot-stacked-vertical.png"]}),(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,a.jsx)(l.Z,{chartFamily:"ranking"}),(0,a.jsx)("div",{className:"mt-20"})]})}let j='\nexport const data = [\n  {group:"Mark", subgroup: "travel",  value: 90},\n  {group:"Mark", subgroup: "food",  value: 23},\n  {group:"Mark", subgroup: "beer",  value: 14},\n  ...\n]\n'.trim(),k="\n// You need the list of subgroups\nconst subGroups = ['travel', 'beer', 'food']\n\n// Creates the stacking function\nconst stackGenerator = d3\n  .stack<string>()\n  .keys(subGroups)\n  .value((d) => data.filter((item) => item.group === d)[0].value); // This is the accessor function: how to retrieve all values for a group\n".trim(),y="\n// Use the stack generator to stack the data in each group\nconst series = stackGenerator(groups);\n".trim(),z="\n[\n  // Subgroup 1 (travel)\n  [\n    [0, 90, data: 'Mark'], // subgroup travel goes from x=0 to x=90 for Mark\n    [0, 12, data: 'Robert'],\n    [0, 34, data: 'Emily'],\n    ...\n  ],\n  // Subgroup 2 (food)\n  [\n    [90, 180, data: 'Mark'], // subgroup food goes from x=90 to x=180 for Mark\n    [12, 24, data: 'Robert'],\n    [34, 68, data: 'Emily'],\n    ...\n  ]\n]\n".trim()},2050:function(t,e,i){"use strict";i.d(e,{F:function(){return a}});let a=[{link:"/scatter-plot#scales%20and%20axes",title:"Scales and axes",description:"How to map your data in a 2d space, and how to draw the axes",img:"axis-basic-demo.png",alt:"Picture of an empty chart area with X and Y axes"},{link:"/scatterplot",title:"Scatterplot Hover effect",description:"How to add a hover effect to highlight a group on a scatterplot",img:"scatterplotHoverEffect.gif",alt:"GIF of a scatterplot with hover effect"},{link:"/scatter-plot#circles",title:"Basic scatter plot",description:"Add circles to get a basic scatter plot",img:"scatterplot-most-basic.png",alt:"Most basic scatterplot made with react and d3"},{link:"/scatter-plot#tooltip",title:"Add tooltip",description:"Get more details about each datapoint by adding a tooltip on hover",img:"scatterplot-tooltip.png",alt:"Scatterplot with tooltip made with react and d3"},{link:"/scatter-plot#hover%20effect",title:"Add a hover effect",description:"Highlight a specific group on hover",img:"scatterplot-hover-effect.png",alt:"Scatterplot with hover effect made with react and d3"},{link:"/scatter-plot#real%20life",title:"Real life use-case",description:"Reproduction of a data wrapper chart representing countries CO2 data",img:"scatterplot-co2.png",alt:"Real life example of a scatterplot made with react and d3"},{link:"/example/boxplot-jitter",title:"Boxplot with jitter",description:"Add individual data points using jitter on top of the boxplot",img:"boxplot-jitter.png",alt:"Picture of a boxplot with jitter built using react and d3.js"},{link:"/boxplot#box%20component",title:"Boxplot shape",description:"How to build a boxplot shape in SVG",img:"boxplotShape.png",alt:"Picture of a box component, allowing to build a boxplot later on"},{link:"/boxplot",title:"Basic boxplot",description:"How to build a basic boxplot with react",img:"boxplotBasic.png",alt:"Picture of a basic boxplot built with react and d3"},{link:"/bubble-plot",title:"Bubble plot",description:"Learn how to build a bubble plot with react and d3.js",img:"bubble-plot-with-legend.png",alt:"Picture of a simple bubble plot with a legend made with react and d3.js"},{link:"/bubble-plot#transition",title:"Bubble plot data set transition",description:"How to smoothly animate the transition between dataset",img:"bubble-plot-dataset-transition.gif",alt:"GIF of a bubble plot smoothly transitioning data"},{link:"/histogram",title:"Histogram",description:"Learn how to build a histogram with react and d3.js",img:"histogram-basic.png",alt:"Picture of a simple histogram made with react and d3.js"},{link:"/histogram#transition",title:"Histogram dataset transition",description:"How to animate the transition between datasets",img:"histogram-dataset-transition.gif",alt:"GIF of a histogram with animated data transition"},{link:"/example/histogram-mirror",title:"Mirror histogram",description:"Create a mirror histogram to compare the distribution of 2 groups in a dataset",img:"histogram-mirror.png",alt:"picture of a mirror histogram made with react and d3.js"},{link:"/violin-plot",title:"Violin to Boxplot transition",description:"Using shape morphism to smoothly transition from a boxplot to a violin and reverse",img:"violinBoxplotTransition.png",alt:"gif of a violin plot smoothly transitioning to a boxplot using shape morphism"},{link:"/violin-plot#bucket%20size",title:"Bucket size effect",description:"Interactive example showing the bucket size effect on a violin chart",img:"violin-bucket-size-effect.gif",alt:"GIF showing a violin plot with varying bucket size"},{link:"/violin-plot#violin%20component",title:"Violin shape",description:"How to build the shape of a violin with SVG",img:"violinShape.png",alt:"Picture of a violin shape built with react and d3"},{link:"/violin-plot",title:"Boxplot to Violin plot",description:"Interactive example showing the difference between a boxplot and a violin",img:"boxplot-violin-transition.gif",alt:"GIF showing a mirror transition between a boxplot and a violin plot"},{link:"/violin-plot",title:"Basic violin plot",description:"Learn how to build a basic violin chart with d3 and react",img:"violinBasic.png",alt:"Picture of a basic violin chart built in react"},{link:"/violin-plot#bucket%20size",title:"Violin with variable bucket size",description:"A violin plot with a slider to change the bucket size in use",img:"violinBucketSize.png",alt:"Picture of a violin plot with variable bucket size"},{link:"/heatmap",title:"Basic heatmap",description:"Most basic heatmap",img:"heatmapBasic.png",alt:"Picture of a simple heatmap made with react and d3.js"},{link:"/heatmap#tooltip",title:"Heatmap with tooltip",description:"Learn how to add a tooltip to a heatmap with react",img:"heatmapTooltip.png",alt:"Picture of a heatmap with a tooltip that appears on hover"},{link:"/heatmap#legend",title:"Continuous color scale",description:"How to add a color legend to your chart that uses a continuous color scale",img:"continuousColorLegend.png",alt:"Picture of a continuous color scale built with d3.js"},{link:"/heatmap#application",title:"Vaccination heatmap",description:"Reproduction of a famous vaccination heatmap using d3 and react",img:"heatmapVaccination.png",alt:"Picture of a heatmap showing the effect of vaccination, built with react and d3"},{link:"/correlogram",title:"Basic correlogram",description:"Learn how to build a correlogram with react and d3",img:"correlogramBasic.png",alt:"Picture of a correlogram built with react and d3"},{link:"/barplot",title:"Basic barplot",description:"Most basic barplot built with React and d3",img:"barplot-basic.png",alt:"Picture of a horizontal barplot made with React and d3"},{link:"/example/barplot-data-transition-animation",title:"Barplot dataset transition",description:"How to smoothly animate the transition between dataset",img:"barplotDatasetAnimation.gif",alt:"GIF of a data update on a React barplot"},{link:"/example/barplot-stacked-horizontal",title:"Horizontal Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-horizontal.png",alt:"Picture of a stacked barchart made with react and d3"},{link:"/example/barplot-stacked-vertical",title:"Vertical Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-vertical.png",alt:"Picture of a vertical stacked barchart made with react and d3"},{link:"/example/histogram-small-multiple",title:"Small multiple",description:"Create one panel per group to show its distribution separately",img:"histogram-small-multiple.png",alt:"Picture of a histogram with small multiple built with react and d3.js"},{link:"/example/histogram-with-several-groups",title:"Multiple groups",description:"A histogram with <b>multiple</b> groups displayed on the same axis.",img:"histogram-with-several-groups.png",alt:"Picture of a histogram with multiple groups built with react and d3.js"},{link:"/density-plot",title:"Basic density plot",description:"Most basic density plot built with React and d3",img:"densityBasic.png",alt:"Picture of a basic density plot built with React and d3"},{link:"/density-plot#variations",title:"Density plot with multiple groups",description:"How to add several groups on the same density plot",img:"densityMultipleGroups.png",alt:"Picture of a density plot with multiple groups"},{link:"/ridgeline",title:"Basic ridgeline chart",description:"Most basic version of a ridgeline plot",img:"ridgelineBasic.png",alt:"Picture of a basic ridgeline chart built with react and d3"},{link:"/line-chart#basic",title:"Most basic line chart",description:"The most basic line chart one can make using d3 and react",img:"line-chart-basic.png",alt:"Picture of a very simple line chart made with react and d3"},{link:"/line-chart#transition",title:"Line chart with dataset transition",description:"How to smoothly animate the transition between 2 dataset on a line chart",img:"line-chart-data-transition.gif",alt:"GIF of a line chart that animates between 2 dataset"},{link:"/area-plot",title:"Basic Area Chart",description:"Most basic version of an area chart made with react and d3.js",img:"area-chart-basic.png",alt:"Picture of a basic area chart made with React and D3"},{link:"/stacked-area-plot",title:"Basis stacked area chart",description:"Most basic version of a stacked area chart. Explains how to use the stack() function of d3.js",img:"stacked-area-plot-basic.png",alt:"picture of a basic stacked area plot made with react"},{link:"/streamchart",title:"Basic Streamgraph",description:"Most basic streamgraph one can build using d3 and react",img:"streamgraph-basic.png",alt:"Picture of a basic streamgraph made using Reacrt and d3.js"},{link:"/streamchart#hover&effect",title:"Streamgraph with hover effect",description:"How to add a hover effect on a streamgraph to highlight a group",img:"streamgraph-hover-effect.gif",alt:"GIF of a streamgraph react component that supports hover effect"},{link:"/streamchart#transition",title:"Offset and Smoothing transition",description:"An interactive streamgraph example showing how to animate transition between the chart stacking features.",img:"streamgraph-offset-type-transition.gif",alt:"GIF of a streamgraph"},{link:"/streamchart#application",title:"Streamgraph application",description:"Streamgraph with a slider to zoom on a time stamp and with interactive inline legends",img:"streamgraph-application.gif",alt:"GIF of a streamgraph with multiple interactive features"},{link:"/circular-packing",title:"Most basic circular packing chart",description:"The most basic circular packing chart one can make using d3.js and React.",img:"circle-pack-basic.png",alt:"Picture of a very basic circle packing chart"},{link:"/circular-packing",title:"Circular packing: 2 levels of hierarchy",description:"A simple circular packing chart with 2 levels of hierarchy built with React and d3.",img:"circle-pack-2-levels.png",alt:"Picture of a very basic circle packing chart with 2 levels of hierarchy"},{link:"/example/circle-packing-with-d3-force",title:"Circle Pack with d3-force",description:"Another approach to build a circle packing chart using physical forces to compute node positions.",img:"circle-pack-d3-force.png",alt:"Picture of a circle packing chart made using the d3-force plugin"},{link:"/example/arc-diagram-vertical",title:"Vertical arc diagram",description:"The vertical version of the arc diagram is more convenient to display labels",img:"vertical-arc-diagram.png",alt:"Picture of a vertical arc diagram"},{link:"/network-chart#rendering",title:"Most basic network chart",description:"Most basic network chart using the d3-force plugin to apply physical forces.",img:"network-chart-basic.png",alt:"Picture of a very simple network chart built with React and D3.js."},{link:"/network-chart#rendering",title:"Play with forces",description:"A playground to discover the effect of the various forces you can apply to your particles",img:"network-chart-force-playground.png",alt:"Picture of a playground allowing to play with the various d3 forces"},{link:"/example/network-diagram-with-colored-groups",title:"Force directed graph",description:"A force directed network chart showing character co-occurence in les miserables",img:"network-les-miserables.png",alt:"Picture of a force directed network chart showing character co-occurence in les miserables"}]},6395:function(t){t.exports={container:"graphLinkImage_container__6vbL1",title:"graphLinkImage_title__86b4Y"}},1832:function(t){t.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3084:function(t){t.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}}},function(t){t.O(0,[3996,7875,5660,645,9774,2888,179],function(){return t(t.s=3058)}),_N_E=t.O()}]);