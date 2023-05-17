const loader = document.querySelector('.loader');

const coffeeJar = document.querySelector(".coffee-pot-icon"),
coffeeJarContainer = document.querySelector(".coffee-pot-container"),
coffeeCup = document.querySelector(".coffee-cup"),
coffeeSmoke = document.querySelector(".coffee-smoke"),
hamburger = document.querySelector('.hamburger');
let after_of_coffeeJarContainer = window.getComputedStyle(coffeeJarContainer, '::after');
const coffeeDown = document.getElementById('coffee-down'),
coffeeUp = document.getElementById('coffee-up');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
let cards, cardz, cars;
cards = document.querySelector('.cards');
const coffeeOnScroll = document.querySelector('.to-top'),
liquidOnScroll = coffeeOnScroll.querySelector('#coffee'),
overFlowed = document.querySelectorAll('h1>span>span');

let timing = 0;


window.addEventListener('scroll', () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  const scrollHeight = document.body.scrollHeight - window.innerHeight;
  liquidOnScroll.style.setProperty('transform', `scaleY(${1 - scrollTop / scrollHeight})`);
  if(scrollTop === 0) {
    coffeeOnScroll.classList.remove('visible')
    return;
  }
  coffeeOnScroll.classList.add('visible')
});
coffeeOnScroll.addEventListener('click', ()=>window.scrollTo(0,0))

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

function removeSideNav() {
  if(window.innerWidth<=380) {
    document.body.classList.remove('dark');
    Array.from(hamburger.children).forEach(line => line.classList.remove('active'));
    hamburger.style.setProperty('animation-play-state', 'running');
    coffeeJar.classList.remove("active");
    coffeeUp.beginElement();
    coffeeJarContainer.style.setProperty('--animation', 'liquid-reverse 0.4s');
    coffeeCup.classList.remove('out');
    coffeeSmoke.classList.remove('visible');
    coffeeJarContainer.setAttribute("aria-expanded", false);
    hamburger.setAttribute('aria-expanded', false);
    hamburger.addEventListener('animationend', ()=> {
      hamburger.style.setProperty('animation-play-state', 'paused');
    }, {once: true})
  }
}

const anchors =Array.from(document.querySelectorAll('.side-navbar-links>li>a'))
anchors.forEach(anchor => anchor.addEventListener('click', removeSideNav))

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

const after_of_h1 = document.querySelector('h1')

window.scrollTo(0, 0);
window.addEventListener('load', () => {
  loader.classList.add('disappear');
  loader.addEventListener('transitionend', () => {
    loader.style.display = 'none';
    document.body.style.overflowY = 'visible'
    Array.from(overFlowed).forEach((span)=>{
      span.style.animationPlayState = 'running';
    })
  })
  const onScrollElements = Array.from(document.querySelectorAll('.invi'))
  const onScroll = new IntersectionObserver(function (onScrollElements, onScroll) {
    onScrollElements.forEach(el => {
      if(!el.isIntersecting){return;}
      else{
      el.target.classList.remove('invi');
      onScroll.unobserve(el.target);
      }
    });
  }, {rootMargin: '-35px'});
  
  onScrollElements.forEach(el => {
    onScroll.observe(el);
  });
})
window.addEventListener('resize',()=>{
  if (window.innerWidth <= 736) {
    const coffeeShop = document.querySelector('#shop')
    coffeeShop.classList.add('visible');
  }
})



const images = document.querySelectorAll('[data-src]');

function loading(img) {
  const dataSrc = img.getAttribute('data-src');
  if(!dataSrc){return;}
  else {
    img.src = dataSrc;
  }
};


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

left.addEventListener('click', () => {
  setUpSlider();
  leftFunction();
});

right.addEventListener('click', () => {
  setUpSlider();
  rightFunction();
})
if (window.innerWidth > 450) {
  let TL = gsap.timeline({repeat:-1});
      TL.to("#coffee-cup-right, #coffee-cup-left", 0, {x: origin,y:origin, rotate: origin, transformBox: 'view-box', transformOrigin: 'center'})
      .to('#head, #monocle', {delay:.6,y: -28, duration: .4, ease: "back.in(1.7)", yoyoEase: true})
      .to("#tube", {rotate: 12,duration: .35 ,transformBox: "view-box",ease: "back.out(4)", transformOrigin: "bottom"})
      .to("#mustache", {y: -28, duration: .3,delay: -.4, ease: "back.out(1.7)", yoyoEase: true})
      .to("#bow-tie", {y: -28, duration: .3,delay: -.2, ease: "back.out(1.7)", yoyoEase: true})
      .to("#body, #left-arm, #coffee-cup-right, #coffee-cup-left, #right-hand", {y: -28, duration: .3, stagger: 0.1,ease: "back.out(4)"}, "-=0.2")
      .to("#plate", {y: -28, duration: .3,ease: "back.out(4)"}, "-=0.49")
      .to("#coffee-cup-right, #coffee-cup-left", {y: -45, duration: 0.3 , stagger: 0.03, ease:"back.out(4)"},"-=.49")
      .to("#coffee-cup-right, #coffee-cup-left", {y: -28, duration: 0.3 , stagger: 0.05, ease:"back.out(1.4)"}, "-=.3")
      .to("#coffee-cup-inside", 0.25, {y:10, repeat: 1, yoyo: true}, "-=0.65")
      .to("#right-arm, #left-hand", {y: -28, duration: .2,delay: -.16, ease: "power3.in", yoyoEase: true, stagger: 0.1}, "-=0.45")
      .to("#eye", .1, {scaleY: 0.7, transformOrigin: "center", stagger:-.2})
      .to("#eye", .1, {scaleY: 1, transformOrigin: "center", stagger:-.2})
      .to("#mustache", .1, {delay:.7, rotate:-10,repeat: 1,yoyo: true, transformOrigin: "center"})
      .to("#mustache", .1, { rotate:10,repeat: 1,yoyo: true, transformOrigin: "center"})
      .to("#mustache", .8, {y: 630, ease: "bounce.out",delay: .2, transformBox: "fill-box"})
      .to("#mustache", .4, {x:'random(360,-360)'}, '-=.6')
      .to("#eye", .2, {scale: 1.1})
      .to("#eye", .1, {scaleY: 0,delay: .3, yoyo: true, repeat: 3})
      .to("#head", .8, {y: 600,delay: .3, ease: "bounce.out"})
      .to("#head", .4, {x:'random(360,-360, 60)'}, '-=.5')
      .to("#tube", .2, {rotate:-40, y:-10}, '-=.8')
      .to("#body", .8, {y: 160, ease: "bounce.out", rotate: 'random([-70, 70])',transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
      .to("#body", .4, {x:'random(360,-360, 60)'}, '-=.5')
      .to("#left-arm", .8, {y: 320, ease: "bounce.out", rotate: 'random([-75, 75])',transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
      .to("#left-arm", .4, {x:'random(360,-360, 60)'}, '-=.5')
      .to("#right-arm", .8, {y: 355, ease: "bounce.out", rotate: 'random([-75, 75])',transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
      .to("#right-arm", .4, {x:'random(360,-360, 60)'}, '-=.5')
      .to("#left-hand", .8, {y: 185, ease: "bounce.out", rotate: 'random([-75, 75])',transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
      .to("#left-hand", .4, {x:'random(360,-360, 60)'}, '-=.5')
      .to("#right-hand", .8, {y: 550, ease: "bounce.out", rotate: 'random([-75, 75])',transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
      .to("#right-hand", .4, {x:'random(360,-360, 60)'}, '-=.5')
      .to("#plate", .8, {y: 640, ease: "bounce.out",transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
      .to("#plate", .4, {rotate:'random([360,0,-360])',x:'random(-30,30,1)'}, '-=.5')
      .to("#coffee-cup-right", .8, {y: 670, ease: "bounce.out", transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
      .to("#coffee-cup-right", .4, {x:'random(360,-360, 20)'}, '-=.5')
      .to("#coffee-cup-left", .8, {y: 669, ease: "bounce.out", transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
      .to("#coffee-cup-left", .4, {x:'random(360,-360, 20)'}, '-=.5')
      .to("#bow-tie", .8, {y: 555, ease: "bounce.out", transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
      .to("#bow-tie", .4, {x:'random(360,-360, 20)', rotate: 'random(360,-360,1)'}, '-=.5')
      .to("#monocle", .8, {y:645, ease: "bounce.out", transformBox: 'view-box', transformOrigin: 'center'},"-=.8")
      .to("#monocle", .4, { rotate: 'random(360,-360,60)'}, '-=.5')
      .to("#weely>*", .8, {delay: 1.5, ease: 'back.out(2)',x: origin,y:origin, rotate: origin, transformBox: 'view-box', transformOrigin: 'center'})
      .to("#coffee-cup-right, #coffee-cup-left", .5, {delay: -.8,x: origin,y:origin, rotate: origin, transformBox: 'view-box', transformOrigin: 'center'})
      .to("#eye", .5, {scale:1});
}
var map = L.map('map').setView([55.975077998323215, -3.1711523180413126], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([55.975077998323215, -3.1711523180413126],{ color: "red"}).addTo(map)