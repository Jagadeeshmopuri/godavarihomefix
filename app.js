function bookService(service) {
  const phone = "91XXXXXXXXXX"; // 👉 put your number
  const message = `Hello, I need ${service} service in Rajahmundry/Kakinada`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
