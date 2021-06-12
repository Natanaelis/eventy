export default {
  async getFriends(context, payload) {
    const users = await this.$axios.$get('/users')
    console.log('users', users)
    context.commit('getFriends', users)
  },
}
