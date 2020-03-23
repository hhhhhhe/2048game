// 记录得分与16个方格的信息
var sroce = 0;//计分
var infor = new Array();//数组存贮16个空格
document.getElementById("newgame").addEventListener("click", newGame);//初始话新游戏
document.getElementById("l").addEventListener("click", toleftbtn);
document.getElementById("r").addEventListener("click", torigthbtn);
document.getElementById("up").addEventListener("click", toupbtn);
document.getElementById("down").addEventListener("click", todownbtn);

// 初始化一个游戏
function newGame() {
    newinfo(infor);// 初始化十六个空格的信息
    generateOneNumber(infor);// 随机生成两个数字
    renderBoard(infor);
    generateOneNumber(infor);
    renderBoard(infor);
    document.getElementById("win_over").classList.add("hide");
    document.getElementById("game_win").classList.add("hide");
    document.getElementById("game_over").classList.add("hide");
}

// 点击向左按钮更新数据与页面
function toleftbtn() {
    gamewin(infor);
    gameover(infor);
    toleft(infor);
    // delayRun(generateOneNumber(infor),5000);
    generateOneNumber(infor);
    // game_generateNumber(infor);
    renderBoard(infor);
    document.getElementById("srcoe").innerHTML = sroce;
}

// 点击向右按钮更新数据与页面
function torigthbtn() {
    gamewin(infor);
    gameover(infor);
    torigth(infor);
    generateOneNumber(infor);
    // game_generateNumber(infor);
    renderBoard(infor);
    document.getElementById("srcoe").innerHTML = sroce;
}

// 点击向上按钮更新数据与页面
function toupbtn() {
    gamewin(infor);
    gameover(infor);
    toup(infor);
    infor = newArray;
    generateOneNumber(infor);
    // game_generateNumber(infor);
    renderBoard(infor);
    document.getElementById("srcoe").innerHTML = sroce;
}

// 点击向下按钮更新数据与页面
function todownbtn() {
    gamewin(infor);
    gameover(infor);
    todown(infor);
    infor = newArray;
    generateOneNumber(infor);
    // game_generateNumber(infor);
    renderBoard(infor);
    document.getElementById("srcoe").innerHTML = sroce;
}

// 更新分数函数
function newinfo(arr) {
    sroce = 0;
    document.getElementById("srcoe").innerHTML = "0";
    for (var i = 0; i < 4; i++) {
        arr[i] = new Array();
        for (var j = 0; j < 4; j++) {
            arr[i][j] = 0;
            var t = document.getElementById('c_' + i + '_' + j);
            t.innerHTML = " ";
            t.style.background = "#ee8972";
        }
    }
}

// 在空的方格位置随机产生一个2或者4的数字
function generateOneNumber(arr) {
    var randnum = Math.random() < 0.5 ? 2 : 4;
    var randX = Math.floor(Math.random() * 4);
    var randY = Math.floor(Math.random() * 4);
    if (arr[randX][randY] == 0) {
        arr[randX][randY] = randnum;
    }
    else {
        generateOneNumber(arr);
    }
}

// 游戏过程随机生成一个数子
function game_generateNumber(arr) {
    if (nospace(arr)) {
        generateOneNumber(arr);
    }
}

// 当方格有数字时，空格样式发生改变
function renderBoard(arr) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var num = arr[i][j];
            if (num != 0) {
                var t = document.getElementById('c_' + i + '_' + j);
                //    console.log(t);
                //    var temp = document.createElement("div");


                //    var tem = document.createElement("div");
                //    var y1=document.getElementById("c_0_0");
                //    console.log(tem);
                //    y1.appendChild(tem);


                //    temp.classList.add("t1");
                //    t.appendChild(temp);
                //    creatediv(num);
                t.innerHTML = num;
                t.classList.add("num_set");
                t.style.background = backgcolor(num);
            }
            else {
                var t = document.getElementById('c_' + i + '_' + j);
                t.innerHTML = " ";
                t.style.background = "#d1cebd";
            }
        }
    }
}

// 判断输赢
function gamewin(arr) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (arr[i][j] == 2048) {
                win();
            }
        }
    }
}

// 赢时显示祝贺页面
function win() {
    document.getElementById("win_over").classList.remove("hide");
    document.getElementById("game_win").classList.remove("hide");
}

// 输时显示遗憾页面
function over() {
    document.getElementById("win_over").classList.remove("hide");
    document.getElementById("game_over").classList.remove("hide");
}

// 判断是否游戏结束
function gameover(arr) {
    if ((nospace(arr) == 1) && (donmove(arr) == 1)) {
        over();
    }
}

// 游戏结束必要条件之一：每个小空格多有大于2的数值
function nospace(arr) {
    var flag1 = 1;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (arr[i][j] == 0) {
                flag1 = 0;
            }
        }
    }
    return flag1;
}

// 游戏结束的必要条件之二：如何两个相邻的数字都不相等
function donmove(arr) {
    var flag = 1;
    // 二维数组中任何两个相邻的数不相等
    for (var i = 0; i < 3; i++) {
        // 判断行中相邻的两数有没有相等的
        for (var j = 0; j < 3; j++) {
            if ((infor[i][j] == arr[i][j + 1]) || infor[i][j] == infor[i + 1][j]) {
                flag = 0;
            }
        }
    }
    return flag;
}
