let foods = document.getElementsByClassName("food")
let activeFood = document.getElementsByClassName("selected-food")
let foodIcons = document.getElementsByClassName("food-icon")
let activeFoodIcon = document.getElementsByClassName("green-food")

let drinks = document.getElementsByClassName("drink")
let activeDrink = document.getElementsByClassName("selected-drink")
let drinkIcons = document.getElementsByClassName("drink-icon")
let activeDrinkIcon = document.getElementsByClassName("green-drink")

let desserts = document.getElementsByClassName("dessert")
let activeDessert = document.getElementsByClassName("selected-dessert")
let dessertIcons = document.getElementsByClassName("dessert-icon")
let activeDessertIcon = document.getElementsByClassName("green-dessert")



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
    }
    )
}

function openBanner() {
    let open = document.querySelector('.banner');
    open.classList.remove('hidden');
}

function closeBanner() {
    let close = document.querySelector(".banner");
    close.classList.add('hidden');
}

//  if flag=1: 
//    document.getElementById("your-btn").disabled = true;
//    else: 
//    document.getElementById("your-btn").disabled = false;