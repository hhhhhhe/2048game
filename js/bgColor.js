// 改变方格的背景颜色
function backgcolor (num){
    switch (num){
        case 2 :
            return "#e8d4b4";
        case 4 :
            return "#d2d0fe";
        case 8 :
            return "#f67280";
        case 16 :
            return "#eb4d55";
        case 32 :
            return "#e688a1";
        case 64 :
            return "#b5525c";
        case 128 :
            return "#ad62aa";
        case 256 :
            return "#eab9c9";
        case 512 :
            return "#eca0b6";
        case 1024 :
            return "#fc9d9d";
        case 2048 :
            return "#ea728c";
        default:
            return "#ee8972"
    }
}
