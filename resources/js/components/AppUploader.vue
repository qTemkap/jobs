<template>
    <div>
        <div class="profile__photo">
            <h3 class="profile__title">
                <template v-if="company">
                    Логотип
                </template>
                <template v-else>
                    Фотография
                </template>
            </h3>

            <div class="avatar-wrapper">
                 <template v-if="image !== null">
                     <img :src="image"
                        class="img-fluid img-profile"
                        alt="profile"
                       >
                </template>

                <template v-else>

                    <template v-if="company">
                        <img src="../../../resources/img/profile-company.jpg"
                             class="img-fluid img-profile"
                             alt="profile"
                        >
                    </template>

                    <template v-else>
                        <img src="../../../resources/img/profile-user.jpg"
                             class="img-fluid img-profile"
                             alt="profile"
                        >
                    </template>

                </template>

                 <button class="clear-photo" @click="removeImage()" v-if="image !== null">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10px" height="10px"><path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"></path></svg>
                 </button>
            </div>

            <button class="btn btn-green btn-green-photo" @click="showModal('edit-photo')">

                <template v-if="company">
                     Загрузить логотип
                </template>
                <template v-else>
                     Загрузить фото
                </template>
            </button>

        </div>

        <modal class="modal modal-edit-photo" name="edit-photo">
            <div class="prev" @click="hideModal('edit-photo')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 6 10"
                        width="6px" height="10px">
                    <path fill-rule="evenodd" fill="rgb(43, 83, 198)"
                          d="M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"/>
                </svg>
                Назад
            </div>
            <button class="close" @click="hideModal('edit-photo')">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        width="20px" height="20px">
                    <path fill-rule="evenodd" fill="rgb(0, 0, 0)"
                          d="M11.446,10.001 L20.009,18.567 L18.562,20.015 L9.998,11.450 L1.435,20.015 L-0.013,18.567 L8.550,10.001 L-0.013,1.436 L1.435,-0.013 L9.998,8.553 L18.562,-0.013 L20.009,1.436 L11.446,10.001 Z"/>
                </svg>
            </button>

            <h2 class="page-title">
                <template v-if="company">
                    Ваш логотип
                </template>
                <template v-else>
                    Ваша фотография
                </template>
            </h2>

            <div class="modal-content">
                <form @keypress.enter.prevent @submit.prevent="editPhotoSubmit" ref="avatarForm">

                    <div class="image-download border" v-if="!uploadImage">
                        <img src="/images/download-image.png" class="img-fluid"/>

                        <div class="image-download__text">
                             <template v-if="company">
                                Пожалуйста, выберите свой логотип
                            </template>
                            <template v-else>
                                Пожалуйста, выберите свою фотографию,
                                лучше всего — лицо в анфас.
                            </template>
                        </div>

                        <label class="btn download-btn">
                            <input type="file" @change="upload($event)">
                            Выбрать
                        </label>
                    </div>

                    <div v-else>
                        <clipper-fixed class="my-clipper" ref="clipper" :src="uploadImage">
                            <div class="placeholder" slot="placeholder">No image</div>
                        </clipper-fixed>
                    </div>

                    <div class="btn-wrapper">
                        <button type="submit" class="btn btn-green" @click="getResult">Сохранить</button>
                        <span class="or">
                            или
                        </span>
                        <button type="button" class="link-default link-default__red" @click="hideModal('edit-photo')">
                            Отменить
                        </button>
                    </div>
                </form>
            </div>

        </modal>
    </div>

</template>

<script>

import { clipperFixed } from 'vuejs-clipper'
import axios from 'axios';

export default {
    name: "AppUploader",
        components: {
            clipperFixed
        },

    props: {
        img: {
            type: String,
            default: null,
        },
        request: {
            type: String,
            default: null,
        },
        delete: {
            type: String,
            default: null,
        },
        company: {
            type: Boolean,
            default: false
        }

    },
    data(){
        return {
            image: this.img,
            uploadImage: null
        }
    },
    created () {

    },
    methods: {
        showModal(modalName){
            this.uploadImage = null,
            this.$modal.show(modalName);
        },
        hideModal(modalName){
            this.uploadImage = null,
            this.$modal.hide(modalName);
        },

        deletePhoto(){
            axios.delete(this.delete)
                .then(response => {
                    if (response.status === 200) {
                        this.hideModal('edit-photo');
                        if(!this.company) {
                            document.querySelector('.header__auth-image').src = '/images/auth.svg';
                        } else {
                             this.$store.commit('SET_COMPANY_LOGO', null);
                        }
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

        editPhotoSubmit() {
            this.submitted = true;
            this.$store.dispatch('addErrors', this.$validator.errors.items);
            const formData = new FormData();
            formData.append('_method', 'PUT');

            if(this.uploadImage !== null && !this.company){
                formData.append('avatar', this.dataURItoBlob(this.uploadImage), 'avatar.jpg');
            }
            else if(this.uploadImage !== null && this.company){
                formData.append('image', this.dataURItoBlob(this.uploadImage)), 'company.jpg';
            }

            this.$validator.validate().then(valid => {
                if (valid) {
                    axios.post(this.request, formData)
                        .then(response => {
                            if (response.status === 200) {
                                if(this.company){
                                    this.image = response.data.data;
                                    this.$store.commit('SET_COMPANY_LOGO', response.data.data);
                                } else {
                                    this.image = response.data.data.avatar;
                                    document.querySelector('.header__auth-image').src = response.data.data.avatar_thumb;
                                }

                                this.uploadImage = null;
                                this.hideModal('edit-photo');
                                this.saved = true;
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

        // methods show avatar after change input type file
        getResult() {
            const canvas = this.$refs.clipper.clip();//call component's clip method
            this.uploadImage = canvas.toDataURL("image/jpg", 1);
        },
        upload(e){
            if (e.target.files.length !== 0) {
                if(this.uploadImage) URL.revokeObjectURL(this.uploadImage);
                this.uploadImage = window.URL.createObjectURL(e.target.files[0]);
            }
        },
        dataURItoBlob(dataURI) {
            if(dataURI === null){
                return null
            }
            // convert base64/URLEncoded data component to raw binary data held in a string
            let byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0)
                byteString = atob(dataURI.split(',')[1]);
            else
                byteString = unescape(dataURI.split(',')[1]);

            // separate out the mime component
            let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

            // write the bytes of the string to a typed array
            let ia = new Uint8Array(byteString.length);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ia], {type:mimeString});
        },

        removeImage() {
            this.image = null;
            this.uploadImage = null;
            this.deletePhoto();
        },
    },
}
</script>


