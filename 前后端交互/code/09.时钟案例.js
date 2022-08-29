// 1. 导入fs模块
const fs = require('fs')

// 2. 导入path模块
const path = require('path')

// 3.创建正则表达式 分别匹配style和script

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 4.使用fs模块读取需要被处理的html文件
fs.readFile(path.join(__dirname, './index.html'), 'utf8', function(err, dataStr){
    if(err){
        console.log('读取HTML文件失败'+ err.message);
    }
    // 如果读取成功，调用对应的三个方法 分别拆解出css js 和html
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

// 自定义resolveCSS方法 提取出css样式文件

// exec(str)正则表达式的匹配 要么等于null  要么等于一个数组

function resolveCSS(htmlStr){
//使用 正则 提取需要的内容
const r1 = regStyle.exec(htmlStr);
// console.log(r1);
// 将提取出来的样式字符串 进行replace替换操作
const newCSS =r1[0].replace('<style>', '').replace('</style>', '')
// console.log(newCSS);

// 调用fs.write()将提取的样式写入到clock目录中 index.css文件中
fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function(err){
    if(err){
        return console.log('写入失败' + err.message);
    }
    console.log('写入CSS文件成功');
})
}

// 自定义resolveJS方法 提取JS文件样式
function resolveJS(htmlStr){
    const r2 = regScript.exec(htmlStr);

    const newJS = r2[0].replace('<script>', '').replace('</script>', '')

    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err){
        if(err){
            return console.log(('写入失败'+ err.message));
        }
        console.log('写入js文件成功');
    })
}

// 自定义resolveHTML 提取html样式
function resolveHTML(htmlStr){
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css">').replace(regScript, '<link rel="stylesheet" href="./index.js">' )
    

    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err){
        if(err){
            return console.log('写入失败'+err.message);
        }
        console.log('写入html文件成功');
    })
}

// 两个注意点：
// 一定要先创建clock 文件
// fs.writeFile()方法只能用来创建文件 不能用来创建路径
// fs.write()重复调用 写入同一个文件，新写入的内容会覆盖之前的旧内容