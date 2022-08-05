(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93],{2586:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area-plot",function(){return r(1522)}])},3485:function(e,t,r){"use strict";r.d(t,{U:function(){return a}});var i=r(5893),n=r(7294),a=function(e){var t=e.startOpen,r=e.title,a=e.children,s=(0,n.useState)(t),o=s[0],c=s[1],l=o?"max-h-full":"max-h-0",d=o?"overflow-visible":"overflow-hidden";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return c(!o)},children:[o?(0,i.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,i.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),r]}),(0,i.jsx)("div",{className:"transition-max-height ease-in duration-300  "+l+" "+d,children:a})]})}},2729:function(e,t,r){"use strict";r.d(t,{z:function(){return n}});var i=r(5893),n=function(e){var t=e.children,r=e.onClick,n=e.isFilled,a=e.size,s=void 0===a?"md":a,o="rounded m-1 cursor-pointer border-purple-700 border ";return"sm"===s&&(o+="text-sm py-1 px-2"),"md"===s&&(o+="text-md py-2 px-4"),o+=n?" bg-purple-500 hover:bg-purple-700 text-white":" bg-white hover:bg-purple-700 hover:text-white text-purple-700",(0,i.jsx)("button",{className:o,onClick:r,children:t})}},6158:function(e,t,r){"use strict";r.d(t,{Y:function(){return n}});var i=r(5893),n=function(e){var t=e.children;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},33:function(e,t,r){"use strict";r.d(t,{$:function(){return l}});var i=r(5893),n=r(7294),a=r(217),s=r(2729),o=r(6158),c=r(7975),l=function(e){var t=e.VizComponent,r=e.vizName,l=e.height,d=void 0===l?400:l,h=e.maxWidth,u=void 0===h?800:h,f=e.caption,x=(0,n.useState)(!1),m=x[0],p=x[1],v=(0,n.useRef)(null),j=(0,a.B)(v);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:m?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full",children:(0,i.jsx)(c.X,{vizName:r})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(s.z,{size:"sm",onClick:function(){return p(!m)},children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center",children:(0,i.jsx)("div",{style:{height:d,width:"100%",maxWidth:u},ref:v,children:(0,i.jsx)(t,{height:d,width:j.width})})}),(0,i.jsx)(o.Y,{children:f}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(s.z,{size:"sm",onClick:function(){return p(!m)},children:"Show code"})})]})})}},903:function(e,t,r){"use strict";r.d(t,{d:function(){return o}});var i=r(5893),n=r(4725),a=r.n(n),s=r(7294),o=function(e){var t=e.code,r=(0,s.useRef)(null);return(0,s.useEffect)((function(){r.current&&a().highlightElement(r.current)}),[r,t]),(0,i.jsx)("div",{className:"mb-4",children:(0,i.jsx)("pre",{className:"rounded-md line-numbers",children:(0,i.jsx)("code",{ref:r,className:"p-0 language-js",children:t})})})}},7975:function(e,t,r){"use strict";r.d(t,{X:function(){return n}});var i=r(5893),n=(r(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,i.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},3440:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(5893),n=(r(7294),r(3485)),a=r(1687),s=function(e){var t=e.imgLink,r=e.height,n=e.opacity,a=e.children;return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{style:{backgroundImage:"url("+t+")",height:r,backgroundAttachment:"fixed",opacity:n,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,i.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:a})]})};function o(e){e.chartId;return(0,i.jsxs)(n.U,{title:"More inspiration",startOpen:!0,children:[(0,i.jsxs)("p",{children:["If you're looking for inspiration to create your next histogram, note that"," ",(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,i.jsx)("div",{className:"border mb-10",children:(0,i.jsx)(s,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,i.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,i.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,i.jsxs)("p",{className:"text-center text-sm",children:[(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your histogram looks good!"]}),(0,i.jsx)(a.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},217:function(e,t,r){"use strict";r.d(t,{B:function(){return n}});var i=r(7294),n=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},r=(0,i.useState)(t),n=r[0],a=r[1],s=function(){a(t())};return(0,i.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),(0,i.useLayoutEffect)((function(){s()}),[]),n}},1522:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var i=r(5893),n=r(7294),a=r(6184),s=r(6193),o=r(7197),c=r(6978),l=r(3485),d=r(903),h=r(33),u=r(1664),f=[{x:1,y:90},{x:2,y:12},{x:3,y:34},{x:4,y:53},{x:5,y:52},{x:6,y:9},{x:7,y:18},{x:8,y:78},{x:9,y:28},{x:10,y:34}],x=r(2206);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],i=!0,n=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(i=(s=o.next()).done)&&(r.push(s.value),!t||r.length!==t);i=!0);}catch(c){n=!0,a=c}finally{try{i||null==o.return||o.return()}finally{if(n)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p={top:30,right:30,bottom:50,left:50},v=function(e){var t=e.width,r=e.height,a=e.data,s=(0,n.useRef)(null),o=t-p.right-p.left,c=r-p.top-p.bottom,l=m(x.Wem(a,(function(e){return e.y})),2),d=(l[0],l[1]),h=(0,n.useMemo)((function(){return x.BYU().domain([0,d||0]).range([c,0])}),[a,r]),u=m(x.Wem(a,(function(e){return e.x})),2),f=u[0],v=u[1],j=(0,n.useMemo)((function(){return x.BYU().domain([f||0,v||0]).range([0,o])}),[a,t]);(0,n.useLayoutEffect)((function(){var e=x.Ys(s.current);e.selectAll("*").remove();var t=x.LLu(j);e.append("g").attr("transform","translate(0,"+c+")").call(t);var r=x.y4O(h);e.append("g").call(r)}),[j,h,c]);var g=x.SOn().x((function(e){return j(e.x)})).y1((function(e){return h(e.y)})).y0(h(0))(a),y=x.jvg().x((function(e){return j(e.x)})).y((function(e){return h(e.y)}))(a);return y&&g?(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:t,height:r,children:[(0,i.jsxs)("g",{width:o,height:c,transform:"translate(".concat([p.left,p.top].join(","),")"),children:[(0,i.jsx)("path",{d:g,opacity:1,stroke:"none",fill:"#9a6fb0",fillOpacity:.4}),(0,i.jsx)("path",{d:y,opacity:1,stroke:"#9a6fb0",fill:"none",strokeWidth:2})]}),(0,i.jsx)("g",{width:o,height:c,ref:s,transform:"translate(".concat([p.left,p.top].join(","),")")})]})}):null},j=function(e){var t=e.width,r=void 0===t?700:t,n=e.height,a=void 0===n?400:n;return(0,i.jsx)(v,{data:f,width:r,height:a})},g=r(3440),y=(0,i.jsxs)("p",{children:["An ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/graph/area.html",children:"area chart"})," ","displays the evolution of one numeric variables. It is like a"," ",(0,i.jsx)(u.default,{href:"/line-chart",children:"line chart"}),", but with the area below the line being filled. This section describes how to build area charts on the web with ",(0,i.jsx)("code",{children:"d3.js"})," and ",(0,i.jsx)("code",{children:"react"}),". It starts very basic and then explains how to add more complex features like brushing, adding hover effects and more."]}),w="\nconst data = [\n  {x:1, y: 90},\n  {x: 2, y: 12},\n  {x: 3, , y: 34},\n  {x: 4, , y: 53},\n  {x: 5, , y: 98},\n]\n".trim();function b(){return(0,i.jsxs)(a.A,{title:"Area charts with React",seoDescription:"How to build an area chart with React and D3.js. A set of re-usable components",children:[(0,i.jsx)(s.Z,{title:"Area charts",description:y,chartType:"area"}),(0,i.jsxs)(l.U,{title:"Dataset",startOpen:!0,children:[(0,i.jsxs)("p",{children:["The dataset required to build a line chart is usually an array where each item is an object providing the ",(0,i.jsx)("code",{children:"x"})," and the"," ",(0,i.jsx)("code",{children:"x"})," values of the data point."]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Here is a minimal example:"}),(0,i.jsx)(d.d,{code:w}),(0,i.jsxs)("p",{children:["Note: if your data is in ",(0,i.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,i.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"here"}),"."]})]}),(0,i.jsxs)(l.U,{title:"Most basic area chart",startOpen:!0,children:[(0,i.jsxs)("p",{children:["There is nothing really tricky when it comes to build a basic barplot with react, all is pretty close to the"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/graph/area_basic.html",children:"d3-only examples"}),"."]}),(0,i.jsxs)("p",{children:["First of all you probably want to add some margins around the dimensions provided in the component properties as described"," ",(0,i.jsx)(u.default,{href:"/build-axis-with-react",children:"here"}),"."]}),(0,i.jsxs)("p",{children:["Both the X and Y axis are using a numeric scale thanks to the"," ",(0,i.jsx)("code",{children:"scaleLinear()"})," function here. Note that a usual struggle is to deal with the date format but this is described in the timeseries section."]}),(0,i.jsx)(h.$,{vizName:"AreaChartBasic",VizComponent:j,height:400,maxWidth:600,caption:"A very basic area chart made using react and d3.js"})]}),(0,i.jsx)(g.Z,{chartId:"area"}),(0,i.jsx)(l.U,{title:"Multiple groups",startOpen:!0,children:(0,i.jsx)("p",{children:"Todo, same thing but with several groups"})}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,i.jsx)(o.Z,{chartFamily:"evolution"}),(0,i.jsx)("div",{className:"mt-20"}),(0,i.jsx)(c.Z,{})]})}}},function(e){e.O(0,[34,206,702,774,888,179],(function(){return t=2586,e(e.s=t);var t}));var t=e.O();_N_E=t}]);