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
  <div class="messages-container">
    <ng-container v-if="messages.length">
      API calls and messages:
      <li v-for="message in messages">
        {{ message }}
      </li>
      <button @click="clearMessages">clear</button></ng-container
    >
    <ng-container v-else>No messages to display </ng-container>
  </div>
</template>

<style lang="scss" scoped>
.messages-container {
  margin-top: 20px;
  background: rgb(36, 34, 47);
  color: white;
  padding: 20px;
  border-radius: 10px;
  line-height: 24px;
}
</style>
