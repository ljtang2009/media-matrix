<template>
  <div>
    <a-layout class="layout">
      <a-layout-sider collapsible theme="dark">
        <div class="logo" />
        <a-menu>
          <a-menu-item v-for="n in 20" :key="n">่ๅ้กน</a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="layout-header layout-header-light">Header</a-layout-header>
        <a-layout-content>
          <div>name: {{ userStore.name }}</div>
          <div>doubleValue: {{ doubleValue }}</div>
          <div>
            <a-button type="primary" @click="changeTheme(ThemeType.light)">light</a-button>
          </div>
          <div>
            <a-button type="primary" @click="changeTheme(ThemeType.dark)">dark</a-button>
          </div>
          <div>
            <a-button type="primary" @click="visible = !visible">toggle drawer</a-button>
          </div>
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
    <a-drawer v-model:visible="visible">
      <p>1234</p>
    </a-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import useAppStore from '@/store/app';
import { ThemeType, changeTheme } from '@/core/theme';

export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);

    const userStore = useAppStore();

    return {
      userStore,
      doubleValue: computed(() => userStore.doubleCount),
      ThemeType,
      changeTheme,
      visible
    };
  },
});
</script>
-->
<style scoped lang="less">
@header-height: 48px;

.layout {
  height: 100%;
}

.layout-header {
  height: @header-height;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  padding: 0 16px;
}

.layout-header-light {
  background-color: #ffffff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
