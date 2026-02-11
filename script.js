(function(){
  emailjs.init("Kw9rNFgZ0913SuCne"); // Public key
})();

document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault(); // Page reload stop

  emailjs.sendForm(
    "service_website",
    "template_y4lq4z7",
    this
  ).then(
    function(){
      alert("Message sent successfully ✅");
    },
    function(error){
      alert("Failed ❌ " + error.text);
    }
  );
});
emailjs.sendForm(
  "service_website",
  "y4lq4z7",   // ✅ sirf ID
  this
)
