# YH-Node

## 依赖
### npm install
### npm install -g cnpm --registry=http://registry.npm.taobao.org 安装npm淘宝镜像
### cnpm install gulp-sass --save--dev 安装gulp-sass依赖
___
说明：lite-server 基于browser-sync, 直接使用 npm run lite-server同样会启动一个本地服务，但是自动刷新浏览器没有生效。

## 运行
### npm run dev 运行本地环境
### npm run pro 运行正式环境
### npm run test 运行测试环境
___
说明：运行本地环境会将测试环境和正式环境代码打包到test/pro，运行本地环境和测试环境不会执行gulp。
服务是通过pm2启动，可通过<https://app.keymetrics.io/>管理pm2启动的服务。
