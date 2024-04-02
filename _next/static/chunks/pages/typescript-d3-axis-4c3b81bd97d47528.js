(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5146],{4438:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/typescript-d3-axis",function(){return n(6673)}])},1651:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(5893);n(7294);var r=n(9871),s=n(8843),a=n(4588);let l={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function o(e){let{chartFamily:t}=e,n=s.c.filter(e=>e.family===t).map((e,t)=>{let n=(0,a.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(r.Z,{link:n,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==l?void 0:l[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:n})]})}},1122:function(e,t,n){"use strict";n.d(t,{$:function(){return c}});var i=n(5893),r=n(7294),s=n(9973),a=n(8107),l=n(615),o=n(8578);let c=e=>{let{VizComponent:t,vizName:n,height:c=400,maxWidth:d=800,caption:h}=e,[u,x]=(0,r.useState)(!1),p=(0,r.useRef)(null),m=(0,s.B)(p);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(o.X,{vizName:n})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(a.z,{size:"sm",onClick:()=>x(!u),children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:p,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:c,width:m.width})})}),(0,i.jsx)(l.Y,{children:h}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(a.z,{size:"sm",onClick:()=>x(!u),children:"Show code"})})]})})}},8578:function(e,t,n){"use strict";n.d(t,{X:function(){return r}});var i=n(5893);n(7294);let r=e=>{let{vizName:t}=e;return(0,i.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},153:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var i=n(5893),r=n(9700),s=n(3476),a=n(7294),l=n(3084),o=n.n(l);function c(){let[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,a.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),n=window.scrollY+150,i=t.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e,0),s=t.findIndex(e=>e===i);r(-1===s?0:s)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,i.jsx)("div",{className:o().tableOfContent,children:e.map((t,r)=>(0,i.jsx)("p",{className:n===r?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[r].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=n(7414),h=n(2594);let u=e=>{let{children:t,title:n,seoDescription:a}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:n,seoDescription:a}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(r.Z,{})}),(0,i.jsx)("div",{className:"wrapper",children:t}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(s.Z,{})}),(0,i.jsx)(c,{})]})}},6438:function(e,t,n){"use strict";n.d(t,{J:function(){return a}});var i=n(5893),r=n(1664),s=n.n(r);let a=e=>{let{children:t,href:n,isFilled:r,size:a="md",isFaded:l}=e,o=n.startsWith("www")||n.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";r?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===a&&(c+="text-sm py-1 px-2 "),"md"===a&&(c+="text-md py-2 px-4 "),l&&(c+="opacity-60");let d=(0,i.jsx)("span",{className:c,children:t});return o?(0,i.jsx)("a",{href:n,target:"_blank",children:d}):(0,i.jsx)(s(),{href:n,passHref:!0,children:d})}},9871:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(5893);n(7294);var r=n(5887),s=n(8843),a=n(1664),l=n.n(a);let o=s.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:n,link:s,isAvailable:a,size:c}=e,h=o.includes(t),u=a?"opacity-100":"opacity-20";return(0,i.jsx)(l(),{href:a?s:"subscribe",className:"no-underline",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(a?"cursor-pointer":"cursor-not-allowed"),children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(r.Z,{chartLogo:t,size:c})}),h?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(d,{size:c})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:n})]})})}let d=e=>{let{size:t}=e;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},9965:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(5893);n(7294);var r=n(8843),s=n(4588),a=n(1859),l=n(6438),o=n(1832),c=n.n(o);let d=e=>{let{direction:t,text:n,children:r}=e;return(0,i.jsx)("span",{className:c().tooltip+" "+c()[t],id:n,children:r})};var h=n(5887);function u(e){let{title:t,description:n,chartType:o,showSectionLink:c=!1,showInspirationLink:u=!0,showD3GalleryLink:x=!0}=e,p=r.c.find(e=>e.id===o);return(0,i.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,i.jsxs)("div",{className:"flex justify-start items-center",children:[(0,i.jsx)("h1",{children:t}),o&&p&&(0,i.jsx)("div",{className:"w-20 ml-4",children:(0,i.jsx)(h.Z,{chartLogo:null==p?void 0:p.logo})})]}),(0,i.jsx)(a.r,{}),(0,i.jsx)("div",{className:"max-w-xxl  py-2",children:n}),o&&(0,i.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),p&&(0,i.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,i.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,i.jsx)(l.J,{href:(0,s.y)(p.reactURL),size:"sm",children:p.label+" section"})}),u&&(0,i.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,i.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+p.id,size:"sm",children:"inspiration"})}),x&&(0,i.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,i.jsx)(l.J,{href:p.d3URL,size:"sm",children:"d3 gallery"})}),(0,i.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,i.jsx)(l.J,{href:p.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})}},8107:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var i=n(5893);let r=e=>{let{children:t,onClick:n,isFilled:r,size:s="md"}=e,a="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===s&&(a+="text-sm py-1 px-2"),"md"===s&&(a+="text-md py-2 px-4"),r?a+=" bg-reactGallery hover:bg-reactGallery text-white":a+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,i.jsx)("button",{className:a,onClick:n,children:t})}},615:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var i=n(5893);let r=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return l}});var i=n(5893),r=n(5660),s=n.n(r),a=n(7294);let l=e=>{let{code:t}=e,n=(0,a.useRef)(null);return(0,a.useEffect)(()=>{n.current&&s().highlightElement(n.current)},[n,t]),(0,i.jsx)("div",{className:"mb-6",children:(0,i.jsx)("pre",{className:"rounded-md line-numbers",children:(0,i.jsx)("code",{ref:n,className:"p-0 language-js",children:t})})})}},9973:function(e,t,n){"use strict";n.d(t,{B:function(){return r}});var i=n(7294);let r=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,r]=(0,i.useState)(t),s=()=>{r(t())};return(0,i.useEffect)(()=>(window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)),[]),(0,i.useLayoutEffect)(()=>{s()},[]),n}},6673:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var i=n(5893);n(7294);var r=n(153),s=n(9965),a=n(1651),l=n(3572),o=n(1122),c=n(1341);let d=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"What is typescript and why it is awesome to use it. How are d3 functions typed."}),(0,i.jsx)("p",{children:"A few examples on how it works."})]});function h(){return(0,i.jsxs)(r.A,{title:"Dealing with d3 axis in a typescript environment",seoDescription:"How to deal with d3, axes and typescript",children:[(0,i.jsx)(s.Z,{title:"D3 axis and typescript",description:d,chartType:"lollipop"}),(0,i.jsx)("h2",{id:"Basic linear scale",children:"Most basic linear axis"}),(0,i.jsxs)("p",{children:["A graph axis is based on a scale. But what is a scale? This is how the",(0,i.jsx)("a",{href:"https://github.com/d3/d3-scale",children:"d3-scale"})," module describes it:"]}),(0,i.jsx)("blockquote",{children:"Scales are a convenient abstraction for a fundamental task in visualization: mapping a dimension of abstract data to a visual representation"}),(0,i.jsx)("p",{children:"So basically a scale is a function. You provide it with an input like the value of a data point, and it returns another value like a position in pixel."}),(0,i.jsxs)("p",{children:["Here is a very basic implementation of a scale using the"," ",(0,i.jsx)("code",{children:"scaleLinear"})," function of d3."]}),(0,i.jsx)(l.d,{code:u}),(0,i.jsx)("p",{children:"Scales are then used to build axis. Here is an example transforming the scale above in an X axis using a custom react component."}),(0,i.jsx)(o.$,{VizComponent:c.c,vizName:"AxisBasic",maxWidth:400,height:300,caption:"How to build a bottom axis and a left axis component using React, used to render a d3 scale."}),(0,i.jsx)("p",{children:"Ok, now, how to deal with this in a typescript world?"}),(0,i.jsxs)("h2",{id:"typing scaleLinear",children:[(0,i.jsx)("code",{children:"scaleLinear"})," and typescript"]}),(0,i.jsxs)("p",{children:["When we create a scale function using ",(0,i.jsx)("code",{children:"scaleLinear"}),", it is equivalent as calling the function with the 3 default generics"]})," ",(0,i.jsx)(l.d,{code:x}),(0,i.jsxs)("p",{children:["Here, the first generic is the type of the data items used for the range of scale. The second generic is the type of the data that the scale with output. You can see the explanations more in depth in the"," ",(0,i.jsx)("a",{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/d3-scale/index.d.ts#L210",children:"type definition"})," ","of the scaleLinear function."]}),(0,i.jsx)("p",{children:"Now, what happens if we want to use scaleLinear to take a numeric value and map it to a color? In this case the range is gonna be an array of string. And the output is gonna be a color too. We can type it as:"}),(0,i.jsx)(l.d,{code:p}),(0,i.jsx)("br",{}),(0,i.jsxs)("h2",{id:"typing scaleOrdinal",children:[(0,i.jsx)("code",{children:"scaleOrdinal"})," and typescript"]}),(0,i.jsxs)("p",{children:["Consider a finite number of groups. We need to assign a specific color to each group. This is called an ",(0,i.jsx)("b",{children:"ordinal"})," scale and is implemented in the d3 ",(0,i.jsx)("code",{children:"scaleOrdinal"})," function."]}),(0,i.jsxs)("p",{children:["What's needed here is thus a list of colors to use (the"," ",(0,i.jsx)("code",{children:"range"}),") and a list of group names: the ",(0,i.jsx)("code",{children:"domain"}),"."]}),(0,i.jsx)("p",{children:"To put it in a nutshell, that's how the color scale is implemented:"}),(0,i.jsx)(l.d,{code:m}),(0,i.jsxs)("p",{children:["You can see how"," ",(0,i.jsx)("a",{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/d3-scale/index.d.ts#L2251",children:"scaleOrdinal type implementation"})]}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,i.jsx)(a.Z,{chartFamily:"general"}),(0,i.jsx)("div",{className:"mt-20"})]})}let u="\nconst xScale = d3.scaleLinear()\n  .domain([0, 10]) // data can go from 0 to 10\n  .range([0, width]); // it will result in a value that goes from 0 to width\n\n// xScale(0) -> 0\n// xScale(10) -> width\n// xScale(5) -> width / 2\n".trim(),x="\n// if you call\nconst xScale = d3.scaleLinear()\n\n// it is equivalent to\nconst xScale = d3.scaleLinear<numeric, numeric, never>()\n".trim(),p="\n// typing a color scale\nconst colorScale = d3.scaleLinear<string, string, never>()\n  .range(['blue', 'green'])\n  .domain([1, 100]);\n".trim(),m='\n// List of arbitrary colors\nconst COLORS = ["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"];\n\n// List of all group names\nconst allGroups = data.map((group) => group.group);\n\n// Color scale\nconst colorScale = d3.scaleOrdinal<string>()\n  .domain(allGroups)\n  .range(COLORS);\n'.trim()},4699:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var i=n(5893),r=n(7875);let s=e=>{let{width:t,height:n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:"pattern_rkDsm",patternUnits:"userSpaceOnUse",width:"9.5",height:"2.5",patternTransform:"rotate(41)",children:(0,i.jsx)("line",{x1:"0",y:"0",x2:"0",y2:"9.5",stroke:"#D9B9F3",strokeWidth:"1"})})}),(0,i.jsx)("rect",{width:t,height:n,fill:"url(#pattern_rkDsm)",opacity:"1"})]})};var a=n(7294);let l=e=>{let{xScale:t,pixelsPerTick:n}=e,r=t.range(),s=(0,a.useMemo)(()=>{let e=r[1]-r[0];return t.ticks(Math.floor(e/n)).map(e=>({value:e,xOffset:t(e)}))},[t]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{d:["M",r[0],0,"L",r[1],0].join(" "),fill:"none",stroke:"currentColor"}),s.map(e=>{let{value:t,xOffset:n}=e;return(0,i.jsxs)("g",{transform:"translate(".concat(n,", 0)"),children:[(0,i.jsx)("line",{y2:6,stroke:"currentColor"}),(0,i.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateY(20px)"},children:t},t)]},t)})]})},o=e=>{let{yScale:t,pixelsPerTick:n}=e,r=t.range(),s=(0,a.useMemo)(()=>{let e=r[0]-r[1];return t.ticks(Math.floor(e/n)).map(e=>({value:e,yOffset:t(e)}))},[t]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{d:["M",0,r[0],"L",0,r[1]].join(" "),fill:"none",stroke:"currentColor"}),s.map(e=>{let{value:t,yOffset:n}=e;return(0,i.jsxs)("g",{transform:"translate(0, ".concat(n,")"),children:[(0,i.jsx)("line",{x2:-6,stroke:"currentColor"}),(0,i.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateX(-20px)"},children:t},t)]},t)})]})},c={top:30,right:30,bottom:50,left:50},d=e=>{let{width:t,height:n}=e,a=t-c.right-c.left,d=n-c.top-c.bottom,h=r.BYU().domain([0,10]).range([0,a]),u=r.BYU().domain([0,11]).range([d,0]);return r.p2C().domain([1e-24,10]).range(["red","blue"]).clamp(!0),(0,i.jsx)("div",{children:(0,i.jsx)("svg",{width:t,height:n,shapeRendering:"crispEdges",children:(0,i.jsxs)("g",{width:a,height:d,transform:"translate(".concat([c.left,c.top].join(","),")"),overflow:"visible",children:[(0,i.jsx)(s,{width:a,height:d}),(0,i.jsx)(o,{yScale:u,pixelsPerTick:30}),(0,i.jsx)("g",{transform:"translate(0, ".concat(d,")"),children:(0,i.jsx)(l,{xScale:h,pixelsPerTick:60})})]})})})}},1341:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});var i=n(5893),r=n(4699);let s=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(r.X,{width:t,height:n})}},1832:function(e){e.exports={tooltip:"tooltip_tooltip__b_kg5",right:"tooltip_right__zvLDU",left:"tooltip_left__mQ0Xf",bottom:"tooltip_bottom__MVFNa",top:"tooltip_top__kPfp4"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[3996,7875,5660,645,9774,2888,179],function(){return e(e.s=4438)}),_N_E=e.O()}]);