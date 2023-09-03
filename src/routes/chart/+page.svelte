<script lang="ts">
	import { countries } from '$lib/stores/country';
	import Table from '$components/table.svelte';
	import Chart from '$components/chart.svelte';

	export let data;
	// console.log(data.countries);
	countries.set(data.countries);
</script>

<div class="grid grid-cols-3">
	<Table />
	<Chart />
</div>
