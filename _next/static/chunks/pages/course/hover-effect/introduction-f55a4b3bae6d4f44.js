(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3858],{7202:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/hover-effect/introduction",function(){return n(60430)}])},63265:function(e,t,n){"use strict";n.d(t,{D:function(){return r}});var i=n(85893);let r=e=>{let{text:t}=e;return(0,i.jsxs)("div",{className:"hidden absolute w-60 top-1/2 -right-10 border-l text-card-foreground border-card-foreground h-28 translate-x-full -translate-y-1/2 xl:flex items-center ",children:[(0,i.jsx)("span",{className:"",children:"→"}),(0,i.jsx)("span",{className:"text-sm ml-2 opacity-70",children:t})]})}},22725:function(e,t,n){"use strict";n.d(t,{SP:function(){return c},dr:function(){return o},mQ:function(){return l},nU:function(){return d}});var i=n(85893),r=n(67294),a=n(60434),s=n(77522);let l=a.fC,o=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,i.jsx)(a.aV,{ref:t,className:(0,s.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",n),...r})});o.displayName=a.aV.displayName;let c=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,i.jsx)(a.xz,{ref:t,className:(0,s.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",n),...r})});c.displayName=a.xz.displayName;let d=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,i.jsx)(a.VY,{ref:t,className:(0,s.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",n),...r})});d.displayName=a.VY.displayName},60430:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var i=n(85893);n(67294);var r=n(43710),a=n(41843),s=n(11236),l=n(63265),o=n(22725),c=n(421),d=n(60390),h=n(7032);function u(){let e=s.Y.find(e=>"/course/hover-effect/introduction"===e.link);return e?(0,i.jsxs)(a.p,{title:e.name,seoDescription:"",nextTocItem:s.Y.find(e=>"/course/hover-effect/css-pseudo-class"===e.link),previousTocItem:s.Y.find(e=>"/course/responsiveness/common-pitfalls"===e.link),children:[(0,i.jsx)(r.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,selectedLesson:e,description:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"In the previous modules, you learned how to create a wide variety of static charts. \uD83D\uDC4F"}),(0,i.jsxs)("p",{children:["However, ",(0,i.jsx)("b",{children:"interactivity"})," is essential web applications. Adding ",(0,i.jsx)("b",{children:"hover effects"})," significantly enhances the user experience by highlighting specific series on the chart."]}),(0,i.jsxs)("p",{children:["In this module, we'll explore ",(0,i.jsx)("b",{children:"several strategies"})," for implementing hover effects using both CSS and React. Before diving into the code, let's ensure we have a clear understanding of what hover effects are."]})]})}),(0,i.jsx)("h2",{children:"Definition"}),(0,i.jsxs)("p",{children:["A ",(0,i.jsx)("b",{children:"hover effect"})," is a visual change that occurs when a user moves their cursor over a specific element on a webpage."]}),(0,i.jsx)("div",{className:"relative",children:(0,i.jsx)(l.D,{text:(0,i.jsx)("p",{children:"Technically speaking, tooltip are also a hover effect. But we will talk about them in a dedicated section."})})}),(0,i.jsx)("p",{children:"When implementing a hover effect, you should be careful about:"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Design"}),": hover effect is visually appealing and enhances the user experience. It is consistent with the overall design of your application and does not distract or confuse the user."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Performance"}),": hover effect is fast: no lag or delay. It does not significantly impact the performance of your application, especially when dealing with large datasets or complex viz."]})]}),(0,i.jsx)("h2",{children:"Three Types of Hover Effects"}),(0,i.jsxs)("p",{children:["In my opinion, there are three main types of hover effects: those that only modify the ",(0,i.jsx)("b",{children:"hovered graph item"}),", those that modify"," ",(0,i.jsx)("b",{children:"other graph markers"}),", and those that affect"," ",(0,i.jsx)("b",{children:"other related elements"})," in the user interface."]}),(0,i.jsx)("p",{children:"Click the button below to see examples of all three types:"}),(0,i.jsx)("p",{children:(0,i.jsx)("br",{})}),(0,i.jsxs)(o.mQ,{defaultValue:"type1",children:[(0,i.jsxs)(o.dr,{className:"grid w-full grid-cols-3",children:[(0,i.jsx)(o.SP,{value:"type1",children:"Hovered item only"}),(0,i.jsx)(o.SP,{value:"type2",children:"All graph items"}),(0,i.jsx)(o.SP,{value:"type3",children:"Other related elements"})]}),(0,i.jsx)(o.nU,{value:"type1",children:(0,i.jsxs)("div",{className:"w-full flex items-center",children:[(0,i.jsx)(c.z,{width:400,height:400}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{children:["Observe this graph: when you hover over a circle,"," ",(0,i.jsx)("b",{children:"its style changes"})," slightly!"]}),(0,i.jsxs)("p",{children:["While this isn't the most dramatic visual effect, it is very"," ",(0,i.jsx)("b",{children:"easy"})," to implement using a single CSS"," ",(0,i.jsx)("i",{children:"pseudo-element"}),"."]}),(0,i.jsx)("p",{children:"We'll learn how to implement this in the next lesson."})]})]})}),(0,i.jsx)(o.nU,{value:"type2",children:(0,i.jsxs)("div",{className:"w-full flex items-center gap-4 mt-8",children:[(0,i.jsx)(d.C,{width:350,height:350}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{children:["This time, hovering over a group will highlight it"," ",(0,i.jsx)("b",{children:"while dimming all the other groups"}),"."]}),(0,i.jsxs)("p",{children:["This effect can be achieved solely with CSS (if the same effect is applied to all other groups) ",(0,i.jsx)("b",{children:"or"})," by toggling a CSS class using JavaScript."]})]})]})}),(0,i.jsxs)(o.nU,{value:"type3",children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("br",{}),"Sometimes you may want to modify a UI element that is"," ",(0,i.jsx)("b",{children:"not part of your chart"})," renderer. In this case, CSS alone won't suffice. You need to set a ",(0,i.jsx)("b",{children:"React state"})," at the top of your application tree to update all the necessary elements on hover."]}),(0,i.jsx)(h.e,{width:700,height:350}),(0,i.jsx)("p",{children:"In the graph above, hovering over chart #1 will also update chart #2, thanks to a shared state. This will be covered in the final lesson of this module."})]})]}),(0,i.jsx)("h2",{children:"Let's code"}),(0,i.jsx)("p",{children:"Enough theory."}),(0,i.jsx)("p",{children:"Let's dive into the simplest hover effect you can create: just a few lines of CSS using pseudo-elements."})]}):null}},7032:function(e,t,n){"use strict";n.d(t,{e:function(){return f}});var i=n(85893),r=n(67294);let a=[{x:1,y:40},{x:2,y:12},{x:3,y:34},{x:4,y:33},{x:5,y:22},{x:6,y:9},{x:7,y:18},{x:8,y:78},{x:9,y:28},{x:10,y:34}],s=[{x:1,y:90},{x:2,y:74},{x:3,y:84},{x:4,y:45},{x:5,y:65},{x:6,y:96},{x:7,y:65},{x:8,y:75},{x:9,y:58},{x:10,y:36}];var l=n(88657),o=n(86824);let c={top:30,right:30,bottom:50,left:50},d=e=>{var t;let{width:n,height:a,data:s,cursorPosition:o,setCursorPosition:d,color:u}=e,f=(0,r.useRef)(null),x=n-c.right-c.left,p=a-c.top-c.bottom,[m,v]=l.Wem(s,e=>e.y),y=(0,r.useMemo)(()=>l.BYU().domain([0,v||0]).range([p,0]),[s,a]),[g,j]=l.Wem(s,e=>e.x),b=(0,r.useMemo)(()=>l.BYU().domain([0,j||0]).range([0,x]),[s,n]);(0,r.useEffect)(()=>{let e=l.Ys(f.current);e.selectAll("*").remove();let t=l.LLu(b);e.append("g").attr("transform","translate(0,"+p+")").call(t);let n=l.y4O(y);e.append("g").call(n)},[b,y,p]);let w=l.jvg().x(e=>b(e.x)).y(e=>y(e.y)),N=w(s);if(!N)return null;let C=e=>{let t=b.invert(e),n=1/0,i=null;for(let e of s){let r=Math.abs(e.x-t);r<n&&(n=r,i=e)}return i};return(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:n,height:a,children:[(0,i.jsxs)("g",{width:x,height:p,transform:"translate(".concat([c.left,c.top].join(","),")"),children:[(0,i.jsx)("path",{d:N,opacity:1,stroke:u,fill:"none",strokeWidth:2}),o&&(0,i.jsx)(h,{height:p,x:o,y:y(null===(t=C(o))||void 0===t?void 0:t.y),color:u}),(0,i.jsx)("rect",{x:0,y:0,width:x,height:p,onMouseMove:e=>{let t=e.currentTarget.getBoundingClientRect(),n=e.clientX-t.left,i=C(n);d(b(i.x))},onMouseLeave:()=>d(null),visibility:"hidden",pointerEvents:"all"})]}),(0,i.jsx)("g",{width:x,height:p,ref:f,transform:"translate(".concat([c.left,c.top].join(","),")")})]})})},h=e=>{let{x:t,y:n,height:r,color:a}=e,s=(0,o.q_)({to:{x:t,y:n}});return s.x?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.q.line,{x1:s.x,x2:s.x,y1:0,y2:r,stroke:"black",strokeWidth:1}),(0,i.jsx)("circle",{cx:t,cy:n,r:5,fill:a})]}):null},u=e=>{let{width:t=700,height:n=400}=e,[l,o]=(0,r.useState)(null);return(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)(d,{data:a,width:t/2,height:n,cursorPosition:l,setCursorPosition:o,color:"#e85252"}),(0,i.jsx)(d,{data:s,width:t/2,height:n,cursorPosition:l,setCursorPosition:o,color:"#6689c6"})]})},f=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(u,{width:t,height:n})}},60390:function(e,t,n){"use strict";n.d(t,{C:function(){return h}});var i=n(85893);let r={type:"node",name:"boss",value:0,children:[{type:"node",name:"Team Dataviz",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53}]},{type:"node",name:"Team DevOps",value:0,children:[{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12}]},{type:"node",name:"Team Sales",value:0,children:[{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]}]};var a=n(67294),s=n(88657),l=n(87552),o=n.n(l);let c=["#e0ac2b","#6689c6","#a4c969","#e85252","#9a6fb0","#a53253","#7f7f7f"],d=e=>{let{width:t,height:n,data:r}=e,l=(0,a.useMemo)(()=>s.bT9(r).sum(e=>e.value),[r]),d=null==l?void 0:null===(h=l.children)||void 0===h?void 0:h.map(e=>e.data.name);var h,u=s.PKp().domain(d||[]).range(c);let f=(0,a.useMemo)(()=>{let e=s.pNI().size([t,n]).padding(4);return e(l)},[l,t,n]),x=f.leaves().map((e,t)=>{var n;let r=null===(n=e.parent)||void 0===n?void 0:n.data.name;return(0,i.jsxs)("g",{className:o().rectangle,children:[(0,i.jsx)("rect",{x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,stroke:"transparent",fill:u(r),className:"opacity-80 hover:opacity-100"}),(0,i.jsx)("text",{x:e.x0+3,y:e.y0+3,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-bold",children:e.data.name}),(0,i.jsx)("text",{x:e.x0+3,y:e.y0+18,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-light",children:e.data.value})]},e.id)});return(0,i.jsx)("div",{children:(0,i.jsx)("svg",{width:t,height:n,className:o().container,children:x})})},h=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(d,{data:r,width:t,height:n})}},87552:function(e){e.exports={container:"treemap_container__nYrjn",rectangle:"treemap_rectangle__xOWar"}},86824:function(e,t,n){"use strict";n.d(t,{q:function(){return i.q},q_:function(){return i.q_},to:function(){return i.to},vc:function(){return i.vc}});var i=n(52236)},60434:function(e,t,n){"use strict";n.d(t,{VY:function(){return I},aV:function(){return M},fC:function(){return _},xz:function(){return D}});var i=n(67294),r=n(36206),a=n(25360),s=n(66681),l=n(29115),o=n(75320),c=n(78990),d=n(77342),h=n(91276),u=n(85893),f="Tabs",[x,p]=(0,a.b)(f,[s.Pc]),m=(0,s.Pc)(),[v,y]=x(f),g=i.forwardRef((e,t)=>{let{__scopeTabs:n,value:i,onValueChange:r,defaultValue:a,orientation:s="horizontal",dir:l,activationMode:f="automatic",...x}=e,p=(0,c.gm)(l),[m,y]=(0,d.T)({prop:i,onChange:r,defaultProp:a});return(0,u.jsx)(v,{scope:n,baseId:(0,h.M)(),value:m,onValueChange:y,orientation:s,dir:p,activationMode:f,children:(0,u.jsx)(o.WV.div,{dir:p,"data-orientation":s,...x,ref:t})})});g.displayName=f;var j="TabsList",b=i.forwardRef((e,t)=>{let{__scopeTabs:n,loop:i=!0,...r}=e,a=y(j,n),l=m(n);return(0,u.jsx)(s.fC,{asChild:!0,...l,orientation:a.orientation,dir:a.dir,loop:i,children:(0,u.jsx)(o.WV.div,{role:"tablist","aria-orientation":a.orientation,...r,ref:t})})});b.displayName=j;var w="TabsTrigger",N=i.forwardRef((e,t)=>{let{__scopeTabs:n,value:i,disabled:a=!1,...l}=e,c=y(w,n),d=m(n),h=S(c.baseId,i),f=T(c.baseId,i),x=i===c.value;return(0,u.jsx)(s.ck,{asChild:!0,...d,focusable:!a,active:x,children:(0,u.jsx)(o.WV.button,{type:"button",role:"tab","aria-selected":x,"aria-controls":f,"data-state":x?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:h,...l,ref:t,onMouseDown:(0,r.M)(e.onMouseDown,e=>{a||0!==e.button||!1!==e.ctrlKey?e.preventDefault():c.onValueChange(i)}),onKeyDown:(0,r.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&c.onValueChange(i)}),onFocus:(0,r.M)(e.onFocus,()=>{let e="manual"!==c.activationMode;x||a||!e||c.onValueChange(i)})})})});N.displayName=w;var C="TabsContent",k=i.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,forceMount:a,children:s,...c}=e,d=y(C,n),h=S(d.baseId,r),f=T(d.baseId,r),x=r===d.value,p=i.useRef(x);return i.useEffect(()=>{let e=requestAnimationFrame(()=>p.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.jsx)(l.z,{present:a||x,children:({present:n})=>(0,u.jsx)(o.WV.div,{"data-state":x?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":h,hidden:!n,id:f,tabIndex:0,...c,ref:t,style:{...e.style,animationDuration:p.current?"0s":void 0},children:n&&s})})});function S(e,t){return`${e}-trigger-${t}`}function T(e,t){return`${e}-content-${t}`}k.displayName=C;var _=g,M=b,D=N,I=k}},function(e){e.O(0,[2343,7754,8657,2236,8190,3710,2830,9774,2888,179],function(){return e(e.s=7202)}),_N_E=e.O()}]);