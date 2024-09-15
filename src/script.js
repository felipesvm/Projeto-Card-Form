const form = document.querySelector("form");
const form2 = document.forms;
const numberCard = document.querySelector(".number-card");
const numberCardBack = document.querySelector("CVC-card");

function validarCartaoDeCredito(numeroCartao) {
  // Regex para 16 dígitos agrupados em 4 grupos separados por espaços
  const regex = /^(\d{4} \d{4} \d{4} \d{4})$/;

  // Usando test() para verificar se a string corresponde ao padrão
  return regex.test(numeroCartao);
}

function handleShow(event) {
  const target = event.target;
  numberCard.innerText = target.value;
}

const form3 = document.querySelector("form");
function handleChange(event) {
  console.log("Evento ocorreu");
  const target = event.target;
  console.log(target);
  if (!validarCartaoDeCredito(target.value)) {
    target.classList.add("invalido2");
    target.nextElementSibling.innerText = "Erro";
  } else {
    target.classList.remove("invalido");
    target.nextElementSibling.innerText = "";
  }
}
form3.addEventListener("change", handleChange);

form3.addEventListener("keyup", handleShow);
