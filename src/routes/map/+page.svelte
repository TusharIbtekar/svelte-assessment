<script lang="ts">
	import GeoJSON from 'ol/format/GeoJSON.js';
	import Map from 'ol/Map.js';
	import View from 'ol/View.js';
	import { Stroke, Style } from 'ol/style.js';
	import { OSM, Vector as VectorSource } from 'ol/source.js';
	import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
	import { onMount } from 'svelte';

	onMount(() => {
		const geojsonObject = {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [0, 0]
					}
				},
				{
					type: 'Feature',
					geometry: {
						type: 'LineString',
						coordinates: [
							[4e6, -2e6],
							[8e6, 2e6]
						]
					}
				}
			]
		};

		const vectorSource = new VectorSource({
			features: new GeoJSON().readFeatures(geojsonObject)
		});

		const vectorLayer = new VectorLayer({
			source: vectorSource,
			style: new Style({
				stroke: new Stroke({
					color: 'green',
					width: 1
				})
			})
		});

		const map = new Map({
			layers: [
				new TileLayer({
					source: new OSM()
				}),
				vectorLayer
			],
			target: 'map',
			view: new View({
				center: [0, 0],
				zoom: 2
			})
		});
	});
</script>

<div class="h-screen">
	<div id="map" class="map" />
</div>

<style>
	.map {
		width: 100%;
		height: 100%;
	}
</style>
