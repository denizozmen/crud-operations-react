(this["webpackJsonpcrud-operations-react"]=this["webpackJsonpcrud-operations-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(9),s=n.n(i),o=(n(16),n(10)),j=n(2),l=(n(17),n(18),n(3)),d=n(4),u=(n(8),function(){var e=Object(a.useContext)(f),t=e.currentUser,n=e.updateUser,r=e.setShow;console.log(t);var i=Object(a.useState)(t),s=Object(j.a)(i,2),o=s[0],u=s[1];Object(a.useEffect)((function(){u(t)}),[t]);var b=function(e){var t=e.target,n=t.name,c=t.value;u(Object(d.a)(Object(d.a)({},o),{},Object(l.a)({},n,c)))};return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(o.id,o),r(!1)},children:[Object(c.jsx)("label",{children:"Name"}),Object(c.jsx)("input",{type:"text",name:"name",value:o.name,onChange:b}),Object(c.jsx)("label",{children:"Description"}),Object(c.jsx)("input",{type:"text",name:"description",value:o.description,onChange:b}),Object(c.jsx)("label",{children:"Amount"}),Object(c.jsx)("input",{type:"number",name:"amount",value:o.amount,onChange:b}),Object(c.jsx)("label",{children:"Currency"}),Object(c.jsxs)("select",{type:"text",name:"currency",value:o.currency,onChange:b,children:[Object(c.jsx)("option",{value:"TRY",children:"TRY"}),Object(c.jsx)("option",{value:"USD",children:"USD"}),Object(c.jsx)("option",{value:"EUR",children:"EUR"})]}),Object(c.jsx)("button",{id:"ButtonUpdate",children:"Update Data"})]})}),b=n(24),O=function(){var e=Object(a.useContext)(f),t=e.addUser,n=e.setShow,r={id:null,name:"",description:"",operationDate:Object(b.a)(new Date,"dd.MM.yyyy"),amount:"",currency:"TRY"},i=Object(a.useState)(r),s=Object(j.a)(i,2),o=s[0],u=s[1],O=function(e){var t=e.target,n=t.name,c=t.value;u(Object(d.a)(Object(d.a)({},o),{},Object(l.a)({},n,c)))};return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.name&&o.description&&o.amount&&o.currency&&(t(o),u(r),n(!1))},children:[Object(c.jsx)("label",{children:"Name"}),Object(c.jsx)("input",{type:"text",name:"name",value:o.name,onChange:O}),Object(c.jsx)("label",{children:"Description"}),Object(c.jsx)("input",{type:"text",name:"description",value:o.description,onChange:O}),Object(c.jsx)("label",{children:"Amount"}),Object(c.jsx)("input",{type:"number",name:"amount",value:o.amount,onChange:O}),Object(c.jsx)("label",{children:"Currency"}),Object(c.jsxs)("select",{type:"text",name:"currency",value:o.currency,onChange:O,children:[Object(c.jsx)("option",{selected:!0,value:"TRY",children:"TRY"}),Object(c.jsx)("option",{value:"USD",children:"USD"}),Object(c.jsx)("option",{value:"EUR",children:"EUR"})]}),Object(c.jsx)("button",{id:"ButtonAddData",children:"Add Data"})]})},h=function(e){var t=e.show,n=e.close,r=Object(a.useContext)(f).editing;return Object(c.jsxs)("div",{className:"modal-wrapper",style:{transform:t?"translateY(0vh)":"translateY(-100vh)",opacity:t?"1":"0"},children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("p",{children:"Operations"}),Object(c.jsx)("span",{onClick:n,className:"close-modal-btn",children:"x"})]}),Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsx)("div",{className:"modal-body",children:Object(c.jsx)("div",{className:"flex-large",children:r?Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("h2",{children:"Edit Data"}),Object(c.jsx)(u,{})]}):Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("h2",{children:"Add Data"}),Object(c.jsx)(O,{})]})})}),Object(c.jsx)("div",{className:"modal-footer",children:Object(c.jsx)("button",{onClick:n,className:"btn-cancel",children:"Close"})})]})]})},x=function(){var e=Object(a.useContext)(f),t=e.show,n=e.setShow,r=e.setCurrentUser,i=e.setEditing,s={id:null,name:"",description:"",operationDate:"",amount:"",currency:""},o=function(){return n(!1)};return Object(c.jsxs)("div",{children:[t?Object(c.jsx)("div",{onClick:o,className:"back-drop"}):null,Object(c.jsx)("button",{onClick:function(){n(!0),r(s),i(!1)},className:"btn-openModal",children:"Add Data"}),Object(c.jsx)(h,{show:t,close:o})]})},m=(n(19),function(){var e=Object(a.useContext)(f),t=e.editRow,n=e.users,r=e.deleteUser,i=e.setShow;return Object(c.jsxs)("table",{id:"DataTable",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"ID"}),Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Description"}),Object(c.jsx)("th",{children:"OperationDate"}),Object(c.jsx)("th",{children:"Amount"}),Object(c.jsx)("th",{children:"Operations"})]})}),Object(c.jsx)("tbody",{children:n.length>0?n.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.id}),Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.description}),Object(c.jsx)("td",{children:e.operationDate}),Object(c.jsxs)("td",{children:[e.currency,e.amount]}),Object(c.jsxs)("td",{children:[Object(c.jsx)("button",{id:"ButonEdit",onClick:function(){t(e),i(!0)}}),Object(c.jsx)("button",{id:"ButonDelete",onClick:function(){return r(e.id)}})]})]},e.id)})):Object(c.jsx)("tr",{children:Object(c.jsx)("td",{colSpan:3,children:"No users"})})})]})}),p=n.p+"static/media/logo.6ce24c58.svg";n(20);var v=function(){return Object(c.jsxs)("div",{className:"logoreact",children:[Object(c.jsx)("img",{src:p,className:"App-logo",alt:"logo"}),Object(c.jsx)("h1",{className:"head",children:"CRUD Operations"})]})},f=(n(21),Object(a.createContext)());var y=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([{id:1,name:"Keyboard",description:"Redragon Gaming",operationDate:"01.12.2020",amount:"40",currency:"TRY"},{id:2,name:"Mouse",description:"Jelly Comb 2.4G Slim Wireless ",operationDate:"04.12.2020",amount:"10",currency:"USD"},{id:3,name:"USB",description:"SanDisk 128GB Cruzer USB 2.0 Flash Drive",operationDate:"06.12.2020",amount:"50",currency:"EUR"}]),s=Object(j.a)(i,2),l=s[0],d=s[1],u=Object(a.useState)({id:null,name:"",description:"",operationDate:"",amount:"",currency:""}),b=Object(j.a)(u,2),O=b[0],h=b[1],p=Object(a.useState)(!1),y=Object(j.a)(p,2),g=y[0],D=y[1];return Object(c.jsx)(f.Provider,{value:{editing:g,setEditing:D,currentUser:O,updateUser:function(e,t){D(!1),d(l.map((function(n){return n.id===e?t:n})))},addUser:function(e){e.id=l.length+1,d([].concat(Object(o.a)(l),[e]))},editRow:function(e){D(!0),h({id:e.id,name:e.name,description:e.description,operationDate:e.operationDate,amount:e.amount,currency:e.currency})},deleteUser:function(e){D(!1),d(l.filter((function(t){return t.id!==e})))},users:l,show:n,setShow:r,setCurrentUser:h},children:Object(c.jsxs)("div",{children:[Object(c.jsx)(v,{}),Object(c.jsx)(x,{}),Object(c.jsx)(m,{})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),g()}],[[22,1,2]]]);
//# sourceMappingURL=main.808cffd7.chunk.js.map