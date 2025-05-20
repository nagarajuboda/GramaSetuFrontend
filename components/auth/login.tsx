import axios from "axios";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const sendOtp = async () => {
    if (!phoneNumber.match(/^\d{10}$/)) {
      Alert.alert("Invalid", "Enter valid 10-digit phone number");
      return;
    }
    setLoading(true);
    try {
      console.log("hi");
      debugger;
      const response = await axios.post(
        "http://192.168.1.10:8081/api/User/GetOTP",
        { phoneNumber },
        {
          headers: {
            "Content-Type": "application/json",
            // "Authorization": "Bearer your_token_if_needed"
          },
        }
      );
      console.log("OTP Response:", response.data);
      setOtpSent(true);
      Alert.alert("OTP Sent", "Check your SMS inbox");
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp.match(/^\d{6}$/)) {
      Alert.alert("Invalid", "Enter valid 6-digit OTP");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        "https://your-api-url.com/api/auth/verify-otp",
        {
          phoneNumber,
          otp,
        }
      );
      const token = res.data.token;
      Alert.alert("Success", "Logged in successfully!");

      // Navigate on success

      // Save token to AsyncStorage or navigate to dashboard
    } catch (err) {
      Alert.alert("Error", "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/GramaSetuBidge.png")}
          // style={styles.logo}
        />
        <Text style={styles.title}>GramaSetu</Text>
      </View>

      <View style={styles.otpInput}>
        <View style={styles.countryCode}>
          <Text style={styles.countryText}>+91</Text>
        </View>
        <TextInput
          style={styles.otpField}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          maxLength={10}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          editable={!otpSent}
        />
      </View>

      {otpSent && (
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          keyboardType="number-pad"
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
        />
      )}

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={otpSent ? verifyOtp : sendOtp}
        >
          <Text style={styles.buttonText}>
            {otpSent ? "Verify OTP" : "Send OTP"}
          </Text>
        </TouchableOpacity>
      )}

      <Text style={styles.infoText}>
        By logging in, you agree to our Terms & Privacy Policy.
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    backgroundColor: "#f0f8ff",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C3E50",
    marginTop: 8,
  },
  input: {
    height: 50,
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    elevation: 2,
  },
  otpInput: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  countryCode: {
    height: 50,
    width: 60,
    backgroundColor: "#fff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  countryText: {
    fontSize: 16,
    color: "#333",
  },
  otpField: {
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 10,
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  infoText: {
    fontSize: 13,
    color: "#555",
    textAlign: "center",
    marginTop: 16,
    lineHeight: 20,
  },
});
