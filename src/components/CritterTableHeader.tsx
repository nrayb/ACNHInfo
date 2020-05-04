import React, { memo } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Row } from 'react-native-table-component';

interface TableHeaderProps {
  data: string[];
  activeIndex: number;
  ascending: boolean;
  cellPressedHandler: (index: number) => void;
}

export const CritterTableHeader = memo((props: TableHeaderProps) => {
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

  return <Row style={styles.container} data={props.data.map(createHeaderCell)}/>;
});

const styles = StyleSheet.create({
  container: { flexDirection: 'row', height: 50, backgroundColor: '#FFF1C1', alignContent: 'center', alignItems: "center", },
  cellText: { margin: 10, textAlign: 'center' },
  headerButton: { flexDirection: 'row', alignItems: "center", },
  activeAscendingButton: { backgroundColor: "blue" },
  activeDescendingbutton: { backgroundColor: "green" },
});
