const coffeeJar = document.querySelector(".coffee-pot-icon");
const coffeeJarContainer = document.querySelector(".coffee-pot-container");
const coffeeCup = document.querySelector(".coffee-cup");
let after_of_coffeeJarContainer = window.getComputedStyle(coffeeJarContainer, '::after');
var coffeeDown = document.getElementById('coffee-down');
var coffeeUp = document.getElementById('coffee-up');
const addToCart = document.querySelector('.buy-button');

addToCart.addEventListener('click', function() {
    console.log(1)
    if (after_of_coffeeJarContainer.width=='0px'){
        coffeeJar.classList.add("active");
        coffeeCup.classList.add('out');
        coffeeJarContainer.style.setProperty('--animation', 'liquid')
        coffeeDown.beginElement();
        coffeeJarContainer.setAttribute("aria-expanded", true);
    }
    else {
        coffeeJar.classList.remove("active");
        coffeeCup.classList.remove('out');
        coffeeJarContainer.style.setProperty('--animation', 'liquid-reverse');
        coffeeUp.beginElement();
        coffeeJarContainer.setAttribute("aria-expanded", false);
    }
});


