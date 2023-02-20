import { createApp } from 'vue';
import Messages from './app/components/Messages.vue';

export class MfeVue extends HTMLElement {
  connectedCallback() {
    createApp(Messages).mount(this);
  }
}
customElements.define('messages-element', MfeVue);
