# node.js

### 1. 安装运行环境

1. LTS版本和Current版本

LTS版本 稳定版 对于企业级项目推荐； Current 新特性尝鲜版 可能会存在隐藏的Bug或安全漏洞

2. 查看安装版本 

   如果能看到版本这说明安装成功： node -v + 回车

   如何打开Windows终端： windows徽标键+r  输入cmd   

3. 什么是终端（terminal）

   专门为开发人员设计的 用于实现人机交互的一种方式 有必要识记一些常用的终端命令

   

 在node.js中执行JavaScript代码

1. 打开终端
2. 输入node 要执行的js文件的路径 （切换到js文件的路径：cd 当前文件的路径）

使用更方便的方法：

shift + 右键 选择powershell打开

cmd是旧版本的终端

powershell是新版本的终端



了解常用的终端快捷键

向上箭头  回到上一次命令

tab键自动补全文件名称 先敲第一个文字+tab键

esc 快速清空当前文字



cls清空所有





# fs文件系统模块

fs模块 是node.js官方提供的，用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求

fs.readFile()用来读取指定文件中的内容

fs.writeFile()用来向指定的文件中写入内容



使用fs模块来操作文件，先需要导入他(下载node的时候已经自动下载了fs)

const fs = require('fs')；

语法格式：

fs.readFile(path [,options], callback)





fs.writeFile(file, data[,options], callback)

参数1 必选参数 需要指定一个文件路径的字符串，表示文件





### 练习 考试成绩整理

使用fs文件系统模块 将素材目录下的成绩.txt文件考试数据 整理到成绩-ok.txt文件中

1. 导入fs文件系统模块
2. 使用fs.readFile()方法，读取成绩.txt
3. 判断是否读取成功
4. 读取成功后，处理成绩数据
5. 将处理完的数据，调用fs.writeFile()方法， 写入到新文件成绩-ok.txt文件中





### fs 路径问题- 动态拼接

 使用fs模块操作文件，如果提供的操作路径是以./或../开头的相对路径时，很容易出现动态拼接错误问题

原因：代码在运行的时候，会执行node命令时所处的目录，动态拼接出被操作文件的完整路径

cd ../  返回上一层目录





### path路径模块

path 是node官方提供的 用来处理路径的模块

path.join()

path.basename()路径中的最后一部分 也就是文件名

path.join()路径拼接： path.join([...paths])  返回值 拼接好的字符串

path.extname()获取路径中的扩展名部分



今后凡是涉及到路径拼接的操作，都要使用path.join()方法处理 不要直接使用 +拼接字符串的方法



### http模块

1. 客户端 服务器

2. http模块 是Node.js官方提供的 用来创建web服务器的模块。通过http模块提供的http.createServer()方法，就能把一台普通的电脑 变成一台web服务器，从而对外提供web服务资源

3. 使用http模块创建web服务器，需要先导入它

   ```js
   const http = require('http')
   ```



服务器相关的概念

ip地址：互联网上每台计算机的唯一地址,因此ip地址具有唯一性

点分十进制（a.b.c.d) 0-255



域名和域名服务器

创建最基本的web服务器

1. 导入http
2. 创建web服务器实例
3. 为服务器实例绑定request事件，监听客户端的请求
4. 启动服务器



req请求对象 在时间处理函数中 访问与客户端相关的数据或属性 可以使用server.on('request', (req))



Node 模块化

内置模块（fs path http)

自定义模块 (用户创建的JS文件)

第三方模块（第三方开发出来的模块）



每个自定义模块都有一个module对象

module.exports 默认空对象，将模块内的成员共享出去，供外界使用



使用require方法导入模块时，导入的结果，永远以module.exports 指向的对象为准

exports和module.exports指向的是同一个对象



exports和module.exports的使用误区（4个误区）

一定要记住：得到的永远是module.exports指向的对象





Node.js中的模块规范   遵循了CommonJS模块化规范 

CommonJS规定：

每个模块内部，module变量代表当前模块

module变量是一个对象，它的exports属性（module.exports)是对外的接口

加载某个模块，其实是加载该模块的module.exports属性，require（）方法用于加载模块



npm与包

Node.js中的第三方模块叫做包

包是由第三方开发的，需要下载。 包是基于内置模块封装出来的，提供了更高级，更方便的API，极大的提高了开发效率

从哪里下载包

https://www.npmjs.com 检索徐亚的包

https://registry.npmjs.org  下载需要的包

格式化时间的高级做法 用npm包

包的语义化版本规范：

包的版本号 ‘点分十进制’  2.24.0 

第一位数字：大版本

第二位数字：功能版本

第三位数字：Bug修复版本

只要前面的版本号增长了，后面的版本号归零



包管理配置文件

在项目根目录中，必须提供一个package.json的包管理配置文件， 用来记录与项目相关的一些配置信息

如：项目的名称，版本号，描述等 ； 项目中用到了那些包； 哪些包只在开发期间会用到； 哪些包在开发和部署时会用到

如何记录项目中，安装了哪些包：  根目录创建一个叫做package.json的配置文件。

通过命令快速创建package.json    npm init -y    再安装具体的包  npm i moment   在的dependencies里可以看到安装的包

一次性安装所有的包 npm i



卸载包： npm uninstall 命令



安装到devDependencies节点中    npm i 包名 -D   (包只在项目开发中会用到，在上线后不会用到) 可以看文档是需要加-D还是不需要



解决npm下包慢：使用淘宝npm镜像服务器

切换npm的下包镜像源  

- 检查当前的下包镜像源  npm config get registry
- npm config set registry=https://registry.npm.taobao.org/

nrm切换工具  先安装nrm  npm i nrm -g     2. 查看所有可用的镜像源 nrm ls  3. nrm use taobao(切换镜像源服务器)



包的分类

- 项目包(被安装到node.moudules中的包）： 开发依赖包devDependencies节点中 （-D)  核心依赖包denpendencies 节点中
- 全局包 （安装时 加了-g参数， 则是全局包）只有工具性质的包，才有全局安装的必要 这个可以参考官方文档

i5ting_toc 是一个可以把md文档转为html页面的小工具

npm install -g i5ting_toc

i5ting_toc -f 要转换的md文件路径 -o

