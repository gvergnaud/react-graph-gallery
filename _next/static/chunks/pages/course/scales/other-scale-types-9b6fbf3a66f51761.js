(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2487],{74087:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/scales/other-scale-types",function(){return t(27531)}])},88578:function(e,s,t){"use strict";t.d(s,{X:function(){return r}});var n=t(85893);t(67294);let r=e=>{let{vizName:s,height:t="500px",fileToOpen:r}=e;return console.log("rerendeeeerrrrr"),(0,n.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+s+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split"+(r?"&module=/".concat(r):""),style:{width:"100%",height:t,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},47498:function(e,s,t){"use strict";t.d(s,{v:function(){return d}});var n=t(85893),r=t(7826),i=t(13742),a=t(61108),l=t(67294),c=t(5),o=t(77522);let d=e=>{let{exercises:s,localStorageId:t}=e,[d,h]=(0,l.useState)([]),[u,x]=(0,l.useState)("");return(0,l.useEffect)(()=>{let e=localStorage.getItem(t),n=e?JSON.parse(e):Array(s.length).fill("todo");h(n)},[]),(0,n.jsx)(r.UQ,{value:u,onValueChange:x,type:"single",collapsible:!0,className:"w-full",children:s.map((e,s)=>(0,n.jsxs)(r.Qd,{value:"item-"+s,children:[(0,n.jsx)(r.o4,{className:"no-decoration hover:bg-gray-50",children:(0,n.jsxs)("div",{className:"text-sm flex justify-start gap-2 items-center",children:[(0,n.jsx)("div",{className:(0,o.cn)("text-xs h-6 w-6 flex justify-center items-center rounded-full text-center leading-none","todo"===d[s]?"bg-gray-200":"failed"===d[s]?"bg-red-300":"bg-green-300"),children:(0,n.jsx)("span",{style:{transform:"translateX(1px)"},children:s+1})}),(0,n.jsx)("span",{children:e.title}),"ok"===d[s]&&(0,n.jsx)(i.Z,{size:16,className:"text-green-500"}),"failed"===d[s]&&(0,n.jsx)(a.Z,{size:16,className:"text-red-500"}),"todo"===d[s]&&(0,n.jsx)("span",{className:"text-gray-400 font-thin",children:"ToDo"})]})}),(0,n.jsxs)(r.vF,{children:[e.content,(0,n.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,n.jsx)(c.z,{variant:"outline",onClick:()=>{let e=[...d];e[s]="failed",h(e),localStorage.setItem(t,JSON.stringify(e)),x("")},children:"Failed"}),(0,n.jsxs)(c.z,{onClick:()=>{let e=[...d];e[s]="ok",h(e),localStorage.setItem(t,JSON.stringify(e)),x("")},children:["Done",(0,n.jsx)("span",{className:"ml-2",children:"\uD83C\uDF89"})]})]})]})]}))})}},13400:function(e,s,t){"use strict";t.d(s,{q:function(){return h}});var n=t(85893),r=t(22725),i=t(88578),a=t(8117),l=t(5),c=t(41664),o=t.n(c),d=t(77522);let h=e=>{let{exercise:s}=e,t=(0,n.jsx)(i.X,{vizName:s.practiceSandbox,height:"500px",fileToOpen:s.fileToOpen}),c=(0,n.jsx)(i.X,{vizName:s.solutionSandbox,height:"500px",fileToOpen:s.fileToOpen});return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"grid grid-cols-2 gap-4 pt-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(a.C,{children:"To Do"}),(0,n.jsx)("div",{className:"mt-4",children:s.toDo})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(a.C,{children:"Why it matters"}),(0,n.jsx)("div",{className:"mt-4 pl-4",children:s.whyItMatters})]})]}),(0,n.jsxs)(r.mQ,{defaultValue:"practice",className:"relative",children:[(0,n.jsx)("div",{className:"flex justify-center items-center",children:(0,n.jsxs)(r.dr,{children:[(0,n.jsx)(r.SP,{value:"practice",children:"Practice"}),(0,n.jsx)(r.SP,{value:"solution",children:"Solution"})]})}),(0,n.jsxs)(r.nU,{value:"practice",children:[(0,n.jsx)("div",{className:"my-4",children:t}),(0,n.jsx)("div",{className:"absolute right-0",children:(0,n.jsx)(o(),{className:(0,l.d)({size:"sm",variant:"destructive"}),href:"/sandbox?vizName="+s.practiceSandbox,target:"_blank",children:"Show full screen"})})]}),(0,n.jsxs)(r.nU,{value:"solution",children:[(0,n.jsx)("div",{className:"my-4",children:c}),(0,n.jsx)("div",{className:"absolute right-0",children:(0,n.jsx)(o(),{className:(0,d.cn)((0,l.d)({size:"sm",variant:"destructive"}),"no-underline"),href:"/sandbox?vizName="+s.solutionSandbox,target:"_blank",children:"Show full screen"})})]})]})]})}},41843:function(e,s,t){"use strict";t.d(s,{p:function(){return o}});var n=t(85893),r=t(49700),i=t(63476),a=t(17414),l=t(41664),c=t.n(l);let o=e=>{let{children:s,title:t,seoDescription:l,previousTocItem:o,nextTocItem:d}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:t,seoDescription:l}),(0,n.jsx)(r.Z,{}),(0,n.jsx)("div",{className:"wrapper",children:s}),(0,n.jsxs)("div",{className:"flex justify-center items-center space-x-6 my-24 py-12  bg-muted/50",children:[o?(0,n.jsxs)(c(),{href:o.link,className:"text-gray-500 no-underline flex flex-col justify-start items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted ",children:[(0,n.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text",children:"← Previous"}),(0,n.jsx)("p",{children:o.name})]}):(0,n.jsx)("div",{className:"w-96"}),d&&(0,n.jsxs)(c(),{href:d.link,className:"text-gray-500 no-underline flex flex-col justify-start w-96 h-32 border-l border-black  p-8 hover:bg-muted ",children:[(0,n.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text",children:"Next →"}),(0,n.jsx)("p",{children:d.name})]})]}),(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(i.Z,{})})]})}},63265:function(e,s,t){"use strict";t.d(s,{D:function(){return r}});var n=t(85893);let r=e=>{let{text:s}=e;return(0,n.jsxs)("div",{className:"hidden absolute w-60 top-1/2 -right-10 border-l text-card-foreground border-card-foreground h-28 translate-x-full -translate-y-1/2 xl:flex items-center ",children:[(0,n.jsx)("span",{className:"",children:"→"}),(0,n.jsx)("span",{className:"text-sm ml-2 opacity-70",children:s})]})}},80615:function(e,s,t){"use strict";t.d(s,{Y:function(){return r}});var n=t(85893);let r=e=>{let{children:s}=e;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:s})}},3572:function(e,s,t){"use strict";t.d(s,{d:function(){return d}});var n=t(85893),r=t(32581),i=t(15660),a=t.n(i),l=t(67294),c=t(45993),o=t.n(c);let d=e=>{let{code:s}=e,[t,i]=(0,l.useState)(!1),c=(0,l.useRef)(null);(0,l.useEffect)(()=>{c.current&&a().highlightElement(c.current)},[c,s]);let d=(0,n.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(s),i(!0)},className:o().codeChunckCopyButton,children:t?"Copied":(0,n.jsx)(r.Z,{size:14,style:{padding:0}})});return(0,n.jsxs)("div",{className:"mb-6 relative",children:[(0,n.jsx)("pre",{className:"rounded-md line-numbers",children:(0,n.jsx)("code",{ref:c,className:"language-javascript",children:s})}),(0,n.jsx)("div",{className:o().copyButtonContainer,children:d})]})}},7826:function(e,s,t){"use strict";t.d(s,{Qd:function(){return o},UQ:function(){return c},o4:function(){return d},vF:function(){return h}});var n=t(85893),r=t(67294),i=t(47398),a=t(8971),l=t(77522);let c=i.fC,o=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,n.jsx)(i.ck,{ref:s,className:(0,l.cn)("border-b",t),...r})});o.displayName="AccordionItem";let d=r.forwardRef((e,s)=>{let{className:t,children:r,...c}=e;return(0,n.jsx)(i.h4,{className:"flex mt-0 pb-0 font-normal",children:(0,n.jsxs)(i.xz,{ref:s,className:(0,l.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...c,children:[r,(0,n.jsx)(a.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});d.displayName=i.xz.displayName;let h=r.forwardRef((e,s)=>{let{className:t,children:r,...a}=e;return(0,n.jsx)(i.VY,{ref:s,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...a,children:(0,n.jsx)("div",{className:(0,l.cn)("pb-4 pt-0",t),children:r})})});h.displayName=i.VY.displayName},22725:function(e,s,t){"use strict";t.d(s,{SP:function(){return o},dr:function(){return c},mQ:function(){return l},nU:function(){return d}});var n=t(85893),r=t(67294),i=t(60434),a=t(77522);let l=i.fC,c=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,n.jsx)(i.aV,{ref:s,className:(0,a.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t),...r})});c.displayName=i.aV.displayName;let o=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,n.jsx)(i.xz,{ref:s,className:(0,a.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t),...r})});o.displayName=i.xz.displayName;let d=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,n.jsx)(i.VY,{ref:s,className:(0,a.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...r})});d.displayName=i.VY.displayName},27531:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return m}});var n=t(85893);t(67294);var r=t(43710),i=t(41843),a=t(11236),l=t(41664),c=t.n(l),o=t(3572),d=t(47498),h=t(13400),u=t(80615),x=t(63265);function m(){let e=a.Y.find(e=>"/course/scales/other-scale-types"===e.link);return e?(0,n.jsxs)(i.p,{title:e.name,seoDescription:"",nextTocItem:a.Y.find(e=>"/course/scales/project"===e.link),previousTocItem:a.Y.find(e=>"/course/scales/linear-scale"===e.link),children:[(0,n.jsx)(r.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,selectedLesson:e,description:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["While ",(0,n.jsx)("code",{children:"scaleLinear"})," is one of the most commonly used D3 scales, other scale types are essential for creating even basic charts."]}),(0,n.jsxs)("p",{children:["Let's explore ",(0,n.jsx)("code",{children:"scaleBand"}),", ",(0,n.jsx)("code",{children:"scaleOrdinal"}),", and other indispensable functions!"]})]})}),(0,n.jsxs)("h2",{children:[(0,n.jsx)("code",{children:"scaleBand()"})," to create... bands \uD83D\uDE42"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("code",{children:"scaleBand()"})," is ideal for categorical variables as it allocates equal space for each category, ensuring that every discrete value is uniformly represented on the axis."]}),(0,n.jsx)("h3",{children:"Example"}),(0,n.jsxs)("p",{children:["You want to create a horizontal bar chart with ",(0,n.jsx)("b",{children:"3 bars"})," in a figure that is ",(0,n.jsx)("b",{children:"240 pixels high"}),". You want to dedicate 33% of the total height for white space: this is the padding between bars."]}),(0,n.jsx)("p",{children:"You'll end up with the dimensions outlined below:"}),(0,n.jsxs)("div",{className:"flex flex-col items-center mt-8 mb-12",children:[(0,n.jsx)("img",{src:"/excalidraw/anatomy-scaleBand.png",style:{maxWidth:800},alt:"schema explaining what the scaleBand() function produces"}),(0,n.jsxs)(u.Y,{children:["All the numbers produced by the ",(0,n.jsx)("code",{children:"scaleBand()"})," function."]})]}),(0,n.jsxs)("p",{children:["You can easily compute these values using the ",(0,n.jsx)("code",{children:"scaleBand()"})," ","function!"]}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)(x.D,{text:(0,n.jsxs)("p",{children:["There are many ways to control the ",(0,n.jsx)("code",{children:"padding"}),". The official ",(0,n.jsx)("a",{href:"https://d3js.org/d3-scale/band",children:"doc"})," explains very well!"]})}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["The ",(0,n.jsx)("code",{children:"domain"})," is an array that lists the groups."]}),(0,n.jsxs)("li",{children:["The ",(0,n.jsx)("code",{children:"range"})," is a two-element array that specifies the pixel positions where the shapes will be drawn."]}),(0,n.jsxs)("li",{children:["The optional ",(0,n.jsx)("code",{children:"padding"})," method is expressed as a fraction of the band width."]})]})]}),(0,n.jsx)(o.d,{code:"\nconst yScale = d3.scaleBand()\n  .domain(['A', 'B', 'C'])\n  .range([0, height])\n  .padding(0.1)\n      ".trim()}),(0,n.jsxs)("p",{children:["Now that this scale is available, let's use it to get all the positions we need! Note that the ",(0,n.jsx)("code",{children:"yScale"})," function we now have returns the ",(0,n.jsx)("code",{children:"start"})," of the corresponding band:"]}),(0,n.jsx)(o.d,{code:"\n// Top of each bar:\nconsole.log(yScale('A')); // 0\nconsole.log(yScale('B')); // 90\nconsole.log(yScale('C')); // 180\n\n// Width of a bar:\nconsole.log(yScale.bandwidth()); // 60\n      ".trim()}),(0,n.jsxs)("p",{children:["That's it! We have all the numbers we need to make a"," ",(0,n.jsx)(c(),{href:"/barplot",children:"barplot"}),"! \uD83C\uDF89"]}),(0,n.jsx)("p",{children:(0,n.jsx)("br",{})}),(0,n.jsxs)("blockquote",{children:["TODO: add a simulator to make ppl understand ",(0,n.jsx)("code",{children:"padding"}),","," ",(0,n.jsx)("code",{children:"innerPadding"})," and ",(0,n.jsx)("code",{children:"outerPadding"}),"."]}),(0,n.jsxs)("h2",{children:["Scales are not just for positioning: ",(0,n.jsx)("code",{children:"scaleOrdinal()"})]}),(0,n.jsx)("p",{children:"Scales are a fundamental concept in data visualization, and they are not limited to positioning elements!"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("code",{children:"scaleOrdinal()"})," is a great example: it maps a set of discrete values to another set of discrete values. For instance, it can be used to assign a specific color to each group name."]}),(0,n.jsx)(o.d,{code:'\nconst colorScale = d3.scaleOrdinal()\n  .domain(["a", "b", "c"])            // I have 3 groups in the dataset: a, b, c\n  .range(["red", "green", "blue"])    // I want to assign 3 colors to them\n\ncolorScale("a") // --> red!\ncolorScale("b") // --> green\n\n      '.trim()}),(0,n.jsx)("h2",{children:"More Scale Types to Explore!"}),(0,n.jsxs)("p",{children:["The ",(0,n.jsx)("code",{children:"d3-scale"})," module includes 13 different types of scales."]}),(0,n.jsx)("p",{children:"However, they all follow the same core pattern. Rather than covering each one individually now, we'll explore them throughout the course as they come up."}),(0,n.jsx)("blockquote",{className:"bg-fuchsia-50 py-8",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"By now, you should have a solid understanding of how scales work."}),(0,n.jsxs)("p",{children:["While I don’t recommend it, you can always check out the full list of scale types in the"," ",(0,n.jsx)("a",{href:"https://d3js.org/d3-scale",children:"official documentation"})," if you're curious!"]})]})}),(0,n.jsx)("h2",{children:"Exercices"}),(0,n.jsx)(d.v,{localStorageId:e.link,exercises:[{title:(0,n.jsx)("span",{children:"First barplot!"}),content:(0,n.jsx)(h.q,{exercise:p[0]})},{title:(0,n.jsx)("span",{children:"Tiny bars?"}),content:(0,n.jsx)(h.q,{exercise:p[1]})},{title:(0,n.jsx)("span",{children:"Use colors for groups"}),content:(0,n.jsx)(h.q,{exercise:p[2]})},{title:(0,n.jsx)("span",{children:"Switch to vertical version"}),content:(0,n.jsx)(h.q,{exercise:p[3]})}]}),(0,n.jsx)("blockquote",{children:"TODOOOOOOOOO"}),(0,n.jsx)("h2",{children:"It's taking shape! \uD83C\uDF89"}),(0,n.jsxs)("p",{children:["You've now mastered two fundamental concepts of dataviz with React and D3: ",(0,n.jsx)("b",{children:"SVG"})," and ",(0,n.jsx)("b",{children:"Scales"}),". This means"," ",(0,n.jsx)("b",{children:"we're ready to build actual graphs"}),"!"]}),(0,n.jsx)("p",{children:"In the next lesson, you'll dive into a hands-on exercise where we recreate a real-world chart using everything you've learned so far."}),(0,n.jsx)("p",{children:"Let's do it! \uD83D\uDE47"})]}):null}let p=[{whyItMatters:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("p",{children:"Now that you know what a scale is, time to write your first scale!"})}),toDo:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Create a barplot with 1 bar only."}),(0,n.jsx)("li",{children:"The SVG area is 500px wide. Your dataset goes from 0 to 100."}),(0,n.jsx)("li",{children:"Draw a horizontal bar that goes from the very left, and has a length that represents a value of 82 in the dataset."})]}),practiceSandbox:"exercise/linearScaleBarSizePractice",solutionSandbox:"exercise/linearScaleBarSizeSolution"},{whyItMatters:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Once a scale is available, everything you draw on your screen will go through it to determine positions!"}),(0,n.jsx)("p",{children:"Also, see how convenient scales are when it comes to adding margins!"})]}),toDo:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Now create 3 bars."}),(0,n.jsx)("li",{children:"Vertical positions are written manually"}),(0,n.jsxs)("li",{children:["Widths must represent the value ",(0,n.jsx)("code",{children:"34"}),", ",(0,n.jsx)("code",{children:"53"})," and"," ",(0,n.jsx)("code",{children:"82"})]}),(0,n.jsxs)("li",{children:["⚠️ You must leave a ",(0,n.jsx)("b",{children:"margin"})," of 20px on the left hand side."]})]}),practiceSandbox:"exercise/linearScaleThreeBarsPractice",solutionSandbox:"exercise/linearScaleThreeBarsSolution"},{whyItMatters:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("p",{children:"Scales are very useful to reverse the direction of drawing"})}),toDo:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["Let's draw one single bar that represents the value ",(0,n.jsx)("code",{children:"82"})]}),(0,n.jsx)("li",{children:"But this time, the bar must go from the right to the left."}),(0,n.jsxs)("li",{children:["Hint: reverse the ",(0,n.jsx)("code",{children:"range"})," array!"]})]}),practiceSandbox:"exercise/linearScaleReversePractice",solutionSandbox:"exercise/linearScaleReverseSolution"},{whyItMatters:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["The logic behind each functions of the ",(0,n.jsx)("code",{children:"d3-shape"})," module is the same."]}),(0,n.jsx)("p",{children:"If you have a good understanding of d3.line(), you're on the right way to build any other chart type!"})]}),toDo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Let's create a mirror histogram!! The mirror histogram looks like this:"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Create 2 scales!"}),(0,n.jsxs)("li",{children:["Values are ",(0,n.jsx)("code",{children:"23"}),", ",(0,n.jsx)("code",{children:"55"}),", ",(0,n.jsx)("code",{children:"87"})," on the left, and ",(0,n.jsx)("code",{children:"12"}),", ",(0,n.jsx)("code",{children:"43"}),", ",(0,n.jsx)("code",{children:"98"})," on the right"]})]})]}),practiceSandbox:"exercise/linearScaleMirrorPractice",solutionSandbox:"exercise/linearScaleMirrorSolution"}]},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}}},function(e){e.O(0,[2343,7754,7823,9484,8190,3710,9774,2888,179],function(){return e(e.s=74087)}),_N_E=e.O()}]);