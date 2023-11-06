import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { PokemonList } from '../screens/PokemonList'
import { PokemonDetails } from '../screens/PokemonDetails'
import { Pokemon } from '../interfaces/pokemonInterfaces'

export type RootStackParamList = {
  PokemonList: undefined
  PokemonDetail: { pokemon: Pokemon }
}

const Stack = createStackNavigator<RootStackParamList>()

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}
    >
      <Stack.Screen name="PokemonList" component={PokemonList} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetails} />
    </Stack.Navigator>
  )
}
