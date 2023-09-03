<script>
	import { countries } from '$lib/countryDataStore';
</script>

<div Class="px-4 sm:px-6 lg:px-8">
	<div Class="mt-8 flow-root">
		<div Class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div Class="inline-block min-w-full py-2 align-middle">
				<table Class="min-w-full divide-y divide-gray-300">
					<thead>
						<tr>
							<th
								scope="col"
								Class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
							>
								Flag
							</th>
							<th
								scope="col"
								Class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
							>
								Name
							</th>
							<th scope="col" Class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								Population
							</th>
							<th scope="col" Class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								CIOC
							</th>
							<th scope="col" Class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								UN Member Status
							</th>
							<th scope="col" Class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								Currencies
							</th>
							<th scope="col" Class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
								Languages
							</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-200 bg-white">
						{#each $countries as country}
							<tr>
								<td class="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 lg:pl-8">
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
								<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									{country.cioc ?? ''}
								</td>
								<td class="whitespace-nowrap px-3 py-4 text-sm text-white">
									<span
										class="px-2 py-1 rounded-md"
										class:bg-gray-400={!!country.unmember}
										class:bg-gray-700={!country.unmember}
									>
										{!!country.unmember ? 'Yes' : 'No'}
									</span>
								</td>
								<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									{Object.entries(country.currencies).map(([key, value]) => ` ${key}`)}
								</td>
								<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									{Object.entries(country.languages).map(([key, value]) => ` ${value}`)}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
