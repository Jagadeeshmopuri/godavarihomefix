function bookService(service) {
  const phone = "917780178447"; // 👉 replace with your number
  const message = `Hello, I need ${service} service in Rajahmundry/Kakinada`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
