import faker from "faker";

const mount = (element) => {
  let products = "";

  for (let index = 0; index < 5; index++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  element.innerHTML = products;
};

// If the application is running on dev and on isolation mode, mounts it on local index.html file
if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-products-isolation");

  // Assuming the container doesn't have an element with id 'dev-products-isolation'
  if (element) {
    mount(element);
  }
}

export { mount };
