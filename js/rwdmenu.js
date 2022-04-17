// $(document).ready(function(){
//     document.getElementById("hb").addEventListener("click", navshow, false) ;
//     window.addEventListener("resize", navdisplayreset, false);
//     });
// function navshow(){
//    if(document.getElementById("navlist").value == "close"){
//     document.getElementById("navlist").style.display= "flex";
//     document.getElementById("navlist").value="open";
//     }else{
//         document.getElementById("navlist").style.display= "none";
//         document.getElementById("navlist").value="close";
//     }
//   }          
// function navdisplayreset(){
//     let windowWidth = window.innerWidth;
//     if(windowWidth>996){
//         document.getElementById("navlist").style.display= "flex"; 
//     }
//     else{
//         document.getElementById("navlist").style.display= "none";
//     }
// }
// ----------------------------------------------------------
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