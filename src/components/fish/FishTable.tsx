import React, { memo, useEffect, useState } from "react";
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

export const FishTable = memo((props: FishTableProps) => {
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

  return (
    <Table style={styles.table} borderStyle={{borderWidth: 1, borderColor: 'red'}}>
      <TableHeader data={props.header} activeIndex={activeIndex} ascending={ascending} cellPressedHandler={handleHeaderCellPressed}/>
      <Rows data={tableData} textStyle={styles.tableText}/>
    </Table>
  );
});
