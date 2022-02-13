function inputValueUpdate(product, price , isIncreasing){
    const input = document.getElementById(product + '-number');
    let inputValue = input.value ;

    if(isIncreasing){
        input.value = parseInt(inputValue) +1 ;
    }
    else if (inputValue > 0){
        input.value = parseInt(inputValue) - 1 ;
    }
    inputValue = input.value 
    const total = document.getElementById(product + '-total');
    total.innerText = inputValue *price;
    totalPrice();
  
}
function totalPrice(){
    const phoneQuantity = getInputValue('phone');
    const caseQuantity = getInputValue ('case');
    const phoneTotalPrice = parseInt(phoneQuantity) * 1219 ;
    const caseTotalPrice = parseInt(caseQuantity) * 59 ;
    const SubTotalPrice = phoneTotalPrice + caseTotalPrice ;
    const tax = SubTotalPrice / 10 ;
    const totalPrice = SubTotalPrice + tax ;
    // update on the html
    document.getElementById('sub-total').innerText = SubTotalPrice;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
//Get input Value
function getInputValue (product){
    const productText = document.getElementById(product+ '-number');
    const productInputValue = productText .value ;
    return productInputValue;

}


// Click Handelars
document.getElementById('case-plus').addEventListener('click', function(){
    inputValueUpdate('case', 59 ,true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    inputValueUpdate('case', 59 ,false);
});
document.getElementById('phone-plus').addEventListener('click', function(){
    inputValueUpdate('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    inputValueUpdate('phone', 1219, false);
});
