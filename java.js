let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// //Open Cart
cartIcon.onclick = () =>{
  cart.classList.add("active");
};
// //Close Cart
closeCart.onclick = () =>{
  cart.classList.remove("active");
};

//Cart Working JS

if(document.readyState =='loading'){
  document.addEventListener("DOMContentLoaded", ready);
}else{
  ready();
}

//Making Function
function ready(){

  //Remove Items From Cart
  var reomveCartButtons = document.getElementsByClassName('cart-remove');
  console.log(reomveCartButtons)

  for(i = 0; i < reomveCartButtons.length; i++){
  var button = reomveCartButtons[i]
  button.addEventListener("click" , removeCartItem)
}
 //Quantity Changes
 var quantityInputs = document.getElementsByClassName('cart-quantity');
 for(i = 0; i < quantityInputs.length; i++){
  var input = quantityInputs[i]
  input.addEventListener("change" , quantityChanged);
 }

}

//Remove Items From Cart

function removeCartItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
//Quantity Changes
function quantityChanged(event){
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1;
}   
  updatetotal();
  
}
//Update Total

function updatetotal(){
var cartContent = document.getElementsByClassName('cart-content')[0]
var cartboxs = document.getElementsByClassName('cart-box')
var total = 0;
for(i = 0; i < cartboxs.length; i++){
  var cartbox = cartboxs[i]
  var priceElement = cartbox.getElementsByClassName('cart-price')[0]
  var quantityElement = cartbox.getElementsByClassName('cart-quantity')[0]
  var price = parseFloat(priceElement.innerText.replace("$", ""))
  var quantity = quantityElement.value;
  total = total + (price * quantity);

  document.getElementsByClassName('total-price')[0].innerText = "$" +total;
}

}
