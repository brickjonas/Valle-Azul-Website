window.onload = function(){
    //has photo fade in as page laods
    var image = document.querySelector('.mainBackground img');
    image.style.transition = 'opacity 2.75s ease-in-out';
    image.style.opacity = 1;
    
    //has images rotate throughout page
    var imageNum = 1;
    var totalImages = 5; // change if more images are added
    var preloadImages = []; 

    //preload images
    for (var i = 1; i <= totalImages; i++) {
        var img = new Image();
        img.src = `images/mainPage/${i}.PNG`;
        preloadImages.push(img);
    }

    function changeImage() {
        image.style.opacity = 0; //fade out current image

        setTimeout(function() {
            imageNum = (imageNum % totalImages) + 1; //mve to the next image, loop back to start
            image.src = preloadImages[imageNum - 1].src;
            image.style.opacity = 1; 
        }, 2500); //adjust this time as needed for smooth transition
    }


    image.src = preloadImages[0].src;
    setInterval(changeImage, 6000); //change image every 6 seconds
};
