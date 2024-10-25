// CustomModal.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const CustomModal = ({ visible, message, onClose, onConfirm }) => {
  return (
    visible && (
      <View style={styles.container}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{message}</Text>
        
            {onConfirm && (
              <TouchableOpacity style={styles.modalButton} onPress={onConfirm}>
                <Text style={styles.modalButtonText}>Confirm</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.modalButton} onPress={onClose}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          
        </View>
      </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
 
  container: {
    backgroundColor: 'white',
    height:'110%'
  
  }, modalContainer: {
    width:'100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: wp('5%'),
    borderRadius: wp('2%'),
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: wp('4%'),
    marginBottom: hp('2%'),
    textAlign: 'center',
    color:'grey'
  },
  modalButton: {
    // backgroundColor: '#B22222',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: hp('1.5%'),
    marginBottom:hp('1.5%'),
    padding: wp('2%'),
    borderRadius: wp('1.5%'),
    borderColor:'#B22222',
    borderWidth:1,
  },
  modalButtonText: {
    color: '#9d0808',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
});

export default CustomModal;