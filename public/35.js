(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{rCyS:function(t,a,e){"use strict";e.r(a);var s=e("Snq/"),i=e.n(s),n=e("vDqi"),r=e.n(n),o=e("j4GA"),d=e.n(o),l=e("+jP+"),v=e("JDAR"),p={name:"AppProfileEmployer",components:{vSelect:i.a,Datepicker:l.a,Autocomplete:d.a},props:["data"],data:function(){return{parseData:null,surname:"",name:"",patronymic:"",date_of_birth:"",address:"",phone:"",saved:!1,ru:v.a,submitted:!1,newEmail:"",newPassword:"",newPasswordConfirmation:"",oldPassword:"",avatar:null,city:null}},created:function(){this.parseData=JSON.parse(this.data),this.alignFieldsWithParseData(),this.$store.dispatch("GET_CITY"),this.$store.commit("SET_COMPANY_LOGO",this.parseData.logo),this.city=null!==this.parseData.city?this.parseData.city.id:"",this.avatar=null!==this.parseData.avatar?this.parseData.avatar:null},methods:{alignFieldsWithParseData:function(){this.surname=this.parseData.surname,this.name=this.parseData.name,this.patronymic=this.parseData.patronymic,this.date_of_birth=this.parseData.date_of_birth,this.address=this.parseData.address,this.phone=this.parseData.phone,this.show_data=this.parseData.show_data},alignParseDataWithFields:function(){this.parseData.surname=this.surname,this.parseData.name=this.name,this.parseData.patronymic=this.patronymic,this.parseData.date_of_birth=this.date_of_birth,this.parseData.address=this.address,this.parseData.phone=this.phone,this.parseData.show_data=this.show_data},editPersonalDetails:function(){this.showModal("edit-data")},showModal:function(t){this.$modal.show(t)},hideModal:function(t){this.$modal.hide(t)},beforeClose:function(t){0==this.saved?this.parseData=JSON.parse(this.data):this.saved=!1},editEmailSubmit:function(t){var a=this;this.submitted=!0,this.$store.dispatch("addErrors",this.$validator.errors.items),this.$validator.validate().then(function(e){e&&r.a.post("/register",{email:a.email}).then(function(e){200===e.status&&(a.hideModal("edit-email"),a.newEmail="",a.saved=!0,t.target.reset())}).catch(function(t){for(var e in t.response.data.errors)a.errors.add({field:e,msg:t.response.data.errors[e][0]})})})},editPasswordSubmit:function(){var t=this;this.submitted=!0,this.$store.dispatch("addErrors",this.$validator.errors.items),this.$validator.validate().then(function(a){a&&r.a.post("/employer/profile/change_password",{_method:"PATCH",current_password:t.oldPassword,new_password:t.newPassword,new_password_confirmation:t.newPasswordConfirmation}).then(function(a){200===a.status&&(t.hideModal("edit-password"),t.saved=!0)}).catch(function(a){for(var e in a.response.data.errors)t.errors.add({field:e,msg:a.response.data.errors[e][0]})})})},editDataSubmit:function(){var t=this;this.submitted=!0,this.$store.dispatch("addErrors",this.$validator.errors.items),this.$validator.validate().then(function(a){a&&r.a.post("/employer/profile/store",{_method:"PATCH",surname:t.surname,name:t.name,patronymic:t.patronymic,date_of_birth:t.dateFormated(),city_id:t.city,address:t.address,phone:t.phone,show_data:+t.show_data}).then(function(a){200===a.status&&(t.alignParseDataWithFields(),t.hideModal("edit-data"),t.saved=!0)}).catch(function(a){for(var e in a.response.data.errors)t.errors.add({field:e,msg:a.response.data.errors[e][0]})})})},dateFormated:function(){if(null!==this.date_of_birth){var t=new Date(this.date_of_birth),a=("0"+t.getDate()).slice(-2),e=("0"+(t.getMonth()+1)).slice(-2),s=t.getFullYear();return"".concat(s,"-").concat(e,"-").concat(a)}return""},residenceCity:function(){var t=this,a=this.cityList.find(function(a){return t.city===a.id});if(void 0!==a)return a.name}},computed:{cityList:function(){return this.$store.getters.CITY},renderData:function(){if(null!==this.date_of_birth){var t=new Date(this.date_of_birth),a=("0"+t.getDate()).slice(-2),e=("0"+(t.getMonth()+1)).slice(-2),s=t.getFullYear(),i=this.$store.getters.month.find(function(t){return e===t.id});return"".concat(a," ").concat(i.shortName," ").concat(s)}return""}}},u=e("KHd+"),c=Object(u.a)(p,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"profile__block"},[e("div",{staticClass:"profile__large"},[e("h3",{staticClass:"profile__title"},[t._v("\n                    Эл. почта\n                ")]),t._v(" "),e("p",[t._v("\n                    "+t._s(t.parseData.email)+"\n                ")])]),t._v(" "),e("div",{staticClass:"profile__small"},[e("h3",{staticClass:"profile__title"},[t._v("\n                    Пароль\n                ")]),t._v(" "),e("p",[t._v("\n                    **********\n                ")]),t._v(" "),e("button",{staticClass:"btn-edit",on:{click:function(a){return t.showModal("edit-password")}}},[t._v("\n                    Редактировать\n                ")])])]),t._v(" "),e("div",{staticClass:"profile__block"},[e("div",{staticClass:"profile__large"},[e("h3",{staticClass:"profile__title"},[t._v("\n                    Личные данные\n                ")]),t._v(" "),e("div",{staticClass:"user-data"},[e("div",{staticClass:"user-data__item"},[e("p",[t._v("\n                            Фамилия:\n                        ")]),t._v(" "),e("p",[t._v("\n                            "+t._s(t.surname)+"\n                        ")])]),t._v(" "),e("div",{staticClass:"user-data__item"},[e("p",[t._v("\n                            Имя:\n                        ")]),t._v(" "),e("p",[t._v("\n                            "+t._s(t.name)+"\n                        ")])]),t._v(" "),e("div",{staticClass:"user-data__item"},[e("p",[t._v("\n                            Отчество:\n                        ")]),t._v(" "),e("p",[t._v("\n                            "+t._s(t.patronymic)+"\n                        ")])]),t._v(" "),e("div",{staticClass:"user-data__item"},[e("p",[t._v("\n                            Дата рождения:\n                        ")]),t._v(" "),e("p",[t._v("\n                            "+t._s(t.renderData)+"\n                        ")])]),t._v(" "),e("div",{staticClass:"user-data__item"},[e("p",[t._v("\n                            Город проживания:\n                        ")]),t._v(" "),e("p",[t._v("\n                            "+t._s(t.residenceCity())+"\n                        ")])]),t._v(" "),e("div",{staticClass:"user-data__item"},[e("p",[t._v("\n                            Адрес:\n                        ")]),t._v(" "),e("p",[t._v("\n                            "+t._s(t.address)+"\n                        ")])]),t._v(" "),e("div",{staticClass:"user-data__item"},[e("p",[t._v("\n                            Телефон:\n                        ")]),t._v(" "),e("p",[t._v("\n                            "+t._s(t.phone)+"\n                        ")])])]),t._v(" "),e("button",{staticClass:"btn-edit",on:{click:t.editPersonalDetails}},[t._v("\n                    Редактировать\n                ")])]),t._v(" "),e("div",{staticClass:"profile__small"},[e("app-uploader",{attrs:{img:this.avatar,delete:"/image/employer/avatar/delete",request:"/image/employer/avatar/upload"}})],1)]),t._v(" "),e("modal",{staticClass:"modal",attrs:{name:"edit-email"},on:{"before-close":t.beforeClose}},[e("div",{staticClass:"prev",on:{click:function(a){return t.hideModal("edit-email")}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 6 10",width:"6px",height:"10px"}},[e("path",{attrs:{"fill-rule":"evenodd",fill:"rgb(43, 83, 198)",d:"M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"}})]),t._v("\n                Личные данные\n            ")]),t._v(" "),e("button",{staticClass:"close",on:{click:function(a){return t.hideModal("edit-email")}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:"20px",height:"20px"}},[e("path",{attrs:{"fill-rule":"evenodd",fill:"rgb(0, 0, 0)",d:"M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"}})])]),t._v(" "),e("h2",{staticClass:"page-title"},[t._v("\n                Эл. почта\n            ")]),t._v(" "),e("div",{staticClass:"modal-content"},[e("form",{on:{keypress:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;a.preventDefault()},submit:function(a){return a.preventDefault(),t.editEmailSubmit(a)}}},[e("div",{staticClass:"input-group"},[e("label",[t._v("\n                            Эл. почта "),e("span",{staticClass:"req"},[t._v("*")]),t._v(":\n                        ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newEmail,expression:"newEmail"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],class:{"is-invalid":t.submitted&&t.errors.has("newEmail")},attrs:{type:"email",name:"newEmail"},domProps:{value:t.newEmail},on:{input:function(a){a.target.composing||(t.newEmail=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"btn-wrapper"},[e("button",{staticClass:"btn btn-green",attrs:{type:"submit"}},[t._v("\n                            Сохранить\n                        ")]),t._v(" "),e("span",{staticClass:"or"},[t._v("\n                            или\n                        ")]),t._v(" "),e("button",{staticClass:"link-default link-default__red",on:{click:function(a){return t.hideModal("edit-email")}}},[t._v("\n                            Отменить\n                        ")])])])])]),t._v(" "),e("modal",{staticClass:"modal",attrs:{name:"edit-password"},on:{"before-close":t.beforeClose}},[e("div",{staticClass:"prev",on:{click:function(a){return t.hideModal("edit-password")}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 6 10",width:"6px",height:"10px"}},[e("path",{attrs:{"fill-rule":"evenodd",fill:"rgb(43, 83, 198)",d:"M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"}})]),t._v("\n                Личные данные\n            ")]),t._v(" "),e("button",{staticClass:"close",on:{click:function(a){return t.hideModal("edit-password")}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:"20px",height:"20px"}},[e("path",{attrs:{"fill-rule":"evenodd",fill:"rgb(0, 0, 0)",d:"M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"}})])]),t._v(" "),e("h2",{staticClass:"page-title"},[t._v("\n                Пароль\n            ")]),t._v(" "),e("div",{staticClass:"modal-content"},[e("form",{ref:"editPasswordSubmit",on:{keypress:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;a.preventDefault()},submit:function(a){return a.preventDefault(),t.editPasswordSubmit(a)}}},[e("div",{staticClass:"input-group"},[e("label",[t._v("\n                            Текущий пароль "),e("span",{staticClass:"req"},[t._v("*")]),t._v(":\n                        ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.oldPassword,expression:"oldPassword"},{name:"validate",rawName:"v-validate",value:{required:!0,min:6},expression:"{required: true, min: 6 }"}],class:{"is-invalid":t.submitted&&t.errors.has("current_password")},attrs:{type:"password",name:"current_password"},domProps:{value:t.oldPassword},on:{input:function(a){a.target.composing||(t.oldPassword=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-group"},[e("label",[t._v("\n                            Новый пароль "),e("span",{staticClass:"req"},[t._v("*")]),t._v(":\n                        ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPassword,expression:"newPassword"},{name:"validate",rawName:"v-validate",value:{required:!0,min:6,max:32},expression:"{required: true, min: 6, max: 32 }"}],ref:"new_password",class:{"is-invalid":t.submitted&&t.errors.has("new_password")},attrs:{type:"password",name:"new_password"},domProps:{value:t.newPassword},on:{input:function(a){a.target.composing||(t.newPassword=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-group"},[e("label",[t._v("\n                            Новый пароль еще раз "),e("span",{staticClass:"req"},[t._v("*")]),t._v(":\n                        ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPasswordConfirmation,expression:"newPasswordConfirmation"},{name:"validate",rawName:"v-validate",value:"required|confirmed:new_password",expression:"'required|confirmed:new_password'"}],class:{"is-invalid":t.submitted&&t.errors.has("new_password_confirmation")},attrs:{type:"password",name:"new_password_confirmation","data-vv-as":"new_password"},domProps:{value:t.newPasswordConfirmation},on:{input:function(a){a.target.composing||(t.newPasswordConfirmation=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"btn-wrapper"},[e("button",{staticClass:"btn btn-green",attrs:{type:"submit"}},[t._v("\n                            Сохранить\n                        ")]),t._v(" "),e("span",{staticClass:"or"},[t._v("\n                            или\n                        ")]),t._v(" "),e("button",{staticClass:"link-default link-default__red",attrs:{type:"button"},on:{click:function(a){return t.hideModal("edit-password")}}},[t._v("\n                            Отменить\n                        ")])])])])]),t._v(" "),e("modal",{staticClass:"modal modal-edit-data",attrs:{name:"edit-data"},on:{"before-close":t.beforeClose}},[e("div",{staticClass:"prev",on:{click:function(a){return t.hideModal("edit-data")}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 6 10",width:"6px",height:"10px"}},[e("path",{attrs:{"fill-rule":"evenodd",fill:"rgb(43, 83, 198)",d:"M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"}})]),t._v("\n                Личные данные\n            ")]),t._v(" "),e("button",{staticClass:"close",on:{click:function(a){return t.hideModal("edit-data")}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:"20px",height:"20px"}},[e("path",{attrs:{"fill-rule":"evenodd",fill:"rgb(0, 0, 0)",d:"M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"}})])]),t._v(" "),e("h2",{staticClass:"page-title"},[t._v("\n                Личные данные\n            ")]),t._v(" "),e("div",{staticClass:"modal-content"},[e("form",{on:{keypress:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;a.preventDefault()},submit:function(a){return a.preventDefault(),t.editDataSubmit(a)}}},[e("div",{staticClass:"input-group"},[e("label",[t._v("\n                            Фамилия "),e("span",{staticClass:"req"},[t._v("*")]),t._v(":\n                        ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.surname,expression:"surname"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":t.submitted&&t.errors.has("surname")},attrs:{type:"text",name:"surname"},domProps:{value:t.surname},on:{input:function(a){a.target.composing||(t.surname=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-group"},[e("label",[t._v("\n                            Имя "),e("span",{staticClass:"req"},[t._v("*")]),t._v(":\n                        ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":t.submitted&&t.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-group"},[e("label",[t._v("\n                            Отчество:\n                        ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.patronymic,expression:"patronymic"}],attrs:{type:"text",name:"middle_name"},domProps:{value:t.patronymic},on:{input:function(a){a.target.composing||(t.patronymic=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-group"},[e("label",[t._v("\n                            Дата рождения "),e("span",{staticClass:"req"},[t._v("*")]),t._v(":\n                        ")]),t._v(" "),e("datepicker",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":t.submitted&&t.errors.has("date")},attrs:{placeholder:"1996-04-03",name:"date",format:"yyyy-MM-dd",language:t.ru},model:{value:t.date_of_birth,callback:function(a){t.date_of_birth=a},expression:"date_of_birth"}})],1),t._v(" "),e("div",{staticClass:"input-group"},[e("label",[t._v("\n                            Город проживания "),e("span",{staticClass:"req"},[t._v("*")]),t._v(":\n                        ")]),t._v(" "),e("autocomplete",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":t.submitted&&t.errors.has("city")},attrs:{placeholder:"Например, Москва",name:"city",initialDisplay:t.residenceCity(),source:t.cityList},model:{value:t.city,callback:function(a){t.city=t._n(a)},expression:"city"}})],1),t._v(" "),e("div",{staticClass:"input-group"},[e("label",[t._v("\n                            Домашний адрес:\n                        ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",name:"address"},domProps:{value:t.address},on:{input:function(a){a.target.composing||(t.address=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-group"},[e("label",[t._v("\n                            Мобильный телефон "),e("span",{staticClass:"req"},[t._v("*")]),t._v(":\n                        ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":t.submitted&&t.errors.has("phone")},attrs:{type:"text",name:"phone"},domProps:{value:t.phone},on:{input:function(a){a.target.composing||(t.phone=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-group"},[e("label",{staticClass:"radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.show_data,expression:"show_data"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"radio",name:"show-data",checked:"",value:"1"},domProps:{checked:t._q(t.show_data,"1")},on:{change:function(a){t.show_data="1"}}}),t._v(" "),e("span",[t._v("Показывать во всех резюме")])]),t._v(" "),e("label",{staticClass:"radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.show_data,expression:"show_data"}],attrs:{type:"radio",name:"show-data",value:"0"},domProps:{checked:t._q(t.show_data,"0")},on:{change:function(a){t.show_data="0"}}}),t._v(" "),e("span",[t._v("Скрыть во всех резюме (не рекомендуется)")])])]),t._v(" "),e("div",{staticClass:"btn-wrapper"},[e("button",{staticClass:"btn btn-green",attrs:{type:"submit"}},[t._v("\n                            Сохранить\n                        ")]),t._v(" "),e("span",{staticClass:"or"},[t._v("\n                            или\n                        ")]),t._v(" "),e("button",{staticClass:"link-default link-default__red",attrs:{type:"button"},on:{click:function(a){return t.hideModal("edit-data")}}},[t._v("\n                            Отменить\n                        ")])])])])])],1)},[],!1,null,"b242d15a",null);a.default=c.exports}}]);