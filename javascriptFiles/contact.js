window.onload = function() {

    function sendMail() {
        var params = {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            message: document.querySelector("#message").value
        };
        
        const serviceID = "service_lbmvbdd";
        const templateID = "template_hswj025";
        if(name == "" || email =="" || message ==""  ){
            alert("Please fiil out all the entries");
            return;
        }
        
        emailjs.send(serviceID, templateID, params)
            .then(function(response) {
                console.log("Email sent:", response);
                document.querySelector("#name").value = "";
                document.querySelector("#email").value = "";
                document.querySelector("#message").value = "";
                alert("Your message was sent successfully!");
            }, function(error) {
                console.error("Error sending email:", error);
                alert("Oops! Something went wrong. Please try again later.");
            });
    }
    
    document.querySelector('.submitForm').addEventListener('click', function(event) {
        event.preventDefault();
        sendMail();
    });
};
