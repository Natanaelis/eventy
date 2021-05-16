<template>
  <v-row>
    <v-col v-if="item" class="text-center">
      <div>Title: {{ item.title }}</div>
      <div>Id: {{ item.id }}</div>
      <div>Date: {{ item.date }}</div>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({}),
  computed: {
    ...mapGetters({
      items: 'event/items',
    }),
    item() {
      return this.items.find((el) => {
        return el.id === Number(this.$route.params.id)
      })
    },
  },
}
</script>
