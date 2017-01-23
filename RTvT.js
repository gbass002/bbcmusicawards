
var chart = AmCharts.makeChart("RTchartdiv", {
    "theme": "light",
    "type": "serial",
	"startDuration": 2,
    "dataProvider": [{
        "type": "Orginal Tweets",
        "number": 35,
        "color": "#ffdb4d"
    }, {
        "type": "Retweets",
        "number": 65,
        "color": "#99ddff"
    }],
    "valueAxes": [{
        "position": "left",
        "title": "Original Tweets vs Retweets"
    }],
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 1,
        "lineAlpha": 0.1,
        "type": "column",
        "valueField": "number"
    }],
    "depth3D": 20,
	"angle": 30,
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "type",
    "categoryAxis": {
        "gridPosition": "start",
        // "labelRotation": 90
    },
    "export": {
    	"enabled": true
     }

});
