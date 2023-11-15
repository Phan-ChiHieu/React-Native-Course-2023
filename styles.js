import { StyleSheet, Platform, PlatformColor } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    // alignItems: "center",
    // justifyContent: "center",
    // flexDirection: "row",
  },
  textStyle: {
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
    fontStyle: "italic",
    padding: 20,
    margin: 10,
    // backgroundColor: "yellow",
  },
  button: {
    backgroundColor: "yellow",
    padding: 20,
    margin: 30,
    alignItems: "center",
    borderWidth: 3,
    borderColor: "green",
    borderRadius: 20,
    width: 300,
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

  input_v2: {
    backgroundColor: "yellow",
    padding: 20,
    borderWidth: 2,
    marginTop: 20,
  },

  input_v3: {
    backgroundColor: "pink",
    padding: 20,
    borderWidth: 2,
    marginTop: 20,
    width: 300,
  },

  img: {
    marginHorizontal: 40,
    width: 80,
    height: 80,
  },

  marginCustom: {
    marginBottom: 100,
  },
  header: {
    fontSize: 30,
  },
  title: {
    fontSize: 20,
  },
  item: {
    backgroundColor: "yellow",
    padding: 20,
    marginVertical: 10,
  },
  text: {
    color: "blue",
    fontFamily: "PingFang SC",
    textDecorationLine: "line-through",
    textDecorationColor: "red",
    textDecorationStyle: "dashed",
  },
});

export default styles;

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    padding: 20,
    ...Platform.select({
      ios: {
        color: PlatformColor("label"),
        backgroundColor: PlatformColor("systemBrown"),
      },
      android: {
        color: PlatformColor("?android:attr/textColor"),
        backgroundColor: PlatformColor("@android:color/holo_blue_bright"),
      },
      default: {
        color: "black",
      },
    }),
  },
});
