<script lang="ts">
	import { countries } from '$lib/countryDataStore';
	import Table from '$components/table.svelte';

	export let data: any;
	// console.log(data.countries);
	countries.set(data.countries);
</script>

<div>
	<Table />
</div>
