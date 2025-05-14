---
id: 1e2c7ff3-2c82-497f-b046-c73f4f22e42a
title: |
  使用 Calibre 轉檔為 Kobo Kepub 的一些重點摘要筆記 | Kenmingの鮮思維
author: |
  Wang Kenming
date_saved: 2024-03-31 03:20:21
date_published: 2022-02-22 07:39:30
draft: true
---

# 使用 Calibre 轉檔為 Kobo Kepub 的一些重點摘要筆記 | Kenmingの鮮思維
#Omnivore

[Read on Omnivore](https://omnivore.app/me/https-www-kenming-idv-tw-calibre-manage-for-kobo-note-18e9361618d)

[Read Original](https://www.kenming.idv.tw/calibre-manage-for-kobo_note/)

date_saved: 2024-03-31 03:20:21

date_published: 2022-02-22 07:39:30

--- 

# Full Content: 

![](https://proxy-prod.omnivore-image-cache.app/640x352,sIJ9r6gIj69uj4qewqO4n0aXUGoANY8UeOjHkUdlf7K4/http://images.kenming.idv.tw/2022/01-06/calibre-cover.png)

使用 [Kobo Forma](https://www.rakuten.com.tw/shop/rakutenkobojapan/product/w9cg0ujmv/ "Kobo Forma") 已有一年餘時間，雖沒有我原來 Kindle 的閱讀器好用，但主要看在有 8 吋較大螢幕與 32Gb 的儲存記憶體，所以我現在所有電子書包括 mobi, epub 等格式都轉換到這台閱讀器了。

我的中文電子書閱讀習慣還是偏向直排，但這台與 Kindle 一樣都沒有支援，所以我都是透過「[天火藏書](http://ebook.cdict.info/epub/ "天火藏書")」這個超棒佛心的網站轉檔並轉成直排，而且效果相當好。

但前幾天我的 Forma 升級韌體後卻無法正確顯示原來所載入的 epub 格式的電子書，本來以為是我的操作錯誤還是天火出了問題，反覆找尋都沒法找到問題，不得已在「[PTT - Book](https://pttstudy.com/book/ "PTT - Book")」看板與 FB 的「[樂天 Kobo 電子書社群](https://www.facebook.com/groups/KoboTWN "樂天 Kobo 電子書社群")」提問，才發現確實是這次的韌體更新導致的，而版友們建議的解決方案就是轉成 Kobo 原生支援的 kepub 格式就得以解決。

嗯嗯，那麼我就重新安裝「[Calibre](https://calibre-ebook.com/ "Calibre")」這套神級的電子書管理工具。以前有使用過，但覺得介面不是很習慣所以少用。這次為了一次性想要解決關於 **轉檔**、**簡繁中文轉換**、**排版**、**電子書管理**等問題，所以特定花了一個下午爬文參考了許多文章，總算比較能掌握 Calibre 的操作使用，所以也同時作個筆記摘要，以俾後續的參考。

### 轉檔

關於 Calibre for Kobo 的外掛插件，基本上線上搜尋時打上「kobo」、「kepub」等關鍵字就能找到相關 的插件。其中「**KoboTouchExtended**」與「**KePub output**」這兩個外掛必裝，前者為轉檔為 Kepub 必要，但只能在閱讀器連接到 PC 時才能把 kepub 檔案傳至裝置內；而後者則可以直接轉檔後就存在 PC 端的 Calibre 書庫內，也可以再儲存至磁碟空間任一位置內。

關於眾多 kobo 外掛的相關資訊與討論，可以參考國外的論壇：「[E-Book Readers for Kobo Reader](https://www.mobileread.com/forums/forumdisplay.php?f=223 "E-Book Readers for Kobo Reader")」。

### 儲庫位置

Calibre 對於電子書管理是以「書庫」的觀念來儲存，而「書庫」位置可以自由指定 (可以改設定儲存至「文件」資料夾內。然後有個重要的觀念就是，不用管你原來要讀進至 Calibre 的電子書是存放在哪裡，只要一旦讀進來後，Calibre 就會自動轉換至「書庫」內，以便於編輯與管理，所以原來讀進的電子書位置就再也沒有任何關聯了。

關於「書庫」的位置查詢與變更，參考這篇：「[How to Find and Change Calibre Library Location](https://www.epubor.com/calibre-library-location.html "How to Find and Change Calibre Library Location")」與這篇：「[用Calibre轉換後的書籍去哪裡了？](https://kknews.cc/zh-tw/news/lz2ax2e.html "用Calibre轉換後的書籍去哪裡了？")」

![](https://proxy-prod.omnivore-image-cache.app/520x412,sphSiFkfGo1jcqbI9t4T1sBqr3hsqwI03ABiZ1NScRMs/http://images.kenming.idv.tw/2022/01-06/kobo-01.png)

### 輸出中文檔名問題

Calibre 書庫的儲存檔名，會依照原來中文電子書名稱，再轉成拼音方式儲存為資料庫，參考如下圖：

![](https://proxy-prod.omnivore-image-cache.app/560x186,sk-DQJ3hpmStdOvmxgpMMeNmAHthsYmnhr-Gg2O0LMzM/http://images.kenming.idv.tw/2022/01-06/kobo-02.png)

這是無法變更的，當初我為了這問題傷透腦筋，想說這樣輸出的電子書檔案名稱很怪，還要自行更改為中文檔名挺麻煩。後來爬文才找到，其實必須再經由「儲存至磁碟」這程序，把書庫內的檔案再轉為中文檔名儲存至所指定的位置。

「儲存至磁碟」內的設定主要需要將「將非英語字源轉換為英語同義字」取消勾選，另也可以同時把「將封面分開儲存」與「在獨立的 OPF 檔案中儲存詮釋資料」取消勾選，這樣輸出時就只會有一個檔案，可以方便自行複製至閱讀器內。

參考這篇：「[如何解決 Calibre 中文書籍檔名輸出為漢語拼音？](https://funthings.com.tw/epub-transfer-chinense "如何解決 Calibre 中文書籍檔名輸出為漢語拼音？")」

![](https://proxy-prod.omnivore-image-cache.app/560x299,sYugklRQS01rI8BD9myCbFNcD1Cq-HRB8R8O1-nREpdw/http://images.kenming.idv.tw/2022/01-06/kobo-03.png)

### 簡繁體中文轉換

簡繁中文轉換是個大問題，除了語意轉換的議題，也要注意標點符號的轉換，而如果又要轉直排的話那考量更多。

有兩種最簡單的方式，一種就是透過老牌佛心的「[天火藏書](http://ebook.cdict.info/epub/ "天火藏書")」網站，可以上傳簡體電子書，設定一些選項後就可以自動轉換為繁體中文並且有直排的 epub 格式檔案。然後下載回來，透過 Calibre 讀入再轉換為 Kepub 格式即可正確讀取直排的繁體中文電子書。目前我主要就是用這種方式，絕大部份的電子書都可以成功轉換 (除了一些格式有錯誤或檔案太大者以外)。

另外一種就是直接在 Calibre 安裝「Traditional <-> Simplified Chinese Converter」外掛，然後點選要轉換處理的電子書文件，點擊「編輯書本」，在出現的視窗上選單列再點擊有個「文」的圖示，就會出現簡繁轉換的設定視窗。目前我個人的設定參考如圖。

更詳細的 Calibre 簡繁安裝與設定相關資訊，參考這篇：「[ePub 電子書繁簡轉換工具（透過 Calibre 外掛）](https://briian.com/66824/ "ePub 電子書繁簡轉換工具（透過 Calibre 外掛）")」。

不過我個人若不得已 (天火轉換失敗) 並不太使用這種方式轉換，主要原因是還無法解決標點符號與一些排版問題。這些就必須要深入至去讀取電子書內所輸出的 .xhtml 格式的檔案內容並更改 CSS 相關設定，更是需要專業性，這個就不太想再研究了。

### 直排問題

前述透過「天火藏書」或「Calibre 簡繁外掛」均可以設定直排輸出，而前者更是簡單。

不過若想保持原來電子書原來的格式 (大都是橫排)，則可以透過達人 Vixual 大大所介紹的「[Kobo/Kindle E-Reader 也能一鍵橫排轉直排? 還不用等待轉檔?](http://www.vixual.net/blog/archives/713 "Kobo/Kindle E-Reader 也能一鍵橫排轉直排? 還不用等待轉檔?")」。這方式太妙了，甚至還不用把簡體轉換成繁體，只要下載文內兩個「偽直排」字體就可以輕易切換直排、橫排兩種閱讀模式。

### ※ 延伸參考

 o [Vixual 對於同是 Kobo Forma 機型所發表許多實用功能分享的文章 (強烈推薦)](http://www.vixual.net/blog/archives/category/books "Vixual 對於同是 Kobo Forma 機型所發表許多實用功能分享的文章 (強烈推薦)")。

 o [\[分享\] KOBO閱讀器實用微調技巧整理。](https://pttstudy.com/book/M.1576684638.A.AD2.html) (同是 Vixual 大大發表於 PTT 的 Kobo 調校分享文)

 o [借助 Calibre 處理電子書的流程和技巧](https://sspai.com/post/57005 "借助 Calibre 處理電子書的流程和技巧")。

---

