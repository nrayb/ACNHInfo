import React, { memo } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Row } from 'react-native-table-component';
import { Icon } from 'react-native-elements';

interface TableHeaderProps {
  data: string[];
  activeIndex: number;
  ascending: boolean;
  cellPressedHandler: (index: number) => void;
}

const SORT_INDICATOR_ICON_SIZE = 15;

export const CritterTableHeader = memo((props: TableHeaderProps) => {
  const createHeaderCell = (headerCellData: string, index: number): React.ReactNode => {
    const { activeIndex, ascending, cellPressedHandler } = props;
    return (
      <TouchableOpacity onPress={() => cellPressedHandler(index)}>
        <View style={ styles.headerButton }>
          <Text style={ styles.cellText }>
            { headerCellData }
          </Text>
          { activeIndex === index && <Icon size={SORT_INDICATOR_ICON_SIZE} type="font-awesome" name={ ascending ? "sort-up" : "sort-down" } /> }
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
});
