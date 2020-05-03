import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer';
import { useHemisphereDispatch } from "../context/Hemisphere";

export const AppDrawer = (props: DrawerContentComponentProps) => {
  const dispatch = useHemisphereDispatch();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Toggle Hemisphere"
        onPress={() => dispatch({ type: "toggle"})}
      />
    </DrawerContentScrollView>
  );
};
