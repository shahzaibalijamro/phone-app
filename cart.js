let cartItems = JSON.parse(localStorage.getItem('cartItems'));
if (cartItems) {
    console.log(cartItems);
}else{
    console.log('no items found');
}
let cartWrapper = document.querySelector('.pl-row-1');
let totalAmount = document.querySelector('.totalAmount');
function renderItems (){
    let total = 0;
    if (cartItems) {
        for (let i = 0; i < cartItems.length; i++) {
            cartWrapper.innerHTML += `
            <div class="pl-card pl-card-1">
                <img class="pl-card-img" src=${cartItems[i].img} alt="">
                <div class="d-flex pl-card-in flex-column">
                    <p class="pl-card-text-1">${cartItems[i].brand+cartItems[i].model}</p>
                    <p class="pl-card-text-2">
                        <sup>$</sup>
                            ${cartItems[i].price*cartItems[i].quantity}
                    </p>
                    <div class="d-flex mt-1 justify-content-between align-items-center">
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
            total += cartItems[i].price*cartItems[i].quantity;
            totalAmount.innerHTML = `Total Amount = ${total} $`
        }
    }else{
        cartWrapper.innerHTML += `
            <h2>No Item Found</h2>
            `
    }
}
renderItems();
function increaseQuantity(i) {
    cartWrapper.innerHTML = '';
    cartItems[i].quantity += 1;
    renderItems();
}
let noItemFound = document.querySelector('.noItemFound');
noItemFound.style.display = 'None';
function decreaseQuantity(i) {
    if (cartItems[i].quantity > 1) {
        cartWrapper.innerHTML = '';
        cartItems[i].quantity -= 1;
    }else{
        cartWrapper.innerHTML = '';
        cartItems.splice(i,1);
    }
    renderItems();
    if (cartItems.length < 1) {
        totalAmount.style.display = 'None';
        noItemFound.style.display = 'Block';
        noItemFound.innerHTML = 'No Item Found'
    }
}