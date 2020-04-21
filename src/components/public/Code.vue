<template>
  <div>
    <!-- <div id="code"></div> -->
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import QRCode from 'qrcode'
export default {
  data () {
    return {
      code: ''
    }
  },
  components: {
    QRCode
  },
  methods: {
    createCode () {
      let canvas = document.querySelector('#canvas')
      QRCode.toCanvas(canvas, 'http://www.baidu.com', function (error) {
        if (error) {
          console.log(error)
        }
        console.log('ok')
      })
    }
  },
  mounted () {
    this.createCode()
  }
}
</script>

<style>

</style>
