import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking, Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Item {
  title: string;
  explanation: React.ReactNode;
  expanded: boolean;
}

const AggressionStageZeroScreen: React.FC = () => {
const navigation = useNavigation();
const [showFooter, setShowFooter] = useState(true);
const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [items, setItems] = useState<Item[]>([
    {
      title: ( 
        <View>
                 <Text style={{ fontSize: wp('6.5%'), color:'black', fontWeight:'bold' }}>Introduction</Text>
        <Text style={styles.titleSub}>Stage Zero Introduction</Text>
        </View> ), explanation: (  <Text style={styles.info}>Introduction: Baseline is a basic standard or guideline that provides a comparison or control. Every venue (workplace or classroom) has a baseline of behavior at any time of day and/or day of the week. There may be dynamic "triggers," or little explosions of emotion occurring, but everyone is coping and consequently there are no signs of adrenaline-driven or intent-driven aggression; therefore, everything is copacetic.
        {'\n\n'}Like a pace car at the Dayton 500, pacing the aggressor represents the skills of coming along side of, or mirroring, individuals that encourages rapport and trust. These are elements required to convince an emerging aggressor away from their potential path to violence. We can track mounting anxiety from the Trigger Phase through the Escalation Phase into the Crisis Phase of the Primal Aggression Continuum. Further, we can track the transition from assertive behavior to aggressive behavior, through covert disconnection, to increasing overt aggressive actions taken with the intent to harm displayed within the Cognitive Aggression Continuum. Using the Judicious Interview, and considering the "Totality of the Circumstances," we can affirm our objective observables by identifying an aggressor's intent to harm, and at what level, or stage, on the Cognitive Aggression Continuum (our secret sauce) this aggressor resides. We can now weigh whether this aggressor is more a Primal (adrenaline-driven) Aggressor or Cognitive (intent-driven) Aggressor, and this permits us the opportunity to apply recommended corresponding skill sets so as to maximize our defusing and preventing results; thus, avoiding any accusation of excessive force.
        {'\n\n'}We must make the distinction between assertive and aggressive behavior. Assertive behavior is constructive and positive for the individual and for those that may be affected by his actions: "Can I stay late to make up this work assignment?" or "Is there another constructive or positive way I can handle this?" Aggressive behavior in contrast is destructive and negative. It is often only in the aggressor's interest and to the detriment of those around him. For example, a student might get a copy of the answers to a homework assignment from his roommate's backpack, so he doesn't have to stay up late. At work, taking credit for a co-destructive and negative. It is often only in the aggressor's interest and to the detriment of those around him. For example, a student might get a copy of the answers to a homework assignment from his roommate's backpack, so he doesn't have to stay up late. At work, taking credit for a со- worker's ideas to help promote yourself is aggressive behavior. If the distinction is not made between "assertive versus aggressive" behavior, then where does "good" aggression end and "bad" aggression begin?
        {'\n\n'}As we matriculate up this continuum of aggression (The Meter of Emerging Aggression) we will witness progressively destructive, hostile, and eventually malicious intent expressed through behavior, body language and communication indicators. Using the Judicious Interview and considering the "Totality of the Circumstances" we may affirm our objective observables often through noting an aggressor's tactical behavior.
        {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
      </Text>), expanded: false
    },
    

  ]);

  const scrollViewRef = useRef<ScrollView>(null);
  const expandItem = (item: Item) => {
    setItems(items.map(i =>
      i === item ? { ...i, expanded: !i.expanded } : i
    ));
  };

  const showAlert = (result: string, msg: string) => {
    Alert.alert(result, msg, [{ text: 'OK' }]);
  };

  const handleLogout = () => {
    setLogoutModalVisible(false);
    Alert.alert('Logged Out', 'You have been logged out.');
  };

  const handleLogoutCancel = () => {
    setLogoutModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#9d0808" />
      <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Aggression Stage Zero</Text>
      </View>
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollView}>
      <View>
        
      </View>
     
        {items.map((item, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity onPress={() => expandItem(item)} style={styles.cardHeader}>
              <Image source={require('../assets/img/escolaimg.png')} style={styles.clip} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Image
                source={require('../assets/img/right-arrow.png')}
                style={[item.expanded ? styles.arrowDown : styles.arrow , { tintColor: '#9d0808' }] }
              />
            </TouchableOpacity>
            {item.expanded && (
              <View style={styles.cardContent}>
                <Text style={styles.info}>{item.explanation}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      {showFooter && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('home')}>
            <Image source={require('../assets/img/home_icon.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => Linking.openURL('tel:911')}>
            <Image source={require('../assets/img/call_icon.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('SharegroupPage')}>
            <Image source={require('../assets/img/Profile-icon.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('EditProfile')}>
            <Image source={require('../assets/img/edit_icon.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => setLogoutModalVisible(true)}>
            <Image source={require('../assets/img/logout.png')} style={styles.footerIcon} />
          </TouchableOpacity>
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitles}>Logout</Text>
            <Text style={styles.modalText}>Are you sure you want to log out?</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleLogout}
              >
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleLogoutCancel}
              >
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
  
};





import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#9d0808',
    padding: hp('2%'), // Responsive padding
    width: '100%',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: wp('6%'), // Responsive font size
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    color: '#1E90FF', // Customize the color of the link
    textDecorationLine: 'underline',
  },
  info: {
    marginTop: hp('2%'), // Responsive margin
    fontSize: wp('4%'), // Responsive font size
    lineHeight: hp('3%'), // Responsive line height
    color: 'black',
    textAlign: 'justify',
  },
  backIcon: {
    width: wp('7%'), // Responsive width
    height: wp('7%'), // Responsive height
    padding: hp('1%'), // Responsive padding
    tintColor: '#fff',
    
    
  },
  scrollView: {
    paddingHorizontal: wp('4%'), // Responsive padding
  },
  card: {
    marginTop: hp('2%'), // Responsive margin
    marginBottom: hp('4%'), // Responsive margin
    borderRadius: 2,
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clip: {
    width: wp('5%'), // Responsive width
    height: wp('5%'), // Responsive height
    tintColor: '#b71c1c',
    resizeMode: 'contain',
    marginLeft: wp('4%'), // Responsive margin
    marginRight: wp('2%'), // Responsive margin
    marginBottom: hp('2%'), // Responsive margin
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: wp('4.5%'), // Responsive font size
    flex: 1,
  },
  arrow: {
    width: wp('3%'), // Adjusted width to be responsive
    height: hp('2.2%'), // Adjusted height to be responsive
    tintColor: '#b71c1c',
  },
  arrowDown: {
    width: wp('3%'), // Adjusted width to be responsive
    height: hp('2.2%'), // Adjusted height to be responsive
    transform: [{ rotate: '90deg' }],
  },
  cardContent: {
    paddingHorizontal: wp('4%'), // Responsive padding
    paddingVertical: hp('2%'), // Responsive padding
  },
  footer: {
    height: hp('7.5%'), // Adjusted height to be responsive
    backgroundColor: '#B71C1C',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footer1: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: hp('7.5%'), // Adjusted height to be responsive
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerIcon: {
    width: wp('6%'), // Adjusted width to be responsive
    height: hp('8%'), // Adjusted height to be responsive
    tintColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: hp('4%'), // Adjusted padding to be responsive
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitles: {
    fontSize: wp('5%'), // Adjusted font size to be responsive
    fontWeight: 'bold',
    marginBottom: hp('2%'), // Adjusted margin to be responsive
    color: 'black',
  },
  modalText: {
    fontSize: wp('4%'), // Adjusted font size to be responsive
    marginBottom: hp('2%'), // Adjusted margin to be responsive
    color: 'black',
  },
  modalText1: {
    fontSize: wp('4%'), // Adjusted font size to be responsive
    marginBottom: hp('2%'), // Adjusted margin to be responsive
    fontWeight: 'bold',
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    borderRadius: 5,
    padding: hp('2%'), // Adjusted padding to be responsive
    marginHorizontal: wp('2%'), // Adjusted margin to be responsive
    backgroundColor: '#9D0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Adjusted font size to be responsive
  },
  ptext: {
    fontSize: wp('4.5%'), // Adjusted font size to be responsive
    marginBottom: hp('2%'), // Adjusted margin to be responsive
    fontWeight: 'bold',
    textAlign: 'center',
  },

  registrationButton: {
    backgroundColor: '#9d0808', // Customize the background color of the button
    padding: hp('2%'), // Responsive padding
    borderRadius: 5,
    alignItems: 'center',
  },
  registrationButtonText: {
    color: 'white',
    fontSize: wp('4.5%'), // Responsive font size
  },
  logoicon: {
    width: wp('25%'), // Responsive width
    height: wp('25%'), // Responsive height
    marginHorizontal: wp('35%'), // Responsive margin
    backgroundColor: 'white',
  },
  titleSub: {
    fontSize: wp('4.2%'), // Adjusted font size to be responsive
    color: 'black',
  },
  footer: {
    height: hp(' 7.5%'), // Responsive height
    backgroundColor: '#9d0808',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerIcon: {
    width: wp('6%'), // Responsive width
    height: wp('6%'), // Responsive height
    tintColor: 'white',
  },
});

export default AggressionStageZeroScreen;