<template>
  <h2>name: {{ name }}</h2>
  <h2>count: {{ count }}</h2>
  <button class="btn-success" @click="counterStore.increment">증가</button>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();

const {name, count} = storeToRefs(counterStore);

</script>