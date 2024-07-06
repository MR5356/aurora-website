# 插件描述

一个典型的插件描述文件 plugin.yaml 如下所示：

```yaml
metadata:
  name: starter
  version: 1.0.0
spec:
  requires: ">=1.0.0"
  author:
    name: Aurora
    website: https://docker.ac.cn
  logo: https://docker.ac.cn/logo.svg
  homepage: https://github.com/MR5356/aurora-plugin-starter#readme
  repo: https://github.com/MR5356/aurora-plugin-starter
  displayName: "示例插件"
  description: "一个简单的 Aurora 插件示例"
```

* `metadata.name`是插件的唯一标识名，包含不超过 64 个字符，仅包含小写字母、数字或中划线(-)，以字母或数字开头，以字母或数字结尾
* `metadata.version`是插件的版本号
* `spec.requires`表示插件受支持的`Aurora`版本
* `spec.author`为插件作者和可获得支持的网站地址
* `spec.logo`为插件 logo，可以是链接或相对于项目 resources 目录的文件路径，如将 logo 放在 resources/logo.png 则配置为 logo.png 即可
* `spec.homepage`为插件官网或帮助中心链接等
* `spec.repo`为插件的源码地址
* `spec.displayName`为插件的显示名称，它通常是以少数几个字来概括插件的用途
* `spec.description`为插件描述，用一段简短的说明来介绍插件的用途
