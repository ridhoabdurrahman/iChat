import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)

      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Chat");
      } else {
        navigation.canGoBack() && navigation.popToTop();
        // User is signed out
      }
    });
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter Your Email"
        label="Email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Enter Your Password"
        label="Password"
        leftIcon={{ type: "material", name: "lock" }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <View style={styles.button}>
        <Button title="Sign In" onPress={signIn} />
      </View>
      <View style={styles.button}>
        <Button
          title="Register"
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
