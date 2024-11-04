(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5517],{99591:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/hover-effect/internal-state",function(){return s(68551)}])},81122:function(e,t,s){"use strict";s.d(t,{$:function(){return o}});var r=s(85893),i=s(67294),n=s(59973),l=s(80615),c=s(88578),a=s(5);let o=e=>{let{VizComponent:t,vizName:s,height:o=400,maxWidth:d=800,caption:h}=e,[u,p]=(0,i.useState)(!1),x=(0,i.useRef)(null),f=(0,n.B)(x);return(0,r.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,r.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,r.jsx)(c.X,{vizName:s})}),(0,r.jsx)("div",{className:"flex justify-center mt-2",children:(0,r.jsx)(a.z,{size:"sm",onClick:()=>p(!u),children:"Hide Sandbox"})})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,r.jsx)("div",{style:{height:o,width:"100%",maxWidth:d},ref:x,className:"pointer-events-auto",children:(0,r.jsx)(t,{height:o,width:f.width})})}),(0,r.jsx)(l.Y,{children:h}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(a.z,{size:"sm",onClick:()=>p(!u),children:"Show code"})})]})})}},88578:function(e,t,s){"use strict";s.d(t,{X:function(){return i}});var r=s(85893);s(67294);let i=e=>{let{vizName:t}=e;return(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},41843:function(e,t,s){"use strict";s.d(t,{p:function(){return o}});var r=s(85893),i=s(49700),n=s(63476),l=s(17414),c=s(41664),a=s.n(c);let o=e=>{let{children:t,title:s,seoDescription:c,previousTocItem:o,nextTocItem:d}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A,{title:s,seoDescription:c}),(0,r.jsx)(i.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:t}),(0,r.jsxs)("div",{className:"flex justify-center items-center space-x-6 my-24 py-12  bg-muted/50",children:[o?(0,r.jsxs)(a(),{href:o.link,className:"text-gray-500 no-underline flex flex-col justify-start items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted ",children:[(0,r.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text",children:"← Previous"}),(0,r.jsx)("p",{children:o.name})]}):(0,r.jsx)("div",{className:"w-96"}),d&&(0,r.jsxs)(a(),{href:d.link,className:"text-gray-500 no-underline flex flex-col justify-start w-96 h-32 border-l border-black  p-8 hover:bg-muted ",children:[(0,r.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text",children:"Next →"}),(0,r.jsx)("p",{children:d.name})]})]}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(n.Z,{})})]})}},80615:function(e,t,s){"use strict";s.d(t,{Y:function(){return i}});var r=s(85893);let i=e=>{let{children:t}=e;return(0,r.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},59973:function(e,t,s){"use strict";s.d(t,{B:function(){return i}});var r=s(67294);let i=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[s,i]=(0,r.useState)(t),n=()=>{i(t())};return(0,r.useEffect)(()=>(window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)),[]),(0,r.useEffect)(()=>{n()},[e]),s}},68551:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return p}});var r=s(85893);s(67294);var i=s(43710),n=s(41843),l=s(11236),c=s(81122),a=s(3572),o=s(14003),d=s(8117),h=s(52450);let u="/course/hover-effect/internal-state";function p(){let e=l.Y.find(e=>e.link===u);return(l.Y.findIndex(e=>e.link===u),e)?(0,r.jsxs)(n.p,{title:e.name,seoDescription:"",nextTocItem:l.Y.find(e=>""===e.link),previousTocItem:l.Y.find(e=>"/course/hover-effect/toggle-class-in-js"===e.link),children:[(0,r.jsx)(i.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,selectedLesson:e,description:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["In the previous lesson, we learned how to modify a hovered graph item using the ",(0,r.jsx)("code",{children:":hover"})," CSS pseudo-class."]}),(0,r.jsxs)("p",{children:["However, this approach has ",(0,r.jsx)("b",{children:"design limitations"}),". To achieve a more effective highlighting effect, it's better to simultaneously"," ",(0,r.jsx)("b",{children:"dim the other graph items"}),"."]}),(0,r.jsx)("p",{children:"This can be accomplished using CSS alone, with the help of the CSS descendant selector."})]})}),(0,r.jsx)("h2",{children:"Internal state & event listener"}),(0,r.jsx)("p",{children:"Add onMouseEnter event listener to all circle"}),(0,r.jsx)("p",{children:"Set an internal state"}),(0,r.jsx)("p",{children:"Trigger a redraw of all circles with conditional state."}),(0,r.jsxs)("p",{children:["As for the tooltip example above, everything starts with an internal state (called ",(0,r.jsx)("code",{children:"hoveredGroup"}),") that stores which circle is hovered hover."]}),(0,r.jsx)(a.d,{code:"\nconst [hoveredGroup, setHoveredGroup] = useState<string | null>(null);\n".trim()}),(0,r.jsxs)("p",{children:["Now, this state needs to be updated when a user hovers over the circle."," ",(0,r.jsx)("code",{children:"setHoveredGroup"})," can be passed as a callback to the"," ",(0,r.jsx)("code",{children:"onMouseOver"})," attribute of each circle."]}),(0,r.jsxs)("p",{children:["On top of this, some specific css classes can be attributed to circles depending on the circle that is hovered hover. In the example above, a class called ",(0,r.jsx)("code",{children:"dimmed"})," is added to circles that must disappear."]}),(0,r.jsx)("p",{children:"To put it in a nutshell, the circles are created as follows:"}),(0,r.jsx)(a.d,{code:'\nconst allShapes = data.map((d, i) => {\n  const className = // class if the circle depends on the hover state\n    hoveredGroup && d.group !== hoveredGroup\n      ? styles.scatterplotCircle + " " + styles.dimmed\n      : styles.scatterplotCircle;\n\n  return (\n    <circle\n      key={i}\n      r={5}\n      cx={xScale(d.x)}\n      cy={yScale(d.y)}\n      className={className} // class is attributed here\n      stroke={colorScale(d.group)}\n      fill={colorScale(d.group)}\n      onMouseOver={() => setHoveredGroup(d.group)} // callback to update the state\n      onMouseLeave={() => setHoveredGroup(null)} // and to set it back to null\n    />\n  );\n});\n'.trim()}),(0,r.jsxs)("p",{children:["Last but not least, some css needs to be added to customize the circle depending on if they are in default, ",(0,r.jsx)("code",{children:".dimmed"})," or"," ",(0,r.jsx)("code",{children:":hover"})," mode."]}),(0,r.jsxs)("p",{children:["Note that the ",(0,r.jsx)("code",{children:"filter: saturate(0)"})," is a good way to dim unwanted circles. Also, playing with ",(0,r.jsx)("code",{children:"transition-delay"})," and"," ",(0,r.jsx)("code",{children:"transition-duration"})," adds to animate the transition is a nice touch you should consider. Check the code below the example to see the full css."]}),(0,r.jsx)(c.$,{vizName:"ScatterplotHoverHighlightDim",VizComponent:o.P,maxWidth:800,height:400,caption:"TODO."}),(0,r.jsx)("h2",{children:"Pros & Cons"}),(0,r.jsx)("p",{children:(0,r.jsx)(d.C,{children:"Pros"})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Allows to sync the hover effect with other UI updates. The hovered state can be used to update any other react components in the application. Like tooltip or another graph."}),(0,r.jsx)("li",{children:"Using javascript to trigger the animation can give more flexibility to customize the hover effect, using react-spring for instance."})]}),(0,r.jsx)("p",{children:(0,r.jsx)(d.C,{variant:"destructive",children:"Cons"})}),(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:"Performance \uD83D\uDEA8. Here we are redrawing all the circles each time a hover effect is hovered. This can be dramatic if you have thousands of circles!"})}),(0,r.jsx)("h2",{children:"More examples"}),(0,r.jsx)("p",{children:"The examples below all use this strategy to implement their hover effect."}),(0,r.jsx)(h.Z,{images:["line-chart-synced-cursor.gif","streamgraph-application.gif"]})]}):null}}},function(e){e.O(0,[2343,7754,3950,7823,8190,3710,693,6155,9774,2888,179],function(){return e(e.s=99591)}),_N_E=e.O()}]);