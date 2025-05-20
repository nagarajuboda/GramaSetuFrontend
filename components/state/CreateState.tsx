import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const CreateState = () => {
  const [stateName, setStateName] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [stateCapital, setStateCapital] = useState("");
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPhone, setAdminPhone] = useState("");
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const handleSubmit = () => {
    const newState = {
      stateName,
      stateCode,
      stateCapital,
      adminDetails: {
        name: adminName,
        email: adminEmail,
        phone: adminPhone,
        username: adminUsername,
        password: adminPassword,
      },
    };

    // Here, you would typically send 'newState' to your backend or database
    // For demonstration, we'll just display an alert
    // Alert.alert("State Created", `State ID: ${uniqueID}`);

    // Reset form fields
    setStateName("");
    setStateCode("");
    setStateCapital("");
    setAdminName("");
    setAdminEmail("");
    setAdminPhone("");
    setAdminUsername("");
    setAdminPassword("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create New State</Text>

      <Text style={styles.label}>State Name</Text>
      <TextInput
        style={styles.input}
        value={stateName}
        onChangeText={setStateName}
        placeholder="Enter state name"
      />

      <Text style={styles.label}>State Code</Text>
      <TextInput
        style={styles.input}
        value={stateCode}
        onChangeText={setStateCode}
        placeholder="Enter state code"
      />

      <Text style={styles.label}>State Capital</Text>
      <TextInput
        style={styles.input}
        value={stateCapital}
        onChangeText={setStateCapital}
        placeholder="Enter state capital"
      />

      <Text style={styles.subheading}>Admin Details</Text>

      <Text style={styles.label}>Admin Name</Text>
      <TextInput
        style={styles.input}
        value={adminName}
        onChangeText={setAdminName}
        placeholder="Enter admin name"
      />

      <Text style={styles.label}>Admin Email</Text>
      <TextInput
        style={styles.input}
        value={adminEmail}
        onChangeText={setAdminEmail}
        placeholder="Enter admin email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Admin Phone</Text>
      <TextInput
        style={styles.input}
        value={adminPhone}
        onChangeText={setAdminPhone}
        placeholder="Enter admin phone"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Admin Username</Text>
      <TextInput
        style={styles.input}
        value={adminUsername}
        onChangeText={setAdminUsername}
        placeholder="Enter admin username"
      />

      <Text style={styles.label}>Admin Password</Text>
      <TextInput
        style={styles.input}
        value={adminPassword}
        onChangeText={setAdminPassword}
        placeholder="Enter admin password"
        secureTextEntry
      />

      <Button title="Create State" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
});

export default CreateState;
