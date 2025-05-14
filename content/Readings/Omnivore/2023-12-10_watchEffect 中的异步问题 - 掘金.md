---
id: b341e812-97ec-11ee-b43b-03d3de336727
title: |
  watchEffect 中的异步问题 - 掘金
author: |
  子辰Web草庐
date_saved: 2023-12-10 21:30:24
date_published: 2023-12-10 21:30:24
draft: true
---

# watchEffect 中的异步问题 - 掘金
#Omnivore

[Read on Omnivore](https://omnivore.app/me/watch-effect-18c57844b2c)

[Read Original](https://juejin.cn/post/7310786618391265317)

date_saved: 2023-12-10 21:30:24

date_published: 2023-12-10 21:30:24

--- 

# Full Content: 

你能否正确地使用 watchEffect 来追踪响应式依赖呢？

![](https://proxy-prod.omnivore-image-cache.app/0x0,sjwYdb9mhJkoW5zwReapBgCM3c8pqMesg70Xd28jbS0U/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/16e7357eff7243c4bc2298932f1b6f99~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=431&h=316&s=5172205&e=gif&f=249&b=fefefe)

视频的倍数在 watchEffect 中并没有被收集，失效了，这是为什么？

大家好我是渡一前端子辰老师，这个问题来自一名同学反馈的，我们来看一下简化后的代码。

```django
<template>
  <div class="container">
    <video ref="videoRef" :src="url" controls></video>
    <!--  按钮调整倍率  -->
    <div class="btns">
      <button class="btn" :disabled="speed === 0.5" @click="speed -= 0.5">
        -0.5
      </button>
      <span class="speed">{{ speed.toFixed(1) }}</span>
      <button :disabled="speed === 3" class="btn" @click="speed += 0.5">
        +0.5
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { fetchVideoUrl } from './api/video';

const speed = ref(1);
const url = ref('');
const videoRef = ref(null);

watchEffect(async () => {
  // 远程去获取 url 地址
  url.value = await fetchVideoUrl();
  // 通过 video 的 ref，拿到 video，设置倍率
  videoRef.value.playbackRate = speed.value;
  // 用于检查 watchEffect 执行
  console.log('0')
});
</script>

```

## 解题

我们先来回顾一下 watchEffect 的特性和用法。

Vue watchEffect 是一个用于追踪响应式依赖的函数。

它可以让你在一个函数中使用响应式的数据，例如 ref 或 reactive 创建的对象，然后当这些数据变化时，自动重新执行这个函数。

它相当于将watch的依赖源和回调函数合并，不需要指定具体要观察的数据。

可以看到 watchEffect 的特性就是数据变化重新执行。

可是问题就在于，当他改变 speed 的值的时候，watchEffect 并没有被执行，我们在 watchEffect 最后打印一下看看。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s30d03p3ksHHPzwIG7-1BnJRti0LIS1YIjaqAfAnEx0A/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3916285a7f2b48cea619463f3ee90297~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=553&h=316&s=4033529&e=gif&f=211&b=fefefe)

可以看到 watchEffect 仅在第一次执行了，之后改变数据并没有继续输出。

其实问题就在于 watchEffect 只能收集同步代码的依赖，如果 watchEffect 中有异步代码，当遇到异步时就会停止依赖的收集。

套用到我们的代码中来说，就是你运行 watchEffect 就会立即运行它包含的函数，但是代码中 `url.value = await fetchVideoUrl();` 是异步代码且在第一行，所以 watchEffect 并没有收集到任何依赖。

问题我们知道了，但是这个代码写的就是有点问题的，为什么要在改变速率的时候要去重复请求 url 呢？这个只需要做一次就可以了。

可以改成这样。

```typescript
<script setup>
  import { ref, watchEffect } from 'vue';
  import { fetchVideoUrl } from './api/video';
  const speed = ref(1);
  const url = ref('');
  const videoRef = ref(null);
  (async () => {
    url.value = await fetchVideoUrl();
  })();
  watchEffect(async () => {
    videoRef.value.playbackRate = speed.value;
    console.log('0')
  });
</script>

```

我们将异步函数移除的话就可以实现 watchEffect 的正常收集了，我们看一下效果。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sai83Sqlj79s-c8d8eB4xH-xoXUFYDwnceujnpqjZQgE/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1820e1e1dddc49a4b58ab7c915dcafbe~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=436&h=316&s=4300275&e=gif&f=196&b=fdfdfd)

可以看到正常收集了。

我们回到原来的问题上，如果非要写异步在里边其实也是可以的，我们只要让 watchEffect 先收集一下同步代码就行。

```cs
<script setup>
  import { ref, watchEffect } from 'vue';
  import { fetchVideoUrl } from './api/video';
  const speed = ref(1);
  const url = ref('');
  const videoRef = ref(null);
  watchEffect(async () => {
    speed.value;
    url.value = await fetchVideoUrl();
    videoRef.value.playbackRate = speed.value;
  });
</script>

```

只需要把同步代码提到异步之前就可以了。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sC8gCYtD_37WQ_aKT74a299iTGqLd6g7k9LcPwiTeIJA/https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8579f3f2ce974d5dbac499e611a84090~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=436&h=316&s=4300275&e=gif&f=196&b=fdfdfd)

效果也是正常的。

## 总结

其实这个问题如果不注意的会让你调试很久，至于 watchEffect 为什么不收集异步，因为 Vue 源码就是这样写的。

比如说你给 watchEffect 传了一个函数 A，它的做法很简单 `new Watcher(A)`，Watcher 里边呢就是把 A 调用一次，它不管代码是异步还是同步。

所以说 A 运行，只运行了同步代码，剩下的异步代码还在微队列里等着呢。

那么只有在这个同步代码的运行期间才被收集了依赖。

如果说你们以后遇到了，watchEffect 里边需要在异步之后去收集依赖的话，就可以使用文章中的方法去解决一下。

## 本文来源

本文来源自渡一官方公众号:**Duing**，欢迎关注，获取**最新**、**最全**、**最深入**的技术讲解

感谢你阅读本文，如果你有任何疑问或建议，请在评论区留言，如果你觉得这篇文章有用，请点赞收藏或分享给你的朋友

---

