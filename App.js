import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./styles";

export default function App() {
  const [name, setName] = useState("EdricPhan");

  return (
    // <TouchableWithoutFeedback
    //   onPress={() => {
    //     // close keyboard khi click ra bên ngoài vùng ảnh hưởng
    //     Keyboard.dismiss();
    //     console.log("ketyboard is dissmissed");
    //   }}
    // >
    //   <SafeAreaView style={styles.container}>
    //     <TextInput style={styles.input_v3} placeholder="Enter your name !!!" />
    //   </SafeAreaView>
    // </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input_v3}
          placeholder="Enter your name !!!"
          onChangeText={(text) => setName(text)}
        />
        <TouchableOpacity
          onPress={() => Alert.alert("Your Detail", "You name is " + name.toString())}
        >
          <View style={styles.button}>
            <Text>Press</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

// 2:31