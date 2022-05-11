<template>
    <section class="resume-card__wrapper"
            >
        <div class="tabs-bar">
            <div class="tabs-bar__item">
                Резюме
            </div>
            <div class="tabs-bar__item">
                Состояние
            </div>
        </div>
        <div class="resume-card vacancy-card" v-for='(feedback, index) in parseData.data' :key='index'>
            <div class="resume-card__content">
                <a :href="feedback.show" class="resume-card__title">
                    {{feedback.name}}
                </a>
                <div class="resume-card__date">
                    {{feedback.created_date}}, {{feedback.position}}<span v-if="feedback.city !== null && feedback.city !== ''">, {{feedback.city}}</span>
                </div>

                <div class="resume-card__bar">
                    <div class="resume-card__status" :class="{new: feedback.new === 0}">
                        <span v-if="feedback.new === 0">Новое</span>
                        <span v-if="feedback.new === 1">Просмотренно</span>
                    </div>
                </div>
            </div>
            <div class="resume-card__info vacancy-card__info">
                <div class="resume-card__salary">
                    от {{feedback.salary}} руб.
                </div>
                <div class="resume-card__rating">
                    <rate :length="5" v-model="feedback.rating" @after-rate="onAftereRate" />
                </div>
            </div>
        </div>

        <div v-if="showPagination()">
            <v-pagination
                    :labels="paginationAnchorTexts"
                    v-model="currentPage"
                    :page-count="parseData.pagination.lastPage"></v-pagination>
        </div>

    </section>
</template>

<script>
    import vPagination from 'vue-plain-pagination';
    import axios from 'axios';

    export default {
        name: "AppCompanyFeedback",
        components: {
            vPagination
        },
        props: ['data'],
        data() {
            return {
                myRate: 5,

                submitted: false,
                loading: false,

                parseData: null,

                currentPage: 1,
                paginationAnchorTexts: {
                    prev: ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12" width="8px" height="12px">\n' +
                        '  <path fill-rule="evenodd" fill="rgb(100, 100, 100)" d="M7.182,10.974 L6.475,11.681 L0.818,6.024 L0.843,5.999 L0.818,5.974 L6.475,0.317 L7.182,1.024 L2.207,5.999 L7.182,10.974 Z"/>\n' +
                        '</svg> Предыдущая',
                    next: 'Следущая <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6px" height="11px">\n' +
                        '  <path fill-rule="evenodd" fill="rgb(100, 100, 100)" d="M5.995,5.524 L0.671,10.994 L0.005,10.310 L4.687,5.500 L0.005,0.689 L0.671,0.005 L5.995,5.475 L5.971,5.499 L5.995,5.524 Z"/>\n' +
                        '</svg>',
                },
            }
        },

        created() {
            this.parseData = JSON.parse(this.data);
            this.$store.commit('SET_COMPANY_LOGO', this.parseData.logo);
            this.renderFilter();
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
                this.currentPage = this.findGetParameter('page')[0] !== undefined ? +this.findGetParameter('page')[0] : 1;
            },

            paginationRequest(){

                this.loading = true;

                axios.get(`/vacancy/responses/${this.parseData.data[0].vacancy_id}`, {
                    params: {
                        page: this.currentPage
                    },
                    headers: {'X-Requested-With': 'XMLHttpRequest'}
                }).then((response) => {
                    this.parseData = response.data
                    history.pushState(null, null, response.request.responseURL);
                    this.loading = false;
                })
            },
            showPagination(){
                if(this.parseData.pagination !== null && this.parseData.pagination.total <= this.parseData.pagination.perPage){
                    this.currentPage = 1;
                    return false
                } else{
                    return true
                }
            },

            onAftereRate(rate) {
                let cardId = this.parseData.data.find(item => {
                    return rate == item.rating
                });

                axios.put('/vacancy/responses/change_rating', {
                    respond_id: cardId.respond_id,
                    rating: rate
                })
            }
        },

        computed: {

        },

        watch: {
            currentPage: function (oldVal, newVal) {
                this.paginationRequest();
            },
        }

    }
</script>

<style scoped lang="sass">
@import "../../../../../sass/components/card"

.resume-card
    @include mq('w_575')
        flex-direction: column

    &__content
        @include mq('w_575')
            width: 100%

    &__status
        position: relative
        &.new
            &:before
                background-color: rgb(21, 205, 86)
                border: 1px solid rgb(21, 205, 86)
        &:before
            content: ''
            position: relative
            left: 0
            top: 0
            display: inline-block
            border-radius: 100%
            width: 9px
            height: 9px
            border: 1px solid $color-border
            background-color: transparent
            margin-right: 5px

    &__info
        justify-content: flex-start
        margin-top: 0
        @include mq('w_575')
            margin-top: 10px

    &__salary
        font-weight: 600
        @include font-size(20px)
        margin-bottom: 12px
        width: 250px
        @include mq('w_767')
            width: 135px
        @include mq('w_575')
            width: 100%

    &__date
        margin-bottom: 30px
        @include mq('w_575')
            margin-bottom: 15px


.tabs-bar__item:last-child
    width: 257px
    @include mq('w_767')
        width: 135px

</style>
