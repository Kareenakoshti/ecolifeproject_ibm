function showForm(form) {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");

  if (form === "login") {
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
  } else {
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
  }
}
