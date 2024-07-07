window.onload = function(){
    //Has photo fade in as page laods
    var image = document.querySelector('.mainBackground img');
    image.style.transition = 'opacity 2.5s ease-in-out';
    image.style.opacity = 1;
    
    //Has images rotate throughout page
    var imageNum = 1;
    var totalImages = 5; // Change if more images are added

    function changeImage() {
        image.style.opacity = 0; // Has images fade out
        setTimeout(function() {
            imageNum = (imageNum % totalImages) + 1; // Move to the next image, loop back to start
            image.src = `images/mainPage/${imageNum}.PNG`; // Change the image source
            image.style.opacity = 1; // Fade in the new image
        }, 2500); 
    }
    setInterval(changeImage, 6000);
};

