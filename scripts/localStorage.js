const nameLS = document.getElementById("name");
const emailLS = document.getElementById("email");
const msgLS = document.getElementById("msg");
const inputs = Array.from(document.getElementsByClassName("formInput"));

inputs.forEach((input) =>
  input.addEventListener("input", () => {
    localStorage.setItem(
      "formData",
      JSON.stringify({
        name: nameLS.value,
        email: emailLS.value,
        message: msgLS.value,
      })
    );
  })
);
