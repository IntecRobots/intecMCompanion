import { Dispatch, SetStateAction } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface NotificationTabsProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const NotificationTabs: React.FC<NotificationTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.tabs}>
      <Pressable onPress={() => setActiveTab("unread")} style={[styles.tab, activeTab === "unread" && styles.activeTab]}>
        <Text style={[styles.tabText, activeTab === "unread" && styles.activeTabText]}>No leídas</Text>
      </Pressable>
      <Pressable onPress={() => setActiveTab("all")} style={[styles.tab, activeTab === "all" && styles.activeTab]}>
        <Text style={[styles.tabText, activeTab === "all" && styles.activeTabText]}>Todas</Text>
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
    color: "white",
    fontSize: 16,
  },
});

export default NotificationTabs;
