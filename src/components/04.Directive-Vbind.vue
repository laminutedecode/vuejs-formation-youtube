<script>
export default {
  data() {
    return {
      URLGoogle: 'http://google.com', 
      URLImage: 'https://images.unsplash.com/photo-1673468199846-fb5572dfb862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    };
  },
}
</script>

<template>
  <div id="box">

    <a v-bind:href="URLGoogle">Accéder au site de Google</a>  
    <a :href="URLGoogle">Accéder au site de Google</a>  
    <img v-bind:src="URLImage" alt="">  
    <img :src="URLImage" alt="">  
  </div>
</template>

