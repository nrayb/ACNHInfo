import React, { memo } from 'react';
import { View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import { CritterTable } from '../components/CritterTable';
import { HeaderType } from '../utils/SortUtils';
import { getDisplayName } from '../utils/MonthUtils';
import { useHemisphereState } from "../context/Hemisphere";

interface Bug {
  name: string;
  price: string;
  location: string;
  spawnTime: string;
  nMonths: boolean[];
  sMonths: boolean[];
}

const header = [HeaderType.name, HeaderType.price, HeaderType.location, HeaderType.spawnTime, HeaderType.monthSpawn];
const bugs = require("../../assets/Bugs.json");

export const BugsPage = memo(() => {
  const insets = useSafeArea();
  const hemisphere = useHemisphereState();

  const bugsData: string[][] = bugs.map((bug: Bug) => {
    const monthsData = hemisphere === "north" ? bug.nMonths : bug.sMonths;
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
