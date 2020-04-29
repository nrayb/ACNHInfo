import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { CritterTable } from '../components/CritterTable';
import { HeaderType } from '../utils/SortUtils';

interface Fish {
  name: string;
  price: string;
  location: string;
  shadowSize: string;
  spawnTime: string;
  nMonths: Record<string, boolean>;
  sMonths: Record<string, boolean>;
}

const header = [HeaderType.name, HeaderType.price, HeaderType.location, HeaderType.spawnTime];
const fishes = require("../../assets/Fish.json");
const fishData: string[][] = fishes.map((fish: Fish) => [fish.name, fish.price, fish.location, fish.spawnTime])

// https://reactnative.dev/docs/0.22/scrollview#scrolleventthrottle
const SCROLL_EVENT_THROTTLE = 12;

export const FishPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} style={styles.scrollView} scrollEventThrottle={SCROLL_EVENT_THROTTLE} >
        <CritterTable header={header} tableData={fishData}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  scrollView: {},
});
