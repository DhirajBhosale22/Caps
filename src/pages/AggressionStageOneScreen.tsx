import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Item {
  title: React.ReactNode;
  explanation: React.ReactNode;
  expanded: boolean;
}

const AggressionStageOneScreen: React.FC = () => {
 const navigation = useNavigation();
  const [items, setItems] = useState<Item[]>([
    {
      title: (
        <Text>
          <Text style={{ fontSize: 20,fontWeight: 'bold' }}>Introduction</Text>{"\n"}
          <Text style={styles.titleSub}>Stage One Introduction</Text>
        </Text>
      ),
      explanation: (
        <Text style={styles.info}>
          <Text style={{ fontWeight: 'bold' }}>Aggression Stage One </Text>
          {"\n"}<Text style={{ fontWeight: 'bold' }}>Introduction:</Text> Aggression Stage One provides, although subtle, the first indications that someone is aggressing. Note: We recommend the first time you enter the CAPS Mobile App, you should begin with the Introduction to the Meter of Emerging Aggression and continue throughout the Educational Website reading all that is available to you. This is because we reference these strategies and techniques throughout the Aggression Stages both in the CAPS Mobile App and Educational Website.
          {"\n\n"}<Text style={{ fontWeight: 'bold' }}>Cognitive (intent-driven) Aggression:</Text>We are observing the first signs ofdisconnection, loss of trust and the initial signs of deception or lack of truth. This aggressor becomes more distant, argumentative, lacking understanding & empathy, and their rationale (their truth telling) does not hold true as they begin their deception.
          {"\n\n"}<Text style={{ fontWeight: 'bold' }}>Primal (adrenaline-driven) Aggression:</Text>
          {"\n"}We observe someone who is not coping with their anxiety. We observe an emerging aggressor who becomes scattered and disjointed in their thinking. When a person stops coping, a threat mechanism goes off in their heads (Amygdala) and they start producing adrenaline. This is the first sign that this person is beginning on his path of aggression. However, this emerging aggressor may still have relative quality of judgment that can be diffused easily. Sometimes by merely listening to theirtroubling issues in a genuine and caring way, you can diffuse this Emerging Aggressor.
          {"\n\n"}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>  either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
        </Text>
      ),
      expanded: false
    },
    {
      title: (
        <Text>
          <Text style={{ fontSize: 20,fontWeight: 'bold'}}>Perspective One</Text>{"\n"}
          <Text style={styles.titleSub}>What if you are the aggressor?</Text>
        </Text>
      ),
      explanation: (
        <Text style={styles.info}>
        How should you respond if you are the aggressor? You need to thoughtfully consider circumstances around you. Whose best interest are you serving? Are you moving away from a mutually beneficial relationship with coworkers, colleagues, family or friends? Are you deceiving those around you, or more important are you deceiving yourself? If this is so, consider confiding in a trusted friend, colleague, family member or a mental health professional.
        {'\n\n'} You are at the lowest Stage of Aggression with the greatest quality of judgment; you must use this judgement judiciously.
    {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>  either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
     </Text>), expanded: false 
    },
    {
      title: (
        <Text>
          <Text style={{ fontSize: 20,fontWeight: 'bold'}}>Perspective Two</Text>{"\n"}
          <Text style={styles.titleSub}>What if you are observing an aggressor?</Text>
        </Text>
      ),
      explanation: (
        <Text style={styles.info}>
          <Text style={{ fontSize: 14}}>How should you respond if you are observing another or others that are aggressive? </Text>
          {"\n\n"}<Text style={{ fontSize: 16,fontWeight: 'bold'}}>1. Understanding Autocratic versus Convincing:</Text>
          {"\n"}Persuasion can be either Autocratic or Convincing. Convincing is typically far more effective long term.
          {"\n\n"}<Text style={{ fontSize: 16,fontWeight: 'bold'}}>2. Away From versus Toward Something:</Text>
          {"\n"}Most people, depending upon circumstances, are motivated either toward something, in pursuit of a goal or an objective; or away from something in an attempt to avoid risk, fear or making a mistake. Is your emerging aggressor motivated away from something or toward something? Find what that something is and you can push the correct buttons to move your aggressor away from an aggressive path and toward a more constructive resolution
          {"\n\n"}<Text style={{ fontSize: 16,fontWeight: 'bold'}}>3.Internally versus Externally Thinking:</Text>
          {'\n\n'}Aggressors either respond to your input internally, through a process of looking within themselves and analyzing the input based on their own internal standards; or they will respond to your input externally, through the facts, figures and information delivered by you or others.
      {'\n\n'}An internally motivated individual does not readily respond to demands. Thus, use questions (Socratic Method) to guide this aggressor. You must convince an internally motivated person that the direction you wish him to go is in his best interest.
      {'\n\n'}An externally motivated individual is influenced greatly by your advice and what they perceive as the opinions An externally motivated individual is influenced greatly by your advice and what they perceive as the opinions and wishes of those whom they respect. You may be more autocratic with an externally motivated aggressor. However, remember that being autocratic is like having anchovies on your pizza - a little goes a long way.
      {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
        </Text>
      ),
      expanded: false
    },
    {
      title: (
        <Text>
          <Text style={{ fontSize: 20,fontWeight: 'bold' }}>Perspective Three</Text>{"\n"}
          <Text style={styles.titleSub}>Illustrates CAPS Trust Tenet</Text>
        </Text>
      ),
      explanation: (
        <Text style={styles.info}>
CAPS Axiom: We know that if a person trusts you 100%, they will do whatever you ask of them, because they trust you 100%. Thus, the ability to engender trust is a critical skill in our Best Practice Response.
{'\n\n'}Trust is enhanced when focus is on the common greater good.
{'\n'}To be Convincing, You Must Gain Trust. Focusing on commonalities/similarities is essential to bringing people together and developing rapport and ultimately trust.

{'\n'}Deception is the antithesis of trust.
{'\n'}Always tell the truth!
{'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
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
        <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Aggression Stage One</Text>
      </View>
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollView}>
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
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
  info: {
    fontSize: 16,
    lineHeight: 22,
    color: '#666',
    textAlign: 'justify',
  },
  backIcon: {
    width: 25,
    height: 25,
    tintColor: '#fff',
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    marginVertical: 35,
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
    marginHorizontal: 10,
  },
  arrow: {
    width: 15,
    height: 15,
    tintColor: '#b71c1c',
  },
  arrowDown: {
    width: 15,
    height: 15,
    transform: [{ rotate: '90deg' }],
  },
  cardContent: {
    marginTop:15,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  titleSub: {
    fontSize: 14,
    color: 'gray',
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

export default AggressionStageOneScreen;