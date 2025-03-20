<template>
  <div id="box">
    <h2>Liste des équipes et leurs membres</h2>
    <ul>
      <li v-for="(team, teamIndex) in teams" :key="teamIndex">
        {{ team.name }} :
        <ul>
          <li v-for="(member, memberIndex) in team.members" :key="memberIndex">
            {{ member }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        { name: "Équipe A", members: ["Alice", "Bob", "Charlie"] },
        { name: "Équipe B", members: ["David", "Eva", "Frank"] },
        { name: "Équipe C", members: ["George", "Hannah", "Isabelle"] }
      ]
    };
  }
};
</script>
