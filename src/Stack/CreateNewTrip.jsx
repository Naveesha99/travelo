import { View, Text, TextInput } from "react-native";
import React from "react";

const CreateNewTrip = () => {
  return (
    <View>
      <TextInput
        placeholder="Trip Name"
        style={{
          borderWidth: 1,
          borderColor: "#000",
          padding: 10,
          marginBottom: 20,
        }}
      />
    </View>
  );
};

export default CreateNewTrip;
