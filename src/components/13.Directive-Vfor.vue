
<template>
  <div id="box">
    <h2>Liste des fruits</h2>
    <ul>
      <li v-for="(fruit, index) in fruits" :key="index">
        {{ fruit }} 
      </li>
    </ul>

    <h2>Liste des utilisateurs</h2>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ user.name }} - {{ user.age }} ans
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: ["Pomme", "Banane", "Cerise", "Mangue"],
      
      users: [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 }
      ]
    };
  }
};
</script>
