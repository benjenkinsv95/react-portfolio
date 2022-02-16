(this["webpackJsonpReact Portfolio"]=this["webpackJsonpReact Portfolio"]||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(23),s=a.n(r),c=(a(84),a(54)),i=a(6),o=a(8),l=a(117),d=(a(85),a(59)),b=a(1);var j,u,h=function(e){var t=e.variant,a=e.heading,r=e.message,s=Object(n.useState)(!0),c=Object(i.a)(s,2),o=c[0],l=c[1],j=Object(n.useState)(null),u=Object(i.a)(j,2),h=u[0],m=u[1];return console.log(h),Object(n.useEffect)((function(){var e=setTimeout((function(){return l(!1)}),5e3);return m(e),function(){clearTimeout(h)}}),[]),Object(b.jsx)(d.a,{variant:t,onClose:function(){return l(!1)},dismissible:!0,show:o,children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(d.a.Heading,{children:a}),Object(b.jsx)("p",{className:"alert-body",children:r})]})})},m=a(79),g=a(44),p=a(74),O=a(18),x=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(b.jsx)(O.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),f=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("a",{href:"#about",className:"nav-link",children:"About"}),Object(b.jsx)("a",{href:"#projects",className:"nav-link",children:"Projects"})]}),v=Object(b.jsx)(b.Fragment,{}),w=function(e){var t=e.user;return Object(b.jsx)(g.a,{bg:"dark",variant:"dark",expand:"md",children:Object(b.jsxs)(p.a,{children:[Object(b.jsx)(g.a.Brand,{children:Object(b.jsx)(O.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"Ben Jenkins"})}),Object(b.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsx)(g.a.Collapse,{id:"basic-navbar-nav",children:Object(b.jsxs)(m.a,{className:"ms-auto",children:[t&&Object(b.jsxs)("span",{className:"navbar-text me-2",children:["Welcome, ",t.email]}),v,t?x:f]})})]})})},k=a(20),y=a.n(k),S=a(27),N="https://aqueous-atoll-85096.herokuapp.com",C="http://localhost:4741",P="localhost"===window.location.hostname?C:N,A=a(42),I=a.n(A),U=function(e,t,a){return I.a.post(P+"/sign-up/",{credentials:{email:e,password:t,password_confirmation:a}})},E=function(e,t){return I.a.post(P+"/sign-in/",{credentials:{email:e,password:t}})},D=function(e){return I.a.delete(P+"/sign-out/",{headers:{Authorization:"Bearer ".concat(e.token)}})},L=function(e,t,a){return I.a.patch(P+"/change-password/",{passwords:{old:e,new:t}},{headers:{Authorization:"Bearer ".concat(a.token)}})},B=a(10),F=a(33),G=a(2),R="56px",z={background:"linear-gradient(60deg, #fdbb2d, #d6c534, #b0cb4a, #8ccd65, #68cd81, #44cb9b, #24c7b2, #22c1c3)",color:"white",minHeight:"calc(100vh - ".concat(R,")")},H={background:"radial-gradient(circle at 50% 50%, #22c1c3, #24c7b2, #44cb9b, #68cd81, #8ccd65, #b0cb4a, #d6c534, #fdbb2d)",color:"white",minHeight:"calc(100vh - ".concat(R,")")},_=Object(G.a)(Object(G.a)({},{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxWidth:"100%",margin:"0"}),z),q=function(e){var t=e.msgAlert,a=e.setUser,r=e.user,s=Object(n.useState)(""),c=Object(i.a)(s,2),l=c[0],d=c[1],j=Object(n.useState)(""),u=Object(i.a)(j,2),h=u[0],m=u[1],g=Object(n.useState)(""),p=Object(i.a)(g,2),O=p[0],x=p[1],f=Object(n.useState)(!1),v=Object(i.a)(f,2),w=v[0],k=v[1],N=function(){var e=Object(S.a)(y.a.mark((function e(n){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,U(l,h,O);case 4:return e.next=6,E(l,h);case 6:r=e.sent,a(r.data.user),localStorage.setItem("user",JSON.stringify(r.data.user)),t({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),k(!0),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(1),d(""),m(""),x(""),t({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"});case 19:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return w||r?Object(b.jsx)(o.a,{to:"/"}):Object(b.jsx)("div",{style:_,className:"row",children:Object(b.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(b.jsx)("h3",{children:"Sign Up"}),Object(b.jsxs)(B.a,{onSubmit:N,children:[Object(b.jsxs)(B.a.Group,{controlId:"email",children:[Object(b.jsx)(B.a.Label,{children:"Email address"}),Object(b.jsx)(B.a.Control,{required:!0,type:"email",name:"email",value:l,placeholder:"Enter email",onChange:function(e){return d(e.target.value)}})]}),Object(b.jsxs)(B.a.Group,{controlId:"password",children:[Object(b.jsx)(B.a.Label,{children:"Password"}),Object(b.jsx)(B.a.Control,{required:!0,name:"password",value:h,type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}})]}),Object(b.jsxs)(B.a.Group,{controlId:"passwordConfirmation",children:[Object(b.jsx)(B.a.Label,{children:"Password Confirmation"}),Object(b.jsx)(B.a.Control,{required:!0,name:"passwordConfirmation",value:O,type:"password",placeholder:"Confirm Password",onChange:function(e){return x(e.target.value)}})]}),Object(b.jsx)(F.a,{className:"mt-2",variant:"dark",type:"submit",children:"Submit"})]})]})})},J=function(e){var t=e.msgAlert,a=e.setUser,r=e.user,s=Object(n.useState)(""),c=Object(i.a)(s,2),l=c[0],d=c[1],j=Object(n.useState)(""),u=Object(i.a)(j,2),h=u[0],m=u[1],g=Object(n.useState)(!1),p=Object(i.a)(g,2),O=p[0],x=p[1],f=function(){var e=Object(S.a)(y.a.mark((function e(n){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,E(l,h);case 4:r=e.sent,a(r.data.user),localStorage.setItem("user",JSON.stringify(r.data.user)),t({heading:"Sign In Success",message:"Welcome!",variant:"success"}),x(!0),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),d(""),m(""),t({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"});case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return O||r?Object(b.jsx)(o.a,{to:"/"}):Object(b.jsx)("div",{style:_,className:"row",children:Object(b.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(b.jsx)("h3",{children:"Sign In"}),Object(b.jsxs)(B.a,{onSubmit:f,children:[Object(b.jsxs)(B.a.Group,{controlId:"email",children:[Object(b.jsx)(B.a.Label,{children:"Email address"}),Object(b.jsx)(B.a.Control,{required:!0,type:"email",name:"email",value:l,placeholder:"Enter email",onChange:function(e){return d(e.target.value)}})]}),Object(b.jsxs)(B.a.Group,{controlId:"password",children:[Object(b.jsx)(B.a.Label,{children:"Password"}),Object(b.jsx)(B.a.Control,{required:!0,name:"password",value:h,type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}})]}),Object(b.jsx)(F.a,{className:"mt-2",variant:"dark",type:"submit",children:"Submit"})]})]})})},T=function(e){var t=e.msgAlert,a=e.clearUser,r=e.user,s=Object(n.useState)(!1),c=Object(i.a)(s,2),l=c[0],d=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}),localStorage.removeItem("user"),a(),d(!0),e.next=6,D(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!r||l?Object(b.jsx)(o.a,{to:"/"}):""},M=function(e){var t=e.msgAlert,a=e.user,r=Object(n.useState)(""),s=Object(i.a)(r,2),c=s[0],l=s[1],d=Object(n.useState)(""),j=Object(i.a)(d,2),u=j[0],h=j[1],m=Object(n.useState)(!1),g=Object(i.a)(m,2),p=g[0],O=g[1],x=function(){var e=Object(S.a)(y.a.mark((function e(n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,L(c,u,a);case 4:t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),O(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),l(""),h(""),t({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!a||p?Object(b.jsx)(o.a,{to:"/"}):Object(b.jsx)("div",{style:_,className:"row",children:Object(b.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(b.jsx)("h3",{children:"Change Password"}),Object(b.jsxs)(B.a,{onSubmit:x,children:[Object(b.jsxs)(B.a.Group,{controlId:"oldPassword",children:[Object(b.jsx)(B.a.Label,{children:"Old password"}),Object(b.jsx)(B.a.Control,{required:!0,name:"oldPassword",value:c,type:"password",placeholder:"Old Password",onChange:function(e){return l(e.target.value)}})]}),Object(b.jsxs)(B.a.Group,{controlId:"newPassword",children:[Object(b.jsx)(B.a.Label,{children:"New Password"}),Object(b.jsx)(B.a.Control,{required:!0,name:"newPassword",value:u,type:"password",placeholder:"New Password",onChange:function(e){return h(e.target.value)}})]}),Object(b.jsx)(F.a,{className:"mt-2",variant:"dark",type:"submit",children:"Submit"})]})]})})},W=a(40),K=a.p+"static/media/profile_pic.9690dca2.jpg",V=a.p+"static/media/ben-jenkins-resume.647ce9dd.pdf",Y=a(41);function Q(){var e=Object(n.useState)({width:void 0,height:void 0}),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}var Z,X=Y.a.p(j||(j=Object(W.a)(["\n    font-size: 1.3em;\n    margin-bottom: 1.3em;\n    line-height: 1.8em;\n"]))),$=Y.a.button(u||(u=Object(W.a)(["\n    font-weight: 600;\n"]))),ee=function(){var e=Q().width;return Object(b.jsx)("div",{id:"about",className:"container",children:Object(b.jsxs)("div",{className:"row mb-4",children:[Object(b.jsxs)("div",{className:"col-sm-8 mt-4",children:[Object(b.jsx)("h2",{className:"title-h2 text-secondary",children:"About Me"}),Object(b.jsxs)(X,{children:["I","'","m a software engineering instructor at General Assembly. I have had the opportunity to ",Object(b.jsx)("span",{className:"text-secondary",children:"teach over 500 new developers"})," in demand skills, such as ",Object(b.jsx)("span",{className:"text-primary",children:"React, Express, & Django"})," that they used to land jobs as full-stack developers."]}),Object(b.jsxs)(X,{children:["Prior to General Assembly I developed software for ",Object(b.jsx)("span",{className:"text-primary",children:"humanoid robots"})," which delivered therapy lessons to children with Autism."]}),Object(b.jsxs)(X,{children:["Alongside work, I completed a ",Object(b.jsx)("span",{className:"text-secondary",children:"Masters in Software Engineering"})," from ",Object(b.jsx)("span",{className:"text-primary",children:"Harvard Extension School"})," and a BA in Computer Science from TESU."]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("a",{href:"mailto:benjenkinsv95@gmail.com",target:"_blank",rel:"noreferrer",children:Object(b.jsx)($,{className:"btn btn-secondary ".concat(e>400?"btn-lg":""," me-3"),children:"Get in Touch"})}),Object(b.jsx)("a",{href:V,target:"_blank",rel:"noreferrer",children:Object(b.jsx)($,{className:"btn btn-outline-primary ".concat(e>400?"btn-lg":""),children:"Download Resume"})})]})]}),Object(b.jsx)("div",{className:"col-sm-4 mt-4",children:Object(b.jsx)("img",{className:"img-fluid",src:K})})]})})},te=a(29),ae={marginRight:"16px"},ne=function(){return Object(b.jsxs)("div",{style:_,children:[Object(b.jsx)("h2",{className:"title-h2",children:"Ben Jenkins"}),Object(b.jsx)("h3",{className:"mb-3 text-center",children:"Software\xa0Engineer, Educator, &\xa0Robot\xa0Enthusiast"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("a",{href:"https://www.linkedin.com/in/benjenkinsv95/",target:"_blank",rel:"noreferrer",className:"icon-link",children:Object(b.jsx)(te.a,{style:ae,size:"3x",icon:["fab","linkedin"]})}),Object(b.jsx)("a",{href:"https://github.com/benjenkinsv95",target:"_blank",rel:"noreferrer",className:"icon-link",children:Object(b.jsx)(te.a,{style:ae,size:"3x",icon:["fab","github"]})}),Object(b.jsx)("a",{href:"https://twitter.com/benjenkinsv95",target:"_blank",rel:"noreferrer",className:"icon-link",children:Object(b.jsx)(te.a,{style:ae,size:"3x",icon:["fab","twitter"]})}),Object(b.jsx)("a",{href:"benjenkinsv95@gmail.com",target:"_blank",rel:"noreferrer",className:"icon-link",children:Object(b.jsx)(te.a,{style:ae,size:"3x",icon:["fas","envelope"]})})]})]})},re=a.p+"static/media/kanban-small.8d676b1e.mp4",se=a.p+"static/media/need-that-small.fe9cb259.mp4",ce=a.p+"static/media/barliman-small.21506977.mp4",ie=a.p+"static/media/zelda-small.c0c79bad.mp4",oe=a.p+"static/media/sentimentsion-small.bc9d26c1.mp4",le="#4073ff",de="#ff9933",be="#fad000",je={name:"Extension",background:"#6accbc",color:"white"},ue={name:"CSS",background:be,color:"black"},he={name:"HTML",background:de,color:"white"},me={name:"JS",background:be,color:"black"},ge={name:"jQuery",background:"#158fad",color:"white"},pe={name:"Material\xa0UI",background:le,color:"white"},Oe={name:"React",background:"#14aaf5",color:"white"},xe=[{title:"Bitcube Image Uploader",shortDescription:"A website to upload images, similar to imgur. Built with AWS S3.",githubUrl:"https://github.com/benjenkinsv95/bitcube-image-uploader",video:a.p+"static/media/bitcube-small.2fff7040.mp4",labels:[Oe,pe,me,ue]},{title:"React Kanban Board",shortDescription:"A Kanban Board built using React",githubUrl:"https://github.com/benjenkinsv95/react-kanban-board",deployedUrl:"https://benjenkinsv95.github.io/react-kanban-board/",video:re,labels:[Oe,pe,me,he]},{title:"Do You Really Need That?",shortDescription:"A chrome extension with a prompt before purchasing on amazon.",githubUrl:"https://github.com/benjenkinsv95/do-you-really-need-that",video:se,labels:[je,ge,{name:"Materialize",background:le,color:"white"},ue]},{title:"Sentimentsion",shortDescription:"A chrome extension that highlights how positive/negative text is.",githubUrl:"https://github.com/benjenkinsv95/sentimentsion",video:oe,labels:[je,ge,he,ue]},{title:"Barliman iOS",shortDescription:"An iOS app that generates code to pass arbitrary tests.",githubUrl:"https://github.com/benjenkinsv95/Barliman-iOS",video:ce,labels:[{name:"Swift",background:de,color:"white"},{name:"iOS",background:"#db4035",color:"white"}]},{title:"Legend of 50 RPG",shortDescription:"A Legend of Zelda style RPG written in Lua.",githubUrl:"https://github.com/benjenkinsv95/legend-of-50-rpg",video:ie,labels:[{name:"Lua",background:"#884dff",color:"white"}]},{title:"CS History Backgrounds",shortDescription:"A collection of CS history backgrounds I would leave on the projector during breaks.",githubUrl:"https://github.com/benjenkinsv95/cs-history",video:a.p+"static/media/cs-history-small.1a389003.mp4",labels:[{name:"History",background:"#ff8d85",color:"white"}]}],fe=Y.a.span(Z||(Z=Object(W.a)(["\n    background: ",";\n    color: ",";\n    padding: 0.15rem 0.5rem;\n    font-weight: 600;\n    border-radius: 0.6rem;\n    margin-right: 0.4rem;\n    overflow-wrap: normal;\n"])),(function(e){return e.background}),(function(e){return e.color})),ve=function(){var e=Q().width,t=xe.map((function(t,a){return Object(b.jsx)("div",{className:"col-lg-6 col-xl-4 mb-4",children:Object(b.jsxs)("div",{className:"card bg-dark text-white",children:[Object(b.jsx)("video",{className:e>1400?"small-video":"",loop:!0,muted:!0,playsInline:!0,autoPlay:!0,children:Object(b.jsx)("source",{src:t.video,type:"video/mp4"})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title text-secondary",children:t.title}),t.labels.map((function(e,t){return Object(b.jsx)(fe,{background:e.background,color:e.color,children:e.name},t)})),Object(b.jsx)("p",{className:"card-text mt-2",style:{minHeight:"48px"},children:t.shortDescription}),t.githubUrl&&Object(b.jsxs)("a",{href:t.githubUrl,className:"btn btn-primary me-3",target:"_blank",rel:"noreferrer",children:["View GitHub ",Object(b.jsx)(te.a,{icon:["fab","github"]})]}),t.deployedUrl&&Object(b.jsxs)("a",{href:t.deployedUrl,className:"btn btn-outline-secondary",target:"_blank",rel:"noreferrer",children:["View Live ",Object(b.jsx)(te.a,{icon:["fab","github"]})]})]})]})},a)}));return Object(b.jsx)("div",{style:H,children:Object(b.jsxs)("div",{className:"container py-4",children:[Object(b.jsx)("h2",{id:"projects",className:"title-h2 text-center mb-3",children:"Projects"}),Object(b.jsx)("div",{className:"row",children:t})]})})},we=function(e){return e.user?Object(b.jsx)(o.a,{to:"home"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ne,{}),Object(b.jsx)(ee,{}),Object(b.jsx)(ve,{})]})},ke=a(78),ye=a(55),Se=a(62);ke.a.library.add(ye.a,ye.b,ye.c,Se.b,Se.a);var Ne=function(){var e=Object(n.useState)(function(){var e=localStorage.getItem("user");return e?JSON.parse(e):null}()),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)([]),d=Object(i.a)(s,2),j=d[0],u=d[1],m=function(e){var t=e.heading,a=e.message,n=e.variant,r=Object(l.a)();u((function(e){return[].concat(Object(c.a)(e),[{heading:t,message:a,variant:n,id:r}])}))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w,{user:a}),j.map((function(e){return Object(b.jsx)(h,{heading:e.heading,variant:e.variant,message:e.message,id:e.id},e.id)})),Object(b.jsx)("main",{children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/sign-up",element:Object(b.jsx)(q,{msgAlert:m,user:a,setUser:r})}),Object(b.jsx)(o.b,{path:"/sign-in",element:Object(b.jsx)(J,{msgAlert:m,user:a,setUser:r})}),Object(b.jsx)(o.b,{path:"/sign-out",element:Object(b.jsx)(T,{msgAlert:m,clearUser:function(){return r(null)},user:a})}),Object(b.jsx)(o.b,{path:"/change-password",element:Object(b.jsx)(M,{msgAlert:m,user:a})}),Object(b.jsx)(o.b,{path:"/",element:Object(b.jsx)(o.a,{to:"/welcome"})}),Object(b.jsx)(o.b,{path:"/welcome",element:Object(b.jsx)(we,{user:a})})]})})]})},Ce=Object(b.jsx)(O.a,{basename:"/react-portfolio",children:Object(b.jsx)(Ne,{})});s.a.render(Ce,document.getElementById("root"))},84:function(e,t,a){},85:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.2dc81706.chunk.js.map