# JS模块化

## AMD: 

## CMD: 

## Commonjs:

## esModule: 

## 

[webpack4.splitChunks](https://www.cnblogs.com/kwzm/p/10314438.html)

## package.json中的main、module、unpkg属性

[package.json 中的 Module 字段是干嘛的](https://segmentfault.com/a/1190000014286439)
webpack 从版本 2 开始也可以识别 pkg.module 字段。打包工具遇到 package1 的时候，如果存在 module 字段，会优先使用，如果没找到对应的文件，则会使用 main 字段，