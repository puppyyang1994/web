## node.js 与 内置模块

#### 什么是Node.js?
Node.js是一个基于Chrome V8引擎的JavaScript运行环境

1. 什么是node.js？ 简单说node.js就是运行在服务端的JavaScript
2. 什么是运行环境？ 运行环境是指代码正常运行所需要的的必备环境
3. 为什么JS可以在浏览器运行？因浏览器使用不同的JavaScript解析引擎， 其中chrome浏览器的V8解析引擎最好
4. 为什么JS可以操作DOM和BOM？ 因为浏览器内置了DOM和BOM这样的API函数，因此浏览器的中JS才可以调用他们
5. 所以以Chrome浏览器为例 他的运行环境就是V8解析引擎+内置API
   

#### Node.js 可以做什么？
Node.js 作为一个JavaScript的运行环境，仅仅提供了基础的功能和API，但是基于Node.js的基础功能，很多强大的工具和框架出来了：
- 基于Express，可以快速构建web应用
- 基于Electron， 可以构建跨平台的桌面应用
- 基于restify 可以快速构建API接口项目
- 读写和操作数据库，创建使用的命令行工具辅助前端开发


#### Node.js怎么学？
JS基础语法+node.js内置API(fs, path, http等)+第三方API（express， mysql)等

步骤：
- 使用node -v 查看当前的Node版本
- windows打开终端的快捷键 徽标+R 输入cmd
- 在nodestudy文件下打开powersehll 然后输入 node node.js(文件名) 就会执行JS代码

#### 什么是终端terminal？
转为开发人员设计的，用于实现人机交互的一种方式。程序员有必要记一些常用的终端命令，一边更好操作计算机
  - 一些常见的终端命令  tab键 可以快速补全路径； esc快速清空当前已输入的命令； cls清空终端


#### 创建Node.js应用的步骤
1. 引入require模块（我们使用require指令来载入http模块）
2. 创建服务器


#### fs文件系统模块
1. fs模块是node.js官方提供的，用来操作文件的模块， 他提供了一系列的方法和属性
```
fs.readFile() //用来读取指定文件中的内容  注意只能用单引号 ''
fs.writeFile() //用来向指定的文件写入内容
```

2. fs模块动态拼接的问题
如果./ 或 ../ 开头的相对路径时，很容易出现路径动态拼接错误的问题。原因：代码在运行的时候，会以执行 node 命令时所处的目录，动态拼接出被操作文件的完整路径。
**解决方案**：在使用 fs 模块操作文件时，直接提供完整的路径，不要提供 ./ 或 ../ 开头的相对路径，从而防止路径动态拼接的问题。`__dirname`表示当前文件所处的路径


#### path路径模块
1. path 模块是 Node.js 官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理
需求.
今后凡是涉及到路径拼接的操作，都要使用 path.join() 方法进行处理。不要直接使用 + 进行字符串的拼接。


```
//path.join() //用来将多个路径片段拼接成一个完整的路径字符串
const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, './files/成绩-ok.txt'), "utf-8", function(err, dataStr){
    if(err){
        console.log('读取失败');
    }
    console.log(`读取成功${dataStr}`);
})
```

```

path.basename()//用来从路径字符串中，将文件名解析出来
path.extname() //可以获取路径中的扩展名部分，
```


```
//path.basename()
const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt);

// path.basename(path[,ext]) path 必选参数，表示一个路径的字符串； ext可选参数 表示文件的扩展名 返回路径中的最后一部分
```

```
//path.extname() 
const path = require('path')

const fpath = '/a/b/c/index.html'

const fext = path.extname(fpath)
console.log(fext); //.html
```

#### 综合案例-时钟
1. 实现：把index页面 分成三部分 分别写入到clock文件夹的js html css文件中
   

#### HTTP模块
1. 什么是客户端，什么是服务端？
   负责消费资源的电脑叫做客户端，负责对外提供网络资源的电脑叫做服务器。
   http模块是Node.js官方提供的，用来创建web服务器的模块。通过http模块提供的http.createServer()方法，就能方便的把一台普通的电脑，变成一台web服务器，从而对外提供web资源服务


2. 服务器和普通电脑的区别？
   服务器上安装了web服务器软件，如IIS， Apsche等，通过安装这些服务器软件，就能把一台普通的电脑变成一台web服务器。但是在Node.js中 我们不需要这些软件，我们可以使用http模块，通过几行简单的代码，就能轻松的手写一个服务器，从而对外提供web服务
3. IP地址就是每一台电脑的唯一地址，IP地址具有唯一性，所以IP地址就相当于一个电话号码，只有在知道对方IP地址的前提下，才能与对应的电脑之前进行数据通信。IP地址通常用点分十进制 192.168.1.1； 在开发期间，自己的电脑是客户端，也是服务器。为了方便测试，可以在自己的浏览器输入127.0.0.1IP地址，就能把自己的电脑当做一台服务器进行访问了。 Domain name 域名。IP地址不方便记忆为了让人看懂，出现了域名， 一一对应的关系。这份对应关系存放在一种叫做域名服务器的电脑中（DNS domain name server),域名服务器就是提供IP地址和域名之间的转换服务的服务器。
4. 在开发测试期间 127.0.0.1 对应的域名是localhost, 他们都代表我们自己的这台电脑。
5. 端口号：一台电脑中，可以运行很多web服务器，每个服务器都对应唯一一个端口号，客户端发送过来的网络请求，通过端口号，可以被准确地交给对应的web服务进行处理。在实际应用中，URL中的80端口可以被省略

6. clock的综合案例值得多理解 目前还有点稀里糊涂 下面网址的解释挺简明
   https://blog.csdn.net/m0_57835615/article/details/119336351 



#### 模块化
1. **模块化的基本概念**
模块化是指解决一个复杂问题时，自顶向下逐层把系统划分成若干模块的过程，对于整个系统来说 模块是可组合，分解和更换的单元
在编程领域，模块化就是遵守固定的规则，把一个大文件拆除独立的并相互依赖的多个小模块。好处：提高了复用性，可维护，按需加载
模块化规范：对代码进行模块化的拆分和组合时，需要遵守哪些规则：引用模块？ 暴露成员？
2. **Node****.****js中模块的分类**
   - 内置模块（fs, path, http等）
   - 自定义模块（用户创建的每个.js文件，都是自定义模块）
   - 第三方模块（使用前需要先下载）
 - 使用强大的 `require()` 方法，可以加载需要的内置模块、用户自定义模块、第三方模块进行使用。

**Node.js中的模块作用域：**
和函数作用域类似，在自定义模块中定义的变量和方法等成员，只能在当前模块内访问，这种模块级别的访问限制，叫做模块作用域。
防止了全局变量污染的问题。

Module对象：每个自定义.js文件中都有Module对象，它里面储存了和当前模块相关的内容。
在自定义模块中 可以用module.exports对象，将模块内的成员共享出去，供外界使用。
外界用 require() 方法导入自定义模块时，得到的就是 module.exports 所指向的对象。


由于 module.exports 单词写起来比较复杂，为了简化向外共享成员的代码，Node 提供了 exports 对象。默认情况
下，exports 和 module.exports 指向同一个对象。最终共享的结果，还是以 module.exports 指向的对象为准。

时刻谨记，require() 模块时，得到的永远是 module.exports 指向的对象：

Node.js 遵循了 CommonJS 模块化规范，CommonJS 规定了模块的特性和各模块之间如何相互依赖：
CommonJS 规定：
① 每个模块内部，module 变量代表当前模块。
② module 变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口。
③ 加载某个模块，其实是加载该模块的 module.exports 属性。require() 方法用于加载模块。
   
**npm与包**
- node.js中的第三方模块叫做包
- 为什么需要包？
  由于 Node.js 的内置模块仅提供了一些底层的 API，导致在基于内置模块进行项目开发的时，效率很低。
包是基于内置模块封装出来的，提供了更高级、更方便的 API，极大的提高了开发效率。
包和内置模块之间的关系，类似于 jQuery 和 浏览器内置 API 之间的关系。
- 从哪里搜索包和下载包？
  国外有一家 IT 公司，叫做 npm, Inc. 这家公司旗下有一个非常著名的网站：` https://www.npmjs.com/` ，它是全球最
大的包共享平台，你可以从这个网站上**搜索**到任何你需要的包，只要你有足够的耐心！
到目前位置，全球约 1100 多万的开发人员，通过这个包共享平台，开发并共享了超过 120 多万个包 供我们使用。
npm, Inc. 公司提供了一个地址为 `https://registry.npmjs.org/` 的服务器，来对外共享所有的包，我们可以从这个服务
器上**下载**自己所需要的包

- npm, Inc. 公司提供了一个包管理工具，我们可以使用这个包管理工具，从 https://registry.npmjs.org/ 服务器把需要
的包下载到本地使用 Node Package Manager（简称 npm 包管理工具）这个包管理工具随着 Node.js 的安装包一起被安装到了用户的电脑上

先从官网下载包， 下载完成后文件中就会多了一个node_modules文件夹 node_modules 文件夹用来存放所有已安装到项目中的包。require() 导入第三方包时，就是从这个目录中查找并加载包。
package-lock.json 配置文件 记录 node_modules 目录下的每一个包的下载信息，例如包的名字、版本号、下载地址等。
npm 规定，在项目根目录中，必须提供一个叫做 package.json 的包管理配置文件。用来记录与项目有关的一些配置
信息。例如：
⚫ 项目的名称、版本号、描述等
⚫ 项目中都用到了哪些包
⚫ 哪些包只在开发期间会用到
⚫ 那些包在开发和部署时都需要用到

导入包后就根据文档进行相关API的调用
：共享时剔除node_modules
在项目根目录中，创建一个叫做 package.json 的配置文件，即可用来记录项目中安装了哪些包。从而方便剔除
node_modules 目录之后，在团队成员之间共享项目的源代码。
注意：今后在项目开发中，一定要把 node_modules 文件夹，添加到 .gitignore 忽略文件中。



当我们拿到一个剔除了 node_modules 的项目之后，需要先把所有的包下载到项目中，才能将项目运行起来。
否则会报类似于下面的错误(略)  可以运行 npm install 命令（或 npm i）一次性安装所有的依赖包：可以运行 npm uninstall 包名 命令，来卸载指定的包：
- npm -v 查看npm包管理工具的版本
- 我们还可以自己做包

**模块的加载机制**
模块在第一次加载后会被缓存。 这也意味着多次调用 require() 不会导致模块的代码被执行多次。
注意：不论是内置模块、用户自定义模块、还是第三方模块，它们都会优先从缓存中加载，从而提高模块的加载效率。


**Express**
1. 什么是express？
   Express 是基于 Node.js 平台，快速、开放、极简的 Web 开发框架。
   Express 的作用和 Node.js 内置的 http 模块类似，是专门用来创建 Web 服务器的。
   Express 的本质：就是一个 npm 上的第三方包，提供了快速创建 Web 服务器的便捷方法。
   express是基于内置模块http封装出来的

2. express能做什么？
   对于前端程序员来说，最常见的两种服务器，分别是：
⚫ Web 网站服务器：专门对外提供 Web 网页资源的服务器。
⚫ API 接口服务器：专门对外提供 API 接口的服务器。
   使用 Express，我们可以方便、快速的创建 Web 网站的服务器或 API 接口的服务器
  
3. 安装express包  nmp i express@4.17.1
4. 创建web服务器的基本流程
5. express 提供了一个非常好用的函数，叫做 express.static()，通过它，我们可以非常方便地创建一个静态资源服务器，
例如，通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了：
`app.use(express.static('public'))` 现在，你就可以访问 public 目录中的所有文件了
注意：Express 在指定的静态目录中查找文件，并对外提供资源的访问路径。
因此，存放静态文件的目录名不会出现在 URL 中。


#### nodemon
在编写调试 Node.js 项目的时候，如果修改了项目的代码，则需要频繁的手动 close 掉，然后再重新启动，非常繁琐。
现在，我们可以使用 nodemon（https://www.npmjs.com/package/nodemon） 这个工具，它能够监听项目文件
的变动，当代码被修改后，nodemon 会自动帮我们重启项目，极大方便了开发和调试。

nodemon可以同步更新