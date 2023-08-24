(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3096],{2876:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/circular-barplot",function(){return a(4106)}])},7262:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var r=a(5893);a(7294);var i=a(5887),n=a(8843),s=a(1664),l=a.n(s);let o=n.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:a,link:n,isAvailable:s,size:c}=e,h=o.includes(t),u=s?"opacity-100":"opacity-20";return(0,r.jsx)(l(),{href:s?n:"subscribe",className:"no-underline",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(s?"cursor-pointer":"cursor-not-allowed"),children:[(0,r.jsx)("div",{className:"absolute",children:(0,r.jsx)(i.Z,{chartLogo:t,size:c})}),h?(0,r.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,r.jsx)(d,{size:c})}):(0,r.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,r.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,r.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:a})]})})}let d=e=>{let{size:t}=e;return(0,r.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,r.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})};var h=a(4588);let u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){let{chartFamily:t}=e,a=n.c.filter(e=>e.family===t).map((e,t)=>{let a=(0,h.y)(e.reactURL);return(0,r.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,r.jsx)(c,{link:a,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==u?void 0:u[t]}),(0,r.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:a})]})}},1122:function(e,t,a){"use strict";a.d(t,{$:function(){return c}});var r=a(5893),i=a(7294),n=a(9973),s=a(8107),l=a(615),o=a(8578);let c=e=>{let{VizComponent:t,vizName:a,height:c=400,maxWidth:d=800,caption:h}=e,[u,m]=(0,i.useState)(!1),x=(0,i.useRef)(null),p=(0,n.B)(x);return(0,r.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,r.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,r.jsx)(o.X,{vizName:a})}),(0,r.jsx)("div",{className:"flex justify-center mt-2",children:(0,r.jsx)(s.z,{size:"sm",onClick:()=>m(!u),children:"Hide Sandbox"})})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,r.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:x,className:"pointer-events-auto",children:(0,r.jsx)(t,{height:c,width:p.width})})}),(0,r.jsx)(l.Y,{children:h}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(s.z,{size:"sm",onClick:()=>m(!u),children:"Show code"})})]})})}},8578:function(e,t,a){"use strict";a.d(t,{X:function(){return i}});var r=a(5893);a(7294);let i=e=>{let{vizName:t}=e;return(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},6820:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var r=a(5893);a(7294);var i=a(8843),n=a(6438);let s=e=>{let{imgLink:t,height:a,opacity:i,children:n}=e;return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{style:{backgroundImage:"url("+t+")",height:a,backgroundAttachment:"fixed",opacity:i,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,r.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:n})]})};function l(e){var t;let{chartId:a}=e,l=(null===(t=i.c.find(e=>e.id===a))||void 0===t?void 0:t.label)||"chart";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{id:"inspiration",children:l+" inspiration"}),(0,r.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,r.jsx)("span",{children:l}),", note that"," ",(0,r.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,r.jsx)("div",{className:"border mb-10",children:(0,r.jsx)(s,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,r.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,r.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,r.jsxs)("p",{className:"text-center text-sm",children:[(0,r.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,r.jsx)("span",{children:l})," ","looks good!"]}),(0,r.jsx)(n.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},153:function(e,t,a){"use strict";a.d(t,{A:function(){return u}});var r=a(5893),i=a(9700),n=a(3476),s=a(7294),l=a(3084),o=a.n(l);function c(){let[e,t]=(0,s.useState)([]),[a,i]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,s.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),a=window.scrollY+150,r=t.reduce((e,t)=>Math.abs(t-a)<Math.abs(e-a)?t:e,0),n=t.findIndex(e=>e===r);i(-1===n?0:n)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,r.jsx)("div",{className:o().tableOfContent,children:e.map((t,i)=>(0,r.jsx)("p",{className:a===i?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[i].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=a(7414),h=a(2594);let u=e=>{let{children:t,title:a,seoDescription:s}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.A,{title:a,seoDescription:s}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)("div",{className:"wrapper",children:t}),(0,r.jsx)(h.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(n.Z,{})}),(0,r.jsx)(c,{})]})}},6438:function(e,t,a){"use strict";a.d(t,{J:function(){return s}});var r=a(5893),i=a(1664),n=a.n(i);let s=e=>{let{children:t,href:a,isFilled:i,size:s="md",isFaded:l}=e,o=a.startsWith("www")||a.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";i?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===s&&(c+="text-sm py-1 px-2 "),"md"===s&&(c+="text-md py-2 px-4 "),l&&(c+="opacity-60");let d=(0,r.jsx)("span",{className:c,children:t});return o?(0,r.jsx)("a",{href:a,target:"_blank",children:d}):(0,r.jsx)(n(),{href:a,passHref:!0,children:d})}},9965:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var r=a(5893);a(7294);var i=a(8843),n=a(4588),s=a(1859),l=a(6438),o=a(1832),c=a.n(o);let d=e=>{let{direction:t,text:a,children:i}=e;return(0,r.jsx)("span",{className:c().tooltip+" "+c()[t],id:a,children:i})};var h=a(5887);function u(e){let{title:t,description:a,chartType:o,showSectionLink:c=!1,showInspirationLink:u=!0,showD3GalleryLink:m=!0}=e,x=i.c.find(e=>e.id===o);return(0,r.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,r.jsxs)("div",{className:"flex justify-start items-center",children:[(0,r.jsx)("h1",{children:t}),o&&x&&(0,r.jsx)("div",{className:"w-20 ml-4",children:(0,r.jsx)(h.Z,{chartLogo:null==x?void 0:x.logo})})]}),(0,r.jsx)(s.r,{}),(0,r.jsx)("div",{className:"max-w-xxl  py-2",children:a}),o&&(0,r.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),x&&(0,r.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,r.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,r.jsx)(l.J,{href:(0,n.y)(x.reactURL),size:"sm",children:x.label+" section"})}),u&&(0,r.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,r.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+x.id,size:"sm",children:"inspiration"})}),m&&(0,r.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,r.jsx)(l.J,{href:x.d3URL,size:"sm",children:"d3 gallery"})}),(0,r.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,r.jsx)(l.J,{href:x.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})}},8107:function(e,t,a){"use strict";a.d(t,{z:function(){return i}});var r=a(5893);let i=e=>{let{children:t,onClick:a,isFilled:i,size:n="md"}=e,s="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===n&&(s+="text-sm py-1 px-2"),"md"===n&&(s+="text-md py-2 px-4"),i?s+=" bg-reactGallery hover:bg-reactGallery text-white":s+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,r.jsx)("button",{className:s,onClick:a,children:t})}},615:function(e,t,a){"use strict";a.d(t,{Y:function(){return i}});var r=a(5893);let i=e=>{let{children:t}=e;return(0,r.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,a){"use strict";a.d(t,{d:function(){return l}});var r=a(5893),i=a(5660),n=a.n(i),s=a(7294);let l=e=>{let{code:t}=e,a=(0,s.useRef)(null);return(0,s.useEffect)(()=>{a.current&&n().highlightElement(a.current)},[a,t]),(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsx)("pre",{className:"rounded-md line-numbers",children:(0,r.jsx)("code",{ref:a,className:"p-0 language-js",children:t})})})}},9973:function(e,t,a){"use strict";a.d(t,{B:function(){return i}});var r=a(7294);let i=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[a,i]=(0,r.useState)(t),n=()=>{i(t())};return(0,r.useEffect)(()=>(window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)),[]),(0,r.useLayoutEffect)(()=>{n()},[]),a}},4106:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var r=a(5893),i=a(7294),n=a(153),s=a(9965),l=a(7262),o=a(3572),c=a(1122),d=a(1664),h=a.n(d),u=a(6820);let m=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"Mel",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Sophie",value:14},{name:"Leane",value:74},{name:"Melanie",value:72},{name:"Tibo",value:23},{name:"Remi",value:124},{name:"Balkis",value:23},{name:"Nina",value:104},{name:"Lucas",value:94},{name:"Paul",value:2}];var x=a(7875);let p=e=>{let{width:t,height:a,data:n}=e,s=Math.min(t,a)/2,l=n.sort((e,t)=>t.value-e.value).map(e=>e.name),o=(0,i.useMemo)(()=>x.tiA().domain(l).range([0,2*Math.PI]).padding(.2),[n,a,t]),c=(0,i.useMemo)(()=>{let[e,t]=x.Wem(n.map(e=>e.value));return x.s$j().domain([0,t||10]).range([90,s])},[n,t,a]),d=x.Nb1(),h=n.map((e,t)=>{let a=d({innerRadius:90,outerRadius:c(e.value),startAngle:o(e.name),endAngle:o(e.name)+o.bandwidth()});return(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:a,opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1})},t)});return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:a,children:(0,r.jsx)("g",{transform:"translate("+(t/2+20)+","+(a/2+20)+")",children:h})})})},f=e=>{let{width:t=700,height:a=400}=e;return(0,r.jsx)(p,{data:m,width:t,height:a})},j=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"Mel",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Sophie",value:14},{name:"Leane",value:74},{name:"Melanie",value:72},{name:"Tibo",value:23},{name:"Remi",value:124},{name:"Balkis",value:23},{name:"Nina",value:104},{name:"Lucas",value:94},{name:"Paul",value:2}],g=e=>{let{width:t,height:a,data:n}=e,s=Math.min(t,a)/2-50,l=n.sort((e,t)=>t.value-e.value).map(e=>e.name),o=(0,i.useMemo)(()=>x.tiA().domain(l).range([0,2*Math.PI]).padding(.2),[n,a,t]),c=(0,i.useMemo)(()=>{let[e,t]=x.Wem(n.map(e=>e.value));return x.s$j().domain([0,t||10]).range([90,s])},[n,t,a]),d=x.Nb1(),h=n.map((e,t)=>{let a=d({innerRadius:90,outerRadius:c(e.value),startAngle:o(e.name),endAngle:o(e.name)+o.bandwidth()}),i=o(e.name)+o.bandwidth()/2,n=(i+Math.PI)%(2*Math.PI)<Math.PI,s=c(e.value)+10;return(0,r.jsxs)("g",{children:[(0,r.jsx)("path",{d:a,opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1}),(0,r.jsx)("g",{transform:"rotate("+(180*i/Math.PI-90)+"),translate("+s+",0)",children:(0,r.jsx)("text",{textAnchor:n?"end":"start",alignmentBaseline:"middle",fontSize:16,transform:n?"rotate(180)":"rotate(0)",children:e.name})})]},t)});return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:a,children:(0,r.jsx)("g",{transform:"translate("+t/2+","+a/2+")",children:h})})})},v=e=>{let{width:t=700,height:a=400}=e;return(0,r.jsx)(g,{data:j,width:t,height:a})},b=()=>40*Math.random(),w=["travel","food","beer"],y=["Emily","Hannah","Madison","Ashley","Sarah","Alexis","Samantha","Jessica","Elizabeth","Taylor","Lauren","Alyssa","Kayla","Abigail","Brianna","Olivia","Emma","Megan","Grace","Victoria","Rachel","Anna","Sydney","Destiny","Morgan","Jennifer","Jasmine","Haley","Julia","Kaitlyn","Nicole","Amanda","Katherine","Natalie","Hailey","Alexandra","Savannah","Chloe","Rebecca","Stephanie","Maria","Sophia","Mackenzie","Allison","Isabella","Amber","Mary","Danielle","Gabrielle","Jordan","Brooke","Michelle","Sierra","Katelyn","Andrea","Madeline","Sara","Kimberly","Courtney","Erin","Brittany","Vanessa","Jenna","Jacqueline","Caroline","Faith","Makayla","Bailey","Paige","Shelby"].flatMap(e=>w.map(t=>({group:e,subgroup:t,value:b()}))),k=["#e85252","#6689c6","#9a6fb0"],N=e=>{let{width:t,height:a,data:n}=e,s=Math.min(t,a)/2*.3,l=Math.min(t,a)/2-50,o=[...new Set(n.map(e=>e.group))],c=[...new Set(n.map(e=>e.subgroup))],d=x.knu().keys(c).value(e=>n.filter(t=>t.group===e)[0].value),h=d(o),u=h[h.length-1]||[],m=u.map(e=>{let t=e[e.length-1]||0;return{name:e.data,value:t}}),p=m.sort((e,t)=>t.value-e.value),f=p[0].value,j=x.tiA().domain(p.map(e=>e.name)).range([0,2*Math.PI]).padding(.2),g=(0,i.useMemo)(()=>x.s$j().domain([0,f]).range([s,l]),[n,t,a]);var v=x.PKp().domain(c).range(k);let b=x.Nb1(),w=h.map((e,t)=>e.map((a,i)=>{let n=j(a.data)||0,s=b({innerRadius:g(a[0]),outerRadius:g(a[1]),startAngle:n,endAngle:n+j.bandwidth()});if(s)return(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:s,opacity:.7,stroke:"black",fill:v(e.key),fillOpacity:.9,strokeWidth:1},t)},t+"-"+i)})),y=p.map((e,t)=>{let a=j(e.name)||0,i=(a+j.bandwidth()/2+Math.PI)%(2*Math.PI)<Math.PI,n=(a+j.bandwidth()/2)*180/Math.PI-90,s=g(e.value)+10;return(0,r.jsx)("g",{transform:"rotate("+n+"),translate("+s+",0)",children:(0,r.jsx)("text",{textAnchor:i?"end":"start",alignmentBaseline:"middle",fontSize:16,transform:i?"rotate(180)":"rotate(0)",children:e.name})},t)});return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:a,children:(0,r.jsxs)("g",{transform:"translate("+t/2+","+a/2+")",children:[w,y]})})})},z=e=>{let{width:t=700,height:a=400}=e;return(0,r.jsx)(N,{data:y,width:t,height:a})};var M=a(615);let A=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["A"," ",(0,r.jsx)("a",{href:"https://www.data-to-viz.com/graph/circularbarplot.html",children:"circular barplot"})," ","is a variation of a ",(0,r.jsx)(h(),{href:"barplot",children:"barplot"})," where bars are displayed around a circle using polar coordinates. It is a less accurate representation of the data, but provides a strong ",(0,r.jsx)("b",{children:"eye-catching"})," ","effect."]}),(0,r.jsxs)("p",{children:["This page describes how to deal with ",(0,r.jsx)("b",{children:"radial coordinates"})," with"," ",(0,r.jsx)("code",{children:"d3.js"})," and ",(0,r.jsx)("code",{children:"react"})," to build a circular barplot. It's a step by step tutorial with several interactive sandboxes."]})]});function _(){return(0,r.jsxs)(n.A,{title:"Circular Barplot with React",seoDescription:"How to build a circular barplot with React and D3.js. A set of re-usable components",children:[(0,r.jsx)(s.Z,{title:"Circular Barplot",description:A,chartType:"circularBarplot"}),(0,r.jsx)("h2",{id:"data",children:"The Data"})," ",(0,r.jsxs)("p",{children:["The dataset required to build a circular barplot is usually an array where each item is an object providing the ",(0,r.jsx)("code",{children:"name"})," and the"," ",(0,r.jsx)("code",{children:"value"})," of the group."]}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"Here is a minimal example"}),(0,r.jsx)(o.d,{code:S}),(0,r.jsxs)("p",{children:["Note: if your data is in ",(0,r.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,r.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/graph/barplot_horizontal.html",children:"here"}),"."]}),(0,r.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,r.jsxs)("p",{children:["The goal here is to create a ",(0,r.jsx)("code",{children:"CircularBarplot"})," component that will be stored in a ",(0,r.jsx)("code",{children:"CircularBarplot.tsx"})," file. This component requires 3 props to render: a ",(0,r.jsx)("code",{children:"width"}),", a"," ",(0,r.jsx)("code",{children:"height"}),", and some ",(0,r.jsx)("code",{children:"data"}),"."]}),(0,r.jsxs)("p",{children:["The shape of the ",(0,r.jsx)("code",{children:"data"})," is described above. The"," ",(0,r.jsx)("code",{children:"width"})," and ",(0,r.jsx)("code",{children:"height"})," will be used to rendering a"," ",(0,r.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the circular barplot."]}),(0,r.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our"," ",(0,r.jsx)("code",{children:"CircularBarplot"})," component:"]}),(0,r.jsx)(o.d,{code:R}),(0,r.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the svg ",(0,r.jsx)("code",{children:"circle"}),", but it's react that will render them in the ",(0,r.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,r.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/circular_barplot.html",children:"d3.js examples"}),"."]}),(0,r.jsx)("h2",{id:"radial bars",children:"Drawing circular bars"}),(0,r.jsxs)("p",{children:["Even if the process to build a circular barplot is very different than for the common ",(0,r.jsx)(h(),{href:"barplot",children:"barplot"}),", I strongly advise to have a good understanding of the common version first."," ",(0,r.jsx)(h(),{href:"barplot",children:"Check it out"}),"."]}),(0,r.jsx)("p",{children:"Here is an overview of the main differences."}),(0,r.jsx)("h3",{children:"→ Radial coordinates"}),(0,r.jsxs)("p",{children:["Do you remember your high school lectures about"," ",(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Trigonometry",children:"trigonometry"}),"? Me either \uD83D\uDE43. But we need it here. Using radial coordinates, each point in the 2d coordinate space is defined using an ",(0,r.jsx)("b",{children:"angle"})," and its"," ",(0,r.jsx)("b",{children:"distance"})," to the center of the chart."]}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"Angle"})," is defined between ",(0,r.jsx)("code",{children:"0"})," (top) and"," ",(0,r.jsx)("code",{children:"2*Pi"})," (top again). A value of ",(0,r.jsx)("code",{children:"Pi"})," will be at the bottom."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"Distance"})," to the center goes from ",(0,r.jsx)("code",{children:"innerRadius"})," to"," ",(0,r.jsx)("code",{children:"outerRadius"}),". The inner radius is arbitraty. Do not use something too small or your bars will be very distorded. The upper value is computed from the svg dimension to fill it properly."]})]}),(0,r.jsx)("p",{children:"Since I cannot seem to remember this, I thought you might have the same struggle and would enjoy this little schema:"}),(0,r.jsxs)("div",{className:"flex flex-col items-center mt-8 mb-12",children:[(0,r.jsx)("img",{src:"/img/trigonometry.png",style:{maxWidth:700},alt:"schema explaining how radial coordinates work with d3.js"}),(0,r.jsx)(M.Y,{children:"When dealing with radial coordinates, a position is defined by its angle and its distance from the center."})]}),(0,r.jsx)("h3",{children:"→ X Scale"}),(0,r.jsxs)("p",{children:["The X scale (for the groups) is a ",(0,r.jsx)("code",{children:"scaleBand"})," like for a common barplot, but it goes from ",(0,r.jsx)("code",{children:"0"})," to ",(0,r.jsx)("code",{children:"2*Pi"})," ","instead of going from ",(0,r.jsx)("code",{children:"0"})," to ",(0,r.jsx)("code",{children:"width"}),"."," "]}),(0,r.jsx)(o.d,{code:I}),(0,r.jsx)("h3",{children:"→ Y Scale"}),(0,r.jsxs)("p",{children:["The Y scale uses a very specific ",(0,r.jsx)("code",{children:"scaleRadial"}),". Indeed, bars are wider at their top than at their bottom. This"," ",(0,r.jsx)("code",{children:"scaleRadial"})," takes it into account and bring some sort of correction. Check the"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-scale#radial-scales",children:"doc"}),", or even this ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-scale/issues/90",children:"explanation"})," ","for more."]}),(0,r.jsx)("p",{children:"At the end of the day, that's how our scales look like:"}),(0,r.jsx)(o.d,{code:C}),(0,r.jsxs)("h3",{children:["→ Drawing with ",(0,r.jsx)("code",{children:"path"}),", not ",(0,r.jsx)("code",{children:"rect"}),"."]}),(0,r.jsxs)("p",{children:["We are not drawing rectangles here, so the svg ",(0,r.jsx)("code",{children:"rect"})," element won't be helpful."]}),(0,r.jsxs)("p",{children:["Instead, we are drawing ",(0,r.jsx)("b",{children:"fractions of a rings"}),", called ",(0,r.jsx)("b",{children:"arcs"}),"."]}),(0,r.jsxs)("p",{children:["Fortunately, d3.js has an ",(0,r.jsx)("code",{children:"arc()"})," function that will generate the svg ",(0,r.jsx)("code",{children:"path"})," for us. It's the same process that is used to create a ",(0,r.jsx)(h(),{href:"pie-plot",children:"pie chart"})," or a"," ",(0,r.jsx)(h(),{href:"donut",children:"donut chart"}),"."]}),(0,r.jsx)("p",{children:"Here is an idea on how the function can be used to generate all the svg shapes:"}),(0,r.jsx)(o.d,{code:P}),(0,r.jsx)("h3",{children:"→ Rendering"}),(0,r.jsxs)("p",{children:["Not much to add. Just include the paths in a ",(0,r.jsx)("code",{children:"svg"})," element. Remember that 0,0 is the center of the chart instead of being the top-left corner. So we need to apply a ",(0,r.jsx)("code",{children:"translate"})," at some point."]}),(0,r.jsx)(c.$,{vizName:"CircularBarplotBasic",VizComponent:f,height:500,maxWidth:600,caption:(0,r.jsxs)("span",{children:["Most basic circular barplot built with d3.js and react, using radial coordinates and ",(0,r.jsx)("code",{children:"path"})," instead of ",(0,r.jsx)("code",{children:"rect"}),"."]})}),(0,r.jsx)("p",{children:"That's a good start but it looks pretty much like a snail so far. Let's make it a real chart with labels and values."}),(0,r.jsx)("h2",{id:"labels",children:"Labels"})," ",(0,r.jsxs)("p",{children:["It is necessary to add a text element to show the ",(0,r.jsx)("b",{children:"name"})," of each bar."]}),(0,r.jsxs)("p",{children:["We need those labels to be ",(0,r.jsx)("b",{children:"readable"})," (like not written upside down). So a bit of logic is necessary to determine wether or not a label must be flipped, and how to position it properly."]}),(0,r.jsxs)("p",{children:["To do so it is necessary to switch from radians (use for the"," ",(0,r.jsx)("code",{children:"xScale"}),") to degrees (used for the ",(0,r.jsx)("code",{children:"transform"})," ","property)."," "]}),(0,r.jsx)("p",{children:"Please check the code below for full explanation."}),(0,r.jsx)(c.$,{vizName:"CircularBarplotLabel",VizComponent:v,height:500,maxWidth:600,caption:"Add some labels to each bar of the circular barchart to make it insightful"}),(0,r.jsx)(u.Z,{chartId:"circularBarplot"}),(0,r.jsx)("h2",{id:"stacking",children:"Stacking"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("a",{href:"https://www.data-to-viz.com/caveat/stacking.html",children:"Stacking"})," ","is a process where a chart is broken up across more than one categoric variables which make up the whole."]}),(0,r.jsxs)("p",{children:["d3 comes with some handy functions for stacking. The process is extensively described in this"," ",(0,r.jsx)(h(),{href:"/example/barplot-stacked-horizontal",children:"stacked barplot tutorial"}),". There is nothing really different to make it circular and here is a working sandbox to discover the code."]}),(0,r.jsx)(c.$,{vizName:"CircularBarplotStacking",VizComponent:z,height:800,maxWidth:800,caption:"Add some labels to each bar of the circular barchart to make it insightful"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,r.jsx)(l.Z,{chartFamily:"ranking"}),(0,r.jsx)("div",{className:"mt-20"})]})}let S='\nconst data = [\n  {name:"Mark", value: 90},\n  {name:"Robert", value: 12},\n  {name:"Emily", value: 34},\n  {name:"Marion", value: 53},\n  {name:"Nicolas", value: 98},\n]\n'.trim(),R='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype CircularBarplotProps = {\n  width: number;\n  height: number;\n  data: { name: string; y: number }[];\n};\n\nexport const CircularBarplot = ({ width, height, data }: CircularBarplotProps) => {\n\n  // read the data\n  // compute scales (including a radial scale)\n  // compute all the shapes\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render all the shapes\n      </svg>\n    </div>\n  );\n};\n'.trim(),I="\nconst xScale = d3\n      .scaleBand()\n      .domain(groups)\n      .range([0, 2 * Math.PI])\n      .padding(BAR_PADDING)\n".trim(),C="\nconst yScale = d3\n      .scaleRadial()\n      .domain([0, max])\n      .range([innerRadius, outerRadius])\n".trim(),P="\nconst arcPathGenerator = d3.arc();\n\nconst allShapes = data.map((group, i) => {\n  const path = arcPathGenerator({\n    innerRadius: innerRadius,\n    outerRadius: yScale(group.value),\n    startAngle: xScale(group.name),\n    endAngle: xScale(group.name) + xScale.bandwidth(),\n  });\n})\n".trim()},1832:function(e){e.exports={tooltip:"tooltip_tooltip__b_kg5",right:"tooltip_right__zvLDU",left:"tooltip_left__mQ0Xf",bottom:"tooltip_bottom__MVFNa",top:"tooltip_top__kPfp4"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[3996,7875,5660,645,9774,2888,179],function(){return e(e.s=2876)}),_N_E=e.O()}]);