## Requirements
Svelte/SvelteKit project of 3 pages:
- Layout (Responsive design given in sample)
- Chart (Create Svelte/Store with the response from [api](https://restcountries.com/v3.1/all). Make a table and a Polar Area chart with the data. The Polar Area chart should show top 10 most populated countries.)
- Map (Create an Openlayer map with [GeoJSON](https://github.com/datasets/geo-countries/blob/master/data/countries.geojson). Change GeoJSON layer color and opacity.)

## Run the project
Install dependencies and run the project.

```bash
pnpm install
pnpm dev
```

## Deploy

![diagram-export-04_09_2023_23_53_54](https://github.com/TusharIbtekar/svelte-assessment/assets/61447870/2b4cf257-bab0-4393-8ecc-c710cc4fd9fa)

## Issues
- In the **Chart** page, the Currencies and Languages field had multiple values which was making that column extended. To tackle this, if there were more than 3 values, I wrapped those values in a new line in the same row. This caused the column to look better.
- In the Polar Chart, couldn't figure out how to show the labels in 2 rows with each containing 5 labels as the given sample chart.
- There is some issue in **Chart** page responsiveness on smaller screens. It could be fixed if given some time.
