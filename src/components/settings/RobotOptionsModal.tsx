import React, { useState } from "react";
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const RobotOptionsModal: React.FC<Props> = ({ visible, onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={onClose}>
            <Icon name="arrow-left" size={25} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Opciones del Robot</Text>
        </View>
        {/* Opción con desplegable */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <Text style={styles.optionText}>Dile que vaya a algún lugar</Text>
          <Icon
            name={isDropdownOpen ? "chevron-down" : "chevron-left"}
            size={20}
            color="white"
            style={{ ...styles.arrow, opacity: 0.5 }}
          />
        </TouchableOpacity>
        <View style={styles.option}>
          <Text style={styles.optionText}>TTS:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa el texto"
            placeholderTextColor="grey"
          />
        </View>
        {isDropdownOpen && (
          <View style={styles.dropdown}>
            {/* Aquí van tus subopciones */}
            <TouchableOpacity style={styles.option}>
              <Text style={styles.suboptionText}>Subopción 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.suboptionText}>Subopción 2</Text>
            </TouchableOpacity>
            {/* Añade más subopciones según necesites */}
          </View>
        )}
        <View style={styles.line} />
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Mapas del robot incorporados</Text>
        </TouchableOpacity>
        <View style={styles.line} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "black",
    color: "black",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    fontSize: 14,
    flex: 1,
    marginLeft: 10,
  },
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    color: "white",
  },
  line: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  arrow: {
    // Ajusta el estilo si es necesario
  },
  dropdown: {
    paddingLeft: 20, // Añade indentación para las subopciones
    // Ajusta el estilo según necesites
  },
  suboptionText: {
    color: "white",
    fontSize: 14,
    paddingVertical: 5, // Ajusta el espaciado vertical entre subopciones
  },
});

export default RobotOptionsModal;
