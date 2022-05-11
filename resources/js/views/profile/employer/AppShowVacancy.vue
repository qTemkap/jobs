<template>
    <div>
        <div class="main-wrapper vacancy-preview">
            <div class="profile__block profile__block-edit no-print">
                <a :href="`/vacancy/edit/${parseData.data.id}`" class="btn btn-green btn-xs">
                    Редактировать
                </a>
                <dropdown class="dropdown resume-dropdown">
                    <template slot="btn">Еще</template>
                    <template slot="body">
                        <ul class="ul-reset dropdown__list">
                            <li>
                                 <a :href="'../job/print/' + parseData.data.id" class="link-default">Распечатать</a>
                            </li>
                        </ul>
                    </template>
                </dropdown>
            </div>

            <div class="profile__block profile__block-info">
                <div class="profile__large">
                    <div class="info-date">
                        {{parseData.data.published_at}}
                        <span>Опубликовано {{parseData.data.past_time}} назад</span>
                    </div>

                    <h1 class="info-title">
                        {{parseData.data.position}}
                    </h1>

                    <div class="info-salary">
                        {{parseData.data.salary }} руб.
                        <span>
                           {{ parseData.data.salary_comment }}
                        </span>
                    </div>

                    <div class="info-company-name">
                        <span>{{ parseData.company.name}}</span>
                        <svg width="16" height="19" viewBox="0 0 16 19" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L0 3.45455V8.63636C0 13.429 3.41333 17.9118 8 19C12.5867 17.9118 16 13.429 16 8.63636V3.45455L8 0ZM6.22222 13.8182L2.66667 10.3636L3.92059 9.14648L6.22222 11.3735L12.0806 5.68273L13.3333 6.90909L6.22222 13.8182Z"
                                  fill="black"/>
                        </svg>
                    </div>
                </div>

                <div class="profile__small">
                    <div class="main-info__photo">
                        <template v-if="parseData.company.logo_thumb === null">
                            <img src="/images/vacancy-preview.jpg" class="img-fluid" alt="">
                            <div v-if="parseData.data.video !== ''">
                                <a @click="showVideo()" class="player_btn">Видео резюме</a>
                            </div>
                        </template>
                        <template v-else>
                            <img :src="parseData.company.logo_thumb" class="img-fluid" alt="">
                            <div v-if="parseData.data.video !== ''">
                                <a @click="showVideo()" class="player_btn">Видео резюме</a>
                            </div>
                        </template>
                    </div>
                </div>

            </div>


            <div class="profile__block profile__block-data">
                <div class="user-data">

                    <div class="user-data__item">
                        <p>
                            Город:
                        </p>
                        <p>
                            <span class="location">
                                <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 9 11"
                                        width="11px" height="13px">
                                    <path fill-rule="evenodd" fill="rgb(0, 146, 215)"
                                          d="M4.499,11.001 L8.100,6.549 C9.450,5.008 9.255,2.475 7.681,1.128 C6.831,0.400 5.701,-0.001 4.499,-0.001 C3.296,-0.001 2.166,0.400 1.316,1.128 C-0.257,2.474 -0.453,5.007 0.892,6.543 L4.499,11.001 ZM4.540,2.410 C5.446,2.410 6.183,3.041 6.183,3.817 C6.183,4.592 5.446,5.223 4.540,5.223 C3.634,5.223 2.897,4.592 2.897,3.817 C2.897,3.041 3.634,2.410 4.540,2.410 Z"/>
                                </svg>
                                 {{ parseData.data.city }}
                            </span>
<!--                            <span class="location">-->
<!--                                <svg width="16px" height="13px" viewBox="0 0 25 19" fill="none"-->
<!--                                     xmlns="http://www.w3.org/2000/svg">-->
<!--                                    <path fill-rule="evenodd" clip-rule="evenodd"-->
<!--                                          d="M24.55 16.7664H22.9771L18.0938 0L12.5 10.2283L6.51875 0.122444L2.02292 16.7664H0.45L0 19H5.97292L8.31875 10.8384L12.5708 18.0162L12.5958 18.0606L12.6229 18.0162L16.6812 10.8384L19.0271 19H25L24.55 16.7664Z"-->
<!--                                          fill="#D72828"/>-->
<!--                                </svg>-->
<!--                                Текстильщики, Новохохловская, Москва, Волжский бульвар, 11-->
<!--                            </span>-->
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Вид занятости:
                        </p>
                        <p>
                            {{joinTypes}}
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Контактное лицо:
                        </p>
                        <p>
                            {{ parseData.data.contact_name }}
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Телефон:
                        </p>
                        <p>
                            <a :href="`tel:${parseData.data.contact_phone_href}`" class="link-default">
                                {{ parseData.data.contact_phone }}
                            </a>
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            E-mail:
                        </p>
                        <p>
                            <a :href="`mailto:${parseData.data.contact_email}`" class="link-default">
                                {{ parseData.data.contact_email }}
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div class="profile__block profile__block-text" v-if="parseData.data.description !== null">
                <h2>
                    Описание вакансии
                </h2>
                <span v-html="parseData.data.description"></span>
            </div>

            <div class="profile__block profile__block-edit no-print">
                <div class="d-flex d-flex-wrapp-sm">
                     <a :href="`/vacancy/edit/${parseData.data.id}`" class="btn btn-green btn-xs">
                        Редактировать
                    </a>
                    <div class="share-block">
                        <span class="share-block__title">
                            Поделиться:
                        </span>
                        <yandex-share :services="['vkontakte','facebook','odnoklassniki']" />
                    </div>
                </div>
                <dropdown class="dropdown resume-dropdown">
                    <template slot="btn">Еще</template>
                    <template slot="body">
                        <ul class="ul-reset dropdown__list">
                            <li>
                                 <a :href="'../job/print/' + parseData.data.id" class="link-default">Распечатать</a>
                            </li>
                        </ul>
                    </template>
                </dropdown>
            </div>

        </div>
        <modal class="modal" name="showVideo">
            <div class="prev" @click="hideModal()">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 10"
                        width="6px" height="10px">
                    <path fill-rule="evenodd" fill="rgb(43, 83, 198)"
                          d="M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"/>
                </svg>
                Назад
            </div>
            <button class="close" @click="hideModal()">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        width="20px" height="20px">
                    <path fill-rule="evenodd" fill="rgb(0, 0, 0)"
                          d="M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"/>
                </svg>
            </button>

            <div class="modal-content">
                <iframe width="560" height="600" :src="`https://www.youtube.com/embed/${parseData.data.video}`" frameborder="0" allowfullscreen></iframe>
            </div>
        </modal>
    </div>
</template>

<script>

    import Dropdown from 'bp-vuejs-dropdown'
    import YandexShare from '@cookieseater/vue-yandex-share';
    export default {
        name: "AppShowVacancy",
        components: {
            Dropdown,
            YandexShare
        },
        props: ['data'],
        data() {
            return {
                submitted: false,
                loading: false,
                parseData: null,
            }
        },

        beforeMount() {
            this.parseData = JSON.parse(this.data);
            this.$store.commit('SET_COMPANY_LOGO', this.parseData.company.logo);
        },

        methods: {
            printPage(){
                window.print();
            },
            showVideo(){
                this.$modal.show('showVideo');
            },
            hideModal(){
                this.$modal.hide('showVideo');
            },
        },

        computed: {
            joinTypes(){
                const types = [];
                this.parseData.data.employment_types.forEach((type) => {
                    types.push(type.name.toLowerCase())
                });
                return types.join(', ')
            },
        }
    }
</script>

<style scoped lang="sass">

</style>
