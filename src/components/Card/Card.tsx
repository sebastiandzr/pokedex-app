import "./Card.css"
import { useState } from "react";

interface Card {
    backImg: string;
    frontImg: string;
    name: string;
    types: any[];
    stats: any[];
}

const Card: React.FC<Card> = ({ frontImg, backImg, name, types, stats }) => {
    const [image, setImage] = useState(frontImg)
    console.log(stats)
    console.log(types)
    const getColorByType = (type) => {
        if (type === "water") {
            return "type-water"
        }
        if (type === "fire") {
            return "type-fire"
        }

        if (type === "grass") {
            return "type-grass"
        }

        if (type === "poison") {
            return "type-poison"
        }

        return "type-anythingelse"
    }
    return (
        <div className="card-container">

            <div className="card w-72 sm:w-80 rounded-xl overflow-hidden">
                <div className="relative bg-gradient-to-br from-orange-400 via-amber-500 to-rose-500 p-3 rounded-xl">
                    <div className="shine-lines"></div>

                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-lg font-bold text-white">{name}</h2>
                        <div className="flex items-center gap-1">
                            <span className="text-white font-bold">HP</span>
                            <span className="text-white font-bold">120</span>
                        </div>
                    </div>

                    <div className="relative aspect-square mb-3 rounded-lg overflow-hidden" onMouseUp={() => setImage(frontImg)}
                        onMouseDown={() => setImage(backImg)}>
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-rose-200"></div>
                        <div className="absolute inset-0 holo-effect animate-holo-glow"></div>
                        <div className="absolute inset-0 card-shine"></div>
                        <div className="absolute inset-0 sparkles"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-48 h-48 energy-symbol rounded-full animate-energy-spin opacity-20"></div>
                        </div>

                        <img
                            src={image}
                            alt={name}
                            className="pokemon-image"
                        />
                    </div>

                    <div className="bg-white/90 backdrop-blur rounded-lg p-3 space-y-3">
                        <div className="flex flex-wrap gap-2">
                            {types && types.map(result => {
                                const { type } = result;
                                const colorType = getColorByType(type.name)
                                return (
                                    <div className="flex items-center gap-2">
                                        <span className={`${colorType} text-white text-xs px-2 py-1 rounded-full`}>{type.name}</span>

                                    </div>
                                )
                            })

                            }
                        </div>
                        <div>
                            {stats && stats.map(result => {
                                const {base_stat, stat} = result; 
                                return (
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-2">
                                            <div>
                                                <h3 className="font-bold text-sm">{stat.name}</h3>
                                            </div>
                                            <span className="font-bold ml-auto">{base_stat}</span>
                                        </div>
                                    </div>
                                )
                            })

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>)
};

export default Card;