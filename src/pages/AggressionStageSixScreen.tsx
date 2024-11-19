// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// interface Item {
//   title: string;
//   explanation: React.ReactNode;
//   expanded: boolean;
// }

// const AggressionStageSixScreen: React.FC = () => {
//   const navigation = useNavigation();
//   const [items, setItems] = useState<Item[]>([
//     {
//       title: (
//         <Text>
//           <Text style={{ fontSize: 20 }}>Introduction</Text>{"\n"}
//           <Text style={styles.titleSub}>Stage Six Introduction</Text>
//         </Text>
//       ),
//       explanation: (
//         <Text style={styles.info}>
//           In Stage Six, the aggressor will demonstrate the potential of his wrath. The aggressor is making every attempt to intimidate his victim into submission. You may witness an aggressor exhibiting attack ideation, or even proclamation: exploring security processes, intelligence gathering and analysis. You may observe co-conspirators discussing ideas for an attack.
//           {'\n\n'}
//           <Text style={{fontSize:12, color:'black'}}>If you are unable to diffuse this Emerging Aggressor, he will likely broach into the Emergency (Crisis) Phase and be well on his way through attack operational preparation and execution, the Seventh, Eighth and potentially to the Ninth Stage Cognitive Aggressor, the perpetrator of murder/suicide or terrorist. Note: There is a great deal more to learn about these Aggression Stages.
//           {'\n'}
//           To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.</Text>
//           {'\n\n'}
//           <Text style={styles.bold}>1. Cognitive (Intent-driven) Aggression at Stage Six</Text>
//           {'\n\n'}
//           This is an active aggressor, someone who must be reported to security.
//           {'\n\n'}
//           You may observe co-conspirators discussing ideas for an attack. They may assemble as a cohesive group or they could be splitting into smaller tactical groups. It is also possible that your aggressor may exhibit self-injurious behavior. He may be either seeking attention or exhibiting commitment to an ultimate attack. The key observable here is "Tactical." Aggressors, who are in the Sixth, Seventh, Eighth and Ninth Stages of Cognitive Aggression, become progressively more "Tactical." What I mean by "Tactical" is that they have identified their target and are committed to its destruction (in the Sixth Stage, Tactical means more Ideation than Operational); and their tactical behavior will reflect this intention.
//           {'\n\n'}
//           It is not instinctual for one human to attack another. You will find that most aggressors are not looking for a fight, thus, you may also observe your Aggressor overtly attempting to intimidate his victim into submission. This is one of the last opportunities your Emerging Aggressor has before he is forced (his perception) to physically or professionally attack his victim.
//           {'\n\n'}
//           In a perfect world, you will have a Threat Assessment or Intervention Team, and you would have notified them once you first noticed this Emerging Aggressor. In a perfect world, you would have engaged this person much earlier and diffused him, thereby, preventing further escalation. Remember that an impending attack may not just represent a physically lethal attack, but may also be an attack against a victim professionally, destroying his or her reputation and credibility.
//           {'\n\n'}
//           <Text style={styles.bold}>2. Primal (adrenaline-driven) Aggression</Text>
//           {'\n\n'}
//           You may observe this Emerging Aggressor so angst, it is possible that he is on the verge of panic; panic that someone might find out his plans or paranoid that he, himself, might be attacked. He has aggressed against another, who is now aggressing back. You may even observe him responding to perceived threats. You will likely observe elevated levels of fear, anger, and/or frustration.
//         </Text>
//       ),
//       expanded: false
//     },
//     {
//       title: (
//         <Text>
//           <Text style={{ fontSize: 20 }}>Perspective One</Text>{"\n"}
//           <Text style={styles.titleSub}>What if you are the aggressor?</Text>
//         </Text>
//       ),
//       explanation: (
//         <Text style={styles.info}>
//           How should you respond if you are the aggressor?
//           {'\n\n'}
//           Realize the consequences of your actions. Do for yourself what you would do if addressing an aggressor. Quality of Judgment is now at a minimum. Cognitive thoughtfulness is significantly diminished. Within your capacity consider the full consequences of your actions and act accordingly. Early during your escalation (Stage Four) you have identified another Aggression Manager, who you trust, that can monitor your behavior and help you diffuse.
//           {'\n'}
//           To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
//         </Text>
//       ),
//       expanded: false
//     },
//     {
//       title: (
//         <Text>
//           <Text style={{ fontSize: 20 }}>Perspective Two</Text>{"\n"}
//           <Text style={styles.titleSub}>What if you are observing an aggressor?</Text>
//         </Text>
//       ),
//       explanation: (
//         <Text style={styles.info}>
//           How should you respond if you are observing another or others that are at the Six Stage of Meter of Emerging Aggression?
//           {'\n\n'}
//           <Text style={styles.bold}>The Big Four Techniques</Text>
//           {'\n\n'}
//           In the Sixth Stage of Aggression it is essential to "Get Real." The US Navy Seals have an excellent method of Getting Real that they call "The Big Four Techniques." These techniques involve "Goal Setting," "Mental Rehearsal" or "Visualization," "Self-Talk," and "Arousal Control."
//           {'\n\n'}
//           <Text style={styles.bold}>Goal Setting</Text>
//           {'\n\n'}
//           Goal Setting requires keeping our Amygdala (adrenaline producing part of our brains) under control. During high stress when "fear" plays a role, the thinking part of our brain (Frontal Lobes) can be taken over by the adrenaline part (the Amygdala), which can be extremely dangerous for us and those around us, thus we need to use If/Then Thinking. By continuously thinking in small, concise chunks, "If this occurs, then I will respond with that," our brain stays engaged, helping us maintain our focus, and thereby, not become captivated by the destructive effects of our adrenaline rush.
//           {'\n\n'}
//           <Text style={styles.bold}>Mental Rehearsal (Visualizations)</Text>
//           {'\n\n'}
//           The more you practice something, the better you get at it. If you are unable to physically practice something, the more you practice it visually (mental rehearsal) the better you will become. However, the key to a positive result in the Aggression Management environment is to visualize you winning! When you actually encounter the stress of an aggressive event, your mind will begin searching for an experience, an answer or actively where by responding in a specific way, you will win. Because you have mentally rehearsed this specific response many times in your visualization, here is a strong likelihood that you will draw from this "planted" experience and your outcome will also be constructive and positive. In other words, you will win!
//           {'\n\n'}
//           Every time you mentally rehearse (visualize) a specific response, and then encounter the need for that response, it will at least be your second time experiencing it. Each time you mentally rehearse, it will be further inoculating you against the stress that aggression can bring. The more comprehensive (real) you make your visualization, the more effective it becomes.
//           {'\n\n'}
//           <Text style={styles.bold}>Self-Talk</Text>
//           {'\n\n'}
//           Humans average 300-1000 thoughts per minute. Will these be constructive or destructive thoughts? Your challenge is to convert "can't do" into "can do" and do so without hesitation. If your attitude is "I'm dead," what will be your outcome? Precisely! Every action starts with a thought. Make your thought a winning thought. Constructive Mental Rehearsal (Visualization), when possible, goes a long way toward preparing you for Positive Constructive Self-Talk.
//           {'\n'}
//           <Text style={styles.bold}>Arousal Control (Cycle Breathing)</Text>
//           {'\n\n'}
//           <Text style={styles.bold}>Using Cycle Breathing to Control the Adrenaline Rush</Text>
//           {'\n\n'}
//           When confronted by an overt aggressor, whose adrenaline is already pumping at a high rate, it is a natural human response for your adrenaline to rise to prepare you for attack. You feel your body responding naturally to the aggressor's adrenaline by releasing your own adrenaline into your bloodstream. Your heart accelerates, you feel perspiration, and your breathing patterns change. To counter these effects, we recommend you employ a technique perfected by the military and law enforcement. It's called "Cycle Breathing."
//           {'\n\n'}
//           <Text style={styles.bold}>Using Cycle Breathing to Gain Focus</Text>
//           {'\n\n'}
//           When an aggressive act occurs, the Aggression Manager must remain calm and focused. Otherwise, you may go into a form of shock and lose your ability to cope with the situation. Cycle Breathing enables the Aggression Manager to be as calm, lucid and focused as possible in the aggressive moment. Note: If you don't use Cycle Breathing, you may go into the "Oh God!" Reflex," (a form of shock) losing up to 1.5 seconds of response time, making you unable to prevent an act of aggression.
//           {'\n\n'}
//           What is Cycle Breathing? It is simply, you consciously breathe in through your nose, counting to four, hold to the count of two, exhale out through your mouth to the count of four and hold to the count of two. Again. And again. You continue until you feel you have regained your calm, possibly throughout the incident.
//           {'\n\n'}
//           Cycle Breathing stops the Adrenaline Rush! It prevents your body from going into a form of shock and thus allows you the ability to remain calm, lucid and as focused as possible in the aggressive moment.
//           {'\n\n'}
//           <Text style={styles.bold}>Using Cycle Breathing to Regain Your Quality of Judgment</Text>
//           {'\n\n'}
//           The more you fall prey to the adrenaline rush, the more you lose your quality of judgment; your ability to think creatively, innovatively and thoughtful, all important skills for an Aggression Manager! You can also regain any lost quality of judgment, your creativity, innovation and thoughtful consideration by focusing on your heart region and, on the second or subsequent cycles of your Cycle Breathing, you slow your count cadence down and at the same time slow your heart rate down. Trust me this works! Manager! You can also regain any lost quality of judgment, your creativity, innovation and thoughtful consideration by focusing on your heart region and, on the second or subsequent cycles of your Cycle Breathing, you slow your count cadence down and at the same time slow your heart rate down. Trust me - this works!
//           {'\n\n'}
//           To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
//         </Text>
//       ),
//       expanded: false
//     },
//     {
//       title: (
//         <Text>
//           <Text style={{ fontSize: 20 }}>Perspective Three</Text>{"\n"}
//           <Text style={styles.titleSub}>Illustrates CAPS Trust Tenet</Text>
//         </Text>
//       ),
//       explanation: (
//         <Text style={styles.info}>
//           <Text style={styles.bold}>CAPS Trust Tenet Explained</Text>
//           {'\n'}
//           Professional documentation and notification engender respect and trust. Your professional documentation and notification can be impacted as your professional judgment diminishes due to the adrenaline rush. With Cycle Breathing you can maintain your Quality of Judgment and thereby your professional documentation and notification. Review our Educational Website's Documentation found in the Introduction to the Meter of Emerging Aggression and the Five Universal Approaches found in Aggression Stage Five, Perspective Three (Illustrates CAPS Trust Tenet). 
//           To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
//         </Text>
//       ),
//       expanded: false
//     }
//   ]);

//   const scrollViewRef = useRef<ScrollView>(null);

//   const expandItem = (item: Item) => {
//     setItems(items.map(i =>
//       i === item ? { ...i, expanded: !i.expanded } : i
//     ));
//   };

//   const showAlert = (result: string, msg: string) => {
//     Alert.alert(result, msg, [{ text: 'OK' }]);
//   };
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#9d0808" />
//       <View style={styles.header}>
//       <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//           <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Introduction To CAPS</Text>
//       </View>
//       <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollView}>
      
    
//         {items.map((item, index) => (
//           <View key={index} style={styles.card}>
//             <TouchableOpacity onPress={() => expandItem(item)} style={styles.cardHeader}>
//               <Image source={require('../assets/img/escolaimg.png')} style={styles.clip} />
//               <Text style={styles.cardTitle}>{item.title}</Text>
//               <Image
//                 source={require('../assets/img/right-arrow.png')}
//                 style={[item.expanded ? styles.arrowDown : styles.arrow , { tintColor: '#9d0808' }] }
//               />
//             </TouchableOpacity>
//             {item.expanded && (
//               <View style={styles.cardContent}>
//                 <Text style={styles.info}>{item.explanation}</Text>
//               </View>
//             )}
//           </View>
//         ))}
//       </ScrollView>
//       <Footer navigation={navigation} />
//     </View>
//   );
// };

// const Footer = ({ navigation }) => (
//   <View style={styles.footer}>
//     <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
//       <Image source={require('../assets/img/home_icon.png')} style={styles.footerIcon} />
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Contacts')}>
//       <Image source={require('../assets/img/call_icon.png')} style={styles.footerIcon} />
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Notifications')}>
//       <Image source={require('../assets/img/Profile-icon.png')} style={styles.footerIcon} />
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Messages')}>
//       <Image source={require('../assets/img/edit_icon.png')} style={styles.footerIcon} />
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Settings')}>
//       <Image source={require('../assets/img/logout_icon.png')} style={styles.footerIcon} />
//     </TouchableOpacity>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#9d0808',
//     padding: 15,
//     width: '100%',
//     flexDirection: 'row',
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//   },
//   backButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   link: {
//     color: '#1E90FF', // Customize the color of the link
//     textDecorationLine: 'underline',
//   },
//   info: {
//     marginTop:20,
//     fontSize: 16,
//     lineHeight: 25,
//     color: '#666',
//     textAlign:'justify',
//     marginLeft:15
//   },
//   backIcon: {
//     width: 25,
//     height: 25,
//     padding: 10,
//   tintColor: '#fff'
//   },
//   scrollView: {
//     paddingHorizontal: 16,
//   },
//   card: {
//     marginTop: 30,
//     marginBottom: 30,
//     borderRadius: 2,
//     backgroundColor: 'transparent',
//     elevation: 0,
//     shadowOpacity: 0,
    
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
   
    
//   },
//   clip: {
//     width: 20,
//     height: 20,
//     tintColor: '#b71c1c',
//     resizeMode: 'contain',
//     marginLeft: 8,
//     marginRight: 10,
//     marginBottom:20
//   },
//   cardTitle: {
//     fontWeight: 'bold',
//     color: '#333',
//     fontSize: 18,
//     flex: 1,
//   },
//   arrow: {
//     width: 15,
//     height: 15,
//     tintColor: '#b71c1c', // Arrow pointing up
//   },
//   arrowDown: {
//     width: 15,
//     height: 15,
//     marginLeft: 'auto',
//     transform: [{ rotate: '90deg' }], // Arrow pointing down
//   },
//   cardContent: {
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//   },

//   footer: {
//     padding: 10,
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   footerText: {
//     fontSize: 14,
//     color: 'black',
//     marginBottom: 10,
//     fontWeight: '500',
//     textAlign:'center',
//     marginLeft:10,
//     marginRight:10,
//   },
//   registrationButton: {
//     backgroundColor: '#9d0808', // Customize the background color of the button
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   registrationButtonText: {
//     color: 'white',
//     fontSize: 18,
  
//   },
//   logoicon: {
//     width: 100,
//     height:100 ,
//     marginHorizontal: 140,
//     backgroundColor: 'white',
// },
// // logoi: {
// //     flex:1,
// //     justifyContent: 'center',
// //     alignItems: 'center',    
// // },
// titleSub: {
//     fontSize: 14, // or your preferred smaller size
//     color: 'gray', // optional, for styling the subtext differently
//   },

//   footer: {
//     height: 60,
//     backgroundColor: '#9d0808',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   footerButton: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   footerIcon: {
//     width: 24,
//     height: 24,
//     tintColor: 'white',
//   },
//   bold: {
//     fontWeight: 'bold'
//   }
// });

// export default AggressionStageSixScreen;
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking,Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface Item {
  title: string;
  explanation: React.ReactNode;
  expanded: boolean;
}

const AggressionStageSixScreen: React.FC = () => {
  const navigation = useNavigation();
  const [showFooter, setShowFooter] = useState(true);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [items, setItems] = useState<Item[]>([
    {
      title: (
       <View>
          <Text style={{ fontSize: wp('6.3%'), fontWeight:'bold',color:'black' }}>Introduction</Text>
          <Text style={styles.titleSub}>Stage Six Introduction</Text>
          </View>
      ),
      explanation: (
        <Text style={styles.info}>
          In Stage Six, the aggressor will demonstrate the potential of his wrath. The aggressor is making every attempt to intimidate his victim into submission. You may witness an aggressor exhibiting attack ideation, or even proclamation: exploring security processes, intelligence gathering and analysis. You may observe co-conspirators discussing ideas for an attack.
          {'\n\n'}
          <Text style={{fontSize: wp('3.5%'), color:'black'}}>If you are unable to diffuse this Emerging Aggressor, he will likely broach into the Emergency (Crisis) Phase and be well on his way through attack operational preparation and execution, the Seventh, Eighth and potentially to the Ninth Stage Cognitive Aggressor, the perpetrator of murder/suicide or terrorist. Note: There is a great deal more to learn about these Aggression Stages.
          {'\n'}
          To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.</Text>
          {'\n\n'}
          <Text style={styles.bold}>1. Cognitive (Intent-driven) Aggression at Stage Six</Text>
          {'\n\n'}
          This is an active aggressor, someone who must be reported to security.
          {'\n\n'}
          You may observe co-conspirators discussing ideas for an attack. They may assemble as a cohesive group or they could be splitting into smaller tactical groups. It is also possible that your aggressor may exhibit self-injurious behavior. He may be either seeking attention or exhibiting commitment to an ultimate attack. The key observable here is "Tactical." Aggressors, who are in the Sixth, Seventh, Eighth and Ninth Stages of Cognitive Aggression, become progressively more "Tactical." What I mean by "Tactical" is that they have identified their target and are committed to its destruction (in the Sixth Stage, Tactical means more Ideation than Operational); and their tactical behavior will reflect this intention.
          {'\n\n'}
          It is not instinctual for one human to attack another. You will find that most aggressors are not looking for a fight, thus, you may also observe your Aggressor overtly attempting to intimidate his victim into submission. This is one of the last opportunities your Emerging Aggressor has before he is forced (his perception) to physically or professionally attack his victim.
          {'\n\n'}
          In a perfect world, you will have a Threat Assessment or Intervention Team, and you would have notified them once you first noticed this Emerging Aggressor. In a perfect world, you would have engaged this person much earlier and diffused him, thereby, preventing further escalation. Remember that an impending attack may not just represent a physically lethal attack, but may also be an attack against a victim professionally, destroying his or her reputation and credibility.
          {'\n\n'}
          <Text style={styles.bold}>2. Primal (adrenaline-driven) Aggression</Text>
          {'\n\n'}
          You may observe this Emerging Aggressor so angst, it is possible that he is on the verge of panic; panic that someone might find out his plans or paranoid that he, himself, might be attacked. He has aggressed against another, who is now aggressing back. You may even observe him responding to perceived threats. You will likely observe elevated levels of fear, anger, and/or frustration.
        </Text>
      ),
      expanded: false
    },
    {
      title: (
        <View>
          <Text style={{ fontSize: wp('6.3%'), fontWeight:'bold',color:'black' }}>Perspective One</Text>
          <Text style={styles.titleSub}>What if you are the aggressor?</Text>
          </View>
      ),
      explanation: (
        <Text style={styles.info}>
          How should you respond if you are the aggressor?
          {'\n\n'}
          Realize the consequences of your actions. Do for yourself what you would do if addressing an aggressor. Quality of Judgment is now at a minimum. Cognitive thoughtfulness is significantly diminished. Within your capacity consider the full consequences of your actions and act accordingly. Early during your escalation (Stage Four) you have identified another Aggression Manager, who you trust, that can monitor your behavior and help you diffuse.
          {'\n'}
          To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
        </Text>
      ),
      expanded: false
    },
    {
      title: (
        <View>
          <Text style={{fontSize: wp('6.3%'), fontWeight:'bold',color:'black'  }}>Perspective Two</Text>
          <Text style={styles.titleSub}>What if you are observing an aggressor?</Text>
          </View>
      ),
      explanation: (
        <Text style={styles.info}>
          How should you respond if you are observing another or others that are at the Six Stage of Meter of Emerging Aggression?
          {'\n\n'}
          <Text style={styles.bold}>The Big Four Techniques</Text>
          {'\n\n'}
          In the Sixth Stage of Aggression it is essential to "Get Real." The US Navy Seals have an excellent method of Getting Real that they call "The Big Four Techniques." These techniques involve "Goal Setting," "Mental Rehearsal" or "Visualization," "Self-Talk," and "Arousal Control."
          {'\n\n'}
          <Text style={styles.bold}>Goal Setting</Text>
          {'\n\n'}
          Goal Setting requires keeping our Amygdala (adrenaline producing part of our brains) under control. During high stress when "fear" plays a role, the thinking part of our brain (Frontal Lobes) can be taken over by the adrenaline part (the Amygdala), which can be extremely dangerous for us and those around us, thus we need to use If/Then Thinking. By continuously thinking in small, concise chunks, "If this occurs, then I will respond with that," our brain stays engaged, helping us maintain our focus, and thereby, not become captivated by the destructive effects of our adrenaline rush.
          {'\n\n'}
          <Text style={styles.bold}>Mental Rehearsal (Visualizations)</Text>
          {'\n\n'}
          The more you practice something, the better you get at it. If you are unable to physically practice something, the more you practice it visually (mental rehearsal) the better you will become. However, the key to a positive result in the Aggression Management environment is to visualize you winning! When you actually encounter the stress of an aggressive event, your mind will begin searching for an experience, an answer or actively where by responding in a specific way, you will win. Because you have mentally rehearsed this specific response many times in your visualization, here is a strong likelihood that you will draw from this "planted" experience and your outcome will also be constructive and positive. In other words, you will win!
          {'\n\n'}
          Every time you mentally rehearse (visualize) a specific response, and then encounter the need for that response, it will at least be your second time experiencing it. Each time you mentally rehearse, it will be further inoculating you against the stress that aggression can bring. The more comprehensive (real) you make your visualization, the more effective it becomes.
          {'\n\n'}
          <Text style={styles.bold}>Self-Talk</Text>
          {'\n\n'}
          Humans average 300-1000 thoughts per minute. Will these be constructive or destructive thoughts? Your challenge is to convert "can't do" into "can do" and do so without hesitation. If your attitude is "I'm dead," what will be your outcome? Precisely! Every action starts with a thought. Make your thought a winning thought. Constructive Mental Rehearsal (Visualization), when possible, goes a long way toward preparing you for Positive Constructive Self-Talk.
          {'\n'}
          <Text style={styles.bold}>Arousal Control (Cycle Breathing)</Text>
          {'\n\n'}
          <Text style={styles.bold}>Using Cycle Breathing to Control the Adrenaline Rush</Text>
          {'\n\n'}
          When confronted by an overt aggressor, whose adrenaline is already pumping at a high rate, it is a natural human response for your adrenaline to rise to prepare you for attack. You feel your body responding naturally to the aggressor's adrenaline by releasing your own adrenaline into your bloodstream. Your heart accelerates, you feel perspiration, and your breathing patterns change. To counter these effects, we recommend you employ a technique perfected by the military and law enforcement. It's called "Cycle Breathing."
          {'\n\n'}
          <Text style={styles.bold}>Using Cycle Breathing to Gain Focus</Text>
          {'\n\n'}
          When an aggressive act occurs, the Aggression Manager must remain calm and focused. Otherwise, you may go into a form of shock and lose your ability to cope with the situation. Cycle Breathing enables the Aggression Manager to be as calm, lucid and focused as possible in the aggressive moment. Note: If you don't use Cycle Breathing, you may go into the "Oh God!" Reflex," (a form of shock) losing up to 1.5 seconds of response time, making you unable to prevent an act of aggression.
          {'\n\n'}
          What is Cycle Breathing? It is simply, you consciously breathe in through your nose, counting to four, hold to the count of two, exhale out through your mouth to the count of four and hold to the count of two. Again. And again. You continue until you feel you have regained your calm, possibly throughout the incident.
          {'\n\n'}
          Cycle Breathing stops the Adrenaline Rush! It prevents your body from going into a form of shock and thus allows you the ability to remain calm, lucid and as focused as possible in the aggressive moment.
          {'\n\n'}
          <Text style={styles.bold}>Using Cycle Breathing to Regain Your Quality of Judgment</Text>
          {'\n\n'}
          The more you fall prey to the adrenaline rush, the more you lose your quality of judgment; your ability to think creatively, innovatively and thoughtful, all important skills for an Aggression Manager! You can also regain any lost quality of judgment, your creativity, innovation and thoughtful consideration by focusing on your heart region and, on the second or subsequent cycles of your Cycle Breathing, you slow your count cadence down and at the same time slow your heart rate down. Trust me this works! Manager! You can also regain any lost quality of judgment, your creativity, innovation and thoughtful consideration by focusing on your heart region and, on the second or subsequent cycles of your Cycle Breathing, you slow your count cadence down and at the same time slow your heart rate down. Trust me - this works!
          {'\n\n'}
          To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
        </Text>
      ),
      expanded: false
    },
    {
      title: (
        <View>
          <Text style={{ fontSize: wp('6.3%'), fontWeight:'bold',color:'black' }}>Perspective Three</Text>
          <Text style={styles.titleSub}>Illustrates CAPS Trust Tenet</Text>
          </View>
      ),
      explanation: (
        <Text style={styles.info}>
          <Text style={styles.bold}>CAPS Trust Tenet Explained</Text>
          {'\n'}
          Professional documentation and notification engender respect and trust. Your professional documentation and notification can be impacted as your professional judgment diminishes due to the adrenaline rush. With Cycle Breathing you can maintain your Quality of Judgment and thereby your professional documentation and notification. Review our Educational Website's Documentation found in the Introduction to the Meter of Emerging Aggression and the Five Universal Approaches found in Aggression Stage Five, Perspective Three (Illustrates CAPS Trust Tenet). 
          To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
        </Text>
      ),
      expanded: false
    }
  ]);

  const scrollViewRef = useRef<ScrollView>(null);

  const expandItem = (item: Item) => {
    setItems(items.map(i =>
      i === item ? { ...i, expanded: !i.expanded } : i
    ));
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
        <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Aggression Stage Six</Text>
      </View>
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollView}>
      
    
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
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
  info: {
    marginTop: hp('2.5%'), // Responsive margin
    fontSize: wp('4%'), // Responsive font size
    lineHeight: hp('3.5%'), // Responsive line height
    color: '#666',
    textAlign: 'justify',
  },
  backIcon: {
    width: wp('7%'), // Responsive width
    height: wp('7%'), // Responsive height
    padding: hp('1%'), // Responsive padding
    tintColor: '#fff',
  },
  scrollView: {
    paddingHorizontal: wp('4%'), // Responsive horizontal padding
  },
  card: {
    marginTop: hp('2%'), // Responsive margin
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
  },
  arrowDown: {
    width: wp('3%'), // Adjusted width to be responsive
    height: hp('2.2%'), // Adjusted height to be responsive
    transform: [{ rotate: '90deg' }],
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
  titleSub: {
    fontSize: wp('4.2%'), // Adjusted font size to be responsive
    color: 'black',
  },
});

export default AggressionStageSixScreen;
