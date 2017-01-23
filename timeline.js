
    // Load the Visualization API and the core charts package.
    google.load('visualization', '1.0', {
        'packages': ['corechart']
    });
    // Set a callback to run when the Google Visualization API is fully loaded.
    google.setOnLoadCallback(getData);
    function getData() {
        // this is the key for the spreadhseet with your data in it, you can copy this from the URL for the sheet
        var key = "1qNXsGjiCt3rJ1YX07hPRxvhGYhGU0BHMJb5uGmVFsxI";
        // this is the range in the sheet to find the data. I decided to start it at 18 instead of 16 (the hour in which I started to run the code) because from 16 to 18 there wasn't so many tweets and the line graph was flat.
        var range = "A1:B326";
        // get the date from the range specified
        var query = new google.visualization.Query('https://docs.google.com/spreadsheet/ccc?key=' + key + '&usp=sharing&range=' + range);
        // Send the query with a callback function, to be executed when the data is reeady
        query.send(drawChart);
    }
    // Callback that creates and populates a data table,
    // instantiates the line chart, passes in the data and
    // draws it.
    function drawChart(response) {
        // dig out the data from the response to the query
        var data = response.getDataTable();
        // there are squillions of cool options for your charts, shove them into this JSON object
        // read more https://developers.google.com/chart/interactive/docs/gallery/linechart
        var options = {
            'title': '#BBCMusicAwards, Tweet Volume (18:00 - 23:30, Decemeber 12th)',
            'width': "100%",
            'height': 400,
            'legend': ({position: "in"}),
             colors:['#1ac6ff', '#004411'],

        };
        // Instantiate and draw our line chart, passing in the options JSON object.
        var chart = new google.visualization.LineChart(document.getElementById('chart_div1'));
        chart.draw(data, options);

    }
    $(window).resize(function(){
    drawChart();
});
