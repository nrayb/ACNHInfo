import React, { ReactChild, useEffect, memo } from "react";
import { View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';;
import { useRightHeaderAreaDispatch } from "../context/RightHeaderArea";

interface PageProps {
  children: ReactChild,
  rightHeaderArea?: ReactChild,
}

export const PageContainer = (props: PageProps) => {
  const insets = useSafeArea();
  const navigation = useNavigation();
  const setRightHeaderArea = useRightHeaderAreaDispatch();

  useEffect(() => {
    const unsubscribeBlur = navigation.addListener('blur', () => {
      setRightHeaderArea({ type: "clear" });
    });

    const unsubscribeFocus = navigation.addListener('focus', () => {
      // I should add all the navigation workflow stuff here...
      setRightHeaderArea({ type: "set", payload: props.rightHeaderArea });
    });

    return () => {
      unsubscribeBlur();
      unsubscribeFocus();
    };
  }, [navigation]);

  return (
    <View style={{ paddingBottom: insets.top + insets.bottom }}>
      {props.children}
    </View>
  );
};
