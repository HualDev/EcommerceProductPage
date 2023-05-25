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