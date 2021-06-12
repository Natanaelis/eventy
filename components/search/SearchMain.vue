<template>
  <v-form v-model="valid" @submit.prevent="search">
    <v-container>
      <v-row class="hero-form-row">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="city"
            :rules="cityRules"
            label="Miasto"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
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
                :rules="dateRules"
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
        </v-col>
        <v-col>
          <v-btn color="primary" class="align-self-baseline" type="submit">
            Szukaj
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    city: '',
    cityRules: [(v) => !!v || 'Podanie nazwy miasta jest wymagane'],
    dateRules: [(v) => !!v || 'Podanie daty jest wymagane'],
  }),
  methods: {
    search() {
      if (this.valid) {
        this.$router.push({
          path: 'event',
          query: {
            city: this.city,
            date: this.date,
          },
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.hero-form-row {
  align-items: baseline;
}
</style>
