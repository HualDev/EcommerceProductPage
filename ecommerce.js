let productImage = document.getElementsByClassName('productImage')
const productImage1 = document.getElementsByClassName('productImage1')
let product = document.getElementById('product')
const product1 = document.getElementById('product1')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let quantity = document.getElementById('quantity')
let productsCart = document.getElementById('productsCart')
let addButton = document.getElementById('addButton')
let previous = document.getElementById('previous')
let next = document.getElementById('next')
const previous1 = document.getElementById('previous1')
const next1 = document.getElementById('next1')
const menuImage = document.getElementById('menuImage')
const subMenu = document.getElementById('subMenu')
const closeImage = document.getElementById('closeImage')
const products = document.getElementById('products')
const products1 = document.getElementById('products1')
const closeImage1 = document.getElementById('closeImage1')
const body = document.getElementById('body')
const change1 = document.getElementById('change1')
const productImages1 = document.getElementById('productImages1')
const cartDetails = document.getElementById('cartDetails')
const cart = document.getElementById('cart')
let productPrice =document.getElementById('productPrice')
let nothing = document.getElementById('nothing')
let checkButton = document.getElementById('checkButton')
let quanty = document.getElementById('quanty')
let total = document.getElementById('total')
const decrease = document.getElementById('delete')

checkButton.addEventListener('click',()=>{
    cartDetails.style.display='none'
})

decrease.addEventListener('click',()=>{
    if(quanty.innerHTML==0){
        total.textContent=`$0.00`
        productsCart.style.display='none'
        return
    }
    else{
        quanty.innerHTML--
        quanty.textContent=quanty.textContent
        total.textContent=`$${quanty.textContent*125}.00`
        productsCart.textContent=quanty.textContent
    }
})

cart.addEventListener('click',()=>{
    if(productsCart.textContent==0){
        cartDetails.style.display='block'
        productPrice.style.display='none'
        nothing.style.display='flex'
        checkButton.style.display='none'
    }
    else{
        cartDetails.style.display='block'
        nothing.style.display='none'
        productPrice.style.display='flex'
        checkButton.style.display='flex'
    }
})

for(let i=0;i<productImage.length;i++){
    productImage[i].addEventListener('click',()=>{
    product.src=(`./images/image-product-${i+1}.jpg`)
    })
}

for(let i=0;i<productImage1.length;i++){
    productImage1[i].addEventListener('click',()=>{
    product1.src=(`./images/image-product-${i+1}-thumbnail.jpg`)
    })
}

plus.addEventListener('click',()=>{
    quantity.innerHTML++
    quantity.textContent=quantity.textContent
})

minus.addEventListener('click',()=>{
    if(quantity.innerHTML==0){
        return
    }
    else{
        quantity.innerHTML--
        quantity.textContent=quantity.textContent
    }
})

addButton.addEventListener('click',()=>{
    if(quantity.textContent==0){
        productsCart.style.display='none'
    }
    else{
        productsCart.style.display='flex'
        productsCart.textContent=quantity.textContent
        quanty.textContent=quantity.textContent
        total.textContent=`$ ${quantity.textContent*125}.00`
    }    
})

let number = 1

next.addEventListener('click',()=>{
    product.src=`./images/image-product-${number+1}.jpg`
    if(number<3){
        number++
    }else{
        number=0
        product.src=`./images/image-product-${number+1}.jpg`
    }    
})

next1.addEventListener('click',()=>{
    product1.src=`./images/image-product-${number+1}-thumbnail.jpg`
    if(number<3){
        number++
    }else{
        number=0
        product1.src=`./images/image-product-${number+1}-thumbnail.jpg`
    }    
})

previous.addEventListener('click',()=>{
    number--
    if(number===0){
        number=4
        product.src=`./images/image-product-${number}.jpg`
    }
    else{
        product.src=`./images/image-product-${number}.jpg`
    }
})

previous1.addEventListener('click',()=>{
    number--
    if(number===0){
        number=4
        product1.src=`./images/image-product-${number}-thumbnail.jpg`
    }
    else{
        product1.src=`./images/image-product-${number}-thumbnail.jpg`
    }
})

menuImage.addEventListener('click',()=>{
    subMenu.style.display='block'
})

closeImage.addEventListener('click',()=>{
    subMenu.style.display='none'
})

product.addEventListener('click',()=>{
    products1.style.display='block'
    products1.style.position='absolute'
    products1.style.margin='auto'
    products1.style.top='0'
    products1.style.right='0'
    products1.style.bottom='0'
    products1.style.left='0'
    body.style.backgroundColor='rgba(0, 0, 0, 0.7)'
    main.style.opacity='0.1'
    change1.style.display='flex'
    productImages1.style.marginTop='10rem'
    productImages1.style.marginLeft='1.2rem'
})

closeImage1.addEventListener('mouseover',()=>{
    closeImage1.src='./images/icon-close-orange.svg'
})

closeImage1.addEventListener('mouseout',()=>{
    closeImage1.src='./images/icon-close-white.svg'
})

closeImage1.addEventListener('click',()=>{
    products1.style.display='none'
    body.style.backgroundColor='transparent'
    main.style.opacity='1'
})