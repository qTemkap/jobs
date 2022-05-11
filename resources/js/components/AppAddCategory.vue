<template>
    <div>
        <div class="input-group m-0">
            <label class="m-b-15">
                Не нашли подходящую категорию? Добавить профессию в образовании и науке!
            </label>
            <button type="button" class="btn btn-green btn-add-category" @click="showModal('add-category')">
                Добавить
            </button>
        </div>

        <modal class="modal" name="add-category">
            <div class="prev" @click="hideModal('add-category')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 10"
                        width="6px" height="10px">
                    <path fill-rule="evenodd" fill="rgb(43, 83, 198)"
                          d="M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"/>
                </svg>
                Назад
            </div>
            <button type="button" class="close" @click="hideModal('add-category')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        width="20px" height="20px">
                    <path fill-rule="evenodd" fill="rgb(0, 0, 0)"
                          d="M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"/>
                </svg>
            </button>

            <h2 class="page-title">
                Помогите нам создать новый атлас профессий в образовании и науке
            </h2>

            <div class="modal-content">
                <form @keypress.enter.prevent @submit.prevent="addCategorySubmit" ref="categoryForm">
                     <div class="input-group">
                        <label>
                            Название категории <span class="req">*</span>:
                        </label>
                        <input type="text"
                               v-model="categoryName"
                               v-validate="'required'"
                               name="category_name"
                               maxlength="255"
                               :class="{ 'is-invalid': submitted && errors.has('category_name') }"/>
                    </div>
                    <div class="input-group">
                        <label>
                            Краткое описание <span class="req">*</span>:
                        </label>

                         <textarea name="category_desc"
                                    v-model="categoryDesc"
                                    v-validate="'required'"
                                    maxlength="1000"
                                    :class="{ 'is-invalid': submitted && errors.has('category_desc') }"/>
                        </textarea>
                    </div>
                    <div class="btn-wrapper">
                        <button type="submit" class="btn btn-green">
                            Отправить
                        </button>
                        <span class="or">
                            или
                        </span>
                        <button type="button" class="link-default link-default__red" @click="hideModal('add-category')">
                            Отменить
                        </button>
                    </div>
                </form>
            </div>

        </modal>
    </div>

</template>

<script>

import axios from 'axios';

export default {
    name: "AppAddCategory",
    props: {
        request: {
            type: String,
            default: null,
        },
    },
    data(){
        return {
           categoryName: '',
           categoryDesc: '',
           submitted: false,
        }
    },
    created () {

    },
    methods: {
        showModal(modalName){
            this.$modal.show(modalName);
        },
        hideModal(modalName){
            this.$modal.hide(modalName);
            this.categoryName = '';
            this.categoryDesc = '';
        },

        addCategorySubmit() {
            this.submitted = true;
            this.$store.dispatch('addErrors', this.$validator.errors.items);

            this.$validator.validate().then(valid => {
                if (valid) {
                    axios.post(this.request, {
                        category: this.categoryName,
                        comment: this.categoryDesc
                    })
                        .then(response => {
                            if (response.status === 200) {
                               this.hideModal('add-category');
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


    },
}
</script>

<style scope>
    .btn-add-category{
        display: inline-flex;
        width: 120px;
        font-size: 1rem;
        line-height: 1rem;
        height: 44px;
    }
</style>

