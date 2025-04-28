<template>
  <h3>부모컴포넌트</h3>
  <child-component @send-message="sendMessage"></child-component>
</template>
<script>
  import ChildComponent from '../components/ChildComponent4.vue';
  export default{
    components : {ChildComponent},  // 컴포넌트 등록
    methods: {
      sendMessage(message) {
        console.log(message)
      }
    }
  }
</script>