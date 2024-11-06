
function startAnimation() {
    
    const whiteLight = document.getElementById('white-light');
    whiteLight.classList.remove('hidden');
    whiteLight.style.transform = 'rotate(-10deg) scaleX(1)';

    
    setTimeout(() => {
        const rainbow = document.getElementById('rainbow');
        rainbow.classList.remove('hidden');

       
        const rays = document.querySelectorAll('#rainbow .ray');
        rays.forEach((ray, index) => {
            setTimeout(() => {
                ray.style.opacity = 1;
            }, index * 300); 
        });
    }, 2000); 
    var element = document.getElementById("press-enter-message");
  element.classList.add("mystyle");
}

document.addEventListener('click', startAnimation);


