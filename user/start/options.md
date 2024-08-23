# 配置项

Aurora 的配置项如下：
```yaml
# 服务相关
server:
  # 启动端口
  port: 80
  # 应用访问地址，配置错误将导致OAuth鉴权无法使用
  baseURL: 'http://localhost'
  # 固定字符串，当前版本为 /api/v1
  prefix: /api/v1
  # 是否开启debug模式
  debug: false
  # 程序优雅关闭超时时间
  gracePeriod: 30

# 数据库相关
database:
  # 数据库驱动，当前支持sqlite、mysql、postgres
  driver: sqlite
  # 数据库连接DSN
  dsn: db.sqlite

# 身份认证相关
jwt:
  # 加密密钥
  secret: aurora
  # Token签发者
  issuer: fun.toodo.aurora
  # Token有效期
  expire: 720h

# OAuth 登录相关
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