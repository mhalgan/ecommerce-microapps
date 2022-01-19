import faker from "faker";

const mount = (element) => {
  const cartText = `<div>You have ${faker.random.number()} in your cart</div>`;
  element.innerHTML = cartText;
};

// If the application is running on dev and on isolation mode, mounts it on local index.html file
if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-cart-isolation");

  // Assuming the container doesn't have an element with id 'dev-cart-isolation'
  if (element) {
    mount(element);
  }
}

export { mount };
