


# 注意事项

## 开发环境
* nvm -> nodeJS 版本切换
* react-native-cli 版本查看
* react-native 版本查看(项目中)
* react-native 版本升级及降级(项目中)
* react-native webstorm 语法智能提示

## JavaScript语法转换器

   语法转换器可以使编写代码的过程更加享受，因为开发者可以借助转换器直接使用新的JavaScirpt语法标准，而无需等待JS解释器的支持。

   React Native从0.5.0版本开始已经内置Babel转换器。你可以查看Babel的文档来了解有关它可以转换的语法的详情。

   这里可以看到目前React Native默认开启的语法转换特性。

   ES5

       保留关键字: promise.catch(function() { });

   ES6

       箭头函数Arrow functions: <C onPress={() => this.setState({pressed: true})}
       块级作用域Block scoping: let greeting = 'hi';
       数组的扩展运算Call spread: Math.max(...array);
       类Classes: class C extends React.Component { render() { return <View />; } }
       常量Constants: const answer = 42;
       解构Destructuring: var {isActive, style} = this.props;
       for...of: for (var num of [1, 2, 3]) {}
       模块Modules: import React, { Component } from 'react';
       动态属性键Computed Properties: var key = 'abc'; var obj = {[key]: 10};
       对象方法的简写Object Consise Method: var obj = { method() { return 10; } };
       对象属性的简写Object Short Notation: var name = 'vjeux'; var obj = { name };
       参数的扩展运算Rest Params: function(type, ...args) { }
       字符串模板Template Literals: var who = 'world'; var str = `Hello ${who}`;

   ES7

       对象的扩展运算Object Spread: var extended = { ...obj, a: 10 };
       参数列表末尾允许放置逗号Function Trailing Comma: function f(a, b, c,) { }
       Async函数: async function doStuffAsync() { const foo = await doOtherStuffAsync(); };

   其他特性

       JSX: <View style={{color: 'red'}} />
       Flow: function foo(x: ?number): string {}

   接口兼容（Polyfills）

   许多标准功能也都在支持的JavaScript运行环境上做了兼容支持。

   浏览器

       console.{log, warn, error, info, trace, table}
       CommonJS require
       XMLHttpRequest, fetch
       {set, clear}{Timeout, Interval, Immediate}, {request, cancel}AnimationFrame
       navigator.geolocation

   ES6

       Object.assign
       String.prototype.{startsWith, endsWith, repeat, includes}
       Array.from
       Array.prototype.{find, findIndex}

   ES7

       Object.{entries, values}

   其他特性

       __DEV__


## AppRegistry 坑, moduleName与class对象是分开定义的

## es6 写react-native 对象旧es5

## es6 详解系列blog

## 每个组件只能return一个单独的View容器

## 封装组件

## js打包(curl url -o main.jsbundel)及app内部发布

## flexbox 布局
* View style flex的坑, 默认每个View都自带display默认每个View都自带display: flex及flex容器各样式属性的默认值, flexDirection默认值不同于html5的横排而是竖排
* View style flex alignItems 默认值为'stretch', 容器的子元素这个方向的宽或高会继承这个方向父元素的宽或高, 设置为'center'后容器中的子元素变为内容自适应这个方向的宽或高
* View style flex 当容器中只有一个子元素时,容器设置justifyContent: 'center'和'space-around'效果是一样的

## View
* Text 才能使用html5部分文本样式, 其他标记, 如View不会生效
* 标记的style写法, 字面量二个大括号, 单个style定义一个大括号, 多个style定义一个大括号+数组
* 属性ref使用方法及作用(js获取react-native元素对象)
* 通过ref获取元素对象, 改变style样式属性(setNativeStyle)

## Image
* react-native 静态图片 不需要手动指定尺寸
* ios原生app 资源图片 不需要手动指定尺寸
* network 网络图片
* 本地文件系统中的图片(重要! 比如:相册图片, 还未查看camera roll例子)
* 模拟实现背景图片

* resize Mode(cover, contain, stretch), 前二者效果同css3 background-size
* 图片预加载 0.25版本开始直接支持
* 图片加载进度控制
* 图片加载onError触发后,会自动重新发几次请求,造成多次onLoadStart
* 获取图片实际尺寸(多用于网络图片)
* 支持gif动画图(ios)
* tintColor 设置所有非透明的像素点颜色, 矢量图上特别有用
* capInsets {top: number, left: number, bottom: number, right: number}
  (对图片)当图片被缩放的时候，capInsets指定的角上的尺寸会被固定而不进行缩放，而中间和边上其他的部分则会被拉伸。这在制作一些可变大小的圆角按钮、阴影、以及其它资源的时候非常有用（译注：这就是常说的九宫格或者.9图

## CSS
* 支持rgba配色, 如backgroundColor: 'rgba(0, 0, 100, 0.25)'
* 支持opacity透明度
* Text中的子Text连backgroundColor都可以继承-_-!!!

## Text
* Text中的子Text设置padding,margin无效

## Dimensions
* Dimensions.get('window').width/height, 必须等初始View加载完成后才有值, 否则为undefined

## gesture/responder (非常重要, 有点复杂)
* 普通事件响应  支持从捕获,目标,冒泡三个阶段的事件的处理, 支持阻止捕获和冒泡  (注意:响应者的生命周期)
* 手势事件响应  PanResponder支持特殊手势响应, 也同时支持普通事件响应

##  Animatation
*  Animated 默认可以对Image, Text, View实现动画, 可以扩展动画组件, 通过直接的API声明来产生实际动画
*  LayoutAnimation 实现效果相对比较简单, 通过state改变来产生实际动画

## Navigator
*  Navigator自定义手势事件, 切换动画等(需要使用Navigator而不是NavigatorIOS, 垂直旋转, 侧滑回退等)


## fetch
*  已支持timeout设置

# Daily

# day1
## app entrance
* ios9 how to set LanchImage
* react-native-swiper
* CSS, Image(resizeMode), Dimensions, PixelRatio