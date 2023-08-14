const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const pizzaForm = document.getElementById("pizzaForm");
const pizzaNumberInput = document.getElementById("pizzaNumber");
const pizzaContainer = document.getElementById("pizzaContainer");

pizzaForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const pizzaNumber = parseInt(pizzaNumberInput.value);

    const foundPizza = pizzas.find(pizza => pizza.id === pizzaNumber);

    if (foundPizza) {
        renderPizzaCard(foundPizza);
        localStorage.setItem("lastPizza", JSON.stringify(foundPizza));
    } else {
        renderErrorMessage("Pizza not found");
    }
});

function renderPizzaCard(pizza) {
    pizzaContainer.innerHTML = `
        <div class="card">
            <h3>${pizza.nombre}</h3>
            <img src="${pizza.imagen}" alt="${pizza.nombre}">
            <p>Precio: $${pizza.precio.toFixed(2)}</p>
        </div>
    `;
}

function renderErrorMessage(message) {
    pizzaContainer.innerHTML = `<p class="error">${message}</p>`;
}

// Check if there's a pizza in localStorage and render it
const lastPizza = JSON.parse(localStorage.getItem("lastPizza"));
if (lastPizza) {
    renderPizzaCard(lastPizza);
}