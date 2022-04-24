// =============================================================
// 歌名歌手轉換
// =============================================================
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
// ================================================================
// 鼠標箭頭
// ================================================================
function cursorup(){
    let cursor = document.querySelector('.cursor');
    let mouseover = document.getElementsByClassName('mouseover');
    let hovertop = document.getElementsByClassName('hovertop');
    let hoverbottom =document.getElementsByClassName('hoverbottom');

    for(let i =0; i<hovertop.length; i++){ //向上箭頭
        hovertop[i].addEventListener("mouseover", function(){
            cursor.classList.add("pointUp");         
        });
        hovertop[i].addEventListener("mousemove", function(e){   
            cursor.setAttribute("style","top: "+(e.pageY-50)+"px; left: "+(e.pageX-50)+"px; display:inline-block;");
        }, false);
        hovertop[i].addEventListener("mouseout", function(){
            cursor.classList.remove("pointUp");         
        });
        hovertop[i].addEventListener("click", function(){
            cursor.classList.add("clickani"); 
            setTimeout(function(){
                cursor.classList.remove("clickani");
            }, 500)
        });
    };

    for(let i =0; i<hoverbottom.length; i++){  //向下箭頭
        hoverbottom[i].addEventListener("mousemove", function(e){   
            cursor.setAttribute("style","top: "+(e.pageY-50)+"px; left: "+(e.pageX-50)+"px; display:inline-block;");
        }, false);
        
        hoverbottom[i].addEventListener("mouseover", function(){
            cursor.classList.add("pointDown");         
        });
        hoverbottom[i].addEventListener("mouseout", function(){
            cursor.classList.remove("pointDown");         
        });

          hoverbottom[i].addEventListener("click", function(){
            cursor.classList.add("clickani"); 
            setTimeout(function(){
                cursor.classList.remove("clickani");
            }, 500)
        });
    };
    // console.log(cursor);
}
// ===========================================================
// ===========================================================
function init(){
    let cursor = document.querySelector('.cursor');
    let mouseover = document.getElementsByClassName('mouseover');
    for(let i =0; i<mouseover.length; i++){
    mouseover[i].addEventListener("mouseover", cursorup,false);
    mouseover[i].addEventListener("mouseout",function(){
        cursor.setAttribute("style","display:none"); 
    })};//上下箭頭開關
    
    document.getElementById("hovertop_2").addEventListener("click",hoverup,false);
    document.getElementById("hoverbottom_2").addEventListener("click",hoverdown,false);
    document.getElementById("hovertop_1").addEventListener("click",topHover_1,false);
    document.getElementById("hoverbottom_1").addEventListener("click",bottomHover_1,false);
// console.log(mouseover);

};

window.addEventListener('load', init, false);
