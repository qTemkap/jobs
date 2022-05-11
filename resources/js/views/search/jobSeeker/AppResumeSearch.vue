<template>
    <div class="row">
        <div class="col-xl-9" v-if="pagination !== null">
            <h2 class="page-title">
                <template v-if="query !== 'undefined' && query !== ''">
                    Резюме по запросу {{query.replace(/\+/g, ' ')}}
                </template>
                 <template v-else>
                    Резюме
                </template>
                <span class="search-result">
                    Найдены {{ pagination.total }} вакансий
                </span>
            </h2>
        </div>
        <div class="col-xl-3" v-if="pagination !== null">
            <div class="filter-controler">
                <div class="filter-btn" @click="showFilter = !showFilter">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 6 20"
                            width="6px" height="20px">
                        <path fill-rule="evenodd" fill="#000"
                              d="M3.002,6.012 C4.654,6.012 5.994,4.669 5.994,3.012 C5.994,1.356 4.654,0.013 3.002,0.013 C1.349,0.013 0.009,1.356 0.009,3.012 C0.009,4.669 1.349,6.012 3.002,6.012 ZM3.002,2.012 C3.552,2.012 3.999,2.461 3.999,3.012 C3.999,3.564 3.552,4.012 3.002,4.012 C2.452,4.012 2.004,3.564 2.004,3.012 C2.004,2.461 2.452,2.012 3.002,2.012 ZM3.002,7.012 C1.349,7.012 0.009,8.355 0.009,10.011 C0.009,11.668 1.349,13.010 3.002,13.010 C4.654,13.010 5.994,11.668 5.994,10.011 C5.994,8.355 4.654,7.012 3.002,7.012 ZM3.002,11.011 C2.452,11.011 2.004,10.562 2.004,10.011 C2.004,9.460 2.452,9.011 3.002,9.011 C3.552,9.011 3.999,9.460 3.999,10.011 C3.999,10.562 3.552,11.011 3.002,11.011 ZM3.002,14.010 C1.349,14.010 0.009,15.353 0.009,17.010 C0.009,18.666 1.349,20.009 3.002,20.009 C4.654,20.009 5.994,18.666 5.994,17.010 C5.994,15.353 4.654,14.010 3.002,14.010 ZM3.002,18.010 C2.452,18.010 2.004,17.561 2.004,17.010 C2.004,16.458 2.452,16.010 3.002,16.010 C3.552,16.010 3.999,16.458 3.999,17.010 C3.999,17.561 3.552,18.010 3.002,18.010 Z"/>
                    </svg>
                    <span>Фильтр</span>
                </div>

                <div class="sort-block">
                    <span>
                        Сортировка:
                    </span>
                    <dropdown class="dropdown resume-dropdown">
                        <template slot="btn"> {{ sortTitle }} </template>
                        <template slot="body">
                            <ul class="ul-reset dropdown__list">
                                <li>
                                    <button class="link-default" @click="sortCard($event)">По дате</button>
                                </li>
                                <li>
                                    <button class="link-default" @click="sortCard($event)">По зарплате ↓</button>
                                </li>
                                 <li>
                                    <button class="link-default" @click="sortCard($event)">По зарплате ↑</button>
                                </li>
                            </ul>
                        </template>
                    </dropdown>
                </div>

            </div>
        </div>

        <div class="col-xl-3">
            <div class="filter filter__clear" v-if="showClearBtn()">
                <button class="btn filter__clear-btn"
                        type="button"
                        @click="clearFilter()">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="16px" height="16px">
                        <path fill-rule="evenodd"  fill="rgb(0, 146, 215)"
                              d="M9.157,8.001 L16.008,14.853 L14.849,16.012 L7.999,9.160 L1.148,16.012 L-0.010,14.853 L6.840,8.001 L-0.010,1.149 L1.148,-0.010 L7.999,6.842 L14.849,-0.010 L16.008,1.149 L9.157,8.001 Z"/>
                    </svg>
                    <span>
                        Очистить фильтры
                    </span>
                </button>
            </div>

            <form class="filter" :class="{'d-block': showFilter}">

                <div class="filter__block">
                    <div class="filter__title">
                        Город
                    </div>

                    <v-select :options="cityList"
                              label="name"
                              placeholder="Город"
                              class="v-select__default filter-select"
                              v-model="filterValue.cityId"
                    >
                    </v-select>
                </div>

                <div class="filter__block">
                    <div class="filter__title">
                        Категория
                    </div>

                    <div class="filter__wrapper filter-category" :class="{full: fullHeight}">
                        <label class="checkbox"
                               v-for="(category, index) in categoriesList"
                               :key="index"
                        >
                            <input type="checkbox"
                                   :name="`category_${category.id}`"
                                   :id="category.id"
                                   :value="category.id"
                                   @change="filter()"
                                   v-model="filterValue.category">
                            <span>
                               {{category.name}}
                            </span>
                        </label>

                    </div>

                    <button type="button" class="btn btn-link filter__more" @click="fullHeight = !fullHeight">
                        <template v-if="fullHeight">
                            Cкрыть
                        </template>
                        <template v-else>
                            Еще
                         </template>
                    </button>
                </div>

                <div class="filter__block">
                    <div class="filter__title">
                       Тип занятости
                    </div>

                    <div class="filter__wrapper">

                        <label class="checkbox"
                               v-for="(employment, index) in typesList"
                               :key="index"
                        >
                            <input type="checkbox"
                                   :name="`types${employment.id}`"
                                   :id="employment.id"
                                   :value="employment.id"
                                   @change="filter()"
                                   v-model="filterValue.employment">
                            <span>
                               {{employment.name}}
                            </span>

                        </label>

                    </div>
                </div>

                <div class="filter__block">
                    <div class="filter__title">
                        Зарплата
                    </div>

                    <div class="filter__wrapper filter__salary">
                        <span>
                          от
                        </span>

                        <input type="text" v-model.number="filterValue.salaryFrom" :disabled="filterValue.salaryEmpty">

                        <span>
                          руб
                        </span>
                    </div>

                    <div class="filter__wrapper filter__salary">
                        <span>
                          до
                        </span>

                        <input type="text" v-model.number="filterValue.salaryTo" :disabled="filterValue.salaryEmpty">

                        <span>
                          руб
                        </span>
                        <button type="button" class="btn btn-green btn-salary" @click="filter()">
                            ок
                        </button>
                    </div>

                    <label class="checkbox">
                        <input type="checkbox"
                               v-model="filterValue.salaryEmpty"
                               @change="salaryEmptyWatch()"
                               name="salary_null">
                        <span>
                           Не указана
                        </span>
                    </label>

                </div>

                <div class="filter__block">
                    <div class="filter__title">
                        Образование
                    </div>

                    <div class="filter__wrapper education-filter">
                        <label class="checkbox"
                               v-for="(level, index) in typesLevels"
                               :key="index"
                        >
                            <input type="checkbox"
                                   :name="`level${level.id}`"
                                   :id="level.id"
                                   :value="level.id"
                                   @change="filter()"
                                   v-model="filterValue.levels">
                            <span>
                               {{level.name}}
                            </span>
                        </label>

                    </div>
                </div>

                <div class="filter__block">
                    <div class="filter__title">
                        Пол
                    </div>

                    <div class="filter__wrapper">
                        <label class="radio">
                            <input type="radio"
                                   name="gander"
                                   id="gander-1"
                                   @change="filter()"
                                   value="female"
                                   v-model="filterValue.gander">
                            <span>
                               Женский
                            </span>
                        </label>

                        <label class="radio">
                            <input type="radio"
                                   name="gander"
                                   id="gander-2"
                                   @change="filter()"
                                   value="male"
                                   v-model="filterValue.gander">
                            <span>
                               Мужской
                            </span>
                        </label>

                    </div>
                </div>

                <div class="filter__block">
                    <div class="filter__title">
                        Возраст
                    </div>

                    <div class="filter__wrapper">
                        <div class="filter__select">
                           <span>
                               от
                           </span>
                            <v-select :options="age"
                                      label="age"
                                      placeholder="любой"
                                      class="v-select__default filter-select"
                                      v-model="filterValue.ageFrom"
                            >
                            </v-select>
                        </div>
                        <div class="filter__select">
                           <span>
                               до
                           </span>
                            <v-select :options="age"
                                      label="age"
                                      placeholder="любой"
                                      class="v-select__default filter-select"
                                      v-model="filterValue.ageTo"
                            >
                            </v-select>
                        </div>
                    </div>
                </div>

            </form>
        </div>
        <div class="col-xl-9">

            <div class="main-wrapper">

                <section class="empty-list empty-list__search" key="list" v-if="parseData !== null && parseData.length === 0">
                    <img src="/images/empty-search.png" class="img-fluid empty-list__img " alt="">

                    <h3 class="empty-list__title">
                        Резюме не найдено
                    </h3>

                    <div class="empty-list__desc">
                        С выбранными фильтрами резюме пока нет. <br>
                        Попробуйте поискать без учета фильтров.
                    </div>
                </section>

                <div v-if="loading" key="loading">
                    <content-loader
                            v-for="index in 25" :key="index"
                            style="background-color: #fff;margin-bottom: 10px;"
                            :height="108"
                            :width="400"
                            :speed="1"
                            primaryColor="#f3f3f3"
                            secondaryColor="#ecebeb"
                    >
                        <rect x="92" y="11" rx="3" ry="3" width="90" height="6.4" />
                        <rect x="92" y="29" rx="3" ry="3" width="50" height="6.4" />
                        <rect x="10" y="11" rx="0" ry="0" width="65" height="83" />
                        <rect x="92" y="47" rx="3" ry="3" width="180" height="6.4" />
                        <rect x="298" y="11" rx="3" ry="3" width="85" height="6.4" />
                        <rect x="298" y="29" rx="3" ry="3" width="85" height="6.4" />
                        <rect x="92" y="65" rx="3" ry="3" width="250" height="6.4" />
                    </content-loader>
                </div>

                <div class="search-list" v-else key="loading">
                    <div class="search-card"
                         v-for="(card, index) in parseData"
                         :key="index"
                    >

                        <div class="pic">
                            <template>
                                <img :src="card.avatar === null ? '/images/profile-preview-null.jpg' : card.avatar"
                                     class="img-fluid"
                                     alt="">
                            </template>
                        </div>

                        <div class="card-block">
                            <div class="person">
                                <a :href="card.show" class="title">
                                    {{card.position}}
                                </a>
                                <div class="name">
                                    {{card.name}}, {{card.age}}
                                </div>
                                <div class="location">
                                    {{card.published_at}}
                                    <!--сегодня в 10:33-->
                                    <span>
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 8 11"
                                                width="8px" height="11px">
                                            <path fill-rule="evenodd" fill="rgb(0, 146, 215)"
                                                  d="M3.999,11.001 L7.200,6.549 C8.400,5.008 8.226,2.475 6.828,1.128 C6.072,0.400 5.068,-0.001 3.999,-0.001 C2.930,-0.001 1.925,0.400 1.170,1.128 C-0.229,2.474 -0.402,5.008 0.793,6.543 L3.999,11.001 ZM4.036,2.410 C4.841,2.410 5.496,3.041 5.496,3.817 C5.496,4.592 4.841,5.223 4.036,5.223 C3.230,5.223 2.575,4.592 2.575,3.817 C2.575,3.041 3.230,2.410 4.036,2.410 Z"/>
                                        </svg>

                                        {{card.city}}
                                    </span>
                                </div>
                            </div>

                            <div class="info">
                                <div class="salary">
                                    {{card.salary}} руб.
                                </div>
                                <div class="education">
                                    <!--более 5 лет <br>-->
                                    <!--высшее-->
                                    {{card.salary_comment}}
                                </div>
                            </div>

                            <div class="desc">
                                <span v-text="card.short_desc"></span>
                                <a :href="card.show" class="card-redirect">
                                    <span class="link-default">Подробнее</span>
                                    <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6 10"
                                            width="6px" height="10px">
                                        <path fill-rule="evenodd" fill="rgb(6, 129, 208)"
                                              d="M5.995,5.458 L5.329,6.139 L4.882,5.682 L0.671,9.995 L0.005,9.313 L4.217,5.000 L0.005,0.687 L0.671,0.005 L4.882,4.318 L5.329,3.861 L5.995,4.542 L5.548,5.000 L5.995,5.458 Z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="main-wrapper__footer" v-if="showPagination()">
                    <div v-if="pagination !== null">
                        <v-pagination
                                :labels="paginationAnchorTexts"
                                v-model="currentPage"
                                :page-count="pagination.lastPage"></v-pagination>
                    </div>

                    <div class="quantity" v-if="pagination !== null">
                        <v-select :options="quantityList"
                                  v-model="filterValue.perPage"
                                  class="v-select__default"
                        >
                        </v-select>
                    </div>
                </div>

            </div>
        </div>
      </div>
</template>

<script>

    import vSelect from 'vue-select';
    import Dropdown from 'bp-vuejs-dropdown';
    import axios from 'axios';
    import Autocomplete from 'vuejs-auto-complete';
    import vPagination from 'vue-plain-pagination';
    import { ContentLoader } from "vue-content-loader";

    export default {
        name: "AppWorkerSearch",
        components: {
            vSelect,
            Dropdown,
            Autocomplete,
            vPagination,
            ContentLoader,
        },

        data() {
            return {
                cityList: [],
                typesList: [],
                categoriesList: [],
                typesLevels: [],

                parseData: null,
                pagination: null,

                loading: false,
                showFilter: false,
                fullHeight: false,

                sortArr: [{name: 'По дате', id: 'date'}, {name: 'По зарплате ↓', id: 'salary-down'}, {name: 'По зарплате ↑', id: 'salary-up'}],
                sortIdDesc: null,
                sortIdAsc: null,
                sortTitle: 'По дате',
                query: null,

                age: [18,20,25,35,45,50],
                quantityList: [25, 50, 75, 100],
             

                currentPage: 1,
                paginationAnchorTexts: {
                    prev: ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12" width="8px" height="12px">\n' +
                          '  <path fill-rule="evenodd" fill="rgb(100, 100, 100)" d="M7.182,10.974 L6.475,11.681 L0.818,6.024 L0.843,5.999 L0.818,5.974 L6.475,0.317 L7.182,1.024 L2.207,5.999 L7.182,10.974 Z"/>\n' +
                          '</svg> Предыдущая',
                    next: 'Следущая <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6px" height="11px">\n' +
                          '  <path fill-rule="evenodd" fill="rgb(100, 100, 100)" d="M5.995,5.524 L0.671,10.994 L0.005,10.310 L4.687,5.500 L0.005,0.689 L0.671,0.005 L5.995,5.475 L5.971,5.499 L5.995,5.524 Z"/>\n' +
                          '</svg>',
                },

                cityFilter: null,

                filterValue: {
                    category: [],
                    employment: [],
                    levels: [],
                    perPage: 25,
                    salaryFrom: null,
                    salaryTo: null,
                    salaryEmpty: null,
                    gander: null,
                    ageFrom: null,
                    ageTo: null,
                    cityId: null,
                }
            }
        },

        created() {
            this.$store.dispatch('GET_FILTER_DATA').then(() => {
                this.filterStore;
            }).then(() => {
                this.renderFilter();
                this.filter();
            });
        },

        methods: {
            findGetParameter(paramsName) {
                let params = location.search.substr(1).split("&");
                let result = [];
                params.forEach((item) => {
                    if (item.indexOf(paramsName) !== -1) {
                        if(item.split('=')[0] === paramsName){
                            result.push(item.split('=')[1]);
                        }
                    }
                });
                return result;
            },

            renderFilter(){
                this.filterValue.category = this.findGetParameter('categories[]');
                this.filterValue.employment = this.findGetParameter('employment_types[]');
                this.filterValue.salaryEmpty = this.findGetParameter('without_sn')[0];
                this.filterValue.levels = this.findGetParameter('educations');
                this.filterValue.gander = this.findGetParameter('gander')[0];
                this.currentPage = this.findGetParameter('page')[0] !== undefined ? +this.findGetParameter('page')[0] : 1;
                this.filterValue.perPage = this.findGetParameter('page_size')[0] !== undefined ? this.findGetParameter('page_size')[0] : 25;
                this.renderCity();
                this.renderSalary();
                this.renderAge();
                this.renderSort();
                this.renderSearchInput();

                
            },

            renderSearchInput(){
                this.query = decodeURIComponent(this.findGetParameter('query')[0]);
                if(this.query !== null && this.query !== 'undefined'){
                    let searchInput = document.querySelector('.autocomplete__inputs input');
                    if(searchInput.value !== null){
                        searchInput.value = this.query.replace(/\+/g, ' ');
                        this.$store.commit('SET_INPUT_SEARCH_VALUE', this.query.replace(/\+/g, ' '));
                    }

                }
            },


            renderCity(){
                this.cityFilter = this.findGetParameter('cities[]').length !== 0 ? this.findGetParameter('cities[]')[0] : null;

                if(this.cityFilter !== null && this.cityList.length !== 0){
                    let cityObj = this.cityList.find((item) => {
                        return this.cityFilter == item.id
                    });
                    this.filterValue.cityId = cityObj
                }
            },

            ageFilter() {
                if(this.filterValue.ageFrom === null && this.filterValue.ageTo === null ){
                    return null
                } else if(this.filterValue.ageFrom !== null && this.filterValue.ageTo === null) {
                    return `${this.filterValue.ageFrom}`
                } else if(this.filterValue.ageFrom === null && this.filterValue.ageTo !== null) {
                    return `0_${this.filterValue.ageTo}`
                } else if(this.filterValue.ageFrom > this.filterValue.ageTo) {
                    this.filterValue.ageTo = this.filterValue.ageFrom;
                    return `${this.filterValue.ageFrom}_${this.filterValue.ageTo}`
                } else {
                    return `${this.filterValue.ageFrom}_${this.filterValue.ageTo}`
                }
            },

            showPagination(){
              if(this.pagination !== null && this.pagination.total <= this.pagination.perPage){
                  this.currentPage = 1;
                  return false
              } else{
                  return true
              }
            },

            renderAge() {
                let age = this.findGetParameter('age');

                if (age.length >= 3) {
                    if (age[1].indexOf('_') !== -1) {
                        this.filterValue.ageFrom = +age[1].split('_')[0];
                        this.filterValue.ageTo = +age[1].split('_')[1];
                    } else {
                        this.filterValue.ageFrom = +age[1];
                    }
                }
            },

            renderSalary() {
                let salary = this.findGetParameter('salary');

                if (salary.length !== 0) {
                    if(isNaN(+salary[0])){
                        return false
                    } else if (salary[0].indexOf('_') !== -1) {
                        this.filterValue.salaryFrom = +salary[0].split('_')[0];
                        this.filterValue.salaryTo = +salary[0].split('_')[1];
                    } else {
                        this.filterValue.salaryFrom = +salary[0];
                    }
                }
            },

            salaryEmptyWatch() {
                if (this.filterValue.salaryEmpty) {
                    this.filterValue.salaryFrom = null;
                    this.filterValue.salaryTo = null;
                } else {
                    this.filterValue.salaryEmpty = null
                }
                this.filter();
            },

            salaryFilter() {
                if (typeof this.filterValue.salaryFrom !== 'number' && typeof this.filterValue.salaryTo !== 'number') {
                    return null
                } else if (typeof this.filterValue.salaryFrom !== 'number' && typeof this.filterValue.salaryTo === 'number') {
                    return `0_${this.filterValue.salaryTo}`
                } else if (typeof this.filterValue.salaryFrom === 'number' && typeof this.filterValue.salaryTo !== 'number') {
                    return `${this.filterValue.salaryFrom}`
                } else if (this.filterValue.salaryFrom > this.filterValue.salaryTo) {
                    this.filterValue.salaryFrom = this.filterValue.salaryTo
                    return `${this.filterValue.salaryFrom}_${this.filterValue.salaryTo}`
                } else {
                    return `${this.filterValue.salaryFrom}_${this.filterValue.salaryTo}`
                }
            },

            renderSort() {

                if(this.findGetParameter('order_desc')[0]){
                    this.sortIdDesc = this.findGetParameter('order_desc')[0]
                }
                else if(this.findGetParameter('order_asc')[0]){
                    this.sortIdAsc = this.findGetParameter('order_asc')[0]
                }
               
                if(this.sortIdDesc){
                   
                    if(this.sortIdDesc == 'date'){
                        this.sortTitle = 'По дате';
                    } else {
                        this.sortTitle = 'По зарплате ↓';
                    }
                } 
                
                if(this.sortIdAsc){
                    this.sortTitle = 'По зарплате ↑';
                }

            },

           sortCard(e) {
                
                this.sortTitle = e.target.innerText;
                let sort = this.sortArr.find((item) => {
                    return item.name == e.target.innerText
                });
                if(sort.id == 'date'){
                    this.sortIdDesc = sort.id;
                    this.sortIdAsc = null;
                } else if(sort.id == 'salary-down'){
                     this.sortIdDesc = 'salary';
                     this.sortIdAsc = null;
                } else if(sort.id == 'salary-up'){
                     this.sortIdDesc = null;
                     this.sortIdAsc = 'salary';
                }
                
            },

            showClearBtn(){
                if(location.search !== ''){
                    return true
                }
                return false
            },

            clearFilter(){
                this.loading = true;
                let searchInput = document.querySelector('.autocomplete__inputs input');
                searchInput.value = '';
                this.query = '';
                this.sortTitle = 'По дате';
                this.filterValue.cityId = null;
                this.filterValue.salaryFrom = '';
                this.filterValue.salaryTo = '';

                axios.get('/resumes/search')
                    .then(response => {
                        try {
                            this.parseData = response.data.data;
                            this.pagination = response.data.pagination;
                            this.loading = false;
                            const newUrl = response.request.responseURL.replace(/\/search/g, '').replace(/%2B/g, "+");
                            history.pushState(null, null, newUrl);
                        } catch (err) {
                            console.log(err)
                        }
                    }).then(() => {
                    this.renderFilter()

                });
            },

            filter(){
                this.loading = true;

                axios.get('/resumes/search', {
                    params: {
                        categories: this.filterValue.category,
                        employment_types: this.filterValue.employment,
                        salary: this.salaryFilter(),
                        page: this.currentPage !== 1 ? this.currentPage : null,
                        without_sn: this.filterValue.salaryEmpty,
                        educations: this.filterValue.levels,
                        gander: this.filterValue.gander,
                        age: this.ageFilter(),
                        page_size: this.filterValue.perPage !== 25 ? this.filterValue.perPage : null,
                        order_desc: this.sortIdDesc,
                        order_asc: this.sortIdAsc,
                        cities: this.filterValue.cityId !== null ? [this.filterValue.cityId.id] : null,
                        query: this.query === 'undefined' ? null : this.query,
                    }
                })
                    .then(response => {
                        try {
                            this.parseData = response.data.data;
                            this.pagination = response.data.pagination;
                            this.loading = false;
                            const newUrl = response.request.responseURL.replace(/\/search/g, '').replace(/%2B/g, "+");
                            history.pushState(null, null, newUrl);

                        } catch (err) {
                            console.log(err)
                        }
                    });
            },

        },

        computed: {
            filterStore(){
                let filterData = this.$store.getters.FILTER_DATA;
                if(filterData !== null){
                    this.cityList = Object.keys(filterData.cities).map((k) => filterData.cities[k]).sort(function (bigCity, smallCity) {
                        return smallCity.population - bigCity.population
                    });
                    this.typesList = Object.keys(filterData.employment_types).map((k) => filterData.employment_types[k]);
                    this.categoriesList = Object.keys(filterData.categories).map((k) => filterData.categories[k]);
                    this.typesLevels = Object.keys(filterData.education_levels).map((k) => filterData.education_levels[k]);
                }
            },
        },

        watch: {
            'filterValue.cityId': function (val) {
                this.filter();
            },
            'filterValue.ageFrom': function (val) {
                this.filter();
            },
            'filterValue.ageTo': function (val) {
                this.filter();
            },
            currentPage: function (oldVal, newVal) {
                this.filter();
            },
            'filterValue.perPage': function (oldVal, newVal) {
                if(oldVal != newVal){
                    this.filter();
                }
            },
            sortIdDesc: function (oldVal, newVal) {
                if (oldVal != newVal) {
                    this.filter();
                }
            },
            sortIdAsc: function (oldVal, newVal) {
                if (oldVal != newVal) {
                    this.filter();
                }
            },
        }

    }
</script>

