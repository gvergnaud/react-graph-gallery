(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8122],{91375:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/svg/introduction",function(){return t(47345)}])},88578:function(e,s,t){"use strict";t.d(s,{X:function(){return i}});var r=t(85893);t(67294);let i=e=>{let{vizName:s,height:t="500px",fileToOpen:i}=e;return console.log("rerendeeeerrrrr"),(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+s+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split"+(i?"&module=/".concat(i):""),style:{width:"100%",height:t,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},47498:function(e,s,t){"use strict";t.d(s,{v:function(){return d}});var r=t(85893),i=t(7826),n=t(13742),a=t(61108),l=t(67294),c=t(5),o=t(77522);let d=e=>{let{exercises:s,localStorageId:t}=e,[d,h]=(0,l.useState)([]),[x,u]=(0,l.useState)("");return(0,l.useEffect)(()=>{let e=localStorage.getItem(t),r=e?JSON.parse(e):Array(s.length).fill("todo");h(r)},[]),(0,r.jsx)(i.UQ,{value:x,onValueChange:u,type:"single",collapsible:!0,className:"w-full",children:s.map((e,s)=>(0,r.jsxs)(i.Qd,{value:"item-"+s,children:[(0,r.jsx)(i.o4,{className:"no-decoration hover:bg-gray-50",children:(0,r.jsxs)("div",{className:"text-sm flex justify-start gap-2 items-center",children:[(0,r.jsx)("div",{className:(0,o.cn)("text-xs h-6 w-6 flex justify-center items-center rounded-full text-center leading-none","todo"===d[s]?"bg-gray-200":"failed"===d[s]?"bg-red-300":"bg-green-300"),children:(0,r.jsx)("span",{style:{transform:"translateX(1px)"},children:s+1})}),(0,r.jsx)("span",{children:e.title}),"ok"===d[s]&&(0,r.jsx)(n.Z,{size:16,className:"text-green-500"}),"failed"===d[s]&&(0,r.jsx)(a.Z,{size:16,className:"text-red-500"}),"todo"===d[s]&&(0,r.jsx)("span",{className:"text-gray-400 font-thin",children:"ToDo"})]})}),(0,r.jsxs)(i.vF,{children:[e.content,(0,r.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,r.jsx)(c.z,{variant:"outline",onClick:()=>{let e=[...d];e[s]="failed",h(e),localStorage.setItem(t,JSON.stringify(e)),u("")},children:"Failed"}),(0,r.jsxs)(c.z,{onClick:()=>{let e=[...d];e[s]="ok",h(e),localStorage.setItem(t,JSON.stringify(e)),u("")},children:["Done",(0,r.jsx)("span",{className:"ml-2",children:"\uD83C\uDF89"})]})]})]})]}))})}},13400:function(e,s,t){"use strict";t.d(s,{q:function(){return o}});var r=t(85893),i=t(22725),n=t(67294),a=t(88578),l=t(8117),c=t(5);let o=e=>{let{exercise:s}=e,[t,o]=(0,n.useState)(!1);(0,n.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o(!1)};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[]);let h=(0,r.jsx)(a.X,{vizName:s.practiceSandbox,height:t?"100%":"500px",fileToOpen:s.fileToOpen}),x=(0,r.jsx)(a.X,{vizName:s.solutionSandbox,height:t?"100%":"500px",fileToOpen:s.fileToOpen});return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4 pt-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(l.C,{children:"To Do"}),(0,r.jsx)("div",{className:"mt-4",children:s.toDo})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(l.C,{children:"Why it matters"}),(0,r.jsx)("div",{className:"mt-4 pl-4",children:s.whyItMatters})]})]}),(0,r.jsxs)(i.mQ,{defaultValue:"practice",className:"relative",children:[(0,r.jsxs)("div",{className:"flex justify-center items-center",children:[(0,r.jsxs)(i.dr,{children:[(0,r.jsx)(i.SP,{value:"practice",children:"Practice"}),(0,r.jsx)(i.SP,{value:"solution",children:"Solution"})]}),(0,r.jsx)("div",{className:"absolute right-0",children:(0,r.jsx)(c.z,{size:"sm",variant:"outline",onClick:()=>o(!0),children:"Show full screen"})})]}),(0,r.jsx)(i.nU,{value:"practice",children:t?(0,r.jsx)(d,{setIsFullScreen:o,sandbox:h}):(0,r.jsx)("div",{className:"my-4",children:h})}),(0,r.jsx)(i.nU,{value:"solution",children:t?(0,r.jsx)(d,{setIsFullScreen:o,sandbox:x}):(0,r.jsx)("div",{className:"my-4",children:x})})]})]})},d=e=>{let{sandbox:s,setIsFullScreen:t}=e;return(0,r.jsxs)("div",{className:"fixed h-screen inset-0 flex justify-center items-center",children:[(0,r.jsx)("div",{className:"absolute inset-0 w-full h-full bg-white/80"}),(0,r.jsxs)("div",{className:"relative w-11/12 h-4/5",children:[s,(0,r.jsx)("div",{className:"w-full mt-2 flex justify-center items-center gap-2",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(c.z,{onClick:()=>t(!1),variant:"destructive",children:"Leave Fullscreen mode"}),(0,r.jsxs)("span",{className:"absolute w-96 ml-2 text-gray-500 text-xs mt-3",children:["You can also press ",(0,r.jsx)("code",{children:"Esc"})]})]})})]})]})}},41843:function(e,s,t){"use strict";t.d(s,{p:function(){return o}});var r=t(85893),i=t(49700),n=t(63476),a=t(17414),l=t(41664),c=t.n(l);let o=e=>{let{children:s,title:t,seoDescription:l,previousTocItem:o,nextTocItem:d}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:t,seoDescription:l}),(0,r.jsx)(i.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:s}),(0,r.jsxs)("div",{className:"flex justify-center items-center space-x-6 my-24 py-12  bg-muted/50",children:[o?(0,r.jsxs)(c(),{href:o.link,className:"text-gray-500 no-underline flex flex-col justify-start items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted ",children:[(0,r.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text",children:"← Previous"}),(0,r.jsx)("p",{children:o.name})]}):(0,r.jsx)("div",{className:"w-96"}),d&&(0,r.jsxs)(c(),{href:d.link,className:"text-gray-500 no-underline flex flex-col justify-start w-96 h-32 border-l border-black  p-8 hover:bg-muted ",children:[(0,r.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text",children:"Next →"}),(0,r.jsx)("p",{children:d.name})]})]}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(n.Z,{})})]})}},63265:function(e,s,t){"use strict";t.d(s,{D:function(){return i}});var r=t(85893);let i=e=>{let{text:s}=e;return(0,r.jsxs)("div",{className:"hidden absolute w-60 top-1/2 -right-10 border-l text-card-foreground border-card-foreground h-28 translate-x-full -translate-y-1/2 xl:flex items-center ",children:[(0,r.jsx)("span",{className:"",children:"→"}),(0,r.jsx)("span",{className:"text-sm ml-2 opacity-70",children:s})]})}},80615:function(e,s,t){"use strict";t.d(s,{Y:function(){return i}});var r=t(85893);let i=e=>{let{children:s}=e;return(0,r.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:s})}},7826:function(e,s,t){"use strict";t.d(s,{Qd:function(){return o},UQ:function(){return c},o4:function(){return d},vF:function(){return h}});var r=t(85893),i=t(67294),n=t(47398),a=t(8971),l=t(77522);let c=n.fC,o=i.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,r.jsx)(n.ck,{ref:s,className:(0,l.cn)("border-b",t),...i})});o.displayName="AccordionItem";let d=i.forwardRef((e,s)=>{let{className:t,children:i,...c}=e;return(0,r.jsx)(n.h4,{className:"flex mt-0 pb-0 font-normal",children:(0,r.jsxs)(n.xz,{ref:s,className:(0,l.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...c,children:[i,(0,r.jsx)(a.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});d.displayName=n.xz.displayName;let h=i.forwardRef((e,s)=>{let{className:t,children:i,...a}=e;return(0,r.jsx)(n.VY,{ref:s,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...a,children:(0,r.jsx)("div",{className:(0,l.cn)("pb-4 pt-0",t),children:i})})});h.displayName=n.VY.displayName},22725:function(e,s,t){"use strict";t.d(s,{SP:function(){return o},dr:function(){return c},mQ:function(){return l},nU:function(){return d}});var r=t(85893),i=t(67294),n=t(60434),a=t(77522);let l=n.fC,c=i.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,r.jsx)(n.aV,{ref:s,className:(0,a.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t),...i})});c.displayName=n.aV.displayName;let o=i.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,r.jsx)(n.xz,{ref:s,className:(0,a.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t),...i})});o.displayName=n.xz.displayName;let d=i.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,r.jsx)(n.VY,{ref:s,className:(0,a.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...i})});d.displayName=n.VY.displayName},47345:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return f}});var r=t(85893);t(67294);var i=t(43710),n=t(41843),a=t(11236),l=t(88578),c=t(41664),o=t.n(c),d=t(8117),h=t(22725),x=t(47498),u=t(13400),m=t(80615),p=t(63265),j=t(21202);function f(){let e=a.Y.find(e=>"/course/svg/introduction"===e.link);return e?(0,r.jsxs)(n.p,{title:e.name,seoDescription:"",nextTocItem:a.Y.find(e=>"/course/svg/main-svg-elements"===e.link),previousTocItem:a.Y.find(e=>"/course/introduction/initial-setup"===e.link),children:[(0,r.jsx)(i.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,selectedLesson:e,description:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["At its core, ",(0,r.jsx)("b",{children:"a graph is just a bunch of shapes"})," such as circles, rectangles, and lines displayed on a screen. Using standard HTML elements to draw these shapes would be"," ",(0,r.jsx)("b",{children:"cumbersome and limiting"}),"."]}),(0,r.jsxs)("p",{children:["Fortunately, there's a ",(0,r.jsx)("b",{children:"more efficient solution"}),": SVG. SVG is a versatile and widely-used technology that allows us to draw shapes in the browser with precision and ease."]}),(0,r.jsx)("p",{children:"In this module, we'll explore how SVG works and how it can be harnessed to create dynamic and insightful data visualizations."})]})}),(0,r.jsx)("h2",{children:"What is SVG"}),(0,r.jsxs)(h.mQ,{defaultValue:"boring",children:[(0,r.jsxs)(h.dr,{className:"my-4",children:[(0,r.jsx)(h.SP,{value:"boring",children:"Boring definition"}),(0,r.jsx)(h.SP,{value:"personal",children:"Personal Definition"})]}),(0,r.jsx)(h.nU,{value:"boring",children:(0,r.jsxs)("p",{children:["Scalable Vector Graphics (",(0,r.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG",children:"SVG"}),") is an XML-based format for vector graphics. Unlike raster graphics which are made up of pixels, SVG uses vector data (points, lines, and curves) to create images. This means SVG images are resolution-independent and can scale up or down without losing quality."]})}),(0,r.jsx)(h.nU,{value:"personal",children:(0,r.jsxs)("p",{children:["The ",(0,r.jsx)("code",{children:"<svg>"})," tag is an HTML element that you can use directly in your React components. You can draw a variety of shapes using predefined SVG elements like ",(0,r.jsx)("code",{children:"<circle>"})," and"," ",(0,r.jsx)("code",{children:"<rect>"}),". Many of the graphs and visualizations you see on the web are created using SVG."]})})]}),(0,r.jsx)("p",{children:(0,r.jsx)("br",{})}),(0,r.jsxs)("center",{children:[(0,r.jsx)("img",{src:"/excalidraw/anatomy-of-a-svg.png",width:400,alt:"anatomy of a react app with a svg area"}),(0,r.jsx)(m.Y,{children:"Anatomy of a React app with a graph built in a svg area."})]}),(0,r.jsx)("h2",{children:"Most simple example"}),(0,r.jsx)("p",{children:"Here is a very simple react app that uses SVG to render a circle:"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["A react component called ",(0,r.jsx)("code",{children:"SvgCircle"})," is defined in a file called ",(0,r.jsx)("code",{children:"SvgCircle.tsx"}),"."]}),(0,r.jsxs)("li",{children:["It renders an SVG area thank to a ",(0,r.jsx)("code",{children:"<svg>"})," HTML element. It has some ",(0,r.jsx)("code",{children:"width"})," and ",(0,r.jsx)("code",{children:"height"})]}),(0,r.jsxs)("li",{children:["In this SVG area, a ",(0,r.jsx)("code",{children:"<circle>"})," is drawn."," ",(0,r.jsx)("code",{children:"cx"})," and ",(0,r.jsx)("code",{children:"cy"})," set the position of the circle."," ",(0,r.jsx)("code",{children:"r"})," its radius."]})]}),(0,r.jsx)("div",{className:"full-bleed my-4 max-w-7xl mx-auto",children:(0,r.jsx)(l.X,{vizName:"SvgCircle"})}),(0,r.jsx)("p",{children:"Awesome! \uD83D\uDD06"}),(0,r.jsxs)("p",{children:["With just a few more circles like this, we'll have a complete"," ",(0,r.jsx)(o(),{href:"/scatter-plot",children:"scatterplot"}),"!"]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("u",{children:"Note"}),": The coordinate system of SVG starts at the top-left corner, where the origin point (0,0) is located."]}),(0,r.jsx)("h2",{children:"Coordinates are upside down \uD83D\uDE43"}),(0,r.jsxs)("p",{children:["SVG uses a coordinate system where the origin ",(0,r.jsx)("code",{children:"(0, 0)"})," is at the ",(0,r.jsx)("b",{children:"top-left"})," corner of the canvas."]}),(0,r.jsxs)("p",{children:["As you move right, the ",(0,r.jsx)("code",{children:"x"})," values increase, just like you'd expect. But here's the catch: the ",(0,r.jsx)("code",{children:"y"})," values increase as you move down instead of up, which is different from typical Cartesian coordinates."]}),(0,r.jsx)("p",{children:"So, it's like the coordinate system is upside down for the y axis."}),(0,r.jsx)("p",{children:(0,r.jsx)("br",{})}),(0,r.jsxs)("center",{children:[(0,r.jsx)("img",{src:"/excalidraw/svg-coordinates.png",width:400,alt:"Diagram explaining svg coordinates"}),(0,r.jsx)(m.Y,{children:"SVG coordinates are upside-down: 0,0 is at the top left!"})]}),(0,r.jsxs)("h2",{children:["Benefits"," ",(0,r.jsx)(d.C,{variant:"outlineGreen",className:"ml-2 -translate-y-1",children:"Pros"})]}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Scalability:"})," SVG images maintain their quality at any size, making them ideal for responsive design. Whether viewed on a small mobile screen or a large desktop monitor, SVG graphics look crisp and clear."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Interactivity:"})," SVG elements can be styled and animated using CSS and JavaScript, allowing for dynamic and interactive graphics. This makes SVG a powerful tool for creating engaging data visualizations."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Accessibility:"})," Text within SVG is searchable and accessible by screen readers. This enhances the accessibility of web content, making it more usable for people with disabilities."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Usability:"})," SVG elements are easy to manipulate, allowing you to create complex shapes from simple ones with ease."]})]}),(0,r.jsxs)("h2",{children:["Limitations"," ",(0,r.jsx)(d.C,{variant:"outlineDestructive",className:"ml-2 -translate-y-1",children:"Cons"})]}),(0,r.jsxs)("p",{children:["SVG has ",(0,r.jsx)("b",{children:"performance limitations"}),", especially when used for data visualization."]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(p.D,{text:(0,r.jsxs)("p",{children:["\uD83D\uDCA1 DOM = ",(0,r.jsx)("b",{children:"Document Object Model"}),". It is basically list that shows all the elements of a webpage and how they're arranged."]})}),(0,r.jsxs)("p",{children:["SVG graphs are defined in the DOM. Each SVG element"," ",(0,r.jsx)("b",{children:"increases the number of DOM nodes"}),". If you create a scatterplot with 1 million circles, it will make the make the DOM"," ",(0,r.jsx)("b",{children:" very heavy"}),"."]})]}),(0,r.jsxs)("p",{children:["As a result, ",(0,r.jsx)("b",{children:"the browser may become slow and unresponsive"})," due to the increased workload of rendering and managing numerous SVG elements. This can lead to performance bottlenecks, particularly on devices with limited processing power or memory."]}),(0,r.jsx)("h2",{children:"Exercices"}),(0,r.jsx)(x.v,{localStorageId:e.link,exercises:[{title:(0,r.jsx)("span",{children:"Your first circle"}),content:(0,r.jsx)(u.q,{exercise:g[0]})},{title:(0,r.jsx)("span",{children:"SVG coordinates"}),content:(0,r.jsx)(u.q,{exercise:g[1]})},{title:(0,r.jsx)("span",{children:"Developer console"}),content:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Open your developer console and inspect the scatterplot below."}),(0,r.jsx)("p",{children:"Take some time to understand how the SVG structure is organized."}),(0,r.jsx)("center",{children:(0,r.jsx)(j.C,{width:500,height:500})})]})},{title:(0,r.jsx)("span",{children:"Background Color"}),content:(0,r.jsx)(u.q,{exercise:g[2]})},{title:(0,r.jsx)("span",{children:"Overflow"}),content:(0,r.jsx)(u.q,{exercise:g[3]})}]})]}):null}let g=[{whyItMatters:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["A chart is basically a ",(0,r.jsx)("b",{children:"set of SVG elements"}),"!"]}),(0,r.jsx)("p",{children:"Learn how to draw one circle, and you almost know how to make a scatterplot \uD83C\uDF89."})]}),toDo:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Draw 1 circle in the SVG area"}),(0,r.jsxs)("li",{children:["Use the ",(0,r.jsx)("code",{children:"circle"})," element"]}),(0,r.jsxs)("li",{children:["Provide values for ",(0,r.jsx)("code",{children:"cx"}),", ",(0,r.jsx)("code",{children:"cy"}),", and"," ",(0,r.jsx)("code",{children:"r"}),". Use also ",(0,r.jsx)("code",{children:"fill"})," for the color."]})]}),practiceSandbox:"exercise/SvgOneCirclePractice",solutionSandbox:"exercise/SvgOneCircleSolution"},{whyItMatters:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["It's counter intuitive! ",(0,r.jsx)("code",{children:"0,0"})," is at the top left."]}),(0,r.jsx)("p",{children:"It's important to get used to this mental gymnastic, we'll use it in literally every chart."})]}),toDo:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Draw a ",(0,r.jsx)("code",{children:"red"})," circle 20px from the top left of the svg area."]}),(0,r.jsxs)("li",{children:["Draw a ",(0,r.jsx)("code",{children:"blue"})," circle at 19px from the bottom right corner."]}),(0,r.jsxs)("li",{children:["Draw a ",(0,r.jsx)("code",{children:"pink"})," circle at 43px from the left and 12px from the bottom."]})]}),practiceSandbox:"exercise/SvgThreeCirclesPractice",solutionSandbox:"exercise/SvgThreeCirclesSolution"},{whyItMatters:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Many CSS features either don't work or behave differently with SVG."}),(0,r.jsx)("p",{children:"We'll uncover them all as we go through the course!"})]}),toDo:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("p",{children:["Add some ",(0,r.jsx)("b",{children:"inline style"})," to the svg area below. Use the"," ",(0,r.jsx)("code",{children:"backgroundColor"}),"property to change the background to ",(0,r.jsx)("code",{children:"grey"}),"."]})}),practiceSandbox:"exercise/SvgBackgroundColorPractice",solutionSandbox:"exercise/SvgBackgroundColorSolution"},{whyItMatters:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"This is a common challenge. Allowing overflow can be helpful for labels, tooltips, and other elements."}),(0,r.jsx)("p",{children:"However, it can quickly become frustrating when multiple charts are displayed in the same app."})]}),toDo:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Half the circle below is missing \uD83D\uDE31."}),(0,r.jsxs)("p",{children:["Use the ",(0,r.jsx)("code",{children:"overflow"})," css property to make it appear."]})]}),practiceSandbox:"exercise/SvgOverflowPractice",solutionSandbox:"exercise/SvgOverflowSolution"}]},21202:function(e,s,t){"use strict";t.d(s,{C:function(){return h}});var r=t(85893);let i=[{x:2,y:4},{x:3,y:5},{x:1,y:2},{x:5,y:5},{x:7,y:8},{x:9,y:9},{x:6,y:8},{x:5,y:4},{x:7,y:5},{x:8,y:9},{x:6,y:9},{x:3,y:6},{x:2,y:1}];var n=t(43950),a=t(67294);let l=e=>{let{yScale:s,pixelsPerTick:t,width:i}=e,n=s.range(),l=(0,a.useMemo)(()=>{let e=n[0]-n[1];return s.ticks(Math.floor(e/t)).map(e=>({value:e,yOffset:s(e)}))},[s]);return(0,r.jsx)(r.Fragment,{children:l.map(e=>{let{value:s,yOffset:t}=e;return(0,r.jsxs)("g",{transform:"translate(0, ".concat(t,")"),shapeRendering:"crispEdges",children:[(0,r.jsx)("line",{x1:-10,x2:i+10,stroke:"#D2D7D3",strokeWidth:.5}),(0,r.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateX(-20px)",fill:"#D2D7D3"},children:s},s)]},s)})})},c=e=>{let{xScale:s,pixelsPerTick:t,height:i}=e,n=s.range(),l=(0,a.useMemo)(()=>{let e=n[1]-n[0];return s.ticks(Math.floor(e/t)).map(e=>({value:e,xOffset:s(e)}))},[s]);return(0,r.jsx)(r.Fragment,{children:l.map(e=>{let{value:s,xOffset:t}=e;return(0,r.jsxs)("g",{transform:"translate(".concat(t,", 0)"),shapeRendering:"crispEdges",children:[(0,r.jsx)("line",{y1:10,y2:-i-10,stroke:"#D2D7D3",strokeWidth:.5}),(0,r.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateY(20px)",fill:"#D2D7D3"},children:s},s)]},s)})})},o={top:60,right:60,bottom:60,left:60},d=e=>{let{width:s,height:t,data:i}=e,a=s-o.right-o.left,d=t-o.top-o.bottom,h=n.BYU().domain([0,10]).range([d,0]),x=n.BYU().domain([0,10]).range([0,a]),u=i.map((e,s)=>(0,r.jsx)("circle",{r:13,cx:x(e.y),cy:h(e.x),opacity:1,stroke:"#cb1dd1",fill:"#cb1dd1",fillOpacity:.2,strokeWidth:1},s));return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:s,height:t,children:(0,r.jsxs)("g",{width:a,height:d,transform:"translate(".concat([o.left,o.top].join(","),")"),children:[(0,r.jsx)(l,{yScale:h,pixelsPerTick:40,width:a}),(0,r.jsx)("g",{transform:"translate(0, ".concat(d,")"),children:(0,r.jsx)(c,{xScale:x,pixelsPerTick:40,height:d})}),u]})})})},h=e=>{let{width:s=700,height:t=400}=e;return(0,r.jsx)(d,{data:i,width:s,height:t})}}},function(e){e.O(0,[2343,7754,3950,9484,8190,3710,9774,2888,179],function(){return e(e.s=91375)}),_N_E=e.O()}]);