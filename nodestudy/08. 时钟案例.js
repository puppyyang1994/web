// 1. 导入文件模块
const fs = require('fs')
// 2. 导入路径模块
const path = require('path')

// 3. 定义正则表达式，分别匹配 <script></script> 和 <style></style>标签
// 任何字符都匹配 >[\s\S]*
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 读取文件
fs.readFile(path.join(__dirname, './index.html'), 'utf-8', function(err, dataStr){
    if(err){
        console.log(`读取失败${err.message}`);
    }
    // 写入三个页面 封装成函数
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

function resolveCSS(htmlStr){
    // 1. 使用正则 提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    // console.log(r1)// 提取到了style还有
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
   
    // 写入文件
    fs.writeFile(path.join(__dirname, './clock/style.css'), newCSS, function(err){
        if(err) return console.log('读入失败');
        console.log('写入成功');
    })

}

function resolveJS(htmlStr){
    // 1. 使用正则 提取需要的内容
    const r2 = regScript.exec(htmlStr)
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    // 写入文件
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err){
        if(err) return console.log('读入失败');
        console.log('写入成功');
    })
}

function resolveHTML(htmlStr){

    // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
  const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./style.css" />').replace(regScript, '<script src="./index.js"></script>')

  fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err){
    if(err) return console.log('读入失败');
    
  })
}

