const coffeeJar = document.querySelector(".coffee-pot-icon"),
coffeeJarContainer = document.querySelector(".coffee-pot-container"),
coffeeCup = document.querySelector(".coffee-cup"),
coffeeSmoke = document.querySelector(".coffee-smoke");
let after_of_coffeeJarContainer = window.getComputedStyle(coffeeJarContainer, '::after');
const coffeeDown = document.getElementById('coffee-down');
const coffeeUp = document.getElementById('coffee-up');

const plus = document.querySelector('.plus'),
minus = document.querySelector('.minus'),
result = document.querySelector('.result');

const cartIcon = document.querySelector('.cart-icon'),
cartNumber = document.querySelector('#cart-number'),
buyButton = document.querySelector('.buy-button');



let quantity = 0;
document.querySelectorAll('#size-button').forEach(btn => {
  btn.addEventListener('click', event => {
    btn.classList.toggle('chosen');
  })
})

buyButton.addEventListener('click', function () {
  cartIcon.style.setProperty('animation', 'cart .8s forwards');
  let a = Number(cartNumber.innerHTML),
  b = Number(result.innerHTML);
  cartNumber.innerHTML = a + b;
})


function test (valeurTest) {
  if(valeurTest>0) {
    quantity--;
    return result.innerHTML = quantity;
  }
  else {
    return result.innerHTML=0;
  }
};

plus.addEventListener('click', function() {
  quantity++
  result.innerHTML = quantity;

});

minus.addEventListener('click', function() {
  test(quantity);
});





coffeeJar.addEventListener('click', function() {
    if (after_of_coffeeJarContainer.width=='0px'){
        coffeeJar.classList.add("active");
        coffeeCup.classList.add('out');
        coffeeSmoke.classList.add('visible');
        coffeeJarContainer.style.setProperty('--animation', 'liquid')
        coffeeDown.beginElement();
        coffeeJarContainer.setAttribute("aria-expanded", true);
    }
    else {
        coffeeJar.classList.remove("active");
        coffeeCup.classList.remove('out');
        coffeeSmoke.classList.remove('visible');
        coffeeJarContainer.style.setProperty('--animation', 'liquid-reverse');
        coffeeUp.beginElement();
        coffeeJarContainer.setAttribute("aria-expanded", false);
    }
});

