// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// interface Item {
//   title: string;
//   explanation: React.ReactNode;
//   expanded: boolean;
// }

// const EmergencyProcedure: React.FC = () => {
//   const navigation = useNavigation();
//   const [items, setItems] = useState<Item[]>([
//     {
//       title: 'Introduction', explanation: (  <Text style={styles.info}>We know that from the Moment of 
//       Commitment (when an assailant decides 
//       to pull his or her weapon and start shooting) to when the first round is discharged is just 2 seconds. No security, no law enforcement, no matter how well trained or equipped can reliably be on scene in less than 2 seconds. So, you are on your own!

      
//       {'\n\n'} <Text style={styles.info}>What will security and/or law enforcement do once they arrive? They will do what they have been trained to do in Active Shooter Response, which is to step over the dead, dying and/or wounded victims to get to the shooter. Is this acceptable to you?</Text>
      
//       {'\n\n'}This is precisely why we developed our Critical Aggresion Prevention System (CAPS). Although there is not absolute (100%) voilence prevention, our <Text style={styles.link} onPress={() => Linking.openURL('https://www.aggressionmanagement.com/caps-mobile-app.php')}>CAPS Mobile App</Text>, along with <Text style={styles.link} onPress={() => Linking.openURL('https://www.aggressionmanagement.com/caps_training.php')}>CAPS Training</Text> offers a reliable way of getting out in front of and preventing future violence. 
      
//       {'\n\n'} Any contact with an aggressor, at this level of aggression,
// can be dangerous, this is why we strongly suggest taking extensive training to prepare for these circumstances. We can make no commitments as to outcomes because the results are dependent upon who you are approaching, the relevant circumstances, and the skills to effectively approach, engage and diffuse/mitigate. 

// {'\n\n'}We strongly suggest that you become a <Text style={styles.link} onPress={() => Linking.openURL('https://www.aggressionmanagement.com/caps_training.php')}>Certified Aggression Manager</Text>, or better still an <Text style={styles.link} onPress={() => Linking.openURL('https://www.aggressionmanagement.com/caps_training.php')}>Ambassador</Text> (train-the-trainer), to enhance your attitude, skills and your ability to diffuse aggressors and thus prevent the horrific Moment of Commitment; that moment when an assailant decides to act violently and you're now forced to react to violence, not prevent it.
//       </Text>), expanded: false
//     },
//     { title: 'Physically Unruly Person Responses ',  explanation: (  <Text style={styles.info}>1. If you are in an organization or institution that has defined Standard Operation Procedures (SOPs) for Physically Unruly Persons, you should always follow those SOPs.{'\n\n'}
//     2. If you believe this Unruly Person can be convinced to become more cooperative, apply your verbal and nonverbal communication skills as taught during your Certified Aggression Managers' Workshop (CAM), while maintaining a safe distance. Approach the aggressor in a safe manner, maintain soft eye contact with a genuine/caring smile, and keep track of the aggressor's hands while preparing yourself mentally to move away again or respond accordingly should there be a sudden change.{'\n\n'}
//     3. Maintain a safe distance between you and the aggressor; while observing and monitoring his body language and behavior as possible.{'\n\n'}
//     4. If you believe the Unruly Person will become violent, move to a safe distance and call 911.
//     Clearly communicate what you are observing.{'\n\n'}
//     5. Make sure your movements are fast, determined, and firm; act with authority{'\n\n'}
//     6. If available and appropriate, pick up any object that can be used as a weapon to protect yourself{'\n\n'}
//     7. Train and signal others around you to assist by using an appropriately strong response and tone{'\n\n'}
//     8. When appropriate form a ring around the aggressor so that you may contain the aggressor{'\n\n'}
//     9. Do not engage in a fight! Use your body as leverage to bring an aggressor down to the ground{'\n\n'}
//     10. With others around you, control the aggressor so he or she cannot move until security or law enforcement arrive{'\n\n'}
//     11. If the aggressor attempts to attack, apply more pressure until security or law enforcement arrives{'\n\n'}
//     12. Continue to scan/screen your surroundings for other Physically Unruly Persons</Text>), expanded: false },
//     { title: 'Active Shooter Responses', explanation: (  <Text style={styles.info}>1. If you are in an organization or institution that has defined Standard Operation Procedure (SOPs) for Active Shooters, you should begin following those SOPs.{'\n\n'}
//     2. As soon as you hear gunshots or see an active shooter, move as fast as you can to remove yourself as a target. Make yourself a harder target to hit by bending forward, keeping a low profile. Typically, this will also increase your speed. Do not stop until you know you are out of danger, or you have succeeded in taking temporary cover.{'\n\n'}
//     3. While moving if you feel gunfire is coming in your direction, gain further cover by quickly throw yourself to the ground and continue rapidly crawling until you are safe.{'\n\n'}
//     4. If the gunshots keep coming in your direction, continue moving by running or crawling in order to improve your current situation. You may do this many times, before you are out of danger, and remember never stop observing as a cover is always temporary.{'\n\n'}
//     5. Once you have taken temporary cover, make ongoing assessments as you continue to scan for threats and observe the area around you.{'\n\n'}
//     6. Once safe, communicate with security and/or law enforcement, explaining what you have witnessed and any pertinent details of the attack.{'\n\n'}
//     7. Evacuate! If you cannot evacuate, start barricading yourself using furniture, objects and anything available. Continue visual scanning of the area. You may need to move again.{'\n\n'}
//     8. If possible, evacuate yourself to an area out of the danger or work with others to create a barricade of protection. This now collective group of "others" can help you build this barricade or, if necessary, to fight.{'\n\n'}
//     9. Look around for anything that may be used as a weapon. It may be your only way of protecting yourself or others.{'\n\n'}
//     10. If you need to fight, as much as possible, surprise the active shooter by using a chair, an object to throw, or anything that might be used as a weapon. If you choose to fight, prepare yourself to be shot/wounded: you can lose up to 1.5 pints of blood before losing consciousness or human hydraulics. It is your decision as to whether you will fight until you no longer can, or whether you will give up and die.</Text>), expanded: false },
    
//     { title: 'Edged Weapons Description', explanation: (  <Text style={styles.info}> Preventing or responding to an attack with edged weapons such as knives, long knives, scissors, box cutters, cut bottles, etc. is undoubtedly a complex challenge that requires making the correct assessment and selecting the most appropriate response that removes you, and the ones in your care, from harm.
//       If you are in an organization or institution that has defined Standard Operation Procedure (SOPs) for an Edged Weapon act, you should always follow those SOPs.
//       The latest events show that aggressors and terrorists are sometimes selecting this method of attack because of the accessibility of these weapons, which can be used to kill and/or injure numerous people who are in close proximity of each other. Remembering Certified Aggression Managers' Training, we discuss how in 8th and 9th Stage Cognitive Aggression, when a mass stabbing starts, these aggressors/assailants may enter an altered state of disconnected mind that allows him or her to deliver simultaneous slashes that can cause irreversible damage. When this
//       occurs in a densely populated area such as a workplace setting, a mall, hotel or any other type of venue where people are gathered in close proximity, the attack is even easier to perpetrate, and the response can be more difficult due to the dense population and the potential for chaos. Our purpose is to give our users simple, quick, and essential Best Practice Responses that will increase your capabilities for an effective response. Your continuous alertness, observation and assessing of the aggressor's capabilities and intent to harm are essential tools for a more successful response and outcome. Please remember that such an attack may be part of a larger attack or other simultaneous events taking place.
//       {'\n'}<Text style={styles.link} onPress={() => Linking.openURL('https://www.aggressionmanagement.com/caps-mobile-app.php')}>Our CAPS Mobile App is an excellent way to identify the precursors to a potentially violent attack and prevent it without violating HIPAA, FERPA or the Civil Rights Act of 1964.</Text></Text>), expanded: false },
//     { title: 'Edged Weapon Responses', explanation: (  <Text style={styles.info}>1. If you are in an organization or institution that has defined Standard Operating Procedures (SOPs) for an Edged Weapon act, you should always follow those SOPs.{'\n\n'}
//       2. Always look for weapons and make rapid assessments. Focus at the aggressor's palms (the underside of the hand), because this is typically where an aggressor carries his or her edged weapon. The presence of an edged weapon does not mean that the aggressor will use it to initiate an attack; however, try to diffuse this potential attacker using your CAPS Certified Aggression Managers' skills. Our Critical Aggression Prevention System (CAPS) focuses on identify the precursors and thus getting out in front of an edged weapon attack so as to prevent this event, so use those learned skills.{'\n\n'}
//       3. If the aggressor initiates an attack, people around you should quickly pick up anything they can to use as weapons or, at minimum, as a shield to protect themselves from an attack.
//       If you and they are able to remove yourselves as targets, go to a safe place and call security and/or law enforcement. Continue to scan the area where the attack took place to determine whether the attacker will continue to pursue you.{'\n\n'}
//       4. Use loud authoritative verbal commands to tell people around you to pick up any object that can be used against the assailant.{'\n\n'}
//       5. A unified group of adversaries can intimidate and could cause a knife wielding assailant to run. Join with others to offer more unified group confidence and, if there is no other choice, storm the assailant using your natural instincts with full force. This may confuse the attacker and give you an advantage.{'\n\n'}
//       6. If fight is your only option, attack as hard as you can, either collectively or individually and bring this aggressor to the ground.{'\n\n'}
//       7. Move the weapon away from the assailant and contain him so he or she cannot move as there may be other weapons. Make sure you keep him under control by using people around you and as soon as you are able call security or law enforcement. Keep him secure until security or law enforcement arrive and continue scanning the area for other potential assailants.</Text>), expanded: false },
//     { title: 'Suicide Bomber Description', explanation: (  <Text style={styles.info}>If you are in an organization or institution that has defined Standard Operation Procedure (SOPs) for a suicide bomber attack, you should always follow those SOPs.{'\n\n'}
//     A suicide bomber may try to camouflage his or her explosives and appear normal to those around them in an attempt to create complete chaos and cause severe casualties. Our CAPS human-based indicators become apparent once this aggressor has risen to the intention of giving up his or her life for a cause. You may also see additional signs a few seconds, or an instant, before the activation of the explosive device. But too often this is simply too late.{'\n\n'}
//     Remember what you learned during your Certified Aggression Managers' Workshop about how to identify this attacker prior to their Moment of Commitment. A perpetrator of murder/suicide may surveil/reconnoiter a targeted person or location many times before effecting their violence. This may offer numerous opportunities to identify the
//     assailant before their horrific Moment of Commitment. In addition, be very alert and observe any irregular behavior around you and assess its meaning. Your alertness and ongoing observations of your surroundings will make you much more aware of any irregularities prior to his or her attack execution. Remember how to apply the Judicious Interview. Our CAPS Mobile App is an excellent way to keep track of potentially violent aggressors without violating HIPAA, FERPA or the Civil Rights Act of 1964.{'\n\n'}
//     Your scrutinizing behavior of this suicide bomber could cause him or her to become aware of your observation, which in turn may intensify certain signs that can be identified.
//     Once confirmed that there is a suicide bomber you must take immediate action in order to survive. This immediate action needs to be decisive and without hesitation if you are to survive.</Text>), expanded: false },
//     { title: 'Suicide Bomber Responses', explanation: (  <Text style={styles.info}>1. If you are in an organization or institution that has defined Standard Operation
// Procedure (SOPs) for a suicide bomber attack, you should always follow those SOPs.{'\n\n'}
//     2. The methods of protection are few, so it becomes increasingly more critical that you can prevent this incident by using the Critical Aggression Prevention System and the CAPS Mobile App effectively. The more individuals who possess the CAPS Mobile App the better there is a chance that someone around this potential suicide bomber could have recognized his or her aggressive escalation and diffuse him before this attack occurred.{'\n\n'}
//     3. Remember what you learned in your Certified Aggression Managers training as to how to identify a suicide bomber; remember references to the "Thousand Yard Stare" and
//     "The Walking Dead." Also look for behavioral irregularities and physical signs which raise your suspicion.{'\n\n'}
//     4. If your suspicion is raised, continue scanning/scrutinizing the aggressor for confirmation.{'\n\n'}
//     5. Remember what you learned in your Certified Aggression Managers training about how to confirm a person of interest by using the Judicious Interview.{'\n\n'}
//     6. If you are sure your suspicions are valid or see the presence of explosives, move at least 50 yards/meters away, communicate to security and/or law enforcement professionals and continue scanning.{'\n\n'}
//     7. If you notice any type of explosive device, run as fast as you can away from this aggressor and quickly communicate with others near you. Make sure you have moved at least 50 yards/meters, and possibly more, from this aggressor.{'\n\n'}
//     8. If you happen to be in an area where you cannot run away such as a bus or a packed restaurant, you may need to engage and/or attack the perpetrator. Do your best to prevent this attacker from exploding himself or herself.{'\n\n'}
//     9. Perform ongoing scanning to make sure that there are no additional suicide bombers/attackers.{'\n\n'}
//     10. Follow your instincts; they can serve you well.</Text>)
//     , expanded: false },
   
//     // Add more items as needed
//   ]);

//   const [showFooter, setShowFooter] = useState(false);

//   const scrollViewRef = useRef<ScrollView>(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const client_id = 'some_client_id';
// //       const user = { token: 'some_token', user_id: 'some_user_id', max_rating: undefined };

// //       if (user) {
// //         const token = { client_id };
// //         try {
// //           const response = await fetch('https://api.example.com/emergencyprocedures', {
// //             method: 'POST',
// //             headers: { 'Content-Type': 'application/json' },
// //             body: JSON.stringify(token),
// //           });
// //           const res = await response.json();

// //           if (res === null || res === undefined || res.result === 'failed') {
// //             if (res.msg === 'Your account is deactivated, please contact support.') {
// //               Alert.alert('Error', 'Account deactivated. Redirecting to login page.');
// //             } else {
// //               showAlert(res.result, res.msg);
// //             }
// //           } else {
// //             if (user.max_rating === undefined) {
// //               res.forEach((val: any) => {
// //                 val.expanded = false;
// //               });
// //               setItems(res);
// //             } else {
// //               setItems(res.filter((val: any) => val.id === user.max_rating));
// //             }
// //           }
// //         } catch (error) {
// //           showAlert('Error', 'No internet connection. Please check your connection and try again.');
// //         }
// //       }
// //     };

// //     fetchData();
// //   }, []);

//   const expandItem = (item: Item) => {
//     setItems(items.map(i =>
//       i === item ? { ...i, expanded: !i.expanded } : i
//     ));
//   };

//   const showAlert = (result: string, msg: string) => {
//     Alert.alert(result, msg, [{ text: 'OK' }]);
//   };

//   const openRegisterUser = () => {
//     Alert.alert('Registration', 'Registration logic goes here.');
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#9d0808" />

//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
//           {/* <Text style={styles.headerTitle}>Back</Text> */}
//         </TouchableOpacity>
//         <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Emergency Procedures</Text>
//       </View>
//       <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollView}>
//         {items.map((item, index) => (
//           <View key={index} style={styles.card}>
//             <TouchableOpacity onPress={() => expandItem(item)} style={styles.cardHeader}>
//               <Image source={require('../assets/img/escolaimg.png')} style={styles.clip} />
//               <Text style={styles.cardTitle}>{item.title}</Text>
//               <Image
//                 source={require('../assets/img/right-arrow.png')}
//                 style={item.expanded ? styles.arrowDown : styles.arrow}
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
//     <View style={styles.footer}>
//       <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
//         <Image source={require('../assets/img/home_icon.png')} style={styles.footerIcon} />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Contacts')}>
//         <Image source={require('../assets/img/call_icon.png')} style={styles.footerIcon} />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Notifications')}>
//         <Image source={require('../assets/img/Profile-icon.png')} style={styles.footerIcon} />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Messages')}>
//         <Image source={require('../assets/img/edit_icon.png')} style={styles.footerIcon} />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Settings')}>
//         <Image source={require('../assets/img/logout_icon.png')} style={styles.footerIcon} />
//       </TouchableOpacity>
//     </View>
//   );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
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
//     fontSize: 20,
//     lineHeight: 25,
//     color: '#666',
//     textAlign:'justify'
//   },
//   backIcon: {
//     width: 25,
//     height: 25,
//     padding: 10,
//   tintColor: 'white'
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
   
//     backgroundColor: 'white',
//   },
//   clip: {
//     width: 20,
//     height: 20,
//     tintColor: '#b71c1c',
//     resizeMode: 'contain',
//     marginLeft: 15,
//     marginRight: 10,
//     marginBottom:10
   
   
//   },
//   cardTitle: {
//     fontWeight: '700',
//     color: '#454545',
//     fontSize: 28,
//     marginLeft: 15,
//     flex: 1,
//   },
//   arrow: {
//     width: 24,
//     height: 24,
//     marginLeft: 'auto',
//     transform: [{ rotate: '0deg' }], // Arrow pointing up
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
//     width: 22,
//     height: 22,
//     tintColor: 'white',
//   },
// });

// export default EmergencyProcedure;
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking,Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Item {
  title: string;
  explanation: React.ReactNode;
  expanded: boolean;
}

const EmergencyProcedure: React.FC = () => {
  const navigation = useNavigation();
  const [showFooter, setShowFooter] = useState(true);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [items, setItems] = useState<Item[]>([
    {
      title: 'Introduction', explanation: (  <Text style={styles.info}>We know that from the Moment of 
      Commitment (when an assailant decides 
      to pull his or her weapon and start shooting) to when the first round is discharged is just 2 seconds. No security, no law enforcement, no matter how well trained or equipped can reliably be on scene in less than 2 seconds. So, you are on your own!

      
      {'\n\n'} <Text style={styles.info}>What will security and/or law enforcement do once they arrive? They will do what they have been trained to do in Active Shooter Response, which is to step over the dead, dying and/or wounded victims to get to the shooter. Is this acceptable to you?</Text>
      
      {'\n\n'}This is precisely why we developed our Critical Aggresion Prevention System (CAPS). Although there is not absolute (100%) voilence prevention, our <Text style={styles.link} onPress={() => Linking.openURL('https://www.aggressionmanagement.com/caps-mobile-app.php')}>CAPS Mobile App</Text>, along with <Text style={styles.link} onPress={() => Linking.openURL('https://www.aggressionmanagement.com/caps_training.php')}>CAPS Training</Text> offers a reliable way of getting out in front of and preventing future violence. 
      
      {'\n\n'} Any contact with an aggressor, at this level of aggression,
can be dangerous, this is why we strongly suggest taking extensive training to prepare for these circumstances. We can make no commitments as to outcomes because the results are dependent upon who you are approaching, the relevant circumstances, and the skills to effectively approach, engage and diffuse/mitigate. 

{'\n\n'}We strongly suggest that you become a <Text style={styles.link} onPress={() => Linking.openURL('https://www.aggressionmanagement.com/caps_training.php')}>Certified Aggression Manager</Text>, or better still an <Text style={styles.link} onPress={() => Linking.openURL('https://www.aggressionmanagement.com/caps_training.php')}>Ambassador</Text> (train-the-trainer), to enhance your attitude, skills and your ability to diffuse aggressors and thus prevent the horrific Moment of Commitment; that moment when an assailant decides to act violently and you're now forced to react to violence, not prevent it.
      </Text>), expanded: false
    },
    { title: 'Physically Unruly Person Responses ',  explanation: (  <Text style={styles.info}>1. If you are in an organization or institution that has defined Standard Operation Procedures (SOPs) for Physically Unruly Persons, you should always follow those SOPs.{'\n\n'}
    2. If you believe this Unruly Person can be convinced to become more cooperative, apply your verbal and nonverbal communication skills as taught during your Certified Aggression Managers' Workshop (CAM), while maintaining a safe distance. Approach the aggressor in a safe manner, maintain soft eye contact with a genuine/caring smile, and keep track of the aggressor's hands while preparing yourself mentally to move away again or respond accordingly should there be a sudden change.{'\n\n'}
    3. Maintain a safe distance between you and the aggressor; while observing and monitoring his body language and behavior as possible.{'\n\n'}
    4. If you believe the Unruly Person will become violent, move to a safe distance and call 911.
    Clearly communicate what you are observing.{'\n\n'}
    5. Make sure your movements are fast, determined, and firm; act with authority{'\n\n'}
    6. If available and appropriate, pick up any object that can be used as a weapon to protect yourself{'\n\n'}
    7. Train and signal others around you to assist by using an appropriately strong response and tone{'\n\n'}
    8. When appropriate form a ring around the aggressor so that you may contain the aggressor{'\n\n'}
    9. Do not engage in a fight! Use your body as leverage to bring an aggressor down to the ground{'\n\n'}
    10. With others around you, control the aggressor so he or she cannot move until security or law enforcement arrive{'\n\n'}
    11. If the aggressor attempts to attack, apply more pressure until security or law enforcement arrives{'\n\n'}
    12. Continue to scan/screen your surroundings for other Physically Unruly Persons</Text>), expanded: false },
    { title: 'Active Shooter Responses', explanation: (  <Text style={styles.info}>1. If you are in an organization or institution that has defined Standard Operation Procedure (SOPs) for Active Shooters, you should begin following those SOPs.{'\n\n'}
    2. As soon as you hear gunshots or see an active shooter, move as fast as you can to remove yourself as a target. Make yourself a harder target to hit by bending forward, keeping a low profile. Typically, this will also increase your speed. Do not stop until you know you are out of danger, or you have succeeded in taking temporary cover.{'\n\n'}
    3. While moving if you feel gunfire is coming in your direction, gain further cover by quickly throw yourself to the ground and continue rapidly crawling until you are safe.{'\n\n'}
    4. If the gunshots keep coming in your direction, continue moving by running or crawling in order to improve your current situation. You may do this many times, before you are out of danger, and remember never stop observing as a cover is always temporary.{'\n\n'}
    5. Once you have taken temporary cover, make ongoing assessments as you continue to scan for threats and observe the area around you.{'\n\n'}
    6. Once safe, communicate with security and/or law enforcement, explaining what you have witnessed and any pertinent details of the attack.{'\n\n'}
    7. Evacuate! If you cannot evacuate, start barricading yourself using furniture, objects and anything available. Continue visual scanning of the area. You may need to move again.{'\n\n'}
    8. If possible, evacuate yourself to an area out of the danger or work with others to create a barricade of protection. This now collective group of "others" can help you build this barricade or, if necessary, to fight.{'\n\n'}
    9. Look around for anything that may be used as a weapon. It may be your only way of protecting yourself or others.{'\n\n'}
    10. If you need to fight, as much as possible, surprise the active shooter by using a chair, an object to throw, or anything that might be used as a weapon. If you choose to fight, prepare yourself to be shot/wounded: you can lose up to 1.5 pints of blood before losing consciousness or human hydraulics. It is your decision as to whether you will fight until you no longer can, or whether you will give up and die.</Text>), expanded: false },
    
    { title: 'Edged Weapons Description', explanation: (  <Text style={styles.info}> Preventing or responding to an attack with edged weapons such as knives, long knives, scissors, box cutters, cut bottles, etc. is undoubtedly a complex challenge that requires making the correct assessment and selecting the most appropriate response that removes you, and the ones in your care, from harm.
      If you are in an organization or institution that has defined Standard Operation Procedure (SOPs) for an Edged Weapon act, you should always follow those SOPs.
      The latest events show that aggressors and terrorists are sometimes selecting this method of attack because of the accessibility of these weapons, which can be used to kill and/or injure numerous people who are in close proximity of each other. Remembering Certified Aggression Managers' Training, we discuss how in 8th and 9th Stage Cognitive Aggression, when a mass stabbing starts, these aggressors/assailants may enter an altered state of disconnected mind that allows him or her to deliver simultaneous slashes that can cause irreversible damage. When this
      occurs in a densely populated area such as a workplace setting, a mall, hotel or any other type of venue where people are gathered in close proximity, the attack is even easier to perpetrate, and the response can be more difficult due to the dense population and the potential for chaos. Our purpose is to give our users simple, quick, and essential Best Practice Responses that will increase your capabilities for an effective response. Your continuous alertness, observation and assessing of the aggressor's capabilities and intent to harm are essential tools for a more successful response and outcome. Please remember that such an attack may be part of a larger attack or other simultaneous events taking place.
      {'\n'}<Text style={styles.link} onPress={() => Linking.openURL('https://www.aggressionmanagement.com/caps-mobile-app.php')}>Our CAPS Mobile App is an excellent way to identify the precursors to a potentially violent attack and prevent it without violating HIPAA, FERPA or the Civil Rights Act of 1964.</Text></Text>), expanded: false },
    { title: 'Edged Weapon Responses', explanation: (  <Text style={styles.info}>1. If you are in an organization or institution that has defined Standard Operating Procedures (SOPs) for an Edged Weapon act, you should always follow those SOPs.{'\n\n'}
      2. Always look for weapons and make rapid assessments. Focus at the aggressor's palms (the underside of the hand), because this is typically where an aggressor carries his or her edged weapon. The presence of an edged weapon does not mean that the aggressor will use it to initiate an attack; however, try to diffuse this potential attacker using your CAPS Certified Aggression Managers' skills. Our Critical Aggression Prevention System (CAPS) focuses on identify the precursors and thus getting out in front of an edged weapon attack so as to prevent this event, so use those learned skills.{'\n\n'}
      3. If the aggressor initiates an attack, people around you should quickly pick up anything they can to use as weapons or, at minimum, as a shield to protect themselves from an attack.
      If you and they are able to remove yourselves as targets, go to a safe place and call security and/or law enforcement. Continue to scan the area where the attack took place to determine whether the attacker will continue to pursue you.{'\n\n'}
      4. Use loud authoritative verbal commands to tell people around you to pick up any object that can be used against the assailant.{'\n\n'}
      5. A unified group of adversaries can intimidate and could cause a knife wielding assailant to run. Join with others to offer more unified group confidence and, if there is no other choice, storm the assailant using your natural instincts with full force. This may confuse the attacker and give you an advantage.{'\n\n'}
      6. If fight is your only option, attack as hard as you can, either collectively or individually and bring this aggressor to the ground.{'\n\n'}
      7. Move the weapon away from the assailant and contain him so he or she cannot move as there may be other weapons. Make sure you keep him under control by using people around you and as soon as you are able call security or law enforcement. Keep him secure until security or law enforcement arrive and continue scanning the area for other potential assailants.</Text>), expanded: false },
    { title: 'Suicide Bomber Description', explanation: (  <Text style={styles.info}>If you are in an organization or institution that has defined Standard Operation Procedure (SOPs) for a suicide bomber attack, you should always follow those SOPs.{'\n\n'}
    A suicide bomber may try to camouflage his or her explosives and appear normal to those around them in an attempt to create complete chaos and cause severe casualties. Our CAPS human-based indicators become apparent once this aggressor has risen to the intention of giving up his or her life for a cause. You may also see additional signs a few seconds, or an instant, before the activation of the explosive device. But too often this is simply too late.{'\n\n'}
    Remember what you learned during your Certified Aggression Managers' Workshop about how to identify this attacker prior to their Moment of Commitment. A perpetrator of murder/suicide may surveil/reconnoiter a targeted person or location many times before effecting their violence. This may offer numerous opportunities to identify the
    assailant before their horrific Moment of Commitment. In addition, be very alert and observe any irregular behavior around you and assess its meaning. Your alertness and ongoing observations of your surroundings will make you much more aware of any irregularities prior to his or her attack execution. Remember how to apply the Judicious Interview. Our CAPS Mobile App is an excellent way to keep track of potentially violent aggressors without violating HIPAA, FERPA or the Civil Rights Act of 1964.{'\n\n'}
    Your scrutinizing behavior of this suicide bomber could cause him or her to become aware of your observation, which in turn may intensify certain signs that can be identified.
    Once confirmed that there is a suicide bomber you must take immediate action in order to survive. This immediate action needs to be decisive and without hesitation if you are to survive.</Text>), expanded: false },
    { title: 'Suicide Bomber Responses', explanation: (  <Text style={styles.info}>1. If you are in an organization or institution that has defined Standard Operation
Procedure (SOPs) for a suicide bomber attack, you should always follow those SOPs.{'\n\n'}
    2. The methods of protection are few, so it becomes increasingly more critical that you can prevent this incident by using the Critical Aggression Prevention System and the CAPS Mobile App effectively. The more individuals who possess the CAPS Mobile App the better there is a chance that someone around this potential suicide bomber could have recognized his or her aggressive escalation and diffuse him before this attack occurred.{'\n\n'}
    3. Remember what you learned in your Certified Aggression Managers training as to how to identify a suicide bomber; remember references to the "Thousand Yard Stare" and
    "The Walking Dead." Also look for behavioral irregularities and physical signs which raise your suspicion.{'\n\n'}
    4. If your suspicion is raised, continue scanning/scrutinizing the aggressor for confirmation.{'\n\n'}
    5. Remember what you learned in your Certified Aggression Managers training about how to confirm a person of interest by using the Judicious Interview.{'\n\n'}
    6. If you are sure your suspicions are valid or see the presence of explosives, move at least 50 yards/meters away, communicate to security and/or law enforcement professionals and continue scanning.{'\n\n'}
    7. If you notice any type of explosive device, run as fast as you can away from this aggressor and quickly communicate with others near you. Make sure you have moved at least 50 yards/meters, and possibly more, from this aggressor.{'\n\n'}
    8. If you happen to be in an area where you cannot run away such as a bus or a packed restaurant, you may need to engage and/or attack the perpetrator. Do your best to prevent this attacker from exploding himself or herself.{'\n\n'}
    9. Perform ongoing scanning to make sure that there are no additional suicide bombers/attackers.{'\n\n'}
    10. Follow your instincts; they can serve you well.</Text>)
    , expanded: false },
   
    // Add more items as needed
  ]);



  const scrollViewRef = useRef<ScrollView>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const client_id = 'some_client_id';
//       const user = { token: 'some_token', user_id: 'some_user_id', max_rating: undefined };

//       if (user) {
//         const token = { client_id };
//         try {
//           const response = await fetch('https://api.example.com/emergencyprocedures', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(token),
//           });
//           const res = await response.json();

//           if (res === null || res === undefined || res.result === 'failed') {
//             if (res.msg === 'Your account is deactivated, please contact support.') {
//               Alert.alert('Error', 'Account deactivated. Redirecting to login page.');
//             } else {
//               showAlert(res.result, res.msg);
//             }
//           } else {
//             if (user.max_rating === undefined) {
//               res.forEach((val: any) => {
//                 val.expanded = false;
//               });
//               setItems(res);
//             } else {
//               setItems(res.filter((val: any) => val.id === user.max_rating));
//             }
//           }
//         } catch (error) {
//           showAlert('Error', 'No internet connection. Please check your connection and try again.');
//         }
//       }
//     };

//     fetchData();
//   }, []);

  const expandItem = (item: Item) => {
    setItems(items.map(i =>
      i === item ? { ...i, expanded: !i.expanded } : i
    ));
  };

  const showAlert = (result: string, msg: string) => {
    Alert.alert(result, msg, [{ text: 'OK' }]);
  };

  const openRegisterUser = () => {
    Alert.alert('Registration', 'Registration logic goes here.');
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
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
          {/* <Text style={styles.headerTitle}>Back</Text> */}
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Emergency Procedures</Text>
      </View>
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollView}>
        {items.map((item, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity onPress={() => expandItem(item)} style={styles.cardHeader}>
              <Image source={require('../assets/img/escolaimg.png')} style={styles.clip} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Image
                source={require('../assets/img/right-arrow.png')}
                style={item.expanded ? styles.arrowDown : styles.arrow}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    fontSize: 20,
    lineHeight: 25,
    color: '#666',
    textAlign:'justify'
  },
  backIcon: {
    width: 27,
    height: 27,
    padding: 10,
  tintColor: 'white'
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
   
    backgroundColor: 'white',
  },
  clip: {
    width: 20,
    height: 20,
    tintColor: '#b71c1c',
    resizeMode: 'contain',
    
    marginRight: 10,
  
   
   
  },
  cardTitle: {
    fontWeight: '700',
    color: '#454545',
    fontSize: 22,
    marginLeft: 5,
    flex: 1,
  },
  arrow: {
    width: 15,
    height: 15,
    marginLeft: 'auto',
    transform: [{ rotate: '0deg' }], // Arrow pointing up
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1000,
  },
  modalTitles: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color:'black',

  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    color: 'grey',

  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#9d0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  ptext: {
    fontSize: 16,
    marginBottom: 20,
   
    textAlign: 'center',
    

  },
});

export default EmergencyProcedure;