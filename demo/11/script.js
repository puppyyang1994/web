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

// 点击视频后切换播放
video.addEventListener('click', togglePlay)

// 点击播放后 按钮更新为播放按钮
video.addEventListener('play', updateButton)
// 点击暂停后 按钮更新为暂停按钮
video.addEventListener('pause', updateButton)

// 进度条更新
video.addEventListener('timeupdate', handleProgress)

// 播放暂停切换按钮
toggle.addEventListener('click', togglePlay)

// skip按键
skipButtons.forEach(button => button.addEventListener('click', skip))

// 进度条变化
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

let mousedown = false

// 给显示条绑定事件
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) =>mousedown&&scrub(e))
progress.addEventListener('mousedown', ()=> mousedown=true)
progress.addEventListener('mouseup', ()=> mousedown = false)
function togglePlay(){
    // play 和 pause都是video的事件
    const method = video.paused? 'play' : 'pause'
    video[method]();

}
 
function updateButton(){
    const icon = this.paused ? '►':'❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}

function handleProgress(){
    // 现在的时间/视频整个的时间 * 100
    const percent = (video.currentTime/ video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`

}

// skip前进和后退功能
function skip(){
    // 这里一定要加上parseFloat()  这里的dataset.skip 是前面自定义的skip 属性
    video.currentTime += parseFloat(this.dataset.skip)
}

// 进度条 
function handleRangeUpdate(){
    video[this.name] = this.value
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime;

}