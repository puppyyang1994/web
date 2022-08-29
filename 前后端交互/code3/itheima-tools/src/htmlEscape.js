// 定义转义HTML方法
function htmlEscape(htmlstr){
    return htmlstr.replace(/<|>|"|&/g, (match)=>{
        switch (match){
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"' :
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

// 定义还原HTML字符串
function htmlUnEscape(str){
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match)=>{
        switch(match){
            case "&lt;":
                return '<'
            case "&gt;":
                return '>'
            case "&quot;":
                return '"'
            case "&amp;" :
                return '&'
        }
    })
}

module.exports = {
    htmlEscape,
    htmlUnEscape
}