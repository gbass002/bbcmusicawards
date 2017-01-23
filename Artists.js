    // Load the Visualization API and the core charts package.
    google.load('visualization', '1.0', {
        'packages': ['corechart']
    });
    // Set a callback to run when the Google Visualization API is fully loaded.
    google.setOnLoadCallback(getData);
    function getData() {
        // this is the key for the spreadhseet with your data in it, you can copy this from the URL for the sheet
        var key = "1BSeQ_NJIAmFNeus2px9o6wPU7GQyDW8auJayrtslWhc";
        // this is the range in the sheet to find the data
        var range = "A1:F184";
        // get the date from the range specified
        var query = new google.visualization.Query('https://docs.google.com/spreadsheet/ccc?key=' + key + '&usp=sharing&range=' + range);
        // Send the query with a callback function, to be executed when the data is reeady
        query.send(drawChart2);
    }
    // Callback that creates and populates a data table,
    // instantiates the line chart, passes in the data and
    // draws it.
    function drawChart2(response) {
        // dig out the data from the response to the query
        var data = response.getDataTable();
        // there are squillions of cool options for your charts, shove them into this JSON object
        // read more https://developers.google.com/chart/interactive/docs/gallery/linechart
        var options = {
            'title': 'BBC Artist of the Year Nominees, Tweet by volume (20:00 - 23:30, BBC Music Awards 2016)',
            'width': "100%",
            'height': 500,
            'legend': { position: 'out'},
            colors :['#ffd633', '#1ac6ff', '#85e085', '#cc99ff', '#ff8080']
        };



        // Instantiate and draw our line chart, passing in the options JSON object.
        var chart = new google.visualization.LineChart(document.getElementById('artchart_div'));
        chart.draw(data, options);
    }
// To make it mobile responsive
    $(window).resize(function(){
drawChart2();
});
