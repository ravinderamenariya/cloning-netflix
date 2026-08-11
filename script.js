document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.querySelector("#signupForm");
  const email = document.querySelector("#email");
  const formMessage = document.querySelector("#formMessage");
  const signInBtn = document.querySelector("#signInBtn");
  const languageBtn = document.querySelector("#languageBtn");

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = email.value.trim();

    if (!value || !email.checkValidity()) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.style.color = "#ffb3b3";
      email.focus();
      return;
    }

    formMessage.textContent = `Thanks! ${value} is ready for the demo signup.`;
    formMessage.style.color = "#9effa5";
    signupForm.reset();
  });

  signInBtn.addEventListener("click", () => {
    alert("Sign In is a demo button. Connect your authentication flow here.");
  });

  languageBtn.addEventListener("click", () => {
    alert("Language selector is a demo control.");
  });

  document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("click", () => {
      const answer = item.nextElementSibling;
      const expanded = item.getAttribute("aria-expanded") === "true";

      document.querySelectorAll(".faq-item").forEach((otherItem) => {
        otherItem.setAttribute("aria-expanded", "false");
        otherItem.querySelector(".faq-icon").textContent = "+";
        otherItem.nextElementSibling.classList.remove("open");
      });

      if (!expanded) {
        item.setAttribute("aria-expanded", "true");
        item.querySelector(".faq-icon").textContent = "−";
        answer.classList.add("open");
      }
    });
  });
});
