let artistcycle = new Array("pic/singer7.jpg","pic/singer9.jpg");
console.log(document.getElementsByClassName("artist-word"));

function next(){
    let polypic=document.getElementById("polypic");
    let polypic2=document.getElementById("polypic-2");
    let curartist=document.getElementById("curartist");
    polypic.style.transform='translate3d(149px,0px ,0px)';
    polypic2.style.transform='translate3d(-149px,0px ,0px)';
    setTimeout(function(){
          polypic.style.transform='translate3d(0px,0px ,0px)';
    polypic2.style.transform='translate3d(0px,0px ,0px)';
    },1500);
    let data = curartist.getAttribute("data-img");
    // if(artistWord[i].style.display="none")
    setTimeout(function(){
        if(data == "1"){
            curartist.setAttribute("data-img","2");
            curartist.setAttribute("src",artistcycle[1]);
        }else if(data == "2"){
            curartist.setAttribute("data-img","1");
            curartist.setAttribute("src",artistcycle[0]);
        }
        },1000);
};
function nextword(){
    let artistWord = document.getElementsByClassName("artist-word");
    console.log(artistWord[1]);
    console.log(artistWord[0]);
    for(i=0;i<artistWord.length;i++){
        if(artistWord[i].getAttribute("style")=="display:inline-block"){
            artistWord[i].removeAttribute("style")
            artistWord[i].setAttribute("style","display:none")
        } else if(artistWord[i].getAttribute("style")=="display:none") {
            artistWord[i].setAttribute("style","display:inline-block");
        }
    }
    console.log(artistWord[1]);
    console.log(artistWord[0]);
};
function init(){
    document.getElementById("next").addEventListener("click",next,false);
    document.getElementById("next").addEventListener("click",nextword,false);
};
window.addEventListener("load",init,false);
