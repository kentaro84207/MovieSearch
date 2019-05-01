export default {
  setItems(state, items) {
    state.items = items
  },
  addItems(state, items) {
    state.items.results = state.items.results.concat(items.results)
  },
  changeUrl(state, url) {
    state.url = url
  },
  changeParams(state, params) {
    state.params = params
  },
  changeloadingState(state) {
    state.loadingNow = !state.loadingNow
  },
  changeDialogState(state) {
    state.dialog = !state.dialog
  },
  itemNumState(state, itemNum) {
    state.itemNum = itemNum
  },
  addPageState(state) {
    state.currentPage++
  },
  resetPageState(state) {
    state.currentPage = 1
  }
}
