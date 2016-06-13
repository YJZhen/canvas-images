define(function(){
    var eventManager={
        $:function(select,parent){
            parent=parent||document;
            if(/^#\w+/.test(select)){
                return document.getElementById(select.substring(1));
            }
        },
        /**
         * 给元素绑定事件
         * @param  {DOM Objct} _element 元素句柄
         * @param  {String} _event   事件类型
         * @param  {function} _fun     事件的回调函数
         * @return 
         */
        bindEvent:function(ele,eve,fun){
            if(window.attachEvent){
                ele.attachEvent('on'+eve,function(_eve){
                    fun(ele,_eve);
                });
            }
            else{
                ele.addEventListener(eve,function(_eve){
                    fun(ele,_eve);
                });
            }
        }
    };
    return eventManager;
});