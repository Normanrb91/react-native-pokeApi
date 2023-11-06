import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigator/Navigator'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemon } from '../hooks/usePokemon'
import { FadeInImage } from '../components/FadeInImage'
import Icon from 'react-native-vector-icons/Ionicons'
import { PokemonInfo } from '../components/PokemonInfo'

interface Props extends StackScreenProps<RootStackParamList, 'PokemonDetail'> {}

export const PokemonDetails = ({ navigation, route }: Props) => {
  const { pokemon } = route.params
  const { top } = useSafeAreaInsets()

  const { isLoading, pokemon: pokemonInfo } = usePokemon(pokemon.id)

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity activeOpacity={0.9} style={{ ...styles.arrowContainer, top: top + 20 }}>
          <Icon onPress={() => navigation.goBack()} name="arrow-back-outline" color="#fff" size={35} />
        </TouchableOpacity>

        <Text style={{ ...styles.pokemonName, top: top + 40 }}>
          {pokemon.name + '\n'}#{pokemon.id}
        </Text>

        <Image source={require('../assets/pokeball-white.png')} style={styles.pokeball} />

        <FadeInImage uri={pokemon.image} style={styles.pokemonImage} />
      </View>

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color="#ccc" size={50} />
        </View>
      ) : (
        <PokemonInfo pokemon={pokemonInfo} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'red',
    height: 350,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 350,
    borderBottomLeftRadius: 350,
  },
  arrowContainer: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    marginTop: 20,
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: 20,
    opacity: 0.8,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: 0,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
