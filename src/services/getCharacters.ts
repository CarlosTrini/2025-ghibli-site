import type { CharacterDataAPI } from "../types/interfaces";

export const getCharacters = async (): Promise<CharacterDataAPI[] | null> => {
    let response = null;
    try {
        const fetching = await fetch('https://ghibliapi.vercel.app/people',
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