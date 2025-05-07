<template>
  email <input v-model="email">
  pw <input v-model="pw">
  <button type="button" @click="loginHandler">로그인</button>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email:"",
      pw:""
    };
  },
  methods : {
    async loginHandler(){
      const data = {email: this.email, pw: this.pw};
      const result = await axios.post("/api/users/login", data) // <- 축약형. 원래는 axios({url:'', method:'', data:{}})
      alert(result.data.code) // users.js에 있는 code(success)
      // this.$store.commit('changeEmail', {email:this.email})
      // this.$store.commit('loginSuccess');
      this.$store.dispatch('login', {email:this.email});
      this.$router.push({path:"/"});
    }
    }
  }
</script>

<style>
  
</style>