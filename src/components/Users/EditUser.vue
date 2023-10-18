<template>
  <div>
    <h1>Edit Users</h1>
    <h1>Edit User</h1>
    <form v-on:submit.prevent="editUser">
      <p>model: <input type="text" v-model="user.name" /></p>
      <p>brand: <input type="text" v-model="user.lastname" /></p>
      <p>watt: <input type="text" v-model="user.email" /></p>
      <p>status: <input type="text" v-model="user.password" /></p>
      <p>type: <input type="text" v-model="user.password" /></p>

      <p><button type="submit">edit user</button></p>
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
    async editUser() {
      try {
        await UsersService.put(this.user);
        this.$router.push({
          name: "users"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UsersService.show(userId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>
