// AppOptionsModal.tsx
import React from "react";
import { Modal, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const AppOptionsModal: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={onClose}>
            <Icon name="arrow-left" size={25} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Opciones de la Aplicación</Text>
        </View>
        {/* Opciones */}
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Opción app 1</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Opción app 2</Text>
        </TouchableOpacity>
        {/* Línea gris */}
        <View style={styles.line} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  option: {
    padding: 15,
  },
  optionText: {
    fontSize: 16,
    color: "white",
  },
  line: {
    height: 1, // Ajusta el grosor según sea necesario
    backgroundColor: "rgba(255, 255, 255, 0.4)", // Ajusta la transparencia según sea necesario
  },
});

export default AppOptionsModal;
