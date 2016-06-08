define('control-panel',function(controlPanel) {
    var canvas=document.getElementById('canvas-1');
    var canvasCtx=canvas.getContext('2d');
    var scrOpe=document.getElementById('scr-ope');
    var screenImg=document.getElementById('screen-img');
    var canvasW=canvas.offsetWidth;
    var canvasH=canvas.offsetHeight;
    /*
     * 给元素绑定事件
     * _element {MOD Object} 元素句柄
     * _event {String} 事件类型
     * _fun {function} 事件回调函数
     */
    function bindEvent(_element,_event,_fun){
        if(window.attachEvent){
            _element.attachEvent('on'+_event,_fun);
        }
        else{
            _element.addEventListener(_event,_fun);
        }
    }
    function getScreenImage(){
        screenImg.src=canvas.toDataURL('png');
    }
    function mouseDrawLine(){
        var y=0;
        var x=0;
        var _drawStatus=false;
        canvasCtx.strokeStyle='#ff0000';
        canvasCtx.lineWidth=2;
        bindEvent(canvas,'mousedown',function(_event){
            _drawStatus=true;
            canvasCtx.beginPath();
            canvasCtx.moveTo(_event.offsetX,_event.offsetY);
        });
        bindEvent(canvas,'mousemove',function(_event){
            if(!_drawStatus)return;
            var _x=_event.screenX;
            var _y=_event.screenY;
            canvasCtx.lineTo(_event.offsetX,_event.offsetY);
            canvasCtx.stroke();
            getScreenImage();
        });
        bindEvent(canvas,'mouseup',function(){
            _drawStatus=false;
            canvasCtx.closePath();
        });
    }
    mouseDrawLine();
    bindEvent(scrOpe,'click',function(){
        getScreenImage();
    });
    return null;    
});







