<template>
  <a-layout class="app-layout">
    <a-layout-header class="app-header-layout">
      <div class="app-header">Header</div>
    </a-layout-header>
    <a-layout-content>Content</a-layout-content>
  </a-layout>
</template>
<script setup lang="ts">
// 启用了 TypeScript
// import { ref } from 'vue';
// import Com1 from './Com-1.vue';

// const count = ref('100');

// const s = 1;
// function func(arg: string) {
//   console.log(arg);
// }
// func(s);
</script>
<style scoped lang="less">
.app-layout {
  width: 100%;
  height: 100%;
  // flex-direction: row;
}

.app-header-layout {
  padding: 0;
  height: 48px;
  line-height: 48px;
}
.app-header {
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
</style>
