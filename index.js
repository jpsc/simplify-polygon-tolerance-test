import simplify from 'simplify-geojson';
import data from './amsterdam.js';


var mymap = L.map('mapid').setView([52.37343684554567, 4.904525007531616], 10);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

    L.geoJSON(data).addTo(mymap);

    var simpleBigImage = L.map('simple-big-image').setView([52.37343684554567, 4.904525007531616], 10);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
    }).addTo(simpleBigImage);
    
    const polygonBigImage = {
        type: 'Feature',
        properties: {},
        geometry: data
    };

    L.geoJSON(simplify(polygonBigImage, 0.002)).addTo(simpleBigImage);


    // jordaan
    import jordaanData from './jordaan.js';
    
    var thumb1 = L.map('thumb1').setView([52.374805791786585, 4.880783243235595], 12);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
    }).addTo(thumb1);
    
    const thumb1Polygon = {
        type: 'Feature',
        properties: {},
        geometry: jordaanData
    };
    L.geoJSON(simplify(thumb1Polygon, 0.001)).addTo(thumb1);

    // pijp
    import pijp from './pijp.js';
    
    var thumb2 = L.map('thumb2').setView([52.35605345977736, 4.894643262665406], 12);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
    }).addTo(thumb2);
    
    const thumb2Polygon = {
        type: 'Feature',
        properties: {},
        geometry: pijp
    };
    L.geoJSON(simplify(thumb2Polygon, 0.001)).addTo(thumb2);

    // weesperzijde
    import weesperzijde from './weesperzijde.js';
    
    var thumb3 = L.map('thumb3').setView([52.354331383388384, 4.910564689419344], 12);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
    }).addTo(thumb3);
    
    const thumb3Polygon = {
        type: 'Feature',
        properties: {},
        geometry: weesperzijde
    };
    
    L.geoJSON(simplify(thumb3Polygon, 0.001)).addTo(thumb3);