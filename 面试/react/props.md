# props

props 是 React 组件通信最重要的手段，它在 React 的世界中充当的角色是十分重要的。

## 如果从 React 的组件设计思想出发，组件的作用是什么呢？

- 一方面，它可以作为渲染UI视图的容器。
- 另一方面，组件之间就像发动机的各个零件，想要让 React 这台机器运作起来，就要处理好各个零件，也就是各个组件之间的联系，而props 担任的角色就是将每个组件联系起来。

## props 的作用

### 在 React 组件层级 props 充当的角色

一方面父组件 props 可以把数据层传递给子组件去渲染消费。另一方面子组件可以通过 props 中的 callback ，来向父组件传递信息。还有一种可以将视图容器作为 props 进行渲染。

### 从 React 更新机制中 props 充当的角色

在 React 中，props 在组件更新中充当了重要的角色，在 fiber 调和阶段中，diff 可以说是 React 更新的驱动器， 我们知道 vue 中基于响应式，数据的变化，就会颗粒化到组件层级，通知其更新，但是在 React 中，无法直接检测出数据更新波及到的范围，props 可以作为组件是否更新的重要准则，变化即更新，于是有了 PureComponent ，memo 等性能优化方案。

### 从React插槽层面props充当的角色

React 可以把组件的闭合标签里的插槽，转化成 Children 属性

## 监听 props 改变

### 类组件中

componentWillReceiveProps 可以作为监听props的生命周期，但是 React 已经不推荐使用componentWillReceiveProps ，未来版本可能会被废弃，因为这个生命周期超越了 React 的可控制的范围内，可能引起多次执行等情况发生。于是出现了这个生命周期的替代方案 getDerivedStateFromProps

### 函数组件中

函数组件中同理可以用 useEffect 来作为 props 改变后的监听函数。(不过有一点值得注意, useEffect 初始化会默认执行一次)

## props children模式

props + children 模式 在 React 中非常常用，尤其对一些优秀开源组件库。比如 react-router 中的 Switch 和 Route ， antd 中的 Form 和 FormItem。

1. props 插槽组件
```js
<Container>
    <Children>
</Container>
```

上述可以在 Container 组件中，通过 props.children 属性访问到 Children 组件，为 React element 对象

2. render props模式
```js
<Container>
   { (ContainerProps)=> <Children {...ContainerProps}  /> }
</Container>
```
这种情况，在 Container 中， props.children 属性访问到是函数，并不是 React element 对象，针对这种情况，像下面这种情况下 children 是不能直接渲染的，直接渲染会报错。
```js
function  Container(props) {
     return  props.children
}
```

改写：
```js
function  Container(props) {
    const  ContainerProps = {
        name: 'alien',
        mes:'let us learn react'
    }
     return  props.children(ContainerProps)
}
```

3. 混合模式

如果 Container 的 Children 既有函数也有组件

```js
<Container>
    <Children />
    { (ContainerProps)=> <Children {...ContainerProps} name={'haha'}  />  }
</Container>
```

这种情况需要先遍历 children ，判断 children 元素类型：
- 针对 element 节点，通过 cloneElement 混入 props
- 针对函数，直接传递参数，执行函数

```js
const Children = (props)=> (<div>
    <div>hello, my name is {  props.name } </div>
    <div> { props.mes } </div>
</div>)

function  Container(props) {
    const ContainerProps = {
        name: 'alien',
        mes:'let us learn react'
    }
     return props.children.map(item=>{
        if(React.isValidElement(item)){ // 判断是 react elment  混入 props
            return React.cloneElement(item,{ ...ContainerProps },item.props.children)
        }else if(typeof item === 'function'){
            return item(ContainerProps)
        }else return null
     })
}

const Index = ()=>{
    return <Container>
        <Children />
        { (ContainerProps)=> <Children {...ContainerProps} name={'haha'}  />  }
    </Container>
}
```

## 操作 props

