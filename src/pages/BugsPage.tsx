import React, { memo } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
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
  const hemisphere = useHemisphereState();

  const bugsData: string[][] = bugs.map((bug: Bug) => {
    const monthsData = hemisphere === "north" ? bug.nMonths : bug.sMonths;
    const monthsDisplayName = getDisplayName(monthsData);
    return [bug.name, bug.price, bug.location, bug.spawnTime, monthsDisplayName];
  });

  return (
    <SafeAreaView>
      <CritterTable header={header} tableData={bugsData}/>
    </SafeAreaView>
  );
});
