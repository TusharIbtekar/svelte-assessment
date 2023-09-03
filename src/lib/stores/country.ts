import type { Country } from '$lib/types/Country';
import { writable } from 'svelte/store';

export const countries = writable<Country[]>([]);
