(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1406],{6216:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/viz-from-the-future",function(){return r(647)}])},6260:function(e,t,r){"use strict";r.d(t,{U:function(){return l}});var s=r(5893),i=r(7294);let l=e=>{let{startOpen:t,title:r,children:l,toc:n}=e,[o,a]=(0,i.useState)(t),c=o?"max-h-full":"max-h-0",d=o?"overflow-visible":"overflow-hidden";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("h2",{className:"cursor-pointer",onClick:()=>a(!o),id:n,children:[o?(0,s.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,s.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),r]}),(0,s.jsx)("div",{className:"transition-max-height ease-in duration-300  "+c+" "+d,children:l})]})}},1651:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var s=r(5893);r(7294);var i=r(9871),l=r(8843),n=r(4588);let o={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function a(e){let{chartFamily:t}=e,r=l.c.filter(e=>e.family===t).map((e,t)=>{let r=(0,n.y)(e.reactURL);return(0,s.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,s.jsx)(i.Z,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==o?void 0:o[t]}),(0,s.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},1122:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var s=r(5893),i=r(7294),l=r(9973),n=r(8107),o=r(615),a=r(8578);let c=e=>{let{VizComponent:t,vizName:r,height:c=400,maxWidth:d=800,caption:h}=e,[x,u]=(0,i.useState)(!1),m=(0,i.useRef)(null),f=(0,l.B)(m);return(0,s.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:x?(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,s.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,s.jsx)(a.X,{vizName:r})}),(0,s.jsx)("div",{className:"flex justify-center mt-2",children:(0,s.jsx)(n.z,{size:"sm",onClick:()=>u(!x),children:"Hide Sandbox"})})]}):(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,s.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:m,className:"pointer-events-auto",children:(0,s.jsx)(t,{height:c,width:f.width})})}),(0,s.jsx)(o.Y,{children:h}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(n.z,{size:"sm",onClick:()=>u(!x),children:"Show code"})})]})})}},8578:function(e,t,r){"use strict";r.d(t,{X:function(){return i}});var s=r(5893);r(7294);let i=e=>{let{vizName:t}=e;return(0,s.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},153:function(e,t,r){"use strict";r.d(t,{A:function(){return x}});var s=r(5893),i=r(9700),l=r(3476),n=r(7294),o=r(3084),a=r.n(o);function c(){let[e,t]=(0,n.useState)([]),[r,i]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,n.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,s=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),l=t.findIndex(e=>e===s);i(-1===l?0:l)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,s.jsx)("div",{className:a().tableOfContent,children:e.map((t,i)=>(0,s.jsx)("p",{className:r===i?"".concat(a().tocItem," ").concat(a().tocItemActive):a().tocItem,onClick:t=>{t.preventDefault(),e[i].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=r(7414),h=r(2594);let x=e=>{let{children:t,title:r,seoDescription:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.A,{title:r,seoDescription:n}),(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsx)(i.Z,{})}),(0,s.jsx)("div",{className:"wrapper",children:t}),(0,s.jsx)(h.Z,{}),(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsx)(l.Z,{})}),(0,s.jsx)(c,{})]})}},6438:function(e,t,r){"use strict";r.d(t,{J:function(){return n}});var s=r(5893),i=r(1664),l=r.n(i);let n=e=>{let{children:t,href:r,isFilled:i,size:n="md",isFaded:o}=e,a=r.startsWith("www")||r.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";i?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===n&&(c+="text-sm py-1 px-2 "),"md"===n&&(c+="text-md py-2 px-4 "),o&&(c+="opacity-60");let d=(0,s.jsx)("span",{className:c,children:t});return a?(0,s.jsx)("a",{href:r,target:"_blank",children:d}):(0,s.jsx)(l(),{href:r,passHref:!0,children:d})}},9871:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var s=r(5893);r(7294);var i=r(5887),l=r(8843),n=r(1664),o=r.n(n);let a=l.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:r,link:l,isAvailable:n,size:c}=e,h=a.includes(t),x=n?"opacity-100":"opacity-20";return(0,s.jsx)(o(),{href:n?l:"subscribe",className:"no-underline",children:(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+x+" "+(n?"cursor-pointer":"cursor-not-allowed"),children:[(0,s.jsx)("div",{className:"absolute",children:(0,s.jsx)(i.Z,{chartLogo:t,size:c})}),h?(0,s.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,s.jsx)(d,{size:c})}):(0,s.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,s.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,s.jsx)("p",{className:"font-light text-sm text-gray-600 "+x,children:r})]})})}let d=e=>{let{size:t}=e;return(0,s.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,s.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},9965:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var s=r(5893);r(7294);var i=r(8843),l=r(4588),n=r(1859),o=r(6438),a=r(1832),c=r.n(a);let d=e=>{let{direction:t,text:r,children:i}=e;return(0,s.jsx)("span",{className:c().tooltip+" "+c()[t],id:r,children:i})};var h=r(5887);function x(e){let{title:t,description:r,chartType:a,showSectionLink:c=!1,showInspirationLink:x=!0,showD3GalleryLink:u=!0}=e,m=i.c.find(e=>e.id===a);return(0,s.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,s.jsxs)("div",{className:"flex justify-start items-center",children:[(0,s.jsx)("h1",{children:t}),a&&m&&(0,s.jsx)("div",{className:"w-20 ml-4",children:(0,s.jsx)(h.Z,{chartLogo:null==m?void 0:m.logo})})]}),(0,s.jsx)(n.r,{}),(0,s.jsx)("div",{className:"max-w-xxl  py-2",children:r}),a&&(0,s.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),m&&(0,s.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,s.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,s.jsx)(o.J,{href:(0,l.y)(m.reactURL),size:"sm",children:m.label+" section"})}),x&&(0,s.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,s.jsx)(o.J,{href:"https://www.dataviz-inspiration.com/"+m.id,size:"sm",children:"inspiration"})}),u&&(0,s.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,s.jsx)(o.J,{href:m.d3URL,size:"sm",children:"d3 gallery"})}),(0,s.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,s.jsx)(o.J,{href:m.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})}},8107:function(e,t,r){"use strict";r.d(t,{z:function(){return i}});var s=r(5893);let i=e=>{let{children:t,onClick:r,isFilled:i,size:l="md"}=e,n="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===l&&(n+="text-sm py-1 px-2"),"md"===l&&(n+="text-md py-2 px-4"),i?n+=" bg-reactGallery hover:bg-reactGallery text-white":n+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,s.jsx)("button",{className:n,onClick:r,children:t})}},615:function(e,t,r){"use strict";r.d(t,{Y:function(){return i}});var s=r(5893);let i=e=>{let{children:t}=e;return(0,s.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},9973:function(e,t,r){"use strict";r.d(t,{B:function(){return i}});var s=r(7294);let i=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[r,i]=(0,s.useState)(t),l=()=>{i(t())};return(0,s.useEffect)(()=>(window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)),[]),(0,s.useLayoutEffect)(()=>{l()},[]),r}},647:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var s=r(5893);r(7294);var i=r(153),l=r(9965),n=r(2594),o=r(1122),a=r(1651),c=r(6260),d=r(2244),h=r.n(d);let x=e=>{let{width:t,height:r}=e;return(0,s.jsxs)("div",{style:{width:t,height:r},className:h().container,children:[(0,s.jsx)("div",{className:h().glowCircleInner}),(0,s.jsx)("div",{className:h().glowCircleOuter}),(0,s.jsx)("div",{className:h().glowCircleBoth})]})},u=e=>{let{width:t=900,height:r=400}=e;return(0,s.jsx)(x,{width:t,height:r})};var m=r(1274),f=r.n(m);let p=e=>{let{width:t,height:r}=e;return(0,s.jsxs)("svg",{style:{width:t,height:r},className:f().container,children:[(0,s.jsx)("circle",{className:f().glowCircleInner,cx:t/4,cy:r/2,r:80}),(0,s.jsx)("circle",{className:f().glowCircleOuter,cx:t/2,cy:r/2,r:80}),(0,s.jsx)("circle",{className:f().glowCircleBoth,cx:3*t/4,cy:r/2,r:80})]})},j=e=>{let{width:t=900,height:r=400}=e;return(0,s.jsx)(p,{width:t,height:r})},w=(0,s.jsx)("p",{children:"Building a viz from the future?"});function v(){return(0,s.jsxs)(i.A,{title:"How to build a responsive chart with React and d3.js",seoDescription:"How to build a responsive chart with React and d3.js",children:[(0,s.jsx)(l.Z,{title:"A viz from the future",description:w}),(0,s.jsxs)(c.U,{title:"What is a viz from the future?",startOpen:!0,children:[(0,s.jsx)("p",{children:"You know minority report?"}),(0,s.jsxs)("p",{children:[(0,s.jsx)("a",{href:"https://www.behance.net/gallery/92170213/FUI-HUD-Screens",children:"This video"})," ","is what I mean"]}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Dark mode"}),(0,s.jsx)("li",{children:"Flashy, Neon color"}),(0,s.jsx)("li",{children:"Glowing shapes"}),(0,s.jsx)("li",{children:"Gradient"}),(0,s.jsx)("li",{children:"Animation"})]})]}),(0,s.jsxs)(c.U,{title:"Glowing div with box-shadow",startOpen:!0,children:[(0,s.jsxs)("p",{children:["Can be done with overlapping ",(0,s.jsx)("code",{children:"box-shadow"}),"."]}),(0,s.jsxs)("p",{children:["Official doc is"," ",(0,s.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow",children:"here"})]}),(0,s.jsx)("p",{children:"A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color."}),(0,s.jsxs)("p",{children:["With ",(0,s.jsx)("code",{children:"inset"}),", I can put the shadow inside of the shape"]}),(0,s.jsx)("p",{children:"shadows are drawn one of top of each other."}),(0,s.jsx)(o.$,{vizName:"FuturisticColor",VizComponent:u,maxWidth:900,height:400}),(0,s.jsxs)("p",{children:["But there is an issue: ",(0,s.jsx)("code",{children:"box-shadow"})," does not exist for svg."]})]}),(0,s.jsxs)(c.U,{title:"Glowing svg with ...",startOpen:!0,children:[(0,s.jsx)("p",{children:"How can I do."}),(0,s.jsx)("p",{children:"Two main ways: svg filter and css filter"}),(0,s.jsx)("p",{children:"css filter is easy, it works like box-shadows that is described above"}),(0,s.jsx)("p",{children:"BUT, it does not work with inset, so we need another solution for inside shadow."}),(0,s.jsx)(o.$,{vizName:"FuturisticColorSvg",VizComponent:j,maxWidth:900,height:400}),(0,s.jsx)("p",{children:"But there is an issue: how to do for canvas"})]}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("hr",{className:"full-bleed  bord er bg-gray-200 mb-3 mt-10"}),(0,s.jsx)(a.Z,{chartFamily:"general"}),(0,s.jsx)("div",{className:"mt-20"}),(0,s.jsx)(n.Z,{})]})}},1832:function(e){e.exports={tooltip:"tooltip_tooltip__b_kg5",right:"tooltip_right__zvLDU",left:"tooltip_left__mQ0Xf",bottom:"tooltip_bottom__MVFNa",top:"tooltip_top__kPfp4"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}},2244:function(e){e.exports={container:"shapes_container__sVFmp",glowCircleInner:"shapes_glowCircleInner__7mVy3",glowCircleOuter:"shapes_glowCircleOuter__SLk9P",glowCircleBoth:"shapes_glowCircleBoth__1_lq3"}},1274:function(e){e.exports={container:"shapes_container__YcoTU",glowCircleOuter:"shapes_glowCircleOuter__ujABI",glowCircleBoth:"shapes_glowCircleBoth__vfyRw"}}},function(e){e.O(0,[3996,645,9774,2888,179],function(){return e(e.s=6216)}),_N_E=e.O()}]);