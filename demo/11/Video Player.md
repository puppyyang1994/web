### Video Player

#### 1.功能介绍

这个案例和`video`播放控制面板相关，涉及到以下功能：

- 点击视频画面或者按钮实现切换播放，同时按钮图形做相应的变化
- 点击或拖动进度条选择播放进度
- 点击按钮实现视频快进或者后退
- 滑动调节音量和播放速度

#### 2. 重点知识点

- `video`的相关属性，方法和事件（参考MDN）

  - paused
  - play()
  - pause()
  - video.paused 只读属性 告诉视频是否正在暂停（布尔型）
  - currentTime 会以秒为单位返回当前媒体元素的播放时间。设置这个属性会改变媒体元素当前播放位置。 
  - timeupdate  `currentTime`属性指定的时间发生变化
  - 扩展： auotplay（布尔型）controls（浏览器会自动提供一个控制面板）loop（布尔型- 循环播放） muted(布尔型-音频初识化为静音) poster（海报帧图片URL， 用于在视频处于下载中的状态时显示 ）

  #### 3. 代码

  ##### 1. HTML

  `video`标签中放入视频， `palyer_controls`是播放控制面板

  ```javascript
  <div class="player">
      <video src="./652333414.mp4" class="player_video viewer"></video>
  <div class="player_controls">
      <div class="progress">
          <div class="progress_filled"></div>
  </div>
  <button class="player_button toggle" title="Toggle Play">►</button>
  <input type="range" class="player_slider" name="volume" min="0" max="1" step="0.05" value="1">
      <input type="range" class="player_slider" name="playbackRate" min="0.5" max="2" step="0.1" value="1">
          <!-- 后退10秒  前进25秒 -->
              <button data-skip="-10" class="player_button">« 10s</button>
  <button data-skip="25" class="player_button">25s »</button>
  </div>
  </div>
  ```

  ##### 2. JS

  - 获取元素

  ```javascript
  // 获取元素
  const player = document.querySelector('.player')
  const video = document.querySelector('.viewer')
  // 获取进度条框
  const progress = document.querySelector('.progress')
  // 进度条bar
  const progressBar = document.querySelector('.progress_filled')
  // 切换按钮
  const toggle = document.querySelector('.toggle')
  // 快进按钮
  const skipButtons = document.querySelectorAll('[data-skip]')
  // 范围条
  const ranges = document.querySelectorAll('.player_slider')
  ```

  - 点击后实现播放/暂停的切换
    1. 判断视频是否在播放`video.paused`
    2. 播放视频 `play()`方法
    3. 暂停播放`pause()`方法

  ```javascript
  function togglePlay(){
  	if(video.paused){
  	video.play()
  	}else{
  	video.pause()
  	}
  }
  // 简写- 三元操作符
  function togglePlay(){
      video.paused? play():pasue()
  }
  //简写- 字符串执行属性方法
  function togglePlay(){
      const method = video.paused? 'play':'pasue'
      video[method]();
  }
  video.addEventListener('click', togglePlay)
  toggle.addEventListener('click', togglePlay)
  ```

  - 播放/暂停图标的切换

    通过视频本身的播放状态来判断该显示什么图标，这样最不容易出问题

  ```javascript
  function updateButton(){
      const icon = this.paused ? '►':'❚ ❚';
      console.log(icon);
      toggle.textContent = icon;
  }
  // this是方法的调用者video
  video.addEventListener('play', updateButton)；
  video.addEventListener('pause', updateButton)；
  ```

  

  - 进度条的变化和操作

    1. 进度条随着视频播放进度的变化而变化

       通过改变`progress_filled`占父元素`progress`的宽度的百分比实现

       `progress_filled`元素是`flex`定位的元素（初始化设置的是占整个`progress`的`flex-basis:50%`

  ```javascript
  //根据当前播放时间调节进度条
  function handleProgress(){
   // 现在的时间/视频整个的时间 * 100
  const percent = (video.currentTime/ video.duration)*100;
      progressBar.style.flexBasis = `${percent}%`
  
  }
  ```

  只要运行这个函数就可以实现这个功能，但是如何能做到自动执行这个函数呢？用`timeupdate`事件，这个事件会在媒体文件的`currentTime`属性发生改变时触发, 所以给`video`绑定该事件即可：

  ```javascript
  video.addEventListener('timeupdate', handleProgress)
  ```

  ​                    2. 手动`点击`进度条来实现进度条的变化

  ​                    通过事件对象`offsetX` 来得到鼠标点击的位置（`offsetX`表示鼠标店家位置相对于该元素的水平偏移）,得到偏移位置后计算该位置的百分比即可

  ​                        `offsetWidth` 是一个**只读**属性，返回一个元素的布局宽度。 

  ```javascript
  // 根据点击位置设置播放时间
  function scrub(e){
     const scrubTime = (e.setoffX / progress.offsetWidth) * vide.duration;
      video.currentTime = scrubTime;
  }
  progress.addEventListener('click', scrub)
  ```

    3. 手动`拖动`进度条来实现变化

       首先要设置一个标志来判断当前是否是出于拖动状态，然后通过`mousedown` `mouseup`来更新标志的状态

  ```javascript
  let mousedown = false;
  // 鼠标在progress上移动时更新进度条
  progress.addEventListener('mousemove', (e) =>{
      //若当前出于拖拽状态则更新进度条
      if(mousedown){
          scrub(e)
      }  
  })
  //鼠标按下改变标志
  progress.addEventListener('mousedown', ()=> mousedown=true)
  //鼠标抬起 恢复标志
  progress.addEventListener('mouseup', ()=> mousedown = false)
  ```

   这样就实现了拖拽进度条时改变播放进度的功能，实际使用的时候会发现拖拽和视频的更新并不是实时的，会有一定延迟，这是因为 `mousemove` 事件触发的频率非常高，视频更新的速度跟不上。 

  ```javascript
  //利用逻辑与&&的短路特性来实现代码简写
  progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
  //只有当`mousedown`为true时才会执行scrub(e)；若第一项不为真，第二项不会执行
  ```

  - 快进/快退

    给快进/快退按钮添加了自定义的`data-skip`属性，值即为快进/快退的秒数。

    通过设置`currentTime`来设置视频当前的时间，所以只要修改这个属性即可。

  ```html
<button data-skip="-10" class="player_button">« 10s</button>
  <button data-skip="25" class="player_button">25s »</button>
  ```
  
  ```JavaScript
  //快进或者后退功能
  function skip(){
      video.currentTime +=parseFloat(this.dataset.skip)
  }
  //获取到的skipButtons元素是一个数组，使用forEach()给每个元素都绑定事件
  skipButtons.for(button => button.addEventListener('click', skip))
  ```
  
  
  
  `data-**`自定义属性需要通过`.dataset.**`来访问， 因为获取到的是字符串所以要用`parseFloat()`转换成数值型
  
  - 音量/播放速度
  
    通过对滑动条的控制来控制音量和播放速度。两个滑动条是`range`类型的`input`, `min` `max` `step` `value`属性分别设置了最小值，最大值，步值。`name`属性的命名是为了便于后面的操作，叫什么其实都可以,因为在video对象中有`volume`和`playbackRate`这两个属性
  
    ```html
    <input type="range" class="player_slider" name="volume" min="0" max="1" step="0.05" value="1">
    <input type="range" class="player_slider" name="playbackRate" min="0.5" max="2" step="0.1" value="1">
    ```
  
    通过`input`的`change`事件，通过设置`value`可以来改变速度
  
    ```javascript
    function handleRangUpdate(){
    	video[this.name] = this.value
    }
    // 给两个ranges滑动条绑定事件
    ranges.forEach(range => range.addEventListener('change', handleRangUpdate))
    ```
  
     `change` 事件在控件失去焦点`blur`前都不会触发 ， 只有松开鼠标时才会生效。知道这一点很重要。解决方案：
  
    	1. 把`change`事件改成`input`事件
     	2. 在上面绑定`change`的基础上，在给`ranges`添加`mousemove`事件
  
    ```javascript
    ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))
    ```
  
    这个效果只有在鼠标滑动的时候才会生效。
  
    
  
  #### 4. CSS
  
  ```css
  html {
    box-sizing: border-box;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
    display: flex;
    background: #7a419b;
    min-height: 100vh;
    /* 渐变色 */
    background: linear-gradient(135deg, #7c1599 0%, #921099 48%, #7e4ae8 100%);
    background-size: cover;
    align-items: center;
    justify-content: center;
  }
  .player {
    max-width: 750px;
    border: 5px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    position: relative;
    font-size: 0;
    overflow: hidden;
  }
  .player:fullscreen {
    max-width: none;
    width: 100%;
  }
  .player:-webkit-full-screen {
    max-width: none;
    width: 100%;
  }
  /* 和外面的大盒子保持一致 */
  .player_video {
    width: 100%;
  }
  .player_button {
    background: none;
    border: 0;
    line-height: 1;
    color: white;
    text-align: center;
    outline: 0;
    padding: 0;
    cursor: pointer;
    max-width: 50px;
  }
  
  .player_button:focus {
    border-color: #ffc600;
  }
  
  .player_slider {
    width: 10px;
    height: 30px;
  }
  .player_controls {
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: translateY(100%) translateY(-5px);
    transition: all 0.3s;
    flex-wrap: wrap;
    background: rgba(0, 0, 0, 0.1);
  }
  /* 鼠标经过播放器时 播放按钮升起来 */
  .player:hover .player_controls {
    transform: translateY(0);
  }
  .player:hover .progress {
    height: 15px;
  }
  .player_controls > * {
    flex: 1;
  }
  .progress {
    flex: 10;
    position: relative;
    display: flex;
    flex-basis: 100%;
    height: 5px;
    transition: height 0.3s;
    background: rgba(0, 0, 0, 0.5);
    cursor: ew-resize;
  }
  .progress_filled {
    width: 50%;
    background: #ffc600;
    flex: 0;
    flex-basis: 50%;
  }
  
  input[type="range"] {
    -webkit-appearance: none;
    background: transparent;
    width: 100%;
    margin: 0 5px;
  }
  input[type="range"]:focus {
    outline: none;
  }
  /* 要和thumb搭配使用 */
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0);
    background: rgba(255, 255, 255, 0.8);
    border-radius: 1.3px;
    border: 0.2px solid rgba(1, 1, 1, 0);
  }
  /* range 的滑块的具体样式，该伪类只在内核为 webkit/blink 的浏览器中有效 */
  input[type="range"]::-webkit-slider-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background: #ffc600;
    cursor: pointer;
    -webkit-apprearance: none;
    /* 清除默认样式 */
    margin-top: -3.5px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background-color: #bada55;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0);
    background-color: #fff;
    border-radius: 1.3px;
    border: 0.2px solid rgba(1, 1, 1, 0);
  }
  ```
  
  
  
  
  
  