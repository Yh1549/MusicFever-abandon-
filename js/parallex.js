         function con(){
            let layers = document.getElementsByClassName('all');          
            for(i=0;i<layers.length;i++){
            let layer = layers[i]
            let y = window.scrollY;
            let data = layers[i].getAttribute('data-speed');
            let ypos = (y * data / 100);   
            layer.style.transform= 'translate3d(0px,'+ ypos +'px ,0px)';
            // console.log(data);
            // console.log(ypos);
            // console.log(y);
            
            }  
            let x = new Date();  
            // console.log(x.getTime());   
        }
        function fade(){
            let y = window.scrollY;
            
            
        }    
        
    window.addEventListener('scroll', con, false);
    window.addEventListener('scroll', fade, false);
  