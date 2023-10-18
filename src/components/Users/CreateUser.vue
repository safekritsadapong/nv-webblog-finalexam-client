<template>
  <div>
    <h1>Create Users</h1>
    <form v-on:submit.prevent="createUser">
      <p>model: <input type="text" v-model="user.name" /></p>
      <p>brand: <input type="text" v-model="user.lastname" /></p>
      <p>watt: <input type="text" v-model="user.email" /></p>
      <p>status: <input type="text" v-model="user.password" /></p>
      <p>type: <input type="text" v-model="user.password" /></p>
      
      <p><button type="submit">create user</button></p>
    </form>
    <hr />
    <div>
      <p>model: {{ user.name }}</p>
      <p>brand: {{ user.lastname }}</p>
      <p>watt: {{ user.email }}</p>
      <p>status: {{ user.password }}</p>
      <p>type: {{ user.password }}</p>
      
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UserService";

export default {
  data() {
    return {
      speaker: {
        model: "",
        brand : "",
        watt: "",
        power: "",
        status: "",
        type: "active"
      }
    };
  },
  methods: {
    async createUser() {
      try {
        await UsersService.post(this.user);
        this.$router.push({
          name: "speaker"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped></style>
