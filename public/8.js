(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{DIGK:function(e,t,a){"use strict";var s=a("Wb6G");a.n(s).a},KTuW:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".btn-green[data-v-4687ffb9] {\n  padding: 0 75px;\n}\n.btn-green .autocomplete[data-v-4687ffb9] {\n  margin-bottom: 0;\n}",""])},KhEN:function(e,t,a){"use strict";var s=a("ln4c");a.n(s).a},Wb6G:function(e,t,a){var s=a("KTuW");"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,r);s.locals&&(e.exports=s.locals)},iogb:function(e,t,a){"use strict";a.r(t);var s=a("vDqi"),r=a.n(s),i={name:"AppAuthJobSeeker",props:["data"],data:function(){return{submitted:!1,verify:!1,loading:!1,jobSeekerName:this.data.name,jobSeekerLastName:this.data.surname,jobSeekerEmail:this.data.email,jobSeekerPassword:"",jobSeekerConfirmPassword:""}},methods:{jobSeekerSubmit:function(){var e=this;this.submitted=!0,this.$store.dispatch("addErrors",this.$validator.errors.items),this.$validator.validate().then(function(t){t&&(e.loading=!0,r.a.post("/register",{role:"job_seeker",name:e.jobSeekerName,surname:e.jobSeekerLastName,email:e.jobSeekerEmail,password:e.jobSeekerPassword,password_confirmation:e.jobSeekerConfirmPassword}).then(function(t){200===t.status&&(e.verify=!0,e.loading=!1,e.$store.dispatch("showVerify",!0))}).catch(function(t){for(var a in e.loading=!1,t.response.data.errors)e.errors.add({field:a,msg:t.response.data.errors[a][0]})}))})},repeatSubmit:function(){r.a.post("/register",{email:this.jobSeekerEmail})}}},n=(a("KhEN"),a("KHd+")),o=Object(n.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.verify?a("div",{staticClass:"text-center"},[a("h2",{staticClass:"auth-title"},[e._v("\n        Подтвердите регистрацию\n    ")]),e._v(" "),a("p",{staticClass:"auth-text-confirm"},[e._v("\n        На Ваш E-mail\n        "),a("a",{staticClass:"link-default",attrs:{href:"mailto:"+e.jobSeekerEmail}},[e._v(e._s(e.jobSeekerEmail))]),e._v("\n        было направлено письмо с активацией,\n        для продолжения работы на сайте\n        выполните действия указанные в письме.\n    ")]),e._v(" "),a("a",{staticClass:"btn btn-green btn-small",attrs:{href:"/email/resend"}},[e._v("\n        Отправить еще раз\n    ")])]):a("div",[a("form",{staticClass:"auth-form",on:{keypress:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},submit:function(t){return t.preventDefault(),e.jobSeekerSubmit(t)}}},[a("div",{staticClass:"input-group"},[e._m(0),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.jobSeekerName,expression:"jobSeekerName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.submitted&&e.errors.has("name")},attrs:{type:"text",placeholder:"Например, Иван",name:"name"},domProps:{value:e.jobSeekerName},on:{input:function(t){t.target.composing||(e.jobSeekerName=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-group"},[e._m(1),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.jobSeekerLastName,expression:"jobSeekerLastName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.submitted&&e.errors.has("last_name")},attrs:{type:"text",placeholder:"Например, Иванов",name:"last_name"},domProps:{value:e.jobSeekerLastName},on:{input:function(t){t.target.composing||(e.jobSeekerLastName=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-group"},[e._m(2),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.jobSeekerEmail,expression:"jobSeekerEmail"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],class:{"is-invalid":e.submitted&&e.errors.has("email")},attrs:{type:"email",placeholder:"Например, qwerty@gmail.com",name:"email"},domProps:{value:e.jobSeekerEmail},on:{input:function(t){t.target.composing||(e.jobSeekerEmail=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-group"},[e._m(3),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.jobSeekerPassword,expression:"jobSeekerPassword"},{name:"validate",rawName:"v-validate",value:{required:!0,min:5},expression:"{required: true, min: 5 }"}],ref:"password",class:{"is-invalid":e.submitted&&e.errors.has("password")},attrs:{type:"password",placeholder:"Ваш пароль",name:"password"},domProps:{value:e.jobSeekerPassword},on:{input:function(t){t.target.composing||(e.jobSeekerPassword=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-group"},[e._m(4),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.jobSeekerConfirmPassword,expression:"jobSeekerConfirmPassword"},{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],class:{"is-invalid":e.submitted&&e.errors.has("password_confirmation")},attrs:{type:"password",placeholder:"Подтвердите ваш пароль",name:"password_confirmation","data-vv-as":"jobSeekerConfirmPassword"},domProps:{value:e.jobSeekerConfirmPassword},on:{input:function(t){t.target.composing||(e.jobSeekerConfirmPassword=t.target.value)}}})]),e._v(" "),a("button",{staticClass:"btn btn-green",attrs:{disabled:e.loading,type:"submit"}},[e._v("\n            Регистрация\n        ")])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("\n                Имя "),t("span",{staticClass:"req"},[this._v("*")]),this._v(":\n            ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("\n                Фамилия "),t("span",{staticClass:"req"},[this._v("*")]),this._v(":\n            ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("\n                Email "),t("span",{staticClass:"req"},[this._v("*")]),this._v(":\n            ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("\n                Пароль "),t("span",{staticClass:"req"},[this._v("*")]),this._v(":\n            ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("\n                Подтвердите пароль "),t("span",{staticClass:"req"},[this._v("*")]),this._v(":\n            ")])}],!1,null,"48e10875",null).exports,l=a("Snq/"),m=a.n(l),p=a("j4GA"),d=a.n(p),v={name:"AppAuthEmployer",components:{vSelect:m.a,Autocomplete:d.a},props:["data"],data:function(){return{submitted:!1,verify:!1,loading:!1,employerSurname:this.data.surname,employerName:this.data.name,employerType:"",employerNameCompany:"",employerCity:"",employerEmail:this.data.email,employerPhone:"",employerPassword:"",employerConfirmPassword:""}},beforeMount:function(){this.$store.dispatch("GET_CITY"),this.$store.dispatch("GET_COMPANY_TYPE")},methods:{employerSubmit:function(){var e=this;this.submitted=!0,this.$store.dispatch("addErrors",this.$validator.errors.items),this.$validator.validate().then(function(t){t&&(e.loading=!0,r.a.post("/register",{role:"employer",name:e.employerName,surname:e.employerSurname,company_type:e.employerType.id,company_name:e.employerNameCompany,city:e.employerCity,email:e.employerEmail,phone:e.employerPhone,password:e.employerPassword,password_confirmation:e.employerConfirmPassword}).then(function(t){"redirect"===t.data.status&&(e.verify=!0,e.$store.dispatch("showVerify",!0),e.loading=!1)}).catch(function(t){for(var a in e.loading=!1,t.response.data.errors)e.errors.add({field:a,msg:t.response.data.errors[a][0]})}))})}},computed:{cityList:function(){return this.$store.getters.CITY},companyType:function(){return this.$store.getters.COMPANY_TYPE}}},u=(a("DIGK"),Object(n.a)(v,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.verify?a("div",{staticClass:"text-center"},[a("h2",{staticClass:"auth-title"},[e._v("\n            Подтвердите регистрацию\n        ")]),e._v(" "),a("p",{staticClass:"auth-text-confirm"},[e._v("\n            На Ваш E-mail\n            "),a("a",{staticClass:"link-default",attrs:{href:"mailto:"+e.employerEmail}},[e._v(e._s(e.employerEmail))]),e._v("\n            было направлено письмо с активацией,\n            для продолжения работы на сайте\n            выполните действия указанные в письме.\n        ")]),e._v(" "),a("a",{staticClass:"btn btn-green btn-small",attrs:{href:"/email/resend"}},[e._v("\n            Отправить еще раз\n        ")])]):a("div",[a("form",{staticClass:"auth-form",on:{keypress:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},submit:function(t){return t.preventDefault(),e.employerSubmit(t)}}},[a("div",{staticClass:"input-group"},[e._m(0),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.employerName,expression:"employerName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.submitted&&e.errors.has("name")},attrs:{type:"text",placeholder:"Например, Иван",name:"name"},domProps:{value:e.employerName},on:{input:function(t){t.target.composing||(e.employerName=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-group"},[e._m(1),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.employerSurname,expression:"employerSurname"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.submitted&&e.errors.has("surname")},attrs:{type:"text",placeholder:"Например, Иванович",name:"surname"},domProps:{value:e.employerSurname},on:{input:function(t){t.target.composing||(e.employerSurname=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-group"},[e._m(2),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.employerEmail,expression:"employerEmail"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],class:{"is-invalid":e.submitted&&e.errors.has("email")},attrs:{type:"email",placeholder:"Например, qwerty@gmail.com",name:"email"},domProps:{value:e.employerEmail},on:{input:function(t){t.target.composing||(e.employerEmail=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-group"},[e._m(3),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.employerPhone,expression:"employerPhone"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.submitted&&e.errors.has("phone")},attrs:{type:"text",placeholder:"Например, +7 (888) 777-66-55",name:"phone"},domProps:{value:e.employerPhone},on:{input:function(t){t.target.composing||(e.employerPhone=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-group"},[e._m(4),e._v(" "),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"v-select__default",class:{"is-invalid":e.submitted&&e.errors.has("company_type")},attrs:{placeholder:"Выберите значение",name:"company_type",label:"name",options:e.companyType},model:{value:e.employerType,callback:function(t){e.employerType=t},expression:"employerType"}})],1),e._v(" "),a("div",{staticClass:"input-group"},[e._m(5),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.employerNameCompany,expression:"employerNameCompany"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.submitted&&e.errors.has("company_name")},attrs:{type:"text",placeholder:"Например, EDHunter.ру",name:"company_name"},domProps:{value:e.employerNameCompany},on:{input:function(t){t.target.composing||(e.employerNameCompany=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-group"},[e._m(6),e._v(" "),a("autocomplete",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{required: true}"}],class:{"is-invalid":e.submitted&&e.errors.has("city")},attrs:{placeholder:"Например, Москва",name:"city",source:e.cityList},model:{value:e.employerCity,callback:function(t){e.employerCity=t},expression:"employerCity"}})],1),e._v(" "),a("div",{staticClass:"input-group"},[e._m(7),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.employerPassword,expression:"employerPassword"},{name:"validate",rawName:"v-validate",value:{required:!0,min:6},expression:"{required: true, min: 6 }"}],ref:"password",class:{"is-invalid":e.submitted&&e.errors.has("password")},attrs:{type:"password",placeholder:"Ваш пароль",name:"password"},domProps:{value:e.employerPassword},on:{input:function(t){t.target.composing||(e.employerPassword=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-group"},[e._m(8),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.employerConfirmPassword,expression:"employerConfirmPassword"},{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],class:{"is-invalid":e.submitted&&e.errors.has("password_confirmation")},attrs:{type:"password",placeholder:"Подтвердите ваш пароль",name:"password_confirmation","data-vv-as":"password"},domProps:{value:e.employerConfirmPassword},on:{input:function(t){t.target.composing||(e.employerConfirmPassword=t.target.value)}}})]),e._v(" "),a("button",{staticClass:"btn btn-green",attrs:{type:"submit",disabled:e.loading}},[e._v("\n                Регистрация\n            ")])])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("\n                    Ваше имя"),t("span",{staticClass:"req"},[this._v("*")]),this._v(":\n                ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("\n                    Ваша фамилия "),t("span",{staticClass:"req"},[this._v("*")]),this._v(":\n                ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("\n                    Email "),t("span",{staticClass:"req"},[this._v("*")]),this._v(":\n                ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("\n                    Телефон "),t("span",{staticClass:"req"},[this._v("*")]),this._v(":\n                ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("\n                    Тип компании "),t("span",{staticClass:"req"},[this._v("*")]),this._v(":\n                ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("\n                    Название компании "),t("span",{staticClass:"req"},[this._v("*")]),this._v(":\n                ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("\n                    Город "),t("span",{staticClass:"req"},[this._v("*")]),this._v(":\n                ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("\n                    Пароль "),t("span",{staticClass:"req"},[this._v("*")]),this._v(":\n                ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[this._v("\n                    Подтвердите пароль "),t("span",{staticClass:"req"},[this._v("*")]),this._v(":\n                ")])}],!1,null,"4687ffb9",null).exports),c={name:"AppAuthRegistration",components:{AppAuthEmployer:u,AppAuthJobSeeker:o},component:{AppAuthJobSeeker:o,AppAuthEmployer:u},props:["data","type"],data:function(){return{typeRegister:0,parseData:null}},created:function(){this.parseData=JSON.parse(this.data),this.typeRegister=this.type},computed:{showVerify:function(){return this.$store.getters.showVerify}}},h=Object(n.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"auth-title",class:{"d-none":e.showVerify}},[e._v("\n        Зарегистрироваться как:\n    ")]),e._v(" "),a("div",[a("div",{staticClass:"type__register",class:{"d-none":e.showVerify}},[a("label",{staticClass:"type__register-input ",class:{active:0==e.typeRegister}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.typeRegister,expression:"typeRegister"}],attrs:{type:"radio",value:"0"},domProps:{checked:e._q(e.typeRegister,"0")},on:{change:function(t){e.typeRegister="0"}}}),e._v(" "),a("span",[e._v("Соискатель")])]),e._v(" "),a("label",{staticClass:"type__register-input",class:{active:1==e.typeRegister}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.typeRegister,expression:"typeRegister"}],attrs:{type:"radio",name:"type-register",value:"1"},domProps:{checked:e._q(e.typeRegister,"1")},on:{change:function(t){e.typeRegister="1"}}}),e._v(" "),a("span",[e._v("Работодатель")])])]),e._v(" "),0==e.typeRegister?a("div",[a("app-auth-job-seeker",{attrs:{data:e.parseData}})],1):a("div",[a("app-auth-employer",{attrs:{data:e.parseData}})],1)]),e._v(" "),a("div",{staticClass:"auth-block__footer",class:{"d-none":1==e.typeRegister}},[e._m(0),e._v(" "),a("div",{staticClass:"auth-block__social-text"},[e._v("\n            Войти с помощью социальных сетей:\n        ")]),e._v(" "),a("div",{staticClass:"auth-block__social"},[a("a",{staticClass:"auth-block__social-link",attrs:{href:"/login/with/vkontakte/job_seeker"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 23 13",width:"23px",height:"13px"}},[a("path",{attrs:{"fill-rule":"evenodd",fill:"rgb(68, 103, 141)",d:"M22.877,11.742 C22.849,11.683 22.823,11.633 22.799,11.594 C22.400,10.881 21.637,10.007 20.512,8.971 L20.488,8.947 L20.476,8.936 L20.464,8.923 L20.452,8.923 C19.941,8.441 19.618,8.117 19.482,7.950 C19.234,7.634 19.179,7.313 19.314,6.989 C19.410,6.743 19.769,6.226 20.392,5.434 C20.719,5.015 20.979,4.679 21.170,4.426 C22.551,2.606 23.150,1.443 22.966,0.937 L22.895,0.818 C22.847,0.747 22.723,0.682 22.524,0.622 C22.324,0.563 22.069,0.553 21.757,0.593 L18.309,0.617 C18.253,0.597 18.173,0.599 18.070,0.622 C17.966,0.646 17.914,0.658 17.914,0.658 L17.854,0.688 L17.806,0.724 C17.766,0.747 17.722,0.789 17.674,0.848 C17.627,0.907 17.587,0.977 17.555,1.056 C17.180,2.013 16.753,2.903 16.274,3.726 C15.978,4.216 15.707,4.641 15.459,5.002 C15.212,5.362 15.004,5.627 14.837,5.797 C14.669,5.967 14.518,6.103 14.382,6.206 C14.246,6.309 14.142,6.352 14.071,6.337 C13.999,6.321 13.931,6.305 13.867,6.289 C13.755,6.218 13.665,6.121 13.598,5.998 C13.530,5.876 13.484,5.721 13.460,5.535 C13.436,5.349 13.422,5.189 13.418,5.055 C13.414,4.920 13.416,4.730 13.424,4.485 C13.432,4.240 13.436,4.074 13.436,3.987 C13.436,3.686 13.442,3.360 13.454,3.008 C13.466,2.656 13.476,2.377 13.484,2.171 C13.492,1.966 13.496,1.748 13.496,1.518 C13.496,1.289 13.482,1.109 13.454,0.978 C13.426,0.848 13.384,0.721 13.328,0.599 C13.272,0.476 13.190,0.381 13.083,0.314 C12.975,0.247 12.841,0.193 12.682,0.153 C12.259,0.059 11.720,0.007 11.065,-0.001 C9.581,-0.016 8.627,0.078 8.203,0.284 C8.036,0.371 7.884,0.490 7.748,0.640 C7.605,0.814 7.585,0.909 7.688,0.925 C8.167,0.996 8.507,1.166 8.706,1.435 L8.778,1.578 C8.834,1.681 8.890,1.863 8.946,2.124 C9.002,2.385 9.038,2.673 9.053,2.990 C9.093,3.567 9.093,4.062 9.053,4.473 C9.013,4.885 8.976,5.205 8.940,5.434 C8.904,5.664 8.850,5.850 8.778,5.992 C8.706,6.135 8.658,6.222 8.634,6.253 C8.610,6.285 8.590,6.305 8.575,6.313 C8.471,6.352 8.363,6.372 8.251,6.372 C8.139,6.372 8.004,6.317 7.844,6.206 C7.684,6.095 7.519,5.943 7.347,5.749 C7.176,5.555 6.982,5.284 6.766,4.936 C6.551,4.588 6.327,4.176 6.096,3.702 L5.904,3.358 C5.785,3.136 5.621,2.814 5.414,2.390 C5.206,1.967 5.022,1.558 4.863,1.162 C4.799,0.996 4.703,0.869 4.575,0.782 L4.516,0.747 C4.476,0.715 4.412,0.681 4.324,0.646 C4.236,0.610 4.144,0.584 4.049,0.569 L0.768,0.592 C0.432,0.592 0.205,0.668 0.085,0.818 L0.037,0.889 C0.013,0.928 0.001,0.992 0.001,1.079 C0.001,1.166 0.025,1.273 0.073,1.399 C0.552,2.515 1.073,3.591 1.636,4.627 C2.198,5.664 2.687,6.498 3.102,7.131 C3.517,7.764 3.941,8.361 4.372,8.923 C4.803,9.485 5.088,9.845 5.228,10.003 C5.367,10.161 5.477,10.280 5.557,10.359 L5.856,10.644 C6.048,10.834 6.329,11.061 6.701,11.326 C7.072,11.591 7.483,11.852 7.934,12.110 C8.385,12.366 8.910,12.576 9.509,12.738 C10.107,12.901 10.690,12.966 11.257,12.934 L12.634,12.934 C12.913,12.910 13.125,12.823 13.268,12.673 L13.316,12.614 C13.348,12.566 13.378,12.493 13.406,12.394 C13.434,12.295 13.448,12.187 13.448,12.068 C13.439,11.728 13.465,11.421 13.525,11.148 C13.585,10.876 13.653,10.670 13.729,10.531 C13.805,10.393 13.891,10.276 13.986,10.181 C14.082,10.087 14.150,10.029 14.190,10.009 C14.230,9.989 14.262,9.976 14.286,9.968 C14.477,9.904 14.703,9.966 14.962,10.152 C15.222,10.338 15.465,10.567 15.693,10.840 C15.920,11.113 16.194,11.420 16.513,11.760 C16.833,12.100 17.112,12.353 17.351,12.519 L17.591,12.662 C17.750,12.757 17.958,12.844 18.214,12.923 C18.468,13.002 18.692,13.022 18.884,12.982 L21.949,12.935 C22.252,12.935 22.488,12.885 22.655,12.786 C22.823,12.688 22.923,12.579 22.955,12.460 C22.987,12.341 22.989,12.207 22.961,12.056 C22.933,11.906 22.905,11.801 22.877,11.742 Z"}})])]),e._v(" "),a("a",{staticClass:"auth-block__social-link",attrs:{href:"/login/with/facebook/job_seeker"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10 22",width:"10px",height:"22px"}},[a("path",{attrs:{"fill-rule":"evenodd",fill:"rgb(5, 86, 170)",d:"M6.815,21.989 L6.815,12.090 L9.546,12.090 L9.992,7.691 L6.815,7.691 L6.815,5.548 C6.815,4.416 6.841,3.292 8.279,3.292 L9.737,3.292 L9.737,0.146 C9.737,0.098 8.485,-0.008 7.219,-0.008 C4.575,-0.008 2.919,1.814 2.919,5.161 L2.919,7.691 L-0.003,7.691 L-0.003,12.090 L2.919,12.090 L2.919,21.989 L6.815,21.989 Z"}})])]),e._v(" "),a("a",{staticClass:"auth-block__social-link",attrs:{href:"/login/with/google/job_seeker"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"22px",height:"22px"}},[a("path",{staticStyle:{fill:"#FBBB00"},attrs:{d:"M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256  c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456  C103.821,274.792,107.225,292.797,113.47,309.408z"}}),e._v(" "),a("path",{staticStyle:{fill:"#518EF8"},attrs:{d:"M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451  c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535  c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"}}),e._v(" "),a("path",{staticStyle:{fill:"#28B446"},attrs:{d:"M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512  c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771  c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"}}),e._v(" "),a("path",{staticStyle:{fill:"#F14336"},attrs:{d:"M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012  c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0  C318.115,0,375.068,22.126,419.404,58.936z"}})])])]),e._v(" "),e._m(1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"auth-block__or"},[t("span",[this._v("или")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"auth-block__text"},[this._v("\n            Нажимая на кнопку «Продолжить», Вы даёте согласие на\n            обработку персональных данных, полностью соглашаетесь с\n            "),t("a",{staticClass:"link-default",attrs:{target:"_blank",href:"/about-us/conditions/"}},[this._v("условиями использования сайта")])])}],!1,null,"2d67ea36",null);t.default=h.exports},ln4c:function(e,t,a){var s=a("xmlZ");"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,r);s.locals&&(e.exports=s.locals)},xmlZ:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".btn-green[data-v-48e10875] {\n  padding: 0 75px;\n}",""])}}]);