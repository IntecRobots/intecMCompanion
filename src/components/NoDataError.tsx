import { Image, StyleSheet, Text, View } from "react-native";

interface NoDataErrorProps {
  message: string;
}

const NoDataError: React.FC<NoDataErrorProps> = ({ message }) => {
  return (
    <View style={styles.centered}>
      <Text style={styles.noDataText}>{message}</Text>
      <Image source={require("../../assets/images/errorRobot.png")} style={styles.errorImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  noDataText: {
    color: "gray",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  centered: {
    marginTop: 220,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  errorImage: { height: 200, width: 200 },
});

export default NoDataError;
