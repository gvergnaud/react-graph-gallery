(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72],{52322:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/network-diagram-with-colored-groups",function(){return a(28329)}])},61651:function(e,r,a){"use strict";a.d(r,{Z:function(){return i}});var t=a(85893);a(67294);var o=a(49871),u=a(28843),l=a(77522);let s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function i(e){let{chartFamily:r}=e,a=u.c.filter(e=>e.family===r).map((e,r)=>{let a=(0,l.y)(e.reactURL);return(0,t.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,t.jsx)(o.Z,{link:a,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},r)});return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:r+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==s?void 0:s[r]}),(0,t.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:a})]})}},81122:function(e,r,a){"use strict";a.d(r,{$:function(){return n}});var t=a(85893),o=a(67294),u=a(59973),l=a(80615),s=a(88578),i=a(5);let n=e=>{let{VizComponent:r,vizName:a,height:n=400,maxWidth:c=800,caption:g}=e,[d,v]=(0,o.useState)(!1),h=(0,o.useRef)(null),m=(0,u.B)(h);return(0,t.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:d?(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,t.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,t.jsx)(s.X,{vizName:a})}),(0,t.jsx)("div",{className:"flex justify-center mt-2",children:(0,t.jsx)(i.z,{size:"sm",onClick:()=>v(!d),children:"Hide Sandbox"})})]}):(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,t.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,t.jsx)("div",{style:{height:n,width:"100%",maxWidth:c},ref:h,className:"pointer-events-auto",children:(0,t.jsx)(r,{height:n,width:m.width})})}),(0,t.jsx)(l.Y,{children:g}),(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)(i.z,{size:"sm",onClick:()=>v(!d),children:"Show code"})})]})})}},88578:function(e,r,a){"use strict";a.d(r,{X:function(){return o}});var t=a(85893);a(67294);let o=e=>{let{vizName:r}=e;return(0,t.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+r+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},80153:function(e,r,a){"use strict";a.d(r,{A:function(){return d}});var t=a(85893),o=a(49700),u=a(63476),l=a(67294),s=a(63084),i=a.n(s);function n(){let[e,r]=(0,l.useState)([]),[a,o]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));r(e)},[]),(0,l.useEffect)(()=>{let r=()=>{let r=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),a=window.scrollY+150,t=r.reduce((e,r)=>Math.abs(r-a)<Math.abs(e-a)?r:e,0),u=r.findIndex(e=>e===t);o(-1===u?0:u)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[e]),(0,t.jsx)("div",{className:i().tableOfContent,children:e.map((r,o)=>(0,t.jsx)("p",{className:a===o?"".concat(i().tocItem," ").concat(i().tocItemActive):i().tocItem,onClick:r=>{r.preventDefault(),e[o].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:r.id.charAt(0).toUpperCase()+r.id.slice(1)},r.id))})}var c=a(17414),g=a(62594);let d=e=>{let{children:r,title:a,seoDescription:l}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.A,{title:a,seoDescription:l}),(0,t.jsx)(o.Z,{}),(0,t.jsx)("div",{className:"wrapper",children:r}),(0,t.jsx)(g.Z,{}),(0,t.jsx)("div",{className:"wrapper",children:(0,t.jsx)(u.Z,{})}),(0,t.jsx)(n,{})]})}},49871:function(e,r,a){"use strict";a.d(r,{Z:function(){return n}});var t=a(85893);a(67294);var o=a(95887),u=a(28843),l=a(41664),s=a.n(l);let i=u.c.filter(e=>"general"===e.family).map(e=>e.logo);function n(e){let{chartLogo:r,caption:a,link:u,isAvailable:l,size:n}=e,g=i.includes(r),d=l?"opacity-100":"opacity-20";return(0,t.jsx)(s(),{href:l?u:"subscribe",className:"no-underline",children:(0,t.jsxs)("div",{className:"flex flex-col items-center",children:[(0,t.jsxs)("div",{style:{width:n,height:n},className:"relative mr-2 rounded-full "+d+" "+(l?"cursor-pointer":"cursor-not-allowed"),children:[(0,t.jsx)("div",{className:"absolute",children:(0,t.jsx)(o.Z,{chartLogo:r,size:n})}),g?(0,t.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,t.jsx)(c,{size:n})}):(0,t.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,t.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,t.jsx)("p",{className:"font-light text-sm text-gray-600 "+d,children:a})]})})}let c=e=>{let{size:r}=e;return(0,t.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,t.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},80615:function(e,r,a){"use strict";a.d(r,{Y:function(){return o}});var t=a(85893);let o=e=>{let{children:r}=e;return(0,t.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:r})}},3572:function(e,r,a){"use strict";a.d(r,{d:function(){return c}});var t=a(85893),o=a(32581),u=a(15660),l=a.n(u),s=a(67294),i=a(45993),n=a.n(i);let c=e=>{let{code:r}=e,[a,u]=(0,s.useState)(!1),i=(0,s.useRef)(null);(0,s.useEffect)(()=>{i.current&&l().highlightElement(i.current)},[i,r]);let c=(0,t.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(r),u(!0)},className:n().codeChunckCopyButton,children:a?"Copied":(0,t.jsx)(o.Z,{size:14,style:{padding:0}})});return(0,t.jsxs)("div",{className:"mb-6 relative",children:[(0,t.jsx)("pre",{className:"rounded-md line-numbers",children:(0,t.jsx)("code",{ref:i,className:"language-javascript",children:r})}),(0,t.jsx)("div",{className:n().copyButtonContainer,children:c})]})}},59973:function(e,r,a){"use strict";a.d(r,{B:function(){return o}});var t=a(67294);let o=e=>{let r=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[a,o]=(0,t.useState)(r),u=()=>{o(r())};return(0,t.useEffect)(()=>(window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)),[]),(0,t.useEffect)(()=>{u()},[e]),a}},28329:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return x}});var t=a(85893),o=a(67294),u=a(80153),l=a(43710),s=a(61651),i=a(3572),n=a(81122),c=a(41664),g=a.n(c),d=a(56438);let v={nodes:[{id:"Myriel",group:1},{id:"Napoleon",group:1},{id:"Mlle.Baptistine",group:1},{id:"Mme.Magloire",group:1},{id:"CountessdeLo",group:1},{id:"Geborand",group:1},{id:"Champtercier",group:1},{id:"Cravatte",group:1},{id:"Count",group:1},{id:"OldMan",group:1},{id:"Labarre",group:2},{id:"Valjean",group:2},{id:"Marguerite",group:3},{id:"Mme.deR",group:2},{id:"Isabeau",group:2},{id:"Gervais",group:2},{id:"Tholomyes",group:3},{id:"Listolier",group:3},{id:"Fameuil",group:3},{id:"Blacheville",group:3},{id:"Favourite",group:3},{id:"Dahlia",group:3},{id:"Zephine",group:3},{id:"Fantine",group:3},{id:"Mme.Thenardier",group:4},{id:"Thenardier",group:4},{id:"Cosette",group:5},{id:"Javert",group:4},{id:"Fauchelevent",group:0},{id:"Bamatabois",group:2},{id:"Perpetue",group:3},{id:"Simplice",group:2},{id:"Scaufflaire",group:2},{id:"Woman1",group:2},{id:"Judge",group:2},{id:"Champmathieu",group:2},{id:"Brevet",group:2},{id:"Chenildieu",group:2},{id:"Cochepaille",group:2},{id:"Pontmercy",group:4},{id:"Boulatruelle",group:6},{id:"Eponine",group:4},{id:"Anzelma",group:4},{id:"Woman2",group:5},{id:"MotherInnocent",group:0},{id:"Gribier",group:0},{id:"Jondrette",group:7},{id:"Mme.Burgon",group:7},{id:"Gavroche",group:8},{id:"Gillenormand",group:5},{id:"Magnon",group:5},{id:"Mlle.Gillenormand",group:5},{id:"Mme.Pontmercy",group:5},{id:"Mlle.Vaubois",group:5},{id:"Lt.Gillenormand",group:5},{id:"Marius",group:8},{id:"BaronessT",group:5},{id:"Mabeuf",group:8},{id:"Enjolras",group:8},{id:"Combeferre",group:8},{id:"Prouvaire",group:8},{id:"Feuilly",group:8},{id:"Courfeyrac",group:8},{id:"Bahorel",group:8},{id:"Bossuet",group:8},{id:"Joly",group:8},{id:"Grantaire",group:8},{id:"MotherPlutarch",group:9},{id:"Gueulemer",group:4},{id:"Babet",group:4},{id:"Claquesous",group:4},{id:"Montparnasse",group:4},{id:"Toussaint",group:5},{id:"Child1",group:10},{id:"Child2",group:10},{id:"Brujon",group:4},{id:"Mme.Hucheloup",group:8}],links:[{source:"Napoleon",target:"Myriel",value:1},{source:"Mlle.Baptistine",target:"Myriel",value:8},{source:"Mme.Magloire",target:"Myriel",value:10},{source:"Mme.Magloire",target:"Mlle.Baptistine",value:6},{source:"CountessdeLo",target:"Myriel",value:1},{source:"Geborand",target:"Myriel",value:1},{source:"Champtercier",target:"Myriel",value:1},{source:"Cravatte",target:"Myriel",value:1},{source:"Count",target:"Myriel",value:2},{source:"OldMan",target:"Myriel",value:1},{source:"Valjean",target:"Labarre",value:1},{source:"Valjean",target:"Mme.Magloire",value:3},{source:"Valjean",target:"Mlle.Baptistine",value:3},{source:"Valjean",target:"Myriel",value:5},{source:"Marguerite",target:"Valjean",value:1},{source:"Mme.deR",target:"Valjean",value:1},{source:"Isabeau",target:"Valjean",value:1},{source:"Gervais",target:"Valjean",value:1},{source:"Listolier",target:"Tholomyes",value:4},{source:"Fameuil",target:"Tholomyes",value:4},{source:"Fameuil",target:"Listolier",value:4},{source:"Blacheville",target:"Tholomyes",value:4},{source:"Blacheville",target:"Listolier",value:4},{source:"Blacheville",target:"Fameuil",value:4},{source:"Favourite",target:"Tholomyes",value:3},{source:"Favourite",target:"Listolier",value:3},{source:"Favourite",target:"Fameuil",value:3},{source:"Favourite",target:"Blacheville",value:4},{source:"Dahlia",target:"Tholomyes",value:3},{source:"Dahlia",target:"Listolier",value:3},{source:"Dahlia",target:"Fameuil",value:3},{source:"Dahlia",target:"Blacheville",value:3},{source:"Dahlia",target:"Favourite",value:5},{source:"Zephine",target:"Tholomyes",value:3},{source:"Zephine",target:"Listolier",value:3},{source:"Zephine",target:"Fameuil",value:3},{source:"Zephine",target:"Blacheville",value:3},{source:"Zephine",target:"Favourite",value:4},{source:"Zephine",target:"Dahlia",value:4},{source:"Fantine",target:"Tholomyes",value:3},{source:"Fantine",target:"Listolier",value:3},{source:"Fantine",target:"Fameuil",value:3},{source:"Fantine",target:"Blacheville",value:3},{source:"Fantine",target:"Favourite",value:4},{source:"Fantine",target:"Dahlia",value:4},{source:"Fantine",target:"Zephine",value:4},{source:"Fantine",target:"Marguerite",value:2},{source:"Fantine",target:"Valjean",value:9},{source:"Mme.Thenardier",target:"Fantine",value:2},{source:"Mme.Thenardier",target:"Valjean",value:7},{source:"Thenardier",target:"Mme.Thenardier",value:13},{source:"Thenardier",target:"Fantine",value:1},{source:"Thenardier",target:"Valjean",value:12},{source:"Cosette",target:"Mme.Thenardier",value:4},{source:"Cosette",target:"Valjean",value:31},{source:"Cosette",target:"Tholomyes",value:1},{source:"Cosette",target:"Thenardier",value:1},{source:"Javert",target:"Valjean",value:17},{source:"Javert",target:"Fantine",value:5},{source:"Javert",target:"Thenardier",value:5},{source:"Javert",target:"Mme.Thenardier",value:1},{source:"Javert",target:"Cosette",value:1},{source:"Fauchelevent",target:"Valjean",value:8},{source:"Fauchelevent",target:"Javert",value:1},{source:"Bamatabois",target:"Fantine",value:1},{source:"Bamatabois",target:"Javert",value:1},{source:"Bamatabois",target:"Valjean",value:2},{source:"Perpetue",target:"Fantine",value:1},{source:"Simplice",target:"Perpetue",value:2},{source:"Simplice",target:"Valjean",value:3},{source:"Simplice",target:"Fantine",value:2},{source:"Simplice",target:"Javert",value:1},{source:"Scaufflaire",target:"Valjean",value:1},{source:"Woman1",target:"Valjean",value:2},{source:"Woman1",target:"Javert",value:1},{source:"Judge",target:"Valjean",value:3},{source:"Judge",target:"Bamatabois",value:2},{source:"Champmathieu",target:"Valjean",value:3},{source:"Champmathieu",target:"Judge",value:3},{source:"Champmathieu",target:"Bamatabois",value:2},{source:"Brevet",target:"Judge",value:2},{source:"Brevet",target:"Champmathieu",value:2},{source:"Brevet",target:"Valjean",value:2},{source:"Brevet",target:"Bamatabois",value:1},{source:"Chenildieu",target:"Judge",value:2},{source:"Chenildieu",target:"Champmathieu",value:2},{source:"Chenildieu",target:"Brevet",value:2},{source:"Chenildieu",target:"Valjean",value:2},{source:"Chenildieu",target:"Bamatabois",value:1},{source:"Cochepaille",target:"Judge",value:2},{source:"Cochepaille",target:"Champmathieu",value:2},{source:"Cochepaille",target:"Brevet",value:2},{source:"Cochepaille",target:"Chenildieu",value:2},{source:"Cochepaille",target:"Valjean",value:2},{source:"Cochepaille",target:"Bamatabois",value:1},{source:"Pontmercy",target:"Thenardier",value:1},{source:"Boulatruelle",target:"Thenardier",value:1},{source:"Eponine",target:"Mme.Thenardier",value:2},{source:"Eponine",target:"Thenardier",value:3},{source:"Anzelma",target:"Eponine",value:2},{source:"Anzelma",target:"Thenardier",value:2},{source:"Anzelma",target:"Mme.Thenardier",value:1},{source:"Woman2",target:"Valjean",value:3},{source:"Woman2",target:"Cosette",value:1},{source:"Woman2",target:"Javert",value:1},{source:"MotherInnocent",target:"Fauchelevent",value:3},{source:"MotherInnocent",target:"Valjean",value:1},{source:"Gribier",target:"Fauchelevent",value:2},{source:"Mme.Burgon",target:"Jondrette",value:1},{source:"Gavroche",target:"Mme.Burgon",value:2},{source:"Gavroche",target:"Thenardier",value:1},{source:"Gavroche",target:"Javert",value:1},{source:"Gavroche",target:"Valjean",value:1},{source:"Gillenormand",target:"Cosette",value:3},{source:"Gillenormand",target:"Valjean",value:2},{source:"Magnon",target:"Gillenormand",value:1},{source:"Magnon",target:"Mme.Thenardier",value:1},{source:"Mlle.Gillenormand",target:"Gillenormand",value:9},{source:"Mlle.Gillenormand",target:"Cosette",value:2},{source:"Mlle.Gillenormand",target:"Valjean",value:2},{source:"Mme.Pontmercy",target:"Mlle.Gillenormand",value:1},{source:"Mme.Pontmercy",target:"Pontmercy",value:1},{source:"Mlle.Vaubois",target:"Mlle.Gillenormand",value:1},{source:"Lt.Gillenormand",target:"Mlle.Gillenormand",value:2},{source:"Lt.Gillenormand",target:"Gillenormand",value:1},{source:"Lt.Gillenormand",target:"Cosette",value:1},{source:"Marius",target:"Mlle.Gillenormand",value:6},{source:"Marius",target:"Gillenormand",value:12},{source:"Marius",target:"Pontmercy",value:1},{source:"Marius",target:"Lt.Gillenormand",value:1},{source:"Marius",target:"Cosette",value:21},{source:"Marius",target:"Valjean",value:19},{source:"Marius",target:"Tholomyes",value:1},{source:"Marius",target:"Thenardier",value:2},{source:"Marius",target:"Eponine",value:5},{source:"Marius",target:"Gavroche",value:4},{source:"BaronessT",target:"Gillenormand",value:1},{source:"BaronessT",target:"Marius",value:1},{source:"Mabeuf",target:"Marius",value:1},{source:"Mabeuf",target:"Eponine",value:1},{source:"Mabeuf",target:"Gavroche",value:1},{source:"Enjolras",target:"Marius",value:7},{source:"Enjolras",target:"Gavroche",value:7},{source:"Enjolras",target:"Javert",value:6},{source:"Enjolras",target:"Mabeuf",value:1},{source:"Enjolras",target:"Valjean",value:4},{source:"Combeferre",target:"Enjolras",value:15},{source:"Combeferre",target:"Marius",value:5},{source:"Combeferre",target:"Gavroche",value:6},{source:"Combeferre",target:"Mabeuf",value:2},{source:"Prouvaire",target:"Gavroche",value:1},{source:"Prouvaire",target:"Enjolras",value:4},{source:"Prouvaire",target:"Combeferre",value:2},{source:"Feuilly",target:"Gavroche",value:2},{source:"Feuilly",target:"Enjolras",value:6},{source:"Feuilly",target:"Prouvaire",value:2},{source:"Feuilly",target:"Combeferre",value:5},{source:"Feuilly",target:"Mabeuf",value:1},{source:"Feuilly",target:"Marius",value:1},{source:"Courfeyrac",target:"Marius",value:9},{source:"Courfeyrac",target:"Enjolras",value:17},{source:"Courfeyrac",target:"Combeferre",value:13},{source:"Courfeyrac",target:"Gavroche",value:7},{source:"Courfeyrac",target:"Mabeuf",value:2},{source:"Courfeyrac",target:"Eponine",value:1},{source:"Courfeyrac",target:"Feuilly",value:6},{source:"Courfeyrac",target:"Prouvaire",value:3},{source:"Bahorel",target:"Combeferre",value:5},{source:"Bahorel",target:"Gavroche",value:5},{source:"Bahorel",target:"Courfeyrac",value:6},{source:"Bahorel",target:"Mabeuf",value:2},{source:"Bahorel",target:"Enjolras",value:4},{source:"Bahorel",target:"Feuilly",value:3},{source:"Bahorel",target:"Prouvaire",value:2},{source:"Bahorel",target:"Marius",value:1},{source:"Bossuet",target:"Marius",value:5},{source:"Bossuet",target:"Courfeyrac",value:12},{source:"Bossuet",target:"Gavroche",value:5},{source:"Bossuet",target:"Bahorel",value:4},{source:"Bossuet",target:"Enjolras",value:10},{source:"Bossuet",target:"Feuilly",value:6},{source:"Bossuet",target:"Prouvaire",value:2},{source:"Bossuet",target:"Combeferre",value:9},{source:"Bossuet",target:"Mabeuf",value:1},{source:"Bossuet",target:"Valjean",value:1},{source:"Joly",target:"Bahorel",value:5},{source:"Joly",target:"Bossuet",value:7},{source:"Joly",target:"Gavroche",value:3},{source:"Joly",target:"Courfeyrac",value:5},{source:"Joly",target:"Enjolras",value:5},{source:"Joly",target:"Feuilly",value:5},{source:"Joly",target:"Prouvaire",value:2},{source:"Joly",target:"Combeferre",value:5},{source:"Joly",target:"Mabeuf",value:1},{source:"Joly",target:"Marius",value:2},{source:"Grantaire",target:"Bossuet",value:3},{source:"Grantaire",target:"Enjolras",value:3},{source:"Grantaire",target:"Combeferre",value:1},{source:"Grantaire",target:"Courfeyrac",value:2},{source:"Grantaire",target:"Joly",value:2},{source:"Grantaire",target:"Gavroche",value:1},{source:"Grantaire",target:"Bahorel",value:1},{source:"Grantaire",target:"Feuilly",value:1},{source:"Grantaire",target:"Prouvaire",value:1},{source:"MotherPlutarch",target:"Mabeuf",value:3},{source:"Gueulemer",target:"Thenardier",value:5},{source:"Gueulemer",target:"Valjean",value:1},{source:"Gueulemer",target:"Mme.Thenardier",value:1},{source:"Gueulemer",target:"Javert",value:1},{source:"Gueulemer",target:"Gavroche",value:1},{source:"Gueulemer",target:"Eponine",value:1},{source:"Babet",target:"Thenardier",value:6},{source:"Babet",target:"Gueulemer",value:6},{source:"Babet",target:"Valjean",value:1},{source:"Babet",target:"Mme.Thenardier",value:1},{source:"Babet",target:"Javert",value:2},{source:"Babet",target:"Gavroche",value:1},{source:"Babet",target:"Eponine",value:1},{source:"Claquesous",target:"Thenardier",value:4},{source:"Claquesous",target:"Babet",value:4},{source:"Claquesous",target:"Gueulemer",value:4},{source:"Claquesous",target:"Valjean",value:1},{source:"Claquesous",target:"Mme.Thenardier",value:1},{source:"Claquesous",target:"Javert",value:1},{source:"Claquesous",target:"Eponine",value:1},{source:"Claquesous",target:"Enjolras",value:1},{source:"Montparnasse",target:"Javert",value:1},{source:"Montparnasse",target:"Babet",value:2},{source:"Montparnasse",target:"Gueulemer",value:2},{source:"Montparnasse",target:"Claquesous",value:2},{source:"Montparnasse",target:"Valjean",value:1},{source:"Montparnasse",target:"Gavroche",value:1},{source:"Montparnasse",target:"Eponine",value:1},{source:"Montparnasse",target:"Thenardier",value:1},{source:"Toussaint",target:"Cosette",value:2},{source:"Toussaint",target:"Javert",value:1},{source:"Toussaint",target:"Valjean",value:1},{source:"Child1",target:"Gavroche",value:2},{source:"Child2",target:"Gavroche",value:2},{source:"Child2",target:"Child1",value:3},{source:"Brujon",target:"Babet",value:3},{source:"Brujon",target:"Gueulemer",value:3},{source:"Brujon",target:"Thenardier",value:3},{source:"Brujon",target:"Gavroche",value:1},{source:"Brujon",target:"Eponine",value:1},{source:"Brujon",target:"Claquesous",value:1},{source:"Brujon",target:"Montparnasse",value:1},{source:"Mme.Hucheloup",target:"Bossuet",value:1},{source:"Mme.Hucheloup",target:"Joly",value:1},{source:"Mme.Hucheloup",target:"Grantaire",value:1},{source:"Mme.Hucheloup",target:"Bahorel",value:1},{source:"Mme.Hucheloup",target:"Courfeyrac",value:1},{source:"Mme.Hucheloup",target:"Gavroche",value:1},{source:"Mme.Hucheloup",target:"Enjolras",value:1}]};var h=a(88657);let m=(e,r,a,t,o)=>{e.clearRect(0,0,r,a);let u=[...new Set(t.map(e=>String(e.group)))],l=(0,h.PKp)().domain(u).range(h.Cn1);e.globalAlpha=.6,e.strokeStyle="#999",e.lineWidth=1,o.forEach(r=>{e.beginPath(),e.moveTo(r.source.x,r.source.y),e.lineTo(r.target.x,r.target.y),e.stroke()}),e.globalAlpha=1,e.strokeStyle="#fff",e.lineWidth=3,t.forEach(r=>{r.x&&r.y&&(e.beginPath(),e.moveTo(r.x+7,r.y),e.arc(r.x,r.y,7,0,2*Math.PI),e.fillStyle=l(String(r.group)),e.stroke(),e.fill())})},p=e=>{let{width:r,height:a,data:u}=e,l=u.links.map(e=>({...e})),s=u.nodes.map(e=>({...e})),i=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let e=i.current,t=null==e?void 0:e.getContext("2d");t&&h.A4v(s).force("link",h.Fsl(l).id(e=>e.id)).force("charge",h.q5i()).force("center",h.wqt(r/2,a/2)).on("tick",()=>{m(t,r,a,s,l)})},[r,a,s,l]),(0,t.jsx)("div",{children:(0,t.jsx)("canvas",{ref:i,style:{width:r,height:a},width:r,height:a})})},f=e=>{let{width:r=700,height:a=400}=e;return 0===r?null:(0,t.jsx)(p,{data:v,width:r,height:a})},j=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["This tutorial is a variation around the general"," ",(0,t.jsx)(g(),{href:"/network-diagram",children:"introduction to network diagram with react"})," ","and d3.js. You should probably understand the concepts described there before reading here, notably everything related to the"," ",(0,t.jsx)("code",{children:"d3-force"})," plugin."]}),(0,t.jsxs)("p",{children:["This example shows how to apply the concepts of the"," ",(0,t.jsx)(g(),{href:"/network-diagram",children:"general tutorial"})," to a real dataset. It creates a ",(0,t.jsx)("b",{children:"force-directed graph"})," that describes the network of character co-occurrence in ",(0,t.jsx)("i",{children:"Les Mis\xe9rables"}),"."]}),(0,t.jsx)("p",{children:"A code sandbox is provided for the final result, but explanations target what's different compared to a classic network diagram."})]});function x(){return(0,t.jsxs)(u.A,{title:"Force-directed Network diagram with React and D3.js.",seoDescription:"Example of a network diagram react component. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,t.jsx)(l.Z,{title:"Force-directed Network diagram with React and D3.js",description:j,chartType:"network"}),(0,t.jsx)("h2",{id:"plot",children:"Plot and code"}),(0,t.jsx)("p",{children:"If you are in a hurry, here is the final plot we're trying to achieve here, together with its code:\uD83D\uDE47‍♂️"}),(0,t.jsxs)("p",{children:["In this network diagram, each node is a character of the book"," ",(0,t.jsx)("i",{children:"Les Mis\xe9rables"}),". The network chart tries to localise characters who often appear together close to each other."]}),(0,t.jsxs)("p",{children:["The dataset comes from this"," ",(0,t.jsx)("a",{href:"https://observablehq.com/@d3/force-directed-graph-canvas/2?collection=@d3/d3-force",target:"_blank",children:"Observable version"})," ","that uses d3.js only."]}),(0,t.jsx)(d.J,{isFilled:!0,size:"sm",href:"/network-chart",children:"Network section"}),(0,t.jsx)(n.$,{vizName:"NetworkDiagramLesMiserables",VizComponent:f,maxWidth:700,height:700,caption:(0,t.jsxs)("span",{children:["A network diagram made with d3.js and react. It shows the character co-occurence in ",(0,t.jsx)("i",{children:"Les Mis\xe9rables"}),"."]})}),(0,t.jsx)("h2",{id:"color",children:"Color Palette"}),(0,t.jsxs)("p",{children:["The only difference with the very simple network chart of the main",(0,t.jsx)(g(),{href:"/network-diagram",children:"network tutorial"})," is the presence of a color palette used to color the nodes."]}),(0,t.jsxs)("p",{children:["Each ",(0,t.jsx)("code",{children:"node"})," of the dataset is attributed to a"," ",(0,t.jsx)("code",{children:"group"}),". It is thus possible to create a color scale using a scaleOrdinal:"]}),(0,t.jsx)(i.d,{code:y}),(0,t.jsxs)("p",{children:["Here I am using the ",(0,t.jsx)("code",{children:"schemeCategory10"})," color scale to avoid defining those color by hand."]}),(0,t.jsxs)("p",{children:["Once the color scale is ready, it is straightforward to call it for each node in the ",(0,t.jsx)("code",{children:"drawNetwork()"})," function."]}),(0,t.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,t.jsx)(s.Z,{chartFamily:"flow"}),(0,t.jsx)("div",{className:"mt-20"})]})}let y="\n// List of Groups\nconst allGroups = [...new Set(nodes.map((d) => d.group))];\n\n// Color scale\nconst colorScale = scaleOrdinal()\n  .domain(allGroups)\n  .range(schemeCategory10);\n".trim()},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[2343,7754,8657,7823,8190,3710,2594,9774,2888,179],function(){return e(e.s=52322)}),_N_E=e.O()}]);