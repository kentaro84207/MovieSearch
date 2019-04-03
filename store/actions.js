import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3/'

export default {
  async getData({ commit }, payload) {
    commit('changeloadingState')
    try {
      const res = await axios.get(BASE_URL + payload.addUrl, {
        params: payload.params
      })
      commit('setItems', res.data)
    } catch (e) {
      console.error('error:', e)
    }
    commit('changeloadingState')
  },
  changeDialog({ commit }) {
    commit('changeDialogState')
  },
  changeItemNum({ commit }, payload) {
    commit('itemNumState', payload.itemNum)
  }
}
