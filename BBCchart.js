

var chart = AmCharts.makeChart("stbarchartdiv", {
  "type": "serial",
"theme": "light",
  "legend": {
      "horizontalGap": 10,
      "maxColumns": 1,
      "position": "right",
  "useGraphSettings": true,
  "markerSize": 10
  },
  "dataProvider": [{
      "BBC": '@bbcmusic' ,
      "Original Tweets": 60,
      "Retweets": 22,
  }, {
    "BBC": '@BBCMusicAwards' ,
    "Original Tweets": 10,
    "Retweets": 63,
  }, {
    "BBC": '@BBCR1' ,
    "Original Tweets": 58,
    "Retweets": 12,
  },  {
    "BBC": '@BBCRadio2' ,
    "Original Tweets": 40,
    "Retweets": 13,
  },{
    "BBC": '@BBCNewsEnts' ,
    "Original Tweets": 15,
    "Retweets": 2,
  }, {
    "BBC": '@BBC' ,
    "Original Tweets": 1,
    "Retweets": 7,
  }],
  "valueAxes": [{
      "stackType": "regular",
      "axisAlpha": 0.5,
      "gridAlpha": 0
  }],
  "graphs": [{
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Original Tweets",
      "type": "column",
  "color": "#000000",
      "valueField": "Original Tweets"
  }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Retweets",
      "type": "column",
  "color": "#000000",
      "valueField": "Retweets"
  }],
  "rotate": true,
  "categoryField": "BBC",
  "categoryAxis": {
      "gridPosition": "start",
      "axisAlpha": 0,
      "gridAlpha": 0,
      "position": "left"
  },
  "export": {
    "enabled": true
   }
});
