google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  $.get("Bulgaria.csv", function(csvString) {
        var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});          
        var data = google.visualization.arrayToDataTable(arrayData);
        console.log(data);
        var view = new google.visualization.DataView(data)
        view.setColumns([0,1,2,3,4,5])
        var options = {
          title: 'Bulgaria',
          legend: { position: 'bottom' },
          vAxis: { 
            title: "Tax value", 
            viewWindowMode:'explicit',
            viewWindow:{
            min:0
          }}
        };
        var chart = new google.visualization.LineChart(document.getElementById('DashBoard-Tax'));
        chart.draw(view, options);
  });
  
  document.getElementById('Greece').addEventListener('click', function(){
    $.get("Greece.csv", function(csvString) {
        var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});          
        var data = google.visualization.arrayToDataTable(arrayData);
        console.log(data);
        var view = new google.visualization.DataView(data)
        view.setColumns([0,1,2,3,4,5])
        var options = {
          title: 'Greece',
          legend: { position: 'bottom' },
          vAxis: { 
            title: "Tax value", 
            viewWindowMode:'explicit',
            viewWindow:{
            min:0
          }}
        };
        var chart = new google.visualization.LineChart(document.getElementById('DashBoard-Tax'));
        chart.draw(view, options);
  });})

  document.getElementById('Bulgaria').addEventListener('click', function(){
    $.get("Bulgaria.csv", function(csvString) {
        var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});          
        var data = google.visualization.arrayToDataTable(arrayData);
        console.log(data);
        var view = new google.visualization.DataView(data)
        view.setColumns([0,1,2,3,4,5])
        var options = {
          title: 'Bulgaria',
          legend: { position: 'bottom' },
          vAxis: { 
            title: "Tax value", 
            viewWindowMode:'explicit',
            viewWindow:{
            min:0
          }}
        };
        var chart = new google.visualization.LineChart(document.getElementById('DashBoard-Tax'));
        chart.draw(view, options);
  });})

  document.getElementById('Romania').addEventListener('click', function(){
    $.get("Romania.csv", function(csvString) {
        var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});          
        var data = google.visualization.arrayToDataTable(arrayData);
        console.log(data);
        var view = new google.visualization.DataView(data)
        view.setColumns([0,1,2,3,4,5])
        var options = {
          title: 'Romania',
          legend: { position: 'bottom' },
          vAxis: { 
            title: "Tax value", 
            viewWindowMode:'explicit',
            viewWindow:{
            min:0
          }}
        };
        var chart = new google.visualization.LineChart(document.getElementById('DashBoard-Tax'));
        chart.draw(view, options);
  });})

  document.getElementById('Poland').addEventListener('click', function(){
    $.get("Poland.csv", function(csvString) {
        var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});          
        var data = google.visualization.arrayToDataTable(arrayData);
        console.log(data);
        var view = new google.visualization.DataView(data)
        view.setColumns([0,1,2,3,4,5])
        var options = {
          title: 'Poland',
          legend: { position: 'bottom' },
          vAxis: { 
            title: "Tax value", 
            viewWindowMode:'explicit',
            viewWindow:{
            min:0
          }}
        };
        var chart = new google.visualization.LineChart(document.getElementById('DashBoard-Tax'));
        chart.draw(view, options);
  });})

  document.getElementById('Russia').addEventListener('click', function(){
    $.get("Russia.csv", function(csvString) {
        var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});          
        var data = google.visualization.arrayToDataTable(arrayData);
        console.log(data);
        var view = new google.visualization.DataView(data)
        view.setColumns([0,1,2,3,4,5])
        var options = {
          title: 'Russia',
          legend: { position: 'bottom' },
          vAxis: { 
            title: "GDP value", 
            viewWindowMode:'explicit',
            viewWindow:{
            min:0
          }}
        };
        var chart = new google.visualization.LineChart(document.getElementById('DashBoard-Tax'));
        chart.draw(view, options);
  });})
}