<template>
    <div class="row">
        <div class="col-9">
            <div class="content_box">
                <div :class="selected == 1 ? 'faq_item active' : 'faq_item'">
                    <div class="faq_title" @click="selected = 1">Сколько стоит размещение вакансии/резюме на edhh.ru?</div>
                    <div class="faq_answer">
                        <p>Создание пользовательских аккаунтов и размещение вакансии/резюме бесплатно для кандидатов и работодателей. Специфика портала предусматривает, что все вакансии и резюме относятся исключительно к научно-образовательной отрасли.</p>
                    </div>
                </div>
                <div :class="selected == 2 ? 'faq_item active' : 'faq_item'">
                    <div class="faq_title" @click="selected = 2">Могу ли я разместить свое резюме/свою вакансию на edhh.ru?</div>
                    <div class="faq_answer">
                        <p>Да, если вы ищете работу или сотрудников именно в сфере образования и науки. Чтобы разместить вакансию/резюме вы можете воспользоваться ссылкой.... или создать/войти в свой аккаунт через браузер.</p>
                    </div>
                </div>
                <div :class="selected == 3 ? 'faq_item active' : 'faq_item'">
                    <div class="faq_title" @click="selected = 3">Если  моя профессия/вакансия не относится к сфере образования, могу ли я размещать резюме/вакансию на edhh.ru?</div>
                    <div class="faq_answer">
                        <p>На сайте возможно размещение резюме и вакансий по любым профессиям, которые востребованы в образовательных и научных учреждениях. Например, вы ищите работу бухгалтера именно в образовании, или в вашу школу требуется сантехник (в обоих случаях профессия не имеет отношения к образовательной сфере, но работать сотрудник будет в учебном заведении) и т.д.</p>
                    </div>
                </div>
                <div :class="selected == 4 ? 'faq_item active' : 'faq_item'">
                    <div class="faq_title" @click="selected = 4">Я забыл логин/пароль от личного кабинета на edhh.ru, что мне делать?</div>
                    <div class="faq_answer">
                        <p>Для восстановления доступа воспользуйтесь ссылкой http://edhh.ru/password/reset или формой восстановления пароля в блоке "Вход".</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="content_box faq_form_box">
                <div class="title">Не смогли найти ответ?</div>
                <p>Вы можете задать нам вопрос, воспользовавшись формой.</p>
                <button class="btn btn-green btn-xs" @click="showModal('question')">Задать вопрос</button>
            </div>
        </div>
        <modal class="modal" name="question">
            <div class="prev" @click="hideModal('question')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 10"
                        width="6px" height="10px">
                    <path fill-rule="evenodd" fill="rgb(43, 83, 198)"
                          d="M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"/>
                </svg>
                Назад
            </div>
            <button type="button" class="close" @click="hideModal('question')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        width="20px" height="20px">
                    <path fill-rule="evenodd" fill="rgb(0, 0, 0)"
                          d="M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"/>
                </svg>
            </button>

            <h2 class="page-title">
                Опишите вопрос
            </h2>

            <div class="modal-content">
                <form @keypress.enter.prevent @submit.prevent="faqSubmit">
                    <div class="input-group">
                        <label>
                            Email <span class="req">*</span>:
                        </label>
                        <input type="email"
                               v-model="email"
                               v-validate="'required'"
                               name="email"
                               maxlength="255"
                               :class="{ 'is-invalid': submitted && errors.has('email') }"/>
                    </div>
                    <div class="input-group">
                        <label>
                            Краткое описание <span class="req">*</span>:
                        </label>

                        <textarea name="desc"
                                  v-model="desc"
                                  v-validate="'required'"
                                  maxlength="1000"
                                  :class="{ 'is-invalid': submitted && errors.has('desc') }"/>
                        </textarea>
                    </div>
                    <div class="btn-wrapper">
                        <button type="submit" class="btn btn-green">
                            Отправить
                        </button>
                        <span class="or">
                            или
                        </span>
                        <button type="button" class="link-default link-default__red" @click="hideModal('question')">
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
                        Ваш вопрос
                        успешно отправлен
                    </div>
                    <div class="complete-desc">
                        Мы обязательно ознакомимся с Вашим вопросом
                        и свяжемся с Вами в ближайшее время
                    </div>
                </div>
            </div>

        </modal>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        props: {
            request: {
                type: String,
                default: null,
            },
        },
        data() {
            return {
                selected: 0,
                submitted: false,
                email: '',
                desc: '',
            }
        },
        methods:{
            showModal(modalName){
                this.$modal.show(modalName);
            },
            hideModal(modalName){
                this.$modal.hide(modalName);
            },

            faqSubmit() {
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                this.$validator.validate().then(valid => {
                    if (valid) {
                        axios.post('/faq/question', {
                            email: this.email,
                            comment: this.desc
                        })
                            .then(response => {
                                if (response.status === 200) {
                                    this.hideModal('question');
                                    this.email = '';
                                    this.desc = '';
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
            },
        }

    }
</script>



