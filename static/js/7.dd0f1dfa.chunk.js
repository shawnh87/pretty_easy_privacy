(this.webpackJsonpcrypto_demo=this.webpackJsonpcrypto_demo||[]).push([[7],{167:function(e,t,a){"use strict";a.d(t,"i",(function(){return i})),a.d(t,"g",(function(){return l})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return p})),a.d(t,"d",(function(){return m})),a.d(t,"f",(function(){return d})),a.d(t,"e",(function(){return b})),a.d(t,"k",(function(){return f})),a.d(t,"h",(function(){return y})),a.d(t,"j",(function(){return g}));var r=a(155),n=a.n(r),o=a(160),c=a(204),i={txt:"text/plain",csv:"text/csv",html:"text/html",css:"text/css"},l=function(){var e=Object(o.a)(n.a.mark((function e(t,a){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("byte"!==a.fileType){e.next=4;break}return e.next=3,c.fromBuffer(t);case 3:r=e.sent;case 4:if(!r){e.next=8;break}return e.abrupt("return",r.ext);case 8:if("text"!==a.fileType){e.next=12;break}return e.abrupt("return",a.ext);case 12:return e.abrupt("return","txt");case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),s={show:!0,severity:"error",message:"Looks like there is a format issue with your Encrypted text. We recommend using the original text file supplied!"},u={show:!0,severity:"error",message:"Something went wrong! Please try again."},p={show:!0,severity:"error",message:"Passphrase is incorrect!"},m={show:!0,severity:"success",message:"Successfully decrypted!"},d={show:!0,message:"Encryption Complete",severity:"success"},b={show:!0,message:"Something went wrong! Please try again.",severity:"error"},f={show:!1,message:"",severity:""},y={show:!0,message:"Invalid RSA Key! Please try again.",severity:"error"},g={show:!0,message:"Incorrect Passphrase! Please try again.",severity:"error"}},170:function(e,t,a){"use strict";var r=a(158),n=a(30),o=a(0),c=a.n(o),i=a(133),l=a(186),s=a.n(l),u=a(301),p=a(103),m=a(146),d=a(302),b=Object(i.a)((function(e){return{result:{maxHeight:"100px",maxWidth:"350px",overflowY:"scroll"},button:{margin:"5px"},copy:{marginLeft:"318px"}}}));t.a=function(e){var t=b(),a=Object(o.useState)({open:!1,vertical:"bottom",horizontal:"left"}),i=Object(n.a)(a,2),l=i[0],f=i[1],y=l.vertical,g=l.horizontal,v=l.open,E=e.id,h=e.val;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:t.copy},c.a.createElement(d.a,{title:"Copy"},c.a.createElement(m.a,{"aria-label":"Copy",onClick:function(){f(Object(r.a)(Object(r.a)({},l),{},{open:!0}));var e=document.getElementById(E).textContent,t=document.createElement("textarea");t.setAttribute("id","copy"),t.textContent=e,document.body.append(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),t.remove()}},c.a.createElement(s.a,null)))),c.a.createElement(p.a,{className:t.result},c.a.createElement("pre",{id:E},h)),c.a.createElement(u.a,{anchorOrigin:{vertical:y,horizontal:g},open:v,onClose:function(){f(Object(r.a)(Object(r.a)({},l),{},{open:!1}))},message:"Copied to clipboard",key:y+g}))}},173:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r={vertical:"bottom",horizontal:"left"}},174:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(133),c=a(277),i=a(150),l=a(216),s=a.n(l),u=a(146),p=a(288),m=a(289),d=a(292),b=Object(o.a)((function(e){return{hidden:{visibility:"hidden",width:"1px"},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},helpText:{marginLeft:e.spacing(2)}}}));t.a=function(e){var t=b(),a=e.fileMetaData&&n.a.createElement("div",null,n.a.createElement(p.a,null,"Selected: ".concat(e.fileMetaData.name)),n.a.createElement(u.a,{onClick:e.handleDelete},n.a.createElement(s.a,null)));return n.a.createElement(i.a,null,n.a.createElement(c.a,{onClick:function(){return document.getElementById("inp").click()},variant:"outlined",color:"secondary",disabled:e.uploading},e.uploading&&n.a.createElement(d.a,{size:24,color:"secondary",className:t.buttonProgress}),e.label),n.a.createElement("input",{id:"inp",type:"file",className:t.hidden,onChange:e.readFile}),a,e.formByteInputError&&n.a.createElement("div",{className:t.helpText},n.a.createElement(m.a,{error:!0},e.errMessage?e.errMessage:"File Required")))}},187:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(30),n=a(0),o=a.n(n),c=a(5),i=a(133),l=a(295),s=a(278),u=a(35),p=Object(c.a)({root:{borderBottom:"1px solid #e8e8e8"},indicator:{backgroundColor:"#1de9b6"}})(l.a),m=Object(c.a)((function(e){return{root:{textTransform:"none",minWidth:72,fontWeight:e.typography.fontWeightRegular,marginRight:e.spacing(4),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{color:"#4aedc4",opacity:1},"&$selected":{color:"#1de9b6",fontWeight:e.typography.fontWeightMedium},"&:focus":{color:"#1de9b6"}},selected:{}}}))((function(e){return o.a.createElement(s.a,Object.assign({disableRipple:!0},e))})),d=Object(i.a)((function(e){return{root:{flexGrow:1},padding:{padding:e.spacing(2)},demo1:{backgroundColor:e.palette.background.paper},demo2:{backgroundColor:"#2e1534"}}}));function b(e){var t=d(),a=o.a.useState(0),n=Object(r.a)(a,2),c=n[0],i=n[1];return o.a.createElement("div",{className:t.root},o.a.createElement(p,{value:c,onChange:function(t,a){i(a),e.handleType(a)},"aria-label":"ant example"},o.a.createElement(m,{label:"Passhrase (Symmetric)"}),o.a.createElement(m,{label:"Key Pair (Asymmetric)"})),o.a.createElement(u.a,{className:t.padding}))}},192:function(e,t,a){"use strict";var r=a(155),n=a.n(r),o=a(158),c=a(160),i=a(30),l=a(11),s=a(0),u=a.n(s),p=a(133),m=a(283),d=a(277),b=a(150),f=a(298),y=a(305),g=a(293),v=a(286),E=a(288),h=a(301),x=a(297),j=a(167),O=a(292),k=a(173),w=a(174),S=a(35),T=a(175),C=Object(p.a)((function(e){return{buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},main:Object(l.a)({backgroundColor:"#FAFAFA",padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{padding:e.spacing(2)})}}));t.a=function(e){var t=C();console.log("mount");var a,r=e.privateKey,l=e.encrypt,p={err:!1,key:!1,message:!1},P=Object(s.useState)(j.k),I=Object(i.a)(P,2),B=I[0],N=I[1],R=Object(s.useState)(),D=Object(i.a)(R,2),F=D[0],L=D[1],M=Object(s.useState)("byte"),A=Object(i.a)(M,2),K=A[0],W=A[1],q=Object(s.useState)(p),z=Object(i.a)(q,2),H=z[0],G=z[1],_=Object(s.useState)(p),U=Object(i.a)(_,2),J=U[0],V=U[1],Y=Object(s.useState)(),$=Object(i.a)(Y,2),Q=$[0],X=$[1],Z=Object(s.useState)(!1),ee=Object(i.a)(Z,2),te=ee[0],ae=ee[1],re=Object(s.useState)(""),ne=Object(i.a)(re,2),oe=ne[0],ce=ne[1],ie=Object(s.useState)(!1),le=Object(i.a)(ie,2),se=le[0],ue=le[1],pe=function(e,t){"clickaway"!==t&&N(j.k)};a="text"===K?u.a.createElement(m.a,{helperText:H.err&&H.message,className:t.textBox,fullWidth:!0,error:H.err,id:"outlined-multiline-static",label:"RSA Key Input",multiline:!0,rows:10,onChange:function(e){L(e.target.value)},variant:"outlined"}):u.a.createElement(w.a,{formByteInputError:J.err,errMessage:J.err.message,fileMetaData:Q,label:"Key Browse",buttonLabel:"key browse",handleDelete:function(){L(void 0),X(void 0)},readFile:function(e){var t=e.target.files[0];if(t){var a=new FileReader;ue(!0),a.readAsText(t),a.onloadend=function(){X({name:t.name,type:t.type.replace("/","_")}),L(a.result),ue(!1)},a.onerror=function(){L(void 0),ue(!1)}}},uploading:se}),console.log(J);var me=function(){var t=Object(c.a)(n.a.mark((function t(a){var c,i,l,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),N(j.k),G(p),V(p),ae(!1),c=!1,""===oe&&(ae(!0),c=!0),F&&""!==F){t.next=9;break}"text"===K?G(Object(o.a)(Object(o.a)({},H),{},{err:!0,message:"Key Text Required"})):V(Object(o.a)(Object(o.a)({},J),{},{err:!0,message:"Key File Required"})),c=!0,t.next=24;break;case 9:if(!r){t.next=18;break}return t.next=12,be(F,oe);case 12:l=t.sent,i=l.key,c=l.error,t.next=24;break;case 18:return t.next=20,de(F);case 20:s=t.sent,i=s.key,c=s.error;case 24:e.handleKeyEncrypt(i,c);case 25:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),de=function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.key.readArmored(t);case 2:if(a=e.sent.keys[0]){e.next=8;break}return N(j.h),e.abrupt("return",{key:void 0,error:!0});case 8:return e.abrupt("return",{key:a,error:!1});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(c.a)(n.a.mark((function e(t,a){var r,o,c,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.key.readArmored(t);case 3:return o=e.sent,c=Object(i.a)(o.keys,1),l=c[0],e.next=8,l.decrypt(a);case 8:return r=[l],e.abrupt("return",{key:r,error:!1});case 12:return e.prev=12,e.t0=e.catch(0),"Incorrect key passphrase"===e.t0.message&&N(j.j),"privateKey is undefined"===e.t0.message&&N(j.h),e.abrupt("return",{key:void 0,error:!0});case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a){return e.apply(this,arguments)}}();return u.a.createElement("div",{className:t.main},B.show&&u.a.createElement(h.a,{anchorOrigin:k.a,open:B.show,autoHideDuration:1e4,onClose:pe},u.a.createElement(x.a,{onClose:pe,severity:B.severity},B.message)),u.a.createElement(b.a,null,u.a.createElement(b.a,null,u.a.createElement(S.a,{color:"textPrimary",variant:"h6",gutterBottom:!0},u.a.createElement("b",null,"Key Input")),u.a.createElement(v.a,{component:"fieldset"},u.a.createElement(y.a,{row:!0,"aria-label":"position",name:"position",value:K,defaultValue:"top",onChange:function(e){W(e.target.value)}},u.a.createElement(g.a,{value:"byte",control:u.a.createElement(f.a,{color:"secondary"}),label:"Import from file",labelPlacement:"end"}),u.a.createElement(g.a,{value:"text",control:u.a.createElement(f.a,{color:"primary"}),label:"Paste in text",labelPlacement:"end"})))),u.a.createElement(b.a,null,u.a.createElement(E.a,{component:"legend"}),u.a.createElement(b.a,{mt:3},a)),r&&u.a.createElement(b.a,{pt:3},u.a.createElement(m.a,{required:!0,helperText:te&&"Passphrase Required!",onChange:function(e){return ce(e.target.value)},error:te,id:"pw-in private key",type:"password",label:"Private Key Passphrase",variant:"outlined"})),u.a.createElement(b.a,{pt:3},u.a.createElement(d.a,{variant:"contained",color:"primary",onClick:me,disabled:e.loading},l?"Encrypt!":"Decrypt!",e.loading&&u.a.createElement(O.a,{size:24,color:"primary",className:t.buttonProgress})))))}},299:function(e,t,a){"use strict";a.r(t);var r=a(155),n=a.n(r),o=a(160),c=a(30),i=a(11),l=a(0),s=a.n(l),u=a(133),p=a(150),m=a(35),d=a(277),b=a(170),f=a(167),y=Object(u.a)((function(e){return{main:Object(i.a)({padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{padding:e.spacing(2)}),button:{margin:"5px"}}})),g=function(e){var t=y(),a=e.outbound,r=Object(l.useState)(!1),n=Object(c.a)(r,2),o=n[0],i=n[1],u=a.outbound.length>1e4||"byte"===a.type;return s.a.createElement("div",{className:t.main},s.a.createElement(p.a,{pt:2},s.a.createElement(m.a,{variant:"h6",gutterBottom:!0},"Decrypted Data:"),s.a.createElement(p.a,{mb:2,pr:4},s.a.createElement(d.a,{disabled:u,onClick:function(){return i(!o)},variant:"outlined",color:"secondary",className:t.button},o?"Hide":"In Browser"),s.a.createElement(d.a,{onClick:function(){return function(e){var t,r=document.createElement("a");t="byte"===a.type?new Blob([e.outbound]):new Blob([e.outbound],{type:f.i[e.ext]}),r.href=URL.createObjectURL(t),r.download="pep_output_"+r.href.split("/")[3].split("-")[0]+"."+e.ext,r.click(),r.remove()}(a)},variant:"outlined",color:"secondary",className:t.button},"Download"),o&&s.a.createElement(b.a,{val:a.outbound,id:"encryptedResult"})),s.a.createElement(p.a,null,s.a.createElement(d.a,{onClick:e.reset,variant:"contained",className:t.button,color:"primary"}," ","New Decryption"," "))))},v=a(187),E=a(158),h=a(283),x=a(298),j=a(305),O=a(293),k=a(296),w=a(287),S=a(2),T=a(10),C=a(1),P=(a(3),a(4)),I=a(5),B=a(141),N=l.forwardRef((function(e,t){var a,r=e.classes,n=e.className,o=e.component,c=void 0===o?"li":o,i=e.disableGutters,s=void 0!==i&&i,u=e.ListItemClasses,p=e.role,m=void 0===p?"menuitem":p,d=e.selected,b=e.tabIndex,f=Object(S.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==b?b:-1),l.createElement(B.a,Object(C.a)({button:!0,role:m,tabIndex:a,component:c,selected:d,disableGutters:s,classes:Object(C.a)({dense:r.dense},u),className:Object(P.a)(r.root,n,d&&r.selected,!s&&r.gutters),ref:t},f))})),R=Object(I.a)((function(e){return{root:Object(C.a)({},e.typography.body1,Object(T.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(C.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(N),D=a(286),F=a(192),L=a(292),M=a(289),A=a(174),K=Object(u.a)((function(e){return{textBox:{maxWidth:"700px"},dropSelect:{width:"225px"},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},main:Object(i.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingBottom:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingBottom:e.spacing(2)})}})),W=function(e){var t,a=K(),r={formTextInputError:!1,formByteInputError:!1,passPhraseMissingError:!1,fileTypeErr:!1,fileExtErr:!1},n=Object(l.useState)("byte"),o=Object(c.a)(n,2),i=o[0],u=o[1],m=Object(l.useState)(""),b=Object(c.a)(m,2),f=b[0],y=b[1],g=Object(l.useState)(r),v=Object(c.a)(g,2),S=v[0],T=v[1],C=Object(l.useState)(""),P=Object(c.a)(C,2),I=P[0],B=P[1],N=Object(l.useState)(""),W=Object(c.a)(N,2),q=W[0],z=W[1],H=Object(l.useState)(""),G=Object(c.a)(H,2),_=G[0],U=G[1],J=Object(l.useState)(),V=Object(c.a)(J,2),Y=V[0],$=V[1],Q=Object(l.useState)(!1),X=Object(c.a)(Q,2),Z=X[0],ee=X[1];t="text"===i?s.a.createElement(h.a,{helperText:S.formTextInputError&&"Please Select a file object!",className:a.textBox,fullWidth:!0,error:S.formTextInputError,id:"outlined-multiline-static",label:"Enter something like: -----BEGIN PGP MESSAGE-----",multiline:!0,rows:10,onChange:function(e){y(e.target.value)},variant:"outlined"}):s.a.createElement(A.a,{fileMetaData:Y,formByteInputError:S.formByteInputError,readFile:function(e){var t=e.target.files[0];if(t){var a=new FileReader;ee(!0),a.readAsText(t);var r={name:t.name,type:t.type.replace("/","_")};a.onloadend=function(){$(r),y(a.result),ee(!1)},a.onerror=function(){y(void 0),ee(!1)}}},handleDelete:function(){y(void 0),$(void 0)},label:"Browse for Encrypted File",uploading:Z,errMessage:"Text File Required"});var te=function(t){t&&t.preventDefault(),T(r);var a=!1,n=!1,o=!1,c=!1,l=!1,s=!1;return"text"!==i||f&&""!==f?"byte"!==i||f&&""!==f||(s=!0,a=!0):(n=!0,s=!0),""===q?(c=!0,s=!0):"text"===q&&""===_&&(l=!0,s=!0),0===e.encType&&""===I?(o=!0,s=!0):0===e.encType&&!1===s&&ae(I),T({formTextInputError:n,formByteInputError:a,passPhraseMissingError:o,fileTypeErr:c,fileExtErr:l}),s},ae=function(t){var a,r;0===e.encType?a=t:r=t,e.byteDecrypt(a,r,f,{fileType:q,ext:_})};return s.a.createElement("form",{onSubmit:function(e){return te(e)}},s.a.createElement("div",{className:a.main},s.a.createElement(p.a,{mb:2},s.a.createElement(p.a,{pt:2,pb:2},"Simply supply your encrypted file or text.",s.a.createElement("br",null),"Let us know the expected output format.",s.a.createElement("br",null),0===e.encType?s.a.createElement(s.a.Fragment,null," ","Supply your passphrase.",s.a.createElement("br",null)," "):s.a.createElement(s.a.Fragment,null,"Supply your private key and passphrase.",s.a.createElement("br",null)),"Decrypt.",s.a.createElement("br",null)),s.a.createElement(D.a,{component:"fieldset"},s.a.createElement(j.a,{row:!0,"aria-label":"position",name:"position",value:i,defaultValue:"top",onChange:function(e){T(Object(E.a)(Object(E.a)({},S),{},{formTextInputError:!1,formByteInputError:!1})),u(e.target.value)}},s.a.createElement(O.a,{value:"byte",control:s.a.createElement(x.a,{color:"secondary"}),label:"Load my gibberish",labelPlacement:"end"}),s.a.createElement(O.a,{value:"text",control:s.a.createElement(x.a,{color:"primary"}),label:"Paste my gibberish",labelPlacement:"end"})))),s.a.createElement(p.a,{pb:4},t),s.a.createElement(p.a,{pb:2},s.a.createElement(D.a,{variant:"outlined",className:a.formControl,error:!!S.fileTypeErr},s.a.createElement(w.a,{id:"demo-simple-select-outlined-label"},"File Type"),s.a.createElement(k.a,{required:!0,labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:_,onChange:function(e){var t=e.target.value;U(t),z("txt"===t||"csv"===t?"text":"byte")},className:a.dropSelect,label:"Text FIle Type"},s.a.createElement(R,{value:"txt"},".txt"),s.a.createElement(R,{value:"csv"},".csv"),s.a.createElement(R,{value:"byte"},"Something Else")),S.fileTypeErr&&s.a.createElement(M.a,null,"Please enter the format of the decrypted file")))),0===e.encType?s.a.createElement("div",{className:a.main},s.a.createElement(p.a,null,s.a.createElement(h.a,{required:!0,helperText:S.passPhraseMissingError&&"PassPhrase Required!",onChange:function(e){B(e.target.value)},error:S.passPhraseMissingError,id:"pw-in",type:"password",label:"PassPhrase",variant:"outlined"})),s.a.createElement(p.a,{pt:3},s.a.createElement(d.a,{type:"submit",onClick:te,variant:"contained",color:"primary",disabled:e.loading},"Decrypt",e.loading&&s.a.createElement(L.a,{size:24,color:"primary",className:a.buttonProgress})))):s.a.createElement(F.a,{loading:e.loader,privateKey:!0,encrypt:!1,handleKeyEncrypt:function(e,t){te()||t||ae(e)}}))},q=a(297),z=a(301),H=a(173),G=a(175),_=Object(u.a)((function(e){return{header:Object(i.a)({paddingRight:e.spacing(2),paddingLeft:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{paddingRight:e.spacing(2),paddingLeft:e.spacing(2)}),root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));t.default=function(e){var t=_(),a=Object(l.useState)(!1),r=Object(c.a)(a,2),i=r[0],u=r[1],d=Object(l.useState)(!1),b=Object(c.a)(d,2),y=b[0],E=b[1],h=Object(l.useState)(0),x=Object(c.a)(h,2),j=x[0],O=x[1],k=Object(l.useState)(f.k),w=Object(c.a)(k,2),S=w[0],T=w[1],C=Object(l.useState)(),P=Object(c.a)(C,2),I=P[0],B=P[1],N=function(e,t){"clickaway"!==t&&T(f.k)},R=function(){var e=Object(o.a)(n.a.mark((function e(t,a,r,o){var c,i,l,s,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),T(f.k),console.log("ddec",r),e.prev=3,e.next=6,G.message.readArmored(r);case 6:e.t0=e.sent,c={message:e.t0},e.next=15;break;case 10:return e.prev=10,e.t1=e.catch(3),i="Misformed armored text"===e.t1.message||"String contains an invalid character"===e.t1.message,T(!0===i?f.a:f.b),e.abrupt("return");case 15:return a?c.privateKeys=a:c.passwords=[t],"byte"===o.fileType&&(c.format="binary"),e.prev=17,e.next=20,G.decrypt(c);case 20:return l=e.sent,s=l.data,e.next=24,f.g(s,o);case 24:u=e.sent,B({outbound:s,ext:u,type:o.fileType}),D(),e.next=33;break;case 29:return e.prev=29,e.t2=e.catch(17),"Error decrypting message: Session key decryption failed."===e.t2.message&&T(f.c),e.abrupt("return");case 33:case"end":return e.stop()}}),e,null,[[3,10],[17,29]])})));return function(t,a,r,n){return e.apply(this,arguments)}}(),D=function(){u(!0),E(!1),T(f.d)},F=s.a.createElement(W,{byteDecrypt:R,encType:j,loader:y});return s.a.createElement("div",null,S.show&&s.a.createElement(z.a,{anchorOrigin:H.a,open:S.show,autoHideDuration:1e4,onClose:N},s.a.createElement(q.a,{onClose:N,severity:S.severity},S.message)),s.a.createElement(p.a,{p:2},s.a.createElement("div",{className:t.header},!i&&s.a.createElement(v.a,{handleType:function(e){O(e)}}),s.a.createElement(m.a,{variant:"h5",gutterBottom:!0},0===j?s.a.createElement("b",null,"Passphrase Decryption"):s.a.createElement("b",null,"Key Decryption"))),i?s.a.createElement(g,{reset:function(){u(!1),T(f.k)},outbound:I}):F))}}}]);
//# sourceMappingURL=7.dd0f1dfa.chunk.js.map