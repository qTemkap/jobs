<template>
    <div class="company-logo" v-if="companyLogo">
        <img :src="companyLogo" alt="">
    </div>
</template>

<script>
    export default {
        name: "AppCompanyLogo",
        computed: {
            companyLogo() {
                return this.$store.getters.COMPANY_LOGO
            }
        }
    }
</script>

<style scoped lang="sass">
    @import "../../../../../sass/default/mixins"

    .company-logo
        width: 300px
        height: 300px
        background-color: #fff
        display: flex
        align-items: center
        justify-content: center
        margin-bottom: 6px
        border: 1px solid #cfd6dc
        @include mq('w_1199')
            position: absolute
            right: 15px
            top: 76px
            width: 100px
            height: 100px
            z-index: 99
        @include mq('w_991')
            top: 0
        @include mq('w_575')
            width: 50px
            height: 50px
            top: 35px

    img
        width: 100%
        height: auto
        object-fit: contain
        max-height: 100%

</style>