(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9142],{6260:function(e,t,r){"use strict";r.d(t,{U:function(){return s}});var i=r(5893),l=r(7294);let s=e=>{let{startOpen:t,title:r,children:s,toc:n}=e,[a,o]=(0,l.useState)(t),c=a?"max-h-full":"max-h-0",d=a?"overflow-visible":"overflow-hidden";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h2",{className:"cursor-pointer",onClick:()=>o(!a),id:n,children:[a?(0,i.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,i.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),r]}),(0,i.jsx)("div",{className:"transition-max-height ease-in duration-300  "+c+" "+d,children:s})]})}},1651:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(5893);r(7294);var l=r(9871),s=r(8843),n=r(4588);let a={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function o(e){let{chartFamily:t}=e,r=s.c.filter(e=>e.family===t).map((e,t)=>{let r=(0,n.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(l.Z,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==a?void 0:a[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},1122:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var i=r(5893),l=r(7294),s=r(9973),n=r(8107),a=r(615),o=r(8578);let c=e=>{let{VizComponent:t,vizName:r,height:c=400,maxWidth:d=800,caption:h}=e,[u,x]=(0,l.useState)(!1),m=(0,l.useRef)(null),f=(0,s.B)(m);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(o.X,{vizName:r})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(n.z,{size:"sm",onClick:()=>x(!u),children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:m,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:c,width:f.width})})}),(0,i.jsx)(a.Y,{children:h}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(n.z,{size:"sm",onClick:()=>x(!u),children:"Show code"})})]})})}},8578:function(e,t,r){"use strict";r.d(t,{X:function(){return l}});var i=r(5893);r(7294);let l=e=>{let{vizName:t}=e;return(0,i.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},153:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var i=r(5893),l=r(9700),s=r(3476),n=r(7294),a=r(3084),o=r.n(a);function c(){let[e,t]=(0,n.useState)([]),[r,l]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,n.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,i=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),s=t.findIndex(e=>e===i);l(-1===s?0:s)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,i.jsx)("div",{className:o().tableOfContent,children:e.map((t,l)=>(0,i.jsx)("p",{className:r===l?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[l].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=r(7414),h=r(2594);let u=e=>{let{children:t,title:r,seoDescription:n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:r,seoDescription:n}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(l.Z,{})}),(0,i.jsx)("div",{className:"wrapper",children:t}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(s.Z,{})}),(0,i.jsx)(c,{})]})}},6438:function(e,t,r){"use strict";r.d(t,{J:function(){return n}});var i=r(5893),l=r(1664),s=r.n(l);let n=e=>{let{children:t,href:r,isFilled:l,size:n="md",isFaded:a}=e,o=r.startsWith("www")||r.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";l?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===n&&(c+="text-sm py-1 px-2 "),"md"===n&&(c+="text-md py-2 px-4 "),a&&(c+="opacity-60");let d=(0,i.jsx)("span",{className:c,children:t});return o?(0,i.jsx)("a",{href:r,target:"_blank",children:d}):(0,i.jsx)(s(),{href:r,passHref:!0,children:d})}},9871:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var i=r(5893);r(7294);var l=r(5887),s=r(8843),n=r(1664),a=r.n(n);let o=s.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:r,link:s,isAvailable:n,size:c}=e,h=o.includes(t),u=n?"opacity-100":"opacity-20";return(0,i.jsx)(a(),{href:n?s:"subscribe",className:"no-underline",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(n?"cursor-pointer":"cursor-not-allowed"),children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(l.Z,{chartLogo:t,size:c})}),h?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(d,{size:c})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:r})]})})}let d=e=>{let{size:t}=e;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},2182:function(e,t,r){"use strict";r.d(t,{b:function(){return l}});var i=r(5893);let l=e=>{let{children:t}=e;return(0,i.jsx)("span",{className:"font-semibol bg-purple-100 p-1",children:t})}},9965:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var i=r(5893);r(7294);var l=r(8843),s=r(4588),n=r(1859),a=r(6438),o=r(1832),c=r.n(o);let d=e=>{let{direction:t,text:r,children:l}=e;return(0,i.jsx)("span",{className:c().tooltip+" "+c()[t],id:r,children:l})};var h=r(5887);function u(e){let{title:t,description:r,chartType:o,showSectionLink:c=!1,showInspirationLink:u=!0,showD3GalleryLink:x=!0}=e,m=l.c.find(e=>e.id===o);return(0,i.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,i.jsxs)("div",{className:"flex justify-start items-center",children:[(0,i.jsx)("h1",{children:t}),o&&m&&(0,i.jsx)("div",{className:"w-20 ml-4",children:(0,i.jsx)(h.Z,{chartLogo:null==m?void 0:m.logo})})]}),(0,i.jsx)(n.r,{}),(0,i.jsx)("div",{className:"max-w-xxl  py-2",children:r}),o&&(0,i.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),m&&(0,i.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,i.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,i.jsx)(a.J,{href:(0,s.y)(m.reactURL),size:"sm",children:m.label+" section"})}),u&&(0,i.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,i.jsx)(a.J,{href:"https://www.dataviz-inspiration.com/"+m.id,size:"sm",children:"inspiration"})}),x&&(0,i.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,i.jsx)(a.J,{href:m.d3URL,size:"sm",children:"d3 gallery"})}),(0,i.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,i.jsx)(a.J,{href:m.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})}},8107:function(e,t,r){"use strict";r.d(t,{z:function(){return l}});var i=r(5893);let l=e=>{let{children:t,onClick:r,isFilled:l,size:s="md"}=e,n="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===s&&(n+="text-sm py-1 px-2"),"md"===s&&(n+="text-md py-2 px-4"),l?n+=" bg-reactGallery hover:bg-reactGallery text-white":n+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,i.jsx)("button",{className:n,onClick:r,children:t})}},615:function(e,t,r){"use strict";r.d(t,{Y:function(){return l}});var i=r(5893);let l=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},9973:function(e,t,r){"use strict";r.d(t,{B:function(){return l}});var i=r(7294);let l=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[r,l]=(0,i.useState)(t),s=()=>{l(t())};return(0,i.useEffect)(()=>(window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)),[]),(0,i.useLayoutEffect)(()=>{s()},[]),r}},1832:function(e){e.exports={tooltip:"tooltip_tooltip__b_kg5",right:"tooltip_right__zvLDU",left:"tooltip_left__mQ0Xf",bottom:"tooltip_bottom__MVFNa",top:"tooltip_top__kPfp4"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}}]);