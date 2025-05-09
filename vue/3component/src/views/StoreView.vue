<template>
  <h2>userid: {{ userid }}</h2>
  <h2>name: {{ name }}</h2>
  <h2>count: {{ count }}</h2>
  <button class="btn-success" @click="increment">증가</button>
</template>
<script>
import { mapState, mapActions } from "pinia";
import { useCounter } from "@/stores/counter";
import { useStore } from "@/stores/user";
export default {
  computed: {
    //computed()는 getters 프로퍼티가 됨.
    ...mapState(useCounter, ["name", "count"]),
    ...mapState(useStore, ["name", "userid"]),
  },
  //methods function()은 actions 프로퍼티가 됨.
  methods: {
    ...mapActions(useCounter, ["increment"]),
     ...mapActions(useStore, ["setUserid"]),
  },
};
</script>