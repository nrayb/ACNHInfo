import React, { memo, useState } from "react";
import { StyleSheet } from "react-native";
import { Table, Rows } from "react-native-table-component";
import { TableHeader } from "../TableHeader";

interface Fish {
  name: string;
  price: string;
  location: string;
  shadowSize: string;
  spawnTime: string;
  nMonths: Record<string, boolean>;
  sMonths: Record<string, boolean>;
}

const header = ['Name', 'Price', 'Location', 'Time'];
const fishes = require("../../assets/Fish.json");
const fishData = fishes.map((fish: Fish) => [fish.name, fish.price, fish.location, fish.spawnTime])

const styles = StyleSheet.create({
  table: { width: "100%" },
  headerContainer: {},
  tableText: { margin: 10 },
});

export const FishTable = memo(() => {
  const [ activeIndex, setActiveIndex ] = useState<number>(0);

  return (
    <Table style={styles.table} borderStyle={{borderWidth: 1, borderColor: 'red'}}>
      <TableHeader data={header} activeIndex={activeIndex} cellPressedHandler={setActiveIndex}/>
      <Rows data={fishData} textStyle={styles.tableText}/>
    </Table>
  );
});
