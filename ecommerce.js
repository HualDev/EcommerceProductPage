let productImage = document.getElementsByClassName('productImage')
let product = document.getElementById('product')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let quantity = document.getElementById('quantity')
let productsCart = document.getElementById('productsCart')
let addButton = document.getElementById('addButton')
let previous = document.getElementById('previous')
let next = document.getElementById('next')
const menuImage = document.getElementById('menuImage')
const subMenu = document.getElementById('subMenu')
const closeImage = document.getElementById('closeImage')
const products = document.getElementById('products')
const products1 = document.getElementById('products1')
const closeImage1 = document.getElementById('closeImage1')
const body = document.getElementById('body')



for(let i=0;i<productImage.length;i++){
    productImage[i].addEventListener('click',()=>{
    product.src=(`./images/image-product-${i+1}.jpg`)
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
    }    
})

let number = 1

next.addEventListener('click',()=>{
    product.src=`./images/image-product-${number+1}.jpg`
    if(number<3){
        number++
    }else{
        number=0
    }    
})

previous.addEventListener('click',()=>{
    number--
    if(number==0){
        number=4
        product.src=`./images/image-product-${number}.jpg`
    }
    else{
        product.src=`./images/image-product-${number}.jpg`
    }
})

menuImage.addEventListener('click',()=>{
    subMenu.style.display='block'
})

closeImage.addEventListener('click',()=>{
    subMenu.style.display='none'
})

products.addEventListener('click',()=>{
    products1.style.display='block'
    products1.style.position='absolute'
    products1.style.margin='auto'
    products1.style.top='0'
    products1.style.right='0'
    products1.style.bottom='0'
    products1.style.left='0'
    body.style.backgroundColor='rgba(0, 0, 0, 0.7)'
})