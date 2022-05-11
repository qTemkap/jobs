<template>
    <div class="main-wrapper resume-preview">
        <div class="profile__block profile__block-edit no-print">
            <a :href="`/summary/edit/${parseData.summary.id}`" class="btn btn-green btn-xs">
                Редактировать
            </a>
            <dropdown class="dropdown resume-dropdown">
                <template slot="btn">Еще</template>
                <template slot="body">
                    <ul class="ul-reset dropdown__list">
                        <li>
                            <!-- <button @click="printPage()" class="link-default">Распечатать</button> -->
                            <a :href="`../resume/print/${parseData.summary.id}`" class="link-default">Распечатать</a>
                        </li>
                    </ul>
                </template>
            </dropdown>
        </div>

        <div class="profile__block profile__block-info">
            <div class="profile__large">

                <div class="info-date">
                    Резюме от {{parseData.summary.created_at}}
                </div>

                <h1 class="info-title">
                    {{ parseData.full_name }}
                </h1>

                <div class="info-salary">
                    {{ parseData.summary.salary }} руб.
                </div>

                <div class="user-data" v-if="parseData.hidePersonalData === false">

                    <div class="user-data__item">
                        <p>
                            Город:
                        </p>
                        <p>
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 9 11"
                                    width="9px" height="11px">
                                <path fill-rule="evenodd"  fill="rgb(0, 146, 215)"
                                      d="M4.499,11.001 L8.100,6.549 C9.450,5.008 9.255,2.475 7.681,1.128 C6.831,0.400 5.701,-0.001 4.499,-0.001 C3.296,-0.001 2.166,0.400 1.316,1.128 C-0.257,2.474 -0.453,5.007 0.892,6.543 L4.499,11.001 ZM4.540,2.410 C5.446,2.410 6.183,3.041 6.183,3.817 C6.183,4.592 5.446,5.223 4.540,5.223 C3.634,5.223 2.897,4.592 2.897,3.817 C2.897,3.041 3.634,2.410 4.540,2.410 Z"/>
                            </svg>
                            {{  parseData.personalData.city }}
                        </p>
                    </div>


                    <div class="user-data__item">
                        <p>
                            Возраст:
                        </p>
                        <p>
                            {{ parseData.personalData.age }}
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Адрес:
                        </p>
                        <p>
                            {{ parseData.personalData.address }}
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            E-mail:
                        </p>
                        <p>
                            {{ parseData.personalData.email }}
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Телефон:
                        </p>
                        <p>
                            {{ parseData.personalData.phone }}
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
                </div>

            </div>

            <div class="profile__small">
                <div class="main-info__photo">
                    <template v-if="parseData.avatar === null">
                        <img src="/images/profile-preview-null.jpg" class="img-fluid" alt="">
                        <div v-if="parseData.summary.video !== ''">
                            <a @click="showVideo()" class="player_btn">Видео резюме</a>
                        </div>
                    </template>
                    <template v-else>
                        <img :src="parseData.avatar" class="img-fluid" alt="">
                        <div v-if="parseData.summary.video !== ''">
                            <a @click="showVideo()" class="player_btn">Видео резюме</a>
                        </div>
                    </template>
                </div>
            </div>

        </div>

         <div class="profile__block profile__block-text" v-if="parseData.experiences.length !== 0">
            <h2>
                Опыт работы
            </h2>

            <div class="education-box" v-for="(experience, index) in parseData.experiences" :key="index">
                <div class="subtitle">
                    {{experience.company}}, {{experience.city}}
                </div>

                <div class="desc">
                    {{experience.position}}
                    <span class="grey-text">
                        с {{experience.worked_with}} по {{experience.worked_to !== null ? experience.worked_to : ''}} ({{experience.duration_of_training}})
                    </span>
                </div>
            </div>
        </div>

        <div class="profile__block profile__block-text" v-if="parseData.educations.length !== 0">
            <h2>
                Образование
            </h2>

            <div class="education-box" v-for="(education, index) in parseData.educations" :key="index">
                <div class="subtitle">
                    {{education.institution}}
                </div>

                <div class="desc">
                    {{education.specialty}}, {{education.faculty}}
                    {{education.education_levels}}
                    <span class="grey-text">
                        с {{education.study_with}} по {{education.study_to}} ({{education.duration_of_training}})
                    </span>
                </div>
            </div>
        </div>

        <div class="profile__block profile__block-text" v-if="parseData.certificates.length !== 0">
            <h2>
                Портфолио сертификатов и компетенций
            </h2>

            <div class="education-box" v-for="(certificate, index) in parseData.certificates" :key="index">
                <div class="desc">
                   {{certificate.description}}
                </div>
                <div class="up_files"  v-if="certificate.size != '' &&  certificate.path != undefined">
                    <a :href="`${ certificate.path }`" download>Скачать файл</a>
                    <span class="small-text">(размер {{ certificate.size }}b)</span>
                </div>
            </div>
        </div>


        <div class="profile__block profile__block-text" v-if="parseData.summary.information !== ''">
            <h2>
                Дополнительная информация
            </h2>
            <span v-html="parseData.summary.information"></span>
        </div>

        <div class="profile__block profile__block-edit no-print">

            <div class="d-flex d-flex-wrapp-sm">
                 <a :href="`/summary/edit/${parseData.summary.id}`" class="btn btn-green btn-xs">
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
                        <!-- <li>
                            <button @click="printPage()" class="link-default">Распечатать old</button>
                        </li> -->
                        <li>
                            <!-- <button @click="printPage()" class="link-default">Распечатать</button> -->
                            <a :href="`/resume/print/${parseData.summary.id}`" class="link-default">Распечатать</a>
                        </li>
                    </ul>
                </template>
            </dropdown>

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
                <iframe width="560" height="600" :src="`https://www.youtube.com/embed/${parseData.summary.video}`" frameborder="0" allowfullscreen></iframe>
            </div>
        </modal>
    </div>
</template>

<script>

    import Dropdown from 'bp-vuejs-dropdown';
    import YandexShare from '@cookieseater/vue-yandex-share';

    export default {
        name: "AppShowResume",
        props: ['data'],
        components: {
            Dropdown,
            YandexShare
        },
        data(){
            return{
                parseData: null
            }
        },
        created() {
            this.parseData = JSON.parse(this.data);
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
                this.parseData.summary.employment_types.forEach((type) => {
                    types.push(type.name.toLowerCase())
                });
                return types.join(', ')
            },
        }
    }
</script>

<style scoped lang="sass">

</style>
