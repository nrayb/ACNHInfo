import React, { memo } from 'react';
import { View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import { CritterTable } from '../components/CritterTable';
import { HeaderType } from '../utils/SortUtils';
import { getDisplayName } from '../utils/MonthUtils';
import { useHemisphereState } from "../context/Hemisphere";
import { Critter } from "../types";

const header = [HeaderType.name, HeaderType.price, HeaderType.location, HeaderType.spawnTime, HeaderType.monthSpawn];
const fishes = require("../../assets/Fish.json");

export const FishPage = memo(() => {
  const insets = useSafeArea();
  const hemisphere = useHemisphereState();

  const fishData: string[][] = fishes.map((fish: Critter) => {
    const monthsData = hemisphere === "North" ? fish.availability.northMonths : fish.availability.southMonths;
    const monthsDisplayName = getDisplayName(monthsData);
    return [fish.name, fish.price, fish.location, fish.spawnTime, monthsDisplayName];
  });

  return (
    // TODO: Look into why the insets need to be like this.
    // This doesn't make sense. Might be something wrong with our nav setup
    <View style={{ paddingBottom: insets.top + insets.bottom }}>
      <CritterTable header={header} tableData={fishData} />
    </View>
  );
});
