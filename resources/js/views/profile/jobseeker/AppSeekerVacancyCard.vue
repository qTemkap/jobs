<template>
    <div :class="cardDeleted != 1 ? 'search-card search-card-employer' : 'search-card search-card-employer deleted'">
        <div class="card-block">
            <div class="person">
                <a :href="cardUrl" class="title">
                    {{cardTitle}}
                </a>
                <div class="name">
                    {{cardCompany}}
                </div>
                <div class="location">
                    {{cardSave}}
                    <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 11" width="8px" height="11px"><path fill-rule="evenodd" fill="rgb(0, 146, 215)" d="M3.999,11.001 L7.200,6.549 C8.400,5.008 8.226,2.475 6.828,1.128 C6.072,0.400 5.068,-0.001 3.999,-0.001 C2.930,-0.001 1.925,0.400 1.170,1.128 C-0.229,2.474 -0.402,5.008 0.793,6.543 L3.999,11.001 ZM4.036,2.410 C4.841,2.410 5.496,3.041 5.496,3.817 C5.496,4.592 4.841,5.223 4.036,5.223 C3.230,5.223 2.575,4.592 2.575,3.817 C2.575,3.041 3.230,2.410 4.036,2.410 Z"></path></svg>
                                {{cardCites}} {{cardAddress}}
                            </span>
                </div>
            </div>
            <div class="info">
                <div class="salary">от {{cardSalary}} руб.</div>
                <div class="education">{{ joinTypes(cardEmploymentTypes) }}</div>
            </div>
            <div class="pic">
                <img :src="cardLogo === null ? 'http://www.edhh.webra-dev.com/storage/logo/company/2019/07/14/9a1c377e230d164a5c6a8b56558b827b.jpg' : cardLogo" alt="" class="img-fluid">
            </div>
        </div>
        <div class="desc">
            <a  class="card-redirect" @click="deleteFavorite(favoriteId)">
                <span class="link-default">Удалить</span>
            </a>
        </div>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name: "AppSeekerVacancyCard",
        props: ['cardId',
                'cardTitle',
                'cardSalary',
                'cardSave',
                'cardUrl',
                'cardEdit',
                'cardDelate',
                'cardCites',
                'feedbackLink',
                'hitCount',
                'ViewCount',
                'feedbackCount',
                'cardCompany',
                'cardAddress',
                'cardLogo',
                'favoriteId',
                'cardEmploymentTypes',
                'cardDeleted'
        ],

        methods: {
            joinTypes(typesArray) {
                const types = [];
                typesArray.forEach((type) => {
                    types.push(type.name.toLowerCase())
                });
                return types.join(', ')
            },
            deleteFavorite(id){
                axios.post('/vacancies/favorite/delete/' + id, {
                    _method: 'delete',
                })
                    .then((response) => {
                        this.$emit('remove', this.cardId)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
        },

    }
</script>

<style scoped lang="sass">
    @import "../../../../sass/components/card"
</style>
