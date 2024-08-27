import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const subjects = [
  { id: '1', name: 'Math', teacher: 'Teacher name', nextClass: '2024-08-30' },
  { id: '2', name: 'Science', teacher: 'Teacher name', nextClass: '2024-08-29' },
  { id: '3', name: 'History', teacher: 'Teacher name', nextClass: '2024-08-31' },
  { id: '4', name: 'Computer Sci', teacher: 'Teacher name', nextClass: '2024-08-31' },
  { id: '5', name: 'Geography', teacher: 'Teacher name', nextClass: '2024-08-31' },
];

const AllSubjects = () => {
  const navigation = useNavigation();

  const handleSubjectClick = (subject) => {
    navigation.navigate('SubjectClick', { subject });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All Subjects</Text>
      <FlatList
        data={subjects}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => handleSubjectClick(item)}
          >
            <Text style={styles.subjectName}>{item.name}</Text>
            <Text style={styles.teacherName}>Teacher: {item.teacher}</Text>
            <Text style={styles.nextClass}>Next Class: {item.nextClass}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3a477a',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#3a477a',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  subjectName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    marginBottom: 5,
  },
  teacherName: {
    fontSize: 16,
    color: '#fff',
    marginTop: 4,
  },
  nextClass: {
    fontSize: 16,
    color: 'lightgray',
    marginTop: 4,
  },
});

export default AllSubjects;
