import React from "react";
import { View } from "react-native";
import { useLinkBuilder } from "@react-navigation/native";
import { PlatformPressable } from "@react-navigation/elements";
import PropTypes from "prop-types";

function MyTabBar({ state, descriptors, navigation }) {
  const { buildHref } = useLinkBuilder();

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        backgroundColor: "#cbebf4",
        height: 60,
        padding: 8,
        margin: 15,
        borderRadius: 50,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        // Get the icon from options
        const icon = options.tabBarIcon
          ? options.tabBarIcon({
              color: isFocused ? "#07dfd4" : "#343434",
              size: 24,
            })
          : null;

        return (
          <PlatformPressable
            key={index}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </PlatformPressable>
        );
      })}
    </View>
  );
}

// PropTypes validation
MyTabBar.propTypes = {
  state: PropTypes.shape({
    index: PropTypes.number.isRequired,
    routes: PropTypes.array.isRequired,
  }).isRequired,
  descriptors: PropTypes.object.isRequired,
  navigation: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default MyTabBar;
