import React, { useEffect, useState } from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { useHemisphereDispatch, useHemisphereState } from "../context/Hemisphere";
import { Page, Pages } from "../pages/Pages";
import { StyleSheet, View, Text } from "react-native";

// TODO: add the typing I don't know exactly what the type is yet.
type AppDrawerProps = DrawerContentComponentProps & {rootNavigator: any};

const HEMISPHERE_LABEL = "Hemisphere";

const styles = StyleSheet.create({
  drawerContents: { flex: 1, justifyContent: "space-between" },
  pageContainers: {  },
  preferences: { paddingBottom: 30, width: "100%" },
  preferencesItem: { backgroundColor: "red", display: "flex", alignContent: "stretch" },
  hemispherePreference: {
    width: "100%",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
});

export const AppDrawer = (props: AppDrawerProps) => {
  const dispatch = useHemisphereDispatch();
  const hemisphere = useHemisphereState();
  const [ activePage, updateActivePage ] = useState<Page>(Page.fish);

  // Not Sure if this is the ideal way to do this,
  // Actually I know that this is probably really dirty.
  // There must be some way to link the title to the embedded navigators
  // But my lazy butt couldn't find it in my quick googling. So hence I have this.
  useEffect(() => {
    props.rootNavigator.setOptions({ title: activePage });
    props.navigation.navigate(activePage)
  }, []);

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ height: "100%" }} >
      <View style={styles.drawerContents}>
        <View style={styles.pageContainers}>
          { Object.keys(Pages).map((page) => (
            <DrawerItem
              key={page}
              label={page}
              focused={activePage === page}
              onPress={() => {
                updateActivePage(page as Page);
                props.rootNavigator.setOptions({ title: page });
                props.navigation.navigate(page);
              }}
            />
          )) }
        </View>
        <View style={styles.preferences}>
          <DrawerItem
            style={ styles.preferencesItem }
            label={() => (
              <View style={ styles.hemispherePreference }>
                <Text>{HEMISPHERE_LABEL}</Text>
                <Text>{hemisphere}</Text>
              </View>
            )}
            onPress={() => dispatch({ type: "toggle"})}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
