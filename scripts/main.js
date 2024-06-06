let toggleBtn = document.querySelector('.categories')
let closeSidebarBtn = document.querySelector('.close-sidebar')
let navsideBar = document.querySelector('.navbar-container')
let changeBtn = document.querySelector('.change-btn')
let receiveOrder = document.querySelector('.receiveorderContainer')
let closeBtn = document.querySelector('.close-btn')
let carrinho = document.querySelector('#carrinho')
let carrinho_sidebar = document.querySelector('.carrinho-sidebar')
let fechar_carrinho = document.querySelector('.closecartBtn')
let cartContainer = document.querySelector('.cart-container')
let entrega = document.querySelector('.entrega')
let receber = document.querySelector('#receber')
let retirar = document.querySelector('#retirar')
let content = document.querySelector('.content')

//left sidebar
toggleBtn.addEventListener('click', function(){
    navsideBar.classList.add('active')
    content.classList.add('open-background', 'no-click')
    document.documentElement.classList.add('no-scroll')
})

closeSidebarBtn.addEventListener('click', function(){
    navsideBar.classList.remove('active')
    content.classList.remove('open-background', 'no-click')
    document.documentElement.classList.remove('no-scroll')
})

//delivery options
changeBtn.addEventListener('click', function(){
    receiveOrder.classList.add('open-receive')
    content.classList.add('open-background', 'no-click')
    document.documentElement.classList.add('no-scroll')
})

closeBtn.addEventListener('click', function(){
    receiveOrder.classList.remove('open-receive')
    content.classList.remove('open-background', 'no-click')
    document.documentElement.classList.remove('no-scroll')
})

retirar.addEventListener('click', function(){
    entrega.textContent = 'Pick up in store'
    receiveOrder.classList.remove('open-receive')
    content.classList.remove('open-background', 'no-click')
    document.documentElement.classList.remove('no-scroll')
})

receber.addEventListener('click', function(){
    entrega.textContent = 'Receive at home'
    receiveOrder.classList.remove('open-receive')
    content.classList.remove('open-background', 'no-click')
    document.documentElement.classList.remove('no-scroll')
})

//cart
carrinho.addEventListener('click', function(){
    content.classList.add('open-background', 'no-click')
    carrinho_sidebar.classList.add('open-cart')
    document.documentElement.classList.add('no-scroll')
})

fechar_carrinho.addEventListener('click', function(){
    carrinho_sidebar.classList.remove('open-cart')
    content.classList.remove('open-background', 'no-click')
    document.documentElement.classList.remove('no-scroll')
})

//slider
document.addEventListener('DOMContentLoaded', function() {
    showSlide(0)
})

let prevBtn = document.querySelector('#prev')
let nextBtn = document.querySelector('#next')

slideIndex = 0

prevBtn.addEventListener('click', function(){
    showSlide(slideIndex - 1)
})

nextBtn.addEventListener('click', function(){
    showSlide(slideIndex + 1)
})

document.querySelectorAll('.slider-nav a').forEach(function(dot, index) {
    dot.addEventListener('click', function(event) {
        event.preventDefault()
        showSlide(index)
    })
})

function showSlide(index) {
    const slides = document.querySelectorAll('.slide')
    const dots = document.querySelectorAll('.slider-nav a')
    const totalSlides = slides.length

    if (index < 0) {
        slideIndex = totalSlides - 1
    } else if (index >= totalSlides) {
        slideIndex = 0
    } else {
        slideIndex = index
    }

    slides.forEach(slide => {
        slide.style.display = 'none'
    })
    dots.forEach(dot => {
        dot.classList.remove('active')
    })

    slides[slideIndex].style.display = 'block'
    dots[slideIndex].classList.add('active')
}

//front page products
const myBarScrollLeft = document.querySelector('#scroll-left')
const myBarScrollRight = document.querySelector('#scroll-right')

myBarScrollLeft.addEventListener('click', ()=>{
    document.querySelector('.bar-products-cont').scrollLeft -= 265
})

myBarScrollRight.addEventListener('click', ()=>{
    document.querySelector('.bar-products-cont').scrollLeft += 265
})

const sl2 = document.querySelector('#sl2')
const sr2 = document.querySelector('#sr2')
const wkContainer = document.querySelector('.weekend-container')

sl2.addEventListener('click', ()=>{
    wkContainer.scrollLeft -= 265
})

sr2.addEventListener('click', ()=>{
    wkContainer.scrollLeft += 265
})

const sl3 = document.querySelector('#sl3')
const sr3 = document.querySelector('#sr3')
const dailyCareCont = document.querySelector('.daily-care')

sl3.addEventListener('click', ()=>{
    dailyCareCont.scrollLeft -= 265
})

sr3.addEventListener('click', ()=>{
    dailyCareCont.scrollLeft += 265
})

const sl4 = document.querySelector('#sl4')
const sr4 = document.querySelector('#sr4')
const bestFruitsCont = document.querySelector('.best-fruits')

sl4.addEventListener('click', ()=>{
    bestFruitsCont.scrollLeft -= 265
})

sr4.addEventListener('click', ()=>{
    bestFruitsCont.scrollLeft += 265
})

const sl5 = document.querySelector('#sl5')
const sr5 = document.querySelector('#sr5')
const bestFriendCont = document.querySelector('.best-friend')

sl5.addEventListener('click', ()=>{
    bestFriendCont.scrollLeft -= 265
})

sr5.addEventListener('click', ()=>{
    bestFriendCont.scrollLeft += 265
})

//add items to cart/ remove items from cart
const items = [
    {
        id: 1,
        name: 'Bacardi Rum',
        price: 49.99,
        category: 'bar',
        title: 'BACARDI',
        img: './images/bar/bacardi.jpg'
    },
    {
        id: 2,
        name: "Ballantine's Whisky",
        price: 61.66,
        category: 'bar',
        title: "BALLANTINE'S",
        img: './images/bar/ballantine.jpg'
    },
    {
        id: 3,
        name: 'Budweiser Beer',
        price: 2.69,
        category: 'bar',
        title: 'BUDWEISER',
        img: './images/bar/budweiser2.jpg'
    },
    {
        id: 4,
        name: '265g Cashew Nuts',
        price: 4.99,
        category: 'bar',
        title: 'CASHEW NUTS',
        img: './images/bar/castanha.jpg'
    },
    {
        id: 5,
        name: 'Corona Beer',
        price: 5.00,
        category: 'bar',
        title: 'CORONA',
        img: './images/bar/corona.jpg'
    },
    {
        id: 6,
        name: 'Heineken Beer',
        price: 12.00,
        category: 'bar',
        title: 'HEINEKEN',
        img: './images/bar/heineken.jpg'
    },
    {
        id: 7,
        name: 'Jägermeister Liquor',
        price: 99.86,
        category: 'bar',
        title: 'JÄGERMEISTER',
        img: './images/bar/jager.jpg'
    },

    {
        id: 8,
        name: 'Jameson Whisky',
        price: 98.90,
        category: 'bar',
        title: 'JAMESON',
        img: './images/bar/jameson.jpg'
    },

    {
        id: 9,
        name: 'Stella Artois Beer',
        price: 8.49,
        category: 'bar',
        title: 'STELLA ARTOIS',
        img: './images/bar/stella.jpg'
    },
    
    {
        id: 10,
        name: "Jack Daniel's Honey",
        price: 104.00,
        category: 'bar',
        title: "JACK DANIEL'S",
        img: './images/bar/jack.jpg'
    },
    {
        id: 11,
        name: 'Mateus wine',
        price: 41.06,
        category: 'refresh',
        title: 'MATEUS',
        img: './images/vinhos/winemateus.jpg'
    },
    {
        id: 12,
        name: 'Borsao wine',
        price: 89.00,
        category: 'refresh',
        title: 'BORSAO',
        img: './images/vinhos/borsao.jpg'
    },
    {
        id: 13,
        name: 'Broadleaf wine',
        price: 89.00,
        category: 'refresh',
        title: 'BROADLEAF',
        img: './images/vinhos/broadleaf.jpg'
    },

    {
        id: 14,
        name: 'Corvo wine',
        price: 125.99,
        category: 'refresh',
        title: 'CORVO',
        img: './images/vinhos/corvowine.jpg'
    },
    {
        id: 15,
        name: "Jacob's Creek wine",
        price: 84.00,
        category: 'refresh',
        title: "JACOB'S CREEK",
        img: './images/vinhos/jacobcreek.jpg'
    },
    {
        id: 16,
        name: 'Rasteau wine',
        price: 248.00,
        category: 'refresh',
        title: 'RASTEAU',
        img: './images/vinhos/rasteau.jpg'
    },
    {
        id: 17,
        name: 'Sauvignon Blanc wine',
        price: 79.90,
        category: 'refresh',
        title: 'SAUVIGNON BLANC',
        img: './images/vinhos/sauvignonblanc.jpg'
    },
    {
        id: 18,
        name: 'Listerine mouthwash',
        price: 18.82,
        category: 'dailycare',
        title: 'LISTERINE',
        img: './images/care/antisséptico-bucal-listerine.png'
    },
    {
        id: 19,
        name: 'Moisturizing cream',
        price: 30.39,
        category: 'dailycare',
        title: 'CERAVE',
        img: './images/care/creme-hidratante-cerave.png'
    },
    {
        id: 20,
        name: 'Shampoo Head&Shoulders',
        price: 24.99,
        category: 'dailycare',
        title: 'HEAD&SHOULDERS',
        img: './images/care/head-and-shoulders.jpg'
    },
    {
        id: 21,
        name: 'Liquid Soap Palmolive',
        price: 9.99,
        category: 'dailycare',
        title: 'PALMOLIVE',
        img: './images/care/sabonete-liquido-palmolive.png'
    },
    {
        id: 22,
        name: 'Liquid Soap Granado',
        price: 25.49,
        category: 'dailycare',
        title: 'GRANADO',
        img: './images/care/sabonete_liquido_granado_tradicional.png'
    },
    {
        id: 23,
        name: 'Colgate Toothpaste',
        price: 9.99,
        category: 'dailycare',
        title: 'COLGATE',
        img: './images/care/colgate.jpg'
    },
    {
        id: 24,
        name: 'Pantene Conditioner',
        price: 12.79,
        category: 'dailycare',
        title: 'PANTENE',
        img: './images/care/conditioner.png'
    },
    {
        id: 25,
        name: 'Apple',
        price: 1.68,
        category: 'fnv',
        title: 'STRAIGHT FROM THE PRODUCER',
        img: './images/fnv/apple.jpg'
    },
    {
        id: 26,
        name: 'Avocado',
        price: 5.66,
        category: 'fnv',
        title: 'STRAIGHT FROM THE PRODUCER',
        img: './images/fnv/avocado.jpg'
    },
    {
        id: 27,
        name: 'Banana',
        price: 1.43,
        category: 'fnv',
        title: 'STRAIGHT FROM THE PRODUCER',
        img: './images/fnv/banana.jpg'
    },
    {
        id: 28,
        name: 'Broccoli',
        price: 10.99,
        category: 'fnv',
        title: 'STRAIGHT FROM THE PRODUCER',
        img: './images/fnv/brocolli.jpg'
    },
    {
        id: 29,
        name: 'Onion',
        price: 1.68,
        category: 'fnv',
        title: 'STRAIGHT FROM THE PRODUCER',
        img: './images/fnv/onion.jpg'
    },
    {
        id: 30,
        name: 'Pepper',
        price: 3.20,
        category: 'fnv',
        title: 'STRAIGHT FROM THE PRODUCER',
        img: './images/fnv/pepper.jpg'
    },
    {
        id: 31,
        name: 'Potato',
        price: 1.58,
        category: 'fnv',
        title: 'STRAIGHT FROM THE PRODUCER',
        img: './images/fnv/potato.jpg'
    },
    {
        id: 32,
        name: 'Glass aquarium',
        price: 147.22,
        category: 'pets',
        title: 'TETRA',
        img: './images/pets/glass-aquarium.png'
    },
    {
        id: 33,
        name: 'Natural parrot food',
        price: 15.74,
        category: 'pets',
        title: '3-D PET PRODUCTS',
        img: './images/pets/parrot-food.png'
    },
    {
        id: 34,
        name: 'Adult dog food',
        price: 3.69,
        category: 'pets',
        title: 'PEDIGREE',
        img: './images/pets/pedigreedogfood.jpg'
    },
    {
        id: 35,
        name: 'Tuna cat food',
        price: 3.39,
        category: 'pets',
        title: 'PURINA',
        img: './images/pets/purina-cat-food.jpg'
    },
    {
        id: 36,
        name: 'Meat dog food',
        price: 3.39,
        category: 'pets',
        title: 'PURINA',
        img: './images/pets/purina-dog-food.png'
    },
    {
        id: 37,
        name: 'Compact house small bird',
        price: 26.97,
        category: 'pets',
        title: 'A&E CAGE',
        img: './images/pets/smallbirdcage.png'
    },
    {
        id: 38,
        name: 'Salmon cat food',
        price: 3.65,
        category: 'pets',
        title: 'SALMON CAT FOOD',
        img: './images/pets/whiskas-cat-food.png'
    },

]

let inputValue = 1
const input = document.querySelectorAll('.qnty')
input.forEach((input) => {
  input.addEventListener('change', function (a) {
    if (a.target.value < 1) {
      a.target.value = 1
    }
    inputValue = a.target.value
  })
})

const buyButton = document.querySelectorAll('.buy-btn')
const cartItems = document.querySelector('.cart-items')
const cartEmpty = document.querySelector('.no-item')

let isEmpty = true

function addToCart(butao){
butao.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const productId = e.currentTarget.parentElement.dataset.id
    const existingCartItem = cartItems.querySelector(`[data-id="${productId}"]`)
    const inputValue = e.currentTarget.parentElement.querySelector('.qnty').value

    if (existingCartItem) {
      const quantitySelect = existingCartItem.querySelector('#qntd-cart')
      quantitySelect.value = parseInt(quantitySelect.value) + 1
      updatePrice(existingCartItem)
      updateTotal()
    } else {
      const selectedItem = items.find((item) => item.id === parseInt(productId))

      if (selectedItem) {
        const cartItem = document.createElement('div')
        cartItem.classList.add('cart-item')
        cartItem.dataset.id = selectedItem.id
        cartItem.innerHTML = `
          <img id="product" src="${selectedItem.img}">
          <div class="neat-item">  
            <span id="name">${selectedItem.name}</span>
            <span id="price">R$${(selectedItem.price * inputValue).toFixed(2)}</span>
            <div class="neat-price">    
                <input type="number" value="${inputValue}" id="qntd-cart" required>
                <button class="remove-btn">Remove</button>
            </div    
          </div>  
        `

        cartItems.appendChild(cartItem)
        updateTotal()

        const inputCart = cartItem.querySelector('#qntd-cart')
        inputCart.addEventListener('change', function (e) {
          if (e.target.value < 1) {
            e.target.parentElement.parentElement.parentElement.remove()
            addCartEmpty()
            updateTotal()
          } else {
            updatePrice(e.target.parentElement.parentElement.parentElement)
            updateTotal()
          }
        })

        const removeBtn = cartItem.querySelector(".remove-btn")
        removeBtn.addEventListener('click', function (e) {
          e.target.parentElement.parentElement.parentElement.remove()
          addCartEmpty()
          updateTotal()
        })
      }
    }

    if (cartItems.children.length > 0 && isEmpty) {
      cartItems.removeChild(cartEmpty)
      isEmpty = false
      updateTotal()
    }
  })
})
}

addToCart(buyButton)

//POPUP ADDED TO CART
let currentPopup = null

buyButton.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        let addedToCartMsg = `<div class="addedpopup">
        <span>Item added to cart</span>
        </div>`

        content.insertAdjacentHTML('beforeend', addedToCartMsg)

        let cartPopup = content.lastElementChild
        
        if (currentPopup) {
            currentPopup.classList.remove('show')
            currentPopup.classList.add('hide')
          }
      
          setTimeout(() => {
            cartPopup.classList.add('show')
          }, 50)
      
          currentPopup = cartPopup
      
          setTimeout(() => {
            cartPopup.classList.remove('show')
            cartPopup.classList.add('hide')
          }, 3700)
    })
})

function updatePrice(cartItem) {
  const selectedItem = items.find(
    (item) => item.id === parseInt(cartItem.dataset.id)
  )
  const quantitySelect = cartItem.querySelector('#qntd-cart')
  const priceSpan = cartItem.querySelector('#price')
  priceSpan.textContent = 'R$' + (selectedItem.price * quantitySelect.value).toFixed(2)
  updateTotal()
}

function addCartEmpty(){
    if (cartItems.children.length === 0) {
        cartItems.appendChild(cartEmpty)
        isEmpty = true
        updateTotal()
      }
}

const totalOrder = document.querySelector('.total-price')
const checkout = document.querySelector('.checkout-btn')

//GUARDAR CARRINHO NA LOCALSTORAGE

document.addEventListener('DOMContentLoaded', () => {
    const cartData = JSON.parse(localStorage.getItem('cart'))
    if (cartData && cartData.length > 0) {
      cartData.forEach(item => {
        const selectedItem = items.find(product => product.id === parseInt(item.id))
        if (selectedItem) {
          const cartItem = document.createElement('div')
          cartItem.classList.add('cart-item')
          cartItem.dataset.id = selectedItem.id
          cartItem.innerHTML = `
            <img id="product" src="${selectedItem.img}">
            <div class="neat-item">
                <span id="name">${selectedItem.name}</span>
                <span id="price">R$${(selectedItem.price * item.quantity).toFixed(2)}</span>
                <div class="neat-price">
                    <input type="number" value="${item.quantity}" id="qntd-cart" required>
                    <button class="remove-btn">Remove</button>
                </div>    
            </div>    
          `
  
          cartItems.appendChild(cartItem)
          updateTotal()
  
          const inputCart = cartItem.querySelector('#qntd-cart')
          inputCart.addEventListener('change', function (e) {
            if (e.target.value < 1) {
              e.target.parentElement.parentElement.parentElement.remove()
              addCartEmpty()
              updateTotal()
            } else {
              updatePrice(e.target.parentElement.parentElement.parentElement)
              updateTotal()
            }
          })
  
          const removeBtn = cartItem.querySelector(".remove-btn")
          removeBtn.addEventListener('click', function (e) {
            e.target.parentElement.parentElement.parentElement.remove()
            addCartEmpty()
            updateTotal()
          })
        }
      })
  
      if (cartItems.children.length > 0 && isEmpty) {
        cartItems.removeChild(cartEmpty)
        isEmpty = false
        updateTotal()
      }
    }
  })

function updateTotal() {
  let total = 0
  const cartItems = document.querySelectorAll('.cart-item')

    const cartData = []
  cartItems.forEach((cartItem) => {
    const productId = cartItem.dataset.id
    const quantity = cartItem.querySelector('#qntd-cart').value
    const priceElement = cartItem.querySelector('#price')
    const price = parseFloat(priceElement.textContent.replace('R$', ''))
    total += price

    cartData.push({
        id: productId,
        quantity: quantity,
        price: price
    })
  })
  totalOrder.textContent = 'R$' + total.toFixed(2)
  localStorage.setItem('cart', JSON.stringify(cartData))
}

//FAZER A SEARCH BAR FUNFAR

const search = document.querySelector('#search')
const searchInput = document.querySelector('.searchbar')
const searchFilter = document.querySelector('.select')
const clearHtml = document.querySelector('.clear-html')
const cleanHtmlResult = document.querySelector('.CLEAN-HTML')

function FilterHtml(element){
    clearHtml.innerHTML = ''
            cleanHtmlResult.innerHTML = ''
            element.forEach(item => {
                cleanHtmlResult.innerHTML += `
                <div class="bar-products">
                    <div class="drink-container search" data-id="${item.id}">
                        <img class="imgsearch" src="${item.img}">
                        <span class="bacardi-title">${item.title}</span>
                        <span class="bacardi-text">${item.name}</span>
                        <div class="qntyprice">
                            <span class="price">R$${item.price.toFixed(2).replace('.', ',')}</span>
                            <input class="qnty srch ui" value="1" min="1" type="number" required>
                        </div>
                        <button class="buy-btn srch">Add to cart</button>
                    </div>
                </div>`
            })
            searchBuyBtn = cleanHtmlResult.querySelectorAll('.buy-btn')
            addToCart(searchBuyBtn)
}

function performSearch(){
        const searchTerm = searchInput.value.toLowerCase()
        const selectedCategory = searchFilter.value

        const filteredItems = items.filter(item => {
            const matchesCategory = selectedCategory === 'Search in...' || item.category === selectedCategory
            const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm) || item.category.toLowerCase().includes(searchTerm)
            return matchesCategory && matchesSearchTerm
        })
        
        if(filteredItems.length > 0){
            FilterHtml(filteredItems)
        }else{
            cleanHtmlResult.innerHTML = `<h3 class="no-result">No results found.</h3>`
        }
}

search.addEventListener('click', performSearch)

searchInput.addEventListener('keyup', e =>{
    if(e.keyCode === 13){
        performSearch()
    }
})


//PRENDER NAVBAR NO TOPO

const navContainer = document.querySelector('.sticky-navbar')
const smoothTransition = document.querySelector('.stick-placeholder')

window.addEventListener('scroll', ()=>{

    if(window.scrollY > navContainer.offsetTop){
        navContainer.classList.add('stick')
        smoothTransition.style.display = "block"
    }else{
        navContainer.classList.remove('stick')
        smoothTransition.style.display = "none"
    }
})

//FAZER CATIGURIAS SIDEBARR

const categories = document.querySelectorAll('.categ')
categories.forEach((e)=>{
    e.addEventListener('click', (element)=>{
        const filteredByCategory = items.filter(item => item.category === element.target.parentElement.dataset.id)
        FilterHtml(filteredByCategory)
    })
})
