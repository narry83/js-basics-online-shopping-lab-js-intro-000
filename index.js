var cart = [];
//var itemObj=[ { itemName:"bananas", itemPrice: 17 }]

function getCart() {
  //cart=itemObj;
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here

 var itemObj={itemName:item, itemPrice:Math.floor((Math.random() * 100) + 1)}
 getCart().push(itemObj)

 return `${item} has been added to your cart.`
}

addToCart('Apple')


function viewCart() {
  // write your code here
  if (getCart().length===0){
    var message=`Your shopping cart is empty.`
  }
  else{
    var message=`In your cart,`
    for (var i=0:getCart().length:i++){

    }
  }
  return message
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
