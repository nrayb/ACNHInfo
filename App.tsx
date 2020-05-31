import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { AppDrawer } from './src/components/AppDrawer';
import { HemisphereProvider } from './src/context/Hemisphere'
import { RightHeaderAreaProvider, useRightHeaderAreaState } from './src/context/RightHeaderArea'
import { Page, Pages } from './src/pages/Pages';
import { DrawerNavigatorProps, RootStackParamList } from './src/types';
import { HeaderIcon } from './src/components/HeaderIcon';

export default function App() {
  const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

  return (
    <HemisphereProvider>
      <RightHeaderAreaProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Navigator>
              <Screen
                name="Drawer"
                component={DrawerNavigator}
                // TODO: Add typing to this function
                options={({ navigation }) => {
                  const rightHeaderButton = useRightHeaderAreaState()

                  const options: StackNavigationOptions = {
                    headerLeft: () => (
                      <HeaderIcon
                        name="bars"
                        gutter="left"
                        onPress={() => {
                          navigation.dispatch(DrawerActions.toggleDrawer());
                        }
                      }/>
                    )
                  }

                  if (rightHeaderButton) { options.headerRight = () => rightHeaderButton }

                  return options;
                }}
              />
            </Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </RightHeaderAreaProvider>
    </HemisphereProvider>
  );
}

const DrawerNavigator = ({ navigation }: DrawerNavigatorProps) => {
  const { Navigator, Screen } = createDrawerNavigator();

  return (
    <Navigator drawerContent={(props) => <AppDrawer {...props} rootNavigator={navigation}/>}>
      {
        Object.keys(Pages).map((page) => (
          <Screen key={page} name={page} component={Pages[page as Page]} />
        ))
      }
    </Navigator>
  );
};
