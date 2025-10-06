document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio JS loaded");
  emailjs.init("kVTqpWFYpyiqPEl9o");
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
    emailjs.send("service_tti56gl", "template_ajrjopc", formData)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("✅ Message sent successfully!");
        contactForm.reset();
      }, function (error) {
        console.error("❌ Failed to send message:", error);
        alert("Oops! Something went wrong. Please try again later.");
      });
  });
});
