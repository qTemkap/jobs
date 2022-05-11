<template>
    <div>
        <div v-if="!verify">
            <h2 class="auth-title">
                Восстановление пароля
            </h2>

            <form class="auth-form" @submit.prevent="recoverySubmit">
                <div class="input-group">
                    <label>
                        Email <span class="req">*</span>:
                    </label>
                    <input type="email"
                           placeholder="Введите Ваш e-mail для восстановления пароля"
                           v-model="email"
                           v-validate="'required|email'"
                           name="email"
                           class="" :class="{ 'is-invalid': submitted && errors.has('email') }"/>
                </div>

                <div class="auth-recovery-footer">
                    <button :disabled="loading" type="submit" class="btn btn-green">
                        Восстановить пароль
                    </button>
                    <a href="/login" class="link-dots">Назад к авторизации</a>
                </div>

            </form>
        </div>

        <div v-else>
            <div class="text-center">
                <h2 class="auth-title">
                    Письмо отправлено!
                </h2>

                <p class="auth-text-confirm">
                    Чтобы восстановить пароль, откройте письмо,
                    которое мы только что отправили на эл. почту
                    <a :href="'mailto:' + email" class="link-default">{{email}}</a>,
                    и нажмите в нем на кнопку «Восстановить пароль».
                </p>

                <a href="/email/resend" class="btn btn-green btn-small">
                    Отправить еще раз
                </a>

            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "AppAuthEmail",
        data(){
            return{
                loading: false,
                submitted: false,
                verify: false,
                email: '',
            }
        },
        methods: {
            recoverySubmit(){
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                this.$validator.validate().then(valid => {
                    if(valid){
                        this.loading = true;
                        axios.post('/password/email', {
                            email: this.email
                        })
                            .then(response => {
                                if(response.status === 200){
                                    this.verify = true;
                                    this.loading = false;
                                }
                            })
                            .catch(error => {
                                this.loading = false;
                                for(let errorItem in error.response.data.errors){
                                    this.errors.add({
                                        field: errorItem,
                                        msg: error.response.data.errors[errorItem]
                                    });
                                }
                            });
                    }
                });
            },
        }
    }
</script>

<style scoped>
    .btn-green{
        padding: 0 30px;
        margin-bottom: 25px;
    }
</style>
