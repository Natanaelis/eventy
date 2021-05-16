<template>
  <v-form ref="form">
    <v-text-field v-model="title" label="Title" required></v-text-field>
    <v-text-field v-model="id" label="Id" required></v-text-field>
    <v-text-field v-model="date" label="Date" required></v-text-field>
    <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

    <v-btn color="warning" @click="send"> Send </v-btn>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    title: '',
    id: '',
    date: '',
  }),

  methods: {
    reset() {
      this.$refs.form.reset()
    },
    send() {
      console.log(this.title)
    },
  },
}
</script>
