<template>
    <form class="resume" @keypress.enter.prevent @submit.prevent="resumeEditSubmit" enctype="multipart/form-data">

        <div class="resume__block">
            <h2 class="resume__title">
                Общая информация
            </h2>

            <div class="input-group resume__position">
                <label>
                    Должность, на которой вы хотите работать <span class="req">*</span>:
                </label>

                <input type="text"
                       @keypress.enter.prevent
                       v-model="parseData.position"
                       v-validate="{required: true}"
                       name="position"
                       class="" :class="{ 'is-invalid': submitted && errors.has('position') }"/>
            </div>

            <div class="input-group resume__desired">
                <label>
                    Желаемый город работы <span class="req">*</span>:
                </label>

                <div class="city-autocomplete" v-for="(city, index) in parseData.cities" :key="index">
                    <autocomplete
                            :key="autocompleteKey"
                            ref="autocomplete"
                            v-validate="{required: true}"
                            name="city"
                            :initialValue="city.id"
                            :initialDisplay="city.name"
                            v-model="city.id"
                            :class="{ 'is-invalid': submitted && errors.has('city') }"
                            placeholder=""
                            @selected="cityName"
                            :source="cityList">
                    </autocomplete>

                    <button type="button" class="link-default link-default__red d-none"
                            :class="{'d-flex': parseData.cities.length > 1}" @click="deleteInput(index)">Удалить</button>
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
                           v-model="empTypes">

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
                           v-model.number="parseData.salary"
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
                       v-model="parseData.salary_comment"
                       name="comment"
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
                                   v-model="categories">
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
                 v-for="(experience, index) in this.parseData.experiences" :key="index">

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

            <div :class="{'educations-wrapper': parseData.educations.length > 1}"
                 v-for="(education, index) in parseData.educations"
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
                              v-model="education.education_levels"
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
                                  v-model="education.study_month_with"
                                  class="v-select__default" :class="{ 'is-invalid': submitted && errors.has(`educations.${index}.study_month_with`)}"
                        >
                            <template slot="option" slot-scope="option">
                                {{ option.name }}
                            </template>
                        </v-select>

                        <v-select
                                placeholder=" - год - "
                                :name="`educations.${index}.study_year_with`"
                                v-validate="'required'"
                                v-model="education.study_year_with"
                                class="v-select__default"
                                :class="{ 'is-invalid': submitted && errors.has(`educations.${index}.study_year_with`) }"
                                :options="year"
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
                                      v-model="education.study_month_to"
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
                                    v-model="education.study_year_to"
                                    class="v-select__default"
                                    :class="{'is-invalid': submitted && errors.has(`educations.${index}.study_year_to`)}"
                                    :options="year"
                            ></v-select>
                        </template>

                        <label class="checkbox">
                            <input type="checkbox" name="untilToday" v-model="education.i_study">
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
                    v-if="parseData.educations.length < 5"
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
                 v-for="(certificate, index) in parseData.certificates" :key="index">

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
                    <div class="up_files" v-if="certificate.size != '' &&  certificate.path != undefined">
                        <a :href="`${ certificate.path }`" download>Скачать файл</a>
                        <span class="small-text">(размер {{ certificate.size }} b)</span>
                        <button type="button" class="link-default link-default__red" @click="deleteCertificateFile(index, certificate.fileId)">Удалить</button>
                    </div>

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
                    Дополните вакансию информацией, на которую хотели бы обратить внимание соискателя.
                </div>
            </h2>

            <div class="input-group">
                <textarea name="short_desc" v-model="parseData.short_desc" maxlength="191"></textarea>
            </div>
        </div>

        <div class="resume__block">
            <h2 class="resume__title">
                Дополнительная информаци
            </h2>
            <div class="input-group">
                <ckeditor :editor="editor" :config="editorConfig" v-model="parseData.information"></ckeditor>
            </div>
        </div>

        <div class="resume__block resume__show">
            <h2 class="resume__title">
                Настройки видимости резюме <span class="req">*</span>:
            </h2>

            <label class="radio">
                <input type="radio" value="1" name="published" v-model="parseData.published">
                <span>
                    Размещено на сайте
                </span>
            </label>

            <div class="input-group hide">

                <label class="checkbox">
                    <input type="checkbox" name="show_date" v-model="parseData.hide_data">
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
                <input type="radio" value="0" name="published" v-model="parseData.published">
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

    export default {
        name: "AppEditResume",
        components: {
            vSelect,
            Autocomplete
        },
        props: ['data'],
        data() {
            return {
                submitted: false,
                loading: false,
                parseData: null,

                empTypes: null,
                categories: null,
                autocompleteKey: 0,
                cities: null,

                editor: ClassicEditor,
                editorConfig: {
                    toolbar: ['Heading','bulletedList', 'numberedList', 'bold', 'italic', 'link', 'undo', 'redo']
                },

                images: []
            }
        },

        created() {
            this.$store.dispatch('GET_CITY');
            this.$store.dispatch('GET_CATEGORIES');
            this.$store.dispatch('GET_TYPES');
            this.$store.dispatch('GET_LEVELS');

            this.parseData = JSON.parse(this.data);

            this.empTypes = this.createCheckboxGroupArray(this.parseData.employment_types);
            this.categories = this.createCheckboxGroupArray(this.parseData.categories);

            this.parseData.educations = this.educationList();
            this.parseData.experiences = this.experiencesList();

            this.parseData.cities = this.mapCityArr();

        },
        methods: {
            educationList(){
                const list = [];
                this.parseData.educations.forEach((item) => {
                    list.push({
                        id: item.id,
                        education_levels: {
                            name: item.education_levels.name,
                            id: item.education_levels.id
                        },
                        institution: item.institution,
                        specialty: item.specialty,
                        faculty: item.faculty,
                        city: item.city,
                        i_study: !!item.i_study,
                        study_month_with: this.findMonth(item.study_month_with),
                        study_year_with: item.study_year_with,
                        study_month_to: this.findMonth(item.study_month_to),
                        study_year_to: item.study_year_to
                    })
                });
                return list
            },

            experiencesList(){
                return this.parseData.experiences.map(item => {
                    return {
                        ...item,
                        i_work: !!item.i_work,
                        worked_month_with: this.findMonth(item.worked_month_with),
                        worked_year_with: item.worked_year_with,
                        worked_month_to: this.findMonth(item.worked_month_to),
                        worked_year_to: item.worked_year_to
                    }
                })
            },

            addExperience(){
                this.parseData.experiences.push({
                    company: '',
                    position: null,
                    city: null,
                    i_work: false,
                    worked_month_with: '',
                    worked_year_with: '',
                    worked_month_to: '',
                    worked_year_to: '',
                });
                this.$validator.reset();
            },

            addCertificate(){
                const certificate = {
                    description: ''
                };
                this.parseData.certificates.push(certificate);
                this.$validator.reset();
            },

            addEducation(){
                const educations = {
                    id: '',
                    education_levels: {
                        name: '',
                        id: ''
                    },
                    institution: '',
                    specialty: '',
                    faculty: '',
                    city: '',
                    i_study: false,
                    study_month_with: '',
                    study_year_with: '',
                    study_month_to: '',
                    study_year_to: '',
                };
                this.parseData.educations.push(educations);
                this.$validator.reset();
            },

            deleteEducation(index){
                this.parseData.educations.splice(index, 1);
                this.$validator.reset();
            },

             deleteExperience(index){
                this.parseData.experiences.splice(index, 1);
                 this.$validator.reset();
            },

            deleteCertificate(index){
                if(!this.parseData.certificates[index]['fileId']) {
                    axios.get(`/summary/delete-scan/${this.parseData.certificates[index]['fileId']}`)
                        .then(response => {

                        })
                        .catch(error => {
                        });
                }
                this.parseData.certificates.splice(index, 1);
                this.$validator.reset();
            },

            sendExperienceArray(){

                return this.parseData.experiences.map(item => {
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

            sendEducationArray(){
                const educationArr = [];

                this.parseData.educations.forEach((education) => {
                    educationArr.push({
                        education_level_id: education.education_levels.id,
                        institution: education.institution,
                        specialty: education.specialty,
                        faculty: education.faculty,
                        city: education.city,
                        i_study: +education.i_study,
                        study_month_with: education.study_month_with.number,
                        study_year_with: +education.study_year_with,
                        study_month_to: education.study_month_to !== undefined ? education.study_month_to.number : null,
                        study_year_to: +education.study_year_to,
                    })
                });
                return educationArr;
            },

            findMonth(monthKey){
                return this.month.find((month) => {
                    return monthKey === month.id
                })
            },

            createCheckboxGroupArray(object){
                let array = [];
                object.forEach(function (elem) {
                    array.push(elem.id)
                });
                return array
            },

            mapCityArr(){
              const cities = [];
              this.parseData.cities.forEach((city) => {
                  cities.push({
                      id: city.id,
                      name: city.name
                  })
              });

                return cities
            },

            cityName(group){
                this.parseData.cities = this.parseData.cities.map(item => {
                    if(item.id === ''){
                        item.name = group.display;
                        item.id = group.value;
                    }
                    return item
                });
            },

            // add city
            addInput() {
                this.parseData.cities.push({id: '', name: ''});
            },
            // delete city
            deleteInput(index) {
               this.parseData.cities.splice(index, 1);

               this.$nextTick(() => {
                 this.autocompleteKey += 1;
               });

            },

            createCityArray(){
                const cities = [];
                this.parseData.cities.forEach((city) => {
                    cities.push(city.id);
                });
                return cities
            },

            handleFileUpload(event){
                this.parseData.certificates[event.target.dataset.id].file = event.target.files[0];
            },

            deleteCertificateFile(index, id){
                axios.get(`/summary/delete-scan/${id}`)
                    .then(response => {
                        if (response.data.status === 'success') {
                            delete this.parseData.certificates[index]['fileId'];
                            delete this.parseData.certificates[index]['size'];
                            delete this.parseData.certificates[index]['scan'];
                        }
                    })
                    .catch(error => {
                    });
            },

            resumeEditSubmit(){
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                this.$validator.validate().then(valid => {

                    if (valid) {
                        this.loading = true;
                        let formData = new FormData();
                        const cities = this.createCityArray();
                        const educations = this.sendEducationArray();
                        const experiences = this.sendExperienceArray();

                        for( var i = 0; i < this.parseData.certificates.length; i++ ){
                            let file = this.parseData.certificates[i].file;
                            formData.append('certificates[' + i + '][file]', file);
                            formData.append('certificates[' + i + '][description]', this.parseData.certificates[i].description);
                            formData.append('certificates[' + i + '][fileId]', this.parseData.certificates[i].fileId ? this.parseData.certificates[i].fileId : '');
                        }
                        for( var i = 0; i < cities.length; i++ ){
                            let city = cities[i];
                            formData.append('city[' + i + ']', city);
                        }
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
                        for( var i = 0; i < this.empTypes.length; i++ ){
                            let employment_type = this.empTypes[i];
                            formData.append('employment_types[' + i + ']', employment_type);
                        }
                        for( var i = 0; i < this.categories.length; i++ ){
                            let categories = this.categories[i];
                            formData.append('categories[' + i + ']', categories);
                        }

                        formData.append('position', this.parseData.position);
                        formData.append('salary', this.parseData.salary);
                        formData.append('salary', this.parseData.salary);
                        formData.append('salary_comment', this.parseData.salary_comment);
                        formData.append('hide_data', typeof this.parseData.hide_data !== "number" ? +this.parseData.hide_data : this.parseData.hide_data);
                        formData.append('published', +this.parseData.published);
                        formData.append('information', this.parseData.information);
                        formData.append('short_desc', this.parseData.short_desc);
                        formData.append('video', this.parseData.video);

                        axios.post(`/summary/update/${this.parseData.id}`, formData,
                            {
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
            }
        },

        computed: {
            typesList() {
                return this.$store.getters.TYPES
            },
            categoriesList() {
                return this.$store.getters.CATEGORIES
            },
            cityList() {
                return this.$store.getters.CITY
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
