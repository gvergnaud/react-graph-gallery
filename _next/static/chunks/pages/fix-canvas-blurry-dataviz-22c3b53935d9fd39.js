(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[972],{1941:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fix-canvas-blurry-dataviz",function(){return i(9711)}])},3485:function(e,t,i){"use strict";i.d(t,{U:function(){return r}});var n=i(5893),s=i(7294),r=function(e){var t=e.startOpen,i=e.title,r=e.children,a=(0,s.useState)(t),l=a[0],o=a[1],c=l?"max-h-full":"max-h-0",h=l?"overflow-visible":"overflow-hidden";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return o(!l)},children:[l?(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),i]}),(0,n.jsx)("div",{className:"transition-max-height ease-in duration-300  "+c+" "+h,children:r})]})}},2729:function(e,t,i){"use strict";i.d(t,{z:function(){return s}});var n=i(5893),s=function(e){var t=e.children,i=e.onClick,s=e.isFilled,r=e.size,a=void 0===r?"md":r,l="rounded m-1 cursor-pointer border-purple-700 border ";return"sm"===a&&(l+="text-sm py-1 px-2"),"md"===a&&(l+="text-md py-2 px-4"),l+=s?" bg-purple-500 hover:bg-purple-700 text-white":" bg-white hover:bg-purple-700 hover:text-white text-purple-700",(0,n.jsx)("button",{className:l,onClick:i,children:t})}},6158:function(e,t,i){"use strict";i.d(t,{Y:function(){return s}});var n=i(5893),s=function(e){var t=e.children;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},903:function(e,t,i){"use strict";i.d(t,{d:function(){return l}});var n=i(5893),s=i(4725),r=i.n(s),a=i(7294),l=function(e){var t=e.code,i=(0,a.useRef)(null);return(0,a.useEffect)((function(){i.current&&r().highlightElement(i.current)}),[i,t]),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)("pre",{className:"rounded-md line-numbers",children:(0,n.jsx)("code",{ref:i,className:"p-0 language-js",children:t})})})}},7975:function(e,t,i){"use strict";i.d(t,{X:function(){return s}});var n=i(5893),s=(i(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,n.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},9711:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return T}});var n=i(5893),s=i(7294),r=i(6184),a=i(6193),l=i(6978),o=i(7197),c=i(3485),h=i(903),d=i(6158),u=function(e){var t=e.width,i=e.height,r=window.devicePixelRatio,a=(0,s.useRef)(null);return(0,s.useEffect)((function(){var e=a.current;null===e||void 0===e||e.setAttribute("width","".concat(t*r,"px")),null===e||void 0===e||e.setAttribute("height","".concat(i*r,"px"));var n=null===e||void 0===e?void 0:e.getContext("2d");n&&(n.scale(r,r),n.lineWidth=15,n.beginPath(),n.moveTo(t/2,20),n.lineTo(t-20,i/2),n.lineTo(t/2,i-20),n.lineTo(20,i/2),n.lineTo(t/2,i/2),n.stroke())}),[t,i,r]),(0,n.jsx)("div",{children:(0,n.jsx)("canvas",{ref:a,style:{width:t,height:i,backgroundColor:"#afb8c133"}})})},x=function(e){var t=e.width,i=e.height,r=(0,s.useRef)(null);return(0,s.useEffect)((function(){var e=r.current,n=null===e||void 0===e?void 0:e.getContext("2d");n&&(n.lineWidth=15,n.beginPath(),n.moveTo(t/2,20),n.lineTo(t-20,i/2),n.lineTo(t/2,i-20),n.lineTo(20,i/2),n.lineTo(t/2,i/2),n.stroke())}),[t,i]),(0,n.jsx)("div",{children:(0,n.jsx)("canvas",{ref:r,style:{width:t,height:i,backgroundColor:"#afb8c133"},width:t,height:i})})},p=i(2729),m=i(7975);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],n=!0,s=!1,r=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(o){s=!0,r=o}finally{try{n||null==l.return||l.return()}finally{if(s)throw r}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(e){var t=e.vizName,i=e.label,r=f(s.useState(!1),2),a=r[0],l=r[1];return(0,n.jsxs)(n.Fragment,{children:[!a&&(0,n.jsx)(p.z,{size:"sm",onClick:function(){return l(!0)},children:i}),a&&(0,n.jsx)(p.z,{size:"sm",onClick:function(){return l(!1)},children:"Hide Sandbox"}),a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"",children:(0,n.jsx)(m.X,{vizName:t})})]})]})}var g=(0,n.jsxs)("p",{children:["Drawing a chart on a ",(0,n.jsx)("code",{children:"canvas"})," element instead of using"," ",(0,n.jsx)("code",{children:"svg"})," elements can be a huge performance boost. However, it leads to a blurry and unreadable viz on retina screens if the resolution is not taken into account. ",(0,n.jsx)("b",{children:"Here is how to fix"}),"."]}),w=function(e){var t=document.getElementById(e).getContext("2d");t&&(t.beginPath(),t.moveTo(0,0),t.lineTo(100,100),t.stroke())},j='\n<canvas style="width:200px; height:200px;" width="100px" height="100px">\n'.trim(),b='\n<canvas style="width:300px; height:300px;" width="100px" height="100px">\n'.trim(),y='\n<canvas style="width:100px; height:100px;" width="200px" height="200px">\n'.trim();"\nreturn(\n  <div ref={chartRef}>\n    <MyChartComponent\n      height={chartSize.height}\n      width={chartSize.width}\n  </div>\n)\n".trim();function T(){return(0,s.useEffect)((function(){w("canvas1"),w("canvas2")}),[]),(0,n.jsxs)(r.A,{title:"Fixing the blurry canvas on retina screens",seoDescription:"Building a viz with canvas results in a blurry chart on retina screens. Here is why and how to fix it.",children:[(0,n.jsx)(a.Z,{title:"Fixing the blurry canvas on retina screens",description:g}),(0,n.jsxs)(c.U,{title:"\u2b1c Pixel, Resolution and DPI",startOpen:!0,children:[(0,n.jsxs)("p",{children:["To understand why a ",(0,n.jsx)("code",{children:"canvas"})," can get blurry on a retina screen, you first need to have some basic knowledge about how an image is displayed on a screen."]}),(0,n.jsxs)("p",{children:["Screens are made up of thousands of tiny dots all bunched together called ",(0,n.jsx)("b",{children:"pixels"}),". Each pixel has the ability to"," ",(0,n.jsx)("a",{href:"https://www.youtube.com/watch?v=3BJU2drrtCM&t=450s",children:"change its color"}),". The total number of pixels on a screen differs from one monitor to another, we call it the screen ",(0,n.jsx)("b",{children:"resolution"}),". If the screen has 1,024 pixels horizontally, and 768 vertically it has a 'resolution' of 1,024 x 768."]}),(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("img",{src:"./img/screen_mockup.png",style:{maxWidth:600}}),(0,n.jsxs)(d.Y,{children:["When you watch"," ",(0,n.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","on your screen, you actually watch thousands of pixels."]})]}),(0,n.jsxs)("p",{children:["It's important to understand that 2 screens with the same"," ",(0,n.jsx)("b",{children:"physical size"})," (let's say 30 inches) can have very different amount of pixels. The density of pixels on a screen is called"," ",(0,n.jsx)("b",{children:"DPI"})," for ",(0,n.jsx)("b",{children:"dots per inch"})," or ppi for pixels per inch."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Retina"})," screens have a very high DPI, and it is where our troubbles begin"]})]}),(0,n.jsxs)(c.U,{title:"\u2195\ufe0f Physical vs CSS resolution",startOpen:!0,children:[(0,n.jsxs)("p",{children:["Let's say that you create a html element and give it a"," ",(0,n.jsx)("code",{children:"width"})," of 100px using css. This is the ",(0,n.jsx)("b",{children:"css width"}),". If you use a screen that has a very high resolution, pixels are very very small. As a result, your element of 100px would appear very small too on the screen."]}),(0,n.jsxs)("p",{children:["To avoid this, each monitor applies a ",(0,n.jsx)("b",{children:"pixel ratio"}),". On a retina screen this ratio equals 2. When you ask the monitor to draw an element of 100px, it will actually draw it with a length of 200px. This is the ",(0,n.jsx)("b",{children:"physical width"}),"."]}),(0,n.jsxs)("p",{children:["In javascript, you can access this ratio with"," ",(0,n.jsx)("code",{children:"window.devicePixelRatio"})," and here is the"," ",(0,n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio",children:"complete doc"})," ","about it."]})]}),(0,n.jsxs)(c.U,{title:"\ud83d\udc1b Canvas, High-DPI and the bug",startOpen:!0,children:[(0,n.jsxs)("p",{children:["Let's add a ",(0,n.jsx)("code",{children:"canvas"})," element in our DOM, with a width of 100px. It is the equivalent of building an image, 100px wide, that we insert in the DOM."]}),(0,n.jsxs)("p",{children:["If we display the result on a retina screen with a"," ",(0,n.jsx)("code",{children:"devicePixelRatio"})," of 2, the image will be scaled up to 200px wide. The browser will interpolate pixels to make the image bigger, and it ",(0,n.jsx)("b",{children:"results in a blurry output"}),"."]}),(0,n.jsx)("p",{children:"To avoid this issue, we the canvas we're creating must be twice bigger on retina screen"}),(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("img",{src:"/img/pixel-tiger.png",style:{maxWidth:500}}),(0,n.jsx)(d.Y,{children:"A small img or canvas on a retina screen will be scaled up, resulting in a pixelated / blurry output."})]})]}),(0,n.jsxs)(c.U,{title:"\ud83e\udd26\u200d\u2642\ufe0f The 2 dimensions of the canvas element",startOpen:!0,children:[(0,n.jsxs)("p",{children:["There are 2 different ways to control the dimension of a"," ",(0,n.jsx)("code",{children:"canvas"})," element."]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"width and height attributes"}),": They control the size of the image that is created and inserted in the DOM.",(0,n.jsx)("br",{}),"Default to 300px and 150px so always specify them."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"css style"}),": the canvas element can be styled using CSS. As a result we can also pass a ",(0,n.jsx)("code",{children:"width"})," and a"," ",(0,n.jsx)("code",{children:"height"})," here. It controls the size of the element on the screen."]})]}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:"Here is a html code snippet illustrating this concept:"}),(0,n.jsx)(h.d,{code:j}),(0,n.jsx)("p",{children:"Now, let's play with those 2 values to see what happens. In the examples below, a segment going from 0,0 (top left) to 100,100 is drawn."}),(0,n.jsx)("h3",{children:"\u2192 Small image, big output"}),(0,n.jsx)("p",{children:"If I create a small image with my canvas (100x100) and output it in big (300x300), the browser has to scale it up to display it, resulting in a blurry output"}),(0,n.jsx)(h.d,{code:b}),(0,n.jsx)("p",{children:"This is exactly what happens when you display a canvas on a retina screen \ud83d\ude40."}),(0,n.jsx)("canvas",{style:{border:"1px solid",width:300,height:300},id:"canvas1",width:"100px",height:"100px"}),(0,n.jsx)("h3",{children:"\u2192 Big image, small output"}),(0,n.jsx)("p",{children:"Now I create a big image with my canvas (200x200) and output it in small (100x100), the browser has to scale it down to display it, \u2192 crispy output!"}),(0,n.jsx)(h.d,{code:y}),(0,n.jsxs)("p",{children:["Much better. But my diagonal is now wrong since it goes to 100,100, which is half way to 200,200. Fortunately javascript is here to the rescue. I will just have to use the"," ",(0,n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scales",children:"scale function"})," ","to automatically correct those coordinates."]}),(0,n.jsx)("canvas",{style:{border:"1px solid",width:100,height:100},id:"canvas2",width:"200px",height:"200px"})]}),(0,n.jsxs)(c.U,{title:"\ud83d\udd28 Fixing the Canvas and Retina screens issue",startOpen:!0,children:[(0,n.jsx)("p",{children:"To finally fix the retina bug, we need to:"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["Control the size of the canvas output using the ",(0,n.jsx)("b",{children:"css dimension"})]}),(0,n.jsxs)("li",{children:["Find the device pixel ratio using"," ",(0,n.jsx)("code",{children:"window.devicePixelRatio"})]}),(0,n.jsxs)("li",{children:["Create a bigger canvas image if the pixel ratio is over 1. This is done thanks to the ",(0,n.jsx)("code",{children:"width"})," and ",(0,n.jsx)("code",{children:"height"})," ","attributes."]}),(0,n.jsxs)("li",{children:["Use the ",(0,n.jsx)("code",{children:"scale()"})," function in our canvas context to correct our coordinates"]})]}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:"Here are 2 examples. The first one does not apply the correction (left). The second does the correction (right)"}),(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{className:"flex justify-center gap-x-4",children:[(0,n.jsx)(x,{width:300,height:300}),(0,n.jsx)(u,{width:300,height:300})]}),(0,n.jsx)(d.Y,{children:"On retina screens, the left shape is blurry when the right one is not."})]}),(0,n.jsx)("p",{children:"To see the full code of those 2 examples, click the buttons below."}),(0,n.jsx)(v,{label:"code with bug",vizName:"CanvasShapeBug"}),(0,n.jsx)(v,{label:"code with fix",vizName:"CanvasShapeFix"})]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("hr",{className:"full-bleed bord er bg-gray-200 mb-3 mt-10"}),(0,n.jsx)(o.Z,{chartFamily:"general"}),(0,n.jsx)("div",{className:"mt-20"}),(0,n.jsx)(l.Z,{})]})}}},function(e){e.O(0,[34,702,774,888,179],(function(){return t=1941,e(e.s=t);var t}));var t=e.O();_N_E=t}]);