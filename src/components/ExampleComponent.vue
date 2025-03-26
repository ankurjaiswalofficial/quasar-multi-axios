<template>
  <div>
    <h1>API Example</h1>
    <q-btn color="secondary" @click="fetchPublicData">Fetch Public Data</q-btn>
    <q-btn color="secondary" @click="fetchAuthData">Fetch Authenticated Data</q-btn>
    <div v-if="publicData">
      <h2>Public Data:</h2>
      <pre>{{ publicData }}</pre>
    </div>
    <div v-if="authData">
      <h2>Authenticated Data:</h2>
      <pre>{{ authData }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicData: null,
      authData: null,
    }
  },
  methods: {
    async fetchPublicData() {
      try {
        const response = await this.$publicApi.get('/')
        this.publicData = response.data
      } catch (error) {
        console.error('Error fetching public data:', error)
      }
    },
    async fetchAuthData() {
      try {
        const response = await this.$authApi.get('/')
        this.authData = response.data
      } catch (error) {
        console.error('Error fetching authenticated data:', error)
      }
    },
  },
}
</script>
