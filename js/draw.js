define(['base','control-panel'],function(Base,controlPanel) {
    var canvas=Base.$('#canvas-1');
    var canvasCtx=canvas.getContext('2d');
    var scrOpe=Base.$('#scr-ope');
    var screenImg=Base.$('#screen-img');
    var canvasW=canvas.offsetWidth;
    var canvasH=canvas.offsetHeight;

    /**
     * 给元素绑定事件
     * @param  {DOM Objct} _element 元素句柄
     * @param  {String} _event   事件类型
     * @param  {function} _fun     事件的回调函数
     * @return 
     */
    function bindEvent(_element,_event,_fun){
        if(window.attachEvent){
            _element.attachEvent('on'+_event,_fun);
        }
        else{
            _element.addEventListener(_event,_fun);
        }
    }

    function getScreenImage(_can){
        if(_can){
            //canvas.toDataURL('image/png');
            screenImg.src=canvas.toDataURL('image/png');
            //screenImg.src=canvas.getImageData();
        }
    }
    (function(){
        var y=0;
        var x=0;
        var _drawStatus=false;
        
        bindEvent(canvas,'mousedown',function(_event){
            _drawStatus=true;
            canvasCtx.lineWidth=controlPanel.getPanSize();
            canvasCtx.strokeStyle=controlPanel.color();
            canvasCtx.beginPath();
            canvasCtx.moveTo(_event.offsetX,_event.offsetY);
        });
        bindEvent(canvas,'mousemove',function(_event){
            if(!_drawStatus)return;
            var _x=_event.screenX;
            var _y=_event.screenY;
            canvasCtx.lineTo(_event.offsetX,_event.offsetY);
            canvasCtx.stroke();
            getScreenImage(controlPanel.syncToImg());
        });
        bindEvent(canvas,'mouseup',function(){
            _drawStatus=false;
            canvasCtx.closePath();
        });
    })();

    bindEvent(Base.$('#load-img'),'click',function(){
        var _img=new Image();
        _img.src="style/123.jpg";
        _img.onload=function(){
            canvasCtx.drawImage(_img,0,0);;
        }
    });
    bindEvent(scrOpe,'click',function(){
        getScreenImage(true);
    });
    return null;    
});







