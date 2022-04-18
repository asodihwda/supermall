<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.jpg" alt="" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="" />
      <div slot="item-text">分类</div> </tab-bar-item
    ><tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="" />
      <div slot="item-text">购物车</div> </tab-bar-item
    ><tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.jpg" alt="" />
      <div slot="item-text">档案</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";

export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>