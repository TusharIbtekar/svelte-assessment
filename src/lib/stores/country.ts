import type { Country } from '$lib/types/country';
import { writable } from 'svelte/store';

export const countryDataStore = writable<Country[]>([]);
