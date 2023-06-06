(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3212],{8990:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/treemap",function(){return t(5525)}])},5525:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return N}});var n=t(5893),i=t(7294),s=t(153),r=t(9965),l=t(7262),o=t(2594),c=t(6260),h=t(3572),d=t(1122);let m={type:"node",name:"boss",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53},{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12},{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]};var p=t(665);let u=e=>{let{width:a,height:t,data:s}=e,r=(0,i.useMemo)(()=>p.bT9(s).sum(e=>e.value),[s]),l=(0,i.useMemo)(()=>{let e=p.pNI().size([a,t]).padding(4);return e(r)},[r,a,t]),o=l.leaves().map(e=>(0,n.jsxs)("g",{children:[(0,n.jsx)("rect",{x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,stroke:"transparent",fill:"#69b3a2",className:"opacity-80 hover:opacity-100"}),(0,n.jsx)("text",{x:e.x0+3,y:e.y0+3,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-bold",children:e.data.name}),(0,n.jsx)("text",{x:e.x0+3,y:e.y0+18,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-light",children:e.data.value})]},e.id));return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:a,height:t,children:o})})},x=e=>{let{width:a=700,height:t=400}=e;return(0,n.jsx)(u,{data:m,width:a,height:t})},f={type:"node",name:"boss",value:0,children:[{type:"node",name:"Team Dataviz",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53}]},{type:"node",name:"Team DevOps",value:0,children:[{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12}]},{type:"node",name:"Team Sales",value:0,children:[{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]}]},v=["#e0ac2b","#6689c6","#a4c969","#e85252","#9a6fb0","#a53253","#7f7f7f"],j=e=>{let{width:a,height:t,data:s}=e,r=(0,i.useMemo)(()=>p.bT9(s).sum(e=>e.value),[s]),l=null==r?void 0:null===(o=r.children)||void 0===o?void 0:o.map(e=>e.data.name);var o,c=p.PKp().domain(l||[]).range(v);let h=(0,i.useMemo)(()=>{let e=p.pNI().size([a,t]).padding(4);return e(r)},[r,a,t]),d=h.leaves().map((e,a)=>{var t;let i=null===(t=e.parent)||void 0===t?void 0:t.data.name;return(0,n.jsxs)("g",{children:[(0,n.jsx)("rect",{x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,stroke:"transparent",fill:c(i),className:"opacity-80 hover:opacity-100"}),(0,n.jsx)("text",{x:e.x0+3,y:e.y0+3,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-bold",children:e.data.name}),(0,n.jsx)("text",{x:e.x0+3,y:e.y0+18,fontSize:12,textAnchor:"start",alignmentBaseline:"hanging",fill:"white",className:"font-light",children:e.data.value})]},e.id)});return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:a,height:t,children:d})})},y=e=>{let{width:a=700,height:t=400}=e;return(0,n.jsx)(j,{data:f,width:a,height:t})};var g=t(390);let b=(0,n.jsxs)("p",{children:["A ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/graph/treemap.html",children:"treemap"})," ","displays a hierarchical information (a ",(0,n.jsx)("i",{children:"tree"}),") as a set of rectangles. Rectangle sizes are proportional to a numeric value. d3.js has some handy functions to compute the rectangle positions. React becomes useful to render those rectangles, animate transitions and more."]}),w="\nconst data = {\n  type: 'node',\n  name: \"boss\",\n  value: 2300,\n  children: [\n    {type: 'leaf', name:\"Mark\", value: 90},\n    {type: 'leaf', name:\"Robert\", value: 12},\n    {type: 'leaf', name:\"Emily\", value: 34},\n    ...\n}\n".trim();function N(){return(0,n.jsxs)(s.A,{title:"Treemap with React",seoDescription:"How to build a treemap with React and D3.js. A set of re-usable components",children:[(0,n.jsx)(r.Z,{title:"Treemap",description:b,chartType:"treemap"}),(0,n.jsxs)(c.U,{title:"Dataset",startOpen:!0,children:[(0,n.jsxs)("p",{children:["The dataset describes a hierarchy using a recursive structure. Each item in this structure is called a node, the lowest nodes of the hierarchy being called leaves. The dataset is an object that has at least 3 properties: ",(0,n.jsx)("code",{children:"name"}),", ",(0,n.jsx)("code",{children:"value"})," and"," ",(0,n.jsx)("code",{children:"children"}),". Children is an array of nodes that have this structure too."]}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:"Here is a minimal example of the data structure:"}),(0,n.jsx)(h.d,{code:w}),(0,n.jsx)("p",{children:"For a complete example, check the interactive playgrounds below."})]}),(0,n.jsx)("div",{className:"bg-gray-50 full-bleed mt-12",children:(0,n.jsx)("div",{className:"wrapper pb-12",children:(0,n.jsxs)(c.U,{title:"Input data & data wrangling",startOpen:!0,children:[(0,n.jsx)("p",{children:"Three main input data formats are usually encountered when it comes to store hierarchical information. It's always a struggle to deal with those formats so I've tried to describe the most common use-cases here."}),(0,n.jsx)("p",{children:"→ list of connection (csv)"}),(0,n.jsx)("p",{children:"→ list of connection (js object)"}),(0,n.jsx)("p",{children:"→ json with hierarchy"}),(0,n.jsxs)("p",{children:["ToDo: write some explanation on how to do the work with the",(0,n.jsx)("code",{children:"d3.hierarchy"})," and ",(0,n.jsx)("code",{children:"d3.stratify"})," functions."]})]})})}),(0,n.jsxs)(c.U,{title:"Most basic treemap",startOpen:!0,children:[(0,n.jsxs)("p",{children:["The ",(0,n.jsx)("code",{children:"treemap"})," function of d3.js does the biggest part of the job. It basically computes the position of each square on the svg area, returning ",(0,n.jsx)("code",{children:"x0"}),", ",(0,n.jsx)("code",{children:"x1"}),", ",(0,n.jsx)("code",{children:"y0"})," and"," ",(0,n.jsx)("code",{children:"y1"})," for each item."]}),(0,n.jsxs)("p",{children:["Once this is available, it is just a matter of building some"," ",(0,n.jsx)("code",{children:"rect"})," and ",(0,n.jsx)("code",{children:"text"})," elements for each rectangle."]}),(0,n.jsx)(d.$,{vizName:"TreemapBasic",VizComponent:x,maxWidth:600,height:400,caption:"The most basic treemap made with react and d3.js."})]}),(0,n.jsxs)(c.U,{title:"Two levels of hierarchy",startOpen:!0,children:[(0,n.jsx)("p",{children:"Treemaps are also handy to display nested data structure. For instance, let's consider a company with a CEO, several teams, and a few employees per team."}),(0,n.jsx)(d.$,{vizName:"Treemap2Levels",VizComponent:y,maxWidth:600,height:400,caption:"Treemap with 2 levels of hierarchy, made with react and d3.js."})]}),(0,n.jsxs)(c.U,{title:"Hover effect",startOpen:!0,children:[(0,n.jsx)("p",{children:"Dim other groups when a group is hovered over."}),(0,n.jsx)(d.$,{vizName:"TreemapHoverEffect",VizComponent:g.C,maxWidth:600,height:400,caption:"Hover over a group on the treemap to see the other groups fading."})]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,n.jsx)(l.Z,{chartFamily:"partOfAWhole"}),(0,n.jsx)("div",{className:"mt-20"}),(0,n.jsx)(o.Z,{})]})}}},function(e){e.O(0,[3996,665,5660,645,2950,9774,2888,179],function(){return e(e.s=8990)}),_N_E=e.O()}]);