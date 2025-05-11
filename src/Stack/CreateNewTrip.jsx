import { View, Text, TextInput, StyleSheet, Dimensions, ScrollView } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const CreateNewTrip = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.formContainer}>
          {/* Add TextInput for trip name */}
          <Text style={styles.label}>Trip Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Trip Name"
            // value={tripName}
            // onChange={(e) => setTripName(e.target.value)}
          />

          {/* Add TextInput for start date */}
          <Text style={styles.label}>Start Date</Text>
          <TextInput
            style={styles.input}
            placeholder="Start Date"
            // value={startDate}
            // onChange={(e) => setStartDate(e.target.value)}
          />

          {/* Add TextInput for end date */}
          <Text style={styles.label}>End Date</Text>
          <TextInput
            style={styles.input}
            placeholder="End Date"
            // value={endDate}
            // onChange={(e) => setEndDate(e.target.value)}
          />

          {/* Add TextInput for description */}
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            placeholder="Description"
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
            multiline
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateNewTrip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: width,
  },
  scrollContent: {
    paddingBottom: 70,
  },
   formContainer: {
    flex: 1,
    width: width,
    alignSelf: "center",
    padding: 10,
  },
  input: {
    width: "100%",
    height: 45,
    marginVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#333",
  },
});
