import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
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
  Switch,
  SectionList,
} from "react-native";
import styles from "./styles";

export default function App() {
  // const [name, setName] = useState("EdricPhan");
  // const [number, setNumber] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);

  const onToggleSwitch = () => {
    setIsEnabled((prev) => !prev);
  };

  // useEffect(() => {
  //   if (number > 30) {
  //     console.warn("DOM is updated", number);
  //   }
  // });

  const DATA = [
    { title: "Main Items", data: ["Pizza", "Burger"] },
    { title: "Sides", data: ["French Sides", "Onion Sides"] },
    { title: "Drinks", data: ["Coca Cola", "Water"] },
    { title: "Desscerts", data: ["Ice Cream", "Cake"] },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

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

    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    //   <SafeAreaView style={styles.container}>
    //     <TextInput
    //       style={styles.input_v3}
    //       placeholder="Enter your name !!!"
    //       onChangeText={(text) => setName(text)}
    //     />
    //     <TouchableOpacity
    //       onPress={() => Alert.alert("Your Detail", "You name is " + name.toString())}
    //     >
    //       <View style={styles.button}>
    //         <Text>Press</Text>
    //       </View>
    //     </TouchableOpacity>
    //   </SafeAreaView>
    // </TouchableWithoutFeedback>
    // <SafeAreaView style={styles.container}>
    //   <Text style={styles.textStyle}>{number}</Text>
    //   <Button title="Update" onPress={() => setNumber(number + 1)} />
    //   <View
    //     style={{
    //       backgroundColor: "blue",
    //       flex: 1,
    //     }}
    //   ></View>
    //   <View
    //     style={{
    //       backgroundColor: "yellow",
    //       flex: 1,
    //     }}
    //   ></View>
    //   <View
    //     style={{
    //       backgroundColor: "green",
    //       flex: 1,
    //     }}
    //   ></View>
    // </SafeAreaView>

    // <SafeAreaView style={styles.container}>
    //   <Switch
    //     trackColor={{ false: "red", true: "green" }}
    //     thumbColor={isEnabled ? "yellow" : "pink"}
    //     onValueChange={onToggleSwitch}
    //     value={isEnabled}
    //     // tren IOS
    //     ios_backgroundColor="red"
    //   />
    // </SafeAreaView>
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
      />
    </SafeAreaView>
  );
}

// 4:32
