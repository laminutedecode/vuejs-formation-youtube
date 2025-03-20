<template>
  <div id="box">
    <h1 v-if="status === 'success'">Succès !</h1>

    <h1 v-else-if="status === 'warning'">Avertissement !</h1>

    <h1 v-else>Erreur !</h1>

    <button v-on:click="changeStatus('success')">Succès</button>
    <button v-on:click="changeStatus('warning')">Avertissement</button>
    <button v-on:click="changeStatus('error')">Erreur</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: 'error'
    };
  },
  methods: {
    changeStatus(newStatus) {
      this.status = newStatus;
    }
  }
};
</script>

<style scoped>

</style>
