(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7247],{8971:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(91373);/**
 * @license lucide-react v0.418.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r.Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},61108:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(91373);/**
 * @license lucide-react v0.418.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r.Z)("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},27319:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/canvas/combining-svg-and-canvas",function(){return t(79511)}])},81122:function(e,n,t){"use strict";t.d(n,{$:function(){return l}});var r=t(85893),i=t(67294),o=t(59973),a=t(80615),c=t(88578),p=t(5);let l=e=>{let{VizComponent:n,vizName:t,height:l=400,maxWidth:s=800,caption:d,fileToOpen:u}=e,[f,x]=(0,i.useState)(!1),g=(0,i.useRef)(null),h=(0,o.B)(g);return(0,r.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:f?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,r.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,r.jsx)(c.X,{vizName:t,fileToOpen:u})}),(0,r.jsx)("div",{className:"flex justify-center mt-2",children:(0,r.jsx)(p.z,{size:"sm",onClick:()=>x(!f),children:"Hide Sandbox"})})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,r.jsx)("div",{style:{height:l,width:"100%",maxWidth:s},ref:g,className:"pointer-events-auto",children:(0,r.jsx)(n,{height:l,width:h.width})})}),(0,r.jsx)(a.Y,{children:d}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(p.z,{size:"sm",onClick:()=>x(!f),children:"Show code"})})]})})}},88578:function(e,n,t){"use strict";t.d(n,{X:function(){return i}});var r=t(85893);t(67294);let i=e=>{let{vizName:n,height:t="500px",fileToOpen:i}=e;return console.log("rerendeeeerrrrr"),(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+n+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split"+(i?"&module=/".concat(i):""),style:{width:"100%",height:t,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},47498:function(e,n,t){"use strict";t.d(n,{v:function(){return s}});var r=t(85893),i=t(7826),o=t(13742),a=t(61108),c=t(67294),p=t(5),l=t(77522);let s=e=>{let{exercises:n,localStorageId:t}=e,[s,d]=(0,c.useState)([]),[u,f]=(0,c.useState)("");return(0,c.useEffect)(()=>{let e=localStorage.getItem(t),r=e?JSON.parse(e):Array(n.length).fill("todo");d(r)},[]),(0,r.jsx)(i.UQ,{value:u,onValueChange:f,type:"single",collapsible:!0,className:"w-full",children:n.map((e,n)=>(0,r.jsxs)(i.Qd,{value:"item-"+n,children:[(0,r.jsx)(i.o4,{className:"no-decoration hover:bg-gray-50",children:(0,r.jsxs)("div",{className:"text-sm flex justify-start gap-2 items-center",children:[(0,r.jsx)("div",{className:(0,l.cn)("text-xs h-6 w-6 flex justify-center items-center rounded-full text-center leading-none","todo"===s[n]?"bg-gray-200":"failed"===s[n]?"bg-red-300":"bg-green-300"),children:(0,r.jsx)("span",{style:{transform:"translateX(1px)"},children:n+1})}),(0,r.jsx)("span",{children:e.title}),"ok"===s[n]&&(0,r.jsx)(o.Z,{size:16,className:"text-green-500"}),"failed"===s[n]&&(0,r.jsx)(a.Z,{size:16,className:"text-red-500"}),"todo"===s[n]&&(0,r.jsx)("span",{className:"text-gray-400 font-thin",children:"ToDo"})]})}),(0,r.jsxs)(i.vF,{children:[e.content,(0,r.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,r.jsx)(p.z,{variant:"outline",onClick:()=>{let e=[...s];e[n]="failed",d(e),localStorage.setItem(t,JSON.stringify(e)),f("")},children:"Failed"}),(0,r.jsxs)(p.z,{onClick:()=>{let e=[...s];e[n]="ok",d(e),localStorage.setItem(t,JSON.stringify(e)),f("")},children:["Done",(0,r.jsx)("span",{className:"ml-2",children:"\uD83C\uDF89"})]})]})]})]}))})}},41843:function(e,n,t){"use strict";t.d(n,{p:function(){return l}});var r=t(85893),i=t(49700),o=t(63476),a=t(17414),c=t(41664),p=t.n(c);let l=e=>{let{children:n,title:t,seoDescription:c,previousTocItem:l,nextTocItem:s}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:t,seoDescription:c}),(0,r.jsx)(i.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:n}),(0,r.jsxs)("div",{className:"flex justify-center items-center space-x-6 my-24 py-12  bg-muted/50",children:[l?(0,r.jsxs)(p(),{href:l.link,className:"text-gray-500 no-underline flex flex-col justify-start items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted ",children:[(0,r.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text",children:"← Previous"}),(0,r.jsx)("p",{children:l.name})]}):(0,r.jsx)("div",{className:"w-96"}),s&&(0,r.jsxs)(p(),{href:s.link,className:"text-gray-500 no-underline flex flex-col justify-start w-96 h-32 border-l border-black  p-8 hover:bg-muted ",children:[(0,r.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text",children:"Next →"}),(0,r.jsx)("p",{children:s.name})]})]}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(o.Z,{})})]})}},80615:function(e,n,t){"use strict";t.d(n,{Y:function(){return i}});var r=t(85893);let i=e=>{let{children:n}=e;return(0,r.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:n})}},3572:function(e,n,t){"use strict";t.d(n,{d:function(){return s}});var r=t(85893),i=t(32581),o=t(15660),a=t.n(o),c=t(67294),p=t(45993),l=t.n(p);let s=e=>{let{code:n}=e,[t,o]=(0,c.useState)(!1),p=(0,c.useRef)(null);(0,c.useEffect)(()=>{p.current&&a().highlightElement(p.current)},[p,n]);let s=(0,r.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(n),o(!0)},className:l().codeChunckCopyButton,children:t?"Copied":(0,r.jsx)(i.Z,{size:14,style:{padding:0}})});return(0,r.jsxs)("div",{className:"mb-6 relative",children:[(0,r.jsx)("pre",{className:"rounded-md line-numbers",children:(0,r.jsx)("code",{ref:p,className:"language-javascript",children:n})}),(0,r.jsx)("div",{className:l().copyButtonContainer,children:s})]})}},7826:function(e,n,t){"use strict";t.d(n,{Qd:function(){return l},UQ:function(){return p},o4:function(){return s},vF:function(){return d}});var r=t(85893),i=t(67294),o=t(47398),a=t(8971),c=t(77522);let p=o.fC,l=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)(o.ck,{ref:n,className:(0,c.cn)("border-b",t),...i})});l.displayName="AccordionItem";let s=i.forwardRef((e,n)=>{let{className:t,children:i,...p}=e;return(0,r.jsx)(o.h4,{className:"flex mt-0 pb-0 font-normal",children:(0,r.jsxs)(o.xz,{ref:n,className:(0,c.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...p,children:[i,(0,r.jsx)(a.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});s.displayName=o.xz.displayName;let d=i.forwardRef((e,n)=>{let{className:t,children:i,...a}=e;return(0,r.jsx)(o.VY,{ref:n,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...a,children:(0,r.jsx)("div",{className:(0,c.cn)("pb-4 pt-0",t),children:i})})});d.displayName=o.VY.displayName},59973:function(e,n,t){"use strict";t.d(n,{B:function(){return i}});var r=t(67294);let i=e=>{let n=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[t,i]=(0,r.useState)(n),o=()=>{i(n())};return(0,r.useEffect)(()=>(window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)),[]),(0,r.useEffect)(()=>{o()},[e]),t}},79511:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var r=t(85893),i=t(67294),o=t(43710),a=t(41843),c=t(11236),p=t(41664),l=t.n(p),s=t(47498),d=t(81122);let u=[{country:"Afghanistan",continent:"Asia",lifeExp:43.828,pop:31889923,gdpPercap:974.5803384},{country:"Albania",continent:"Europe",lifeExp:76.423,pop:3600523,gdpPercap:5937.029526},{country:"Algeria",continent:"Africa",lifeExp:72.301,pop:33333216,gdpPercap:6223.367465},{country:"Angola",continent:"Africa",lifeExp:42.731,pop:12420476,gdpPercap:4797.231267},{country:"Argentina",continent:"Americas",lifeExp:75.32,pop:40301927,gdpPercap:12779.37964},{country:"Australia",continent:"Oceania",lifeExp:81.235,pop:20434176,gdpPercap:34435.36744},{country:"Austria",continent:"Europe",lifeExp:79.829,pop:8199783,gdpPercap:36126.4927},{country:"Bahrain",continent:"Asia",lifeExp:75.635,pop:708573,gdpPercap:29796.04834},{country:"Bangladesh",continent:"Asia",lifeExp:64.062,pop:150448339,gdpPercap:1391.253792},{country:"Belgium",continent:"Europe",lifeExp:79.441,pop:10392226,gdpPercap:33692.60508},{country:"Benin",continent:"Africa",lifeExp:56.728,pop:8078314,gdpPercap:1441.284873},{country:"Bolivia",continent:"Americas",lifeExp:65.554,pop:9119152,gdpPercap:3822.137084},{country:"Bosnia and Herzegovina",continent:"Europe",lifeExp:74.852,pop:4552198,gdpPercap:7446.298803},{country:"Botswana",continent:"Africa",lifeExp:50.728,pop:1639131,gdpPercap:12569.85177},{country:"Brazil",continent:"Americas",lifeExp:72.39,pop:190010647,gdpPercap:9065.800825},{country:"Bulgaria",continent:"Europe",lifeExp:73.005,pop:7322858,gdpPercap:10680.79282},{country:"Burkina Faso",continent:"Africa",lifeExp:52.295,pop:14326203,gdpPercap:1217.032994},{country:"Burundi",continent:"Africa",lifeExp:49.58,pop:8390505,gdpPercap:430.0706916},{country:"Cambodia",continent:"Asia",lifeExp:59.723,pop:14131858,gdpPercap:1713.778686},{country:"Cameroon",continent:"Africa",lifeExp:50.43,pop:17696293,gdpPercap:2042.09524},{country:"Canada",continent:"Americas",lifeExp:80.653,pop:33390141,gdpPercap:36319.23501},{country:"Central African Republic",continent:"Africa",lifeExp:44.741,pop:4369038,gdpPercap:706.016537},{country:"Chad",continent:"Africa",lifeExp:50.651,pop:10238807,gdpPercap:1704.063724},{country:"Chile",continent:"Americas",lifeExp:78.553,pop:16284741,gdpPercap:13171.63885},{country:"China",continent:"Asia",lifeExp:72.961,pop:1318683096,gdpPercap:4959.114854},{country:"Colombia",continent:"Americas",lifeExp:72.889,pop:44227550,gdpPercap:7006.580419},{country:"Comoros",continent:"Africa",lifeExp:65.152,pop:710960,gdpPercap:986.1478792},{country:"Congo, Dem. Rep.",continent:"Africa",lifeExp:46.462,pop:64606759,gdpPercap:277.5518587},{country:"Congo, Rep.",continent:"Africa",lifeExp:55.322,pop:3800610,gdpPercap:3632.557798},{country:"Costa Rica",continent:"Americas",lifeExp:78.782,pop:4133884,gdpPercap:9645.06142},{country:"Cote d'Ivoire",continent:"Africa",lifeExp:48.328,pop:18013409,gdpPercap:1544.750112},{country:"Croatia",continent:"Europe",lifeExp:75.748,pop:4493312,gdpPercap:14619.22272},{country:"Cuba",continent:"Americas",lifeExp:78.273,pop:11416987,gdpPercap:8948.102923},{country:"Czech Republic",continent:"Europe",lifeExp:76.486,pop:10228744,gdpPercap:22833.30851},{country:"Denmark",continent:"Europe",lifeExp:78.332,pop:5468120,gdpPercap:35278.41874},{country:"Djibouti",continent:"Africa",lifeExp:54.791,pop:496374,gdpPercap:2082.481567},{country:"Dominican Republic",continent:"Americas",lifeExp:72.235,pop:9319622,gdpPercap:6025.374752},{country:"Ecuador",continent:"Americas",lifeExp:74.994,pop:13755680,gdpPercap:6873.262326},{country:"Egypt",continent:"Africa",lifeExp:71.338,pop:80264543,gdpPercap:5581.180998},{country:"El Salvador",continent:"Americas",lifeExp:71.878,pop:6939688,gdpPercap:5728.353514},{country:"Equatorial Guinea",continent:"Africa",lifeExp:51.579,pop:551201,gdpPercap:12154.08975},{country:"Eritrea",continent:"Africa",lifeExp:58.04,pop:4906585,gdpPercap:641.3695236},{country:"Ethiopia",continent:"Africa",lifeExp:52.947,pop:76511887,gdpPercap:690.8055759},{country:"Finland",continent:"Europe",lifeExp:79.313,pop:5238460,gdpPercap:33207.0844},{country:"France",continent:"Europe",lifeExp:80.657,pop:61083916,gdpPercap:30470.0167},{country:"Gabon",continent:"Africa",lifeExp:56.735,pop:1454867,gdpPercap:13206.48452},{country:"Gambia",continent:"Africa",lifeExp:59.448,pop:1688359,gdpPercap:752.7497265},{country:"Germany",continent:"Europe",lifeExp:79.406,pop:82400996,gdpPercap:32170.37442},{country:"Ghana",continent:"Africa",lifeExp:60.022,pop:22873338,gdpPercap:1327.60891},{country:"Greece",continent:"Europe",lifeExp:79.483,pop:10706290,gdpPercap:27538.41188},{country:"Guatemala",continent:"Americas",lifeExp:70.259,pop:12572928,gdpPercap:5186.050003},{country:"Guinea",continent:"Africa",lifeExp:56.007,pop:9947814,gdpPercap:942.6542111},{country:"Guinea-Bissau",continent:"Africa",lifeExp:46.388,pop:1472041,gdpPercap:579.231743},{country:"Haiti",continent:"Americas",lifeExp:60.916,pop:8502814,gdpPercap:1201.637154},{country:"Honduras",continent:"Americas",lifeExp:70.198,pop:7483763,gdpPercap:3548.330846},{country:"Hong Kong, China",continent:"Asia",lifeExp:82.208,pop:6980412,gdpPercap:39724.97867},{country:"Hungary",continent:"Europe",lifeExp:73.338,pop:9956108,gdpPercap:18008.94444},{country:"Iceland",continent:"Europe",lifeExp:81.757,pop:301931,gdpPercap:36180.78919},{country:"India",continent:"Asia",lifeExp:64.698,pop:1110396331,gdpPercap:2452.210407},{country:"Indonesia",continent:"Asia",lifeExp:70.65,pop:223547e3,gdpPercap:3540.651564},{country:"Iran",continent:"Asia",lifeExp:70.964,pop:69453570,gdpPercap:11605.71449},{country:"Iraq",continent:"Asia",lifeExp:59.545,pop:27499638,gdpPercap:4471.061906},{country:"Ireland",continent:"Europe",lifeExp:78.885,pop:4109086,gdpPercap:40675.99635},{country:"Israel",continent:"Asia",lifeExp:80.745,pop:6426679,gdpPercap:25523.2771},{country:"Italy",continent:"Europe",lifeExp:80.546,pop:58147733,gdpPercap:28569.7197},{country:"Jamaica",continent:"Americas",lifeExp:72.567,pop:2780132,gdpPercap:7320.880262},{country:"Japan",continent:"Asia",lifeExp:82.603,pop:127467972,gdpPercap:31656.06806},{country:"Jordan",continent:"Asia",lifeExp:72.535,pop:6053193,gdpPercap:4519.461171},{country:"Kenya",continent:"Africa",lifeExp:54.11,pop:35610177,gdpPercap:1463.249282},{country:"Korea, Dem. Rep.",continent:"Asia",lifeExp:67.297,pop:23301725,gdpPercap:1593.06548},{country:"Korea, Rep.",continent:"Asia",lifeExp:78.623,pop:49044790,gdpPercap:23348.13973},{country:"Kuwait",continent:"Asia",lifeExp:77.588,pop:2505559,gdpPercap:47306.98978},{country:"Lebanon",continent:"Asia",lifeExp:71.993,pop:3921278,gdpPercap:10461.05868},{country:"Lesotho",continent:"Africa",lifeExp:42.592,pop:2012649,gdpPercap:1569.331442},{country:"Liberia",continent:"Africa",lifeExp:45.678,pop:3193942,gdpPercap:414.5073415},{country:"Libya",continent:"Africa",lifeExp:73.952,pop:6036914,gdpPercap:12057.49928},{country:"Madagascar",continent:"Africa",lifeExp:59.443,pop:19167654,gdpPercap:1044.770126},{country:"Malawi",continent:"Africa",lifeExp:48.303,pop:13327079,gdpPercap:759.3499101},{country:"Malaysia",continent:"Asia",lifeExp:74.241,pop:24821286,gdpPercap:12451.6558},{country:"Mali",continent:"Africa",lifeExp:54.467,pop:12031795,gdpPercap:1042.581557},{country:"Mauritania",continent:"Africa",lifeExp:64.164,pop:3270065,gdpPercap:1803.151496},{country:"Mauritius",continent:"Africa",lifeExp:72.801,pop:1250882,gdpPercap:10956.99112},{country:"Mexico",continent:"Americas",lifeExp:76.195,pop:108700891,gdpPercap:11977.57496},{country:"Mongolia",continent:"Asia",lifeExp:66.803,pop:2874127,gdpPercap:3095.772271},{country:"Montenegro",continent:"Europe",lifeExp:74.543,pop:684736,gdpPercap:9253.896111},{country:"Morocco",continent:"Africa",lifeExp:71.164,pop:33757175,gdpPercap:3820.17523},{country:"Mozambique",continent:"Africa",lifeExp:42.082,pop:19951656,gdpPercap:823.6856205},{country:"Myanmar",continent:"Asia",lifeExp:62.069,pop:47761980,gdpPercap:944},{country:"Namibia",continent:"Africa",lifeExp:52.906,pop:2055080,gdpPercap:4811.060429},{country:"Nepal",continent:"Asia",lifeExp:63.785,pop:28901790,gdpPercap:1091.359778},{country:"Netherlands",continent:"Europe",lifeExp:79.762,pop:16570613,gdpPercap:36797.93332},{country:"New Zealand",continent:"Oceania",lifeExp:80.204,pop:4115771,gdpPercap:25185.00911},{country:"Nicaragua",continent:"Americas",lifeExp:72.899,pop:5675356,gdpPercap:2749.320965},{country:"Niger",continent:"Africa",lifeExp:56.867,pop:12894865,gdpPercap:619.6768924},{country:"Nigeria",continent:"Africa",lifeExp:46.859,pop:135031164,gdpPercap:2013.977305},{country:"Norway",continent:"Europe",lifeExp:80.196,pop:4627926,gdpPercap:49357.19017},{country:"Oman",continent:"Asia",lifeExp:75.64,pop:3204897,gdpPercap:22316.19287},{country:"Pakistan",continent:"Asia",lifeExp:65.483,pop:169270617,gdpPercap:2605.94758},{country:"Panama",continent:"Americas",lifeExp:75.537,pop:3242173,gdpPercap:9809.185636},{country:"Paraguay",continent:"Americas",lifeExp:71.752,pop:6667147,gdpPercap:4172.838464},{country:"Peru",continent:"Americas",lifeExp:71.421,pop:28674757,gdpPercap:7408.905561},{country:"Philippines",continent:"Asia",lifeExp:71.688,pop:91077287,gdpPercap:3190.481016},{country:"Poland",continent:"Europe",lifeExp:75.563,pop:38518241,gdpPercap:15389.92468},{country:"Portugal",continent:"Europe",lifeExp:78.098,pop:10642836,gdpPercap:20509.64777},{country:"Puerto Rico",continent:"Americas",lifeExp:78.746,pop:3942491,gdpPercap:19328.70901},{country:"Reunion",continent:"Africa",lifeExp:76.442,pop:798094,gdpPercap:7670.122558},{country:"Romania",continent:"Europe",lifeExp:72.476,pop:22276056,gdpPercap:10808.47561},{country:"Rwanda",continent:"Africa",lifeExp:46.242,pop:8860588,gdpPercap:863.0884639},{country:"Sao Tome and Principe",continent:"Africa",lifeExp:65.528,pop:199579,gdpPercap:1598.435089},{country:"Saudi Arabia",continent:"Asia",lifeExp:72.777,pop:27601038,gdpPercap:21654.83194},{country:"Senegal",continent:"Africa",lifeExp:63.062,pop:12267493,gdpPercap:1712.472136},{country:"Serbia",continent:"Europe",lifeExp:74.002,pop:10150265,gdpPercap:9786.534714},{country:"Sierra Leone",continent:"Africa",lifeExp:42.568,pop:6144562,gdpPercap:862.5407561},{country:"Singapore",continent:"Asia",lifeExp:79.972,pop:4553009,gdpPercap:47143.17964},{country:"Slovak Republic",continent:"Europe",lifeExp:74.663,pop:5447502,gdpPercap:18678.31435},{country:"Slovenia",continent:"Europe",lifeExp:77.926,pop:2009245,gdpPercap:25768.25759},{country:"Somalia",continent:"Africa",lifeExp:48.159,pop:9118773,gdpPercap:926.1410683},{country:"South Africa",continent:"Africa",lifeExp:49.339,pop:43997828,gdpPercap:9269.657808},{country:"Spain",continent:"Europe",lifeExp:80.941,pop:40448191,gdpPercap:28821.0637},{country:"Sri Lanka",continent:"Asia",lifeExp:72.396,pop:20378239,gdpPercap:3970.095407},{country:"Sudan",continent:"Africa",lifeExp:58.556,pop:42292929,gdpPercap:2602.394995},{country:"Swaziland",continent:"Africa",lifeExp:39.613,pop:1133066,gdpPercap:4513.480643},{country:"Sweden",continent:"Europe",lifeExp:80.884,pop:9031088,gdpPercap:33859.74835},{country:"Switzerland",continent:"Europe",lifeExp:81.701,pop:7554661,gdpPercap:37506.41907},{country:"Syria",continent:"Asia",lifeExp:74.143,pop:19314747,gdpPercap:4184.548089},{country:"Taiwan",continent:"Asia",lifeExp:78.4,pop:23174294,gdpPercap:28718.27684},{country:"Tanzania",continent:"Africa",lifeExp:52.517,pop:38139640,gdpPercap:1107.482182},{country:"Thailand",continent:"Asia",lifeExp:70.616,pop:65068149,gdpPercap:7458.396327},{country:"Togo",continent:"Africa",lifeExp:58.42,pop:5701579,gdpPercap:882.9699438},{country:"Trinidad and Tobago",continent:"Americas",lifeExp:69.819,pop:1056608,gdpPercap:18008.50924},{country:"Tunisia",continent:"Africa",lifeExp:73.923,pop:10276158,gdpPercap:7092.923025},{country:"Turkey",continent:"Europe",lifeExp:71.777,pop:71158647,gdpPercap:8458.276384},{country:"Uganda",continent:"Africa",lifeExp:51.542,pop:29170398,gdpPercap:1056.380121},{country:"United Kingdom",continent:"Europe",lifeExp:79.425,pop:60776238,gdpPercap:33203.26128},{country:"United ys",continent:"Americas",lifeExp:78.242,pop:301139947,gdpPercap:42951.65309},{country:"Uruguay",continent:"Americas",lifeExp:76.384,pop:3447496,gdpPercap:10611.46299},{country:"Venezuela",continent:"Americas",lifeExp:73.747,pop:26084662,gdpPercap:11415.80569},{country:"Vietnam",continent:"Asia",lifeExp:74.249,pop:85262356,gdpPercap:2441.576404},{country:"West Bank and Gaza",continent:"Asia",lifeExp:73.422,pop:4018332,gdpPercap:3025.349798},{country:"Yemen, Rep.",continent:"Asia",lifeExp:62.698,pop:22211743,gdpPercap:2280.769906},{country:"Zambia",continent:"Africa",lifeExp:42.384,pop:11746035,gdpPercap:1271.211593},{country:"Zimbabwe",continent:"Africa",lifeExp:43.487,pop:12311143,gdpPercap:469.7092981}];var f=t(43950);let x=e=>{let{yScale:n,pixelsPerTick:t,width:o}=e,a=n.range(),c=(0,i.useMemo)(()=>{let e=a[0]-a[1];return n.ticks(Math.floor(e/t)).map(e=>({value:e,yOffset:n(e)}))},[n]);return(0,r.jsx)(r.Fragment,{children:c.map(e=>{let{value:n,yOffset:t}=e;return(0,r.jsxs)("g",{transform:"translate(0, ".concat(t,")"),shapeRendering:"crispEdges",children:[(0,r.jsx)("line",{x1:-10,x2:o+10,stroke:"#D2D7D3",strokeWidth:.5}),(0,r.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateX(-20px)",fill:"#D2D7D3"},children:n},n)]},n)})})},g=e=>{let{xScale:n,pixelsPerTick:t,height:o}=e,a=n.range(),c=(0,i.useMemo)(()=>{let e=a[1]-a[0];return n.ticks(Math.floor(e/t)).map(e=>({value:e,xOffset:n(e)}))},[n]);return(0,r.jsx)(r.Fragment,{children:c.map(e=>{let{value:n,xOffset:t}=e;return(0,r.jsxs)("g",{transform:"translate(".concat(t,", 0)"),shapeRendering:"crispEdges",children:[(0,r.jsx)("line",{y1:10,y2:-o-10,stroke:"#D2D7D3",strokeWidth:.5}),(0,r.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateY(20px)",fill:"#D2D7D3"},children:n},n)]},n)})})},h={top:30,right:30,bottom:80,left:100},y=e=>{let{width:n,height:t,data:o}=e,a=n-h.right-h.left,c=t-h.top-h.bottom,[p,l]=f.Wem(o.map(e=>e.lifeExp)),s=f.BYU().domain([p,l]).range([c,0]).nice(),d=f.Fp7(o.map(e=>e.gdpPercap)),u=f.BYU().domain([0,d]).range([0,a]).nice(),y=o.map(e=>e.continent).filter((e,n,t)=>t.indexOf(e)==n),m=f.PKp().domain(y).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]),E=(0,i.useMemo)(()=>{let[e,n]=f.Wem(o.map(e=>e.pop));return f.PUr().domain([e,n]).range([4,40])},[o,n]),P=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=P.current;if(!e)return;let r=e.getContext("2d");r.clearRect(0,0,n,t),o.forEach(e=>{r.beginPath(),r.arc(u(e.gdpPercap),s(e.lifeExp),E(e.pop),0,2*Math.PI),r.globalAlpha=.5,r.fillStyle=m(e.continent),r.fill()})},[o,u,s,n,t]),(0,r.jsx)("div",{style:{position:"relative"},children:(0,r.jsxs)("div",{style:{transform:"translate(".concat(h.left,"px, ").concat(h.top,"px)"),width:a,height:c},children:[(0,r.jsxs)("svg",{width:a,height:c,style:{position:"absolute",top:0,left:0,overflow:"visible"},children:[(0,r.jsx)(x,{yScale:s,pixelsPerTick:40,width:a}),(0,r.jsx)("g",{transform:"translate(0, ".concat(c,")"),children:(0,r.jsx)(g,{xScale:u,pixelsPerTick:40,height:c})})]}),(0,r.jsx)("canvas",{style:{position:"relative"},ref:P,width:a,height:c})]})})},m=e=>{let{width:n=700,height:t=400}=e;return(0,r.jsx)(y,{data:u,width:n,height:t})};var E=t(80615),P=t(3572);function b(){let e=c.Y.find(e=>"/course/canvas/combining-svg-and-canvas"===e.link);return e?(0,r.jsxs)(a.p,{title:e.name,seoDescription:"",nextTocItem:c.Y.find(e=>"/course/canvas/svg-path-in-canvas"===e.link),previousTocItem:c.Y.find(e=>"/course/canvas/drawing-shapes-with-canvas"===e.link),children:[(0,r.jsx)(o.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,selectedLesson:e,description:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["When displaying 100,000 circles in a scatterplot, using canvas is"," ",(0,r.jsx)("b",{children:"essential for performance"}),"."]}),(0,r.jsxs)("p",{children:["However, SVG is still ideal for axes and lighter graphical elements. Let’s explore how to ",(0,r.jsx)("b",{children:"combine"})," SVG and canvas effectively!"]})]})}),(0,r.jsx)("h2",{children:"\uD83C\uDF54 Stacking Canvas and SVG"}),(0,r.jsxs)("p",{children:["In the previous lesson, we learned how to loop through a dataset and render a circle for each item. This is very close to creating a"," ",(0,r.jsx)(l(),{href:"/bubble-plot",children:"bubble chart"}),"! \uD83C\uDF89"]}),(0,r.jsxs)("p",{children:["In earlier modules, we explored how to"," ",(0,r.jsx)(l(),{href:"/course/axis/margin-and-translation",children:"add margins"})," ","around the chart area and created"," ",(0,r.jsx)(l(),{href:"/course/axis/bottom-axis",children:"reusable axis"})," components to define the x and y scales."]}),(0,r.jsxs)("p",{children:["The great news is that we can seamlessly combine both"," ",(0,r.jsx)("code",{children:"canvas"})," and ",(0,r.jsx)("code",{children:"SVG"}),", since, at the core, they're both HTML elements!"]}),(0,r.jsx)("p",{children:(0,r.jsx)("br",{})}),(0,r.jsxs)("center",{children:[(0,r.jsx)("img",{src:"/excalidraw/canvas-axis-layers.png",width:550}),(0,r.jsx)(E.Y,{children:"How to overlap SVG and Canvas layers to create a bubble plot."})]}),(0,r.jsx)("p",{children:(0,r.jsx)("br",{})}),(0,r.jsx)("h2",{children:"\uD83D\uDD0E How your DOM will look like"}),(0,r.jsx)("p",{children:"Below is some pseudocode demonstrating the JSX structure of the graph component."}),(0,r.jsxs)("p",{children:["Essentially, your SVG and canvas elements need to be ",(0,r.jsx)("b",{children:"absolutely"})," ","positioned (using ",(0,r.jsx)("code",{children:"position: absolute"}),") to stack correctly on top of each other."]}),(0,r.jsxs)("p",{children:["A key point to remember is that absolutely positioned elements are positioned relative to the nearest positioned ancestor. So, make sure the parent ",(0,r.jsx)("code",{children:"div"})," is set to ",(0,r.jsx)("code",{children:"position: relative"}),", or the positioning won’t work as expected."]}),(0,r.jsx)(P.d,{code:"\n{/* Parent div */}\n<div style={{ position: 'relative' }}>\n\n  {/* Bounds div */}\n  <div\n    style={{\n      transform: ...translate for margins,\n      width: boundsWidth,\n      height: boundsHeight,\n    }}\n  >\n\n      {/* Axes */}\n      <svg\n        width={boundsWidth}\n        height={boundsHeight}\n        style={{ position: 'absolute', top: 0, left: 0 }}\n      >\n        <AxisLeft yScale={yScale} pixelsPerTick={40} width={boundsWidth} />\n        <g transform={...translate to bottom}>\n          <AxisBottom xScale={xScale} pixelsPerTick={40} height={boundsHeight}/>\n        </g>\n      </svg>\n\n      {/* Canvas is for the circles */}\n      <canvas\n        style={{ position: 'relative' }}\n        ref={canvasRef}\n        width={boundsWidth}\n        height={boundsHeight}\n      />\n  </div>\n</div>\n      "}),(0,r.jsx)("h2",{children:"Application: bubble plot"}),(0,r.jsxs)("p",{children:["Here's an example of a ",(0,r.jsx)(l(),{href:"/bubble-plot",children:"bubble plot"})," ","created with SVG and React! Take a moment to review the code and ensure you fully understand each part."]}),(0,r.jsx)(d.$,{vizName:"BubblePlotCanvas",VizComponent:m,height:600,maxWidth:600,caption:"Your fist bubble chart using canvas (for circles) and SVG (for axes)"}),(0,r.jsx)("h2",{children:"Your turn!"}),(0,r.jsx)(s.v,{localStorageId:e.link,exercises:[{title:(0,r.jsx)("span",{children:"Your own bubble chart"}),content:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Here is a simple dataset:"}),(0,r.jsx)(P.d,{code:"\nconst data = [\n  {x: 12, y: 99},\n  {x: 22, y: 9},\n  {x: 2, y: 89},\n  {x: 98, y: 34},\n  {x: 76, y: 22},\n]\n              ".trim()}),(0,r.jsxs)("p",{children:["Create a very simple scatterplot that represents this dataset, with a ",(0,r.jsx)("code",{children:"x"})," and and a ",(0,r.jsx)("code",{children:"y"})," axis."]})]})}]})]}):null}},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},47398:function(e,n,t){"use strict";t.d(n,{VY:function(){return ea},h4:function(){return ei},ck:function(){return er},fC:function(){return et},xz:function(){return eo}});var r=t(67294),i=t(25360),o=t(65936),a=t(28771),c=t(36206),p=t(77342),l=t(75320),s=t(9981),d=t(29115),u=t(91276),f=t(85893),x="Collapsible",[g,h]=(0,i.b)(x),[y,m]=g(x),E=r.forwardRef((e,n)=>{let{__scopeCollapsible:t,open:i,defaultOpen:o,disabled:a,onOpenChange:c,...s}=e,[d=!1,x]=(0,p.T)({prop:i,defaultProp:o,onChange:c});return(0,f.jsx)(y,{scope:t,disabled:a,contentId:(0,u.M)(),open:d,onOpenToggle:r.useCallback(()=>x(e=>!e),[x]),children:(0,f.jsx)(l.WV.div,{"data-state":w(d),"data-disabled":a?"":void 0,...s,ref:n})})});E.displayName=x;var P="CollapsibleTrigger",b=r.forwardRef((e,n)=>{let{__scopeCollapsible:t,...r}=e,i=m(P,t);return(0,f.jsx)(l.WV.button,{type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":w(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled,...r,ref:n,onClick:(0,c.M)(e.onClick,i.onOpenToggle)})});b.displayName=P;var v="CollapsibleContent",j=r.forwardRef((e,n)=>{let{forceMount:t,...r}=e,i=m(v,e.__scopeCollapsible);return(0,f.jsx)(d.z,{present:t||i.open,children:({present:e})=>(0,f.jsx)(A,{...r,ref:n,present:e})})});j.displayName=v;var A=r.forwardRef((e,n)=>{let{__scopeCollapsible:t,present:i,children:o,...c}=e,p=m(v,t),[d,u]=r.useState(i),x=r.useRef(null),g=(0,a.e)(n,x),h=r.useRef(0),y=h.current,E=r.useRef(0),P=E.current,b=p.open||d,j=r.useRef(b),A=r.useRef();return r.useEffect(()=>{let e=requestAnimationFrame(()=>j.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,s.b)(()=>{let e=x.current;if(e){A.current=A.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let n=e.getBoundingClientRect();h.current=n.height,E.current=n.width,j.current||(e.style.transitionDuration=A.current.transitionDuration,e.style.animationName=A.current.animationName),u(i)}},[p.open,i]),(0,f.jsx)(l.WV.div,{"data-state":w(p.open),"data-disabled":p.disabled?"":void 0,id:p.contentId,hidden:!b,...c,ref:g,style:{"--radix-collapsible-content-height":y?`${y}px`:void 0,"--radix-collapsible-content-width":P?`${P}px`:void 0,...e.style},children:b&&o})});function w(e){return e?"open":"closed"}var N=t(78990),k="Accordion",C=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[S,R,D]=(0,o.B)(k),[z,I]=(0,i.b)(k,[D,h]),T=h(),_=r.forwardRef((e,n)=>{let{type:t,...r}=e;return(0,f.jsx)(S.Provider,{scope:e.__scopeAccordion,children:"multiple"===t?(0,f.jsx)(W,{...r,ref:n}):(0,f.jsx)(O,{...r,ref:n})})});_.displayName=k;var[B,M]=z(k),[H,V]=z(k,{collapsible:!1}),O=r.forwardRef((e,n)=>{let{value:t,defaultValue:i,onValueChange:o=()=>{},collapsible:a=!1,...c}=e,[l,s]=(0,p.T)({prop:t,defaultProp:i,onChange:o});return(0,f.jsx)(B,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:s,onItemClose:r.useCallback(()=>a&&s(""),[a,s]),children:(0,f.jsx)(H,{scope:e.__scopeAccordion,collapsible:a,children:(0,f.jsx)(L,{...c,ref:n})})})}),W=r.forwardRef((e,n)=>{let{value:t,defaultValue:i,onValueChange:o=()=>{},...a}=e,[c=[],l]=(0,p.T)({prop:t,defaultProp:i,onChange:o}),s=r.useCallback(e=>l((n=[])=>[...n,e]),[l]),d=r.useCallback(e=>l((n=[])=>n.filter(n=>n!==e)),[l]);return(0,f.jsx)(B,{scope:e.__scopeAccordion,value:c,onItemOpen:s,onItemClose:d,children:(0,f.jsx)(H,{scope:e.__scopeAccordion,collapsible:!0,children:(0,f.jsx)(L,{...a,ref:n})})})}),[G,F]=z(k),L=r.forwardRef((e,n)=>{let{__scopeAccordion:t,disabled:i,dir:o,orientation:p="vertical",...s}=e,d=r.useRef(null),u=(0,a.e)(d,n),x=R(t),g=(0,N.gm)(o),h="ltr"===g,y=(0,c.M)(e.onKeyDown,e=>{if(!C.includes(e.key))return;let n=e.target,t=x().filter(e=>!e.ref.current?.disabled),r=t.findIndex(e=>e.ref.current===n),i=t.length;if(-1===r)return;e.preventDefault();let o=r,a=i-1,c=()=>{(o=r+1)>a&&(o=0)},l=()=>{(o=r-1)<0&&(o=a)};switch(e.key){case"Home":o=0;break;case"End":o=a;break;case"ArrowRight":"horizontal"===p&&(h?c():l());break;case"ArrowDown":"vertical"===p&&c();break;case"ArrowLeft":"horizontal"===p&&(h?l():c());break;case"ArrowUp":"vertical"===p&&l()}let s=o%i;t[s].ref.current?.focus()});return(0,f.jsx)(G,{scope:t,disabled:i,direction:o,orientation:p,children:(0,f.jsx)(S.Slot,{scope:t,children:(0,f.jsx)(l.WV.div,{...s,"data-orientation":p,ref:u,onKeyDown:i?void 0:y})})})}),Y="AccordionItem",[Z,U]=z(Y),K=r.forwardRef((e,n)=>{let{__scopeAccordion:t,value:r,...i}=e,o=F(Y,t),a=M(Y,t),c=T(t),p=(0,u.M)(),l=r&&a.value.includes(r)||!1,s=o.disabled||e.disabled;return(0,f.jsx)(Z,{scope:t,open:l,disabled:s,triggerId:p,children:(0,f.jsx)(E,{"data-orientation":o.orientation,"data-state":en(l),...c,...i,ref:n,disabled:s,open:l,onOpenChange:e=>{e?a.onItemOpen(r):a.onItemClose(r)}})})});K.displayName=Y;var X="AccordionHeader",J=r.forwardRef((e,n)=>{let{__scopeAccordion:t,...r}=e,i=F(k,t),o=U(X,t);return(0,f.jsx)(l.WV.h3,{"data-orientation":i.orientation,"data-state":en(o.open),"data-disabled":o.disabled?"":void 0,...r,ref:n})});J.displayName=X;var q="AccordionTrigger",Q=r.forwardRef((e,n)=>{let{__scopeAccordion:t,...r}=e,i=F(k,t),o=U(q,t),a=V(q,t),c=T(t);return(0,f.jsx)(S.ItemSlot,{scope:t,children:(0,f.jsx)(b,{"aria-disabled":o.open&&!a.collapsible||void 0,"data-orientation":i.orientation,id:o.triggerId,...c,...r,ref:n})})});Q.displayName=q;var $="AccordionContent",ee=r.forwardRef((e,n)=>{let{__scopeAccordion:t,...r}=e,i=F(k,t),o=U($,t),a=T(t);return(0,f.jsx)(j,{role:"region","aria-labelledby":o.triggerId,"data-orientation":i.orientation,...a,...r,ref:n,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function en(e){return e?"open":"closed"}ee.displayName=$;var et=_,er=K,ei=J,eo=Q,ea=ee}},function(e){e.O(0,[2343,7754,3950,7823,8190,3710,9774,2888,179],function(){return e(e.s=27319)}),_N_E=e.O()}]);