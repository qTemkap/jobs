<template>
    <div class="alert-wrapper">
        <div class="alert alert-danger" v-for="error in uniqueErrors()">
            {{error}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppError",
        methods: {
            uniqueErrors(){
                let errors = this.$store.getters.errors;
                if(errors !== null &&errors.length !== 0){
                    let uniqueArray = errors.map((item) => {
                        return item.msg;
                    });
                    return [ ...new Set(uniqueArray) ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
