const loader = document.querySelector('.loader');

const coffeeJar = document.querySelector(".coffee-pot-icon"),
coffeeJarContainer = document.querySelector(".coffee-pot-container"),
coffeeCup = document.querySelector(".coffee-cup"),
coffeeSmoke = document.querySelector(".coffee-smoke"),
hamburger = document.querySelector('.hamburger');
let after_of_coffeeJarContainer = window.getComputedStyle(coffeeJarContainer, '::after'),
quantity = 0;
const coffeeDown = document.getElementById('coffee-down'),
coffeeUp = document.getElementById('coffee-up'),
dropDownLanguage = document.querySelector('.drop-down-language-picker'),
dropDownLanguageButton = document.querySelector('.user-buttons li:first-child>button');

const plus = document.querySelector('.plus'),
minus = document.querySelector('.minus'),
result = document.querySelector('.result');

const cartIcon = document.querySelector('.cart-icon'),
cartNumber = document.querySelector('#cart-number'),
buyButton = document.querySelector('.buy-button');
let cartIconStyle = window.getComputedStyle(cartIcon);

const sizeButtonsArray = Array.from(document.querySelectorAll('#size-button'));
let prices = ['26.00', '32.00', '41.00'];
const price = document.querySelector('.price');

const productDescription = document.querySelector('.product-description-inner'),
subContentDescription = document.querySelector('.sub-content-card');

const right = document.querySelector('.right');
const left = document.querySelector('.left');
let cards, cardz, cars;
cards = document.querySelector('.cards');

const productImage = document.querySelector('.product-photo'),
beans = document.querySelectorAll('.bean');


let nameOfProduct = document.querySelector('h1').textContent;
nameOfProduct = Array.from(nameOfProduct)
nameOfProduct.pop();
nameOfProduct = nameOfProduct.join('');

let subName = document.querySelector('h2').textContent;
const main = document.querySelector('main');


const cartLink = document.querySelector('[href="user_cart_page/index.html"]');

function initCartScore (num) {
  if(isNaN(num)) {
    if(localStorage.length == 0) {
      localStorage.setItem('totalValue', 0);
      cartNumber.textContent = localStorage.getItem('totalValue');
    }
    else {
      cartNumber.textContent = localStorage.getItem('totalValue');
    }
  }
  else {
    let resu = parseInt(localStorage.getItem('totalValue')) + parseInt(num);
    localStorage.setItem('totalValue', resu);
    cartNumber.textContent = localStorage.getItem('totalValue');
  }
}

initCartScore();

hamburger.addEventListener('click', ()=> {
  if(hamburger.style.animationPlayState == 'running') {
    return;
  }
  else {
    document.body.classList.toggle('dark');
    Array.from(hamburger.children).forEach(line => line.classList.toggle('active'));
    hamburger.style.setProperty('animation-play-state', 'running');
    if (hamburger.children[0].classList.contains('active')){
      coffeeJar.classList.add("active");
      coffeeDown.beginElement();
      coffeeCup.classList.add('out');
      coffeeJarContainer.style.setProperty('--animation', 'liquid .7s');
      coffeeJarContainer.addEventListener('animationend', () => {
        coffeeSmoke.classList.add('visible');
        coffeeJarContainer.setAttribute("aria-expanded", true);
        })
      hamburger.setAttribute('aria-expanded', true);
      }
    else {
      coffeeJar.classList.remove("active");
      coffeeUp.beginElement();
      coffeeJarContainer.style.setProperty('--animation', 'liquid-reverse 0.4s');
      coffeeCup.classList.remove('out');
      coffeeSmoke.classList.remove('visible');
      coffeeJarContainer.setAttribute("aria-expanded", false);
      hamburger.setAttribute('aria-expanded', false);
      }

    hamburger.addEventListener('animationend', ()=> {
      hamburger.style.setProperty('animation-play-state', 'paused');
    }, {once: true})
  }
})

coffeeJarContainer.addEventListener('click', () => {
  Array.from(hamburger.children).forEach(line => line.classList.toggle('active'));
  document.body.classList.toggle('dark');
  if (after_of_coffeeJarContainer.width=='0px'){
    coffeeJar.classList.add("active");
    coffeeDown.beginElement();
    coffeeCup.classList.add('out');
    coffeeJarContainer.style.setProperty('--animation', 'liquid .7s');
    coffeeJarContainer.addEventListener('animationend', () => {
      coffeeSmoke.classList.add('visible');
      coffeeJarContainer.setAttribute("aria-expanded", true);
      })
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

function loop(name, size, qtt, productImg, subName, price) {
  ourProduct = {name:name, size:size, quantity: qtt, link:productImg, subName:subName, price:price};
  initCartScore(Number(qtt));
  let okay = true;
  const keysWithoutTotalValue = Object.keys(localStorage).filter(key => key!='totalValue');
  if(keysWithoutTotalValue.length==0) {
    localStorage.setItem(0, JSON.stringify(ourProduct));
    return;
  }
  keysWithoutTotalValue.forEach(key=>{
      let currentValue = JSON.parse(localStorage.getItem(key));
      if(currentValue.name == ourProduct.name && currentValue.size == ourProduct.size && currentValue.price == ourProduct.price) {
        ourProduct.quantity = parseInt(currentValue.quantity) + parseInt(ourProduct.quantity);
        localStorage.setItem(key, JSON.stringify(ourProduct));
        okay = false;
      }
    })
    if(okay) {
      const newIndex = Math.max(...keysWithoutTotalValue);
      localStorage.setItem(newIndex+1, JSON.stringify(ourProduct));
    }
  };

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
};
dropDownLanguageButton.addEventListener('click', ()=>{
  if(dropDownLanguage.style.animationPlayState == 'running') {
      return;
  }
  else if(dropDownLanguage.style.display == 'block') {
      dropDownLanguage.style.setProperty('animation', 'fade-in-top-reverse .15s forwards');
      dropDownLanguage.addEventListener('animationend', () => {
          dropDownLanguage.style.setProperty('animation-play-state','paused');
          dropDownLanguage.style.setProperty('display','none');
      }, {once: true})
  }
  else {
      dropDownLanguage.style.setProperty('display', 'block');
      dropDownLanguage.style.setProperty('animation', 'fade-in-top .15s forwards')
      dropDownLanguage.addEventListener('animationend',()=> {
          dropDownLanguage.style.setProperty('animation-play-state','paused');
          document.body.addEventListener('click', ()=>{
              dropDownLanguage.style.setProperty('animation', 'fade-in-top-reverse .15s forwards');
              dropDownLanguage.addEventListener('animationend', () => {
                  dropDownLanguage.style.setProperty('display','none');
                  dropDownLanguage.style.setProperty('animation-play-state','paused');
              }, {once: true})
          }, {once: true})
      }, {once: true})
  }
})
beans.forEach(bean => bean.addEventListener('click', ()=> {
  bean.classList.add('wiggling');
  bean.addEventListener('animationend', ()=>bean.classList.remove('wiggling'))
}))

const lazyLoader = new IntersectionObserver(function (images, lazyLoader) {
  images.forEach(image => {
    if(!image.isIntersecting){return;}
    else{
    loading(image.target);
    lazyLoader.unobserve(image.target);
    }
  });
}, {rootMargin: '400px'});

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

// const scrollTop = document.documentElement.scrollHeight;

left.addEventListener('click', () => {
  setUpSlider();
  leftFunction();
});

right.addEventListener('click', () => {
  setUpSlider();
  rightFunction();
})

let mouseYInImage, mouseXInImage, percentX, percentY

productImage.addEventListener('click', function () {
  this.classList.toggle('zoomed');
  if(!this.classList.contains('zoomed')) {
    productImage.style.setProperty('background-position', '50% 50%');
  }
  productImage.addEventListener('mousemove', (e) => {
    if(productImage.classList.contains('zoomed')) {
      mouseYInImage = e.clientY - productImage.offsetTop; 
      mouseXInImage = e.clientX - main.offsetLeft - productImage.offsetLeft;
      percentX = Math.floor( mouseXInImage / productImage.offsetWidth * 100);
      percentY =  Math.floor( mouseYInImage / productImage.offsetHeight * 100);
      if(percentX>100 || percentX<0 || percentY>100 || percentY<0 ) {return;}
      productImage.style.setProperty('background-position', percentX +'%' + percentY + '%');
    }
  })
})
productImage.addEventListener('mouseleave', function() {
  if(this.classList.contains('zoomed')) {this.classList.remove('zoomed');}
  productImage.style.setProperty('background-position', '50% 50%');
});


sizeButtonsArray.forEach(btn => {
    btn.addEventListener('click', event => {
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
        price.textContent = '$' + prices[sizeButtonsArray.indexOf(btn)];
    })
  })

buyButton.addEventListener('click', () => {
  let a = parseInt(cartNumber.innerHTML),
  b = parseInt(result.innerHTML);
  if(cartIconStyle.animationPlayState == 'running') {
    return;
  }
  else if(b === 0){
    cartIcon.style.setProperty('transform', 'translateX(-1rem)');
    cartIcon.addEventListener('transitionend', () => {
      cartIcon.classList.add('no-product');
    }, {once: true})
    
    cartIcon.addEventListener('animationend', ()=>{
        cartIcon.style.removeProperty('transform');
        cartIcon.classList.remove('no-product');
      })
  }
  else {
    let b = result.innerHTML;
    cartIcon.classList.add('spinning');
    cartIcon.addEventListener('animationend', () => {
      cartIcon.classList.remove('spinning');
    })

    if(sizeButtonsArray[0].classList.contains('chosen')) {
      loop(nameOfProduct, 'M', b, 'assets/batlle creek.jpg', subName, prices[0]);
    }
    else if(sizeButtonsArray[1].classList.contains('chosen')) {
      loop(nameOfProduct,'L', b, 'assets/batlle creek.jpg', subName, prices[1]);
    }
    else {
      loop(nameOfProduct,'XL', b, 'assets/batlle creek.jpg', subName, prices[2]);
    }
    quantity = 0;
    result.innerHTML = 0;
  }
})
cartLink.addEventListener('click', ()=>{
  window.location.href ='user_cart_page/index.html';
}); 

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


