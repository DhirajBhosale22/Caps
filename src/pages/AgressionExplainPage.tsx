import React, { useEffect, useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

interface RouteParams {
  data: {
    name: {
      explanation: string;
    };
  };
}

const AgressionExplainPage: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [explanation, setExplanation] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const params = route.params as RouteParams;
    if (params && params.data && params.data.name) {
      setExplanation(params.data.name.explanation);
    } else {
      setExplanation("No explanation available."); // Fallback in case data is missing
    }
  }, [route.params]);

  const closeModal = (qes: string) => {
    const data = {
      name: 'this.component',
      occupation: 'Milkman',
      qes: qes,
    };

    // Navigation back to previous screen with data
    navigation.navigate('PreviousScreen', { data });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Render explanation or fallback text */}
        {explanation ? (
          <Text style={styles.explanationText}>{explanation}</Text>
        ) : (
          <Text style={styles.explanationText}>Loading explanation...</Text>
        )}
      </ScrollView>

      {/* Button to trigger the modal */}
      <Button title="Close Modal" onPress={() => setModalVisible(true)} />

      {/* Modal Component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text>Would you like to close this?</Text>
          <Button title="Yes, close" onPress={() => closeModal('Some Question')} />
          <Button title="No, stay" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  explanationText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default AgressionExplainPage;
