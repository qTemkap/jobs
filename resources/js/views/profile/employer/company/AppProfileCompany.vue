<template>
    <div>
        <div class="profile__block">
            <h3 class="profile__title">
                Название и сфера деятельности
            </h3>
            <div class="user-data">
                <div class="user-data__item">
                    <p>
                        Название:
                    </p>
                    <p>
                        {{parseData.name}}
                    </p>
                </div>

                <div class="user-data__item">
                    <p>
                        Тип компании:
                    </p>
                    <p>
                        {{ conversionToObject(company_types).name }}
                    </p>
                </div>

                <div class="user-data__item">
                    <p>
                        Размер компании:
                    </p>
                    <p>
                        <span v-if="parseData.company_size.length !== 0">
                            больше  {{ conversionToObject(parseData.company_size).name }} сотрудников
                        </span>
                    </p>
                </div>
            </div>
            <div class="btn-block">
                <button class="btn-edit" @click="showModal('edit-company-scope')">
                    Редактировать
                </button>
            </div>
        </div>

        <div class="profile__block">
            <h3 class="profile__title">
                Описание компании
            </h3>

            <div class="desc profile__desc" v-html='parseData.information'></div>

            <div class="btn-block">
                <button class="btn-edit" @click="showModal('edit-company-description')">
                    Редактировать
                </button>
            </div>
        </div>

        <div class="profile__block profile__block-row profile__block-info">
            <div class="profile__large">
                <h3 class="profile__title">
                    Информация о компании
                </h3>

                <div class="user-data">
                    <div class="user-data__item">
                        <p>
                            Город:
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
                            {{address}}
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Телефон:
                        </p>
                        <p>
                            {{phoneToString}}
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            E-mail:
                        </p>
                        <p>
                            <a class="link-default" :href="`mailto:${email}`">{{email}}</a>
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Веб сайт:
                        </p>
                        <p>
                            <a class="link-default" :href="`http://${web_site}`"
                               target="_blank">{{web_site}}</a>
                        </p>
                    </div>
                </div>
            </div>
           <div class="profile__small">
                <app-uploader :img="this.avatar"
                              :company='true'
                              delete="/image/company/logo/delete"
                              request="/image/company/logo/upload">
                </app-uploader>
            </div>
            <div class="btn-block">
                <button class="btn-edit" @click="showModal('edit-company-info')">
                    Редактировать
                </button>
            </div>
        </div>

        <div class="profile__block profile__block-info">
            <h3 class="profile__title">
                Контактное лицо
            </h3>
            <div class="user-data">
                <div class="user-data__item">
                    <p>
                        Имя:
                    </p>
                    <p>
                        {{contact_name}}
                    </p>
                </div>

                <div class="user-data__item">
                    <p>
                        Телефон:
                    </p>
                    <p>
                        {{contact_phone}}
                    </p>
                </div>

                <div class="user-data__item">
                    <p>
                        E-mail:
                    </p>
                    <p>
                        <a :href="`mailto:${contact_email}`"
                           class="link-default">{{contact_email}}</a>
                    </p>
                </div>
            </div>
            <div class="btn-block">
                <button class="btn-edit" @click="showModal('edit-company-person')">
                    Редактировать
                </button>
            </div>
        </div>

        <modal class="modal" name="edit-company-scope" @before-close="beforeClose">
            <div class="prev" @click="hideModal('edit-company-scope')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 10"
                        width="6px" height="10px">
                    <path fill-rule="evenodd" fill="rgb(43, 83, 198)"
                          d="M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"/>
                </svg>
                Личные данные
            </div>

            <button class="close" @click="hideModal('edit-company-scope')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        width="20px" height="20px">
                    <path fill-rule="evenodd" fill="rgb(0, 0, 0)"
                          d="M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"/>
                </svg>
            </button>

            <h2 class="page-title">
                Название и сфера деятельности
            </h2>

            <div class="modal-content">
                <form @keypress.enter.prevent @submit.prevent="editCompanyScopeSubmit">
                    <div class="input-group">
                        <label>
                            Название <span class="req">*</span>:
                        </label>
                        <input type="text"
                               v-model="name"
                               v-validate="'required'"
                               name="name"
                               :class="{ 'is-invalid': submitted && errors.has('name') }"/>
                    </div>

                    <div class="input-group">
                        <label>
                            Тип компании <span class="req">*</span>:
                        </label>

                        <v-select
                                label="name"
                                placeholder=" - тип - "
                                name="company_type_id"
                                v-validate="'required'"
                                v-model="company_types"
                                class="v-select__default v-select__default-white"
                                :class="{ 'is-invalid': submitted && errors.has('company_type_id') }"
                                :options="typeList"
                        ></v-select>

                    </div>

                    <div class="input-group">
                        <label>
                            Размер компании <span class="req">*</span>:
                        </label>

                        <v-select
                                label="name"
                                placeholder=" - размер - "
                                name="company_sizes_id"
                                v-validate="'required'"
                                v-model="company_size"
                                class="v-select__default v-select__default-white"
                                :class="{ 'is-invalid': submitted && errors.has('company_sizes_id') }"
                                :options="sizeList"
                        ></v-select>

                    </div>

                    <div class="btn-wrapper">
                        <button type="submit" class="btn btn-green">
                            Сохранить
                        </button>
                        <span class="or">
                            или
                        </span>
                        <button type="button" class="link-default link-default__red" @click="hideModal('edit-company-scope')">
                            Отменить
                        </button>
                    </div>
                </form>
            </div>

        </modal>

        <modal class="modal modal-edit-description" name="edit-company-description" @before-close="beforeClose">
            <div class="prev" @click="hideModal('edit-company-description')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 10"
                        width="6px" height="10px">
                    <path fill-rule="evenodd" fill="rgb(43, 83, 198)"
                          d="M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"/>
                </svg>
                Личные данные
            </div>

            <button class="close" @click="hideModal('edit-company-description')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        width="20px" height="20px">
                    <path fill-rule="evenodd" fill="rgb(0, 0, 0)"
                          d="M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"/>
                </svg>
            </button>

            <h2 class="page-title">
                Описание компании
            </h2>

            <div class="modal-content">
                <form @keypress.enter.prevent @submit.prevent="editCompanyDescriptionSubmit">
                    <div class="input-group m-0">
                        <ckeditor :editor="editor"
                                  :config="editorConfig"
                                  v-model="information">
                        </ckeditor>
                    </div>
                    <div class="btn-wrapper m-t-10">
                        <button type="submit" class="btn btn-green">
                            Сохранить
                        </button>
                        <span class="or">
                            или
                        </span>
                        <button type="button" class="link-default link-default__red" @click="hideModal('edit-company-description')">
                            Отменить
                        </button>
                    </div>
                </form>
            </div>

        </modal>

        <modal class="modal" name="edit-company-info" @before-close="beforeClose">
            <div class="prev" @click="hideModal('edit-company-info')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 10"
                        width="6px" height="10px">
                    <path fill-rule="evenodd" fill="rgb(43, 83, 198)"
                          d="M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"/>
                </svg>
                Личные данные
            </div>

            <button class="close" @click="hideModal('edit-company-info')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        width="20px" height="20px">
                    <path fill-rule="evenodd" fill="rgb(0, 0, 0)"
                          d="M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"/>
                </svg>
            </button>

            <h2 class="page-title">
                Информация о компании
            </h2>

            <div class="modal-content">
                <form @keypress.enter.prevent @submit.prevent="editCompanyInfoSubmit">
                    <div class="input-group">
                        <label>
                            Город <span class="req">*</span>:
                        </label>

                        <autocomplete
                            placeholder="Например, Москва"
                            v-validate="'required'"
                            name="city"
                            :initialDisplay="residenceCity()"
                            v-model.number="cities"
                            :class="{ 'is-invalid': submitted && errors.has('city') }"
                            :source="cityList">
                        </autocomplete>

                    </div>

                    <div class="input-group">
                        <label>
                            Адрес <span class="req">*</span>:
                        </label>

                        <input type="text"
                               v-model="address"
                               v-validate="'required'"
                               name="address"
                               :class="{ 'is-invalid': submitted && errors.has('address') }"/>
                    </div>

                    <div class="input-group">

                        <div class="input-group add-phone">
                            <label>
                                Телефон <span class="req">*</span>:
                            </label>


                            <div class="add-phone-wrapper" v-for="(phone, index) in phones" :key="index">
                                <input type="text"
                                       v-model="phone.number"
                                       v-validate="'required'"
                                       name="phone"
                                       :class="{ 'is-invalid': submitted && errors.has('phone') }"
                                >
                                <button type="button" class="link-default link-default__red d-none"
                                        :class="{'d-flex': phones.length > 1}"
                                        @click="deleteInput(phone)">
                                    Удалить
                                </button>
                            </div>

                            <button type="button" class="btn-link btn-add" @click="addInput">
                                +
                                <span class="link-default">Добавить еще один</span>
                            </button>
                        </div>

                    </div>

                    <div class="input-group">
                        <label>
                            E-mail <span class="req">*</span>:
                        </label>

                        <input type="text"
                               v-model="email"
                               v-validate="'required'"
                               name="email"
                               :class="{ 'is-invalid': submitted && errors.has('email') }"/>
                    </div>

                    <div class="input-group">
                        <label>
                            Веб сайт :
                        </label>

                        <input type="text"
                               v-model="web_site"
                               name="web_site"
                               />
                    </div>

                    <div class="btn-wrapper">
                        <button type="submit" class="btn btn-green">
                            Сохранить
                        </button>
                        <span class="or">
                            или
                        </span>
                        <button type="button" class="link-default link-default__red" @click="hideModal('edit-company-info')">
                            Отменить
                        </button>
                    </div>
                </form>
            </div>

        </modal>

        <modal class="modal" name="edit-company-person" @before-close="beforeClose">
            <div class="prev" @click="hideModal('edit-company-person')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 10"
                        width="6px" height="10px">
                    <path fill-rule="evenodd" fill="rgb(43, 83, 198)"
                          d="M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"/>
                </svg>
                Личные данные
            </div>

            <button class="close" @click="hideModal('edit-company-person')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        width="20px" height="20px">
                    <path fill-rule="evenodd" fill="rgb(0, 0, 0)"
                          d="M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"/>
                </svg>
            </button>

            <h2 class="page-title">
                Контактное лицо
            </h2>

            <div class="modal-content">
                <form @keypress.enter.prevent @submit.prevent="editCompanyPersonSubmit">
                    <div class="input-group">
                        <label>
                            Имя <span class="req">*</span>:
                        </label>

                        <input type="text"
                               v-model="contact_name"
                               v-validate="'required'"
                               name="contact_name"
                               :class="{ 'is-invalid': submitted && errors.has('contact_name') }"/>
                    </div>

                    <div class="input-group">
                        <label>
                            Телефон <span class="req">*</span>:
                        </label>

                        <input type="text"
                               v-model="contact_phone"
                               v-validate="'required'"
                               name="contact_phone"
                               :class="{ 'is-invalid': submitted && errors.has('contact_phone') }"/>
                    </div>

                    <div class="input-group">
                        <label>
                            E-mail <span class="req">*</span>:
                        </label>

                        <input type="text"
                               v-model="contact_email"
                               v-validate="'required'"
                               name="contact_email"
                               :class="{ 'is-invalid': submitted && errors.has('contact_email') }"/>
                    </div>


                    <div class="btn-wrapper">
                        <button type="submit" class="btn btn-green">
                            Сохранить
                        </button>
                        <span class="or">
                            или
                        </span>
                        <button type="button" class="link-default link-default__red" @click="hideModal('edit-company-person')">
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
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: "AppProfileCompany",
        components: {
            vSelect,
            Autocomplete
        },
        props: ['data'],
        data() {
            return {
                saved: false,
                parseData: null,
                address: '',
                email: '',
                web_site: '',
                contact_name: '',
                contact_phone: '',
                name: '',
                company_size: '',
                information: '',
                company_types: '',

                sideBarShow: false,

                submitted: false,
                editor: ClassicEditor,
                editorConfig: {
                    toolbar: ['bulletedList', 'numberedList', 'bold', 'italic', 'link', 'undo', 'redo']
                },

                phones: [],
                cities: null,
                avatar: null
            }
        },

        created() {
            this.parseData = JSON.parse(this.data);
            this.alignFieldsWithParseData();
            this.$store.dispatch('GET_CITY');
            this.$store.dispatch('GET_COMPANY_SIZE');
            this.$store.dispatch('GET_COMPANY_TYPE');
            this.$store.commit('SET_COMPANY_LOGO', this.parseData.logo);
            this.cities = this.parseData.cities !== null ? this.parseData.cities[0].id : '';
            this.avatar = this.parseData.logo !== null ? this.parseData.logo : null;

           if (this.parseData.phones !== null) {
                this.parseData.phones.forEach((phone) => {
                    this.phones.push({number: phone})
                })
            }
        },

        methods: {
            //region bridge

            //bridges between parseData and normal fields
            alignFieldsWithParseData(){
                this.address = this.parseData.address;
                this.email = this.parseData.email;
                this.name = this.parseData.name;
                this.web_site = this.parseData.web_site;
                this.contact_name = this.parseData.contact_name;
                this.contact_phone = this.parseData.contact_phone;
                this.contact_email = this.parseData.contact_email;
                this.company_size = this.parseData.company_size;
                this.company_types = this.parseData.company_types;
                this.information = this.parseData.information;
            },
            alignParseDataWithFields(){
                this.parseData.address = this.address;
                this.parseData.email = this.email;
                this.parseData.name = this.name;
                this.parseData.web_site = this.web_site;
                this.parseData.contact_name = this.contact_name;
                this.parseData.contact_phone = this.contact_phone;
                this.parseData.contact_email = this.contact_email;
                this.parseData.company_size = this.company_size;
                this.parseData.company_types = this.company_types;
                this.parseData.information = this.information;
            },
            //endregion
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

            // methods editCompanyScope

            editCompanyScopeSubmit() {
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                const editCompanyScopeData = {
                    _method: 'PATCH',
                    name: this.name,
                    company_type_id: this.conversionToObject(this.company_types).id,
                    company_sizes_id: this.conversionToObject(this.company_size).id,
                };

                this.$validator.validate().then(valid => {
                    if (valid) {
                        axios.post('/company/update', editCompanyScopeData)
                            .then(response => {
                                if (response.status === 200) {
                                    this.alignParseDataWithFields();
                                    this.saved = true;
                                    this.hideModal('edit-company-scope');
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

            // methods EditCompanyDescription

            editCompanyDescriptionSubmit(event) {
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                const editCompanyDescriptionData = {
                    _method: 'PATCH',
                    information: this.information,
                };

                this.$validator.validate().then(valid => {
                    if (valid) {
                        axios.post('/company/update/information', editCompanyDescriptionData)
                            .then(response => {
                                if (response.status === 200) {
                                    this.alignParseDataWithFields();
                                    this.saved = true;
                                    this.hideModal('edit-company-description');
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

            // methods EditEditCompanyInfo

            editCompanyInfoSubmit() {
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                this.$validator.validate().then(valid => {
                    if (valid) {
                        axios.post('/company/update/about', {
                            _method: 'PATCH',
                            city_id: this.cities,
                            address: this.address,
                            phones: this.phoneToArray(),
                            email: this.email,
                            web_site: this.web_site,
                        })
                            .then(response => {
                                if (response.status === 200) {
                                    this.alignParseDataWithFields();
                                    this.saved = true;
                                    this.hideModal('edit-company-info');
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

            // methods EditCompanyPerson showEditCompanyPerson

            editCompanyPersonSubmit() {
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                const editCompanyPersonData = {
                    _method: 'PATCH',
                    contact_name: this.contact_name,
                    contact_phone: this.contact_phone,
                    contact_email: this.contact_email,
                };

                this.$validator.validate().then(valid => {
                    if (valid) {
                        axios.post('/company/update/contacts', editCompanyPersonData)
                            .then(response => {
                                if (response.status === 200) {
                                    this.alignParseDataWithFields();
                                    this.hideModal('edit-company-person');
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


            // add phone in company edit info
            addInput() {
                this.phones.push({number: ''});
            },
            // delete phone in company edit info
            deleteInput(index) {
                this.phones.splice(index, 1)
            },

            phoneToArray() {
                const phoneArray = [];
                this.phones.forEach(function (item) {
                    phoneArray.push(item.number)
                });
                return phoneArray
            },

            cityInfo(){
                if(this.cityList){
                    return this.cityList.find(city => {
                        return this.parseData.cities[0].id == city.id
                    })
                } else {
                    return {name: this.parseData.cities[0].name}
                }

            },

            conversionToObject(data) {
                if (Array.isArray(data)) {
                    return data[0]
                } else {
                    return data
                }
            },

            residenceCity(){
                let setCity = this.cityList.find((cityId) => {
                    return this.cities === cityId.id
                });
                if(setCity !== undefined){
                    return setCity.name
                }
            }
        },

        computed: {
            cityList() {
                return this.$store.getters.CITY
            },
            sizeList() {
                return this.$store.getters.COMPANY_SIZE
            },
            typeList() {
                return this.$store.getters.COMPANY_TYPE
            },
            phoneToString() {
                const phoneArray = [];
                this.phones.forEach(function (item) {
                    phoneArray.push(item.number)
                });
                return phoneArray.join()
            },
        }

    }
</script>

<style scoped lang="sass">

    @import "../../../../../sass/default/vars"
    @import "../../../../../sass/default/mixins"

    .profile__title
        margin-bottom: 30px

    .user-data
        margin: 0 0 20px 0

    .user-data__item p:first-child
        @include mq('w_575')
            width: 95px
    .user-data__item p:last-child
        @include mq('w_575')
            overflow: hidden
            text-overflow: ellipsis

    .btn-block
        border-top: 1px solid $color-grey
        padding-top: 16px

    .profile__block
        flex-direction: column

        &-row
            flex-direction: row
            flex-wrap: wrap

            .btn-block
                width: 100%

        &-info
            @include mq('w_575')
                flex-direction: column
            .user-data__item
                p:first-child
                    width: 94px

    .profile__large
        width: calc(100% - 160px)
        @include mq('w_575')
            width: 100%
            margin-bottom: 0

    .profile__small
        width: 160px
        @include mq('w_575')
            margin-bottom: 25px


    .img-profile
        width: 100%

    .profile__photo
        margin-left: auto
        width: 100%

    .btn-green-photo
        width: 100%

    .desc
        margin-bottom: 20px

    .add-phone
        align-items: flex-start
        margin-bottom: 0

    .add-phone-wrapper
        margin-bottom: 10px

    .add-phone-wrapper
        display: flex
        align-items: center

        .link-default__red
            margin-left: 10px

    .dropdown-menu
        z-index: 99999 !important

</style>
