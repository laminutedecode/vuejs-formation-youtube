<template>


  <!-- <user-card v-for="(user, index) in users" :key="index" :user="user" /> -->
  
  <!-- <user-card :title="cardTitle" :description="cardDescription"/> -->
  
  <h2> {{ title || "Titre depuis le parent" }}</h2>
  <p>{{ description || "Description depuis le parent" }}</p>
  
  <user-card @update-title="updateTitle" @update-description="updateDescription"/>
  
  
    
  </template>
  
  <script>
  
  import UserCard from './UserCard.vue';
  export default {
    name: 'MyComposant',
    components: {
      UserCard
    },
    data(){
      return {
         users: [
          {name: 'John', age: 25},
          {name: 'Jane', age: 24},
          {name: 'Jim', age: 30}
         ],
         cardTitle: 'User Card',
         cardDescription: 'This is a user card',
         title: "",
         description: ""
        };
      },
      methods : {
        updateTitle(newTitle){
          this.title = newTitle;
        },
        updateDescription(newDescription){
          this.description = newDescription;
        }
      }
  
    }
    
  </script>
  
  <style >
  
  
  
  </style>
  