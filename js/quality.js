function test(){
    let sticky = document.getElementById("sticky");
    let pic1 = document.getElementById("pic1");
    let pic2 = document.getElementById("pic2");
    let pic3 = document.getElementById("pic3");
    let qualityone = document.getElementById("quality-item-1");
    let qualitytwo = document.getElementById("quality-item-2");
    let qualitythree = document.getElementById("quality-item-3");
    console.log(sticky.offsetTop);
    console.log(qualitythree.offsetTop);
    if(sticky.offsetTop > qualitytwo.offsetTop && sticky.offsetTop < qualitythree.offsetTop){
        pic1.style.display="none";
        pic2.style.display="flex";
        pic3.style.display="none";
    }else if(sticky.offsetTop > qualitythree.offsetTop){
        pic1.style.display="none";
        pic2.style.display="none";
        pic3.style.display="flex";
    }
    else{
        pic1.style.display="flex";
        pic2.style.display="none";
        pic3.style.display="none";
    }
};

function init(){
    // let sticky = document.getElementById("sticky");
   window.addEventListener("scroll", test, false)
   
};

window.addEventListener("load", init, false);