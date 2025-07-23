import type { FilmDataAPI } from "../types/interfaces";

export const getFilms = async (): Promise<FilmDataAPI[] | null> => {
    let response = null;
    try {
        const fetching = await fetch('https://ghibliapi.vercel.app/films',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );  
        
        
        if (fetching.status == 404) {
            response = [];
        }else if (fetching.status == 500) {
            throw new Error("Internal Server Error");
            
        }else {
            response = await fetching.json();
        }
        
        
    } catch (error) {
       console.log('Error fecthing locations:', error); 
    }
    finally{
            return response ? response : null;

    }

}



export const getFilmById = async (id: string): Promise<FilmDataAPI | null> => {
    let response = null;
    try {
        const fetching = await fetch(`https://ghibliapi.vercel.app/films/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );  
        
        
        if (fetching.status == 404) {
            response = {};
        }else if (fetching.status == 500) {
            throw new Error("Internal Server Error");
            
        }else {
            response = await fetching.json();
        }
        
        
    } catch (error) {
       console.log('Error fecthing locations:', error); 
    }
    finally{
            return response ? response : null;

    }

}