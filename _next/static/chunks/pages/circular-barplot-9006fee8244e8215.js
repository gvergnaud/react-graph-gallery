(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3096],{2876:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/circular-barplot",function(){return t(4106)}])},4106:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return P}});var n=t(5893),r=t(7294),i=t(153),s=t(9965),l=t(7262),o=t(3572),d=t(1122),h=t(1664),c=t.n(h),u=t(6820);let m=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"Mel",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Sophie",value:14},{name:"Leane",value:74},{name:"Melanie",value:72},{name:"Tibo",value:23},{name:"Remi",value:124},{name:"Balkis",value:23},{name:"Nina",value:104},{name:"Lucas",value:94},{name:"Paul",value:2}];var p=t(600);let x=e=>{let{width:a,height:t,data:i}=e,s=Math.min(a,t)/2,l=i.sort((e,a)=>a.value-e.value).map(e=>e.name),o=(0,r.useMemo)(()=>p.tiA().domain(l).range([0,2*Math.PI]).padding(.2),[i,t,a]),d=(0,r.useMemo)(()=>{let[e,a]=p.Wem(i.map(e=>e.value));return p.s$j().domain([0,a||10]).range([90,s])},[i,a,t]),h=p.Nb1(),c=i.map((e,a)=>{let t=h({innerRadius:90,outerRadius:d(e.value),startAngle:o(e.name),endAngle:o(e.name)+o.bandwidth()});return(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:t,opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1})},a)});return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:a,height:t,children:(0,n.jsx)("g",{transform:"translate("+(a/2+20)+","+(t/2+20)+")",children:c})})})},j=e=>{let{width:a=700,height:t=400}=e;return(0,n.jsx)(x,{data:m,width:a,height:t})},g=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"Mel",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Sophie",value:14},{name:"Leane",value:74},{name:"Melanie",value:72},{name:"Tibo",value:23},{name:"Remi",value:124},{name:"Balkis",value:23},{name:"Nina",value:104},{name:"Lucas",value:94},{name:"Paul",value:2}],b=e=>{let{width:a,height:t,data:i}=e,s=Math.min(a,t)/2-50,l=i.sort((e,a)=>a.value-e.value).map(e=>e.name),o=(0,r.useMemo)(()=>p.tiA().domain(l).range([0,2*Math.PI]).padding(.2),[i,t,a]),d=(0,r.useMemo)(()=>{let[e,a]=p.Wem(i.map(e=>e.value));return p.s$j().domain([0,a||10]).range([90,s])},[i,a,t]),h=p.Nb1(),c=i.map((e,a)=>{let t=h({innerRadius:90,outerRadius:d(e.value),startAngle:o(e.name),endAngle:o(e.name)+o.bandwidth()}),r=o(e.name)+o.bandwidth()/2,i=(r+Math.PI)%(2*Math.PI)<Math.PI,s=d(e.value)+10;return(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{d:t,opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1}),(0,n.jsx)("g",{transform:"rotate("+(180*r/Math.PI-90)+"),translate("+s+",0)",children:(0,n.jsx)("text",{textAnchor:i?"end":"start",alignmentBaseline:"middle",fontSize:16,transform:i?"rotate(180)":"rotate(0)",children:e.name})})]},a)});return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:a,height:t,children:(0,n.jsx)("g",{transform:"translate("+a/2+","+t/2+")",children:c})})})},f=e=>{let{width:a=700,height:t=400}=e;return(0,n.jsx)(b,{data:g,width:a,height:t})},v=()=>40*Math.random(),w=["travel","food","beer"],y=["Emily","Hannah","Madison","Ashley","Sarah","Alexis","Samantha","Jessica","Elizabeth","Taylor","Lauren","Alyssa","Kayla","Abigail","Brianna","Olivia","Emma","Megan","Grace","Victoria","Rachel","Anna","Sydney","Destiny","Morgan","Jennifer","Jasmine","Haley","Julia","Kaitlyn","Nicole","Amanda","Katherine","Natalie","Hailey","Alexandra","Savannah","Chloe","Rebecca","Stephanie","Maria","Sophia","Mackenzie","Allison","Isabella","Amber","Mary","Danielle","Gabrielle","Jordan","Brooke","Michelle","Sierra","Katelyn","Andrea","Madeline","Sara","Kimberly","Courtney","Erin","Brittany","Vanessa","Jenna","Jacqueline","Caroline","Faith","Makayla","Bailey","Paige","Shelby"].flatMap(e=>w.map(a=>({group:e,subgroup:a,value:v()}))),k=["#e85252","#6689c6","#9a6fb0"],M=e=>{let{width:a,height:t,data:i}=e,s=Math.min(a,t)/2*.3,l=Math.min(a,t)/2-50,o=[...new Set(i.map(e=>e.group))],d=[...new Set(i.map(e=>e.subgroup))],h=p.knu().keys(d).value(e=>i.filter(a=>a.group===e)[0].value),c=h(o),u=c[c.length-1]||[],m=u.map(e=>{let a=e[e.length-1]||0;return{name:e.data,value:a}}),x=m.sort((e,a)=>a.value-e.value),j=x[0].value,g=p.tiA().domain(x.map(e=>e.name)).range([0,2*Math.PI]).padding(.2),b=(0,r.useMemo)(()=>p.s$j().domain([0,j]).range([s,l]),[i,a,t]);var f=p.PKp().domain(d).range(k);let v=p.Nb1(),w=c.map((e,a)=>e.map((t,r)=>{let i=g(t.data)||0,s=v({innerRadius:b(t[0]),outerRadius:b(t[1]),startAngle:i,endAngle:i+g.bandwidth()});if(s)return(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:s,opacity:.7,stroke:"black",fill:f(e.key),fillOpacity:.9,strokeWidth:1},a)},a+"-"+r)})),y=x.map((e,a)=>{let t=g(e.name)||0,r=(t+g.bandwidth()/2+Math.PI)%(2*Math.PI)<Math.PI,i=(t+g.bandwidth()/2)*180/Math.PI-90,s=b(e.value)+10;return(0,n.jsx)("g",{transform:"rotate("+i+"),translate("+s+",0)",children:(0,n.jsx)("text",{textAnchor:r?"end":"start",alignmentBaseline:"middle",fontSize:16,transform:r?"rotate(180)":"rotate(0)",children:e.name})},a)});return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:a,height:t,children:(0,n.jsxs)("g",{transform:"translate("+a/2+","+t/2+")",children:[w,y]})})})},A=e=>{let{width:a=700,height:t=400}=e;return(0,n.jsx)(M,{data:y,width:a,height:t})};var S=t(615);let R=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["A"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/graph/circularbarplot.html",children:"circular barplot"})," ","is a variation of a ",(0,n.jsx)(c(),{href:"barplot",children:"barplot"})," where bars are displayed around a circle using polar coordinates. It is a less accurate representation of the data, but provides a strong ",(0,n.jsx)("b",{children:"eye-catching"})," ","effect."]}),(0,n.jsxs)("p",{children:["This page describes how to deal with ",(0,n.jsx)("b",{children:"radial coordinates"})," with"," ",(0,n.jsx)("code",{children:"d3.js"})," and ",(0,n.jsx)("code",{children:"react"})," to build a circular barplot. It's a step by step tutorial with several interactive sandboxes."]})]});function P(){return(0,n.jsxs)(i.A,{title:"Circular Barplot with React",seoDescription:"How to build a circular barplot with React and D3.js. A set of re-usable components",children:[(0,n.jsx)(s.Z,{title:"Circular Barplot",description:R,chartType:"circularBarplot"}),(0,n.jsx)("h2",{id:"data",children:"The Data"})," ",(0,n.jsxs)("p",{children:["The dataset required to build a circular barplot is usually an array where each item is an object providing the ",(0,n.jsx)("code",{children:"name"})," and the"," ",(0,n.jsx)("code",{children:"value"})," of the group."]}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:"Here is a minimal example"}),(0,n.jsx)(o.d,{code:B}),(0,n.jsxs)("p",{children:["Note: if your data is in ",(0,n.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,n.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,n.jsx)("a",{href:"https://d3-graph-gallery.com/graph/barplot_horizontal.html",children:"here"}),"."]}),(0,n.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,n.jsxs)("p",{children:["The goal here is to create a ",(0,n.jsx)("code",{children:"CircularBarplot"})," component that will be stored in a ",(0,n.jsx)("code",{children:"CircularBarplot.tsx"})," file. This component requires 3 props to render: a ",(0,n.jsx)("code",{children:"width"}),", a"," ",(0,n.jsx)("code",{children:"height"}),", and some ",(0,n.jsx)("code",{children:"data"}),"."]}),(0,n.jsxs)("p",{children:["The shape of the ",(0,n.jsx)("code",{children:"data"})," is described above. The"," ",(0,n.jsx)("code",{children:"width"})," and ",(0,n.jsx)("code",{children:"height"})," will be used to rendering a"," ",(0,n.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the circular barplot."]}),(0,n.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our"," ",(0,n.jsx)("code",{children:"CircularBarplot"})," component:"]}),(0,n.jsx)(o.d,{code:I}),(0,n.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the svg ",(0,n.jsx)("code",{children:"circle"}),", but it's react that will render them in the ",(0,n.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,n.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,n.jsx)("a",{href:"https://d3-graph-gallery.com/circular_barplot.html",children:"d3.js examples"}),"."]}),(0,n.jsx)("h2",{id:"radial bars",children:"Drawing circular bars"}),(0,n.jsxs)("p",{children:["Even if the process to build a circular barplot is very different than for the common ",(0,n.jsx)(c(),{href:"barplot",children:"barplot"}),", I strongly advise to have a good understanding of the common version first."," ",(0,n.jsx)(c(),{href:"barplot",children:"Check it out"}),"."]}),(0,n.jsx)("p",{children:"Here is an overview of the main differences."}),(0,n.jsx)("h3",{children:"→ Radial coordinates"}),(0,n.jsxs)("p",{children:["Do you remember your high school lectures about"," ",(0,n.jsx)("a",{href:"https://en.wikipedia.org/wiki/Trigonometry",children:"trigonometry"}),"? Me either \uD83D\uDE43. But we need it here. Using radial coordinates, each point in the 2d coordinate space is defined using an ",(0,n.jsx)("b",{children:"angle"})," and its"," ",(0,n.jsx)("b",{children:"distance"})," to the center of the chart."]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"Angle"})," is defined between ",(0,n.jsx)("code",{children:"0"})," (top) and"," ",(0,n.jsx)("code",{children:"2*Pi"})," (top again). A value of ",(0,n.jsx)("code",{children:"Pi"})," will be at the bottom."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"Distance"})," to the center goes from ",(0,n.jsx)("code",{children:"innerRadius"})," to"," ",(0,n.jsx)("code",{children:"outerRadius"}),". The inner radius is arbitraty. Do not use something too small or your bars will be very distorded. The upper value is computed from the svg dimension to fill it properly."]})]}),(0,n.jsx)("p",{children:"Since I cannot seem to remember this, I thought you might have the same struggle and would enjoy this little schema:"}),(0,n.jsxs)("div",{className:"flex flex-col items-center mt-8 mb-12",children:[(0,n.jsx)("img",{src:"/img/trigonometry.png",style:{maxWidth:700},alt:"schema explaining how radial coordinates work with d3.js"}),(0,n.jsx)(S.Y,{children:"When dealing with radial coordinates, a position is defined by its angle and its distance from the center."})]}),(0,n.jsx)("h3",{children:"→ X Scale"}),(0,n.jsxs)("p",{children:["The X scale (for the groups) is a ",(0,n.jsx)("code",{children:"scaleBand"})," like for a common barplot, but it goes from ",(0,n.jsx)("code",{children:"0"})," to ",(0,n.jsx)("code",{children:"2*Pi"})," ","instead of going from ",(0,n.jsx)("code",{children:"0"})," to ",(0,n.jsx)("code",{children:"width"}),"."," "]}),(0,n.jsx)(o.d,{code:N}),(0,n.jsx)("h3",{children:"→ Y Scale"}),(0,n.jsxs)("p",{children:["The Y scale uses a very specific ",(0,n.jsx)("code",{children:"scaleRadial"}),". Indeed, bars are wider at their top than at their bottom. This"," ",(0,n.jsx)("code",{children:"scaleRadial"})," takes it into account and bring some sort of correction. Check the"," ",(0,n.jsx)("a",{href:"https://github.com/d3/d3-scale#radial-scales",children:"doc"}),", or even this ",(0,n.jsx)("a",{href:"https://github.com/d3/d3-scale/issues/90",children:"explanation"})," ","for more."]}),(0,n.jsx)("p",{children:"At the end of the day, that's how our scales look like:"}),(0,n.jsx)(o.d,{code:T}),(0,n.jsxs)("h3",{children:["→ Drawing with ",(0,n.jsx)("code",{children:"path"}),", not ",(0,n.jsx)("code",{children:"rect"}),"."]}),(0,n.jsxs)("p",{children:["We are not drawing rectangles here, so the svg ",(0,n.jsx)("code",{children:"rect"})," element won't be helpful."]}),(0,n.jsxs)("p",{children:["Instead, we are drawing ",(0,n.jsx)("b",{children:"fractions of a rings"}),", called ",(0,n.jsx)("b",{children:"arcs"}),"."]}),(0,n.jsxs)("p",{children:["Fortunately, d3.js has an ",(0,n.jsx)("code",{children:"arc()"})," function that will generate the svg ",(0,n.jsx)("code",{children:"path"})," for us. It's the same process that is used to create a ",(0,n.jsx)(c(),{href:"pie-plot",children:"pie chart"})," or a"," ",(0,n.jsx)(c(),{href:"donut",children:"donut chart"}),"."]}),(0,n.jsx)("p",{children:"Here is an idea on how the function can be used to generate all the svg shapes:"}),(0,n.jsx)(o.d,{code:C}),(0,n.jsx)("h3",{children:"→ Rendering"}),(0,n.jsxs)("p",{children:["Not much to add. Just include the paths in a ",(0,n.jsx)("code",{children:"svg"})," element. Remember that 0,0 is the center of the chart instead of being the top-left corner. So we need to apply a ",(0,n.jsx)("code",{children:"translate"})," at some point."]}),(0,n.jsx)(d.$,{vizName:"CircularBarplotBasic",VizComponent:j,height:500,maxWidth:600,caption:(0,n.jsxs)("span",{children:["Most basic circular barplot built with d3.js and react, using radial coordinates and ",(0,n.jsx)("code",{children:"path"})," instead of ",(0,n.jsx)("code",{children:"rect"}),"."]})}),(0,n.jsx)("p",{children:"That's a good start but it looks pretty much like a snail so far. Let's make it a real chart with labels and values."}),(0,n.jsx)("h2",{id:"labels",children:"Labels"})," ",(0,n.jsxs)("p",{children:["It is necessary to add a text element to show the ",(0,n.jsx)("b",{children:"name"})," of each bar."]}),(0,n.jsxs)("p",{children:["We need those labels to be ",(0,n.jsx)("b",{children:"readable"})," (like not written upside down). So a bit of logic is necessary to determine wether or not a label must be flipped, and how to position it properly."]}),(0,n.jsxs)("p",{children:["To do so it is necessary to switch from radians (use for the"," ",(0,n.jsx)("code",{children:"xScale"}),") to degrees (used for the ",(0,n.jsx)("code",{children:"transform"})," ","property)."," "]}),(0,n.jsx)("p",{children:"Please check the code below for full explanation."}),(0,n.jsx)(d.$,{vizName:"CircularBarplotLabel",VizComponent:f,height:500,maxWidth:600,caption:"Add some labels to each bar of the circular barchart to make it insightful"}),(0,n.jsx)(u.Z,{chartId:"circularBarplot"}),(0,n.jsx)("h2",{id:"stacking",children:"Stacking"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("a",{href:"https://www.data-to-viz.com/caveat/stacking.html",children:"Stacking"})," ","is a process where a chart is broken up across more than one categoric variables which make up the whole."]}),(0,n.jsxs)("p",{children:["d3 comes with some handy functions for stacking. The process is extensively described in this"," ",(0,n.jsx)(c(),{href:"/example/barplot-stacked-horizontal",children:"stacked barplot tutorial"}),". There is nothing really different to make it circular and here is a working sandbox to discover the code."]}),(0,n.jsx)(d.$,{vizName:"CircularBarplotStacking",VizComponent:A,height:800,maxWidth:800,caption:"Add some labels to each bar of the circular barchart to make it insightful"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,n.jsx)(l.Z,{chartFamily:"ranking"}),(0,n.jsx)("div",{className:"mt-20"})]})}let B='\nconst data = [\n  {name:"Mark", value: 90},\n  {name:"Robert", value: 12},\n  {name:"Emily", value: 34},\n  {name:"Marion", value: 53},\n  {name:"Nicolas", value: 98},\n]\n'.trim(),I='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype CircularBarplotProps = {\n  width: number;\n  height: number;\n  data: { name: string; y: number }[];\n};\n\nexport const CircularBarplot = ({ width, height, data }: CircularBarplotProps) => {\n\n  // read the data\n  // compute scales (including a radial scale)\n  // compute all the shapes\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render all the shapes\n      </svg>\n    </div>\n  );\n};\n'.trim(),N="\nconst xScale = d3\n      .scaleBand()\n      .domain(groups)\n      .range([0, 2 * Math.PI])\n      .padding(BAR_PADDING)\n".trim(),T="\nconst yScale = d3\n      .scaleRadial()\n      .domain([0, max])\n      .range([innerRadius, outerRadius])\n".trim(),C="\nconst arcPathGenerator = d3.arc();\n\nconst allShapes = data.map((group, i) => {\n  const path = arcPathGenerator({\n    innerRadius: innerRadius,\n    outerRadius: yScale(group.value),\n    startAngle: xScale(group.name),\n    endAngle: xScale(group.name) + xScale.bandwidth(),\n  });\n})\n".trim()}},function(e){e.O(0,[3996,600,5660,645,7934,9774,2888,179],function(){return e(e.s=2876)}),_N_E=e.O()}]);