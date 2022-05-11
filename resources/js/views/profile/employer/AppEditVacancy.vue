<template>
    <div>
        <form class="resume" @keypress.enter.prevent @submit.prevent="vacancyEditSubmit">
            <div class="resume__block">
                <h2 class="resume__title">
                    Общая информация
                </h2>

                <div class="input-group resume__position">
                    <label>
                        Должность <span class="req">*</span>:
                    </label>
                    <input type="text"
                           v-model="parseData.position"
                           v-validate="{required: true}"
                           name="position"
                           class="" :class="{ 'is-invalid': submitted && errors.has('position') }"/>
                </div>

                <div class="input-group resume__desired">
                    <label>
                        Город работы <span class="req">*</span>:
                    </label>

                    <autocomplete
                            :source="cityList"
                            v-model="city"
                            :initialValue="parseData.cities[0].id"
                            :initialDisplay="parseData.cities[0].name"
                    >
                    </autocomplete>

                </div>

                <div class="input-group resume__desired">
                    <label>
                        Контактное лицо <span class="req">*</span>:
                    </label>
                    <input type="text"
                           v-model="parseData.contact_name"
                           v-validate="{required: true}"
                           name="contact_name"
                           class="" :class="{ 'is-invalid': submitted && errors.has('contact_name') }"/>
                </div>

                <div class="input-group resume__desired">
                    <label>
                        Телефон <span class="req">*</span>:
                    </label>
                    <input type="text"
                           v-model="parseData.contact_phone"
                           v-validate="{required: true}"
                           name="contact_phone"
                           class="" :class="{ 'is-invalid': submitted && errors.has('contact_phone') }"/>
                </div>

                <div class="input-group resume__desired">
                    <label>
                        Email <span class="req">*</span>:
                    </label>
                    <input type="text"
                           v-model="parseData.contact_email"
                           v-validate="{required: true}"
                           name="contact_email"
                           class="" :class="{ 'is-invalid': submitted && errors.has('contact_email') }"/>
                </div>

                <div class="input-group">
                    <label>
                        Вид занятости <span class="req">*</span>:
                    </label>

                    <label class="checkbox"
                           v-for="(types, index) in typesList"
                           :key="index"
                    >
                        <input type="checkbox"
                               name="employment_types"
                               v-validate="'required'"
                               :value="types.id" :id="types.id"
                               v-model="empTypes">

                        <span :class="{ 'is-invalid': submitted && errors.has('employment_types') }">
                       {{types.name}}
                    </span>
                    </label>
                </div>

                <div class="input-group">
                    <label>
                        Зарплата <span class="req">*</span>:
                    </label>
                    <div class="resume__salary">
                        <input type="text"
                               v-model.number="parseData.salary"
                               v-validate="{required: true}"
                               name="salary"
                               class="" :class="{ 'is-invalid': submitted && errors.has('salary') }"/>

                        <span>руб. в месяц</span>
                    </div>
                </div>

                <div class="input-group resume__comment">
                    <label>
                        Коментарий к зарплате:
                    </label>
                    <input type="text"
                           v-model="parseData.salary_comment"
                           name="salary_comment"
                           class=""/>
                </div>
                <div class="input-group resume__position">
                    <label>
                        Ссылка на Youtube:
                    </label>

                    <input type="text"
                           v-model="parseData.video"
                           name="video"
                           class=""/>
                </div>
                <div class="input-group resume__category">
                    <label>
                        Категория для размещения <span class="req">*</span>:
                    </label>
                    <div class="resume__category-wrapper">
                        <div class="resume__category-item"
                             v-for="(category, index) in categoriesList"
                             :key="index"
                        >
                            <label class="checkbox">
                                <input type="checkbox"
                                       name="categories"
                                       v-validate="'required'"
                                       :value="category.id"
                                       :id="category.id"
                                       v-model="categories">
                                <span :class="{ 'is-invalid': submitted && errors.has('categories') }">
                                {{category.name}}
                            </span>
                            </label>
                        </div>
                    </div>
                </div>
                  <!-- add category component -->
                <app-add-category :request="parseData.link_to_offer_category"></app-add-category>
            </div>

            <div class="resume__block">
                <h2 class="resume__title">
                    Краткая информация
                    <div class="resume__subtitle">
                        Дополните вакансию информацией, на которую хотели бы обратить внимание соискателя.
                    </div>
                </h2>

                <div class="input-group">
                    <textarea name="short_desc" v-model="parseData.short_desc" maxlength="191"></textarea>
                </div>
            </div>


            <div class="resume__block">
                <h2 class="resume__title">
                    Описание вакансии
                </h2>
                <div class="input-group">
                    <ckeditor :editor="editor" :config="editorConfig" v-model="parseData.description"></ckeditor>
                </div>
            </div>

            <div class="resume__block resume__show">
                <h2 class="resume__title">
                    Настройки видимости вакансии:
                </h2>

                <label class="radio">
                    <input type="radio" value="1" name="published" v-model="parseData.published">
                    <span>
                    Размещено на сайте
                </span>
                </label>

                <div class="input-group hide m-0"></div>

                <label class="radio">
                    <input type="radio" value="0" name="published" v-model="parseData.published">
                    <span>
                    Черновик
                </span>
                </label>

                <div class="btn-wrapper">
                    <button
                            :disabled="loading"
                            type="submit"
                            class="btn btn-green">
                        Сохранить вакансию
                    </button>
                    <span class="or">
                    или
                </span>
                    <button class="link-default link-default__red">
                        Отменить
                    </button>
                </div>
            </div>
        </form>
    </div>

</template>

<script>

    import Autocomplete from 'vuejs-auto-complete';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import axios from 'axios';

    export default {
        name: "AppEditVacancy",
        components: {
            Autocomplete,
        },
        props: ['data', 'logo'],
        data() {
            return {
                submitted: false,
                loading: false,
                parseData: null,

                city: null,
                empTypes: null,
                categories: null,

                editor: ClassicEditor,
                editorConfig: {
                    toolbar: ['Heading','bulletedList', 'numberedList', 'bold', 'italic', 'link', 'undo', 'redo']
                },
            }
        },

        beforeMount() {
            this.$store.dispatch('GET_CITY');
            this.$store.dispatch('GET_CATEGORIES');
            this.$store.dispatch('GET_TYPES');
            this.$store.commit('SET_COMPANY_LOGO', this.logo);

            this.parseData = JSON.parse(this.data);
           
            this.city = this.parseData.cities[0].id;

            this.empTypes = this.createCheckboxGroupArray(this.parseData.employment_types);
            this.categories = this.createCheckboxGroupArray(this.parseData.categories);
        },

        methods: {
            createCheckboxGroupArray(object){
                let array = [];
                object.forEach(function (elem) {
                    array.push(elem.id)
                });
                return array
            },

            createCityArray(){
                const cities = [];
                cities.push(`${this.city}`);
                return cities
            },

            vacancyEditSubmit(){
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                this.$validator.validate().then(valid => {
                    if (valid) {
                        this.loading = true;
                        axios.post(`/vacancy/update/${this.parseData.id}`, {
                            _method: 'PATCH',
                            position: this.parseData.position,
                            cities: this.createCityArray(),
                            contact_name: this.parseData.contact_name,
                            contact_phone: this.parseData.contact_phone,
                            contact_email: this.parseData.contact_email,
                            employment_types: this.empTypes,
                            salary: this.parseData.salary,
                            salary_comment: this.parseData.salary_comment,
                            description: this.parseData.description,
                            categories: this.categories,
                            published: this.parseData.published,
                            short_desc: this.parseData.short_desc,
                            video: this.parseData.video
                        })
                            .then(response => {
                                if (response.data.status === 'redirect') {
                                    window.location.href = response.data.data.path;
                                    this.loading = false;
                                }
                            })
                            .catch(error => {
                                this.loading = false;
                                for (let errorItem in error.response.data.errors) {
                                    this.errors.add({
                                        field: errorItem,
                                        msg: error.response.data.errors[errorItem][0]
                                    });
                                }
                            })
                            .then(() => {
                                this.loading = false;
                            });
                    }
                });
            }

        },

        computed: {
            cityList() {
                return this.$store.getters.CITY
            },
            typesList() {
                return this.$store.getters.TYPES
            },
            categoriesList() {
                return this.$store.getters.CATEGORIES
            },
        }
    }
</script>

<style scoped lang="sass">
    @import "../../../../sass/default/_vars"
    @import "../../../../sass/default/_mixins"
    @import "../../../../sass/views/resume"

</style>
