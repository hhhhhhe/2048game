// 向左合并的计算逻辑
function toleft(arr){
    var x=arr.length;
    var y=arr[0].length;
    var tag=0;
    // 预处理，将数组集中到数组的左侧，即去除数组中的0
    for(var i = 0 ; i < x ; i++){
        for (var j = 0; j < y ; j++){
            if(arr[i][tag] == 0){
                arr[i].splice(tag, 1);
                arr[i].push(0);
            }
            else{
                tag++;
                // document.getElementById()
                continue;
            }   
        }
        tag=0;
        for(var j=1;j<y;j++){
            if((arr[i][j-1]==arr[i][j])&&(arr[i][j]!=0)){
                arr[i][j]=arr[i][j-1]*2;

                 // 更新游戏分数，合并一次+2分
                sroce=sroce+2;
                arr[i].splice(j-1,1);
                arr[i].push(0);
            }
        }
    }
    // console.log(arr);
}

// 向右合并计算逻辑
function torigth(arr){
    var x=arr.length;
    var y=arr[0].length;
    var tag=y-1;
    // 预处理，将数组集中到数组的左侧，即去除数组中的0
    for(var i = 0 ; i < x ; i++){
        // var temp = infor[i];
        for (var j = y; j > 0  ; j--){
            // alert(j);
            if(arr[i][tag] == 0){
                arr[i].splice(tag, 1);
                arr[i].unshift(0);
            }
            else{
                tag--;
                continue;
            } 
        }
       tag=y-1;
        for(var j=y-1 ;j>=0; j--){
            // alert(j);
            if((arr[i][j]==arr[i][j-1])&&(arr[i][j]!=0)){
                arr[i][j]=arr[i][j-1]*2;
                // 更新游戏分数，合并一次+2分
                sroce=sroce+2;
                arr[i].splice(j-1,1);
                arr[i].unshift(0);
            }
        }
    }
}

// 转置函数（向上与向下合并使用转置函数）
var newArray = [];
function transposition(item){
 newArray = item[0].map(function(col, i) {
    return item.map(function(row) {
        return row[i];
    });
});
}

//向上合并计算逻辑
function toup(arr){
    transposition(arr);//将函数装置后得到新函数
    arr = newArray;
    toleft(arr);
    transposition(arr);//计算后将结果转至回去
    arr = newArray;
}

//向下合并 计算逻辑
 function todown(arr){
    transposition(arr);
    arr = newArray;
    torigth(arr);
    transposition(arr);
    arr = newArray;
 }




