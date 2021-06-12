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
    <v-col>
      <v-card class="mx-auto" max-width="500">
        <v-toolbar color="pink" dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Inbox</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-checkbox-marked-circle</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list two-line>
          <v-list-item-group active-class="pink--text" multiple>
            <template v-for="(item, index) in invited">
              <v-list-item :key="item.title">
                <template v-slot:default="{ active }">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>

                    <v-list-item-subtitle
                      class="text--primary"
                      v-text="item.headline"
                    ></v-list-item-subtitle>

                    <v-list-item-subtitle
                      v-text="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-list-item-action-text
                      v-text="item.action"
                    ></v-list-item-action-text>

                    <v-icon v-if="!active" color="grey lighten-1">
                      mdi-star-outline
                    </v-icon>

                    <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
                  </v-list-item-action>
                </template>
              </v-list-item>

              <v-divider
                v-if="index < items.length - 1"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    invited: [],
  }),
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
