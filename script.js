// Init EmailJS
(function () {
  emailjs.init("Kw9rNFgZ0913SuCne"); // Public Key
})();

// Form Submit
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_website", // Service ID
    "y4lq4z7",         // ✅ Template ID (ONLY THIS)
    this
  ).then(
    function () {
      alert("Message Sent Successfully ✅");
      document.getElementById("contact-form").reset();
    },
    function (error) {
      alert("Failed ❌ " + error.text);
    }
  );
});
