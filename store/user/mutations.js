export default {
  getFriends(state, payload) {
    state.friends = [...payload]
  },
}
