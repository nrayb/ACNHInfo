import React, { memo } from 'react';
import { PageContainer } from "./PageContainer";
import { CritterTable } from '../components/CritterTable';
import { HeaderType } from '../utils/SortUtils';
import { getDisplayName } from '../utils/MonthUtils';
import { HeaderIcon } from '../components/HeaderIcon';
import { useHemisphereState } from "../context/Hemisphere";
import { Critter } from "../types";

const header = [HeaderType.name, HeaderType.price, HeaderType.location, HeaderType.spawnTime, HeaderType.monthSpawn];
const bugs = require("../../assets/Bugs.json");

export const BugsPage = memo(() => {
  const hemisphere = useHemisphereState();
  const bugsData: string[][] = bugs.map((bug: Critter) => {
    const monthsData = hemisphere === "North" ? bug.availability.northMonths : bug.availability.southMonths;
    const monthsDisplayName = getDisplayName(monthsData);
    return [bug.name, bug.price, bug.location, bug.spawnTime, monthsDisplayName];
  });

  const rightHeaderArea = (
    <HeaderIcon
      name="bug"
      gutter="right"
      onPress={() => {

      }}
    />
  );

  return (
    <PageContainer rightHeaderArea={rightHeaderArea}>
      <CritterTable header={header} tableData={bugsData} />
    </PageContainer>
  );
});
