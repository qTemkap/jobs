import Axios from 'axios';

export default {
    state: {
        // default value
        categories: [],
        types: [],
        levels: [],
    },

    getters: {
        CATEGORIES(state){
            return state.categories
        },
        TYPES(state){
            return state.types
        },
        LEVELS(state){
            return state.levels
        },
    },

    mutations: {
        SET_CATEGORIES(state, payload){
            state.categories = payload;
        },
        SET_TYPES(state, payload){
            state.types = payload;
        },
        SET_LEVELS(state, payload){
            state.levels = payload;
        },
    },

    actions: {
        GET_CATEGORIES: async (context, payload) => {
            let getResumeData = await Axios.get('/categories/get_all');

            if(getResumeData !== null){
                let categoriesList = getResumeData.data.data;
                let categories = [];
                for (let x in categoriesList) {
                    categories.push(categoriesList[x]);
                }
                context.commit('SET_CATEGORIES', categories);
            }
        },

        GET_TYPES: async (context, payload) => {
            let getTypesData = await Axios.get('/employment_types/get_all');

            if(getTypesData !== null){
                let typesList = getTypesData.data.data;
                let types = [];
                for (let x in typesList) {
                    types.push(typesList[x]);
                }
                context.commit('SET_TYPES', types);
            }
        },

        GET_LEVELS: async (context, payload) => {
            let getLevelsData = await Axios.get('/education_levels/get_all');
            if(getLevelsData !== null){
                let levelsList = getLevelsData.data.data;
                let levels = [];
                for (let x in levelsList) {
                    levels.push(levelsList[x]);
                }
                context.commit('SET_LEVELS', levels);
            }
        },

    }

}
