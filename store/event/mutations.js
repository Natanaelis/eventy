export default {
  addEvent(state, payload) {
    state.items.push(payload)
  },
  addUsersToEvent(state, payload) {
    const event = state.items.find((item) => {
      return String(item.id) === payload.eventId
    })
    payload.usersId.forEach((id) => {
      if (!event.invitedIds.includes(id)) {
        event.invitedIds.push(id)
      }
    })
  },
}
