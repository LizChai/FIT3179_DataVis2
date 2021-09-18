var discipline = "lead";

// Pie Chart
var pie_chart_lead = "js/pie_lead.vg.json";
var pie_chart_boulder = "js/pie_boulder.vg.json";
var pie_chart_speed = "js/pie_speed.vg.json";

// Area Chart
var area_chart_lead = "js/area_chart_lead.vg.json";
var area_chart_boulder = "js/area_chart_boulder.vg.json";
var area_chart_speed = "js/area_chart_speed.vg.json";

var symbol_map_lead = "js/symbol_map_lead.vg.json";
var symbol_map_boulder = "js/symbol_map_boulder.vg.json";
var symbol_map_speed = "js/symbol_map_speed.vg.json";

var pop_pyramid_lead = "js/pop_pyramid_lead.vg.json";
var pop_pyramid_boulder = "js/pop_pyramid_boulder.vg.json";
var pop_pyramid_speed = "js/pop_pyramid_speed.vg.json"

if (discipline == "lead"){
    vegaEmbed('#pie_chart', pie_chart_lead).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
        }).catch(console.error);

    vegaEmbed('#symbol_map', symbol_map_lead).then(function(result) {
        }).catch(console.error);

    vegaEmbed('#area_chart', area_chart_lead).then(function(result) {
        }).catch(console.error);

    vegaEmbed('#pop_pyramid', pop_pyramid_lead).then(function(result) {
        }).catch(console.error);

}
else if (discipline == "boulder") {

    vegaEmbed('#pie_chart', pie_chart_boulder).then(function(result) {
        }).catch(console.error);

    vegaEmbed('#symbol_map', symbol_map_boulder).then(function(result) {
        }).catch(console.error);

    vegaEmbed('#area_chart', area_chart_boulder).then(function(result) {
        }).catch(console.error);
    
    vegaEmbed('#pop_pyramid', pop_pyramid_boulder).then(function(result) {
        }).catch(console.error);
}
else {
    vegaEmbed('#pie_chart', pie_chart_speed).then(function(result) {
    }).catch(console.error);

    vegaEmbed('#symbol_map', symbol_map_speed).then(function(result) {
        }).catch(console.error);

    vegaEmbed('#area_chart', area_chart_speed).then(function(result) {
        }).catch(console.error);

    vegaEmbed('#pop_pyramid', pop_pyramid_speed).then(function(result) {
        }).catch(console.error);
}
