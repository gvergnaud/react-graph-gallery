(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3581],{8271:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/how-to",function(){return i(6135)}])},7197:function(e,t,i){"use strict";i.d(t,{Z:function(){return h}});var n=i(5893),r=(i(7294),i(6761)),a=i(1878),o=i(1664),s=a.c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function l(e){var t=e.chartLogo,i=e.caption,a=e.link,l=e.isAvailable,d=e.size,u=s.includes(t),h=l?"opacity-100":"opacity-20",f=l?"cursor-pointer":"cursor-not-allowed";return(0,n.jsx)(o.default,{href:l?a:"subscribe",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{style:{width:d,height:d},className:"relative mr-2 rounded-full "+h+" "+f,children:[(0,n.jsx)("div",{className:"absolute",children:(0,n.jsx)(r.Z,{chartLogo:t})}),u?(0,n.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,n.jsx)(c,{size:d})}):(0,n.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full z-30",children:(0,n.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,n.jsx)("p",{className:"font-light text-sm text-gray-600 "+h,children:i})]})})}var c=function(e){var t=e.size;return(0,n.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,n.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},d=i(3414),u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function h(e){var t=e.chartFamily,i=a.c.filter((function(e){return e.family===t})).map((function(e,t){var i=(0,d.y)(e.reactURL);return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,n.jsx)(l,{link:i,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)}));return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===u||void 0===u?void 0:u[t]}),(0,n.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:i})]})}},1884:function(e,t,i){"use strict";i.d(t,{A:function(){return h}});var n=i(5893),r=i(3185),a=i(1261),o=i(7294),s=i(3924),l=i.n(s);function c(){var e=(0,o.useState)([]),t=e[0],i=e[1],r=(0,o.useState)(0),a=r[0],s=r[1];return(0,o.useEffect)((function(){var e=Array.from(document.querySelectorAll("h2"));i(e)}),[]),(0,o.useEffect)((function(){var e=function(){var e=t.map((function(e){return e.offsetTop-e.scrollTop+e.clientTop})),i=window.scrollY+150,n=e.reduce((function(e,t){return Math.abs(t-i)<Math.abs(e-i)?t:e}),0),r=e.findIndex((function(e){return e===n}));s(-1===r?0:r)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[t]),(0,n.jsx)("div",{className:l().tableOfContent,children:t.map((function(e,i){return(0,n.jsx)("p",{className:a===i?"".concat(l().tocItem," ").concat(l().tocItemActive):l().tocItem,onClick:function(e){e.preventDefault(),t[i].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:e.id.charAt(0).toUpperCase()+e.id.slice(1)},e.id)}))})}var d=i(8171),u=i(6978),h=function(e){var t=e.children,i=e.title,o=e.seoDescription;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{title:i,seoDescription:o}),(0,n.jsxs)("div",{className:"wrapper",children:[(0,n.jsx)(r.Z,{}),t]}),(0,n.jsx)(u.Z,{}),(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(a.Z,{})}),(0,n.jsx)(c,{})]})}},1687:function(e,t,i){"use strict";i.d(t,{J:function(){return a}});var n=i(5893),r=i(1664),a=function(e){var t=e.children,i=e.href,a=e.isFilled,o=e.size,s=void 0===o?"md":o,l=e.isFaded,c=i.startsWith("www")||i.startsWith("http"),d="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";d+=a?" bg-reactGallery hover:bg-reactGallery text-white ":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===s&&(d+="text-sm py-1 px-2 "),"md"===s&&(d+="text-md py-2 px-4 "),l&&(d+="opacity-60");var u=(0,n.jsx)("span",{className:d,children:t});return c?(0,n.jsx)("a",{href:i,target:"_blank",children:u}):(0,n.jsx)(r.default,{href:i,passHref:!0,children:(0,n.jsx)("a",{children:u})})}},8807:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var n=i(5893),r=(i(7294),i(1878)),a=i(3414),o=i(3919),s=i(1687),l=i(3187),c=i.n(l),d=function(e){var t=e.direction,i=e.text,r=e.children;return(0,n.jsx)("span",{className:c().tooltip+" "+c()[t],id:i,children:r})};function u(e){var t=e.title,i=e.description,l=e.chartType,c=e.showSectionLink,u=void 0!==c&&c,h=e.showInspirationLink,f=void 0===h||h,p=e.showD3GalleryLink,m=void 0===p||p,v=r.c.filter((function(e){return e.id===l}))[0];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,n.jsx)("h1",{children:t}),(0,n.jsx)(o.r,{}),(0,n.jsx)("div",{className:"max-w-xxl py-2",children:(0,n.jsx)("p",{children:i})}),l&&(0,n.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),l&&(0,n.jsxs)("div",{className:"flex flex-row flex-wrap",children:[u&&(0,n.jsx)(d,{text:"kkkk",direction:"bottom",children:(0,n.jsx)(s.J,{href:(0,a.y)(v.reactURL),size:"sm",children:v.label+" section"})}),f&&(0,n.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,n.jsx)(s.J,{href:"https://www.dataviz-inspiration.com/"+v.id,size:"sm",children:"inspiration"})}),m&&(0,n.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,n.jsx)(s.J,{href:v.d3URL,size:"sm",children:"d3 gallery"})}),(0,n.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,n.jsx)(s.J,{href:v.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})})}},8418:function(e,t,i){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],n=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);n=!0);}catch(l){r=!0,a=l}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var r,a=(r=i(7294))&&r.__esModule?r:{default:r},o=i(6273),s=i(387),l=i(7190);var c={};function d(e,t,i,n){if(e&&o.isLocalURL(t)){e.prefetch(t,i,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+i+(r?"%"+r:"")]=!0}}var u=function(e){var t,i=!1!==e.prefetch,r=s.useRouter(),u=a.default.useMemo((function(){var t=n(o.resolveHref(r,e.href,!0),2),i=t[0],a=t[1];return{href:i,as:e.as?o.resolveHref(r,e.as):a||i}}),[r,e.href,e.as]),h=u.href,f=u.as,p=e.children,m=e.replace,v=e.shallow,x=e.scroll,g=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var b=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,w=n(l.useIntersection({rootMargin:"200px"}),2),j=w[0],y=w[1],k=a.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);a.default.useEffect((function(){var e=y&&i&&o.isLocalURL(h),t="undefined"!==typeof g?g:r&&r.locale,n=c[h+"%"+f+(t?"%"+t:"")];e&&!n&&d(r,h,f,{locale:t})}),[f,h,y,g,i,r]);var _={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,i,n,r,a,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(i))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[r?"replace":"push"](i,n,{shallow:a,locale:l,scroll:s}))}(e,r,h,f,m,v,x,g)},onMouseEnter:function(e){o.isLocalURL(h)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(r,h,f,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var A="undefined"!==typeof g?g:r&&r.locale,z=r&&r.isLocaleDomain&&o.getDomainLocale(f,A,r&&r.locales,r&&r.domainLocales);_.href=z||o.addBasePath(o.addLocale(f,A,r&&r.defaultLocale))}return a.default.cloneElement(t,_)};t.default=u},7190:function(e,t,i){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],n=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);n=!0);}catch(l){r=!0,a=l}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,i=e.disabled||!o,l=r.useRef(),c=n(r.useState(!1),2),d=c[0],u=c[1],h=r.useCallback((function(e){l.current&&(l.current(),l.current=void 0),i||d||e&&e.tagName&&(l.current=function(e,t,i){var n=function(e){var t=e.rootMargin||"",i=s.get(t);if(i)return i;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return s.set(t,i={id:t,observer:r,elements:n}),i}(i),r=n.id,a=n.observer,o=n.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),s.delete(r))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[i,t,d]);return r.useEffect((function(){if(!o&&!d){var e=a.requestIdleCallback((function(){return u(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[h,d]};var r=i(7294),a=i(9311),o="undefined"!==typeof IntersectionObserver;var s=new Map},6135:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var n=i(5893),r=(i(7294),i(1884)),a=i(8807),o=i(6978),s=i(7197),l=i(1664),c=function(e){var t=e.label,i=e.color,r=e.opacity;return(0,n.jsx)("button",{style:{backgroundColor:i,opacity:r||1},className:"py-0 px-2 no-underline rounded-full text-white font-sans font-light text-sm mr-2",children:t})},d={fundamental:"#e07a5f",animation:"#3d405b",responsiveness:"#81b29a",interaction:"#f2cc8f",axis:"#15616d",advanced:"red",canvas:"#003566"},u=function(e){var t=e.title,i=e.children,r=e.link,a=e.isAvailable,o=e.timeToRead,s=e.categories,u=a?"opacity-100":"opacity-25",h=null===s||void 0===s?void 0:s.map((function(e,t){return(0,n.jsx)(c,{label:e,color:d[e],opacity:.5},t)}));return(0,n.jsxs)("div",{className:u+" cursor-pointer",children:[a?(0,n.jsx)(l.default,{href:r,children:(0,n.jsx)("h2",{className:"cursor-pointer",children:t})}):(0,n.jsx)("h2",{children:t}),i,a&&(0,n.jsx)(l.default,{href:r,children:(0,n.jsx)("a",{className:"ml-4",children:"Read more"})}),(0,n.jsx)("p",{className:"text-gray-400 font-light mt-2",children:o+" minutes read"}),h]})},h=(0,n.jsxs)("p",{children:["On top of set of chart examples, the react graph gallery provides some more generic blog posts desribing how to make ",(0,n.jsx)("code",{children:"react"})," and"," ",(0,n.jsx)("code",{children:"d3.js"})," work together. Here is a list of the main concepts you need to know to build your own viz."]});function f(){return(0,n.jsxs)(r.A,{title:"How to make react and d3.js work together",seoDescription:"A list of blog posts describing the main concepts behind a viz built wih react and d3.js",children:[(0,n.jsx)(a.Z,{title:"How to make d3.js work with react",description:h}),(0,n.jsx)(u,{title:"Using react and d3.js: The 2 strategies",timeToRead:4,link:"how-to-includes-a-d3-chart-in-react",isAvailable:!1,categories:["fundamental"],children:(0,n.jsx)("span",{children:"React modifies the DOM. So does d3.js. It makes it advanced to make them work together. This blog post describes the 2 main strategies to do so."})}),(0,n.jsx)(u,{title:"Axes: build them with react (and a bit of d3)",timeToRead:8,link:"build-axis-with-react",isAvailable:!0,categories:["fundamental","axis"],children:(0,n.jsx)("span",{children:"Most of the viz types need some axes to be insightful. This post explains how to build them from a d3 scale, using the tick() method of d3 to create re-usable react components."})}),(0,n.jsx)(u,{title:"Responsiveness: a hook that makes your viz fits its container",timeToRead:5,link:"make-a-graph-responsive",isAvailable:!0,categories:["fundamental","responsiveness","interaction"],children:(0,n.jsxs)("span",{children:["Viz components often take a ",(0,n.jsx)("code",{children:"width"})," and a"," ",(0,n.jsx)("code",{children:"height"})," properties as input. This blogposts explains how to build a wrapper around it that computes the parent's div dimension and pass it as props"]})}),(0,n.jsx)(u,{title:"Hover interaction",timeToRead:6,link:"add-hover-interaction-to-graph",isAvailable:!0,categories:["fundamental","interaction"],children:(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"Interactivity"})," is an important part of dataviz when working in the browser. Adding a hover effect can improve the user experience by highlighting a series on the chart. Here are a couple way to implement it, always keeping performances in mind."]})}),(0,n.jsx)(u,{title:"Graph to graph interaction",timeToRead:10,link:"cross-graph-highlight-interaction",isAvailable:!0,categories:["interaction","advanced"],children:(0,n.jsx)("span",{children:"Let's say you have a choropleth map on a side, a timeseries on the other. How can you add cross-viz interactions, like hovering a country to highlight its trend on the timeseries?"})}),(0,n.jsx)(u,{title:"Spring animations with react spring",timeToRead:5,link:"react-dataviz-animation-with-react-spring",isAvailable:!0,categories:["fundamental","animation"],children:(0,n.jsx)("span",{children:"It's often necessary to transition between 2 ys of a graph. React-spring is here to help, allowing to use spring animations easily."})}),(0,n.jsx)(u,{title:"Dataset transition",timeToRead:5,link:"dataset-transition",isAvailable:!0,categories:["animation"],children:(0,n.jsxs)("span",{children:["Adding a smooth transition between dataset often adds a nice touch to your viz component. Let's see how to implement it with"," ",(0,n.jsx)("code",{children:"react-spring"}),"."]})}),(0,n.jsx)(u,{title:"Shape morphism: animate the transition between 2 distincts charts",timeToRead:5,link:"shape-morphism-for-dataviz-with-react",isAvailable:!0,categories:["advanced","animation"],children:(0,n.jsxs)("span",{children:["How can we build a smooth transition between a"," ",(0,n.jsx)(l.default,{href:"/pie-plot",children:"pie chart"})," and a barplot? The"," ",(0,n.jsx)("code",{children:"flubber"})," js library allows to interpolate shapes and"," ",(0,n.jsx)("code",{children:"react-spring"})," can animate this interpolation."]})}),(0,n.jsx)(u,{title:"Improve chart performance with Canvas",timeToRead:5,link:"to-do",isAvailable:!1,categories:["fundamental","canvas"],children:(0,n.jsx)("span",{children:"Rendering a chart using svg is limited in term of performace. The DOM gets to crowded and updating it ends up being slow. Using canvas is the best workaround but you need to be able to draw your svg path using it!"})}),(0,n.jsx)(u,{title:"Fix the blurry canvas on Retina screens",timeToRead:5,link:"fix-canvas-blurry-dataviz",isAvailable:!0,categories:["canvas","advanced"],children:(0,n.jsx)("span",{children:"When using canvas for your viz, the result will be blurry on retina screens if you don't scale the canvas properly. Here is why and how to implement it."})}),(0,n.jsx)(u,{title:"Stacked barplot: how to deal with negative values",timeToRead:6,link:"stacked-barplot-with-negative-values",isAvailable:!0,categories:["fundamental","axis"],children:(0,n.jsx)("span",{children:"A stacked barchart displays the values of items split in group and subgroups. It's a quite common chart type, but dealing with negative values in the dataset brings some interesting dataviz discussions."})}),(0,n.jsx)(u,{title:"What is a color",timeToRead:3,link:"what-is-a-color",isAvailable:!0,categories:["fundamental","axis"],children:(0,n.jsx)("span",{children:"There are so many ways to define a color when talking with a computer. Let's take a tour and see what's the most appropriate for a dataviz point of view."})}),(0,n.jsx)(u,{title:"Buiding a futuristic viz",timeToRead:3,link:"viz-from-the-future",isAvailable:!0,categories:["fundamental","axis"],children:(0,n.jsx)("span",{children:"What makes a viz look from the future. And how to implement it with d3.js and reac."})}),(0,n.jsx)("hr",{className:"full-bleed border bg-gray-200 mt-10 mb-3"}),(0,n.jsx)(s.Z,{chartFamily:"general"}),(0,n.jsx)("div",{className:"mt-20"}),(0,n.jsx)(o.Z,{})]})}},3187:function(e){e.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3924:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}},9008:function(e,t,i){e.exports=i(5443)},1664:function(e,t,i){e.exports=i(8418)}},function(e){e.O(0,[358,9774,2888,179],(function(){return t=8271,e(e.s=t);var t}));var t=e.O();_N_E=t}]);