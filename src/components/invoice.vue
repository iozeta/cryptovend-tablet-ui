<template>
  <div class="invoice">
    <h1>Scan To Pay</h1>
    <div class="qr" v-if="invoice">
      <qrcode-vue :value="invoice" size="275" level="H"></qrcode-vue>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">    
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
import opennode from "opennode"
import axios from "axios"

opennode.setCredentials(process.env.VUE_APP_OPENNODE_KEY, 'live')

export default {
  name: 'invoice',
  components: {
    QrcodeVue
  },  
  methods: {
    newInvoice() {
      opennode.createCharge({
        amount: 0.05,
        currency: 'USD',
        auto_settle: false
      }).then(res => {
        this.$set(this.$data, 'invoice', res.lightning_invoice.payreq)
        this.chargeData = res 
      }).catch(err => {
        console.error(`${err.status} | ${err.message}`)
      })
    },
    checkInvoice() {
      if (this.chargeData == null) return
      opennode.chargeInfo(
        this.chargeData.id
      ).then(res => {
        if (res.status == "paid") {
          this.vend()
          this.$router.push('thanks')
        }
      }).catch(err => {
        console.error(`${err.status} | ${err.message}`)
      })      
    },
    vend() {
      axios.post(`http://${process.env.VUE_APP_IOZETA_VEND_IP}/add/pay`, 'amt=1.00', {
        auth: {
          username: process.env.VUE_APP_IOZETA_VEND_USER,
          password: process.env.VUE_APP_IOZETA_VEND_PASS
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  data: function () {
    return {
      invoice: 0,
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.newInvoice()
      this.interval = setInterval(() => {
        this.checkInvoice()
      }, 1000);      
    })
  },
  beforeDestroy: function () {
    clearInterval(this.interval)
  }
}
</script>

<style>
.qr {
  margin: 25px;
}
</style>
