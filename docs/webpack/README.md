# react webpack

## resolve - 配置模块如何解析

extensions：自动解析确定的扩展,省去你引入组件时写后缀的麻烦，
alias：非常重要的一个配置，它可以配置一些短路径，
modules：webpack 解析模块时应该搜索的目录，
其他 plugins、unsafeCache、enforceExtension，基本没有怎么用到

```js
resolve: {
  extensions: ['.js', '.jsx','.ts','.tsx', '.scss','.json','.css'],
  alias: {
    src :path.resolve(__dirname, '../src'),
    components :path.resolve(__dirname, '../src/components'),
    utils :path.resolve(__dirname, '../src/utils'),
  },
  modules: ['node_modules'],
}
```

## module.rules - 编译规则

rules：也就是之前的loaders，
test ： 正则表达式，匹配编译的文件，
exclude：排除特定条件，如通常会写node_modules，即把某些目录/文件过滤掉，
include：它正好与exclude相反，
use -loader ：必须要有它，它相当于是一个 test 匹配到的文件对应的解析器，babel-loader、style-loader、sass-loader、url-loader等等，
use - options：它与loader配合使用，可以是一个字符串或对象，它的配置可以直接简写在loader内一起，它下面还有presets、plugins等属性；

###### 常用loader

```js
babel-loader、awesome-typescript-loader js*/ts编译，
css-loader、postcss-loader、sass-loader、less-loader、style-loader 等css样式处理
file-loader、url-loader、html-loader等图片/svg/html等的处理，。
```
