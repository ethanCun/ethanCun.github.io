/**
 * Created by macofethan on 17/10/31.
 */


$(document).ready(function () {

    var top = 4;

    setInterval(function () {

        top+=1;

        if (top == 25){top = 4}

        $('.wheel').css('top', top)

    }, 50)

})

