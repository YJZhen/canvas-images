define(function(){
    var eventManager={
        bind:function(ele,eve,fun){
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