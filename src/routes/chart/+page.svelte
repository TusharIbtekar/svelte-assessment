<script lang="ts">
	import { countryStore } from '$lib/countryDataStore';

	export let data: any;
	const { countries } = data;
	// console.log(data.countries);
	countryStore.set(countries);
</script>

<div>
	{#each countries as country}
		<div>
			<img src={country.flag.svg} alt={country.flag.alt} />
			<p>{country.name}</p>
			<p>{country.population}</p>
			<p>{country.cioc}</p>
			<p>{country.unmember}</p>
			<p>
				{Object.entries(country.languages).map(([key, value]) => ` ${value}`)}
			</p>
			<p>
				{Object.entries(country.currencies).map(([key, value]) => ` ${key}`)}
			</p>
		</div>
	{/each}
</div>
<!-- {console.log(countryStore)} -->
