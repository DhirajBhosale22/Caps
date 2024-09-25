import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Item {
  title: string;
  explanation: React.ReactNode;
  expanded: boolean;
}

const AggressionStageSevenScreen: React.FC = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState<Item[]>([
    {
      title: ( <Text>
        <Text  style={{ fontSize: 24 }}>Introduction</Text>{"\n"}
        <Text style={styles.titleSub}>Stage Seven Introduction</Text>
      </Text>), explanation: (  <Text style={styles.info}>This aggressor has gone beyond ideation to Operational preparation (Planning and Preparing for Attack) and has therefore now entered the Emergency/Crisis Phase of the Meter of Emerging Aggression. He is fully "tactical" in his behavior! This is often the logistical phase before an actual attack. Remember "tactical" can be well thought-out but doesn't need to be; it means that the aggressor has identified his target and is committed to its destruction.
        {'\n\n'}<Text style={styles.info}>A few examples include attack surveillance or operational preparatory behavior. Those include inexplicable purchasing of weapons or explosive components, taping or taking pictures, finding out what kind of weapons police or security carries or what their response time to an incident would be. It is possible that you are observing a "dry run" for a future attack. This aggressor is a Complicit Tactician (an accomplice), who is completely complicit with the Murderer or perpetrator of Murder/Suicide but does not intend to murder his victim nor become a casualty to his cause. Typically, this aggressor will either inspire others to the 8th and 9th stages of theMeter of Emerging Aggression or will aid them in their logistics. They also could be the future 8th and 9th stage aggressors who are currently reconnoitering or surveying their target prior to affecting their violence. Aggressors may conduct surveillance of their target many times, offering multiple opportunities to identify them. Strategically, for some aggressors, this is their last opportunity to intimidate their victim into submission prior to an actual attack. This type of aggressor will often blame their victim for not becoming submissive. 
        </Text>
        {'\n\n'}<Text style={{ fontWeight: 'bold' }}>Strategic Responses</Text>
        {'\n\n'}Responses are found categorized in the Emergency Procedures segment in this CAPS Educational Website. Remember, if you are part of an organization or institution you should be following Emergency Policies and Procedures issued by your organization or institution. In the absence of such policies and procedures you may use ours.
        {'\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} 
      onPress={()=> Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops
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

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#9d0808" />
      <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Introduction To CAPS</Text>
      </View>
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollView}>
      <View style={styles.logoi}>
        
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
      <Footer navigation={navigation} />
    </View>
  );
};

const Footer = ({ navigation }) => (
  <View style={styles.footer}>
    <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/img/home_icon.png')} style={styles.footerIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Contacts')}>
      <Image source={require('../assets/img/call_icon.png')} style={styles.footerIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Notifications')}>
      <Image source={require('../assets/img/Profile-icon.png')} style={styles.footerIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Messages')}>
      <Image source={require('../assets/img/edit_icon.png')} style={styles.footerIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Settings')}>
      <Image source={require('../assets/img/logout_icon.png')} style={styles.footerIcon} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#9d0808',
    padding: 15,
    width: '100%',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
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
    marginTop:20,
    fontSize: 16,
    lineHeight: 25,
    color: '#666',
    textAlign:'justify'
  },
  backIcon: {
    width: 25,
    height: 25,
    padding: 10,
  tintColor: '#fff'
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    marginTop: 30,
    marginBottom: 30,
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
    width: 20,
    height: 20,
    tintColor: '#b71c1c',
    resizeMode: 'contain',
    marginLeft: 15,
    marginRight: 10,
    marginBottom:20
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 18,
    flex: 1,
  },
  arrow: {
    width: 15,
    height: 15,
    tintColor: '#b71c1c', // Arrow pointing up
  },
  arrowDown: {
    width: 15,
    height: 15,
    marginLeft: 'auto',
    transform: [{ rotate: '90deg' }], // Arrow pointing down
  },
  cardContent: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  footer: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  footerText: {
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
    fontWeight: '500',
    textAlign:'center',
    marginLeft:10,
    marginRight:10,
  },
  registrationButton: {
    backgroundColor: '#9d0808', // Customize the background color of the button
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  registrationButtonText: {
    color: 'white',
    fontSize: 18,
  
  },
  logoicon: {
    width: 100,
    height:100 ,
    marginHorizontal: 140,
    backgroundColor: 'white',
},
// logoi: {
//     flex:1,
//     justifyContent: 'center',
//     alignItems: 'center',    
// },
titleSub: {
    fontSize: 14, // or your preferred smaller size
    color: 'gray', // optional, for styling the subtext differently
  },

  footer: {
    height: 60,
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
    width: 24,
    height: 24,
    tintColor: 'white',
  },
});

export default AggressionStageSevenScreen;
