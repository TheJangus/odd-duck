

//Update data arrays for chart
function updateChartArrays() {
    for (let i = 0; i < Product.allProducts.length; i++) {
      names[i] = Product.allProducts[i].name;
      votes[i] = Product.allProducts[i].votes;
    }
  }

  function drawChart() {
    let ctx = document.getElementById('productStats').getContext('2d');
    new Chart(ctx,{
      type: 'doughnut',
      data: data,