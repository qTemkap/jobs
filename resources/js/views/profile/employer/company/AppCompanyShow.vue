<template>
    <div>
        <div class="company-preview">
            <div class="profile__small">
                <div class="main-info__photo">
                        <template v-if="parseData.company.logo === null">
                            <img src="/images/profile-company.jpg" class="img-fluid company-show-logo" alt="">
                        </template>
                        <template v-else>
                            <img :src="parseData.company.logo" class="img-fluid" alt="">
                        </template>
                </div>
            </div>
            <div class="profile__large">
                <h1 class="info-title">
                    {{parseData.company.name}}
                </h1>
<!--                <div class="info-name">-->
<!--                    Flash-->
<!--                </div>-->
                <div class="user-data">

                    <div class="user-data__item">
                        <p>
                            Отрасль:
                        </p>
                        <p>
                            {{parseData.company.company_types}}
                        </p>
                    </div>
                    <div class="user-data__item">
                        <p>
                            Размер компании:
                        </p>
                        <p>
                            {{parseData.company.company_size}} сотрудников
                        </p>
                    </div>
                    <div class="user-data__item">
                        <p>
                            Сайт:
                        </p>
                        <p>
                            <a :href="parseData.company.web_site" class="link-default" target="_blank">{{parseData.company.web_site}}</a>
                        </p>
                    </div>
                    <div class="user-data__item">
                        <p>
                            Email:
                        </p>
                        <p>
                            <a href="`mailto:${parseData.company.email}`" class="link-default">{{parseData.company.email}}</a>
                        </p>
                    </div>
                </div>

            </div>
            <div class="company-preview__desc">
                <p  v-html="parseData.company.information"></p>
            </div>
        </div>
        <div class="company-preview company-search-list">
            <h2>
                Размещенные вакансии
            </h2>

            <div class="select-wrapper" v-if="vacancyList !== null">
                <v-select :options="parseData.cities"
                          label="name"
                          placeholder="Все города"
                          class="v-select__default filter-select"
                          v-model="filterValue.city"
                >
                </v-select>

                <v-select :options="parseData.categories"
                          label="name"
                          placeholder="Все категории"
                          class="v-select__default filter-select"
                          v-model="filterValue.categories"
                >
                </v-select>
            </div>
        </div>

        <div v-if="vacancyList !== null">
            <div class="search-card company-search-card" v-for="(vacancy, index) in vacancyList" :key="index">
                <div class="card-block">
                    <div class="person">
                        <a :href="vacancy.show" class="title">
                           {{vacancy.position}}
                        </a>

                        <div class="salary">
                            {{vacancy.salary}} руб.
                        </div>
                    </div>
                    <div class="location">
                        <span>
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 8 11"
                                    width="8px" height="11px">
                                <path fill-rule="evenodd"  fill="rgb(0, 146, 215)"
                                      d="M3.999,11.001 L7.200,6.549 C8.400,5.008 8.226,2.475 6.828,1.128 C6.072,0.400 5.068,-0.001 3.999,-0.001 C2.930,-0.001 1.925,0.400 1.170,1.128 C-0.229,2.474 -0.402,5.008 0.793,6.543 L3.999,11.001 ZM4.036,2.410 C4.841,2.410 5.496,3.041 5.496,3.817 C5.496,4.592 4.841,5.223 4.036,5.223 C3.230,5.223 2.575,4.592 2.575,3.817 C2.575,3.041 3.230,2.410 4.036,2.410 Z"/>
                            </svg>

                           {{vacancy.city}} · {{vacancy.past_time}} назад
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import vSelect from 'vue-select';
    import axios from 'axios';

    export default {
        name: "AppCompanyShow",

        components: {
            vSelect
        },
        props: ['data'],
        data() {
            return {
                filterValue: {
                    city: null,
                    categories: null,
                },

                parseData: null,
                vacancyList: null
            }
        },
        created() {
            this.parseData = JSON.parse(this.data);
            this.loadVacancy();
            this.renderFilter();
        },

        methods: {
            loadVacancy(){
                axios.get(this.parseData.company.load_vacancies)
                    .then(response => {
                        this.vacancyList = response.data
                    })
            },

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

            renderDefaultValue(value, array){
                if(array !== null && value !== undefined){
                    return array.find(item => {
                        return +value === item.id
                    })

                } else {
                    return  null
                }
            },

            renderFilter(){
                this.filterValue.city = this.renderDefaultValue(this.findGetParameter('cities[]')[0], this.parseData.cities);
                this.filterValue.categories = this.renderDefaultValue(this.findGetParameter('categories[]')[0], this.parseData.categories);
            },

            filter(){
                axios.get(this.parseData.company.load_vacancies, {
                    params: {
                        categories: this.filterValue.categories !== null ? [this.filterValue.categories.id] : null,
                        cities: this.filterValue.city !== null ? [this.filterValue.city.id] : null
                    }
                })
                    .then(response => {
                        try {
                            this.vacancyList = response.data;
                            const newUrl = response.request.responseURL.replace(/vacancies/g, 'show').replace(/%2B/g, "+");
                            history.pushState(null, null, newUrl);
                        } catch (err) {
                            console.log(err)
                        }
                    });
            },
        },

        watch: {
            'filterValue.categories': function (val) {
                this.filter();
            },
            'filterValue.city': function (val) {
                this.filter();
            }
        }

    }
</script>

<style scoped lang='sass'>
    .company-show-logo
        width: 100%
</style>