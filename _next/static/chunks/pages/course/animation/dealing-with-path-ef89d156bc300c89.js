(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5830],{61834:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/animation/dealing-with-path",function(){return n(22419)}])},81122:function(e,t,n){"use strict";n.d(t,{$:function(){return c}});var i=n(85893),r=n(67294),a=n(59973),o=n(80615),s=n(88578),l=n(5);let c=e=>{let{VizComponent:t,vizName:n,height:c=400,maxWidth:u=800,caption:h,fileToOpen:d}=e,[p,x]=(0,r.useState)(!1),g=(0,r.useRef)(null),m=(0,a.B)(g);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:p?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(s.X,{vizName:n,fileToOpen:d})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(l.z,{size:"sm",onClick:()=>x(!p),children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:c,width:"100%",maxWidth:u},ref:g,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:c,width:m.width})})}),(0,i.jsx)(o.Y,{children:h}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(l.z,{size:"sm",onClick:()=>x(!p),children:"Show code"})})]})})}},88578:function(e,t,n){"use strict";n.d(t,{X:function(){return r}});var i=n(85893);n(67294);let r=e=>{let{vizName:t,height:n="500px",fileToOpen:r}=e;return console.log("rerendeeeerrrrr"),(0,i.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split"+(r?"&module=/".concat(r):""),style:{width:"100%",height:n,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},41843:function(e,t,n){"use strict";n.d(t,{p:function(){return c}});var i=n(85893),r=n(49700),a=n(63476),o=n(17414),s=n(41664),l=n.n(s);let c=e=>{let{children:t,title:n,seoDescription:s,previousTocItem:c,nextTocItem:u}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{title:n,seoDescription:s}),(0,i.jsx)(r.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:t}),(0,i.jsxs)("div",{className:"flex justify-center items-center space-x-6 my-24 py-12  bg-muted/50",children:[c?(0,i.jsxs)(l(),{href:c.link,className:"text-gray-500 no-underline flex flex-col justify-start items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted ",children:[(0,i.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text",children:"← Previous"}),(0,i.jsx)("p",{children:c.name})]}):(0,i.jsx)("div",{className:"w-96"}),u&&(0,i.jsxs)(l(),{href:u.link,className:"text-gray-500 no-underline flex flex-col justify-start w-96 h-32 border-l border-black  p-8 hover:bg-muted ",children:[(0,i.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text",children:"Next →"}),(0,i.jsx)("p",{children:u.name})]})]}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(a.Z,{})})]})}},80615:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var i=n(85893);let r=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},59973:function(e,t,n){"use strict";n.d(t,{B:function(){return r}});var i=n(67294);let r=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,r]=(0,i.useState)(t),a=()=>{r(t())};return(0,i.useEffect)(()=>(window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)),[]),(0,i.useEffect)(()=>{a()},[e]),n}},22419:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var i=n(85893);n(67294);var r=n(43710),a=n(41843),o=n(11236),s=n(81122),l=n(73367),c=n(65079),u=n(77936);function h(){let e=o.Y.find(e=>"/course/animation/dealing-with-path"===e.link);return e?(0,i.jsxs)(a.p,{title:e.name,seoDescription:"",nextTocItem:o.Y.find(e=>"/course/animation/project"===e.link),previousTocItem:o.Y.find(e=>"/course/animation/enter-update-exit"===e.link),children:[(0,i.jsx)(r.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,selectedLesson:e,description:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Thanks to the previous lessons we have a pretty solid understanding of react-spring, allowing to animate all the shapes on a graph, leading to a pretty nice bubble chart smooth transition."}),(0,i.jsx)("p",{children:"There is one piece missing in the puzzle though. How are we going to deal with path, to build transitions on charts like the line chart or the streamgraph?"})]})}),(0,i.jsx)("h2",{children:"The problem"}),(0,i.jsx)("p",{children:"Until now we've aanimated the transition of many features: position, size, color, text..."}),(0,i.jsx)("p",{children:"This is kind of straightforward! If I tell you to animate a position from 0 to 100, you understand that you just need to infer positions (numbers) between those 2 values."}),(0,i.jsx)("p",{children:"Now, if the first path is M0,100 L 100,200 and that the next path is M100,150 L200, 300, it is not so obvious how to go from 1 to the other!"}),(0,i.jsx)("h2",{children:"The good news"}),(0,i.jsx)("p",{children:"react spring KNOWS how to transition between paths that have the same number of points."}),(0,i.jsx)(s.$,{vizName:"LineChartDatasetTransition",VizComponent:l.H,height:400,maxWidth:600,caption:"Click on the buttons to trigger a smooth transition between the 2 line charts."}),(0,i.jsx)("h2",{children:"The bad news"}),(0,i.jsx)("p",{children:"react spring does NOT know how to transition between 2 paths that are highly different = not the same number of points. In this case, we need to use custom interpolation and the best tool for that is flubber."}),(0,i.jsx)(s.$,{vizName:"StreamGraphShapeTransition",VizComponent:c.v,height:600,maxWidth:600,caption:"Try d3.js various options to offset the data and smooth shapes. See a smooth transition between options."}),(0,i.jsx)("p",{children:"Even fursther, show the boxplot - violin plot transition"}),(0,i.jsx)(s.$,{vizName:"DonutBarplotTransition",VizComponent:u.f,maxWidth:500,height:400,caption:"Transition from a pie chart to a barplot with a smooth animation using the buttons on top."})]}):null}},77936:function(e,t,n){"use strict";n.d(t,{f:function(){return x}});var i=n(85893),r=n(67294);let a=[{name:"Mark",value:40},{name:"Robert",value:38},{name:"Etienne",value:37},{name:"Emily",value:36},{name:"Nicolas",value:35},{name:"Marion",value:34}];var o=n(43950),s=n(95334),l=n(86824);let c=e=>{let{path:t,color:n}=e,a=(0,r.useRef)(t),o=(0,r.useMemo)(()=>(0,s.interpolate)(a.current,t),[t]),c=(0,l.q_)({from:{t:0},to:{t:1},reset:a.current!==t,onChange:e=>{let{t}=e;a.current=o(t||1)},config:l.vc.molasses});return(0,i.jsx)(l.q.path,{d:(0,l.to)(c.t,o),opacity:c.opacity,stroke:"black",fill:n,fillOpacity:.8,strokeWidth:1})},u=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],h=e=>{let{width:t,height:n,data:a,type:s}=e,l=a.sort((e,t)=>t.value-e.value),h=l.map(e=>e.name),d=Math.min(t,n)/2-30,p=(0,r.useMemo)(()=>{let e=o.ve8().value(e=>e.value||0).sort(null);return e(l)},[a]),x=t-30-30,g=n-30-30,m=(0,r.useMemo)(()=>o.tiA().domain(h).range([0,g]).padding(.3),[a,n]),f=(0,r.useMemo)(()=>{let e=o.Fp7(a.map(e=>e.value||0));return o.BYU().domain([0,e||10]).range([0,x])},[a,t]),v=p.map((e,r)=>{let a=o.Nb1(),l=a({innerRadius:40,outerRadius:d,startAngle:e.startAngle,endAngle:e.endAngle}),h=m(e.data.name)-n/2,p=f(e.value)-t/2,x=f(0)-t/2,g=m.bandwidth(),v="M ".concat(x," ").concat(h," L ").concat(p," ").concat(h," L ").concat(p," ").concat(h+g," L ").concat(x," ").concat(h+g," Z");return(0,i.jsx)(c,{path:"pie"===s?l:v,color:u[r]},e.data.name)});return(0,i.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,i.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:v})})},d={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"0px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},p=e=>{let{width:t,height:n}=e,[o,s]=(0,r.useState)("pie");return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{height:50},children:[(0,i.jsx)("button",{style:d,onClick:()=>s("pie"),children:"Pie chart"}),(0,i.jsx)("button",{style:d,onClick:()=>s("bar"),children:"Barplot"})]}),(0,i.jsx)(h,{width:t,height:n-50,data:a,type:o})]})},x=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(p,{width:t,height:n})}},73367:function(e,t,n){"use strict";n.d(t,{H:function(){return p}});var i=n(85893),r=n(67294);let a=[{x:1,melanie:90,yan:34},{x:2,melanie:12,yan:24},{x:3,melanie:34,yan:14},{x:4,melanie:53,yan:45},{x:5,melanie:52,yan:45},{x:6,melanie:9,yan:67},{x:7,melanie:18,yan:67},{x:8,melanie:78,yan:87},{x:9,melanie:28,yan:87},{x:10,melanie:34,yan:45}];var o=n(43950),s=n(2719);let l={top:30,right:30,bottom:50,left:50},c=e=>{let{width:t,height:n,data:a,selectedGroup:s}=e,c=(0,r.useRef)(null),h=t-l.right-l.left,d=n-l.top-l.bottom,p=(0,r.useMemo)(()=>o.BYU().domain([0,100]).range([d,0]),[a,n]),x=(0,r.useMemo)(()=>o.BYU().domain([0,10]).range([0,h]),[a,t]);(0,r.useEffect)(()=>{let e=o.Ys(c.current);e.selectAll("*").remove();let t=o.LLu(x);e.append("g").attr("transform","translate(0,"+d+")").call(t);let n=o.y4O(p);e.append("g").call(n)},[x,p,d]);let g=o.jvg().x(e=>x(e.x)).y(e=>p(e[s])),m=g(a);return m?(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:t,height:n,children:[(0,i.jsx)("g",{width:h,height:d,transform:"translate(".concat([l.left,l.top].join(","),")"),children:(0,i.jsx)(u,{path:m,color:"yan"===s?"#69b3a2":"#9a6fb0"})}),(0,i.jsx)("g",{width:h,height:d,ref:c,transform:"translate(".concat([l.left,l.top].join(","),")")})]})}):null},u=e=>{let{path:t,color:n}=e,r=(0,s.q_)({to:{path:t,color:n},config:{friction:100}});return(0,i.jsx)(s.q.path,{d:r.path,fill:"none",stroke:n,strokeWidth:2})},h={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},d=e=>{let{width:t,height:n}=e,[o,s]=(0,r.useState)("melanie");return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{height:50},children:[(0,i.jsx)("button",{style:h,onClick:()=>s("melanie"),children:"Melanie"}),(0,i.jsx)("button",{style:h,onClick:()=>s("yan"),children:"Yan"})]}),(0,i.jsx)(c,{width:t,height:n-50,data:a,selectedGroup:o})]})},p=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(d,{width:t,height:n})}},65079:function(e,t,n){"use strict";n.d(t,{v:function(){return f}});var i=n(85893),r=n(67294),a=n(43950),o=n(40295),s=n.n(o),l=n(95334),c=n(86824);let u=e=>{let{path:t,color:n}=e,a=(0,r.useRef)(t),o=(0,r.useMemo)(()=>(0,l.interpolate)(a.current,t),[t]),u=(0,c.q_)({from:{t:0},to:{t:1},reset:a.current!==t,onChange:e=>{let{t}=e;a.current=o(t||1)},config:{friction:100,bounce:0}});return(0,i.jsx)(c.q.path,{d:(0,c.to)(u.t,o),className:s().shape,opacity:1,stroke:"grey",fill:n,fillOpacity:.8,cursor:"pointer"})},h={top:30,right:30,bottom:50,left:50},d={silouhette:a.KuJ,wiggle:a.YGu,none:a.HLf,diverging:a.W$j,expand:a.pBl},p={curveBasis:a.$0Z,bumpX:a.qpX,bumpY:a.u93,curveCardinal:a.YY7,catMullRom:a.zgE,curveLinear:a.c_6,curveNatural:a.SxZ,curveStep:a.eA_},x=e=>{let{width:t,height:n,data:r,offsetType:o,curveType:l}=e,c=t-h.right-h.left,x=n-h.top-h.bottom,g=["groupA","groupB","groupC","groupD"],m=a.knu().keys(g).order(a.Qxt).offset(d[o]),f=m(r),v=f.flatMap(e=>e.map(e=>e[1])),j=f.flatMap(e=>e.map(e=>e[0])),b=a.BYU().domain([Math.min(...j),Math.max(...v)]).range([x,0]),[y,w]=a.Wem(r,e=>e.x),k=a.BYU().domain([y||0,w||0]).range([0,c]),N=a.PKp().domain(g).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]),C=a.SOn().x(e=>k(e.data.x)).y1(e=>b(e[1])).y0(e=>b(e[0])).curve(p[l]),z=f.map((e,t)=>{let n=C(e);return n?(0,i.jsx)(u,{path:n,color:N(e.key)},t):null}),B=k.ticks(5).map((e,t)=>(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:k(e),x2:k(e),y1:0,y2:x,stroke:"#808080",opacity:.2}),(0,i.jsx)("text",{x:k(e),y:x+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t));return(0,i.jsx)("div",{children:(0,i.jsx)("svg",{width:t,height:n,children:(0,i.jsxs)("g",{width:c,height:x,transform:"translate(".concat([h.left,h.top].join(","),")"),children:[B,(0,i.jsx)("g",{className:s().container,children:z})]})})})},g=[{x:1,groupA:38,groupB:19,groupC:9,groupD:4},{x:2,groupA:16,groupB:14,groupC:96,groupD:40},{x:3,groupA:164,groupB:96,groupC:64,groupD:40},{x:4,groupA:32,groupB:65,groupC:64,groupD:40},{x:5,groupA:12,groupB:80,groupC:14,groupD:10},{x:6,groupA:12,groupB:180,groupC:14,groupD:10},{x:7,groupA:12,groupB:70,groupC:14,groupD:10},{x:8,groupA:12,groupB:30,groupC:24,groupD:10},{x:9,groupA:190,groupB:18,groupC:34,groupD:10},{x:10,groupA:10,groupB:18,groupC:4,groupD:10}],m=e=>{let{width:t=700,height:n=400}=e,[a,o]=(0,r.useState)("silouhette"),[s,l]=(0,r.useState)("catMullRom");return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{height:250,display:"flex",marginTop:20,alignItems:"center"},children:[(0,i.jsx)("span",{style:{fontSize:14,marginRight:5},children:"Offset type"}),(0,i.jsxs)("select",{onChange:e=>{o(e.target.value)},value:a,style:{fontSize:14},children:[(0,i.jsx)("option",{value:"silouhette",children:"Silouhette"}),(0,i.jsx)("option",{value:"none",children:"None"}),(0,i.jsx)("option",{value:"wiggle",children:"Wiggle"}),(0,i.jsx)("option",{value:"diverging",children:"Diverging"}),(0,i.jsx)("option",{value:"expand",children:"Expand"})]}),(0,i.jsx)("span",{style:{fontSize:14,marginRight:5,marginLeft:35},children:"Curve type"}),(0,i.jsxs)("select",{onChange:e=>{l(e.target.value)},value:s,style:{fontSize:14},children:[(0,i.jsx)("option",{value:"curveBasis",children:"Cubic basis spline"}),(0,i.jsx)("option",{value:"bumpX",children:"Bezier Curve Horizontal"}),(0,i.jsx)("option",{value:"bumpY",children:"Bezier Curve Vertical"}),(0,i.jsx)("option",{value:"curveCardinal",children:"Cubic cardinal spline "}),(0,i.jsx)("option",{value:"catMullRom",children:"Catmull–Rom spline"}),(0,i.jsx)("option",{value:"curveLinear",children:"Polyline"}),(0,i.jsx)("option",{value:"curveNatural",children:"Natural cubic spline"}),(0,i.jsx)("option",{value:"curveStep",children:"Step function"})]})]}),(0,i.jsx)(x,{data:g,width:t,height:n-250,offsetType:a,curveType:s})]})},f=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(m,{width:t,height:n})}},40295:function(e){e.exports={container:"streamgraph_container__MBKks",shape:"streamgraph_shape__C8gBF"}}},function(e){e.O(0,[2343,7754,3950,2719,7303,8190,3710,9774,2888,179],function(){return e(e.s=61834)}),_N_E=e.O()}]);