_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{H5K7:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return p}));var n=i("rePB"),r=i("nKUr"),o=i("q1tI"),l=i("M2gS"),c=i("wIIz"),s=i("cVA7"),a=i.n(s);function d(e){var t=e.size,i=void 0===t?320:t,n=e.title,o=void 0===n?"":n,l=e.data,c=void 0===l?[]:l;return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{style:{height:i,width:1.8*i,borderRadius:"50%",margin:"auto",position:"relative"},children:Object(r.jsx)(a.a,{style:{width:1.8*i,height:i},theme:"theme_name",notMerge:!0,lazyUpdate:!0,option:function(){var e=[];return c.map((function(t){0==t.value&&""==t.value||e.push(t)})),{series:[{type:"pie",radius:["0%","90%"],itemStyle:{borderRadius:20,borderColor:"#121b1d",borderWidth:8,color:function(e){return["#72C8A2","#5DADF6","#8278E9","#FF9F7F","#C14567","#B74AE5","#0AAF9F","#E89589","#16A085","#4A235A","#C39BD3 ","#F9E79F","#BA4A00","#ECF0F1","#616A6B","#EAF2F8","#4A235A","#3498DB"][e.dataIndex]}},label:{color:"rgba(218, 251, 252, 0.8)",fontSize:16},labelLine:{lineStyle:{color:"rgba(218, 251, 252, 0.8)"},smooth:.1,length:10,length2:30},data:e}]}}()})}),Object(r.jsx)("div",{style:{textAlign:"center",fontSize:18,margin:"auto",color:"#DAFBFC",opacity:.8},children:o})]})}function j(e){var t=e.ringVal,i=void 0===t?0:t,n=e.ringName,o=void 0===n?"\u503c":n,l=e.data,c=void 0===l?[]:l,s=e.title,a=void 0===s?"":s;return Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",height:"100%"},children:[Object(r.jsx)("div",{style:{height:226,width:226,border:"6px solid rgba(191, 78, 104, 0.84)",borderRadius:"50%",position:"relative"},children:Object(r.jsx)("div",{style:{height:216,width:216,border:"20px solid rgba(191, 78, 104, 0.4)",borderRadius:"50%",position:"absolute",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#DAFBFC",top:0,left:0},children:Object(r.jsxs)("div",{style:{height:186,width:186,border:"6px solid rgba(191, 78, 104, 0.84)",borderRadius:"50%",position:"absolute",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#DAFBFC"},children:[Object(r.jsx)("span",{style:{fontSize:44,lineHeight:"50px"},children:i}),Object(r.jsx)("span",{style:{fontSize:15,fontWeight:"bold"},children:o})]})})}),Object(r.jsx)("div",{style:{width:500},children:Object(r.jsx)(d,{title:a,data:c})})]})}function h(e){var t=e.value,i=void 0===t?0:t,n=e.name,o=void 0===n?"":n,l=e.max,c=void 0===l?100:l,s=e.style,a=void 0===s?{}:s;return Object(r.jsxs)("div",{style:a,children:[Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"revert",color:"#fff",opacity:.8,fontSize:16},children:[Object(r.jsx)("span",{style:{flex:1}}),Object(r.jsxs)("span",{children:[i,"%"]})]}),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row",width:"100%"},children:[Object(r.jsx)("div",{style:{width:60,fontSize:16,color:"#DAFBFC",opacity:.4,textAlign:"right",marginRight:10,lineHeight:"20px"},children:o}),Object(r.jsx)("div",{style:{backgroundColor:"#3D4248",height:14,marginTop:3,flex:1,position:"relative"},children:Object(r.jsx)("div",{style:{position:"absolute",height:14,width:Math.abs(i)/c*100/2+"%",minWidth:1,maxWidth:"50%",left:i>=0?"50%":50-Math.abs(i)/c*100/2+"%",backgroundColor:Math.abs(i)>35?"#C14567":"#72C8A2"}})})]})]})}function b(e){var t=e.value,i=void 0===t?0:t,n=e.name,o=void 0===n?"":n,l=e.style,c=void 0===l?{marginBottom:5}:l;return Object(r.jsxs)("div",{style:c,children:[Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"revert",color:"#fff",opacity:.8,fontSize:16},children:[Object(r.jsx)("span",{style:{flex:1}}),Object(r.jsxs)("span",{children:[i,"%"]})]}),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row",width:"100%"},children:[Object(r.jsx)("div",{style:{width:90,fontSize:16,color:"#DAFBFC",opacity:.4,textAlign:"right",marginRight:30,lineHeight:"20px"},children:o}),Object(r.jsx)("div",{style:{backgroundColor:"#3D4248",height:14,marginTop:3,flex:1,position:"relative"},children:Object(r.jsx)("div",{style:{height:14,position:"absolute",width:i+"%",minWidth:1,maxWidth:"100%",backgroundColor:"#72C8A2"}})})]})]})}function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach((function(t){Object(n.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(){var e=Object(o.useState)(null),t=e[0],i=e[1],n=Object(o.useState)(null),s=n[0],a=n[1];Object(o.useEffect)((function(){d()}),[]);var d=function(){fetch("/json/diet.json",{method:"get"}).then((function(e){return e.json()})).then((function(e){console.log(e.data),i(e.data)})).catch((function(e){console.log(e)})),fetch("/json/movement.json",{method:"get"}).then((function(e){return e.json()})).then((function(e){a(e.data)})).catch((function(e){console.log(e)}))},u=function(e){var t=e.title,i=void 0===t?"":t,n=e.subtitle,o=void 0===n?"":n;return Object(r.jsxs)("div",{style:{fontSize:24,fontWeight:500,color:"#ffffff"},children:[i,Object(r.jsx)("span",{style:{fontSize:16},children:o})]})},p=function(e){var t=e.title,i=void 0===t?"":t;return Object(r.jsx)("div",{style:{color:"rgba(218, 251, 252, 0.8)",fontSize:16,position:"absolute",left:10,top:0},children:i})},x=function(e){var t=e.children;return Object(r.jsx)("div",{style:{width:1810,position:"relative",margin:"auto"},children:t})};return Object(r.jsx)(l.a,{style:v.Box,title:"\u81b3\u98df\u8bc4\u4f30\u548c\u8fd0\u52a8\u8bc4\u4f30",children:t&&s&&Object(r.jsxs)(x,{children:[Object(r.jsxs)(c.a,{style:f(f({},v.Item),v.Item1),children:[Object(r.jsx)(u,{title:"\u81b3\u98df\u8bc4\u4f30"}),Object(r.jsx)("span",{style:{color:"#fff",fontSize:20,opacity:.8},children:t.Food.name}),Object(r.jsx)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:t.Food.list&&t.Food.list.map((function(e,t){return Object(r.jsx)("div",{style:{width:"46%",margin:"10px 2%"},children:Object(r.jsx)(h,{name:e.name,value:e.value},t)})}))})]}),Object(r.jsxs)(c.a,{style:f(f({},v.Item),v.Item2),children:[Object(r.jsx)(u,{title:"\u8fd0\u52a8\u8bc4\u4f30"}),Object(r.jsx)("span",{style:{color:"#fff",fontSize:20,opacity:.8},children:s.Movement.name}),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:[Object(r.jsxs)("div",{style:{width:"48%",margin:"5px 1%",paddingTop:10,position:"relative"},children:[Object(r.jsx)(p,{title:s.Movement.work.title}),s.Movement.work.list.map((function(e,t){return Object(r.jsx)(b,{name:e.title,value:e.value},t)}))]}),Object(r.jsxs)("div",{style:{width:"48%",margin:"5px 1%",paddingTop:10,position:"relative"},children:[Object(r.jsx)(p,{title:s.Movement.recreation.title}),s.Movement.recreation.list.map((function(e,t){return Object(r.jsx)(b,{name:e.title,value:e.value},t)}))]}),Object(r.jsxs)("div",{style:{width:"48%",margin:"5px 1%",paddingTop:10,marginTop:30,position:"relative"},children:[Object(r.jsx)(p,{title:s.Movement.householdjobs.title}),s.Movement.householdjobs.list.map((function(e,t){return Object(r.jsx)(b,{name:e.title,value:e.value},t)}))]}),Object(r.jsxs)("div",{style:{width:"48%",margin:"5px 1%",paddingTop:10,marginTop:30,position:"relative"},children:[Object(r.jsx)(p,{title:s.Movement.traffic.title}),s.Movement.traffic.list.map((function(e,t){return Object(r.jsx)(b,{name:e.title,value:e.value},t)}))]})]})]}),Object(r.jsx)(c.a,{style:f(f({},v.Item),v.Item3),children:t&&Object(r.jsx)(j,{ringName:t.Nutrition.otherName,ringVal:t.Nutrition.otherValue,data:t.Nutrition.list,title:"\u8425\u517b\u6444\u53d6"})}),Object(r.jsx)(c.a,{style:f(f({},v.Item),v.Item4),children:s&&Object(r.jsx)(j,{ringName:s.Project.otherName,ringVal:s.Project.otherValue,data:s.Project.list,title:"\u8fd0\u52a8\u603b\u9879MET"})})]})})}var v={Item:{position:"absolute"},Item1:{height:460,width:890,left:0,top:0},Item2:{height:460,width:890,left:920,top:0},Item3:{height:410,width:890,left:0,top:490},Item4:{height:410,width:890,right:0,top:490}}},"w/zm":function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dietExercise",function(){return i("H5K7")}])},wIIz:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i("nKUr"),r=i("rePB");i("q1tI");function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){Object(r.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e){var t=e.children,i=e.style,r=void 0===i?{}:i,o=e.backgroundColor;return Object(n.jsx)("div",{style:l({backgroundColor:o?"rgba(21, 74, 103, 0.1)":"none",padding:"35px 40px",width:"fit-content",overflow:"hidden"},r),children:t})}}},[["w/zm",0,1,2,3,4]]]);