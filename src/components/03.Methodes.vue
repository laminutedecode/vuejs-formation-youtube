<template>
  <div id="box">
    <p>{{ calc(2, 2) }}</p>
  
    <p>{{ func() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "Les méthodes",  
      nb: 7, 
    };
  },
  methods: {
    calc(a, b) {
      return a * b;  
    },
    func() {
      return this.str + this.nb;  
    }
  }
};
</script>

