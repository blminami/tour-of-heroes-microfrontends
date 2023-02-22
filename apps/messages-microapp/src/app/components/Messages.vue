<script>
import PubSub from 'pubsub-js';

export default {
  name: 'Messages',
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    this.subscribeToEvents();
  },
  methods: {
    subscribeToEvents() {
      PubSub.subscribe('HERO_MESSAGES', this.subscriber);
    },
    subscriber(_, data) {
      this.messages.push(data);
    },
    clearMessages() {
      this.messages = [];
    },
  },
};
</script>

<template>
  <div
    class="m-3 p-2 bg-gradient-to-br from-rose-100 to-teal-100 rounded shadow-lg"
  >
    <ng-container v-if="messages.length">
      API calls and messages:
      <li v-for="message in messages">
        {{ message }}
      </li>
      <button
        class="bg-transparent hover:bg-gray-300 text-black font-semibold py-1 px-3 mt-1 border border-gray-500 hover:border-transparent rounded"
        @click="clearMessages"
      >
        clear
      </button>
    </ng-container>
    <ng-container v-else>No messages to display </ng-container>
  </div>
</template>
