// $(function(){
//     console.log('#hb');
//     $('#hb').click(function(){
//         if($('.navlist').val() == "close"){
//             $('.navlist').css('display','flex');
//             $('.navlist').val('open');
//         }else{
//             $('.navlist').css('display','none');
//             $('.navlist').val('close');
//         }
//     });
//     $(window).resize(function(){
//         let windowWidth = window.innerWidth;
//     if(windowWidth>996){
//         $('.navlist').css('display','flex'); 
//     }
//     else{
//         $('.navlist').css('display','none');
//     }
//     });
// });


$(function(){
    $('#hb').click(function(){
            $('.navlist').slideToggle(800) 
    });
});