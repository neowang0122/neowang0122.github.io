---
id: b7f9dacc-9800-11ee-93c9-7fd255d66364
title: |
  最近 jrebel 出问题了吗？似乎跟 jackson 有兼容性问题？ - V2EX
author: |
  unknown
date_saved: 2023-12-11 03:01:46
date_published: 2023-12-11 03:01:46
draft: true
---

# 最近 jrebel 出问题了吗？似乎跟 jackson 有兼容性问题？ - V2EX
#Omnivore

[Read on Omnivore](https://omnivore.app/me/jrebel-jackson-v-2-ex-18c58077c9f)

[Read Original](https://www.v2ex.com/t/999409)

date_saved: 2023-12-11 03:01:46

date_published: 2023-12-11 03:01:46

--- 

# Full Content: 

IDEA + JREBEL 插件，试了好几个版本的旧插件也不行，尝试不同的 spring-boot-starter-parent 版本也不行。

```reasonml
***************************
APPLICATION FAILED TO START
***************************

Description:

An attempt was made to call a method that does not exist. The attempt was made from the following location:

    com.fasterxml.jackson.databind.ObjectMapper$1.addSerializers(ObjectMapper.java:935)

The following method did not exist:

    com.fasterxml.jackson.databind.ObjectMapper._jr$ig$_serializerFactory(Ljava/lang/Object;)Lcom/fasterxml/jackson/databind/ser/SerializerFactory;

The calling method's class, com.fasterxml.jackson.databind.ObjectMapper$1, was loaded from the following location:

    jar:file:/E:/maven-cache/repository/com/fasterxml/jackson/core/jackson-databind/2.13.5/jackson-databind-2.13.5.jar!/com/fasterxml/jackson/databind/ObjectMapper$1.class

The called method's class, com.fasterxml.jackson.databind.ObjectMapper, is available from the following locations:

    jar:file:/E:/maven-cache/repository/com/fasterxml/jackson/core/jackson-databind/2.13.5/jackson-databind-2.13.5.jar!/com/fasterxml/jackson/databind/ObjectMapper.class

The called method's class hierarchy was loaded from the following locations:

    com.fasterxml.jackson.databind.ObjectMapper: file:/E:/maven-cache/repository/com/fasterxml/jackson/core/jackson-databind/2.13.5/jackson-databind-2.13.5.jar
    com.fasterxml.jackson.core.ObjectCodec: file:/E:/maven-cache/repository/com/fasterxml/jackson/core/jackson-core/2.13.5/jackson-core-2.13.5.jar
    com.fasterxml.jackson.core.TreeCodec: file:/E:/maven-cache/repository/com/fasterxml/jackson/core/jackson-core/2.13.5/jackson-core-2.13.5.jar

```

[](https://wwads.cn/click/bait)[![万维广告联盟](https://proxy-prod.omnivore-image-cache.app/130x0,sXMDEc_fieduFEg65bgE5q0M-WnJY7xrrnLgP2J7wejU/https://cdn.wwads.cn/creatives/Yql3AXYBn0GEzlbroN8RsH16W4JLvMibTWD5Leww.png)](https://wwads.cn/click/bundle?code=18pRUVzcIg50vA45EzAdCHUL5sFNiq)

![](https://proxy-prod.omnivore-image-cache.app/0x0,s6B4Ku9s0Tbz8J8IAj9Z5ZYr1Y70JiMgEcy6L6eVK9sc/data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='7' fill='%23a6b7bf'%3E%3Cpath d='M.879.672L3 2.793 5.121.672a.5.5 0 11.707.707L3.708 3.5l2.12 2.121a.5.5 0 11-.707.707l-2.12-2.12-2.122 2.12a.5.5 0 11-.707-.707l2.121-2.12L.172 1.378A.5.5 0 01.879.672z'/%3E%3C/svg%3E)

---

