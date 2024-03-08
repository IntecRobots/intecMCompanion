import { Pressable, StyleSheet } from "react-native";
import { Text } from "../Themed";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function NotificationButtonIcon(props: { name: React.ComponentProps<typeof FontAwesome>["name"]; color: string }) {
  return <FontAwesome size={15} style={{ marginBottom: -3 }} {...props} />;
}

const NotificationButtons: React.FC = () => {
  return (
    <>
      <Pressable style={[styles.button, styles.acceptButton]}>
        <NotificationButtonIcon name="check" color="white" />
        <Text style={styles.buttonText}>Aceptar</Text>
      </Pressable>
      <Pressable style={[styles.button, styles.postponeButton]}>
        <NotificationButtonIcon name="times" color="white" />
        <Text style={styles.buttonText}>Posponer</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  acceptButton: {
    backgroundColor: '#007bff',
  },
  postponeButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: 'white',
    marginLeft: 4,
    fontSize: 12,
  },
});

export default NotificationButtons;