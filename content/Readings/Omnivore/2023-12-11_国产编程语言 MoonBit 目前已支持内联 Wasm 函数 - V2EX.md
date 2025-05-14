---
id: 0e7baede-9824-11ee-920a-2ff2bdd2439d
title: |
  国产编程语言 MoonBit 目前已支持内联 Wasm 函数 - V2EX
author: |
  unknown
date_saved: 2023-12-11 05:04:13
date_published: 2023-12-11 05:04:13
draft: true
---

# 国产编程语言 MoonBit 目前已支持内联 Wasm 函数 - V2EX
#Omnivore

[Read on Omnivore](https://omnivore.app/me/moon-bit-wasm-v-2-ex-18c58ef13cd)

[Read Original](https://www.v2ex.com/t/999461)

date_saved: 2023-12-11 05:04:13

date_published: 2023-12-11 05:04:13

--- 

# Full Content: 

### 1\. 支持使用 `type` 关键字定义 newtype

```sas
type MyInt Int derive(Show)

fn init {
    let x = MyInt::MyInt(5)
    println(x) // Output: MyInt(5)
    println(x.0) // Output: 5
}

```

### 2\. 支持内联 Wasm 函数，例如

```julia
fn char_to_string(c: Char) -> String =
   "(func $char_to_string (param $c i32) (result (ref $moonbit.string)) (array.new $moonbit.string (local.get $c) (i32.const 1)))"

```

不过目前内联 Wasm 指令只支持 wasm-gc 后端

### 3\. 改进自动分号插入

现在 MoonBit 支持下面的链式调用写法：

```jboss-cli
fn init {
  receiver
    .method1()
    .method2()
    .method3()
}

```

此外，多行的函数调用和结构体创建不再需要在最后加上逗号了：

```dts
fn init {
  let record = {
    x: 1,
    y: "abc" // 以前这里必须加逗号
  }
  function(
    arg1,
    arg2 // 以前这里必须加逗号
  )
}

```

### 4\. 字符串插值现在支持 Unicode

```nix
let s = "string interpolate unicode \( 中文 )"

```

### 5\. 优化字符串高亮

修改前

![](https://proxy-prod.omnivore-image-cache.app/0x0,sJHZ17FQqiWhDJzqiSb_O2k_nERikiijwOzXgr204pY0/https://ftihzt80mv.feishu.cn/space/api/box/stream/download/asynccode/?code=NTAwMWJmYzU4OGY2ZWIwOGQ1ZjRmZTQ4MTY3ZDhhMTVfT0N1S1kyUzhlZzFyMGRkUmZhTGI1M0ZtMU5sdUtoSGVfVG9rZW46T1NqMGJ6bnZsb21Dak14ZXdZM2Nud3VEbk9nXzE3MDIyODEzMTA6MTcwMjI4NDkxMF9WNA)

修改后

![](https://proxy-prod.omnivore-image-cache.app/0x0,swSyrCZ8rB_AOUxvqUvAYymgSkkSEb8Wpgsu6hPkSkdw/https://ftihzt80mv.feishu.cn/space/api/box/stream/download/asynccode/?code=OGM3M2I0MzMwNGU2MjBkOTA0ZmQxNDUzM2QxN2I2MDNfMEpucmM5ZHNtRnV1NGo5ZGVURVExZ1dvUTJVSWhNR09fVG9rZW46R2RCN2IxWVRCb0tqc0Z4SW9hbGMxV0ltbmNnXzE3MDIyODEzMTA6MTcwMjI4NDkxMF9WNA)

### 6\. 内置类型改进

* 字符串  
   * 添加 `String::make`

```gauss
fn init {
  let s = String::make(3, 'a')
  println(s) // Output: aaa
}

```

* 修复 `String::compare`，修改前 `String::compare` 只比较长度，修改后，按照字典序比较
* Bytes 和 Buffer  
   * 添加 Bytes 相关函数: `blit`, `to_string`, `of_string`, `sub_string`, `blit_from_string`, `copy`, `set_utf8_char`  
   * 新增 Buffer 类型和相关函数: `to_string`, `make`, `write_string`, `write_char`, `length`
* `Option` 添加 `Eq/Compare/Show/Default` 的默认实现， `Ref/Array` 添加 `Show` 的默认实现

---

