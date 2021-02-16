import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: null
  },
  mutations: {
    SET_POSTS(state, data) {
        state.posts = data
    }
  },
  actions: {
    async GET_POSTS({commit}) {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        commit('SET_POSTS', res.data)
    }
  }
})

export default store