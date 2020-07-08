## 一、git push -u origin master时请求出错

给vscode连接github授权，然后重新提交（但是在授权时失败，可再次提交时还是会成功提交）
视频： git push --set-upstream origin master

## 二、利用阿里图标库将svg矢量图片转换成字体图标

图标管理=》我的项目=》新建项目=》导入文件=》生成地址=》public-index.html中导入链接地址link:css
注意：只有编辑项目和添加图表的时候才能被阿里图标库检测到然后重新生成链接地址

## 三、导入vant组件

注意：按需导入需要安装插件，具体看vant官方文档

## 四、rem适配

安装amfe-flexible的插件:不支持行内样式px转换
安装postcss插件，配置文件.postcssrc.js文件

## 五、sass-loader报错，重新安装即可

## 六、.js文件格式化缩进问题

在.eslintrc.js中配置rules:
rules: {
    "indent": ['off', 2]
  }

## 七、给vant组件修改样式问题

注：在自己写的组件内修改vant组件样式修改不了，加!important也没用
注：自己写的style样式要加到vant样式的后面

## 八、全局引入的toast轻提示会自动挂载在Vue的prototype上

## 九、表单中的按钮都会触发提交事件，可以设置属性native-type="button"

## 十、对api中的接口绑定到Vue.prototype.$api中，具体看main.js和api下的index.js

## 11、本地存储的缺点

1、使用频繁时，不方便
2、修改本地数据vue的视图不会更新

## 12、vuex：获取方便，响应式（修改Vuex数据组件视图会更新）

缺点： 当页面刷新时，又回到最初的起点，数据不会持久化

为了持久化还是需要把数据存在本地存储

所以我们结合Vuex + 本地存储（组件中调用时使用vuex容器里的数据就可既实现数据响应式又可实现数据持久化）

## 13、使用大写的变量来表示字符串变量，是因为如果字符串出错时，vue不会报错，但是变量的话，写错就会报错。

## 14、封装本地存储

## 15、van-cell to路由在$route.params.articleId为传入的是数字就是数字，传入的是字符串就是字符串，但是直接刷新拿到的都是字符串。

