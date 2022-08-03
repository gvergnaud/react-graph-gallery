(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[581],{8271:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/how-to",function(){return n(8659)}])},8418:function(e,t,n){"use strict";function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,a=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(l){a=!0,r=l}finally{try{i||null==s.return||s.return()}finally{if(a)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,r=(a=n(7294))&&a.__esModule?a:{default:a},o=n(6273),s=n(387),l=n(7190);var c={};function d(e,t,n,i){if(e&&o.isLocalURL(t)){e.prefetch(t,n,i).catch((function(e){0}));var a=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;c[t+"%"+n+(a?"%"+a:"")]=!0}}var h=function(e){var t,n=!1!==e.prefetch,a=s.useRouter(),h=r.default.useMemo((function(){var t=i(o.resolveHref(a,e.href,!0),2),n=t[0],r=t[1];return{href:n,as:e.as?o.resolveHref(a,e.as):r||n}}),[a,e.href,e.as]),u=h.href,p=h.as,f=e.children,v=e.replace,m=e.shallow,g=e.scroll,b=e.locale;"string"===typeof f&&(f=r.default.createElement("a",null,f));var w=(t=r.default.Children.only(f))&&"object"===typeof t&&t.ref,y=i(l.useIntersection({rootMargin:"200px"}),2),x=y[0],j=y[1],k=r.default.useCallback((function(e){x(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,x]);r.default.useEffect((function(){var e=j&&n&&o.isLocalURL(u),t="undefined"!==typeof b?b:a&&a.locale,i=c[u+"%"+p+(t?"%"+t:"")];e&&!i&&d(a,u,p,{locale:t})}),[p,u,j,b,n,a]);var R={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,i,a,r,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==s&&i.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](n,i,{shallow:r,locale:l,scroll:s}))}(e,a,u,p,v,m,g,b)},onMouseEnter:function(e){o.isLocalURL(u)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(a,u,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var T="undefined"!==typeof b?b:a&&a.locale,A=a&&a.isLocaleDomain&&o.getDomainLocale(p,T,a&&a.locales,a&&a.domainLocales);R.href=A||o.addBasePath(o.addLocale(p,T,a&&a.defaultLocale))}return r.default.cloneElement(t,R)};t.default=h},7190:function(e,t,n){"use strict";function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,a=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(l){a=!0,r=l}finally{try{i||null==s.return||s.return()}finally{if(a)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,l=a.useRef(),c=i(a.useState(!1),2),d=c[0],h=c[1],u=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var i=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:i}),n}(n),a=i.id,r=i.observer,o=i.elements;return o.set(e,t),r.observe(e),function(){o.delete(e),r.unobserve(e),0===o.size&&(r.disconnect(),s.delete(a))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[n,t,d]);return a.useEffect((function(){if(!o&&!d){var e=r.requestIdleCallback((function(){return h(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[d]),[u,d]};var a=n(7294),r=n(9311),o="undefined"!==typeof IntersectionObserver;var s=new Map},8659:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var i=n(5893),a=(n(7294),n(6184)),r=n(6193),o=n(6978),s=n(7197),l=n(1664),c=(0,i.jsxs)("p",{children:["On top of set of chart examples, the react graph gallery provides some more generic blog posts desribing how to make ",(0,i.jsx)("code",{children:"react"})," and"," ",(0,i.jsx)("code",{children:"d3.js"})," work together. Here is a list of the main concepts you need to know to build your own viz."]}),d=function(e){var t=e.title,n=e.children,a=e.link,r=e.isAvailable,o=e.timeToRead,s=r?"opacity-100":"opacity-25";return(0,i.jsxs)("div",{className:s,children:[r?(0,i.jsx)(l.default,{href:a,children:(0,i.jsx)("h2",{className:"cursor-pointer",children:t})}):(0,i.jsx)("h2",{children:t}),n,r&&(0,i.jsx)(l.default,{href:a,children:" Read more..."}),(0,i.jsx)("p",{className:"text-gray-400 font-light mt-2",children:o+" minutes read"})]})};function h(){return(0,i.jsxs)(a.A,{title:"How to make react and d3.js work together",seoDescription:"A list of blog posts describing the main concepts behind a viz built wih react and d3.js",children:[(0,i.jsx)(r.Z,{title:"How to make d3.js work with react",description:c}),(0,i.jsx)(d,{title:"Using react and d3.js: The 2 strategies",timeToRead:4,link:"how-to-includes-a-d3-chart-in-react",isAvailable:!1,children:(0,i.jsx)("span",{children:"React modifies the DOM. So does d3.js. It makes it hard to make them work together. This blog post describes the 2 main strategies to do so."})}),(0,i.jsx)(d,{title:"Axes: build them with react (and a bit of d3)",timeToRead:8,link:"build-axis-with-react",isAvailable:!0,children:(0,i.jsx)("span",{children:"Most of the viz types need some axes to be insightful. This post explains how to build them from a d3 scale, using the tick() method of d3 to create re-usable react components."})}),(0,i.jsx)(d,{title:"Responsiveness: a hook that makes your viz fits its container",timeToRead:5,link:"make-a-graph-responsive",isAvailable:!0,children:(0,i.jsxs)("span",{children:["Viz components often take a ",(0,i.jsx)("code",{children:"width"})," and a"," ",(0,i.jsx)("code",{children:"height"})," properties as input. This blogposts explains how to build a wrapper around it that computes the parent's div dimension and pass it as props"]})}),(0,i.jsx)(d,{title:"Hover interaction",timeToRead:6,link:"add-hover-interaction-to-graph",isAvailable:!0,children:(0,i.jsxs)("span",{children:[(0,i.jsx)("b",{children:"Interactivity"})," is an important part of dataviz when working in the browser. Adding a hover effect can improve the user experience by highlighting a series on the chart. Here are a couple way to implement it, always keeping performances in mind."]})}),(0,i.jsx)(d,{title:"Graph to graph interaction",timeToRead:10,link:"cross-graph-highlight-interaction",isAvailable:!0,children:(0,i.jsx)("span",{children:"Let's say you have a choropleth map on a side, a timeseries on the other. How can you add cross-viz interactions, like hovering a country to highlight its trend on the timeseries?"})}),(0,i.jsx)(d,{title:"Spring animations with react spring",timeToRead:5,link:"react-dataviz-animation-with-react-spring",isAvailable:!0,children:(0,i.jsx)("span",{children:"It's often necessary to transition between 2 ys of a graph. React-spring is here to help, allowing to use spring animations easily."})}),(0,i.jsx)(d,{title:"Shape morphism: animate the transition between 2 distincts charts",timeToRead:5,link:"shape-morphism-for-dataviz-with-react",isAvailable:!0,children:(0,i.jsxs)("span",{children:["How can we build a smooth transition between a"," ",(0,i.jsx)(l.default,{href:"/pie-plot",children:"pie chart"})," and a barplot? The"," ",(0,i.jsx)("code",{children:"flubber"})," js library allows to interpolate shapes and"," ",(0,i.jsx)("code",{children:"react-spring"})," can animate this interpolation."]})}),(0,i.jsx)(d,{title:"Improve chart performance with Canvas",timeToRead:5,link:"to-do",isAvailable:!1,children:(0,i.jsx)("span",{children:"Rendering a chart using svg is limited in term of performace. The DOM gets to crowded and updating it ends up being slow. Using canvas is the best workaround but you need to be able to draw your svg path using it!"})}),(0,i.jsx)(d,{title:"Fix the blurry canvas on Retina screens",timeToRead:5,link:"fix-canvas-blurry-dataviz",isAvailable:!0,children:(0,i.jsx)("span",{children:"When using canvas for your viz, the result will be blurry on retina screens if you don't scale the canvas properly. Here is why and how to implement it."})}),(0,i.jsx)(d,{title:"Stacked barplot: how to deal with negative values",timeToRead:6,link:"stacked-barplot-with-negative-values",isAvailable:!0,children:(0,i.jsx)("span",{children:"A stacked barchart displays the values of items split in group and subgroups. It's a quite common chart type, but dealing with negative values in the dataset brings some interesting dataviz discussions."})}),(0,i.jsx)(d,{title:"What is a color",timeToRead:3,link:"what-is-a-color",isAvailable:!0,children:(0,i.jsx)("span",{children:"There are so many ways to define a color when talking with a computer. Let's take a tour and see what's the most appropriate for a dataviz point of view."})}),(0,i.jsx)("hr",{className:"full-bleed border bg-gray-200 mt-10 mb-3"}),(0,i.jsx)(s.Z,{chartFamily:"general"}),(0,i.jsx)("div",{className:"mt-20"}),(0,i.jsx)(o.Z,{})]})}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[702,774,888,179],(function(){return t=8271,e(e.s=t);var t}));var t=e.O();_N_E=t}]);