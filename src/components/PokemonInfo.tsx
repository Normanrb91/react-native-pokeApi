import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { PokemonCompleted } from '../interfaces/pokemonInterfaces'

interface Props {
  pokemon: PokemonCompleted
}

export const PokemonInfo = ({ pokemon }: Props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ ...StyleSheet.absoluteFillObject }}>
      <View style={{ ...styles.container, marginTop: 340 }}>
        <Text style={styles.title}>Types</Text>

        <View style={{ flexDirection: 'row' }}>
          {pokemon.types.map(({ type }) => (
            <Text style={{ ...styles.regularText, marginRight: 10 }} key={type.name}>
              {' '}
              {type.name}
            </Text>
          ))}
        </View>

        {/* Peso */}
        <Text style={styles.title}>Weight</Text>
        <Text style={styles.regularText}>{pokemon.weight}kg</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Stats</Text>

        {pokemon.stats.map((stat, i) => (
          <View key={stat.stat.name + i} style={{ flexDirection: 'row' }}>
            <Text style={{ ...styles.regularText, marginRight: 10, width: 150 }} key={stat.stat.name}>
              {stat.stat.name}
            </Text>

            <Text style={{ ...styles.regularText, fontWeight: 'bold' }}>{stat.base_stat}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
})
