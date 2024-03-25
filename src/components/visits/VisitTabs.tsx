import useTheme from "@/src/hooks/useTheme";
import { Dispatch, SetStateAction } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

interface VisitTabsProps {
    activeTab: string;
    setActiveTab: Dispatch<SetStateAction<string>>;
  }

const VisitTabs: React.FC<VisitTabsProps> = ({ activeTab, setActiveTab}) => {
  const {color} = useTheme();

  return (
    <View style={styles.tabs}>
      <Pressable onPress={() => setActiveTab("upcoming")} style={[styles.tab, activeTab === "upcoming" && styles.activeTab]}>
        <Text style={[styles.tabText, activeTab === "upcoming" && styles.activeTabText]}>Visitas próximas</Text>
      </Pressable>
      <Pressable onPress={() => setActiveTab("all")} style={[styles.tab, activeTab === "all" && styles.activeTab]}>
        <Text style={[styles.tabText,color, activeTab === "all" && styles.activeTabText]}>Todas las visitas</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    tabs: {
      flexDirection: "row",
    },
    tab: {
      flex: 1,
      alignItems: "center",
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: "#292929",
    },
    activeTab: {
      borderBottomWidth: 3,
      borderBottomColor: "#3673F5",
    },
    activeTabText: {
      color: "#3673F5",
    },
    tabText: {
      fontSize: 16,
    },
  });

export default VisitTabs;
