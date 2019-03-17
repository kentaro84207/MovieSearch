import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = 'ce191f672c06d990e9d4f40521ad4372'

export default {
  getData({ commit }, keyword) {
    commit('changeloadingState')

    axios
      .get(BASE_URL + 'search/movie', {
        params: {
          api_key: API_KEY,
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
  },
  getPopular({ commit }) {
    commit('changeloadingState')

    axios
      .get(BASE_URL + 'movie/popular', {
        params: {
          api_key: API_KEY,
          language: 'ja-JP',
          page: 1
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
