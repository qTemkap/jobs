<template>
    <div>
        <form class="resume" @keypress.enter.prevent @submit.prevent="vacancySubmit">

            <div class="resume__block">
                <h2 class="resume__title">
                    Общая информация
                </h2>

                <div class="input-group resume__position">
                    <label>
                        Должность <span class="req">*</span>:
                    </label>
                    <input type="text"
                           maxlength="100"
                           v-model="position"
                           v-validate="{required: true}"
                           name="position"
                           class="" :class="{ 'is-invalid': submitted && errors.has('position') }"/>
                </div>

                <div class="input-group resume__desired">
                    <label>
                        Город работы <span class="req">*</span>:
                    </label>

                    <div class="city-autocomplete" v-for="(city, index) in cities" :key="index">
                        <autocomplete
                                v-validate="{required: true}"
                                name="cities"
                                v-model="city.value"
                                :class="{ 'is-invalid': submitted && errors.has('cities') }"
                                placeholder=""
                                :source="cityList">
                        </autocomplete>
                        <button type="button" class="link-default link-default__red d-none"
                                :class="{'d-flex': cities.length > 1}" @click="deleteInput(city)">Удалить</button>
                    </div>

                    <!--<button type="button" class="resume__desired-add" @click="addInput">-->
                    <!--+-->
                    <!--<span class="link-default">Добавить еще один</span>-->
                    <!--</button>-->
                </div>

                <div class="input-group resume__position">
                    <label>
                        Контактное лицо <span class="req">*</span>:
                    </label>
                    <input type="text"
                           v-model="contactPerson"
                           v-validate="{required: true}"
                           name="contact_name"
                           class="" :class="{ 'is-invalid': submitted && errors.has('contact_name') }"/>
                </div>

                <div class="input-group resume__position">
                    <label>
                        Телефон <span class="req">*</span>:
                    </label>
                    <input type="text"
                           v-model="contactPhone"
                           v-validate="{required: true}"
                           name="contact_phone"
                           class="" :class="{ 'is-invalid': submitted && errors.has('contact_phone') }"/>
                </div>

                <div class="input-group resume__position">
                    <label>
                        Email <span class="req">*</span>:
                    </label>
                    <input type="text"
                           v-model="contactEmail"
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
                               name="level_education"
                               v-validate="'required'"
                               :value="types.id" :id="types.id"
                               v-model="typeEmployment">
                        <span  :class="{ 'is-invalid': submitted && errors.has('level_education') }">
                               {{types.name}}
                            </span>
                    </label>

                </div>

                <div class="input-group ">
                    <label>
                        Зарплата <span class="req">*</span>:
                    </label>
                    <div class="resume__salary">
                        <input type="text"
                               maxlength="7"
                               v-model.number="salary"
                               v-validate="{required: true}"
                               name="salary"
                               class="" :class="{ 'is-invalid': submitted && errors.has('salary') }"/>

                        <span>руб в месяц</span>
                    </div>
                </div>

                <div class="input-group resume__comment">
                    <label>
                        Коментарий к зарплате:
                    </label>
                    <input type="text"
                           v-model="comment"
                           name="comment"
                           class=""/>
                </div>
                <div class="input-group resume__position">
                    <label>
                        Ссылка на Youtube:
                    </label>

                    <input type="text"
                           v-model="video"
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
                                       v-model="categoryModel">
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
                    <textarea name="short_desc" v-model="short_desc" maxlength="191"></textarea>
                </div>
            </div>

            <div class="resume__block">
                <h2 class="resume__title">
                    Описание вакансии
                </h2>
                <div class="input-group">
                    <ckeditor :editor="editor" :config="editorConfig" v-model="description"></ckeditor>
                </div>
            </div>

            <div class="resume__block resume__show">
                <h2 class="resume__title">
                    Настройки видимости вакансии:
                </h2>

                <label class="radio">
                    <input type="radio" value="1" name="published" v-model="published">
                    <span>
                    Размещено на сайте
                </span>
                </label>

                <div class="input-group hide m-0"></div>

                <label class="radio">
                    <input type="radio" value="0" name="published" v-model="published">
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

    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import vSelect from 'vue-select';
    import Autocomplete from 'vuejs-auto-complete'
    import axios from 'axios';

    export default {
        name: "AppCreateVacancy",
        props: ['data'],
        components: {
            vSelect,
            Autocomplete
        },
        data() {
            return {
                submitted: false,
                loading: false,

                position: '',
                cities: [{id: 1, name: ''}],
                contactPerson: '',
                contactPhone: '',
                contactEmail: '',
                typeEmployment: [],
                salary: '',
                comment: '',
                categoryModel: [],
                editor: ClassicEditor,
                editorConfig: {
                    toolbar: ['Heading','bulletedList', 'numberedList', 'bold', 'italic', 'link', 'undo', 'redo']
                },
                description: '',
                short_desc: '',

                published: 1,
                showDate: 0,
            }

        },

        created() {
            this.parseData = JSON.parse(this.data);
            this.$store.commit('SET_COMPANY_LOGO', this.parseData.logo);
            this.$store.dispatch('GET_CITY');
            this.$store.dispatch('GET_CATEGORIES');
            this.$store.dispatch('GET_TYPES');
            this.$store.dispatch('GET_LEVELS');
        },

        methods: {
            vacancySubmit() {
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                let citiesArr = [];

                this.cities.forEach(function (item) {
                    citiesArr.push(item.value)
                });

                this.$validator.validate().then(valid => {
                    if (valid) {
                        this.loading = true;
                        axios.post('/vacancy/store', {
                            _method: 'PATCH',
                            position: this.position,
                            contact_name: this.contactPerson,
                            contact_phone: this.contactPhone,
                            contact_email: this.contactEmail,
                            cities: citiesArr,
                            employment_types: this.typeEmployment,
                            salary: this.salary,
                            salary_comment: this.comment,
                            description: this.description,
                            categories: this.categoryModel,
                            show_data: this.showDate,
                            published: this.published,
                            short_desc: this.short_desc,
                            video: this.video
                        })
                            .then(response => {
                                this.loading = false;
                                if (response.data.status === 'redirect') {
                                    window.location.href = response.data.data.path;
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
                            });
                    }
                });
            },

            // add phone in company edit info
            addInput() {
                this.cities.push({value: ''});
            },
            // delete phone in company edit info
            deleteInput(index) {
                this.cities.splice(index, 1)
            },

        },

        computed: {
            // parse data from backend
            cityList() {
                return this.$store.getters.CITY
            },

            categoriesList() {
                return this.$store.getters.CATEGORIES
            },

            typesList() {
                return this.$store.getters.TYPES
            },
        }
    }
</script>

<style scoped lang="sass">
    @import "../../../../sass/default/_vars"
    @import "../../../../sass/default/_mixins"
    @import "../../../../sass/views/resume"

    .resume
        .btn-wrapper
            .btn-green
                @include mq('w_575')
                    width: 160px

</style>
