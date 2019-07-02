import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
  	users: [{name: 'Kolya', surname: 'Kol', number: '123456789', email: '123@g.com'}],
  	originalData: null,
  	editIndex: null
  },
  getters: {
    users(state) {
        return state.users
    }
},
  mutations: {
    ADD_USER(state, user) {
    	state.originalData = null
        state.users.push({ name: '', surname: '', number: "", email: ""})
    	state.editIndex = state.users.length - 1
    },
    SAVE(state, user) {
    	state.originalData = null
      	state.editIndex = null
    },
},
  actions: {
    addUser({commit}, user) {
        commit('ADD_USER')
    },
    save({commit}) {
    	commit('SAVE')
    },
},
});