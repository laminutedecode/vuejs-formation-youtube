<template>

  <div>
    <Suspense>
      <template #default>
        <AsyncComponent />
      </template>

      <template #fallback>
        <p>Chargement </p>
      </template>
    </Suspense>
  </div>

</template>

<script setup >

import { defineAsyncComponent } from 'vue';

const AsyncComponent = defineAsyncComponent(() =>
  import('./AsyncComponent.vue')
);

</script>

<style >




</style>
