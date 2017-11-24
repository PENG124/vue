$(function () {
    var parent=$(".parent>li")
    for(var i=0;i<parent.length;i++){
        var flag=true;
        parent.eq(i).click(function () {
            if(flag=true){
                $(this).next(".child").css("display","none");
                flag=false;
            }else{
                $(this).next(".child").css("display","block");
                flag=true;
            }

        })
    }
})