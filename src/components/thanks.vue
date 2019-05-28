<template>
  <div class="thanks">
    <button class="btn thanks-btn">THANK YOU!</button>
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
