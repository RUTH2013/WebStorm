/**
 * Created by Administrator on 2016/5/4.
 */
function $(v){
    if (typeof v === 'function'){
        window.onload = v;
    }else if(typeof v ==='string'){
        return document.getElementById(v);
    }else if(typeof v ==='object'){
        return v;
    }
}

function getStyle(obj,attr){
    /*if(obj.currentStyle){//处理兼容性问题
     return obj.currentStyle[attr];
     }else {
     return getComputedStyle(obj)[attr];
     }*/
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}