function toggleTheme() {
  const isDark = document.body.dataset.theme === "dark";
  const newTheme = isDark ? "light" : "dark";
  document.body.dataset.theme = newTheme;
  document.getElementById("theme-label").textContent =
    newTheme === "dark" ? "🌙 Dark" : "🌞 Light";
}
window.toggleTheme = toggleTheme;

function handleSubmit() {
  const form = document.getElementById("account-form");

  const inputs = form.querySelectorAll("rabo-input");
  const checkbox = form.querySelector("rabo-checkbox");

  let valid = true;

  inputs.forEach((i) => {
    if (!i.validate()) valid = false;
  });

  if (!checkbox.validate()) valid = false;

  if (!valid) {
    console.log("Form invalid ❌");
    return;
  }

  console.log("Form submitted successfully ✅");
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("submitBtn")
    .addEventListener("rabo-click", handleSubmit);
});
