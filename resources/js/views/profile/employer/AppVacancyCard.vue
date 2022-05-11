<template>
    <div class="resume-card vacancy-card">
        <div class="resume-card__content">
            <a :href="cardUrl" class="resume-card__title">
                {{cardTitle}}
            </a>
            <div class="resume-card__date">
                {{cardCites}} от {{cardSalary}} руб.
            </div>

            <div class="resume-card__bar">
                <div class="vacancy-bar__item">
                    <a :href="cardEdit" class="link-default">Изменить</a>
                </div>
                <div class="vacancy-bar__item">
                    <dropdown class="dropdown resume-dropdown">
                        <template slot="btn">Еще</template>
                        <template slot="body">
                            <ul class="ul-reset dropdown__list">
                                <li>
                                    <a :href="'job/print/' + cardId" class="link-default">Распечатать</a>
                                </li>
                                <li>
                                    <button @click="deleteCard()" class="link-default link-default__red">Удалить</button>
                                </li>
                            </ul>
                        </template>
                    </dropdown>
                </div>
            </div>
        </div>
        <div class="resume-card__info vacancy-card__info">
            <div class="resume-card__info-item">
                <span class="resume-card__icon">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 18"
                            width="20px" height="18px">
                        <path fill-rule="evenodd"  fill="rgb(177, 190, 200)"
                              d="M-0.003,0.003 L-0.003,14.976 L7.039,14.976 C7.830,16.482 8.375,18.000 10.071,18.000 C11.898,18.000 12.195,16.681 13.106,14.976 L19.987,14.976 L19.987,0.003 L-0.003,0.003 ZM17.988,12.979 C12.748,12.979 14.413,12.979 12.054,12.979 C11.337,14.334 11.645,13.802 10.436,15.808 C10.329,15.970 10.178,16.036 10.071,16.036 C9.964,16.036 9.815,16.019 9.707,15.860 C9.150,15.047 9.460,15.576 8.101,12.979 C5.660,12.979 7.418,12.979 1.995,12.979 L1.995,2.000 L17.988,2.000 L17.988,12.979 ZM7.993,8.093 C7.993,6.990 8.887,6.097 9.992,6.097 C11.096,6.097 11.990,6.990 11.990,8.093 C11.990,9.196 11.096,10.089 9.992,10.089 C8.887,10.089 7.993,9.196 7.993,8.093 Z"/>
                    </svg>
                </span>
                <a :href="feedbackLink" class="resume-card__text feedback-link tdn">
                    <span class="resume-card__number">
                     {{feedbackCount}}
                    </span>
                     откликов
                </a>
            </div>

            <div class="resume-card__info-item">
                <span class="resume-card__icon">
                   <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20"
                       width="20px" height="20px">
                       <path fill-rule="evenodd"  fill="rgb(177, 190, 200)"
                      d="M-0.012,3.992 C-0.012,12.218 -0.012,11.676 -0.012,19.985 L20.010,19.985 C20.010,12.272 20.010,10.622 20.010,3.992 L-0.012,3.992 ZM18.008,17.986 L1.990,17.986 L1.990,5.991 L18.008,5.991 L18.008,17.986 ZM18.008,1.993 L1.990,1.993 L1.990,-0.007 L18.008,-0.007 L18.008,1.993 ZM3.992,11.988 C3.992,6.396 3.992,10.417 3.992,7.990 L5.995,7.990 L5.995,9.989 L14.003,9.989 L14.003,7.990 L16.005,7.990 C16.005,10.390 16.005,6.364 16.005,11.988 C11.427,11.988 8.078,11.988 3.992,11.988 Z"/>
                    </svg>
                </span>
                <span class="resume-card__number">
                    {{hitCount}}
                </span>
                <span class="resume-card__text">
                    показов
                </span>
            </div>

            <div class="resume-card__info-item">
                <span class="resume-card__icon">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 12"
                      width="20px" height="12px">
                      <path fill-rule="evenodd"  fill="rgb(177, 190, 200)"
                      d="M9.993,-0.013 C5.714,-0.013 1.987,2.408 -0.015,5.998 C1.987,9.588 5.714,12.009 9.993,12.009 C14.273,12.009 18.001,9.588 20.002,5.998 C18.001,2.408 14.273,-0.013 9.993,-0.013 ZM9.993,9.929 C7.002,9.929 4.184,8.449 2.386,5.998 C4.184,3.547 7.002,2.067 9.993,2.067 C12.985,2.067 15.803,3.547 17.601,5.998 C15.803,8.449 12.985,9.929 9.993,9.929 ZM11.995,5.998 C11.995,7.147 11.099,8.078 9.993,8.078 C8.888,8.078 7.992,7.147 7.992,5.998 C7.992,4.849 8.888,3.918 9.993,3.918 C11.099,3.918 11.995,4.849 11.995,5.998 Z"/>
                    </svg>
                </span>
                <span class="resume-card__number">
                    {{ViewCount}}
                </span>
                <span class="resume-card__text">
                    просмотра
                </span>
            </div>
        </div>
    </div>
</template>

<script>

    import Dropdown from 'bp-vuejs-dropdown'
    import axios from 'axios';

    export default {
        name: "AppVacancyCard",
        components: {
            Dropdown
        },
        props: ['cardId',
                'cardTitle',
                'cardSalary',
                'cardUrl',
                'cardEdit',
                'cardDelate',
                'cardCites',
                'feedbackLink',
                'hitCount',
                'ViewCount',
                'feedbackCount'],

        methods: {
            deleteCard(){
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
