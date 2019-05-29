import axios from 'axios'
import state from './state'

const BASE_URL = 'https://api.themoviedb.org/3/'

export default {
  async getData({ commit }) {
    commit('changeloadingState')
    try {
      const res = await axios.get(BASE_URL + state.url, {
        params: state.params
      })
      commit('setItems', res.data)
    } catch (e) {
      console.error('error:', e)
    }
    commit('changeloadingState')
  },
  async addData({ commit }) {
    try {
      const res = await axios.get(BASE_URL + state.url, {
        params: state.params
      })
      commit('addItems', res.data)
    } catch (e) {
      console.error('error:', e)
    }
  },
  changeUrl({ commit }, payload) {
    commit('changeUrl', payload)
  },
  changeParams({ commit }, payload) {
    commit('changeParams', payload)
  },
  addPage({ commit }) {
    commit('addPageState')
  },
  resetPage({ commit }) {
    commit('resetPageState')
  },
  changeDialog({ commit }) {
    commit('changeDialogState')
    commit('changeDialogLoadingState')
    setTimeout(() => {
      commit('changeDialogLoadingState')
    }, 500)
  },
  changeItemNum({ commit }, payload) {
    commit('itemNumState', payload.itemNum)
  }
}
