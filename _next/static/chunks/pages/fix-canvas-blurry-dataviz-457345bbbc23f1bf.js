(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2972],{95936:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fix-canvas-blurry-dataviz",function(){return i(37003)}])},61651:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var s=i(85893);i(67294);var n=i(49871),a=i(28843),r=i(77522);let l={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function o(e){let{chartFamily:t}=e,i=a.c.filter(e=>e.family===t).map((e,t)=>{let i=(0,r.y)(e.reactURL);return(0,s.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,s.jsx)(n.Z,{link:i,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==l?void 0:l[t]}),(0,s.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:i})]})}},88578:function(e,t,i){"use strict";i.d(t,{X:function(){return n}});var s=i(85893);i(67294);let n=e=>{let{vizName:t}=e;return(0,s.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},80153:function(e,t,i){"use strict";i.d(t,{A:function(){return u}});var s=i(85893),n=i(49700),a=i(63476),r=i(67294),l=i(63084),o=i.n(l);function c(){let[e,t]=(0,r.useState)([]),[i,n]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,r.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),i=window.scrollY+150,s=t.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,0),a=t.findIndex(e=>e===s);n(-1===a?0:a)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,s.jsx)("div",{className:o().tableOfContent,children:e.map((t,n)=>(0,s.jsx)("p",{className:i===n?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[n].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var h=i(17414),d=i(62594);let u=e=>{let{children:t,title:i,seoDescription:r}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.A,{title:i,seoDescription:r}),(0,s.jsx)(n.Z,{}),(0,s.jsx)("div",{className:"wrapper",children:t}),(0,s.jsx)(d.Z,{}),(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsx)(a.Z,{})}),(0,s.jsx)(c,{})]})}},49871:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var s=i(85893);i(67294);var n=i(95887),a=i(28843),r=i(41664),l=i.n(r);let o=a.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:i,link:a,isAvailable:r,size:c}=e,d=o.includes(t),u=r?"opacity-100":"opacity-20";return(0,s.jsx)(l(),{href:r?a:"subscribe",className:"no-underline",children:(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(r?"cursor-pointer":"cursor-not-allowed"),children:[(0,s.jsx)("div",{className:"absolute",children:(0,s.jsx)(n.Z,{chartLogo:t,size:c})}),d?(0,s.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,s.jsx)(h,{size:c})}):(0,s.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,s.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,s.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:i})]})})}let h=e=>{let{size:t}=e;return(0,s.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,s.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},80615:function(e,t,i){"use strict";i.d(t,{Y:function(){return n}});var s=i(85893);let n=e=>{let{children:t}=e;return(0,s.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,i){"use strict";i.d(t,{d:function(){return h}});var s=i(85893),n=i(32581),a=i(15660),r=i.n(a),l=i(67294),o=i(45993),c=i.n(o);let h=e=>{let{code:t}=e,[i,a]=(0,l.useState)(!1),o=(0,l.useRef)(null);(0,l.useEffect)(()=>{o.current&&r().highlightElement(o.current)},[o,t]);let h=(0,s.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),a(!0)},className:c().codeChunckCopyButton,children:i?"Copied":(0,s.jsx)(n.Z,{size:14,style:{padding:0}})});return(0,s.jsxs)("div",{className:"mb-6 relative",children:[(0,s.jsx)("pre",{className:"rounded-md line-numbers",children:(0,s.jsx)("code",{ref:o,className:"language-javascript",children:t})}),(0,s.jsx)("div",{className:c().copyButtonContainer,children:h})]})}},37003:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return b}});var s=i(85893),n=i(67294),a=i(80153),r=i(43710),l=i(62594),o=i(61651),c=i(3572),h=i(80615);let d=e=>{let{width:t,height:i}=e,a=window.devicePixelRatio,r=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=r.current;null==e||e.setAttribute("width","".concat(t*a,"px")),null==e||e.setAttribute("height","".concat(i*a,"px"));let s=null==e?void 0:e.getContext("2d");s&&(s.scale(a,a),s.lineWidth=15,s.beginPath(),s.moveTo(t/2,20),s.lineTo(t-20,i/2),s.lineTo(t/2,i-20),s.lineTo(20,i/2),s.lineTo(t/2,i/2),s.stroke())},[t,i,a]),(0,s.jsx)("div",{children:(0,s.jsx)("canvas",{ref:r,style:{width:t,height:i,backgroundColor:"#afb8c133"}})})},u=e=>{let{width:t,height:i}=e,a=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=a.current,s=null==e?void 0:e.getContext("2d");s&&(s.lineWidth=15,s.beginPath(),s.moveTo(t/2,20),s.lineTo(t-20,i/2),s.lineTo(t/2,i-20),s.lineTo(20,i/2),s.lineTo(t/2,i/2),s.stroke())},[t,i]),(0,s.jsx)("div",{children:(0,s.jsx)("canvas",{ref:a,style:{width:t,height:i,backgroundColor:"#afb8c133"},width:t,height:i})})};var x=i(71415),p=i(88578);function m(e){let{vizName:t,label:i}=e,[a,r]=n.useState(!1);return(0,s.jsxs)(s.Fragment,{children:[!a&&(0,s.jsx)(x.z,{size:"sm",onClick:()=>r(!0),children:i}),a&&(0,s.jsx)(x.z,{size:"sm",onClick:()=>r(!1),children:"Hide Sandbox"}),a&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)(p.X,{vizName:t})})]})]})}let f=(0,s.jsxs)("p",{children:["Drawing a chart on a ",(0,s.jsx)("code",{children:"canvas"})," element instead of using"," ",(0,s.jsx)("code",{children:"svg"})," elements can be a huge performance boost. However, it leads to a blurry and unreadable viz on retina screens if the resolution is not taken into account. ",(0,s.jsx)("b",{children:"Here is how to fix"}),"."]}),j=e=>{let t=document.getElementById(e),i=t.getContext("2d");i&&(i.beginPath(),i.moveTo(0,0),i.lineTo(100,100),i.stroke())},g='\n<canvas style="width:200px; height:200px;" width="100px" height="100px">\n'.trim(),v='\n<canvas style="width:300px; height:300px;" width="100px" height="100px">\n'.trim(),w='\n<canvas style="width:100px; height:100px;" width="200px" height="200px">\n'.trim();function b(){return(0,n.useEffect)(()=>{j("canvas1"),j("canvas2")},[]),(0,s.jsxs)(a.A,{title:"Fixing the blurry canvas on retina screens",seoDescription:"Building a viz with canvas results in a blurry chart on retina screens. Here is why and how to fix it.",children:[(0,s.jsx)(r.Z,{title:"Fixing the blurry canvas on retina screens",description:f}),(0,s.jsx)("h2",{id:"pixel",children:"⬜ Pixel, Resolution and DPI"}),(0,s.jsxs)("p",{children:["To understand why a ",(0,s.jsx)("code",{children:"canvas"})," can get blurry on a retina screen, you first need to have some basic knowledge about how an image is displayed on a screen."]}),(0,s.jsxs)("p",{children:["Screens are made up of thousands of tiny dots all bunched together called ",(0,s.jsx)("b",{children:"pixels"}),". Each pixel has the ability to"," ",(0,s.jsx)("a",{href:"https://www.youtube.com/watch?v=3BJU2drrtCM&t=450s",children:"change its color"}),". The total number of pixels on a screen differs from one monitor to another, we call it the screen ",(0,s.jsx)("b",{children:"resolution"}),". If the screen has 1,024 pixels horizontally, and 768 vertically it has a 'resolution' of 1,024 x 768."]}),(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("img",{src:"./img/screen_mockup.png",style:{maxWidth:600},alt:"A screen is a set of pixels"}),(0,s.jsxs)(h.Y,{children:["When you watch"," ",(0,s.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","on your screen, you actually watch thousands of pixels."]})]}),(0,s.jsxs)("p",{children:["It's important to understand that 2 screens with the same"," ",(0,s.jsx)("b",{children:"physical size"})," (let's say 30 inches) can have very different amount of pixels. The density of pixels on a screen is called ",(0,s.jsx)("b",{children:"DPI"})," ","for ",(0,s.jsx)("b",{children:"dots per inch"})," or ppi for pixels per inch."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("b",{children:"Retina"})," screens have a very high DPI, and it is where our troubbles begin"]}),(0,s.jsx)("h2",{id:"css resolution",children:"Physical vs CSS resolution"}),(0,s.jsxs)("p",{children:["Let's say that you create a html element and give it a"," ",(0,s.jsx)("code",{children:"width"})," of 100px using css. This is the ",(0,s.jsx)("b",{children:"css width"}),". If you use a screen that has a very high resolution, pixels are very very small. As a result, your element of 100px would appear very small too on the screen."]}),(0,s.jsxs)("p",{children:["To avoid this, each monitor applies a ",(0,s.jsx)("b",{children:"pixel ratio"}),". On a retina screen this ratio equals 2. When you ask the monitor to draw an element of 100px, it will actually draw it with a length of 200px. This is the"," ",(0,s.jsx)("b",{children:"physical width"}),"."]}),(0,s.jsxs)("p",{children:["In javascript, you can access this ratio with"," ",(0,s.jsx)("code",{children:"window.devicePixelRatio"})," and here is the"," ",(0,s.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio",children:"complete doc"})," ","about it."]}),(0,s.jsx)("h2",{id:"css resolution",children:"\uD83D\uDC1B Canvas, High-DPI and the bug"}),(0,s.jsxs)("p",{children:["Let's add a ",(0,s.jsx)("code",{children:"canvas"})," element in our DOM, with a width of 100px. It is the equivalent of building an image, 100px wide, that we insert in the DOM."]}),(0,s.jsxs)("p",{children:["If we display the result on a retina screen with a"," ",(0,s.jsx)("code",{children:"devicePixelRatio"})," of 2, the image will be scaled up to 200px wide. The browser will interpolate pixels to make the image bigger, and it ",(0,s.jsx)("b",{children:"results in a blurry output"}),"."]}),(0,s.jsx)("p",{children:"To avoid this issue, we the canvas we're creating must be twice bigger on retina screen"}),(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("img",{src:"/img/pixel-tiger.png",style:{maxWidth:500},alt:"A pixelated output when an image is scaled up"}),(0,s.jsx)(h.Y,{children:"A small img or canvas on a retina screen will be scaled up, resulting in a pixelated / blurry output."})]}),(0,s.jsx)("h2",{id:"todo",children:"\uD83E\uDD26‍♂️ The 2 dimensions of the canvas element"}),(0,s.jsxs)("p",{children:["There are 2 different ways to control the dimension of a"," ",(0,s.jsx)("code",{children:"canvas"})," element."]}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"width and height attributes"}),": They control the size of the image that is created and inserted in the DOM.",(0,s.jsx)("br",{}),"Default to 300px and 150px so always specify them."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:"css style"}),": the canvas element can be styled using CSS. As a result we can also pass a ",(0,s.jsx)("code",{children:"width"})," and a ",(0,s.jsx)("code",{children:"height"})," ","here. It controls the size of the element on the screen."]})]}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:"Here is a html code snippet illustrating this concept:"}),(0,s.jsx)(c.d,{code:g}),(0,s.jsx)("p",{children:"Now, let's play with those 2 values to see what happens. In the examples below, a segment going from 0,0 (top left) to 100,100 is drawn."}),(0,s.jsx)("h3",{children:"→ Small image, big output"}),(0,s.jsx)("p",{children:"If I create a small image with my canvas (100x100) and output it in big (300x300), the browser has to scale it up to display it, resulting in a blurry output"}),(0,s.jsx)(c.d,{code:v}),(0,s.jsx)("p",{children:"This is exactly what happens when you display a canvas on a retina screen \uD83D\uDE40."}),(0,s.jsx)("canvas",{style:{border:"1px solid",width:300,height:300},id:"canvas1",width:"100px",height:"100px"}),(0,s.jsx)("h3",{children:"→ Big image, small output"}),(0,s.jsx)("p",{children:"Now I create a big image with my canvas (200x200) and output it in small (100x100), the browser has to scale it down to display it, → crispy output!"}),(0,s.jsx)(c.d,{code:w}),(0,s.jsxs)("p",{children:["Much better. But my diagonal is now wrong since it goes to 100,100, which is half way to 200,200. Fortunately javascript is here to the rescue. I will just have to use the"," ",(0,s.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scales",children:"scale function"})," ","to automatically correct those coordinates."]}),(0,s.jsx)("canvas",{style:{border:"1px solid",width:100,height:100},id:"canvas2",width:"200px",height:"200px"}),(0,s.jsx)("h2",{id:"todo",children:"\uD83D\uDD28 Fixing the Canvas and Retina screens issue"}),(0,s.jsx)("p",{children:"To finally fix the retina bug, we need to:"}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:["Control the size of the canvas output using the ",(0,s.jsx)("b",{children:"css dimension"})]}),(0,s.jsxs)("li",{children:["Find the device pixel ratio using ",(0,s.jsx)("code",{children:"window.devicePixelRatio"})]}),(0,s.jsxs)("li",{children:["Create a bigger canvas image if the pixel ratio is over 1. This is done thanks to the ",(0,s.jsx)("code",{children:"width"})," and ",(0,s.jsx)("code",{children:"height"})," ","attributes."]}),(0,s.jsxs)("li",{children:["Use the ",(0,s.jsx)("code",{children:"scale()"})," function in our canvas context to correct our coordinates"]})]}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:"Here are 2 examples. The first one does not apply the correction (left). The second does the correction (right)"}),(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsxs)("div",{className:"flex justify-center gap-x-4",children:[(0,s.jsx)(u,{width:300,height:300}),(0,s.jsx)(d,{width:300,height:300})]}),(0,s.jsx)(h.Y,{children:"On retina screens, the left shape is blurry when the right one is not."})]}),(0,s.jsx)("p",{children:"To see the full code of those 2 examples, click the buttons below."}),(0,s.jsx)(m,{label:"code with bug",vizName:"CanvasShapeBug"}),(0,s.jsx)(m,{label:"code with fix",vizName:"CanvasShapeFix"}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("hr",{className:"full-bleed  bord er bg-gray-200 mb-3 mt-10"}),(0,s.jsx)(o.Z,{chartFamily:"general"}),(0,s.jsx)("div",{className:"mt-20"}),(0,s.jsx)(l.Z,{})]})}},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[2343,7754,7823,8190,3710,2594,9774,2888,179],function(){return e(e.s=95936)}),_N_E=e.O()}]);