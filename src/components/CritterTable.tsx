import React, { memo, useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Table, Rows } from "react-native-table-component";
import { CritterTableHeader } from "./CritterTableHeader";
import { HeaderType, sortData } from "../utils/SortUtils";

// https://reactnative.dev/docs/0.22/scrollview#scrolleventthrottle
const SCROLL_EVENT_THROTTLE = 12;

const styles = StyleSheet.create({
  table: { width: "100%" },
  headerContainer: {},
  tableText: { margin: 10 },
});

interface CritterTableProps {
  header: HeaderType[];
  tableData: string[][];
}

export const CritterTable = memo((props: CritterTableProps) => {
  const [ activeIndex, setActiveIndex ] = useState<number>(0);
  const [ ascending, setAscending ] = useState<boolean>(true);
  const [ tableData, setTableData ] = useState<Array<string[]>>(sortData(props.tableData, activeIndex, ascending, props.header[activeIndex]));

  const handleHeaderCellPressed = (index: number) => {
    setActiveIndex((currActiveIndex) => {
      const updateAscending = currActiveIndex === index;
      setAscending((currAscending) => {
        const newAscending = updateAscending ? !currAscending : true;
        setTableData(sortData(props.tableData, index, newAscending, props.header[index]));
        return newAscending;
      });
      return index;
    });
  }

  useEffect(() => {
    setTableData(sortData(props.tableData, activeIndex, ascending, props.header[activeIndex]))
  }, [props])

  const borderStyle = {borderWidth: 1, borderColor: 'red'};

  return (
    <>
      <Table style={styles.table} borderStyle={borderStyle}>
        <CritterTableHeader data={props.header} activeIndex={activeIndex} ascending={ascending} cellPressedHandler={handleHeaderCellPressed}/>
      </Table>
      <ScrollView bounces={false} scrollEventThrottle={SCROLL_EVENT_THROTTLE} >
        <Table style={styles.table} borderStyle={borderStyle}>
          <Rows data={tableData} textStyle={styles.tableText}/>
        </Table>
      </ScrollView>
    </>
  );
});
