$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300 && $(this).scrollTop() < 1000) {
            $('.page2, .page3, page4').removeClass('active')
            $('.page1').addClass('active')
        }else if($(this).scrollTop() > 1000 && $(this).scrollTop() < 1800) {
            $('.page1, .page3, page4').removeClass('active')
            $('.page2').addClass('active')
        }
        else if($(this).scrollTop() > 1800 && $(this).scrollTop() < 2590) {
            $('page1, .page2, .page4').removeClass('active')
            $('.page3').addClass('active')
        }
        else if($(this).scrollTop() >2590) {
            $('.page1, .page2, .page3').removeClass('active')
            $('.page4').addClass('active')
        }else {
            $('.page1, .page2, .page3, .page4').removeClass('active')
        }
    })
})