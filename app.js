const phones = [
    {
        brand: 'Samsung ',
        model: 'Galaxy A55',
        ram: 12,
        rom: 256,
        camera: '50 megapixel',
        price: 370.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg'
    },
    {
        brand: 'Apple ',
        model: 'iPhone XS Max',
        ram: 4,
        rom: 128,
        camera: '12 megapixel',
        price: 202.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg'
    },
    {
        brand: 'Apple ',
        model: 'iPhone 11',
        ram: 4,
        rom: 128,
        camera: '12 megapixel',
        price: 252.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg'
    },
    {
        brand: 'Samsung ',
        model: 'Galaxy S24 Ultra',
        ram: 12,
        rom: 512,
        camera: '200 megapixel',
        price: 999.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg'
    },
    {
        brand: 'Sony ',
        model: 'Xperia 1V',
        ram: 12,
        rom: 256,
        camera: '48 megapixel',
        price: 858.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg'
    },
    {
        brand: 'Xiaomi ',
        model: 'Poco F5',
        ram: 8,
        rom: 256,
        camera: '48 megapixel',
        price: 	379.99,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f5-2.jpg'
    },
    {
        brand: 'Google ',
        model: 'Pixel 8 Pro',
        ram: 12,
        rom: 512,
        camera: '50 megapixel',
        price: 999.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg'
    },
    {
        brand: 'Xiaomi ',
        model: 'Redmi Note 13 Pro+',
        ram: 16,
        rom: 512,
        camera: '108 megapixel',
        price: 329.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro-plus-int.jpg'
    },
]

let div = document.querySelector('.pl-row-1');
for (let i = 0; i < phones.length; i++) {
    div.innerHTML += `
    <div class="pl-card pl-card-1">
        <img class="pl-card-img" src=${phones[i].img} alt="">
        <div class="d-flex pl-card-in flex-column">
            <p class="pl-card-text-1">${phones[i].brand+phones[i].model}</p>
            <p class="pl-card-text-2">
                <sup>$</sup>
                    ${phones[i].price}
            </p>
            <div class="d-flex justify-content-between">
                <p class="pl-card-text-3">
                    <sup>Rs</sup>
                    ${phones[i].price+20}
                </p>
                <div class="price-diff-saving">${Math.ceil(Math.random()*20)}% OFF</div>
            </div>
            <div class='text-center'>
                <button class="CartBtn" onclick='addToCart(${i})'>
                    <span class="IconContainer"> 
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                    </span>
                    <p class="text">Add to Cart</p>
                </button>
            </div>
        </div>
    </div>
    `
}
let addedItems;
let cartItems = JSON.parse(localStorage.getItem('cartItems'));
if (cartItems) {
    addedItems = cartItems;
}else{
    addedItems = [];
}
let cartItems2 = JSON.parse(localStorage.getItem('cartItems2'));
if (cartItems2) {
    addedItems = cartItems2;
}
function addToCart(index) {
    if (addedItems.includes(phones[index])) {
        phones[index].quantity += 1;
    }else{
        addedItems.push(phones[index]);
        phones[index].quantity = 1;
    }
    console.log(addedItems);
}

function goToCart() {
    localStorage.setItem('cartItems', JSON.stringify(addedItems));
    window.location = 'cart.html';
}