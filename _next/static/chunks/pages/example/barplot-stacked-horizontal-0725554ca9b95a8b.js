(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[579],{3058:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/barplot-stacked-horizontal",function(){return r(9615)}])},1651:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var s=r(5893);r(7294);var a=r(9871),i=r(8843),n=r(4588);let o={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function l(e){let{chartFamily:t}=e,r=i.c.filter(e=>e.family===t).map((e,t)=>{let r=(0,n.y)(e.reactURL);return(0,s.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,s.jsx)(a.Z,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==o?void 0:o[t]}),(0,s.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},1122:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var s=r(5893),a=r(7294),i=r(9973),n=r(8107),o=r(615),l=r(8578);let c=e=>{let{VizComponent:t,vizName:r,height:c=400,maxWidth:d=800,caption:u}=e,[h,p]=(0,a.useState)(!1),x=(0,a.useRef)(null),g=(0,i.B)(x);return(0,s.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:h?(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,s.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,s.jsx)(l.X,{vizName:r})}),(0,s.jsx)("div",{className:"flex justify-center mt-2",children:(0,s.jsx)(n.z,{size:"sm",onClick:()=>p(!h),children:"Hide Sandbox"})})]}):(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,s.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:x,className:"pointer-events-auto",children:(0,s.jsx)(t,{height:c,width:g.width})})}),(0,s.jsx)(o.Y,{children:u}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(n.z,{size:"sm",onClick:()=>p(!h),children:"Show code"})})]})})}},8578:function(e,t,r){"use strict";r.d(t,{X:function(){return a}});var s=r(5893);r(7294);let a=e=>{let{vizName:t}=e;return(0,s.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},2450:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var s=r(5893);r(7294);var a=r(2050),i=r(9975),n=r(9942);function o(e){let{images:t}=e,r=a.F.filter(e=>t.includes(e.img)).map((e,t)=>(0,s.jsx)(i.X,{link:e.link,title:e.title,description:(0,s.jsx)("p",{children:e.description}),img:e.img,alt:e.alt},t));return(0,s.jsx)(n.E,{children:r})}},153:function(e,t,r){"use strict";r.d(t,{A:function(){return h}});var s=r(5893),a=r(9700),i=r(3476),n=r(7294),o=r(3084),l=r.n(o);function c(){let[e,t]=(0,n.useState)([]),[r,a]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,n.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,s=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),i=t.findIndex(e=>e===s);a(-1===i?0:i)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,s.jsx)("div",{className:l().tableOfContent,children:e.map((t,a)=>(0,s.jsx)("p",{className:r===a?"".concat(l().tocItem," ").concat(l().tocItemActive):l().tocItem,onClick:t=>{t.preventDefault(),e[a].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=r(7414),u=r(2594);let h=e=>{let{children:t,title:r,seoDescription:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.A,{title:r,seoDescription:n}),(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsx)(a.Z,{})}),(0,s.jsx)("div",{className:"wrapper",children:t}),(0,s.jsx)(u.Z,{}),(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsx)(i.Z,{})}),(0,s.jsx)(c,{})]})}},6438:function(e,t,r){"use strict";r.d(t,{J:function(){return n}});var s=r(5893),a=r(1664),i=r.n(a);let n=e=>{let{children:t,href:r,isFilled:a,size:n="md",isFaded:o}=e,l=r.startsWith("www")||r.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";a?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===n&&(c+="text-sm py-1 px-2 "),"md"===n&&(c+="text-md py-2 px-4 "),o&&(c+="opacity-60");let d=(0,s.jsx)("span",{className:c,children:t});return l?(0,s.jsx)("a",{href:r,target:"_blank",children:d}):(0,s.jsx)(i(),{href:r,passHref:!0,children:d})}},9871:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var s=r(5893);r(7294);var a=r(5887),i=r(8843),n=r(1664),o=r.n(n);let l=i.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:r,link:i,isAvailable:n,size:c}=e,u=l.includes(t),h=n?"opacity-100":"opacity-20";return(0,s.jsx)(o(),{href:n?i:"subscribe",className:"no-underline",children:(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+h+" "+(n?"cursor-pointer":"cursor-not-allowed"),children:[(0,s.jsx)("div",{className:"absolute",children:(0,s.jsx)(a.Z,{chartLogo:t,size:c})}),u?(0,s.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,s.jsx)(d,{size:c})}):(0,s.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,s.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,s.jsx)("p",{className:"font-light text-sm text-gray-600 "+h,children:r})]})})}let d=e=>{let{size:t}=e;return(0,s.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,s.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},9965:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var s=r(5893);r(7294);var a=r(8843),i=r(4588),n=r(1859),o=r(6438),l=r(1832),c=r.n(l);let d=e=>{let{direction:t,text:r,children:a}=e;return(0,s.jsx)("span",{className:c().tooltip+" "+c()[t],id:r,children:a})};var u=r(5887);function h(e){let{title:t,description:r,chartType:l,showSectionLink:c=!1,showInspirationLink:h=!0,showD3GalleryLink:p=!0}=e,x=a.c.find(e=>e.id===l);return(0,s.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,s.jsxs)("div",{className:"flex justify-start items-center",children:[(0,s.jsx)("h1",{children:t}),l&&x&&(0,s.jsx)("div",{className:"w-20 ml-4",children:(0,s.jsx)(u.Z,{chartLogo:null==x?void 0:x.logo})})]}),(0,s.jsx)(n.r,{}),(0,s.jsx)("div",{className:"max-w-xxl  py-2",children:r}),l&&(0,s.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),x&&(0,s.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,s.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,s.jsx)(o.J,{href:(0,i.y)(x.reactURL),size:"sm",children:x.label+" section"})}),h&&(0,s.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,s.jsx)(o.J,{href:"https://www.dataviz-inspiration.com/"+x.id,size:"sm",children:"inspiration"})}),p&&(0,s.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,s.jsx)(o.J,{href:x.d3URL,size:"sm",children:"d3 gallery"})}),(0,s.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,s.jsx)(o.J,{href:x.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})}},8107:function(e,t,r){"use strict";r.d(t,{z:function(){return a}});var s=r(5893);let a=e=>{let{children:t,onClick:r,isFilled:a,size:i="md"}=e,n="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===i&&(n+="text-sm py-1 px-2"),"md"===i&&(n+="text-md py-2 px-4"),a?n+=" bg-reactGallery hover:bg-reactGallery text-white":n+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,s.jsx)("button",{className:n,onClick:r,children:t})}},615:function(e,t,r){"use strict";r.d(t,{Y:function(){return a}});var s=r(5893);let a=e=>{let{children:t}=e;return(0,s.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,r){"use strict";r.d(t,{d:function(){return o}});var s=r(5893),a=r(5660),i=r.n(a),n=r(7294);let o=e=>{let{code:t}=e,r=(0,n.useRef)(null);return(0,n.useEffect)(()=>{r.current&&i().highlightElement(r.current)},[r,t]),(0,s.jsx)("div",{className:"mb-6",children:(0,s.jsx)("pre",{className:"rounded-md line-numbers",children:(0,s.jsx)("code",{ref:r,className:"p-0 language-js",children:t})})})}},9973:function(e,t,r){"use strict";r.d(t,{B:function(){return a}});var s=r(7294);let a=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[r,a]=(0,s.useState)(t),i=()=>{a(t())};return(0,s.useEffect)(()=>(window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)),[]),(0,s.useLayoutEffect)(()=>{i()},[e]),r}},9615:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var s=r(5893),a=r(7294),i=r(153),n=r(9965),o=r(1651),l=r(3572),c=r(1122),d=r(1664),u=r.n(d);let h=[{group:"Mark",subgroup:"travel",value:90},{group:"Mark",subgroup:"food",value:23},{group:"Mark",subgroup:"beer",value:14},{group:"Robert",subgroup:"travel",value:12},{group:"Robert",subgroup:"food",value:9},{group:"Robert",subgroup:"beer",value:2},{group:"Emily",subgroup:"travel",value:34},{group:"Emily",subgroup:"food",value:0},{group:"Emily",subgroup:"beer",value:4},{group:"Marion",subgroup:"travel",value:53},{group:"Marion",subgroup:"food",value:14},{group:"Marion",subgroup:"beer",value:102},{group:"Nicolas",subgroup:"travel",value:98},{group:"Nicolas",subgroup:"food",value:9},{group:"Nicolas",subgroup:"beer",value:8},{group:"M\xe9lanie",subgroup:"travel",value:23},{group:"M\xe9lanie",subgroup:"food",value:23},{group:"M\xe9lanie",subgroup:"beer",value:3},{group:"Gabriel",subgroup:"travel",value:18},{group:"Gabriel",subgroup:"food",value:11},{group:"Gabriel",subgroup:"beer",value:18},{group:"Jean",subgroup:"travel",value:104},{group:"Jean",subgroup:"food",value:10},{group:"Jean",subgroup:"beer",value:14},{group:"Paul",subgroup:"travel",value:2},{group:"Paul",subgroup:"food",value:12},{group:"Paul",subgroup:"beer",value:92}];var p=r(8657);let x={top:0,right:30,bottom:30,left:30},g=["#e85252","#6689c6","#9a6fb0"],m=e=>{let{width:t,height:r,data:i}=e,n=t-x.right-x.left,o=r-x.top-x.bottom,l=[...new Set(i.map(e=>e.group))],c=[...new Set(i.map(e=>e.subgroup))],d=p.knu().keys(c).value(e=>i.filter(t=>t.group===e)[0].value),u=d(l),h=u[u.length-1]||[],m=h.map(e=>{let t=e[e.length-1]||0;return{name:e.data,value:t}}),f=m.sort((e,t)=>t.value-e.value),b=f[0].value,j=(0,a.useMemo)(()=>p.tiA().domain(m.map(e=>e.name)).range([0,o]).padding(.2),[i,r]),v=(0,a.useMemo)(()=>p.BYU().domain([0,b]).range([0,n]),[i,t]);var w=p.PKp().domain(c).range(g);let y=u.map((e,t)=>(0,s.jsx)("g",{children:e.map((t,r)=>(0,s.jsx)("rect",{y:j(t.data),height:j.bandwidth(),x:v(t[0]),width:v(t[1])-v(t[0]),fill:w(e.key),opacity:.6},r))},t)),k=f.map((e,t)=>{let r=j(e.name);return r?(0,s.jsxs)("g",{children:[(0,s.jsx)("text",{x:v(e.value)-7,y:r+j.bandwidth()/2,textAnchor:"end",alignmentBaseline:"central",fontSize:12,opacity:v(e.value)>90?1:0,children:e.value}),(0,s.jsx)("text",{x:v(0)+7,y:r+j.bandwidth()/2,textAnchor:"start",alignmentBaseline:"central",fontSize:12,children:e.name})]},t):null}),N=v.ticks(5).slice(1).map((e,t)=>(0,s.jsxs)("g",{children:[(0,s.jsx)("line",{x1:v(e),x2:v(e),y1:0,y2:o,stroke:"#808080",opacity:.2}),(0,s.jsx)("text",{x:v(e),y:o+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,opacity:.8,children:e})]},t));return(0,s.jsx)("div",{children:(0,s.jsx)("svg",{width:t,height:r,children:(0,s.jsxs)("g",{width:n,height:o,transform:"translate(".concat([x.left,x.top].join(","),")"),children:[(0,s.jsx)("g",{children:N}),(0,s.jsx)("g",{children:y}),(0,s.jsx)("g",{children:k})]})})})},f=e=>{let{width:t=700,height:r=400}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{height:60,display:"flex",alignItems:"center"},children:(0,s.jsxs)("span",{style:{fontSize:17,marginLeft:30},children:["How much my friends spend on"," ",(0,s.jsx)("span",{style:{color:g[0]},children:(0,s.jsx)("b",{children:"travel"})}),","," ",(0,s.jsx)("span",{style:{color:g[1]},children:(0,s.jsx)("b",{children:"food"})})," ","and"," ",(0,s.jsx)("span",{style:{color:g[2]},children:(0,s.jsx)("b",{children:"beer"})}),"."]})}),(0,s.jsx)(m,{data:h,width:t,height:r-60})]})};var b=r(2450);let j=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["This tutorial is a variation around the general"," ",(0,s.jsx)(u(),{href:"/barplot",children:"introduction to barplot with react"})," and d3.js. You should probably understand the concepts described there before digging into ",(0,s.jsx)("b",{children:"stacking"}),"."]}),(0,s.jsxs)("p",{children:["This example shows how to represent ",(0,s.jsx)("b",{children:"2 levels of grouping"})," in a barplot, resulting in a"," ",(0,s.jsx)("a",{href:"https://www.data-to-viz.com/graph/barplot.html",children:"stacked barplot"}),". The items of the dataset are divided in ",(0,s.jsx)("b",{children:"groups"})," (reprented as bars) and ",(0,s.jsx)("b",{children:"subgroups"})," (represented as sections in each bar)."]}),(0,s.jsx)("p",{children:"A code sandbox is provided for the final result, but explanations target what's different compared to an usual barplot."})]});function v(){return(0,s.jsxs)(i.A,{title:"Horizontal stacked barplot.",seoDescription:"A step-by-step guide to build a horizontal stacked barplot with React and d3.js. Comes with explanation, code sandboxes, and ready-to-use templates.",children:[(0,s.jsx)(n.Z,{title:(0,s.jsx)("h1",{children:"Horizontal Stacked Barplot"}),description:j,chartType:"barplot"}),(0,s.jsx)("h2",{id:"plot",children:"Plot and code"}),(0,s.jsxs)("p",{children:["This is a ",(0,s.jsx)("b",{children:"stacked barplot"})," built using React and d3.js. The dummy dataset provides information about how much my friends spent the last month. The people are the ",(0,s.jsx)("b",{children:"group"})," here. Each ",(0,s.jsx)("b",{children:"bar"})," represents a group."]}),(0,s.jsxs)("p",{children:["A ",(0,s.jsx)("b",{children:"second level"})," of grouping is available. We know if the money was spent on travel, food or beer. It is possible to represent this additional amount of info using a process called ",(0,s.jsx)("b",{children:"stacking"}),"."]}),(0,s.jsx)(c.$,{vizName:"BarplotStackedHorizontal",VizComponent:f,height:500,maxWidth:600,caption:"A horizontal stacked barplot built with d3.js for scales, and react for rendering"}),(0,s.jsx)("p",{children:"Now, let's see how to implement such a graph."}),(0,s.jsx)("h2",{id:"data",children:"The Data"}),(0,s.jsxs)("p",{children:["There are several ways to store this information in javascript. I suggest an ",(0,s.jsx)("b",{children:"array of object"})," where each object provides the"," ",(0,s.jsx)("code",{children:"value"}),"of 1 specific expense, with the ",(0,s.jsx)("code",{children:"group"})," (friend name) and the"," ",(0,s.jsx)("code",{children:"subgroup"})," (category of expense)."]}),(0,s.jsx)(l.d,{code:w}),(0,s.jsx)("h2",{id:"stacking",children:"Stacking"}),(0,s.jsxs)("p",{children:["The trickiest part of the stacked barplot implementation is the"," ",(0,s.jsx)("b",{children:"stacking"})," step."]}),(0,s.jsxs)("p",{children:["Subgroups are displayed one next to each other. We need to compute their positions on the X axis. Fortunately ",(0,s.jsx)("code",{children:"d3.js"})," is here to the rescue with a ",(0,s.jsx)("code",{children:"d3.stack()"})," function."]}),(0,s.jsx)("h3",{children:"→ Build a stack generator"}),(0,s.jsxs)("p",{children:[(0,s.jsx)("code",{children:"d3.stack()"})," constructs a ",(0,s.jsx)("b",{children:"stack generator"}),". This stack generator is a function that takes a list of group names and will stack the data for each item."]}),(0,s.jsx)("p",{children:"This is how it can be applied to our dataset:"}),(0,s.jsx)(l.d,{code:y}),(0,s.jsx)("h3",{children:"→ Use the generator"}),(0,s.jsx)("p",{children:"Now that this stack generator is available, we just have to run it on our list of group names to get the stacked values:"}),(0,s.jsx)(l.d,{code:k}),(0,s.jsx)("h3",{children:"→ Output"}),(0,s.jsx)("p",{children:"The output has kind of an usual shape and it's important to understand how it's formatted. It's an array with the same length than the initial dataset. Once more, each item is linked to a positon on the x axis."}),(0,s.jsx)("p",{children:"Each item is an array of length 2, associated with a specific series. This is a mess to explain."}),(0,s.jsx)(l.d,{code:N}),(0,s.jsx)("h2",{id:"rendering",children:"Rendering"}),(0,s.jsxs)("p",{children:["Once you get the ",(0,s.jsx)("b",{children:"stacked data"})," above, rendering the chart is business as usual. You can loop through the object and plot a"," ",(0,s.jsx)("code",{children:"rect"})," for each item."]}),(0,s.jsx)(c.$,{vizName:"BarplotStackedHorizontal",VizComponent:f,height:500,maxWidth:600,caption:"A horizontal stacked barplot built with d3.js for scales, and react for rendering"}),(0,s.jsx)("h2",{id:"variation",children:"Variation"}),(0,s.jsx)("p",{children:"Check those other barplot and stacked barplot that can interest you:"}),(0,s.jsx)(b.Z,{images:["barplot-basic.png","barplotDatasetAnimation.gif","barplot-stacked-vertical.png"]}),(0,s.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,s.jsx)(o.Z,{chartFamily:"ranking"}),(0,s.jsx)("div",{className:"mt-20"})]})}let w='\nexport const data = [\n  {group:"Mark", subgroup: "travel",  value: 90},\n  {group:"Mark", subgroup: "food",  value: 23},\n  {group:"Mark", subgroup: "beer",  value: 14},\n  ...\n]\n'.trim(),y="\n// You need the list of subgroups\nconst subGroups = ['travel', 'beer', 'food']\n\n// Creates the stacking function\nconst stackGenerator = d3\n  .stack<string>()\n  .keys(subGroups)\n  .value((d) => data.filter((item) => item.group === d)[0].value); // This is the accessor function: how to retrieve all values for a group\n".trim(),k="\n// Use the stack generator to stack the data in each group\nconst series = stackGenerator(groups);\n".trim(),N="\n[\n  // Subgroup 1 (travel)\n  [\n    [0, 90, data: 'Mark'], // subgroup travel goes from x=0 to x=90 for Mark\n    [0, 12, data: 'Robert'],\n    [0, 34, data: 'Emily'],\n    ...\n  ],\n  // Subgroup 2 (food)\n  [\n    [90, 180, data: 'Mark'], // subgroup food goes from x=90 to x=180 for Mark\n    [12, 24, data: 'Robert'],\n    [34, 68, data: 'Emily'],\n    ...\n  ]\n]\n".trim()},1832:function(e){e.exports={tooltip:"tooltip_tooltip__b_kg5",right:"tooltip_right__zvLDU",left:"tooltip_left__mQ0Xf",bottom:"tooltip_bottom__MVFNa",top:"tooltip_top__kPfp4"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[3996,8657,5660,645,693,9774,2888,179],function(){return e(e.s=3058)}),_N_E=e.O()}]);