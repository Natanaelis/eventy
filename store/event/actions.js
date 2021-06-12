export default {
  send(context, payload) {
    context.commit('addEvent', payload)
  },
  addUsersToEvent(context, payload) {
    context.commit('addUsersToEvent', payload)
    this.$router.push({
      name: 'event-id',
      params: {
        id: payload.eventId,
      },
    })
  },
}
