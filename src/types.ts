import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Drawer: undefined,
};

export type DrawerNavigatorProps = {
  navigation: StackNavigationProp<RootStackParamList, "Drawer">,
  route: RouteProp<RootStackParamList, "Drawer">,
}
