$(document).ready(function () {

    $('.first').click(function () {

        $('.ul1').show();
        $('.ul2').hide();
        $('.ul3').hide();
    });

    $('.second').click(function () {

        $('.ul1').hide();
        $('.ul2').show();
        $('.ul3').hide();
    })

    $('.third').click(function () {

        $('.ul1').hide();
        $('.ul2').hide();
        $('.ul3').show();
    })
})
