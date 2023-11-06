import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../navigator/Navigator'
import { Pokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage'

interface Props {
  pokemon: Pokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { width } = Dimensions.get('window')
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>()

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigate('PokemonDetail', { pokemon })}>
      <View style={{ ...styles.cardContainer, width: width * 0.4 }}>
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>

        <View style={styles.containerPokeBall}>
          <Image source={require('../assets/pokeball-white.png')} style={styles.pokeball} />
        </View>

        <FadeInImage style={styles.pokemon} uri={pokemon.image} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'red',
    marginHorizontal: 10,
    height: 140,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    top: 10,
    left: 10,
  },
  containerPokeBall: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    opacity: 0.6,
    overflow: 'hidden',
  },
  pokeball: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -20,
    right: -20,
  },
  pokemon: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -5,
    bottom: -5,
  },
})
