<template>
  <div>
    <h1>Show speaker</h1>
    <p>id: {{ speaker.id }}</p>
    <div>จํานวน {{ speakers.length }}</div>
      <p>id: {{ speaker.id }}</p>
      <p>model: {{ speaker.model }}  </p>
      <p>brand: {{ speaker.brand }}</p>
      <p>watt: {{speaker.watt }}</p>
      <p>power: {{ speaker.power }}</p>
      <p>status: {{ speaker.status }}</p>
      <p>type: {{ speaker.type }}</p>
  </div>
</template>
<script>
import UserService from "@/services/UserService";

export default {
  data() {
    return {
      speaker: null
    };
  },
  async created() {
    let speakerId = this.$route.params.speakerId;
    this.speaker = (await UserService.show(speakerId)).data
    console.log(this.speakerId)
  }
};
</script>
<style scoped></style>
