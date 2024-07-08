window.onload = function() {

    (function(){
        emailjs.init("pN_oj826VRLkiPss"); // Replace with your EmailJS public key
    })();
    
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        emailjs.sendForm('service_lbmvbdd', 'template_hswj025', this)
            .then(function(response) {
                alert('Email sent successfully!');
            }, function(error) {
                alert('Failed to send email.');
                console.log('Failed to send email', error);
            });
    });
    
}
