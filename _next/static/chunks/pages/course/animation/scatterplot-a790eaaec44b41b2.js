(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4365],{8971:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(91373);/**
 * @license lucide-react v0.418.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,a.Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},35642:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/animation/scatterplot",function(){return n(56139)}])},41843:function(e,t,n){"use strict";n.d(t,{p:function(){return c}});var a=n(85893),r=n(49700),i=n(63476),o=n(17414),l=n(41664),s=n.n(l);let c=e=>{let{children:t,title:n,seoDescription:l,previousTocItem:c,nextTocItem:d}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.A,{title:n,seoDescription:l}),(0,a.jsx)(r.Z,{}),(0,a.jsx)("div",{className:"wrapper",children:t}),(0,a.jsxs)("div",{className:"flex justify-center items-center space-x-6 my-24 py-12  bg-muted/50",children:[c?(0,a.jsxs)(s(),{href:c.link,className:"text-gray-500 no-underline flex flex-col justify-start items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted ",children:[(0,a.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text",children:"← Previous"}),(0,a.jsx)("p",{children:c.name})]}):(0,a.jsx)("div",{className:"w-96"}),d&&(0,a.jsxs)(s(),{href:d.link,className:"text-gray-500 no-underline flex flex-col justify-start w-96 h-32 border-l border-black  p-8 hover:bg-muted ",children:[(0,a.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text",children:"Next →"}),(0,a.jsx)("p",{children:d.name})]})]}),(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)(i.Z,{})})]})}},7826:function(e,t,n){"use strict";n.d(t,{Qd:function(){return c},UQ:function(){return s},o4:function(){return d},vF:function(){return u}});var a=n(85893),r=n(67294),i=n(47398),o=n(8971),l=n(77522);let s=i.fC,c=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(i.ck,{ref:t,className:(0,l.cn)("border-b",n),...r})});c.displayName="AccordionItem";let d=r.forwardRef((e,t)=>{let{className:n,children:r,...s}=e;return(0,a.jsx)(i.h4,{className:"flex mt-0 pb-0 font-normal",children:(0,a.jsxs)(i.xz,{ref:t,className:(0,l.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",n),...s,children:[r,(0,a.jsx)(o.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});d.displayName=i.xz.displayName;let u=r.forwardRef((e,t)=>{let{className:n,children:r,...o}=e;return(0,a.jsx)(i.VY,{ref:t,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...o,children:(0,a.jsx)("div",{className:(0,l.cn)("pb-4 pt-0",n),children:r})})});u.displayName=i.VY.displayName},56139:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(85893);n(67294);var r=n(43710),i=n(41843),o=n(11236),l=n(81122),s=n(41664),c=n.n(s),d=n(7826),u=n(3572),h=n(2274),p=n(5178),m=n(46228),x=n(85081);function f(){let e=o.Y.find(e=>"/course/animation/scatterplot"===e.link);return e?(0,a.jsxs)(i.p,{title:e.name,seoDescription:"",nextTocItem:o.Y.find(e=>"/course/animation/enter-update-exit"===e.link),previousTocItem:o.Y.find(e=>"/course/animation/react-spring-for-dataviz"===e.link),children:[(0,a.jsx)(r.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,selectedLesson:e,description:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["In the previous lesson, we explored animating SVG and HTML elements with ",(0,a.jsx)("code",{children:"react-spring"}),"."]}),(0,a.jsxs)("p",{children:["Now, let's apply that knowledge to a real-world graph by animating the transition between two datasets on a"," ",(0,a.jsx)(c(),{href:"/scatter-plot",children:"scatterplot"}),"."]})]})}),(0,a.jsx)("h2",{children:"Most basic example"}),(0,a.jsx)("h2",{id:"transition",children:"Smooth dataset transition"}),(0,a.jsxs)("p",{children:["How can we ",(0,a.jsx)("b",{children:"smoothly animate"})," the transition between 2 datasets on a bubble chart? The chart used in this blog post can be drawn for several different years. You can use the select button on top to select the year, and the bubbles will ",(0,a.jsx)("b",{children:"animate"})," to their new position."]}),(0,a.jsxs)("p",{children:["This is possible thanks to the"," ",(0,a.jsx)("a",{href:"https://react-spring.dev/",children:"react spring"})," library. Basically, instead of rendering usual ",(0,a.jsx)("code",{children:"circle"})," elements, the library provides an ",(0,a.jsx)("code",{children:"animated.circle"})," element, that is linked to a"," ",(0,a.jsx)("code",{children:"useSpring"}),"hook."]}),(0,a.jsxs)("p",{children:["This is what the ",(0,a.jsx)("code",{children:"Circle"})," component I use looks like:"]}),(0,a.jsx)(d.UQ,{startOpen:!1,title:(0,a.jsxs)("span",{children:[(0,a.jsx)("code",{children:"Circle"}),": a component that animates the transition of a"," ",(0,a.jsx)("code",{children:"circle"})]}),children:(0,a.jsx)(u.d,{code:v})}),(0,a.jsx)(l.$,{VizComponent:h.t,vizName:"BubblePlotDatasetTransition",maxWidth:600,height:500,caption:"A bubble chart component that smoothly animates changes between datasets."}),(0,a.jsx)("h2",{children:"Exercices"}),(0,a.jsx)(l.$,{VizComponent:p.O,vizName:"HistogramDatasetTransition",maxWidth:900,height:400,caption:"A histogram that smoothly transition from 1 dataset to another"}),(0,a.jsx)(l.$,{vizName:"BarplotDatasetTransition",VizComponent:m.P,height:400,maxWidth:600,caption:"Most basic barplot built with d3.js for scales, and react for rendering"}),(0,a.jsx)(l.$,{vizName:"LollipopDatasetTransition",VizComponent:x.$,height:400,maxWidth:600,caption:"A lollipop chart with smooth transition between dataset."}),(0,a.jsx)(l.$,{VizComponent:h.t,vizName:"BubblePlotDatasetTransition",maxWidth:600,height:500,caption:"A bubble chart component that smoothly animates changes between datasets."}),(0,a.jsx)("p",{children:"Ok but there is a problem now: how do we deal with the data points that enter the dataset, or the one that exit?"}),(0,a.jsx)("p",{children:"That's the plan for the next lesson."})]}):null}let v='\nimport { useSpring, animated } from "@react-spring/web";\n\ntype CircleProps = {\n  color: string;\n  r: number;\n  cx: number;\n  cy: number;\n};\n\nexport const Circle = (props: CircleProps) => {\n  const { cx, cy, r, color } = props;\n\n  const springProps = useSpring({\n    to: { cx, cy, r },\n    config: {\n      friction: 30,\n    },\n    delay: 0,\n  });\n\n  return (\n    <animated.circle\n      cx={springProps.cx}\n      cy={springProps.cy}\n      r={springProps.r}\n      opacity={0.7}\n      stroke={color}\n      fill={color}\n      fillOpacity={0.3}\n      strokeWidth={1}\n    />\n  );\n};\n'.trim()},46228:function(e,t,n){"use strict";n.d(t,{P:function(){return m}});var a=n(85893),r=n(67294);let i=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"M\xe9lanie",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Paul",value:2}],o=[{name:"Mark",value:9},{name:"Robert",value:19},{name:"Emily",value:31},{name:"Marion",value:23},{name:"Nicolas",value:38},{name:"M\xe9lanie",value:123},{name:"Gabriel",value:4},{name:"Jean",value:23},{name:"Christophe",value:22}];var l=n(2354),s=n(2719);let c=e=>{var t,n,r,i;let{name:o,value:l,barHeight:c,barWidth:d,x:u,y:h}=e,p=(0,s.q_)({from:{value:0,barWidth:0,valueOpacity:0},to:{value:l,barWidth:d,valueOpacity:d>80?1:0,y:h},config:{friction:100}});return(0,a.jsxs)("g",{children:[(0,a.jsx)(s.q.rect,{x:u,y:p.y,width:p.barWidth,height:c,opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1}),(0,a.jsx)(s.q.text,{x:null===(t=p.barWidth)||void 0===t?void 0:t.to(e=>e-7),y:null===(n=p.y)||void 0===n?void 0:n.to(e=>e+c/2),textAnchor:"end",alignmentBaseline:"central",fontSize:12,opacity:p.valueOpacity,children:null===(r=p.value)||void 0===r?void 0:r.to(e=>e.toFixed(0))}),(0,a.jsx)(s.q.text,{x:u+7,y:null===(i=p.y)||void 0===i?void 0:i.to(e=>e+c/2),textAnchor:"start",alignmentBaseline:"central",fontSize:12,children:o})]})},d={top:30,right:30,bottom:30,left:30},u=e=>{let{width:t,height:n,data:i}=e,o=t-d.right-d.left,s=n-d.top-d.bottom,u=i.sort((e,t)=>t.value-e.value).map(e=>e.name),h=(0,r.useMemo)(()=>l.tiA().domain(u).range([0,s]).padding(.3),[i,n]),p=l.Fp7(i.map(e=>e.value)),m=l.BYU().domain([0,p]).range([0,o]),x=i.map(e=>(0,a.jsx)(c,{name:e.name,value:e.value,barHeight:h.bandwidth(),barWidth:m(e.value),x:m(0),y:h(e.name)},e.name));return(0,a.jsx)("div",{children:(0,a.jsx)("svg",{width:t,height:n,children:(0,a.jsx)("g",{width:o,height:s,transform:"translate(".concat([d.left,d.top].join(","),")"),children:x})})})},h={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},p=e=>{let{width:t,height:n}=e,[l,s]=(0,r.useState)(i);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{style:{height:50},children:[(0,a.jsx)("button",{style:h,onClick:()=>s(i),children:"Data 1"}),(0,a.jsx)("button",{style:h,onClick:()=>s(o),children:"Data 2"})]}),(0,a.jsx)(u,{width:t,height:n-50,data:l})]})},m=e=>{let{width:t=700,height:n=400}=e;return t&&n?(0,a.jsx)(p,{width:t,height:n}):null}},5178:function(e,t,n){"use strict";n.d(t,{O:function(){return x}});var a=n(85893),r=n(67294);let i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.sqrt(-2*Math.log(1-Math.random()))*Math.cos(2*Math.PI*Math.random())*t+e},o=Array.from({length:1e3},()=>i(60,10)),l=Array.from({length:1e3},()=>i(40,10));var s=n(2354),c=n(2719);let d=e=>{let{x:t,y:n,width:r,height:i}=e,o=(0,c.q_)({to:{x:t,y:n,width:r,height:i},config:{friction:30},delay:t});return void 0===n?null:(0,a.jsx)(c.q.rect,{x:o.x,y:o.y,width:o.width,height:o.height,opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1})},u={top:30,right:30,bottom:40,left:50},h=e=>{let{width:t,height:n,data:i}=e,o=(0,r.useRef)(null),l=t-u.right-u.left,c=n-u.top-u.bottom,h=[0,100],p=(0,r.useMemo)(()=>s.BYU().domain(h).range([10,l]),[i,t]),m=(0,r.useMemo)(()=>{let e=s.Ly_().value(e=>e).domain(h).thresholds(p.ticks(70));return e(i)},[p]),x=(0,r.useMemo)(()=>{let e=Math.max(...m.map(e=>null==e?void 0:e.length));return s.BYU().range([c,0]).domain([0,e]).nice()},[i,n]);(0,r.useEffect)(()=>{let e=s.Ys(o.current);e.selectAll("*").remove();let t=s.LLu(p);e.append("g").attr("transform","translate(0,"+c+")").call(t);let n=s.y4O(x);e.append("g").call(n)},[p,x,c]);let f=m.map((e,t)=>{let{x0:n,x1:r}=e;return void 0==n||void 0==r?null:(0,a.jsx)(d,{x:p(n)+2,width:p(r)-p(n)-4,y:x(e.length),height:c-x(e.length)},t)});return(0,a.jsxs)("svg",{width:t,height:n,children:[(0,a.jsx)("g",{width:l,height:c,transform:"translate(".concat([u.left,u.top].join(","),")"),children:f}),(0,a.jsx)("g",{width:l,height:c,ref:o,transform:"translate(".concat([u.left,u.top].join(","),")")})]})},p={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"0px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},m=e=>{let{width:t,height:n}=e,[i,s]=(0,r.useState)(o);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{style:{height:50},children:[(0,a.jsx)("button",{style:p,onClick:()=>s(o),children:"Data 1"}),(0,a.jsx)("button",{style:p,onClick:()=>s(l),children:"Data 2"})]}),(0,a.jsx)(h,{width:t,height:n-50,data:i})]})},x=e=>{let{width:t=700,height:n=400}=e;return(0,a.jsx)(m,{width:t,height:n})}},85081:function(e,t,n){"use strict";n.d(t,{$:function(){return m}});var a=n(85893),r=n(67294);let i=[{name:"Mark",value1:87,value2:90},{name:"Robert",value1:10,value2:12},{name:"Emily",value1:67,value2:34},{name:"Marion",value1:34,value2:53},{name:"Nicolas",value1:87,value2:98},{name:"M\xe9lanie",value1:12,value2:23},{name:"Gabriel",value1:8,value2:18},{name:"Jean",value1:79,value2:104},{name:"Paul",value1:10,value2:80}],o=[{name:"Mark",value1:1,value2:9},{name:"Robert",value1:18,value2:19},{name:"Emily",value1:12,value2:31},{name:"Marion",value1:54,value2:23},{name:"Nicolas",value1:14,value2:38},{name:"M\xe9lanie",value1:87,value2:123},{name:"Gabriel",value1:2,value2:4},{name:"Jean",value1:12,value2:23},{name:"Christophe",value1:18,value2:22}];var l=n(2354),s=n(2719);let c=e=>{let{name:t,xValue1:n,xValue2:r,y:i}=e,o=(0,s.q_)({from:{xValue1:0,xValue2:0,valueOpacity:0},to:{xValue1:n,xValue2:r,valueOpacity:1,y:i},config:{friction:100}});return(0,a.jsxs)("g",{children:[(0,a.jsx)(s.q.line,{x1:o.xValue1,y1:o.y,y2:o.y,x2:o.xValue2,opacity:.7,stroke:"grey",strokeWidth:1}),(0,a.jsx)(s.q.circle,{cy:o.y,cx:o.xValue1,opacity:.7,stroke:"#69b3a2",fill:"#69b3a2",strokeWidth:1,r:5}),(0,a.jsx)(s.q.circle,{cy:o.y,cx:o.xValue2,opacity:.7,stroke:"#9d174d",fill:"#9d174d",strokeWidth:1,r:5}),(0,a.jsx)(s.q.text,{x:-7,y:o.y,textAnchor:"end",alignmentBaseline:"central",fontSize:12,children:t})]})},d={top:30,right:30,bottom:30,left:70},u=e=>{let{width:t,height:n,data:i}=e,o=t-d.right-d.left,s=n-d.top-d.bottom,u=i.map(e=>e.name).sort(),h=(0,r.useMemo)(()=>l.tiA().domain(u).range([0,s]),[i,n]),p=(0,r.useMemo)(()=>l.BYU().domain([0,120]).range([0,o]),[i,t]),m=i.map(e=>(0,a.jsx)(c,{name:e.name,xValue1:p(e.value1),xValue2:p(e.value2),y:h(e.name)},e.name)),x=p.ticks(5).slice(1).map((e,t)=>(0,a.jsxs)("g",{children:[(0,a.jsx)("line",{x1:p(e),x2:p(e),y1:0,y2:s,stroke:"#808080",opacity:.2}),(0,a.jsx)("text",{x:p(e),y:s+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t));return(0,a.jsx)("div",{children:(0,a.jsx)("svg",{width:t,height:n,children:(0,a.jsxs)("g",{width:o,height:s,transform:"translate(".concat([d.left,d.top].join(","),")"),children:[x,m]})})})},h={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},p=e=>{let{width:t,height:n}=e,[l,s]=(0,r.useState)(i);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{style:{height:50},children:[(0,a.jsx)("button",{style:h,onClick:()=>s(i),children:"Data 1"}),(0,a.jsx)("button",{style:h,onClick:()=>s(o),children:"Data 2"})]}),(0,a.jsx)(u,{width:t,height:n-50,data:l})]})},m=e=>{let{width:t=700,height:n=400}=e;return t&&n?(0,a.jsx)(p,{width:t,height:n}):null}},47398:function(e,t,n){"use strict";n.d(t,{VY:function(){return eo},h4:function(){return er},ck:function(){return ea},fC:function(){return en},xz:function(){return ei}});var a=n(67294),r=n(25360),i=n(65936),o=n(28771),l=n(36206),s=n(77342),c=n(75320),d=n(9981),u=n(29115),h=n(91276),p=n(85893),m="Collapsible",[x,f]=(0,r.b)(m),[v,b]=x(m),g=a.forwardRef((e,t)=>{let{__scopeCollapsible:n,open:r,defaultOpen:i,disabled:o,onOpenChange:l,...d}=e,[u=!1,m]=(0,s.T)({prop:r,defaultProp:i,onChange:l});return(0,p.jsx)(v,{scope:n,disabled:o,contentId:(0,h.M)(),open:u,onOpenToggle:a.useCallback(()=>m(e=>!e),[m]),children:(0,p.jsx)(c.WV.div,{"data-state":C(u),"data-disabled":o?"":void 0,...d,ref:t})})});g.displayName=m;var j="CollapsibleTrigger",y=a.forwardRef((e,t)=>{let{__scopeCollapsible:n,...a}=e,r=b(j,n);return(0,p.jsx)(c.WV.button,{type:"button","aria-controls":r.contentId,"aria-expanded":r.open||!1,"data-state":C(r.open),"data-disabled":r.disabled?"":void 0,disabled:r.disabled,...a,ref:t,onClick:(0,l.M)(e.onClick,r.onOpenToggle)})});y.displayName=j;var w="CollapsibleContent",k=a.forwardRef((e,t)=>{let{forceMount:n,...a}=e,r=b(w,e.__scopeCollapsible);return(0,p.jsx)(u.z,{present:n||r.open,children:({present:e})=>(0,p.jsx)(N,{...a,ref:t,present:e})})});k.displayName=w;var N=a.forwardRef((e,t)=>{let{__scopeCollapsible:n,present:r,children:i,...l}=e,s=b(w,n),[u,h]=a.useState(r),m=a.useRef(null),x=(0,o.e)(t,m),f=a.useRef(0),v=f.current,g=a.useRef(0),j=g.current,y=s.open||u,k=a.useRef(y),N=a.useRef();return a.useEffect(()=>{let e=requestAnimationFrame(()=>k.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,d.b)(()=>{let e=m.current;if(e){N.current=N.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();f.current=t.height,g.current=t.width,k.current||(e.style.transitionDuration=N.current.transitionDuration,e.style.animationName=N.current.animationName),h(r)}},[s.open,r]),(0,p.jsx)(c.WV.div,{"data-state":C(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!y,...l,ref:x,style:{"--radix-collapsible-content-height":v?`${v}px`:void 0,"--radix-collapsible-content-width":j?`${j}px`:void 0,...e.style},children:y&&i})});function C(e){return e?"open":"closed"}var A=n(78990),M="Accordion",R=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[_,z,D]=(0,i.B)(M),[V,T]=(0,r.b)(M,[D,f]),O=f(),W=a.forwardRef((e,t)=>{let{type:n,...a}=e;return(0,p.jsx)(_.Provider,{scope:e.__scopeAccordion,children:"multiple"===n?(0,p.jsx)(E,{...a,ref:t}):(0,p.jsx)(B,{...a,ref:t})})});W.displayName=M;var[I,P]=V(M),[S,q]=V(M,{collapsible:!1}),B=a.forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:i=()=>{},collapsible:o=!1,...l}=e,[c,d]=(0,s.T)({prop:n,defaultProp:r,onChange:i});return(0,p.jsx)(I,{scope:e.__scopeAccordion,value:c?[c]:[],onItemOpen:d,onItemClose:a.useCallback(()=>o&&d(""),[o,d]),children:(0,p.jsx)(S,{scope:e.__scopeAccordion,collapsible:o,children:(0,p.jsx)(L,{...l,ref:t})})})}),E=a.forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:i=()=>{},...o}=e,[l=[],c]=(0,s.T)({prop:n,defaultProp:r,onChange:i}),d=a.useCallback(e=>c((t=[])=>[...t,e]),[c]),u=a.useCallback(e=>c((t=[])=>t.filter(t=>t!==e)),[c]);return(0,p.jsx)(I,{scope:e.__scopeAccordion,value:l,onItemOpen:d,onItemClose:u,children:(0,p.jsx)(S,{scope:e.__scopeAccordion,collapsible:!0,children:(0,p.jsx)(L,{...o,ref:t})})})}),[Y,$]=V(M),L=a.forwardRef((e,t)=>{let{__scopeAccordion:n,disabled:r,dir:i,orientation:s="vertical",...d}=e,u=a.useRef(null),h=(0,o.e)(u,t),m=z(n),x=(0,A.gm)(i),f="ltr"===x,v=(0,l.M)(e.onKeyDown,e=>{if(!R.includes(e.key))return;let t=e.target,n=m().filter(e=>!e.ref.current?.disabled),a=n.findIndex(e=>e.ref.current===t),r=n.length;if(-1===a)return;e.preventDefault();let i=a,o=r-1,l=()=>{(i=a+1)>o&&(i=0)},c=()=>{(i=a-1)<0&&(i=o)};switch(e.key){case"Home":i=0;break;case"End":i=o;break;case"ArrowRight":"horizontal"===s&&(f?l():c());break;case"ArrowDown":"vertical"===s&&l();break;case"ArrowLeft":"horizontal"===s&&(f?c():l());break;case"ArrowUp":"vertical"===s&&c()}let d=i%r;n[d].ref.current?.focus()});return(0,p.jsx)(Y,{scope:n,disabled:r,direction:i,orientation:s,children:(0,p.jsx)(_.Slot,{scope:n,children:(0,p.jsx)(c.WV.div,{...d,"data-orientation":s,ref:h,onKeyDown:r?void 0:v})})})}),U="AccordionItem",[F,H]=V(U),Z=a.forwardRef((e,t)=>{let{__scopeAccordion:n,value:a,...r}=e,i=$(U,n),o=P(U,n),l=O(n),s=(0,h.M)(),c=a&&o.value.includes(a)||!1,d=i.disabled||e.disabled;return(0,p.jsx)(F,{scope:n,open:c,disabled:d,triggerId:s,children:(0,p.jsx)(g,{"data-orientation":i.orientation,"data-state":et(c),...l,...r,ref:t,disabled:d,open:c,onOpenChange:e=>{e?o.onItemOpen(a):o.onItemClose(a)}})})});Z.displayName=U;var G="AccordionHeader",J=a.forwardRef((e,t)=>{let{__scopeAccordion:n,...a}=e,r=$(M,n),i=H(G,n);return(0,p.jsx)(c.WV.h3,{"data-orientation":r.orientation,"data-state":et(i.open),"data-disabled":i.disabled?"":void 0,...a,ref:t})});J.displayName=G;var Q="AccordionTrigger",K=a.forwardRef((e,t)=>{let{__scopeAccordion:n,...a}=e,r=$(M,n),i=H(Q,n),o=q(Q,n),l=O(n);return(0,p.jsx)(_.ItemSlot,{scope:n,children:(0,p.jsx)(y,{"aria-disabled":i.open&&!o.collapsible||void 0,"data-orientation":r.orientation,id:i.triggerId,...l,...a,ref:t})})});K.displayName=Q;var X="AccordionContent",ee=a.forwardRef((e,t)=>{let{__scopeAccordion:n,...a}=e,r=$(M,n),i=H(X,n),o=O(n);return(0,p.jsx)(k,{role:"region","aria-labelledby":i.triggerId,"data-orientation":r.orientation,...o,...a,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function et(e){return e?"open":"closed"}ee.displayName=X;var en=W,ea=Z,er=J,ei=K,eo=ee}},function(e){e.O(0,[2343,7754,2354,7823,2719,8190,3710,2411,9774,2888,179],function(){return e(e.s=35642)}),_N_E=e.O()}]);