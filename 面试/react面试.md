# react

## 从react 层面，能做的性能优化有哪些？

通过 react 的渲染，加载，对大量数据的处理，以及一些开发细节方面入手

### 控制react 的渲染

- useMemo
- PureComponent、shouldComponentUpdate
- React.memo

### 控制加载

懒加载和异步渲染：React.lazy 和 Suspense

### 大量数据

两种情况：
- 数据可视化，大量数据点位
- 长列表渲染

优化：
- 时间分片
- 虚拟列表

### 开发细节

- 开发过程中对于大量数据展示的模块，开发者有必要用 shouldComponentUpdate ，PureComponent来优化性能。
- 对于表单控件，最好办法单独抽离组件，独自管理自己的数据层，这样可以让 state 改变，波及的范围更小。
- 如果需要更精致化渲染，可以配合 immutable.js 。
- 组件颗粒化，配合 memo 等 api ，可以制定私有化的渲染空间。