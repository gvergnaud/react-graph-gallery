(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[792],{4657:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/scatter-plot",function(){return t(8653)}])},3485:function(e,n,t){"use strict";t.d(n,{U:function(){return r}});var p=t(5893),i=t(7294),r=function(e){var n=e.startOpen,t=e.title,r=e.children,c=(0,i.useState)(n),o=c[0],a=c[1],l=o?"max-h-full":"max-h-0",u=o?"overflow-visible":"overflow-hidden";return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return a(!o)},children:[o?(0,p.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,p.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),t]}),(0,p.jsx)("div",{className:"transition-max-height ease-in duration-300  "+l+" "+u,children:r})]})}},2729:function(e,n,t){"use strict";t.d(n,{z:function(){return i}});var p=t(5893),i=function(e){var n=e.children,t=e.onClick,i=e.isFilled,r=e.size,c=void 0===r?"md":r,o="rounded m-1 cursor-pointer border-purple-700 border ";return"sm"===c&&(o+="text-sm py-1 px-2"),"md"===c&&(o+="text-md py-2 px-4"),o+=i?" bg-purple-500 hover:bg-purple-700 text-white":" bg-white hover:bg-purple-700 hover:text-white text-purple-700",(0,p.jsx)("button",{className:o,onClick:t,children:n})}},6158:function(e,n,t){"use strict";t.d(n,{Y:function(){return i}});var p=t(5893),i=function(e){var n=e.children;return(0,p.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:n})}},33:function(e,n,t){"use strict";t.d(n,{$:function(){return l}});var p=t(5893),i=t(7294),r=t(217),c=t(2729),o=t(6158),a=t(7975),l=function(e){var n=e.VizComponent,t=e.vizName,l=e.height,u=void 0===l?400:l,s=e.maxWidth,d=void 0===s?800:s,f=e.caption,x=(0,i.useState)(!1),g=x[0],y=x[1],E=(0,i.useRef)(null),h=(0,r.B)(E);return(0,p.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:g?(0,p.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,p.jsx)("div",{style:{maxWidth:2e3},className:"w-full",children:(0,p.jsx)(a.X,{vizName:t})}),(0,p.jsx)("div",{className:"flex justify-center mt-2",children:(0,p.jsx)(c.z,{size:"sm",onClick:function(){return y(!g)},children:"Hide Sandbox"})})]}):(0,p.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,p.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center",children:(0,p.jsx)("div",{style:{height:u,width:"100%",maxWidth:d},ref:E,children:(0,p.jsx)(n,{height:u,width:h.width})})}),(0,p.jsx)(o.Y,{children:f}),(0,p.jsx)("div",{className:"flex justify-center",children:(0,p.jsx)(c.z,{size:"sm",onClick:function(){return y(!g)},children:"Show code"})})]})})}},903:function(e,n,t){"use strict";t.d(n,{d:function(){return o}});var p=t(5893),i=t(4725),r=t.n(i),c=t(7294),o=function(e){var n=e.code,t=(0,c.useRef)(null);return(0,c.useEffect)((function(){t.current&&r().highlightElement(t.current)}),[t,n]),(0,p.jsx)("div",{className:"mb-4",children:(0,p.jsx)("pre",{className:"rounded-md line-numbers",children:(0,p.jsx)("code",{ref:t,className:"p-0 language-js",children:n})})})}},7975:function(e,n,t){"use strict";t.d(n,{X:function(){return i}});var p=t(5893),i=(t(7294),function(e){var n="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,p.jsx)("iframe",{src:n,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},217:function(e,n,t){"use strict";t.d(n,{B:function(){return i}});var p=t(7294),i=function(e){var n=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},t=(0,p.useState)(n),i=t[0],r=t[1],c=function(){r(n())};return(0,p.useEffect)((function(){return window.addEventListener("resize",c),function(){return window.removeEventListener("resize",c)}}),[]),(0,p.useLayoutEffect)((function(){c()}),[]),i}},8653:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return P}});var p=t(5893),i=t(7294),r=t(6184),c=t(6193),o=t(7197),a=t(6978),l=t(3485),u=t(903),s=t(33),d=[{country:"Afghanistan",continent:"Asia",lifeExp:43.828,pop:31889923,gdpPercap:974.5803384},{country:"Albania",continent:"Europe",lifeExp:76.423,pop:3600523,gdpPercap:5937.029526},{country:"Algeria",continent:"Africa",lifeExp:72.301,pop:33333216,gdpPercap:6223.367465},{country:"Angola",continent:"Africa",lifeExp:42.731,pop:12420476,gdpPercap:4797.231267},{country:"Argentina",continent:"Americas",lifeExp:75.32,pop:40301927,gdpPercap:12779.37964},{country:"Australia",continent:"Oceania",lifeExp:81.235,pop:20434176,gdpPercap:34435.36744},{country:"Austria",continent:"Europe",lifeExp:79.829,pop:8199783,gdpPercap:36126.4927},{country:"Bahrain",continent:"Asia",lifeExp:75.635,pop:708573,gdpPercap:29796.04834},{country:"Bangladesh",continent:"Asia",lifeExp:64.062,pop:150448339,gdpPercap:1391.253792},{country:"Belgium",continent:"Europe",lifeExp:79.441,pop:10392226,gdpPercap:33692.60508},{country:"Benin",continent:"Africa",lifeExp:56.728,pop:8078314,gdpPercap:1441.284873},{country:"Bolivia",continent:"Americas",lifeExp:65.554,pop:9119152,gdpPercap:3822.137084},{country:"Bosnia and Herzegovina",continent:"Europe",lifeExp:74.852,pop:4552198,gdpPercap:7446.298803},{country:"Botswana",continent:"Africa",lifeExp:50.728,pop:1639131,gdpPercap:12569.85177},{country:"Brazil",continent:"Americas",lifeExp:72.39,pop:190010647,gdpPercap:9065.800825},{country:"Bulgaria",continent:"Europe",lifeExp:73.005,pop:7322858,gdpPercap:10680.79282},{country:"Burkina Faso",continent:"Africa",lifeExp:52.295,pop:14326203,gdpPercap:1217.032994},{country:"Burundi",continent:"Africa",lifeExp:49.58,pop:8390505,gdpPercap:430.0706916},{country:"Cambodia",continent:"Asia",lifeExp:59.723,pop:14131858,gdpPercap:1713.778686},{country:"Cameroon",continent:"Africa",lifeExp:50.43,pop:17696293,gdpPercap:2042.09524},{country:"Canada",continent:"Americas",lifeExp:80.653,pop:33390141,gdpPercap:36319.23501},{country:"Central African Republic",continent:"Africa",lifeExp:44.741,pop:4369038,gdpPercap:706.016537},{country:"Chad",continent:"Africa",lifeExp:50.651,pop:10238807,gdpPercap:1704.063724},{country:"Chile",continent:"Americas",lifeExp:78.553,pop:16284741,gdpPercap:13171.63885},{country:"China",continent:"Asia",lifeExp:72.961,pop:1318683096,gdpPercap:4959.114854},{country:"Colombia",continent:"Americas",lifeExp:72.889,pop:44227550,gdpPercap:7006.580419},{country:"Comoros",continent:"Africa",lifeExp:65.152,pop:710960,gdpPercap:986.1478792},{country:"Congo, Dem. Rep.",continent:"Africa",lifeExp:46.462,pop:64606759,gdpPercap:277.5518587},{country:"Congo, Rep.",continent:"Africa",lifeExp:55.322,pop:3800610,gdpPercap:3632.557798},{country:"Costa Rica",continent:"Americas",lifeExp:78.782,pop:4133884,gdpPercap:9645.06142},{country:"Cote d'Ivoire",continent:"Africa",lifeExp:48.328,pop:18013409,gdpPercap:1544.750112},{country:"Croatia",continent:"Europe",lifeExp:75.748,pop:4493312,gdpPercap:14619.22272},{country:"Cuba",continent:"Americas",lifeExp:78.273,pop:11416987,gdpPercap:8948.102923},{country:"Czech Republic",continent:"Europe",lifeExp:76.486,pop:10228744,gdpPercap:22833.30851},{country:"Denmark",continent:"Europe",lifeExp:78.332,pop:5468120,gdpPercap:35278.41874},{country:"Djibouti",continent:"Africa",lifeExp:54.791,pop:496374,gdpPercap:2082.481567},{country:"Dominican Republic",continent:"Americas",lifeExp:72.235,pop:9319622,gdpPercap:6025.374752},{country:"Ecuador",continent:"Americas",lifeExp:74.994,pop:13755680,gdpPercap:6873.262326},{country:"Egypt",continent:"Africa",lifeExp:71.338,pop:80264543,gdpPercap:5581.180998},{country:"El Salvador",continent:"Americas",lifeExp:71.878,pop:6939688,gdpPercap:5728.353514},{country:"Equatorial Guinea",continent:"Africa",lifeExp:51.579,pop:551201,gdpPercap:12154.08975},{country:"Eritrea",continent:"Africa",lifeExp:58.04,pop:4906585,gdpPercap:641.3695236},{country:"Ethiopia",continent:"Africa",lifeExp:52.947,pop:76511887,gdpPercap:690.8055759},{country:"Finland",continent:"Europe",lifeExp:79.313,pop:5238460,gdpPercap:33207.0844},{country:"France",continent:"Europe",lifeExp:80.657,pop:61083916,gdpPercap:30470.0167},{country:"Gabon",continent:"Africa",lifeExp:56.735,pop:1454867,gdpPercap:13206.48452},{country:"Gambia",continent:"Africa",lifeExp:59.448,pop:1688359,gdpPercap:752.7497265},{country:"Germany",continent:"Europe",lifeExp:79.406,pop:82400996,gdpPercap:32170.37442},{country:"Ghana",continent:"Africa",lifeExp:60.022,pop:22873338,gdpPercap:1327.60891},{country:"Greece",continent:"Europe",lifeExp:79.483,pop:10706290,gdpPercap:27538.41188},{country:"Guatemala",continent:"Americas",lifeExp:70.259,pop:12572928,gdpPercap:5186.050003},{country:"Guinea",continent:"Africa",lifeExp:56.007,pop:9947814,gdpPercap:942.6542111},{country:"Guinea-Bissau",continent:"Africa",lifeExp:46.388,pop:1472041,gdpPercap:579.231743},{country:"Haiti",continent:"Americas",lifeExp:60.916,pop:8502814,gdpPercap:1201.637154},{country:"Honduras",continent:"Americas",lifeExp:70.198,pop:7483763,gdpPercap:3548.330846},{country:"Hong Kong, China",continent:"Asia",lifeExp:82.208,pop:6980412,gdpPercap:39724.97867},{country:"Hungary",continent:"Europe",lifeExp:73.338,pop:9956108,gdpPercap:18008.94444},{country:"Iceland",continent:"Europe",lifeExp:81.757,pop:301931,gdpPercap:36180.78919},{country:"India",continent:"Asia",lifeExp:64.698,pop:1110396331,gdpPercap:2452.210407},{country:"Indonesia",continent:"Asia",lifeExp:70.65,pop:223547e3,gdpPercap:3540.651564},{country:"Iran",continent:"Asia",lifeExp:70.964,pop:69453570,gdpPercap:11605.71449},{country:"Iraq",continent:"Asia",lifeExp:59.545,pop:27499638,gdpPercap:4471.061906},{country:"Ireland",continent:"Europe",lifeExp:78.885,pop:4109086,gdpPercap:40675.99635},{country:"Israel",continent:"Asia",lifeExp:80.745,pop:6426679,gdpPercap:25523.2771},{country:"Italy",continent:"Europe",lifeExp:80.546,pop:58147733,gdpPercap:28569.7197},{country:"Jamaica",continent:"Americas",lifeExp:72.567,pop:2780132,gdpPercap:7320.880262},{country:"Japan",continent:"Asia",lifeExp:82.603,pop:127467972,gdpPercap:31656.06806},{country:"Jordan",continent:"Asia",lifeExp:72.535,pop:6053193,gdpPercap:4519.461171},{country:"Kenya",continent:"Africa",lifeExp:54.11,pop:35610177,gdpPercap:1463.249282},{country:"Korea, Dem. Rep.",continent:"Asia",lifeExp:67.297,pop:23301725,gdpPercap:1593.06548},{country:"Korea, Rep.",continent:"Asia",lifeExp:78.623,pop:49044790,gdpPercap:23348.13973},{country:"Kuwait",continent:"Asia",lifeExp:77.588,pop:2505559,gdpPercap:47306.98978},{country:"Lebanon",continent:"Asia",lifeExp:71.993,pop:3921278,gdpPercap:10461.05868},{country:"Lesotho",continent:"Africa",lifeExp:42.592,pop:2012649,gdpPercap:1569.331442},{country:"Liberia",continent:"Africa",lifeExp:45.678,pop:3193942,gdpPercap:414.5073415},{country:"Libya",continent:"Africa",lifeExp:73.952,pop:6036914,gdpPercap:12057.49928},{country:"Madagascar",continent:"Africa",lifeExp:59.443,pop:19167654,gdpPercap:1044.770126},{country:"Malawi",continent:"Africa",lifeExp:48.303,pop:13327079,gdpPercap:759.3499101},{country:"Malaysia",continent:"Asia",lifeExp:74.241,pop:24821286,gdpPercap:12451.6558},{country:"Mali",continent:"Africa",lifeExp:54.467,pop:12031795,gdpPercap:1042.581557},{country:"Mauritania",continent:"Africa",lifeExp:64.164,pop:3270065,gdpPercap:1803.151496},{country:"Mauritius",continent:"Africa",lifeExp:72.801,pop:1250882,gdpPercap:10956.99112},{country:"Mexico",continent:"Americas",lifeExp:76.195,pop:108700891,gdpPercap:11977.57496},{country:"Mongolia",continent:"Asia",lifeExp:66.803,pop:2874127,gdpPercap:3095.772271},{country:"Montenegro",continent:"Europe",lifeExp:74.543,pop:684736,gdpPercap:9253.896111},{country:"Morocco",continent:"Africa",lifeExp:71.164,pop:33757175,gdpPercap:3820.17523},{country:"Mozambique",continent:"Africa",lifeExp:42.082,pop:19951656,gdpPercap:823.6856205},{country:"Myanmar",continent:"Asia",lifeExp:62.069,pop:47761980,gdpPercap:944},{country:"Namibia",continent:"Africa",lifeExp:52.906,pop:2055080,gdpPercap:4811.060429},{country:"Nepal",continent:"Asia",lifeExp:63.785,pop:28901790,gdpPercap:1091.359778},{country:"Netherlands",continent:"Europe",lifeExp:79.762,pop:16570613,gdpPercap:36797.93332},{country:"New Zealand",continent:"Oceania",lifeExp:80.204,pop:4115771,gdpPercap:25185.00911},{country:"Nicaragua",continent:"Americas",lifeExp:72.899,pop:5675356,gdpPercap:2749.320965},{country:"Niger",continent:"Africa",lifeExp:56.867,pop:12894865,gdpPercap:619.6768924},{country:"Nigeria",continent:"Africa",lifeExp:46.859,pop:135031164,gdpPercap:2013.977305},{country:"Norway",continent:"Europe",lifeExp:80.196,pop:4627926,gdpPercap:49357.19017},{country:"Oman",continent:"Asia",lifeExp:75.64,pop:3204897,gdpPercap:22316.19287},{country:"Pakistan",continent:"Asia",lifeExp:65.483,pop:169270617,gdpPercap:2605.94758},{country:"Panama",continent:"Americas",lifeExp:75.537,pop:3242173,gdpPercap:9809.185636},{country:"Paraguay",continent:"Americas",lifeExp:71.752,pop:6667147,gdpPercap:4172.838464},{country:"Peru",continent:"Americas",lifeExp:71.421,pop:28674757,gdpPercap:7408.905561},{country:"Philippines",continent:"Asia",lifeExp:71.688,pop:91077287,gdpPercap:3190.481016},{country:"Poland",continent:"Europe",lifeExp:75.563,pop:38518241,gdpPercap:15389.92468},{country:"Portugal",continent:"Europe",lifeExp:78.098,pop:10642836,gdpPercap:20509.64777},{country:"Puerto Rico",continent:"Americas",lifeExp:78.746,pop:3942491,gdpPercap:19328.70901},{country:"Reunion",continent:"Africa",lifeExp:76.442,pop:798094,gdpPercap:7670.122558},{country:"Romania",continent:"Europe",lifeExp:72.476,pop:22276056,gdpPercap:10808.47561},{country:"Rwanda",continent:"Africa",lifeExp:46.242,pop:8860588,gdpPercap:863.0884639},{country:"Sao Tome and Principe",continent:"Africa",lifeExp:65.528,pop:199579,gdpPercap:1598.435089},{country:"Saudi Arabia",continent:"Asia",lifeExp:72.777,pop:27601038,gdpPercap:21654.83194},{country:"Senegal",continent:"Africa",lifeExp:63.062,pop:12267493,gdpPercap:1712.472136},{country:"Serbia",continent:"Europe",lifeExp:74.002,pop:10150265,gdpPercap:9786.534714},{country:"Sierra Leone",continent:"Africa",lifeExp:42.568,pop:6144562,gdpPercap:862.5407561},{country:"Singapore",continent:"Asia",lifeExp:79.972,pop:4553009,gdpPercap:47143.17964},{country:"Slovak Republic",continent:"Europe",lifeExp:74.663,pop:5447502,gdpPercap:18678.31435},{country:"Slovenia",continent:"Europe",lifeExp:77.926,pop:2009245,gdpPercap:25768.25759},{country:"Somalia",continent:"Africa",lifeExp:48.159,pop:9118773,gdpPercap:926.1410683},{country:"South Africa",continent:"Africa",lifeExp:49.339,pop:43997828,gdpPercap:9269.657808},{country:"Spain",continent:"Europe",lifeExp:80.941,pop:40448191,gdpPercap:28821.0637},{country:"Sri Lanka",continent:"Asia",lifeExp:72.396,pop:20378239,gdpPercap:3970.095407},{country:"Sudan",continent:"Africa",lifeExp:58.556,pop:42292929,gdpPercap:2602.394995},{country:"Swaziland",continent:"Africa",lifeExp:39.613,pop:1133066,gdpPercap:4513.480643},{country:"Sweden",continent:"Europe",lifeExp:80.884,pop:9031088,gdpPercap:33859.74835},{country:"Switzerland",continent:"Europe",lifeExp:81.701,pop:7554661,gdpPercap:37506.41907},{country:"Syria",continent:"Asia",lifeExp:74.143,pop:19314747,gdpPercap:4184.548089},{country:"Taiwan",continent:"Asia",lifeExp:78.4,pop:23174294,gdpPercap:28718.27684},{country:"Tanzania",continent:"Africa",lifeExp:52.517,pop:38139640,gdpPercap:1107.482182},{country:"Thailand",continent:"Asia",lifeExp:70.616,pop:65068149,gdpPercap:7458.396327},{country:"Togo",continent:"Africa",lifeExp:58.42,pop:5701579,gdpPercap:882.9699438},{country:"Trinidad and Tobago",continent:"Americas",lifeExp:69.819,pop:1056608,gdpPercap:18008.50924},{country:"Tunisia",continent:"Africa",lifeExp:73.923,pop:10276158,gdpPercap:7092.923025},{country:"Turkey",continent:"Europe",lifeExp:71.777,pop:71158647,gdpPercap:8458.276384},{country:"Uganda",continent:"Africa",lifeExp:51.542,pop:29170398,gdpPercap:1056.380121},{country:"United Kingdom",continent:"Europe",lifeExp:79.425,pop:60776238,gdpPercap:33203.26128},{country:"United ys",continent:"Americas",lifeExp:78.242,pop:301139947,gdpPercap:42951.65309},{country:"Uruguay",continent:"Americas",lifeExp:76.384,pop:3447496,gdpPercap:10611.46299},{country:"Venezuela",continent:"Americas",lifeExp:73.747,pop:26084662,gdpPercap:11415.80569},{country:"Vietnam",continent:"Asia",lifeExp:74.249,pop:85262356,gdpPercap:2441.576404},{country:"West Bank and Gaza",continent:"Asia",lifeExp:73.422,pop:4018332,gdpPercap:3025.349798},{country:"Yemen, Rep.",continent:"Asia",lifeExp:62.698,pop:22211743,gdpPercap:2280.769906},{country:"Zambia",continent:"Africa",lifeExp:42.384,pop:11746035,gdpPercap:1271.211593},{country:"Zimbabwe",continent:"Africa",lifeExp:43.487,pop:12311143,gdpPercap:469.7092981}],f=t(9086);function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],p=!0,i=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(p=(c=o.next()).done)&&(t.push(c.value),!n||t.length!==n);p=!0);}catch(a){i=!0,r=a}finally{try{p||null==o.return||o.return()}finally{if(i)throw r}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g={top:30,right:30,bottom:50,left:50},y=function(e){var n=e.width,t=e.height,r=e.data,c=(0,i.useRef)(null),o=n-g.right-g.left,a=t-g.top-g.bottom,l=(0,i.useMemo)((function(){var e=x(f.Wem(r.map((function(e){return e.lifeExp}))),2),n=e[0],t=e[1];return f.BYU().domain([n,t]).range([a,0])}),[r,t]),u=(0,i.useMemo)((function(){var e=x(f.Wem(r.map((function(e){return e.gdpPercap}))),2),n=(e[0],e[1]);return f.BYU().domain([0,n]).range([0,o])}),[r,n]);(0,i.useEffect)((function(){var e=f.Ys(c.current);e.selectAll("*").remove();var n=f.LLu(u);e.append("g").attr("transform","translate(0,"+a+")").call(n);var t=f.y4O(l);e.append("g").call(t)}),[u,l,a]);var s=r.map((function(e,n){return(0,p.jsx)("circle",{r:4,cx:u(e.gdpPercap),cy:l(e.lifeExp),opacity:1,stroke:"#9a6fb0",fill:"#9a6fb0",fillOpacity:.7,strokeWidth:1},n)}));return(0,p.jsx)("div",{children:(0,p.jsxs)("svg",{width:n,height:t,style:{display:"inline-block",background:"white"},children:[(0,p.jsx)("g",{width:o,height:a,transform:"translate(".concat([g.left,g.top].join(","),")"),children:s}),(0,p.jsx)("g",{width:o,height:a,ref:c,transform:"translate(".concat([g.left,g.top].join(","),")")})]})})},E=function(e){var n=e.width,t=void 0===n?700:n,i=e.height,r=void 0===i?400:i;return(0,p.jsx)(y,{data:d,width:t,height:r})},h=(0,p.jsxs)("p",{children:["A ",(0,p.jsx)("a",{href:"https://www.data-to-viz.com/graph/scatter.html",children:"scatterplot"})," ","displays the correlation between 2 numeric variables. This page first provides a basic scatterplot example that is pretty close from the"," ",(0,p.jsx)("a",{href:"https://www.d3-graph-gallery.com/graph/scatter_basic.html",children:"d3.js version"}),", except that circle elements are rendered using react. Then it describes how to implement the tricky parts: axis, tooltip, zoom and more."]}),m='\nconst data = [\n  {\n    "country": "Afghanistan",\n    "continent": "Asia",\n    "lifeExp": 43.828,\n    "pop": 31889923,\n    "gdpPercap": 974.5803384\n  },\n  {\n    "country": "Albania",\n    "continent": "Europe",\n    "lifeExp": 76.423,\n    "pop": 3600523,\n    "gdpPercap": 5937.029526\n  },\n  ...\n]\n'.trim();"\n// data is something like [12, 4, 7, 9, ....]\nconst binBuilder = d3\n  .bin()\n  .domain([min, max])\n  .thresholds(yScale.ticks(14)) // how many bins we want?\n  .value((d) => d); // accessor function, just return the value since we're dealing with an array of number\nconst bins = binBuilder(data);\n".trim(),"\nconst areaBuilder = d3\n  .area()\n  .x0((d) => wScale(-d.length))\n  .x1((d) => wScale(d.length))\n  .y((d) => yScale(d.x0))\n  .curve(d3.curveBumpY);\nconst area = areaBuilder(bins);\n".trim();function P(){return(0,p.jsxs)(r.A,{title:"Scatterplot with React",seoDescription:"How to build a violin plot with React and D3.js. A set of re-usable components",children:[(0,p.jsx)(c.Z,{title:"Scatterplot",description:h,chartType:"scatter"}),(0,p.jsxs)(l.U,{title:"The data",startOpen:!0,children:[(0,p.jsx)("p",{children:"The dataset used to build a scatterplot is usually an array of object. For each object, at least 2 properties providing a value for the x and y axis are needed. It usually also have properties that describe the data point."}),(0,p.jsx)(u.d,{code:m}),(0,p.jsxs)("p",{children:[(0,p.jsx)("u",{children:"Note"}),": this section is based on the"," ",(0,p.jsx)("a",{href:"https://www.data-to-viz.com/story/ThreeNum.html",children:"gapminder"})," ","dataset that provides some info like the life expectancy and the population for evere country."]})]}),(0,p.jsxs)(l.U,{title:"Most basic scatterplot",startOpen:!0,children:[(0,p.jsxs)("p",{children:["Use ",(0,p.jsx)("code",{children:"scaleLinear"})," for the scales. Tricky part is to build the axis: can be done with with d3.js or with React. Deserves its own blogpost."]}),(0,p.jsx)(s.$,{VizComponent:E,vizName:"ScatterplotBasic",maxWidth:600,height:500,caption:"Most basic scatterplot built with react and d3.js"})]}),(0,p.jsx)(l.U,{title:"Hover effect",startOpen:!0,children:(0,p.jsx)("p",{children:"TODO"})}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,p.jsx)(o.Z,{chartFamily:"correlation"}),(0,p.jsx)("div",{className:"mt-20"}),(0,p.jsx)(a.Z,{})]})}}},function(e){e.O(0,[34,86,702,774,888,179],(function(){return n=4657,e(e.s=n);var n}));var n=e.O();_N_E=n}]);