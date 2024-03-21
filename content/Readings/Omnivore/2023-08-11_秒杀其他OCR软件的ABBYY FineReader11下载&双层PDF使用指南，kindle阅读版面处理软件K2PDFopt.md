---
id: 0acaa8db-f658-4a12-8efb-80641d92b2ee
title: |
  秒杀其他OCR软件的ABBYY FineReader11下载&双层PDF使用指南，kindle阅读版面处理软件K2PDFopt
date_saved: 2023-08-11 10:14:00
---

# 秒杀其他OCR软件的ABBYY FineReader11下载&双层PDF使用指南，kindle阅读版面处理软件K2PDFopt
#Omnivore

[Read on Omnivore](https://omnivore.app/me/ocr-abbyy-fine-reader-11-pdf-kindle-k-2-pd-fopt-189e4f26e4f)

[Read Original](https://www.douban.com/note/206582363?_i=1763230eBi8B4s)

date_saved: 2023-08-11 10:14:00


--- 

# Full Content: 

程序下载地址 <http://download.abbyy.cn/dist/fr11/ABBYY%5FFineReader%5F11%5FChinese.exe>  
破解补丁地址 <http://115.com/file/e7o9eqqe>

安装软件之后，将破解补丁解压后的4个文件覆盖到软件安装目录下即可。

相对于我一直在用的FineReader10, FR11有很多新功能：  
1.支持生成epub和发送到kindle选项，方便了电子书的使用。  
2.识别速度大大加快，至少比过去快了50%，官方的说法是中文识别提高了70%  
3.识别率略有提高，随机对比了几页，发现错别字还是有减少的  
4.默认输出的PDF是双层PDF（参见文末注解),方便了在电脑上和Kindle上的阅读(kindle在多看系统下测试标注和智能重排成功，原生系统未测试）

之前一直没留意到FineReader有双层PDF这个功能，这次用了11才真正开始使用。  
==双层PDF太方便了，可以直接取词、查找，即使OCR有个别错误也不会影响阅读观感==。  
但将双层PDF导入到kindle后，载入、翻页、标注速度都比普通的PDF要慢很多，但是考虑到系统可以预载当前页面的下一页，这个缺点也算可以忍受。  
==双层PDF的设置在工具-选项-保存-PDF-保存方式-页面图像下方的文本。==

一开始导出的PDF在kindle上打开的实在太慢，我盯上了PDF保存方式里的几个选项，<使用混合式光栅>,图像设置中的色彩控制。  
首先比较出有无光栅时PDF的打开速度，发现无光栅完胜，翻页速度相差10多秒...（无光栅3秒，有光栅15秒-20秒)  
再比较出色彩控制中的<自动>和<彩色图像转为灰度图像>，发现后者还是要稍快一些。  
色彩控制中的其他选项对图片清晰度有很大影响，不便修改。

结论:kindle使用的PDF应设置为<不使用混合光栅>，<图像设置>选择<自定义>，<原始分辨率>，<将彩色图像转为灰度图像>，<质量>选择<不允许质量损失>,这样得到的双层PDF在kindle上的打开速度在3秒左右，翻页速度也在2-3秒

 如果是电脑上阅读的PDF，建议还是选择<图像设置>下的<最佳质量>

另:<保存>-<PDF>下的<启用标记的PDF>选项也很有用，可以保留之前在PDF的写写画画。

==再介绍个PDF分割处理软件，方便在kindle上阅读的K2PDFopt==，使用原生系统的人一定学习下，如果使用的是多看的话，仅在看双层PDF时可以考虑使用，使用的方法是先将PDF用K2PDFopt处理，然后再OCR，这样在kindle上阅读时就足够大了，也可以方便的划线标记。  
==使用介绍====<http://note1day.com/2011/12/k2pdfopt/>====和====<http://note1day.com/2011/12/pdfr/>==

又研究了K2PDFopt,发现它的切边能力还是比较弱的，转换中容易被页脚页眉侧边栏打乱版面，我的解决方法是先用Briss处理PDF(使用方法参见<http://note1day.com/2012/01/briss-pdfscissors-pdfill-pdfcrop/>),然后在K2PDFopt中修改边框参数(按m,然后输入参数0),输出的PDF就可以很好的阅读了，如果需要OCR的话可以用FineReader11处理。

注意K2PDFopt要求被处理文件的文件名不能有任何符号，如果发现"cannot open xxx"时注意修改下文件名。

3.25更新，昨晚仔细测试了双层PDF在多看0520（老多看），多看2012（新多看）和原生系统下的支持情况：

在老多看0520中，可以直接在双层PDF(上层图像，下层文本）中选定文字并标记，但双层PDF标注类似于在图上划线，实际上并没有截取文字，所以只能查看，无法导出(此时不显示导出选项)

多看2012中打开后不能按方向键选出光标，只能在智能重排中进行标注。

原生系统对双层PDF的支持很好，可以在图层上标记文字，但cliippings书摘里边还有的书名、时间之类的无效信息太多，在浏览全部摘要时很不方便。  
有人为了解决这个问题做了一个书摘整理软件，<http://gatherlight.info/blog/?p=1560>，我用了下，效果很好，这下没有任何后顾之忧了

使用老多看的主要原因就是书摘导出方便，格式紧凑，方便阅读，但是对双层PDF的不支持最终让我放弃了多看，开始使用原生系统。  
原生系统对中文字体的支持不太好，单纯的changelocale zh-CN效果依旧不行，所以要越狱修改下  
，方法在<http://forum.51nb.com/thread-1013566-1-1.html>，中文字体补丁在<http://ishare.iask.sina.com.cn/f/13380966.html>

原生系统的其他优点:  
1.取词快捷，字典比较牛x，我用的是<http://www.kuaipan.com.cn/file/id%5F28510190479346205.htm>，支持复数、分词，多看系统上的词典找了很多都没有满意的  
2.打开、翻页更快速，待机时间长  
3.横屏后也能够标记，这点非常关键，知道这一点之后，很多书我就不再需要用K2PDFopt处理了，直接OCR之后，横屏来看，标记得心应手。

其他特点有待于进一步挖掘

注:  
==什么是双层PDF文件？==  
==PDF文件是一种具有多层结构的格式文件，其特点是：文件既可以是文本型的（比如由word生成的文件），也可以是图像型的（比如由扫描生成的文件）；双层PDF文件是指文件内容既包含文本层，也包含图像层，且其位置上下一一相对应。==

使用双层PDF文件有什么好处？  
PDF文件格式已成为国际标准，越来越多的行业和单位正在使用它。其特点是具有多层结构，包括图层和文字层，这样，既可以100%保留原始版面效果（包括公章、签名），又可以通过下层的文字信息支持选择、复制、全文检索等功能。因此，双层PDF同时兼顾视觉效果和检索方便性，极大地方便了电子文件的管理。

---

## Highlights

> 双层PDF太方便了，可以直接取词、查找，即使OCR有个别错误也不会影响阅读观感 [⤴️](https://omnivore.app/me/ocr-abbyy-fine-reader-11-pdf-kindle-k-2-pd-fopt-189e4f26e4f#cd45c994-9aec-458b-bea7-f54c49f60c8d)  ^cd45c994

> 双层PDF的设置在工具-选项-保存-PDF-保存方式-页面图像下方的文本。 [⤴️](https://omnivore.app/me/ocr-abbyy-fine-reader-11-pdf-kindle-k-2-pd-fopt-189e4f26e4f#f198bb03-331e-4788-8026-7bb6030a0e76)  ^f198bb03

> 如果是电脑上阅读的PDF，建议还是选择&lt;图像设置>下的&lt;最佳质量>
> 
> 另:&lt;保存>-下的&lt;启用标记的PDF>选项也很有用，可以保留之前在PDF的写写画画 [⤴️](https://omnivore.app/me/ocr-abbyy-fine-reader-11-pdf-kindle-k-2-pd-fopt-189e4f26e4f#da82cdbe-9c07-4e0c-b40e-4b2789191876)  ^da82cdbe

> 再介绍个PDF分割处理软件，方便在kindle上阅读的K2PDFopt [⤴️](https://omnivore.app/me/ocr-abbyy-fine-reader-11-pdf-kindle-k-2-pd-fopt-189e4f26e4f#eb4d2a61-1618-48c4-8900-cd8b61c97fc3)  ^eb4d2a61

> 使用的方法是先将PDF用K2PDFopt处理，然后再OCR，这样在kindle上阅读时就足够大了，也可以方便的划线标记。  
> 使用介绍和 [⤴️](https://omnivore.app/me/ocr-abbyy-fine-reader-11-pdf-kindle-k-2-pd-fopt-189e4f26e4f#7d08d3f7-7f58-44a7-8c94-127b0a968da8)  ^7d08d3f7

> 什么是双层PDF文件？  
> PDF文件是一种具有多层结构的格式文件，其特点是：文件既可以是文本型的（比如由word生成的文件），也可以是图像型的（比如由扫描生成的文件）；双层PDF文件是指文件内容既包含文本层，也包含图像层，且其位置上下一一相对应。 [⤴️](https://omnivore.app/me/ocr-abbyy-fine-reader-11-pdf-kindle-k-2-pd-fopt-189e4f26e4f#1b3e58a1-419c-450c-a7ce-0a39a80aa7c3)  ^1b3e58a1

