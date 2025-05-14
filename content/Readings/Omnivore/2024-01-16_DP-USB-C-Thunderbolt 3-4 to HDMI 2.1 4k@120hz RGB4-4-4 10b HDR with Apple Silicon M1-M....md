---
id: eadfeead-51d6-4da9-a2b0-fc6398cba98d
title: |
  DP/USB-C/Thunderbolt 3/4 to HDMI 2.1 4k@120hz RGB4:4:4 10b HDR with Apple Silicon M1/M2 now possible ! | MacRumors Forums
author: |
  AironMan
date_saved: 2024-01-16 22:25:47
date_published: 2023-02-22 11:19:45
draft: true
---

# DP/USB-C/Thunderbolt 3/4 to HDMI 2.1 4k@120hz RGB4:4:4 10b HDR with Apple Silicon M1/M2 now possible ! | MacRumors Forums
#Omnivore

[Read on Omnivore](https://omnivore.app/me/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4-k-120-hz-rgb-4-4-4-10-b-h-18d15741d23)

[Read Original](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/)

date_saved: 2024-01-16 22:25:47

date_published: 2023-02-22 11:19:45

--- 

# Full Content: 

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31985866)
* [#1](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31985866)

**WARNING 31.10.23**: macOS Sonoma 14.1 and newer breaks **_HDR_** with HiDPI 4k@120hz 4:4:4 and beyond. We are looking for a solution.

NOTE: To ensure proper credit for this solution, kindly reference this thread when sharing. Thanks!

Apple limited HDMI-Transportstream over USB-C/TB/DP to maxed 4k@60hz.

We found a solution to get more than this working!  
This is a new fresh thread to talk about this, because the other one has over [46 sites](https://forums.macrumors.com/threads/mac-mini-4k-120hz.2267035/page-31?post=31952715#post-31952715) now.

This how-too will be updated and are up to date.

##########  
##########

So basically things you'll need for 4k@120hz RGB 10bit HDR

PRIO: MacOS Ventura 13.4 or newer is needed (MacOS Sonoma or newer is best)

1. 1.1.  
USB-C>HDMI 2.1 [Cable Matters Adapter](https://www.amazon.de/dp/B08MSWMXT4?psc=1&ref=ppx%5Fyo2ov%5Fdt%5Fb%5Fproduct%5Fdetails&tag=macr05-21) ([CM Page](https://www.cablematters.com/pc-1368-125-48gbps-usb-c-adapter-supporting-8k-video.aspx)) with Chip VMM6100 or VMM7100(better) - both works now!  
The new one is the 201388-A = VMM7100  
The old one is: 201388(GRY) = VMM6100  
[![IMG_3573.jpeg](https://proxy-prod.omnivore-image-cache.app/350x467,sFnqoihDzI0AhCJncmSAlvSWNpqTfaA1k-8OoHJbUndE/https://forums.macrumors.com/data/attachments/1194/1194386-a8d238c3c95482de03d70b7b15d7d5a8.jpg "IMG_3573.jpeg")](https://forums.macrumors.com/attachments/img%5F3573-jpeg.2190617/)  
(It can probably also work on another Adapters with Chip VMM6100 or VMM7100\. **No guarantee!** U can test and report)  
**VMM7100:** _(Plug&Play)_  
Another adapters that seem to be working:  
USB-C>HDMI 2.1:  
[Anker](https://www.amazon.de/Anker-Adapter-144Hz-MacBook-Pixelbook/dp/B0BG5BJ8SX?tag=macr05-21)  
[CABLETIME](https://aliexpress.ru/item/1005004962095579.html?sku%5Fid=12000031167854858)  
**VMM6100:** _(EDID override needed)_  
Another adapters that seem to be working:  
USB-C>HDMI 2.1:  
[MOSHOU C-008](https://item.jd.com/10041450139059.html?utm%5Fsource=AWIN01&utm%5Fmedium=affiliate&utm%5Fcampaign=78888&subid=15487%5F1677855779%5F56264cd07a1a97b63181c72359f00c10) and [MOSHOU C-006](https://item.jd.com/10034966989528.html), [MOSHOU C-006](https://www.aliexpress.com/item/1005005065883297.html?spm=a2g0o.order%5Fdetail.order%5Fdetail%5Fitem.4.62b0f19ctMXWEz)  
[4XEM](https://www.provantage.com/4xem-4xtpc023b2m~74XEM1AT.htm) and [4XEM](https://www.provantage.com/4xem-4xtpc030ba~74XEM1C2.htm)  
[Noname](https://de.aliexpress.com/item/1005003251816501.html?spm=a2g0o.order%5Fdetail.order%5Fdetail%5Fitem.4.3bdef19cJP1LXB&gatewayAdapt=glo2deu)  
1.2.  
DP>HDMI 2.1: **VMM7100:** (Plug&Play)  
[CableMatters 102101](https://www.amazon.de/Cable-Matters-102101-BLK-Computer-Adapter/dp/B08XFSLWQF?tag=macr05-21)  
Plz use Archive: [CM Firmware 4k 120hz RGB VMM7100 ONLY DP to HDMI 2 1](https://forums.macrumors.com/attachments/cm-firmware-4k-120hz-rgb-vmm7100-only-dp-to-hdmi-2-1-zip.2192807/)
2. HDMI 2.1 official cable with 48Gbps certified bandwidth ( [KabelDirekt](https://www.amazon.de/KabelDirekt-Kabel-kompatibel-Highspeed-Ethernet/dp/B08NTPRZ7X/ref=sr%5F1%5F3?%5F%5Fmk%5Fde%5FDE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3HJA8W9HF5PEI&keywords=kabeldirekt&qid=1680250899&sprefix=kabel%2Bdirek%2Caps%2C185&sr=8-3&th=1&tag=macr05-21), [UltraHDTV](https://www.amazon.de/gp/product/B07TSXQ38S/ref=ppx%5Fyo%5Fdt%5Fb%5Fsearch%5Fasin%5Ftitle?ie=UTF8&psc=1&tag=macr05-21), [AmazonBasic](https://www.amazon.com/dp/B08BS181P2?tag=mrforums-20) ) best is to use one under 2m or shortest u can!
3. Windows PC with USB-C DP capabilities and the flasher tool in the archive or [VMMHIDTool](https://apps.microsoft.com/store/detail/vmmhidtool/9PDS6MLXXS7S) from MicrosoftStore  
3.1\. (only VMM7100) Using Parallels will only work when using MicrosoftStore [VMMHIDTool](https://apps.microsoft.com/store/detail/vmmhidtool/9PDS6MLXXS7S) (Don't forget to activate the USB ports of your Win Image **and** additionally activate the port every time up you boot the Win image)
4. Download CM\_Firmware\_4k\_120hz\_RGB\_VMM7100.zip or CM\_Firmware\_4k\_120hz\_RGB\_VMM6100.zip attached to this post, VMMTool64 for flashing firmware and correct firmware are included.
5. (only needed for VMM6100) [BetterDisplay](https://github.com/waydabber/BetterDisplay) to extract/apply custom EDID
6. (only needed for VMM6100) [AW EDID Editor](https://www.analogway.com/americas/products/software-tools/aw-edid-editor/) to modify EDID

INFO:

Connecting this Adapters over an TB4 or TB3 Hub/Dock works also when its support Titan Ridge with HBR3 to source Mac

**Working Docks/Hubs reported till now:**   
\- [i-tec](https://www.amazon.de/gp/product/B09YYT8LF4/?tag=macr05-21)  
\- [Dell WD19TB](https://www.amazon.de/Dell-Thunderbolt-Dock-WD19TB-DELL-WD19TB/dp/B07RLNQR12/?tag=macr05-21)  
\- [ThinkPad Universal Thunderbolt 4 Dock 40B00135AU](https://www.amazon.de/Thinkpad-Universal-Thunderbolt-Dock-EU/dp/B09F2YMQLN/?tag=macr05-21)  
\- [OWC Thunderbolt Hub](https://www.owc.com/solutions/thunderbolt-hub)  
\- [CalDigit TS4 (also DP>HDMI2.1)](https://www.amazon.de/CalDigit-TS4-Thunderbolt-Dock-USB/dp/B09GFT334R/?tag=macr05-21)  
\- [Kensington SD5780T](https://www.amazon.de/Kensington-Dockingstation-Thunderbolt-Ports-Kartenleser-Slot-MacBooks-K35175EU/dp/B08TV9QV2W/?tag=macr05-21)  
\- [Sonnet Echo 20](https://www.amazon.com/Sonnet-Echo-20-Thunderbolt-SuperDock/dp/B0C9VTDXY6?tag=mrforums-20)

(plz report if another Docks/Hubs work also)

Steps

1. Update the HDMI type to "PC" on your LG OLED to whichever port you are going to use. Also enable HDMI Ultra HD Color 4k Mode
2. Plug in cable matters adapter to a USB C port that supports DP on your Windows PC. The HDMI cable connected to the adapter will need to be connected to a tv/monitor for the next step.
3. Launch update tool and verify you have VMM6100 or VMM7100\. Follow steps for the Firmware update attached to this post and are included in zip packages [VMM6100](https://forums.macrumors.com/attachments/cm-firmware-4k-120hz-rgb-vmm6100-zip.2189074/) USB-C > HDMI, [VMM7100](https://forums.macrumors.com/attachments/cm-firmware-4k-120hz-rgb-vmm7100-zip.2189075/) USB-C > HDMI or [VMM7100 DP > HDMI](https://forums.macrumors.com/attachments/cm-firmware-4k-120hz-rgb-vmm7100-only-dp-to-hdmi-2-1-zip.2192807/). Use the correct firmware included in each zip package named: VMM6100\_4kRGB120hz10b\_V6\_05\_120.fullrom, VMM7100\_4kRGB120hz10b\_V7\_02\_112.fullrom or VMM7100\_DP\_to\_HDMI\_2\_1\_CM\_7.02.112\_MacOS 4K120Hz.fullrom  
3.1\. (Optional) - Make backup of your firmware first
4. Once it's completed flashing, unplug and replug the adapter to verify your new firmware version is for the VMM6100: 6.03.002 and for the VMM7100: 7.02.112
5. (only needed for VMM6100) Plug the adapter back in your mac and follow the steps [here](https://forums.macrumors.com/threads/mac-mini-4k-120hz.2267035/post-31952813) to apply Custom EDID (Enable DP-Transportstream over HDMI) (An example DP-Transportstream with force RGB "DP\_STREAM-RGB.zip" are attached in this post. Extract first)
6. (only needed for VMM6100) Activate "Auto Apply EDID" and "Config Protection" in [BetterDisplay](https://github.com/waydabber/BetterDisplay)
7. Check if ure on 4:4:4 when 4k@120hz is selected >[ read here how to test](https://www.rtings.com/tv/learn/chroma-subsampling)

MONITOR WAKE PROBLEMS:  
(TVs without DCC over HDMI has to be always turn on over the remote! On LG OLEDs theres an option called "always on" if u want)  
UPDATE: With MacOS Sonoma the walkup problem is gone/a lot better on my side!

\- Plz update to Ventura 13.4 or newer (MacOS Sonoma or newer is best)  
\- You can also disabling hibernate mode when connected to a power source (in batterie settings)  
\- Monitor not want to wake can be fixed sometimes with this settings in BetterDisplay:

[![Bildschirmfoto 2023-04-12 um 09.07.53.png](https://proxy-prod.omnivore-image-cache.app/660x350,s7HBYkQi816SwP186gHN9h1IWSo3ZjalTfKCVv2XQkGg/https://forums.macrumors.com/data/attachments/1194/1194385-b90ee7792ac6e7a6e5eaa4dcfcde99f9.jpg "Bildschirmfoto 2023-04-12 um 09.07.53.png")](https://forums.macrumors.com/attachments/bildschirmfoto-2023-04-12-um-09-07-53-png.2190616/)   
( On my side(VMM7100 with TB4 Dock) it works better when i switch of this function!! )

INFO about 8bit in BetterDisplay or SRX:

We believe that the 8-bit display in BetterDisplay may be due to a macOS bug. To ensure that the signal is actually 10-bit, please check the signal information on your monitor.  
UPDATE: With MacOS Sonoma the 10bit issue is gone!

SUPPORT:

For those where this Tweak not work correctly, plz send information about ure Adapter, screenshot from BetterDisplay Display informations (first 3 sections), VmmDPTool firmware info and upload ure original and modified EDID plz. Thanks.

And if another guys can help here in support i will be happy. I have not that much time to do that alone. Thanks!

Credits

* [@AironMan](https://forums.macrumors.com/members/1257103/) \- [Release first 4k@120hz 4:2:2 10b EDID solution with @stevemr123](https://forums.macrumors.com/threads/mac-mini-4k-120hz.2267035/post-31952715) , analysis why some people reach RGB4:4:4, found solution in combination in Hardware/Chip and special Firmware Version, [postet first Firmware to reach 4:4:4 8b without the need of external Software with VMM7100 (outdated)](https://forums.macrumors.com/threads/mac-mini-4k-120hz.2267035/post-31968090) , [posted an Firmware where RGB4:4:4 4k@120hz 10b HDR is possible on VMM6100](https://forums.macrumors.com/threads/mac-mini-4k-120hz.2267035/post-31978810), knowledge USB-C/HDMI/DP protocols and devices, making this FAQ and continue support and update for this
* [@stevemr123](https://forums.macrumors.com/members/438043/) \- [Release BetterDisplay with override EDID functionality](https://github.com/waydabber/BetterDisplay) and support in this, [release first 4k@120hz 4:2:2 10b EDID Solution with ](https://forums.macrumors.com/threads/mac-mini-4k-120hz.2267035/post-31952715)@AironMan , in-depth knowledge USB-C/HDMI/DP protocols and devices
* [@joevt](https://forums.macrumors.com/members/710085/) \- in-depth knowledge USB-C/HDMI/DP protocols and devices
* [@Alan Spiegel](https://forums.macrumors.com/members/1341221/) and [@hPandaa1](https://forums.macrumors.com/members/1342043/) \- Reported RGB4:4:4 10bit working on there Adapters and provided some informations about this Adapters to better understand what's going on
* [@Djlild7hina](https://forums.macrumors.com/members/297833/) for making the first version of this how-too
* PLZ support and buy [BetterDisplay](https://github.com/waydabber/BetterDisplay), because without them we do never found this solution! After [@stevemr123](https://forums.macrumors.com/members/438043/) (BetterDisplay) and [@AironMan](https://forums.macrumors.com/members/1257103/) testet some EDID "tweak" and got a working solution, [@AironMan](https://forums.macrumors.com/members/1257103/) contact CM with all details informations so finally some month later we got a VMM7100 without EDID override needed!
* Also many thanks to CableMatters support in helping getting a new solution for the VMM7100, support them and buying their Adapters! Thanks to Grace an Andrew from CM support!

##########  
##########

* [ ![IMG_3356.jpeg](https://proxy-prod.omnivore-image-cache.app/523x350,s_MSI2EZvrRYXIuCLavBqwDV28cJcJsHWNtQ-wyWicEM/https://forums.macrumors.com/data/attachments/1178/1178149-497960592a96db6f2d1f3e471b3ad0b5.jpg) ](https://forums.macrumors.com/attachments/img%5F3356-jpeg.2162888/)  
IMG\_3356.jpeg  
585.7 KB · Views: 5,520
* [ ](https://forums.macrumors.com/attachments/dp%5Fstream-rgb-zip.2171626/)  
DP\_STREAM-RGB.zip  
784 bytes · Views: 868
* [ ](https://forums.macrumors.com/attachments/how-to-upgrade-firmware-for-the-adapter-pdf.2189073/)  
How to upgrade firmware for the adapter.pdf  
437.7 KB · Views: 1,114
* [ ](https://forums.macrumors.com/attachments/cm-firmware-4k-120hz-rgb-vmm6100-zip.2189074/)  
CM Firmware 4k 120hz RGB VMM6100.zip  
5.5 MB · Views: 1,425
* [ ](https://forums.macrumors.com/attachments/cm-firmware-4k-120hz-rgb-vmm7100-zip.2189075/)  
CM Firmware 4k 120hz RGB VMM7100.zip  
5.5 MB · Views: 2,636
* [ ](https://forums.macrumors.com/attachments/cm-firmware-4k-120hz-rgb-vmm7100-only-dp-to-hdmi-2-1-zip.2192807/)  
CM Firmware 4k 120hz RGB VMM7100 ONLY DP to HDMI 2 1.zip  
5.3 MB · Views: 2,901

Last edited: 

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986129)
* [#2](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986129)

Good grief. Wake me when it's plug and play.

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986321)
* [#3](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986321)

> Good grief. Wake me when it's plug and play.

Useless comment... I think an Plug&Play is not possible. Apple will not enable DP-Transportstream over HDMI connected Devices since they have an M2 Pro/MAX with an HDMI 2.1 Port. And Cable manufacturers probably won't do that, because it will be an MAC M1/M2 only Adapter. An Anker8k Adapter with an VMM7100 can be flashed with a custom Firmware as an Plug&Play solution without EDID override. But it "only" reach 4k@120hz 4:4:4 8b.

Last edited: 

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986406)
* [#4](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986406)

Loving this. I got my I-TEC TB4 Dock today as well, daisy chaining is super easy this way with the Cable Mattters adapter.

[@AironMan](https://forums.macrumors.com/members/1257103/) do you know if the power delivery on the rear ports of the TB4 Dock is sufficient to keep the MacBook charged? Right I have my MacBook plugged in to the front. I guess I could just give it a shot once I am back...

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986413)
* [#5](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986413)

> Loving this. I got my I-TEC TB4 Dock today as well, daisy chaining is super easy this way with the Cable Mattters adapter.
> 
> [@AironMan](https://forums.macrumors.com/members/1257103/) do you know if the power delivery on the rear ports of the TB4 Dock is sufficient to keep the MacBook charged? Right I have my MacBook plugged in to the front. I guess I could just give it a shot once I am back...

Iam also connected on the front, I think this is the only port where can be used as main unit. The other ports are only to connect to the main unit.

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986419)
* [#6](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986419)

Cheers man, makes sense. I am just really micro-nitpicking at the moment, this is super awesome haha...

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986432)
* [#7](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986432)

> Cheers man, makes sense. I am just really micro-nitpicking at the moment, this is super awesome haha...

Iam hoping they release a better Firmware. The internal HDMI 2.1 can not reach RGB 4k@120hz 10b HDR with DP-Protokoll and without DSC. Iam in contact with them but dont think they will do something...

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986434)
* [#8](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986434)

Do you mean internal on the TB4 Dock?

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986435)
* [#9](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986435)

> Do you mean internal on the TB4 Dock?

Yes, it has an HDMI 2.1 Port

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986438)
* [#10](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986438)

Hmm, on the Dutch website all I can see is HDMI 2.0:

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986450)
* [#12](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986450)

Gotcha but where do you read HDMI 2.1? I mean, I wouldn't be opposed to it 

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986458)
* [#13](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986458)

> Gotcha but where do you read HDMI 2.1? I mean, I wouldn't be opposed to it 

8k@30hz must be HDMI 2.1 

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986463)
* [#14](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986463)

But aren't they just referring to the TB4 ports, not the physical HDMI port? Just curious

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986466)
* [#15](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986466)

This is the same Dock:

![www.amazon.de](https://proxy-prod.omnivore-image-cache.app/0x0,sWKZqiqX9oak5hl8yih5SWveyYeENIVMpfIzKdtBPBrM/https://forums.macrumors.com/proxy.php?image=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31QzJBVoz2L._SR600%252c315_PIWhiteStrip%252cBottomLeft%252c0%252c35_PIStarRatingFOUR%252cBottomLeft%252c360%252c-6_SR600%252c315_ZA8%252c445%252c290%252c400%252c400%252cAmazonEmberBold%252c12%252c4%252c0%252c0%252c5_SCLZZZZZZZ_FMpng_BG255%252c255%252c255.jpg&hash=6f70b6c8769ff76b9339e7fd382494a3&return_error=1) 

### [ICY Box Thunderbolt 4 Docking Station (10-in-1) für 2 Monitore (4K 60Hz) oder 1 Monitor (8K 30Hz), 2X TB4 Ports (40Gbit/s), 4X USB 3.1, USB-C, 1x HDMI, 96W PD für Laptop/Mac, LAN, Audio, SD, 60988](https://www.amazon.de/dp/B0BCKXNV7Y/?tag=macr05-21) 

ICY BOX Thunderbolt 4 Docking Station (10-in-1) für 2 Monitore (4K 60Hz) oder 1 Monitor (8K 30Hz), 2X TB4 Ports (40Gbit/s), 4X USB 3.1, USB-C, 1x HDMI, 96W PD für Laptop/Mac, LAN, Audio, SD, 60988

www.amazon.de

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986469)
* [#16](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986469)

Well, I guess somebody's specs are right then... . Let us know if you hear from the manufacturer!

[ ![v0lume4](https://proxy-prod.omnivore-image-cache.app/96x96,s_LCo322iVeV5b9PVBS3ublppl0hNB1GmRRruYUMYZ1k/https://forums.macrumors.com/data/avatars/m/722/722356.jpg?1487914295) ](https://forums.macrumors.com/members/v0lume4.722356/) 

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986484)
* [#17](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986484)

Great write up. 

Can someone enlighten me on this: will the MBA will output 4k @ 144Hz in SDR out-of-the-box? The issue arises when trying to achieve that resolution/refresh with 10bit color?

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986502)
* [#18](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986502)

The issue arises at 4k/120Hz (with various degrees of color spectra) when using an USB-C to HDMI 2.1 adapter or cable. USB-C to DisplayPort was never an issue. It's neglicence or feature locking on Apple's part.

[ ![v0lume4](https://proxy-prod.omnivore-image-cache.app/96x96,s_LCo322iVeV5b9PVBS3ublppl0hNB1GmRRruYUMYZ1k/https://forums.macrumors.com/data/avatars/m/722/722356.jpg?1487914295) ](https://forums.macrumors.com/members/v0lume4.722356/) 

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986509)
* [#19](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986509)

> The issue arises at 4k/120Hz (with various degrees of color spectra) when using an USB-C to HDMI 2.1 adapter or cable. USB-C to DisplayPort was never an issue. It's neglicence or feature locking on Apple's part.

Gotcha. Thank you for the explanation.

Not to nitpick, just want to know for myself — is the issue only with specifically 120Hz or does it apply to anything above it as well (144Hz)?

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986518)
* [#20](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986518)

No, basically anything above 4k/60Hz is a problem with HDMI on these machines. My Hackintosh with a AMD 6900 XT does support HDMI 2.1 @4k/120Hz, but for some reason this feature over HDMI was only implemented with Ventura. It's a really whacky implementation too because they only OFFICIAL Mac that is capable of running a similar GPU is the Mac Pro...

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986545)
* [#21](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986545)

They limit the HDMI-Transportstream over USB-C/TB to 4k@60hz. With this solution we let MacOS think/do (there are) a DP-Transportstream 

Last edited: 

[ ![v0lume4](https://proxy-prod.omnivore-image-cache.app/96x96,s_LCo322iVeV5b9PVBS3ublppl0hNB1GmRRruYUMYZ1k/https://forums.macrumors.com/data/avatars/m/722/722356.jpg?1487914295) ](https://forums.macrumors.com/members/v0lume4.722356/) 

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986570)
* [#22](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986570)

Okay. Thank you both for the explanations.

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986610)
* [#23](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986610)

> Apple limited HDMI-Transportstream over USB-C/TB to maxed 4k@60hz.
> 
> We found a solution to get more than this working!  
> This is a new fresh thread to talk about this, because the other one has 46 sites now and does not have the correct Title! ;-)
> 
> [@Djlild7hina](https://forums.macrumors.com/members/297833/) and [@AironMan](https://forums.macrumors.com/members/1257103/) does make this FAQ:
> 
> ##########  
> ##########
> 
> Try to consolidate the instructions since they're dug in 20 [different pages](https://forums.macrumors.com/threads/mac-mini-4k-120hz.2267035/post-31952715) now
> 
> So basically things you'll need for 4k@120hz RGB 10bit HDR
> 
> PRIO: MacOS Ventura 13.2 or above is needed
> 
> 1. [Cable Matters Adapter](https://www.amazon.com/Cable-Matters-48Gbps-Adapter-Supporting/dp/B08MSWMXT4/ref=sr%5F1%5F2?crid=2FALVOEDWD5Y1&keywords=cable+matters+hdmi+2.1&qid=1677050748&sprefix=cable+matters+hdmi+2%2Caps%2C154&sr=8-2&tag=mrforums-20) (201388) ([CM Page](https://www.cablematters.com/pc-1368-125-48gbps-usb-c-adapter-supporting-8k-video.aspx)) with Chip VMM6100 (Should have VMM6100, if not you may need to order another one)
> 2. HDMI 2.1 Certified cable 48Gbps
> 3. Windows PC with USB-C DP capabilities. Using Parallels will not work but using bootcamp on an Intel mac should.
> 4. [Cable Matters update tool](https://kb.cablematters.com/index.php?View=entry&EntryID=147) to upgrade/downgrade firmware
> 5. [BetterDisplay](https://github.com/waydabber/BetterDisplay) to extract/apply Custom EDID.
> 6. [AW EDID Editor](https://www.analogway.com/americas/products/software-tools/aw-edid-editor/) to modify EDID  
> (It can probably also work on another Brand Adapters with Chip VMM6100\. Not tested till now and no guarantee!)
> 
> Steps
> 
> 1. Update the HDMI type to "PC" on your LG OLED to whichever port you are going to use. Also enable HDMI Ultra HD Color 4k Mode
> 2. Plug in cable matters adapter to a USB C port that supports DP on your Windows PC. The HDMI cable connected to the adapter will need to be connected to a tv/monitor for the next step.
> 3. Launch update tool and verify you have VMM6100\. If you do not have VMM6100, you'll need another adapter. Follow steps on the Cable matters firmware page linked above but use the firmware "VMM61004k120hzRGB-Fullrom.zip" (extract first) located in this [post](https://forums.macrumors.com/threads/mac-mini-4k-120hz.2267035/post-31978810) instead.  
>   1. (Optional) - Make backup of your firmware first or you can restore the latest one from the update tool page.
> 4. Once it's completed flashing, unplug and replug the adapter to verify your new firmware version.
> 5. Plug the adapter back in your mac and follow the steps [here](https://forums.macrumors.com/threads/mac-mini-4k-120hz.2267035/post-31952813) to apply Custom EDID (Enable DP-Transportstream over HDMI)
> 6. Change some time between 60hz and 120hz when it dont work at first time!
> 7. Profit!
> 
> Credits
> 
> * [@AironMan](https://forums.macrumors.com/members/1257103/) \- [Release first 4k@120hz 4:2:2 10b EDID solution with @stevemr123](https://forums.macrumors.com/threads/mac-mini-4k-120hz.2267035/post-31952715) , analysis why some people reach RGB4:4:4, found solution in combination in Hardware/Chip and special Firmware Version, [postet an Firmware to reach 4:4:4 8b without the need of external Software with VMM7100](https://forums.macrumors.com/threads/mac-mini-4k-120hz.2267035/post-31968090), [posted an Firmware where RGB4:4:4 4k@120hz 10b HDR is possible on VMM6100](https://forums.macrumors.com/threads/mac-mini-4k-120hz.2267035/post-31978810), in-depth knowledge USB-C/HDMI/DP protocols and devices, making this FAQ
> * [@stevemr123](https://forums.macrumors.com/members/438043/) \- [Release BetterDisplay with override EDID functionality](https://github.com/waydabber/BetterDisplay), [release first 4k@120hz 4:2:2 10b EDID Solution with ](https://forums.macrumors.com/threads/mac-mini-4k-120hz.2267035/post-31952715)@AironMan , in-depth knowledge USB-C/HDMI/DP protocols and devices
> * [@joevt](https://forums.macrumors.com/members/710085/) \- in-depth knowledge USB-C/HDMI/DP protocols and devices
> * [@Alan Spiegel](https://forums.macrumors.com/members/1341221/) and [@hPandaa1](https://forums.macrumors.com/members/1342043/) \- Reported RGB4:4:4 10bit working on there Adapters and provided some informations about this Adapters to better understand what's going on
> * [@Djlild7hina](https://forums.macrumors.com/members/297833/) for making this FAQ
> 
> ##########  
> ##########

That's one heck of a hack. I wonder if these BetterDisplay guys could enable DolbyVision on the new M2 Pro. It's the only format missing now that we have 2.1 ports working normally.

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986679)
* [#24](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986679)

> That's one heck of a hack. I wonder if these BetterDisplay guys could enable DolbyVision on the new M2 Pro. It's the only format missing now that we have 2.1 ports working normally.

Does MacOS support Dolby Vision over DisplayPort ?

Don’t think so, only internal:

### [HDR-Video auf dem Mac abspielen - Apple Support (DE)](https://support.apple.com/de-de/HT210980) 

Die Unterstützung von HDR-Videos (High Dynamic Range), z. B. HDR-Filme und TV-Sendungen von Apple oder anderen Anbietern, erfordert die neueste Version von macOS, ein kompatibles Mac-Modell sowie ein Display, einen Fernseher oder einen Projektor mit HDR10-Kompatibilität.

support.apple.com

* [ ](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986972)
* [#25](https://forums.macrumors.com/threads/dp-usb-c-thunderbolt-3-4-to-hdmi-2-1-4k-120hz-rgb4-4-4-10b-hdr-with-apple-silicon-m1-m2-now-possible.2381664/post-31986972)

Wow this is crazy thanks a lot

---

