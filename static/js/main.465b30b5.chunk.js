(this.webpackJsonpreactcalendar=this.webpackJsonpreactcalendar||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(6),i=a.n(r),s=a(2),o=a(3),l=a.n(o),u=a(4),d=(a(12),a(0)),j=function(e){var t=e.day,a=e.actuallyDate,c=e.fetchMonth,r=e.actuallyMonth,i=e.actuallyYear,o=Object(n.useState)(!1),j=Object(s.a)(o,2),h=j[0],b=j[1],f=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(r,i);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t.events.length>10&&b(!0)}),[]),Object(d.jsxs)("div",{className:"task-list-container",children:["Lista wydarze\u0144:",Object(d.jsxs)("ul",{className:"task-list",children:[h&&Object(d.jsxs)("div",{className:"info-modal",children:["Zmniejsz ilo\u015b\u0107 wydarze\u0144 na ten dzie\u0144 !",Object(d.jsx)("button",{onClick:function(){return b(!1)},children:"OK"})]}),t.events.map((function(e){return Object(d.jsxs)("li",{id:e._id,className:"task",children:[Object(d.jsx)("h2",{children:e.title}),Object(d.jsx)("p",{children:e.body}),Object(d.jsx)("button",{className:"remove-task-button",id:e._id,onClick:function(){var t=Object(u.a)(l.a.mark((function t(n){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.target.id!==e._id){t.next=6;break}return c="".concat("https://calendar-app-szadziu.herokuapp.com/api/event/").concat(a,"/").concat(n.target.id),t.next=4,fetch(c,{method:"DELETE"});case 4:return t.next=6,f();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"usu\u0144"})]},t.dayId)}))]})]})},h=(a(14),function(e){var t=e.day,a=e.isDisplay,c=e.actuallyDate,r=e.fetchMonth,i=e.actuallyMonth,o=e.actuallyYear,h=Object(n.useRef)(null);Object(n.useEffect)((function(){return h.current.addEventListener("click",(function(){return a(!1)})),h.current.removeEventListener("click",(function(){return a(!1)}))}),[]);var b=Object(n.useState)(""),f=Object(s.a)(b,2),p=f[0],O=f[1],y=Object(n.useState)(""),m=Object(s.a)(y,2),v=m[0],x=m[1],w=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://calendar-app-szadziu.herokuapp.com/api/event/".concat(c),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,r(i,o);case 5:return e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{ref:h,className:"modal-overlay"}),Object(d.jsxs)("div",{className:"modal-calendar",children:[Object(d.jsx)("p",{children:"Wybrana data to: ".concat(t.date)}),Object(d.jsx)("p",{children:"Masz ".concat(t.events.length," wydarze\u0144 na ten dzie\u0144")}),Object(d.jsx)("button",{disabled:!(p.length>2)||!(v.length>2),className:"add-button-modal",onClick:function(){w({title:p,body:v}),O(""),x("")},children:"dodaj wydarzenie"}),Object(d.jsx)("label",{className:"title-label",htmlFor:"title",children:"Tytu\u0142"}),Object(d.jsx)("input",{className:"inputTask",value:p,id:"title",placeholder:"wpisz tytu\u0142",type:"text",onChange:function(e){var t=e.target.value;return O(t)}}),Object(d.jsx)("label",{className:"body-label",htmlFor:"body",children:"Opis"}),Object(d.jsx)("input",{className:"inputTask",value:v,id:"body",placeholder:"wpisz tre\u015b\u0107",type:"text",onChange:function(e){var t=e.target.value;return x(t)}}),Object(d.jsx)(j,{fetchMonth:r,actuallyMonth:i,actuallyYear:o,actuallyDate:c,day:t})]})]})}),b=["Niedziela","Poniedzia\u0142ek","Wtorek","\u015aroda","Czwartek","Pi\u0105tek","Sobota","Niedziela"],f=["Stycze\u0144","Luty","Marzec","Kwiecie\u0144","Maj","Czerwiec","Lipiec","Sierpie\u0144","Wrzesie\u0144","Pa\u017adziernik","Listopad","Grudzie\u0144"],p=(a(15),function(e){var t=e.day,a=e.fetchMonth,c=Object(n.useState)(!1),r=Object(s.a)(c,2),i=r[0],o=r[1],l={actuallyDay:1*t.date.slice(0,2).replace("-","")-1,actuallyMonth:1*t.date.slice(-7,-4).replace("-","").replace("-","")-1,actuallyYear:t.date.slice(-4)},u=l.actuallyDay,j=l.actuallyMonth,f=l.actuallyYear,p="".concat(u,"/").concat(j,"/").concat(f),O=new Date(f,j,u).getDay()+1,y=t.events.length&&"isEventOn",m=7===O?"isSundayDay":"isDayOfWeek";return Object(d.jsxs)("div",{className:"day-calendar",onClick:function(){o(!0)},children:[Object(d.jsx)("p",{className:"number-day-calendar",children:t.date.slice(0,2).replace("-","")}),Object(d.jsx)("p",{className:m,children:b[O]}),Object(d.jsxs)("p",{className:y,children:["Wydarzenia: ",t.events.length]}),i&&Object(d.jsx)(h,{fetchMonth:a,actuallyMonth:j,actuallyYear:f,actuallyDate:p,isDisplay:o,day:t})]})}),O=(a(16),function(e){var t=e.actuallyMonth,a=e.fetchMonth,n=t.map((function(e){return Object(d.jsx)(p,{fetchMonth:a,day:e},e.dayId)}));return Object(d.jsx)("div",{className:"main-calendar",children:n})}),y=(a(17),function(e){var t=e.setCurrentMonth,a=e.setCurrentYear,n=e.currentMonth,c=e.currentYear,r=function(){n<=0?(t(11),a(c-1)):t(n-1)},i=function(){n>=11?(t(0),a(c+1)):t(n+1)};return Object(d.jsxs)("div",{className:"arrows-container",children:[Object(d.jsxs)("div",{onClick:function(){return i()},className:"arrow",children:[Object(d.jsx)("div",{className:"arrow-top"}),Object(d.jsx)("div",{className:"arrow-bottom"})]}),Object(d.jsxs)("div",{onClick:function(){return r()},className:"arrow arrow-left",children:[Object(d.jsx)("div",{className:"arrow-top"}),Object(d.jsx)("div",{className:"arrow-bottom"})]})]})}),m=(a(18),function(e){var t=e.fetchMonth,a=Object(n.useState)((new Date).getMonth()),c=Object(s.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)((new Date).getFullYear()),l=Object(s.a)(o,2),u=l[0],j=l[1];return Object(n.useEffect)((function(){return t(r,u)}),[r]),Object(d.jsxs)("header",{className:"header-calendar",children:[Object(d.jsx)("h1",{className:"month-calendar",children:"".concat(f[r]," ").concat(u)}),Object(d.jsx)(y,{currentMonth:r,currentYear:u,setCurrentYear:j,setCurrentMonth:i})]})}),v=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}};a(19);var x=function(e){var t=e.actuallyMonth,a=e.fetchMonth,c=function(){var e=Object(n.useState)(v()),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=function(){c(v())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}(),r=c.width,i=c.height;return r>=800&&i>=600?Object(d.jsxs)("div",{className:"main-container",children:[Object(d.jsx)(m,{fetchMonth:a}),Object(d.jsx)(O,{fetchMonth:a,actuallyMonth:t})]}):Object(d.jsx)("div",{className:"resolution-info",children:"Przykro mi :( aplikacja jest dost\u0119pna tylko dla urz\u0105dze\u0144 o rozdzielczo\u015bci minimum 1366x768"})},w=(a(20),function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(d.jsx)(x,{actuallyMonth:a,fetchMonth:function(e,t){fetch("".concat("https://calendar-app-szadziu.herokuapp.com/api/month/").concat(e,"/").concat(t)).then((function(e){return e.json()})).then((function(e){c(e.data.days)}))}})});i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.465b30b5.chunk.js.map