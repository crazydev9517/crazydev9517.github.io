(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[61],{1296:function(e,t,a){},1666:function(e,t,a){"use strict";a.r(t);var l=a(36),s=a(1),c=a(2),n=a.n(c),r=a(91),i=a(17),o=a(1540),d=a(1290),b=a(1016),j=a(1293),u=a(1295),m=a(481),h=a(131),O=a(921),v=a(863),f=a(12),x=function(e){var t=e.title,a=e.icon,l=e.color;return Object(f.jsx)(s.Fragment,{children:Object(f.jsx)("div",{className:"toastify-header pb-0",children:Object(f.jsxs)("div",{className:"title-wrapper",children:[Object(f.jsx)(m.a,{size:"sm",color:l,icon:a}),Object(f.jsx)("h6",{className:"toast-title",children:t})]})})})},p=function(e){var t=Object(s.useRef)(null),a=e.store,l=e.isRtl,c=e.dispatch,n=e.calendarsColor,m=e.calendarApi,p=e.setCalendarApi,g=e.handleAddEventSidebar,N=e.blankEvent,y=e.toggleSidebar,C=e.selectEvent,E=e.updateEvent;Object(s.useEffect)((function(){null===m&&p(t.current.getApi())}),[m]);var w={events:a.events.length?a.events:[],plugins:[u.a,b.b,j.a,d.a],initialView:"dayGridMonth",headerToolbar:{start:"sidebarToggle, prev,next, title",end:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"},editable:!0,eventResizableFromStart:!0,dragScroll:!0,dayMaxEvents:2,navLinks:!0,eventClassNames:function(e){var t=e.event,a=n[t._def.extendedProps.calendar];return["bg-light-".concat(a)]},eventClick:function(e){var t=e.event;c(C(t)),g()},customButtons:{sidebarToggle:{text:Object(f.jsx)(O.a,{className:"d-xl-none d-block"}),click:function(){y(!0)}}},dateClick:function(e){var t=N;t.start=e.date,t.end=e.date,c(C(t)),g()},eventDrop:function(e){var t=e.event;c(E(t)),h.f.success(Object(f.jsx)(x,{title:"Event Updated",color:"success",icon:Object(f.jsx)(v.a,{})}),{icon:!1,autoClose:2e3,hideProgressBar:!0,closeButton:!1})},eventResize:function(e){var t=e.event;c(E(t)),h.f.success(Object(f.jsx)(x,{title:"Event Updated",color:"success",icon:Object(f.jsx)(v.a,{})}),{icon:!1,autoClose:2e3,hideProgressBar:!0,closeButton:!1})},ref:t,direction:l?"rtl":"ltr"};return Object(f.jsx)(r.l,{className:"shadow-none border-0 mb-0 rounded-0",children:Object(f.jsxs)(r.m,{className:"pb-0",children:[Object(f.jsx)(o.a,Object(i.a)({},w))," "]})})},g=Object(s.memo)(p),N=a(66),y=a(722),C=[{label:"Personal",color:"danger",className:"form-check-danger mb-1"},{label:"Business",color:"primary",className:"form-check-primary mb-1"},{label:"Family",color:"warning",className:"form-check-warning mb-1"},{label:"Holiday",color:"success",className:"form-check-success mb-1"},{label:"ETC",color:"info",className:"form-check-info"}],E=function(e){var t=e.handleAddEventSidebar,a=e.toggleSidebar,l=e.updateFilter,c=e.updateAllFilters,i=e.store,o=e.dispatch;return Object(f.jsxs)(s.Fragment,{children:[Object(f.jsxs)("div",{className:"sidebar-wrapper",children:[Object(f.jsx)(r.m,{className:"card-body d-flex justify-content-center my-sm-0 mb-3",children:Object(f.jsx)(r.i,{color:"primary",block:!0,onClick:function(){a(!1),t()},children:Object(f.jsx)("span",{className:"align-middle",children:"Add Event"})})}),Object(f.jsxs)(r.m,{children:[Object(f.jsx)("h5",{className:"section-label mb-1",children:Object(f.jsx)("span",{className:"align-middle",children:"Filter"})}),Object(f.jsxs)("div",{className:"form-check mb-1",children:[Object(f.jsx)(r.K,{id:"view-all",type:"checkbox",label:"View All",className:"select-all",checked:i.selectedCalendars.length===C.length,onChange:function(e){return o(c(e.target.checked))}}),Object(f.jsx)(r.N,{className:"form-check-label",for:"view-all",children:"View All"})]}),Object(f.jsx)("div",{className:"calendar-events-filter",children:C.length&&C.map((function(e){return Object(f.jsxs)("div",{className:n()("form-check",Object(N.a)({},e.className,e.className)),children:[Object(f.jsx)(r.K,{type:"checkbox",label:e.label,className:"input-filter",id:"".concat(e.label,"-event"),checked:i.selectedCalendars.includes(e.label),onChange:function(){o(l(e.label))}},e.label),Object(f.jsx)(r.N,{className:"form-check-label",for:"".concat(e.label,"-event"),children:e.label})]},"".concat(e.label,"-key"))}))})]})]}),Object(f.jsx)("div",{className:"mt-auto",children:Object(f.jsx)("img",{className:"img-fluid",src:y.default,alt:"illustration"})})]})},w=a(128),k=a(130),D=a(495),S=a.n(D),B=a(821),P=a(553),A=a(499),F=a(509),T=a.n(F),R=a(485),L=a(484),U=a(38),V=a(74),G=a(73),H=a(98),K=a(3),M=a(258),z=(a(512),a(496),["data"]),q=["data"],J=function(e){var t=e.title,a=e.icon,l=e.color;return Object(f.jsx)(s.Fragment,{children:Object(f.jsx)("div",{className:"toastify-header pb-0",children:Object(f.jsxs)("div",{className:"title-wrapper",children:[Object(f.jsx)(m.a,{size:"sm",color:l,icon:a}),Object(f.jsx)("h6",{className:"toast-title",children:t})]})})})},I=function(e){var t=e.open,a=e.store,c=e.dispatch,n=e.addEvent,o=e.calendarApi,d=e.selectEvent,b=e.updateEvent,j=e.removeEvent,u=e.refetchEvents,O=e.calendarsColor,x=e.handleAddEventSidebar,p=a.selectedEvent,g=Object(R.e)({defaultValues:{title:""}}),N=g.control,y=g.setError,C=g.setValue,E=g.getValues,D=g.handleSubmit,F=g.formState.errors,I=Object(s.useState)(""),Y=Object(l.a)(I,2),Q=Y[0],W=Y[1],_=Object(s.useState)(""),X=Object(l.a)(_,2),Z=X[0],$=X[1],ee=Object(s.useState)({}),te=Object(l.a)(ee,2),ae=te[0],le=te[1],se=Object(s.useState)(!1),ce=Object(l.a)(se,2),ne=ce[0],re=ce[1],ie=Object(s.useState)(""),oe=Object(l.a)(ie,2),de=oe[0],be=oe[1],je=Object(s.useState)(new Date),ue=Object(l.a)(je,2),me=ue[0],he=ue[1],Oe=Object(s.useState)(new Date),ve=Object(l.a)(Oe,2),fe=ve[0],xe=ve[1],pe=Object(s.useState)([{value:"Business",label:"Business",color:"primary"}]),ge=Object(l.a)(pe,2),Ne=ge[0],ye=ge[1],Ce=[{value:"Donna Frank",label:"Donna Frank",avatar:U.default},{value:"Jane Foster",label:"Jane Foster",avatar:V.default},{value:"Gabrielle Robertson",label:"Gabrielle Robertson",avatar:G.default},{value:"Lori Spears",label:"Lori Spears",avatar:H.default},{value:"Sandy Vega",label:"Sandy Vega",avatar:K.default},{value:"Cheryl May",label:"Cheryl May",avatar:M.default}],Ee=function(){if(E("title").length){var e={id:p.id,title:E("title"),allDay:ne,start:fe,end:me,url:Q,display:!1===ne?"block":void 0,extendedProps:{location:de,description:Z,guests:ae,calendar:Ne[0].label}};c(b(e)),function(e,t,a){for(var l=o.getEventById(e.id),s=0;s<t.length;s++){var c=t[s];l.setProp(c,e[c])}l.setDates(new Date(e.start),new Date(e.end),{allDay:e.allDay});for(var n=0;n<a.length;n++){var r=a[n];l.setExtendedProp(r,e.extendedProps[r])}}(e,["id","title","url"],["calendar","guests","location","description"]),x(),h.f.success(Object(f.jsx)(J,{title:"Event Updated",color:"success",icon:Object(f.jsx)(v.a,{})}),{icon:!1,autoClose:2e3,hideProgressBar:!0,closeButton:!1})}else y("title",{type:"manual"})},we=function(){var e;c(j(p.id)),e=p.id,o.getEventById(e).remove(),x(),h.f.error(Object(f.jsx)(J,{title:"Event Removed",color:"danger",icon:Object(f.jsx)(Trash,{})}),{icon:!1,autoClose:2e3,hideProgressBar:!0,closeButton:!1})},ke=function(){return Object(L.e)(p)||!Object(L.e)(p)&&!p.title.length?Object(f.jsxs)(s.Fragment,{children:[Object(f.jsx)(r.i,{className:"me-1",type:"submit",color:"primary",children:"Add"}),Object(f.jsx)(r.i,{color:"secondary",type:"reset",onClick:x,outline:!0,children:"Cancel"})]}):Object(f.jsxs)(s.Fragment,{children:[Object(f.jsx)(r.i,{className:"me-1",color:"primary",onClick:Ee,children:"Update"}),Object(f.jsx)(r.i,{color:"danger",onClick:we,outline:!0,children:"Delete"})]})},De=Object(f.jsx)(B.a,{className:"cursor-pointer",size:15,onClick:x});return Object(f.jsxs)(r.Q,{isOpen:t,className:"sidebar-lg",toggle:x,onOpened:function(){if(!Object(L.e)(p)){var e=p.extendedProps.calendar;C("title",p.title||E("title")),re(p.allDay||ne),W(p.url||Q),be(p.extendedProps.location||de),$(p.extendedProps.description||Z),le(p.extendedProps.guests||ae),xe(new Date(p.start)),he(p.allDay?new Date(p.start):new Date(p.end)),ye([e.length?{label:e,value:e,color:O[e]}:{value:"Business",label:"Business",color:"primary"}])}},onClosed:function(){c(d({})),C("title",""),re(!1),W(""),be(""),$(""),le({}),ye([{value:"Business",label:"Business",color:"primary"}]),xe(new Date),he(new Date)},contentClassName:"p-0 overflow-hidden",modalClassName:"modal-slide-in event-sidebar",children:[Object(f.jsx)(r.T,{className:"mb-1",toggle:x,close:De,tag:"div",children:Object(f.jsxs)("h5",{className:"modal-title",children:[p&&p.title&&p.title.length?"Update":"Add"," Event"]})}),Object(f.jsx)(T.a,{options:{wheelPropagation:!1},children:Object(f.jsx)(r.R,{className:"flex-grow-1 pb-sm-0 pb-3",children:Object(f.jsxs)(r.H,{onSubmit:D((function(e){e.title.length?Object(L.e)(F)&&(Object(L.e)(p)||!Object(L.e)(p)&&!p.title.length?function(){var e={title:E("title"),start:fe,end:me,allDay:ne,display:"block",extendedProps:{calendar:Ne[0].label,url:Q.length?Q:void 0,guests:ae.length?ae:void 0,location:de.length?de:void 0,desc:Z.length?Z:void 0}};c(n(e)),u(),x(),h.f.success(Object(f.jsx)(J,{title:"Event Added",color:"success",icon:Object(f.jsx)(v.a,{})}),{icon:!1,autoClose:2e3,hideProgressBar:!0,closeButton:!1})}():Ee(),x()):y("title",{type:"manual"})})),children:[Object(f.jsxs)("div",{className:"mb-1",children:[Object(f.jsxs)(r.N,{className:"form-label",for:"title",children:["Title ",Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)(R.a,{name:"title",control:N,render:function(e){var t=e.field;return Object(f.jsx)(r.K,Object(i.a)({id:"title",placeholder:"Title",invalid:F.title&&!0},t))}})]}),Object(f.jsxs)("div",{className:"mb-1",children:[Object(f.jsx)(r.N,{className:"form-label",for:"label",children:"Label"}),Object(f.jsx)(A.a,{id:"label",value:Ne,options:[{value:"Business",label:"Business",color:"primary"},{value:"Personal",label:"Personal",color:"danger"},{value:"Family",label:"Family",color:"warning"},{value:"Holiday",label:"Holiday",color:"success"},{value:"ETC",label:"ETC",color:"info"}],theme:L.h,className:"react-select",classNamePrefix:"select",isClearable:!1,onChange:function(e){return ye([e])},components:{Option:function(e){var t=e.data,a=Object(k.a)(e,z);return Object(f.jsxs)(P.q.Option,Object(i.a)(Object(i.a)({},a),{},{children:[Object(f.jsx)("span",{className:"bullet bullet-".concat(t.color," bullet-sm me-50")}),t.label]}))}}})]}),Object(f.jsxs)("div",{className:"mb-1",children:[Object(f.jsx)(r.N,{className:"form-label",for:"startDate",children:"Start Date"}),Object(f.jsx)(S.a,{required:!0,id:"startDate",name:"startDate",className:"form-control",onChange:function(e){return xe(e[0])},value:fe,options:{enableTime:!1===ne,dateFormat:"Y-m-d H:i"}})]}),Object(f.jsxs)("div",{className:"mb-1",children:[Object(f.jsx)(r.N,{className:"form-label",for:"endDate",children:"End Date"}),Object(f.jsx)(S.a,{required:!0,id:"endDate",name:"endDate",className:"form-control",onChange:function(e){return he(e[0])},value:me,options:{enableTime:!1===ne,dateFormat:"Y-m-d H:i"}})]}),Object(f.jsxs)("div",{className:"form-switch mb-1",children:[Object(f.jsx)(r.K,{id:"allDay",type:"switch",className:"me-1",checked:ne,name:"customSwitch",onChange:function(e){return re(e.target.checked)}}),Object(f.jsx)(r.N,{className:"form-label",for:"allDay",children:"All Day"})]}),Object(f.jsxs)("div",{className:"mb-1",children:[Object(f.jsx)(r.N,{className:"form-label",for:"eventURL",children:"Event URL"}),Object(f.jsx)(r.K,{type:"url",id:"eventURL",value:Q,onChange:function(e){return W(e.target.value)},placeholder:"https://www.google.com"})]}),Object(f.jsxs)("div",{className:"mb-1",children:[Object(f.jsx)(r.N,{className:"form-label",for:"guests",children:"Guests"}),Object(f.jsx)(A.a,{isMulti:!0,id:"guests",className:"react-select",classNamePrefix:"select",isClearable:!1,options:Ce,theme:L.h,value:ae.length?Object(w.a)(ae):null,onChange:function(e){return le(Object(w.a)(e))},components:{Option:function(e){var t=e.data,a=Object(k.a)(e,q);return Object(f.jsx)(P.q.Option,Object(i.a)(Object(i.a)({},a),{},{children:Object(f.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[Object(f.jsx)(m.a,{className:"my-0 me-1",size:"sm",img:t.avatar}),Object(f.jsx)("div",{children:t.label})]})}))}}})]}),Object(f.jsxs)("div",{className:"mb-1",children:[Object(f.jsx)(r.N,{className:"form-label",for:"location",children:"Location"}),Object(f.jsx)(r.K,{id:"location",value:de,onChange:function(e){return be(e.target.value)},placeholder:"Office"})]}),Object(f.jsxs)("div",{className:"mb-1",children:[Object(f.jsx)(r.N,{className:"form-label",for:"description",children:"Description"}),Object(f.jsx)(r.K,{type:"textarea",name:"text",id:"description",rows:"3",value:Z,onChange:function(e){return $(e.target.value)},placeholder:"Description"})]}),Object(f.jsx)("div",{className:"d-flex mb-1",children:Object(f.jsx)(ke,{})})]})})})]})},Y=a(543),Q=a(129),W=a(166),_=(a(1296),{Business:"primary",Holiday:"success",Personal:"danger",Family:"warning",ETC:"info"});t.default=function(){var e=Object(Q.b)(),t=Object(Q.c)((function(e){return e.calendar})),a=Object(s.useState)(null),c=Object(l.a)(a,2),i=c[0],o=c[1],d=Object(s.useState)(!1),b=Object(l.a)(d,2),j=b[0],u=b[1],m=Object(s.useState)(!1),h=Object(l.a)(m,2),O=h[0],v=h[1],x=Object(Y.a)(),p=Object(l.a)(x,1)[0],N=function(){return u(!j)},y=function(e){return v(e)};return Object(s.useEffect)((function(){e(Object(W.c)(t.selectedCalendars))}),[]),Object(f.jsxs)(s.Fragment,{children:[Object(f.jsx)("div",{className:"app-calendar overflow-hidden border",children:Object(f.jsxs)(r.ib,{className:"g-0",children:[Object(f.jsx)(r.B,{id:"app-calendar-sidebar",className:n()("col app-calendar-sidebar flex-grow-0 overflow-hidden d-flex flex-column",{show:O}),children:Object(f.jsx)(E,{store:t,dispatch:e,updateFilter:W.h,toggleSidebar:y,updateAllFilters:W.f,handleAddEventSidebar:N})}),Object(f.jsx)(r.B,{className:"position-relative",children:Object(f.jsx)(g,{isRtl:p,store:t,dispatch:e,blankEvent:{title:"",start:"",end:"",allDay:!1,url:"",extendedProps:{calendar:"",guests:[],location:"",description:""}},calendarApi:i,selectEvent:W.e,updateEvent:W.g,toggleSidebar:y,calendarsColor:_,setCalendarApi:o,handleAddEventSidebar:N})}),Object(f.jsx)("div",{className:n()("body-content-overlay",{show:!0===O}),onClick:function(){return y(!1)}})]})}),Object(f.jsx)(I,{store:t,dispatch:e,addEvent:W.a,open:j,selectEvent:W.e,updateEvent:W.g,removeEvent:W.d,calendarApi:i,refetchEvents:function(){null!==i&&i.refetchEvents()},calendarsColor:_,handleAddEventSidebar:N})]})}},496:function(e,t,a){},722:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/calendar-illustration.42be42ce.png"}}]);
//# sourceMappingURL=61.9626f267.chunk.js.map