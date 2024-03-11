import { ActivityIndicator, View } from "react-native";

interface ScreenLoadingSpinnerProps {
  size: number;
}

const ScreenLoadingSpinner: React.FC<ScreenLoadingSpinnerProps> = ({ size }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingVertical: 10 }}>
      <ActivityIndicator size={size} color="#3673F5" />
    </View>
  );
};

export default ScreenLoadingSpinner;
