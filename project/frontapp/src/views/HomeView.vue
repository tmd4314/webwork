<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    count: {{ $store.state.count  }}<br>
    logYn: {{ $store.state.loginYn }}<br>
    email: {{ $store.state.email }}
    <hr>
    <TheWelcome />
  </main>
</template>
