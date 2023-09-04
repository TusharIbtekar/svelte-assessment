<script lang="ts">
	import { countries } from '$lib/stores/country';
	import Table from '$components/table.svelte';
	import Chart from '$components/chart.svelte';

	export let data;
	countries.set(data.countries);
</script>

<div class="grid xl:grid-cols-3 pt-16 px-8 bg-slate-200 gap-y-5 xl:gap-y-0">
	<Table />
	<Chart />
</div>
