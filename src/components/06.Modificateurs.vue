<template>
  <div id="box">
    <button v-on:click.once="func">Cliquer ici</button>

    <div v-on:click="func">
        <button v-on:click.stop="func">Cliquer ici</button>
    </div>

    <form v-on:submit.prevent="onSubmit">
      <label for="txt">Texte</label>
      <input type="text" id="txt" />
      <button>Envoyer</button>
    </form>

    <div v-on:click.capture="func">Écouter en capture</div>

    <button v-on:click.self="func">Écouter uniquement sur ce bouton</button>

    <div v-on:scroll.passive="func">Faire défiler cette zone</div>
  </div>
</template>

<script>
export default {
  methods: {
    func() {
      console.log('Hello depuis la fonction');
    },

    onSubmit() {
      console.log('Formulaire soumis');
    },

  }
};
</script>


