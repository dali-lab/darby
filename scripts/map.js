$(document).ready(function(){

	var map = kartograph.map('#map');
	map.loadMap('darby-map.svg', function() {
    // do something with your map, add layers etc.
    map.addLayer('Layer_1');
map.getLayer('Layer_1').style('fill', '#cdd');
});
});