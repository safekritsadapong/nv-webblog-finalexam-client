<template>
  <div>
    <h1>Get All speakers</h1>
    <div>จํานวน {{ speakers.length }}</div>
    <div v-for="speaker in speakers" v-bind:key="speaker.id">
      <div>id: {{ speaker.id }}</div>
      <div>model: {{ speaker.model }}  </div>
      <div>brand: {{ speaker.brand }}</div>
      <div>watt: {{speaker.watt }}</div>
      <div>power: {{ speaker.power }}</div>
      <div>status: {{ speaker.status }}</div>
      <div>type: {{ speaker.type }}</div>
      <p>
        <button v-on:click="navigateTo('/speaker/' + speaker.id)">
          ดูข้อมูล
        </button>
        <button v-on:click="navigateTo('/speaker/edit/' + speaker.id)">
          แกไขข้อมูล
        </button>
        <button v-on:click="deletespeaker(speaker)">ลบข้อมูล</button>
      </p>
      <hr />
    </div>
  </div>
</template>
<script>
import UserServices from "@/services/UserService";
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser(user) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await UserServices.delete(user);
          this.refreshData()
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.users = (await UserServices.index()).data;
    }
  },
  async created() {
    this.users = (await UserServices.index()).data;
  }
};
</script>
<style scoped></style>
