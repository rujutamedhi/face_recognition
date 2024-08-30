import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import useVerify from '../hooks/useVerify';
import { useVerifyContext } from '../Context/VerifyContext';
import { useNavigation } from '@react-navigation/native';
const StudentSub = () => {
    const { verify } = useVerifyContext();
    const navigation = useNavigation();
    console.log("*******")
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('NOTES');

  // Function to render the content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'NOTES':
        return (
          <ScrollView style={styles.content}>
            {[1, 2, 3].map((item) => (
              <View key={item} style={styles.card}>
                <Text style={styles.cardTitle}>CHAPTER NO. {item} : TRIGONOMETRY</Text>
                <Text style={styles.cardDesc}>This is description</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>VIEW</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        );
      case 'QUIZZES':
            return (
                <ScrollView style={styles.content}>
                  {[1, 2, 3].map((item) => (
                    <View key={item} style={styles.card}>
                      <Text style={styles.cardTitle}>QUIZ NO. {item} : TRIGONOMETRY</Text>
                      <Text style={styles.cardDesc}>Date: 25 August, 2024</Text>
                      <Text style={styles.cardDesc}>Time: 10.00 to 10.30 am</Text>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>View Score</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </ScrollView>
              );
       
      case 'CHATS':
        return (
          <View style={styles.content}>
            <Text style={styles.tabContentText}>This is the Chats tab content.</Text>
            {/* You can replace this with the actual content for the Chats tab */}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>MATHS Student</Text>
      </View>

      {/* Navigation Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={() => setActiveTab('NOTES')}>
          <Text style={[styles.tab, activeTab === 'NOTES' && styles.activeTab]}>NOTES</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('QUIZZES')}>
          <Text style={[styles.tab, activeTab === 'QUIZZES' && styles.activeTab]}>QUIZZES</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('CHATS')}>
          <Text style={[styles.tab, activeTab === 'CHATS' && styles.activeTab]}>CHATS</Text>
        </TouchableOpacity>
      </View>

      {/* Render content based on active tab */}
      {renderContent()}

      {/* Footer as a Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Attend')}
      style={[styles.button, verify ? styles.enabledButton : styles.disabledButton]}
      disabled={!verify}
      
    >
      <Text  style={styles.buttonText}>{verify ? 'Enabled Button' : 'Disabled Button'}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    padding: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A477A',
    textAlign: 'left',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#3A477A',
    paddingVertical: 10,
  },
  tab: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  activeTab: {
    color: '#AFDBF5',
  },
  content: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#3A477A',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  cardTitle: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDesc: {
    color: '#fff',
    fontSize: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#AFDBF5',
    borderRadius: 5,
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#3A477A',
    fontSize: 16,
  },
  footerButton: {
    backgroundColor: '#AFDBF5',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  footerText: {
    color: '#3A477A',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tabContentText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default StudentSub;
