import { useEffect, useState } from 'react'
import { BASE_URL_IMG } from '../constants/constants'
import { Pokemon, PokemonResp, Pokemons } from '../interfaces/pokemonInterfaces'

export const useListPokemons = (url: string) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = async () => {
    try {
      const resp = await fetch(url)
      const data: PokemonResp = await resp.json()
      mapPokemonList(data.results)
    } catch (err) {
      console.log(err)
    }
  }

  const mapPokemonList = async (pokemonList: Pokemons[]) => {
    const newPokemonList = pokemonList.map(({ name, url }) => {
      const urlSplit = url.split('/')
      const id = urlSplit[urlSplit.length - 2]
      const image = `${BASE_URL_IMG}${id}.png`

      return { id, image, name }
    })

    setPokemons(newPokemonList)
  }

  return { pokemons }
}
