window.addEventListener('mousemove', (e) =>{
    const mouse =document.querySelector('.mouse');
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
    if(e.pageX ===0){
        mouse.style.display ='none';
    }

    else if(e.pageX >=1000){
        mouse.style.display ='none';
    }

    else if(e.pageY >=580){
        mouse.style.display ='none';
    }

    


    

    else{
        mouse.style.display ='block'
    }

    console.log('pagey =', e.pageY)

    

    
});