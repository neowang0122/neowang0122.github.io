---
id: d93cf7f5-45d2-4286-885d-b009459fefe6
title: |
  Git Configuration
author: |
  unknown
date_saved: 2024-03-18 04:06:07
date_published: 2023-03-06 19:00:00
draft: true
---

# Git Configuration
#Omnivore

[Read on Omnivore](https://omnivore.app/me/git-configuration-18e5098ad8c)

[Read Original](https://vercel.com/docs/projects/project-configuration/git-configuration)

date_saved: 2024-03-18 04:06:07

date_published: 2023-03-06 19:00:00

--- 

# Full Content: 

Learn how to configure Git for your project through the vercel.json file.

The following configuration options can be used through a `vercel.json` file like the [Project Configuration](https://vercel.com/docs/projects/project-configuration).

Type: `Object` of key branch identifier `String` and value `Boolean`, or `Boolean`.

Specify the branches that will not trigger an auto-deployment when committing to them. Any non specified branch is `true` by default.

Property's default value is `true`. In case you want to turn auto-deployments off for every branch, property value must be set to `false`.

```json
{
  "git": {
    "deploymentEnabled": {
      "main": false
    }
  }
}
```

Type: `Boolean`.

When set to `false`, [Vercel for GitHub](https://vercel.com/docs/deployments/git/vercel-for-github) will not apply the alias upon merge.

```json
{
  "github": {
    "autoAlias": false
  }
}
```

Type: `Boolean`.

When set to false, [Vercel for GitHub](https://vercel.com/docs/deployments/git/vercel-for-github) will always build pushes in sequence without cancelling a build for the most recent commit.

```json
{
  "github": {
    "autoJobCancelation": false
  }
}
```

The `github.silent` property has been deprecated in favor of the new settings in the dashboard, which allow for more fine-grained control over which comments appear on your connected Git repositories. These settings can be found in [the Git section of your project's settings](https://vercel.com/docs/deployments/git/vercel-for-github#silence-github-comments).

Type: `Boolean`.

When set to `true`, [Vercel for GitHub](https://vercel.com/docs/deployments/git/vercel-for-github) will stop commenting on pull requests and commits.

```json
{
  "github": {
    "silent": true
  }
}
```

The `github.enabled` property has been deprecated in favor of [git.deploymentEnabled](https://vercel.com/docs/projects/project-configuration/git-configuration#git.deploymentenabled), which allows you to disable auto-deployments for your project.

Type: `Boolean`.

When set to `false`, [Vercel for GitHub](https://vercel.com/docs/deployments/git/vercel-for-github) will not deploy the given project regardless of the GitHub app being installed.

```json
{
  "github": {
    "enabled": false
  }
}
```

---

---

