import React, { memo } from 'react';
import { Icon } from 'react-native-elements';

const DEFAULT_PADDING = 5;
const GUTTER_PADDING = 30;
const HEADER_ICON_SIZE = 25;

type HeaderIconNames = "bars" | "filter" | "bug";
type GutterType = "left" | "right";
interface Props {
  gutter?: GutterType;
  name: HeaderIconNames;
  onPress: () => void;
}

export const HeaderIcon = memo(({ gutter, name, onPress }: Props) => {
  return (
    <Icon
      size={HEADER_ICON_SIZE}
      style={{
        padding: DEFAULT_PADDING,
        paddingLeft: gutter === "left" ? GUTTER_PADDING : DEFAULT_PADDING,
        paddingRight: gutter === "right" ? GUTTER_PADDING : DEFAULT_PADDING,
      }}
      type="font-awesome"
      name={name}
      onPress={onPress}
    />
  );
});

