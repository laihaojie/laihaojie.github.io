---
url: /src/framework/electron/note.md
---
# 注意事项

## 安装依赖报错或者很慢

手动执行命令下载electron依赖：

```bash
node node_modules/electron/install.js
```

这个命令就是下载electron所需要的依赖包
如果下载失败或者很慢，也可以手动从其他机器上复制好对应版本号的依赖包到指定目录下

windows下的依赖包目录为：

```txt
%APPDATA%\electron\cache
或者
C:\Users\<你的用户名>\AppData\Local\electron\Cache
```

macOS下的依赖包目录为：

```txt
~/Library/Caches/electron
```

Linux下的依赖包目录为：

```txt
~/.cache/electron
```

一般像这样,复制的时候注意，版本号相同和路径相同
