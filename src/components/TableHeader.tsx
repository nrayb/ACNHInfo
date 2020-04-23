import React, { memo } from 'react';
import { TouchableOpacity, View, Text, Button, StyleSheet } from 'react-native';
import { Cell, TableWrapper } from 'react-native-table-component';

interface TableHeaderProps {
  data: string[];
  activeIndex: number;
  ascending: boolean;
  cellPressedHandler: (index: number) => void;
}

export const TableHeader = memo((props: TableHeaderProps) => {
  const createHeaderCell = (headerCellData: string, index: number): React.ReactNode => {
    const { activeIndex, ascending, cellPressedHandler } = props;
    const viewStyle = index === activeIndex ? { ...styles.headerButton, ...(ascending ? styles.activeAscendingButton : styles.activeDescendingbutton) } : styles.headerButton;
    return (
      <TouchableOpacity onPress={() => cellPressedHandler(index)}>
        <View style={ viewStyle }>
          <Text style={ styles.cellText }>
            { headerCellData }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TableWrapper style={styles.container}>
      {
        props.data.map((cellString, index) => (
          <Cell key={index} data={createHeaderCell(cellString, index)} textStyle={styles.cellText}/>
        ))
      }
    </TableWrapper>
  );
});

const styles = StyleSheet.create({
  container: { flexDirection: 'row', height: 50, backgroundColor: '#FFF1C1', alignContent: 'center', alignItems: "center", },
  cellText: { margin: 10, textAlign: 'center' },
  headerButton: { flexDirection: 'row', alignItems: "center", },
  activeAscendingButton: { backgroundColor: "blue" },
  activeDescendingbutton: { backgroundColor: "green" },
});
