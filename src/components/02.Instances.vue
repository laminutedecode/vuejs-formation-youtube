
<script>
export default {
  data() {
    return {
      name: 'MyInstance', 
      str: "Hello world depuis l'instance", 
      message: "<strong style='color: red;'>Hello, Vue !</strong>"
    };
  }
};
</script>

<template>
  <div id="box">
    <p>{{ str }}</p>

    <p>Nom de l'instance : {{ name }}</p>

    <p>Longueur de la chaîne : {{ str.length }}</p>
    <p>En majuscules : {{ str.toUpperCase() }}</p>
    <p v-html="message"></p>

  </div>
</template>

