import { createApp } from 'vue';
import App from '@/App.vue';
import { createPinia } from 'pinia';
import '@/style/global.less';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

import { Layout, Menu, Button, Drawer, ConfigProvider} from 'ant-design-vue';

app.use(Layout);
app.use(Menu);
app.use(Button);
app.use(Drawer);
app.use(ConfigProvider);

app.mount('#app');
