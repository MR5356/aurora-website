# 安装指南 {#install}

## 使用二进制安装 {#binary}
Aurora 已经预编译了`linux/amd64`、`linux/arm64`、`darwin/amd64`、`darwin/arm64`、`windows/amd64`、`windows/arm64`系统的二进制可执行文件，支持二进制文件一键启动，[下载二进制文件](https://github.com/MR5356/aurora/releases/latest)

### Linux系统

```shell
# 以amd64系统为例
curl -o aurora.tar.gz https://github.com/MR5356/aurora/releases/latest/download/aurora-linux-amd64.tar.gz
tar zxvf aurora.tar.gz
mv aurora-linux-amd64 aurora 
chmod +x aurora
```

### MacOS系统
如果你的设备上安装了`Homebrew`，可以通过以下命令进行安装
```shell
brew install mr5356/brew/aurora
```

也可以通过下载二进制文件进行安装：[Amd64架构下载](https://github.com/MR5356/aurora/releases/latest/download/aurora-darwin-amd64.tar.gz)、[Arm64结构下载](https://github.com/MR5356/aurora/releases/latest/download/aurora-darwin-arm64.tar.gz)
```shell
# 以amd64系统为例
curl -o aurora.tar.gz https://github.com/MR5356/aurora/releases/latest/download/aurora-darwin-amd64.tar.gz
tar zxvf aurora.tar.gz
mv aurora-linux-amd64 aurora 
chmod +x aurora
```

### Windows系统
* Amd64架构：[下载地址](https://github.com/MR5356/aurora/releases/latest/download/aurora-windows-amd64.tar.gz)
* Arm64结构：[下载地址](https://github.com/MR5356/aurora/releases/latest/download/aurora-windows-arm64.tar.gz)


## 使用Docker安装 {#docker}
```shell
docker run --rm -it -p 80:8080 toodo/aurora
```

## 使用K8s安装 {#k8s}
```shell
# 待补充
```