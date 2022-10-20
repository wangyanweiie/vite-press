# PC 项目部署

## 一、测试环境部署

```shell
192.168.3.38    # 主机
root            # 用户名
123456          # 密码
22              # 端口
```

### 1. 配置项目Nginx

1. 配置文件路径：/usr/local/wwzh/nginx/conf/nginx.conf
2. 查看进程执行重启命令的路径：/usr/local/wwzh/nginx

```shell
ps -ef|grep nginx                  # 查看进程号
kill 进程号                        # 终止进程号
./sbin/nginx -c conf/nginx.conf    # 重启
   
nginx -t            # 查看nginx进程当前使用的配置文件
start nginx         # 启动 nginx
nginx -s reload     # 重新载入配置文件
nginx -s reopen     # 重启 nginx
nginx -s stop       # 停止 nginx
```

- 打开 XShell 或者 XFTP ，跳转到Nginx脚本路径 ：`/usr/local/wwzh/nginx/conf/nginx.conf`，下载打开文件复制红框中的内容，改成新的路径粘贴在下方
- 修改完成后 ，替换掉源文件, 再打开XShell进入路径 ：`/usr/local/wwzh/nginx`执行重启命令

`XSHell`

![image-20220121111420727](/public/img/PC项目部署.assets/image-20220121111420727.png)

`XFTP`

![image-20220121101723279](/public/img/PC项目部署.assets/image-20220121101723279.png)
![image-20220126112845536](/public/img/PC项目部署.assets/image-20220126112845536.png)

### 2. 上传项目

- 打开XFTP客户端，创建新会话，自定义会话名称，输入需要连接服务器的 `主机`  `用户名`   `密码`，确定。

![image-20220118174709065](/public/img/PC项目部署.assets/image-20220118174709065.png)

- 双击会话

![image-20220118175024083](/public/img/PC项目部署.assets/image-20220118175024083.png)

- 进入会话，打开本地打包的dist文件夹，全选，传输到服务器对应项目的dist文件夹中

![image-20220118175430965](/public/img/PC项目部署.assets/image-20220118175430965.png)

## 二、线上环境部署

### 1. 宏仁线上

- 连接阿里云宏仁线上地址
- 将打包的 dist 文件夹中的内容 ，上传到线上部署路径  `/home/qianduan`

```shell
118.31.251.200          # 主机
root                    # 用户名
JS1@#jaisd898*jweqi&%   # 密码
22                      # 端口
```

![image-20220124171511185](/public/img/PC项目部署.assets/image-20220124171511185.png)

### 2. 森田线上

- 远程到森田本地  `向日葵地址：676 225 149` 验证码：`8230`
- 将打包的 dist 文件夹替换森田本地客户端的指定路径下的dist  `C:/wwdz/dist/dist`
- 远程打开 FileZilla 客户端 ，选择主机 ，快速连接  `主机：sftp://root@192.168.33.26`
- 连接上主机后, 将本地的 dist 文件夹中的内容上传到服务器对应的文件夹中  `/home/sentian`

![image-20220124171800888](/public/img/PC项目部署.assets/image-20220124171800888.png)

### 3. 永晶线上

- 远程到永晶本地  `向日葵地址：299 526 987` `验证码：yjkj123`
- 将打包的 dist 文件夹替换永晶本地客户端的指定路径下的dist  `D:/pc/dist`

### 4. 金宏线上

- 阿里云金宏线上服务器
- 配置脚本路径：`/usr/local/nginx/vhosts/szjh.conf`
- 将打包的 dist 文件夹中的内容 ，上传到线上部署路径  `/home/szjh`

```shell
47.97.229.80            # 主机
root                    # 用户名
cS#LWMejEG@xek2clKr5A   # 密码
22                      # 端口
```

### 5. 特气线上

- 阿里云特气线上服务器

- 配置脚本路径：`/usr/local/nginx/conf/nginx.conf`

- 将打包的 dist 文件夹中的内容 ，上传到线上部署路径

  一期线上：  `/home`

  二期测试：  `/home/nadateqi_pc`

```shell
101.37.145.14           # 主机
root                    # 用户名
cVnpQi$uWJUKyNMPfwKH7   # 密码
22                      # 端口
```

### 6. 格林达线上

- 远程到永晶本地  `向日葵地址：554 019 679` `验证码：hdhhdh86`
- 将打包的两个 dist 文件夹分别替换永晶本地客户端的指定路径下，外网 `F:/gelinda/web`， 内网`F:/gelinda/web2`。

### 7. 博洋线上

- 阿里云博洋线上服务器
- 配置脚本路径：`/usr/local/nginx/conf/nginx.conf`
- 将打包的 dist 文件夹中的内容 ，上传到线上部署路径  `/home/boyang/web`

```shell
218.90.122.177      # 主机
root                # 用户名
2@CC22%b022         # 密码
22                  # 端口
```

## 三、前端环境

### 1. 服务器

```shell
192.168.3.87        # 主机
root                # 用户名
123456              # 密码
22                  # 端口
```

### 2. GitLab

```shell
# 前端交流会文档部署地址：http://192.168.3.87:5000/
# 前端交流会文档仓库，已经实现代码上传后自动打包部署
http://192.168.3.87:88/   # 地址
test                      # 账号
test123456                # 密码
```
