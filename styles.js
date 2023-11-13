import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
  },
  textStyle: {
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
    fontStyle: "italic",
    padding: 10,
    margin: 10,
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
});

export default styles;
