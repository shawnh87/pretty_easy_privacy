(this["webpackJsonppretty-easy-privacy"]=this["webpackJsonppretty-easy-privacy"]||[]).push([[8],{224:function(e,a,t){"use strict";var n=t(45),r=t(40),l=t(0),i=t.n(l),o=t(196),c=t(82),s=t.n(c),m=t(221),u=t(206),d=t(175),p=t(218),b=t(79),E=Object(o.a)((function(e){return{result:{maxHeight:"400px",maxWidth:"400px",overflowY:"scroll"},button:{margin:"5px"},copy:{textAlign:"right",maxWidth:"400px"}}}));a.a=function(e){var a=E(),t=Object(l.useState)({open:!1,vertical:"bottom",horizontal:"left"}),o=Object(r.a)(t,2),c=o[0],f=o[1],g=c.vertical,h=c.horizontal,v=c.open,y=e.id,O=e.val;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:a.copy},i.a.createElement(m.a,{title:"Copy"},i.a.createElement(u.a,{"aria-label":"Copy",onClick:function(){f(Object(n.a)(Object(n.a)({},c),{},{open:!0})),Object(b.a)(y)}},i.a.createElement(s.a,null)))),i.a.createElement(d.a,{className:a.result},i.a.createElement("pre",{id:y},O)),i.a.createElement(p.a,{anchorOrigin:{vertical:g,horizontal:h},open:v,onClose:function(){f(Object(n.a)(Object(n.a)({},c),{},{open:!1}))},message:"Copied to clipboard",key:g+h}))}},231:function(e,a,t){"use strict";var n=t(45),r=t(40),l=t(0),i=t.n(l),o=t(238),c=t.n(o),s=t(196),m=t(266),u=t(267),d=t(268),p=t(269),b=t(270),E=t(277),f=t(264),g=t(215),h=t(212),v=t(278),y=Object(s.a)((function(e){return{pwInput:{maxWidth:"225px"},pw:{color:"#777fa7",marginTop:"18px"},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}})),O=function(e){var a=Object(l.useState)(),t=Object(r.a)(a,2),n=t[0],o=t[1],c=e.open,s=e.confirmError?"Please Try Again":"Passphrase Confirmation";return i.a.createElement("div",null,i.a.createElement(m.a,{open:c,onClose:e.handleClose,"aria-labelledby":"form-dialog-title"},i.a.createElement(u.a,{id:"form-dialog-title"},"Passphrase Confirmation"),i.a.createElement(d.a,null,i.a.createElement(p.a,null,"Please re enter your passphrase below:"),i.a.createElement(b.a,{required:!0,autoFocus:!0,error:e.confirmError,onChange:function(e){o(e.target.value)},margin:"dense",id:"name",label:s,type:"password",fullWidth:!0})),i.a.createElement(E.a,null,i.a.createElement(f.a,{onClick:e.handleClose,color:"primary"},"Cancel"),i.a.createElement(f.a,{type:"submit",onClick:function(){return e.handleConfirm(n)},color:"primary"},e.buttonText))))};a.a=function(e){var a=y(),t=Object(l.useState)(""),o=Object(r.a)(t,2),s=o[0],m=o[1],u=Object(l.useState)({confirmError:!1,passPhraseMissingError:!1}),d=Object(r.a)(u,2),p=d[0],E=d[1],j=Object(l.useState)(!1),x=Object(r.a)(j,2),C=x[0],w=x[1],k=Object(l.useState)({score:null,resp:null}),S=Object(r.a)(k,2),N=S[0],T=S[1],P={0:"Very Bad \ud83d\udc4e",1:"Bad \ud83d\udc4e",2:"Weak \ud83d\ude10",3:"Good \ud83d\ude42",4:"Strong \ud83d\udd25\ud83d\udd25\ud83d\udd25"};return i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,null,i.a.createElement(h.a,{container:!0,spacing:1},i.a.createElement(h.a,{item:!0},i.a.createElement(b.a,{required:!0,helperText:p.passPhraseMissingError&&"PassPhrase Required!",onChange:function(e){m(e.target.value);var a=c()(e.target.value);T({score:0===a.score?"1":a.score,resp:P[a.score]})},className:e.class,error:p.passPhraseMissingError,id:"pw-in",type:"password",label:"Passphrase",variant:"outlined"})),s.length>0&&i.a.createElement(h.a,{className:a.pw,item:!0},N.resp))),i.a.createElement(g.a,{pt:3},i.a.createElement(f.a,{type:"submit",variant:"contained",color:"primary",disabled:e.loading,onClick:function(a){a.preventDefault(),E({confirmError:!1,passPhraseMissingError:!1});var t=e.handleSubmit(a);s||E(Object(n.a)(Object(n.a)({},p),{},{passPhraseMissingError:!0})),s&&!t&&w(!0)}},e.mainButtonText,e.loading&&i.a.createElement(v.a,{size:24,color:"primary",className:a.buttonProgress}))),i.a.createElement(O,{open:C,buttonText:e.modalButtonText,handleClose:function(){return w(!1)},handleConfirm:function(a){a===s?(w(!1),e.handleConfirm(s)):E(Object(n.a)(Object(n.a)({},p),{},{confirmError:!0}))},confirmError:p.confirmError}))}},252:function(e,a,t){"use strict";var n=t(2),r=t(8),l=t(1),i=t(0),o=(t(3),t(4)),c=t(5),s=t(201),m=i.forwardRef((function(e,a){var t,r=e.classes,c=e.className,m=e.component,u=void 0===m?"li":m,d=e.disableGutters,p=void 0!==d&&d,b=e.ListItemClasses,E=e.role,f=void 0===E?"menuitem":E,g=e.selected,h=e.tabIndex,v=Object(n.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(t=void 0!==h?h:-1),i.createElement(s.a,Object(l.a)({button:!0,role:f,tabIndex:t,component:u,selected:g,disableGutters:p,classes:Object(l.a)({dense:r.dense},b),className:Object(o.a)(r.root,c,g&&r.selected,!p&&r.gutters),ref:a},v))}));a.a=Object(c.a)((function(e){return{root:Object(l.a)({},e.typography.body1,Object(r.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(l.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(m)},253:function(e,a,t){"use strict";var n=t(64),r=t(65);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=r(t(0)),i=(0,n(t(66)).default)(l.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"Help");a.default=i},286:function(e,a,t){"use strict";t.r(a);var n=t(45),r=t(22),l=t.n(r),i=t(81),o=t(40),c=t(11),s=t(0),m=t.n(s),u=t(196),d=t(231),p=t(253),b=t.n(p),E=t(224),f=t(215),g=t(50),h=t(264),v=Object(u.a)((function(e){return{main:Object(c.a)({marginLeft:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingBottom:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingBottom:e.spacing(2)}),button:{margin:"5px"}}})),y=function(e){var a=v(),t=Object(s.useState)(!1),n=Object(o.a)(t,2),r=n[0],l=n[1],i=Object(s.useState)(!1),c=Object(o.a)(i,2),u=c[0],d=c[1],p=function(e,a){var t=document.createElement("a"),n=new Blob([e],{type:"text/plain"});t.href=URL.createObjectURL(n),t.download=a+".txt",t.click(),t.remove()},b=e.encKeys;return m.a.createElement("div",{className:a.main},m.a.createElement(f.a,null,m.a.createElement(g.a,{variant:"h5",gutterBottom:!0},m.a.createElement("b",null," Key Results ")),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement(g.a,{color:"primary",variant:"h6",gutterBottom:!0},"Private Key"),m.a.createElement(f.a,{pb:2},m.a.createElement(g.a,{color:"error"},m.a.createElement("b",null,"The private key is private. NEVER SHARE YOUR PRIVATE KEY")),m.a.createElement("p",null,"Use the private key for decrypting data encrypted with your public key.")),m.a.createElement(f.a,{pb:4},m.a.createElement(h.a,{onClick:function(){return d(!u)},variant:"outlined",color:"primary","data-testid":"privateKey",className:a.button},u?"Hide":"In Browser"),m.a.createElement(h.a,{onClick:function(){return p(b.privateKeyArmored,"private_key")},variant:"outlined",color:"primary",className:a.button},"Download"),u&&m.a.createElement(E.a,{val:b.privateKeyArmored,id:"privateKey"})),m.a.createElement(g.a,{color:"secondary",variant:"h6",gutterBottom:!0},"Public Key"),m.a.createElement(f.a,{pb:2},m.a.createElement("p",null,"The public key is public. You could share it with anyone."),m.a.createElement("p",null,"The public key encrypts files that only your private key can decrypt.")),m.a.createElement(f.a,{mb:2},m.a.createElement(h.a,{onClick:function(){return l(!r)},variant:"outlined",color:"secondary","data-testid":"publicKey",className:a.button},r?"Hide":"In Browser"),m.a.createElement(h.a,{onClick:function(){return p(b.publicKeyArmored,"public_key")},variant:"outlined",color:"secondary",className:a.button},"Download"),r&&m.a.createElement(E.a,{val:b.publicKeyArmored,id:"publicKey"}))))},O=t(270),j=t(212),x=t(273),C=t(274),w=t(281),k=t(252),S=t(221),N=t(206),T=t(227),P=Object(u.a)((function(e){return{form:Object(c.a)({maxWidth:"350px"},e.breakpoints.down(600+2*e.spacing(3)),{maxWidth:"225px"}),formField:{width:"100%"},pwInput:{maxWidth:"225px"},dropSelect:Object(c.a)({maxWidth:"241px"},e.breakpoints.down(600+2*e.spacing(3)),{maxWidth:"170px"}),formControl:{width:"100%"},main:{marginLeft:e.spacing(2),padding:e.spacing(2)}}}));a.default=function(){var e=P(),a=Object(s.useState)(void 0),t=Object(o.a)(a,2),r=t[0],c=t[1],u=Object(s.useState)(2048),p=Object(o.a)(u,2),E=p[0],h=p[1],v=Object(s.useState)({name:"",email:"",pw:""}),K=Object(o.a)(v,2),B=K[0],R=K[1],I=Object(s.useState)(!1),F=Object(o.a)(I,2),A=F[0],M=F[1],z=Object(s.useState)({name:!1,emailNull:!1,emailFormat:!1,emMessage:!1}),W=Object(o.a)(z,2),q=W[0],H=W[1],L=function(){var e=Object(i.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,Object(T.generateKey)({userIds:[{name:B.name,email:B.email}],rsaBits:E,passphrase:a});case 3:t=e.sent,c(t),M(!1);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),G=function(){var e,a,t,r,l=!1;return""===B.name&&(e=!0),""===B.email?(a=!0,l="Email Required!"):(r=B.email,t=!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r),l="Invalid Email Format!"),H(Object(n.a)(Object(n.a)({},q),{},{name:e,emailNull:a,emailFormat:t,emMessage:l})),!!(t||a||e)};return m.a.createElement(f.a,null,"undefined"==typeof r?m.a.createElement(m.a.Fragment,null,m.a.createElement("form",{onSubmit:function(e){return G()}},m.a.createElement("div",{className:e.main},m.a.createElement(g.a,{variant:"h5",gutterBottom:!0},m.a.createElement("b",null," RSA Key Generation")),m.a.createElement(f.a,{pb:4,pt:2},"Creating Keys is simple. Just fill out this form.",m.a.createElement("br",null),"No worries if you don't want to use your name or email address.",m.a.createElement("br",null),"Just make one up!",m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("b",null,"Just don't lose you Private Key and Passphrase!")),m.a.createElement("div",{className:e.form},m.a.createElement(f.a,{pb:4},m.a.createElement(O.a,{required:!0,className:e.formField,id:"outlined-required",label:"Name",onChange:function(e){R(Object(n.a)(Object(n.a)({},B),{},{name:e.target.value}))},error:q.name,helperText:q.name&&"Text Required!",variant:"outlined"})),m.a.createElement(f.a,{pb:4}," ",m.a.createElement(O.a,{required:!0,className:e.formField,id:"outlined-disabled",label:"email",onChange:function(e){R(Object(n.a)(Object(n.a)({},B),{},{email:e.target.value}))},error:q.emailNull||q.emailFormat,helperText:(q.emailNull||q.emailFormat)&&q.emMessage,variant:"outlined"})),m.a.createElement(f.a,null,m.a.createElement(j.a,{container:!0,spacing:2},m.a.createElement(j.a,{item:!0,container:!0,className:e.dropSelect},m.a.createElement(x.a,{variant:"outlined",className:e.formControl,error:!!q.fileTypeErr},m.a.createElement(C.a,{id:"demo-simple-select-outlined-label"},"RSA Key Size"),m.a.createElement(w.a,{required:!0,labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:E,onChange:function(e){return h(e.target.value)},label:"Text FIle Type"},m.a.createElement(k.a,{value:4096},"4096"),m.a.createElement(k.a,{value:3072},"3072"),m.a.createElement(k.a,{value:2048},"2048")))),m.a.createElement(j.a,{item:!0},m.a.createElement("div",null,m.a.createElement(S.a,{title:"This controls key length. The larger the value, the stronger the encryption. The default is pretty good."},m.a.createElement(N.a,{disableFocusRipple:!0,disableRipple:!0},m.a.createElement(b.a,null))))))),m.a.createElement(f.a,{mt:3},m.a.createElement(d.a,{class:e.pwInput,loading:A,mainButtonText:"Generate",modalButtonText:"Submit",handleSubmit:G,handleConfirm:function(e){L(e)}})))))):m.a.createElement(y,{encKeys:r}))}}}]);
//# sourceMappingURL=8.08409085.chunk.js.map