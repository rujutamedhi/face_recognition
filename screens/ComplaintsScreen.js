import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, Picker } from 'react-native';

const ComplaintsScreen = () => {
  const [complaintType, setComplaintType] = useState('');
  const [description, setDescription] = useState('');
  const [urgency, setUrgency] = useState('Low'); // Default value

  const handleSubmit = () => {
    // Handle the complaint submission logic here
    console.log('Complaint Type:', complaintType);
    console.log('Description:', description);
    console.log('Urgency:', urgency);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Raise a Complaint</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Complaint Type</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter type of complaint (e.g., Technical, Administrative)"
          value={complaintType}
          onChangeText={setComplaintType}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Enter a detailed description of your complaint"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />

        <Text style={styles.label}>Urgency</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={urgency}
            style={styles.picker}
            onValueChange={(itemValue) => setUrgency(itemValue)}
          >
            <Picker.Item label="Low" value="Low" />
            <Picker.Item label="Medium" value="Medium" />
            <Picker.Item label="High" value="High" />
          </Picker>
        </View>

        <Button title="Raise Complaint" onPress={handleSubmit} color="#3a477a" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a477a',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#3a477a',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3a477a',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#3a477a',
  },
  textArea: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#3a477a',
  },
  pickerContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#3a477a',
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default ComplaintsScreen;
