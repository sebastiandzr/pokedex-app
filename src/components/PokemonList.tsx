import { useState, useEffect } from "react";
import { getPokemons } from "../services/pokeapi"
import Card from "./Card/Card";
import Loading from "./Loading";
const PokemonList: React.FC<any> = ({ }) => {
    const [pokemons, setPokemons] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {

        async function fechData() {
            try {
                const result = await getPokemons(80);
                setPokemons(result)
            } catch (error) {
                console.log(error);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        }
        fechData()

    }, [])


    return (
        <>
            {loading ? <Loading /> :
                <div className="p-10 flex flex-wrap justify-center align-content-center gap-10">
                    {pokemons.length > 0 && pokemons.map((pokemon:any, index:number) => {
                        const { front_default, back_default} = pokemon.sprites;
                        const {types, stats } = pokemon;

                        return (
                            <Card key={`pokemon-${index}`} types={types} stats={stats} frontImg={front_default} backImg={back_default} name={pokemon.species.name} />
                        )
                    })}

                </div>
            }
        </>
    )
}

export default PokemonList;

