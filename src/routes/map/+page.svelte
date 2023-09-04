<script lang="ts">
	import GeoJSON from 'ol/format/GeoJSON.js';
	import Map from 'ol/Map.js';
	import View from 'ol/View.js';
	import { Fill, Stroke, Style } from 'ol/style.js';
	import { OSM, Vector as VectorSource } from 'ol/source.js';
	import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
	import { onMount } from 'svelte';

	onMount(() => {
		const vectorSource = new VectorSource({
			url: 'countries.geojson',
			format: new GeoJSON()
		});

		const vectorLayer = new VectorLayer({
			source: vectorSource,
			style: new Style({
				fill: new Fill({
					color: 'rgba(0, 106, 78, 0.75)' // #006a4e with 0.75 opacity
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
