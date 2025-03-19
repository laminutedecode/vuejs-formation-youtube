<template>
  <div>
    <child-component ref="child" />
    <button @click="callChild">Appeler une méthode de l'enfant</button>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  methods: {
    callChild() {
      this.$refs.child.someMethod();
    }
  }
};
</script>
