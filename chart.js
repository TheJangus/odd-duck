

//Update data arrays for chart
function updateChartArrays() {
    for (let i = 0; i < Product.allProducts.length; i++) {
      names[i] = Product.allProducts[i].name;
      votes[i] = Product.allProducts[i].votes;
    }
  }
    
    // 2 arguments - 1st canvas element --2nd  an obkect - or nothing if we remove mychartonj
    // const myChart = new Chart(ctx, myChartObj{
    //   type: 'doughnut',
    //   data: data,

    //Chart Stuff
let data = {
    labels: names,
    datasets: [
      {
        label: 'Votes per Product',
        data: votes,
        backgroundColor: [
          'rgb(255,18,0)',
          'rgb(232,62,0)',
          'rgb(255,117,0)',
          'rgb(232,146,0)',
          'rgb(255,195,0)',
          'rgb(255,205,0)',
          'rgb(232,218,0)',
          'rgb(192,255,0)',
          'rgb(68,232,0)',
          'rgb(0,255,35)',
          'rgb(0,255,112)',
          'rgb(0,232,189)',
          'rgb(0,210,255)',
          'rgb(0,111,232)',
          'rgb(0,33,255)',
          'rgb(0,80,255)',
          'rgb(131,0,232)',
          'rgb(206,0,255)',
          'rgb(232,0,195)',
          'rgb(255,0,83)'
        ],
  
        hoverBackgroundColor: [
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon',
          'lemonchiffon'
        ]
      }]
  };
  
  function drawChart() {
    let ctx = document.getElementById('productChart').getContext('2d');
    new Chart(ctx,{
      type: 'doughnut',
      data: data,
      options: {
        responsive: false,
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            max: 20,
            min: 0,
            stepSize: 1.0
          }
        }]
      }
    });
  }