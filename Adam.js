google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic2);

function drawBasic2() {

      var data = google.visualization.arrayToDataTable([
        ['Artist', '@Tweets',{ role: 'style' }],
        ['ADAM LAMBERT', 3632, '#85e085'],
        ['The 1975', 3622, '#ffd633'],
        ['Adele', 2229, '#ffd633'],
        ['Coldplay', 2102, '#ffd633'],
        ['Zara Larsson', 1435, '#ffd633'],
        ['Craig David', 1243, '#ffd633'],
        ['Robbie Williams', 1209, '#ffd633'],
      ]);

      var options = {
        title: 'Adam Lambert VS the rest',
        chartArea: {width: '450', height: '350'},
        height: 400,
        legend: { position: 'none' },
        hAxis: {
          title: 'Total Tweets',
          minValue: 0
        },
        vAxis: {
          title: 'Artists'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('barchart2_div'));

      chart.draw(data, options);
    }
    $(window).resize(function(){
drawBasic2();
});
