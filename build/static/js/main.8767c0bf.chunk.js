(this["webpackJsonp247-admin"]=this["webpackJsonp247-admin"]||[]).push([[0],{256:function(e,t,a){},257:function(e,t,a){},469:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(54),c=a.n(r),i=(a(256),a(257),a(24)),o="/overview",l=a(20),d=a.n(l),b=a(31),m=a(35),j=a(245),x=a(2),u=function(e){var t=e.inputIcon,a=e.registerFn,s=e.errorText,n=Object(j.a)(e,["inputIcon","registerFn","errorText"]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"relative mt-8",children:[Object(x.jsx)("input",Object(m.a)(Object(m.a)(Object(m.a)({},n),a(e.name)),{},{className:"w-full px-5 py-3 border border-247-dark-text rounded-md text-lg font-customRoboto"})),Object(x.jsx)("span",{className:"absolute top-1/4 right-5",children:t&&t})]}),s&&Object(x.jsx)("p",{className:"text-sm mt-1 ml-2 text-247-error-text",children:s})]})},p=a(33),O=a(76),g=a(61),h=a(14),f=function(e){var t=e.children,a=e.type,s=e.className,n=e.fullWidth,r=e.isLoading;return Object(x.jsx)("button",{className:[].concat(Object(h.a)(s),["text-white","py-4","rounded-md",n&&"w-full","text-lg","font-bold","font-customRoboto"]).join(" "),type:a,children:r?"Loading":t})},v=a.p+"static/media/logo.e6dad76f.png",N=a(11),y=function(e,t,a,n,r){var c=Object(s.createContext)();return{Context:c,Provider:function(i){var o=i.children,l=Object(s.useReducer)(e,t,(function(){if(n){var e=localStorage.getItem("247auth");return e?JSON.parse(e):{}}return Object(m.a)({},t)})),d=Object(N.a)(l,2),b=d[0],j=d[1];Object(s.useEffect)((function(){n&&r(b)}),[b]);var u={};for(var p in a)u[p]=a[p](j);return Object(x.jsx)(c.Provider,{value:Object(m.a)({state:b},u),children:o})}}},k=a(217),C=a.n(k).a.create({baseURL:"/api"}),w=a(30),I=Object(w.a)(),S=y((function(e,t){switch(t.type){case"set_loading":return console.log(t.payload,"--- in dispatch ---"),Object(m.a)({loading:t.payload},e);case"signin":return Object(m.a)(Object(m.a)({},e),{},{token:t.payload.token,user:t.payload.user,loggedIn:!0});case"set_error":return Object(m.a)(Object(m.a)({},e),{},{error:t.payload});default:return e}}),{loading:!1,token:null,user:null,loggedIn:!1,error:null},{loginAdmin:function(e){return function(){var t=Object(b.a)(d.a.mark((function t(a){var s,n,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=a.email,n=a.password,e({type:"set_loading",payload:!0}),t.prev=2,t.next=5,C.post("/admin/signin",{email:s,password:n});case 5:r=t.sent,console.log(r),c=r.data.token,e({type:"signin",payload:{token:c,user:r.data.user}}),e({type:"set_loading",payload:!1}),I.push(o),t.next=18;break;case 13:t.prev=13,t.t0=t.catch(2),e({type:"set_loading",payload:!1}),console.log(t.t0.response),t.t0.response?e({type:"set_error",payload:t.t0.response.data.error}):e({type:"set_error",payload:"Something went wrong"});case 18:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}()}},!0,(function(e){var t={user:e.user,loggedIn:e.loggedIn,token:e.token};localStorage.setItem("247auth",JSON.stringify(t))})),D=S.Context,A=S.Provider,F=a(244),T=a(130),L=function(){var e,t,a={validationSchema:T.a({emailAddress:T.b().email("Must be a valid email").required("Email is required"),password:T.b().min(7).max(255).required("Password is required")})}.validationSchema,n=Object(s.useContext)(D),r=n.state,c=r.loading,i=(r.error,n.loginAdmin),o=Object(g.d)({resolver:Object(F.a)(a)}),l=o.register,m=o.handleSubmit,j=o.watch,h=o.formState.errors;console.log(j("emailAddress")),Object(s.useEffect)((function(){console.log(c)}),[c]);var N=function(){var e=Object(b.a)(d.a.mark((function e(t){var a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),a=t.emailAddress,s=t.password,e.next=4,i({email:a,password:s});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"grid grid-cols-6 gap-0 h-screen min-h-screen",children:[Object(x.jsx)("div",{className:"col-span-3 bg-247-main h-full flex",children:Object(x.jsx)("img",{src:v,alt:"logo",width:"340",className:"m-auto"})}),Object(x.jsx)("div",{className:"col-span-3 bg-247-transparent flex",children:Object(x.jsxs)("div",{className:"px-20 w-full items-center m-auto",children:[Object(x.jsx)("h1",{className:"text-5xl font-bold text-247-dark-text font-customRoboto",children:"Sign In"}),Object(x.jsx)("p",{className:"text-2xl text-247-dark-text font-customRoboto font-light mt-1 tracking-wide",children:"Welcome Back"}),Object(x.jsxs)("form",{className:"mt-20",onSubmit:m(N),children:[Object(x.jsx)(u,{placeholder:"Email Address",type:"email",inputIcon:Object(x.jsx)(p.b,{size:24,color:"#4D4D4D"}),registerFn:l,name:"emailAddress",errorText:null===(e=h.emailAddress)||void 0===e?void 0:e.message}),Object(x.jsx)(u,{placeholder:"Password",type:"password",inputIcon:Object(x.jsx)(O.b,{size:24,color:"#4D4D4D"}),registerFn:l,name:"password",errorText:null===(t=h.password)||void 0===t?void 0:t.message}),Object(x.jsx)(f,{fullWidth:!0,className:["mt-20","bg-247-main"],type:"submit",isLoading:c,children:"Log In"})]})]})})]})},P=a(60),R=a(43),V=function(){return Object(x.jsxs)("div",{className:"relative",children:[Object(x.jsx)("input",{className:"pr-4 pl-11 py-2 w-72 border border-247-dark-text rounded-md text-lg text-white focus:outline-none focus:ring-1 font-customRoboto bg-transparent",type:"search",placeholder:"Search"}),Object(x.jsx)("span",{className:"absolute top-1/4 left-3",children:Object(x.jsx)(R.f,{color:"#979797",size:24})})]})},B=a(165),z=a(221),M=a(222),G=[{label:"Overview",icon:B.a,link:"/overview"},{label:"Advertisers",icon:p.c,link:"/advertisers"},{label:"Drivers",icon:z.a,link:"/drivers"},{label:"Campaigns",icon:B.b,link:"/campaigns"},{label:"Ad Playlists",icon:M.a,link:"/ad-playlists"},{label:"Send Notifs",icon:O.c,link:"/send-notifications"}],U=a(115),E=function(){return Object(x.jsx)("div",{className:"h-12 w-12 rounded-full bg-247-gray flex items-center justify-center border-2 border-247-dark-text cursor-pointer",children:Object(x.jsx)(U.b,{color:"#212427"})})},_=function(e){var t=e.children,a=e.pageTitle,s=e.titleTag,n=Object(i.f)();return console.log(n.pathname),Object(x.jsx)("div",{className:"h-screen max-h-screen overflow-y-hidden",children:Object(x.jsxs)("div",{className:"grid grid-cols-5 gap-0 max-h-screen h-screen",children:[Object(x.jsxs)("div",{className:"h-screen min-h-screen border-r-2 border-247-dark-text bg-247-secondary",children:[Object(x.jsx)("img",{src:v,alt:"logo",width:"160",className:"ml-10 mt-10"}),Object(x.jsx)("ul",{className:"ml-10 mt-20",children:G.map((function(e){return n.pathname.includes(e.link)?Object(x.jsx)("li",{className:"py-5",children:Object(x.jsx)(P.a,{to:e.link,children:Object(x.jsxs)("span",{className:"flex items-center space-x-6",children:[Object(x.jsx)(e.icon,{size:22,color:"#FF0000"}),Object(x.jsx)("span",{className:"text-white text-xl font-customRoboto",children:e.label})]})})}):Object(x.jsx)("li",{className:"py-5",children:Object(x.jsx)(P.a,{to:e.link,children:Object(x.jsxs)("span",{className:"flex items-center space-x-6",children:[Object(x.jsx)(e.icon,{size:22,color:"#959698"}),Object(x.jsx)("span",{className:"text-247-inactive-link text-xl font-customRoboto",children:e.label})]})})})}))})]}),Object(x.jsxs)("div",{className:"col-span-4 w-full h-screen min-h-screen bg-247-main px-10 py-10",children:[Object(x.jsxs)("div",{className:"flex items-center justify-between pb-4",children:[Object(x.jsxs)("h1",{className:"text-white font-customRoboto text-3xl font-bold",children:[a," ",s&&Object(x.jsx)("span",{className:"text-xl text-247-gray-accent2 bg-247-gray-accent3 px-3 py-1 rounded-md",children:s})]}),Object(x.jsxs)("div",{className:"flex space-x-8 items-center",children:[Object(x.jsx)(V,{}),Object(x.jsxs)("div",{className:"relative cursor-pointer",children:[Object(x.jsx)(R.b,{color:"#979797",size:28}),Object(x.jsx)("div",{className:"w-3 h-3 border-2 border-247-main rounded-full bg-red-500 absolute top-0 right-0"})]}),Object(x.jsxs)("div",{className:"flex items-center",children:[Object(x.jsx)(E,{}),Object(x.jsx)(U.a,{color:"#EBEBEB",className:"ml-2 cursor-pointer"})]})]})]}),Object(x.jsx)("div",{className:"overflow-y-scroll max-h-full scrollbar-hide",children:t})]})]})})},J=a(124),K=a(477),q=a(478),W=a(243),H=a(482),Y=a(237),Q=a(238),X=a(103),Z=function(e){var t=e.data,a=e.yDataKey,s=e.xDataKey;return Object(x.jsx)(K.a,{width:"100%",height:300,children:Object(x.jsxs)(q.a,{data:t,margin:{top:5,right:20,bottom:5,left:0},children:[Object(x.jsx)(W.a,{type:"monotone",dataKey:a,stroke:"#4FB81D"}),Object(x.jsx)(H.a,{stroke:"#4d4d4d",strokeDasharray:"5 5"}),Object(x.jsx)(Y.a,{dataKey:s}),Object(x.jsx)(Q.a,{}),Object(x.jsx)(X.a,{})]})})},$=a(119),ee=a.n($),te=function(e){var t=e.checked,a=e.iconColor,s=e.name,n=e.value,r=e.handleChange;return Object(x.jsxs)("div",{className:"flex mr-4",children:[Object(x.jsx)("input",{type:"checkbox",name:s,id:s,value:n,checked:t,className:"invisible w-0 h-0",onChange:r}),Object(x.jsxs)("label",{className:"text-xl font-bold ml-3 text-247-gray-accent2 flex items-center",htmlFor:s,children:[t?Object(x.jsx)(R.c,{color:a,className:n?"mr-2":""}):Object(x.jsx)(R.d,{color:a,className:n?"mr-2":""}),n]})]})},ae=a(239),se=function(){var e=Object(s.useState)([null,null]),t=Object(N.a)(e,2),a=t[0],n=t[1],r=Object(N.a)(a,2),c=r[0],i=r[1];return Object(s.useEffect)((function(){var e=new Date,t=Object(ae.a)(e,{days:7});n([t,e])}),[]),{startDate:c,endDate:i,setDateRange:n}},ne=[{date:"31/01",impressions:730,interactions:240},{date:"01/02",impressions:1560,interactions:350},{date:"02/02",impressions:722,interactions:190},{date:"03/02",impressions:3e3,interactions:780},{date:"04/02",impressions:750,interactions:320},{date:"05/02",impressions:1510,interactions:488},{date:"06/02",impressions:2880,interactions:590},{date:"07/02",impressions:889,interactions:286}],re=[{name:"Suya Bistro",numOfCampaigns:122,totalImpressions:166789,totalInteractions:5074,adSpend:412e3},{name:"CocaCola",numOfCampaigns:265,totalImpressions:575890,totalInteractions:10978,adSpend:909872},{name:"Spinneys Mart",numOfCampaigns:10,totalImpressions:54871,totalInteractions:992,adSpend:74827},{name:"Lifemate Inc.",numOfCampaigns:65,totalImpressions:72989,totalInteractions:1077,adSpend:106299},{name:"Gold Circle",numOfCampaigns:50,totalImpressions:144282,totalInteractions:2217,adSpend:331117},{name:"GTBank",numOfCampaigns:72,totalImpressions:172949,totalInteractions:600,adSpend:500186},{name:"Cowrywise",numOfCampaigns:5,totalImpressions:14285,totalInteractions:727,adSpend:92168},{name:"Mikano",numOfCampaigns:36,totalImpressions:22989,totalInteractions:25,adSpend:266667},{name:"Dangote",numOfCampaigns:45,totalImpressions:472199,totalInteractions:172,adSpend:822982},{name:"Betsmart",numOfCampaigns:3,totalImpressions:66889,totalInteractions:691,adSpend:49575},{name:"Abeg",numOfCampaigns:20,totalImpressions:199657,totalInteractions:300,adSpend:230789}],ce=[{name:"James Adeola",id:"AD240981",totalTrips:276,earnings:76560,pendingPayout:5778},{name:"Musa Ibrahim",id:"AD241964",totalTrips:118,earnings:45755,pendingPayout:10291},{name:"Kayode Kazeem",id:"AD248907",totalTrips:24,earnings:12897,pendingPayout:1675},{name:"Lawal Abioye",id:"AD240879",totalTrips:452,earnings:112094,pendingPayout:25650},{name:"Precious S.",id:"AD247765",totalTrips:18,earnings:10789,pendingPayout:975},{name:"Alao Matthew",id:"AD249088",totalTrips:92,earnings:33173,pendingPayout:6240},{name:"Joel Ifeoluwa",id:"AD243374",totalTrips:422,earnings:91750,pendingPayout:9655},{name:"Anthony Jay.",id:"AD246709",totalTrips:65,earnings:54129,pendingPayout:12980},{name:"Dare Salami",id:"AD241119",totalTrips:17,earnings:6111,pendingPayout:2230},{name:"John James",id:"AD247856",totalTrips:41,earnings:62600,pendingPayout:15400}],ie=[{name:"Share Happiness",status:"approved",id:"30765",impressions:27009,interactions:1250,vehicles:22},{name:"Black Friday",status:"approved",id:"30187",impressions:366120,interactions:10118,vehicles:415},{name:"Airtime Blast",status:"pending",id:"30769",impressions:122872,interactions:4782,vehicles:125},{name:"Savings Promo",status:"approved",id:"30997",impressions:4980,interactions:908,vehicles:124},{name:"Magic Moment",status:"approved",id:"30133",impressions:92015,interactions:7771,vehicles:122},{name:"Scratch & Win",status:"stopped",id:"30767",impressions:112299,interactions:20981,vehicles:87},{name:"New Line Launch",status:"approved",id:"30109",impressions:17990,interactions:2008,vehicles:98},{name:"Tell Tello",status:"pending",id:"30002",impressions:288e3,interactions:2766,vehicles:166},{name:"Yello Day",status:"stopped",id:"30909",impressions:407087,interactions:76893,vehicles:908},{name:"Ante-natal",status:"approved",id:"30110",impressions:115902,interactions:12136,vehicles:876}],oe=function(e){var t=e.statName,a=e.statChange,s=e.statInfo,n=e.statBg,r=e.bgVector,c=e.statBtn;return Object(x.jsxs)("div",{className:"px-8 py-6 w-full bg-bottom ".concat(r," bg-cover rounded-md ").concat(n," border-2 border-247-dark-text col-span-1"),children:[Object(x.jsxs)("div",{className:"flex justify-between items-center",children:[Object(x.jsx)("h3",{className:"text-white font-customRoboto text-2xl",children:t}),Object(x.jsx)("p",{className:"text-white text-lg text-opacity-40",children:a})]}),c?Object(x.jsxs)(P.a,{className:"bg-247-dark-accent1 text-white px-8 py-2 mt-8 inline-flex items-center rounded-md text-xl border border-247-dark-text",children:[c,Object(x.jsx)("span",{className:"ml-2",children:Object(x.jsx)(p.a,{})})]}):Object(x.jsx)("h2",{className:"text-4xl mt-8 text-white font-bold",children:s})]})},le=function(){var e=Object(s.useState)(!0),t=Object(N.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(!1),c=Object(N.a)(r,2),i=c[0],o=c[1],l=se(),d=l.startDate,b=l.endDate,m=l.setDateRange,j=function(){a&&(n(!1),o(!0)),i&&(o(!1),n(!0))};return Object(x.jsxs)(_,{pageTitle:"Overview",children:[Object(x.jsxs)("div",{className:"grid grid-cols-2 gap-8 mt-16",children:[Object(x.jsx)(oe,{statBg:"bg-247-secondary",bgVector:"bg-subtle-curve",statChange:"+ 5.23%",statInfo:"1, 291",statName:"Advertisers"}),Object(x.jsx)(oe,{statBg:"bg-247-accent1",bgVector:"bg-subtle-curve",statChange:"+ 1.08%",statInfo:"197, 291",statName:"Drivers"}),Object(x.jsx)(oe,{statBg:"bg-247-accent1",bgVector:"bg-subtle-curve",statChange:"- 1.75%",statInfo:"86, 675",statName:"Campaigns"}),Object(x.jsx)(oe,{statBg:"bg-247-red",bgVector:"bg-subtle-red-curve",statInfo:"86, 675",statName:"Schedule Ad Play",statBtn:"Schedule"})]}),Object(x.jsxs)("div",{className:"mt-10 mb-20 w-full bg-247-secondary rounded-md border-2 border-247-dark-text pl-6 pr-10 py-10",children:[Object(x.jsxs)("div",{className:"flex justify-between items-center mb-10",children:[Object(x.jsx)("h3",{className:"text-white font-customRoboto text-2xl font-medium",children:"Impressions"}),Object(x.jsxs)("div",{className:"flex items-center",children:[Object(x.jsxs)("div",{className:"relative mr-8",children:[Object(x.jsx)(ee.a,{className:"z-20",selectsRange:!0,startDate:d,endDate:b,onChange:function(e){return m(e)}}),Object(x.jsx)(J.a,{className:"absolute top-1/4 right-3 cursor-pointer z-0",size:20,color:"#979797"})]}),Object(x.jsxs)("div",{className:"flex items-center",children:[Object(x.jsx)(te,{checked:a,handleChange:j,name:"total",value:"Total",iconColor:"#4FB81D"}),Object(x.jsx)(te,{checked:i,handleChange:j,name:"perDay",value:"Per day",iconColor:"#FF0000"})]})]})]}),Object(x.jsx)(Z,{data:ne,xDataKey:"date",yDataKey:"impressions"})]})]})},de=function(e){var t=e.infoTitle,a=e.infoValue,s=e.isCurrency;return Object(x.jsxs)("div",{className:"bg-247-secondary rounded-md border-2 border-247-dark-text px-6 py-4",children:[Object(x.jsx)("h4",{className:"text-247-gray-accent2 font-customRoboto font-medium text-xl",children:t}),Object(x.jsx)("h2",{className:"mt-4 font-customRoboto text-247-gray-accent2 text-3xl font-bold",children:s?Number(a).toLocaleString("en-NG",{style:"currency",currency:"NGN",minimumFractionDigits:2,maximumFractionDigits:2}):Number(a).toLocaleString("en-US")})]})},be=function(e){var t=e.startDate,a=e.endDate,s=e.setRange,n=e.tableTitle;return Object(x.jsxs)("div",{className:"flex pt-7 px-8 mb-8 items-center justify-between",children:[Object(x.jsx)("h3",{className:"font-customRoboto text-white font-medium text-2xl",children:n}),Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsxs)("div",{className:"relative mr-8",children:[Object(x.jsx)(ee.a,{selectsRange:!0,startDate:t,endDate:a,onChange:function(e){return s(e)}}),Object(x.jsx)(J.a,{className:"absolute top-1/4 right-3 cursor-pointer z-0",size:20,color:"#979797"})]}),Object(x.jsx)(V,{})]})]})},me=function(e,t,a){var n=Object(s.useMemo)((function(){return e*t}),[e,t]),r=Object(s.useMemo)((function(){return n-t}),[n,t]),c=Object(s.useMemo)((function(){return a.slice(r,n)}),[r,n,a]),i=Math.ceil(a.length/t);return{currentList:c,indexOfFirstItem:r,indexOfLastItem:n,pages:i}},je=function(e){var t=e.headers,a=e.children;return Object(x.jsxs)("table",{className:"font-customRoboto w-full text-247-gray-accent2 border border-247-dark-text border-collapse",children:[Object(x.jsx)("thead",{children:Object(x.jsx)("tr",{className:"border border-247-dark-text",children:t.map((function(e,t){return Object(x.jsx)("th",{className:"border border-247-dark-text text-left px-6 py-4 text-lg",children:e},"".concat(e,"_").concat(t))}))})}),Object(x.jsx)("tbody",{children:a})]})},xe=a(169),ue=function(e){var t=e.visibleRows,a=e.setActivePage,s=e.setVisibleRows,n=e.firstItem,r=e.pages,c=e.activePage,i=e.dataLength,o=e.lastItem;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"flex items-center",children:[Object(x.jsx)("p",{className:"text-247-gray-accent2 mr-4 font-customRoboto text-base",children:"Show rows:"}),Object(x.jsxs)("select",{name:"rows",id:"rows",value:t,onChange:function(e){a(1),s(e.target.value)},className:"px-3 py-1 font-customRoboto text-247-gray-accent2 bg-transparent border-2 rounded-sm focus:outline-none focus:ring-1 border-247-dark-text",children:[Object(x.jsx)("option",{value:5,children:"5"}),Object(x.jsx)("option",{value:10,children:"10"}),Object(x.jsx)("option",{value:15,children:"15"})]})]}),Object(x.jsxs)("div",{className:"flex ml-16 items-center",children:[Object(x.jsx)("p",{className:"text-base text-247-gray-accent2",children:"".concat(n," - ").concat(r===c?i:o," of ").concat(i)}),Object(x.jsxs)("div",{className:"ml-3",children:[Object(x.jsx)("button",{onClick:1===c?null:function(){a(c-1)},className:"px-3 rounded-l-md py-1 border-2 border-247-dark-text",children:Object(x.jsx)(xe.a,{size:20,color:"#CACACA"})}),Object(x.jsx)("button",{onClick:r===c?null:function(){a(c+1)},className:"px-3 rounded-r-md py-1 border-2 border-l-0 border-247-dark-text",children:Object(x.jsx)(xe.b,{size:20,color:"#CACACA"})})]})]})]})},pe=function(e){var t=e.color,a=e.tagName,s=e.tagValue;return Object(x.jsxs)("div",{className:"flex items-center",children:[t&&Object(x.jsx)("div",{className:"w-3 h-3 mr-2 ".concat(t)}),Object(x.jsxs)("p",{className:"text-247-gray-accent2 font-medium",children:[Object(x.jsx)("span",{className:"font-bold",children:a})," ",s]})]})},Oe=a(241),ge=a.n(Oe),he=function(e){var t=e.modalOpen,a=e.setModalOpen,s=e.children;return Object(x.jsx)(ge.a,{isOpen:t,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"#282C31",border:"1px solid #282C31",borderRadius:"8px",width:"650px",padding:"28px 32px"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.86)"}},onRequestClose:function(){return a(!1)},children:s})},fe=["","Advertiser","No. of Campaigns","Total Impressions","Total Interactions","Ad Spend"],ve=function(e){var t=e.modalIsOpen,a=e.setIsOpen,s=e.advertiser;return Object(x.jsxs)(he,{modalOpen:t,setModalOpen:a,children:[Object(x.jsx)("h2",{className:"text-5xl font-bold text-247-gray-accent2",children:s.name}),Object(x.jsxs)("div",{className:"mt-6",children:[Object(x.jsxs)("h4",{className:"flex items-center text-247-gray-accent2 text-2xl font-bold",children:["Campaigns"," ",Object(x.jsx)(p.a,{onClick:function(){return I.push("/campaigns?advertiser=".concat(s.name.toLowerCase().replace(" ","-")),{advertiser:s.name})},className:"ml-3 cursor-pointer"})]}),Object(x.jsxs)("div",{className:"flex items-center gap-5 mt-2",children:[Object(x.jsx)(pe,{color:"bg-247-green",tagName:"Active: ",tagValue:"12"}),Object(x.jsx)(pe,{color:"bg-247-red",tagName:"Blocked: ",tagValue:"4"}),Object(x.jsx)(pe,{color:"bg-247-gray-accent5",tagName:"Pending: ",tagValue:"1"})]})]}),Object(x.jsxs)("div",{className:"mt-6",children:[Object(x.jsx)("h4",{className:"flex items-center text-247-gray-accent2 text-2xl font-bold",children:"Analytics"}),Object(x.jsxs)("div",{className:"flex items-center gap-5 mt-2",children:[Object(x.jsx)(pe,{tagName:"Impressions: ",tagValue:Number(s.totalImpressions).toLocaleString("en-US")}),Object(x.jsx)(pe,{tagName:"Interactions: ",tagValue:Number(s.totalInteractions).toLocaleString("en-US")})]})]}),Object(x.jsxs)("div",{className:"mt-6",children:[Object(x.jsx)("h4",{className:"flex items-center text-247-gray-accent2 text-2xl font-bold",children:"Total Ad Spend"}),Object(x.jsx)("p",{className:"mt-2 text-247-gray-accent2 font-bold",children:Number(s.adSpend).toLocaleString("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:2})})]}),Object(x.jsx)(f,{type:"submit",className:["bg-247-red","block","mt-12","px-12"],children:"Terminate"})]})},Ne=function(){var e=se(),t=e.startDate,a=e.endDate,n=e.setDateRange,r=Object(s.useState)([]),c=Object(N.a)(r,2),i=c[0],o=c[1],l=Object(s.useState)(1),d=Object(N.a)(l,2),b=d[0],m=d[1],j=Object(s.useState)(5),u=Object(N.a)(j,2),O=u[0],g=u[1],f=Object(s.useState)(!1),v=Object(N.a)(f,2),y=v[0],k=v[1],C=Object(s.useState)({}),w=Object(N.a)(C,2),I=w[0],S=w[1],D=me(b,O,re),A=D.currentList,F=D.indexOfFirstItem,T=D.indexOfLastItem,L=D.pages;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(_,{pageTitle:"Advertisers",children:[Object(x.jsxs)("div",{className:"grid grid-cols-3 gap-6 mt-16",children:[Object(x.jsx)(de,{infoTitle:"Number of Advertisers",infoValue:1291}),Object(x.jsx)(de,{infoTitle:"Total Revenue",infoValue:8655247.87,isCurrency:!0}),Object(x.jsx)(de,{infoTitle:"Total Impressions",infoValue:27009})]}),Object(x.jsxs)("div",{className:"mt-10 rounded-md bg-247-secondary border-2 border-247-dark-text mb-10",children:[Object(x.jsx)(be,{startDate:t,endDate:a,setRange:n,tableTitle:"Advertisers Info"}),Object(x.jsx)(je,{headers:fe,children:A.map((function(e,t){return Object(x.jsxs)("tr",{className:i.includes(t)?"text-lg text-247-green":"text-lg",children:[Object(x.jsx)("td",{className:"border border-247-dark-text px-3 py-2",children:Object(x.jsx)(te,{checked:!!i.includes(t),iconColor:"#CACACA",name:e.name.toLowerCase(),handleChange:function(){return function(e){if(i.includes(e)){var t=i.indexOf(e),a=Object(h.a)(i);a.splice(t,1),o(a)}else o([].concat(Object(h.a)(i),[e]))}(t)}})}),Object(x.jsx)("td",{className:"border border-247-dark-text px-6 py-2",children:Object(x.jsxs)("div",{className:"flex items-center hover:text-247-red cursor-pointer",onClick:function(){k(!0),S(e)},children:[e.name," ",Object(x.jsx)(p.a,{className:"ml-3"})]})}),Object(x.jsx)("td",{className:"border border-247-dark-text px-6 py-2",children:Object(x.jsx)(P.a,{to:{pathname:"/campaigns",search:"?advertiser=".concat(e.name.toLowerCase().replace(" ","-")),state:{advertiser:e.name}},children:Object(x.jsxs)("div",{className:"flex items-center hover:text-247-red cursor-pointer",children:[Number(e.numOfCampaigns).toLocaleString("en-US")," ",Object(x.jsx)(p.a,{className:"ml-3"})]})})}),Object(x.jsx)("td",{className:"border border-247-dark-text px-6 py-2",children:Number(e.totalImpressions).toLocaleString("en-US")}),Object(x.jsx)("td",{className:"border border-247-dark-text px-6 py-2",children:Number(e.totalInteractions).toLocaleString("en-US")}),Object(x.jsx)("td",{className:"border border-247-dark-text px-6 py-2",children:Number(e.adSpend).toLocaleString("en-NG",{currency:"NGN",style:"currency",minimumFractionDigits:2,maximumFractionDigits:2})})]},"advertisers_".concat(t))}))})]}),Object(x.jsx)("div",{className:"flex items-center justify-end mb-20",children:Object(x.jsx)(ue,{activePage:b,dataLength:re.length,firstItem:F+1,lastItem:T,pages:L,setActivePage:m,setVisibleRows:g,visibleRows:O})})]}),Object(x.jsx)(ve,{modalIsOpen:y,setIsOpen:k,advertiser:I})]})},ye=["","Driver","Driver ID","Total Trips","Earnings","Pending Payout"],ke=function(e){var t=e.modalIsOpen,a=e.setIsOpen,s=e.driver;return Object(x.jsx)(he,{modalOpen:t,setModalOpen:a,children:Object(x.jsxs)("h2",{className:"text-5xl font-bold text-247-gray-accent2 flex items-center",children:[s.name," ",Object(x.jsx)("span",{className:"text-lg font-medium bg-247-gray-accent3 in border border-247-dark-text px-3 py-1 rounded-md",children:s.id})]})})},Ce=function(){var e=se(),t=e.startDate,a=e.endDate,n=e.setDateRange,r=Object(s.useState)([]),c=Object(N.a)(r,2),i=c[0],o=c[1],l=Object(s.useState)(1),d=Object(N.a)(l,2),b=d[0],m=d[1],j=Object(s.useState)(5),u=Object(N.a)(j,2),O=u[0],g=u[1],f=Object(s.useState)(!1),v=Object(N.a)(f,2),y=v[0],k=v[1],C=Object(s.useState)({}),w=Object(N.a)(C,2),I=w[0],S=w[1],D=me(b,O,ce),A=D.currentList,F=D.indexOfFirstItem,T=D.indexOfLastItem,L=D.pages;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(_,{pageTitle:"Drivers",children:[Object(x.jsxs)("div",{className:"grid grid-cols-3 gap-6 mt-16",children:[Object(x.jsx)(de,{infoTitle:"Number of Drivers",infoValue:"197291"}),Object(x.jsx)(de,{infoTitle:"Settled Payout",infoValue:"820557.45",isCurrency:!0}),Object(x.jsx)(de,{infoTitle:"Pending Payout",infoValue:"123760.87",isCurrency:!0})]}),Object(x.jsxs)("div",{className:"mt-10 bg-247-secondary rounded-md border-2 border-247-dark-text mb-10",children:[Object(x.jsx)(be,{endDate:a,startDate:t,setRange:n,tableTitle:"Drivers Info"}),Object(x.jsx)(je,{headers:ye,children:A.map((function(e,t){return Object(x.jsxs)("tr",{className:i.includes(t)?"text-lg text-247-green":"text-lg",children:[Object(x.jsx)("td",{className:"border border-247-dark-text px-3 py-2",children:Object(x.jsx)(te,{checked:!!i.includes(t),iconColor:"#CACACA",name:e.id.toLowerCase(),handleChange:function(){return function(e){if(i.includes(e)){var t=i.indexOf(e),a=Object(h.a)(i);a.splice(t,1),o(a)}else o([].concat(Object(h.a)(i),[e]))}(t)}})}),Object(x.jsx)("td",{className:"border border-247-dark-text px-6 py-2",children:Object(x.jsxs)("div",{onClick:function(){k(!0),S(e)},className:"flex items-center hover:text-247-red cursor-pointer",children:[e.name," ",Object(x.jsx)(p.a,{className:"ml-3"})]})}),Object(x.jsx)("td",{className:"border border-247-dark-text px-6 py-2",children:e.id}),Object(x.jsx)("td",{className:"border border-247-dark-text px-6 py-2",children:Number(e.totalTrips).toLocaleString("en-US")}),Object(x.jsx)("td",{className:"border border-247-dark-text px-6 py-2",children:Number(e.earnings).toLocaleString("en-NG",{style:"currency",currency:"NGN",minimumFractionDigits:2,maximumFractionDigits:2})}),Object(x.jsx)("td",{className:"border border-247-dark-text px-6 py-2",children:Number(e.pendingPayout).toLocaleString("en-NG",{style:"currency",currency:"NGN",minimumFractionDigits:2,maximumFractionDigits:2})})]},"driver_".concat(e.id))}))})]}),Object(x.jsx)("div",{className:"flex items-center justify-end mb-20",children:Object(x.jsx)(ue,{activePage:b,dataLength:ce.length,firstItem:F+1,lastItem:T,pages:L,setActivePage:m,setVisibleRows:g,visibleRows:O})})]}),Object(x.jsx)(ke,{driver:I,modalIsOpen:y,setIsOpen:k})]})},we=["","Status","Campaign Name","ID","Impressions","Interactions","Vehicles"],Ie=function(){var e=Object(s.useState)(1),t=Object(N.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(5),c=Object(N.a)(r,2),o=c[0],l=c[1],d=Object(s.useState)([]),b=Object(N.a)(d,2),m=b[0],j=b[1],u=Object(i.f)().state;console.log(null===u||void 0===u?void 0:u.advertiser);var O=se(),g=O.startDate,f=O.endDate,v=O.setDateRange,y=me(a,o,ie),k=y.currentList,C=y.indexOfFirstItem,w=y.indexOfLastItem,I=y.pages;return Object(x.jsxs)(_,{pageTitle:"Campaigns",titleTag:null===u||void 0===u?void 0:u.advertiser,children:[Object(x.jsxs)("div",{className:"grid grid-cols-3 gap-6 mt-16",children:[Object(x.jsx)(de,{infoTitle:"Total Campaigns",infoValue:"86675"}),Object(x.jsx)(de,{infoTitle:"Active Campaigns",infoValue:"84178"}),Object(x.jsx)(de,{infoTitle:"Pending Campaigns",infoValue:"2455"})]}),Object(x.jsxs)("div",{className:"mt-10 bg-247-secondary rounded-md border-2 border-247-dark-text mb-10",children:[Object(x.jsx)(be,{startDate:g,endDate:f,setRange:v,tableTitle:"Campaign Info"}),Object(x.jsx)(je,{headers:we,children:k.map((function(e,t){return Object(x.jsxs)("tr",{className:m.includes(t)?"text-lg text-247-green":"text-lg",children:[Object(x.jsx)("td",{className:"border border-247-dark-text px-3 py-2",children:Object(x.jsx)(te,{checked:!!m.includes(t),iconColor:"#CACACA",name:e.id.toLowerCase(),handleChange:function(){return function(e){if(m.includes(e)){var t=m.indexOf(e),a=Object(h.a)(m);a.splice(t,1),j(a)}else j([].concat(Object(h.a)(m),[e]))}(t)}})}),Object(x.jsx)("td",{className:"border border-247-dark-text px-6 py-2",children:Object(x.jsx)("span",{className:"".concat("approved"===e.status?"bg-247-green":"stopped"===e.status?"bg-247-red":"bg-247-dark-accent2"," rounded-full text-base text-white px-2.5 py-0.5"),children:e.status})}),Object(x.jsx)("td",{className:"border border-247-dark-text px-6 py-2",children:Object(x.jsxs)("div",{className:"flex items-center hover:text-247-red cursor-pointer",children:[e.name," ",Object(x.jsx)(p.a,{className:"ml-3"})]})}),Object(x.jsx)("td",{className:"border border-247-dark-text px-6 py-2",children:e.id}),Object(x.jsx)("td",{className:"border border-247-dark-text px-6 py-2",children:Number(e.impressions).toLocaleString("en-US")}),Object(x.jsx)("td",{className:"border border-247-dark-text px-6 py-2",children:Number(e.interactions).toLocaleString("en-US")}),Object(x.jsx)("td",{className:"border border-247-dark-text px-6 py-2",children:Number(e.vehicles).toLocaleString("en-US")})]},"campaign".concat(e.id))}))})]}),Object(x.jsx)("div",{className:"flex items-center justify-end mb-20",children:Object(x.jsx)(ue,{activePage:a,dataLength:ie.length,firstItem:C+1,lastItem:w,pages:I,setActivePage:n,setVisibleRows:l,visibleRows:o})})]})},Se=function(e){var t=e.selected,a=e.selectFn,s=e.title;e.playlistId;return Object(x.jsxs)("div",{className:"bg-247-secondary border-2 border-247-dark-text pl-3 pr-12 py-6 rounded-md",children:[Object(x.jsx)(te,{checked:t,handleChange:a,name:s,iconColor:t?"#fff":"#4d4d4d"}),Object(x.jsx)("h3",{className:"text-3xl ml-3 mt-3 font-bold ".concat(t?"text-white":"text-247-gray-accent2"),children:s}),Object(x.jsxs)("div",{className:"mt-5 ml-3 flex items-center",children:[Object(x.jsx)("button",{className:"bg-247-gray-accent3 flex justify-center items-center w-10 h-9 border border-247-dark-text rounded-md",children:Object(x.jsx)(R.e,{color:"#FFFFFF",size:20})}),Object(x.jsx)("button",{className:"bg-247-gray-accent3 flex justify-center items-center w-10 h-9 border border-247-dark-text rounded-md ml-5",children:Object(x.jsx)(O.a,{color:"#FFFFFF",size:20})})]})]})},De=function(){var e=Object(s.useState)([]),t=Object(N.a)(e,2),a=t[0],n=t[1],r=function(e){if(a.includes(e)){var t=a.indexOf(e),s=Object(h.a)(a);s.splice(t,1),n(s)}else n([].concat(Object(h.a)(a),[e]))};return Object(x.jsx)(_,{pageTitle:"Ad-Playlists",children:Object(x.jsxs)("div",{className:"grid grid-cols-3 gap-6 mt-16",children:[Object(x.jsx)(Se,{selectFn:function(){return r("core")},title:"Core / General Playlist",playlistId:"core",selected:a.includes("core")}),Object(x.jsx)(Se,{selectFn:function(){return r("black-friday")},title:"Black Friday Playlist",playlistId:"black-friday",selected:a.includes("black-friday")}),Object(x.jsx)("div",{className:"w-full bg-247-secondary border-2 border-247-dark-text cursor-pointer rounded-md h-full flex items-center justify-center",children:Object(x.jsx)(R.a,{color:"#4D4D4D",size:55})})]})})},Ae=function(e){var t=e.name;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("textarea",{className:"bg-transparent border-2 border-247-dark-text w-2/3 rounded-md px-6 py-4 text-white text-lg focus:outline-none focus:ring-1",placeholder:"Write a message...",name:t,id:t,cols:"30",rows:"10"})})},Fe=function(e){var t=e.btnValue,a=e.clickFn,s=e.active;return Object(x.jsx)("div",{className:"w-36 cursor-pointer text-xl flex justify-center items-center rounded-md border border-247-dark-text text-247-gray-accent2 py-2 ".concat(s?"bg-247-gray-accent3":"bg-transparent"),onClick:a,children:t})},Te=function(){var e=Object(s.useState)("all"),t=Object(N.a)(e,2),a=t[0],n=t[1],r=function(e){n(e)};return Object(x.jsxs)(_,{pageTitle:"Send Notifs",children:[Object(x.jsxs)("div",{className:"mt-16 flex items-center gap-5",children:[Object(x.jsx)(Fe,{btnValue:"All",active:"all"===a,clickFn:function(){return r("all")}}),Object(x.jsx)(Fe,{btnValue:"Advertisers",active:"advertisers"===a,clickFn:function(){return r("advertisers")}}),Object(x.jsx)(Fe,{btnValue:"Drivers",active:"drivers"===a,clickFn:function(){return r("drivers")}})]}),Object(x.jsxs)("div",{className:"mt-14",children:[Object(x.jsx)(Ae,{name:"notif-text"}),Object(x.jsx)(f,{type:"submit",className:["bg-247-red","block","mt-12","px-10"],children:"Send Notification"})]})]})};var Le=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(i.b,{history:I,children:Object(x.jsxs)(i.c,{children:[Object(x.jsx)(i.a,{path:"/login",component:L}),Object(x.jsx)(i.a,{path:o,component:le}),Object(x.jsx)(i.a,{path:"/advertisers",component:Ne}),Object(x.jsx)(i.a,{path:"/drivers",component:Ce}),Object(x.jsx)(i.a,{path:"/campaigns",component:Ie}),Object(x.jsx)(i.a,{path:"/ad-playlists",component:De}),Object(x.jsx)(i.a,{path:"/send-notifications",component:Te})]})})})},Pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,484)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};c.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(A,{children:Object(x.jsx)(Le,{})})}),document.getElementById("root")),Pe()}},[[469,1,2]]]);
//# sourceMappingURL=main.8767c0bf.chunk.js.map