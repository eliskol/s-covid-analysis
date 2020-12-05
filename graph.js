var ctx = document.getElementById("myChart").getContext("2d");

const colors = {
  green: {
    fill: '#e0eadf',
    stroke: '#5eb84d',
  },
  lightBlue: {
    stroke: '#6fccdd',
  },
  darkBlue: {
    fill: '#92bed2',
    stroke: '#3282bf',
  },
  purple: {
    fill: '#8fa8c8',
    stroke: '#75539e',
  },
};

const loggedIn = [26, 36, 42, 38, 40, 30, 12];
const available = [34, 44, 33, 24, 25, 28, 25];
const availableForExisting = [16, 13, 25, 33, 40, 33, 45];
const unavailable = [5, 9, 10, 9, 18, 19, 20];
const xData = [13, 14, 15, 16, 17, 18, 19];

const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: date,
    datasets: [{
      label: "Positive Tests",
      fill: true,
      backgroundColor: colors.darkBlue.fill,
      pointBackgroundColor: colors.darkBlue.stroke,
      borderColor: colors.darkBlue.stroke,
      pointHighlightStroke: colors.darkBlue.stroke,
      borderCapStyle: 'butt',
      data: posTests,
    },
              {
      label: "Total COVID-19 Tests Administered",
      fill: true,
      backgroundColor: colors.purple.fill,
      pointBackgroundColor: colors.purple.stroke,
      borderColor: colors.purple.stroke,
      pointHighlightStroke: colors.purple.stroke,
      borderCapStyle: 'butt',
      data: totTests,

    }]
  },
  options: {
    responsive: false,
    // Can't just just `stacked: true` like the docs say
    scales: {
      yAxes: [{
        stacked: true,
      }]
    },
    animation: {
      duration: 750,
    },
  }
});
