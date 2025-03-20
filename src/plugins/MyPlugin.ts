
import type { App } from "vue";
// Importation de l'interface App de Vue
// Création d'un objet MyPlugin

export default {
  install(app: App, options?: { message?: string }) {
    // /install : méthode qui reçoit l'application Vue et une option
    // Ajoute une directive personnalisée v-bold
    app.directive('bold', {
      beforeMount(el: HTMLElement) {
        el.style.fontWeight = 'bold';
      }
    });
  }
};
