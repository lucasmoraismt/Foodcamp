let foods = document.getElementsByClassName("food");
let activeFood = document.getElementsByClassName("selected-food");
let foodIcons = document.getElementsByClassName("food-icon");
let activeFoodIcon = document.getElementsByClassName("green-food");
let foodPrice = document.querySelectorAll(".food-price");
let foodName = document.querySelectorAll(".food-name");
let finalFoodName = document.getElementById("food-name");
let finalFoodPrice = document.getElementById("food-price");

let drinks = document.getElementsByClassName("drink");
let activeDrink = document.getElementsByClassName("selected-drink");
let drinkIcons = document.getElementsByClassName("drink-icon");
let activeDrinkIcon = document.getElementsByClassName("green-drink");
let drinkPrice = document.querySelectorAll(".drink-price");
let drinkName = document.querySelectorAll(".drink-name");
let finalDrinkName = document.getElementById("drink-name");
let finalDrinkPrice = document.getElementById("drink-price");

let desserts = document.getElementsByClassName("dessert");
let activeDessert = document.getElementsByClassName("selected-dessert");
let dessertIcons = document.getElementsByClassName("dessert-icon");
let activeDessertIcon = document.getElementsByClassName("green-dessert");
let dessertPrice = document.querySelectorAll(".dessert-price");
let dessertName = document.querySelectorAll(".dessert-name");
let finalDessertName = document.getElementById("dessert-name");
let finalDessertPrice = document.getElementById("dessert-price");

let total = document.getElementById("total-value");
let clientName;
let clientAddress;

for (var a=0; a < foods.length; a++) {
    foods[a].addEventListener("click", function() {
        if (activeFood.length > 0) {
            activeFood[0].classList.remove("selected-food");
        }

        if (activeFoodIcon.length > 0) {
            activeFoodIcon[0].classList.remove("green-food");
        }

        let position = Array.prototype.indexOf.call(foods, this);
        this.classList.add("selected-food");
        foodIcons[position].classList.add("green-food");
        finalFoodName.innerHTML = foodName[position].innerHTML;
        finalFoodPrice.innerHTML = foodPrice[position].innerHTML;

        price();
        activeButton();
    })
}

for (var b=0; b < drinks.length; b++) {
    drinks[b].addEventListener("click", function() {
        if (activeDrink.length > 0) {
            activeDrink[0].classList.remove("selected-drink");
        }

        if (activeDrinkIcon.length > 0) {
            activeDrinkIcon[0].classList.remove("green-drink");
        }

        let position = Array.prototype.indexOf.call(drinks, this);
        this.classList.add("selected-drink");
        drinkIcons[position].classList.add("green-drink");
        finalDrinkName.innerHTML = drinkName[position].innerHTML;
        finalDrinkPrice.innerHTML = drinkPrice[position].innerHTML;

        price();
        activeButton();
    }
    )
}

for (var c=0; c < desserts.length; c++) {
    desserts[c].addEventListener("click", function() {
        if (activeDessert.length > 0) {
            activeDessert[0].classList.remove("selected-dessert");
        }

        if (activeDessertIcon.length > 0) {
            activeDessertIcon[0].classList.remove("green-dessert");
        }

        let position = Array.prototype.indexOf.call(desserts, this);
        this.classList.add("selected-dessert")
        dessertIcons[position].classList.add("green-dessert");
        finalDessertName.innerHTML = dessertName[position].innerHTML;
        finalDessertPrice.innerHTML = dessertPrice[position].innerHTML;

        price();
        activeButton();
    }
    )
}

function openBanner() {
    let open = document.querySelector('.banner');
    open.classList.remove('hidden');
    let clientName = prompt("Digite seu nome:");
    let clientAddress = prompt("Digite seu endereço:");

    let message = "Olá, gostaria de fazer o pedido:\n - Prato: " + finalFoodName.innerHTML + 
    "\n - Bebida: " + finalDrinkName.innerHTML + "\n - Sobremesa: " + finalDessertName.innerHTML + 
    "\nTotal: " + total.innerHTML + "\n\n  Nome: " + clientName + "\n Endereço: " + clientAddress;
    message = encodeURIComponent(message);
    
    let url = "https://wa.me/5581998586422?text=" + message;
    document.querySelector(".whats-button").innerHTML = '<span><a href="' + url + '">Tudo certo, pode pedir!</a></span>';
}

function closeBanner() {
    let close = document.querySelector(".banner");
    close.classList.add('hidden');
}

function activeButton() {
    let d = activeFood.length;
    let e = activeDrink.length;
    let f = activeDessert.length;
    let button = document.querySelector(".confirm");
    
    if (d + e + f === 3) {
        button.disabled = false;
        button.classList.add("green-button");
        button.innerHTML = "<p>Fechar pedido</p>";
    }
}

function price() {
    let fPriceHtml = finalFoodPrice.innerHTML;
    let drPriceHtml = finalDrinkPrice.innerHTML;
    let dePriceHtml = finalDessertPrice.innerHTML;

    fPriceHtml = fPriceHtml.replace("R$","").replace(" ", "").replace(",","");
    drPriceHtml = drPriceHtml.replace("R$","").replace(" ", "").replace(",","");
    dePriceHtml = dePriceHtml.replace("R$","").replace(" ", "").replace(",","");

    fPriceHtml = parseInt(fPriceHtml, 10);
    drPriceHtml = parseInt(drPriceHtml, 10);
    dePriceHtml = parseInt(dePriceHtml, 10);

    let totalPrice = ((fPriceHtml + drPriceHtml + dePriceHtml) / 100).toFixed(2);
    total.innerHTML = "R$ " + totalPrice.replace(".",",");
}

function openWhatsApp() {

}