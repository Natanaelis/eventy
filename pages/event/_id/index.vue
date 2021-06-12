<template>
  <v-row>
    <v-col v-if="item" class="text-center">
      <v-card class="mx-auto my-12" max-width="374">
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
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-text> Dokładny opis </v-card-text>
        <v-divider class="mx-4"></v-divider>

        <v-card-title>{{ item.city }}</v-card-title>

        <v-card-text>
          <v-chip-group active-class="deep-purple accent-4 white--text" column>
            <v-chip>{{ item.date }}</v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
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
