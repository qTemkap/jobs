<template>
    <form class="search" @submit.prevent="searchForm">
       <autocomplete
                ref="autocomplete"
                class="search-input"
                v-model="searchResult"
                :source="searchRequest()"
                @nothingSelected="nothingSelected"
                @selected = "itemSelected"
                @results = "searchInputResults"
                @clear="noClearValue"
                resultsValue="name"
                placeholder="Введите ключевые слова"
        >
        </autocomplete>

        <v-select
                placeholder="Выберите значение"
                name="company_type"
                v-model="selected"
                class="v-select__default v-select__search"
                :options="typeSearch"
        ></v-select>

        <button class="btn btn-search">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 31 31"
                    width="31px" height="31px">
                <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                      d="M12.393,-0.010 C5.542,-0.010 -0.012,5.545 -0.012,12.398 C-0.012,19.251 5.542,24.806 12.393,24.806 C19.244,24.806 24.798,19.251 24.798,12.398 C24.798,5.545 19.244,-0.010 12.393,-0.010 ZM12.393,21.704 C7.263,21.704 3.089,17.529 3.089,12.398 C3.089,7.267 7.263,3.092 12.393,3.092 C17.523,3.092 21.697,7.267 21.697,12.398 C21.697,17.529 17.523,21.704 12.393,21.704 ZM31.000,28.817 L28.807,31.011 L22.229,24.430 L24.422,22.236 L31.000,28.817 Z"/>
            </svg>
            <span>
                Найти
            </span>
        </button>
    </form>
</template>

<script>
    import vSelect from 'vue-select'
    import Autocomplete from 'vuejs-auto-complete'
    import axios from 'axios';

    export default {
        components: {
            Autocomplete,
            vSelect
        },
        props: {
            defaultSelect: {
                default: 'вакансии',
                type: String
            }
        },
        data() {
            return {
                typeSearch: ['вакансии', 'резюме'],
                selected: this.defaultSelect,
                searchResult: null,
                array: [],
                searchArr: [],
            }
        },

        created() {
            this.getSearchArr.then((data) => {
                this.array = data;
            });
        },

        methods: {
            noClearValue(){
                this.$refs.autocomplete.value = this.searchResult;
                this.$refs.autocomplete.selectedDisplay = this.searchResult;
            },
            searchInputResults() {
                if(this.$refs.autocomplete.display === undefined){
                    this.$refs.autocomplete.display = this.$store.getters.INPUT_SEARCH_VALUE;
                }
                this.searchResult = this.$refs.autocomplete.display;
            },

            nothingSelected(result) {
                if (this.$refs.autocomplete.showNoResults) {
                    this.$refs.autocomplete.value = result;
                    this.$refs.autocomplete.selectedDisplay = result;
                    this.searchResult = result;
                }
            },

            itemSelected(){
                this.searchResult = this.$refs.autocomplete.selectedDisplay;
                this.searchForm();
            },

            searchRequest() {
                if(this.array.length !== 0){
                    if(this.selected === 'вакансии'){
                        return Object.keys(this.array.vacancies).map((k) => {
                           return { name: this.array.vacancies[k]}
                        });
                    } else {
                        return Object.keys(this.array.summaries).map((k) => {
                            return { name: this.array.summaries[k]}
                        });
                    }
                } else {
                    return []
                }
            },

            searchForm() {
                if(this.$refs.autocomplete.$attrs.value === null){
                    this.searchResult =  this.$store.getters.INPUT_SEARCH_VALUE;
                }

                if (this.selected === 'вакансии') {
                    axios.get('/jobs/search', {
                        params: {
                            query: this.searchResult !== null ? this.searchResult : ''
                        }
                    }).then((response) => {
                        document.location.href = response.request.responseURL.replace(/\/search/g, '');
                    })

                } else if (this.selected === 'резюме') {
                    axios.get('/resumes/search', {
                        params: {
                            query: this.searchResult !== null ? this.searchResult : ''
                        }
                    }).then((response) => {
                        document.location.href = response.request.responseURL.replace(/\/search/g, '');
                    })
                }
            },

        },

        computed: {
            getSearchArr() {
                return axios.get('/autocomplete/get_all').then(response => {
                    return response.data
                })
            }
        },

    }
</script>

<style lang="sass">

    @import "../../sass/default/_vars"
    @import "../../sass/default/_mixins"

    .autocomplete__results
        max-height: 311px !important
        overflow: hidden !important
        @include mq('w_1199')
            max-height: 300px !important

    .page-search
        background-color: #0092d7
        padding: 11px 0


    .search
        display: flex
        @include mq('w_575')
            flex-wrap: wrap

    .search-input
        .autocomplete__box
            padding: 0
            border-radius: 0
            border: none !important
            @include mq('w_575')
                margin-bottom: 5px

        .autocomplete__inputs
            width: 100%
            height: 40px
            border-right: 1px solid $color-grey
            padding: 0

            input
                height: 100% !important
                @include font-size(16px)
                color: #000000
                padding-left: 18px
                border: none
                border-right: 1px solid $color-grey


    .v-select__search
        &.v-select
            width: 144px
            flex-shrink: 0
            height: 40px
            @include mq('w_991')
                width: 116px
            @include mq('w_575')
                width: calc(100% - 50px - 5px)

            .dropdown-menu
                overflow: hidden

            .dropdown-toggle
                height: 100%
                width: 100%
                background-color: #fff
                border: none
                border-radius: 0

            .open-indicator
                &:before
                    border-width: 5px 4px 0 4px
                    border-color: #000000 transparent transparent transparent
                    transform: rotate(0)
                    height: 6px
                    width: 9px
                    margin-top: 0

            &.open
                .open-indicator
                    &:before
                        margin-top: 0
                        transform: rotate(180deg)


    .btn-search
        width: 120px
        height: 40px
        flex-shrink: 0
        display: flex
        align-items: center
        justify-content: center
        padding: 0
        background-color: #005e99
        margin-left: 6px
        @include mq('w_991')
            width: 50px
            margin-left: 0
        @include mq('w_575')
            margin-left: 5px

        svg
            height: 20px
            width: 20px

        span
            @include font-size(17px)
            line-height: 1
            color: #fff
            margin-left: 9px
            @include mq('w_991')
                display: none


</style>



