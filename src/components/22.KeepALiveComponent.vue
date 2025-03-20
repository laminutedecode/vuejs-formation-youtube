<template>
  <div>
    <button 
      v-for="tab in Object.keys(tabComponents)" 
      :key="tab" 
      @click="currentTab = tab" 
      :class="{ active: currentTab === tab }">
      {{ tab }}
    </button>

    <keep-alive :max="2" :include="['Tab1']" :exclude="['Tab2']">
      <component :is="currentTabComponent" />
    </keep-alive>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Tab1 from './Tab1.vue';
import Tab2 from './Tab2.vue';

const currentTab = ref('Tab1');

const tabComponents = {
  Tab1,
  Tab2
};
const currentTabComponent = computed(() => tabComponents[currentTab.value]);
</script>
<style scoped>

button {
  margin: 5px;
  padding: 8px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}


button.active {
  background-color: #42b983;
}
</style>
