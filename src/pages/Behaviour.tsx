import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Behaviour = () => {
    const navigation = useNavigation();
    const scrollViewRef = useRef(null);

    // Define the initial options array
    const initialOptions = [
        { id: 9, text: '(Lose/Lose) Destroys the enemy with no intention to survive (perpetrator of murder/suicide) or harms that enemy through self- destruction (suicide) Professional murder/suicide.', label: 'Cognitive Aggression' },
        { id: 8, text: '(Win/Lose) Making plans actionable with intent to "shock and awe," plans to survive. Plan execution. Victim dies professionally.', label: 'Cognitive Aggression' },
        { id: 7, text: 'Operational Planning, Surveillance activity, probing security response. Final attempt to evoke victim\'s compliance.', label: 'Cognitive Aggression' },
        { id: 6, text: 'Mentally explores security processes. Attack ideation, thus is mostly achieved in the mind of the aggressor. Intelligence gathering, analysis and decision begins. May exhibit self-injurious behavior (seeking attention or exhibiting commitment to their intended cause). Overtly attempting to intimidate victim into submission.', label: 'Cognitive Aggression' },
        { id: 5, text: 'Overt aggression against an individual(s): Unmasks his victim as an enemy.', label: 'Cognitive Aggression' },
        { id: 4, text: 'Covert Aggression against an individual(s): Verbally attacks the victim\'s core identities; turns the victim\'s community against them with malicious intent; covertly undermines victim\'s trust relationship with their community.', label: 'Cognitive Aggression' },
        { id: 3, text: 'Appears detached and self- absorbed; Expresses views through actions versus words (e.g. hate websites or blogs)', label: 'Cognitive Aggression' },
        { id: 2, text: 'Harmful debate, distrustful and fixated on his view (opinion) disregarding others. Lacking responsibility and/or conscience.', label: 'Cognitive Aggression' },
        { id: 1, text: 'Beginning behavior that is uncooperative; nonproductive; lacking in empathy; creating distant/disconnection; and/or beginning to deceive to cover up aggression.', label: 'Cognitive Aggression' },
        { id: 0, text: 'Consistent with usual or typical behavior; observe coping behavior. (Expected baseline of behavior)', label: 'Cognitive Aggression' },
    ];

    const [options, setOptions] = useState(initialOptions);
    const [selectedId, setSelectedId] = useState(null);  // State to track the selected item

    const handleSelect = (id, route) => {
        // Scroll to the top
        scrollViewRef.current?.scrollTo({ y: 0, animated: true });

        // Move the selected option to the top
        setOptions((prevOptions) => {
            const selectedOption = prevOptions.find(option => option.id === id);
            const otherOptions = prevOptions.filter(option => option.id !== id);
            return [selectedOption, ...otherOptions];
        });

        // Set the selected id
        setSelectedId(id);

        // Navigate to the selected screen
        navigation.navigate(route);
    };

    return (
        <ScrollView ref={scrollViewRef} contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.skipButton} onPress={() => navigation.goBack()}>
                <Text style={styles.skipButtonText}>SKIP</Text>
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.headerText}>SELECT LEVEL OF AGGRESSION</Text>
                <Text style={styles.subHeaderText}>Behavior Options</Text>
            </View>
            {options.map((option) => (
                <View key={option.id} style={styles.optionContainer}>
                    <Text style={styles.optionText}>{option.text}</Text>
                    <View style={styles.divider} />
                    <View style={styles.row}>
                        <TouchableOpacity 
                            style={[styles.selectedButton, selectedId === option.id && styles.selectedButtonActive]}
                            onPress={() => handleSelect(option.id, 'EmergencyProcedure')}
                        >
                             <Text style={[
                                styles.selectedButtonText,
                                selectedId === option.id && styles.selectedButtonTextActive
                            ]}>
                                {selectedId === option.id ? 'SELECTED' : 'SELECT'}
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.numberContainer}>
                            <Text style={styles.numberText}>{option.id}</Text>
                        </View>
                        <TouchableOpacity style={styles.infoButton} onPress={() => navigation.navigate(`InfoAggression${option.id}`)}>
                            <Image source={require('../assets/img/info.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.divider} />
                    <Text style={styles.optionLabel}>{option.label}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#F5F5F5',
    },
    skipButton: {
        minWidth: 40,
        maxWidth: 60,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#FF0000',
        marginLeft: '80%',
        alignItems: 'center',
        marginRight: 20,
        marginBottom: 30,
    },
    skipButtonText: {
        color: '#FF0000',
        fontSize: 14,
        fontWeight: 'bold',
    },
    header: {
        marginBottom: 16,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        alignItems: 'center',
    },
    subHeaderText: {
        fontSize: 18,
        color: '#666',
    },
    optionContainer: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    optionText: {
        fontSize: 18,
        color: '#333333',
        marginBottom: 16,
        fontWeight: 'bold',
    },
    divider: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    selectedButton: {
        backgroundColor: '#9D0808',
        borderColor: '#9D0808',
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    selectedButtonActive: {
        backgroundColor: '#FFFFFF',
        borderColor: '#FF0000',
    },
    selectedButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    selectedButtonTextActive: {
        color: '#FF0000',
    },
    numberContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: 8,
        borderColor: '#FF0000',
        borderWidth: 2,
    },
    numberText: {
        color: '#FF0000',
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    infoButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    optionLabel: {
        fontSize: 18,
        color: '#666',
        marginTop: 8,
    },
});

export default Behaviour;
