<template>
  <div class="thanks">
    <button class="btn thanks-btn">PAYMENT RECEIVED</button>
    <h1>Credit sent to machine.</h1>
    <h2>Please check below.</h2>
    <audio autoplay>
      <source src="../assets/ka-ching.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
export default {
  name: 'thanks',
  mounted: function () {
    this.$nextTick(function () {
      setTimeout(() => {
        this.$router.push('/')
      }, 15000);      
    })
  }  
}
</script>
<style>
.thanks-btn{
  background: #1faf25;
  color: #FFF;
  width: 250px;
  height: 150px;
  border-radius: 25px;
  border: none;
}
</style>
