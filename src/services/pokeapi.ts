const API_URL = "https://pokeapi.co/api/v2/"

export const getPokemons = async function(offset = 50){
        try{
    const result = await fetch(`${API_URL}/pokemon?limit=${offset}`);
    const data = await result.json();
     let results = data.results;
    let promisesArray = results.map((result:any) => {
      return fetch(result.url).then(response => response.json());
    })
    return Promise.all(promisesArray);
    }catch(error){
        console.log("Error consultando pokemons", error)
        return [];
    }
    
    
}

