# react

## Hook

+ useEffect：获得DOM节点
+ useMemo：在组件每次重新渲染的时候缓存计算的结果，当消耗非常大的计算的场景可以使用
+ useCallback：在组件多次渲染的时候缓存函数
+ useImperativeHandle：通过 `ref` 暴露子组件中的方法

## API

+ `lazy` : 能够让组件第一次在被渲染之前延迟加载组件的代码。
+ `memo` : 允许组件在`props`没有改变的情况下跳过重新渲染
+ `forwardRef` : `forwardRef` 允许组件使用 `ref` 将 `DOM` 节点暴露给父组件

## 项目相关

### 打包优化
1. react路由懒加载
    + lazy函数对组件进行导入

2. 包体积分析
   通过可视化的方式，直观的体现项目中各种包打包之后的体积大小，方便做优化
   使用 `source-map-explorer` 库，在 `package.json` 的 `"script"` 中配置命令指定要分析的文件
   ```json
    "analyze": "source-map-explorer 'build/static/js/*.js'"
   ```
3. CDN优化

可以放到CDN服务器的资源：体积较大的非业务JS文件，比如react、react-dom
   1. 体积较大，需要利用CDN文件在浏览器的缓存特性，加快加载时间
   2. 非业务JS文件，不需要经常做变动，CDN不用频繁更新缓存

项目中配置：

```js
// craco.config.js中扩展Webpack配置

// 引入辅助函数
const { whenProd, getPlugin, pluginByName } = require('@craco/craco')

module.exports = {
  // webpack 配置
  webpack: {
    //代码省略....

    // 配置CDN
    configure: (webpackConfig) => {
      let cdn = {
        js: []
      }
      whenProd(() => {
        // key: 不参与打包的包(由dependencies依赖项中的key决定)
        // value: cdn文件中 挂载于全局的变量名称 为了替换之前在开发环境下
        webpackConfig.externals = {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
        // 配置现成的cdn资源地址
        // 实际开发的时候 用公司自己花钱买的cdn服务器
        cdn = {
          js: [
            'https://cdnjs.cloudflare.com/ajax/libs/react/18.1.0/umd/react.production.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js',
          ]
        }
      })
      // 通过 htmlWebpackPlugin插件 在public/index.html注入cdn资源url
      const { isFound, match } = getPlugin(
        webpackConfig,
        pluginByName('HtmlWebpackPlugin')
      )

      if (isFound) {
        // 找到了HtmlWebpackPlugin的插件
        match.userOptions.cdn = cdn
      }
      return webpackConfig
    }
  },
}
```

```html
<!-- public/index.html -->
<body>
  <div id="root"></div>
  <!-- 动态插入cdn资源url -->
  <% htmlWebpackPlugin.options.cdn.js.forEach(cdnURL=> { %>
    <script src="<%= cdnURL %>"></script>
    <% }) %>
</body>
```