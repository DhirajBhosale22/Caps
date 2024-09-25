import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Item {
  title: React.ReactNode;
  explanation: React.ReactNode;
  expanded: boolean;
}

const AggressionStageThreeScreen: React.FC = () => {
   const navigation = useNavigation();
  const [items, setItems] = useState<Item[]>([
    {
      title: (
        <Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Introduction</Text>{"\n"}
          <Text style={styles.titleSub}>Stage Three Introduction</Text>
        </Text>
      ),
      explanation: (
        <Text style={styles.info}>
          <Text style={{ fontWeight: 'bold' }}>{'\n\n'}Cognitive (Intent-driven) Aggression:</Text>
          {"\n\n"}Stage Three is often referred to as "Communicating with Actions Versus Words". Here the aggressor feels he no-longer needs to communicate with words; his actions will speak for themselves. If he can admit it, he is quite self-absorbed and does not see his victim's interest as consistent with his. His disconnection has now gone to the third stage, and he no longer feel the need to consult, coordinate, or negotiate his actions.
          {"\n\n"}<Text style={{ fontWeight: 'bold' }}>Primal (adrenaline-driven) Aggression:</Text>
          {'\n'}Stage Three Aggressors abandon communication as a tool; their actions will speak for themselves! When questioned, this Emerging Aggressor will anxiously and repeatedly buy time before responding, in an effort to deceive. He does not want you to know that he is aggressing against you or others. Yet,this aggressor typically doesn't want to lie to you, so you may experience excessive perspiration, pacing, squirming, and expressions of sadness or distress.
          {'\n\n'}Stages One, Two and Three are all prior to any outward displays of conflict. These individuals are often not seen as "aggressive," or for that matter, see themselves as "aggressive," but they are clearly on the Meter of Emerging Aggression's path that can ultimately produce violence. These are the inconsiderate, uncaring, unfair, distrustful individuals, who can be quite aggressive by virtue of their attitudes toward, and interaction with, those around them.
          {'\n\n'}Remember that typically the first three Stages of the Meter of Emerging Aggression are more about anaggressor's own disposition than what a potential victim may have done to them. Aggressors' view of themselves is often clouded by their ego and self-importance; we often miss these critical aspects of their personality. If we are to be successful Aggression Managers, when we offer constructive critique, the aggressor must be able to view this critique objectively.
          {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking<Text style={styles.link}
            onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
        </Text>
      ),
      expanded: false
    },
    {
      title: (
        <Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Perspective One</Text>{"\n"}
          <Text style={styles.titleSub}>What if you are the aggressor?</Text>
        </Text>
      ),
      explanation: (
        <Text style={styles.info}>
          Your first realization must be that you are "aggressing" and this puts you and those around you at further risk. Stages One and Two can be subtle and difficult to grasp the severity of your aggression, but at Stage Three, with the help of the CAPS Mobile App, you should realize that you are on the Meter of Emerging Aggression and recognize the need to de-escalate.

          {"\n\n"}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text> , either Certified Aggression Managers or Ambassadors' (train-the- trainers) Webinar-based Workshops.
        </Text>
      ),
      expanded: false
    },
    {
      title: (
        <Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Perspective Two</Text>{"\n"}
          <Text style={styles.titleSub}>What if you are observing an aggressor?</Text>
        </Text>
      ),
      explanation: (
        <Text style={styles.info}>
          How should you respond if you are observing another or others that are aggressive? This aggressor may still have his quality of judgment. Convincing this aggressor that his behavior is not in his best interest is an excellent strategy. Consider the following strategies:
          {"\n\n"}<Text style={{ fontSize: 16, fontWeight: 'bold' }}> Least Possible Applause (LPA):</Text>
          {"\n\n"}This principal of LPA, showing disapproval by demonstrating no reaction at all to unacceptable behavior, is effective in instances where an aggressor is seeking reaction to gauge his effectiveness. As an Aggression Manager, you may be called upon to discourage an aggressor's behavior in the most subtle and unobtrusive way. I remember observing experts training dolphins, and watched them use a technique called Least Possible Applause - LPA.
          {/* {'\n\n'}This principal of LPA, showing disapproval by demonstrating no reaction at all to unacceptable behavior, is effective in instances where an aggressor is seeking reaction to gauge his effectiveness. As an Aggression Manager, you may be called upon to discourage an aggressor's behavior in the most subtle and unobtrusive way. I remember observing experts training dolphins, and watched them use a technique called Least Possible Applause - LPA. */}
          {'\n\n'}When a dolphin performed correctly they would applaud vigorously, rewarding the animal!
          {'\n\n'}By contrast, when a dolphin performed incorrectly, they used LPA (Least Possible Applause). They would stand still and expressionless, demonstrating their disapproval of unacceptable performance
          {'\n\n'}This principal of LPA, showing disapproval by demonstrating no reaction at all to unacceptable behavior, can also be effective in instances where an aggressor is seeking reaction to gauge his effectiveness. One example of LPA in the workplace is neither laughing or even smiling at off-color jokes until the jokester understands his humor is unappreciated.
          {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link}
            onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
        </Text>
      ),
      expanded: false
    },
    {
      title: (
        <Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{''}Perspective Three</Text>{"\n"}
          <Text style={styles.titleSub}>Illustrates CAPS Trust Tenet</Text>
        </Text>
      ),
      explanation: (
        <Text style={styles.info}><Text style={{ fontSize: 16, fontWeight: 'bold' }}>Consciously Calculate Your Trust Relationship:</Text>
          {'\n'}Consciously calculate your trust relationship with this emerging aggressor so as to approach him in an effective and trusting way. If your trust relationship is lacking, then build trust through finding and embellishing things you have in common with this emerging aggressor
          {'\n\n'}Explain to this emerging aggressor, "I need to stretch my legs, let's go for a walk!" You stand up and begin walking out of the room; leaving the problem in the room! While out of the room, you find things in common with this aggression, you build on these shared commonalities, out of which, you will develop rapport and ultimately trust. Remember CAPS Trust Tenet One: If someone trusts you 100%, they will quickly diffuse because they trust you 100%.
          {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link}
            onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
            {'\n\n'} <Text style={{fontWeight:'bold'}}>Using the Five Universal Approaches Builds Trust:</Text>
            {'\n\n'}Learn all about and utilize the five Universal Approaches forword in Aggression Stage Five.
          {"\n\n"}<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Leader's Goodwill Built on Trust:</Text>
          {'\n'}As a "leader," you have already engendered trust. Remembering our CAPS Tenet (If someone trusts you 100%, they will do whatever you ask, because they trust you 100%). Use this Leadership engendered trust to convince them away from their aggressive path to a more constructive (assertive) path.
          {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link}
            onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
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
        <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Aggression Stage Three</Text>
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
    marginLeft:10,
    
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
    marginVertical: 15,
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

export default AggressionStageThreeScreen;