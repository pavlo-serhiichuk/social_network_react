(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{294:function(e,s,a){},296:function(e,s,a){},297:function(e,s,a){},303:function(e,s,a){"use strict";a.r(s);a(294);var t=a(130),n=a(1),i=(a(0),a(296),function(e){return Object(n.jsx)("div",{className:"message",children:e.message})}),c=(a(297),a(12)),r=function(e){var s="/dialogs/"+e.id;return Object(n.jsx)("div",{className:"user-dialog",children:Object(n.jsx)(c.b,{to:s,children:e.name})})},o=a(11),d=a(90),l=a(131),u=a(37),j=a(48),g=Object(j.a)(5),b=Object(l.a)({form:"sendMessage"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,action:"",className:"create-text",children:[Object(n.jsx)(d.a,{className:"enter-post",type:"text",placeholder:"Share your thoughts...",value:"",component:u.b,validate:[j.b,g],name:"text"}),Object(n.jsx)("button",{className:"share-post fas fa-paper-plane"})]})}));var m=a(13),p=a(97),h=a(9);s.default=Object(h.d)(Object(m.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(s){return e(Object(t.a)(s))}}})),p.a)((function(e){var s=e.dialogsPage.dialogs.map((function(e){return Object(n.jsx)(r,{id:e.id,name:e.name},e.id)})),a=e.dialogsPage.messages.map((function(e){return Object(n.jsx)(i,{message:e.message},e.id)}));return e.isAuth?Object(n.jsxs)("div",{className:"dialogs",children:[Object(n.jsx)("div",{className:"users-dialogs",children:s}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"messages",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{className:"little-avatar",src:"https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",alt:""})}),Object(n.jsx)(b,{onSubmit:function(s){return e.addMessage(s.text)},dialogPage:e.dialogsPage})]}),a]})]}):Object(n.jsx)(o.a,{to:"/login"})}))}}]);
//# sourceMappingURL=4.ffca59cd.chunk.js.map