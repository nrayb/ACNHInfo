import React, { memo } from 'react';
import { View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import { CritterTable } from '../components/CritterTable';
import { HeaderType } from '../utils/SortUtils';
import { getDisplayName } from '../utils/MonthUtils';
import { useHemisphereState } from "../context/Hemisphere";
import { Critter } from "../types";

const header = [HeaderType.name, HeaderType.price, HeaderType.location, HeaderType.spawnTime, HeaderType.monthSpawn];
const bugs = require("../../assets/Bugs.json");

export const BugsPage = memo(() => {
  const insets = useSafeArea();
  const hemisphere = useHemisphereState();

  const bugsData: string[][] = bugs.map((bug: Critter) => {
    const monthsData = hemisphere === "north" ? bug.availability.northMonths : bug.availability.southMonths;
    const monthsDisplayName = getDisplayName(monthsData);
    return [bug.name, bug.price, bug.location, bug.spawnTime, monthsDisplayName];
  });

  return (
    // TODO: Look into why the insets need to be like this.
    // This doesn't make sense. Might be something wrong with our nav setup
    <View style={{ paddingBottom: insets.top + insets.bottom }}>
      <CritterTable header={header} tableData={bugsData} />
    </View>
  );
});
