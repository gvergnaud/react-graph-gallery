(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6776],{7249:function(t,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/animation",function(){return e(5185)}])},7262:function(t,i,e){"use strict";e.d(i,{Z:function(){return m}});var a=e(5893);e(7294);var r=e(5887),o=e(8843),n=e(1664),l=e.n(n);let s=o.c.filter(t=>"general"===t.family).map(t=>t.logo);function c(t){let{chartLogo:i,caption:e,link:o,isAvailable:n,size:c}=t,d=s.includes(i),h=n?"opacity-100":"opacity-20";return(0,a.jsx)(l(),{href:n?o:"subscribe",className:"no-underline",children:(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+h+" "+(n?"cursor-pointer":"cursor-not-allowed"),children:[(0,a.jsx)("div",{className:"absolute",children:(0,a.jsx)(r.Z,{chartLogo:i,size:c})}),d?(0,a.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,a.jsx)(p,{size:c})}):(0,a.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,a.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,a.jsx)("p",{className:"font-light text-sm text-gray-600 "+h,children:e})]})})}let p=t=>{let{size:i}=t;return(0,a.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,a.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})};var d=e(4588);let h={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(t){let{chartFamily:i}=t,e=o.c.filter(t=>t.family===i).map((t,i)=>{let e=(0,d.y)(t.reactURL);return(0,a.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,a.jsx)(c,{link:e,chartLogo:t.logo,caption:t.label,isAvailable:t.isAvailable,size:129})},i)});return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:i+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==h?void 0:h[i]}),(0,a.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:e})]})}},2450:function(t,i,e){"use strict";e.d(i,{Z:function(){return l}});var a=e(5893);e(7294);var r=e(2050),o=e(9975),n=e(9942);function l(t){let{images:i}=t,e=r.F.filter(t=>i.includes(t.img)).map((t,i)=>(0,a.jsx)(o.X,{link:t.link,title:t.title,description:(0,a.jsx)("p",{children:t.description}),img:t.img,alt:t.alt},i));return(0,a.jsx)(n.E,{children:e})}},153:function(t,i,e){"use strict";e.d(i,{A:function(){return h}});var a=e(5893),r=e(9700),o=e(3476),n=e(7294),l=e(3084),s=e.n(l);function c(){let[t,i]=(0,n.useState)([]),[e,r]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let t=Array.from(document.querySelectorAll("h2"));i(t)},[]),(0,n.useEffect)(()=>{let i=()=>{let i=t.map(t=>t.offsetTop-t.scrollTop+t.clientTop),e=window.scrollY+150,a=i.reduce((t,i)=>Math.abs(i-e)<Math.abs(t-e)?i:t,0),o=i.findIndex(t=>t===a);r(-1===o?0:o)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[t]),(0,a.jsx)("div",{className:s().tableOfContent,children:t.map((i,r)=>(0,a.jsx)("p",{className:e===r?"".concat(s().tocItem," ").concat(s().tocItemActive):s().tocItem,onClick:i=>{i.preventDefault(),t[r].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:i.id.charAt(0).toUpperCase()+i.id.slice(1)},i.id))})}var p=e(7414),d=e(2594);let h=t=>{let{children:i,title:e,seoDescription:n}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.A,{title:e,seoDescription:n}),(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)(r.Z,{})}),(0,a.jsx)("div",{className:"wrapper",children:i}),(0,a.jsx)(d.Z,{}),(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)(o.Z,{})}),(0,a.jsx)(c,{})]})}},6438:function(t,i,e){"use strict";e.d(i,{J:function(){return n}});var a=e(5893),r=e(1664),o=e.n(r);let n=t=>{let{children:i,href:e,isFilled:r,size:n="md",isFaded:l}=t,s=e.startsWith("www")||e.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";r?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===n&&(c+="text-sm py-1 px-2 "),"md"===n&&(c+="text-md py-2 px-4 "),l&&(c+="opacity-60");let p=(0,a.jsx)("span",{className:c,children:i});return s?(0,a.jsx)("a",{href:e,target:"_blank",children:p}):(0,a.jsx)(o(),{href:e,passHref:!0,children:p})}},9965:function(t,i,e){"use strict";e.d(i,{Z:function(){return h}});var a=e(5893);e(7294);var r=e(8843),o=e(4588),n=e(1859),l=e(6438),s=e(1832),c=e.n(s);let p=t=>{let{direction:i,text:e,children:r}=t;return(0,a.jsx)("span",{className:c().tooltip+" "+c()[i],id:e,children:r})};var d=e(5887);function h(t){let{title:i,description:e,chartType:s,showSectionLink:c=!1,showInspirationLink:h=!0,showD3GalleryLink:m=!0}=t,g=r.c.find(t=>t.id===s);return g?(0,a.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,a.jsxs)("div",{className:"flex justify-start items-center",children:[(0,a.jsx)("h1",{children:i}),(0,a.jsx)("div",{className:"w-20 ml-4",children:(0,a.jsx)(d.Z,{chartLogo:null==g?void 0:g.logo})})]}),(0,a.jsx)(n.r,{}),(0,a.jsx)("div",{className:"max-w-xxl  py-2",children:e}),s&&(0,a.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),s&&(0,a.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,a.jsx)(p,{text:"visit related section in the gallery",direction:"bottom",children:(0,a.jsx)(l.J,{href:(0,o.y)(g.reactURL),size:"sm",children:g.label+" section"})}),h&&(0,a.jsx)(p,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,a.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+g.id,size:"sm",children:"inspiration"})}),m&&(0,a.jsx)(p,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,a.jsx)(l.J,{href:g.d3URL,size:"sm",children:"d3 gallery"})}),(0,a.jsx)(p,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,a.jsx)(l.J,{href:g.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]}):null}},9975:function(t,i,e){"use strict";e.d(i,{X:function(){return n}});var a=e(5893),r=e(6395),o=e.n(r);let n=t=>{let{img:i,title:e,description:r,link:n,alt:l}=t;return(0,a.jsxs)("figure",{className:o().container,children:[(0,a.jsx)("img",{src:"/chart/"+i,className:o().image,alt:l}),(0,a.jsxs)("figcaption",{children:[(0,a.jsx)("p",{className:o().title,children:(0,a.jsx)("b",{children:e})}),(0,a.jsx)("div",{className:"font-light",children:r}),(0,a.jsx)("a",{href:n})]})]})}},9942:function(t,i,e){"use strict";e.d(i,{E:function(){return r}});var a=e(5893);e(7294);let r=t=>{let{children:i}=t;return(0,a.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:i})}},5185:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return h}});var a=e(5893);e(7294);var r=e(153),o=e(9965),n=e(7262),l=e(1664),s=e.n(l),c=e(2450),p=e(6438);let d=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"Animation"})," is both the most ",(0,a.jsx)("b",{children:"challenging"})," and the most"," ",(0,a.jsx)("b",{children:"exciting"})," part of an interactive chart. Animation is like salt: use the right amount of it and your creation is a delight. Too much of it and it ",(0,a.jsx)("b",{children:"spoils the dish"})," \uD83E\uDD0C."]}),(0,a.jsxs)("p",{children:["There are ",(0,a.jsx)("b",{children:"many ways"})," to animate the transition between 2 chart states. Here I suggest to use ",(0,a.jsx)("code",{children:"react-spring"})," in combination with ",(0,a.jsx)("code",{children:"react"})," and",(0,a.jsx)("code",{children:"d3.js"}),"."]})]});function h(){return(0,a.jsxs)(r.A,{title:"Animation",seoDescription:"An overview of all the charts using some animation techniques in the gallery.",children:[(0,a.jsx)(o.Z,{title:"Animation",description:d,chartType:"animation"}),(0,a.jsx)("h2",{id:"WIP",children:"Work in Progress"}),(0,a.jsx)("p",{children:"This section is a work in progress. \uD83D\uDEA7"}),(0,a.jsxs)("p",{children:["For now, it just lists all the charts using ",(0,a.jsx)("code",{children:"react-spring"})," in the gallery."]}),(0,a.jsxs)("p",{children:["But I plan to write some ",(0,a.jsx)("b",{children:"complete tutorials"})," on this passionating and complicated topic. You can ",(0,a.jsx)(s(),{href:"/Subscribe",children:"subscribe"})," ","to the project to know when it's ready!"]}),(0,a.jsx)("p",{children:(0,a.jsx)("br",{})})," ",(0,a.jsx)(p.J,{isFilled:!0,size:"sm",href:"/subscribe",children:"Subscribe"}),(0,a.jsx)("p",{children:(0,a.jsx)("br",{})}),(0,a.jsx)(c.Z,{images:["histogram-dataset-transition.gif","violinBoxplotTransition.png","violin-bucket-size-effect.gif","boxplot-violin-transition.gif","barplotDatasetAnimation.gif","bubble-plot-dataset-transition.gif","line-chart-data-transition.gif","streamgraph-offset-type-transition.gif"]}),(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,a.jsx)(n.Z,{chartFamily:"general"}),(0,a.jsx)("div",{className:"mt-20"})]})}},2050:function(t,i,e){"use strict";e.d(i,{F:function(){return a}});let a=[{link:"/scatter-plot#scales%20and%20axes",title:"Scales and axes",description:"How to map your data in a 2d space, and how to draw the axes",img:"axis-basic-demo.png",alt:"Picture of an empty chart area with X and Y axes"},{link:"/scatterplot",title:"Scatterplot Hover effect",description:"How to add a hover effect to highlight a group on a scatterplot",img:"scatterplotHoverEffect.gif",alt:"GIF of a scatterplot with hover effect"},{link:"/scatter-plot#circles",title:"Basic scatter plot",description:"Add circles to get a basic scatter plot",img:"scatterplot-most-basic.png",alt:"Most basic scatterplot made with react and d3"},{link:"/scatter-plot#tooltip",title:"Add tooltip",description:"Get more details about each datapoint by adding a tooltip on hover",img:"scatterplot-tooltip.png",alt:"Scatterplot with tooltip made with react and d3"},{link:"/scatter-plot#hover%20effect",title:"Add a hover effect",description:"Highlight a specific group on hover",img:"scatterplot-hover-effect.png",alt:"Scatterplot with hover effect made with react and d3"},{link:"/scatter-plot#real%20life",title:"Real life use-case",description:"Reproduction of a data wrapper chart representing countries CO2 data",img:"scatterplot-co2.png",alt:"Real life example of a scatterplot made with react and d3"},{link:"/example/boxplot-jitter",title:"Boxplot with jitter",description:"Add individual data points using jitter on top of the boxplot",img:"boxplot-jitter.png",alt:"Picture of a boxplot with jitter built using react and d3.js"},{link:"/boxplot#box%20component",title:"Boxplot shape",description:"How to build a boxplot shape in SVG",img:"boxplotShape.png",alt:"Picture of a box component, allowing to build a boxplot later on"},{link:"/boxplot",title:"Basic boxplot",description:"How to build a basic boxplot with react",img:"boxplotBasic.png",alt:"Picture of a basic boxplot built with react and d3"},{link:"/bubble-plot",title:"Bubble plot",description:"Learn how to build a bubble plot with react and d3.js",img:"bubble-plot-with-legend.png",alt:"Picture of a simple bubble plot with a legend made with react and d3.js"},{link:"/bubble-plot#transition",title:"Bubble plot data set transition",description:"How to smoothly animate the transition between dataset",img:"bubble-plot-dataset-transition.gif",alt:"GIF of a bubble plot smoothly transitioning data"},{link:"/histogram",title:"Histogram",description:"Learn how to build a histogram with react and d3.js",img:"histogram-basic.png",alt:"Picture of a simple histogram made with react and d3.js"},{link:"/histogram#transition",title:"Histogram dataset transition",description:"How to animate the transition between datasets",img:"histogram-dataset-transition.gif",alt:"GIF of a histogram with animated data transition"},{link:"/example/histogram-mirror",title:"Mirror histogram",description:"Create a mirror histogram to compare the distribution of 2 groups in a dataset",img:"histogram-mirror.png",alt:"picture of a mirror histogram made with react and d3.js"},{link:"/violin-plot",title:"Violin to Boxplot transition",description:"Using shape morphism to smoothly transition from a boxplot to a violin and reverse",img:"violinBoxplotTransition.png",alt:"gif of a violin plot smoothly transitioning to a boxplot using shape morphism"},{link:"/violin-plot#bucket%20size",title:"Bucket size effect",description:"Interactive example showing the bucket size effect on a violin chart",img:"violin-bucket-size-effect.gif",alt:"GIF showing a violin plot with varying bucket size"},{link:"/violin-plot#violin%20component",title:"Violin shape",description:"How to build the shape of a violin with SVG",img:"violinShape.png",alt:"Picture of a violin shape built with react and d3"},{link:"/violin-plot",title:"Boxplot to Violin plot",description:"Interactive example showing the difference between a boxplot and a violin",img:"boxplot-violin-transition.gif",alt:"GIF showing a mirror transition between a boxplot and a violin plot"},{link:"/violin-plot",title:"Basic violin plot",description:"Learn how to build a basic violin chart with d3 and react",img:"violinBasic.png",alt:"Picture of a basic violin chart built in react"},{link:"/violin-plot#bucket%20size",title:"Violin with variable bucket size",description:"A violin plot with a slider to change the bucket size in use",img:"violinBucketSize.png",alt:"Picture of a violin plot with variable bucket size"},{link:"/heatmap",title:"Basic heatmap",description:"Most basic heatmap",img:"heatmapBasic.png",alt:"Picture of a simple heatmap made with react and d3.js"},{link:"/heatmap#tooltip",title:"Heatmap with tooltip",description:"Learn how to add a tooltip to a heatmap with react",img:"heatmapTooltip.png",alt:"Picture of a heatmap with a tooltip that appears on hover"},{link:"/heatmap#legend",title:"Continuous color scale",description:"How to add a color legend to your chart that uses a continuous color scale",img:"continuousColorLegend.png",alt:"Picture of a continuous color scale built with d3.js"},{link:"/heatmap#application",title:"Vaccination heatmap",description:"Reproduction of a famous vaccination heatmap using d3 and react",img:"heatmapVaccination.png",alt:"Picture of a heatmap showing the effect of vaccination, built with react and d3"},{link:"/correlogram",title:"Basic correlogram",description:"Learn how to build a correlogram with react and d3",img:"correlogramBasic.png",alt:"Picture of a correlogram built with react and d3"},{link:"/barplot",title:"Basic barplot",description:"Most basic barplot built with React and d3",img:"barplot-basic.png",alt:"Picture of a horizontal barplot made with React and d3"},{link:"/example/barplot-data-transition-animation",title:"Barplot dataset transition",description:"How to smoothly animate the transition between dataset",img:"barplotDatasetAnimation.gif",alt:"GIF of a data update on a React barplot"},{link:"/example/barplot-stacked-horizontal",title:"Horizontal Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-horizontal.png",alt:"Picture of a stacked barchart made with react and d3"},{link:"/example/barplot-stacked-vertical",title:"Vertical Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-vertical.png",alt:"Picture of a vertical stacked barchart made with react and d3"},{link:"/example/histogram-small-multiple",title:"Small multiple",description:"Create one panel per group to show its distribution separately",img:"histogram-small-multiple.png",alt:"Picture of a histogram with small multiple built with react and d3.js"},{link:"/example/histogram-with-several-groups",title:"Multiple groups",description:"A histogram with <b>multiple</b> groups displayed on the same axis.",img:"histogram-with-several-groups.png",alt:"Picture of a histogram with multiple groups built with react and d3.js"},{link:"/density-plot",title:"Basic density plot",description:"Most basic density plot built with React and d3",img:"densityBasic.png",alt:"Picture of a basic density plot built with React and d3"},{link:"/density-plot#variations",title:"Density plot with multiple groups",description:"How to add several groups on the same density plot",img:"densityMultipleGroups.png",alt:"Picture of a density plot with multiple groups"},{link:"/ridgeline",title:"Basic ridgeline chart",description:"Most basic version of a ridgeline plot",img:"ridgelineBasic.png",alt:"Picture of a basic ridgeline chart built with react and d3"},{link:"/line-chart#basic",title:"Most basic line chart",description:"The most basic line chart one can make using d3 and react",img:"line-chart-basic.png",alt:"Picture of a very simple line chart made with react and d3"},{link:"/line-chart#transition",title:"Line chart with dataset transition",description:"How to smoothly animate the transition between 2 dataset on a line chart",img:"line-chart-data-transition.gif",alt:"GIF of a line chart that animates between 2 dataset"},{link:"/area-plot",title:"Basic Area Chart",description:"Most basic version of an area chart made with react and d3.js",img:"area-chart-basic.png",alt:"Picture of a basic area chart made with React and D3"},{link:"/stacked-area-plot",title:"Basis stacked area chart",description:"Most basic version of a stacked area chart. Explains how to use the stack() function of d3.js",img:"stacked-area-plot-basic.png",alt:"picture of a basic stacked area plot made with react"},{link:"/streamchart",title:"Basic Streamgraph",description:"Most basic streamgraph one can build using d3 and react",img:"streamgraph-basic.png",alt:"Picture of a basic streamgraph made using Reacrt and d3.js"},{link:"/streamchart#hover&effect",title:"Streamgraph with hover effect",description:"How to add a hover effect on a streamgraph to highlight a group",img:"streamgraph-hover-effect.gif",alt:"GIF of a streamgraph react component that supports hover effect"},{link:"/streamchart#transition",title:"Offset and Smoothing transition",description:"An interactive streamgraph example showing how to animate transition between the chart stacking features.",img:"streamgraph-offset-type-transition.gif",alt:"GIF of a streamgraph"},{link:"/streamchart#application",title:"Streamgraph application",description:"Streamgraph with a slider to zoom on a time stamp and with interactive inline legends",img:"streamgraph-application.gif",alt:"GIF of a streamgraph with multiple interactive features"},{link:"/circular-packing",title:"Most basic circular packing chart",description:"The most basic circular packing chart one can make using d3.js and React.",img:"circle-pack-basic.png",alt:"Picture of a very basic circle packing chart"},{link:"/circular-packing",title:"Circular packing: 2 levels of hierarchy",description:"A simple circular packing chart with 2 levels of hierarchy built with React and d3.",img:"circle-pack-2-levels.png",alt:"Picture of a very basic circle packing chart with 2 levels of hierarchy"},{link:"/example/circle-packing-with-d3-force",title:"Circle Pack with d3-force",description:"Another approach to build a circle packing chart using physical forces to compute node positions.",img:"circle-pack-d3-force.png",alt:"Picture of a circle packing chart made using the d3-force plugin"},{link:"/example/arc-diagram-vertical",title:"Vertical arc diagram",description:"The vertical version of the arc diagram is more convenient to display labels",img:"vertical-arc-diagram.png",alt:"Picture of a vertical arc diagram"},{link:"/network-chart#rendering",title:"Most basic network chart",description:"Most basic network chart using the d3-force plugin to apply physical forces.",img:"network-chart-basic.png",alt:"Picture of a very simple network chart built with React and D3.js."},{link:"/network-chart#rendering",title:"Play with forces",description:"A playground to discover the effect of the various forces you can apply to your particles",img:"network-chart-force-playground.png",alt:"Picture of a playground allowing to play with the various d3 forces"},{link:"/example/network-diagram-with-colored-groups",title:"Force directed graph",description:"A force directed network chart showing character co-occurence in les miserables",img:"network-les-miserables.png",alt:"Picture of a force directed network chart showing character co-occurence in les miserables"}]},6395:function(t){t.exports={container:"graphLinkImage_container__6vbL1",title:"graphLinkImage_title__86b4Y"}},1832:function(t){t.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3084:function(t){t.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}}},function(t){t.O(0,[3996,645,9774,2888,179],function(){return t(t.s=7249)}),_N_E=t.O()}]);