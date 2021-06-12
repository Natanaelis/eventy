<template>
  <v-row>
    <v-col class="text-center">
      <EventAdd />
      <h1 v-if="city && date">
        Wyniki wyszukiwania dla miasta: {{ city }} w dniu {{ date }}
      </h1>
      <EventItem
        v-for="item in filteredItems"
        :key="item.id"
        :title="item.title"
        :item="item"
      />
      <v-alert
        v-if="!filteredItems.length"
        border="right"
        colored-border
        type="error"
        elevation="2"
        class="mt-6"
      >
        Brak wyników
      </v-alert>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      items: 'event/items',
    }),
    city() {
      return this.$route.query.city
    },
    date() {
      return this.$route.query.date
    },
    filteredItems() {
      let filtered = this.items
      if (this.date) {
        filtered = filtered.filter((item) => {
          return item.date === this.date
        })
      }
      if (this.city) {
        filtered = filtered.filter((item) => {
          return item.city.toLowerCase() === this.city.toLowerCase()
        })
      }
      return filtered
    },
  },
}
</script>
