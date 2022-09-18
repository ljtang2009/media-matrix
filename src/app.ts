import { createApp } from 'vue';
import App from './App.vue';
import '@/style/common.less';

const app = createApp(App);

import { Button, Layout } from 'ant-design-vue';
app.use(Layout);
app.use(Button);

app.mount('#app');

// const s = 1;
// function func(arg: string) {
//   // console.log(arg);
//   throw arg;
// }
// func(s);

async function func() {
  const { default: module1 } = await import('./module1');
  console.log(module1.key1);
}

func();
