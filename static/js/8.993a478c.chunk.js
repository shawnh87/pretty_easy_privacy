(this.webpackJsonppretty_easy_privacy=this.webpackJsonppretty_easy_privacy||[]).push([[8],{221:function(e,t,a){"use strict";var r=a(44),n=a(19),i=a(0),c=a(192),s=a(77),o=a.n(s),l=a(217),d=a(202),j=a(170),b=a(214),u=a(72),p=a(1),m=Object(c.a)((function(e){return{result:{maxHeight:"400px",maxWidth:"400px",overflowY:"scroll"},button:{margin:"5px"},copy:{textAlign:"right",maxWidth:"400px"}}}));t.a=function(e){var t=m(),a=Object(i.useState)({open:!1,vertical:"bottom",horizontal:"left"}),c=Object(n.a)(a,2),s=c[0],h=c[1],O=s.vertical,x=s.horizontal,g=s.open,f=e.id,v=e.val;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:t.copy,children:Object(p.jsx)(l.a,{title:"Copy",children:Object(p.jsx)(d.a,{"aria-label":"Copy",onClick:function(){h(Object(r.a)(Object(r.a)({},s),{},{open:!0})),Object(u.a)(f)},children:Object(p.jsx)(o.a,{})})})}),Object(p.jsx)(j.a,{className:t.result,children:Object(p.jsx)("pre",{id:f,children:v})}),Object(p.jsx)(b.a,{anchorOrigin:{vertical:O,horizontal:x},open:g,onClose:function(){h(Object(r.a)(Object(r.a)({},s),{},{open:!1}))},message:"Copied to clipboard"},O+x)]})}},228:function(e,t,a){"use strict";var r=a(44),n=a(19),i=a(0),c=a(235),s=a.n(c),o=a(192),l=a(263),d=a(264),j=a(265),b=a(266),u=a(267),p=a(274),m=a(261),h=a(211),O=a(208),x=a(275),g=a(1),f=Object(o.a)((function(e){return{pwInput:{width:"225px"},pw:{color:"#777fa7",marginTop:"18px"},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}})),v=function(e){var t=Object(i.useState)(),a=Object(n.a)(t,2),r=a[0],c=a[1],s=e.open,o=e.confirmError?"Please Try Again":"Passphrase Confirmation";return Object(g.jsx)("div",{children:Object(g.jsxs)(l.a,{open:s,onClose:e.handleClose,"aria-labelledby":"form-dialog-title",children:[Object(g.jsx)(d.a,{id:"form-dialog-title",children:"Passphrase Confirmation"}),Object(g.jsxs)(j.a,{children:[Object(g.jsx)(b.a,{children:"Please re enter your passphrase below:"}),Object(g.jsx)(u.a,{required:!0,autoFocus:!0,error:e.confirmError,onChange:function(e){c(e.target.value)},margin:"dense",id:"name",label:o,type:"password",fullWidth:!0})]}),Object(g.jsxs)(p.a,{children:[Object(g.jsx)(m.a,{onClick:e.handleClose,color:"primary",children:"Cancel"}),Object(g.jsx)(m.a,{type:"submit",onClick:function(){return e.handleConfirm(r)},color:"primary",children:e.buttonText})]})]})})};t.a=function(e){var t=f(),a=Object(i.useState)(""),c=Object(n.a)(a,2),o=c[0],l=c[1],d=Object(i.useState)({confirmError:!1,passPhraseMissingError:!1}),j=Object(n.a)(d,2),b=j[0],p=j[1],y=Object(i.useState)(!1),w=Object(n.a)(y,2),C=w[0],k=w[1],S=Object(i.useState)({score:null,resp:null}),N=Object(n.a)(S,2),T=N[0],E=N[1],P={0:"Very Bad \ud83d\udc4e",1:"Bad \ud83d\udc4e",2:"Weak \ud83d\ude10",3:"Good \ud83d\ude42",4:"Strong \ud83d\udd25\ud83d\udd25\ud83d\udd25"};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(h.a,{children:Object(g.jsxs)(O.a,{container:!0,spacing:1,children:[Object(g.jsx)(O.a,{item:!0,children:Object(g.jsx)(u.a,{required:!0,helperText:b.passPhraseMissingError&&"PassPhrase Required!",onChange:function(e){l(e.target.value);var t=s()(e.target.value);E({score:0===t.score?"1":t.score,resp:P[t.score]})},className:e.class,error:b.passPhraseMissingError,id:"pw-in",type:"password",label:"Passphrase",variant:"outlined"})}),o.length>0&&Object(g.jsx)(O.a,{className:t.pw,item:!0,children:T.resp})]})}),Object(g.jsx)(h.a,{pt:3,children:Object(g.jsxs)(m.a,{type:"submit",variant:"contained",color:"primary",disabled:e.loading,onClick:function(t){t.preventDefault(),p({confirmError:!1,passPhraseMissingError:!1});var a=e.handleSubmit(t);o||p(Object(r.a)(Object(r.a)({},b),{},{passPhraseMissingError:!0})),o&&!a&&k(!0)},children:[e.mainButtonText,e.loading&&Object(g.jsx)(x.a,{size:24,color:"primary",className:t.buttonProgress})]})}),Object(g.jsx)(v,{open:C,buttonText:e.modalButtonText,handleClose:function(){return k(!1)},handleConfirm:function(t){t===o?(k(!1),e.handleConfirm(o)):p(Object(r.a)(Object(r.a)({},b),{},{confirmError:!0}))},confirmError:b.confirmError})]})}},248:function(e,t,a){"use strict";var r=a(3),n=a(6),i=a(2),c=a(0),s=(a(4),a(5)),o=a(7),l=a(197),d=c.forwardRef((function(e,t){var a,n=e.classes,o=e.className,d=e.component,j=void 0===d?"li":d,b=e.disableGutters,u=void 0!==b&&b,p=e.ListItemClasses,m=e.role,h=void 0===m?"menuitem":m,O=e.selected,x=e.tabIndex,g=Object(r.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==x?x:-1),c.createElement(l.a,Object(i.a)({button:!0,role:h,tabIndex:a,component:j,selected:O,disableGutters:u,classes:Object(i.a)({dense:n.dense},p),className:Object(s.a)(n.root,o,O&&n.selected,!u&&n.gutters),ref:t},g))}));t.a=Object(o.a)((function(e){return{root:Object(i.a)({},e.typography.body1,Object(n.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(i.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(d)},249:function(e,t,a){"use strict";var r=a(50);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),i=(0,r(a(59)).default)(n.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"Help");t.default=i},283:function(e,t,a){"use strict";a.r(t);var r=a(44),n=a(23),i=a.n(n),c=a(74),s=a(19),o=a(6),l=a(0),d=a(192),j=a(228),b=a(249),u=a.n(b),p=a(221),m=a(211),h=a(49),O=a(261),x=a(1),g=Object(d.a)((function(e){return{main:Object(o.a)({marginLeft:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingBottom:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingBottom:e.spacing(2)}),button:{margin:"5px"}}})),f=function(e){var t=g(),a=Object(l.useState)(!1),r=Object(s.a)(a,2),n=r[0],i=r[1],c=Object(l.useState)(!1),o=Object(s.a)(c,2),d=o[0],j=o[1],b=function(e,t){var a=document.createElement("a"),r=new Blob([e],{type:"text/plain"});a.href=URL.createObjectURL(r),a.download=t+".txt",a.click(),a.remove()},u=e.encKeys;return Object(x.jsx)("div",{className:t.main,children:Object(x.jsxs)(m.a,{children:[Object(x.jsx)(h.a,{variant:"h5",gutterBottom:!0,children:Object(x.jsx)("b",{children:" Key Results "})}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(h.a,{color:"primary",variant:"h6",gutterBottom:!0,children:"Private Key"}),Object(x.jsxs)(m.a,{pb:2,children:[Object(x.jsx)(h.a,{color:"error",children:Object(x.jsx)("b",{children:"The private key is private. NEVER SHARE YOUR PRIVATE KEY"})}),Object(x.jsx)("p",{children:"Use the private key for decrypting data encrypted with your public key."})]}),Object(x.jsxs)(m.a,{pb:4,children:[Object(x.jsx)(O.a,{onClick:function(){return j(!d)},variant:"outlined",color:"primary","data-testid":"privateKey",className:t.button,children:d?"Hide":"In Browser"}),Object(x.jsx)(O.a,{onClick:function(){return b(u.privateKeyArmored,"private_key")},variant:"outlined",color:"primary",className:t.button,children:"Download"}),d&&Object(x.jsx)(p.a,{val:u.privateKeyArmored,id:"privateKey"})]}),Object(x.jsx)(h.a,{color:"secondary",variant:"h6",gutterBottom:!0,children:"Public Key"}),Object(x.jsxs)(m.a,{pb:2,children:[Object(x.jsx)("p",{children:"The public key is public. You could share it with anyone."}),Object(x.jsx)("p",{children:"The public key encrypts files that only your private key can decrypt."})]}),Object(x.jsxs)(m.a,{mb:2,children:[Object(x.jsx)(O.a,{onClick:function(){return i(!n)},variant:"outlined",color:"secondary","data-testid":"publicKey",className:t.button,children:n?"Hide":"In Browser"}),Object(x.jsx)(O.a,{onClick:function(){return b(u.publicKeyArmored,"public_key")},variant:"outlined",color:"secondary",className:t.button,children:"Download"}),n&&Object(x.jsx)(p.a,{val:u.publicKeyArmored,id:"publicKey"})]})]})})},v=a(267),y=a(208),w=a(270),C=a(271),k=a(278),S=a(248),N=a(217),T=a(202),E=a(225),P=Object(d.a)((function(e){return{form:Object(o.a)({maxWidth:"350px"},e.breakpoints.down(600+2*e.spacing(3)),{maxWidth:"225px"}),formField:{width:"100%"},pwInput:{maxWidth:"225px"},dropSelect:Object(o.a)({maxWidth:"241px"},e.breakpoints.down(600+2*e.spacing(3)),{maxWidth:"170px"}),formControl:{width:"100%"},main:Object(o.a)({marginLeft:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingBottom:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingBottom:e.spacing(2)})}}));t.default=function(){var e=P(),t=Object(l.useState)(void 0),a=Object(s.a)(t,2),n=a[0],o=a[1],d=Object(l.useState)(2048),b=Object(s.a)(d,2),p=b[0],O=b[1],g=Object(l.useState)({name:"",email:"",pw:""}),B=Object(s.a)(g,2),K=B[0],R=B[1],I=Object(l.useState)(!1),F=Object(s.a)(I,2),A=F[0],M=F[1],z=Object(l.useState)({name:!1,emailNull:!1,emailFormat:!1,emMessage:!1}),L=Object(s.a)(z,2),q=L[0],H=L[1],W=function(){var e=Object(c.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,Object(E.generateKey)({userIds:[{name:K.name,email:K.email}],rsaBits:p,passphrase:t});case 3:a=e.sent,o(a),M(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e,t,a,n,i=!1;return""===K.name&&(e=!0),""===K.email?(t=!0,i="Email Required!"):(n=K.email,a=!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n),i="Invalid Email Format!"),H(Object(r.a)(Object(r.a)({},q),{},{name:e,emailNull:t,emailFormat:a,emMessage:i})),!!(a||t||e)};return Object(x.jsx)(m.a,{children:"undefined"==typeof n?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("form",{onSubmit:function(e){return _()},children:Object(x.jsxs)("div",{className:e.main,children:[Object(x.jsx)(h.a,{variant:"h5",gutterBottom:!0,children:Object(x.jsx)("b",{children:" RSA Key Generation"})}),Object(x.jsxs)(m.a,{pb:4,pt:2,children:["Creating Keys is simple. Just fill out this form.",Object(x.jsx)("br",{}),"No worries if you don't want to use your name or email address. Just make one up!",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("b",{children:"Just don't lose you Private Key and Passphrase!"})]}),Object(x.jsxs)("div",{className:e.form,children:[Object(x.jsx)(m.a,{pb:4,children:Object(x.jsx)(v.a,{required:!0,className:e.formField,id:"outlined-required",label:"Name",onChange:function(e){R(Object(r.a)(Object(r.a)({},K),{},{name:e.target.value}))},error:q.name,helperText:q.name&&"Text Required!",variant:"outlined"})}),Object(x.jsxs)(m.a,{pb:4,children:[" ",Object(x.jsx)(v.a,{required:!0,className:e.formField,id:"outlined-disabled",label:"email",onChange:function(e){R(Object(r.a)(Object(r.a)({},K),{},{email:e.target.value}))},error:q.emailNull||q.emailFormat,helperText:(q.emailNull||q.emailFormat)&&q.emMessage,variant:"outlined"})]}),Object(x.jsx)(m.a,{children:Object(x.jsxs)(y.a,{container:!0,spacing:2,children:[Object(x.jsx)(y.a,{item:!0,container:!0,className:e.dropSelect,children:Object(x.jsxs)(w.a,{variant:"outlined",className:e.formControl,error:!!q.fileTypeErr,children:[Object(x.jsx)(C.a,{id:"demo-simple-select-outlined-label",children:"RSA Key Size"}),Object(x.jsxs)(k.a,{required:!0,labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:p,onChange:function(e){return O(e.target.value)},label:"Text FIle Type",children:[Object(x.jsx)(S.a,{value:4096,children:"4096"}),Object(x.jsx)(S.a,{value:3072,children:"3072"}),Object(x.jsx)(S.a,{value:2048,children:"2048"})]})]})}),Object(x.jsx)(y.a,{item:!0,children:Object(x.jsx)("div",{children:Object(x.jsx)(N.a,{title:"This controls key length. The larger the value, the stronger the encryption. The default is pretty good.",children:Object(x.jsx)(T.a,{disableFocusRipple:!0,disableRipple:!0,children:Object(x.jsx)(u.a,{})})})})})]})}),Object(x.jsx)(m.a,{mt:3,children:Object(x.jsx)(j.a,{class:e.pwInput,loading:A,mainButtonText:"Generate",modalButtonText:"Submit",handleSubmit:_,handleConfirm:function(e){W(e)}})})]})]})})}):Object(x.jsx)(f,{encKeys:n})})}}}]);
//# sourceMappingURL=8.993a478c.chunk.js.map