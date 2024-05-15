let cartItems = JSON.parse(localStorage.getItem('cartItems'));
if (cartItems.length > 0) {
    console.log(cartItems);
}else{
    console.log('no items found');
}
let cartWrapper = document.querySelector('.pl-row-1');
let total;
let totalAmount = document.querySelector('.totalAmount');
function renderItems (){
    for (let i = 0; i < cartItems.length; i++) {
        total += cartItems[i].price*cartItems[i].quantity;
        cartWrapper.innerHTML += `
        <div class="pl-card pl-card-1">
            <img class="pl-card-img" src=${cartItems[i].img} alt="">
            <div class="d-flex pl-card-in flex-column">
                <p class="pl-card-text-1">${cartItems[i].brand+cartItems[i].model}</p>
                <p class="pl-card-text-2">
                    <sup>$</sup>
                        ${cartItems[i].price}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="mb-0">
                        Quantity: 
                        <p class="text-primary m-0 p-1" onclick='increaseQuantity(${i})'>+</p>
                        <span>
                        ${cartItems[i].quantity}
                        </span>
                        <p class="text-primary m-0 p-1" onclick='decreaseQuantity(${i})'>-</p>
                    </p>
                </div>
                <div class='text-center'>
                    
                </div>
            </div>
        </div>
        `
    }
    totalAmount.innerHTML = `Total Amount = ${total}`
}
renderItems();
function increaseQuantity(i) {
    cartWrapper.innerHTML = '';
    cartItems[i].quantity += 1;
    renderItems();
}
function decreaseQuantity(i) {
    cartWrapper.innerHTML = '';
    cartItems[i].quantity -= 1;
    renderItems();
}