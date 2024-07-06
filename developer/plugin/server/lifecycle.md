# 服务端

# 生命周期
插件包含以下生命周期：
```go
type Plugin interface {
    Start()  // 插件启动时执行
    Stop()  // 插件停止时执行
    Delete()  // 插件卸载时执行
}
```