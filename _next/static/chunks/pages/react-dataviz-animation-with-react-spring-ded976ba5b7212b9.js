(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6818],{6390:function(i,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/react-dataviz-animation-with-react-spring",function(){return e(6024)}])},4974:function(i,t,e){"use strict";e.d(t,{b:function(){return s}});var n=e(5893),s=function(i){var t=i.children;return(0,n.jsx)("span",{className:"font-semibol bg-purple-100 p-1",children:t})}},6024:function(i,t,e){"use strict";e.r(t),e.d(t,{default:function(){return z}});var n=e(5893),s=e(7294),r=e(1884),a=e(8807),o=e(6978),c=e(33),l=e(7197),h=e(3485),d=e(217),p=e(4974),x=e(441),u=e(3728),f=function(i){var t=i.position,e=i.width,s=i.height,r=i.fill,a=(0,x.q_)({to:{position:t,fill:r},config:x.vc.molasses});return(0,n.jsx)("svg",{width:e,height:s,children:(0,n.jsx)(u.q.circle,{stroke:a.fill,fill:a.fill,strokeWidth:2,fillOpacity:.4,r:38,cx:a.position,cy:50})})},m={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},g=function(i){var t=i.width,e=i.height,r=(0,s.useState)(40),a=r[0],o=r[1];return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("button",{style:m,onClick:function(){return o(40)},children:"Left"}),(0,n.jsx)("button",{style:m,onClick:function(){return o(t-40)},children:"Right"})]}),(0,n.jsx)("div",{style:{width:t,height:e},children:(0,n.jsx)(f,{position:a,width:t,height:e,fill:40===a?"#9a6fb0":"#69b3a2"})})]})},j=function(i){var t=i.width,e=void 0===t?700:t,s=i.height,r=void 0===s?400:s;return(0,n.jsx)(g,{width:e,height:r})},v=function(i){var t=i.xOffset,e=i.value;(0,x.q_)({to:{xOffset:t},config:x.vc.molasses});return(0,n.jsxs)(u.q.g,{transform:"translate(".concat(t,", 0)"),children:[(0,n.jsx)("line",{y2:6,stroke:"currentColor"}),(0,n.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateY(20px)"},children:e})]})},b=function(i){var t=i.xScale,e=i.pixelsPerTick,r=t.range(),a=(0,s.useMemo)((function(){var i=r[1]-r[0],n=Math.floor(i/e);return t.ticks(n).map((function(i){return{value:i,xOffset:t(i)}}))}),[t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{d:["M",r[0],0,"L",r[1],0].join(" "),fill:"none",stroke:"currentColor"}),a.map((function(i,t){var e=i.value,s=i.xOffset;return(0,n.jsx)(v,{value:e,xOffset:s},t)}))]})},y=e(2989),w={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},k=function(i){var t=i.width,e=i.height,r=(0,s.useState)(40),a=r[0],o=r[1],c=y.BYU().domain([0,a]).range([0,t]);return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("button",{style:w,onClick:function(){return o(40)},children:"40"}),(0,n.jsx)("button",{style:w,onClick:function(){return o(400)},children:"400"})]}),(0,n.jsx)("div",{style:{width:t,height:e},children:(0,n.jsx)("svg",{width:t-50,height:e,children:(0,n.jsx)(b,{xScale:c,pixelsPerTick:60})})})]})},S=function(i){var t=i.width,e=void 0===t?700:t,s=i.height,r=void 0===s?400:s;return(0,n.jsx)(k,{width:e,height:r})},_=(0,n.jsxs)("p",{children:["This post is dedicated to ",(0,n.jsx)("code",{children:"react-spring"}),", a javascript library for spring animations. It quickly explains what it is and how it works, and then explains how it can be used in the field of data visualization."]});"\nconst TICK_LENGTH = 6;\nexport const AxisBottom = ({ xScale, pixelsPerTick }) => {\n".trim();function z(){var i=(0,s.useRef)(null),t=(0,d.B)(i);return(0,n.jsxs)(r.A,{title:"React-spring for data visualization",seoDescription:"This blogpost explains how to use react-spring to smoothly animate transitions on your charts made with react and d3.js.",children:[(0,n.jsx)(a.Z,{title:"React-spring for data visualization",description:_}),(0,n.jsxs)("div",{className:"w-full flex flex-col justify-center items-center",children:[(0,n.jsx)("div",{style:{height:150,width:"100%",maxWidth:500},ref:i,children:(0,n.jsx)(g,{width:t.width,height:t.height})}),(0,n.jsxs)("p",{className:"text-sm text-gray-500 max-w-md italic text-center mt-4 font-light",children:["A minimal react-spring dataviz example. A viz component expect a"," ",(0,n.jsx)("code",{children:"position"})," and a ",(0,n.jsx)("code",{children:"color"})," prop. But it smoothly animates the transition."]})]}),(0,n.jsxs)(h.U,{title:"What is a spring animation?",startOpen:!0,children:[(0,n.jsxs)("p",{children:["Spring animations are different than typical CSS easing animation. They're built on spring physics, which gives a more fluid and organic feel. The best way to be introduced to this concept is to read Josh Comeau's"," ",(0,n.jsx)("a",{href:"https://www.joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/",children:"friendly Introduction to Spring Physics"})]}),(0,n.jsx)("p",{children:"To quote him directly:"}),(0,n.jsx)(p.b,{children:"Spring physics are like a secret ingredient; they make all animations taste better"})]}),(0,n.jsxs)(h.U,{title:"Most basic react spring example",startOpen:!0,children:[(0,n.jsxs)("p",{children:["The best tool to build a spring animation in the react world is"," ",(0,n.jsx)("a",{href:"https://react-spring.io/",children:"react-spring"}),", a library dedicated to it. If you're not familiar with it already you probably want to take a look at their"," ",(0,n.jsx)("a",{href:"https://react-spring.io/",children:"home page"}),"."]}),(0,n.jsx)("p",{children:"Let's start with a basic example showing how to animate a very basic viz component that just renders a circle."}),(0,n.jsx)(c.$,{vizName:"ReactSpringMostBasic",VizComponent:j,maxWidth:800,height:200,caption:"A very basic animation using react and react-spring."}),(0,n.jsx)("p",{children:"The useSpring funtion can take 2 types of input: an object or a function"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"if object, it returns an object that has the values of our animation"}),(0,n.jsx)("li",{children:"if function, it returns an array of length 2. First item is the object mentionned above. item 2 is the api that controls the spring. api is used for imperative style"})]})]}),(0,n.jsxs)(h.U,{title:"Animating axes",startOpen:!0,children:[(0,n.jsx)("p",{children:"A common hassle is to animate axes, since it's a lot of svg elements."}),(0,n.jsx)(c.$,{vizName:"ReactSpringAxis",VizComponent:S,maxWidth:800,height:200,caption:"A very basic animation using react and react-spring."})]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("hr",{className:"full-bleed bord er bg-gray-200 mb-3 mt-10"}),(0,n.jsx)(l.Z,{chartFamily:"general"}),(0,n.jsx)("div",{className:"mt-20"}),(0,n.jsx)(o.Z,{})]})}}},function(i){i.O(0,[2781,7524,358,2564,9774,2888,179],(function(){return t=6390,i(i.s=t);var t}));var t=i.O();_N_E=t}]);