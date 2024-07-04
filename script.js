
const thumbnails = document.querySelectorAll('.thumbnail');
const thumbnail1 = document.querySelector('.thumbnail1');
const colorOptions = document.querySelectorAll('.color-option');
const sizeOptions = document.querySelectorAll('input[name="size"]');
const quantityInput = document.querySelector('input[type="number"]');
const addToCartButton = document.querySelector('.add-to-cart');
const addToCartMessage = document.querySelector('.add-to-cart-message');


thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    thumbnail1.src = thumbnail.src;
  });
});

colorOptions.forEach((colorOption) => {
  colorOption.addEventListener('click', () => {
    colorOptions.forEach((option) => option.classList.remove('selected'));
    colorOption.classList.add('selected');
  });
});

sizeOptions.forEach((sizeOption) => {
  sizeOption.addEventListener('click', () => {
    sizeOptions.forEach((option) => option.nextElementSibling.classList.remove('selected'));
    sizeOption.nextElementSibling.classList.add('selected');
  });
});

addToCartButton.addEventListener('click', () => {
  addToCartMessage.style.display = 'block';
  setTimeout(() => {
    addToCartMessage.style.display = 'none';
  }, 2000);
});

quantityInput.addEventListener('input', () => {
  if (quantityInput.value < 1) {
    quantityInput.value = 1;
  }
});

function increment() {
  const quantityInput = document.getElementById('quantity');
  let quantity = parseInt(quantityInput.value);
  quantity++;
  quantityInput.value = quantity;
}

function addToCart() {
  
  const selectedColorElement = document.querySelector('.color-option.selected');
  const selectedColor = selectedColorElement.getAttribute('data-color');

  
  const selectedSize = document.querySelector('input[name="size"]:checked').value;

  
  const cartMessage = document.getElementById('cart-message');
  cartMessage.textContent = `Embrace Sideboard with Color ${selectedColor} and Size ${selectedSize} added to cart`;
  cartMessage.style.display = 'block';
}


document.querySelectorAll('.color-option').forEach(option => {
  option.addEventListener('click', function() {
    document.querySelectorAll('.color-option').forEach(el => el.classList.remove('selected'));
    this.classList.add('selected');
  });
});

