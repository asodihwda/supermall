<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="this.topImages"></detail-swiper>

  </div>
</template>

<script>
import DetailNavBar from "./childcomps/DetailNavBar"
import DetailSwiper from "./childcomps/DetailSwiper"

import {getDetail} from "network/detail"


export default {
  name: "Detail",
  data(){
    return {
      iid:null,
      topImages:[]
    }
  },
  created(){
    //保存传入的iid
    this.iid = this.$route.params.iid

    //根据iid请求相关数据
    getDetail(this.iid).then(res => {
      // console.log(res)
      this.topImages = res.result.itemInfo.topImages
    })
  },
  components: {
    DetailNavBar,
    DetailSwiper
  }
}
</script>

<style scoped>

</style>