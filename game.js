// 寫法一
// document.querySelector("#box").onclick = function(){
//     this.style.display = "none";
// }

// 兩行式寫法
let box = document.querySelector("#box");
let createdTime;
let clickedTime;
let reactionTime;

function getRandomColor(){
    let max = 150;
    let min = 50;
    let green = Math.floor(Math.random() *  (max - min + 1 )) + min;   // or let green = Math.ceil(Math.random()*(max - min)) + min;
    let color = "rgba(255," + green + ", 100, 1.0)";
    return color;
}

function makeBox(){
    let time = Math.random() * 3000;

    setTimeout(
        function(){
            if(Math.random() >= 0.5){
                box.style.borderRadius = "50%";
            }else{
                box.style.borderRadius = "0";
            } //寫在block前面就OK

            // console.log(window.innerWidth);
            // console.log(window.innerHeight);

            // console.log(document.documentElement.clientWidth);
            // console.log(document.documentElement.clientHeight);

            //升級版 動態調整，取得視窗寬度高度，再依據高度去弄 
            let dynamicBond;
            if(window.innerWidth > window.innerHeight){
                dynamicBond = window.innerWidth / 10;
            }else{
                dynamicBond = window.innerHeight / 10;
            } //此為數字

            //隨機出現位置 position:relative
            let min = 0;
            let max = window.innerHeight - (dynamicBond * 2);
            let top = Math.floor(Math.random() * (max - min + 1)) + min;

            min = 0;
            max = window.innerWidth - dynamicBond;
         
            dynamicBond = dynamicBond + "px";
            document.documentElement.style.setProperty("--bound", dynamicBond);


            let left = Math.floor(Math.random() * (max - min + 1 )) + min;

            box.style.top = top + "px";
            box.style.left = left + "px";

            box.style.backgroundColor = getRandomColor();
            box.style.display = "block";
            createdTime = Date.now();
        }, time);

        
}

box.addEventListener("click", () => {
    box.style.display = "none";

    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime) / 1000; //除以1000才會從秒變成毫秒
    document.querySelector("#time").innerHTML = reactionTime;

    makeBox();
});

makeBox();

//動作：一開始消失(本來CSS) 接著根據隨機時間消失，點擊後再消失

// 寫法三
// document.querySelector("#box").addEventListener("click", function () {
//     this.style.display = "none";
// })

