(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9342],{7618:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/barplot-data-transition-animation",function(){return n(1917)}])},7262:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var i=n(5893);n(7294);var r=n(5887),a=n(8843),s=n(1664),l=n.n(s);let o=a.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:n,link:a,isAvailable:s,size:c}=e,h=o.includes(t),u=s?"opacity-100":"opacity-20";return(0,i.jsx)(l(),{href:s?a:"subscribe",className:"no-underline",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(s?"cursor-pointer":"cursor-not-allowed"),children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(r.Z,{chartLogo:t,size:c})}),h?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(d,{size:c})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:n})]})})}let d=e=>{let{size:t}=e;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})};var h=n(4588);let u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){let{chartFamily:t}=e,n=a.c.filter(e=>e.family===t).map((e,t)=>{let n=(0,h.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(c,{link:n,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==u?void 0:u[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:n})]})}},1122:function(e,t,n){"use strict";n.d(t,{$:function(){return c}});var i=n(5893),r=n(7294),a=n(9973),s=n(8107),l=n(615),o=n(8578);let c=e=>{let{VizComponent:t,vizName:n,height:c=400,maxWidth:d=800,caption:h}=e,[u,m]=(0,r.useState)(!1),p=(0,r.useRef)(null),x=(0,a.B)(p);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(o.X,{vizName:n})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(s.z,{size:"sm",onClick:()=>m(!u),children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:p,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:c,width:x.width})})}),(0,i.jsx)(l.Y,{children:h}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(s.z,{size:"sm",onClick:()=>m(!u),children:"Show code"})})]})})}},8578:function(e,t,n){"use strict";n.d(t,{X:function(){return r}});var i=n(5893);n(7294);let r=e=>{let{vizName:t}=e;return(0,i.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},153:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var i=n(5893),r=n(9700),a=n(3476),s=n(7294),l=n(3084),o=n.n(l);function c(){let[e,t]=(0,s.useState)([]),[n,r]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,s.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),n=window.scrollY+150,i=t.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e,0),a=t.findIndex(e=>e===i);r(-1===a?0:a)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,i.jsx)("div",{className:o().tableOfContent,children:e.map((t,r)=>(0,i.jsx)("p",{className:n===r?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[r].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=n(7414),h=n(2594);let u=e=>{let{children:t,title:n,seoDescription:s}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:n,seoDescription:s}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(r.Z,{})}),(0,i.jsx)("div",{className:"wrapper",children:t}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(a.Z,{})}),(0,i.jsx)(c,{})]})}},6438:function(e,t,n){"use strict";n.d(t,{J:function(){return s}});var i=n(5893),r=n(1664),a=n.n(r);let s=e=>{let{children:t,href:n,isFilled:r,size:s="md",isFaded:l}=e,o=n.startsWith("www")||n.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";r?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===s&&(c+="text-sm py-1 px-2 "),"md"===s&&(c+="text-md py-2 px-4 "),l&&(c+="opacity-60");let d=(0,i.jsx)("span",{className:c,children:t});return o?(0,i.jsx)("a",{href:n,target:"_blank",children:d}):(0,i.jsx)(a(),{href:n,passHref:!0,children:d})}},9965:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(5893);n(7294);var r=n(8843),a=n(4588),s=n(1859),l=n(6438),o=n(1832),c=n.n(o);let d=e=>{let{direction:t,text:n,children:r}=e;return(0,i.jsx)("span",{className:c().tooltip+" "+c()[t],id:n,children:r})};var h=n(5887);function u(e){let{title:t,description:n,chartType:o,showSectionLink:c=!1,showInspirationLink:u=!0,showD3GalleryLink:m=!0}=e,p=r.c.find(e=>e.id===o);return p?(0,i.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,i.jsxs)("div",{className:"flex justify-start items-center",children:[(0,i.jsx)("h1",{children:t}),(0,i.jsx)("div",{className:"w-20 ml-4",children:(0,i.jsx)(h.Z,{chartLogo:null==p?void 0:p.logo})})]}),(0,i.jsx)(s.r,{}),(0,i.jsx)("div",{className:"max-w-xxl  py-2",children:n}),o&&(0,i.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),o&&(0,i.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,i.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,i.jsx)(l.J,{href:(0,a.y)(p.reactURL),size:"sm",children:p.label+" section"})}),u&&(0,i.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,i.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+p.id,size:"sm",children:"inspiration"})}),m&&(0,i.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,i.jsx)(l.J,{href:p.d3URL,size:"sm",children:"d3 gallery"})}),(0,i.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,i.jsx)(l.J,{href:p.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]}):null}},8107:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var i=n(5893);let r=e=>{let{children:t,onClick:n,isFilled:r,size:a="md"}=e,s="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===a&&(s+="text-sm py-1 px-2"),"md"===a&&(s+="text-md py-2 px-4"),r?s+=" bg-reactGallery hover:bg-reactGallery text-white":s+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,i.jsx)("button",{className:s,onClick:n,children:t})}},615:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var i=n(5893);let r=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return l}});var i=n(5893),r=n(5660),a=n.n(r),s=n(7294);let l=e=>{let{code:t}=e,n=(0,s.useRef)(null);return(0,s.useEffect)(()=>{n.current&&a().highlightElement(n.current)},[n,t]),(0,i.jsx)("div",{className:"mb-6",children:(0,i.jsx)("pre",{className:"rounded-md line-numbers",children:(0,i.jsx)("code",{ref:n,className:"p-0 language-js",children:t})})})}},9973:function(e,t,n){"use strict";n.d(t,{B:function(){return r}});var i=n(7294);let r=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,r]=(0,i.useState)(t),a=()=>{r(t())};return(0,i.useEffect)(()=>(window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)),[]),(0,i.useLayoutEffect)(()=>{a()},[]),n}},1917:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var i=n(5893);n(7294);var r=n(153),a=n(9965),s=n(7262),l=n(3572),o=n(1122),c=n(1664),d=n.n(c),h=n(6228);let u=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["This tutorial is a variation around the general"," ",(0,i.jsx)(d(),{href:"/barplot",children:"introduction to barplot with react"})," and d3.js. You should probably understand the concepts described there before digging into ",(0,i.jsx)("b",{children:"animation"}),"."]}),(0,i.jsxs)("p",{children:["This example focus on how to transition between datasets. It explains how to animate the change thanks to the"," ",(0,i.jsx)("a",{href:"https://www.react-spring.dev/",children:"react-spring"})," library."]}),(0,i.jsx)("p",{children:"A code sandbox is provided for the final result, but explanations target what's different compared to an usual barplot."})]});function m(){return(0,i.jsxs)(r.A,{title:"Barplot with smooth dataset transition.",seoDescription:"A step-by-step guide to build your barplot with smooth data transition component. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,i.jsx)(a.Z,{title:(0,i.jsxs)("h1",{children:["Barplot"," ",(0,i.jsx)("span",{className:"text-gray-600 font-light hidden sm:inline",children:"with animated dataset transition"})]}),description:u,chartType:"barplot"}),(0,i.jsx)("h2",{id:"plot",children:"Plot and code"}),(0,i.jsxs)("p",{children:["If you are in a hurry, this is what we're trying to achieve here \uD83D\uDE47‍♂️. The value of ",(0,i.jsx)("b",{children:"several individuals"})," is represented, with one bar per individual. It's just a ",(0,i.jsx)(d(),{href:"barplot",children:" horizontal barplot"}),"."]}),(0,i.jsx)("p",{children:"It is possible to switch from one dataset to another using the buttons above the chart. A few notes on the 3 usual animation patterns:"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"update"}),": bars smoothly update their rank and size when the data changes. So does their label."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"enter"}),": when the chart first loads, bar starts from 0 and grows to its real size. This is also true for items that are available in the new dataset but not in the previous. Check ",(0,i.jsx)("code",{children:"Christophe"})," ","when you switch to data 2."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"exit"}),": when an item is not available in the next dataset, it disappears with no animation (see ",(0,i.jsx)("code",{children:"Paul"})," when switching to data2)."]})]}),(0,i.jsx)(o.$,{vizName:"BarplotDatasetTransition",VizComponent:h.P,height:400,maxWidth:600,caption:"Barplot with smooth transition between dataset"}),(0,i.jsx)("h2",{id:"data",children:"The Data"}),(0,i.jsxs)("p",{children:["The dataset used here is exactly the same as the one used for the"," ",(0,i.jsx)(d(),{href:"/barplot#data",children:"simple barplot"}),". Note that 2 similar datasets are used: ",(0,i.jsx)("code",{children:"data1"})," and ",(0,i.jsx)("code",{children:"data2"}),"."]}),(0,i.jsx)("h2",{id:"animation",children:"Animation"}),(0,i.jsxs)("p",{children:["Most of the code is similar to the basic"," ",(0,i.jsx)(d(),{href:"/barplot#basic&20barplot",children:"barplot component"}),". But instead of building one ",(0,i.jsx)("code",{children:"rect"})," per item in the dataset, a"," ",(0,i.jsx)("code",{children:"BarItem"})," component is called to render a rectangle that supports animation."]}),(0,i.jsxs)("p",{children:["The ",(0,i.jsx)(d(),{href:"https://www.react-spring.dev/",children:"react-spring"})," ","library is used to create a ",(0,i.jsx)("b",{children:"spring"})," animation. The rectangle properties are passed to a ",(0,i.jsx)("code",{children:"useSpring"})," hook that will build the animation for us."]}),(0,i.jsxs)("p",{children:["This is how the ",(0,i.jsx)("code",{children:"BarItem"})," component looks like:"]}),(0,i.jsx)(l.d,{code:p}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,i.jsx)(s.Z,{chartFamily:"ranking"}),(0,i.jsx)("div",{className:"mt-20"})]})}let p='\nimport { useSpring, animated } from "@react-spring/web";\n\ntype BarItemProps = {\n  name: string;\n  value: number;\n  barHeight: number;\n  barWidth: number;\n  x: number;\n  y: number;\n};\n\ntype AnimatedProps = {\n  barWidth: number;\n  value: number;\n  valueOpacity: number;\n  y: number;\n};\n\nexport const BarItem = (props: BarItemProps) => {\n  const { name, value, barHeight, barWidth, x, y } = props;\n\n  const springProps = useSpring<AnimatedProps>({\n    // the \'from\' properties will be used only to animate the initialization of the component\n    // if you put nothing it will be initialized with the first prop that is provided\n    from: {\n      value: 0,\n      barWidth: 0,\n      valueOpacity: 0,\n    },\n    to: {\n      value: value,\n      barWidth: barWidth,\n      valueOpacity: barWidth > 80 ? 1 : 0,\n      y,\n    },\n    config: {\n      friction: 100,\n    },\n  });\n\n  return (\n    <g>\n      <animated.rect\n        x={x}\n        y={springProps.y}\n        width={springProps.barWidth}\n        height={barHeight}\n        opacity={0.7}\n        stroke="#9d174d"\n        fill="#9d174d"\n        fillOpacity={0.3}\n        strokeWidth={1}\n        rx={1}\n      />\n      <animated.text\n        x={springProps.barWidth?.to((width) => width - 7)}\n        y={springProps.y?.to((y) => y + barHeight / 2)}\n        textAnchor="end"\n        alignmentBaseline="central"\n        fontSize={12}\n        opacity={springProps.valueOpacity}\n      >\n        {springProps.value?.to((value) => value.toFixed(0))}\n      </animated.text>\n      <animated.text\n        x={x + 7}\n        y={springProps.y?.to((y) => y + barHeight / 2)}\n        textAnchor="start"\n        alignmentBaseline="central"\n        fontSize={12}\n      >\n        {name}\n      </animated.text>\n    </g>\n  );\n};\n'.trim()},6228:function(e,t,n){"use strict";n.d(t,{P:function(){return p}});var i=n(5893),r=n(7294);let a=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"M\xe9lanie",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Paul",value:2}],s=[{name:"Mark",value:9},{name:"Robert",value:19},{name:"Emily",value:31},{name:"Marion",value:23},{name:"Nicolas",value:38},{name:"M\xe9lanie",value:123},{name:"Gabriel",value:4},{name:"Jean",value:23},{name:"Christophe",value:22}];var l=n(7875),o=n(2236);let c=e=>{var t,n,r,a;let{name:s,value:l,barHeight:c,barWidth:d,x:h,y:u}=e,m=(0,o.q_)({from:{value:0,barWidth:0,valueOpacity:0},to:{value:l,barWidth:d,valueOpacity:d>80?1:0,y:u},config:{friction:100}});return(0,i.jsxs)("g",{children:[(0,i.jsx)(o.q.rect,{x:h,y:m.y,width:m.barWidth,height:c,opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1}),(0,i.jsx)(o.q.text,{x:null===(t=m.barWidth)||void 0===t?void 0:t.to(e=>e-7),y:null===(n=m.y)||void 0===n?void 0:n.to(e=>e+c/2),textAnchor:"end",alignmentBaseline:"central",fontSize:12,opacity:m.valueOpacity,children:null===(r=m.value)||void 0===r?void 0:r.to(e=>e.toFixed(0))}),(0,i.jsx)(o.q.text,{x:h+7,y:null===(a=m.y)||void 0===a?void 0:a.to(e=>e+c/2),textAnchor:"start",alignmentBaseline:"central",fontSize:12,children:s})]})},d={top:30,right:30,bottom:30,left:30},h=e=>{let{width:t,height:n,data:a}=e,s=t-d.right-d.left,o=n-d.top-d.bottom,h=a.sort((e,t)=>t.value-e.value).map(e=>e.name),u=(0,r.useMemo)(()=>l.tiA().domain(h).range([0,o]).padding(.3),[a,n]),m=l.Fp7(a.map(e=>e.value)),p=l.BYU().domain([0,m]).range([0,s]),x=a.map(e=>(0,i.jsx)(c,{name:e.name,value:e.value,barHeight:u.bandwidth(),barWidth:p(e.value),x:p(0),y:u(e.name)},e.name));return(0,i.jsx)("div",{children:(0,i.jsx)("svg",{width:t,height:n,children:(0,i.jsx)("g",{width:s,height:o,transform:"translate(".concat([d.left,d.top].join(","),")"),children:x})})})},u={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},m=e=>{let{width:t,height:n}=e,[l,o]=(0,r.useState)(a);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{height:50},children:[(0,i.jsx)("button",{style:u,onClick:()=>o(a),children:"Data 1"}),(0,i.jsx)("button",{style:u,onClick:()=>o(s),children:"Data 2"})]}),(0,i.jsx)(h,{width:t,height:n-50,data:l})]})},p=e=>{let{width:t=700,height:n=400}=e;return t&&n?(0,i.jsx)(m,{width:t,height:n}):null}},1832:function(e){e.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}}},function(e){e.O(0,[3996,7875,5660,2236,645,9774,2888,179],function(){return e(e.s=7618)}),_N_E=e.O()}]);