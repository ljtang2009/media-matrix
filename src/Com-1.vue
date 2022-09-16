<template>
  <div class="div2">{{ count }}</div>
</template>
<script setup lang="ts">
// 启用了 TypeScript
import { ref } from 'vue';

const count = ref('200');

// const s = 1;
// function func(arg: string) {
//   console.log(arg);
// }
// func(s);
</script>
<style scoped lang="less">
@div-color: #ff0000;
.div2 {
  color: @div-color;
  display: flex;
}
</style>
