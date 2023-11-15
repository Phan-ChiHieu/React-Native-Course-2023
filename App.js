import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
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
  Pressable,
  RefreshControl,
  InputAccessoryView,
  Appearance,
  useColorScheme,
  Platform,
  Animated,
  ActionSheetIOS,
  Vibration,
} from "react-native";
import styles, { styled } from "./styles";
import Slider from "@react-native-community/slider";

export default function App() {
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

  const [refresh, setRefresh] = useState(false);

  const pullMe = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 4000);
  };

  const [info, setInfo] = useState("");

  const inputAccessoryView = "id";

  // Start Cach 1
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  const [name, setName] = useState("EdricPhan");
  const [age, setAge] = useState(0);

  useEffect(() => {
    const themeListener = Appearance.addChangeListener((scheme) => {
      setColorScheme(scheme.colorScheme);
    });

    return () => {
      themeListener.remove();
    };
  }, []);

  const isDarkMode = colorScheme === "dark";

  // End Cach 1

  // Start Cach 2

  // const currentColorScheme = useColorScheme();
  // console.log({ currentColorScheme });
  // const isDarkMode = currentColorScheme === "dark";

  // End Cach 2

  const fadeAmin = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAmin, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAmin, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const [result, setResult] = useState(0);

  const onPress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Generate Number", "Reset"],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: "dark",
        title: "Generate Number",
        message: "Generate ramdom Number",
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
        } else if (buttonIndex === 1) {
          setResult(Math.floor(Math.random() * 100) + 1);
        } else if (buttonIndex === 2) {
          setResult("Random Number");
        }
      }
    );
  };

  const onLongPress = () => {
    //
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Clear Text"],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
        userInterfaceStyle: "dark",
      },
      (buttonIndex) => {
        //
        if (buttonIndex === 0) {
        } else if (buttonIndex === 1) {
          setName("");
        }
      }
    );
  };

  const clickMe = () => {
    //
    Alert.prompt(
      "Welcome",
      "Please enter your name",
      [
        {
          text: "Submit",
          onPress: (text) => setName(text),
        },
        {
          text: "Cancle",
          onPress: () => console.log("Cancle is pressed"),
        },
      ],
      //  text
      // "plain-text",

      // password
      // "secure-text",

      // login and password
      "login-password",
      "Name"
    );
  };

  // const ONE_SECOND_IN_MS = 1000;

  // const PATTERN = [1 * ONE_SECOND_IN_MS, 2 * ONE_SECOND_IN_MS, 3 * ONE_SECOND_IN_MS];

  // const PATTERN_DESC = "Wait 1s, vibrate 2s, wait 3s";

  const [range, setRange] = useState(0);

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

    // <SafeAreaView style={styles.container}>
    //   <SectionList
    //     sections={DATA}
    //     keyExtractor={(item, index) => item + index}
    //     renderItem={({ item }) => <Item title={item} />}
    //     renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
    //   />
    // </SafeAreaView>

    // <SafeAreaView style={styles.container}>
    //   <Text>{name}</Text>
    //   <Pressable
    //     style={({ pressed }) => [{ backgroundColor: pressed ? "red" : "yellow" }, styles.textStyle]}
    //   >
    //     {({ pressed }) => <Text>{pressed ? "Pressed" : "Press Me"}</Text>}
    //   </Pressable>
    // </SafeAreaView>

    // <SafeAreaView style={styles.container}>
    //   {/* Kéo scroll  */}
    //   <ScrollView
    //     refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />}
    //   >
    //     <Text>Pull me refresh</Text>
    //   </ScrollView>

    //   <TextInput
    //     placeholder="Enter infomation"
    //     onChange={(text) => setInfo(text)}
    //     value={info}
    //     style={styles.input_v3}
    //     inputAccessoryViewID={inputAccessoryView}
    //   />
    //   <InputAccessoryView nativeID={inputAccessoryView}>
    //     <Button title="Clear Text" onPress={() => setInfo("")} />
    //   </InputAccessoryView>

    //   <Text style={styles.text}>
    //     In the expo we have an expo-font package that provides useFonts hooks, using this hook we
    //     can easily use any custom font. The initial step is the same — to fetch the fonts, create
    //     the “fonts” directory under assets and move the fonts there. There are two ways to
    //     initialize fonts in an Expo app; using hooks for functional components at root, or using the
    //     async function for the class components.
    //   </Text>

    //   <Image style={styles.img} source={require("./assets/favicon.png")} resizeMode="contain" />
    // </SafeAreaView>
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //     padding: 20,
    //     backgroundColor: !isDarkMode ? "white" : "gray",
    //   }}
    // >
    //   <TextInput
    //     style={{
    //       marginTop: 20,
    //       backgroundColor: !isDarkMode ? "gray" : "white",
    //       color: !isDarkMode ? "white" : "black",
    //       padding: 20,
    //     }}
    //     placeholder="Enter your name"
    //     onChangeText={(text) => setName(text)}
    //   />
    //   <TextInput
    //     style={{
    //       marginTop: 20,
    //       backgroundColor: !isDarkMode ? "gray" : "white",
    //       color: !isDarkMode ? "white" : "black",
    //       padding: 20,
    //     }}
    //     placeholder="Enter your age"
    //     onChangeText={(age) => setAge(age)}
    //   />
    //   <Text
    //     style={{
    //       fontSize: 20,
    //       marginTop: 20,
    //       color: !isDarkMode ? "black" : "white",
    //     }}
    //   >
    //     My name: {name} and age: {age}
    //   </Text>
    // </SafeAreaView>

    // <SafeAreaView style={styles.container}>
    //   <Text>OS</Text>
    //   <Text>{Platform.OS}</Text>

    //   <Text>OS Version</Text>
    //   <Text>{Platform.Version}</Text>

    //   <Text>isTV</Text>
    //   <Text>{Platform.isTV.toString()}</Text>

    //   {Platform.OS === "ios" && (
    //     <>
    //       <Text>isPad</Text>
    //       <Text>{Platform.isPad.toString()}</Text>
    //     </>
    //   )}

    //   <Text>Constant</Text>
    //   <Text>{JSON.stringify(Platform.constants, null, 2)}</Text>
    // </SafeAreaView>

    // <SafeAreaView style={styles.container}>
    //   <Animated.View
    //     style={[
    //       styles.item,
    //       {
    //         opacity: fadeAmin,
    //       },
    //     ]}
    //   >
    //     <Text style={styles.title}>Phan Chi Hieu</Text>
    //   </Animated.View>
    //   <View>
    //     <Button title="Fade In" onPress={fadeIn} />
    //     <Button title="Fade Out" onPress={fadeOut} />
    //   </View>
    // </SafeAreaView>
    <View style={styled.container}>
      {/* <Text style={styled.label}>I am a native label</Text> */}

      {/* <Text style={styles.result}>{result}</Text>
      <Button title="Show Action Sheet" onPress={onPress} /> */}

      {/* <TextInput
        style={styles.input_v3}
        onChangeText={(text) => setName(text)}
        placeholder="Enter Your Name !!!"
        value={name}
      />
      <TouchableOpacity
        onPress={() => Alert.alert("Welcome", "Hello " + name + ", Welcome to our app")}
        onLongPress={onLongPress}
      >
        <View style={styles.button}>
          <Text>Submit</Text>
        </View>
      </TouchableOpacity> */}

      {/* <Text>{name}</Text>
      <Button title="click" onPress={clickMe} /> */}

      {/* <Text style={[styles.title, styles.textStyle]}>Vibration API</Text>
      <View>
        <Button title="Vibrate once" onPress={() => Vibration.vibrate()} />
      </View>

      <View>
        <Button
          title="Vibrate for 10 seconds"
          onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}
        />
      </View>

      <Button title="Vibrate with pattern" onPress={() => Vibration.vibrate(PATTERN)} />

      <Text style={styles.title}>Pattern: {PATTERN_DESC}</Text>
      <Button
        title="Vibrate with pattern until cancelled"
        onPress={() => Vibration.vibrate(PATTERN, true)}
      />

      <Button
        title="Vibrate with pattern until cancelled"
        onPress={() => Vibration.cancel()}
        color="#FF0000"
      /> */}

      <Text style={{ fontSize: 40, fontWeight: "bold", opacity: range }}>Visible</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>{Math.floor(range * 100)}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#cccccc"
        onValueChange={(value) => setRange(value)}
        thumbTintColor="yellow"
      />
    </View>
  );
}

// 8:44
