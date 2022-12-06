const coffeeJar = document.querySelector(".coffee-pot-icon"),
coffeeJarContainer = document.querySelector(".coffee-pot-container"),
coffeeCup = document.querySelector(".coffee-cup"),
size = document.querySelectorAll("#size-button");
prompt(size);
let after_of_coffeeJarContainer = window.getComputedStyle(coffeeJarContainer, '::after');
var coffeeDown = document.getElementById('coffee-down');
var coffeeUp = document.getElementById('coffee-up');


coffeeJar.addEventListener('click', function() {
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


