"use strict";(self.webpackChunkcrossfire=self.webpackChunkcrossfire||[]).push([[816],{7794:function(e,a,n){n.d(a,{Z:function(){return i}});n(2791);var r=n(4569),s=n.n(r),t=n(6001);function i(){var e=t.Z.getItem("token");return{http:s().create({baseURL:"http://127.0.0.1:8000/api",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(e)}})}}},6001:function(e,a,n){var r=n(5671),s=n(3144),t=new(n(8190).Z),i=function(){function e(){(0,r.Z)(this,e)}return(0,s.Z)(e,[{key:"getItem",value:function(e){return t.get(e)}},{key:"setItem",value:function(e,a,n){t.set(e,a,n)}},{key:"removeItem",value:function(e){t.remove(e)}}]),e}();a.Z=new i},816:function(e,a,n){n.r(a),n.d(a,{default:function(){return p}});var r=n(2791),s=n(4165),t=n(5861),i=n(885),l=n(9140),c=n(6871),o=n(9905),d=n(546),m=n(6001),f=n(7794),u=n(184);function h(){var e=(0,c.s0)(),a=(0,r.useState)(""),n=(0,i.Z)(a,2),h=n[0],x=n[1],p=(0,r.useState)(""),g=(0,i.Z)(p,2),v=g[0],j=g[1],b=(0,r.useState)(""),N=(0,i.Z)(b,2),Z=N[0],y=N[1],w=(0,r.useState)(""),C=(0,i.Z)(w,2),P=C[0],k=C[1],I=(0,r.useState)(""),E=(0,i.Z)(I,2),R=E[0],S=E[1],F=(0,r.useState)(""),L=(0,i.Z)(F,2),A=L[0],T=L[1],U=(0,r.useState)(""),B=(0,i.Z)(U,2),H=B[0],q=B[1],G=(0,r.useState)(""),O=(0,i.Z)(G,2),z=O[0],D=O[1];(0,r.useEffect)((function(){m.Z.getItem("token")&&e("/dashboard")}),[]);var M=(0,f.Z)().http,V=function(){var a=(0,t.Z)((0,s.Z)().mark((function a(n){return(0,s.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,a.next=4,M.post("/register",{email:P,password:A,password_confirmation:H,pin:R,username:h,firstname:v,lastname:Z});case 4:e("/signin"),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(1),a.t0.response&&D(a.t0.response.data);case 10:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(e){return a.apply(this,arguments)}}();return(0,u.jsx)(o.Parallax,{className:"Register1",blur:4,bgImage:d,bgImageStyle:{opacity:".5"},children:(0,u.jsx)(l.Z,{children:(0,u.jsxs)("form",{children:[(0,u.jsx)("h1",{className:"text-center mb-3",children:"REGISTER PAGE"}),(0,u.jsxs)("div",{className:"row justify-content-center mb-1",noValidate:!0,children:[(0,u.jsx)("div",{className:"col",children:(0,u.jsxs)("div",{className:"form-floating mb-1",children:[(0,u.jsx)("input",{type:"text",className:"form-control",id:"floatingInput",placeholder:"First name",onChange:function(e){return j(e.target.value)}}),(0,u.jsx)("label",{htmlFor:"floatingInput",children:"First name"}),(0,u.jsx)("span",{children:z.firstname})]})}),(0,u.jsx)("div",{className:"col",children:(0,u.jsxs)("div",{className:"form-floating",children:[(0,u.jsx)("input",{type:"text",className:"form-control",id:"floatingLastname",placeholder:"Last name",onChange:function(e){return y(e.target.value)}}),(0,u.jsx)("label",{htmlFor:"floatingLastname",children:"Last name"}),(0,u.jsx)("span",{children:z.lastname})]})})]}),(0,u.jsxs)("div",{className:"row justify-content-center mb-1",children:[(0,u.jsx)("div",{className:"col-sm-6 Regis-Tab",children:(0,u.jsxs)("div",{className:"form-floating mb-1",children:[(0,u.jsx)("input",{type:"text",className:"form-control",id:"floatingUsername",placeholder:"Username",onChange:function(e){return x(e.target.value)},required:!0}),(0,u.jsx)("label",{htmlFor:"floatingUsername",children:"Username"}),(0,u.jsx)("span",{children:z.username})]})}),(0,u.jsx)("div",{className:"col",children:(0,u.jsxs)("div",{className:"form-floating",children:[(0,u.jsx)("input",{type:"Email",className:"form-control",id:"floatingEmail",placeholder:"Email Address",onChange:function(e){return k(e.target.value)}}),(0,u.jsx)("label",{htmlFor:"floatingEmail",children:"Email Address"}),(0,u.jsx)("span",{children:z.email})]})})]}),(0,u.jsxs)("div",{className:"row justify-content-center mb-1",children:[(0,u.jsx)("div",{className:"col-sm-6 Regis-Tab",children:(0,u.jsxs)("div",{className:"form-floating mb-1",children:[(0,u.jsx)("input",{type:"password",className:"form-control",id:"floatingPassword",placeholder:"Password",onChange:function(e){return T(e.target.value)}}),(0,u.jsx)("label",{htmlFor:"floatingPassword",children:"Password"}),(0,u.jsx)("span",{children:z.password})]})}),(0,u.jsx)("div",{className:"col",children:(0,u.jsxs)("div",{className:"form-floating",children:[(0,u.jsx)("input",{type:"password",className:"form-control",id:"floatingConfirm",placeholder:"Confirm",onChange:function(e){return q(e.target.value)}}),(0,u.jsx)("label",{htmlFor:"floatingConfirm",children:"Confirm"}),(0,u.jsx)("span",{children:z.password})]})}),(0,u.jsx)("div",{className:"col",children:(0,u.jsxs)("div",{className:"form-floating mb-1",children:[(0,u.jsx)("input",{type:"password",className:"form-control",id:"floatingPin",placeholder:"Pin",onChange:function(e){return S(e.target.value)}}),(0,u.jsx)("label",{htmlFor:"floatingPin",children:"Pin"}),(0,u.jsx)("span",{children:z.pin})]})})]}),(0,u.jsxs)("section",{className:"mb-1 ",children:[(0,u.jsxs)("p",{children:["Already have an account ? ",(0,u.jsx)("a",{href:"/signin",children:"Sign here"})]}),(0,u.jsx)("button",{onClick:V,type:"submit",className:"btn btn-primary",children:"Register"})]})]})})})}var x=n(4270);function p(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(x.q,{children:(0,u.jsx)("title",{children:"Register Page"})}),(0,u.jsx)(h,{})]})}},9140:function(e,a,n){n.d(a,{Z:function(){return R}});var r=n(1413),s=n(5987),t=n(1694),i=n.n(t),l=n(2791),c=n(162),o=n(6543),d=n(7472),m=n(184),f=["bsPrefix","className","variant","as"],u=l.forwardRef((function(e,a){var n=e.bsPrefix,t=e.className,l=e.variant,o=e.as,d=void 0===o?"img":o,u=(0,s.Z)(e,f),h=(0,c.vE)(n,"card-img");return(0,m.jsx)(d,(0,r.Z)({ref:a,className:i()(l?"".concat(h,"-").concat(l):h,t)},u))}));u.displayName="CardImg";var h=u,x=n(6040),p=["bsPrefix","className","as"],g=l.forwardRef((function(e,a){var n=e.bsPrefix,t=e.className,o=e.as,d=void 0===o?"div":o,f=(0,s.Z)(e,p),u=(0,c.vE)(n,"card-header"),h=(0,l.useMemo)((function(){return{cardHeaderBsPrefix:u}}),[u]);return(0,m.jsx)(x.Z.Provider,{value:h,children:(0,m.jsx)(d,(0,r.Z)((0,r.Z)({ref:a},f),{},{className:i()(t,u)}))})}));g.displayName="CardHeader";var v=g,j=["bsPrefix","className","bg","text","border","body","children","as"],b=(0,d.Z)("h5"),N=(0,d.Z)("h6"),Z=(0,o.Z)("card-body"),y=(0,o.Z)("card-title",{Component:b}),w=(0,o.Z)("card-subtitle",{Component:N}),C=(0,o.Z)("card-link",{Component:"a"}),P=(0,o.Z)("card-text",{Component:"p"}),k=(0,o.Z)("card-footer"),I=(0,o.Z)("card-img-overlay"),E=l.forwardRef((function(e,a){var n=e.bsPrefix,t=e.className,l=e.bg,o=e.text,d=e.border,f=e.body,u=e.children,h=e.as,x=void 0===h?"div":h,p=(0,s.Z)(e,j),g=(0,c.vE)(n,"card");return(0,m.jsx)(x,(0,r.Z)((0,r.Z)({ref:a},p),{},{className:i()(t,g,l&&"bg-".concat(l),o&&"text-".concat(o),d&&"border-".concat(d)),children:f?(0,m.jsx)(Z,{children:u}):u}))}));E.displayName="Card",E.defaultProps={body:!1};var R=Object.assign(E,{Img:h,Title:y,Subtitle:w,Body:Z,Link:C,Text:P,Header:v,Footer:k,ImgOverlay:I})},546:function(e,a,n){e.exports=n.p+"static/media/Register-Parallax.bfca0367671f30b17e1c.jpg"}}]);
//# sourceMappingURL=816.4c7336ec.chunk.js.map