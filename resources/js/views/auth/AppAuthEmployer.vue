<template>
    <div>
        <div v-if="!verify">
            <form class="auth-form" @keypress.enter.prevent @submit.prevent="employerSubmit">
                <div class="input-group">
                    <label>
                        Ваше имя<span class="req">*</span>:
                    </label>
                    <input type="text"
                           placeholder="Например, Иван"
                           v-model="employerName"
                           v-validate="'required'"
                           name="name"
                           :class="{ 'is-invalid': submitted && errors.has('name') }"/>
                </div>

                <div class="input-group">
                    <label>
                        Ваша фамилия <span class="req">*</span>:
                    </label>
                    <input type="text"
                           placeholder="Например, Иванович"
                           v-model="employerSurname"
                           v-validate="'required'"
                           name="surname"
                           :class="{ 'is-invalid': submitted && errors.has('surname') }"/>
                </div>

                <div class="input-group">
                    <label>
                        Email <span class="req">*</span>:
                    </label>
                    <input type="email"
                           placeholder="Например, qwerty@gmail.com"
                           v-model="employerEmail"
                           v-validate="'required|email'"
                           name="email"
                           class="" :class="{ 'is-invalid': submitted && errors.has('email') }"/>
                </div>

                <div class="input-group">
                    <label>
                        Телефон <span class="req">*</span>:
                    </label>
                    <input type="text"
                           placeholder="Например, +7 (888) 777-66-55"
                           v-model="employerPhone"
                           v-validate="'required'"
                           name="phone"
                           :class="{ 'is-invalid': submitted && errors.has('phone') }"/>

                </div>

                <div class="input-group">
                    <label>
                        Тип компании <span class="req">*</span>:
                    </label>
                    <v-select
                        placeholder="Выберите значение"
                        name="company_type"
                        v-validate="'required'"
                        v-model="employerType"
                        label="name"
                        class="v-select__default" :class="{ 'is-invalid': submitted && errors.has('company_type') }"
                        :options="companyType"
                    ></v-select>
                </div>

                <div class="input-group">
                    <label>
                        Название компании <span class="req">*</span>:
                    </label>
                    <input type="text"
                           placeholder="Например, EDHunter.ру"
                           v-model="employerNameCompany"
                           v-validate="'required'"
                           name="company_name"
                           :class="{ 'is-invalid': submitted && errors.has('company_name') }"/>
                </div>

                <div class="input-group">
                    <label>
                        Город <span class="req">*</span>:
                    </label>

                    <autocomplete
                        placeholder="Например, Москва"
                        v-validate="{required: true}"
                        name="city"
                        v-model="employerCity"

                        :class="{ 'is-invalid': submitted && errors.has('city') }"
                        :source="cityList">
                    </autocomplete>
                </div>

                <div class="input-group">
                    <label>
                        Пароль <span class="req">*</span>:
                    </label>
                    <input type="password"
                           placeholder="Ваш пароль"
                           v-model="employerPassword"
                           v-validate="{required: true, min: 6 }"
                           name="password"
                           ref="password"
                           class="" :class="{ 'is-invalid': submitted && errors.has('password') }"/>
                </div>

                <div class="input-group">
                    <label>
                        Подтвердите пароль <span class="req">*</span>:
                    </label>

                    <input type="password"
                           placeholder="Подтвердите ваш пароль"
                           v-model="employerConfirmPassword"
                           v-validate="'required|confirmed:password'"
                           name="password_confirmation"
                           data-vv-as="password"
                           class="" :class="{ 'is-invalid': submitted && errors.has('password_confirmation') }"/>
                </div>

                <button type="submit" :disabled="loading" class="btn btn-green">
                    Регистрация
                </button>
            </form>
        </div>

        <div class="text-center" v-else>
            <h2 class="auth-title">
                Подтвердите регистрацию
            </h2>

            <p class="auth-text-confirm">
                На Ваш E-mail
                <a :href="'mailto:' + employerEmail" class="link-default">{{employerEmail}}</a>
                было направлено письмо с активацией,
                для продолжения работы на сайте
                выполните действия указанные в письме.
            </p>

            <a href="/email/resend" class="btn btn-green btn-small">
                Отправить еще раз
            </a>
        </div>
    </div>
</template>

<script>

    import vSelect from 'vue-select';
    import axios from 'axios';
    import Autocomplete from 'vuejs-auto-complete';

    export default {
        name: "AppAuthEmployer",
        components: {
            vSelect,
            Autocomplete
        },
        props: ['data'],
        data() {
            return {
                submitted: false,
                verify: false,
                loading: false,

                employerSurname: this.data.surname,
                employerName: this.data.name,
                employerType: '',
                employerNameCompany: '',
                employerCity: '',
                employerEmail: this.data.email,
                employerPhone: '',
                employerPassword: '',
                employerConfirmPassword: ''
            }
        },
        beforeMount() {
            this.$store.dispatch('GET_CITY');
            this.$store.dispatch('GET_COMPANY_TYPE');
        },

        methods: {
            employerSubmit() {
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                this.$validator.validate().then(valid => {
                    if (valid) {
                        this.loading = true;
                        axios.post('/register', {
                            role: 'employer',
                            name: this.employerName,
                            surname: this.employerSurname,
                            company_type: this.employerType.id,
                            company_name: this.employerNameCompany,
                            city: this.employerCity,
                            email: this.employerEmail,
                            phone: this.employerPhone,
                            password: this.employerPassword,
                            password_confirmation: this.employerConfirmPassword
                        })
                            .then(response => {
                                if (response.data.status === 'redirect') {
                                    this.verify = true;
                                    this.$store.dispatch('showVerify', true);
                                    this.loading = false;
                                }
                            })
                            .catch(error => {
                                this.loading = false;
                                for (let errorItem in error.response.data.errors) {
                                    this.errors.add({
                                        field: errorItem,
                                        msg: error.response.data.errors[errorItem][0]
                                    });
                                }
                            })
                    }
                });
            },


        },

        computed: {
            cityList() {
                return this.$store.getters.CITY
            },
            companyType() {
                return this.$store.getters.COMPANY_TYPE
            },
        },

    }
</script>

<style scoped lang="sass">
    .btn-green
        padding: 0 75px

        .autocomplete
            margin-bottom: 0
</style>
