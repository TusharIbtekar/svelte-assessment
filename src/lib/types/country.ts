export type Country = {
	flag: {
		svg: string;
		alt: string;
		png: string;
	};
	name: string;
	population: number;
	cioc: string;
	unmember: boolean;
	currencies: Record<string, string>;
	languages: Record<string, string>;
};
