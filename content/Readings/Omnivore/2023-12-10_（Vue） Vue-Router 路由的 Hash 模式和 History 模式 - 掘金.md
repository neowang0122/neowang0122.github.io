---
id: cac6b850-97ec-11ee-a9da-4bafd2d6a1a1
title: |
  （Vue） Vue-Router 路由的 Hash 模式和 History 模式 - 掘金
author: |
  KillerQueen
date_saved: 2023-12-10 21:10:24
date_published: 2023-12-10 21:10:24
draft: true
---

# （Vue） Vue-Router 路由的 Hash 模式和 History 模式 - 掘金
#Omnivore

[Read on Omnivore](https://omnivore.app/me/vue-vue-router-hash-history-18c5784e549)

[Read Original](https://juejin.cn/post/7310569308916301836)

date_saved: 2023-12-10 21:10:24

date_published: 2023-12-10 21:10:24

--- 

# Full Content: 

Vue-Router是Vue.js官方提供的路由管理器，它支持两种模式：Hash模式和History模式。这两种模式在单页面应用（SPA）开发中起到了至关重要的作用，但它们有着不同的特点和使用场景。在本文中，我们将深入探讨Hash模式和History模式之间的区别，以及它们各自的优劣势。

## 1\. Hash 模式

## 1.1 简介

Hash模式是Vue-Router默认的模式。在Hash模式中，URL带有一个`#`符号，例如：`http://www.abc.com/#/vue`，其中`#/vue`就是Hash值。

## 1.2 特点

* Hash值出现在URL中，但不会出现在HTTP请求中，对后端没有影响。
* 改变Hash值不会重新加载页面，因为浏览器可以通过`onhashchange()`事件监听Hash值的变化，从而实现前端路由切换。
* 浏览器支持度很好，包括低版本的IE浏览器，已经成为SPA的标配。

## 1.3 原理

Hash模式的主要原理是`onhashchange()`事件，无需向后端发起请求，浏览器可以监听Hash值的变化，并按规则加载相应的代码。同时，Hash值的变化会被浏览器记录，实现页面的前进和后退功能。

## 2\. History 模式

## 2.1 简介

History模式的URL中没有`#`符号，采用传统的路由分发模式，即用户输入URL时，服务器接收请求并解析URL，然后进行相应的逻辑处理。

## 2.2 特点

* URL更加美观，不带`#`符号。
* 需要后台配置支持，否则访问时可能返回404错误。

## 2.3 API

History模式使用History API，包括`pushState()`和`replaceState()`方法用于修改历史状态，以及`forward()`、`back()`、`go()`方法用于切换历史状态。

## 2.4 配置

切换到History模式需要前端和后端进行相应的配置，否则在刷新页面时可能会出现404错误。

## 3\. 两种模式对比

## 3.1 History 模式优势

* `pushState()`设置的新URL可以与当前URL同源的任意URL，而Hash只能修改`#`后面的部分。
* 可以设置与当前URL一模一样的新URL，将记录添加到栈中。
* 可以通过`stateObject`参数添加任意类型的数据到记录中，而Hash只能添加短字符串。
* 可以额外设置`title`属性供后续使用。

## 3.2 URL处理

* 在Hash模式下，仅Hash符号之前的URL会被包含在请求中，后端如果没有覆盖所有路由，也不会返回404错误。
* 在History模式下，前端URL必须和实际向后端发起请求的URL一致，否则将返回404错误。

## 4\. 配置方法

### 1\. 配置 Hash 模式

#### 1.1 安装 Vue-Router

首先，确保你的项目已经安装了Vue和Vue-Router。

```cmake
npm install vue vue-router

```

#### 1.2 配置 Vue-Router

在你的`main.js`（或者入口文件）中配置Vue-Router，选择Hash模式：

```javascript
// main.js

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/vue', component: VueComponent },
  // 其他路由配置
]

const router = new VueRouter({
  mode: 'hash', // 指定使用 hash 模式
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

```

### 2\. 配置 History 模式

#### 2.1 后端支持

确保后端支持History模式，通常需要在后端进行配置以防止在刷新页面时出现404错误。

#### 2.2 Vue-Router 配置

在`main.js`中选择History模式：

```javascript
// main.js

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/user/:id', component: UserComponent },
  // 其他路由配置
]

const router = new VueRouter({
  mode: 'history', // 指定使用 history 模式
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

```

### 3\. 路由基本用法

无论是Hash模式还是History模式，路由的基本用法都是相似的。在组件中可以使用`<router-link>`实现导航，使用`<router-view>`显示匹配的组件。

```xml
<!-- App.vue -->

<template>
  <div id="app">
    <router-link to="/vue">Go to Vue Component</router-link>
    <router-link to="/user/1">Go to User Component</router-link>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 样式 */
</style>

```

在上述代码中，`<router-link>`用于创建导航链接，`<router-view>`则用于显示当前路由匹配到的组件。

## 5\. 结论

Hash模式和History模式各有优劣，选择合适的模式取决于实际需求。Hash模式在浏览器支持和前进后退功能上有优势，而History模式更加美观，但需要后台支持。在项目中根据具体情况选择路由模式，是保障应用性能和用户体验的重要一环。

---

