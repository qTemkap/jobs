<template>
    <transition name="fade">
        <div class="resume-card">
            <div class="resume-card__content">
                <a :href="cardUrl" class="resume-card__title">
                    {{cardTitle}}
                </a>
                <div class="resume-card__date">
                    Резюме размещено на сайте с {{cardDate}}
                </div>

                <div class="resume-card__bar">
                    <div class="resume-status">
                    <span class="hide" v-if="cardStatus === 0">
                        Резюме скрыто
                    </span>
                        <span class="show" v-else>
                        Резюме активировано
                    </span>
                    </div>
                    <!--<a href="#" class="resume-find">-->
                    <!--Подобрать вакансии-->
                    <!--</a>-->
                    <dropdown class="dropdown resume-dropdown">
                        <template slot="btn">Еще</template>
                        <template slot="body">
                            <ul class="ul-reset dropdown__list">
                                <li>
                                    <a :href="cardEdit" class="link-default">Редактировать</a>
                                </li>
                                <li>
                                    <a :href="`../resume/print/${cardId}`" class="link-default">Распечатать</a>
                                </li>
                                <li>
                                    <button @click="deleteCard()" class="link-default link-default__red">Удалить
                                    </button>
                                </li>
                                
                            </ul>
                        </template>
                    </dropdown>

                </div>
                
            </div>
            <div class="resume-card__info">
                <div class="resume-card__info-item">
                    <span class="resume-card__number">
                        {{hitCounter}}
                    </span>
                    <span class="resume-card__text">
                        показов
                    </span>
                </div>

                <div class="resume-card__info-item">
                    <span class="resume-card__number">
                       {{viewCount}}
                    </span>
                    <span class="resume-card__text">
                        просмотров
                    </span>
                </div>

                <a :href="'/summary/offer/' + cardId" class="resume-card__info-item">
                    <span class="resume-card__number">
                        {{countOfResponses}}
                    </span>
                    <span class="resume-card__text">
                        {{countOfResponses == 0 ? "откликов" : ""}}
                        {{countOfResponses == 1 ? "отклик" : ""}}
                        {{countOfResponses >= 2 && countOfResponses <= 4 ? "отклика" : ""}}
                        {{countOfResponses >= 5 ? "откликов" : ""}}
                    </span>
                </a>
            </div>
        </div>
    </transition>
</template>

<script>

    import Dropdown from 'bp-vuejs-dropdown'
    import axios from 'axios';

    export default {
        name: "AppResumeCard",
        components: {
            Dropdown
        },
        props: [
            'cardId',
            'cardTitle',
            'cardDate',
            'cardStatus',
            'cardUrl',
            'cardEdit',
            'cardDelate',
            'hitCounter',
            'viewCount',
            'countOfResponses',
            'offerLink'
        ],

        methods: {
            deleteCard() {
                axios.post(this.cardDelate, {
                    _method: 'delete',
                })
                    .then((response) => {
                        this.$emit('remove', this.cardId)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
        },

    }
</script>

<style scoped lang="sass">
    @import "../../../../sass/components/card"
</style>
