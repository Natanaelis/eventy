<template>
  <v-row>
    <v-col class="text-center">
      <EventItem
        v-for="item in items"
        :key="item.id"
        :title="item.title"
        :item="item"
      />
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
  },
}
</script>
