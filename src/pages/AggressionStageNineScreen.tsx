import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Item {
  title: React.ReactNode;
  explanation: React.ReactNode;
  expanded: boolean;
}

const AggressionStageNineScreen: React.FC = () => {
  const navigation = useNavigation();
  const [showFooter, setShowFooter] = useState(true);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [items, setItems] = useState<Item[]>([
    {
      title: (
        <Text>
          <Text style={{ fontSize: wp('6.5%'),fontWeight:'bold', color:'black' }}>Introduction</Text>{"\n"}
          <Text style={styles.titleSub}>Stage Nine Introduction</Text>
        </Text>
      ),
      explanation: (
        <Text style={styles.info}>
          The 9th Stage Aggressor reflects the ultimate lose/lose scenario. We refer to this phase as "Plunging Together Into the Abyss." The goal of the 9th Stage Aggressor is to give up his life for a cause, either by shooting himself or pointing his weapon at an armed Law Enforcement Officer, which is referred to as "Suicide by COP!"
          {'\n'}This represents a profound  {'\n'}disconnection even greater than that of the Stage 8 Aggressor; referred to by the Israelis as "The Walking Dead," (complete loss of animation reflected in his facial expression as well as his body language, behavior and communication indicators).
          {'\n'}This person cares nothing about his life or the life of his victims or any collateral damage. We recommend to security professionals and law enforcement that they approach this aggressor covertly. Upon seeing security or law enforcement, there is a high probability that this 9th Stage Aggressor will begin shooting immediately, or explode themselves if they are a suicide bomber. It is often his goal to sensationalize this event by killing as many victims as possible without regard for age or gender. This is why a suicide bomber can blow up his vehicle and himself with his own children in the back seat. This is also why this aggressor is the most lethal of all aggressors!
          {'\n'}<Text style={{ fontSize: wp('4.5%'), fontWeight: 'bold' }}>Strategic Responses</Text>
          {'\n'}Responses are found categorized in the Emergency Procedures segment in this CAPS Mobile App. Remember, if you are part of an organization or institution you should be following Emergency Policies and Procedures issued by your organization or institution. In the absence of such policies and procedures you may use ours.
          {'\n'}Because you may not always reliably on body language and behavior alone, you may remember this from your training. What does this 9th Stage Aggressor care about? He clearly does not care about his victim. We learn that he does not care about himself. What he does care about is his mission, his objective. Anything that impedes or obstructs his mission will immediately create Primal Aggression Indicators, starting with the "Oh god reflex." This indicator causes a pause as this aggressor thinks to himself, "If I say the wrong thing, I will blow my mission!" This pause is typically followed by perspiration over his brow and upper lip. These indicators are a further assurance that you have identified a <Text style={{ fontSize: wp('4.5%'), fontWeight: 'bold' }}>person of interest</Text>, but be aware, and be ready for this aggressor to explode into violence. In this case, you will need to be ready and in control.
          {'\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
        </Text>
      ),
      expanded: false,
    },
  ]);

  const scrollViewRef = useRef<ScrollView>(null);
  const expandItem = (item: Item) => {
    setItems(items.map(i => (i === item ? { ...i, expanded: !i.expanded } : i)));
  };

  const showAlert = (result: string, msg: string) => {
    Alert.alert(result, msg, [{ text: 'OK' }]);
  };


  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
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
        <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Aggression Stage Nine</Text>
      </View>
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollView}>
     
        {items.map((item, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity onPress={() => expandItem(item)} style={styles.cardHeader}>
              <Image source={require('../assets/img/escolaimg.png')} style={styles.clip} />
              {item.title}
              <Image
                source={require('../assets/img/right-arrow.png')}
                style={[item.expanded ? styles.arrowDown : styles.arrow, { tintColor: '#9d0808' }]}
              />
            </TouchableOpacity>
            {item.expanded && <View style={styles.cardContent}>{item.explanation}</View>}
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
    padding: hp('2%'), // responsive padding
    width: '100%',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: wp('5.8%'), // Adjusted font size to be responsive
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
    marginTop: hp('2.5%'), // responsive margin
    fontSize: wp('4%'), // responsive font size
    lineHeight: hp('3.5%'), // responsive line height
    color: '#666',
    textAlign: 'justify',
  },
  titleSub: {
    fontSize: wp('4.2%'), // Adjusted font size to be responsive
    color: 'black',
  },
  backIcon: {
    width: wp('7%'), // responsive width
    height: hp('4%'), // responsive height
    padding: hp('1%'), // responsive padding
    tintColor: '#fff',
  },
  scrollView: {
    paddingHorizontal: wp('4%'), // responsive padding
  },
  card: {
    marginTop: hp('3%'), // Responsive margin
    marginBottom: hp('3%'), // Responsive margin
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
    marginLeft: wp('34%'),
  },
  arrowDown: {
    width: wp('3%'), // Adjusted width to be responsive
    height: hp('2.2%'), // Adjusted height to be responsive
    transform: [{ rotate: '90deg' }],
    marginLeft: wp('34%'),
  },
  cardContent: {
    paddingHorizontal: wp('4%'), // Responsive horizontal padding
    paddingVertical: hp('1.5%'), // Responsive vertical padding
  },
  footer: {
    height: hp('8%'), // Responsive height
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: wp('5%'), // Responsive margin
    backgroundColor: 'white',
    borderRadius: 10,
    padding: hp('4%'), // Responsive padding
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1000,
  },
  modalTitles: {
    fontSize: wp('4.5%'), // Responsive font size
    fontWeight: 'bold',
    marginBottom: hp('2%'), // Responsive margin
    color: 'black',
  },
 modalText: {
    fontSize: wp('4%'), // Responsive font size
    marginBottom: hp('2%'), // Responsive margin
    color: 'black',
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    borderRadius: 5,
    padding: hp('2%'), // Responsive padding
    marginHorizontal: wp('2%'), // Responsive margin
    backgroundColor: '#9d0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Responsive font size
  },
  ptext: {
    fontSize: wp('4%'), // Responsive font size
    marginBottom: hp('3%'), // Responsive margin
    textAlign: 'center',
  },
});

export default AggressionStageNineScreen;
