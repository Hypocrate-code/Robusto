const loader = document.querySelector('.loader');

const coffeeJar = document.querySelector(".coffee-pot-icon"),
coffeeJarContainer = document.querySelector(".coffee-pot-container"),
coffeeCup = document.querySelector(".coffee-cup"),
coffeeSmoke = document.querySelector(".coffee-smoke");
let after_of_coffeeJarContainer = window.getComputedStyle(coffeeJarContainer, '::after'),
quantity = 0;
const coffeeDown = document.getElementById('coffee-down');
const coffeeUp = document.getElementById('coffee-up');

const plus = document.querySelector('.plus'),
minus = document.querySelector('.minus'),
result = document.querySelector('.result');

const cartIcon = document.querySelector('.cart-icon'),
cartNumber = document.querySelector('#cart-number'),
buyButton = document.querySelector('.buy-button');

window.addEventListener('load', () => {
  loader.classList.add('disappear');
  loader.addEventListener('transitionend', () => {
    loader.style.setProperty('display', 'none')
  })
})


const sizeButtonsArray = Array.from(document.querySelectorAll('#size-button'));

sizeButtonsArray.forEach(btn => {
  btn.addEventListener('click', event => {
    if (btn.classList.contains('chosen')) {
      btn.classList.remove('chosen');
    }
    else {
      if(sizeButtonsArray[0].classList.contains('chosen')) {
        sizeButtonsArray[0].classList.remove('chosen');
      }
      else if (sizeButtonsArray[1].classList.contains('chosen')) {
        sizeButtonsArray[1].classList.remove('chosen');
      }
      else {
        sizeButtonsArray[2].classList.remove('chosen');
      }
      btn.classList.add('chosen');
    }
  })
})


buyButton.addEventListener('click', () => {
  cartIcon.classList.add('spinning');
  cartIcon.addEventListener('animationend', () => {
    cartIcon.classList.remove('spinning');
  })

  let a = Number(cartNumber.innerHTML),
  b = Number(result.innerHTML);
  cartNumber.innerHTML = a + b;
  result.innerHTML = 0;
  quantity = 0;
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





coffeeJar.addEventListener('click', () => {
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


