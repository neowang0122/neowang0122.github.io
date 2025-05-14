---
id: 79bb2d83-8e5c-4adf-88a9-81027a4ea9bb
title: |
  在 Git 中缓存 GitHub 凭证 - GitHub Docs --- Caching your GitHub credentials in Git - GitHub Docs
author: |
  unknown
date_saved: 2024-09-19 16:07:12
draft: true
---

# 在 Git 中缓存 GitHub 凭证 - GitHub Docs --- Caching your GitHub credentials in Git - GitHub Docs
#Omnivore

[Read on Omnivore](https://omnivore.app/me/git-git-hub-git-hub-docs-caching-your-git-hub-credentials-in-git-1920be5579e)

[Read Original](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git)

date_saved: 2024-09-19 16:07:12


--- 

# Full Content: 

If you're [cloning GitHub repositories using HTTPS](https://docs.github.com/en/github/getting-started-with-github/about-remote-repositories), we recommend you use GitHub CLI or Git Credential Manager (GCM) to remember your credentials.  
如果您[使用 HTTPS 克隆 GitHub 存储库](https://docs.github.com/en/github/getting-started-with-github/about-remote-repositories)，我们建议您使用 GitHub CLI 或 Git Credential Manager (GCM) 来记住您的凭据。

* [Mac 苹果](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git?platform=mac)
* [Windows 视窗](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git?platform=windows)
* [Linux](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git?platform=linux)

**Tip:** If you clone GitHub repositories using SSH, then you can authenticate using an SSH key instead of using other credentials. For information about setting up an SSH connection, see "[Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)."  
**提示：**如果您使用 SSH 克隆 GitHub 存储库，则可以使用 SSH 密钥而不是使用其他凭据进行身份验证。有关设置 SSH 连接的信息，请参阅“[使用 SSH 连接到 GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) ”。

## [GitHub CLI](#github-cli)

GitHub CLI will automatically store your Git credentials for you when you choose `HTTPS` as your preferred protocol for Git operations and answer "yes" to the prompt asking if you would like to authenticate to Git with your GitHub credentials.  
当您选择`HTTPS`作为 Git 操作的首选协议并对询问您是否要使用 GitHub 凭证向 Git 进行身份验证的提示回答“是”时，GitHub CLI 将自动为您存储您的 Git 凭证。

1. [Install](https://github.com/cli/cli#installation) GitHub CLI on macOS, Windows, or Linux.  
在 macOS、Windows 或 Linux 上[安装](https://github.com/cli/cli#installation)GitHub CLI。
2. In the command line, enter `gh auth login`, then follow the prompts.  
在命令行中输入`gh auth login` ，然后按照提示操作。  
   * When prompted for your preferred protocol for Git operations, select `HTTPS`.  
   当提示您输入 Git 操作的首选协议时，选择`HTTPS` 。  
   * When asked if you would like to authenticate to Git with your GitHub credentials, enter `Y`.  
   当询问您是否要使用 GitHub 凭据向 Git 进行身份验证时，请输入`Y` 。

For more information about authenticating with GitHub CLI, see [gh auth login](https://cli.github.com/manual/gh%5Fauth%5Flogin).  
有关使用 GitHub CLI 进行身份验证的更多信息，请参阅[gh auth login](https://cli.github.com/manual/gh%5Fauth%5Flogin) 。

## [Git Credential Manager Git 凭证管理器](#git-credential-manager)

[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager) (GCM) is another way to store your credentials securely and connect to GitHub over HTTPS. With GCM, you don't have to manually [create and store a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), as GCM manages authentication on your behalf, including 2FA (two-factor authentication).  
[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager) (GCM) 是安全存储凭据并通过 HTTPS 连接到 GitHub 的另一种方法。使用 GCM，您不必手动[创建和存储个人访问令牌](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)，因为 GCM 代表您管理身份验证，包括 2FA（双因素身份验证）。

For more information or to report issues with GCM, see the official GCM docs at "[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager)."  
有关更多信息或报告 GCM 问题，请参阅“ [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager) ”中的官方 GCM 文档。

---

## Highlights

> 在 Git 中缓存 GitHub 凭证 - GitHub Docs --- Caching your GitHub credentials in Git - GitHub Docs [⤴️](https://omnivore.app/me/git-git-hub-git-hub-docs-caching-your-git-hub-credentials-in-git-1920be5579e#e2fad423-492b-4f17-9d69-f0e6cb5ade16)  ^e2fad423

