<template>
    <div class="resume-preview">
        <div class="profile__block profile__block-edit no-print" >
            <button type="button" class="btn btn-green btn-xs" @click="showModal('send-vacancy')" v-if="parseData.may_respond_vacancy">
                Сохранить в отклики
            </button>
            <button type="button" class="btn btn-green btn-xs" @click="showModal('offer-vacancy')" v-if="parseData.may_respond_vacancy">
                Предложить вакансию
            </button>
            <dropdown class="dropdown resume-dropdown">
                <template slot="btn">Еще</template>
                <template slot="body">
                    <ul class="ul-reset dropdown__list">
                        <li>
                            <!-- <button @click="printPage()" class="link-default">Распечатать</button> -->
                            <a :href="`/resume/print/${this.parseData.summary.id}`" class="link-default">Распечатать</a>
                        </li>
                    </ul>
                </template>
            </dropdown>
        </div>

        <div class="profile__block profile__block-info">
            <div class="profile__large">

                <div class="info-date">
                    {{parseData.summary.created_at}}
                </div>

                <h1 class="info-title">
                    {{parseData.full_name}}
                </h1>

                <div class="info-salary">
                    {{parseData.summary.salary}} руб.
                    <span v-if="parseData.summary.salary_comment">
                       {{ parseData.summary.salary_comment }}
                    </span>
                </div>

                <div class="user-data" v-if="parseData.hidePersonalData === false">

                    <div class="user-data__item" >
                        <p>
                            Город:
                        </p>
                        <p>
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 9 11"
                                    width="9px" height="11px">
                                <path fill-rule="evenodd" fill="rgb(0, 146, 215)"
                                      d="M4.499,11.001 L8.100,6.549 C9.450,5.008 9.255,2.475 7.681,1.128 C6.831,0.400 5.701,-0.001 4.499,-0.001 C3.296,-0.001 2.166,0.400 1.316,1.128 C-0.257,2.474 -0.453,5.007 0.892,6.543 L4.499,11.001 ZM4.540,2.410 C5.446,2.410 6.183,3.041 6.183,3.817 C6.183,4.592 5.446,5.223 4.540,5.223 C3.634,5.223 2.897,4.592 2.897,3.817 C2.897,3.041 3.634,2.410 4.540,2.410 Z"/>
                            </svg>
                            {{parseData.personalData.city}}
                        </p>
                    </div>


                    <div class="user-data__item">
                        <p>
                            Возраст:
                        </p>
                        <p>
                            {{parseData.personalData.age}}
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Email:
                        </p>
                        <p>
                            <a :href="`mailto:${parseData.personalData.email}`"></a>{{parseData.personalData.email}}
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Телефон:
                        </p>
                        <p>
                            <a :href="`tel:${parseData.personalData.phone}`"></a>{{parseData.personalData.phone}}
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
                            <a @click="showModalVideo()" class="player_btn">Видео резюме</a>
                        </div>
                    </template>
                    <template v-else>
                        <img :src="parseData.avatar" class="img-fluid" alt="">
                        <div v-if="parseData.summary.video !== ''">
                            <a @click="showModalVideo()" class="player_btn">Видео резюме</a>
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
                        с {{experience.worked_with}} по {{experience.worked_to}} ({{experience.duration_of_training}})
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
                <div class="up_files" v-if="certificate.size != '' &&  certificate.path != undefined">
                    <a :href="`${ certificate.path }`" download>Скачать файл</a>
                    <span class="small-text">(размер {{ certificate.size }}b)</span>
                </div>
            </div>
        </div>

        <div class="profile__block profile__block-text" v-if="parseData.summary.information !== null">
            <h2>
                Дополнительная информация
            </h2>
            <span v-html="parseData.summary.information"></span>
        </div>

        <div class="profile__block profile__block-edit no-print" >

            <div class="d-flex d-flex-wrapp-sm">
                 <button type="button" v-if="parseData.may_respond_vacancy" class="btn btn-green btn-xs" @click="showModal('send-vacancy')">
                    Сохранить в отклики
                </button>
                <div class="share-block">
                    <span class="share-block__title">
                        Поделиться:
                    </span>
                    <yandex-share :services="['vkontakte','facebook','odnoklassniki']" />
                </div>
            </div>

            <dropdown class="dropdown resume-dropdown" v-if="parseData.may_respond_vacancy">
                <template slot="btn">Еще</template>
                <template slot="body">
                    <ul class="ul-reset dropdown__list">
                        <li>
                            <button @click="printPage()" class="link-default">Распечатать</button>
                        </li>
                    </ul>
                </template>
            </dropdown>
        </div>

        <modal class="modal" name="send-vacancy">
            <div class="prev" @click="hideModal('send-vacancy')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 10"
                        width="6px" height="10px">
                    <path fill-rule="evenodd" fill="rgb(43, 83, 198)"
                          d="M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"/>
                </svg>
                Назад
            </div>
            <button class="close" @click="hideModal('send-vacancy')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        width="20px" height="20px">
                    <path fill-rule="evenodd" fill="rgb(0, 0, 0)"
                          d="M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"/>
                </svg>
            </button>

            <h2 class="page-title">
                Сохранить в отклики
            </h2>

            <div class="modal-content">
                <form @keypress.enter.prevent @submit.prevent="sendVacancy">

                    <div v-if="vacancy !== null && vacancy.length !== 0">
                        <div class="input-group"
                             v-if="vacancyAlreadySent() !== undefined && vacancyAlreadySent().length !== 0">
                            <label style="margin-bottom: 20px;">
                                Резюме которые вы уже отправили <span class="req">*</span>:
                            </label>

                            <label class="" style="margin-bottom: 8px;">
                            <div class="vacancy-item" v-for="(vacancy, index) in vacancyAlreadySent()" :key='index'>
                              <span>
                                {{vacancy.position}}
                              </span>
                                <a :href="vacancy.show" class="link-default" style="margin-left: 8px; margin-top: 2px;">Посмотреть</a>
                            </div>
                            </label>

                            <div v-if="vacancyCanSend() !== undefined && vacancyCanSend().length === 0">
                                <label class="text-danger m-b-0 m-t-10">
                                    У вас больше нет вакансий для отправки
                                </label>
                            </div>

                        </div>
                        <div class="input-group" v-if="vacancyCanSend() !== undefined && vacancyCanSend().length !== 0">
                            <label style="margin-bottom: 20px;">
                                Выберете резюме для отправки <span class="req">*</span>:
                            </label>
                            <div class="vacancy-item" v-for="(vacancy, index) in vacancyCanSend()" :key='index'>
                                <label class="radio" style="margin-bottom: 8px;">
                                    <input type="radio"
                                        name="resumeList"
                                        :id="vacancy.id"
                                        v-validate="'required'"
                                        :value="vacancy.id"
                                        v-model="vacancyId"
                                    >
                                    <span :class="{ 'is-invalid': submitted && errors.has('vacancyList') }">
                                        {{vacancy.position}}
                                    </span>
                                </label>
                                <a :href="vacancy.show" class="link-default" style="margin-left: 8px; margin-top: 2px;">Посмотреть</a>

                            </div>

                        </div>
                    </div>

                    <div v-else>
                        <p>У вас нет вакансий для отправки <a href="/vacancy/create" class="link-default">Создать
                            вакансию</a></p>
                    </div>

                    <div class="btn-wrapper">
                        <button type="submit" class="btn btn-green">
                            Отправить
                        </button>
                        <span class="or">
                            или
                        </span>
                        <button type="button" class="link-default link-default__red" @click="hideModal('send-vacancy')">
                            Отменить
                        </button>
                    </div>
                </form>
            </div>

        </modal>
        <modal class="modal" name="showVideo">
            <div class="prev" @click="hideModal('showVideo')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 10"
                        width="6px" height="10px">
                    <path fill-rule="evenodd" fill="rgb(43, 83, 198)"
                          d="M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"/>
                </svg>
                Назад
            </div>
            <button class="close" @click="hideModal('showVideo')">
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
        <modal class="modal" name="offer-vacancy">
            <div class="prev" @click="hideModal('offer-vacancy')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 10"
                        width="6px" height="10px">
                    <path fill-rule="evenodd" fill="rgb(43, 83, 198)"
                          d="M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"/>
                </svg>
                Назад
            </div>
            <button class="close" @click="hideModal('offer-vacancy')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        width="20px" height="20px">
                    <path fill-rule="evenodd" fill="rgb(0, 0, 0)"
                          d="M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"/>
                </svg>
            </button>

            <h2 class="page-title">
                Предложить вакансию
            </h2>

            <div class="modal-content">
                <form @keypress.enter.prevent @submit.prevent="offerVacancy">

                    <div v-if="vacancyForOffer !== null && vacancyForOffer.length !== 0">
                        <div class="input-group"
                             v-if="vacancyForOfferAlreadySent() !== undefined && vacancyForOfferAlreadySent().length !== 0">
                            <label style="margin-bottom: 20px;">
                                Вакансии которые вы уже отправили <span class="req">*</span>:
                            </label>

                            <label class="" style="margin-bottom: 8px;">
                                <div class="vacancy-item" v-for="(vacancy, index) in vacancyForOfferAlreadySent()" :key='index'>
                              <span>
                                {{vacancy.position}}
                              </span>
                                    <a :href="vacancy.show" class="link-default" style="margin-left: 8px; margin-top: 2px;">Посмотреть</a>
                                </div>
                            </label>

                            <div v-if="vacancyForOfferCanSend() !== undefined && vacancyForOfferCanSend().length === 0">
                                <label class="text-danger m-b-0 m-t-10">
                                    У вас больше нет вакансий для отправки
                                </label>
                            </div>

                        </div>
                        <div class="input-group" v-if="vacancyForOfferCanSend() !== undefined && vacancyForOfferCanSend().length !== 0">
                            <label style="margin-bottom: 20px;">
                                Выберете вакансию для отправки <span class="req">*</span>:
                            </label>
                            <div class="vacancy-item" v-for="(vacancy, index) in vacancyForOfferCanSend()" :key='index'>
                                <label class="radio" style="margin-bottom: 8px;">
                                    <input type="radio"
                                           name="resumeList"
                                           :id="vacancy.id"
                                           v-validate="'required'"
                                           :value="vacancy.id"
                                           v-model="vacancyId"
                                    >
                                    <span :class="{ 'is-invalid': submitted && errors.has('vacancyList') }">
                                        {{vacancy.position}}
                                    </span>
                                </label>
                                <a :href="vacancy.show" class="link-default" style="margin-left: 8px; margin-top: 2px;">Посмотреть</a>

                            </div>

                        </div>
                    </div>

                    <div v-else>
                        <p>У вас нет вакансий для отправки <a href="/vacancy/create" class="link-default">Создать
                            вакансию</a></p>
                    </div>

                    <div class="btn-wrapper">
                        <button type="submit" class="btn btn-green">
                            Отправить
                        </button>
                        <span class="or">
                            или
                        </span>
                        <button type="button" class="link-default link-default__red" @click="hideModal('offer-vacancy')">
                            Отменить
                        </button>
                    </div>
                </form>
            </div>

        </modal>

    </div>
</template>

<script>

    import Dropdown from 'bp-vuejs-dropdown';
    import axios from 'axios';
    import YandexShare from '@cookieseater/vue-yandex-share';

    export default {
        name: "AppWorkerSearch",
        components: {
            Dropdown,
            YandexShare
        },
        props: ['data'],
        data() {
            return {
                submitted: false,
                parseData: null,
                vacancy: null,
                vacancyForOffer: null,
                vacancyId: null
            }
        },

        created() {
            this.parseData = JSON.parse(this.data);
          },

        methods: {
            printPage() {
                window.print();
            },

            showModal(modalName) {
                this.$modal.show(modalName);
                if (modalName == 'send-vacancy') {
                    this.takeVacancyList()
                } else if (modalName == 'offer-vacancy') {
                    this.takeVacancyListForOffer()
                }
            },
            showModalVideo() {
                this.$modal.show('showVideo');
            },
            hideModal(modalName) {
                this.$modal.hide(modalName);
            },

            takeVacancyList() {
                axios.post("/resume/response/choice", {
                    summary_id: this.parseData.summary.id,
                })
                    .then(response => {
                        if (response.status === 200) {
                            this.vacancy = response.data
                        }
                    })
                    .catch(error => {
                        for (let errorItem in error.response.data.errors) {
                            this.errors.add({
                                field: errorItem,
                                msg: error.response.data.errors[errorItem][0]
                            });
                        }
                    });
            },

            takeVacancyListForOffer() {
                axios.post("/resume/response/offer", {
                    summary_id: this.parseData.summary.id,
                })
                    .then(response => {
                        if (response.status === 200) {
                            this.vacancyForOffer = response.data
                        }
                    })
                    .catch(error => {
                        for (let errorItem in error.response.data.errors) {
                            this.errors.add({
                                field: errorItem,
                                msg: error.response.data.errors[errorItem][0]
                            });
                        }
                    });
            },

            vacancyAlreadySent() {
                if (this.vacancy !== null) {
                    return this.vacancy.filter(item => item.response_already_exist === true)
                }
            },

            vacancyCanSend() {
                if (this.vacancy !== null) {
                    return this.vacancy.filter(item => item.response_already_exist === false)
                }
            },

            vacancyForOfferAlreadySent() {
                if (this.vacancyForOffer !== null) {
                    return this.vacancyForOffer.filter(item => item.response_already_exist === true)
                }
            },

            vacancyForOfferCanSend() {
                if (this.vacancyForOffer !== null) {
                    return this.vacancyForOffer.filter(item => item.response_already_exist === false)
                }
            },

            sendVacancy() {
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                this.$validator.validate().then(valid => {
                    if (valid) {
                        axios.post("/resume/response", {
                            summary_id: this.parseData.summary.id,
                            vacancy_id: this.vacancyId,
                        })
                            .then(response => {
                                if (response.status === 200) {
                                    this.hideModal('send-vacancy');
                                }
                            })
                            .catch(error => {
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

            offerVacancy() {
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                this.$validator.validate().then(valid => {
                    if (valid) {
                        axios.post("/resume/response/offer-store", {
                            summary_id: this.parseData.summary.id,
                            vacancy_id: this.vacancyId,
                        })
                            .then(response => {
                                if (response.status === 200) {
                                    this.hideModal('offer-vacancy');
                                }
                            })
                            .catch(error => {
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
            joinTypes() {
                const types = [];
                this.parseData.summary.employment_types.forEach((type) => {
                    types.push(type.name.toLowerCase())
                });
                return types.join(', ')
            }
        }

    }
</script>

<style scoped lang="sass">
    @import "../../../../sass/default/_vars"
    .education-box
        margin-bottom: 20px
        border-bottom: 1px solid $color-border

        &:last-child
            margin-bottom: 0
            border-bottom: none

    .vacancy-item
        display: flex
        justify-content: space-between
        align-items: flex-start

</style>
