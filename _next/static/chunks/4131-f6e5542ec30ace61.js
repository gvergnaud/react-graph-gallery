(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4131],{98646:function(e,t,n){"use strict";n.d(t,{g:function(){return l}});var i=Math.PI/3,r=[0,i,2*i,3*i,4*i,5*i];function s(e){return e[0]}function o(e){return e[1]}function l(){var e,t,n,l=0,a=0,c=1,d=1,u=s,h=o;function f(e){var i,r={},s=[],o=e.length;for(i=0;i<o;++i)if(!(isNaN(a=+u.call(null,l=e[i],i,e))||isNaN(c=+h.call(null,l,i,e)))){var l,a,c,d=Math.round(c/=n),f=Math.round(a=a/t-(1&d)/2),m=c-d;if(3*Math.abs(m)>1){var x=a-f,p=f+(a<f?-1:1)/2,v=d+(c<d?-1:1),j=a-p,g=c-v;x*x+m*m>j*j+g*g&&(f=p+(1&d?1:-1)/2,d=v)}var w=f+"-"+d,b=r[w];b?b.push(l):(s.push(b=r[w]=[l]),b.x=(f+(1&d)/2)*t,b.y=d*n)}return s}function m(e){var t=0,n=0;return r.map(function(i){var r=Math.sin(i)*e,s=-Math.cos(i)*e,o=r-t,l=s-n;return t=r,n=s,[o,l]})}return f.hexagon=function(t){return"m"+m(null==t?e:+t).join("l")+"z"},f.centers=function(){for(var i=[],r=Math.round(a/n),s=Math.round(l/t),o=r*n;o<d+e;o+=n,++r)for(var u=s*t+(1&r)*t/2;u<c+t/2;u+=t)i.push([u,o]);return i},f.mesh=function(){var t=m(e).slice(0,4).join("l");return f.centers().map(function(e){return"M"+e+"m"+t}).join("")},f.x=function(e){return arguments.length?(u=e,f):u},f.y=function(e){return arguments.length?(h=e,f):h},f.radius=function(r){return arguments.length?(t=2*(e=+r)*Math.sin(i),n=1.5*e,f):e},f.size=function(e){return arguments.length?(l=a=0,c=+e[0],d=+e[1],f):[c-l,d-a]},f.extent=function(e){return arguments.length?(l=+e[0][0],a=+e[0][1],c=+e[1][0],d=+e[1][1],f):[[l,a],[c,d]]},f.radius(1)}},61651:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(85893);n(67294);var r=n(49871),s=n(28843),o=n(77522);let l={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function a(e){let{chartFamily:t}=e,n=s.c.filter(e=>e.family===t).map((e,t)=>{let n=(0,o.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(r.Z,{link:n,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:122})},t)});return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==l?void 0:l[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:n})]})}},81122:function(e,t,n){"use strict";n.d(t,{$:function(){return c}});var i=n(85893),r=n(67294),s=n(59973),o=n(80615),l=n(88578),a=n(5);let c=e=>{let{VizComponent:t,vizName:n,height:c=400,maxWidth:d=800,caption:u}=e,[h,f]=(0,r.useState)(!1),m=(0,r.useRef)(null),x=(0,s.B)(m);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:h?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(l.X,{vizName:n})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(a.z,{size:"sm",onClick:()=>f(!h),children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:m,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:c,width:x.width})})}),(0,i.jsx)(o.Y,{children:u}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(a.z,{size:"sm",onClick:()=>f(!h),children:"Show code"})})]})})}},88578:function(e,t,n){"use strict";n.d(t,{X:function(){return r}});var i=n(85893);n(67294);let r=e=>{let{vizName:t,height:n="500px",fileToOpen:r}=e;return(0,i.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split"+(r?"&module=/".concat(r):""),style:{width:"100%",height:n,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},26820:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(85893);n(67294);var r=n(28843),s=n(56438);let o=e=>{let{imgLink:t,height:n,opacity:r,children:s}=e;return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{style:{backgroundImage:"url("+t+")",height:n,backgroundAttachment:"fixed",opacity:r,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,i.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:s})]})};function l(e){var t;let{chartId:n}=e,l=(null===(t=r.c.find(e=>e.id===n))||void 0===t?void 0:t.label)||"chart";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{id:"inspiration",children:l+" inspiration"}),(0,i.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,i.jsx)("span",{children:l}),", note that"," ",(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,i.jsx)("div",{className:"border mb-10",children:(0,i.jsx)(o,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,i.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,i.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,i.jsxs)("p",{className:"text-center text-sm",children:[(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,i.jsx)("span",{children:l})," ","looks good!"]}),(0,i.jsx)(s.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},80153:function(e,t,n){"use strict";n.d(t,{A:function(){return h}});var i=n(85893),r=n(49700),s=n(63476),o=n(67294),l=n(63084),a=n.n(l);function c(){let[e,t]=(0,o.useState)([]),[n,r]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,o.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),n=window.scrollY+150,i=t.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e,0),s=t.findIndex(e=>e===i);r(-1===s?0:s)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,i.jsx)("div",{className:a().tableOfContent,children:e.map((t,r)=>(0,i.jsx)("p",{className:n===r?"".concat(a().tocItem," ").concat(a().tocItemActive):a().tocItem,onClick:t=>{t.preventDefault(),e[r].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=n(17414),u=n(62594);let h=e=>{let{children:t,title:n,seoDescription:o}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:n,seoDescription:o}),(0,i.jsx)(r.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:t}),(0,i.jsx)(u.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(s.Z,{})}),(0,i.jsx)(c,{})]})}},90505:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var i=n(85893),r=n(41664),s=n.n(r),o=n(28843),l=n(66717),a=n(3572);let c=e=>{let{chartId:t}=e,n=o.c.filter(e=>e.id===t)[0].label;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{id:"responsiveness",children:"Responsive "+n+" with react"}),(0,i.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,i.jsx)("code",{children:"width"})," and ",(0,i.jsx)("code",{children:"height"})," and will render a ",n," of those dimensions."]}),(0,i.jsxs)("p",{children:["Making the ",n," responsive requires adding a ",(0,i.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,i.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,i.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,i.jsx)(l.U,{title:(0,i.jsxs)("span",{children:[(0,i.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,i.jsx)(a.d,{code:d})}),(0,i.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,i.jsx)(s(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})},d='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},49871:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(85893);n(67294);var r=n(95887),s=n(28843),o=n(41664),l=n.n(o);let a=s.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:n,link:s,isAvailable:o,size:c}=e,u=a.includes(t),h=o?"opacity-100":"opacity-20";return(0,i.jsx)(l(),{href:o?s:"subscribe",className:"no-underline",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+h+" "+(o?"cursor-pointer":"cursor-not-allowed"),children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(r.Z,{chartLogo:t,size:c})}),u?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(d,{size:c})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+h,children:n})]})})}let d=e=>{let{size:t}=e;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},66717:function(e,t,n){"use strict";n.d(t,{U:function(){return r}});var i=n(85893);let r=e=>{let{title:t,children:n}=e;return(0,i.jsxs)("details",{className:"bg-gray-50 py-2 px-4 rounded-md my-2",children:[(0,i.jsx)("summary",{className:"cursor-pointer",children:t}),(0,i.jsx)("div",{className:"pt-4",children:n})]})}},80615:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var i=n(85893);let r=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return d}});var i=n(85893),r=n(32581),s=n(15660),o=n.n(s),l=n(67294),a=n(45993),c=n.n(a);let d=e=>{let{code:t}=e,[n,s]=(0,l.useState)(!1),a=(0,l.useRef)(null);(0,l.useEffect)(()=>{a.current&&o().highlightElement(a.current)},[a,t]);let d=(0,i.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),s(!0)},className:c().codeChunckCopyButton,children:n?"Copied":(0,i.jsx)(r.Z,{size:14,style:{padding:0}})});return(0,i.jsxs)("div",{className:"mb-6 relative",children:[(0,i.jsx)("pre",{className:"rounded-md line-numbers",children:(0,i.jsx)("code",{ref:a,className:"language-javascript",children:t})}),(0,i.jsx)("div",{className:c().copyButtonContainer,children:d})]})}},18893:function(e,t,n){"use strict";n.d(t,{H:function(){return r}});var i=n(85893);let r=e=>{let{text:t}=e;return(0,i.jsxs)("blockquote",{className:"mt-10 opacity-20",children:[(0,i.jsx)("b",{className:"text-reactGallery mr-4",children:"ToDo"}),t]})}},59973:function(e,t,n){"use strict";n.d(t,{B:function(){return r}});var i=n(67294);let r=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,r]=(0,i.useState)(t),s=()=>{r(t())};return(0,i.useEffect)(()=>(window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)),[]),(0,i.useEffect)(()=>{s()},[e]),n}},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}}]);