import type { Country } from '$lib/types/country.js';

export async function load({ params }) {
	const res = await fetch('https://restcountries.com/v3.1/all');
	const data = await res.json();
	const countries: Country[] = data.map((country: any) => {
		return {
			flag: { svg: country.flags.svg, alt: country.flags.alt, png: country.flags.png },
			name: country.name.common,
			population: country.population,
			cioc: country.cioc,
			unmember: country.unMember,
			currencies: country.currencies ?? {},
			languages: country.languages ?? {}
		};
	});
	return { countries };
}
