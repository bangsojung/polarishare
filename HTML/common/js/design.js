/*------------------------------------------------------
    모달 공통
------------------------------------------------------*/
$('.l__modal').css("display","block");
$(document).ready(function(){ 
    $(".l__modal").show();
});
function modalShowPop(modalName){
    var $layer = $("#"+ modalName);
    $("#"+ modalName).removeClass("modal--active");
    $('.l__modal').removeClass("modal--active");
    $layer.addClass("modal--active");
}
function modalHidePop(modalName){
    $("#"+ modalName).removeClass("modal--active");
}
// 외부영역 클릭 시 팝업 닫기
$(document).mouseup(function (e){
    var LayerPopup = $(".modal_wrap");
    if(LayerPopup.has(e.target).length === 0){
        LayerPopup.parent().removeClass("modal--active");
    }
});



/*------------------------------------------------------
    푸터
------------------------------------------------------*/
$(function () {
    $('#top_btn').on('click', function(){
        var Dnum = $(this).index();
        var Dheight = $('html,body').eq(Dnum).offset();
        $('html,body').animate({scrollTop : Dheight.top},500);
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > 500) {
            $('#top_btn').css('opacity','1');
        } else {
            $('#top_btn').css('opacity','0');
        }
    });

});
