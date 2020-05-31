import React, { memo } from 'react';
import { PageContainer } from "./PageContainer";
import { CritterTable } from '../components/CritterTable';
import { HeaderType } from '../utils/SortUtils';
import { getDisplayName } from '../utils/MonthUtils';
import { HeaderIcon } from '../components/HeaderIcon';
import { useHemisphereState } from "../context/Hemisphere";
import { Critter } from "../types";

const header = [HeaderType.name, HeaderType.price, HeaderType.location, HeaderType.spawnTime, HeaderType.monthSpawn];
const fishes = require("../../assets/Fish.json");

export const FishPage = memo(() => {
  const hemisphere = useHemisphereState();
  const fishData: string[][] = fishes.map((fish: Critter) => {
    const monthsData = hemisphere === "North" ? fish.availability.northMonths : fish.availability.southMonths;
    const monthsDisplayName = getDisplayName(monthsData);
    return [fish.name, fish.price, fish.location, fish.spawnTime, monthsDisplayName];
  });

  const rightHeaderArea = (
    <HeaderIcon
      name="filter"
      gutter="right"
      onPress={() => {

      }}
    />
  );

  return (
    <PageContainer rightHeaderArea={rightHeaderArea}>
      <CritterTable header={header} tableData={fishData} />
    </PageContainer>
  );
});
