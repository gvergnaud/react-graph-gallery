(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[212],{2837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/treemap",function(){return n(6715)}])},3485:function(e,t,n){"use strict";n.d(t,{U:function(){return r}});var a=n(5893),i=n(7294),r=function(e){var t=e.startOpen,n=e.title,r=e.children,s=(0,i.useState)(t),l=s[0],c=s[1],o=l?"max-h-full":"max-h-0",d=l?"overflow-visible":"overflow-hidden";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return c(!l)},children:[l?(0,a.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,a.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),n]}),(0,a.jsx)("div",{className:"transition-max-height ease-in duration-300  "+o+" "+d,children:r})]})}},2729:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var a=n(5893),i=function(e){var t=e.children,n=e.onClick,i=e.isFilled,r=e.size,s=void 0===r?"md":r,l="rounded m-1 cursor-pointer border-purple-700 border ";return"sm"===s&&(l+="text-sm py-1 px-2"),"md"===s&&(l+="text-md py-2 px-4"),l+=i?" bg-purple-500 hover:bg-purple-700 text-white":" bg-white hover:bg-purple-700 hover:text-white text-purple-700",(0,a.jsx)("button",{className:l,onClick:n,children:t})}},6158:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});var a=n(5893),i=function(e){var t=e.children;return(0,a.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},33:function(e,t,n){"use strict";n.d(t,{$:function(){return o}});var a=n(5893),i=n(7294),r=n(217),s=n(2729),l=n(6158),c=n(7975),o=function(e){var t=e.VizComponent,n=e.vizName,o=e.height,d=void 0===o?400:o,h=e.maxWidth,u=void 0===h?800:h,m=e.caption,p=(0,i.useState)(!1),f=p[0],x=p[1],v=(0,i.useRef)(null),j=(0,r.B)(v);return(0,a.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:f?(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,a.jsx)("div",{style:{maxWidth:2e3},className:"w-full",children:(0,a.jsx)(c.X,{vizName:n})}),(0,a.jsx)("div",{className:"flex justify-center mt-2",children:(0,a.jsx)(s.z,{size:"sm",onClick:function(){return x(!f)},children:"Hide Sandbox"})})]}):(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,a.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center",children:(0,a.jsx)("div",{style:{height:d,width:"100%",maxWidth:u},ref:v,children:(0,a.jsx)(t,{height:d,width:j.width})})}),(0,a.jsx)(l.Y,{children:m}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(s.z,{size:"sm",onClick:function(){return x(!f)},children:"Show code"})})]})})}},903:function(e,t,n){"use strict";n.d(t,{d:function(){return l}});var a=n(5893),i=n(4725),r=n.n(i),s=n(7294),l=function(e){var t=e.code,n=(0,s.useRef)(null);return(0,s.useEffect)((function(){n.current&&r().highlightElement(n.current)}),[n,t]),(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsx)("pre",{className:"rounded-md line-numbers",children:(0,a.jsx)("code",{ref:n,className:"p-0 language-js",children:t})})})}},7975:function(e,t,n){"use strict";n.d(t,{X:function(){return i}});var a=n(5893),i=(n(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,a.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},217:function(e,t,n){"use strict";n.d(t,{B:function(){return i}});var a=n(7294),i=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},n=(0,a.useState)(t),i=n[0],r=n[1],s=function(){r(t())};return(0,a.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),(0,a.useLayoutEffect)((function(){s()}),[]),i}},6715:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var a=n(5893),i=n(7294),r=n(6184),s=n(6193),l=n(7197),c=n(6978),o=n(3485),d=n(903),h=n(33),u={type:"node",name:"boss",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53},{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12},{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]},m=n(9086),p=function(e){var t=e.width,n=e.height,r=e.data,s=(0,i.useMemo)((function(){return m.bT9(r).sum((function(e){return e.value}))}),[r]),l=(0,i.useMemo)((function(){return m.pNI().size([t,n]).padding(4)(s)}),[s,t,n]).leaves().map((function(e){return(0,a.jsxs)("g",{children:[(0,a.jsx)("rect",{x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,stroke:"transparent",fill:"#69b3a2",className:"opacity-80 hover:opacity-100"}),(0,a.jsx)("text",{x:e.x0+3,y:e.y0+3,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-bold",children:e.data.name}),(0,a.jsx)("text",{x:e.x0+3,y:e.y0+18,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-light",children:e.data.value})]},e.id)}));return(0,a.jsx)("div",{children:(0,a.jsx)("svg",{width:t,height:n,children:l})})},f=function(e){var t=e.width,n=void 0===t?700:t,i=e.height,r=void 0===i?400:i;return(0,a.jsx)(p,{data:u,width:n,height:r})},x={type:"node",name:"boss",value:0,children:[{type:"node",name:"Team Dataviz",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53}]},{type:"node",name:"Team DevOps",value:0,children:[{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12}]},{type:"node",name:"Team Sales",value:0,children:[{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]}]},v=function(e){var t=e.width,n=e.height,r=e.data,s=(0,i.useMemo)((function(){return m.bT9(r).sum((function(e){return e.value}))}),[r]),l=(0,i.useMemo)((function(){return m.pNI().size([t,n]).padding(4)(s)}),[s,t,n]).leaves().map((function(e){var t;null===(t=e.parent)||void 0===t||t.data.name;return(0,a.jsxs)("g",{children:[(0,a.jsx)("rect",{x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,stroke:"transparent",fill:"#69b3a2",className:"opacity-80 hover:opacity-100"}),(0,a.jsx)("text",{x:e.x0+3,y:e.y0+3,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-bold",children:e.data.name}),(0,a.jsx)("text",{x:e.x0+3,y:e.y0+18,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-light",children:e.data.value})]},e.id)}));return(0,a.jsx)("div",{children:(0,a.jsx)("svg",{width:t,height:n,children:l})})},j=function(e){var t=e.width,n=void 0===t?700:t,i=e.height,r=void 0===i?400:i;return(0,a.jsx)(v,{data:x,width:n,height:r})},y=(0,a.jsxs)("p",{children:["A ",(0,a.jsx)("a",{href:"https://www.data-to-viz.com/graph/treemap.html",children:"treemap"})," ","displays a hierarchical information (a ",(0,a.jsx)("i",{children:"tree"}),") as a set of rectangles. Rectangle sizes are proportional to a numeric value. d3.js has some handy functions to compute the rectangle positions. React becomes useful to render those rectangles, animate transitions and more."]}),g="\nconst data = {\n  type: 'node',\n  name: \"boss\",\n  value: 2300,\n  children: [\n    {type: 'leaf', name:\"Mark\", value: 90},\n    {type: 'leaf', name:\"Robert\", value: 12},\n    {type: 'leaf', name:\"Emily\", value: 34},\n    ...\n}\n".trim();function w(){return(0,a.jsxs)(r.A,{title:"Treemap with React",seoDescription:"How to build a treemap with React and D3.js. A set of re-usable components",children:[(0,a.jsx)(s.Z,{title:"Treemap",description:y,chartType:"treemap"}),(0,a.jsxs)(o.U,{title:"Dataset",startOpen:!0,children:[(0,a.jsxs)("p",{children:["The dataset describes a hierarchy using a recursive structure. Each item in this structure is called a node, the lowest nodes of the hierarchy being called leaves. The dataset is an object that has at least 3 properties: ",(0,a.jsx)("code",{children:"name"}),", ",(0,a.jsx)("code",{children:"value"})," and"," ",(0,a.jsx)("code",{children:"children"}),". Children is an array of nodes that have this structure too."]}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"Here is a minimal example of the data structure:"}),(0,a.jsx)(d.d,{code:g}),(0,a.jsx)("p",{children:"For a complete example, check the interactive playgrounds below."})]}),(0,a.jsx)("div",{className:"bg-gray-50 full-bleed mt-12",children:(0,a.jsx)("div",{className:"wrapper pb-12",children:(0,a.jsxs)(o.U,{title:"Input data & data wrangling",startOpen:!0,children:[(0,a.jsx)("p",{children:"Three main input data formats are usually encountered when it comes to store hierarchical information. It's always a struggle to deal with those formats so I've tried to describe the most common use-cases here."}),(0,a.jsx)("p",{children:"\u2192 list of connection (csv)"}),(0,a.jsx)("p",{children:"\u2192 list of connection (js object)"}),(0,a.jsx)("p",{children:"\u2192 json with hierarchy"}),(0,a.jsxs)("p",{children:["ToDo: write some explanation on how to do the work with the",(0,a.jsx)("code",{children:"d3.hierarchy"})," and ",(0,a.jsx)("code",{children:"d3.stratify"})," functions."]})]})})}),(0,a.jsxs)(o.U,{title:"Most basic treemap",startOpen:!0,children:[(0,a.jsxs)("p",{children:["The ",(0,a.jsx)("code",{children:"treemap"})," function of d3.js does the biggest part of the job. It basically computes the position of each square on the svg area, returning ",(0,a.jsx)("code",{children:"x0"}),", ",(0,a.jsx)("code",{children:"x1"}),", ",(0,a.jsx)("code",{children:"y0"})," and"," ",(0,a.jsx)("code",{children:"y1"})," for each item."]}),(0,a.jsxs)("p",{children:["Once this is available, it is just a matter of building some"," ",(0,a.jsx)("code",{children:"rect"})," and ",(0,a.jsx)("code",{children:"text"})," elements for each rectangle."]}),(0,a.jsx)(h.$,{vizName:"TreemapBasic",VizComponent:f,maxWidth:600,height:400,caption:"The most basic treemap made with react and d3.js."})]}),(0,a.jsxs)(o.U,{title:"Two levels of hierarchy",startOpen:!0,children:[(0,a.jsx)("p",{children:"Treemaps are also handy to display nested data structure. For instance, let's consider a company with a CEO, several teams, and a few employees per team."}),(0,a.jsx)(h.$,{vizName:"Treemap2Levels",VizComponent:j,maxWidth:600,height:400,caption:"Treemap with 2 levels of hierarchy, made with react and d3.js."})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,a.jsx)(l.Z,{chartFamily:"partOfAWhole"}),(0,a.jsx)("div",{className:"mt-20"}),(0,a.jsx)(c.Z,{})]})}}},function(e){e.O(0,[34,86,702,774,888,179],(function(){return t=2837,e(e.s=t);var t}));var t=e.O();_N_E=t}]);