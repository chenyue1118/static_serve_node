(window.webpackJsonp=window.webpackJsonp||[]).push([["login"],{1146:function(t,e,i){},"76d9":function(t,e,i){"use strict";var r=i("84ac");i.n(r).a},"84ac":function(t,e,i){},a3f6:function(t,e,i){},aa77:function(t,e,i){function r(t,e,i){var r={},n=o(function(){return!!l[t]()||"​"!="​"[t]()}),s=r[t]=n?e(h):l[t];i&&(r[i]=s),a(a.P+a.F*n,"String",r)}var a=i("5ca1"),n=i("be13"),o=i("79e5"),l=i("fdef"),s="["+l+"]",c=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),h=r.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=r},ac2a:function(t,e,i){"use strict";i.r(e);i("8e6e"),i("ac6a"),i("456d"),i("66b9");var r=i("b650"),O=(i("68ef"),i("09fe"),i("ad06")),n=(i("7f7f"),i("1146"),i("2638")),k=i.n(n),s=i("c31d"),a=i("d282"),j=i("a142"),o={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}},C=i("ba31"),I=i("48f4"),l=Object(a.a)("cell"),c=l[0],S=l[1];function u(t,e,i,r){var n=e.icon,s=e.size,a=e.title,o=e.label,l=e.value,c=e.isLink,u=e.arrowDirection,h=i.title||Object(j.b)(a),f=i.default||Object(j.b)(l),d=(i.label||Object(j.b)(o))&&t("div",{class:[S("label"),e.labelClass]},[i.label?i.label():o]),p=h&&t("div",{class:[S("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[a]),d]),b=f&&t("div",{class:[S("value",{alone:!i.title&&!a}),e.valueClass]},[i.default?i.default():t("span",[l])]),g=i.icon?i.icon():n&&t(O.a,{class:S("left-icon"),attrs:{name:n}}),m=i["right-icon"],v=m?m():c&&t(O.a,{class:S("right-icon"),attrs:{name:u?"arrow-"+u:"arrow"}});var y=c||e.clickable,w={clickable:y,center:e.center,required:e.required,borderless:!e.border};return s&&(w[s]=s),t("div",k()([{class:S(w),attrs:{role:y?"button":null,tabindex:y?0:null},on:{click:function(t){Object(C.a)(r,"click",t),Object(I.a)(r)}}},Object(C.b)(r)]),[g,p,b,v,i.extra&&i.extra()])}u.props=Object(s.a)({},o,{},I.c);var h=c(u),f=i("1325");var d=i("a8c1"),p=!j.d&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());var b,g=i("ea8e"),m=Object(a.a)("field"),v=m[0],y=m[1],w=v({inheritAttrs:!1,props:Object(s.a)({},o,{error:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,labelClass:null,labelWidth:[Number,String],labelAlign:String,inputAlign:String,errorMessage:String,errorMessageAlign:String,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(j.b)(this.value)&&!this.readonly},listeners:function(){var t=Object(s.a)({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(g.a)(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t.value,i=this.$attrs.maxlength;return"number"===this.type&&Object(j.b)(i)&&e.length>i&&(e=e.slice(0,i),t.value=e),e}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),p&&Object(d.c)(Object(d.a)())},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(f.c)(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf(".");48<=e&&e<=57||46===e&&i||45===e||Object(f.c)(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(j.c)(this.autosize)){var i=this.autosize,r=i.maxHeight,n=i.minHeight;r&&(e=Math.min(e,r)),n&&(e=Math.max(e,n))}e&&(t.style.height=e+"px")}},renderInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:y("control",this.inputAlign)},[e]);var i={ref:"input",class:y("control",this.inputAlign),domProps:{value:this.value},attrs:Object(s.a)({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",k()([{},i])):t("input",k()([{attrs:{type:this.type}},i]))},renderLeftIcon:function(){var t=this.$createElement;if(this.slots("left-icon")||this.leftIcon)return t("div",{class:y("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(O.a,{attrs:{name:this.leftIcon}})])},renderRightIcon:function(){var t=this.$createElement,e=this.slots;if(e("right-icon")||this.rightIcon)return t("div",{class:y("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(O.a,{attrs:{name:this.rightIcon}})])}},render:function(t){var e,i=t,r=this.slots,n=this.labelAlign,s={icon:this.renderLeftIcon};return r("label")&&(s.title=function(){return r("label")}),i(h,{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[y("label",n),this.labelClass],arrowDirection:this.arrowDirection},class:y((e={error:this.error,disabled:this.$attrs.disabled},e["label-"+n]=n,e["min-height"]="textarea"===this.type&&!this.autosize,e)),scopedSlots:s,on:{click:this.onClick}},[i("div",{class:y("body")},[this.renderInput(),this.showClear&&i(O.a,{attrs:{name:"clear"},class:y("clear"),on:{touchstart:this.onClear}}),this.renderRightIcon(),r("button")&&i("div",{class:y("button")},[r("button")])]),this.errorMessage&&i("div",{class:y("error-message",this.errorMessageAlign)},[this.errorMessage])])}}),N=i("bd86"),$=i("5880"),x=(i("c5f6"),{name:"VerifyCodeBtn",components:Object(N.a)({},r.a.name,r.a),props:{btnMsg:{type:String,default:"发送验证码"},restTime:{type:Number,default:30}},data:function(){return{codeRestTime:0}},methods:{btnClick:function(){var t=this;this.codeRestTime=this.restTime;var e=setInterval(function(){--t.codeRestTime,t.codeRestTime||(clearInterval(e),e=null)},1e3);this.$emit("sendVerifyCode")}}}),_=(i("e2fb"),i("2877")),E=Object(_.a)(x,function(){var t=this,e=t.$createElement;return(t._self._c||e)("van-button",{staticClass:"verify-btn",attrs:{size:"mini",type:"primary",disabled:!!t.codeRestTime},on:{click:t.btnClick}},[t._v("\n  "+t._s(t.codeRestTime?t.codeRestTime+"S":"发送验证码")+"\n")])},[],!1,null,"5315c662",null).exports;function T(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,r)}return i}var A={name:"Login",data:function(){return{phoneNumber:"13216698987",password:"123456",code:"",loginWay:"password",passwordType:"password",phoneNumberError:""}},methods:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?T(i,!0).forEach(function(t){Object(N.a)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):T(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}({sendVerifyCode:function(){this.phoneNumberError="",this.phoneNumber||(this.phoneNumberError="手机号码必填")},switchPasswordType:function(){this.passwordType="password"===this.passwordType?"text":"password"},switchLoginWay:function(){this.password=this.code="",this.loginWay="password"===this.loginWay?"verifyCode":"password"},handleLogin:function(){var t={phoneNumber:this.phoneNumber,password:this.password,$router:this.$router,$route:this.$route};this.login(t)}},Object($.mapActions)({login:"user/login"})),computed:{loginWayObj:function(){return"password"===this.loginWay?{icon:"closed-eye",toggleMsg:"验证码登录"}:{icon:"eye",toggleMsg:"密码登录"}},passwordIcon:function(){return"password"===this.passwordType?"closed-eye":"eye"}},components:(b={},Object(N.a)(b,w.name,w),Object(N.a)(b,O.a.name,O.a),Object(N.a)(b,r.a.name,r.a),Object(N.a)(b,"VerifyCodeBtn",E),b)},L=(i("76d9"),Object(_.a)(A,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._m(0),e._v(" "),i("div",{staticClass:"content"},[i("van-field",{attrs:{placeholder:"手机号码","left-icon":"phone-o","error-message":e.phoneNumberError},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}}),e._v(" "),"password"===e.loginWay?i("van-field",{attrs:{placeholder:"登录密码","left-icon":"lock",type:e.passwordType},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}},[i("van-icon",{attrs:{slot:"right-icon",name:e.passwordIcon},on:{click:e.switchPasswordType},slot:"right-icon"})],1):i("van-field",{attrs:{placeholder:"短信验证码","left-icon":"comment-o",type:"text"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}},[i("VerifyCodeBtn",{attrs:{slot:"button"},on:{sendVerifyCode:e.sendVerifyCode},slot:"button"})],1),e._v(" "),i("div",{staticClass:"button-wrap"},[i("van-button",{attrs:{size:"large",type:"info"},on:{click:e.handleLogin}},[e._v("登录")])],1),e._v(" "),i("div",{staticClass:"more-wrap"},[i("router-link",{staticClass:"link",attrs:{to:"/register"}},[e._v("没有账号？去注册")]),e._v(" "),i("div",{staticClass:"switch-way",on:{click:e.switchLoginWay}},[e._v(e._s(e.loginWayObj.toggleMsg))])],1)],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:"http://img.cixi518.com/ljh_logo.jpeg",alt:"default_logo"}})])])}],!1,null,"ac521ebc",null));e.default=L.exports},c5f6:function(t,e,i){"use strict";function r(t){var e=u(t,!1);if("string"==typeof e&&2<e.length){var i,r,n,s=(e=y?e.trim():d(e,3)).charCodeAt(0);if(43===s||45===s){if(88===(i=e.charCodeAt(2))||120===i)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var a,o=e.slice(2),l=0,c=o.length;l<c;l++)if((a=o.charCodeAt(l))<48||n<a)return NaN;return parseInt(o,r)}}return+e}var n=i("7726"),s=i("69a8"),a=i("2d95"),o=i("5dbc"),u=i("6a99"),l=i("79e5"),c=i("9093").f,h=i("11e9").f,f=i("86cc").f,d=i("aa77").trim,p="Number",b=n[p],g=b,m=b.prototype,v=a(i("2aeb")(m))==p,y="trim"in String.prototype;if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof b&&(v?l(function(){m.valueOf.call(i)}):a(i)!=p)?o(new g(r(e)),i,b):r(e)};for(var w,O=i("9e1e")?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;O.length>k;k++)s(g,w=O[k])&&!s(b,w)&&f(b,w,h(g,w));(b.prototype=m).constructor=b,i("2aba")(n,p,b)}},e2fb:function(t,e,i){"use strict";var r=i("a3f6");i.n(r).a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);