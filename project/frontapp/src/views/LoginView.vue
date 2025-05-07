<template>
  id <input v-model="email">
  pw <input v-model="pw">
  <button type="button"
        class="btn btn-xs btn-info"
        @click.prevent="login()">
    로그인
  </button>
</template>
<script>
  import axios from 'axios';
  export default{
    data() {
      return {
        email : "",
        pw : ""
      }
    },
    methods:{
      async login() {
        const url = "/api/users/login";
        const data = { email: this.email, pw: this.pw };
        const result = await axios.post(url, data)
        alert(result.data.code);
        // if(result.data.code === "success")
        // this.$store.commit('increment');
        // this.$store.commit('loginSuccuess');
        // this.$store.commit('changeEmail', {email: this.email})
        this.$store.dispatch('login', {email: this.email});
        this.$router.push({path: "/"});
      }
    }
  }
</script>