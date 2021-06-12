<template>
  <v-form v-model="valid">
    <v-container>
      <v-row class="hero-form-row">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="cinty"
            :rules="cintyRules"
            label="Miasto"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="date"
            :rules="dateRules"
            label="Data"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-btn color="primary" class="align-self-baseline">Szukaj</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    cinty: '',
    date: '',
    cintyRules: [(v) => !!v || 'Podanie nazwy miasta jest wymagane'],
    dateRules: [(v) => !!v || 'Podanie daty jest wymagane'],
  }),
}
</script>

<style lang="scss" scoped>
.hero-form-row {
  align-items: baseline;
}
</style>
