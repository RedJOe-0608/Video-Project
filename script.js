const btn = document.querySelector('.btn');
const video = document.querySelector('video');
const toggle = document.querySelector('.toggle');
btn.addEventListener('click', () =>{
    // console.log("clicked");
     if(!toggle.classList.contains('shift')){
        toggle.classList.add('shift');
        video.pause();
    }
    else{
        toggle.classList.remove('shift');
        video.play();
    }
})