import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface ScreenLoadingSpinnerProps {
  size: number;
  message: string;
}

const ScreenLoadingSpinner: React.FC<ScreenLoadingSpinnerProps> = ({ size, message }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingVertical: 10 }}>
      <ActivityIndicator size={size} color="#3673F5" />
      <Text style={styles.loadingText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingText: {
    color: "white",
    fontFamily: "Poppins",
    marginTop: 30,
    fontSize: 14,
    textAlign: "center",
  },
});

export default ScreenLoadingSpinner;
