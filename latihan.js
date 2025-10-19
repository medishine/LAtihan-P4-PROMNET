const form = document.getElementById("itemForm");
const input = document.getElementById("itemInput");
const errorMessage = document.getElementById("errorMessage");
const list = document.getElementById("daftar");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const value = input.value.trim();

  if (value === "") {
    errorMessage.textContent = "Field tidak boleh kosong";
    input.classList.add("invalid");
    input.classList.remove("valid");
    return;
  }

  errorMessage.textContent = "";
  input.classList.remove("invalid");
  input.classList.add("valid");

  const li = document.createElement("li");
  li.textContent = value;
  list.appendChild(li);

  input.value = "";
});

// sesuai panduan
