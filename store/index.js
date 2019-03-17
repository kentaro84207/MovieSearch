import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3/search/movie'

export const state = () => ({
  items: [],
  loadingNow: false
})

export const mutations = {
  setItems(state, items) {
    state.items = items
  },
  changeloadingState(state) {
    state.loadingNow = !state.loadingNow
  }
}

export const actions = {
  getData({ commit }, keyword) {
    commit('changeloadingState')

    axios
      .get(BASE_URL, {
        params: {
          api_key: 'ce191f672c06d990e9d4f40521ad4372',
          language: 'ja-JP',
          query: keyword
        }
      })
      .then(response => {
        commit('setItems', response.data)
      })
      .catch(e => {
        console.error('error:', e)
      })
      .then(function() {
        commit('changeloadingState')
      })
  }
}
