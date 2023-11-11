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
} from "react-native";

export default function App() {
  const [name, setName] = useState("Programming Language");
  const [age, setAge] = useState(26);

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
      </ScrollView>

      {/* Khong can ScrollView */}
      <FlatList
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  textStyle: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    margin: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 150,
  },

  item: {
    fontSize: 22,
    backgroundColor: "yellow",
    marginTop: 20,
    padding: 20,
  },
});
