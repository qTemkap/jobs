<template>
    <div v-if="!verify">
        <form class="auth-form" @keypress.enter.prevent @submit.prevent="jobSeekerSubmit">
            <div class="input-group">
                <label>
                    Имя <span class="req">*</span>:
                </label>
                <input type="text"
                       placeholder="Например, Иван"
                       v-model="jobSeekerName"
                       v-validate="'required'"
                       name="name"
                       :class="{ 'is-invalid': submitted && errors.has('name') }"/>
            </div>

            <div class="input-group">
                <label>
                    Фамилия <span class="req">*</span>:
                </label>
                <input type="text"
                       placeholder="Например, Иванов"
                       v-model="jobSeekerLastName"
                       v-validate="'required'"
                       name="last_name"
                       :class="{ 'is-invalid': submitted && errors.has('last_name') }"/>
            </div>
            <div class="input-group">
                <label>
                    Email <span class="req">*</span>:
                </label>
                <input type="email"
                       placeholder="Например, qwerty@gmail.com"
                       v-model="jobSeekerEmail"
                       v-validate="'required|email'"
                       name="email"
                       class="" :class="{ 'is-invalid': submitted && errors.has('email') }"/>
            </div>
            <div class="input-group">
                <label>
                    Пароль <span class="req">*</span>:
                </label>
                <input type="password"
                       placeholder="Ваш пароль"
                       v-model="jobSeekerPassword"
                       v-validate="{required: true, min: 5 }"
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
                       v-model="jobSeekerConfirmPassword"
                       v-validate="'required|confirmed:password'"
                       name="password_confirmation"
                       data-vv-as="jobSeekerConfirmPassword"
                       class="" :class="{ 'is-invalid': submitted && errors.has('password_confirmation') }"/>
            </div>

            <button :disabled="loading"  type="submit" class="btn btn-green">
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
            <a :href="'mailto:' + jobSeekerEmail" class="link-default">{{jobSeekerEmail}}</a>
            было направлено письмо с активацией,
            для продолжения работы на сайте
            выполните действия указанные в письме.
        </p>

        <a href="/email/resend" class="btn btn-green btn-small">
            Отправить еще раз
        </a>
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: "AppAuthJobSeeker",
        props: ['data'],
        data(){
            return{
                submitted: false,
                verify: false,
                loading: false,

                jobSeekerName: this.data.name,
                jobSeekerLastName: this.data.surname,
                jobSeekerEmail: this.data.email,
                jobSeekerPassword: '',
                jobSeekerConfirmPassword: '',
            }
        },
        methods: {
            jobSeekerSubmit(){
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                this.$validator.validate().then(valid => {
                    if (valid) {
                        this.loading = true;
                        axios.post('/register', {
                            role: 'job_seeker',
                            name: this.jobSeekerName,
                            surname: this.jobSeekerLastName,
                            email: this.jobSeekerEmail,
                            password: this.jobSeekerPassword,
                            password_confirmation: this.jobSeekerConfirmPassword,
                        })
                            .then(response => {
                                if (response.status === 200) {
                                    this.verify = true;
                                    this.loading = false;
                                    this.$store.dispatch('showVerify', true);
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
                            });
                    }
                });
            },
            repeatSubmit(){
                axios.post('/register', {
                    email: this.jobSeekerEmail,
                })
            }

        }
    }
</script>
<style scoped lang="sass">
    .btn-green
        padding: 0 75px

</style>
