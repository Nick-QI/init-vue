<template lang="pug">
  div.test
    h1 测试页面
    T
</template>
<script>
import T from '_c/TsetComponents.vue'
export default {
  components: {
    T
  }
}
</script>
<style lang="less" scoped>
.test {
  height: 9000px;
  background: skyblue
}
</style>
