import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3/'

export default {
  getData({ commit }, payload) {
    commit('changeloadingState')
    axios
      .get(BASE_URL + payload.addUrl, {
        params: payload.params
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
