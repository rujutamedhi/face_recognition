import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure the icon library is installed
import moment from 'moment'; // For date manipulation

const HomeScreen = () => {
    const [dates, setDates] = useState([]);
    const [currentDate, setCurrentDate] = useState(moment().format('YYYY-MM-DD'));

    useEffect(() => {
        generateDates();
    }, []);

    const generateDates = () => {
        const startDate = moment().subtract(3, 'days'); // Start 3 days ago for demonstration
        const endDate = moment().add(3, 'days'); // End 3 days into the future
        const dateArray = [];

        let date = startDate;
        while (date.isBefore(endDate)) {
            dateArray.push({ day: date.date(), month: date.format('MMM'), fullDate: date.format('YYYY-MM-DD') });
            date.add(1, 'day');
        }

        setDates(dateArray);
    };

    return (
        <View style={styles.container}>
            {/* Top Bar */}
            <View style={styles.topBar}>
                <Text style={styles.logo}>E</Text>
                <View style={styles.profileContainer}>
                    <Text style={styles.username}>Username</Text>
                    <Icon name="person" size={30} color="#3a477a" />
                </View>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.dateScroll}
            >
                {dates.map((date, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dateCircle,
                            date.fullDate === currentDate && styles.dateCircleActive
                        ]}
                    >
                        <Text style={[
                            styles.day,
                            date.fullDate === currentDate && styles.dayActive
                        ]}>
                            {date.day}
                        </Text>
                        <Text style={[
                            styles.month,
                            date.fullDate === currentDate && styles.monthActive
                        ]}>
                            {date.month}
                        </Text>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.upcomingClassesContainer}>
                <Text style={styles.heading}>Upcoming Classes</Text>
                <View style={styles.classesContainer}>
                    <View style={styles.classCard}>
                        <View style={styles.classInfo}>
                            <Text style={styles.subjectName}>Math 101</Text>
                            <Text>Teacher Name</Text>
                        </View>
                        <TouchableOpacity onPress={() => handleAttendance('Math 101')} style={styles.attendanceButton}>
                            <Icon name="face" size={24} color="#3a477a" />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.classCard}>
                        <View style={styles.classInfo}>
                            <Text style={styles.subjectName}>Math 101</Text>
                            <Text>Teacher Name</Text>
                        </View>
                        <TouchableOpacity onPress={() => handleAttendance('Math 101')} style={styles.attendanceButton}>
                            <Icon name="face" size={24} color="#3a477a" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.classCard}>
                        <View style={styles.classInfo}>
                            <Text style={styles.subjectName}>Math 101</Text>
                            <Text>Teacher Name</Text>
                        </View>
                        <TouchableOpacity onPress={() => handleAttendance('Math 101')} style={styles.attendanceButton}>
                            <Icon name="face" size={24} color="#3a477a" />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.viewAllButton}>
                    <Text style={styles.viewAllText}>View All Classes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#afdbf5',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3a477a',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    username: {
        marginRight: 8,
        color: '#3a477a',
    },
    dateScroll: {
        paddingVertical: 8,
        alignItems: 'center',
        marginVertical: 16,
    },
    dateCircle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3a477a',
        borderRadius: 50,
        width: 68,
        height: 68,
        marginHorizontal: 8,
    },
    dateCircleActive: {
        width: 85,
        height: 85,
    },
    day: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
    },
    dayActive: {
        fontSize: 32,
    },
    month: {
        fontSize: 14,
        color: '#fff',
    },
    monthActive: {
        fontSize: 18,
    },
    upcomingClassesContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3a477a',
        marginBottom: 12,
    },
    classesContainer: {
        marginBottom: 16,
    },
    classCard: {
        backgroundColor: '#afdbf5',
        padding: 16,
        borderRadius: 8,
        marginBottom: 8,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      classInfo: {
        flex: 1, 
      },
      attendanceButton: {
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
    subjectName: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#3a477a',
    },
    viewAllButton: {
        alignItems: 'center',
        paddingVertical: 12,
        backgroundColor: '#3a477a',
        borderRadius: 8,
    },
    viewAllText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default HomeScreen;
