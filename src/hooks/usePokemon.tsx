import { useState, useEffect } from 'react'
import { PokemonCompleted } from '../interfaces/pokemonInterfaces'
import { BASE_URL } from '../constants/constants'

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemon, setPokemon] = useState<PokemonCompleted>({} as PokemonCompleted)

  useEffect(() => {
    getPokemon()
  }, [])

  const getPokemon = async () => {
    try {
      const resp = await fetch(`${BASE_URL}/${id}`)
      const data: PokemonCompleted = await resp.json()

      setPokemon(data)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  return {
    isLoading,
    pokemon,
  }
}
