import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,} from 'react-native';

const Role = ({navigation}) => {
    return (
        <View style={styles.contain}>
            <TouchableOpacity style={styles.role} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.roleText}>Admin</Text>
      </TouchableOpacity>

<TouchableOpacity style={styles.role} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.roleText}>Student</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.role} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.roleText}>Teacher</Text>
      </TouchableOpacity>
        </View>
    )}


const styles = StyleSheet.create({

    contain: {
    marginTop: 170,
    marginLeft:20,
    marginRight:20
    },

    role: {
    backgroundColor: '#3a477a',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    },

    roleText: {
    backgroundColor: '#3A477A',
    color: '#fff' ,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 20,
    
    }
})

export default Role;