(function flexible(window, document) {
    // 获取html根元素
    var docEl = document.documentElement
    // dpr物理像素比 
    var dpr = window.devicePixelRatio || 1

    // adjust body font size  设置body字体大小
    function setBodyFontSize() {
        // 页面中有body元素 则设置字体大小
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else {
            // 如果页面中没有body元素，则等DOM元素加载完毕后在设置body字体大小
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10    设置html元素的文字大小
    function setRemUnit() {
        var rem = docEl.clientWidth / 10           //  html的宽度/10 
        docEl.style.fontSize = rem + 'px' //设置了1个rem的大小
    }

    setRemUnit()

    // reset rem unit on page resize   当页面尺寸大小变化时 重新设置rem的大小
    window.addEventListener('resize', setRemUnit)
    // pageshow重新加载页面触发的事件  
    window.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            setRemUnit()
            // e.persisted 返回的是true 如果这个页面是从缓存取过来的页面，也需要重新计算一个rem的大小
        }
    })

    // detect 0.5px supports  有些移动端的浏览器不支持0.5像素的写法
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))