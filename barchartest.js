google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Artist', '@Tweets',{ role: 'style' }],
        ['The 1975', 3622, '#85e085'],
        ['Adele', 2229, '#ffd633'],
        ['Coldplay', 2102, '#ffd633'],
        ['Zara Larsson', 1435, '#1ac6ff'],
        ['Craig David', 1243, '#1ac6ff'],
        ['Robbie Williams', 1209, '#1ac6ff'],
        ['John Legend', 451, '#1ac6ff'],
        ['Izzy Bizu', 446, '#85e085'],
        ['Kaiser Chief', 415, '#1ac6ff'],
        ['David Bowie', 274, '#ffd633'],
        ['Lukas Graham', 247, '#1ac6ff'],
        ['Emeli Sandé', 82, '#1ac6ff'],
        ['Jess Glynne', 27, '#ffd633'],
        ['Calvin Harris', 12, '#ffd633']
      ]);

      var options = {
        title: 'How many tweets each artist has received?',
        chartArea: {width: '500', height: '350'},
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

      var chart = new google.visualization.BarChart(document.getElementById('barchart_div'));

      chart.draw(data, options);
    }
    $(window).resize(function(){
drawBasic();
});
