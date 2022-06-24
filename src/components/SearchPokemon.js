import { useEffect, useState } from "react";
import axios from "axios";

const base_url = "https://pokeapi.co/api/v2/ability/"
export default function SearchPokemon() {
    const [search, setSearch] = useState("")
    const [pokemonName, setPokemonName] = useState([])
    const [pokemonEffectEntries, setPokemonEffectEntries] = useState([])
    const [pokemonFlavorText, setPokemonFlavorText] = useState([])

    // useEffect(() => {
    //     console.log('rendered 2times!')
    //     axios({
    //         method: "GET",
    //         url: `${base_url}stench`
    //     }).then((result, i) => {
    //         setPokemonName(result.data.pokemon)
    //     })
    // }, [])

    const findPokemon = () => {
        console.log('rendered 2times!')
        axios({
            method: "GET",
            url: `${base_url}${search}`
        }).then((result, i) => {
            setPokemonName(result.data.pokemon)
            setPokemonEffectEntries(result.data.effect_entries)
            setPokemonFlavorText(result.data.flavor_text_entries)
        })
    }

    return  (
        <div>
            <h1>POKEMON KOMPONEN</h1>
            <div>
                <input placeholder="cari skill" onChange={(x) => setSearch(x.target.value)}></input>
                <button onClick={() => findPokemon()}>Find Now!</button>
            </div>
            <div><b>Nama Pokemon: </b>
                {pokemonName.map((data, i) => {
                    return (
                        <span key={i}>{data.pokemon.name}, </span>
                    )
                })}
            </div>
            <div><b>Pokemon Effect Entries: </b>
                {pokemonEffectEntries.map((data, i) => {
                    return (
                        <span key={i}>{data.short_effect}, </span>
                    )
                })}
            </div>
            <div><b>Pokemon Flavor Text: </b>
                {pokemonFlavorText.map((data, i) => {
                    if(data.language.name == "en"){
                        return <span key={i}>{data.flavor_text}</span>
                    }
                })}
            </div>
        </div>
    )
}