import React, { memo, useState } from "react";
import { StyleSheet } from "react-native";
import { Table, Rows } from "react-native-table-component";
import { TableHeader } from "../TableHeader";
import { HeaderType, sortData } from "../../utils/SortUtils";

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
const fishes = require("../../../assets/Fish.json");
const fishData: string[][] = fishes.map((fish: Fish) => [fish.name, fish.price, fish.location, fish.spawnTime])

const styles = StyleSheet.create({
  table: { width: "100%" },
  headerContainer: {},
  tableText: { margin: 10 },
});

interface FishTableState {
  activeIndex: number;
  tableData: string[][];
  ascending: boolean;
}

export const FishTable = memo(() => {
  // Had to combine the state all into one state since they are all closely coupled.
  // I found that I had to chain "setStates" together when I had to change the value
  // for one of them, So i thought it would be best to just do it all at once.
  const [ state, setState ] = useState<FishTableState>({
    activeIndex: 0,
    ascending: true,
    tableData: sortData(fishData, 0, true, header[0]),
  });

  const handleHeaderCellPressed = (index: number) => {
    setState(({ activeIndex, ascending, tableData }) => {
      if (index === activeIndex) {
        ascending = !ascending;
      } else {
        activeIndex = index;
        ascending = true;
      }

      return {
        activeIndex,
        ascending,
        tableData: sortData(tableData, activeIndex, ascending, header[activeIndex]),
      };
    });
  }

  return (
    <Table style={styles.table} borderStyle={{borderWidth: 1, borderColor: 'red'}}>
      <TableHeader data={header} activeIndex={state.activeIndex} ascending={state.ascending} cellPressedHandler={handleHeaderCellPressed}/>
      <Rows data={state.tableData} textStyle={styles.tableText}/>
    </Table>
  );
});
