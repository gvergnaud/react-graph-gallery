(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7542,6546],{4101:function(r,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/correlogram",function(){return e(3254)}])},7197:function(r,a,e){"use strict";e.d(a,{Z:function(){return d}});var t=e(5893),i=(e(7294),e(6761)),o=e(1878),n=e(1664),s=o.c.filter((function(r){return"general"===r.family})).map((function(r){return r.logo}));function v(r){var a=r.chartLogo,e=r.caption,o=r.link,v=r.isAvailable,c=r.size,u=s.includes(a),d=v?"opacity-100":"opacity-20",h=v?"cursor-pointer":"cursor-not-allowed";return(0,t.jsx)(n.default,{href:v?o:"subscribe",children:(0,t.jsxs)("div",{className:"flex flex-col items-center",children:[(0,t.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+d+" "+h,children:[(0,t.jsx)("div",{className:"absolute",children:(0,t.jsx)(i.Z,{chartLogo:a})}),u?(0,t.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,t.jsx)(l,{size:c})}):(0,t.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full z-30",children:(0,t.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,t.jsx)("p",{className:"font-light text-sm text-gray-600 "+d,children:e})]})})}var l=function(r){var a=r.size;return(0,t.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,t.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},c=e(3414),u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function d(r){var a=r.chartFamily,e=o.c.filter((function(r){return r.family===a})).map((function(r,a){var e=(0,c.y)(r.reactURL);return(0,t.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,t.jsx)(v,{link:e,chartLogo:r.logo,caption:r.label,isAvailable:r.isAvailable,size:129})},a)}));return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:a+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===u||void 0===u?void 0:u[a]}),(0,t.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:e})]})}},33:function(r,a,e){"use strict";e.d(a,{$:function(){return l}});var t=e(5893),i=e(7294),o=e(217),n=e(4893),s=e(5380),v=e(7975),l=function(r){var a=r.VizComponent,e=r.vizName,l=r.height,c=void 0===l?400:l,u=r.maxWidth,d=void 0===u?800:u,h=r.caption,p=(0,i.useState)(!1),g=p[0],f=p[1],m=(0,i.useRef)(null),x=(0,o.B)(m);return(0,t.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:g?(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,t.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,t.jsx)(v.X,{vizName:e})}),(0,t.jsx)("div",{className:"flex justify-center mt-2",children:(0,t.jsx)(n.z,{size:"sm",onClick:function(){return f(!g)},children:"Hide Sandbox"})})]}):(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,t.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,t.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:m,className:"pointer-events-auto",children:(0,t.jsx)(a,{height:c,width:x.width})})}),(0,t.jsx)(s.Y,{children:h}),(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)(n.z,{size:"sm",onClick:function(){return f(!g)},children:"Show code"})})]})})}},7975:function(r,a,e){"use strict";e.d(a,{X:function(){return i}});var t=e(5893),i=(e(7294),function(r){var a="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+r.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,t.jsx)("iframe",{src:a,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},1884:function(r,a,e){"use strict";e.d(a,{A:function(){return d}});var t=e(5893),i=e(3185),o=e(1261),n=e(7294),s=e(3924),v=e.n(s);function l(){var r=(0,n.useState)([]),a=r[0],e=r[1],i=(0,n.useState)(0),o=i[0],s=i[1];return(0,n.useEffect)((function(){var r=Array.from(document.querySelectorAll("h2"));e(r)}),[]),(0,n.useEffect)((function(){var r=function(){var r=a.map((function(r){return r.offsetTop-r.scrollTop+r.clientTop})),e=window.scrollY+150,t=r.reduce((function(r,a){return Math.abs(a-e)<Math.abs(r-e)?a:r}),0),i=r.findIndex((function(r){return r===t}));s(-1===i?0:i)};return window.addEventListener("scroll",r),function(){return window.removeEventListener("scroll",r)}}),[a]),(0,t.jsx)("div",{className:v().tableOfContent,children:a.map((function(r,e){return(0,t.jsx)("p",{className:o===e?"".concat(v().tocItem," ").concat(v().tocItemActive):v().tocItem,onClick:function(r){r.preventDefault(),a[e].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:r.id.charAt(0).toUpperCase()+r.id.slice(1)},r.id)}))})}var c=e(8171),u=e(6978),d=function(r){var a=r.children,e=r.title,n=r.seoDescription;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.A,{title:e,seoDescription:n}),(0,t.jsxs)("div",{className:"wrapper",children:[(0,t.jsx)(i.Z,{}),a]}),(0,t.jsx)(u.Z,{}),(0,t.jsx)("div",{className:"wrapper",children:(0,t.jsx)(o.Z,{})}),(0,t.jsx)(l,{})]})}},1687:function(r,a,e){"use strict";e.d(a,{J:function(){return o}});var t=e(5893),i=e(1664),o=function(r){var a=r.children,e=r.href,o=r.isFilled,n=r.size,s=void 0===n?"md":n,v=r.isFaded,l=e.startsWith("www")||e.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";c+=o?" bg-reactGallery hover:bg-reactGallery text-white ":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===s&&(c+="text-sm py-1 px-2 "),"md"===s&&(c+="text-md py-2 px-4 "),v&&(c+="opacity-60");var u=(0,t.jsx)("span",{className:c,children:a});return l?(0,t.jsx)("a",{href:e,target:"_blank",children:u}):(0,t.jsx)(i.default,{href:e,passHref:!0,children:(0,t.jsx)("a",{children:u})})}},8807:function(r,a,e){"use strict";e.d(a,{Z:function(){return d}});var t=e(5893),i=(e(7294),e(1878)),o=e(3414),n=e(3919),s=e(1687),v=e(3187),l=e.n(v),c=function(r){var a=r.direction,e=r.text,i=r.children;return(0,t.jsx)("span",{className:l().tooltip+" "+l()[a],id:e,children:i})},u=e(6761);function d(r){var a=r.title,e=r.description,v=r.chartType,l=r.showSectionLink,d=void 0!==l&&l,h=r.showInspirationLink,p=void 0===h||h,g=r.showD3GalleryLink,f=void 0===g||g,m=i.c.find((function(r){return r.id===v}));return m?(0,t.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,t.jsxs)("div",{className:"flex justify-start items-center",children:[(0,t.jsx)("h1",{children:a}),(0,t.jsx)("div",{className:"w-20 ml-4",children:(0,t.jsx)(u.Z,{chartLogo:null===m||void 0===m?void 0:m.logo})})]}),(0,t.jsx)(n.r,{}),(0,t.jsx)("div",{className:"max-w-xxl py-2",children:e}),v&&(0,t.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),v&&(0,t.jsxs)("div",{className:"flex flex-row flex-wrap",children:[d&&(0,t.jsx)(c,{text:"kkkk",direction:"bottom",children:(0,t.jsx)(s.J,{href:(0,o.y)(m.reactURL),size:"sm",children:m.label+" section"})}),p&&(0,t.jsx)(c,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,t.jsx)(s.J,{href:"https://www.dataviz-inspiration.com/"+m.id,size:"sm",children:"inspiration"})}),f&&(0,t.jsx)(c,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,t.jsx)(s.J,{href:m.d3URL,size:"sm",children:"d3 gallery"})}),(0,t.jsx)(c,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,t.jsx)(s.J,{href:m.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]}):null}},4893:function(r,a,e){"use strict";e.d(a,{z:function(){return i}});var t=e(5893),i=function(r){var a=r.children,e=r.onClick,i=r.isFilled,o=r.size,n=void 0===o?"md":o,s="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===n&&(s+="text-sm py-1 px-2"),"md"===n&&(s+="text-md py-2 px-4"),s+=i?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,t.jsx)("button",{className:s,onClick:e,children:a})}},5380:function(r,a,e){"use strict";e.d(a,{Y:function(){return i}});var t=e(5893),i=function(r){var a=r.children;return(0,t.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:a})}},8193:function(r,a,e){"use strict";e.d(a,{d:function(){return s}});var t=e(5893),i=e(4725),o=e.n(i),n=e(7294),s=function(r){var a=r.code,e=(0,n.useRef)(null);return(0,n.useEffect)((function(){e.current&&o().highlightElement(e.current)}),[e,a]),(0,t.jsx)("div",{className:"mb-6",children:(0,t.jsx)("pre",{className:"rounded-md line-numbers",children:(0,t.jsx)("code",{ref:e,className:"p-0 language-js",children:a})})})}},3990:function(r,a,e){"use strict";e.d(a,{X:function(){return n}});var t=e(5893),i=e(5102),o=e.n(i),n=function(r){var a=r.img,e=r.title,i=r.description,n=r.link,s=r.alt;return(0,t.jsxs)("figure",{className:o().container,children:[(0,t.jsx)("img",{src:"/chart/"+a,className:o().image,alt:s}),(0,t.jsxs)("figcaption",{children:[(0,t.jsx)("p",{className:o().title,children:(0,t.jsx)("b",{children:e})}),(0,t.jsx)("div",{className:"font-light",children:i}),(0,t.jsx)("a",{href:n})]})]})}},2199:function(r,a,e){"use strict";e.d(a,{E:function(){return i}});var t=e(5893),i=(e(7294),function(r){var a=r.children;return(0,t.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:a})})},217:function(r,a,e){"use strict";e.d(a,{B:function(){return i}});var t=e(7294),i=function(r){var a=function(){return{width:r.current?r.current.offsetWidth:0,height:r.current?r.current.offsetHeight:0}},e=(0,t.useState)(a),i=e[0],o=e[1],n=function(){o(a())};return(0,t.useEffect)((function(){return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),(0,t.useLayoutEffect)((function(){n()}),[]),i}},3254:function(r,a,e){"use strict";e.r(a),e.d(a,{default:function(){return C}});var t=e(5893),i=e(7294),o=e(1884),n=e(8807),s=e(7197),v=e(8193),l=e(33),c=[{var1:5.1,var2:3.5,var3:1.4,var4:.2,group:"setosa"},{var1:4.9,var2:3,var3:1.4,var4:.2,group:"setosa"},{var1:4.7,var2:3.2,var3:1.3,var4:.2,group:"setosa"},{var1:4.6,var2:3.1,var3:1.5,var4:.2,group:"setosa"},{var1:5,var2:3.6,var3:1.4,var4:.2,group:"setosa"},{var1:5.4,var2:3.9,var3:1.7,var4:.4,group:"setosa"},{var1:4.6,var2:3.4,var3:1.4,var4:.3,group:"setosa"},{var1:5,var2:3.4,var3:1.5,var4:.2,group:"setosa"},{var1:4.4,var2:2.9,var3:1.4,var4:.2,group:"setosa"},{var1:4.9,var2:3.1,var3:1.5,var4:.1,group:"setosa"},{var1:5.4,var2:3.7,var3:1.5,var4:.2,group:"setosa"},{var1:4.8,var2:3.4,var3:1.6,var4:.2,group:"setosa"},{var1:4.8,var2:3,var3:1.4,var4:.1,group:"setosa"},{var1:4.3,var2:3,var3:1.1,var4:.1,group:"setosa"},{var1:5.8,var2:4,var3:1.2,var4:.2,group:"setosa"},{var1:5.7,var2:4.4,var3:1.5,var4:.4,group:"setosa"},{var1:5.4,var2:3.9,var3:1.3,var4:.4,group:"setosa"},{var1:5.1,var2:3.5,var3:1.4,var4:.3,group:"setosa"},{var1:5.7,var2:3.8,var3:1.7,var4:.3,group:"setosa"},{var1:5.1,var2:3.8,var3:1.5,var4:.3,group:"setosa"},{var1:5.4,var2:3.4,var3:1.7,var4:.2,group:"setosa"},{var1:5.1,var2:3.7,var3:1.5,var4:.4,group:"setosa"},{var1:4.6,var2:3.6,var3:1,var4:.2,group:"setosa"},{var1:5.1,var2:3.3,var3:1.7,var4:.5,group:"setosa"},{var1:4.8,var2:3.4,var3:1.9,var4:.2,group:"setosa"},{var1:5,var2:3,var3:1.6,var4:.2,group:"setosa"},{var1:5,var2:3.4,var3:1.6,var4:.4,group:"setosa"},{var1:5.2,var2:3.5,var3:1.5,var4:.2,group:"setosa"},{var1:5.2,var2:3.4,var3:1.4,var4:.2,group:"setosa"},{var1:4.7,var2:3.2,var3:1.6,var4:.2,group:"setosa"},{var1:4.8,var2:3.1,var3:1.6,var4:.2,group:"setosa"},{var1:5.4,var2:3.4,var3:1.5,var4:.4,group:"setosa"},{var1:5.2,var2:4.1,var3:1.5,var4:.1,group:"setosa"},{var1:5.5,var2:4.2,var3:1.4,var4:.2,group:"setosa"},{var1:4.9,var2:3.1,var3:1.5,var4:.2,group:"setosa"},{var1:5,var2:3.2,var3:1.2,var4:.2,group:"setosa"},{var1:5.5,var2:3.5,var3:1.3,var4:.2,group:"setosa"},{var1:4.9,var2:3.6,var3:1.4,var4:.1,group:"setosa"},{var1:4.4,var2:3,var3:1.3,var4:.2,group:"setosa"},{var1:5.1,var2:3.4,var3:1.5,var4:.2,group:"setosa"},{var1:5,var2:3.5,var3:1.3,var4:.3,group:"setosa"},{var1:4.5,var2:2.3,var3:1.3,var4:.3,group:"setosa"},{var1:4.4,var2:3.2,var3:1.3,var4:.2,group:"setosa"},{var1:5,var2:3.5,var3:1.6,var4:.6,group:"setosa"},{var1:5.1,var2:3.8,var3:1.9,var4:.4,group:"setosa"},{var1:4.8,var2:3,var3:1.4,var4:.3,group:"setosa"},{var1:5.1,var2:3.8,var3:1.6,var4:.2,group:"setosa"},{var1:4.6,var2:3.2,var3:1.4,var4:.2,group:"setosa"},{var1:5.3,var2:3.7,var3:1.5,var4:.2,group:"setosa"},{var1:5,var2:3.3,var3:1.4,var4:.2,group:"setosa"},{var1:7,var2:3.2,var3:4.7,var4:1.4,group:"versicolor"},{var1:6.4,var2:3.2,var3:4.5,var4:1.5,group:"versicolor"},{var1:6.9,var2:3.1,var3:4.9,var4:1.5,group:"versicolor"},{var1:5.5,var2:2.3,var3:4,var4:1.3,group:"versicolor"},{var1:6.5,var2:2.8,var3:4.6,var4:1.5,group:"versicolor"},{var1:5.7,var2:2.8,var3:4.5,var4:1.3,group:"versicolor"},{var1:6.3,var2:3.3,var3:4.7,var4:1.6,group:"versicolor"},{var1:4.9,var2:2.4,var3:3.3,var4:1,group:"versicolor"},{var1:6.6,var2:2.9,var3:4.6,var4:1.3,group:"versicolor"},{var1:5.2,var2:2.7,var3:3.9,var4:1.4,group:"versicolor"},{var1:5,var2:2,var3:3.5,var4:1,group:"versicolor"},{var1:5.9,var2:3,var3:4.2,var4:1.5,group:"versicolor"},{var1:6,var2:2.2,var3:4,var4:1,group:"versicolor"},{var1:6.1,var2:2.9,var3:4.7,var4:1.4,group:"versicolor"},{var1:5.6,var2:2.9,var3:3.6,var4:1.3,group:"versicolor"},{var1:6.7,var2:3.1,var3:4.4,var4:1.4,group:"versicolor"},{var1:5.6,var2:3,var3:4.5,var4:1.5,group:"versicolor"},{var1:5.8,var2:2.7,var3:4.1,var4:1,group:"versicolor"},{var1:6.2,var2:2.2,var3:4.5,var4:1.5,group:"versicolor"},{var1:5.6,var2:2.5,var3:3.9,var4:1.1,group:"versicolor"},{var1:5.9,var2:3.2,var3:4.8,var4:1.8,group:"versicolor"},{var1:6.1,var2:2.8,var3:4,var4:1.3,group:"versicolor"},{var1:6.3,var2:2.5,var3:4.9,var4:1.5,group:"versicolor"},{var1:6.1,var2:2.8,var3:4.7,var4:1.2,group:"versicolor"},{var1:6.4,var2:2.9,var3:4.3,var4:1.3,group:"versicolor"},{var1:6.6,var2:3,var3:4.4,var4:1.4,group:"versicolor"},{var1:6.8,var2:2.8,var3:4.8,var4:1.4,group:"versicolor"},{var1:6.7,var2:3,var3:5,var4:1.7,group:"versicolor"},{var1:6,var2:2.9,var3:4.5,var4:1.5,group:"versicolor"},{var1:5.7,var2:2.6,var3:3.5,var4:1,group:"versicolor"},{var1:5.5,var2:2.4,var3:3.8,var4:1.1,group:"versicolor"},{var1:5.5,var2:2.4,var3:3.7,var4:1,group:"versicolor"},{var1:5.8,var2:2.7,var3:3.9,var4:1.2,group:"versicolor"},{var1:6,var2:2.7,var3:5.1,var4:1.6,group:"versicolor"},{var1:5.4,var2:3,var3:4.5,var4:1.5,group:"versicolor"},{var1:6,var2:3.4,var3:4.5,var4:1.6,group:"versicolor"},{var1:6.7,var2:3.1,var3:4.7,var4:1.5,group:"versicolor"},{var1:6.3,var2:2.3,var3:4.4,var4:1.3,group:"versicolor"},{var1:5.6,var2:3,var3:4.1,var4:1.3,group:"versicolor"},{var1:5.5,var2:2.5,var3:4,var4:1.3,group:"versicolor"},{var1:5.5,var2:2.6,var3:4.4,var4:1.2,group:"versicolor"},{var1:6.1,var2:3,var3:4.6,var4:1.4,group:"versicolor"},{var1:5.8,var2:2.6,var3:4,var4:1.2,group:"versicolor"},{var1:5,var2:2.3,var3:3.3,var4:1,group:"versicolor"},{var1:5.6,var2:2.7,var3:4.2,var4:1.3,group:"versicolor"},{var1:5.7,var2:3,var3:4.2,var4:1.2,group:"versicolor"},{var1:5.7,var2:2.9,var3:4.2,var4:1.3,group:"versicolor"},{var1:6.2,var2:2.9,var3:4.3,var4:1.3,group:"versicolor"},{var1:5.1,var2:2.5,var3:3,var4:1.1,group:"versicolor"},{var1:5.7,var2:2.8,var3:4.1,var4:1.3,group:"versicolor"},{var1:6.3,var2:3.3,var3:6,var4:2.5,group:"virginica"},{var1:5.8,var2:2.7,var3:5.1,var4:1.9,group:"virginica"},{var1:7.1,var2:3,var3:5.9,var4:2.1,group:"virginica"},{var1:6.3,var2:2.9,var3:5.6,var4:1.8,group:"virginica"},{var1:6.5,var2:3,var3:5.8,var4:2.2,group:"virginica"},{var1:7.6,var2:3,var3:6.6,var4:2.1,group:"virginica"},{var1:4.9,var2:2.5,var3:4.5,var4:1.7,group:"virginica"},{var1:7.3,var2:2.9,var3:6.3,var4:1.8,group:"virginica"},{var1:6.7,var2:2.5,var3:5.8,var4:1.8,group:"virginica"},{var1:7.2,var2:3.6,var3:6.1,var4:2.5,group:"virginica"},{var1:6.5,var2:3.2,var3:5.1,var4:2,group:"virginica"},{var1:6.4,var2:2.7,var3:5.3,var4:1.9,group:"virginica"},{var1:6.8,var2:3,var3:5.5,var4:2.1,group:"virginica"},{var1:5.7,var2:2.5,var3:5,var4:2,group:"virginica"},{var1:5.8,var2:2.8,var3:5.1,var4:2.4,group:"virginica"},{var1:6.4,var2:3.2,var3:5.3,var4:2.3,group:"virginica"},{var1:6.5,var2:3,var3:5.5,var4:1.8,group:"virginica"},{var1:7.7,var2:3.8,var3:6.7,var4:2.2,group:"virginica"},{var1:7.7,var2:2.6,var3:6.9,var4:2.3,group:"virginica"},{var1:6,var2:2.2,var3:5,var4:1.5,group:"virginica"},{var1:6.9,var2:3.2,var3:5.7,var4:2.3,group:"virginica"},{var1:5.6,var2:2.8,var3:4.9,var4:2,group:"virginica"},{var1:7.7,var2:2.8,var3:6.7,var4:2,group:"virginica"},{var1:6.3,var2:2.7,var3:4.9,var4:1.8,group:"virginica"},{var1:6.7,var2:3.3,var3:5.7,var4:2.1,group:"virginica"},{var1:7.2,var2:3.2,var3:6,var4:1.8,group:"virginica"},{var1:6.2,var2:2.8,var3:4.8,var4:1.8,group:"virginica"},{var1:6.1,var2:3,var3:4.9,var4:1.8,group:"virginica"},{var1:6.4,var2:2.8,var3:5.6,var4:2.1,group:"virginica"},{var1:7.2,var2:3,var3:5.8,var4:1.6,group:"virginica"},{var1:7.4,var2:2.8,var3:6.1,var4:1.9,group:"virginica"},{var1:7.9,var2:3.8,var3:6.4,var4:2,group:"virginica"},{var1:6.4,var2:2.8,var3:5.6,var4:2.2,group:"virginica"},{var1:6.3,var2:2.8,var3:5.1,var4:1.5,group:"virginica"},{var1:6.1,var2:2.6,var3:5.6,var4:1.4,group:"virginica"},{var1:7.7,var2:3,var3:6.1,var4:2.3,group:"virginica"},{var1:6.3,var2:3.4,var3:5.6,var4:2.4,group:"virginica"},{var1:6.4,var2:3.1,var3:5.5,var4:1.8,group:"virginica"},{var1:6,var2:3,var3:4.8,var4:1.8,group:"virginica"},{var1:6.9,var2:3.1,var3:5.4,var4:2.1,group:"virginica"},{var1:6.7,var2:3.1,var3:5.6,var4:2.4,group:"virginica"},{var1:6.9,var2:3.1,var3:5.1,var4:2.3,group:"virginica"},{var1:5.8,var2:2.7,var3:5.1,var4:1.9,group:"virginica"},{var1:6.8,var2:3.2,var3:5.9,var4:2.3,group:"virginica"},{var1:6.7,var2:3.3,var3:5.7,var4:2.5,group:"virginica"},{var1:6.7,var2:3,var3:5.2,var4:2.3,group:"virginica"},{var1:6.3,var2:2.5,var3:5,var4:1.9,group:"virginica"},{var1:6.5,var2:3,var3:5.2,var4:2,group:"virginica"},{var1:6.2,var2:3.4,var3:5.4,var4:2.3,group:"virginica"},{var1:5.9,var2:3,var3:5.1,var4:1.8,group:"virginica"}],u=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],d={top:20,right:20,bottom:20,left:20},h=e(5250),p=e(6920),g=e.n(p),f=function(r){var a=r.xScale,e=r.pixelsPerTick,o=r.label,n=a.range(),s=(0,i.useMemo)((function(){var r=n[1]-n[0],t=Math.floor(r/e);return a.ticks(t).map((function(r){return{value:r,xOffset:a(r)}}))}),[a]);return(0,t.jsxs)("g",{className:g().axisContainer,children:[(0,t.jsx)("path",{d:["M",n[0],0,"L",n[1],0].join(" "),fill:"none",stroke:"currentColor",className:g().line}),s.map((function(r){var a=r.value,e=r.xOffset;return(0,t.jsxs)("g",{transform:"translate(".concat(e,", 0)"),children:[(0,t.jsx)("line",{y2:3,stroke:"currentColor"}),(0,t.jsx)("text",{className:g().label,style:{transform:"translateY(12px)"},children:a})]},a)})),(0,t.jsx)("text",{className:g().title,x:n[1],y:30,textAnchor:"end",children:o})]})};function m(r){return function(r){if(Array.isArray(r)){for(var a=0,e=new Array(r.length);a<r.length;a++)e[a]=r[a];return e}}(r)||function(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var x=function(r){var a=r.width,e=r.height,o=r.data,n=r.limits,s=a-d.right-d.left,v=e-d.top-d.bottom,l=m(new Set(o.map((function(r){return r.group})))).sort(),c=h.PKp().domain(l).range(u),p=(0,i.useMemo)((function(){return h.BYU().domain(n).range([10,s]).nice()}),[o,a]),g=(0,i.useMemo)((function(){return h.Ly_().value((function(r){return r})).domain(p.domain()).thresholds(p.ticks(40))}),[p]),x=(0,i.useMemo)((function(){return o.map((function(r){return{group:r,buckets:g(r.values)}}))}),[o]),j=(0,i.useMemo)((function(){var r,a=(r=Math).max.apply(r,m(x.map((function(r){var a;return(a=Math).max.apply(a,m(r.buckets.map((function(r){return null===r||void 0===r?void 0:r.length}))))}))));return h.BYU().range([v,0]).domain([0,a]).nice()}),[o,e]),b=x.map((function(r,a){return r.buckets.map((function(e,i){return(0,t.jsx)("rect",{x:p(e.x0)+0,width:p(e.x1)-p(e.x0)-0,y:j(e.length),height:v-j(e.length),fill:c(r.group.group),opacity:1},a+"_"+i)}))}));return(0,t.jsx)("svg",{width:a,height:e,children:(0,t.jsxs)("g",{width:s,height:v,transform:"translate(".concat([d.left,d.top].join(","),")"),children:[b,(0,t.jsx)("g",{transform:"translate(0, ".concat(v,")"),children:(0,t.jsx)(f,{xScale:p,pixelsPerTick:20})})]})})},j=function(r){var a=r.yScale,e=r.pixelsPerTick,o=r.label,n=a.range(),s=(0,i.useMemo)((function(){var r=n[0]-n[1],t=Math.floor(r/e);return a.ticks(t).map((function(r){return{value:r,yOffset:a(r)}}))}),[a]);return(0,t.jsxs)("g",{className:g().axisContainer,children:[(0,t.jsx)("path",{d:["M",0,n[0],"L",0,n[1]].join(" "),fill:"none",stroke:"black",strokeWidth:.5,className:g().line}),s.map((function(r){var a=r.value,e=r.yOffset;return(0,t.jsxs)("g",{transform:"translate(0, ".concat(e,")"),children:[(0,t.jsx)("line",{x2:-3,stroke:"currentColor"}),(0,t.jsx)("text",{style:{transform:"translateX(-20px)"},className:g().label,x:10,children:a},a)]},a)})),(0,t.jsx)("text",{className:g().title,x:0,y:-30,textAnchor:"end",transform:"rotate(-90)",children:o})]})};function b(r,a){return function(r){if(Array.isArray(r))return r}(r)||function(r,a){var e=[],t=!0,i=!1,o=void 0;try{for(var n,s=r[Symbol.iterator]();!(t=(n=s.next()).done)&&(e.push(n.value),!a||e.length!==a);t=!0);}catch(v){i=!0,o=v}finally{try{t||null==s.return||s.return()}finally{if(i)throw o}}return e}(r,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function w(r){return function(r){if(Array.isArray(r)){for(var a=0,e=new Array(r.length);a<r.length;a++)e[a]=r[a];return e}}(r)||function(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y=function(r){var a=r.width,e=r.height,o=r.data,n=r.xLabel,s=r.yLabel,v=a-d.right-d.left,l=e-d.top-d.bottom,c=(0,i.useMemo)((function(){var r=b(h.Wem(o.map((function(r){return r.y}))),2),a=r[0],e=r[1];return h.BYU().domain([a,e]).range([l,0]).nice()}),[o,e]),p=(0,i.useMemo)((function(){var r=b(h.Wem(o.map((function(r){return r.x}))),2),a=(r[0],r[1]);return h.BYU().domain([0,a]).range([0,v]).nice()}),[o,a]),g=w(new Set(o.map((function(r){return r.group})))).sort(),m=h.PKp().domain(g).range(u),x=o.map((function(r,a){return(0,t.jsx)("circle",{r:3,cx:p(r.x),cy:c(r.y),opacity:1,stroke:m(r.group),fill:m(r.group),fillOpacity:.8,strokeWidth:1},a)}));return(0,t.jsx)("svg",{width:a,height:e,style:{overflow:"visible"},children:(0,t.jsxs)("g",{width:v,height:l,transform:"translate(".concat([d.left,d.top].join(","),")"),children:[x,(0,t.jsx)(j,{yScale:c,pixelsPerTick:20,label:s}),(0,t.jsx)("g",{transform:"translate(0, ".concat(l,")"),children:(0,t.jsx)(f,{xScale:p,pixelsPerTick:20,label:n})})]})})};function N(r){return function(r){if(Array.isArray(r)){for(var a=0,e=new Array(r.length);a<r.length;a++)e[a]=r[a];return e}}(r)||function(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var k=function(r){var a=r.width,e=r.height,i=r.data,o=a-d.right-d.left,n=e-d.top-d.bottom,s=["var1","var2","var3","var4"],v=N(new Set(i.map((function(r){return r.group})))),l=o/s.length,c=n/s.length,u=s.map((function(r,a){return s.map((function(e,o){if(e===r){var n=v.map((function(r){return{group:r,values:i.filter((function(a){return a.group===r})).map((function(r){return r[e]}))}}));return(0,t.jsx)(x,{width:l,height:c,data:n,limits:[0,8]})}var u=i.map((function(a){return{x:a[e],y:a[r],group:a.group}}));return(0,t.jsx)("div",{children:(0,t.jsx)(y,{width:l,height:c,data:u,yLabel:0===o?s[a]:void 0,xLabel:a===s.length-1?s[o]:void 0})},a+"-"+o)}))}));return(0,t.jsx)("div",{style:{width:a,height:e},children:(0,t.jsx)("div",{style:{width:o,height:n,display:"grid",gridTemplateColumns:"1fr ".repeat(s.length),transform:"translate(".concat(d.left,"px, ").concat(d.top,"px)")},children:u})})},_=function(r){var a=r.width,e=void 0===a?700:a,i=r.height,o=void 0===i?400:i;return(0,t.jsx)(k,{data:c,width:e,height:o})},z=e(1664),A=e(2199),L=e(3990),S=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["In this blog post, we will be exploring how to build a"," ",(0,t.jsx)("a",{href:"https://www.data-to-viz.com/graph/correlogram.html",children:"correlogram"})," ","with React and D3.js. A correlogram is a graphical representation of the"," ",(0,t.jsx)("b",{children:"correlation matrix"})," for a given dataset. It is a useful tool for visualizing the ",(0,t.jsx)("b",{children:"relationships"})," between different variables in a dataset, and can help identify potential ",(0,t.jsx)("b",{children:"correlations"})," that may not be immediately obvious."]}),(0,t.jsxs)("p",{children:["Building a correlogram with React and D3.js allows us to create a highly interactive and customizable visualization. We will be able to use React's powerful ",(0,t.jsx)("b",{children:"component-based"})," approach to build our visualization, while leveraging the flexibility and power of D3.js to create a dynamic and engaging visual representation of our data."]})]});function C(){return(0,t.jsxs)(o.A,{title:"Correlogram with React",seoDescription:"How to build a correlogram with React and D3.js. A set of re-usable components",children:[(0,t.jsx)(n.Z,{title:"Correlogram",description:S,chartType:"correlogram"}),(0,t.jsx)("h2",{id:"definition",children:"Correlogram = scatter plot + histogram"}),(0,t.jsxs)("p",{children:["A correlogram uses ",(0,t.jsx)("b",{children:"histograms"})," to show the distribution of each numeric variable on the diagonal of the matrix. It uses"," ",(0,t.jsx)("b",{children:"scatter plots"})," to show the relationship of each pair of variable on every other cells."]}),(0,t.jsxs)("p",{children:["As a result, it is required to understand how to build a"," ",(0,t.jsx)(z.default,{href:"/histogram",children:"histogram"})," and a"," ",(0,t.jsx)(z.default,{href:"/scatter-plot",children:"scatter plot"})," component using React and d3.js! In this post, we will just show how to leverage those reusable components to build a correlogram."]}),(0,t.jsxs)(A.E,{children:[(0,t.jsx)(L.X,{link:"/histogram",title:"Histogram",description:(0,t.jsx)("p",{children:"Learn how to build a histogram with react and d3.js"}),img:"histogram-basic.png",alt:"Picture of a simple histogram made with react and d3.js"}),(0,t.jsx)(L.X,{link:"/scatter-plot",title:"Scatter plot",description:(0,t.jsx)("p",{children:"Learn how to build a scatter plot with react and d3.js"}),img:"scatterplot-basic.png",alt:"Picture of a simple scatter plot made with react and d3.js"}),(0,t.jsx)(L.X,{link:"/bubble-plot",title:"Bubble plot",description:(0,t.jsx)("p",{children:"Learn how to build a bubble plot with react and d3.js"}),img:"bubble-plot-with-legend.png",alt:"Picture of a simple bubble plot with a legend made with react and d3.js"})]}),(0,t.jsx)("h2",{id:"data",children:"The Data"}),(0,t.jsxs)("p",{children:["The dataset provides several ",(0,t.jsx)("b",{children:"numeric"})," values for a set of data points. It can also add some ",(0,t.jsx)("b",{children:"categorical"})," variables that can be added to customize the marker colors."]}),(0,t.jsxs)("p",{children:["The suggested data structure is an array of ",(0,t.jsx)("code",{children:"object"}),", where each object is a data point. It can have as many numeric properties as needed."]}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:"Here is a minimal example of the data structure:"}),(0,t.jsx)(v.d,{code:I}),(0,t.jsx)("h2",{id:"basic correlogram",children:"Basic correlogram"}),(0,t.jsxs)("p",{children:["Once the 2 ",(0,t.jsx)(z.default,{href:"/histogram",children:"Histogram"})," and"," ",(0,t.jsx)(z.default,{href:"/scatter-plot",children:"ScatterPlot"})," components are available, it's just a matter of using them for ",(0,t.jsx)("b",{children:"each pair"})," of variable in the dataset."]}),(0,t.jsxs)("p",{children:["We can list the variable in a ",(0,t.jsx)("code",{children:"allVariables"})," array, and map twice on it. We need to render a distribution for the diagonal, and a scatterplot otherwise. Something like:"]}),(0,t.jsx)(v.d,{code:T}),(0,t.jsxs)("p",{children:["Note that ",(0,t.jsx)("code",{children:"graphWidth"})," and ",(0,t.jsx)("code",{children:"graphHeight"})," can easily be computed from the total width and height, once we know how many variables there are."]}),(0,t.jsxs)("p",{children:["Once the list of react nodes with all the individual charts is available (",(0,t.jsx)("code",{children:"allGraphs"}),"), it just a matter of rendering them in a"," ",(0,t.jsx)("code",{children:"div"})," with a ",(0,t.jsx)("code",{children:"grid"})," display."]}),(0,t.jsx)(v.d,{code:E}),(0,t.jsxs)("p",{children:["And ",(0,t.jsx)("i",{children:"voil\xe0"}),", a first decent correlogram for your data analysis pipeline \ud83d\ude0a. It's not perfect yet. You probably want to give more love to ",(0,t.jsx)("b",{children:"axes"})," and ",(0,t.jsx)("b",{children:"labels"}),", add ",(0,t.jsx)("b",{children:"hover effect"})," and"," ",(0,t.jsx)("b",{children:"tooltips"}),". But hopefully that's a good template to get started."]}),(0,t.jsx)(l.$,{VizComponent:_,vizName:"CorrelogramBasic",maxWidth:700,height:700,caption:"A correlogram built with react and d3.js. It shows the relationship between the 4 numeric variables of the famous iris dataset."}),(0,t.jsxs)("p",{children:["Note: You can compare this code with the pure"," ",(0,t.jsx)("a",{href:"https://d3-graph-gallery.com/graph/correlogram_histo.html",children:"d3 alternative"}),". I find it much more readable."]}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,t.jsx)(s.Z,{chartFamily:"correlation"})]})}var I="\nconst data = [\n  {var1: 5.1, var2: 3.5, ..., group: 'setosa'},\n  {var1: 4.9, var2: 3.0, ..., group: 'setosa'},\n  ...\n]\n".trim(),T="\nconst allGraphs = allVariables.map((yVar, i) => {\n  return allVariables.map((xVar, j) => {\n\n    // If x and y variables are the same (diagonal), use a distribution.\n    if (xVar === yVar) {\n      const distributionData = ... // build distribution data\n\n      return (\n        <Histogram\n          width={graphWidth}\n          height={graphHeight}\n          data={distributionData}\n          limits={[0, 8]}\n        />\n      );\n    }\n\n    // Scatterplot dataset\n    const scatterData = ... // build scatter data\n\n    return (\n      <Scatterplot\n        width={graphWidth}\n        height={graphHeight}\n        data={scatterData}\n      />\n    );\n  });\n});\n".trim(),E='\nreturn (\n  <div\n    style={{\n      width,\n      height,\n    }}\n  >\n    <div\n      style={{\n        width: boundsWidth,\n        height: boundsHeight,\n        display: "grid",\n        gridTemplateColumns: "1fr ".repeat(allVariables.length),\n        transform: ...,\n      }}\n    >\n      {allGraphs}\n    </div>\n  </div>\n);\n'.trim()},5102:function(r){r.exports={container:"graphLinkImage_container__6vbL1",title:"graphLinkImage_title__86b4Y"}},3187:function(r){r.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3924:function(r){r.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}},6920:function(r){r.exports={axisContainer:"axis_axisContainer__eTDfN",label:"axis_label__v_Sb0",title:"axis_title__DtsyP"}}},function(r){r.O(0,[503,5660,358,9774,2888,179],(function(){return a=4101,r(r.s=a);var a}));var a=r.O();_N_E=a}]);