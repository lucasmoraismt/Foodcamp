let foods = document.getElementsByClassName("food")
let activeFood = document.getElementsByClassName("selected-food")

let drinks = document.getElementsByClassName("drink")
let activeDrink = document.getElementsByClassName("selected-drink")

let desserts = document.getElementsByClassName("dessert")
let activeDessert = document.getElementsByClassName("selected-dessert")

for (var a=0; a < foods.length; a++) {
    foods[a].addEventListener("click", function() {
        if (activeFood.length > 0) {
            activeFood[0].classList.remove("selected-food")
        }

        this.classList.add("selected-food")
    }
    )
}

for (var b=0; b < drinks.length; b++) {
    drinks[b].addEventListener("click", function() {
        if (activeDrink.length > 0) {
            activeDrink[0].classList.remove("selected-drink")
        }

        this.classList.add("selected-drink")
    }
    )
}

for (var c=0; c < desserts.length; c++) {
    desserts[c].addEventListener("click", function() {
        if (activeDessert.length > 0) {
            activeDessert[0].classList.remove("selected-dessert")
        }

        this.classList.add("selected-dessert")
    }
    )
}