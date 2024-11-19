// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// interface Item {
//   title: string;
//   explanation: React.ReactNode;
//   expanded: boolean;
// }

// const AggressionStageFiveScreen: React.FC = () => {
//   const navigation = useNavigation();
//   const [items, setItems] = useState([
//     {
//       title: (
//         <Text>
//           <Text style={{ fontSize: 20 }}>Introduction</Text>{"\n"}
//           <Text style={styles.titleSub}>Stage Five Introduction</Text>
//         </Text>
//       ),
//       explanation: (
//         <Text style={styles.info}> In Stage Five we observe this Emerging Aggressor coming out from behind his curtain, publicly and deliberately damaging the reputation of his victim. At this point typically our Emerging Aggressor, by Planting the Seed of Distrust, has discredited his victim and created alliances with his victim's community (see description in Stage four). Now this emerging aggressor feels the confidence to come out from behind his curtain and join with the victim's community to take action against his victim. This would be an excellent time for Cycle Breathing. You don't want to become part of the problem by getting caught up in the adrenaline rush!
//         {'\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking<Text style={styles.link}
//           onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
//         {'\n\n'} <Text style={styles.info}> You may observe this aggressor inciting group behavior in support of his cause against his victim. This Emerging Aggressor has already attacked the core identities of his victim and will now unmask his victim as an enemy of his or her own community. First there was distrust, then discredit and now his victim becomes an enemy of his or her own community. Yet, in most cases, even though this Emerging Aggressor is at the Fifth Stage of Nine Stages (more than half-way to lethality) of the Meter of Emerging Aggression, these actions are often completely under the radar of most Security and Human Resource Professionals. Would Mental Health Professionals identify this behavior? More than likely not, because these are humans being human, without any discernable mental illness or disorder. A study following the horrific shooting at Virginia Tech (Report to the President on Issues Raised by the Virginia Tech Tragedy, June 13, 2007) has shown that "Most people who are violent do not have a mental illness, and mos evaluated on three different occasions and in each occasion he was deemed to be "Depressed and anxious, but not at risk of hurting himself or others!" We are not suggesting that murderers do not have mental health issues; we are saying that the state of a person's mental health is not a reliable predictor of whether this person might become our next murderer.
//         </Text>
//         {'\n\n'}Typically, emerging aggressors are not individuals with discernible mental illness, they are simply Emerging Aggressors. This is not to say mental health professionals do not have an important role, but simply mental illness has proven not to be a good predictor of who the next perpetrator of violence will be!
//         {'\n\n'}<Text style={styles.bold}>Primal (adrenaline-driven) Aggression:</Text>We may observe this Emerging Aggressor expressing contempt and/or disgust toward his victim, or anyone who stands up for this victim. If you engage this Emerging Aggressor, you may receive in return an increase in intensity of mood & behavior felt by you during the aggressor's response. You will likely feel elevated levels of fear, anger, and/or frustration. Effective use of Cycle Breathing is an important asset at this Stage and throughout the remaining Stages of Aggression.
//       </Text>), expanded: false
//     },
//     {
//       title: (<Text>
//         <Text style={{ fontSize: 20 }}>Prespective One</Text>{"\n"}
//         <Text style={styles.titleSub}>What if you are the aggressor?</Text>
//       </Text>), explanation: (<Text style={styles.info}>{'\n\n'}
//         How should you respond if you are the aggressor?
//         {'\n\n'} Get help from a trusted advocate or Mental Health Professional.
//         {'\n\n'} The higher you find yourself on the Aggression Continuum, the more you lose your quality of judgment. It may be time to get help from a trusted advocate, colleague or professional counselor.
//         {'\n\n'}At this stage of aggression, it is essential to realize it is not in your best interest to attack your victim publicly. The consequences can be great!
//         {'\n\n'}better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking<Text style={styles.link}
//           onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
//       </Text>), expanded: false
//     },

//     {
//       title: (<Text>
//         <Text style={{ fontSize: 20 }}>Prespective Two</Text>{"\n"}
//         <Text style={styles.titleSub}>What if you are observing an aggressor?</Text>
//       </Text>), explanation: (<Text style={styles.info}>{'\n\n'}How should you respond if you are observing another or others that are aggressive?
//         {'\n\n'}Think of how you're going to persuade this person to come over to your side.
//         {'\n\n'}This person now appears angry, bitter, frustrated and even desperate.
//         {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link}
//           onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.

//         {'\n\n'}<Text style={styles.bold}>Verbal Strategies of Persuasion.</Text>
//         {'\n\n'}Now you're working to strengthen a sense of trust between you and the aggressor, and to refine in your own mind the Crux of the Matter - or "where he's coming from." Think of how you're going to persuade this person to come over to your side. Everything you do or say, for the duration of your discussions with the aggressor, falls into three areas of Verbal Strategies: Suggestion, Impressment, and Controlling Options.
//         {'\n\n'}<Text style={styles.bold}>Suggestion</Text>
//         {'\n\n'}The strategy of Suggestion plants an idea in the mind of the aggressor. It activates his imagination of future events, or memories of past feelings or events. When you ask him, "Have you considered what would happen to you if you were to split the supervisor's head," he begins to imagine consequences. You help him along. "Think about going to jail. Think about what would happen to your family."
//         {'\n\n'}<Text style={styles.bold}>Smoothing</Text>
//         {'\n\n'}In the act of using Smoothing (Suggestion) to recall past, more positive feelings, you might ask, "Remember when you first came here, how everybody worked and got along together?" This type of Suggestion, called "Smoothing," calls on the aggressor to focus on the positive aspects of an issue, and can have a calming effect on the individual as he searches his memory. It also helps identify persuasive buttons that can be used to move the aggressor away from an aggressive path. "What was it originally that brought you to this company?" The answer will offer up effective reasons for this aggressor to change to a more constructive solution.
//         {'\n\n'}<Text style={styles.bold}>Reframing</Text>
//         {'\n\n'}Dignity is the last rational thing to go. Once dignity is cast aside, the aggressor has no place to go but over the precipice of self-destruction and violence. Reframing is a technique that helps to restore dignity after the aggressor has taken an undignified action. It suggests a more positive or more honorable motive for an individual to have acted aggressively. "Sam, maybe the real reason you've acted this way is that your own standards of quality were frustrated by the rush we've been working under." Impressment
//         {'\n\n'}<Text style={styles.bold}>Impressment</Text>
//         {'\n\n'}This strategy convinces the aggressor to come with you along a course of action (a cause) because it is in his best interests - and if possible, have him believe that it is his idea. Both Suggestion and Controlling Options are strategies that lead to Impressment, which involves an aggressor making a final decision to take the action you want the aggressor to take. Effective Impressment preserves dignity and sense of pride. Humiliation of the aggressor should never be the aim of any persuasion. Another form of Impressment is "Smoothing."

//         {'\n\n'}<Text style={styles.bold}>Controlling Options</Text>
//         {'\n\n'}With this strategy, you enable the aggressor to select an option for action, as long as it is the option the you want him to select. In otherwords, the aggressor is stepping out on ground that you have created for him.

//         {'\n\n'}You challenge is to determine whether this aggressor responds more to Cognitive (intent-driven) reasoning, where logic may prevail; or Primal (adrenaline-driven) emotions, where calm and understand may prevail. Whereas, one aggressor might be moved more by Cognitive reasoning because otherwise he will automatically lose his job; whereas, another, might be moved more by Primal emotions because he will disappoint and embarrass his family (High Priority Values).
//         {'\n\n'}The Aggression Manager provides the aggressor with options that allow him to believe he is making his own decision, without losing his dignity, i.e.,"Here's why you should do what I've suggested. If you decide to become aggressive, company policy, in the interest of safety, will force us to terminate you. So, the choice is really up to you, isn't it?" A form of Controlling the Options is "Setting Limits."

//         {'\n\n\n'}<Text style={styles.bold}>Setting Limits</Text>
//         {'\n\n'}"Setting Limits" is a technique of controlling options. The limits you set must be clearly stated. "Sam, if you hit him, you will be arrested for assault. But if you walk away now, maybe we can forget this whole thing."When laying out the options, always save your option for last, must be cleany stated. Sam, in you hit him, you will be arrested for assault. But if you walk away now, maybe we can forget this whole thing."When laying out the options, always save your option for last, because the final option stated always makes the most impact. Your suggested "Limits" must be enforceable as well. "If you do this, company policy states you must be terminated. It's not my choice; it's yours to make." And limits must be reasonable. Don't make any promises you can't keep. "If you stop, I'll talk to the division manager about your situation. But it's your decision.

//       </Text>), expanded: false
//     },

//     {
//       title: (<Text>
//         <Text style={{ fontSize: 20 }}>Prespective Three</Text>{"\n"}
//         <Text style={styles.titleSub}>Illustrates CAPS Trust Tenet</Text>
//       </Text>), explanation: (<Text style={styles.info}>{'\n\n'}The understanding of "The Unmagnificent Seven Personalities" and the use of the "Five Universal Approaches" are positive and constructive approaches that can quickly establish rapport and trust with an emerging aggressor.
//         {'\n\n'}Adapted from Robert Bramson's Coping with Difficult People, we have identified seven basic types of troublesome and potentially aggressive personalities. We call them "The Unmagnificent Seven." Each of us may, from time to time, exhibit one or more of these traits, but this is not what we are looking for as Aggression Managers. We want to focus on those individuals whose Unmagnificent personalities permeate their being, and who use those traits habitually as tools to control and manipulate others. Some of these Unmagnificent behaviors can become covertly aggressive, while others can lead to outright aggressive behavior. Don't assume that if someone exhibits a particular behavior, that he is an aggressor ready to strike.
//         {'\n\n'}Your challenge is to identify these individuals having one or more of the Unmagnificent Personalities, engage, use the Five Universal Approaches, and diffuse their behaviors before they trigger a violent incident.
//         {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link}
//           onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
//         {'\n\n'}<Text style={styles.bold}>Identifying and Managing the Unmagnificent Seven</Text>
//         {'\n\n'}<Text style={styles.bold}>{'\n\n'}Sherman Tank -</Text>
//         {'\n'}Enjoys confrontation; needs to prove himself right; often uses his physical presence, persona or personality to intimidate others.
//         {'\n\n'}<Text style={styles.bold}>Sniper</Text>
//         {'\n'}Undermines your authority and morale with criticism behind your back; often uses jokes and sarcasm to cover his sniping. This way, if caught, he can say "I was just kidding." This is also referred to as Deniable Punishment Behavior, in which an aggressor can use sniping as a means to punish another and still give them the ability to deny it later.
//         {'\n'}<Text style={styles.bold}>Exploder -</Text>
//         {'\n'}Exhibits mood swings between calm and loud, temperamental outbursts; full of insults and name-calling. The Exploder's goal is to silence the opposition and force others into submitting to his will.
//         {'\n\n'}<Text style={styles.bold}>Complainer -</Text>
//         {'\n'}Whines constantly, and feels totally unappreciated and powerless to improve his condition.
//         {'\n\n'}<Text style={styles.bold}>Negativist -</Text>
//         {'\n'}Says no to every suggestion and is never happy. The Negativist wants everyone to be as miserable as he is. You may have heard the statement "Misery loves company." This is not completely true. More accurate is, "Misery loves miserable company."

//         {'\n\n'}<Text style={styles.bold}>Clam -</Text>
//         {'\n'}Remains silent and unresponsive to any request for ideas, suggestions, and solutions. The Clam can be the most dangerous of all the Unmagnificent Seven, because the Clam keeps his feelings, emotions and intent pent up and to himself. He can be the most dangerous of all theUnmagnificent Personalities, because he can be disgruntled and you don't know it!
//         {'\n'}<Text style={styles.bold}>Bulldozer -</Text>
//         {'\n'}Tries to overwhelm you with facts and figures. His goal is to establish himself as the indispensable expert in everything. The Bulldozer, arrogant and superior in demeanor, has little regard for the knowledge and opinions of others.
//         {'\n\n'}<Text style={styles.bold}>Defusing the Unmagnificent Personalities with the Five Universal Approaches</Text>
//         {'\n'}There are five universal approaches you can use when dealing with Unmagnificent personalities. For the sake of these illustrations, we'll presume that this individual will remain a co-worker, a fellow student or a family member, so you need to continue your relationship with this person. That is why, in part, we want this encounter to be constructive in tone, and not punitive, where the objective would be to apply blame and punishment. These universal approaches are meant to be a template only, a progressive guide to assist you in selecting the right words and objectives for a particular individual, in a particular environment.

//         {'\n\n'}<Text style={styles.bold}>Separate</Text>
//         {'\n'}Separate the Unmagnificent person from his admirers. You either remove him from the crowd or you remove the crowd from him. You may find the latter easier. Does this mean getting this Unmagnificent person alone? Not necessarily. You may need an observer, an advocate or even a professional counselor. Compliment
//         {'\n\n'}<Text style={styles.bold}>Compliment</Text>
//         {'\n'}You want this encounter to be constructive, so start with something positive, i.e., "You are a valued employee, and you have great talent and ability." You decide what to say based on the individual and the circumstances surrounding the situation.

//         {'\n'}<Text style={styles.bold}>Document</Text>
//         {'\n'}Acknowledge the Unmagnificent person for his specific personality type by documenting and discussing previous incidents, but doing so in a neutral and reflective manner. We recommend that prior incidents be documented in writing. It is imperative that you review them with the aggressor in a calm (Cycle Breathing) and neutral way so as not to incite him. Behavioral scientists tell us that 7% of social communication is in words, 38% is in tone of voice (therefore tone of voice is 5 times more important than the themselves); and 55% of communication is in body language! While you can present your evidence verbally with objectivity, it is far more difficult to portray neutrality. If your verbal presentation is seen as overly judgmental or condescending, you could lose your rapport with this emerging aggressor, and thereby your influence with him. We suggest written documentation, which may come in useful in the event this action is reviewed by superiors, or even results in court action.
//         {'\n\n'}<Text style={styles.bold}>Convince</Text>
//         {'\n'}Your challenge is to convince this Unmagnificent person that his behavior is not in his own best interest (Second CAPS Tenet), "This behavior is not in your best interest!" This puts him on notice that he is damaging his case, Your challenge is to convince this Unmagnificent person that his behavior is not in his own best interest (Second CAPS Tenet), "This behavior is not in your best interest!" This puts him on notice that he is damaging his case, and indeed his own future with his behavior, and needs to re-examine his actions immediately. We call this "Impressment," which will be discussed in detail elsewhere.
//         {'\n'}<Text style={styles.bold}>Team Productivity</Text>
//         {'\n'}Finally, you ask the Unmagnificent person, "How can we work together as a team to be more productive?" This fifth element is essential because it ties everything else together. It says that you care and respect this person enough to help him work through this process resulting in better productivity for all involved.

//       </Text>), expanded: false
//     },

//   ]);

  
//   const scrollViewRef = useRef<ScrollView>(null);

//   const expandItem = (item: Item) => {
//     setItems(items.map(i => i === item ? { ...i, expanded: !i.expanded } : i));
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#9d0808" />
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//           <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Introduction To CAPS</Text>
//       </View>
//       <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollView}>
//         {items.map((item, index) => (
//           <View key={index} style={styles.card}>
//             <TouchableOpacity onPress={() => expandItem(item)} style={styles.cardHeader}>
//               <Image source={require('../assets/img/escolaimg.png')} style={styles.clip} />
//               <Text style={styles.cardTitle}>{item.title}</Text>
//               <Image
//                 source={require('../assets/img/right-arrow.png')}
//                 style={[item.expanded ? styles.arrowDown : styles.arrow, { tintColor: '#9d0808' }]}
//               />
//             </TouchableOpacity>
//             {item.expanded && (
//               <View style={styles.cardContent}>
//                 {item.explanation}
//               </View>
//             )}
//           </View>
//         ))}
//       </ScrollView>
//       <Footer navigation={navigation} />
//     </View>
//   );
// };

// interface FooterProps {
//   navigation: any;
// }

// const Footer: React.FC<FooterProps> = ({ navigation }) => (
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
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   bold:{
//     fontWeight:'bold'
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#fff',
//     flex: 1,
//     textAlign: 'center',
//   },
//   backButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   backIcon: {
//     width: 25,
//     height: 25,
//     tintColor: '#fff',
//   },
//   link: {
//     color: '#1E90FF',
//     textDecorationLine: 'underline',
//   },
//   info: {
//     marginTop: 20,
//     fontSize: 16,
//     lineHeight: 25,
//     color: '#666',
//     textAlign: 'justify',
//     marginLeft:15
//   },
//   scrollView: {
//     paddingHorizontal: 16,
//   },
//   card: {
//     marginTop: 30,
//     marginBottom: 30,
//     borderRadius: 2,
//     backgroundColor: 'transparent',
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   titleSub: {
//     fontSize: 14, // or your preferred smaller size
//     color: 'gray', // optional, for styling the subtext differently
//   },

//   clip: {
//     width: 20,
//     height: 20,
//     tintColor: '#b71c1c',
//     resizeMode: 'contain',
//     marginLeft: 8,
//     marginRight: 10,
//     marginBottom: 20,
//   },
//   cardTitle: {
//     fontWeight: 'bold',
//     color: '#333',
//     fontSize: 18,
//     flex: 1,
//   },
//   arrow: {
//     width: 20,
//     height: 20,
//     transform: [{ rotate: '90deg' }],
//   },
//   arrowDown: {
//     width: 20,
//     height: 20,
//     transform: [{ rotate: '270deg' }],
//   },
//   cardContent: {
//     marginTop: 10,
//     paddingHorizontal: 15,
//     paddingBottom: 10,
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
// });

// export default AggressionStageFiveScreen;

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking,Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Item {
  title: string;
  explanation: React.ReactNode;
  expanded: boolean;
}

const AggressionStageFiveScreen: React.FC = () => {
  const navigation = useNavigation();
  const [showFooter, setShowFooter] = useState(true);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [items, setItems] = useState([
    {
      title: (
       <View>
          <Text style={{fontSize: wp('6.3%'), fontWeight: 'bold',color:'black' }}>Introduction</Text>
          <Text style={styles.titleSub}>Stage Five Introduction</Text>
          </View>
      ),
      explanation: (
        <Text style={styles.info}> In Stage Five we observe this Emerging Aggressor coming out from behind his curtain, publicly and deliberately damaging the reputation of his victim. At this point typically our Emerging Aggressor, by Planting the Seed of Distrust, has discredited his victim and created alliances with his victim's community (see description in Stage four). Now this emerging aggressor feels the confidence to come out from behind his curtain and join with the victim's community to take action against his victim. This would be an excellent time for Cycle Breathing. You don't want to become part of the problem by getting caught up in the adrenaline rush!
        {'\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking<Text style={styles.link}
          onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
        {'\n\n'} <Text style={styles.info}> You may observe this aggressor inciting group behavior in support of his cause against his victim. This Emerging Aggressor has already attacked the core identities of his victim and will now unmask his victim as an enemy of his or her own community. First there was distrust, then discredit and now his victim becomes an enemy of his or her own community. Yet, in most cases, even though this Emerging Aggressor is at the Fifth Stage of Nine Stages (more than half-way to lethality) of the Meter of Emerging Aggression, these actions are often completely under the radar of most Security and Human Resource Professionals. Would Mental Health Professionals identify this behavior? More than likely not, because these are humans being human, without any discernable mental illness or disorder. A study following the horrific shooting at Virginia Tech (Report to the President on Issues Raised by the Virginia Tech Tragedy, June 13, 2007) has shown that "Most people who are violent do not have a mental illness, and mos evaluated on three different occasions and in each occasion he was deemed to be "Depressed and anxious, but not at risk of hurting himself or others!" We are not suggesting that murderers do not have mental health issues; we are saying that the state of a person's mental health is not a reliable predictor of whether this person might become our next murderer.
        </Text>
        {'\n\n'}Typically, emerging aggressors are not individuals with discernible mental illness, they are simply Emerging Aggressors. This is not to say mental health professionals do not have an important role, but simply mental illness has proven not to be a good predictor of who the next perpetrator of violence will be!
        {'\n\n'}<Text style={styles.bold}>Primal (adrenaline-driven) Aggression:</Text>We may observe this Emerging Aggressor expressing contempt and/or disgust toward his victim, or anyone who stands up for this victim. If you engage this Emerging Aggressor, you may receive in return an increase in intensity of mood & behavior felt by you during the aggressor's response. You will likely feel elevated levels of fear, anger, and/or frustration. Effective use of Cycle Breathing is an important asset at this Stage and throughout the remaining Stages of Aggression.
      </Text>), expanded: false
    },
    {
      title: (<View>
        <Text style={{fontSize: wp('6.3%'), fontWeight: 'bold',color:'black' }}>Prespective One</Text>
        <Text style={styles.titleSub}>What if you are the aggressor?</Text>
        </View>), explanation: (<Text style={styles.info}>{'\n\n'}
        How should you respond if you are the aggressor?
        {'\n\n'} Get help from a trusted advocate or Mental Health Professional.
        {'\n\n'} The higher you find yourself on the Aggression Continuum, the more you lose your quality of judgment. It may be time to get help from a trusted advocate, colleague or professional counselor.
        {'\n\n'}At this stage of aggression, it is essential to realize it is not in your best interest to attack your victim publicly. The consequences can be great!
        {'\n\n'}better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking<Text style={styles.link}
          onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
      </Text>), expanded: false
    },

    {
      title: (<View>
        <Text style={{ fontSize: wp('6.3%'), fontWeight: 'bold',color:'black'}}>Prespective Two</Text>
        <Text style={styles.titleSub}>What if you are observing an aggressor?</Text>
        </View>), explanation: (<Text style={styles.info}>{'\n\n'}How should you respond if you are observing another or others that are aggressive?
        {'\n\n'}Think of how you're going to persuade this person to come over to your side.
        {'\n\n'}This person now appears angry, bitter, frustrated and even desperate.
        {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link}
          onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.

        {'\n\n'}<Text style={styles.bold}>Verbal Strategies of Persuasion.</Text>
        {'\n\n'}Now you're working to strengthen a sense of trust between you and the aggressor, and to refine in your own mind the Crux of the Matter - or "where he's coming from." Think of how you're going to persuade this person to come over to your side. Everything you do or say, for the duration of your discussions with the aggressor, falls into three areas of Verbal Strategies: Suggestion, Impressment, and Controlling Options.
        {'\n\n'}<Text style={styles.bold}>Suggestion</Text>
        {'\n\n'}The strategy of Suggestion plants an idea in the mind of the aggressor. It activates his imagination of future events, or memories of past feelings or events. When you ask him, "Have you considered what would happen to you if you were to split the supervisor's head," he begins to imagine consequences. You help him along. "Think about going to jail. Think about what would happen to your family."
        {'\n\n'}<Text style={styles.bold}>Smoothing</Text>
        {'\n\n'}In the act of using Smoothing (Suggestion) to recall past, more positive feelings, you might ask, "Remember when you first came here, how everybody worked and got along together?" This type of Suggestion, called "Smoothing," calls on the aggressor to focus on the positive aspects of an issue, and can have a calming effect on the individual as he searches his memory. It also helps identify persuasive buttons that can be used to move the aggressor away from an aggressive path. "What was it originally that brought you to this company?" The answer will offer up effective reasons for this aggressor to change to a more constructive solution.
        {'\n\n'}<Text style={styles.bold}>Reframing</Text>
        {'\n\n'}Dignity is the last rational thing to go. Once dignity is cast aside, the aggressor has no place to go but over the precipice of self-destruction and violence. Reframing is a technique that helps to restore dignity after the aggressor has taken an undignified action. It suggests a more positive or more honorable motive for an individual to have acted aggressively. "Sam, maybe the real reason you've acted this way is that your own standards of quality were frustrated by the rush we've been working under." Impressment
        {'\n\n'}<Text style={styles.bold}>Impressment</Text>
        {'\n\n'}This strategy convinces the aggressor to come with you along a course of action (a cause) because it is in his best interests - and if possible, have him believe that it is his idea. Both Suggestion and Controlling Options are strategies that lead to Impressment, which involves an aggressor making a final decision to take the action you want the aggressor to take. Effective Impressment preserves dignity and sense of pride. Humiliation of the aggressor should never be the aim of any persuasion. Another form of Impressment is "Smoothing."

        {'\n\n'}<Text style={styles.bold}>Controlling Options</Text>
        {'\n\n'}With this strategy, you enable the aggressor to select an option for action, as long as it is the option the you want him to select. In otherwords, the aggressor is stepping out on ground that you have created for him.

        {'\n\n'}You challenge is to determine whether this aggressor responds more to Cognitive (intent-driven) reasoning, where logic may prevail; or Primal (adrenaline-driven) emotions, where calm and understand may prevail. Whereas, one aggressor might be moved more by Cognitive reasoning because otherwise he will automatically lose his job; whereas, another, might be moved more by Primal emotions because he will disappoint and embarrass his family (High Priority Values).
        {'\n\n'}The Aggression Manager provides the aggressor with options that allow him to believe he is making his own decision, without losing his dignity, i.e.,"Here's why you should do what I've suggested. If you decide to become aggressive, company policy, in the interest of safety, will force us to terminate you. So, the choice is really up to you, isn't it?" A form of Controlling the Options is "Setting Limits."

        {'\n\n\n'}<Text style={styles.bold}>Setting Limits</Text>
        {'\n\n'}"Setting Limits" is a technique of controlling options. The limits you set must be clearly stated. "Sam, if you hit him, you will be arrested for assault. But if you walk away now, maybe we can forget this whole thing."When laying out the options, always save your option for last, must be cleany stated. Sam, in you hit him, you will be arrested for assault. But if you walk away now, maybe we can forget this whole thing."When laying out the options, always save your option for last, because the final option stated always makes the most impact. Your suggested "Limits" must be enforceable as well. "If you do this, company policy states you must be terminated. It's not my choice; it's yours to make." And limits must be reasonable. Don't make any promises you can't keep. "If you stop, I'll talk to the division manager about your situation. But it's your decision.

      </Text>), expanded: false
    },

    {
      title: (<View>
        <Text style={{ fontSize: wp('6.3%'), fontWeight: 'bold',color:'black'}}>Prespective Three</Text>
        <Text style={styles.titleSub}>Illustrates CAPS Trust Tenet</Text>
        </View>), explanation: (<Text style={styles.info}>{'\n\n'}The understanding of "The Unmagnificent Seven Personalities" and the use of the "Five Universal Approaches" are positive and constructive approaches that can quickly establish rapport and trust with an emerging aggressor.
        {'\n\n'}Adapted from Robert Bramson's Coping with Difficult People, we have identified seven basic types of troublesome and potentially aggressive personalities. We call them "The Unmagnificent Seven." Each of us may, from time to time, exhibit one or more of these traits, but this is not what we are looking for as Aggression Managers. We want to focus on those individuals whose Unmagnificent personalities permeate their being, and who use those traits habitually as tools to control and manipulate others. Some of these Unmagnificent behaviors can become covertly aggressive, while others can lead to outright aggressive behavior. Don't assume that if someone exhibits a particular behavior, that he is an aggressor ready to strike.
        {'\n\n'}Your challenge is to identify these individuals having one or more of the Unmagnificent Personalities, engage, use the Five Universal Approaches, and diffuse their behaviors before they trigger a violent incident.
        {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link}
          onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
        {'\n\n'}<Text style={styles.bold}>Identifying and Managing the Unmagnificent Seven</Text>
        {'\n\n'}<Text style={styles.bold}>{'\n\n'}Sherman Tank -</Text>
        {'\n'}Enjoys confrontation; needs to prove himself right; often uses his physical presence, persona or personality to intimidate others.
        {'\n\n'}<Text style={styles.bold}>Sniper</Text>
        {'\n'}Undermines your authority and morale with criticism behind your back; often uses jokes and sarcasm to cover his sniping. This way, if caught, he can say "I was just kidding." This is also referred to as Deniable Punishment Behavior, in which an aggressor can use sniping as a means to punish another and still give them the ability to deny it later.
        {'\n'}<Text style={styles.bold}>Exploder -</Text>
        {'\n'}Exhibits mood swings between calm and loud, temperamental outbursts; full of insults and name-calling. The Exploder's goal is to silence the opposition and force others into submitting to his will.
        {'\n\n'}<Text style={styles.bold}>Complainer -</Text>
        {'\n'}Whines constantly, and feels totally unappreciated and powerless to improve his condition.
        {'\n\n'}<Text style={styles.bold}>Negativist -</Text>
        {'\n'}Says no to every suggestion and is never happy. The Negativist wants everyone to be as miserable as he is. You may have heard the statement "Misery loves company." This is not completely true. More accurate is, "Misery loves miserable company."

        {'\n\n'}<Text style={styles.bold}>Clam -</Text>
        {'\n'}Remains silent and unresponsive to any request for ideas, suggestions, and solutions. The Clam can be the most dangerous of all the Unmagnificent Seven, because the Clam keeps his feelings, emotions and intent pent up and to himself. He can be the most dangerous of all theUnmagnificent Personalities, because he can be disgruntled and you don't know it!
        {'\n'}<Text style={styles.bold}>Bulldozer -</Text>
        {'\n'}Tries to overwhelm you with facts and figures. His goal is to establish himself as the indispensable expert in everything. The Bulldozer, arrogant and superior in demeanor, has little regard for the knowledge and opinions of others.
        {'\n\n'}<Text style={styles.bold}>Defusing the Unmagnificent Personalities with the Five Universal Approaches</Text>
        {'\n'}There are five universal approaches you can use when dealing with Unmagnificent personalities. For the sake of these illustrations, we'll presume that this individual will remain a co-worker, a fellow student or a family member, so you need to continue your relationship with this person. That is why, in part, we want this encounter to be constructive in tone, and not punitive, where the objective would be to apply blame and punishment. These universal approaches are meant to be a template only, a progressive guide to assist you in selecting the right words and objectives for a particular individual, in a particular environment.

        {'\n\n'}<Text style={styles.bold}>Separate</Text>
        {'\n'}Separate the Unmagnificent person from his admirers. You either remove him from the crowd or you remove the crowd from him. You may find the latter easier. Does this mean getting this Unmagnificent person alone? Not necessarily. You may need an observer, an advocate or even a professional counselor. Compliment
        {'\n\n'}<Text style={styles.bold}>Compliment</Text>
        {'\n'}You want this encounter to be constructive, so start with something positive, i.e., "You are a valued employee, and you have great talent and ability." You decide what to say based on the individual and the circumstances surrounding the situation.

        {'\n'}<Text style={styles.bold}>Document</Text>
        {'\n'}Acknowledge the Unmagnificent person for his specific personality type by documenting and discussing previous incidents, but doing so in a neutral and reflective manner. We recommend that prior incidents be documented in writing. It is imperative that you review them with the aggressor in a calm (Cycle Breathing) and neutral way so as not to incite him. Behavioral scientists tell us that 7% of social communication is in words, 38% is in tone of voice (therefore tone of voice is 5 times more important than the themselves); and 55% of communication is in body language! While you can present your evidence verbally with objectivity, it is far more difficult to portray neutrality. If your verbal presentation is seen as overly judgmental or condescending, you could lose your rapport with this emerging aggressor, and thereby your influence with him. We suggest written documentation, which may come in useful in the event this action is reviewed by superiors, or even results in court action.
        {'\n\n'}<Text style={styles.bold}>Convince</Text>
        {'\n'}Your challenge is to convince this Unmagnificent person that his behavior is not in his own best interest (Second CAPS Tenet), "This behavior is not in your best interest!" This puts him on notice that he is damaging his case, Your challenge is to convince this Unmagnificent person that his behavior is not in his own best interest (Second CAPS Tenet), "This behavior is not in your best interest!" This puts him on notice that he is damaging his case, and indeed his own future with his behavior, and needs to re-examine his actions immediately. We call this "Impressment," which will be discussed in detail elsewhere.
        {'\n'}<Text style={styles.bold}>Team Productivity</Text>
        {'\n'}Finally, you ask the Unmagnificent person, "How can we work together as a team to be more productive?" This fifth element is essential because it ties everything else together. It says that you care and respect this person enough to help him work through this process resulting in better productivity for all involved.

      </Text>), expanded: false
    },

  ]);

  
  const scrollViewRef = useRef<ScrollView>(null);

  const expandItem = (item: Item) => {
    setItems(items.map(i => i === item ? { ...i, expanded: !i.expanded } : i));
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
        <Text style={styles.headerTitle}>Aggregation Stage Five</Text>
      </View>
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollView}>
        {items.map((item, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity onPress={() => expandItem(item)} style={styles.cardHeader}>
              <Image source={require('../assets/img/escolaimg.png')} style={styles.clip} />
              <Text style={styles.cardTitle}>{item.title}</Text>
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
    fontSize: wp('5.8%'), // Adjusted font size to be responsive
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    marginLeft:wp('13%'),
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

export default AggressionStageFiveScreen;