let cartItems = JSON.parse(localStorage.getItem('cartItems'));
if (cartItems.length > 0) {
    console.log(cartItems);
}else{
    console.log('no items found');
}