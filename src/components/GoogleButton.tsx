import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { StyleSheet, View } from "react-native";
import { googleSignIn } from "../utils/googleSignIn";

const GoogleButton: React.FC = () => {
  return (
    <View style={styles.googleButton}>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        style={styles.googleButton}
        onPress={async () => googleSignIn()}
      />
    </View>
  );
};

const styles = StyleSheet.create({ googleButton: { marginTop: 20, alignItems: "center" } });

export default GoogleButton;
