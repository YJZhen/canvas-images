window.onload=function(){
    var canvas=document.getElementById('canvas-1');
    var canvasCtx=canvas.getContext('2d');
    var scrOpe=document.getElementById('scr-ope');
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
    bindEvent(scrOpe,'click',function(){
        
    });
}







