import { StyleSheet } from "react-native";

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
    backgroundColor: "yellow",
    padding: 20,
    margin: 30,
    alignItems: "center",
    borderWidth: 3,
    borderColor: "green",
    borderRadius: 20,
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
  },

  img: {
    marginHorizontal: 40,
    width: 200,
    height: 200,
  },

  marginCustom: {
    marginBottom: 100,
  },
});

export default styles;
