define(function(){
    var eventManager={
        $:function(select,parent){
            parent=parent||document;
            if(/^#\w+/.test(select)){
                return document.getElementById(select.substring(1));
            }
        },
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