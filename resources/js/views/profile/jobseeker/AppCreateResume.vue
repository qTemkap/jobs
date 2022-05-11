<template>
    <form class="resume" @keypress.enter.prevent @submit.prevent="resumeSubmit">

        <div class="resume__block">
            <h2 class="resume__title">
                Общая информация
            </h2>

            <div class="input-group resume__position">
                <label>
                    Должность, на которой вы хотите работать <span class="req">*</span>:
                </label>
                <input type="text"
                       maxlength="100"
                       v-model="resumeData.position"
                       v-validate="{required: true}"
                       name="position"
                       class="" :class="{ 'is-invalid': submitted && errors.has('position') }"/>
            </div>

            <div class="input-group resume__desired">
                <label>
                    Желаемый город работы <span class="req">*</span>:
                </label>

                <div class="city-autocomplete" v-for="(city, index) in resumeData.cities" :key="index">
                    <autocomplete
                                  :key="autocompleteKey"
                                  v-validate="{required: true}"
                                  name="city"
                                  :initialValue="city.value"
                                  :initialDisplay="city.name"
                                  v-model="city.value"
                                  :class="{ 'is-invalid': submitted && errors.has('city') }"
                                  placeholder=""
                                  @selected="cityName"
                                  :source="cityList">
                    </autocomplete>
                    <button type="button" class="link-default link-default__red d-none"
                            :class="{'d-flex': resumeData.cities.length > 1}" @click="deleteInput(index)">Удалить</button>
                </div>

                <button type="button" class="resume__desired-add" @click="addInput">
                    +
                    <span class="link-default">Добавить еще один</span>
                </button>
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
                           v-model="resumeData.typeEmployment">
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
                           maxlength="9"
                           v-model.number="resumeData.salary"
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
                       v-model="resumeData.comment"
                       name="comment"
                       class=""/>
            </div>

            <div class="input-group resume__position">
                <label>
                    Ссылка на Youtube:
                </label>

                <input type="text"
                       v-model="resumeData.video"
                       name="video"
                       class=""/>
            </div>

            <div class="input-group resume__category">
                <label>
                    Категория для размещения <span class="req">*</span>:
                </label>
                <div class="resume__category-wrapper m-b-15">
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
                                   v-model="resumeData.categoryModel">
                            <span :class="{ 'is-invalid': submitted && errors.has('categories') }">
                                {{category.name}}
                            </span>
                        </label>
                    </div>
                </div>
                 <!-- add category component -->
                <app-add-category :request="parseData.link_to_offer_category"></app-add-category>
            </div>
        </div>

         <div class="resume__block resume__education">
            <h2 class="resume__title">
                Опыт работы
            </h2>
            <div class="educations-wrapper"
                 v-for="(experience, index) in resumeData.experiences" :key="index">

                <div class="input-group resume__level">
                    <label>
                        Должность <span class="req">*</span>:
                    </label>

                     <input type="text"
                            v-model="experience.position"
                            :name="`experience.${index}.position`"
                            v-validate="'required'"
                            :class="{ 'is-invalid': submitted && errors.has(`experience.${index}.position`)}"
                            class="" />
                </div>

                <div class="input-group input-group__full">
                    <label>
                        Организация <span class="req">*</span>:
                    </label>
                    <input type="text"
                            v-model="experience.company"
                            :name="`experience.${index}.company`"
                            v-validate="'required'"
                            :class="{ 'is-invalid': submitted && errors.has(`experience.${index}.company`)}"
                            class="" />
                </div>

                <div class="input-group resume__city">
                    <label>
                        Город <span class="req">*</span>:
                    </label>

                    <input type="text"
                            v-model="experience.city"
                            :name="`experience.${index}.city`"
                            v-validate="'required'"
                            :class="{ 'is-invalid': submitted && errors.has(`experience.${index}.city`)}"
                           class=""/>
                </div>

                <div class="input-group input-group__select">
                    <div class="input-group resume__period">
                        <label>
                            Период работы с <span class="req">*</span>:
                        </label>

                        <v-select :options="month"
                                  label="name"
                                  placeholder=" - месяц - "
                                  class="v-select__default"
                                  :name="`experience.${index}.periodMonthWith`"
                                  v-validate="'required'"
                                  :class="{ 'is-invalid': submitted && errors.has(`experience.${index}.periodMonthWith`)}"
                                  v-model="experience.worked_month_with"
                        >
                            <template slot="option" slot-scope="option">
                                {{ option.name }}
                            </template>
                        </v-select>

                        <v-select
                                placeholder=" - год - "
                                class="v-select__default"
                                :options="year"
                                v-model="experience.worked_year_with"
                                :name="`experience.${index}.periodYearWith`"
                                v-validate="'required'"
                                :class="{ 'is-invalid': submitted && errors.has(`experience.${index}.periodYearWith`)}"
                        ></v-select>

                    </div>

                    <div class="input-group resume__period">
                        <label>
                            По <span class="req">*</span>:
                        </label>
                        <template v-if="!experience.i_work">
                            <v-select :options="month"
                                      label="name"
                                      placeholder=" - месяц - "
                                      class="v-select__default"
                                      v-model="experience.worked_month_to"
                                      :name="`experience.${index}.periodMonthTo`"
                                      v-validate="'required'"
                                      :class="{ 'is-invalid': submitted && errors.has(`experience.${index}.periodMonthTo`)}"
                            >
                                <template slot="option" slot-scope="option">
                                    {{ option.name }}
                                </template>
                            </v-select>

                            <v-select
                                    placeholder=" - год - "
                                    class="v-select__default"
                                    :options="year"
                                    v-model="experience.worked_year_to"
                                     :name="`experience.${index}.periodYearTo`"
                                      v-validate="'required'"
                                      :class="{ 'is-invalid': submitted && errors.has(`experience.${index}.periodYearTo`)}"
                            ></v-select>
                        </template>

                        <label class="checkbox">
                            <input type="checkbox" value="1" name="untilToday"
                                   v-model="experience.i_work">
                            <span>
                                по сегодняшний день
                            </span>
                        </label>
                    </div>
                </div>

                <div class="text-right">
                    <button type="button" class="link-default link-default__red"
                        @click="deleteExperience(index)"
                            >
                        Удалить опыт работы
                    </button>
                </div>

            </div>

            <button type="button" class="btn btn-green btn-small"
                    @click='addExperience()'
            >
                Добавить опыт работы
            </button>

        </div>

        <div class="resume__block resume__education">
            <h2 class="resume__title">
                Образование
            </h2>

            <div class="resume__desc">
                Добавьте ваш наивысший уровень образования. <br>
                Остальные можно будет добавить на следующей странице.
            </div>

            <div :class="{'educations-wrapper': resumeData.educationsList.length > 1}"
                 v-for="(education, index) in resumeData.educationsList"
                 :key="index">

                <div class="input-group resume__level">
                    <label>
                        Уровень образования <span class="req">*</span>:
                    </label>

                    <v-select :options="typesLevels"
                              label="name"
                              placeholder=" - выбрать - "
                              :name="`educations.${index}.level_education`"
                              v-validate="'required'"
                              v-model="education.education_level_id"
                              class="v-select__default" :class="{ 'is-invalid': submitted && errors.has(`educations.${index}.level_education`)}"
                    >
                        <template slot="option" slot-scope="option">
                            {{ option.name }}
                        </template>
                    </v-select>
                </div>

                <div class="input-group input-group__full">
                    <label>
                        Учебное заведение <span class="req">*</span>:
                    </label>
                    <input type="text"
                           v-model="education.institution"
                           v-validate="{required: true}"
                           :name="`educations.${index}.institution`"
                           class="" :class="{ 'is-invalid': submitted && errors.has(`educations.${index}.institution`) }"/>
                </div>

                <div class="input-group input-group__full">
                    <label>
                        Факультет <span class="req">*</span>:
                    </label>
                    <input type="text"
                           v-model="education.faculty"
                           v-validate="{required: true}"
                           :name="`educations.${index}.faculty`"
                           class="" :class="{ 'is-invalid': submitted && errors.has(`educations.${index}.faculty`) }"/>
                </div>

                <div class="input-group input-group__full">
                    <label>
                        Направление (специальность) <span class="req">*</span>:
                    </label>
                    <input type="text"
                           v-model="education.specialty"
                           v-validate="{required: true}"
                           :name="`educations.${index}.specialty`"
                           class="" :class="{ 'is-invalid': submitted && errors.has(`educations.${index}.specialty`) }"/>
                </div>

                <div class="input-group resume__city">
                    <label>
                        Город <span class="req">*</span>:
                    </label>

                    <input type="text"
                           v-model="education.city"
                           v-validate="{required: true}"
                           :name="`educations.${index}.city`"
                           class="" :class="{ 'is-invalid': submitted && errors.has(`educations.${index}.city`) }"/>
                </div>

                <div class="input-group input-group__select">
                    <div class="input-group resume__period">
                        <label>
                            Период обучения с <span class="req">*</span>:
                        </label>

                        <v-select :options="month"
                                  label="name"
                                  placeholder=" - месяц - "
                                  :name="`educations.${index}.study_month_with`"
                                  v-validate="'required'"
                                  v-model="education.periodMonthWith"
                                  class="v-select__default" :class="{ 'is-invalid': submitted && errors.has(`educations.${index}.study_month_with`)}"
                        >
                            <template slot="option" slot-scope="option">
                                {{ option.name }}
                            </template>
                        </v-select>

                        <v-select
                                :options="year"
                                placeholder=" - год - "
                                v-validate="'required'"
                                v-model="education.periodYearWith"
                                class="v-select__default"
                                :name="`educations.${index}.study_year_with`"
                                :class="{ 'is-invalid': submitted && errors.has(`educations.${index}.study_year_with`) }"
                        ></v-select>

                    </div>

                    <div class="input-group resume__period">
                        <label>
                            По <span class="req">*</span>:
                        </label>
                        <template v-if="education.i_study !== true">
                            <v-select :options="month"
                                      label="name"
                                      placeholder=" - месяц - "
                                      :name="`educations.${index}.study_month_to`"
                                      v-validate="'required'"
                                      v-model="education.periodMonthTo"
                                      class="v-select__default" :class="{ 'is-invalid': submitted && errors.has(`educations.${index}.study_month_to`)}"
                            >
                                <template slot="option" slot-scope="option">
                                    {{ option.name }}
                                </template>
                            </v-select>

                            <v-select
                                    placeholder=" - год - "
                                    :name="`educations.${index}.study_year_to`"
                                    v-validate="'required: education.i_study !== true'"
                                    v-model="education.periodYearTo"
                                    class="v-select__default"
                                    :class="{'is-invalid': submitted && errors.has(`educations.${index}.study_year_to`)}"
                                    :options="year"
                            ></v-select>
                        </template>

                        <label class="checkbox">
                            <input type="checkbox" value="1" name="untilToday" v-model="education.i_study">
                            <span>
                                по сегодняшний день
                            </span>
                        </label>
                    </div>
                </div>

                <div class="text-right">
                    <button type="button" class="link-default link-default__red"
                            @click='deleteEducation(index)'>
                        Удалить образование
                    </button>
                </div>

            </div>

            <button type="button" class="btn btn-green btn-small"
                    v-if="resumeData.educationsList.length < 5"
                    @click='addEducation()'
            >
                Добавить образование
            </button>

        </div>

        <div class="resume__block resume__education">
            <h2 class="resume__title">
                Портфолио сертификатов и компетенций
            </h2>
            <div class="educations-wrapper"
                 v-for="(certificate, index) in resumeData.certificates" :key="index">

                <div class="input-group">
                    <label>
                        Описание сертификата <span class="req">*</span>:
                    </label>

                    <textarea  :name="`certificate.${index}.description`"
                               :class="{ 'is-invalid': submitted && errors.has(`certificate.${index}.description`)}"
                               v-validate="'required'"
                               v-model="certificate.description"
                               maxlength="3000">
                    </textarea>
                </div>
                <div class="input-group">
                    <label>
                        Копия сертификата:
                    </label>
                    <input type="file" class="btn-file"
                           ref="file" accept="image/*,application/pdf"
                           :id="`certificate-${index}`"
                           :name="`certificate.${index}.file`"
                           :data-id="`${index}`"
                           @change="handleFileUpload">

                </div>

                <div class="text-right">
                    <button type="button" class="link-default link-default__red"
                        @click="deleteCertificate(index)"
                            >
                        Удалить сертификат
                    </button>
                </div>

            </div>

            <button type="button" class="btn btn-green btn-small"
                    @click='addCertificate()'
            >
                Добавить сертификат
            </button>

        </div>


        <div class="resume__block">
            <h2 class="resume__title">
                Краткая информация
                <div class="resume__subtitle">
                    Дополните резюме информацией, на которую хотели бы обратить внимание работодателя.
                </div>
            </h2>

            <div class="input-group">
                <textarea name="short_desc" v-model="resumeData.short_desc" maxlength="191"></textarea>
            </div>
        </div>

        <div class="resume__block">
            <h2 class="resume__title">
                Дополнительная информаци
            </h2>
            <div class="input-group">
                <ckeditor :editor="editor" :config="editorConfig" v-model="resumeData.information"></ckeditor>
            </div>
        </div>

        <div class="resume__block resume__show">
            <h2 class="resume__title">
                Настройки видимости резюме <span class="req">*</span>:
            </h2>

            <label class="radio">
                <input type="radio" value="1" name="published" v-model="resumeData.published">
                <span>
                    Размещено на сайте
                </span>
            </label>

            <div class="input-group hide">

                <label class="checkbox">
                    <input type="checkbox" name="show_date" v-model="resumeData.hideData">
                    <span>
                        Скрыть мои личные данные
                    </span>
                </label>

                <p>
                    Не показывать в резюме мои имя, фамилию, адрес,
                    телефон, эл. почту, текущее место работы, фотографию.
                </p>

            </div>

            <label class="radio">
                <input type="radio" value="0" name="published" v-model="resumeData.published">
                <span>
                    Скрыто
                </span>
            </label>

            <div class="btn-wrapper">
                <button type="submit" :disabled="loading" class="btn btn-green">
                    Сохранить резюме
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
</template>

<script>

    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import vSelect from 'vue-select';
    import Autocomplete from 'vuejs-auto-complete'
    import axios from 'axios';
    import { ValidationProvider } from 'vee-validate';


    export default {
        name: "AppCreateResume",
        props: ['data'],
        components: {
            vSelect,
            Autocomplete,
            ValidationProvider
        },
        data() {
            return {
                submitted: false,
                loading: false,
                editor: ClassicEditor,
                editorConfig: {
                    toolbar: ['Heading','bulletedList', 'numberedList', 'bold', 'italic', 'link', 'undo', 'redo']
                },
                autocompleteKey: 0,
                resumeData: {
                    position: '',
                    cities: [{value: '', name: ''}],
                    typeEmployment: [],
                    salary: '',
                    comment: '',
                    information: '',
                    published: 1,
                    hideData: 0,
                    categoryModel: [],
                    educationsList: [],
                    short_desc: '',
                    experiences: [],
                    certificates: []
                },

            }

        },

        created() {
            this.parseData = JSON.parse(this.data);
            this.$store.dispatch('GET_CITY');
            this.$store.dispatch('GET_CATEGORIES');
            this.$store.dispatch('GET_TYPES');
            this.$store.dispatch('GET_LEVELS');
        },

        methods: {
            handleFileUpload(event){
                this.resumeData.certificates[event.target.dataset.id].file = event.target.files[0];
            },

            sendEducationArray(){
                const educationArr = [];

                this.resumeData.educationsList.forEach((education) => {
                    educationArr.push({
                        education_level_id: education.education_level_id.id,
                        institution: education.institution,
                        specialty: education.specialty,
                        faculty: education.faculty,
                        city: education.city,
                        i_study: +education.i_study,
                        study_month_with: education.periodMonthWith.number,
                        study_year_with: +education.periodYearWith,
                        study_month_to: education.periodMonthTo ? education.periodMonthTo.number : null,
                        study_year_to: +education.periodYearTo,
                    })
                });
                return educationArr;
            },

            sendExperienceArray(){

                return this.resumeData.experiences.map(item => {
                    return {
                        company: item.company,
                        position: item.position,
                        cities: item.city,
                        i_work: +item.i_work,
                        worked_month_with: +item.worked_month_with.id,
                        worked_year_with: item.worked_year_with,
                        worked_month_to: +item.i_work == 0 ? +item.worked_month_to.id : null,
                        worked_year_to: +item.i_work == 0 ? item.worked_year_to : null,
                    }
                })
            },

            resumeSubmit() {
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);
                this.$validator.validate().then(valid => {
                    if (valid) {
                        this.loading = true;
                        let formData = new FormData();
                        const cities = this.createCityArray();
                        const educations = this.sendEducationArray();
                        const experiences = this.sendExperienceArray();

                        for( var i = 0; i < this.resumeData.certificates.length; i++ ){
                            let file = this.resumeData.certificates[i].file;
                            formData.append('certificates[' + i + '][file]', file);
                            formData.append('certificates[' + i + '][description]', this.resumeData.certificates[i].description);
                            formData.append('certificates[' + i + '][fileId]', this.resumeData.certificates[i].fileId ? this.resumeData.certificates[i].fileId : '');
                        }
                        for( var i = 0; i < cities.length; i++ ){
                            let city = cities[i];
                            formData.append('city[' + i + ']', city);
                        }
                        console.log(educations);
                        for( var i = 0; i < educations.length; i++ ){
                            let education = educations[i];
                            for(var index in education) {
                                var attr = education[index];
                                formData.append('educations[' + i + '][' + index +']', attr);
                            }
                        }
                        for( var i = 0; i < experiences.length; i++ ){
                            let experience = experiences[i];
                            for(var index in experience) {
                                var attr = experience[index];
                                formData.append('experiences[' + i + '][' + index +']', attr);
                            }
                        }
                        for( var i = 0; i < this.resumeData.typeEmployment.length; i++ ){
                            let employment_type = this.resumeData.typeEmployment[i];
                            formData.append('employment_types[' + i + ']', employment_type);
                        }
                        for( var i = 0; i < this.resumeData.categoryModel.length; i++ ){
                            let categories = this.resumeData.categoryModel[i];
                            formData.append('categories[' + i + ']', categories);
                        }

                        formData.append('_method', 'PATCH');
                        formData.append('position', this.resumeData.position);
                        formData.append('salary', this.resumeData.salary);
                        formData.append('salary_comment', this.resumeData.comment);
                        formData.append('hide_data', typeof this.resumeData.hideData !== "number" ? +this.resumeData.hideData : this.resumeData.hideData,);
                        formData.append('published', +this.resumeData.published);
                        formData.append('information', this.resumeData.information);
                        formData.append('short_desc', this.resumeData.short_desc);
                        formData.append('video', !this.resumeData.video ? '' : this.resumeData.video);

                        axios.post('/summary/store', formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                            .then(response => {
                                if (response.data.status === 'redirect') {
                                    this.loading = false;
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

            createCityArray(){
                const cities = [];
                this.resumeData.cities.forEach((city) => {
                    cities.push(city.value)
                });
                return cities
            },

            addEducation(){
                const educations = {
                    education_level_id: [],
                    institution: '',
                    faculty: '',
                    specialty: '',
                    city: '',
                    i_study: false,
                    periodMonthWith: '',
                    periodYearWith: '',
                    periodMonthTo: '',
                    periodYearTo: '',
                };

                this.resumeData.educationsList.push(educations);
                this.$validator.reset();
            },

            addExperience(){
                const experience = {
                    company: '',
                    position: null,
                    city: null,
                    i_work: false,
                    worked_month_with: '',
                    worked_year_with: '',
                    worked_month_to: '',
                    worked_year_to: '',
                };
                this.resumeData.experiences.push(experience);
                this.$validator.reset();
            },

            addCertificate(){
                const certificate = {
                    description: ''
                };
                this.resumeData.certificates.push(certificate);
                this.$validator.reset();
            },

            createExperienceArray(){
                return this.resumeData.experiences.map(item => {
                    return {
                        company: item.company,
                        position: item.position,
                        city: item.city,
                        i_work: +item.i_work,
                        worked_month_with: +item.worked_month_with.id,
                        worked_year_with: item.worked_year_with,
                        worked_month_to: +item.i_work == 0 ? +item.worked_month_to.id : null,
                        worked_year_to: +item.i_work == 0 ? item.worked_year_to : null,
                    }
                })
            },

            createEducationArray(){
                const educationArr = [];

                this.resumeData.educationsList.forEach((education) => {
                    educationArr.push({
                        education_level_id: education.education_level_id.id,
                        institution: education.institution,
                        faculty: education.faculty,
                        specialty: education.specialty,
                        city: education.city,
                        i_study: +education.i_study,
                        study_month_with: +education.periodMonthWith.id,
                        study_year_with: education.periodYearWith,
                        study_month_to: +education.periodMonthTo.id,
                        study_year_to: education.periodYearTo,
                    })
                });

                return educationArr;
            },

            deleteEducation(index){
                this.resumeData.educationsList.splice(index, 1);
                this.$validator.reset();
            },

            deleteExperience(index){
                this.resumeData.experiences.splice(index, 1);
                this.$validator.reset();
            },

            deleteCertificate(index){
                this.resumeData.certificates.splice(index, 1);
                this.$validator.reset();
            },

            cityName(group){
                this.resumeData.cities = this.resumeData.cities.map(item => {
                    if(item.name === ''){
                        item.name = group.display;
                        item.value = group.value;
                    }
                    return item
                });
            },

            // add city
            addInput() {
                this.resumeData.cities.push({value: '', name: ''});
            },

            deleteInput(index) {
                this.resumeData.cities.splice(index, 1);

                this.$nextTick(() => {
                    this.autocompleteKey += 1;
                });
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

            typesLevels() {
                return this.$store.getters.LEVELS
            },

            month() {
                return this.$store.getters.month;
            },

            year() {
                return this.$store.getters.year;
            }
        }
    }
</script>

<style scoped lang="sass">
    @import "../../../../sass/default/_vars"
    @import "../../../../sass/default/_mixins"
    @import "../../../../sass/views/resume"
</style>
