<template>
  <a-config-provider :locale="locale">
    <div>123</div>
  </a-config-provider>
</template>

<script lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const locale = zhCN // TODO 动态国际化
    return {
      locale
    }
  }
})
</script>
