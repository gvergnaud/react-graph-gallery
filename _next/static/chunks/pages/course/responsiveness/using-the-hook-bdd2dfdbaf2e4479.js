(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2162],{90838:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/responsiveness/using-the-hook",function(){return n(76075)}])},88578:function(e,s,n){"use strict";n.d(s,{X:function(){return i}});var t=n(85893);n(67294);let i=e=>{let{vizName:s,height:n="500px",fileToOpen:i}=e;return console.log("rerendeeeerrrrr"),(0,t.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+s+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split"+(i?"&module=/".concat(i):""),style:{width:"100%",height:n,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},47498:function(e,s,n){"use strict";n.d(s,{v:function(){return d}});var t=n(85893),i=n(7826),r=n(13742),o=n(61108),a=n(67294),c=n(5),l=n(77522);let d=e=>{let{exercises:s,localStorageId:n}=e,[d,h]=(0,a.useState)([]),[u,x]=(0,a.useState)("");return(0,a.useEffect)(()=>{let e=localStorage.getItem(n),t=e?JSON.parse(e):Array(s.length).fill("todo");h(t)},[]),(0,t.jsx)(i.UQ,{value:u,onValueChange:x,type:"single",collapsible:!0,className:"w-full",children:s.map((e,s)=>(0,t.jsxs)(i.Qd,{value:"item-"+s,children:[(0,t.jsx)(i.o4,{className:"no-decoration hover:bg-gray-50",children:(0,t.jsxs)("div",{className:"text-sm flex justify-start gap-2 items-center",children:[(0,t.jsx)("div",{className:(0,l.cn)("text-xs h-6 w-6 flex justify-center items-center rounded-full text-center leading-none","todo"===d[s]?"bg-gray-200":"failed"===d[s]?"bg-red-300":"bg-green-300"),children:(0,t.jsx)("span",{style:{transform:"translateX(1px)"},children:s+1})}),(0,t.jsx)("span",{children:e.title}),"ok"===d[s]&&(0,t.jsx)(r.Z,{size:16,className:"text-green-500"}),"failed"===d[s]&&(0,t.jsx)(o.Z,{size:16,className:"text-red-500"}),"todo"===d[s]&&(0,t.jsx)("span",{className:"text-gray-400 font-thin",children:"ToDo"})]})}),(0,t.jsxs)(i.vF,{children:[e.content,(0,t.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,t.jsx)(c.z,{variant:"outline",onClick:()=>{let e=[...d];e[s]="failed",h(e),localStorage.setItem(n,JSON.stringify(e)),x("")},children:"Failed"}),(0,t.jsxs)(c.z,{onClick:()=>{let e=[...d];e[s]="ok",h(e),localStorage.setItem(n,JSON.stringify(e)),x("")},children:["Done",(0,t.jsx)("span",{className:"ml-2",children:"\uD83C\uDF89"})]})]})]})]}))})}},13400:function(e,s,n){"use strict";n.d(s,{q:function(){return h}});var t=n(85893),i=n(22725),r=n(88578),o=n(8117),a=n(5),c=n(41664),l=n.n(c),d=n(77522);let h=e=>{let{exercise:s}=e,n=(0,t.jsx)(r.X,{vizName:s.practiceSandbox,height:"500px",fileToOpen:s.fileToOpen}),c=(0,t.jsx)(r.X,{vizName:s.solutionSandbox,height:"500px",fileToOpen:s.fileToOpen});return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4 pt-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(o.C,{children:"To Do"}),(0,t.jsx)("div",{className:"mt-4",children:s.toDo})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(o.C,{children:"Why it matters"}),(0,t.jsx)("div",{className:"mt-4 pl-4",children:s.whyItMatters})]})]}),(0,t.jsxs)(i.mQ,{defaultValue:"practice",className:"relative",children:[(0,t.jsx)("div",{className:"flex justify-center items-center",children:(0,t.jsxs)(i.dr,{children:[(0,t.jsx)(i.SP,{value:"practice",children:"Practice"}),(0,t.jsx)(i.SP,{value:"solution",children:"Solution"})]})}),(0,t.jsxs)(i.nU,{value:"practice",children:[(0,t.jsx)("div",{className:"my-4",children:n}),(0,t.jsx)("div",{className:"absolute right-0",children:(0,t.jsx)(l(),{className:(0,a.d)({size:"sm",variant:"destructive"}),href:"/sandbox?vizName="+s.practiceSandbox,target:"_blank",children:"Show full screen"})})]}),(0,t.jsxs)(i.nU,{value:"solution",children:[(0,t.jsx)("div",{className:"my-4",children:c}),(0,t.jsx)("div",{className:"absolute right-0",children:(0,t.jsx)(l(),{className:(0,d.cn)((0,a.d)({size:"sm",variant:"destructive"}),"no-underline"),href:"/sandbox?vizName="+s.solutionSandbox,target:"_blank",children:"Show full screen"})})]})]})]})}},41843:function(e,s,n){"use strict";n.d(s,{p:function(){return l}});var t=n(85893),i=n(49700),r=n(63476),o=n(17414),a=n(41664),c=n.n(a);let l=e=>{let{children:s,title:n,seoDescription:a,previousTocItem:l,nextTocItem:d}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.A,{title:n,seoDescription:a}),(0,t.jsx)(i.Z,{}),(0,t.jsx)("div",{className:"wrapper",children:s}),(0,t.jsxs)("div",{className:"flex justify-center items-center space-x-6 my-24 py-12  bg-muted/50",children:[l?(0,t.jsxs)(c(),{href:l.link,className:"text-gray-500 no-underline flex flex-col justify-start items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted ",children:[(0,t.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text",children:"← Previous"}),(0,t.jsx)("p",{children:l.name})]}):(0,t.jsx)("div",{className:"w-96"}),d&&(0,t.jsxs)(c(),{href:d.link,className:"text-gray-500 no-underline flex flex-col justify-start w-96 h-32 border-l border-black  p-8 hover:bg-muted ",children:[(0,t.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text",children:"Next →"}),(0,t.jsx)("p",{children:d.name})]})]}),(0,t.jsx)("div",{className:"wrapper",children:(0,t.jsx)(r.Z,{})})]})}},3572:function(e,s,n){"use strict";n.d(s,{d:function(){return d}});var t=n(85893),i=n(32581),r=n(15660),o=n.n(r),a=n(67294),c=n(45993),l=n.n(c);let d=e=>{let{code:s}=e,[n,r]=(0,a.useState)(!1),c=(0,a.useRef)(null);(0,a.useEffect)(()=>{c.current&&o().highlightElement(c.current)},[c,s]);let d=(0,t.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(s),r(!0)},className:l().codeChunckCopyButton,children:n?"Copied":(0,t.jsx)(i.Z,{size:14,style:{padding:0}})});return(0,t.jsxs)("div",{className:"mb-6 relative",children:[(0,t.jsx)("pre",{className:"rounded-md line-numbers",children:(0,t.jsx)("code",{ref:c,className:"language-javascript",children:s})}),(0,t.jsx)("div",{className:l().copyButtonContainer,children:d})]})}},7826:function(e,s,n){"use strict";n.d(s,{Qd:function(){return l},UQ:function(){return c},o4:function(){return d},vF:function(){return h}});var t=n(85893),i=n(67294),r=n(47398),o=n(8971),a=n(77522);let c=r.fC,l=i.forwardRef((e,s)=>{let{className:n,...i}=e;return(0,t.jsx)(r.ck,{ref:s,className:(0,a.cn)("border-b",n),...i})});l.displayName="AccordionItem";let d=i.forwardRef((e,s)=>{let{className:n,children:i,...c}=e;return(0,t.jsx)(r.h4,{className:"flex mt-0 pb-0 font-normal",children:(0,t.jsxs)(r.xz,{ref:s,className:(0,a.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",n),...c,children:[i,(0,t.jsx)(o.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});d.displayName=r.xz.displayName;let h=i.forwardRef((e,s)=>{let{className:n,children:i,...o}=e;return(0,t.jsx)(r.VY,{ref:s,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...o,children:(0,t.jsx)("div",{className:(0,a.cn)("pb-4 pt-0",n),children:i})})});h.displayName=r.VY.displayName},22725:function(e,s,n){"use strict";n.d(s,{SP:function(){return l},dr:function(){return c},mQ:function(){return a},nU:function(){return d}});var t=n(85893),i=n(67294),r=n(60434),o=n(77522);let a=r.fC,c=i.forwardRef((e,s)=>{let{className:n,...i}=e;return(0,t.jsx)(r.aV,{ref:s,className:(0,o.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",n),...i})});c.displayName=r.aV.displayName;let l=i.forwardRef((e,s)=>{let{className:n,...i}=e;return(0,t.jsx)(r.xz,{ref:s,className:(0,o.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",n),...i})});l.displayName=r.xz.displayName;let d=i.forwardRef((e,s)=>{let{className:n,...i}=e;return(0,t.jsx)(r.VY,{ref:s,className:(0,o.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",n),...i})});d.displayName=r.VY.displayName},76075:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return x}});var t=n(85893);n(67294);var i=n(43710),r=n(41843),o=n(11236),a=n(3572),c=n(88578),l=n(41664),d=n.n(l),h=n(47498),u=n(13400);function x(){let e=o.Y.find(e=>"/course/responsiveness/using-the-hook"===e.link);return e?(0,t.jsxs)(r.p,{title:e.name,seoDescription:"",nextTocItem:o.Y.find(e=>"/course/responsiveness/code-organization"===e.link),previousTocItem:o.Y.find(e=>"/course/responsiveness/use-dimension-hook"===e.link),children:[(0,t.jsx)(i.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,selectedLesson:e,description:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("p",{children:["Our ",(0,t.jsx)("code",{children:"use-dimensions"})," hook monitors changes in a"," ",(0,t.jsx)("code",{children:"div"}),"'s dimensions and returns those values. Now, let’s"," ",(0,t.jsx)("b",{children:"use"})," this hook to feed the dimensions directly into our graph!"]})})}),(0,t.jsx)("h2",{children:"1️⃣ Create a Ref"}),(0,t.jsxs)("p",{children:["Begin by creating a ",(0,t.jsx)("code",{children:"ref"})," with the React"," ",(0,t.jsx)("code",{children:"useRef()"})," function."]}),(0,t.jsxs)("p",{children:["A ",(0,t.jsx)("code",{children:"ref"})," lets you directly target and interact with a specific HTML element in your app’s DOM. Remember, we covered this concept in the module on ",(0,t.jsx)(d(),{href:"/course/axis/axis-with-d3",children:"D3.js axes"}),"."]}),(0,t.jsx)(a.d,{code:p}),(0,t.jsx)("br",{}),(0,t.jsxs)("p",{children:["Finally, pass the ",(0,t.jsx)("code",{children:"chartRef"})," to the container you want to monitor."]}),(0,t.jsx)(a.d,{code:f}),(0,t.jsx)("h2",{children:"2️⃣ Use the hook"}),(0,t.jsxs)("p",{children:["Then, pass this newly created ",(0,t.jsx)("code",{children:"chartRef"})," to the hook:"]}),(0,t.jsx)(a.d,{code:m}),(0,t.jsx)("br",{}),(0,t.jsxs)("p",{children:["You now have an object called ",(0,t.jsx)("code",{children:"chartSize"})," with two properties: ",(0,t.jsx)("code",{children:"height"})," and ",(0,t.jsx)("code",{children:"width"}),". These properties can be used in your chart component. \uD83D\uDD25"]}),(0,t.jsxs)("blockquote",{className:"mt-2",children:["Pro tip: Before building a responsive visualization, use"," ",(0,t.jsx)("code",{children:"console.log()"})," to check the ",(0,t.jsx)("code",{children:"chartSize"})," object and ensure everything is working correctly."]}),(0,t.jsx)("h2",{id:"application",children:"\uD83D\uDCCA Application"}),(0,t.jsx)("p",{children:"You’re all set!"}),(0,t.jsxs)("p",{children:["Just pass the values from ",(0,t.jsx)("code",{children:"chartSize"})," to the visualization component, and it will become responsive."]}),(0,t.jsx)("p",{children:"Here is a full example with code:"}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{style:{maxWidth:2e3},className:"full-bleed w-full z-50",children:(0,t.jsx)(c.X,{vizName:"DensityChartResponsive"})}),(0,t.jsx)("h2",{children:"Exercices"}),(0,t.jsx)(h.v,{localStorageId:e.link,exercises:[{title:(0,t.jsx)("span",{children:"Responsive div ↔️"}),content:(0,t.jsx)(u.q,{exercise:j[0]})},{title:(0,t.jsxs)("span",{children:["First use of the ",(0,t.jsx)("code",{children:"use-dimensions"})," hook"]}),content:(0,t.jsx)(u.q,{exercise:j[1]})},{title:(0,t.jsx)("span",{children:"Responsive Bubbles"}),content:(0,t.jsx)(u.q,{exercise:j[2]})}]})]}):null}let p="\nconst chartRef = useRef(null);\n".trim(),m="\nconst chartSize = useDimensions(chartRef);\n".trim(),f="\nreturn(\n  <div ref={chartRef}>\n    <MyChartComponent\n      height={chartSize.height}\n      width={chartSize.width}\n  </div>\n)\n".trim(),j=[{whyItMatters:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:"CSS knows very well how to handle responsiveness. But do you?"}),(0,t.jsxs)("p",{children:["There are numerous caveats to keep in mind! For instance, a"," ",(0,t.jsx)("code",{children:"div"})," does not have a",(0,t.jsx)("code",{children:"height"})," by default."]}),(0,t.jsx)("p",{children:"I strongly encourage you to put a bg color to your chart container to double check it behaves as expected."})]}),toDo:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["Open the ",(0,t.jsx)("code",{children:"Graph"})," component."]}),(0,t.jsx)("li",{children:"Make it render a div with a width of 100% and a grey background."}),(0,t.jsx)("li",{children:"Inside this container, render another div with a height of 300px, add margins of 30px, and set a red background."})]}),practiceSandbox:"exercise/ResponsiveDivPractice",solutionSandbox:"exercise/ResponsiveDivSolution"},{whyItMatters:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("p",{children:"Direct application of this lesson and the previous."})}),toDo:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["The red rectangle is ",(0,t.jsx)("b",{children:"responsive"}),". Let's find its"," ",(0,t.jsx)("code",{children:"width"})," and ",(0,t.jsx)("code",{children:"height"}),"!"]}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["Create a new file named ",(0,t.jsx)("code",{children:"use-dimensions.tsx"}),", and copy the content of the ",(0,t.jsx)("code",{children:"UseDimensions"})," hook into it."]}),(0,t.jsxs)("li",{children:["Set up a ",(0,t.jsx)("code",{children:"chartRef"})," and attach it to the red rectangle"," ",(0,t.jsx)("code",{children:"div"}),"."]}),(0,t.jsxs)("li",{children:["Use the hook to retrieve the dimensions and display them within the red rectangle using ",(0,t.jsx)("code",{children:"p"})," elements."]}),(0,t.jsx)("li",{children:"Resize the window to verify that the dimensions update as expected."})]})]}),practiceSandbox:"exercise/ResponsiveDivUseDimensionsPractice",solutionSandbox:"exercise/ResponsiveDivUseDimensionsSolution"},{whyItMatters:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("p",{children:"Practice, practice, practice!"})}),toDo:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["Take the bubble chart examples we made in the"," ",(0,t.jsx)(d(),{href:"/course/axis/bottom-axis",children:"bottom axis lesson"}),"."]}),(0,t.jsx)("li",{children:"Make it responsive using the same techique!"})]})}),practiceSandbox:"exercise/BubblePlotBottomAxisResponsivePractice",solutionSandbox:"exercise/BubblePlotBottomAxisResponsiveSolution"}]},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}}},function(e){e.O(0,[2343,7754,7823,9484,8190,3710,9774,2888,179],function(){return e(e.s=90838)}),_N_E=e.O()}]);