(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4880],{60324:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/tooltip/display-on-hover",function(){return n(18072)}])},81122:function(e,t,n){"use strict";n.d(t,{$:function(){return c}});var s=n(85893),i=n(67294),r=n(59973),a=n(80615),l=n(88578),o=n(5);let c=e=>{let{VizComponent:t,vizName:n,height:c=400,maxWidth:d=800,caption:h,fileToOpen:u}=e,[x,m]=(0,i.useState)(!1),p=(0,i.useRef)(null),f=(0,r.B)(p);return(0,s.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:x?(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,s.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,s.jsx)(l.X,{vizName:n,fileToOpen:u})}),(0,s.jsx)("div",{className:"flex justify-center mt-2",children:(0,s.jsx)(o.z,{size:"sm",onClick:()=>m(!x),children:"Hide Sandbox"})})]}):(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,s.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:p,className:"pointer-events-auto",children:(0,s.jsx)(t,{height:c,width:f.width})})}),(0,s.jsx)(a.Y,{children:h}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(o.z,{size:"sm",onClick:()=>m(!x),children:"Show code"})})]})})}},88578:function(e,t,n){"use strict";n.d(t,{X:function(){return i}});var s=n(85893);n(67294);let i=e=>{let{vizName:t,height:n="500px",fileToOpen:i}=e;return console.log("rerendeeeerrrrr"),(0,s.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split"+(i?"&module=/".concat(i):""),style:{width:"100%",height:n,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},47498:function(e,t,n){"use strict";n.d(t,{v:function(){return d}});var s=n(85893),i=n(7826),r=n(13742),a=n(61108),l=n(67294),o=n(5),c=n(77522);let d=e=>{let{exercises:t,localStorageId:n}=e,[d,h]=(0,l.useState)([]),[u,x]=(0,l.useState)("");return(0,l.useEffect)(()=>{let e=localStorage.getItem(n),s=e?JSON.parse(e):Array(t.length).fill("todo");h(s)},[]),(0,s.jsx)(i.UQ,{value:u,onValueChange:x,type:"single",collapsible:!0,className:"w-full",children:t.map((e,t)=>(0,s.jsxs)(i.Qd,{value:"item-"+t,children:[(0,s.jsx)(i.o4,{className:"no-decoration hover:bg-gray-50",children:(0,s.jsxs)("div",{className:"text-sm flex justify-start gap-2 items-center",children:[(0,s.jsx)("div",{className:(0,c.cn)("text-xs h-6 w-6 flex justify-center items-center rounded-full text-center leading-none","todo"===d[t]?"bg-gray-200":"failed"===d[t]?"bg-red-300":"bg-green-300"),children:(0,s.jsx)("span",{style:{transform:"translateX(1px)"},children:t+1})}),(0,s.jsx)("span",{children:e.title}),"ok"===d[t]&&(0,s.jsx)(r.Z,{size:16,className:"text-green-500"}),"failed"===d[t]&&(0,s.jsx)(a.Z,{size:16,className:"text-red-500"}),"todo"===d[t]&&(0,s.jsx)("span",{className:"text-gray-400 font-thin",children:"ToDo"})]})}),(0,s.jsxs)(i.vF,{children:[e.content,(0,s.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,s.jsx)(o.z,{variant:"outline",onClick:()=>{let e=[...d];e[t]="failed",h(e),localStorage.setItem(n,JSON.stringify(e)),x("")},children:"Failed"}),(0,s.jsxs)(o.z,{onClick:()=>{let e=[...d];e[t]="ok",h(e),localStorage.setItem(n,JSON.stringify(e)),x("")},children:["Done",(0,s.jsx)("span",{className:"ml-2",children:"\uD83C\uDF89"})]})]})]})]}))})}},13400:function(e,t,n){"use strict";n.d(t,{q:function(){return c}});var s=n(85893),i=n(22725),r=n(67294),a=n(88578),l=n(8117),o=n(5);let c=e=>{let{exercise:t}=e,[n,c]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&c(!1)};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[]);let h=(0,s.jsx)(a.X,{vizName:t.practiceSandbox,height:n?"100%":"500px",fileToOpen:t.fileToOpen}),u=(0,s.jsx)(a.X,{vizName:t.solutionSandbox,height:n?"100%":"500px",fileToOpen:t.fileToOpen});return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4 pt-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(l.C,{children:"To Do"}),(0,s.jsx)("div",{className:"mt-4",children:t.toDo})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(l.C,{children:"Why it matters"}),(0,s.jsx)("div",{className:"mt-4 pl-4",children:t.whyItMatters})]})]}),(0,s.jsxs)(i.mQ,{defaultValue:"practice",className:"relative",children:[(0,s.jsxs)("div",{className:"flex justify-center items-center",children:[(0,s.jsxs)(i.dr,{children:[(0,s.jsx)(i.SP,{value:"practice",children:"Practice"}),(0,s.jsx)(i.SP,{value:"solution",children:"Solution"})]}),(0,s.jsx)("div",{className:"absolute right-0",children:(0,s.jsx)(o.z,{size:"sm",variant:"outline",onClick:()=>c(!0),children:"Show full screen"})})]}),(0,s.jsx)(i.nU,{value:"practice",children:n?(0,s.jsx)(d,{setIsFullScreen:c,sandbox:h}):(0,s.jsx)("div",{className:"my-4",children:h})}),(0,s.jsx)(i.nU,{value:"solution",children:n?(0,s.jsx)(d,{setIsFullScreen:c,sandbox:u}):(0,s.jsx)("div",{className:"my-4",children:u})})]})]})},d=e=>{let{sandbox:t,setIsFullScreen:n}=e;return(0,s.jsxs)("div",{className:"fixed h-screen inset-0 flex justify-center items-center",children:[(0,s.jsx)("div",{className:"absolute inset-0 w-full h-full bg-white/80"}),(0,s.jsxs)("div",{className:"relative w-11/12 h-4/5",children:[t,(0,s.jsx)("div",{className:"w-full mt-2 flex justify-center items-center gap-2",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(o.z,{onClick:()=>n(!1),variant:"destructive",children:"Leave Fullscreen mode"}),(0,s.jsxs)("span",{className:"absolute w-96 ml-2 text-gray-500 text-xs mt-3",children:["You can also press ",(0,s.jsx)("code",{children:"Esc"})]})]})})]})]})}},41843:function(e,t,n){"use strict";n.d(t,{p:function(){return c}});var s=n(85893),i=n(49700),r=n(63476),a=n(17414),l=n(41664),o=n.n(l);let c=e=>{let{children:t,title:n,seoDescription:l,previousTocItem:c,nextTocItem:d}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:n,seoDescription:l}),(0,s.jsx)(i.Z,{}),(0,s.jsx)("div",{className:"wrapper",children:t}),(0,s.jsxs)("div",{className:"flex justify-center items-center space-x-6 my-24 py-12  bg-muted/50",children:[c?(0,s.jsxs)(o(),{href:c.link,className:"text-gray-500 no-underline flex flex-col justify-start items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted ",children:[(0,s.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text",children:"← Previous"}),(0,s.jsx)("p",{children:c.name})]}):(0,s.jsx)("div",{className:"w-96"}),d&&(0,s.jsxs)(o(),{href:d.link,className:"text-gray-500 no-underline flex flex-col justify-start w-96 h-32 border-l border-black  p-8 hover:bg-muted ",children:[(0,s.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text",children:"Next →"}),(0,s.jsx)("p",{children:d.name})]})]}),(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsx)(r.Z,{})})]})}},80615:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});var s=n(85893);let i=e=>{let{children:t}=e;return(0,s.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return d}});var s=n(85893),i=n(32581),r=n(15660),a=n.n(r),l=n(67294),o=n(45993),c=n.n(o);let d=e=>{let{code:t}=e,[n,r]=(0,l.useState)(!1),o=(0,l.useRef)(null);(0,l.useEffect)(()=>{o.current&&a().highlightElement(o.current)},[o,t]);let d=(0,s.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),r(!0)},className:c().codeChunckCopyButton,children:n?"Copied":(0,s.jsx)(i.Z,{size:14,style:{padding:0}})});return(0,s.jsxs)("div",{className:"mb-6 relative",children:[(0,s.jsx)("pre",{className:"rounded-md line-numbers",children:(0,s.jsx)("code",{ref:o,className:"language-javascript",children:t})}),(0,s.jsx)("div",{className:c().copyButtonContainer,children:d})]})}},7826:function(e,t,n){"use strict";n.d(t,{Qd:function(){return c},UQ:function(){return o},o4:function(){return d},vF:function(){return h}});var s=n(85893),i=n(67294),r=n(47398),a=n(8971),l=n(77522);let o=r.fC,c=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,s.jsx)(r.ck,{ref:t,className:(0,l.cn)("border-b",n),...i})});c.displayName="AccordionItem";let d=i.forwardRef((e,t)=>{let{className:n,children:i,...o}=e;return(0,s.jsx)(r.h4,{className:"flex mt-0 pb-0 font-normal",children:(0,s.jsxs)(r.xz,{ref:t,className:(0,l.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",n),...o,children:[i,(0,s.jsx)(a.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});d.displayName=r.xz.displayName;let h=i.forwardRef((e,t)=>{let{className:n,children:i,...a}=e;return(0,s.jsx)(r.VY,{ref:t,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...a,children:(0,s.jsx)("div",{className:(0,l.cn)("pb-4 pt-0",n),children:i})})});h.displayName=r.VY.displayName},22725:function(e,t,n){"use strict";n.d(t,{SP:function(){return c},dr:function(){return o},mQ:function(){return l},nU:function(){return d}});var s=n(85893),i=n(67294),r=n(60434),a=n(77522);let l=r.fC,o=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,s.jsx)(r.aV,{ref:t,className:(0,a.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",n),...i})});o.displayName=r.aV.displayName;let c=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,s.jsx)(r.xz,{ref:t,className:(0,a.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",n),...i})});c.displayName=r.xz.displayName;let d=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,s.jsx)(r.VY,{ref:t,className:(0,a.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",n),...i})});d.displayName=r.VY.displayName},59973:function(e,t,n){"use strict";n.d(t,{B:function(){return i}});var s=n(67294);let i=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,i]=(0,s.useState)(t),r=()=>{i(t())};return(0,s.useEffect)(()=>(window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)),[]),(0,s.useEffect)(()=>{r()},[e]),n}},18072:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var s=n(85893);n(67294);var i=n(43710),r=n(41843),a=n(11236),l=n(47498),o=n(13400),c=n(3572),d=n(81122),h=n(80002);function u(){let e=a.Y.find(e=>"/course/tooltip/display-on-hover"===e.link);return e?(0,s.jsxs)(r.p,{title:e.name,seoDescription:"",nextTocItem:a.Y.find(e=>"/course/tooltip/templates"===e.link),previousTocItem:a.Y.find(e=>"/course/tooltip/tooltip-component"===e.link),children:[(0,s.jsx)(i.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,selectedLesson:e,description:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:["In the previous lesson, we learned how to create a"," ",(0,s.jsx)("code",{children:"Tooltip"})," component, position it correctly, and design its API."]}),(0,s.jsx)("p",{children:"Now, let’s make it appear only on hover!"})]})}),(0,s.jsx)("h2",{children:"1️⃣ Internal State"}),(0,s.jsxs)("p",{children:["The first thing we need is an internal state, created with the"," ",(0,s.jsx)("code",{children:"useState"})," hook."]}),(0,s.jsxs)("p",{children:["This state can be ",(0,s.jsx)("code",{children:"null"})," when nothing is hovered. If the user hovers over a graph marker, its value becomes an object of type"," ",(0,s.jsx)("code",{children:"InteractionData"}),", storing everything we need to know about the marker!"]}),(0,s.jsx)(c.d,{code:"\n// Initialize an internal state\nconst [interactionData, setInteractionData] = useState<InteractionData | null>(null);\n      ".trim()}),(0,s.jsx)("h2",{children:"2️⃣ Updating the State on Hover"}),(0,s.jsxs)("p",{children:["The ",(0,s.jsx)("code",{children:"setInteractionData"})," function allows us to update this state. We can use it to update ",(0,s.jsx)("code",{children:"interactionData"})," whenever a graph marker is hovered over!"]}),(0,s.jsx)("p",{children:"For example, if the marker is a circle, as in a scatterplot, the code might look like this:"}),(0,s.jsx)(c.d,{code:'\n<circle\n  r={8}\n  cx={250}\n  cy={150}\n  onMouseEnter={() => // Each time the circle is hovered hover...\n    setInteractionData({ // ... update the interactionData state with the circle information\n      xPos: 250,\n      yPos: 150,\n      name: "hello",\n    })\n  }\n  onMouseLeave={() => setInteractionData(null)} // When the user stops hovering, reset the interactionData to null\n/>\n\n      '}),(0,s.jsx)("h2",{children:"3️⃣ Conditionally Render the Tooltip"}),(0,s.jsxs)("p",{children:["The ",(0,s.jsx)("code",{children:"Tooltip"})," component takes ",(0,s.jsx)("code",{children:"interactionData"})," ","(the internal state) as a prop."]}),(0,s.jsxs)("p",{children:["If ",(0,s.jsx)("code",{children:"interactionData"})," is ",(0,s.jsx)("code",{children:"null"}),", the component returns nothing, so the tooltip appears only when"," ",(0,s.jsx)("code",{children:"interactionData"})," has a value—i.e., when the user hovers over a marker."]}),(0,s.jsx)("blockquote",{className:"bg-fuchsia-50 py-8",children:(0,s.jsxs)("p",{children:["Don’t forget to add ",(0,s.jsx)("code",{children:'pointerEvents: "none"'})," to the"," ",(0,s.jsx)("code",{children:"div"})," that wraps the ",(0,s.jsx)("code",{children:"Tooltip"})," component! Otherwise, the ",(0,s.jsx)("code",{children:"onMouseEnter()"})," event on SVG elements won’t be triggered."]})}),(0,s.jsx)("h2",{children:"Scatterplot minimal example"}),(0,s.jsx)("p",{children:"Let's apply what we learnt on a scatterplot, creating a minimal tooltip:"}),(0,s.jsx)(d.$,{VizComponent:h.x,vizName:"ScatterplotTooltip",maxWidth:500,height:500,caption:"Scatterplot with tooltip. Hover over a circle to get the corresponding country name."}),(0,s.jsx)("p",{children:(0,s.jsx)("br",{})}),(0,s.jsx)("h2",{children:"Exercises"}),(0,s.jsx)(l.v,{localStorageId:e.link,exercises:[{title:(0,s.jsx)("span",{children:"Tooltip on hover only"}),content:(0,s.jsx)(o.q,{exercise:x[0]})}]})]}):null}let x=[{whyItMatters:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("p",{children:"Let's apply what we just learned!"})}),toDo:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"The Sanbox below has a circle with a tooltip on it"}),(0,s.jsx)("li",{children:"Make sure the tooltip is displayed only when the circle is hovered over!"})]}),practiceSandbox:"exercise/TooltipContentOnHoverPractice",solutionSandbox:"exercise/TooltipContentOnHoverSolution"}]},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}}},function(e){e.O(0,[2343,7754,3950,7823,9484,8190,3710,2,9774,2888,179],function(){return e(e.s=60324)}),_N_E=e.O()}]);