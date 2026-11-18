
(function () {
    emailjs.init({
        publicKey: "3_K-4cwsh9zeWL6ZV"
    });
})();

const contactForm = document.querySelector(
    ".contact-form form"
);

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = contactForm.querySelector(
        'input[type="text"]'
    ).value.trim();

    const email = contactForm.querySelector(
        'input[type="email"]'
    ).value.trim();

    const title = contactForm.querySelectorAll(
        'input[type="text"]'
    )[1].value.trim();

    const message = contactForm.querySelector(
        "textarea"
    ).value.trim();

    const button = contactForm.querySelector("button");

    button.disabled = true;
    button.textContent = "Sending...";

    emailjs.send(
        "service_jld1wkj",
        "template_2b4u9xq",
        {
            name: name,
            email: email,
            title: title,
            message: message
        }
    ).then(function() {

        alert("Thank you! Your message was sent successfully.");

        contactForm.reset();

    }).catch(function(error) {

        console.error("Email error:", error);

        alert("Message could not be sent. Please try again.");

    }).finally(function() {

        button.disabled = false;
        button.textContent = "Send Message";

    });
});
