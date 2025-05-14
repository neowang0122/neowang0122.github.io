---
id: c33637dd-df6d-4362-8d61-0eee7af8cc28
title: |
  云翻译 |谷歌云 --- Cloud Translation | Google Cloud
author: |
  unknown
date_saved: 2024-03-22 21:28:56
draft: true
---

# 云翻译 |谷歌云 --- Cloud Translation | Google Cloud
#Omnivore

[Read on Omnivore](https://omnivore.app/me/cloud-translation-google-cloud-18e68ecd5dd)

[Read Original](https://cloud.google.com/translate?hl=en)

date_saved: 2024-03-22 21:28:56


--- 

# Full Content: 

![](https://proxy-prod.omnivore-image-cache.app/24x0,sWeN-hinhzQfciPD2h2UGueEwXje3NaxTz38YZ6eT8qk/https://lh3.googleusercontent.com/ZusbBIJJdFtf6dQembSH3DyTiUyFzNCPNgrsHqLNIqsgUmqrYs2JNzbVaLGJILGsFvNQdraJy_cSYw=s24-w24-rj)

## Translate docs, audio, and videos in real time with Google AI  

Google Cloud’s AI-powered APIs help you translate documents, websites, apps, audio files, videos, and more at scale with best-in-class quality and enterprise-grade control and security.  

Overview 

[Cloud Translation API](https://cloud.google.com/translate/docs) uses Google's neural machine translation technology to let you dynamically translate text through the API using a Google pre-trained, custom model, or [a translation specialized large language model](https://cloud.google.com/translate/docs/advanced/adaptive-translation) (LLMs).   

It comes in [Basic and Advanced](https://cloud.google.com/translate/docs/editions) editions. Both provide fast and dynamic translation, but Advanced offers customization features, such as domain-specific translation, formatted document translation, and batch translation.  

The first 500,000 characters sent to the API to process (Basic and Advanced combined) per month are free (not applicable to LLMs).  

### Translation Hub 

[Translation Hub](https://cloud.google.com/translation-hub/docs) is designed for organizations that translate a large volume of documents into many different languages. It is a fully-managed, self-service document translation service that uses both Cloud Translation API and AutoML Translation.   

It is a centralized platform with strong enterprise administration, control and security, simplifying the translation workflow and helping organizations maintain consistency and quality across multiple projects while keeping costs down.  

### AutoML Translation 

[AutoML Translation](https://cloud.google.com/translate/automl/docs/) enables you to create custom translation models tailored to your specific domain or use case, no coding required.   

It utilizes machine learning to analyze your provided translated text pairs and develop a model that can translate new content in the same domain with a higher degree of accuracy than the standard Google pre-trained model.   

It seamlessly integrates with Cloud Translation API and Translation Hub service for a smooth workflow orchestration.  

### Media file translation, subtitling and voice-over solutions  

For a simple translated transcript of a video or audio, [Speech-to-text API](https://cloud.google.com/speech-to-text) transcribes your video or audio with high accuracy into a text file that can be translated by the Translation API into different languages.  

To subtitle your videos after transcription and translation, use [Transcoder API](https://cloud.google.com/transcoder/docs) to [add subtitles](https://cloud.google.com/transcoder/docs/how-to/captions-and-subtitles#add-subtitles).  

To voice-over your videos in different languages, transcribe and translate, then use Cloud [Text-to-speech API](https://cloud.google.com/text-to-speech) to synthesize custom, lifelike speech in 380+ voices across 50+ languages.  

### Multilingual contact center solution for global markets  

Combining [Contact Center AI (CCAI)](https://cloud.google.com/solutions/contact-center) and [Translation API](https://cloud.google.com/translate/docs) allows you to assist a customer interaction happening in two different languages seamlessly across phone and chat, all in real-time. CCAI helps break language barriers by natively supporting both customer sentiment and call driver analysis, across many different languages. These analyses can be fed back to agents, in their preferred language, for better call outcomes and customer experience.  

### Data privacy and security  

Google Cloud has industry-leading capabilities that give you—our customers—control over your data and provide visibility into when and how your data is accessed.  

As a Google Cloud customer, you own your customer data. We implement stringent security measures to safeguard your customer data and provide you with tools and features to control it on your terms. Customer data is your data, not Google’s. We only process your data according to your agreement(s).  

Learn more in our [Privacy Resource Center.](https://cloud.google.com/privacy)  

Compare translation products  

| Product            | What is it                                                                                                                         | Best for                                                                                  | Editions and tiers                                                                                                              | Key features                                                                                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Translation API    | An **API** that delivers **best-in-class machine translation** results using Google’s neural machine translation technology.       | Translate websites, apps, documents, user comments etc.                                   | **Basic**: short-form, casual or user-generated content **Advanced**: long-form content that requires consistency and accuracy. | \-Supports >100 language pairs\-Advanced edition supports **domain-specific translation with higher accuracy**     |
| Translation Hub    | A **fully-managed** service that allows organizations to translate a **large volume of documents** and **manage their workflows**. | Enterprise document translation workflow management.                                      | **Basic**: generic content. **Advanced**: domain-specific content and content that requires human review and editing.           | \-**Enterprise-grade** control and security\-Zero deployment time \-Custom model \-Format retention \-Human review |
| AutoML Translation | A **custom** translation machine learning **model training** service that **integrates with** Translation API and Translation Hub. | Train a custom translation model for higher level of accuracy in domain-specific content. | N/A                                                                                                                             | \-**No-code** ML model training\-Seamlessly integrates with Translation API and Translation Hub                    |

To address complex use cases, Translation API, our foundational offering, works well with our [full portfolio of APIs](https://cloud.google.com/ai/apis).  

Translation API

What is it

An **API** that delivers **best-in-class machine translation** results using Google’s neural machine translation technology.

Best for

Translate websites, apps, documents, user comments etc.

Editions and tiers

**Basic**: short-form, casual or user-generated content 

**Advanced**: long-form content that requires consistency and accuracy.

Key features

\-Supports >100 language pairs

\-Advanced edition supports **domain-specific translation with higher accuracy**

Translation Hub

What is it

A **fully-managed** service that allows organizations to translate a **large volume of documents** and **manage their workflows**.

Best for

Enterprise document translation workflow management.

Editions and tiers

**Basic**: generic content.

**Advanced**: domain-specific content and content that requires human review and editing.

Key features

\-**Enterprise-grade** control and security

\-Zero deployment time

\-Custom model

\-Format retention

\-Human review

AutoML Translation

What is it

A **custom** translation machine learning **model training** service that **integrates with** Translation API and Translation Hub.

Best for

Train a custom translation model for higher level of accuracy in domain-specific content.

Editions and tiers

N/A

Key features

\-**No-code** ML model training

\-Seamlessly integrates with Translation API and Translation Hub

To address complex use cases, Translation API, our foundational offering, works well with our [full portfolio of APIs](https://cloud.google.com/ai/apis).

How It Works 

### 

Translation API and Translation Hub are translation services, while AutoML Translation integrates with both to enhance accuracy with custom translation models. 

Translation API helps you programmatically translate your apps, websites and programs real-time. It works with other APIs for more sophisticated use cases—explained in the Common Uses section. Translation Hub offers a no-code web interface to orchestrate complex translation workflows with enterprise-grade control and security.

[![translation api video thumbnail](https://proxy-prod.omnivore-image-cache.app/472x0,sLkWpnso-m7Rn3GsH78_LYZt9EXkrOMPcPJ11nS4uZmg/https://lh3.googleusercontent.com/2vwc_0gQm_2_iKc-iwawYoXKoFAcp8a6N6GjiRZRcKGeywZfjdEkg3no2kNLT2R8-g6P5HX5B7UQ=s472-w472)](https://www.youtube.com/watch?v=A3knNbGfXh4)

In-console demo: How the Translation API works

Common Uses

### Manage enterprise translation workloads

#### How-tos

## 

Fast translation, format retention, transparent pricing

Authorized business users sign in and request translations through a Translation Hub portal. These portal users might be localization managers or content creators who want to rapidly translate documents.

Portals are managed by a Google Cloud administrator in a Google Cloud project. Administrators add them to their Google Cloud project and assign them to portals for access. Portal users can only access their assigned portals, not the related Google Cloud project.

[Try Translation Hub now](https://translationhub.cloud.google.com/)

Translation Hub: enterprise-ready zero-code translation

* [![Doc icon](https://proxy-prod.omnivore-image-cache.app/600x0,shckRN5JR-JX-NdB2RAwNGqP_J5ooidd22XiRLX2sNlA/https://lh3.googleusercontent.com/Mc2xPsAnlkdVg6FQ0O7og4zwEEqlzrLKkHWyqK402tlR9ce2GfovKIOf4AAahm3UcXZVMy8XYyg=s600-w600)Compare Translation Hub basic and advanced tiers](https://cloud.google.com/translation-hub/docs/tiers)
* [![Quickstart icon](https://proxy-prod.omnivore-image-cache.app/600x0,sG9KsX-KAIq7GQAn2SDK4tfvNUWqzE-iAd91ZNso-nq0/https://www.gstatic.com/bricks/image/d547de58bee9ca18d763c3a8d9d553db63d82e526c54c897e590a9afd2609fc8.svg)](https://cloud.google.com/translation-hub/docs/admin-setup)
* [![doc icon](https://proxy-prod.omnivore-image-cache.app/600x0,shckRN5JR-JX-NdB2RAwNGqP_J5ooidd22XiRLX2sNlA/https://lh3.googleusercontent.com/Mc2xPsAnlkdVg6FQ0O7og4zwEEqlzrLKkHWyqK402tlR9ce2GfovKIOf4AAahm3UcXZVMy8XYyg=s600-w600)In-console Step-by-step Walkthrough: How to set up a project](https://console.cloud.google.com/freetrial?redirectPath=/walkthrough%5Fid=translation-hub--portal-set-up)

#### How-tos

## 

Fast translation, format retention, transparent pricing

Authorized business users sign in and request translations through a Translation Hub portal. These portal users might be localization managers or content creators who want to rapidly translate documents.

Portals are managed by a Google Cloud administrator in a Google Cloud project. Administrators add them to their Google Cloud project and assign them to portals for access. Portal users can only access their assigned portals, not the related Google Cloud project.

[Try Translation Hub now](https://translationhub.cloud.google.com/)

Translation Hub: enterprise-ready zero-code translation

* [![Doc icon](https://proxy-prod.omnivore-image-cache.app/600x0,shckRN5JR-JX-NdB2RAwNGqP_J5ooidd22XiRLX2sNlA/https://lh3.googleusercontent.com/Mc2xPsAnlkdVg6FQ0O7og4zwEEqlzrLKkHWyqK402tlR9ce2GfovKIOf4AAahm3UcXZVMy8XYyg=s600-w600)Compare Translation Hub basic and advanced tiers](https://cloud.google.com/translation-hub/docs/tiers)
* [![Quickstart icon](https://proxy-prod.omnivore-image-cache.app/600x0,sG9KsX-KAIq7GQAn2SDK4tfvNUWqzE-iAd91ZNso-nq0/https://www.gstatic.com/bricks/image/d547de58bee9ca18d763c3a8d9d553db63d82e526c54c897e590a9afd2609fc8.svg)](https://cloud.google.com/translation-hub/docs/admin-setup)
* [![doc icon](https://proxy-prod.omnivore-image-cache.app/600x0,shckRN5JR-JX-NdB2RAwNGqP_J5ooidd22XiRLX2sNlA/https://lh3.googleusercontent.com/Mc2xPsAnlkdVg6FQ0O7og4zwEEqlzrLKkHWyqK402tlR9ce2GfovKIOf4AAahm3UcXZVMy8XYyg=s600-w600)In-console Step-by-step Walkthrough: How to set up a project](https://console.cloud.google.com/freetrial?redirectPath=/walkthrough%5Fid=translation-hub--portal-set-up)

### Translate a website or app

#### How-tos

#### How-tos

### Subtitle a video in different languages

#### How-tos

#### How-tos

### Dub a video in different languages

#### How-tos

#### How-tos

### Train a custom translation model

#### How-tos

#### How-tos

### Translate formatted documents

#### How-tos

#### How-tos

### Translation-aided customer interactions

#### How-tos

#### How-tos

Pricing

| Price table                                 | Editions and tiers                                                                                                                                                  | Description                                                                             | Pricing                           |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------- |
| Translation API                             | Basic - use pretrained model                                                                                                                                        | First 500,000 characters per month                                                      | Free                              |
| 500,000 to 1 billion characters per month   | $20per million characters                                                                                                                                           |                                                                                         |                                   |
| Document translation                        | $0.08per page                                                                                                                                                       |                                                                                         |                                   |
| Advanced - use a custom model               | First 500,000 characters per month                                                                                                                                  | Free                                                                                    |                                   |
| 500,000 to 250 million characters per month | $80per million characters                                                                                                                                           |                                                                                         |                                   |
| Above 250 million characters                | [See detailed pricing page](https://cloud.google.com/translate/pricing)                                                                                             |                                                                                         |                                   |
| Document translation                        | $0.25per page                                                                                                                                                       |                                                                                         |                                   |
| Translation Hub                             | Basic tier                                                                                                                                                          | Enterprise document translation platform with general-purpose Google pretrained models. | $0.15per page per target language |
| Advanced tier                               | On top of basic features, it supports translation memory, use of custom translation models, human review, and machine translation quality prediction (MTQP) scores. | $0.50per page per target language                                                       |                                   |
| AutoML Translation                          | Custom translation model training                                                                                                                                   | $45per hour, $300 max per training job                                                  |                                   |

Translation API

Editions and tiers

Basic - use pretrained model

Description

First 500,000 characters per month

Pricing

Free

Editions and tiers

500,000 to 1 billion characters per month

Description

$20

per million characters

Editions and tiers

Document translation

Description

Advanced - use a custom model

Editions and tiers

First 500,000 characters per month

Description

Free

Editions and tiers

500,000 to 250 million characters per month

Description

$80

per million characters

Editions and tiers

Above 250 million characters

Description

Editions and tiers

Document translation

Description

Translation Hub

Editions and tiers

Basic tier

Description

Enterprise document translation platform with general-purpose Google pretrained models.

Pricing

$0.15

per page per target language

Advanced tier

Editions and tiers

On top of basic features, it supports translation memory, use of custom translation models, human review, and machine translation quality prediction (MTQP) scores.

Description

$0.50

per page per target language

AutoML Translation

Editions and tiers

Description

Custom translation model training

Pricing

$45

per hour, $300 max per training job

### PRICING CALCULATOR

Estimate the cost of your project by pulling in all the tools you need in a single place.

### CUSTOM QUOTE

Connect with our sales team to get a custom quote for your organization's unique needs.

### Take the next step with Google Cloud

### New customers get $300 in free credits

### Talk to an expert to discuss your use case

![](https://proxy-prod.omnivore-image-cache.app/24x0,s6DBCGd45TZcsVPLZOhlrX8WQsQUON9CJ1rYWdGN7fU8/https://www.gstatic.com/cgc/product-v3/proof-of-concept-blue.svg)

### Codelabs: Using the Translation API with C#

![](https://proxy-prod.omnivore-image-cache.app/24x0,syy6s9J1gjDAv0JEwUftDcsv0TC8tGFlN6wyYN3gbtqE/https://www.gstatic.com/cgc/product-v3/proof-of-concept-yellow.svg)

### How-to: Translation Hub admin setup

![](https://proxy-prod.omnivore-image-cache.app/24x0,s9hOTwRK_aKTRumnG2kKnNGB6tUsxh2jRTrdFdte6pdU/https://www.gstatic.com/cgc/product-v3/proof-of-concept-green.svg)

### Quickstart: Create a custom translation model

---

