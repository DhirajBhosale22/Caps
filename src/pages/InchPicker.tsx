import React, { useState } from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

interface InchPickerProps {
    visible: boolean;
    onClose: () => void;
    onSelect: (inch: number) => void;
}

const InchPicker: React.FC<InchPickerProps> = ({ visible, onClose, onSelect }) => {
    const inches = Array.from({ length: 11 }, (_, i) => i + 1); // Options from 1 to 11
    const [selectedInch, setSelectedInch] = useState<number | null>(null);

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Inch</Text>
                    </View>
                    <View style={styles.divider} />
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        {inches.map((item) => (
                            <TouchableOpacity
                                key={item}
                                style={styles.option}
                                onPress={() => setSelectedInch(item)}
                            >
                                <View style={styles.radioCircle}>
                                    {item === selectedInch && <View style={styles.selectedRb} />}
                                </View>
                                <Text style={styles.optionText}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <View style={styles.divider} />
                    <View style={styles.footerContainer}>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.okButton}
                            onPress={() => {
                                if (selectedInch !== null) {
                                    onSelect(selectedInch);
                                }
                                onClose();
                            }}
                        >
                            <Text style={styles.okButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 5,
        width: '80%',
        maxHeight: '50%',
    },
    headerContainer: {
        marginBottom: 10,
        alignItems: 'center',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'black'
    },
    divider: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    scrollViewContainer: {
        paddingVertical: 10,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#b71c1c',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    selectedRb: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#b71c1c',
    },
    optionText: {
        fontSize: 18,
        color:'black'
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    okButton: {
        padding: 10,
        borderRadius: 5,
        marginLeft: 10,
        backgroundColor: '#b71c1c',
    },
    okButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    closeButton: {
        padding: 10,
    },
    closeButtonText: {
        color: '#b71c1c',
        fontSize: 16,
    },
});

export default InchPicker;