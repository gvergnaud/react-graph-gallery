(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7007],{37726:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/timeseries",function(){return i(31323)}])},61651:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var n=i(85893);i(67294);var r=i(49871),s=i(28843),a=i(77522);let o={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function l(e){let{chartFamily:t}=e,i=s.c.filter(e=>e.family===t).map((e,t)=>{let i=(0,a.y)(e.reactURL);return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,n.jsx)(r.Z,{link:i,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:122})},t)});return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==o?void 0:o[t]}),(0,n.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:i})]})}},81122:function(e,t,i){"use strict";i.d(t,{$:function(){return c}});var n=i(85893),r=i(67294),s=i(59973),a=i(80615),o=i(88578),l=i(5);let c=e=>{let{VizComponent:t,vizName:i,height:c=400,maxWidth:d=800,caption:h,fileToOpen:u}=e,[m,x]=(0,r.useState)(!1),f=(0,r.useRef)(null),p=(0,s.B)(f);return(0,n.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:m?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,n.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,n.jsx)(o.X,{vizName:i,fileToOpen:u})}),(0,n.jsx)("div",{className:"flex justify-center mt-2",children:(0,n.jsx)(l.z,{size:"sm",onClick:()=>x(!m),children:"Hide Sandbox"})})]}):(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,n.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:f,className:"pointer-events-auto",children:(0,n.jsx)(t,{height:c,width:p.width})})}),(0,n.jsx)(a.Y,{children:h}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(l.z,{size:"sm",onClick:()=>x(!m),children:"Show code"})})]})})}},88578:function(e,t,i){"use strict";i.d(t,{X:function(){return r}});var n=i(85893);i(67294);let r=e=>{let{vizName:t,height:i="500px",fileToOpen:r}=e;return console.log("rerendeeeerrrrr"),(0,n.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split"+(r?"&module=/".concat(r):""),style:{width:"100%",height:i,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},52450:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(85893);i(67294);var r=i(92050),s=i(49975),a=i(59942);function o(e){let{images:t}=e,i=r.F.filter(e=>t.includes(e.img)).map((e,t)=>(0,n.jsx)(s.X,{link:e.link,title:e.title,description:(0,n.jsx)("p",{children:e.description}),img:e.img,alt:e.alt},t));return(0,n.jsx)(a.E,{children:i})}},80153:function(e,t,i){"use strict";i.d(t,{A:function(){return u}});var n=i(85893),r=i(49700),s=i(63476),a=i(67294),o=i(63084),l=i.n(o);function c(){let[e,t]=(0,a.useState)([]),[i,r]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,a.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),i=window.scrollY+150,n=t.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,0),s=t.findIndex(e=>e===n);r(-1===s?0:s)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,n.jsx)("div",{className:l().tableOfContent,children:e.map((t,r)=>(0,n.jsx)("p",{className:i===r?"".concat(l().tocItem," ").concat(l().tocItemActive):l().tocItem,onClick:t=>{t.preventDefault(),e[r].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=i(17414),h=i(62594);let u=e=>{let{children:t,title:i,seoDescription:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{title:i,seoDescription:a}),(0,n.jsx)(r.Z,{}),(0,n.jsx)("div",{className:"wrapper",children:t}),(0,n.jsx)(h.Z,{}),(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(s.Z,{})}),(0,n.jsx)(c,{})]})}},49871:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n=i(85893);i(67294);var r=i(95887),s=i(28843),a=i(41664),o=i.n(a);let l=s.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:i,link:s,isAvailable:a,size:c}=e,h=l.includes(t),u=a?"opacity-100":"opacity-20";return(0,n.jsx)(o(),{href:a?s:"subscribe",className:"no-underline",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(a?"cursor-pointer":"cursor-not-allowed"),children:[(0,n.jsx)("div",{className:"absolute",children:(0,n.jsx)(r.Z,{chartLogo:t,size:c})}),h?(0,n.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,n.jsx)(d,{size:c})}):(0,n.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,n.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,n.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:i})]})})}let d=e=>{let{size:t}=e;return(0,n.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,n.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},66717:function(e,t,i){"use strict";i.d(t,{U:function(){return r}});var n=i(85893);let r=e=>{let{title:t,children:i}=e;return(0,n.jsxs)("details",{className:"bg-gray-50 py-2 px-4 rounded-md my-2",children:[(0,n.jsx)("summary",{className:"cursor-pointer",children:t}),(0,n.jsx)("div",{className:"pt-4",children:i})]})}},80615:function(e,t,i){"use strict";i.d(t,{Y:function(){return r}});var n=i(85893);let r=e=>{let{children:t}=e;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,i){"use strict";i.d(t,{d:function(){return d}});var n=i(85893),r=i(32581),s=i(15660),a=i.n(s),o=i(67294),l=i(45993),c=i.n(l);let d=e=>{let{code:t}=e,[i,s]=(0,o.useState)(!1),l=(0,o.useRef)(null);(0,o.useEffect)(()=>{l.current&&a().highlightElement(l.current)},[l,t]);let d=(0,n.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),s(!0)},className:c().codeChunckCopyButton,children:i?"Copied":(0,n.jsx)(r.Z,{size:14,style:{padding:0}})});return(0,n.jsxs)("div",{className:"mb-6 relative",children:[(0,n.jsx)("pre",{className:"rounded-md line-numbers",children:(0,n.jsx)("code",{ref:l,className:"language-javascript",children:t})}),(0,n.jsx)("div",{className:c().copyButtonContainer,children:d})]})}},59973:function(e,t,i){"use strict";i.d(t,{B:function(){return r}});var n=i(67294);let r=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[i,r]=(0,n.useState)(t),s=()=>{r(t())};return(0,n.useEffect)(()=>(window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)),[]),(0,n.useEffect)(()=>{s()},[e]),i}},31323:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return z}});var n=i(85893),r=i(67294),s=i(80153),a=i(43710),o=i(61651),l=i(3572),c=i(81122),d=i(41664),h=i.n(d),u=i(66717),m=i(43950);let x=e=>{let{width:t,height:i}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("defs",{children:(0,n.jsx)("pattern",{id:"pattern_rkDsm",patternUnits:"userSpaceOnUse",width:"9.5",height:"2.5",patternTransform:"rotate(41)",children:(0,n.jsx)("line",{x1:"0",y:"0",x2:"0",y2:"9.5",stroke:"#D9B9F3",strokeWidth:"1"})})}),(0,n.jsx)("rect",{width:t,height:i,fill:"url(#pattern_rkDsm)",opacity:"1"})]})},f={top:30,right:30,bottom:50,left:50},p=e=>{let{width:t,height:i}=e,s=(0,r.useRef)(null),a=t-f.right-f.left,o=i-f.top-f.bottom,l=new Date("2020-12-01"),c=new Date("2023-06-01"),d=m.Xf().domain([l,c]).range([0,a]),h=(0,r.useMemo)(()=>m.BYU().domain([0,10]).range([o,0]),[i]);return(0,r.useEffect)(()=>{let e=m.Ys(s.current);e.selectAll("*").remove();let t=m.LLu(d);e.append("g").attr("transform","translate(0,"+o+")").call(t.ticks(8));let i=m.y4O(h);e.append("g").call(i)},[d,h,o]),(0,n.jsx)("div",{children:(0,n.jsxs)("svg",{width:t,height:i,style:{display:"inline-block"},children:[(0,n.jsx)("g",{width:a,height:o,transform:"translate(".concat([f.left,f.top].join(","),")"),children:(0,n.jsx)(x,{width:a,height:o})}),(0,n.jsx)("g",{width:a,height:o,ref:s,transform:"translate(".concat([f.left,f.top].join(","),")")})]})})},j=e=>{let{width:t=700,height:i=400}=e;return(0,n.jsx)(p,{width:t,height:i})};var g=i(7032),y=i(56438);let v=[{x:"2023-01-01",y:90},{x:"2023-02-01",y:12},{x:"2023-03-01",y:34},{x:"2023-04-01",y:53},{x:"2023-05-01",y:52},{x:"2023-06-01",y:9},{x:"2023-07-01",y:18},{x:"2023-08-01",y:78},{x:"2023-09-01",y:28},{x:"2023-12-01",y:34}],w={top:30,right:30,bottom:50,left:50},b=e=>{let{width:t,height:i,data:s}=e,a=(0,r.useRef)(null),o=t-w.right-w.left,l=i-w.top-w.bottom,c=m.Fp7(s,e=>e.y),d=m.BYU().domain([0,c||0]).range([l,0]),h=m.Z1g("%Y-%m-%d"),u=s.map(e=>h(e.x)).filter(e=>e instanceof Date),x=m.Wem(u),f=m.Xf().domain(x).range([0,o]);(0,r.useEffect)(()=>{let e=m.Ys(a.current);e.selectAll("*").remove();let t=m.LLu(f);e.append("g").attr("transform","translate(0,"+l+")").call(t);let i=m.y4O(d);e.append("g").call(i)},[f,d,l]);let p=m.jvg().x(e=>f(h(e.x))).y(e=>d(e.y)),j=p(s);return j?(0,n.jsx)("div",{children:(0,n.jsxs)("svg",{width:t,height:i,children:[(0,n.jsx)("g",{width:o,height:l,transform:"translate(".concat([w.left,w.top].join(","),")"),children:(0,n.jsx)("path",{d:j,opacity:1,stroke:"#9a6fb0",fill:"none",strokeWidth:2})}),(0,n.jsx)("g",{width:o,height:l,ref:a,transform:"translate(".concat([w.left,w.top].join(","),")")})]})}):null},k=e=>{let{width:t=700,height:i=400}=e;return(0,n.jsx)(b,{data:v,width:t,height:i})};var N=i(52450);let T=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["This section does not target a specific chart type, even though timeseries are often represented as ",(0,n.jsx)(h(),{href:"/line-chart",children:"line"})," charts or"," ",(0,n.jsx)(h(),{href:"/area",children:"area"})," charts."]}),(0,n.jsxs)("p",{children:["Instead, it provides a tips and tricks to deal with charts that represent the evolution in ",(0,n.jsx)("b",{children:"time"})," of a numeric variable. For instance, it provides hints on how to deal with ",(0,n.jsx)("b",{children:"dates"}),", how to ",(0,n.jsx)("b",{children:"pan"})," on a chart and more"]})]});function z(){return(0,n.jsxs)(s.A,{title:"Timeseries| The React Graph Gallery",seoDescription:"How to deal with timeseries with React and D3.js. A set of re-usable components coming with editable code and explanations.",children:[(0,n.jsx)(a.Z,{title:"Timeseries",description:T,chartType:"timeseries"}),(0,n.jsx)("h2",{id:"chart types",children:"Useful chart types"})," ",(0,n.jsxs)("p",{children:["This page is ",(0,n.jsx)("b",{children:"not"})," about a specific chart type. Instead it provides hints on how to deal with ",(0,n.jsx)("b",{children:"time"}),"."]}),(0,n.jsx)("p",{children:"Check the graph sections that are used to visualize timeseries below if there is a specific chart type you want to make."}),(0,n.jsx)("br",{}),(0,n.jsx)(N.Z,{images:["line-chart-basic.png","heatmapBasic.png","streamgraph-basic.png"]}),(0,n.jsx)("h2",{id:"date format",children:"The Date format"})," ",(0,n.jsxs)("p",{children:["The first struggle when dealing with timeseries is to work with the"," ",(0,n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",children:"javascript Date format"}),". A ",(0,n.jsx)("code",{children:"Date"})," represents a single moment in time and is usually stored as a ",(0,n.jsx)("code",{children:"string"})," in the input dataset."]}),(0,n.jsxs)("p",{children:["Here is an ",(0,n.jsx)("b",{children:"FAQ"})," about the ",(0,n.jsx)("code",{children:"Date"})," format. I constantly forget how this works and come back here for reference. Note that it heavily relies on the"," ",(0,n.jsx)("a",{href:"https://github.com/d3/d3-time-format",children:"d3-time-format module"})," ","that provides great helpers."]}),(0,n.jsxs)(u.U,{startOpen:!1,title:(0,n.jsxs)("span",{children:["Transform a ",(0,n.jsx)("b",{children:"string"})," into a ",(0,n.jsx)("b",{children:"date"})]}),children:[(0,n.jsxs)("p",{children:["In your dataset, the date of each data point is probably stored as a string, like ",(0,n.jsx)("code",{children:"2015-06-01"})," for instance."]}),(0,n.jsxs)("p",{children:["In order to manipulate and plot those dates, you need to transform it into a"," ",(0,n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",children:"javascript date format"}),"."]}),(0,n.jsx)(l.d,{code:C})]}),(0,n.jsxs)(u.U,{startOpen:!1,title:(0,n.jsxs)("span",{children:["Transform a ",(0,n.jsx)("b",{children:"date"})," into a ",(0,n.jsx)("b",{children:"string"})]}),children:[(0,n.jsxs)("p",{children:["Once you have a timestamp at the ",(0,n.jsx)("code",{children:"Date"})," format, you might want to display it on the screen using a specific format."]}),(0,n.jsx)(l.d,{code:_})]}),(0,n.jsxs)(u.U,{startOpen:!1,title:(0,n.jsxs)("span",{children:["What is the ",(0,n.jsx)("b",{children:"current date"})]}),children:[(0,n.jsxs)("p",{children:["You can use the ",(0,n.jsx)("code",{children:"Date.now()"})," function. Note that the date is returned as a ",(0,n.jsx)("code",{children:"number"}),"."]}),(0,n.jsx)(l.d,{code:D})]}),(0,n.jsx)("h2",{id:"time axis",children:"Building a time axis"}),(0,n.jsxs)("p",{children:["A very common task when it comes to build timeseries viz is to draw a"," ",(0,n.jsx)("b",{children:"time axis"}),". Fortunately, d3 has amazing helper functions allowing to create and draw temporal scales."]}),(0,n.jsxs)("p",{children:["All the magic is stored in the ",(0,n.jsx)("code",{children:"d3-scale"})," module, and more precisely in the"," ",(0,n.jsx)("a",{href:"https://github.com/d3/d3-scale#scaleTime",children:"scaleTime"})," ","function."]}),(0,n.jsx)("p",{children:"Building a time scale can be summarized as follow:"}),(0,n.jsx)(l.d,{code:A}),(0,n.jsxs)("p",{children:["Following this code block ",(0,n.jsx)("code",{children:"xScale"})," is a function. You give it a ",(0,n.jsx)("code",{children:"Date"}),", it returns a ",(0,n.jsx)("code",{children:"position in pixels"})]}),(0,n.jsxs)("p",{children:[" ","You can finally use this scale to draw the X axis using your favorite method:"]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"create your own react component"}),(0,n.jsxs)("li",{children:["call ",(0,n.jsx)("code",{children:"d3.axisBottom()"})," in a ",(0,n.jsx)("code",{children:"useEffect"})]})]}),(0,n.jsxs)("p",{children:["I'm preparing a full post on axes with d3 and react,"," ",(0,n.jsx)(h(),{href:"/subscribe",children:"subscribe"})," to the newsletter if you want to be notified when it's out!"]}),(0,n.jsx)(y.J,{size:"sm",href:"/subscribe",isFilled:!0,children:"More on axes"}),(0,n.jsx)(c.$,{vizName:"AxisTimeD3",VizComponent:j,height:250,maxWidth:600,caption:"A basic time axis build with d3.js and react."}),(0,n.jsxs)("p",{children:[(0,n.jsx)("code",{children:"d3"})," is very smart at picking the ",(0,n.jsx)("b",{children:"right label format"}),". If you're dealing with a very long period of time (years), it will display years. If you're dealing with a month, it will display days. And so on. It is very convenient. The logic controlling this formatting is provided ",(0,n.jsx)("a",{href:"https://gist.github.com/mbostock/4149176",children:"here"}),"."]}),(0,n.jsxs)("p",{children:["Note that you can ",(0,n.jsx)("b",{children:"customize"})," how dates are formatted along the X axis thanks to the ",(0,n.jsx)("code",{children:"tickFormat"})," function."]}),(0,n.jsx)("h2",{id:"line chart",children:"Line chart application"}),(0,n.jsxs)("p",{children:["If you already understood the content of the"," ",(0,n.jsx)(h(),{href:"line-chart",children:"line chart section"})," of the gallery, you just have to use a ",(0,n.jsx)("code",{children:"scaleTime"})," instead of a"," ",(0,n.jsx)("code",{children:"scaleLinear"})," and that's it, you have your first"," ",(0,n.jsx)("b",{children:"timeseries"})," visualization. \uD83D\uDE0B"]}),(0,n.jsx)(y.J,{size:"sm",href:"/line-chart",isFilled:!0,children:"Line chart section"}),(0,n.jsx)(c.$,{vizName:"LineChartTime",VizComponent:k,height:300,maxWidth:900,caption:"A first timeseries line chart made thanks to the scaleTime function of d3."}),(0,n.jsx)("h2",{id:"synced cursor",children:"Synchronized cursor"}),(0,n.jsxs)("p",{children:["Another pretty common task when dealing with timeseries is to add a"," ",(0,n.jsx)("b",{children:"synchronized cursor"})," on all charts."]}),(0,n.jsxs)("p",{children:["This makes the dashboard more ",(0,n.jsx)("b",{children:"insightful"}),": hovering over an interesting part of a chart reveals where the timestamp is localized on other charts ",(0,n.jsx)("b",{children:"instantly"}),"."]}),(0,n.jsxs)("p",{children:["The implementation required to build a shared state between all charts of the webpage. Hovering a specific chart will update this state and thus update all other plots. This process is extensively described in this"," ",(0,n.jsx)(h(),{href:"/example/line-chart-synchronized-cursors",children:"synchronized cursor for timeseries"})," ","post."," "]}),(0,n.jsx)(y.J,{href:"/example/line-chart-synchronized-cursors",isFilled:!0,size:"sm",children:"Read full post"}),(0,n.jsx)(c.$,{vizName:"LineChartSyncCursor",VizComponent:g.e,height:300,maxWidth:900,caption:"Hover over a chart to see a cursor on both of them, easing the time comparison."}),(0,n.jsx)("h2",{id:"gallery",children:"Gallery of timeseries example"}),(0,n.jsxs)("p",{children:["On top of the generic use-cases presented above, here is a gallery of chart examples involving ",(0,n.jsx)("b",{children:"timeseries"})," visualization:"]}),(0,n.jsx)("br",{}),(0,n.jsx)(N.Z,{images:["timeseries-moving-average.png"]}),(0,n.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,n.jsx)(o.Z,{chartFamily:"evolution"}),(0,n.jsx)("div",{className:"mt-20"})]})}let C='\n// import the timeParse function from d3\nimport { timeParse } from "d3";\n\n// create a time parser function that works for our time format\nconst customTimeParser = timeParse("%Y-%m-%d");\n\n// convert a string into a date\nconst string = "2015-06-01"\nconst date = customTimeParser(string)\n\n// console.log(date)\n// Mon Jun 01 2015 00:00:00 GMT+0200 (Central European Summer Time)\n}\n'.trim(),_='\n// import the timeParse function from d3\nimport { timeFormat } from "d3";\n\n// create a time parser function that works for our time format\nconst customTimeFormatter = timeFormat("%B %d, %Y");\n\n// convert a string into a date\nconst date = new Date\nconst string = customTimeFormatter(date)\n\n// console.log(string)\n// "June 30, 2015"\n}\n'.trim(),D="\nconst now = Date.now()\n\n// console.log(now)\n// 1685004151406\n\nconst nowInDateFormat = new Date(now)\n\n// console.log(nowInDateFormat)\n// Thu May 25 2023 10:42:31 GMT+0200 (Central European Summer Time)\n}\n".trim(),A='\n// Start and end of the axis must be in the Date format\nconst start = new Date("2020-12-01");\nconst end = new Date("2023-06-01");\n\n// Use scaleTime() to create a time scale\nconst xScale = d3.scaleTime()\n  .domain([start, end])\n  .range([0, width]);\n'.trim()},7032:function(e,t,i){"use strict";i.d(t,{e:function(){return m}});var n=i(85893),r=i(67294);let s=[{x:1,y:40},{x:2,y:12},{x:3,y:34},{x:4,y:33},{x:5,y:22},{x:6,y:9},{x:7,y:18},{x:8,y:78},{x:9,y:28},{x:10,y:34}],a=[{x:1,y:90},{x:2,y:74},{x:3,y:84},{x:4,y:45},{x:5,y:65},{x:6,y:96},{x:7,y:65},{x:8,y:75},{x:9,y:58},{x:10,y:36}];var o=i(43950),l=i(86824);let c={top:30,right:30,bottom:50,left:50},d=e=>{var t;let{width:i,height:s,data:a,cursorPosition:l,setCursorPosition:d,color:u}=e,m=(0,r.useRef)(null),x=i-c.right-c.left,f=s-c.top-c.bottom,[p,j]=o.Wem(a,e=>e.y),g=(0,r.useMemo)(()=>o.BYU().domain([0,j||0]).range([f,0]),[a,s]),[y,v]=o.Wem(a,e=>e.x),w=(0,r.useMemo)(()=>o.BYU().domain([0,v||0]).range([0,x]),[a,i]);(0,r.useEffect)(()=>{let e=o.Ys(m.current);e.selectAll("*").remove();let t=o.LLu(w);e.append("g").attr("transform","translate(0,"+f+")").call(t);let i=o.y4O(g);e.append("g").call(i)},[w,g,f]);let b=o.jvg().x(e=>w(e.x)).y(e=>g(e.y)),k=b(a);if(!k)return null;let N=e=>{let t=w.invert(e),i=1/0,n=null;for(let e of a){let r=Math.abs(e.x-t);r<i&&(i=r,n=e)}return n};return(0,n.jsx)("div",{children:(0,n.jsxs)("svg",{width:i,height:s,children:[(0,n.jsxs)("g",{width:x,height:f,transform:"translate(".concat([c.left,c.top].join(","),")"),children:[(0,n.jsx)("path",{d:k,opacity:1,stroke:u,fill:"none",strokeWidth:2}),l&&(0,n.jsx)(h,{height:f,x:l,y:g(null===(t=N(l))||void 0===t?void 0:t.y),color:u}),(0,n.jsx)("rect",{x:0,y:0,width:x,height:f,onMouseMove:e=>{let t=e.currentTarget.getBoundingClientRect(),i=e.clientX-t.left,n=N(i);d(w(n.x))},onMouseLeave:()=>d(null),visibility:"hidden",pointerEvents:"all"})]}),(0,n.jsx)("g",{width:x,height:f,ref:m,transform:"translate(".concat([c.left,c.top].join(","),")")})]})})},h=e=>{let{x:t,y:i,height:r,color:s}=e,a=(0,l.q_)({to:{x:t,y:i}});return a.x?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.q.line,{x1:a.x,x2:a.x,y1:0,y2:r,stroke:"black",strokeWidth:1}),(0,n.jsx)("circle",{cx:t,cy:i,r:5,fill:s})]}):null},u=e=>{let{width:t=700,height:i=400}=e,[o,l]=(0,r.useState)(null);return(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)(d,{data:s,width:t/2,height:i,cursorPosition:o,setCursorPosition:l,color:"#e85252"}),(0,n.jsx)(d,{data:a,width:t/2,height:i,cursorPosition:o,setCursorPosition:l,color:"#6689c6"})]})},m=e=>{let{width:t=700,height:i=400}=e;return(0,n.jsx)(u,{width:t,height:i})}},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}},86824:function(e,t,i){"use strict";i.d(t,{q:function(){return n.q},q_:function(){return n.q_},to:function(){return n.to},vc:function(){return n.vc}});var n=i(2719)}},function(e){e.O(0,[2343,7754,3950,7823,2719,8190,3710,2594,693,9774,2888,179],function(){return e(e.s=37726)}),_N_E=e.O()}]);