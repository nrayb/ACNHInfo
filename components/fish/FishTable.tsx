import React, { memo, useState } from "react";
import { StyleSheet } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

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
  header: {},
  tableText: { margin: 10 },
});

export const FishTable = memo(() => {

  return (
    <Table style={styles.table} borderStyle={{borderWidth: 1, borderColor: 'red'}}>
      <Row data={header} style={styles.header}/>
      <Rows data={fishData} textStyle={styles.tableText}/>
    </Table>
  );
});
