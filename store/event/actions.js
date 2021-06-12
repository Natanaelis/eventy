export default {
  send(context, payload) {
    context.commit('addEvent', payload)
  },
}
