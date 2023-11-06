import React from 'react'
import { Image, Text, View, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useListPokemons } from '../hooks/useListPokemons'
import { PokemonCard } from '../components/PokemonCard'
import { BASE_URL } from '../constants/constants'
import { stylesGlobal } from '../theme/globalTheme'

export const PokemonList = () => {
  const { top } = useSafeAreaInsets()
  const { pokemons } = useListPokemons(`${BASE_URL}?limit=151`)

  return (
    <>
      <Image source={require('../assets/pokeball.png')} style={stylesGlobal.pokeball} />

      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={pokemons}
          keyExtractor={pokemon => pokemon.id}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          ListHeaderComponent={
            <Text
              style={{
                ...stylesGlobal.title,
                ...stylesGlobal.marginGlobal,
                top: top + 20,
                marginBottom: top + 40,
              }}
            >
              PokéApi
            </Text>
          }
          initialNumToRender={10}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  )
}
