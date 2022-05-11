<template>
    <div>
        <h2 class="auth-title">
            Восстановление пароля
        </h2>

        <form class="auth-form" @submit.prevent="resetSubmit">
            <div class="input-group">
                <label>
                    Email <span class="req">*</span>:
                </label>
                <input type="email"
                       placeholder="Введите ваш Email"
                       v-model="email"
                       v-validate="'required|email'"
                       name="email"
                       class="" :class="{ 'is-invalid': submitted && errors.has('email') }"/>
            </div>

            <div class="input-group">
                <label>
                    Новый пароль <span class="req">*</span>:
                </label>
                <input type="password"
                       placeholder="Введите новый пароль"
                       v-model="newPassword"
                       v-validate="{required: true, min: 5 }"
                       name="password"
                       ref="password"
                       class="" :class="{ 'is-invalid': submitted && errors.has('password') }"/>
            </div>

            <div class="input-group">
                <label>
                    Повторите новый пароль <span class="req">*</span>:
                </label>

                <input type="password"
                       placeholder="Подтвердите ваш пароль"
                       v-model="confirmNewPassword"
                       v-validate="'required|confirmed:password'"
                       name="password_confirmation"
                       data-vv-as="confirmNewPassword"
                       class="" :class="{ 'is-invalid': submitted && errors.has('password_confirmation') }"/>
            </div>


            <button :disabled="loading" type="submit" class="btn btn-green">
                Восстановить пароль
            </button>

            <div class="auth-recovery-footer">
                <a href="/login" class="link-dots">Назад к авторизации</a>
            </div>

        </form>
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: "AppAuthReset",
        props: ['token'],
        data(){
            return{
                submitted: false,
                loading: false,

                email: '',
                newPassword: '',
                confirmNewPassword: '',
            }
        },
        methods: {
            resetSubmit(){
                this.submitted = true;
                this.$store.dispatch('addErrors', this.$validator.errors.items);

                this.$validator.validate().then(valid => {
                    if (valid) {
                        this.loading = true;
                        axios.post('/password/reset', {
                            token: this.token,
                            email: this.email,
                            password: this.newPassword,
                            password_confirmation: this.confirmNewPassword,
                        })
                            .then(response => {
                                if (response.data.status === 'redirect') {
                                    this.loading = false;
                                    window.location.href = response.data.data.path;
                                }
                            })
                            .catch(error => {
                                this.loading = false;
                                for (let errorItem in error.response.data.errors) {
                                    this.errors.add({
                                        field: errorItem,
                                        msg: error.response.data.errors[errorItem]
                                    });
                                }
                            });
                    }
                });
            }
        }
    }
</script>

<style scoped lang="sass">
    .btn-green
        padding: 0 30px
        margin-bottom: 25px

</style>
