export default {
    state: {
        inputSearchValue: '',
    },

    getters: {
        INPUT_SEARCH_VALUE(state){
            return state.inputSearchValue
        }
    },

    mutations: {
        SET_INPUT_SEARCH_VALUE(state, payload){
            state.inputSearchValue = payload;
        }
    },
    actions: {
        GET_INPUT_SEARCH_VALUE({commit}, payload){
            commit('SET_INPUT_SEARCH_VALUE', payload)
        }
    }

}
