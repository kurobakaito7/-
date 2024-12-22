# React18 新特性

## 1. Render API

为了更好的管理root节点，React 18 引入了一个新的 root API，新的 root API 还支持 new concurrent renderer（并发模式的渲染），它允许你进入concurrent mode（并发模式）。
```js
// React 17
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root')!;

ReactDOM.render(<App />, root);

// React 18
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(<App />);
```

## 2. setState 自动批处理

React 18 通过在默认情况下执行批处理来实现了开箱即用的性能改进。

批处理是指为了获得更好的性能，在数据层，将多个状态更新批量处理，合并成一次更新（在视图层，将多个渲染合并成一次渲染）。

在React 18 之前，我们只在 React 事件处理函数 中进行批处理更新。默认情况下，在promise、setTimeout、原生事件处理函数中、或任何其它事件内的更新都不会进行批处理

在 18 之后，任何情况都会自动执行批处理，多次更新始终合并为一次

## 3. flushSync

批处理是一个破坏性改动，如果你想退出批量更新，你可以使用 flushSync

## 4. 关于卸载组件时的更新状态的警告

react18以前，在开发时，偶尔会遇到错误：**无法对未挂载（已卸载）的组件执行状态更新。这是一个无效操作，并且表明我们的代码中存在内存泄漏。**

这个错误的初衷，原本旨在针对一些特殊场景，譬如 你在useEffect里面设置了定时器，或者订阅了某个事件，从而在组件内部产生了副作用，而且忘记return一个函数清除副作用，则会发生内存泄漏…… 之类的场景
但是在实际开发中，更多的场景是，我们在 useEffect 里面发送了一个异步请求，在异步函数还没有被 resolve 或者被 reject 的时候，我们就卸载了组件。 在这种场景中，警告同样会触发。但是，在这种情况下，组件内部并没有内存泄漏，因为这个异步函数已经被垃圾回收了，此时，警告具有误导性。

综上所述原因，在 React 18 中，官方删除了这个报错。

## 5. React 组件的返回值

- 在 React 17 中，如果你需要返回一个空组件，React只允许返回null。如果你显式的返回了 undefined，控制台则会在运行时抛出一个错误。
- 在 React 18 中，不再检查因返回 undefined 而导致崩溃。既能返回 null，也能返回 undefined（但是 React 18 的dts文件还是会检查，只允许返回 null，你可以忽略这个类型错误）。

## 6. Strict Mode

当使用严格模式时，React 会对每个组件进行两次渲染，以便观察一些意想不到的结果。在 React 17 中，取消了其中一次渲染的控制台日志，以便让日志更容易阅读。

为了解决社区对这个问题的困惑，在 React 18 中，官方取消了这个限制。如果安装了React DevTools，第二次渲染的日志信息将显示为灰色，以柔和的方式显式在控制台。

## 7. Suspense 不再需要 fallback 来捕获

在 React 18 的 Suspense 组件中，官方对 空的fallback 属性的处理方式做了改变：不再跳过 缺失值 或 值为null 的 fallback 的 Suspense 边界。相反，会捕获边界并且向外层查找，如果查找不到，将会把 fallback 呈现为 null。

## 一些新的API

- useId

支持同一个组件在客户端和服务端生成相同的唯一的 ID，避免 hydration 的不兼容，这解决了在 React 17 及 17 以下版本中已经存在的问题。因为我们的服务器渲染时提供的 HTML 是无序的，useId 的原理就是每个 id 代表该组件在组件树中的层级结构。

- useSyncExternalStore

useSyncExternalStore 能够通过强制同步更新数据让 React 组件在 CM 下安全地有效地读取外接数据源，主要用来解决外部数据撕裂问题。

useSyncExternalStore 一般是三方状态管理库使用，比如 redux，它在控制状态时可能并非直接使用的 React 的 state，而是自己在外部维护了一个 store 对象，用发布订阅模式实现了数据更新，脱离了 React 的管理，也就无法依靠 React 自动解决撕裂问题。因此 React 对外提供了这样一个 API。

目前 React-Redux 8.0 已经基于 useSyncExternalStore 实现。

- useInsertionEffect

这个 Hooks 只建议 css-in-js 库来使用。 这个 Hooks 执行时机在 DOM 生成之后，useLayoutEffect 之前，它的工作原理大致和 useLayoutEffect 相同，只是此时无法访问 DOM 节点的引用，一般用于提前注入 `<style>` 脚本。

## Concurrent Mode（并发模式）

Concurrent Mode（以下简称 CM）翻译叫并发模式，并发模式可帮助应用保持响应，并根据用户的设备性能和网速进行适当的调整，该模式通过使渲染可中断来修复阻塞渲染限制。在 Concurrent 模式中，React 可以同时更新多个状态。

> React 17 和 React 18 的区别就是：从同步不可中断更新变成了异步可中断更新。

在 React 18 中，提供了新的 root api，我们只需要把 render 升级成 createRoot(root).render(`<App />`) 就可以开启并发模式了。

> 但是开启并发模式不是意味着开启并发更新，在 18 中，不再有多种模式，而是以是否使用并发特性作为是否开启并发更新的依据。

### 并发特性

1. startTransition

```js
import React, { useState, useEffect, useTransition } from 'react';

const App: React.FC = () => {
  const [list, setList] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    // 使用了并发特性，开启并发更新
    startTransition(() => {
      setList(new Array(10000).fill(null));
    });
  }, []);
  return (
    <>
      {list.map((_, i) => (
        <div key={i}>{i}</div>
      ))}
    </>
  );
};

export default App;

```

2. useDeferredValue

返回一个延迟响应的值，可以让一个state 延迟生效，只有当前没有紧急更新时，该值才会变为最新值。useDeferredValue 和 startTransition 一样，都是标记了一次非紧急更新。

> 区别: useTransition 是把更新任务变成了延迟更新任务，而 useDeferredValue 是产生一个新的值，这个值作为延时状态。（一个用来包装方法，一个用来包装值）

3. 普通情况

关闭并发特性，在普通环境中运行项目，组件数量繁多的时候容易造成页面阻塞卡顿。

> 这种将长任务分拆到每一帧中，像蚂蚁搬家一样一次执行一小段任务的操作，被称为时间切片（time slice）

## 关于 fiber

关于fiber，有三层具体含义：

- 作为架构来说，在旧的架构中，Reconciler（协调器）采用递归的方式执行，无法中断，节点数据保存在递归的调用栈中，被称为 Stack Reconciler，stack 就是调用栈；在新的架构中，Reconciler（协调器）是基于fiber实现的，节点数据保存在fiber中，所以被称为 fiber Reconciler。
- 作为静态数据结构来说，每个fiber对应一个组件，保存了这个组件的类型对应的dom节点信息，这个时候，fiber节点就是我们所说的虚拟DOM。
- 作为动态工作单元来说，fiber节点保存了该节点需要更新的状态，以及需要执行的副作用。