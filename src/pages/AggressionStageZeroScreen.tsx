import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Item {
  title: string;
  explanation: React.ReactNode;
  expanded: boolean;
}

const AggressionStageZeroScreen: React.FC = () => {
const navigation = useNavigation();
  const [items, setItems] = useState<Item[]>([
    {
      title: ( <Text>
        <Text  style={{ fontSize: 20 }}>Introduction</Text>{"\n"}
        <Text style={styles.titleSub}>Stage Zero Introduction</Text>
      </Text>), explanation: (  <Text style={styles.info}>Introduction: Baseline is a basic standard or guideline that provides a comparison or control. Every venue (workplace or classroom) has a baseline of behavior at any time of day and/or day of the week. There may be dynamic "triggers," or little explosions of emotion occurring, but everyone is coping and consequently there are no signs of adrenaline-driven or intent-driven aggression; therefore, everything is copacetic.
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
    width: 22,
    height: 22,
    tintColor: 'white',
  },
});

export default AggressionStageZeroScreen;