define(['base','control-panel'],function(Base,controlPanel) {
    var canvas=Base.$('#canvas-1');
    var canvasCtx=canvas.getContext('2d');
    var scrOpe=Base.$('#scr-ope');
    var downImg=Base.$('#download-img');
    var screenImg=Base.$('#screen-img');
    var canvasW=canvas.offsetWidth;
    var canvasH=canvas.offsetHeight;

    function getScreenImage(_can){
        if(_can){
            screenImg.src=canvas.toDataURL('image/png');
        }
    }
    (function(){
        var y=0;
        var x=0;
        var _drawStatus=false;//记录画笔是否可以绘画
        //监听鼠标在canvas标签按下事件
        Base.bindEvent(canvas,'mousedown',function(ele,_event){
            _drawStatus=true;//当鼠标按下时，设未可以绘画
            console.log(_event.offsetX);
            canvasCtx.lineWidth=controlPanel.getPanSize();//设置画笔的Size
            canvasCtx.strokeStyle=controlPanel.color();//设置画笔的颜色
            canvasCtx.beginPath();//开启一条新的路径
            canvasCtx.moveTo(_event.offsetX,_event.offsetY);
        });
        //监听鼠标在canvas标签的移动事件
        Base.bindEvent(canvas,'mousemove',function(ele,_event){
            if(!_drawStatus)return;//如果不可绘画，则返回
            var _x=_event.screenX;
            var _y=_event.screenY;
            canvasCtx.lineTo(_event.offsetX,_event.offsetY);
            canvasCtx.stroke();//画线
            getScreenImage(controlPanel.syncToImg());
        });
        //监听鼠标在canvas标签的松开事件
        Base.bindEvent(canvas,'mouseup',function(){
            _drawStatus=false;
            canvasCtx.closePath();
        });
    })();
    //监听“加载图片”按钮的点击事件
    Base.bindEvent(Base.$('#load-img'),'click',function(){
        var _img=new Image();
        _img.src="style/123.jpg";
        _img.onload=function(){
            canvasCtx.drawImage(_img,0,0);;
        }
    });
    //监听“生成图片”按钮的点击事件
    Base.bindEvent(scrOpe,'click',function(){
        getScreenImage(true);
    });
    //监听“生成图片”按钮的点击事件
    Base.bindEvent(downImg,'click',function(ele,eve){
        ele.href = canvas.toDataURL();
        ele.target = "_blank";
        ele.download ="canvas-img.png";
    });
    return null;    
});







