# APP 项目打包

## 一、`uni-app`

### 1. 流程

1. 开发者中心 - 应用管理 - 创建应用生成 `APP ID`
2. 点击应用 - 应用证书管理 - 生成证书 - 下载证书
3. `HBulider` 云打包 - 填写证书别名 + 证书密钥 + 上传证书 + 传统打包
4. 下载打包完成的`APK`包
5. 将`APK`包上传到蒲公英/`MinIon` - 生成下载二维码
6. 每次打包更新`APP`要注意更新版本号

### 2. 开发者中心

| 用戶 | 账号 | 密码 |
|------|-----|------|
| 蒲公英 | 15151805610 | 830805 |
| MinIon | minioadmin | minioadmin |
| 薛冲 | 1963005734@qq.com | xc980712. |
| 吉宇辰 | jijieoo@outlook.com | Jijieoo1991 |
| 王言伟 | 740484522@qq.com | wyw0724. |

### 3. 项目证书

| 项目 | 证书别名 | 证书密钥 | Android包名 |
|------|---------|----------|------------|
| 永晶 | __uni__9698c53  | wRsPTyuW |  |
| 格林达 | __UNI__54B7CC4 | lH8AxFfq | io.dcloud.gelinda |
| 格林达_xc | __UNI__F5AB16D | U3NOZXUh  | io.dcloud.gelinda |
| 博瑞 | __UNI__10AE0E7 | hDV0le86  |  |
| ~~南大特气~~ | __UNI__DB8FFD5 | JGdnGFBw | io.dcloud.nadateqi |
| 南大特气 | __UNI__35F4499 | W4Bnq35R | io.dcloud.nadateqi |

## 二、`android`

### 1. 开发者中心配置

![dcloud](/public/img/APP项目打包.assets/dcloud.png)

### 2. 项目配置

- 更改项目名

![reName1](/public/img/APP项目打包.assets/reName1.png)
![reName2](/public/img/APP项目打包.assets/reName2.png)

- 全局查找并替换 `Android包名` & `证书别名` & `证书密钥`

![find1](/public/img/APP项目打包.assets/find1.png)
![find2](/public/img/APP项目打包.assets/find2.png)

- 更改替换应用证书 : `nandateqi/nandateqi.keystore`  

![keyStore](/public/img/APP项目打包.assets/keyStore.png)

- 更改证书与版本配置信息 : `nandateqi/build.gradle`

![keyStoreInfo](/public/img/APP项目打包.assets/keyStoreInfo.png)

- 更改 Android证书签名 : `nandateqi/src/main/AndroidManifest.xml`

![key](/public/img/APP项目打包.assets/key.png)

- 更改项目的图标

![logo](/public/img/APP项目打包.assets/logo.png)

- 更改生成的本地打包资源

![www](/public/img/APP项目打包.assets/www.png)

### 3. 打包发布

#### 测试包

- 直接点击工具栏 - 小锤子进行打包

![build](/public/img/APP项目打包.assets/build.png)

- 生成的包路径

![build](/public/img/APP项目打包.assets/build⑤.png)

#### 正式包

- 点击工具栏 - 构建

![build](/public/img/APP项目打包.assets/build①.png)

- 选择 APK

![build](/public/img/APP项目打包.assets/build②.png)

- 选择证书文件路径，并填写证书密钥 APP别名与密钥

![build](/public/img/APP项目打包.assets/build③.png)

- 选择 release

![build](/public/img/APP项目打包.assets/build④.png)

- 生成的包路径

![build](/public/img/APP项目打包.assets/build⑤.png)
