---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Aurora"
  text: ""
  image: "./assets/dashboard.jpg"
  tagline: Aurora is an open source system for DevOps.
  actions:
    - theme: brand
      text: 快速上手
      link: /user
    - theme: brand
      text: 在线示例
      link: https://demo.docker.ac.cn
    - theme: alt
      text: 开发指南
      link: /developer

features:
  - title: 主机管理
    details: 支持录入多台服务器主机，提供便捷的主机管理操作。用户可以对单个主机或主机组进行一键执行和定时执行操作，并且支持通过在线终端一键连接至主机，极大提高管理效率。
  - title: 在线终端
    details: 通过在线终端一键连接至主机，极大提高管理效率，同时支持多种认证方式，满足各种认证需求。
  - title: 计划任务
    details: 支持秒级精度的定时任务执行，提供多种定时任务策略。用户可以灵活设定任务执行时间和频率，满足各种复杂的任务调度需求。
  - title: 个性通知
    details: 支持多种通知类型，用户可以自定义通知类型和通知模板。内置飞书通知、Webhook通知等多种通知方式，确保重要信息及时传达。
  - title: 健康检查
    details: 支持多种健康检查类型，用户可以自定义健康检查类型和健康检查模板。内置HTTP健康检查、主机健康检查、数据库健康检查等多种健康检查方式，确保服务健康状态及时更新。
  - title: 功能扩展
    details: 通过插件系统支持动态扩展系统功能。用户可以根据需求灵活安装和使用各种插件，进一步提升系统的功能性和适用性。
---