import React, { useEffect, useState } from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { useHemisphereDispatch } from "../context/Hemisphere";
import { Page, Pages } from "../pages/Pages";

// TODO: add the typing I don't know exactly what the type is yet.
type AppDrawerProps = DrawerContentComponentProps & {rootNavigator: any};

export const AppDrawer = (props: AppDrawerProps) => {
  const dispatch = useHemisphereDispatch();
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
    <DrawerContentScrollView {...props}>
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
      <DrawerItem
        label="Toggle Hemisphere"
        onPress={() => dispatch({ type: "toggle"})}
      />
    </DrawerContentScrollView>
  );
};
