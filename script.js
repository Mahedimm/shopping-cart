


function getTotalProduct(product){
    const productCountText =document.getElementById(product + '-number');
    let productCountValue  = parseFloat(productCountText.value);

    return productCountValue;

}

function calculateTotal(){
    const phonePriceTotal = getTotalProduct("phone")*1219;
    const caseTotalPrice = getTotalProduct("case")*59;

    const subTotal = phonePriceTotal + caseTotalPrice;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    //update html
    document.getElementById('sub-total').innerText =  subTotal;
    document.getElementById('tax-amount').innerText =  tax;
    document.getElementById('total-price').innerText =  total;
}


function product(product,price,flag){

    const productCountText = document.getElementById(product + '-number');

    // let productCountValue  = parseFloat(productCountText.value);
    
    if (flag ==true ){
        productCountText.value = getTotalProduct(product)+1;
       
    }
    else if (flag ==false &&  productCountText.value > 0){
        productCountText.value = getTotalProduct(product)-1;

    }
    //Total price
    const priceTotalText = document.getElementById(product +'-total');
   
    priceTotalText.innerText = getTotalProduct(product) * price;

    //Total calculation
    calculateTotal();


    

}


document.querySelector('#phone-plus').addEventListener("click",()=>{
 
    product("phone",1219,true);
    
})
document.querySelector('#phone-minus').addEventListener("click",()=>{
 
    product("phone",1219,false);
})
document.querySelector('#case-plus').addEventListener("click",()=>{
 
    product("case",59,true);
    
})
document.querySelector('#case-minus').addEventListener("click",()=>{
 
    product("case",59,false);
})


