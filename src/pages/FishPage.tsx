import React, { memo } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { CritterTable } from '../components/CritterTable';
import { HeaderType } from '../utils/SortUtils';
import { getDisplayName } from '../utils/MonthUtils';
import { useHemisphereState } from "../context/Hemisphere";

interface Fish {
  name: string;
  price: string;
  location: string;
  shadowSize: string;
  spawnTime: string;
  nMonths: boolean[];
  sMonths: boolean[];
}

const header = [HeaderType.name, HeaderType.price, HeaderType.location, HeaderType.spawnTime, HeaderType.monthSpawn];
const fishes = require("../../assets/Fish.json");

// https://reactnative.dev/docs/0.22/scrollview#scrolleventthrottle
const SCROLL_EVENT_THROTTLE = 12;

export const FishPage = memo(() => {
  const hemisphere = useHemisphereState();

  const fishData: string[][] = fishes.map((fish: Fish) => {
    const monthsData = hemisphere === "north" ? fish.nMonths : fish.sMonths;
    const monthsDisplayName = getDisplayName(monthsData);
    return [fish.name, fish.price, fish.location, fish.spawnTime, monthsDisplayName];
  });

  return (
    <SafeAreaView>
      <ScrollView bounces={false} scrollEventThrottle={SCROLL_EVENT_THROTTLE} >
        <CritterTable header={header} tableData={fishData}/>
      </ScrollView>
    </SafeAreaView>
  );
});
