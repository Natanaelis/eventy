<template>
  <div>
    <h1>Znajomi</h1>
    <v-list two-line>
      <v-list-item-group v-model="selected" active-class="pink--text" multiple>
        <template v-for="(friend, index) in friends">
          <v-list-item :key="friend.id">
            <template #default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="friend.name"></v-list-item-title>

                <v-list-item-subtitle
                  class="text--primary"
                  v-text="friend.email"
                ></v-list-item-subtitle>

                <v-list-item-subtitle
                  v-text="friend.website"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text
                  v-text="friend.phone"
                ></v-list-item-action-text>

                <v-icon v-if="!active" color="grey lighten-1">
                  mdi-star-outline
                </v-icon>

                <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider v-if="index < friend.length - 1" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <v-btn
      color="primary"
      x-large
      :disabled="selected.length === 0"
      @click="addSelectedToEvent"
    >
      Zaproś
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      selected: [],
    }
  },
  computed: {
    ...mapGetters({
      friends: 'user/friends',
    }),
  },
  async fetch(context) {
    await context.store.dispatch('user/getFriends')
  },
  methods: {
    addSelectedToEvent() {
      this.$store.dispatch('event/addUsersToEvent', {
        usersId: this.selected,
        eventId: this.$route.params.id,
      })
    },
  },
}
</script>
