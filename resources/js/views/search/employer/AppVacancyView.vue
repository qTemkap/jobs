<template>
    <div class="vacancy-preview ">
        <div class="profile__block profile__block-edit no-print" >
            <button type="button" v-if="parseData.may_respond_vacancy" @click="showModal('send-resume')" class="btn btn-green btn-xs">
                Отправить резюме
            </button>
            <button type="button" v-if="parseData.may_respond_vacancy && parseData.favorite == 0" @click="addFavorite(parseData.vacancy.id)" class="btn btn-green btn-xs">
                Добавить в избранное
            </button>

            <dropdown class="dropdown resume-dropdown">
                <template slot="btn">Еще</template>
                <template slot="body">
                    <ul class="ul-reset dropdown__list">
                         <li>
                            <a :href="'/job/print/' + parseData.vacancy.id" class="link-default">Распечатать</a>
                        </li>
                    </ul>
                </template>
            </dropdown>
        </div>

        <div class="profile__block profile__block-info">
            <div class="profile__large">
                <div class="info-date">
                    {{parseData.vacancy.published_at}}
                    <span>Опубликовано {{parseData.vacancy.past_time}} назад</span>
                    <span v-if="parseData.favorite == 1">В избранном</span>
                </div>

                <h1 class="info-title">
                    {{parseData.vacancy.position}}
                </h1>

                <div class="info-salary">
                    {{parseData.vacancy.salary}} руб.
                    <span>
                       {{ parseData.vacancy.salary_comment }}
                    </span>
                </div>

                <div class="info-company-name">
                    <a :href="parseData.company.show" class="link-default">{{  parseData.company.name }}</a>
                </div>
            </div>

            <div class="profile__small">
                <div class="main-info__photo">
                    <template v-if="parseData.company.logo === null">
                        <img src="/images/profile-company-search.jpg" class="img-fluid" alt="">
                        <div v-if="parseData.vacancy.video !== ''">
                            <a @click="showModalVideo()" class="player_btn">Видео резюме</a>
                        </div>
                    </template>
                    <template v-else>
                        <img :src="parseData.company.logo" class="img-fluid" alt="">
                        <div v-if="parseData.vacancy.video !== ''">
                            <a @click="showModalVideo()" class="player_btn">Видео резюме</a>
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
                             {{ parseData.vacancy.city  }} {{ parseData.company.address }}
                        </span>
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
                        {{ parseData.company.contact_name  }}
                    </p>
                </div>

                <div class="user-data__item">
                    <p>
                        Телефон:
                    </p>
                    <p>
                        <a :href="`tel:${ parseData.company.contact_phone }`" class="link-default">
                            {{ parseData.company.contact_phone  }}
                        </a>
                    </p>
                </div>

                <div class="user-data__item">
                    <p>
                        E-mail:
                    </p>
                    <p>
                        <a :href="`mailto:${parseData.company.contact_email}`" class="link-default">
                            {{ parseData.company.contact_email  }}
                        </a>
                    </p>
                </div>
            </div>
        </div>

        <div class="profile__block profile__block-text"  v-if="parseData.vacancy !== ''">
            <h2>
                Описание вакансии
            </h2>

            <span  v-html="parseData.vacancy.description">  </span>
        </div>

        <div class="profile__block profile__block-edit no-print" >
            
             <div class="d-flex d-flex-wrapp-sm">
                <button type="button" v-if="parseData.may_respond_vacancy" @click="showModal('send-resume')" class="btn btn-green btn-xs">
                    Отправить резюме
                </button>
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
                            <a :href="'/job/print/' + parseData.vacancy.id" class="link-default">Распечатать</a>
                        </li>
                    </ul>
                </template>
            </dropdown>
        </div>

        <modal class="modal" name="send-resume">
            <div class="prev" @click="hideModal('send-resume')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 10"
                        width="6px" height="10px">
                    <path fill-rule="evenodd" fill="rgb(43, 83, 198)"
                          d="M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"/>
                </svg>
                Назад
            </div>
            <button class="close" @click="hideModal('send-resume')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        width="20px" height="20px">
                    <path fill-rule="evenodd" fill="rgb(0, 0, 0)"
                          d="M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"/>
                </svg>
            </button>

            <h2 class="page-title">
                Отправить резюме
            </h2>

            <div class="modal-content">
                <form @keypress.enter.prevent @submit.prevent="sendResume" >

                    <div v-if="resumes !== null && resumes.length !== 0">
                        <div class="input-group" v-if="resumeAlreadySent() !== undefined && resumeAlreadySent().length !== 0">
                            <label style="margin-bottom: 20px;">
                                Резюме которые вы уже отправили <span class="req">*</span>:
                            </label>
                            <div class="vacancy-item" v-for="(resume, index) in resumeAlreadySent()" :key='index'>
                                <label style="margin-bottom: 8px;">
                                    <span>
                                        {{resume.position}}
                                    </span>
                                </label>
                                <a :href="resume.show" class="link-default" style="margin-left: 8px; margin-top: 2px;">Посмотреть</a>
                            </div>
                        </div>
                        <div class="input-group" v-if="resumeCanSend() !== undefined && resumeCanSend().length !== 0">
                            <label style="margin-bottom: 20px;">
                                Выберете резюме для отправки <span class="req">*</span>:
                            </label>
                            <div class="vacancy-item" v-for="(resume, index) in resumeCanSend()" :key='index'>
                                <label class="radio" style="margin-bottom: 8px;"
                                   
                            >
                                <input type="radio"
                                       name="resumeList"
                                       :id="resume.id"
                                       v-validate="'required'"
                                       :value="resume.id"
                                       v-model="resumeId"
                                >
                                <span :class="{ 'is-invalid': submitted && errors.has('resumeList') }">
                              {{resume.position}}
                            </span>
                            </label>
                                <a :href="resume.show" class="link-default" style="margin-left: 8px; margin-top: 2px;">Посмотреть</a>
                            </div>
                        </div>
                    </div>

                    <div v-else>
                       <p>У вас нет резюме для отправки <a href="/summary/create" class="link-default">Создать резюме</a></p>
                    </div>

                    <div class="btn-wrapper">
                        <button type="submit" class="btn btn-green ddd">
                            Отправить
                        </button>
                        <span class="or">
                            или
                        </span>
                        <button type="button" class="link-default link-default__red" @click="hideModal('send-resume')">
                            Отменить
                        </button>
                    </div>
                </form>
            </div>

        </modal>

         <modal class="modal" name="complete">
            <div class="prev" @click="hideModal('complete')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 10"
                        width="6px" height="10px">
                    <path fill-rule="evenodd" fill="rgb(43, 83, 198)"
                          d="M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"/>
                </svg>
                Назад
            </div>
            <button class="close" @click="hideModal('complete')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        width="20px" height="20px">
                    <path fill-rule="evenodd" fill="rgb(0, 0, 0)"
                          d="M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"/>
                </svg>
            </button>

            <div class="modal-content">
                <div class="complete-block">
                    <div class="pic">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="107px" height="75px">
                            <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"
                            d="M98.375,75.006 L8.625,75.006 C3.870,75.006 -0.001,71.192 -0.001,66.500 L-0.001,8.499 C-0.001,3.807 3.870,-0.007 8.625,-0.007 L98.375,-0.007 C103.130,-0.007 107.001,3.807 107.001,8.499 L107.001,66.500 C107.001,71.192 103.130,75.006 98.375,75.006 ZM3.449,66.500 C3.449,69.314 5.771,71.604 8.625,71.604 L98.375,71.604 C101.229,71.604 103.551,69.314 103.551,66.500 L103.551,8.499 C103.551,7.807 103.407,7.148 103.153,6.545 L68.064,36.717 L87.817,54.990 C88.511,55.630 88.545,56.708 87.893,57.392 C87.552,57.749 87.096,57.930 86.634,57.930 C86.209,57.930 85.785,57.777 85.454,57.467 L65.600,39.101 C65.549,39.053 65.526,38.989 65.482,38.937 L59.835,43.793 C58.085,45.296 55.794,46.048 53.500,46.048 C51.205,46.048 48.911,45.296 47.165,43.796 L41.519,38.939 C41.476,38.991 41.454,39.054 41.403,39.101 L21.543,57.467 C21.212,57.777 20.787,57.930 20.363,57.930 C19.904,57.930 19.445,57.749 19.103,57.392 C18.451,56.708 18.486,55.630 19.179,54.990 L38.937,36.718 L3.850,6.535 C3.593,7.140 3.449,7.803 3.449,8.499 L3.449,66.500 ZM8.625,3.396 C7.737,3.396 6.914,3.637 6.184,4.027 L49.432,41.227 C51.637,43.122 55.363,43.122 57.564,41.227 L100.824,4.031 C100.091,3.639 99.265,3.396 98.375,3.396 L8.625,3.396 Z"/>
                        </svg>
                    </div>
                    <div class="complete-title">
                        Ваше резюме 
                        отправлено успешно
                    </div>
                    <div class="complete-desc">
                        Мы обязательно ознакомимся с Вашим резюме 
                        и свяжемся с Вами в ближайшее время
                    </div>
                </div>
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
                <iframe width="560" height="600" :src="`https://www.youtube.com/embed/${parseData.vacancy.video}`" frameborder="0" allowfullscreen></iframe>
            </div>
        </modal>
    </div>
</template>

<script>

    import axios from 'axios';
    import Dropdown from 'bp-vuejs-dropdown'
    import YandexShare from '@cookieseater/vue-yandex-share';

    export default {
        name: "AppWorkerSearch",
        components: {
            Dropdown,
            YandexShare
        },
        props: ['data'],

        data(){
            return {
                submitted: false,
                parseData: null,
                resumes: null,
                resumeId: null,
            }
        },

        created() {
            this.parseData = JSON.parse(this.data);
        },

        methods: {
            printPage(){
                window.print();
            },
            addFavorite(id) {
                axios.post("/vacancies/favorite/add", {
                    vacancy_id: this.parseData.vacancy.id,
                })
                    .then(response => {
                        if (response.status === 200) {
                            this.parseData.favorite = 1
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

            showModal(modalName){
                this.$modal.show(modalName);
                this.takeResumeList()
            },
            hideModal(modalName){
                this.$modal.hide(modalName);
            },
            showModalVideo() {
                this.$modal.show('showVideo');
            },

            takeResumeList(){
                axios.post("/job/resumes/choice", {
                    vacancy_id: this.parseData.vacancy.id,
                })
                    .then(response => {
                        if (response.status === 200) {
                            this.resumes = response.data
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

            resumeAlreadySent(){
                if (this.resumes !== null){
                    return this.resumes.filter(item => item.response_already_exist === true)
                }
            },

            resumeCanSend(){
                if (this.resumes !== null){
                    return this.resumes.filter(item => item.response_already_exist === false)
                }
            },

            sendResume(){
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                this.$validator.validate().then(valid => {
                    if (valid) {
                        axios.post("/job/response", {
                            vacancy_id: this.parseData.vacancy.id,
                            summary_id: this.resumeId
                        })
                            .then(response => {
                                if (response.status === 200) {
                                    this.hideModal('send-resume');
                                    this.showModal('complete')
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
            joinTypes(){
                const types = [];
                this.parseData.vacancy.employment_types.forEach((type) => {
                    types.push(type.name.toLowerCase())
                });
                return types.join(', ')
            },

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

.complete-block
    display: flex
    flex-direction: column
    align-items: center
    text-align: center
    padding: 44px 0
    .pic
        margin-bottom: 46px

.complete-title
    font-size: 33px
    line-height: 1.2
    margin-bottom: 21px
    max-width: 350px

.complete-desc
    font-size: 15px
    line-height: 1.4
    max-width: 350px



</style>