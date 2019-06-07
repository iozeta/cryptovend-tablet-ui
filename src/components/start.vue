<template>
  <div class="start">
    <h1>Pay With Bitcoin</h1>
    <button class="btn start-btn" v-on:click="start">TAP TO START</button>
  </div>
</template>

<script>
import invoice from './invoice.vue'
export default {
  name: 'start',
  methods: {
    start() {
      this.$router.push('invoice')
    }
  }
}
</script>
<style>
.start-btn{
  background: #1faf25;
  color: #FFF;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: none;
}
</style>
