const IS_PROD = process.env.NODE_ENV === 'production';

const plugins = [];
if (IS_PROD) {
  // 去除日志的插件
  plugins.push('transform-remove-console');
}

// 只有 使用默认主题 且 不切断换到其他主题 的时候才可以用这个方法按需加载。
// lazy load ant-design-vue
// if your use import on Demand, Use this code
// plugins.push([
//   'import',
//   {
//     libraryName: 'ant-design-vue',
//     libraryDirectory: 'es',
//     style: true,
//     // style: 'css',
//   },
// ]);

module.exports = {
  presets: [
    '@babel/env',
    [
      '@babel/preset-typescript',
      {
        isTSX: true, // 必须设置，否者编译tsx时会报错
        allowNamespaces: true,
        allExtensions: true, // 必须设置，否者编译.vue 文件中ts 代码会报错
      },
    ],
  ],
  plugins,
};
