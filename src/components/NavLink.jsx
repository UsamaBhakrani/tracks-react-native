import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
import { useNavigation } from "@react-navigation/native";

const NavLink = ({ title, link }) => {
  return (
    <TouchableOpacity onPress={link}>
      <Spacer>
        <Text style={styles.link}>{title}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "dodgerblue",
    fontSize: 19,
  },
});

export default NavLink;
