(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13],{72057:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/responsiveness/code-organization",function(){return s(97493)}])},41843:function(e,n,s){"use strict";s.d(n,{p:function(){return h}});var t=s(85893),r=s(49700),i=s(63476),o=s(17414),a=s(41664),c=s.n(a);let h=e=>{let{children:n,title:s,seoDescription:a,previousTocItem:h,nextTocItem:l}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.A,{title:s,seoDescription:a}),(0,t.jsx)(r.Z,{}),(0,t.jsx)("div",{className:"wrapper",children:n}),(0,t.jsxs)("div",{className:"flex justify-center items-center space-x-6 my-24 py-12  bg-muted/50",children:[h?(0,t.jsxs)(c(),{href:h.link,className:"text-gray-500 no-underline flex flex-col justify-start items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted ",children:[(0,t.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text",children:"← Previous"}),(0,t.jsx)("p",{children:h.name})]}):(0,t.jsx)("div",{className:"w-96"}),l&&(0,t.jsxs)(c(),{href:l.link,className:"text-gray-500 no-underline flex flex-col justify-start w-96 h-32 border-l border-black  p-8 hover:bg-muted ",children:[(0,t.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text",children:"Next →"}),(0,t.jsx)("p",{children:l.name})]})]}),(0,t.jsx)("div",{className:"wrapper",children:(0,t.jsx)(i.Z,{})})]})}},3572:function(e,n,s){"use strict";s.d(n,{d:function(){return l}});var t=s(85893),r=s(32581),i=s(15660),o=s.n(i),a=s(67294),c=s(45993),h=s.n(c);let l=e=>{let{code:n}=e,[s,i]=(0,a.useState)(!1),c=(0,a.useRef)(null);(0,a.useEffect)(()=>{c.current&&o().highlightElement(c.current)},[c,n]);let l=(0,t.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(n),i(!0)},className:h().codeChunckCopyButton,children:s?"Copied":(0,t.jsx)(r.Z,{size:14,style:{padding:0}})});return(0,t.jsxs)("div",{className:"mb-6 relative",children:[(0,t.jsx)("pre",{className:"rounded-md line-numbers",children:(0,t.jsx)("code",{ref:c,className:"language-javascript",children:n})}),(0,t.jsx)("div",{className:h().copyButtonContainer,children:l})]})}},97493:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var t=s(85893);s(67294);var r=s(43710),i=s(41843),o=s(11236),a=s(3572);function c(){let e=o.Y.find(e=>"/course/responsiveness/code-organization"===e.link);return e?(0,t.jsxs)(i.p,{title:e.name,seoDescription:"",nextTocItem:o.Y.find(e=>"/course/responsiveness/common-pitfalls"===e.link),previousTocItem:o.Y.find(e=>"/course/responsiveness/using-the-hook"===e.link),children:[(0,t.jsx)(r.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,selectedLesson:e,description:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["As a software engineer, making graphs responsive is a common task. You’ll likely apply this approach across"," ",(0,t.jsx)("b",{children:"all chart components"})," in your codebase."]}),(0,t.jsx)("p",{children:"Let’s explore a useful convention I like to use in my work to simplify this process."})]})}),(0,t.jsx)("h2",{id:"wrapper",children:"\uD83C\uDF81 Wrapper component"}),(0,t.jsxs)("p",{children:['I like to create a "wrapper" component that manages the responsiveness and pass all the other props to the viz component, plus'," ",(0,t.jsx)("code",{children:"width"})," and ",(0,t.jsx)("code",{children:"height"}),"."]}),(0,t.jsxs)("p",{children:["If the graph component is called let's say ",(0,t.jsx)("code",{children:"DensityChart"}),", I like calling the wrapper ",(0,t.jsx)("code",{children:"ResponsiveDensityChart"}),"."]}),(0,t.jsx)("p",{children:"Here is the organization I usually use:"}),(0,t.jsx)(a.d,{code:"\n\ntype ResponsiveDensityChartProps = {\n  data: number[];\n};\n\n// Responsive component = wrapper that manages the dimensions and does nothing else\nexport const ResponsiveDensityChart = (props: ResponsiveDensityChartProps) => {\n  const chartRef = useRef(null);\n\n  const chartSize = useDimensions(chartRef);\n\n  return (\n    <div ref={chartRef} style={{ width: '100%', height: '100%' }}>\n      <DensityChart\n        height={chartSize.height}\n        width={chartSize.width}\n        {...props} // pass all the props\n      />\n    </div>\n  );\n};\n\n// Type is the same, with width and height added!\ntype DensityChartProps = ResponsiveDensityChartProps & {\n  width: number;\n  height: number;\n};\n\n// Non responsive component\nconst DensityChart = ({ width, height, data }: DensityChartProps) => {\n  //... dataviz code goes here\n}\n      ".trim()}),(0,t.jsx)("h2",{children:"Why It’s Great:"}),(0,t.jsx)("h3",{children:"\uD83D\uDE83 Seamless Prop Forwarding"}),(0,t.jsxs)("p",{children:["Using the ",(0,t.jsx)("code",{children:"...props"})," notation, all props are automatically passed to the child component, streamlining component configuration and usage."]}),(0,t.jsx)("h3",{children:"TypeScript Support"}),(0,t.jsxs)("p",{children:["With the ",(0,t.jsx)("code",{children:"&"})," operator, there’s no need to re-type both the main chart component and its responsive variant. The responsive component has the same type as the chart component, with the addition of width and height props."]}),(0,t.jsx)("h3",{children:"Consistency Across Components"}),(0,t.jsx)("p",{children:"For codebases with multiple chart components, consistently using this wrapper approach minimizes mental overhead, making it easier to manage and scale your components."})]}):null}},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}}},function(e){e.O(0,[2343,7754,7823,8190,3710,9774,2888,179],function(){return e(e.s=72057)}),_N_E=e.O()}]);