// EmailJS init
(function(){
   emailjs.init("Kw9rNFgZ0913SuCne");
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_website",     // Service ID
        "template_y4lq4z7",     // Template ID
        this
    ).then(function() {
        alert("Message sent successfully! ✅");
    }, function(error) {
        alert("Failed... ❌ " + error.text);
    });
});
  