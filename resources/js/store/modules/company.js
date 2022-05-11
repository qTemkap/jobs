import Axios from 'axios';

export default {
    state: {
        // default value
        companySize: [],
        companyType: [],
        companyLogo: ''
    },

    getters: {
        COMPANY_SIZE(state){
            return state.companySize
        },
        COMPANY_TYPE(state){
            return state.companyType
        },
        COMPANY_LOGO(state){
            return state.companyLogo
        }
    },

    mutations: {

        SET_COMPANY_SIZE(state, payload){
            state.companySize = payload;
        },
        SET_COMPANY_TYPE(state, payload){
            state.companyType = payload;
        },
        SET_COMPANY_LOGO(state, payload){
            state.companyLogo = payload;
        },
    },

    actions: {
        GET_COMPANY_SIZE: async (context, payload) => {
            let getCompanySize = await Axios.get('/company_sizes/get_all');

            if(getCompanySize !== null){
                let sizeList = getCompanySize.data.data;
                let size = [];
                for (let x in sizeList) {
                    size.push(sizeList[x]);
                }
                context.commit('SET_COMPANY_SIZE', size);
            }
        },
        GET_COMPANY_TYPE: async (context, payload) => {
            let getCompanyType = await Axios.get('/company_types/get_all');

            if(getCompanyType !== null){
                let typeList = getCompanyType.data.data;
                let type = [];
                for (let x in typeList) {
                    type.push(typeList[x]);
                }
                context.commit('SET_COMPANY_TYPE', type);
            }
        },
    }

}
