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

    }, 50)

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
    
    
//    购物车动画
    $(window).scroll(function () {

        console.log('位置:'+$(this).scrollTop());

        if($(this).scrollTop()>250){

            $('.shoppingCar_a').show(500);
        }else {

            $('.shoppingCar_a').hide(500);
        }

        if($(this).scrollTop()>900){

            $('.ReactNativeConfigContentAero_a').show(500);
        }else {

            $('.ReactNativeConfigContentAero_a').hide(500);
        }
    })

})

