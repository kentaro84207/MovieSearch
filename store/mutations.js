export default {
  setItems(state, items) {
    state.items = items
  },
  changeloadingState(state) {
    state.loadingNow = !state.loadingNow
  },
  changeDialogState(state) {
    state.dialog = !state.dialog
  },
  itemNumState(state, itemNum) {
    state.itemNum = itemNum
  }
}
