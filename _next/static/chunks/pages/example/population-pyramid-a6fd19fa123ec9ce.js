(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7382],{6648:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/population-pyramid",function(){return r(6487)}])},6487:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5893),a=r(7294),i=r(1664),o=r.n(i),l=r(8657),s=r(6824);let c=e=>{let{path:t,color:r,opacity:a}=e,i=(0,s.q_)({to:{path:t,color:r,opacity:a},config:{friction:10}});return(0,n.jsx)(s.q.path,{d:i.path,fill:"none",stroke:r,strokeWidth:2,opacity:a})},d={top:30,right:30,bottom:30,left:30},u=e=>{let{width:t,height:r,data:a,selectedGroup:i}=e,o=t-d.right-d.left,s=r-d.top-d.bottom;console.log("data",a);let u=a.filter(e=>e.Location===i),h=[...new Set(a.map(e=>e.MidPeriod))].sort(),f=Number(h[0]),m=Number(h[h.length-1]),p=l.BYU().range(["blue","white"]).domain([f,m]),g=l.BYU().range([0,1]).domain([f,m]),x=l.BYU().range([s,0]).domain([0,100]),w=l.BYU().range([0,o/2]).domain([10,0]),b=l.BYU().range([o/2,o]).domain([0,10]),j=l.jvg().x(e=>w(Number(e.PopMale))).y(e=>x(Number(e.AgeGrpStart))),v=l.jvg().x(e=>b(Number(e.PopFemale))).y(e=>x(Number(e.AgeGrpStart))),N=h.map(e=>{let t=j(u.filter(t=>t.MidPeriod===e));return(0,n.jsx)(c,{path:t,color:p(e),opacity:g(e)})}),y=h.map(e=>{let t=v(u.filter(t=>t.MidPeriod===e));return(0,n.jsx)(c,{path:t,color:p(e),opacity:g(e)})});return(0,n.jsx)("div",{className:"bg-black",children:(0,n.jsx)("svg",{width:t,height:r,children:(0,n.jsxs)("g",{width:o,height:s,transform:"translate(".concat([d.left,d.top].join(","),")"),children:[N,y]})})})},h=e=>{let{selectedItem:t,setSelectedItem:r,items:i}=e;(0,a.useEffect)(()=>{let e=e=>{"ArrowRight"===e.key?r(t+1):"ArrowLeft"===e.key&&r(t-1)};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[t]);let o=i.map((e,t)=>(0,n.jsx)("button",{className:"text-xs px-2 py-1 bg-black border border-white text-white rounded-lg whitespace-nowrap flex-shrink-0",onClick:()=>r(t),children:e},t));return(0,n.jsxs)("div",{className:"relative max-w-3xl",children:[(0,n.jsx)("div",{className:"overflow-scroll w-full flex gap-1",children:o}),(0,n.jsx)("div",{className:"absolute inset-y-0 left-0 w-28 h-full  bg-gradient-to-r from-black to-transparent"}),(0,n.jsx)("div",{className:"absolute inset-y-0 right-0 w-28 h-full  bg-gradient-to-l from-black to-transparent"})]})},f=e=>{let{width:t=700,height:r=400}=e,[i,o]=(0,a.useState)([]),[s,c]=(0,a.useState)(0),d=[...new Set(i.map(e=>e.Location))].sort();return(0,a.useEffect)(()=>{(0,l.gyn)("https://raw.githubusercontent.com/holtzy/react-graph-gallery/main/data/population-pyramid-percentage.csv").then(e=>{o(e)}).catch(e=>{console.error("Error loading the CSV data",e)})},[]),(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-3xl uppercase text-white font-light",children:d[s]}),(0,n.jsx)("hr",{className:""})]}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"w-full flex justify-center",children:(0,n.jsx)(h,{selectedItem:s,items:d,setSelectedItem:c})}),(0,n.jsx)(u,{data:i,width:t,height:r,selectedGroup:d[s]})]})};function m(){return(0,n.jsx)("div",{className:"h-screen w-screen bg-black flex justify-center items-center",children:(0,n.jsx)(f,{width:1e3,height:1e3})})}n.Fragment,o(),o(),o()},6824:function(e,t,r){"use strict";r.d(t,{q:function(){return n.q},q_:function(){return n.q_},to:function(){return n.to},vc:function(){return n.vc}});var n=r(2236)}},function(e){e.O(0,[1664,8657,2236,9774,2888,179],function(){return e(e.s=6648)}),_N_E=e.O()}]);