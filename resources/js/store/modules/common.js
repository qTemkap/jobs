import Axios from 'axios';

export default {
    state: {
        errors: null,
        month: [
            { name:'Январь', id: '01', number: 1, shortName: 'янв'},
            { name:'Февраль', id: '02', number: 2, shortName: 'фев'},
            { name:'Март', id: '03', number: 3, shortName: 'мар'},
            { name:'Апрель', id: '04', number: 4, shortName: 'апр'},
            { name:'Май', id: '05', number: 5, shortName: 'май'},
            { name:'Июнь', id: '06', number: 6, shortName: 'июн'},
            { name:'Июль', id: '07', number: 7, shortName: 'июл'},
            { name:'Август', id: '08', number: 8, shortName: 'авг'},
            { name:'Сентябрь', id: '09', number: 9, shortName: 'сен'},
            { name:'Октябрь', id: '10', number: 10, shortName: 'окт'},
            { name:'Ноябрь', id: '11', number: 11, shortName: 'ноя'},
            { name:'Декабрь', id: '12', number: 12, shortName: 'дек'},
           ],
        year: [],
        city: [],
        citySelect: null,
        filterData: null,
    },

    getters: {
        errors(state){
            return state.errors
        },

        citySelect(state){
            return state.citySelect
        },
        FILTER_DATA(state){
            return state.filterData
        },
        CITY(state){
            return state.city
        },

        month(state){
            return state.month
        },
        year(state){
            let now = new Date();
            let nowYear = now.getFullYear();

            for(let i = 1955; i <= nowYear; i++){
                state.year.push(i);
            }
            return state.year
        }
    },

    mutations: {
        ERRORS(state, payload){
            state.errors = payload;
        },
        SET_FILTER_DATA(state, payload){
            state.filterData = payload;
        },
        SET_CITY(state, payload){
            state.city = payload;
        },
        set_citySelect(state, payload){
            state.citySelect = payload;
        },

    },

    actions: {
        addErrors({commit}, payload){
            commit('ERRORS', payload)
        },

        GET_FILTER_DATA: async (context) => {
            let data = await Axios.get('/recruiting/get_filters');
            let arr = Object.keys(data.data).map((k) => data.data[k]);
            context.commit('SET_FILTER_DATA', arr[1]);
        },

        GET_CITY: async (context, payload) => {
            let data = await Axios.get('/cities/get_all');

            if(data !== null){
                let cityList = data.data.data;
                let city = [];
                for (let x in cityList) {
                    city.push(cityList[x]);
                }
                city.sort(function (bigCity, smallCity) {
                    return smallCity.population - bigCity.population
                });
                context.commit('SET_CITY', city);
            }
        },

    }

}
