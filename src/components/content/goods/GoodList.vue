<template>
  <div class="goods">
    <good-list-item
      v-for="item in goods"
      :key=" item.id"
      :goodsItem="item"
    ></good-list-item>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem";

export default {
  components: {
    GoodListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>