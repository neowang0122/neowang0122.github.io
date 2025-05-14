---
id: 6a0ecbd4-97eb-11ee-8dc0-d394665d8200
title: |
  WebAssembly 需要考虑碎片化问题吗？ - V2EX
author: |
  unknown
date_saved: 2023-12-10 22:24:47
date_published: 2023-12-10 22:24:47
draft: true
---

# WebAssembly 需要考虑碎片化问题吗？ - V2EX
#Omnivore

[Read on Omnivore](https://omnivore.app/me/web-assembly-v-2-ex-18c577bddd5)

[Read Original](https://www.v2ex.com/t/999314)

date_saved: 2023-12-10 22:24:47

date_published: 2023-12-10 22:24:47

--- 

# Full Content: 

写了个精简的 WebAssembly 模块做测试：

```hy
(module
  (table (;0;) (export "a") 2 2 funcref)
  (memory (;0;) (export "b") 64 64)
  (global (mut i32) (i32.const 1))
  (elem  (i32.const 1) funcref (ref.func $1))
  (func $1 (;0;) (export "c")
    nop
  )
)

```

通过 <https://webassembly.github.io/wabt/demo/wat2wasm/> 转换。

主浏览器测试都没问题，但在线测试发现不少用户报错：

```coq
WebAssembly.Module doesn't parse at byte 20: Table section of size 5 would overflow Module's size (evaluating 'new WebAssembly.Module(c)')

```

而且都是 iOS 15 之前 Safari 浏览器。

这个测试案例用的都是 emscripten 编译的 wasm 的基本特性，没用更高级的特性。对于这种情况，需要考虑兼容性吗？

| ![tool2d](https://proxy-prod.omnivore-image-cache.app/0x0,soBu9q39vBkTkY6A0fcPNUrRu_6oo9HfN34Tsq4gVbnc/https://cdn.v2ex.com/avatar/9e4b/c61b/561400_normal.png?m=1685524042) | 1 **[tool2d](https://www.v2ex.com/member/tool2d)** 2 小时 17 分钟前 我用的 google 官方的 C/C++ DevTools Support (DWARF)插件，说了需要 chrome105 内核，我偏不信，硬是移植到 chrome 9x 的版本运行。结果似乎 wasm 的二进制不兼容，运行失败。感觉就是加了一些不支持的特性，就挺麻烦的。我现在都是优先用 emscripten 生成 js 文件，浏览器兼容性最好了。反正 JS 堆界面并不太需要运行速度。 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

| ![flyqie](https://proxy-prod.omnivore-image-cache.app/0x0,sxxVezKYp-hmsKrAdSJWtYBcXk-d5Q3fsiE13sVlFSpM/https://cdn.v2ex.com/avatar/780c/2390/196349_normal.png?m=1680278135) | 2 **[flyqie](https://www.v2ex.com/member/flyqie)** 1 小时 37 分钟前 via Android wasm 目前兼容性。。不建议强推，除非真的必须。 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |

[](https://wwads.cn/click/bait)[![万维广告联盟](https://proxy-prod.omnivore-image-cache.app/130x0,sQZCiJD8Gza9iH1vnhhGOUjfAviUjgukZ37oPJNYWIGI/https://cdn.wwads.cn/creatives/TJiqU9LJrfPyyBbauAna1Lptzb4pf9CYdWn8FTCs.jpg)](https://wwads.cn/click/bundle?code=shpNUBcns8oB04BLJ17tYHsFkmoYnv)

![](https://proxy-prod.omnivore-image-cache.app/0x0,s6B4Ku9s0Tbz8J8IAj9Z5ZYr1Y70JiMgEcy6L6eVK9sc/data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='7' fill='%23a6b7bf'%3E%3Cpath d='M.879.672L3 2.793 5.121.672a.5.5 0 11.707.707L3.708 3.5l2.12 2.121a.5.5 0 11-.707.707l-2.12-2.12-2.122 2.12a.5.5 0 11-.707-.707l2.121-2.12L.172 1.378A.5.5 0 01.879.672z'/%3E%3C/svg%3E)

---

