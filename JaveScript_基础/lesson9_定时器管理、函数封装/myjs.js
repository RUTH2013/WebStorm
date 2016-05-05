/**
 * Created by Administrator on 2016/5/4.
 */
function doMove(obj,attr,dir,target,endFn){  // 上下左右移动
    dir = parseInt(getStyle(obj,attr))<target?dir:-dir;//判断dir正负，方向
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var speed = parseInt(getStyle(obj,attr)) +dir;
        if(speed>target && dir>0 || speed<target && dir<0){
            speed=target;
        }
        obj.style[attr]= speed+'px';
        if(speed===target){
            clearInterval(obj.timer);
            /*if(endFn){
             endFn();
             }*/
            endFn&&endFn();//回调函数（等同于上面的if语句）
        }
    },30);
}

function getStyle(obj,attr){  //获取元素当前位置、样式
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}

function shake(obj,attr,endFn){  //抖动
    var pos = parseInt(getStyle(obj,attr));//获取img的位置
    var num = 0;
    obj.shake=null;

    var arr = [];  //20,-20,18,-18.....
    for(var i = 20 ; i>0; i-=2){
        arr.push(i,-i);
    }

    clearInterval(obj.shake);
    obj.shake = setInterval(function(){
        obj.style[attr]= pos + arr[num] + 'px';
        num++;
        if(num===arr.length){
            clearInterval(obj.shake);
            endFn&&endFn();
        }
    },20);
}