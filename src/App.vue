<template>
  <div id="app">
    <fullscreen ref="fullscreen" @change="fullscreenChange" wrap="true" background="#FFF">
      <div class="main">
        <router-view/>
      </div>
    </fullscreen>
    <button type="button" @click="toggle" >Fullscreen</button>
  </div>
</template>

<script>
import start from './components/start.vue'
import invoice from './components/invoice.vue'
import thanks from './components/thanks.vue'

import fullscreen from 'vue-fullscreen'

export default {
  name: 'app',
  components: {
    start,
    invoice,
    thanks
  },
  methods: {
    toggle () {
      this.$refs['fullscreen'].toggle()
    },
    fullscreenChange (fullscreen) {
      this.fullscreen = fullscreen
    }
  },
  data() {
    return {
      fullscreen: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  margin-top: 100px;
}
.btn {
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  font-size: 30px;
  font-weight: bold;
  margin: 20px;  
}
</style>
