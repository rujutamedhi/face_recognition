import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TimetableScreen = () => {
  const timetable = {
    Monday: [
      { time: '09:00 AM - 10:00 AM', lecture: 'Mathematics' },
      { time: '10:15 AM - 11:15 AM', lecture: 'Physics' },
    ],
    Tuesday: [
      { time: '09:00 AM - 10:00 AM', lecture: 'Biology' },
      { time: '10:15 AM - 11:15 AM', lecture: 'Chemistry' },
    ],
    Wednesday: [
      { time: '09:00 AM - 10:00 AM', lecture: 'History' },
      { time: '10:15 AM - 11:15 AM', lecture: 'Geography' },
    ],
    Thursday: [
      { time: '09:00 AM - 10:00 AM', lecture: 'English' },
      { time: '10:15 AM - 11:15 AM', lecture: 'Computer Science' },
    ],
    Friday: [
      { time: '09:00 AM - 10:00 AM', lecture: 'Art' },
      { time: '10:15 AM - 11:15 AM', lecture: 'Music' },
    ],
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={styles.scrollView}
      >
        <Text style={styles.className}>Class A</Text>
        {Object.entries(timetable).map(([day, classes]) => (
          <View key={day} style={styles.daySection}>
            <Text style={styles.day}>{day}</Text>
            {classes.map((item, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.time}>{item.time}</Text>
                <Text style={styles.lecture}>{item.lecture}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a477a',
    padding: 10,
  },
  scrollView: {
    flex: 1,
    height: '100%', // Ensure the ScrollView takes up the full height of its container
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 5, // Add padding at the bottom to ensure scroll when content is at the bottom
  },
  className: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  daySection: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#3a477a',
  },
  day: {
    color: '#3a477a',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#3a477a',
  },
  time: {
    color: '#3a477a',
    fontSize: 14,
  },
  lecture: {
    color: '#3a477a',
    fontSize: 14,
  },
});

export default TimetableScreen;
