$('.buttonNav').on('click', function () {
    $(this).toggleClass('open');
    $('.Nav').toggleClass('open');
});
$('.Header-menu').on('click', function () {
    $('.Header-menu span').toggleClass('rotate');
    $('.Header-contentNav').toggleClass('show');
    $('.Nav').toggleClass('open');
});
$(document).ready(function () {
    $('.lang-en a span').html('EN').css('color', 'white');
    $('.lang-es a span').html('ES').css('color','white');
})
if(!(window.ActiveXObject) && "ActiveXObject" in window){


}