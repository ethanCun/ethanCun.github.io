/**
 * Created by macofethan on 17/10/31.
 */


$(document).ready(function () {

    //鼠标滚动动画
    var top = 4;
    
    setInterval(function () {

        top+=1;

        if (top == 25){top = 4}

        $('.wheel').css('top', top)

    }, 50);

    //导航栏渐变
    $(document).ready(function () {


        $(window).scroll(function () {

            if($(this).scrollTop()>100) {
                $('.banner').css('backgroundColor', '#4ecdc4')
            }else {
                $('.banner').css('backgroundColor', 'transparent')
            }
        })
    })
    

})

