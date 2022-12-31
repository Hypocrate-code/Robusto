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

const sizeButtonsArray = Array.from(document.querySelectorAll('#size-button'));
let prices = ['26.00', '32.00', '64.00'];
const price = document.querySelector('.price');

const productDescription = document.querySelector('.product-description-inner'),
subContentDescription = document.querySelector('.sub-content-card');

const right = document.querySelector('.right');
const left = document.querySelector('.left');
let cards, cardz, cars;
cards = document.querySelector('.cards');



window.addEventListener('load', () => {
  loader.classList.add('disappear');
  loader.addEventListener('transitionend', () => {
    loader.style.display = 'none';

  })
})

const images = document.querySelectorAll('[data-src]');

function loading(img) {
  const dataSrc = img.getAttribute('data-src');
  if(!dataSrc){return;}
  else {
    img.src = dataSrc;
  }
  console.log(dataSrc);
};

const lazyLoader = new IntersectionObserver(function (images, lazyLoader) {
  images.forEach(image => {
    if(!image.isIntersecting){return;}
    else{
    loading(image.target);
    lazyLoader.unobserve(image.target);
    }
  });
}, {rootMargin: '200px'});

images.forEach(image => {
  lazyLoader.observe(image);
});
productDescription.addEventListener('click', () => {
  productDescription.classList.toggle('returned');
});
subContentDescription.addEventListener('click', () => {
  subContentDescription.classList.toggle('returned');
});

function setUpSlider () {
  cards = document.querySelector('.cards');
  cardz = cards.children;
  cars = window.getComputedStyle(cardz[1]);
  let firstCard = cards.firstElementChild;
  let lastCard = cards.lastElementChild;
  firstCard.style.display = 'flex';
  lastCard.style.display = 'flex';
};
function resetSlider () {
  firstCard = cards.firstElementChild;
  firstCard.style.display = 'none';
  lastCard = cards.lastElementChild;
  lastCard.style.display = 'none';
}

function leftFunction() {
  if(cars.animationPlayState == 'running') {
    return;
  }
  let products = document.querySelectorAll('.card');
  products.forEach(card => {
    card.classList.add('switching-to-right');
    })
  cards.addEventListener('animationend', () => {
    products.forEach(card => {
      card.classList.remove('switching-to-right');
    })
    cards.removeChild(cards.lastElementChild);    
    cards.removeChild(cards.lastElementChild);
    let celuiDeLaFin = cards.lastElementChild.cloneNode(true);
    let celuiDuDebut = cards.firstElementChild.cloneNode(true);
    cards.insertBefore(celuiDeLaFin, cards.firstElementChild);
    cards.appendChild(celuiDuDebut);
    resetSlider();
  }, {once: true})
}

function rightFunction() {
  if(cars.animationPlayState == 'running') {
    return;
  }
  let products = document.querySelectorAll('.card');
  products.forEach(card => {
    card.classList.add('switching-to-left');
    })
  cards.addEventListener('animationend', () => {
    products.forEach(card => {
      card.classList.remove('switching-to-left');
    })
    cards.removeChild(cards.firstElementChild);    
    cards.removeChild(cards.firstElementChild);
    let celuiDeLaFin = cards.lastElementChild.cloneNode(true);
    let celuiDuDebut = cards.firstElementChild.cloneNode(true);
    cards.insertBefore(celuiDeLaFin, cards.firstElementChild);
    cards.appendChild(celuiDuDebut);
    resetSlider();
  }, {once: true})
}

const scrollTop = document.documentElement.scrollHeight;
left.addEventListener('click', () => {
  setUpSlider();
  leftFunction();
});

right.addEventListener('click', () => {
  setUpSlider();
  rightFunction();
})
cards.addEventListener('wheel', (e) => {
    if(e.deltaY >= 0) {
    setUpSlider();
    rightFunction();
  }
  else {
    setUpSlider();
    leftFunction();
  }
})
cards.addEventListener('mouseenter', () => { 
  document.body.classList.add('hidden');
  cards.addEventListener('mouseleave', () => {
   document.body.classList.remove('hidden');

  })
})


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
        price.innerHTML = '$' + prices[sizeButtonsArray.indexOf(btn)];
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
  if(b===0) {

  }
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





coffeeJarContainer.addEventListener('click', () => {
    if (after_of_coffeeJarContainer.width=='0px'){
      coffeeJar.classList.add("active");
      coffeeDown.beginElement();
      coffeeCup.classList.add('out');
      coffeeJarContainer.style.setProperty('--animation', 'liquid .7s');
      coffeeJarContainer.addEventListener('animationend', () => {
        coffeeSmoke.classList.add('visible');
      })
      coffeeJarContainer.setAttribute("aria-expanded", true);
    }
    else {
      coffeeJar.classList.remove("active");
      coffeeUp.beginElement();
      coffeeJarContainer.style.setProperty('--animation', 'liquid-reverse 0.4s');
      coffeeJarContainer.addEventListener('animationend', () => {
        coffeeCup.classList.remove('out');
        coffeeSmoke.classList.remove('visible');
      }, {once: true})
      coffeeJarContainer.setAttribute("aria-expanded", false);

    }
});