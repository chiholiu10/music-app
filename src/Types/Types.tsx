export interface Genre {
	id: number;
	name: string;
}

export interface Video {
	id: number;
	artist: string;
	title: string;
	release_year: number;
	genre_id: number;
	image_url: string;
}

export interface IProps {
	genreList?: Genre[];
	videoList?: Video[];
	inputValue?: string;
	genres?: Array<any>;
	getAllYears?: Array<any>;
	selectedGenres?: any;
	selectedYear?: number;
}

export interface LazyLoaderProps {
	src: string;
	alt: string;
}