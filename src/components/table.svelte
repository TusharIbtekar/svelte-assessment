<script lang="ts">
	import { countries } from '$lib/stores/country';
	import type { Country } from '$lib/types/country';

	const showCurrencies = (country: Country) => {
		return Object.keys(country.currencies).join(', ');
	};

	const showLanguages = (country: Country) => {
		const languages = Object.values(country.languages);
		const chunkSize = 3; // Number of words per chunk
		const chunks = [];

		for (let i = 0; i < languages.length; i += chunkSize) {
			const chunk = languages.slice(i, i + chunkSize).join(', ');
			chunks.push(chunk);
		}

		return chunks.join(',\n');
	};
</script>

<div class="px-8 col-span-2 order-2 xl:order-none">
	<div class="border-2 rounded-lg border-gray-400 overflow-hidden">
		<table class="min-w-full divide-y divide-gray-300 bg-white">
			<thead>
				<tr>
					<th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
						Flag
					</th>
					<th
						scope="col"
						class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
					>
						Name
					</th>
					<th
						scope="col"
						class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
					>
						Population
					</th>
					<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
						CIOC
					</th>
					<th scope="col" class="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
						UN Member Status
					</th>
					<th scope="col" class="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
						Currencies
					</th>
					<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
						Languages
					</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200">
				{#each $countries as country}
					<tr>
						<!-- <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"> -->
						<td class="whitespace-nowrap py-4 pl-4 pr-3">
							<img
								class="rounded"
								height={30}
								width={50}
								src={country.flag.svg}
								alt={country.flag.alt}
							/>
						</td>
						<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
							{country.name}
						</td>
						<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
							{country.population}
						</td>
						<td class=" whitespace-nowrap px-3 py-4 text-sm text-gray-500">
							{country.cioc ?? ''}
						</td>
						<td class="whitespace-nowrap px-3 py-4 text-sm text-white text-center">
							<span
								class=" whitespace-nowrap px-2 py-1 rounded-md"
								class:bg-gray-400={!!country.unmember}
								class:bg-gray-700={!country.unmember}
							>
								{!!country.unmember ? 'Yes' : 'No'}
							</span>
						</td>
						<td class="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
							{showCurrencies(country)}
						</td>
						<td class="whitespace-pre-line px-3 py-4 text-sm text-gray-500">
							{showLanguages(country)}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
