// 1、点击tab栏 可以切换效果
let that;
class Tab {
    constructor(id){
        // 把this赋值给全局变量that 便于后面使用
        that = this;
        // 获取元素
        //this.main 大盒子
        this.main = document.querySelector(id)
        // 大盒子里面的li
        // this.lis = this.main.querySelectorAll('li');
        // this.sections = this.main.querySelectorAll('section');
        this.add = this.main.querySelector('.tabadd');
        // li的父元素
        this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        // section 的父元素
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
       
    }
    // 让页面一加载， 绑定事件就完成
    init(){
        this.updateNode();
        this.add.onclick = this.addTab;
        for(let i = 0; i< this.lis.length; i++){
            // index 存着当前的索引号
            // this 指向的是实例对象
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    // 获取所有的li 和 section (因为存在增删改查 所以节点要不断更新)
    updateNode(){
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
        // 第一个span
    }
    // 1. 切换功能
    toggleTab(){
        that.clearClass();
        // this 指向的是li
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    clearClass (){
        for(let i = 0; i < this.lis.length; i++){
            this.lis[i].className = '';
           this.sections[i].className = '';
        }
    }

    // 2. 添加功能
    addTab(){ 
    //    创建li元素和section元素 （以前的做法） （现在的做法：insertAdjacentHTML 支持字符串元素)
    // 排他思想 先清除所有li 再加上自己Li
     that.clearClass();
    let random = Math.random();
    let li = ' <li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
    let section = ' <section class="conactive">测试' + random + '</section>';
    that.ul.insertAdjacentHTML('beforeend', li);
    // 相当于appendChild   
     that.fsection.insertAdjacentHTML('beforeend', section);
     that.init();
    //  重新初始化 这样新加的节点会加上去
    }
    // 3. 删除功能
    // 核心思路: 点击x号可以删除这个索引号对应的li和section  （x是没有索引号的 但是他的父亲li有）

    removeTab(e){
        e.stopPropagation(); //阻止冒泡（因为会触发父元素li)
        let index = this.parentNode.index;
        console.log(index);

        // 根据索引号删除对应的li 和  section
        that.lis[index].remove(); //remove()方法可以直接删除指定的元素
        that.sections[index].remove();
        that.init();
        // 当删除的不是选中状态的li的时候， 原来的选中状态Li保持不变就可以了
        if(document.querySelector('.liactive'))return;
        // 重新初始化 删除的节点会更新
        // 当我们删除了选中状态的这个li的时候  让他的前一个li出于选中状态
        index--;
        // 自动调用了点击事件 不需要鼠标触发
       that.lis[index] && that.lis[index].click();
    //    注意这种写法  && 前面的成立 就执行后面的  不成立就不执行了
    }
    // 4.修改功能
    // 双击选项卡li或section里的文字 可以实现修改功能
    // 双击事件：ondbclick
    editTab(){
        let str = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges():document.getSelection.empty();
        this.innerHTML = '<input type = "text" />';
        let input = this.children[0];
        input.value = str;
        input.select(); //让文本框的文字属于选定状态
        // 当我们离开文本框就把文本框里面的值给span
        input.onblur = function(){
            this.parentNode.innerHTML = this.value;
        };
        //  按下回车也可以把文本框里面的值给span
        input.onkeyup = function(e){
            if(e.key === 'Enter'){
                // 手动调用表单失去焦点事件 不需要鼠标离开操作
                this.blur();
            }
        }
    }
}

let tab = new Tab('#tab');
