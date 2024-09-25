import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Item {
  title: React.ReactNode;
  explanation: React.ReactNode;
  expanded: boolean;
}

const AggressionStageNineScreen: React.FC = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState<Item[]>([
    {
      title: (
        <Text>
          <Text style={{ fontSize: 24,fontWeight:'bold' }}>Introduction</Text>{"\n"}
          <Text style={styles.titleSub}>Stage Nine Introduction</Text>
        </Text>
      ),
      explanation: (
        <Text style={styles.info}>
          The 9th Stage Aggressor reflects the ultimate lose/lose scenario. We refer to this phase as "Plunging Together Into the Abyss." The goal of the 9th Stage Aggressor is to give up his life for a cause, either by shooting himself or pointing his weapon at an armed Law Enforcement Officer, which is referred to as "Suicide by COP!"
          {'\n'}This represents a profound  {'\n'}disconnection even greater than that of the Stage 8 Aggressor; referred to by the Israelis as "The Walking Dead," (complete loss of animation reflected in his facial expression as well as his body language, behavior and communication indicators).
          {'\n'}This person cares nothing about his life or the life of his victims or any collateral damage. We recommend to security professionals and law enforcement that they approach this aggressor covertly. Upon seeing security or law enforcement, there is a high probability that this 9th Stage Aggressor will begin shooting immediately, or explode themselves if they are a suicide bomber. It is often his goal to sensationalize this event by killing as many victims as possible without regard for age or gender. This is why a suicide bomber can blow up his vehicle and himself with his own children in the back seat. This is also why this aggressor is the most lethal of all aggressors!
          {'\n'}<Text style={{ fontSize: 17, fontWeight: 'bold' }}>Strategic Responses</Text>
          {'\n'}Responses are found categorized in the Emergency Procedures segment in this CAPS Mobile App. Remember, if you are part of an organization or institution you should be following Emergency Policies and Procedures issued by your organization or institution. In the absence of such policies and procedures you may use ours.
          {'\n'}Because you may not always reliably on body language and behavior alone, you may remember this from your training. What does this 9th Stage Aggressor care about? He clearly does not care about his victim. We learn that he does not care about himself. What he does care about is his mission, his objective. Anything that impedes or obstructs his mission will immediately create Primal Aggression Indicators, starting with the "Oh god reflex." This indicator causes a pause as this aggressor thinks to himself, "If I say the wrong thing, I will blow my mission!" This pause is typically followed by perspiration over his brow and upper lip. These indicators are a further assurance that you have identified a <Text style={{ fontSize: 16, fontWeight: 'bold' }}>person of interest</Text>, but be aware, and be ready for this aggressor to explode into violence. In this case, you will need to be ready and in control.
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
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    color: '#666',
    textAlign: 'justify',
  },
  titleSub: {
    fontSize: 14,
    color: 'gray',
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
    tintColor: '#b71c1c', // Arrow pointing up
    marginLeft: 'auto',
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

export default AggressionStageNineScreen;
