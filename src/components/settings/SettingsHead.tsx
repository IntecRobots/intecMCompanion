import React, { useState } from "react";
import StyleOptionSetting from "@/src/components/settings/StyleOptionSetting";
import { Modal, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AppOptionsModal from "./AppOptionsModal";
import RobotOptionsModal from "./RobotOptionsModal";

interface ActiveMode {
  mode: boolean;
}

const SettingsHead: React.FC<ActiveMode> = ({ mode }) => {
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [showRobotOptions, setShowRobotOptions] = useState(false);

  return (
    <>
      <StyleOptionSetting
        text="Opciones app"
        onPress={() => setShowAppOptions(true)}
        isDarkMode={mode}
        flexDirectionRow
      />
      <AppOptionsModal
        visible={showAppOptions}
        onClose={() => setShowAppOptions(false)}
      />
      <StyleOptionSetting
        text="Opciones robot"
        onPress={() => setShowRobotOptions(true)}
        isDarkMode={mode}
        flexDirectionRow
      />
      <RobotOptionsModal
        visible={showRobotOptions}
        onClose={() => setShowRobotOptions(false)}
        options={[]}
      />
    </>
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

export default SettingsHead;
