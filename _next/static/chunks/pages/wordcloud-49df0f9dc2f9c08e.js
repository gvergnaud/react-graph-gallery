(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4164,6546],{6929:function(t,e,r){var n=r(3656).W,i=Math.PI/180,o=2048;function a(t){return t.text}function s(){return"serif"}function l(){return"normal"}function c(t){return Math.sqrt(t.value)}function d(){return 30*(~~(6*Math.random())-3)}function u(){return 1}function h(t,e,r,n){if(!e.sprite){var a=t.context,s=t.ratio;a.clearRect(0,0,2048/s,o/s);var l=0,c=0,d=0,u=r.length;for(--n;++n<u;){e=r[n],a.save(),a.font=e.style+" "+e.weight+" "+~~((e.size+1)/s)+"px "+e.font;var h=a.measureText(e.text+"m").width*s,f=e.size<<1;if(e.rotate){var x=Math.sin(e.rotate*i),p=Math.cos(e.rotate*i),m=h*p,v=h*x,y=f*p,w=f*x;h=Math.max(Math.abs(m+w),Math.abs(m-w))+31>>5<<5,f=~~Math.max(Math.abs(v+y),Math.abs(v-y))}else h=h+31>>5<<5;if(f>d&&(d=f),l+h>=2048&&(l=0,c+=d,d=0),c+f>=o)break;a.translate((l+(h>>1))/s,(c+(f>>1))/s),e.rotate&&a.rotate(e.rotate*i),a.fillText(e.text,0,0),e.padding&&(a.lineWidth=2*e.padding,a.strokeText(e.text,0,0)),a.restore(),e.width=h,e.height=f,e.xoff=l,e.yoff=c,e.x1=h>>1,e.y1=f>>1,e.x0=-e.x1,e.y0=-e.y1,e.hasText=!0,l+=h}for(var g=a.getImageData(0,0,2048/s,o/s).data,j=[];--n>=0;)if((e=r[n]).hasText){for(var b=(h=e.width)>>5,z=(f=e.y1-e.y0,0);z<f*b;z++)j[z]=0;if(null==(l=e.xoff))return;c=e.yoff;for(var N=0,k=-1,_=0;_<f;_++){for(z=0;z<h;z++){var T=b*_+(z>>5),M=g[2048*(c+_)+(l+z)<<2]?1<<31-z%32:0;j[T]|=M,N|=M}N?k=_:(e.y0++,f--,_--,c++)}e.y1=e.y0+k,e.sprite=j.slice(0,(e.y1-e.y0)*b)}}}function f(t,e,r){r>>=5;for(var n,i=t.sprite,o=t.width>>5,a=t.x-(o<<4),s=127&a,l=32-s,c=t.y1-t.y0,d=(t.y+t.y0)*r+(a>>5),u=0;u<c;u++){n=0;for(var h=0;h<=o;h++)if((n<<l|(h<o?(n=i[u*o+h])>>>s:0))&e[d+h])return!0;d+=r}return!1}function x(t,e){var r=t[0],n=t[1];e.x+e.x0<r.x&&(r.x=e.x+e.x0),e.y+e.y0<r.y&&(r.y=e.y+e.y0),e.x+e.x1>n.x&&(n.x=e.x+e.x1),e.y+e.y1>n.y&&(n.y=e.y+e.y1)}function p(t){var e=t[0]/t[1];return function(t){return[e*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function m(){return document.createElement("canvas")}function v(t){return"function"===typeof t?t:function(){return t}}t.exports=function(){var t=[256,256],e=a,r=s,i=c,w=l,g=l,j=d,b=u,z=p,N=[],k=1/0,_=n("word","end"),T=null,M=Math.random,E={},L=m;function I(e,r,n){t[0],t[1];for(var i,o,a,s,l,c=r.x,d=r.y,u=Math.sqrt(t[0]*t[0]+t[1]*t[1]),h=z(t),x=M()<.5?1:-1,p=-x;(i=h(p+=x))&&(o=~~i[0],a=~~i[1],!(Math.min(Math.abs(o),Math.abs(a))>=u));)if(r.x=c+o,r.y=d+a,!(r.x+r.x0<0||r.y+r.y0<0||r.x+r.x1>t[0]||r.y+r.y1>t[1])&&(!n||!f(r,e,t[0]))&&(!n||(l=n,(s=r).x+s.x1>l[0].x&&s.x+s.x0<l[1].x&&s.y+s.y1>l[0].y&&s.y+s.y0<l[1].y))){for(var m,v=r.sprite,y=r.width>>5,w=t[0]>>5,g=r.x-(y<<4),j=127&g,b=32-j,N=r.y1-r.y0,k=(r.y+r.y0)*w+(g>>5),_=0;_<N;_++){m=0;for(var T=0;T<=y;T++)e[k+T]|=m<<b|(T<y?(m=v[_*y+T])>>>j:0);k+=w}return delete r.sprite,!0}return!1}return E.canvas=function(t){return arguments.length?(L=v(t),E):L},E.start=function(){var n=function(t){t.width=t.height=1;var e=Math.sqrt(t.getContext("2d").getImageData(0,0,1,1).data.length>>2);t.width=2048/e,t.height=o/e;var r=t.getContext("2d");return r.fillStyle=r.strokeStyle="red",r.textAlign="center",{context:r,ratio:e}}(L()),a=function(t){var e=[],r=-1;for(;++r<t;)e[r]=0;return e}((t[0]>>5)*t[1]),s=null,l=N.length,c=-1,d=[],u=N.map((function(t,n){return t.text=e.call(this,t,n),t.font=r.call(this,t,n),t.style=w.call(this,t,n),t.weight=g.call(this,t,n),t.rotate=j.call(this,t,n),t.size=~~i.call(this,t,n),t.padding=b.call(this,t,n),t})).sort((function(t,e){return e.size-t.size}));return T&&clearInterval(T),T=setInterval(f,0),f(),E;function f(){for(var e=Date.now();Date.now()-e<k&&++c<l&&T;){var r=u[c];r.x=t[0]*(M()+.5)>>1,r.y=t[1]*(M()+.5)>>1,h(n,r,u,c),r.hasText&&I(a,r,s)&&(d.push(r),_.call("word",E,r),s?x(s,r):s=[{x:r.x+r.x0,y:r.y+r.y0},{x:r.x+r.x1,y:r.y+r.y1}],r.x-=t[0]>>1,r.y-=t[1]>>1)}c>=l&&(E.stop(),_.call("end",E,d,s))}},E.stop=function(){return T&&(clearInterval(T),T=null),E},E.timeInterval=function(t){return arguments.length?(k=null==t?1/0:t,E):k},E.words=function(t){return arguments.length?(N=t,E):N},E.size=function(e){return arguments.length?(t=[+e[0],+e[1]],E):t},E.font=function(t){return arguments.length?(r=v(t),E):r},E.fontStyle=function(t){return arguments.length?(w=v(t),E):w},E.fontWeight=function(t){return arguments.length?(g=v(t),E):g},E.rotate=function(t){return arguments.length?(j=v(t),E):j},E.text=function(t){return arguments.length?(e=v(t),E):e},E.spiral=function(t){return arguments.length?(z=y[t]||t,E):z},E.fontSize=function(t){return arguments.length?(i=v(t),E):i},E.padding=function(t){return arguments.length?(b=v(t),E):b},E.random=function(t){return arguments.length?(M=t,E):M},E.on=function(){var t=_.on.apply(_,arguments);return t===_?E:t},E};var y={archimedean:p,rectangular:function(t){var e=4*t[0]/t[1],r=0,n=0;return function(t){var i=t<0?-1:1;switch(Math.sqrt(1+4*i*t)-i&3){case 0:r+=e;break;case 1:n+=4;break;case 2:r-=e;break;default:n-=4}return[r,n]}}}},3656:function(t,e,r){"use strict";r.d(e,{W:function(){return c}});var n={value:function(){}};function i(){for(var t,e=0,r=arguments.length,n={};e<r;++e){if(!(t=arguments[e]+"")||t in n||/[\s.]/.test(t))throw new Error("illegal type: "+t);n[t]=[]}return new o(n)}function o(t){this._=t}function a(t,e){return t.trim().split(/^|\s+/).map((function(t){var r="",n=t.indexOf(".");if(n>=0&&(r=t.slice(n+1),t=t.slice(0,n)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}}))}function s(t,e){for(var r,n=0,i=t.length;n<i;++n)if((r=t[n]).name===e)return r.value}function l(t,e,r){for(var i=0,o=t.length;i<o;++i)if(t[i].name===e){t[i]=n,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=r&&t.push({name:e,value:r}),t}o.prototype=i.prototype={constructor:o,on:function(t,e){var r,n=this._,i=a(t+"",n),o=-1,c=i.length;if(!(arguments.length<2)){if(null!=e&&"function"!==typeof e)throw new Error("invalid callback: "+e);for(;++o<c;)if(r=(t=i[o]).type)n[r]=l(n[r],t.name,e);else if(null==e)for(r in n)n[r]=l(n[r],t.name,null);return this}for(;++o<c;)if((r=(t=i[o]).type)&&(r=s(n[r],t.name)))return r},copy:function(){var t={},e=this._;for(var r in e)t[r]=e[r].slice();return new o(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var r,n,i=new Array(r),o=0;o<r;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,r=(n=this._[t]).length;o<r;++o)n[o].value.apply(e,i)},apply:function(t,e,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var n=this._[t],i=0,o=n.length;i<o;++i)n[i].value.apply(e,r)}};var c=i},668:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wordcloud",function(){return r(506)}])},7197:function(t,e,r){"use strict";r.d(e,{Z:function(){return h}});var n=r(5893),i=(r(7294),r(6761)),o=r(1878),a=r(1664),s=o.c.filter((function(t){return"general"===t.family})).map((function(t){return t.logo}));function l(t){var e=t.chartLogo,r=t.caption,o=t.link,l=t.isAvailable,d=t.size,u=s.includes(e),h=l?"opacity-100":"opacity-20",f=l?"cursor-pointer":"cursor-not-allowed";return(0,n.jsx)(a.default,{href:l?o:"subscribe",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{style:{width:d,height:d},className:"relative mr-2 rounded-full "+h+" "+f,children:[(0,n.jsx)("div",{className:"absolute",children:(0,n.jsx)(i.Z,{chartLogo:e})}),u?(0,n.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,n.jsx)(c,{size:d})}):(0,n.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full z-30",children:(0,n.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,n.jsx)("p",{className:"font-light text-sm text-gray-600 "+h,children:r})]})})}var c=function(t){var e=t.size;return(0,n.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,n.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},d=r(3414),u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function h(t){var e=t.chartFamily,r=o.c.filter((function(t){return t.family===e})).map((function(t,e){var r=(0,d.y)(t.reactURL);return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,n.jsx)(l,{link:r,chartLogo:t.logo,caption:t.label,isAvailable:t.isAvailable,size:129})},e)}));return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:e+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===u||void 0===u?void 0:u[e]}),(0,n.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},33:function(t,e,r){"use strict";r.d(e,{$:function(){return c}});var n=r(5893),i=r(7294),o=r(217),a=r(4893),s=r(5380),l=r(7975),c=function(t){var e=t.VizComponent,r=t.vizName,c=t.height,d=void 0===c?400:c,u=t.maxWidth,h=void 0===u?800:u,f=t.caption,x=(0,i.useState)(!1),p=x[0],m=x[1],v=(0,i.useRef)(null),y=(0,o.B)(v);return(0,n.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:p?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,n.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,n.jsx)(l.X,{vizName:r})}),(0,n.jsx)("div",{className:"flex justify-center mt-2",children:(0,n.jsx)(a.z,{size:"sm",onClick:function(){return m(!p)},children:"Hide Sandbox"})})]}):(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,n.jsx)("div",{style:{height:d,width:"100%",maxWidth:h},ref:v,className:"pointer-events-auto",children:(0,n.jsx)(e,{height:d,width:y.width})})}),(0,n.jsx)(s.Y,{children:f}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(a.z,{size:"sm",onClick:function(){return m(!p)},children:"Show code"})})]})})}},7975:function(t,e,r){"use strict";r.d(e,{X:function(){return i}});var n=r(5893),i=(r(7294),function(t){var e="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,n.jsx)("iframe",{src:e,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},1884:function(t,e,r){"use strict";r.d(e,{A:function(){return h}});var n=r(5893),i=r(3185),o=r(1261),a=r(7294),s=r(3924),l=r.n(s);function c(){var t=(0,a.useState)([]),e=t[0],r=t[1],i=(0,a.useState)(0),o=i[0],s=i[1];return(0,a.useEffect)((function(){var t=Array.from(document.querySelectorAll("h2"));r(t)}),[]),(0,a.useEffect)((function(){var t=function(){var t=e.map((function(t){return t.offsetTop-t.scrollTop+t.clientTop})),r=window.scrollY+150,n=t.reduce((function(t,e){return Math.abs(e-r)<Math.abs(t-r)?e:t}),0),i=t.findIndex((function(t){return t===n}));s(-1===i?0:i)};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[e]),(0,n.jsx)("div",{className:l().tableOfContent,children:e.map((function(t,r){return(0,n.jsx)("p",{className:o===r?"".concat(l().tocItem," ").concat(l().tocItemActive):l().tocItem,onClick:function(t){t.preventDefault(),e[r].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id)}))})}var d=r(8171),u=r(6978),h=function(t){var e=t.children,r=t.title,a=t.seoDescription;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{title:r,seoDescription:a}),(0,n.jsxs)("div",{className:"wrapper",children:[(0,n.jsx)(i.Z,{}),e]}),(0,n.jsx)(u.Z,{}),(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(o.Z,{})}),(0,n.jsx)(c,{})]})}},1687:function(t,e,r){"use strict";r.d(e,{J:function(){return o}});var n=r(5893),i=r(1664),o=function(t){var e=t.children,r=t.href,o=t.isFilled,a=t.size,s=void 0===a?"md":a,l=t.isFaded,c=r.startsWith("www")||r.startsWith("http"),d="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";d+=o?" bg-reactGallery hover:bg-reactGallery text-white ":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===s&&(d+="text-sm py-1 px-2 "),"md"===s&&(d+="text-md py-2 px-4 "),l&&(d+="opacity-60");var u=(0,n.jsx)("span",{className:d,children:e});return c?(0,n.jsx)("a",{href:r,target:"_blank",children:u}):(0,n.jsx)(i.default,{href:r,passHref:!0,children:(0,n.jsx)("a",{children:u})})}},8807:function(t,e,r){"use strict";r.d(e,{Z:function(){return h}});var n=r(5893),i=(r(7294),r(1878)),o=r(3414),a=r(3919),s=r(1687),l=r(3187),c=r.n(l),d=function(t){var e=t.direction,r=t.text,i=t.children;return(0,n.jsx)("span",{className:c().tooltip+" "+c()[e],id:r,children:i})},u=r(6761);function h(t){var e=t.title,r=t.description,l=t.chartType,c=t.showSectionLink,h=void 0!==c&&c,f=t.showInspirationLink,x=void 0===f||f,p=t.showD3GalleryLink,m=void 0===p||p,v=i.c.find((function(t){return t.id===l}));return v?(0,n.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,n.jsxs)("div",{className:"flex justify-start items-center",children:[(0,n.jsx)("h1",{children:e}),(0,n.jsx)("div",{className:"w-20 ml-4",children:(0,n.jsx)(u.Z,{chartLogo:null===v||void 0===v?void 0:v.logo})})]}),(0,n.jsx)(a.r,{}),(0,n.jsx)("div",{className:"max-w-xxl py-2",children:r}),l&&(0,n.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),l&&(0,n.jsxs)("div",{className:"flex flex-row flex-wrap",children:[h&&(0,n.jsx)(d,{text:"kkkk",direction:"bottom",children:(0,n.jsx)(s.J,{href:(0,o.y)(v.reactURL),size:"sm",children:v.label+" section"})}),x&&(0,n.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,n.jsx)(s.J,{href:"https://www.dataviz-inspiration.com/"+v.id,size:"sm",children:"inspiration"})}),m&&(0,n.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,n.jsx)(s.J,{href:v.d3URL,size:"sm",children:"d3 gallery"})}),(0,n.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,n.jsx)(s.J,{href:v.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]}):null}},4893:function(t,e,r){"use strict";r.d(e,{z:function(){return i}});var n=r(5893),i=function(t){var e=t.children,r=t.onClick,i=t.isFilled,o=t.size,a=void 0===o?"md":o,s="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===a&&(s+="text-sm py-1 px-2"),"md"===a&&(s+="text-md py-2 px-4"),s+=i?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,n.jsx)("button",{className:s,onClick:r,children:e})}},5380:function(t,e,r){"use strict";r.d(e,{Y:function(){return i}});var n=r(5893),i=function(t){var e=t.children;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:e})}},8193:function(t,e,r){"use strict";r.d(e,{d:function(){return s}});var n=r(5893),i=r(4725),o=r.n(i),a=r(7294),s=function(t){var e=t.code,r=(0,a.useRef)(null);return(0,a.useEffect)((function(){r.current&&o().highlightElement(r.current)}),[r,e]),(0,n.jsx)("div",{className:"mb-6",children:(0,n.jsx)("pre",{className:"rounded-md line-numbers",children:(0,n.jsx)("code",{ref:r,className:"p-0 language-js",children:e})})})}},217:function(t,e,r){"use strict";r.d(e,{B:function(){return i}});var n=r(7294),i=function(t){var e=function(){return{width:t.current?t.current.offsetWidth:0,height:t.current?t.current.offsetHeight:0}},r=(0,n.useState)(e),i=r[0],o=r[1],a=function(){o(e())};return(0,n.useEffect)((function(){return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[]),(0,n.useLayoutEffect)((function(){a()}),[]),i}},506:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return y}});var n=r(5893),i=r(7294),o=r(1884),a=r(8807),s=r(7197),l=r(8193),c=r(33),d=["data","wordcloud","science","map","treemap","viz","dataviz","code","react","d3.js","histogram","boxplot","ridgeline","distribution","anova","line","area","stack","streamgraph","polar","barplot","lollipop","sankey","arc","network","choropleth","scale"].map((function(t){return{text:t,value:10+90*Math.random()}})),u=r(6929),h=r.n(u),f=r(5250),x=function(t){var e=t.width,r=t.height,o=t.data,a=(0,i.useState)([]),s=a[0],l=a[1],c=(0,f.BYU)().domain([0,100]).range([12,35]),d=(0,f.cJy)().domain([0,100]).interpolator(f.sN9),u=h()().words(o).timeInterval(100).size([e,r]).fontSize((function(t){return c(t.value)})).padding(10).on("end",(function(t){l(t)}));return(0,i.useEffect)((function(){e&&u.start()}),[e]),(0,n.jsx)("div",{style:{width:e,height:r,position:"relative"},children:(0,n.jsx)("div",{style:{transform:"translate(".concat(e/2,"px,").concat(r/2,"px)")},children:s.map((function(t,e){return(0,n.jsx)("p",{style:{position:"absolute",top:0,left:0,fontSize:t.size,textAnchor:"middle",transform:"translate(".concat(t.x,"px,").concat(t.y,"px)rotate(").concat(t.rotate,"deg)"),color:d(t.value),font:"serif"},children:t.text},e)}))})})},p=function(t){var e=t.width,r=void 0===e?700:e,i=t.height,o=void 0===i?400:i;return(0,n.jsx)(x,{width:r,height:o,data:d})},m=r(1664),v=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["This page explains how to build a"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/graph/wordcloud.html",children:"wordcloud"})," ","using ",(0,n.jsx)("code",{children:"react"})," and ",(0,n.jsx)("code",{children:"d3.js"}),". It uses the"," ",(0,n.jsx)("a",{href:"https://github.com/jasondavies/d3-cloud",children:"d3-cloud"})," plugin to compute the position of each word, and render them with react."]}),(0,n.jsxs)("p",{children:["This section is rather short as"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/graph/wordcloud.html",children:"I'm not a big fan"})," ","of wordclouds. They can be quite misleading and you should consider building a ",(0,n.jsx)(m.default,{href:"/barplot",children:"barplot"})," or a"," ",(0,n.jsx)(m.default,{href:"/lollipop",children:"lollipop plot"})," instead."]})]});function y(){return(0,n.jsxs)(o.A,{title:"Wordcloud with React",seoDescription:"How to build a wordcloud with React and D3.js. A set of re-usable components",children:[(0,n.jsx)(a.Z,{title:"Wordcloud",description:v,chartType:"wordcloud"}),(0,n.jsxs)("blockquote",{children:["This page uses the"," ",(0,n.jsx)("a",{href:"https://github.com/jasondavies/d3-cloud",children:"d3-cloud"})," plugin that you can install in your project with"," ",(0,n.jsx)("code",{children:"npm install d3-cloud"})]}),(0,n.jsx)("h2",{id:"data",children:"The Data"}),(0,n.jsxs)("p",{children:["The data is an ",(0,n.jsx)("b",{children:"array"}),". Each item is an object describing a word. Its ",(0,n.jsx)("code",{children:"name"})," is provided, together with a related"," ",(0,n.jsx)("code",{children:"value"})," that will be used to size the word on the final figure."]}),(0,n.jsxs)("p",{children:["Note that you can add ",(0,n.jsx)("b",{children:"any additional property"})," here, like a color, a font weight or anything else that you want to use to draw the word later on."]}),(0,n.jsx)(l.d,{code:w}),(0,n.jsx)("h2",{id:"basic",children:"Most basic wordcloud with React and D3.js"}),(0,n.jsxs)("p",{children:["Everything starts by instantiating a wordcloud layout using the",(0,n.jsx)("code",{children:"d3Cloud()"})," function of the"," ",(0,n.jsx)("a",{href:"https://github.com/jasondavies/d3-cloud",children:"d3-cloud"})," library."]}),(0,n.jsx)(l.d,{code:g}),(0,n.jsxs)("p",{children:["This layout can then be called from a useEffect using"," ",(0,n.jsx)("code",{children:"layout.start()"}),". The layout algorithm will loop through each word of the dataset and try to place them on the chart, avoiding overlaps with other words."]}),(0,n.jsxs)("p",{children:["Once the loop is over, the layout algorithm will produce a"," ",(0,n.jsx)("code",{children:"words"})," object and provide it to the ",(0,n.jsx)("code",{children:"end()"})," ","function. This function update a state that stores the position and feature of each word."]}),(0,n.jsx)("p",{children:"It is thus possible to map through those word features and draw them using html, svg or canvas. Here is an example using HTML"}),(0,n.jsx)("br",{}),(0,n.jsx)(c.$,{VizComponent:p,vizName:"WordcloudBasic",maxWidth:600,height:500,caption:"Most basic Wordcloud made with react and d3.js"}),(0,n.jsxs)("blockquote",{children:[(0,n.jsx)("b",{children:"Todo"}),": write better explanation"]}),(0,n.jsx)("div",{className:"mt-4"}),(0,n.jsxs)("blockquote",{children:[(0,n.jsx)("b",{children:"Todo"}),": the layout algorithm currently provides unperfect values, resulting in a lot of word overlaps. Please tell me if you find where the bug is."]}),(0,n.jsx)("h2",{id:"warning",children:"Warning"}),(0,n.jsx)("p",{children:"Wordclouds are useful for quickly perceiving the most prominent terms. They are widely used in media and well understood by the public. However, they are criticized for 2 main reasons:"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Area is a poor metaphor of a numeric value, it is hardly perceive by the human eye"}),(0,n.jsx)("li",{children:"Longer words appear bigger by construction"})]}),(0,n.jsxs)("p",{children:["To put it in a nutshell, wordclouds must be avoided. You can read more about that in"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/graph/wordcloud.html",children:"data-to-viz"}),". Why not consider a ",(0,n.jsx)(m.default,{href:"/lollipop",children:"lollipop plot"})," or a"," ",(0,n.jsx)(m.default,{href:"/barplot",children:"barplot"})," instead?"]}),(0,n.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3 mt-28"}),(0,n.jsx)(s.Z,{chartFamily:"ranking"}),(0,n.jsx)("div",{className:"mt-20"})]})}var w='\nconst data = [\n  { text: "hello", value: 12 },\n  { text: "world", value: 2 },\n];\n'.trim(),g='\nconst layout = d3Cloud()\n  .words(data)\n  .size([width, height])\n  .fontSize((d) => fontSizeScale(d.value))\n  .padding(10)\n  .on("end", (words) => {\n    setWordsPosition(words);\n  });\n'.trim()},3187:function(t){t.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3924:function(t){t.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}}},function(t){t.O(0,[503,5660,358,9774,2888,179],(function(){return e=668,t(t.s=e);var e}));var e=t.O();_N_E=e}]);