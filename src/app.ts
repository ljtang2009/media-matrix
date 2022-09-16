import { createApp } from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

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
