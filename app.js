'use strict'
//Make an object


// array of products
Product.allProducts = [];
Product.activeSet = [];
Product.lastDisplayed = [];
Product.totalVotes = 25;
let clicks = 25
// arrays to hold data for the chart
let votes = [];
let names = [];

// products Section
let section = document.getElementById('imagessections');
// results Element
let resultsList = document.getElementById('resultsList');

// referring to specific images
let productOne = document.getElementById('productOne');
let productTwo = document.getElementById('productTwo');
let productThree = document.getElementById('productThree');

function Product(name, filepath, altText) {
  this.name = name;
  this.filepath = filepath; /*'img/${name}.${fileExtension}';*/
  this.altText = altText;
  this.votes = 0;
  this.views = 0;
  Product.allProducts.push(this);
}

// make new Products instances
new Product('Luggage', 'img/bag.jpg', 'Bag');
new Product('Banana Slicer', 'img/banana.jpg', 'Banana Slicer');
new Product('Bathroom Buddy', 'img/bathroom.jpg', 'Bathroom');
new Product('Fashion Wellies', 'img/boots.jpg', 'Boots');
new Product('Breakfast Machine', 'img/breakfast.jpg', 'Breakfast');
new Product('Meatball Bubblegum', 'img/bubblegum.jpg', 'Bubblegum');
new Product('Chair', 'img/chair.jpg', 'Chair');
new Product('Cthulhu', 'img/cthulhu.jpg', 'Cthulhu');
new Product('Duck Muzzle', 'img/dog-duck.jpg', 'Dog Duck');
new Product('Dragon Meat', 'img/dragon.jpg', 'Dragon Meat');
new Product('Practical Cutlery', 'img/pen.jpg', 'Pen');
new Product('Pet Broom', 'img/pet-sweep.jpg', 'Pet Broom');
new Product('Pizza Scissors', 'img/scissors.jpg', 'Scissors');
new Product('Shark Attack', 'img/shark.jpg', 'Shark');
new Product('Baby Broom', 'img/sweep.png', 'Sweep');
new Product('Tauntaun', 'img/tauntaun.jpg', 'Tauntaun');
new Product('Unicorn Meat', 'img/unicorn.jpg', 'Unicorn Meat');
new Product('Watering Can', 'img/water-can.jpg', 'Watering Can');
new Product('Wine Glass', 'img/wine-glass.jpg', 'Wine Glass');

//Retrieving data from local storage, if it exists
if (localStorage.getItem('storedProducts') !== null) {
  console.log('Data found');
  Product.allProducts = JSON.parse(localStorage.getItem('storedProducts'));
} else {
  console.log('Not found');
  localStorage.setItem('storedProducts', JSON.stringify(Product.allProducts));
}


//  randomly display products
function randomProduct() {
  let randomOne = Math.floor(Math.random() * Product.allProducts.length);
  let randomTwo = Math.floor(Math.random() * Product.allProducts.length);
  let randomThree = Math.floor(Math.random() * Product.allProducts.length);
  // confirm no duplicate photos 
  //   while(allProducts.length < 3){
  //   let allProducts = allProducts();
  //   if(!allProducts.includes(randomProduct)){
  //     allProducts.push(randomProduct);
  //   }
  // }
  // let randomOne = allProducts.shift();
  // let randomTwo = allProducts.shift();
  // let randomThree = allProducts.shift();

  while (Product.lastDisplayed.includes(randomOne) || Product.lastDisplayed.includes(randomTwo) || Product.lastDisplayed.includes(randomThree) || randomOne === randomTwo || randomTwo == randomThree || randomThree == randomOne) {
    randomOne = Math.floor(Math.random() * Product.allProducts.length);
    randomTwo = Math.floor(Math.random() * Product.allProducts.length);
    randomThree = Math.floor(Math.random() * Product.allProducts.length);
  }
  // update the images
  productOne.src = Product.allProducts[randomOne].filepath;
  productTwo.src = Product.allProducts[randomTwo].filepath;
  productThree.src = Product.allProducts[randomThree].filepath;
  productOne.altText = Product.allProducts[randomOne].altText;
  productTwo.altText = Product.allProducts[randomTwo].altText;
  productThree.altText = Product.allProducts[randomThree].altText;

  // incremental views on all images
  Product.allProducts[randomOne].views++;
  Product.allProducts[randomTwo].views++;
  Product.allProducts[randomThree].views++;

  Product.lastDisplayed[0] = randomOne;
  Product.lastDisplayed[1] = randomTwo;
  Product.lastDisplayed[2] = randomThree;
}

// event Handler function
function newThree(event) {
  if (event.target.id === 'productsSection') {
    return alert('Please click on an image.');
  }
  // decrement votes
  Product.totalVotes--;
  clicks--;
  document.getElementById('selectTracker').textContent = clicks

  //  count indiv... votes
  for (let i = 0; i < Product.allProducts.length; i++) {
    if (event.target.altText === Product.allProducts[i].altText) {
      Product.allProducts[i].votes++;
      updateChartArrays();
    }
  }
  if (clicks < 1) {
    section.removeEventListener('click', newThree);
    productSection.innerHTML = '';
    localStorage.setItem('storedProducts', JSON.stringify(Product.allProducts));
    drawChart();
  }
  randomProduct();
}

//  event listener
section.addEventListener('click', newThree);
resultsBtn.addEventListener('click', handleShowResults);

randomProduct();
