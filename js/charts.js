// since v3, chart can accept data in JSON format
// if your category axis parses dates, you should only
// set date format of your data (dataDateFormat property of AmSerialChart)            
var lineChartData = [
    {
        "date": "2012-06-01",
        "moneyin": 190234,
        "moneyout": 180234,
        "profit": 10000
    },
    {
        "date": "2012-07-01",
        "moneyin": 174305,
        "moneyout": 130234,
        "profit": 44071
    },
    {
       "date": "2012-08-01",
        "moneyin": 140543,
        "moneyout": 16534,
        "profit": 124009
    },
    {
       "date": "2012-09-01",
        "moneyin": 234040,
        "moneyout": 183234,
        "profit": 50806
    },
    {
       "date": "2012-10-01",
        "moneyin": 147834,
        "moneyout": 186234,
        "profit": -38400
    },
    {
        "date": "2012-11-01",
        "moneyin": 157834,
        "moneyout": 203234,
        "profit": -45400
    }
];


AmCharts.ready(function () {
    var chart = new AmCharts.AmSerialChart();
    chart.dataProvider = lineChartData;
    chart.pathToImages = "http://www.amcharts.com/lib/3/images/";
    chart.categoryField = "date";
    chart.dataDateFormat = "YYYY-MM-DD";

  

    // sometimes we need to set margins manually
    // autoMargins should be set to false in order chart to use custom margin values
    chart.autoMargins = false;
    chart.marginRight = 0;
    chart.marginLeft = 30;
    chart.marginBottom = 30;
    chart.marginTop = 40;
    
    // AXES
    // category                
    var categoryAxis = chart.categoryAxis;
    categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
    categoryAxis.minPeriod = "MM"; // our data is daily, so we set minPeriod to DD
    categoryAxis.inside = false;
    categoryAxis.gridAlpha = 0;
    categoryAxis.tickLength = 0;
    categoryAxis.axisAlpha = 0.5;
    categoryAxis.fontSize = 9;
    categoryAxis.axisColor = "rgba(255,255,255,0.8)";
    categoryAxis.color = "rgba(255,255,255,0.8)";

    
    // value
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.dashLength = 2;
    valueAxis.gridColor = "rgba(255,255,255,0.8)";
    valueAxis.gridAlpha = 0.2;
    valueAxis.axisColor = "rgba(255,255,255,0.8)";
    valueAxis.color = "rgba(255,255,255,0.8)";
    valueAxis.axisAlpha = 0.5;
    valueAxis.fontSize = 9;
    chart.addValueAxis(valueAxis);
    
    // moneyin
    var graph = new AmCharts.AmGraph();
    graph.type = "smoothedLine";
    graph.valueField = "moneyin";
    graph.lineColor = "#1c7dfa";
    graph.lineThickness = 3;
    graph.bullet = "round";
    //graph.bulletColor = "rgba(0,0,0,0.3)";
    graph.bulletBorderColor = "#1c7dfa";
    graph.bulletBorderAlpha = 1;
    graph.bulletBorderThickness = 3;
    graph.bulletSize = 6;
    chart.addGraph(graph);
    
    // profit
    var graph = new AmCharts.AmGraph();
    graph.type = "smoothedLine";
    graph.valueField = "profit";
    graph.lineColor = "#53d769";
    graph.lineThickness = 3;
    graph.bullet = "round";
    //graph.bulletColor = "rgba(0,0,0,0.3)";
    graph.bulletBorderColor = "#53d769";
    graph.bulletBorderAlpha = 1;
    graph.bulletBorderThickness = 3;
    graph.bulletSize = 6;
    chart.addGraph(graph);


    // moneyout
    var graph1 = new AmCharts.AmGraph();
    graph1.type = "smoothedLine";
    graph1.valueField = "moneyout";
    graph1.lineColor = "#f35857";
    graph1.lineThickness = 3;
    graph1.bullet = "round";
    //graph1.bulletColor = "rgba(0,0,0,0.3)";
    graph1.bulletBorderColor = "#f35857";
    graph1.bulletBorderAlpha = 1;
    graph1.bulletBorderThickness = 3;
    graph1.bulletSize = 6;
    chart.addGraph(graph1);
    
    
    // CURSOR
    var chartCursor = new AmCharts.ChartCursor();
    chart.addChartCursor(chartCursor);
    chartCursor.categoryBalloonAlpha = 0.2;
    chartCursor.cursorAlpha = 0.2;
    chartCursor.cursorColor = 'rgba(255,255,255,.8)';
    chartCursor.categoryBalloonEnabled = false;
    
    // WRITE
    chart.write("chartdiv");

});


var chart2 = AmCharts.makeChart("chartdiv2", {
    "type": "serial",
    "theme": "none",
    "colors": ['#1c7dfa', '#53d769'],
    "dataProvider": [{
        "typoeofwork": "Webbproduktion",
        "typeofworkmoneyin": 180025
    }, {
        "typoeofwork": "Serverhantering",
        "typeofworkmoneyin": 22082
    }, {
        "typoeofwork": "Webbhotell",
        "typeofworkmoneyin": 18309
    }, {
        "typoeofwork": "Domänhantering",
        "typeofworkmoneyin": 13422
    }, {
        "typoeofwork": "E-Posthantering",
        "typeofworkmoneyin": 3935
    }],
    "valueAxes": [{
        "gridAlpha": 0.2,
        "dashLength": 0,
        "axisAlpha":0.5,
         "fontSize":9,
         "axisColor": "rgba(255,255,255,0.5)",
         "color": "rgba(255,255,255,0.5)",
         "gridColor": "rgba(255,255,255,0.5)"
    }],
    "gridAboveGraphs": true,
    "startDuration": 1,
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "typeofworkmoneyin"      
    }],
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "typoeofwork",
    "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
         "tickPosition":"start",
         "tickLength":0,
         "axisAlpha":0.5,
         "fontSize":9,
         "axisColor": "rgba(255,255,255,0.5)",
         "color": "rgba(255,255,255,0.5)",

    },
    "exportConfig":{
      "menuTop": 0,
      "menuItems": [{
      "icon": '/lib/3/images/export.png',
      "format": 'png'     
      }]  
    }
});

var chart2 = AmCharts.makeChart("chartdiv22", {
    "type": "serial",
    "theme": "none",
    "colors": ['#1c7dfa', '#53d769'],
    "dataProvider": [{
        "costumer": "Badass business AB",
        "costumermoneyin": 120025
    }, {
        "costumer": "Super duper AB",
        "costumermoneyin": 22082
    }, {
        "costumer": "Insanely good goods AB",
        "costumermoneyin": 18309
    }],
    "valueAxes": [{
        "gridAlpha": 0.2,
        "dashLength": 0,
        "axisAlpha":0.5,
         "fontSize":9,
         "axisColor": "rgba(255,255,255,0.5)",
         "color": "rgba(255,255,255,0.5)",
         "gridColor": "rgba(255,255,255,0.5)"
    }],
    "gridAboveGraphs": true,
    "startDuration": 1,
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "costumermoneyin"      
    }],
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "costumer",
    "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
         "tickPosition":"start",
         "tickLength":0,
         "axisAlpha":0.5,
         "fontSize":9,
         "axisColor": "rgba(255,255,255,0.5)",
         "color": "rgba(255,255,255,0.5)",

    },
    "exportConfig":{
      "menuTop": 0,
      "menuItems": [{
      "icon": '/lib/3/images/export.png',
      "format": 'png'     
      }]  
    }
});


var chart3 = AmCharts.makeChart("chartdiv3", {
    "type": "pie",
    "theme": "none",
    "colors": ['#1c7dfa', '#53d769'],
    "dataProvider": [{
        "title": "Nya",
        "value": 4852
    }, {
        "title": "Återkommande",
        "value": 9899
    }],
    "titleField": "title",
    "valueField": "value",
    "labelRadius": 5,
    "color": "rgba(255,255,255,0.5)",
    "radius": "42%",
    "innerRadius": "60%",
    "labelText": "[[title]]"
});


var chart4 = AmCharts.makeChart("chartdiv4", {
    "type": "xy",
    "pathToImages": "http://www.amcharts.com/lib/3/images/",
    "colors": ['#1c7dfa', '#53d769'],
    "theme": "none",
    "dataProvider": [{
        "y": 10,
        "x": 14,
        "value": 59,
        "y2": -5,
        "x2": -3,
        "value2": 44
    }, {
        "y": 5,
        "x": 3,
        "value": 50,
        "y2": -15,
        "x2": -8,
        "value2": 12
    }, {
        "y": -10,
        "x": 8,
        "value": 19,
        "y2": -4,
        "x2": 6,
        "value2": 35
    }, {
        "y": -6,
        "x": 5,
        "value": 65,
        "y2": -5,
        "x2": -6,
        "value2": 168
    }, {
        "y": 15,
        "x": -4,
        "value": 92,
        "y2": -10,
        "x2": -8,
        "value2": 102
    }, {
        "y": 13,
        "x": 1,
        "value": 8,
        "y2": -2,
        "x2": 0,
        "value2": 41
    }, {
        "y": 1,
        "x": 6,
        "value": 35,
        "y2": 0,
        "x2": -3,
        "value2": 16
    }],
    "valueAxes": [{
        "position":"bottom",
        "axisAlpha": 0,
        "fontSize":9,
         "axisColor": "rgba(255,255,255,0.5)",
         "color": "rgba(255,255,255,0.5)",
         "gridColor": "rgba(255,255,255,0.5)"
    }, {
        "minMaxMultiplier": 1.2,
        "axisAlpha": 0,
        "position": "left",
        "fontSize":9,
         "axisColor": "rgba(255,255,255,0.5)",
         "color": "rgba(255,255,255,0.5)",
         "gridColor": "rgba(255,255,255,0.5)"
    }],
    "startDuration": 1.5,
    "graphs": [{
        "balloonText": "x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>",
        "bullet": "circle",
        "bulletBorderAlpha": 0.2,
        "bulletAlpha": 0.8,
        "lineAlpha": 0,
        "fillAlphas": 0,
        "valueField": "value",
        "xField": "x",
        "yField": "y",
        "maxBulletSize": 100
    }, {
        "balloonText": "x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>",
        "bullet": "diamond",
        "bulletBorderAlpha": 0.2,
        "bulletAlpha": 0.8,
        "lineAlpha": 0,
        "fillAlphas": 0,
        "valueField": "value2",
        "xField": "x2",
        "yField": "y2",
        "maxBulletSize": 100
    }],
    "marginLeft": 46,
    "marginBottom": 35
});



var chart5 = AmCharts.makeChart("chartdiv5", {
    "type": "radar",
    "theme": "none",
    "colors": ['#53d769', '#1c7dfa'],
    "dataProvider": [{
        "direction": "N",
        "value": 8
    }, {
        "direction": "NE",
        "value": 9
    }, {
        "direction": "E",
        "value": 4.5
    }, {
        "direction": "SE",
        "value": 3.5
    }, {
        "direction": "S",
        "value": 9.2
    }, {
        "direction": "SW",
        "value": 8.4
    }, {
        "direction": "W",
        "value": 11.1
    }, {
        "direction": "NW",
        "value": 10
    }],
    "valueAxes": [{
        "gridType": "circles",
        "minimum": 0,
        "autoGridCount": false,
        "axisAlpha": 0.2,
        "fillAlpha": 0.05,
        "fillColor": "#FFFFFF",
        "gridAlpha": 0.08,
        "guides": [{
            "angle": 225,
            "fillAlpha": 0.3,
            "fillColor": "#53d769",
            "tickLength": 0,
            "toAngle": 315,
            "toValue": 14,
            "value": 0,
            "lineAlpha": 0,

        }, {
            "angle": 45,
            "fillAlpha": 0.3,
            "fillColor": "#1c7dfa",
            "tickLength": 0,
            "toAngle": 135,
            "toValue": 14,
            "value": 0,
            "lineAlpha": 0,
        }],
        "position": "left",
        "fontSize":9,
         "axisColor": "rgba(255,255,255,0.5)",
         "color": "rgba(255,255,255,0.5)",
         "gridColor": "rgba(255,255,255,0.5)"
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "[[category]]: [[value]] m/s",
        "bullet": "round",
        "fillAlphas": 0.3,
        "valueField": "value"
    }],
    "categoryField": "direction"   
});