(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5091],{1536:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles",function(){return i(8127)}])},153:function(e,t,i){"use strict";i.d(t,{A:function(){return p}});var a=i(5893),s=i(9700),n=i(3476),r=i(7294),o=i(3084),l=i.n(o);function c(){let[e,t]=(0,r.useState)([]),[i,s]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,r.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),i=window.scrollY+150,a=t.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,0),n=t.findIndex(e=>e===a);s(-1===n?0:n)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,a.jsx)("div",{className:l().tableOfContent,children:e.map((t,s)=>(0,a.jsx)("p",{className:i===s?"".concat(l().tocItem," ").concat(l().tocItemActive):l().tocItem,onClick:t=>{t.preventDefault(),e[s].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=i(7414),h=i(2594);let p=e=>{let{children:t,title:i,seoDescription:r}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.A,{title:i,seoDescription:r}),(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)(s.Z,{})}),(0,a.jsx)("div",{className:"wrapper",children:t}),(0,a.jsx)(h.Z,{}),(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)(n.Z,{})}),(0,a.jsx)(c,{})]})}},6438:function(e,t,i){"use strict";i.d(t,{J:function(){return r}});var a=i(5893),s=i(1664),n=i.n(s);let r=e=>{let{children:t,href:i,isFilled:s,size:r="md",isFaded:o}=e,l=i.startsWith("www")||i.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";s?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===r&&(c+="text-sm py-1 px-2 "),"md"===r&&(c+="text-md py-2 px-4 "),o&&(c+="opacity-60");let d=(0,a.jsx)("span",{className:c,children:t});return l?(0,a.jsx)("a",{href:i,target:"_blank",children:d}):(0,a.jsx)(n(),{href:i,passHref:!0,children:d})}},6880:function(e,t,i){"use strict";i.d(t,{g:function(){return s}});var a=i(5893);let s=()=>(0,a.jsx)("div",{className:"w-full flex justify-center",children:(0,a.jsx)("iframe",{src:"https://datavizuniverse.substack.com/embed",width:"480",height:"320",frameBorder:"0",scrolling:"no"})})},9965:function(e,t,i){"use strict";i.d(t,{Z:function(){return p}});var a=i(5893);i(7294);var s=i(8843),n=i(4588),r=i(1859),o=i(6438),l=i(1832),c=i.n(l);let d=e=>{let{direction:t,text:i,children:s}=e;return(0,a.jsx)("span",{className:c().tooltip+" "+c()[t],id:i,children:s})};var h=i(5887);function p(e){let{title:t,description:i,chartType:l,showSectionLink:c=!1,showInspirationLink:p=!0,showD3GalleryLink:m=!0}=e,u=s.c.find(e=>e.id===l);return(0,a.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,a.jsxs)("div",{className:"flex justify-start items-center",children:[(0,a.jsx)("h1",{children:t}),l&&u&&(0,a.jsx)("div",{className:"w-20 ml-4",children:(0,a.jsx)(h.Z,{chartLogo:null==u?void 0:u.logo})})]}),(0,a.jsx)(r.r,{}),(0,a.jsx)("div",{className:"max-w-xxl  py-2",children:i}),l&&(0,a.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),u&&(0,a.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,a.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,a.jsx)(o.J,{href:(0,n.y)(u.reactURL),size:"sm",children:u.label+" section"})}),p&&(0,a.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,a.jsx)(o.J,{href:"https://www.dataviz-inspiration.com/"+u.id,size:"sm",children:"inspiration"})}),m&&(0,a.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,a.jsx)(o.J,{href:u.d3URL,size:"sm",children:"d3 gallery"})}),(0,a.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,a.jsx)(o.J,{href:u.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})}},8127:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return m}});var a=i(5893);i(7294);var s=i(153),n=i(9965),r=i(1664),o=i.n(r);let l=e=>{let{label:t,color:i,opacity:s}=e;return(0,a.jsx)("button",{style:{backgroundColor:i,opacity:s||1},className:"py-0 px-2 no-underline rounded-full text-white font-sans font-light text-sm mr-2",children:t})},c={fundamental:"#e07a5f",animation:"#3d405b",responsiveness:"#81b29a",interaction:"#f2cc8f",axis:"#15616d",advanced:"red",canvas:"#003566",dataviz:"#69b3a2"},d=e=>{let{title:t,children:i,link:s,isAvailable:n,timeToRead:r,categories:d}=e,h=null==d?void 0:d.map((e,t)=>(0,a.jsx)(l,{label:e.charAt(0).toUpperCase()+e.slice(1),color:c[e],opacity:.5},t));return(0,a.jsxs)("div",{className:(n?"opacity-100":"opacity-25")+" cursor-pointer",children:[n?(0,a.jsx)(o(),{href:s,className:"text-black no-underline",children:(0,a.jsx)("h2",{className:"cursor-pointer",children:t})}):(0,a.jsx)("h2",{children:t}),i,n&&(0,a.jsx)(o(),{href:s,children:(0,a.jsx)("span",{className:"ml-4",children:"Read more"})}),(0,a.jsx)("p",{className:"text-gray-400 font-light mt-2 text-sm",children:r+" minutes read"}),h]})};var h=i(6880);let p=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["While our gallery showcases a"," ",(0,a.jsx)(o(),{href:"/all",children:"myriad of graph examples"}),", this space is dedicated to ",(0,a.jsx)("b",{children:"delving into the intricacies"})," of data visualization using React and D3.js."]}),(0,a.jsxs)("p",{children:["From unraveling the complexities of creating stacked bar plots with negative values to envisioning futuristic visualizations, our articles aim to ",(0,a.jsx)("b",{children:"enlighten, inspire, and guide you"})," through the advanced realms of dataviz."]}),(0,a.jsxs)("p",{children:["Whether you're a seasoned developer or just starting out, these articles offer a wealth of knowledge to ",(0,a.jsx)("b",{children:"elevate your visualization game"}),"."," "]}),(0,a.jsx)("p",{children:"Let's embark on this enlightening journey together! \uD83D\uDD25"})]});function m(){return(0,a.jsxs)(s.A,{title:"How to make react and d3.js work together",seoDescription:"A list of blog posts describing the main concepts behind a viz built wih react and d3.js",children:[(0,a.jsx)(n.Z,{title:"Dataviz Insights with React and D3.js",description:p}),(0,a.jsx)(d,{title:"Stacked barplot: how to deal with negative values",timeToRead:6,link:"stacked-barplot-with-negative-values",isAvailable:!0,categories:["dataviz"],children:(0,a.jsxs)("span",{children:["A ",(0,a.jsx)(o(),{href:"barplot",children:"stacked barchart"})," displays the values of items split in group and subgroups. It's a quite common chart type, but dealing with ",(0,a.jsx)("b",{children:"negative values"})," in the dataset brings some interesting dataviz discussions."]})}),(0,a.jsx)("div",{className:"grey-section full-bleed py-24 my-24",children:(0,a.jsxs)("div",{className:"wrapper",children:[(0,a.jsxs)("p",{children:["The next articles are currently in ",(0,a.jsx)("b",{children:"writing mode"}),". ⬇️"]}),(0,a.jsxs)("p",{children:["They will be released soon and you can be updated through my"," ",(0,a.jsx)("b",{children:"newsletter"}),":"]})," ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(h.g,{})]})}),(0,a.jsx)(d,{title:"Using react and d3.js: The 2 strategies",timeToRead:4,link:"how-to-includes-a-d3-chart-in-react",isAvailable:!1,categories:["fundamental"],children:(0,a.jsxs)("span",{children:["React modifies the DOM. ",(0,a.jsx)("b",{children:"So does d3.js"}),". It makes it notoriously"," ",(0,a.jsx)("b",{children:"hard"})," to have them work together. This blog post describes the 2 main strategies to use d3.js in a react app, with their pros and cons."]})}),(0,a.jsx)(d,{title:"Axes: build them with react (and a bit of d3)",timeToRead:8,link:"build-axis-with-react",isAvailable:!1,categories:["fundamental","axis"],children:(0,a.jsx)("span",{children:"Most of the viz types need some axes to be insightful. This post explains how to build them from a d3 scale, using the tick() method of d3 to create re-usable react components."})}),(0,a.jsx)(d,{title:"Responsiveness: a hook that makes your viz fits its container",timeToRead:5,link:"make-a-graph-responsive",isAvailable:!1,categories:["fundamental","responsiveness","interaction"],children:(0,a.jsxs)("span",{children:["Viz components often take a ",(0,a.jsx)("code",{children:"width"})," and a"," ",(0,a.jsx)("code",{children:"height"})," properties as input. This blogposts explains how to build a wrapper around it that computes the parent's div dimension and pass it as props"]})}),(0,a.jsx)(d,{title:"Hover interaction",timeToRead:6,link:"add-hover-interaction-to-graph",isAvailable:!1,categories:["fundamental","interaction"],children:(0,a.jsxs)("span",{children:[(0,a.jsx)("b",{children:"Interactivity"})," is an important part of dataviz when working in the browser. Adding a hover effect can improve the user experience by highlighting a series on the chart. Here are a couple way to implement it, always keeping performances in mind."]})}),(0,a.jsx)(d,{title:"Graph to graph interaction",timeToRead:10,link:"cross-graph-highlight-interaction",isAvailable:!1,categories:["interaction","advanced"],children:(0,a.jsx)("span",{children:"Let's say you have a choropleth map on a side, a timeseries on the other. How can you add cross-viz interactions, like hovering a country to highlight its trend on the timeseries?"})}),(0,a.jsx)(d,{title:"Spring animations with react spring",timeToRead:5,link:"react-dataviz-animation-with-react-spring",isAvailable:!1,categories:["fundamental","animation"],children:(0,a.jsx)("span",{children:"It's often necessary to transition between 2 ys of a graph. React-spring is here to help, allowing to use spring animations easily."})}),(0,a.jsx)(d,{title:"Dataset transition",timeToRead:5,link:"dataset-transition",isAvailable:!1,categories:["animation"],children:(0,a.jsxs)("span",{children:["Adding a smooth transition between dataset often adds a nice touch to your viz component. Let's see how to implement it with"," ",(0,a.jsx)("code",{children:"react-spring"}),"."]})}),(0,a.jsx)(d,{title:"Shape morphism: animate the transition between 2 distincts charts",timeToRead:5,link:"shape-morphism-for-dataviz-with-react",isAvailable:!1,categories:["advanced","animation"],children:(0,a.jsxs)("span",{children:["How can we build a smooth transition between a"," ",(0,a.jsx)(o(),{href:"/pie-plot",children:"pie chart"})," and a barplot? The"," ",(0,a.jsx)("code",{children:"flubber"})," js library allows to interpolate shapes and"," ",(0,a.jsx)("code",{children:"react-spring"})," can animate this interpolation."]})}),(0,a.jsx)(d,{title:"Improve chart performance with Canvas",timeToRead:5,link:"to-do",isAvailable:!1,categories:["fundamental","canvas"],children:(0,a.jsx)("span",{children:"Rendering a chart using svg is limited in term of performace. The DOM gets to crowded and updating it ends up being slow. Using canvas is the best workaround but you need to be able to draw your svg path using it!"})}),(0,a.jsx)(d,{title:"Fix the blurry canvas on Retina screens",timeToRead:5,link:"fix-canvas-blurry-dataviz",isAvailable:!1,categories:["canvas","advanced"],children:(0,a.jsx)("span",{children:"When using canvas for your viz, the result will be blurry on retina screens if you don't scale the canvas properly. Here is why and how to implement it."})}),(0,a.jsx)(d,{title:"What is a color",timeToRead:3,link:"what-is-a-color",isAvailable:!1,categories:["fundamental","axis"],children:(0,a.jsx)("span",{children:"There are so many ways to define a color when talking with a computer. Let's take a tour and see what's the most appropriate for a dataviz point of view."})}),(0,a.jsx)(d,{title:"Buiding a futuristic viz",timeToRead:3,link:"viz-from-the-future",isAvailable:!1,categories:["fundamental","axis"],children:(0,a.jsx)("span",{children:"What makes a viz look from the future. And how to implement it with d3.js and reac."})}),(0,a.jsx)("div",{className:"mt-20"})]})}},1832:function(e){e.exports={tooltip:"tooltip_tooltip__b_kg5",right:"tooltip_right__zvLDU",left:"tooltip_left__mQ0Xf",bottom:"tooltip_bottom__MVFNa",top:"tooltip_top__kPfp4"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[3996,645,9774,2888,179],function(){return e(e.s=1536)}),_N_E=e.O()}]);