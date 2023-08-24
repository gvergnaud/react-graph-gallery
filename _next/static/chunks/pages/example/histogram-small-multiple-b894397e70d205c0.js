(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9632],{5582:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/histogram-small-multiple",function(){return r(673)}])},7262:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var i=r(5893);r(7294);var s=r(5887),n=r(8843),a=r(1664),l=r.n(a);let o=n.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:r,link:n,isAvailable:a,size:c}=e,h=o.includes(t),u=a?"opacity-100":"opacity-20";return(0,i.jsx)(l(),{href:a?n:"subscribe",className:"no-underline",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(a?"cursor-pointer":"cursor-not-allowed"),children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(s.Z,{chartLogo:t,size:c})}),h?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(d,{size:c})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:r})]})})}let d=e=>{let{size:t}=e;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})};var h=r(4588);let u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){let{chartFamily:t}=e,r=n.c.filter(e=>e.family===t).map((e,t)=>{let r=(0,h.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(c,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==u?void 0:u[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},1122:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var i=r(5893),s=r(7294),n=r(9973),a=r(8107),l=r(615),o=r(8578);let c=e=>{let{VizComponent:t,vizName:r,height:c=400,maxWidth:d=800,caption:h}=e,[u,m]=(0,s.useState)(!1),p=(0,s.useRef)(null),x=(0,n.B)(p);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(o.X,{vizName:r})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(a.z,{size:"sm",onClick:()=>m(!u),children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:p,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:c,width:x.width})})}),(0,i.jsx)(l.Y,{children:h}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(a.z,{size:"sm",onClick:()=>m(!u),children:"Show code"})})]})})}},8578:function(e,t,r){"use strict";r.d(t,{X:function(){return s}});var i=r(5893);r(7294);let s=e=>{let{vizName:t}=e;return(0,i.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},153:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var i=r(5893),s=r(9700),n=r(3476),a=r(7294),l=r(3084),o=r.n(l);function c(){let[e,t]=(0,a.useState)([]),[r,s]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,a.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,i=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),n=t.findIndex(e=>e===i);s(-1===n?0:n)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,i.jsx)("div",{className:o().tableOfContent,children:e.map((t,s)=>(0,i.jsx)("p",{className:r===s?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[s].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=r(7414),h=r(2594);let u=e=>{let{children:t,title:r,seoDescription:a}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:r,seoDescription:a}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(s.Z,{})}),(0,i.jsx)("div",{className:"wrapper",children:t}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(n.Z,{})}),(0,i.jsx)(c,{})]})}},6438:function(e,t,r){"use strict";r.d(t,{J:function(){return a}});var i=r(5893),s=r(1664),n=r.n(s);let a=e=>{let{children:t,href:r,isFilled:s,size:a="md",isFaded:l}=e,o=r.startsWith("www")||r.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";s?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===a&&(c+="text-sm py-1 px-2 "),"md"===a&&(c+="text-md py-2 px-4 "),l&&(c+="opacity-60");let d=(0,i.jsx)("span",{className:c,children:t});return o?(0,i.jsx)("a",{href:r,target:"_blank",children:d}):(0,i.jsx)(n(),{href:r,passHref:!0,children:d})}},9965:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var i=r(5893);r(7294);var s=r(8843),n=r(4588),a=r(1859),l=r(6438),o=r(1832),c=r.n(o);let d=e=>{let{direction:t,text:r,children:s}=e;return(0,i.jsx)("span",{className:c().tooltip+" "+c()[t],id:r,children:s})};var h=r(5887);function u(e){let{title:t,description:r,chartType:o,showSectionLink:c=!1,showInspirationLink:u=!0,showD3GalleryLink:m=!0}=e,p=s.c.find(e=>e.id===o);return(0,i.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,i.jsxs)("div",{className:"flex justify-start items-center",children:[(0,i.jsx)("h1",{children:t}),o&&p&&(0,i.jsx)("div",{className:"w-20 ml-4",children:(0,i.jsx)(h.Z,{chartLogo:null==p?void 0:p.logo})})]}),(0,i.jsx)(a.r,{}),(0,i.jsx)("div",{className:"max-w-xxl  py-2",children:r}),o&&(0,i.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),p&&(0,i.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,i.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,i.jsx)(l.J,{href:(0,n.y)(p.reactURL),size:"sm",children:p.label+" section"})}),u&&(0,i.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,i.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+p.id,size:"sm",children:"inspiration"})}),m&&(0,i.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,i.jsx)(l.J,{href:p.d3URL,size:"sm",children:"d3 gallery"})}),(0,i.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,i.jsx)(l.J,{href:p.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})}},8107:function(e,t,r){"use strict";r.d(t,{z:function(){return s}});var i=r(5893);let s=e=>{let{children:t,onClick:r,isFilled:s,size:n="md"}=e,a="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===n&&(a+="text-sm py-1 px-2"),"md"===n&&(a+="text-md py-2 px-4"),s?a+=" bg-reactGallery hover:bg-reactGallery text-white":a+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,i.jsx)("button",{className:a,onClick:r,children:t})}},615:function(e,t,r){"use strict";r.d(t,{Y:function(){return s}});var i=r(5893);let s=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,r){"use strict";r.d(t,{d:function(){return l}});var i=r(5893),s=r(5660),n=r.n(s),a=r(7294);let l=e=>{let{code:t}=e,r=(0,a.useRef)(null);return(0,a.useEffect)(()=>{r.current&&n().highlightElement(r.current)},[r,t]),(0,i.jsx)("div",{className:"mb-6",children:(0,i.jsx)("pre",{className:"rounded-md line-numbers",children:(0,i.jsx)("code",{ref:r,className:"p-0 language-js",children:t})})})}},9973:function(e,t,r){"use strict";r.d(t,{B:function(){return s}});var i=r(7294);let s=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[r,s]=(0,i.useState)(t),n=()=>{s(t())};return(0,i.useEffect)(()=>(window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)),[]),(0,i.useLayoutEffect)(()=>{n()},[]),r}},673:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var i=r(5893),s=r(7294),n=r(153),a=r(9965),l=r(7262),o=r(3572),c=r(1122),d=r(1664),h=r.n(d);let u=[{group:"A",values:[0,0,2,2,2,0,0,1,1,1,1,1,1,1,1,1,2,3,3,1,2,2,4,3,5,6,4,3,7,2]},{group:"B",values:[19,20,19,18,18,18,12,13,13,15,18,18,13,20,20,19,19,19,19,19,17,20,16,16,16]},{group:"C",values:[7,8,8,9,9,9,10,10,10,10,11,11,12,13,10,10,10,10,10,10,10]},{group:"D",values:[1,1,2,2,2,3,3,2,2,3,3,4,4,5,5,6,10,10,10,11,11,12,13,10,10,10,10,10,10,10]}];var m=r(7875);let p={top:30,right:10,bottom:40,left:40},x=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"],f=e=>{let{width:t,height:r,data:n,color:a,xRange:l}=e,o=(0,s.useRef)(null),c=t-p.right-p.left,d=r-p.top-p.bottom,h=(0,s.useMemo)(()=>m.BYU().domain(l).range([0,c]),[n,t]),u=(0,s.useMemo)(()=>{let e=m.Ly_().value(e=>e).domain(l).thresholds(h.ticks(20));return e(n)},[h]),x=(0,s.useMemo)(()=>{let e=Math.max(...u.map(e=>null==e?void 0:e.length));return m.BYU().range([d,0]).domain([0,e]).nice()},[n,r]);(0,s.useEffect)(()=>{let e=m.Ys(o.current);e.selectAll("*").remove();let t=m.LLu(h);e.append("g").attr("transform","translate(0,"+d+")").call(t);let r=m.y4O(x);e.append("g").call(r)},[h,x,d]);let f=u.map((e,t)=>(0,i.jsx)("rect",{fill:a,x:h(e.x0)+.5,width:h(e.x1)-h(e.x0)-1,y:x(e.length),height:d-x(e.length)},t));return(0,i.jsxs)("svg",{width:t,height:r,children:[(0,i.jsx)("g",{width:c,height:d,transform:"translate(".concat([p.left,p.top].join(","),")"),children:f}),(0,i.jsx)("g",{width:c,height:d,ref:o,transform:"translate(".concat([p.left,p.top].join(","),")")})]})},g=e=>{let{width:t,height:r,data:s}=e,n=s.map(e=>e.group),a=m.PKp().domain(n).range(x),l=s.map(e=>Math.max(...e.values)),o=Math.max(...l),c=Math.ceil(n.length/2);return(0,i.jsx)("div",{style:{width:t,height:r,display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},children:s.map((e,s)=>(0,i.jsx)(f,{width:t/2,height:r/c,color:a(e.group),xRange:[0,o],data:e.values},s))})},j=e=>{let{width:t=700,height:r=400}=e;return(0,i.jsx)(g,{width:t,height:r,data:u})},v=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["This tutorial is a variation around the general"," ",(0,i.jsx)(h(),{href:"histogram",children:"introduction to histogram with react"})," and d3.js. You should probably understand the concepts described there before reading here."]}),(0,i.jsxs)("p",{children:["This example explains how to plot the distribution of"," ",(0,i.jsx)("b",{children:"several groups"}),", each distribution being drawn on its own pannel. This dataviz technique is called"," ",(0,i.jsx)("a",{href:"https://medium.com/nightingale/getting-started-with-small-multiples-an-underused-but-powerful-form-of-data-viz-3e0a8f8139dc",children:"small multiples"}),". It can be useful to ",(0,i.jsx)("b",{children:"compare the distribution"})," of several items in a dataset."]}),(0,i.jsx)("p",{children:"A code sandbox is provided for the final result, but explanations target what's different compared to an usual histogram."})]});function w(){return(0,i.jsxs)(n.A,{title:"How to build a small multiple histogram with React and D3 to show the distribution of several groups.",seoDescription:"A step-by-step guide to build your very own small multiple histogram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,i.jsx)(a.Z,{title:(0,i.jsxs)("h1",{children:["Histogram"," ",(0,i.jsx)("span",{className:"text-gray-600 font-light hidden sm:inline",children:"with small multiples"})]}),description:v,chartType:"histogram"}),(0,i.jsx)("h2",{id:"plot",children:"Plot and code"}),(0,i.jsx)("p",{children:"If you are in a hurry, this is what we're trying to achieve here.\uD83D\uDE47‍♂️"}),(0,i.jsxs)("p",{children:["The distribution of ",(0,i.jsx)("b",{children:"several groups"})," are displayed, one on each panel of the graphing window. It allows to ",(0,i.jsx)("b",{children:"compare"})," the distributions."]}),(0,i.jsxs)("p",{children:["Note that this works even if groups have very ",(0,i.jsx)("b",{children:"similar"})," ","distributions as the bars won't overlap each other. It is thus a very good alternative to the"," ",(0,i.jsx)(h(),{href:"example/histogram-with-several-groups",children:"histogram with multiple groups"})," ","that would get unreadable in this condition."]}),(0,i.jsx)(c.$,{VizComponent:j,vizName:"HistogramSeveralGroupsSplitPanelDemo",maxWidth:600,height:600,caption:"Histogram representing the distribution of 4 groups in a dataset using the small multiple display. Made with react (rendering) and d3.js (scales)"}),(0,i.jsx)("h2",{id:"data",children:"The Data"}),(0,i.jsxs)("p",{children:["The dataset used here is slightly different as"," ",(0,i.jsx)(h(),{href:"/histogram#data",children:"the one"})," used for the simple 1 group histogram."]}),(0,i.jsxs)("p",{children:["An ",(0,i.jsx)("b",{children:"array"})," is used, with each object in it providing the name (",(0,i.jsx)("code",{children:"group"})," property here) and the ",(0,i.jsx)("code",{children:"values"})," of a group."]}),(0,i.jsx)("p",{children:"Here is a minimal example of the data structure:"}),(0,i.jsx)(o.d,{code:b}),(0,i.jsx)("h2",{id:"color scale",children:"Color scale"}),(0,i.jsxs)("p",{children:["There is a finite number of groups here. We need to assign a specific color to each group. This is called an ",(0,i.jsx)("b",{children:"ordinal"})," scale and is implemented in the d3 ",(0,i.jsx)("code",{children:"scaleOrdinal"})," function."]}),(0,i.jsxs)("p",{children:["What's needed here is thus a list of colors to use (the"," ",(0,i.jsx)("code",{children:"range"}),") and a list of group names: the ",(0,i.jsx)("code",{children:"domain"}),"."]}),(0,i.jsx)("p",{children:"To put it in a nutshell, that's how the color scale is implemented:"}),(0,i.jsx)(o.d,{code:y}),(0,i.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the svg ",(0,i.jsx)("code",{children:"circle"}),", but it's react that will render them in the ",(0,i.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,i.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,i.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,i.jsx)("h2",{id:"rendering",children:"Rendering"}),(0,i.jsxs)("p",{children:["The ",(0,i.jsx)("code",{children:"Histogram"})," component used to render each sub-panel is almost exactly the one presented in the"," ",(0,i.jsx)(h(),{href:"/histogram",children:"histogram section"})," of the gallery."]}),(0,i.jsxs)("p",{children:["The only difference is that it receives 2 new properties. The"," ",(0,i.jsx)("code",{children:"color"})," prop is computed in the parent component using the logic described above. The ",(0,i.jsx)("code",{children:"xRange"})," prop is necessary to make sure all histograms have the same x axis, allowing to compare them efficiently."]}),(0,i.jsxs)("p",{children:["Now, we just need to call the ",(0,i.jsx)("code",{children:"Histogram"})," component for each group of the dataset and render tham in a ",(0,i.jsx)("code",{children:"grid"})," layout as follow:"]}),(0,i.jsx)(o.d,{code:N}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,i.jsx)(l.Z,{chartFamily:"distribution"}),(0,i.jsx)("div",{className:"mt-20"})]})}let b='\nconst data = [\n  {\n    group: "A",\n    values: [0, 0, 2, 2, 2, 0]\n  },\n  {\n    group: "B",\n    values: [0, 0, 2, 2, 2, 0]\n  },\n  ...\n];'.trim(),y='\n// List of arbitrary colors\nconst COLORS = ["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"];\n\n// List of all group names\nconst allGroups = data.map((group) => group.group);\n\n// Color scale\nconst colorScale = d3.scaleOrdinal<string>()\n  .domain(allGroups)\n  .range(COLORS);\n'.trim(),N='\nexport const Histogram = ({ width, height, data }: HistogramProps) => {\n  const allGroups = data.map((group) => group.group);\n  const colorScale = d3.scaleOrdinal<string>().domain(allGroups).range(COLORS);\n\n  const maxPerGroup = data.map((group) => Math.max(...group.values));\n  const max = Math.max(...maxPerGroup);\n\n  const numberOfColumn = 2;\n  const numberOfRow = Math.ceil(allGroups.length / numberOfColumn);\n\n  return (\n    <div\n      style={{\n        width,\n        height,\n        display: "grid",\n        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",\n      }}\n    >\n      {data.map((group, i) => (\n        <SingleHistogram\n          key={i}\n          width={width / numberOfColumn}\n          height={height / numberOfRow}\n          color={colorScale(group.group)}\n          xRange={[0, max]}\n          data={group.values}\n        />\n      ))}\n    </div>\n  );\n};\n'.trim()},1832:function(e){e.exports={tooltip:"tooltip_tooltip__b_kg5",right:"tooltip_right__zvLDU",left:"tooltip_left__mQ0Xf",bottom:"tooltip_bottom__MVFNa",top:"tooltip_top__kPfp4"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[3996,7875,5660,645,9774,2888,179],function(){return e(e.s=5582)}),_N_E=e.O()}]);