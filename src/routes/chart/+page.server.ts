import type { Country } from '$lib/types/country';

export async function load({ params }) {
	let countries: Country[] = [];
	try {
		const res = await fetch('https://restcountries.com/v3.1/all');
		const data = await res.json();
		countries = data.map((country: any) => {
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
	} catch (err) {
		console.error('Error: ', err);
	}
	return { countries };
}
