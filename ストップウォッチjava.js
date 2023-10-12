var startButton;    // startボタン
var stopButton;     // stopボタン
var resetButton;    // resetボタン
var showTime;       // 表示時間

var timer;              // setinterval, clearTimeoutで使用
var startTime;          // 開始時間
var elapsedTime = 0;    // 経過時間
var holdTime = 0;       // 一時停止用に時間を保持

window.onload = function () {
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    resetButton = document.getElementById("reset");
    showTime = document.getElementById("time");
}

// スタートボタン押下時
function start(){
    // 開始時間を現在の時刻に設定
    startTime = Date.now();

    // 時間計測
    measureTime();

    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}

// ストップボタン押下時
function stop(){
    // タイマー停止
    clearInterval(timer);

    // 停止時間を保持
    holdTime += Date.now() - startTime;

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}


function reset(){
   
    clearInterval(timer);

   
    elapsedTime = 0;
    holdTime = 0;
    showTime.textContent = "00:00.00";

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}


function measureTime() {
   
    timer = setTimeout(function () {
       
        elapsedTime = Date.now() - startTime + holdTime;
        showTime.textContent = new Date(elapsedTime).toISOString().slice(14, 23);
        
       
        measureTime();
    }, 10);
}