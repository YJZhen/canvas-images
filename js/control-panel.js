define(['base'],function(Base) {
    var controlVal={
        color:function () {
            return Base.$('#color').value;
        },
        syncToImg:function(){
            var _sync=Base.$('#sync-img');
            return _sync.checked;
        },
        getPanSize:function(){
            var _size =Base.$('#pan-size').value;
            Base.$('#pan-size-txt').innerText=' '+_size;
            return _size;
        }
    };
    
    return controlVal;
});