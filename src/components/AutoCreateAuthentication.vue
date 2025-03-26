<template>
  <q-btn color="primary" @click="createAuthentication">Create Auth Token</q-btn>
</template>

<script>
export default {
  methods: {
    createAuthentication() {
      const token = 'b4326e7f18459538558cfb2d68bbc66f255920da' // Replace with actual token generation logic if needed
      sessionStorage.setItem('authToken', token)
    },
  },
}
</script>
