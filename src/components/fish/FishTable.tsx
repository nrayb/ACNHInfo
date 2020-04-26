import React, { memo, useState } from "react";
import { StyleSheet } from "react-native";
import { Table, Rows } from "react-native-table-component";
import { TableHeader } from "../TableHeader";
import { HeaderType, sortData } from "../../utils/SortUtils";

const styles = StyleSheet.create({
  table: { width: "100%" },
  headerContainer: {},
  tableText: { margin: 10 },
});

interface FishTableProps {
  header: HeaderType[];
  tableData: string[][];
}

interface FishTableState {
  activeIndex: number;
  tableData: string[][];
  ascending: boolean;
}

export const FishTable = memo((props: FishTableProps) => {
  // Had to combine the state all into one state since they are all closely coupled.
  // I found that I had to chain "setStates" together when I had to change the value
  // for one of them, So i thought it would be best to just do it all at once.
  const [ state, setState ] = useState<FishTableState>({
    activeIndex: 0,
    ascending: true,
    tableData: sortData(props.tableData, 0, true, props.header[0]),
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
        tableData: sortData(tableData, activeIndex, ascending, props.header[activeIndex]),
      };
    });
  }

  return (
    <Table style={styles.table} borderStyle={{borderWidth: 1, borderColor: 'red'}}>
      <TableHeader data={props.header} activeIndex={state.activeIndex} ascending={state.ascending} cellPressedHandler={handleHeaderCellPressed}/>
      <Rows data={state.tableData} textStyle={styles.tableText}/>
    </Table>
  );
});
