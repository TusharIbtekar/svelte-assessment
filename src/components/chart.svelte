<script lang="ts">
	import { browser } from '$app/environment';
	import { Chart, registerables } from 'chart.js';
	import { onMount } from 'svelte';

	Chart.register(...registerables);

	let barChartElement: HTMLCanvasElement;

	const data = {
		labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
		datasets: [
			{
				label: 'My First Dataset',
				data: [11, 16, 7, 3, 14],
				backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(75, 192, 192)',
					'rgb(255, 205, 86)',
					'rgb(201, 203, 207)',
					'rgb(54, 162, 235)'
				]
			}
		]
	};
	onMount(() => {
		if (browser) {
			new Chart(barChartElement, {
				type: 'polarArea',
				data: data,
				options: {}
			});
		}
	});
</script>

<div class="col-span-1">
	<h1>State of JS 2021 Backend Framework Satisfaction</h1>
	<section>
		<canvas bind:this={barChartElement} />
	</section>
</div>
