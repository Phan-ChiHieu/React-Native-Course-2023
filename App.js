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
} from "react-native";
import styles from "./styles";

export default function App() {
  const [name, setName] = useState("Programming Language");
  const [age, setAge] = useState(26);
  const [gender, setGender] = useState("");

  const [person, setPerson] = useState({ name: "EdricPhan", age: 25 });

  const clickMe = () => {
    setName("Ngoc Bich");
    setPerson({ name: "Blue", age: 26 });
  };

  const [fruits, setFruits] = useState([
    { name: "Apple", id: "1" },
    { name: "Mango", id: "2" },
    { name: "Banana", id: "3" },
    { name: "Orange", id: "4" },
    { name: "EdricPhan", id: "5" },
    { name: "Vincente", id: "6" },
    { name: "Apple", id: "7" },
    { name: "Mango", id: "8" },
    { name: "Banana", id: "9" },
    { name: "Orange", id: "10" },
    { name: "EdricPhan", id: "11" },
    { name: "Vincente", id: "12" },
  ]);

  const pressHandler = (_name) => {
    console.log("Press::::", _name);
  };

  const ageHandler = () => {
    if (age > 21) {
      Alert.alert("Yay!!, You can drink !!!");
    } else {
      Alert.alert("oops, Sorry, you can not drink !!!");
    }
  };

  const [dice, setDice] = useState(1);

  const images = {
    pics: {
      0: require("./assets/adaptive-icon.png"),
      1: require("./assets/favicon.png"),
      2: require("./assets/icon.png"),
      3: require("./assets/splash.png"),
    },
  };

  const pressHandlerV2 = () => {
    Alert.alert("Details", "Are you sure you want to submit ?", [
      { text: "Yes", onPress: () => console.log("Yes is pressed") },
      { text: "No", onPress: () => noHandler() },
    ]);
  };

  const noHandler = () => {
    setName(""), setAge(""), setGender("");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textStyle}>Ngoc Bich</Text>
        <Button title="Click Me" color="red" onPress={() => alert("Welcome to programming")} />

        <Text>{name}</Text>
        <View style={styles.button}>
          <Button title="Change" onPress={clickMe} />
        </View>
        <Text>
          My name is: {person.name} and my age is {person.age}
        </Text>

        <Text>Enter your name: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
          placeholder="Enter your name !!!"
        />
        <Text>Enter your age: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(age) => setAge(age)}
          placeholder="Enter your age !!!"
          idboardType="numeric"
        />
        {/* Cmd + k : mở bàn phím ảo */}
        <Text>
          My name is: {name} and my age is {age}
        </Text>

        {/* {fruits.map((item) => {
          return (
            <View id={item.id}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })} */}

        <TextInput style={styles.input_v2} />
        <TextInput style={styles.input_v2} onChangeText={(text) => setAge(text)} />
        <Button title="Can I Drink" onPress={() => ageHandler()} />

        <View style={styles.img}>
          <Image source={require("./assets/favicon.png")} />
        </View>

        {/* <Image source={images.pics[dice]} />
        <Button title="Roll" onPress={() => setDice(Math.floor(Math.random() * 6))} /> */}

        <TextInput
          style={styles.input_v3}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input_v3}
          placeholder="Age"
          onChangeText={(text) => setAge(text)}
        />
        <TextInput
          style={styles.input_v3}
          placeholder="Gender"
          onChangeText={(text) => setGender(text)}
        />
        <Button title="Submit" onPress={() => pressHandlerV2()} />
        <Text style={styles.marginCustom}>
          {name} {age} {gender}
        </Text>
      </ScrollView>

      {/* Khong can ScrollView */}
      {/* <FlatList
        // Nhu key trong array.map()
        keyExtractor={(item) => item.id}
        data={fruits}
        renderItem={({ item }) => (
          <View id={item.id}>
            <TouchableOpacity onPress={() => pressHandler(item.name)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      /> */}
    </View>
  );
}

// 2:09:53
