import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DUMMY_NOTIFICATIONS } from '@/src/utils/dummy_notifications';
import Notification from '@/src/components/Notification';

const TabOneScreen = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Cambia a las notificaciones del backend según sea necesario
  const notifications = DUMMY_NOTIFICATIONS.filter(notification =>
    activeTab === 'all' ? true : notification.isUnread
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Pressable
          onPress={() => setActiveTab('all')}
          style={[styles.tab, activeTab === 'all' && styles.activeTab]}
        >
          <Text style={styles.tabText}>Todas</Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab('unread')}
          style={[styles.tab, activeTab === 'unread' && styles.activeTab]}
        >
          <Text style={styles.tabText}>No leídas</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.notificationsContainer}>
        {notifications.length ? (
          notifications.map(notification => (
            <Notification
              key={notification.id}
              message={notification.message}
              isUnread={notification.isUnread}
              showButtons={notification.showButtons}
            />
          ))
        ) : (
          <Text style={styles.noNotificationsText}>You have no notifications</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background color
  },
  navigationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1f1f1f', // Slightly lighter dark color for elevation effect
  },
  navigationTitle: {
    color: 'white',
    fontSize: 20,
    marginLeft: 16,
  },
  tabs: {
    flexDirection: 'row',
    padding: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#007bff', // Blue color for active state
  },
  tabText: {
    color: 'white',
    fontSize: 16,
  },
  notificationsContainer: {
    flex: 1,
  },
  noNotificationsText: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  // ... other styles you may need for the Notification component, etc.
});

export default TabOneScreen;
