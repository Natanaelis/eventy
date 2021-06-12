<template>
  <v-row>
    <v-col cols="4">
      <v-form ref="form">
        <v-text-field v-model="city" label="Miasto" required></v-text-field>
        <v-text-field v-model="title" label="Title" required></v-text-field>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template #activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              readonly
              prepend-icon="mdi-calendar"
              label="Data"
              required
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            locale="pl-pl"
            :first-day-of-week="1"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Anuluj </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

        <v-btn color="warning" @click="send"> Send </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    title: '',
    date: '',
    city: '',
    menu: false,
  }),

  methods: {
    reset() {
      this.$refs.form.reset()
    },
    send() {
      this.$store.dispatch('event/send', {
        title: this.title,
        id: Date.now(),
        date: this.date,
        city: this.city,
      })
      this.reset()
    },
  },
}
</script>
