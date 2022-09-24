import { createApp } from 'vue';
import App from '@/App.vue';
import { createPinia } from 'pinia';
import '@/style/global.less';
import { ThemeType, changeTheme } from '@/common/theme';

changeTheme(ThemeType.light);

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

import { Layout, Menu, Button } from 'ant-design-vue';

app.use(Layout);
app.use(Menu);
app.use(Button);

app.mount('#app');
