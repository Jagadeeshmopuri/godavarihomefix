function bookService(service) {
  document.getElementById("service").value = service;
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const location = document.getElementById("location").value;
  const service = document.getElementById("service").value;

  const message = `New Booking:%0AName: ${name}%0APhone: ${phone}%0ALocation: ${location}%0AService: ${service}`;

  const whatsappURL = `https://wa.me/917780178447?text=${message}`;

  window.open(whatsappURL, "_blank");
}
