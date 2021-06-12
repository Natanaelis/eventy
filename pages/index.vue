<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1>Wyszukaj eventy!</h1>
        <SearchMain />

        <v-btn class="my-6" color="primary" @click="showAddForm">
          Dodaj nowy event
        </v-btn>
        <v-row v-if="isShowAddForm">
          <v-col>
            <EventAdd @sendNewEvent="sendNewEvent" />
          </v-col>
        </v-row>
        <v-row v-if="newEvent">
          <v-col>
            <v-alert type="success">
              Utworzono nowy event.
              <v-btn text @click="goToNewEvent">
                Zobacz {{ newEvent.title }}</v-btn
              >
            </v-alert>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      isShowAddForm: false,
      newEvent: null,
    }
  },
  methods: {
    showAddForm() {
      this.isShowAddForm = true
    },
    hideAddForm() {
      this.isShowAddForm = false
    },
    sendNewEvent(newEvent) {
      this.hideAddForm()
      this.newEvent = newEvent
    },
    goToNewEvent() {
      this.$router.push({
        name: 'event-id',
        params: {
          id: this.newEvent.id,
        },
      })
    },
  },
}
</script>
