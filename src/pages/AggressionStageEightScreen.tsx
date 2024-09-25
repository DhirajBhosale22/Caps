import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Item {
  title: React.ReactNode;
  explanation: React.ReactNode;
  expanded: boolean;
}

const AggressionStageEightScreen: React.FC = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState<Item[]>([
    {
      title: (
        <View>
          <Text style={{ fontSize: 24 }}>Introduction</Text>
          <Text style={styles.titleSub}>Stage Eight Introduction</Text>
        </View>
      ),
      explanation: (
        <Text style={styles.info}>
          Now in the Attack Phase of the Meter of Emerging Aggression, this represents the murderer or combatant (Military), whose intent is to crush the enemy, without becoming a victim in the process. His intention is to survive this attack unharmed (win/lose scenario). We first observe the "thousand-yard stare," or "dead eyes;" further, their body language and behavior loses animation: the Israelis call this the "walking dead."
          {'\n\n'}
          Death could translate here to professional death. This aggressor can be the murderer, or in a military context, a combatant, who may be prepared to give up his professional life for a cause but intends to survive. Typically, the intent is to have a swift and vicious attack to the victim's vital areas leaving the victim unable to respond. This is sometimes referred to as attacking with "Shock and Awe".
          {'\n\n'}
          When any aggressor rises to the level of intent where they are "prepared to give up their life for a cause," and there is no human intent greater, their body responds to this intention by losing animation. In essence, the body says, "I'm dead," and it takes on this look. We first observe the "thousand-yard stare," or "dead eyes." Humans lose their forehead expression. Even when they try to smile to camouflage their intent, the corners of their mouths go up, but they lack forehead expression of a natural smile, they look like they have a "plastic smile." Further, their body language and behavior loses animation; the Israelis call this the "walking dead."
          {'\n\n'}
          This understanding is critical to reliably identifying a perpetrator of murder, murder/suicide, or terrorist. Without an understanding of the Cognitive Aggression Continuum and its role in the Meter of Emerging Aggression, you will not be able to "reliably" prevent a future act of murder, murder/suicide, or terrorism! Our US Government (DHS/FBI/CIA) are attempting to identify individuals who are "planning or preparing for an attack." This represents someone at the Meter's 6th or 7th Stage of Cognitive Aggression. When including our baseline, the Meter of Emerging Aggression offers 6 more progressive precursors to identify someone on the path to violence. By waiting until an aggressor is "planning or preparing for an attack" offers little time to respond and prevent a future attack.
          {'\n\n'}
          <Text style={{ fontWeight: 'bold' }}>Strategic Responses</Text>
          {'\n\n'}
          Responses are found categorized in the Emergency Procedures segment in this CAPS Mobile App. Remember, if you are part of an organization or institution you should be following Emergency Policies and Procedures issued by your organization or institution. In the absence of such policies and procedures, you may use ours.
          {'\n'}
          To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
        </Text>
      ),
      expanded: false
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
        <View style={styles.logoi}></View>
        {items.map((item, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity onPress={() => expandItem(item)} style={styles.cardHeader}>
              <Image source={require('../assets/img/escolaimg.png')} style={styles.clip} />
              <View style={{ flex: 1 }}>{item.title}</View>
              <Image
                source={require('../assets/img/right-arrow.png')}
                style={[item.expanded ? styles.arrowDown : styles.arrow, { tintColor: '#9d0808' }]}
              />
            </TouchableOpacity>
            {item.expanded && (
              <View style={styles.cardContent}>
                {item.explanation}
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
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
  info: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    color: '#666',
    textAlign: 'justify',
  },
  backIcon: {
    width: 25,
    height: 25,
    padding: 10,
    tintColor: '#fff',
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
    marginBottom: 20,
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
    tintColor: '#b71c1c',
  },
  arrowDown: {
    width: 15,
    height: 15,
    marginLeft: 'auto',
    transform: [{ rotate: '90deg' }],
  },
  cardContent: {
    paddingHorizontal: 16,
    paddingVertical: 10,
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
  titleSub: {
    fontSize: 14,
    color: 'gray',
  },
});

export default AggressionStageEightScreen;
