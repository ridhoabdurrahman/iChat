import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageURL] = useState("");
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user
          .updateProfile({
            displayName: name,
            photoURL: imageURL
              ? imageURL
              : "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
          })
          .then(() => {
            // Update successful
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        navigation.popToTop();
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter Your Name"
        label="Name"
        leftIcon={{ type: "material", name: "badge" }}
        value={name}
        onChangeText={(text) => setName(text)}
      />
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
      <Input
        placeholder="Enter Your Image URL"
        label="Profile Picture"
        leftIcon={{ type: "material", name: "face" }}
        value={imageURL}
        onChangeText={(text) => setImageURL(text)}
      />
      <View style={styles.button}>
        <Button title="Register" onPress={register} />
      </View>
    </View>
  );
};

export default RegisterScreen;

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
