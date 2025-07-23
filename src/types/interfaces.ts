export interface locationsDataAPI {
  id: string;
  name: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
}

export interface FilmDataAPI {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: string[] | [];
  species: string[] | [];
  locations: string[] | [];
  vehicles: string[] | [];
  url: string;
}


export interface CharacterDataAPI {
  id: string;
  name: string;
  gender: string;
  age: string;
  eye_color: string;
  hair_color: string;
  films: string[]; // Array de URLs (strings)
  species: string; // URL para a espécie
  url: string;     // URL para o próprio personagem
}