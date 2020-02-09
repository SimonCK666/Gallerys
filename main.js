// var deg = 360 / 图片个数;
var oImg = document.getElementsByTagName("img");

var length = oImg.length;

var deg = 360 /  length;

//当页面全部加载完成后再执行JS代码

window.onload = function() {
    //遍历所有图片
    Array.prototype.forEach.call(oImg,function(ele,index,self){
        ele.style.transform = "rotateY("+deg*index+"deg) translateZ(350px)";
        ele.style.transition = "1s";   //第一个属性值为执行时间，第二个为延迟时间
        ele.style.transitionDelay = (length - index) + "10ms";
    });
}

