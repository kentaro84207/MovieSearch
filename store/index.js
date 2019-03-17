import axios from 'axios'

// const BASE_URL = 'https://qiita.com/api/v2/items'
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
    // まずステートを変更しておく
    commit('changeloadingState')

    axios
      .get(BASE_URL, {
        params: {
          api_key: 'ce191f672c06d990e9d4f40521ad4372',
          language: 'ja-JP',
          query: keyword
        }
        // params: {
        //   page: 1,
        //   per_page: 25,
        //   query: keyword
        // }
      })
      .then(response => {
        // レスポンスの結果を格納する
        commit('setItems', response.data)
      })
      .catch(e => {
        console.error('error:', e)
      })
      .then(function() {
        // すぐ取得出来たときに即消えちゃうと見た目悪いので少し時間を与える
        setTimeout(() => commit('changeloadingState'), 500)
      })
  }
}
