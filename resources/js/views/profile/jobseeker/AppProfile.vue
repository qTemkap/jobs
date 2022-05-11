<template>
    <div>
        <div class="profile__block">
            <div class="profile__large">
                <h3 class="profile__title">
                    Эл. почта
                </h3>
                <p>
                    {{parseData.email}}
                </p>
<!--                <button class="btn-edit" @click="showModal('edit-email')">-->
<!--                    Редактировать-->
<!--                </button>-->
            </div>
            <div class="profile__small">
                <h3 class="profile__title">
                    Пароль
                </h3>
                <p>
                    **********
                </p>
                <button class="btn-edit" @click="showModal('edit-password')">
                    Редактировать
                </button>
            </div>
        </div>

        <div class="profile__block">
            <div class="profile__large">
                <h3 class="profile__title">
                    Личные данные
                </h3>

                <div class="user-data">
                    <div class="user-data__item">
                        <p>
                            Фамилия:
                        </p>
                        <p>
                            {{parseData.surname}}
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Имя:
                        </p>
                        <p>
                            {{parseData.name}}
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Отчество:
                        </p>
                        <p>
                            {{parseData.patronymic}}
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Пол:
                        </p>
                        <p>
                            {{renderGender()}}
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Дата рождения:
                        </p>
                        <p>
                            {{renderData()}}
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Город проживания:
                        </p>
                        <p>
                            {{residenceCity()}}
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Адрес:
                        </p>
                        <p>
                            {{parseData.address}}
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Телефон:
                        </p>
                        <p>
                            {{parseData.phone}}
                        </p>
                    </div>
                </div>

                <button class="btn-edit" @click="showModal('edit-data')">
                    Редактировать
                </button>
            </div>
            <div class="profile__small">
                <app-uploader :img="this.avatar" delete="/image/job_seeker/avatar/delete" request="/image/job_seeker/avatar/upload"></app-uploader>
            </div>
        </div>

        <modal class="modal" name="edit-email" @before-close="beforeClose">
            <div class="prev" @click="hideModal('edit-email')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 10"
                        width="6px" height="10px">
                    <path fill-rule="evenodd" fill="rgb(43, 83, 198)"
                          d="M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"/>
                </svg>
                Личные данные
            </div>
            <button class="close" @click="hideModal('edit-email')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        width="20px" height="20px">
                    <path fill-rule="evenodd" fill="rgb(0, 0, 0)"
                          d="M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"/>
                </svg>
            </button>

            <h2 class="page-title">
                Эл. почта
            </h2>

            <div class="modal-content">
                <form @keypress.enter.prevent @submit.prevent="editEmailSubmit">
                    <div class="input-group">
                        <label>
                            Эл. почта <span class="req">*</span>:
                        </label>
                        <input type="email"
                               v-model="newEmail"
                               v-validate="'required|email'"
                               name="newEmail"
                               class="" :class="{ 'is-invalid': submitted && errors.has('newEmail') }"/>
                    </div>
                    <div class="btn-wrapper">
                        <button type="submit" class="btn btn-green">
                            Сохранить
                        </button>
                        <span class="or">
                            или
                        </span>
                        <button class="link-default link-default__red" @click="hideModal('edit-email')">
                            Отменить
                        </button>
                    </div>
                </form>
            </div>

        </modal>

        <modal class="modal" name="edit-password" @before-close="beforeClose">
            <div class="prev" @click="hideModal('edit-password')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 10"
                        width="6px" height="10px">
                    <path fill-rule="evenodd" fill="rgb(43, 83, 198)"
                          d="M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"/>
                </svg>
                Личные данные
            </div>
            <button class="close" @click="hideModal('edit-password')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        width="20px" height="20px">
                    <path fill-rule="evenodd" fill="rgb(0, 0, 0)"
                          d="M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"/>
                </svg>
            </button>

            <h2 class="page-title">
                Пароль
            </h2>

            <div class="modal-content">
                <form @keypress.enter.prevent @submit.prevent="editPasswordSubmit" ref="editPasswordSubmit">
                    <div class="input-group">
                        <label>
                            Текущий пароль <span class="req">*</span>:
                        </label>

                        <input type="password"
                               v-model="oldPassword"
                               name="current_password"
                               v-validate="{required: true, min: 6 }"
                               :class="{ 'is-invalid': submitted && errors.has('current_password') }"/>
                    </div>

                    <div class="input-group">
                        <label>
                            Новый пароль <span class="req">*</span>:
                        </label>

                        <input type="password"
                               v-model="newPassword"
                               name="new_password"
                               v-validate="{required: true, min: 6, max: 32 }"
                               ref="new_password"
                               :class="{ 'is-invalid': submitted && errors.has('new_password') }"/>
                    </div>

                    <div class="input-group">
                        <label>
                            Новый пароль еще раз <span class="req">*</span>:
                        </label>

                        <input type="password"
                               v-model="newPasswordConfirmation"
                               v-validate="'required|confirmed:new_password'"
                               name="new_password_confirmation"
                               data-vv-as="new_password"
                               class=""
                               :class="{ 'is-invalid': submitted && errors.has('new_password_confirmation') }"/>

                    </div>

                    <div class="btn-wrapper">
                        <button type="submit" class="btn btn-green">
                            Сохранить
                        </button>
                        <span class="or">
                            или
                        </span>
                        <button type="button" class="link-default link-default__red" @click="hideModal('edit-password')">
                            Отменить
                        </button>
                    </div>
                </form>
            </div>

        </modal>

        <modal class="modal modal-edit-data" name="edit-data" @before-close="beforeClose">
            <div class="prev" @click="hideModal('edit-data')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 10"
                        width="6px" height="10px">
                    <path fill-rule="evenodd" fill="rgb(43, 83, 198)"
                          d="M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"/>
                </svg>
                Личные данные
            </div>
            <button class="close" @click="hideModal('edit-data')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        width="20px" height="20px">
                    <path fill-rule="evenodd" fill="rgb(0, 0, 0)"
                          d="M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"/>
                </svg>
            </button>

            <h2 class="page-title">
                Личные данные
            </h2>

            <div class="modal-content">
                <form @keypress.enter.prevent @submit.prevent="editDataSubmit">
                    <div class="input-group">
                        <label>
                            Фамилия <span class="req">*</span>:
                        </label>

                        <input type="text"
                               v-model="parseData.surname"
                               v-validate="'required'"
                               name="surname"
                               :class="{ 'is-invalid': submitted && errors.has('surname') }"/>
                    </div>

                    <div class="input-group">
                        <label>
                            Имя <span class="req">*</span>:
                        </label>

                        <input type="text"
                               v-model="parseData.name"
                               v-validate="'required'"
                               name="name"
                               :class="{ 'is-invalid': submitted && errors.has('name') }"/>

                    </div>

                    <div class="input-group">
                        <label>
                            Отчество:
                        </label>

                        <input type="text"
                               name="middle_name"
                               v-model="parseData.patronymic"
                               class=""/>
                    </div>

                    <div class="input-group">
                        <label>
                            Дата рождения <span class="req">*</span>:
                        </label>

                        <datepicker
                                placeholder="1996-04-03"
                                v-model="parseData.date_of_birth"
                                v-validate="'required'"
                                name="date"
                                format="dd MMM yyyy"
                                :language="ru"
                                :class="{ 'is-invalid': submitted && errors.has('date') }"
                        ></datepicker>
                    </div>
                    <div class="input-group">
                        <label class="radio">
                            <input type="radio"
                                   name="gender"
                                   id="gender-1"
                                   value="0"
                                   v-model.number="parseData.gender">
                            <span>
                               Женский
                            </span>
                        </label>

                        <label class="radio">
                            <input type="radio"
                                   name="gender"
                                   id="gender-2"
                                   value="1"
                                   v-model.number="parseData.gender">
                            <span>
                               Мужской
                            </span>
                        </label>
                    </div>

                    <div class="input-group">
                        <label>
                            Город проживания <span class="req">*</span>:
                        </label>

                        <autocomplete
                                placeholder="Например, Москва"
                                v-validate="'required'"
                                name="city"
                                :initialDisplay="residenceCity()"
                                v-model.number="city"
                                :class="{ 'is-invalid': submitted && errors.has('city') }"
                                :source="cityList">
                        </autocomplete>
                    </div>

                    <div class="input-group">
                        <label>
                            Домашний адрес:
                        </label>

                        <input type="text"
                               v-model="parseData.address"
                               name="address"
                        />

                    </div>

                    <div class="input-group">
                        <label>
                            Мобильный телефон <span class="req">*</span>:
                        </label>

                        <input type="text"
                               v-model="parseData.phone"
                               v-validate="'required'"
                               name="phone"
                               :class="{ 'is-invalid': submitted && errors.has('phone') }"/>
                    </div>

                    <div class="input-group">
                        <label class="radio">
                            <input type="radio" v-model="parseData.show_data" v-validate="'required'" name="show-data" checked
                                   value="1">
                            <span>Показывать во всех резюме</span>
                        </label>
                        <label class="radio">
                            <input type="radio" v-model="parseData.show_data" name="show-data" value="0">
                            <span>Скрыть во всех резюме (не рекомендуется)</span>
                        </label>
                    </div>

                    <div class="btn-wrapper">
                        <button type="submit" class="btn btn-green">
                            Сохранить
                        </button>
                        <span class="or">
                            или
                        </span>
                        <button type="button" class="link-default link-default__red" @click="hideModal('edit-data')">
                            Отменить
                        </button>
                    </div>
                </form>
            </div>

        </modal>


    </div>
</template>

<script>

    import vSelect from 'vue-select';
    import axios from 'axios';
    import Autocomplete from 'vuejs-auto-complete';
    import Datepicker from 'vuejs-datepicker';
    import {ru} from 'vuejs-datepicker/dist/locale'

    export default {
        name: "AppProfile",
        components: {
            vSelect,
            Datepicker,
            Autocomplete

        },
        props: ['data'],
        data() {
            return {
                ru: ru,
                submitted: false,
                newEmail: '',
                newPassword: '',
                newPasswordConfirmation: '',
                oldPassword: '',
                showData: 0,
                image: '',
                avatar: null,
                city: null,
                saved: false,
            }
        },

        created() {
            this.$store.dispatch('GET_CITY');
            this.city = this.parseData.city !== null ? this.parseData.city.id : '';
            this.avatar = this.parseData.avatar !== null ? this.parseData.avatar : null;
        },


        methods: {
            // methods open adn close popup
            showModal(modalName){
                this.$modal.show(modalName);
            },
            hideModal(modalName){
                this.$modal.hide(modalName);
            },
            beforeClose (event){
                if(this.saved == false){
                    this.parseData = JSON.parse(this.data);
                }else {
                    this.saved = false;
                }
            },
            // methods submit form
            editEmailSubmit(event) {
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                this.$validator.validate().then(valid => {
                    if (valid) {
                        axios.post('/register', {
                            email: this.email
                        })
                            .then(response => {
                                if (response.status === 200) {
                                    this.hideModal('edit-email');
                                    this.newEmail = '';
                                    event.target.reset();
                                    this.saved = true;
                                }
                            })
                            .catch(error => {
                                for (let errorItem in error.response.data.errors) {
                                    this.errors.add({
                                        field: errorItem,
                                        msg: error.response.data.errors[errorItem][0]
                                    });
                                }
                            });
                    }
                });
            },

            editPasswordSubmit() {
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                const editPasswordData = {
                    _method: 'PATCH',
                    current_password: this.oldPassword,
                    new_password: this.newPassword,
                    new_password_confirmation: this.newPasswordConfirmation,
                };


                this.$validator.validate().then(valid => {
                    if (valid) {
                        axios.post('/profile/change_password', editPasswordData)
                            .then(response => {
                                if (response.status === 200) {
                                    this.hideModal('edit-password');
                                    this.newPassword = '';
                                    this.newPasswordConfirmation = '';
                                    this.oldPassword = '';
                                    this.$refs.editPasswordSubmit.reset();
                                    this.submitted = false;
                                    this.saved = true;
                                }
                            })
                            .catch(error => {
                                for (let errorItem in error.response.data.errors) {
                                    this.errors.add({
                                        field: errorItem,
                                        msg: error.response.data.errors[errorItem][0]
                                    });
                                }
                            });
                    }
                });
            },

            editDataSubmit() {
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                this.$validator.validate().then(valid => {
                    if (valid) {
                        axios.post('/profile/store', {
                            _method: 'PATCH',
                            surname: this.parseData.surname,
                            name: this.parseData.name,
                            patronymic: this.parseData.patronymic,
                            date_of_birth: this.dateFormated(),
                            city_id: this.city,
                            address: this.parseData.address,
                            phone: this.parseData.phone,
                            show_data: this.parseData.show_data,
                            gender: this.parseData.gender
                        })
                            .then(response => {
                                if (response.status === 200) {
                                    this.hideModal('edit-data');
                                    this.saved = true;
                                }
                            })
                            .catch(error => {
                                for (let errorItem in error.response.data.errors) {
                                    this.errors.add({
                                        field: errorItem,
                                        msg: error.response.data.errors[errorItem][0]
                                    });
                                }
                            });
                    }
                });
            },

            dateFormated() {
                if(this.parseData.date_of_birth !== null){
                    let date = new Date(this.parseData.date_of_birth);
                    let day = ('0' + date.getDate()).slice(-2);
                    let month = ('0' + (date.getMonth() + 1)).slice(-2);
                    let year = date.getFullYear();
                    return `${year}-${month}-${day}`
                } else{
                    return ''
                }
            },

            renderData() {
                if(this.parseData.date_of_birth !== null){
                    let date = new Date(this.parseData.date_of_birth);
                    let day = ('0' + date.getDate()).slice(-2);
                    let month = ('0' + (date.getMonth() + 1)).slice(-2);
                    let year = date.getFullYear();
                    let monthList =  this.$store.getters.month;
                    let monthName = monthList.find(item => month === item.id);

                    return `${day} ${monthName.shortName} ${year}`
                } else{
                    return ''
                }
            },

            residenceCity(){
                let setCity = this.cityList.find((cityId) => {
                    return this.city === cityId.id
                });
                if(setCity !== undefined){
                    return setCity.name
                }
            },

            renderGender(){
              if(this.parseData.gender === null){
                  return ''
              } else if(this.parseData.gender == 1){
                  return 'Мужской'
              } else if (this.parseData.gender == 0){
                  return 'Женский'
              }
            },

        },
        computed: {
            // parse data from backend
            parseData() {
                return JSON.parse(this.data)
            },
            cityList() {
                return this.$store.getters.CITY
            },
        }
    }
</script>

<style scoped>

</style>
