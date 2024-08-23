# 登录

![login](/assets/login.png)

## 使用内建用户登录
默认支持使用用户名/密码登录，内建用户admin/admin为系统管理员

## 使用 OAuth 方式登录
同时，支持使用Github、Gitlab、飞书等OAuth方式登录，配置如下：
```yaml
oauth:
  Github:
    authType: github
    clientId: your-clientId
    clientSecret: your-clientSecret
  # 页面将会显示使用 Gitlab-1 登录
  Gitlab-1:
    authType: gitlab
    authURL: your-gitlab-1-addr/oauth/authorize
    tokenURL: your-gitlab-1-addr/oauth/token
    clientId: your-gitlab-1-clientId
    clientSecret: your-gitlab-1-clientSecret
  # 页面将会显示使用 Gitlab-2 登录
  Gitlab-2:
    authType: gitlab
    authURL: your-gitlab-2-addr/oauth/authorize
    tokenURL: your-gitlab-2-addr/oauth/token
    clientId: your-gitlab-2-clientId
    clientSecret: your-gitlab-2-clientSecret
```
将对应的 OAuth callback URL 设置为`http://${your-aurora-addr}/api/v1/user/callback?oauth=${OAuthName}`

## 禁止用户登录
管理员可以在`用户管理`页面禁用/启用用户的账号，被封禁的用户登录后将无法使用该系统的`任何功能`。

![ban](/assets/user-manager.png)