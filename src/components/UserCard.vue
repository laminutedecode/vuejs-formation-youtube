<template>

  <div class="user-card">

    <!-- <h3>{{ user.name }}</h3>
    <p>Âge : {{ user.age }}</p>
    <p>Email : {{ user.email }}</p> -->

    <!-- <h2>{{ title }}</h2>
    <p>{{ description }}</p> -->

    <input v-model="newTitle" placeholder="Enter new title">
    <input v-model="newDescription" placeholder="Enter new description">
    <button @click="sendDataToParent">Envoyer au parent</button>
  </div>

</template>

<script>

export default {
  name: "UserCard",
  // props: {
  //   user: Object
  // }
  // props: {
  //   title: String,
  //   description: String
  // }
  data(){
    return {
      newTitle: "",
      newDescription: ""
    }
  },
  methods : {
    sendDataToParent(){
      this.$emit('update-title', this.newTitle);
      this.$emit('update-description', this.newDescription);
    }
  }
}

</script>

<style scoped>

  .user-card {
    border: 1px solid #1a1a1a;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,.1)
  }
</style>