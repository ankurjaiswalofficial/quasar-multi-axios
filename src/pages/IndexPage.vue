<template>
  <q-page class="flex flex-center column">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <div class="flex column gap-4">
      <example-component />
      <auto-create-authentication />
    </div>
  </q-page>
</template>

<script setup>
import AutoCreateAuthentication from 'src/components/AutoCreateAuthentication.vue';
import ExampleComponent from 'src/components/ExampleComponent.vue';
</script>
