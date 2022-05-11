export default {
    state: {
        showVerify: false
    },

    mutations: {
        showVerify(state, payload){
            state.showVerify = payload;
        }
    },

    actions: {
        showVerify({commit}, payload){
            commit('showVerify', payload)
        }
    },

    getters: {
        showVerify(state){
            return state.showVerify
        }
    }
}
