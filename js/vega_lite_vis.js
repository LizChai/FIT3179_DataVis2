var discipline = "lead";

function choice(chosen) {
    document.getElementById("selected").innerHTML = "Displaying " + chosen + " data";
    discipline = chosen;
}

// Pie Chart
var pie_chart_lead = "js/pie_lead.vg.json";
var pie_chart_boulder = "js/pie_boulder.vg.json";
var pie_chart_speed = "js/pie_speed.vg.json";

// Area Chart
var area_chart_lead = "js/area_chart_lead.vg.json";
var area_chart_boulder = "js/area_chart_boulder.vg.json";
var area_chart_speed = "js/area_chart_speed.vg.json";

// Map
var symbol_map_lead = "js/symbol_map_lead.vg.json";
var symbol_map_boulder = "js/symbol_map_boulder.vg.json";
var symbol_map_speed = "js/symbol_map_speed.vg.json";

// Population pyramid
var pop_pyramid_lead = "js/pop_pyramid_lead.vg.json";
var pop_pyramid_boulder = "js/pop_pyramid_boulder.vg.json";
var pop_pyramid_speed = "js/pop_pyramid_speed.vg.json"

//Line Chart
var line_chart_lead = "js/line_chart_lead.vg.json";
var line_chart_boulder = "js/line_chart_boulder.vg.json";
var line_chart_speed = "js/line_chart_speed.vg.json";

// Stacked bar chart
var stacked_chart_lead = "js/stacked_chart_lead.vg.json";
var stacked_chart_boulder = "js/stacked_chart_boulder.vg.json";
var stacked_chart_speed = "js/stacked_chart_speed.vg.json";

if (discipline == "lead"){
    vegaEmbed('#pie_chart', pie_chart_lead, {"actions": false}).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
        }).catch(console.error);

    vegaEmbed('#symbol_map', symbol_map_lead, {"actions": false}).then(function(result) {
        }).catch(console.error);

    vegaEmbed('#area_chart', area_chart_lead, {"actions": false}).then(function(result) {
        }).catch(console.error);

    vegaEmbed('#pop_pyramid', pop_pyramid_lead, {"actions": false}).then(function(result) {
        }).catch(console.error);

    vegaEmbed('#line_graph', line_chart_lead, {"actions": false}).then(function(result) {
        }).catch(console.error);
    
    vegaEmbed('#stacked_chart', stacked_chart_lead, {"actions": false}).then(function(result) {
        }).catch(console.error);

}
else if (discipline == "boulder") {

    vegaEmbed('#pie_chart', pie_chart_boulder, {"actions": false}).then(function(result) {
        }).catch(console.error);

    vegaEmbed('#symbol_map', symbol_map_boulder, {"actions": false}).then(function(result) {
        }).catch(console.error);

    vegaEmbed('#area_chart', area_chart_boulder, {"actions": false}).then(function(result) {
        }).catch(console.error);
    
    vegaEmbed('#pop_pyramid', pop_pyramid_boulder, {"actions": false}).then(function(result) {
        }).catch(console.error);

    vegaEmbed('#line_graph', line_chart_boulder, {"actions": false}).then(function(result) {
        }).catch(console.error);
    
    vegaEmbed('#stacked_chart', stacked_chart_boulder, {"actions": false}).then(function(result) {
        }).catch(console.error);
}
else {
    vegaEmbed('#pie_chart', pie_chart_speed, {"actions": false}).then(function(result) {
    }).catch(console.error);

    vegaEmbed('#symbol_map', symbol_map_speed, {"actions": false}).then(function(result) {
        }).catch(console.error);

    vegaEmbed('#area_chart', area_chart_speed, {"actions": false}).then(function(result) {
        }).catch(console.error);

    vegaEmbed('#pop_pyramid', pop_pyramid_speed, {"actions": false}).then(function(result) {
        }).catch(console.error);

    vegaEmbed('#line_graph', line_chart_speed, {"actions": false}).then(function(result) {
        }).catch(console.error);
    
    vegaEmbed('#stacked_chart', stacked_chart_speed, {"actions": false}).then(function(result) {
        }).catch(console.error);
}
