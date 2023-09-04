<script lang="ts">
	import { browser } from '$app/environment';
	import { Chart, registerables } from 'chart.js';
	import { onMount } from 'svelte';
	import { countryDataStore } from '$lib/stores/country';

	Chart.register(...registerables);

	let polarChartElement: HTMLCanvasElement;

	function generateUniqueColors(numColors: number): string[] {
		const colors = new Set<string>();
		while (colors.size < numColors) {
			colors.add(
				`rgb(${Array.from({ length: 3 }, () => Math.floor(Math.random() * 256)).join(',')})`
			);
		}
		return Array.from(colors);
	}

	const mostPopulatedCountries = $countryDataStore
		.sort((a, b) => {
			return b.population - a.population;
		})
		.slice(0, 10);

	const data = {
		labels: mostPopulatedCountries.map((country) => country.name),
		datasets: [
			{
				label: 'Population',
				data: mostPopulatedCountries.map((country) => country.population),
				backgroundColor: generateUniqueColors(10)
			}
		]
	};
	onMount(() => {
		if (browser) {
			new Chart(polarChartElement, {
				type: 'polarArea',
				data: data,
				options: {
					plugins: {
						legend: {
							position: 'bottom',
							labels: {
								usePointStyle: true,
								pointStyle: 'circle'
							},
							fullSize: false
						}
					},
					layout: {
						padding: 20
					}
				}
			});
		}
	});
</script>

<div class="col-span-1 px-8">
	<div class="border-2 rounded-lg border-gray-400 bg-white">
		<h1 class="font-semibold pl-4 border-b-2 border-gray-400 py-2">Countries</h1>
		<section>
			<canvas bind:this={polarChartElement} />
		</section>
	</div>
</div>
