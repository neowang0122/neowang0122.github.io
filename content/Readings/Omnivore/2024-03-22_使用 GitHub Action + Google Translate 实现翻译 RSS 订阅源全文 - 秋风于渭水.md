---
id: 2c709f4f-d62e-4d14-bf6f-251a41e51375
title: |
  使用 GitHub Action + Google Translate 实现翻译 RSS 订阅源全文 - 秋风于渭水
author: |
  unknown
date_saved: 2024-03-22 21:13:46
date_published: 2023-03-26 12:43:18
draft: true
---

# 使用 GitHub Action + Google Translate 实现翻译 RSS 订阅源全文 - 秋风于渭水
#Omnivore

[Read on Omnivore](https://omnivore.app/me/git-hub-action-google-translate-rss-18e68def4b6)

[Read Original](https://www.tjsky.net/tutorial/644)

date_saved: 2024-03-22 21:13:46

date_published: 2023-03-26 12:43:18

--- 

# Full Content: 

浏览: 898 次浏览 作者: 去年夏天 分类: [佳软推荐](https://www.tjsky.net/category/best-software),[技术文章](https://www.tjsky.net/category/tutorial) 

随着 RSS 订阅源越来越多，从非中文 RSS 订阅源获取消息就出了点问题，  
英文站点不多的时候，看原始文章标题还是没感到什么阻碍的。所以并没有使用到翻译。  
随着订阅源增多，再怎么说英语也不是日常语言，获取信息的速度明显不如中文，  
况且慢慢地有俄语，韩语等语言的订阅源，就完全看不懂了，产生了翻译 RSS 的需求。  
在一番寻找下，最终找了一个基于 GitHub Action + Google Translate 实现翻译 RSS 订阅源全文的项目。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s76EYnzCmif_5Fxja8TzEHtcImx4_ZFnIA2qHYuElYxQ/https://img.tjsky.net/2023/03/d8b1e2c463af1f764cb79b87252e2065.png)

> 2023-11-24更新 此文可能已经落后版本，请查看新的文章《[本地/云端部署 AI 翻译 RSS 订阅源工具](https://www.tjsky.net/tutorial/801 "本地/云端部署 AI 翻译 RSS 订阅源工具")》

---

文章目录

* [需要准备的东西](#i)
* [GitHub部署](#GitHub)  
   * [Fork项目](#Fork)  
   * [记录三个需要的参数](#i-2)  
         * [U\_NAME](#U%5FNAME)  
         * [U\_EMAIL](#U%5FEMAIL)  
         * [WORK\_TOKEN](#WORK%5FTOKEN)  
   * [设置需要的令牌](#i-3)  
   * [给需要的权限](#i-4)  
   * [设置需要的 RSS 翻译订阅源](#%5FRSS)  
   * [测试翻译](#i-5)  
   * [修改运行参数](#i-6)
* [使用 RSS 翻译订阅源全文](#%5FRSS-2)
* [注意](#i-7)

---

## 需要准备的东西

这次你只需要准备一个github账号。  
注册地址（[https://github.com/signup](https://www.tjsky.net/goto/?url=https://github.com/signup "https://github.com/signup")）  
输入邮箱地址和密码，选择免费计划，验证邮箱地址，按照提示操作，创建您的个人帐户。  
PS：如果你感觉部分内容是英文的识别困难，用浏览器的翻译功能吧。

## GitHub部署

### Fork项目

1. 登录你的Github，并且进入项目（[https://github.com/tjsky/RSS-Translation](https://www.tjsky.net/goto/?url=https://github.com/tjsky/RSS-Translation "https://github.com/tjsky/RSS-Translation")）
2. 点击右上角的【Fork】将项目复刻到你自己的仓库
3. 如果你有git使用基础，请将fork到的代码重新add到一个新的仓库使用，而不是直接修改fork后的这个仓库使用。  
   * 这是因为 GitHub 会根据此上游的存储库计算 fork GitHub Actions 使用情况，这可能会导致此上游的存储库被判定为滥用action而被 GitHub 工作人员封禁。最知名的因此遭殃的项目就是LSPosed的项目。**（意思就是如果万一说不准这个项目未来火了，fork的人太多，作者的仓库就有可能会被封了）**  
   * 如果你想支持原作者 [talengu](https://www.tjsky.net/goto/?url=https://github.com/talengu/rss-translate) 和 [rcy1314](https://www.tjsky.net/goto/?url=https://github.com/rcy1314/Rss-Translation) 可以 fork+star 他的仓库一下，但就别启用 action 了，而是建立自己的仓库使用。

### 记录三个需要的参数

#### U\_NAME

就是你github的用户名，你可以点右上角的头像看到一行字：  
`Signed in as xxxxxx`，这个xxxx就是你的用户名

#### U\_EMAIL

就是你github的注册邮箱，如果你实在是记不清了，可以点右上角的头像  
Settings→Access→Emails，然后右侧就会看到你的邮箱了

#### WORK\_TOKEN

因为项目涉及使用脚本操作仓库内容，所以需要给脚本修改仓库内文件的权限，需要申请一个Repository Secret令牌。  
1\. 点击网页右上角自己的头像，点 【Settings】  
![img](https://proxy-prod.omnivore-image-cache.app/0x0,sBPbeupjNGkbnRqGqKoVylQpFqZX4JF7uFPlZiv6-Lww/https://img.tjsky.net/2023/03/29f6cfe81bc03557aedad19abdb33919.png)

1. 点击左侧最下方的【Developer settings】  
![](https://proxy-prod.omnivore-image-cache.app/0x0,serPk-L4UgHUDzJeGppspqHxuUlO4m55bty4j2zmkHEk/https://img.tjsky.net/2023/03/4e47a98edffdf66b38be46a4c0232a70.png)
2. 点击左侧下方的【Personal access tokens】-【Tokens(classic)】 ，点击左上角的 【Generate new token （classic）】新建一个token  
![](https://proxy-prod.omnivore-image-cache.app/0x0,sz58I6XLHg2fqIQTh47KRJCmP-HmZ49vXh_mMkB7ao8k/https://img.tjsky.net/2023/03/9bf2fe1b0b54cb2c352896aae71d83b4.png)
3. 新建token
* Note: rss translate
* Select scopes:勾选【repo】和【workflow】（你直接勾workflow，repo就全勾上了）
* Expiration：选【No expiration】（无期限）
* 点击页面最下方的 【Generate token】  
![](https://proxy-prod.omnivore-image-cache.app/0x0,sK9ucJuzayJLQFfqrqdaacTv7s-Ck21ZZd8lxSvuw5cM/https://img.tjsky.net/2023/03/ffacdb28656d9482de3dd0c9d265bc06.png)
1. 复制token  
**注意一定要在这里复制好，错过这个页面你就再也看不到token了。**  
**注意一定要在这里复制好，错过这个页面你就再也看不到token了。**  
**注意一定要在这里复制好，错过这个页面你就再也看不到token了。**  
![](https://proxy-prod.omnivore-image-cache.app/0x0,s4X3fQEcQLhgclOJqucqKwpvXkc6vXvKmBXaK9i-AdP8/https://img.tjsky.net/2023/03/2ad554b2adc04cb6dfad17b25620d388.jpeg)

### 设置需要的令牌

点击 【Settings】，展开左侧的【Secrets and varlables】，点击【Actions 】 点击【 New repository secret】

![](https://proxy-prod.omnivore-image-cache.app/0x0,s48a_mho_fhvgntcgiiiFdtXCW3ofCjhvBlIuJwEVQxc/https://img.tjsky.net/2023/03/e9720df9254aa203bc5e2b95cad0d64d.png)

* 给翻译仓库设定 U\_NAME 参数  
   * Name: U\_NAME  
   * Value: 上边U\_NAME所说的你的用户名  
   * 点击 【Add secret】
* 给翻译仓库设定 U\_EMAIL 参数  
   * Name: U\_EMAIL  
   * Value: 上边 U\_EMAIL 所说的你的邮箱  
   * 点击 【Add secret】
* 给翻译仓库设定 WORK\_TOKEN 参数  
   * Name: WORK\_TOKEN  
   * Value: 上边 WORK\_TOKEN 所说的你的令牌  
   * 点击 【Add secret】

### 给需要的权限

1. 给与actions读写权限  
   * 点击 【Settings】，展开**左侧的**【Actions】  
   * 点击【General 】 找到【 Workflow permissions】  
   * 将选项改为【Read and write permissions】  
   * 点击 Save 按钮。
2. 开启 GitHub Pages  
   * 点击【Settings】  
   * 在左侧 【Code and automation】 下找到 【Pages】 点击进入  
   * 将 【Branch】 设置为 【main】  
   * 点击 【Save】

### 

1. 点击【Code】，点击进入【 test.ini 】文件  
![](https://proxy-prod.omnivore-image-cache.app/0x0,sKt3nhX61NnaZ5SfeeTy2sOTS9M8HRUDgF2My-ZWWhuY/https://img.tjsky.net/2023/03/dc8bc11a29bc340677dd8f33a1a3e12e.png)
2. 点击笔形图标，编辑代码  
![](https://proxy-prod.omnivore-image-cache.app/0x0,soD6Bxh8PNzSMiECu2-XZs_6huc5GfDruyeHLeV1kJHw/https://img.tjsky.net/2023/03/c0738797871caa159c7e5e339ea80f0c.png)
3. 设置你需要的订阅源  
前两行的内容不要动。

需要改 RSS 订阅源请改后面的代码，格式如下

* `[source001]`：订阅序号，从001开始增长，注意请确保编号不要重复，不然代码会报错
* `name = “mckinsey_rss”`：生成订阅的名称，其中name为英文或阿拉伯数字,不要添加后缀！！！！，本项目生成的文件为固定的.xml格式文件，不需要name有后缀，此外name也不要过长。
* `url = "http://www.mckinsey.com/insights/rss"`：RSS订阅链接  
–`max = "10"`：每次RSS订阅源获取的更新条数，如果你的订阅源为全文订阅（就是会显示一大堆文字的话），请适当减少这个数字的大小，因为脚本使用的翻译接口，有最大字符数限制，一次更新太多（翻译太多）会导致后面的文字没有被翻译。
* `md5 = ""`：留空即可，将来脚本会自己计算这个数字写入
* `action = "auto"`：翻译方向，设置为auto会将任意文字翻译为中文，如果想指定可以看这个  
[源语言](https://www.tjsky.net/goto/?url=https://pygtrans.readthedocs.io/zh%5FCN/latest/source.html "源语言")\->[目标语言](https://www.tjsky.net/goto/?url=https://pygtrans.readthedocs.io/zh%5FCN/latest/target.html "目标语言")。比如：`en->zh-CN`意思就是从英语翻译为中文简体。
1. 点击最下边的【Commit changes】提交修改。

### 测试翻译

![](https://proxy-prod.omnivore-image-cache.app/0x0,sB1ZaxXo8xgbKOk8-_AeX1mDovcs7Nrhi5jqKBzO8npM/https://img.tjsky.net/2023/03/5a8e778b4f72da33c3045e71b4fc6e0e.png)  
– 点击 【Actions】  
– 点击【circle\_translate】  
– 选择 【Run worldiow】  
– 你会看到1\~2个黄圈圈在转。运行成功会显示绿色的勾，运行失败会显示红色的叉。如果出现红叉，一般都是你修改ini文件时，什么地方写错了,权限、令牌设置错误，比如少打了一个 字母啊，空格漏了啊，代码对齐有问题，少写了什么必须设置的参数，什么参数设置错误了。请仔细检查。

### 修改运行参数

1. 点击【Code】，点击进入【 README.md 】文件  
![](https://proxy-prod.omnivore-image-cache.app/0x0,sKt3nhX61NnaZ5SfeeTy2sOTS9M8HRUDgF2My-ZWWhuY/https://img.tjsky.net/2023/03/dc8bc11a29bc340677dd8f33a1a3e12e.png)
2. 点击笔形图标，编辑代码  
![](https://proxy-prod.omnivore-image-cache.app/0x0,soD6Bxh8PNzSMiECu2-XZs_6huc5GfDruyeHLeV1kJHw/https://img.tjsky.net/2023/03/c0738797871caa159c7e5e339ea80f0c.png)
3. 将第5行中，一切你看到的`tjsky`改成你自己github用户名（就上边所说的U\_NAME），7/9/11行的内容你可以随便改。
4. 但需要注意要保持`## 已转换翻译源`这行字在第13行，`[source001]`在第14行，代码更新订阅网页时，会修改从13行开始的内容，代码完全是按行号更新的，如果行号不对可能会导致奇怪的问题。
5. 点击最下边的【Commit changes】提交修改。

## 

如果前边没出现错误（主要是actions上没出现红叉），那么你可以在你自己项目的介绍页，看到这样的内容  
![](https://proxy-prod.omnivore-image-cache.app/0x0,s76EYnzCmif_5Fxja8TzEHtcImx4_ZFnIA2qHYuElYxQ/https://img.tjsky.net/2023/03/d8b1e2c463af1f764cb79b87252e2065.png)  
点击那个【查看 Rss-Translation】链接，就可以跳转到订阅列表页，每条项目的 `->` 左侧的是原始订阅链接，右侧是转换后的链接，这个链接和其他的RSS订阅链接一样处理就好了。

## 注意

* 这个项目纯属娱乐，因为很多网站的RSS订阅格式并不是很规范（当然这个也不赖网站，因为RSS本身就是一个非常混乱的标准）不排除会出现，翻译后的 RSS 翻译订阅源，阅读器报错无法使用的情况。
* 尽量不要翻译那种全文显示的订阅源（比如RSSHUB生成的那种）字数太长翻译很容易出错，如果因为过长出错，请对应减少`max = " "`参数的数字。
* 默认设置是每2小时所有拉取一次订阅源并翻译，如果需要改的更短请修改`.github/workflows/circle_translate.yml`文件第7行，比如

| 内容                          | 时间        |
| --------------------------- | --------- |
| – cron: ‘0 \*/2 \* \* \*’   | 每2小时运行一次  |
| – cron: ‘0 \* \* \* \*’     | 每1小时运行一次  |
| – cron: ‘\*/30 \* \* \* \*’ | 每30分钟运行一次 |

因为github actions的设计，运行时间会根据github本身负载调整，实际更新间隔会略有加长，比如你设定1小时运行一次，实际可能是1小时7分钟间隔，1小时3分钟间隔。  
– 默认是使用bing翻译，如果需要修改请修改`Rss-Translation/.github/workflows /circle_translate.yml`第43行。

 更多阅读

* [必应也开始卷了呀 - 第一次收到必应的网站搜索情况月报](https://www.tjsky.net/natter/888)
* [中文博客圈数据分析 - 开往](https://www.tjsky.net/news/858)
* [基于 RWKV 的 AI角色扮演 WebUI](https://www.tjsky.net/tutorial/770)
* [华为/荣耀/小米/红米 等手机关闭 5G 切换为 4G 的方法](https://www.tjsky.net/tutorial/795)
* [【资讯】ICANN 向 Freenom 下属的域名注册商 OpenTLD 发送了终止代理身份通知。](https://www.tjsky.net/news/805)
* [让 WIN11 / WIN10 下蓝牙耳机也支持使用 AAC LDAC aptX HD LE3等更好的音频编码器](https://www.tjsky.net/tutorial/835)
* [一个年更话题：春运 12306 怎么抢票](https://www.tjsky.net/tutorial/850)
* [WSL 修改默认安装目录到其他盘](https://www.tjsky.net/tutorial/783)
* [CloudCone VPS黑五闪购即将开始，新老用户可领取积分兑换奖励](https://www.tjsky.net/news/799)
* [本地/云端部署 AI 翻译 RSS 订阅源工具](https://www.tjsky.net/tutorial/801)

* [装一台游戏 PC](https://www.tjsky.net/natter/110 "装一台游戏 PC")
* [Windows 11 22H2 开启 TCP BBR v2 拥塞控制算法](https://www.tjsky.net/tutorial/680 "Windows 11 22H2 开启 TCP BBR v2 拥塞控制算法")
* [文件下载那些事 – 常见网盘对比分析评测](https://www.tjsky.net/tutorial/195 "文件下载那些事 – 常见网盘对比分析评测")
* [一行代码让网页自动变黑白(哀悼模式)](https://www.tjsky.net/tutorial/511 "一行代码让网页自动变黑白(哀悼模式)")
* [微软也没钱啦！微软删除 OneDrive 商业版无限存储 仅可购买1TB/5TB空间](https://www.tjsky.net/news/754 "微软也没钱啦！微软删除 OneDrive 商业版无限存储 仅可购买1TB/5TB空间")
* [Windows 11 Android 子系统 WSA 安装APP软件APK文件方式教程](https://www.tjsky.net/tutorial/401 "Windows 11 Android 子系统 WSA 安装APP软件APK文件方式教程")
* [Electro类软件汉化方法教程（以对Clash for Windows汉化为例）](https://www.tjsky.net/tutorial/181 "Electro类软件汉化方法教程（以对Clash for Windows汉化为例）")
* [PikPak第三方客户端(Shimily版)使用教程](https://www.tjsky.net/best-software/294 "PikPak第三方客户端(Shimily版)使用教程")
* [Telegram Bot Rose 中文使用说明书](https://www.tjsky.net/tutorial/594 "Telegram Bot Rose 中文使用说明书")
* [怎样成为一名「老司机」](https://www.tjsky.net/tutorial/79 "怎样成为一名「老司机」")

---

