<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <nuxt-link :to="{ name: 'event-id', params: { id: item.id } }">
      <v-card-title>{{ title }}</v-card-title>
    </nuxt-link>
    <v-divider class="mx-4"></v-divider>

    <v-card-title>{{ item.city }}</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>{{ item.date }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Dołącz
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="deep-purple lighten-2" text @click="invite"> Zaproś </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Nowe wydarzenie',
    },
    item: {
      type: Object,
      default: () => ({}),
    },
  },

  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
    invite() {
      this.$router.push({
        name: 'znajomi-zaproszenie-id',
        params: {
          id: this.item.id,
        },
      })
    },
  },
}
</script>
