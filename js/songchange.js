function hoverup(){ //歌名上部div
    let song1 = document.getElementById('song1');
    let song2 = document.getElementById('song2');
    let song3 = document.getElementById('song3');
    let song4 = document.getElementById('song4');
    song2.firstElementChild.style.transform='translate3d(0px,-200px,0px)';
    song3.firstElementChild.style.transform='translate3d(0px,-200px,0px)';//第二第三元素向上位移

    setTimeout(function(){//位移後做element置換        
        song3.appendChild(song4.firstElementChild);
        song2.appendChild(song3.firstElementChild);
        song1.appendChild(song2.firstElementChild);
        song4.appendChild(song1.firstElementChild);
    },400)

    setTimeout(function(){//位移後重設位置
        song2.firstElementChild.style.transform='translate3d(0px,0px,0px)';
        song3.firstElementChild.style.transform='translate3d(0px,0px,0px)';
    },400)
   
    // console.log(song1.firstElementChild);
    // console.log(document.getElementById('song'));
};
function hoverdown(){//歌名向下
    let song1 = document.getElementById('song1');
    let song2 = document.getElementById('song2');
    let song3 = document.getElementById('song3');
    let song4 = document.getElementById('song4');
    song1.firstElementChild.style.transform='translate3d(0px,200px,0px)';
    song2.firstElementChild.style.transform='translate3d(0px,200px,0px)';

    setTimeout(function(){
        song2.appendChild(song1.firstElementChild);
        song1.appendChild(song4.firstElementChild);
        song3.appendChild(song2.firstElementChild);
        song4.appendChild(song3.firstElementChild);  
    },400)

    setTimeout(function(){
        song1.firstElementChild.style.transform='translate3d(0px,0px,0px)';
        song2.firstElementChild.style.transform='translate3d(0px,0px,0px)';
    },400)
    
    // console.log(song1.firstElementChild);
    // console.log(document.getElementById('song'));
};
//------------------------------------------
function topHover_1(){
    let singer1 = document.getElementById('singer1');
    let singer2 = document.getElementById('singer2');
    let singer3 = document.getElementById('singer3');
    let singer4 = document.getElementById('singer4');
    singer2.firstElementChild.style.transform='translate3d(0px,-200px,0px)';
    singer3.firstElementChild.style.transform='translate3d(0px,-200px,0px)';

    setTimeout(function(){
       singer3.appendChild(singer4.firstElementChild);
       singer2.appendChild(singer3.firstElementChild);
       singer1.appendChild(singer2.firstElementChild);
       singer4.appendChild(singer1.firstElementChild);
    },400)

    setTimeout(function(){
        singer2.firstElementChild.style.transform='translate3d(0px,0px,0px)';
        singer3.firstElementChild.style.transform='translate3d(0px,0px,0px)';
    },400)

    // console.log(singer1.firstElementChild);
    // console.log(document.getElementById('singer'));
};
function bottomHover_1(){
    let singer1 = document.getElementById('singer1');
    let singer2 = document.getElementById('singer2');
    let singer3 = document.getElementById('singer3');
    let singer4 = document.getElementById('singer4');
    singer1.firstElementChild.style.transform='translate3d(0px,200px,0px)';
    singer2.firstElementChild.style.transform='translate3d(0px,200px,0px)';

    setTimeout(function(){
       singer2.appendChild(singer1.firstElementChild);
       singer1.appendChild(singer4.firstElementChild);
       singer3.appendChild(singer2.firstElementChild);
       singer4.appendChild(singer3.firstElementChild);
    },400)

    setTimeout(function(){
        singer1.firstElementChild.style.transform='translate3d(0px,0px,0px)';
        singer2.firstElementChild.style.transform='translate3d(0px,0px,0px)';
    },400)

    // console.log(singer1.firstElementChild);
    // console.log(document.getElementById('singer'));
};
function init(){
   
    document.getElementById("hovertop_2").addEventListener("click",hoverup,false);
    document.getElementById("hoverbottom_2").addEventListener("click",hoverdown,false);
    document.getElementById("hovertop_1").addEventListener("click",topHover_1,false);
    document.getElementById("hoverbottom_1").addEventListener("click",bottomHover_1,false);
}
window.addEventListener("load",init,false);