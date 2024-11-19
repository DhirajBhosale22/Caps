
// // import React from 'react';
// // import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

// // const BestPracticeScreen = ({ navigation }) => {
// //   const practiceResponses = [
// //     { title: 'Aggression Stage Zero', subtitle: 'Baseline of Behavior', level: 'Low' },
// //     { title: 'Aggression Stage One', subtitle: 'The Meter of Emerging Aggression \n Responses', level: 'Low' },
// //     { title: 'Aggression Stage Two', subtitle: 'The Meter of Emerging Aggression\n Responses', level: 'Low' },
// //     { title: 'Aggression Stage Three', subtitle: 'The Meter of Emerging Aggression\n Responses', level: 'Low' },
// //     { title: 'Aggression Stage Four', subtitle: 'The Meter of Emerging Aggression \nResponses', level: 'Moderate' },
// //     { title: 'Aggression Stage Five', subtitle: 'The Meter of Emerging Aggression\n Responses', level: 'Moderate' },
// //     { title: 'Aggression Stage Six', subtitle: 'The Meter of Emerging Aggression\n Responses', level: 'Moderate' },
// //     { title: 'Aggression Stage Seven', subtitle: 'The Meter of Emerging Aggression\n Responses', level: 'High' },
// //     { title: 'Aggression Stage Eight', subtitle: 'The Meter of Emerging Aggression \nResponses', level: 'High' },
// //     { title: 'Aggression Stage Nine', subtitle: 'The Meter of Emerging Aggression \nResponses', level: 'High' },
// //     { title: 'RPTest best practice response1', subtitle: 'RPTest best practice response1\n subtitle', level: 'High' },
// //     // Add more responses if needed
// //   ];

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.header}>
// //         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
// //           <Image source={require('../assets/images/backarrow.png')} style={styles.backIcon} />
// //         </TouchableOpacity>
// //         <Text style={styles.headerText}>Practice Responses</Text>
// //       </View>
// //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// //         {practiceResponses.map((response, index) => (
// //           <TouchableOpacity 
// //             key={index} 
// //             style={styles.card} 
// //             onPress={() => {
// //               if (response.title === 'Aggression Stage Zero') {
// //                 navigation.navigate('AggressionStageZeroScreen');

// //               }else if (response.title === 'Aggression Stage One') {
// //                 navigation.navigate('AggressionStageOneScreen');

// //               }else if (response.title === 'Aggression Stage Two') {
// //                 navigation.navigate('AggressionStageTwoScreen');

// //               }else if (response.title === 'Aggression Stage Three') {
// //                 navigation.navigate('AggressionStageThreeScreen');

// //               }else if (response.title === 'string') {
// //                 navigation.navigate('AggressionStageFourScreen');

// //               }else if (response.title === 'Aggression Stage Five') {
// //                 navigation.navigate('AggressionStageFiveScreen');

// //               }else if (response.title === 'Aggression Stage Six') {
// //                 navigation.navigate('AggressionStageSixScreen');

// //               }else if (response.title === 'Aggression Stage Seven') {
// //                 navigation.navigate('AggressionStageSevenScreen');

// //               }else if (response.title === 'Aggression Stage Eight') {
// //                 navigation.navigate('AggressionStageEightScreen');

// //               }else if (response.title === 'Aggression Stage Nine') {
// //                 navigation.navigate('AggressionStageNineScreen');

// //               }else if (response.title === 'RP test sub1 title 1') {
// //                 navigation.navigate('RpTestBestPracticeResponse1Screen');
// //               }
// //             }}>
// //             <View style={styles.cardHeader}>
// //               <Image source={require('../assets/images/escolaimg.png')} style={styles.icon} resizeMode="contain" />
// //               <View style={styles.textContainer}>
// //                 <Text style={styles.title}>{response.title}</Text>
// //                 <Text style={styles.subtitle}>{response.subtitle}</Text>
// //                 <Text style={styles.level}>
// //                   <Text style={styles.levelBold}>Aggression Level-</Text>
// //                   <Text style={styles.levelValue}>{response.level}</Text>
// //                 </Text>
// //               </View>
// //               <Image source={require('../assets/images/right-arrow.png')} style={styles.arrowIcon} />
// //             </View>
// //           </TouchableOpacity>
// //         ))}
        
// //       </ScrollView>
// //       <View style={styles.footer}>
// //         <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
// //           <Image source={require('../assets/images/home_icon.png')} style={styles.footerIcon} />
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Contacts')}>
// //           <Image source={require('../assets/images/call_icon.png')} style={styles.footerIcon} />
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Notifications')}>
// //           <Image source={require('../assets/images/profile_icon.png')} style={styles.footerIcon} />
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Messages')}>
// //           <Image source={require('../assets/images/edit_icon.png')} style={styles.footerIcon} />
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Settings')}>
// //           <Image source={require('../assets/images/logout_icon.png')} style={styles.footerIcon} />
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
    
   
// //   },
// //   header: {
// //     height: 60,
// //     backgroundColor: '#b71c1c',
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     paddingHorizontal: 10,
// //   },
// //   backButton: {
// //     position: 'absolute',
// //     left: 10,
// //   },
// //   backIcon: {
// //     width: 24,
// //     height: 24,
// //     tintColor: 'white',
// //   },
// //   headerText: {
// //     color: 'white',
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //   },
// //   scrollContainer: {
// //     padding: 1,
// //   },
// //   card: {
// //     //backgroundColor: 'white',
// //     padding: 5,
// //     marginVertical: 8,
// //     marginRight:5
// //     //borderRadius: 8,
// //     //elevation: 2,
// //   },
// //   cardHeader: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
    
// //   },
// //   textContainer: {
// //     flex: 1,
// //     marginLeft: 15,
// //   },
// //   title: {
// //     fontSize: 17,
// //     //fontWeight: 'bold',
// //     color: '#b71c1c',
// //     marginBottom:5
// //   },
// //   subtitle: {
// //     fontSize: 14,
// //     color: '#777',
// //     //marginVertical: 4,
    
    
// //   },
// //   level: {
// //     fontSize: 13,
// //     color: 'black',
// //   },
// //   levelBold: {
// //     fontWeight: 'bold',
// //   },
// //   levelValue: {
// //     fontWeight: 'bold',
// //   },
// //   arrowIcon: {
// //     width: 10,
// //     height: 10,
// //     tintColor: '#b71c1c',
// //   },
// //   emergencyCard: {
// //     backgroundColor: '#b71c1c',
// //     padding: 16,
// //     marginVertical: 8,
// //     borderRadius: 8,
// //     elevation: 2,
// //     alignItems: 'center',
// //   },
// //   emergencyTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: 'white',
// //   },
// //   footer: {
// //     flexDirection: 'row',
// //     backgroundColor: '#b71c1c',
// //     height: 60,
// //     alignItems: 'center',
// //     justifyContent: 'space-around',
// //     position: 'absolute',
// //     bottom: 0,
// //     width: '100%',
// //   },
// //   footerButton: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   footerIcon: {
// //     width: 24,
// //     height: 24,
// //     tintColor: 'white',
// //   },
// //   icon: {
// //     width: 20, // Adjusted size to match your uploaded image
// //     height: 20, // Adjusted size to match your uploaded image
// //     marginLeft:15,
// //     marginBottom:50,
// //     marginTop:5
// //   },
// // });

// // export default BestPracticeScreen;
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

// // Import images
// const backIcon = require('../assets/img/backarrow.png');
// const escolaImg = require('../assets/img/escolaimg.png');
// const homeIcon = require('../assets/img/home_icon.png');
// const callIcon = require('../assets/img/call_icon.png');
// const ProfileIcon = require('../assets/img/Profile-icon.png');
// const editIcon = require('../assets/img/edit_icon.png');
// const logoutIcon = require('../assets/img/logout_icon.png');
// const arrowDownIcon = require('../assets/img/arrow-down.png');
// const rightArrowIcon = require('../assets/img/right-arrow.png');
// const aggressionStageZeroImg = require('../assets/img/escolaimg.png');
// const emergencyIntroductionImg = require('../assets/img/escolaimg.png');


// const BestPracticeScreen = ({ navigation }) => {
//   const [showEmergencyInfo, setShowEmergencyInfo] = useState(false);

//   const practiceResponses = [
//     { title: 'Aggression Stage Zero', subtitle: 'Baseline of Behavior', level: 'Low', image: aggressionStageZeroImg },
//     { title: 'Aggression Stage One', subtitle: 'The Meter of Emerging Aggression \n Responses', level: 'Low', image: escolaImg },
//     { title: 'Aggression Stage Two', subtitle: 'The Meter of Emerging Aggression\n Responses', level: 'Low', image: escolaImg },
//     { title: 'Aggression Stage Three', subtitle: 'The Meter of Emerging Aggression\n Responses', level: 'Low', image: escolaImg },
//     { title: 'Aggression Stage Four', subtitle: 'The Meter of Emerging Aggression \nResponses', level: 'Moderate', image: escolaImg },
//     { title: 'Aggression Stage Five', subtitle: 'The Meter of Emerging Aggression\n Responses', level: 'Moderate', image: escolaImg },
//     { title: 'Aggression Stage Six', subtitle: 'The Meter of Emerging Aggression\n Responses', level: 'Moderate', image: escolaImg },
//     { title: 'Aggression Stage Seven', subtitle: 'The Meter of Emerging Aggression\n Responses', level: 'High', image: escolaImg },
//     { title: 'Aggression Stage Eight', subtitle: 'The Meter of Emerging Aggression \nResponses', level: 'High', image: escolaImg },
//     { title: 'Aggression Stage Nine', subtitle: 'The Meter of Emerging Aggression \nResponses', level: 'High', image: escolaImg },
//     { title: 'RpTestBestPracticeResponseScreen', subtitle: 'RPTest best practice response\n subtitle', level: 'High', image: escolaImg },
//     { title: 'Emergency Introduction', subtitle: '', level: 'High', image: emergencyIntroductionImg },
//     // Add more responses if needed
//   ];

//   const handlePress = (title) => {
//     switch (title) {
//       case 'Aggression Stage Zero':
//         navigation.navigate('AggressionStageZeroScreen');
//         break;
//       case 'Aggression Stage One':
//         navigation.navigate('AggressionStageOneScreen');
//         break;
//       case 'Aggression Stage Two':
//         navigation.navigate('AggressionStageTwoScreen');
//         break;
//       case 'Aggression Stage Three':
//         navigation.navigate('AggressionStageThreeScreen');
//         break;
//       case 'Aggression Stage Four':
//         navigation.navigate('AggressionStageFourScreen');
//         break;
//       case 'Aggression Stage Five':
//         navigation.navigate('AggressionStageFiveScreen');
//         break;
//       case 'Aggression Stage Six':
//         navigation.navigate('AggressionStageSixScreen');
//         break;
//       case 'Aggression Stage Seven':
//         navigation.navigate('AggressionStageSevenScreen');
//         break;
//       case 'Aggression Stage Eight':
//         navigation.navigate('AggressionStageEightScreen');
//         break;
//       case 'Aggression Stage Nine':
//         navigation.navigate('AggressionStageNineScreen');
//         break;
//       case 'RpTestBestPracticeResponseScreen':
//         navigation.navigate('RpTestBestPracticeResponseScreen');
//         break;
//         case 'Emergency Introduction':
//           setShowEmergencyInfo(true);
//           break;
//       default:
//         console.warn(`No screen found for title: ${title}`);
//     }
//   };
//   const emergencyTextContent = (
//   <Text style={styles.emergencyText}>
//   <Text style={styles.bold}>Physically Unruly Person</Text>
//   {'\n\n'}A Physically Unruly Person is defined as an aggressor which is behaving in a turbulent/aggressive or uncontrollable manner. Please note that sometimes Physically Unruly Persons can be calmed and be brought to refraining from such behavior through verbal and nonverbal communication. However, in many cases, Physically Unruly Persons will become violent and may endanger the people in their surroundings due to physical aggression and lack of controlled behavior. Please follow these Best Practice Responses for dealing with Physically Unruly Persons. Remember, you should only follow these recommendations if you have no other choice and feel the aggressor is endangering you and/or the aggressors around you. Observe the aggressor's behavior and make a rapid assessment on their intentions and capabilities to harm you or others.
//   {'\n\n'}If you believe the aggressor can be convinced to refrain from continuing his unruly behavior apply your verbal communication skills by maintaining a safety distance as things could suddenly change and become physical. When approaching the aggressor in a safe manner maintain eye contact with the aggressor's hands and prepare yourself mentally to move away again or react accordingly should there be a sudden change. Our Best Practice Responses do not substitute direct training in these subject matters. Instead, they serve as a guide to reacting when faced with an emergency.
//   {'\n\n'}<Text style={styles.bold}>Active Shooter</Text>
//   {'\n\n'}Dealing with an active shooter scenario is complex and requires understanding.is complex and requires understanding the type of attack and the context in which it happens. This section will concentrate on the Best Practice Responses required for dealing with an active shooter attack where you are directly involved due your proximity of the attacker and shots being fired at you or people in your surroundings. If you are involved in an active shooter attack which is at a distance and shots are not fired in your direction it is not considered an emergency. We strongly urge you not to try and understand the reasons why the attack is taking place or the motivations behind this event as this will not help you in safeguarding yourself. Instead, it will only increase your stress levels and make your decision-making process more complex and confused. The first seconds and few minutes are crucial and there are actions you must take in a very determined and ferocious manner to increase the chances of your survival.This time frame will seem a very long time to be under such stress and under fire so please follow the Best Practice Responses in a very serious manner. Your determination and ferociousness are key factors in having the right state of mind in the initial phase of the crisis. If you will not adopt this state of mind your stress levels will increase and your capabilities to react decrease, thereby activating the domino effect which makes you an easy target for the active shooter. It is imperative that you are familiar with the facility where you work or spend time, including access areas, exits, entrances.
//   {'\n\n'}<Text style={styles.bold}>Edged Weapon</Text>
//   {'\n\n'}Preventing or responding to an attack with edged weapons such as knives, scissors, bottles is undoubtedly a complex challenge that requires making the correct assessment and selecting the most appropriate response that put you and the ones around you in security. Clearly, it is imperative to receive very specific training in this area within a realistic environment and not a sports or just martial arts arena.
//   {'\n\n'}The latest events show that terrorists are also selecting this method of action because of the easiness in which you can kill and injure many people. Once a massive stabbing starts, the assailant enters a very detached state of mind that allows him to deliver simultaneous slashes that cause irreversible damage. When this occurs in a densely populated area like a mall, hotel or any other type of venue, the attack is even easier to perform and the response more difficult to put in action. Our purpose is to give our users simple, quick, and essential Best Practice Responses that will increase your capabilities for an effective prevention or response inherent to such scenarios. Your ongoing alertness in observation and assessing the aggressor's capabilities and intent to put these capabilities into action are essential tools for succeeding. Please remember that such an attack may be part of a larger attack or simultaneous event taking place.
//   {'\n\n'}<Text style={styles.bold}>Suicide Bomber</Text>
//   {'\n\n'}A Suicide bomber tries to camouflage the explosives and appear normal in the eyes of citizens and law enforcement so that the surprise element causes severe casualties. The normal appearance is often camouflaged through blending in the environment and showing no clear indicators. The indicators become more apparent a few seconds or instants before the activation of the explosive device.
//   {'\n\n'} Therefore, you are advised to be very alert and above irregular behaviour arround you. your alertness and ongoing observation will make you much more sensitive to irregularities and activate recognizable signs in the perpetrator prior to his activation. The reason is that suicide bombers feel very uncomfertable when someone notices them which in return intensifies certain signs to be visible. The confirmation that there is a suicide bomber in your surroundings requires that you take immediate action needs to be decisive and powerful with no hesitation from the moment you have decided to move.
//   {'\n\n'}<Text style={styles.bold}>Hostage</Text>
//   {'\n\n'}Hostage situations vary and can develop into complex scenarios. To understand the nature of hostage taking, it is imperative that you analyze the mindset of a hostage taker. Hostage takers sometimes may take a hostage only for ransom. In other cases, a hostage taker may take this action out of last resort. And in some cases, hostages are taken and executed accordingly. Whichever the case, please take this phenomenon very seriously and do not try to be a hero. Concentrate your attention on understanding the type of hostage you have in front of you, the intentions, and the actual capabilities to harm the hostage and the people around. This assessment will allow you to select the most appropriate response and minimize human-error in the process.
// </Text>
//   );
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//           <Image source={backIcon} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Practice Responses</Text>
//       </View>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {practiceResponses.map((response, index) => {
//           const arrowIcon = showEmergencyInfo && response.title === 'Emergency Introduction'
//             ? arrowDownIcon
//             : rightArrowIcon;

//           const iconStyle = response.title === 'Aggression Stage Zero'
//             ? styles.aggressionStageZeroIcon
//             : response.title === 'Emergency Introduction'
//             ? styles.emergencyIntroductionIcon
//             : styles.icon;

//           return (
//             <View key={index}>
//               <TouchableOpacity 
//                 style={styles.card} 
//                 onPress={() => handlePress(response.title)}>
//                 <View style={styles.cardHeader}>
//                   <Image source={response.image} style={iconStyle} resizeMode="contain" />
//                   <View style={styles.textContainer}>
//                     <Text style={[
//                         styles.title,
//                         response.title === 'Emergency Introduction' && styles.emergencyTitle
//                       ]}>
//                       {response.title}
//                     </Text>
//                     {response.subtitle ? <Text style={styles.subtitle}>{response.subtitle}</Text> : null}
//                     {response.title !== 'Emergency Introduction' && (
//                       <Text style={styles.level}>
//                         <Text style={styles.levelBold}>Aggression Level-</Text>
//                         <Text style={styles.levelValue}>{response.level}</Text>
//                       </Text>
//                     )}
//                   </View>
//                   <Image source={arrowIcon} style={styles.arrowIcon} />
//                 </View>
//               </TouchableOpacity>
              
//               {showEmergencyInfo && response.title === 'Emergency Introduction' && (
//                 <View style={styles.emergencyInfo}>
                  
//                   {emergencyTextContent}
//                 </View>
//               )}
//             </View>
//           );
//         })}
//       </ScrollView>
//       <View style={styles.footer}>
//         <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
//           <Image source={homeIcon} style={styles.footerIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Contacts')}>
//           <Image source={callIcon} style={styles.footerIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Notifications')}>
//           <Image source={ProfileIcon} style={styles.footerIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Messages')}>
//           <Image source={editIcon} style={styles.footerIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Settings')}>
//           <Image source={logoutIcon} style={styles.footerIcon} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     height: 60,
//     backgroundColor: '#9d0808',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//   },
//   backButton: {
//     position: 'absolute',
//     left: 10,
//   },
//   backIcon: {
//     width: 24,
//     height: 24,
//     tintColor: 'white',
//   },
//   headerText: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   scrollContainer: {
//     padding: 1,
//     paddingBottom: 70, 
//   },
//   card: {
//     padding: 5,
//     marginVertical: 8,
//     marginRight: 5,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 8,
//   },
//   textContainer: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   title: {
//     fontSize: 17,
//     color: '#9d0808',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#777',
//   },
//   level: {
//     fontSize: 13,
//     color: 'black',
//   },
//   levelBold: {
//     fontWeight: 'bold',
//   },
//   levelValue: {
//     fontWeight: 'bold',
//   },
//   arrowIcon: {
//     width: 10,
//     height: 10,
//     tintColor: '#9d0808',
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
//   icon: {
//     width: 22, 
//     height: 22, 
//     tintColor:'#9d0808',
//     marginBottom:50,
//     marginLeft:20,
//     marginRight:20
//   },
//   aggressionStageZeroIcon: {
//     width: 22,
//     height: 22, 
//     tintColor: '#9d0808', 
//     marginBottom:20,
//     marginLeft:20,
//     marginRight:20

//   },
//   emergencyIntroductionIcon: {
//     width: 22, 
//     height: 22, 
//     tintColor: '#9d0808', 
//     marginBottom:2,
//     marginLeft:20,
//     marginRight:20
//   },
//   emergencyInfo: {
//     padding: 16,
//     marginVertical: 8,
   
//   },
//   emergencyText: {
//     fontSize: 16,
//     color: 'black',
//     lineHeight: 25,
//     textAlign: 'justify',
//     paddingLeft: 30,
//   },
//   emergencyTitle: {
//     fontSize: 24,
//     color: 'black',
//   },
//   bold: {
//     fontWeight: 'bold',
//   },
// });
// export default BestPracticeScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Appearance, Linking, Modal } from 'react-native';

// Import images
const backIcon = require('../assets/img/backarrow.png');
const escolaImg = require('../assets/img/escolaimg.png');
const homeIcon = require('../assets/img/home_icon.png');
const callIcon = require('../assets/img/call_icon.png');
const ProfileIcon = require('../assets/img/Profile-icon.png');
const editIcon = require('../assets/img/edit_icon.png');
const logoutIcon = require('../assets/img/logout_icon.png');
const arrowDownIcon = require('../assets/img/arrow-down.png');
const rightArrowIcon = require('../assets/img/right-arrow.png');
const aggressionStageZeroImg = require('../assets/img/escolaimg.png');
const emergencyIntroductionImg = require('../assets/img/escolaimg.png');




const BestPracticeScreen = ({ navigation }) => {
  const [showEmergencyInfo, setShowEmergencyInfo] = useState(false);
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);




  const practiceResponses = [
    { title: 'Aggression Stage Zero', subtitle: 'Baseline of Behavior', level: 'Low', image: aggressionStageZeroImg },
    { title: 'Aggression Stage One', subtitle: 'The Meter of Emerging Aggression \n Responses', level: 'Low', image: escolaImg },
    { title: 'Aggression Stage Two', subtitle: 'The Meter of Emerging Aggression\n Responses', level: 'Low', image: escolaImg },
    { title: 'Aggression Stage Three', subtitle: 'The Meter of Emerging Aggression\n Responses', level: 'Low', image: escolaImg },
    { title: 'Aggression Stage Four', subtitle: 'The Meter of Emerging Aggression \nResponses', level: 'Moderate', image: escolaImg },
    { title: 'Aggression Stage Five', subtitle: 'The Meter of Emerging Aggression\n Responses', level: 'Moderate', image: escolaImg },
    { title: 'Aggression Stage Six', subtitle: 'The Meter of Emerging Aggression\n Responses', level: 'Moderate', image: escolaImg },
    { title: 'Aggression Stage Seven', subtitle: 'The Meter of Emerging Aggression\n Responses', level: 'High', image: escolaImg },
    { title: 'Aggression Stage Eight', subtitle: 'The Meter of Emerging Aggression \nResponses', level: 'High', image: escolaImg },
    { title: 'Aggression Stage Nine', subtitle: 'The Meter of Emerging Aggression \nResponses', level: 'High', image: escolaImg },
    { title: 'RpTestBestPracticeResponseScreen', subtitle: 'RPTest best practice response\n subtitle', level: 'High', image: escolaImg },
    { title: 'Emergency Introduction', subtitle: '', level: 'High', image: emergencyIntroductionImg },
    // Add more responses if needed
  ];

  const handlePress = (title) => {
   
    if (title === 'Emergency Introduction') {
      setShowEmergencyInfo((prev) => !prev); // Toggle the showEmergencyInfo state
    } else {
    switch (title) {
      case 'Aggression Stage Zero':
        navigation.navigate('AggressionStageZeroScreen');
        break;
      case 'Aggression Stage One':
        navigation.navigate('AggressionStageOneScreen');
        break;
      case 'Aggression Stage Two':
        navigation.navigate('AggressionStageTwoScreen');
        break;
      case 'Aggression Stage Three':
        navigation.navigate('AggressionStageThreeScreen');
        break;
      case 'Aggression Stage Four':
        navigation.navigate('AggressionStageFourScreen');
        break;
      case 'Aggression Stage Five':
        navigation.navigate('AggressionStageFiveScreen');
        break;
      case 'Aggression Stage Six':
        navigation.navigate('AggressionStageSixScreen');
        break;
      case 'Aggression Stage Seven':
        navigation.navigate('AggressionStageSevenScreen');
        break;
      case 'Aggression Stage Eight':
        navigation.navigate('AggressionStageEightScreen');
        break;
      case 'Aggression Stage Nine':
        navigation.navigate('AggressionStageNineScreen');
        break;
      case 'RpTestBestPracticeResponseScreen':
        navigation.navigate('RpTestBestPracticeResponseScreen');
        break;
        default:
          console.warn(`No screen found for title: ${title}`);
      }
    }
  };
  const emergencyTextContent = (
    <Text style={styles.emergencyText}>
      <Text style={styles.bold}>Physically Unruly Person</Text>
      {'\n\n'}A Physically Unruly Person is defined as an aggressor which is behaving in a turbulent/aggressive or uncontrollable manner. Please note that sometimes Physically Unruly Persons can be calmed and be brought to refraining from such behavior through verbal and nonverbal communication. However, in many cases, Physically Unruly Persons will become violent and may endanger the people in their surroundings due to physical aggression and lack of controlled behavior. Please follow these Best Practice Responses for dealing with Physically Unruly Persons. Remember, you should only follow these recommendations if you have no other choice and feel the aggressor is endangering you and/or the aggressors around you. Observe the aggressor's behavior and make a rapid assessment on their intentions and capabilities to harm you or others.
      {'\n\n'}If you believe the aggressor can be convinced to refrain from continuing his unruly behavior apply your verbal communication skills by maintaining a safety distance as things could suddenly change and become physical. When approaching the aggressor in a safe manner maintain eye contact with the aggressor's hands and prepare yourself mentally to move away again or react accordingly should there be a sudden change. Our Best Practice Responses do not substitute direct training in these subject matters. Instead, they serve as a guide to reacting when faced with an emergency.
      {'\n\n'}<Text style={styles.bold}>Active Shooter</Text>
      {'\n\n'}Dealing with an active shooter scenario is complex and requires understanding.is complex and requires understanding the type of attack and the context in which it happens. This section will concentrate on the Best Practice Responses required for dealing with an active shooter attack where you are directly involved due your proximity of the attacker and shots being fired at you or people in your surroundings. If you are involved in an active shooter attack which is at a distance and shots are not fired in your direction it is not considered an emergency. We strongly urge you not to try and understand the reasons why the attack is taking place or the motivations behind this event as this will not help you in safeguarding yourself. Instead, it will only increase your stress levels and make your decision-making process more complex and confused. The first seconds and few minutes are crucial and there are actions you must take in a very determined and ferocious manner to increase the chances of your survival.This time frame will seem a very long time to be under such stress and under fire so please follow the Best Practice Responses in a very serious manner. Your determination and ferociousness are key factors in having the right state of mind in the initial phase of the crisis. If you will not adopt this state of mind your stress levels will increase and your capabilities to react decrease, thereby activating the domino effect which makes you an easy target for the active shooter. It is imperative that you are familiar with the facility where you work or spend time, including access areas, exits, entrances.
      {'\n\n'}<Text style={styles.bold}>Edged Weapon</Text>
      {'\n\n'}Preventing or responding to an attack with edged weapons such as knives, scissors, bottles is undoubtedly a complex challenge that requires making the correct assessment and selecting the most appropriate response that put you and the ones around you in security. Clearly, it is imperative to receive very specific training in this area within a realistic environment and not a sports or just martial arts arena.
      {'\n\n'}The latest events show that terrorists are also selecting this method of action because of the easiness in which you can kill and injure many people. Once a massive stabbing starts, the assailant enters a very detached state of mind that allows him to deliver simultaneous slashes that cause irreversible damage. When this occurs in a densely populated area like a mall, hotel or any other type of venue, the attack is even easier to perform and the response more difficult to put in action. Our purpose is to give our users simple, quick, and essential Best Practice Responses that will increase your capabilities for an effective prevention or response inherent to such scenarios. Your ongoing alertness in observation and assessing the aggressor's capabilities and intent to put these capabilities into action are essential tools for succeeding. Please remember that such an attack may be part of a larger attack or simultaneous event taking place.
      {'\n\n'}<Text style={styles.bold}>Suicide Bomber</Text>
      {'\n\n'}A Suicide bomber tries to camouflage the explosives and appear normal in the eyes of citizens and law enforcement so that the surprise element causes severe casualties. The normal appearance is often camouflaged through blending in the environment and showing no clear indicators. The indicators become more apparent a few seconds or instants before the activation of the explosive device.
      {'\n\n'} Therefore, you are advised to be very alert and above irregular behaviour arround you. your alertness and ongoing observation will make you much more sensitive to irregularities and activate recognizable signs in the perpetrator prior to his activation. The reason is that suicide bombers feel very uncomfertable when someone notices them which in return intensifies certain signs to be visible. The confirmation that there is a suicide bomber in your surroundings requires that you take immediate action needs to be decisive and powerful with no hesitation from the moment you have decided to move.
      {'\n\n'}<Text style={styles.bold}>Hostage</Text>
      {'\n\n'}Hostage situations vary and can develop into complex scenarios. To understand the nature of hostage taking, it is imperative that you analyze the mindset of a hostage taker. Hostage takers sometimes may take a hostage only for ransom. In other cases, a hostage taker may take this action out of last resort. And in some cases, hostages are taken and executed accordingly. Whichever the case, please take this phenomenon very seriously and do not try to be a hero. Concentrate your attention on understanding the type of hostage you have in front of you, the intentions, and the actual capabilities to harm the hostage and the people around. This assessment will allow you to select the most appropriate response and minimize human-error in the process.
    </Text>
  );

  const handleLogout = () => {
    setLogoutModalVisible(false);
    Alert.alert('Logged Out', 'You have been logged out.');
  };

  const handleLogoutCancel = () => {
    setLogoutModalVisible(false);
  };


  return (
    <View style={[styles.container, colorScheme === 'dark' ? styles.darkContainer : styles.lightContainer]}>

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={backIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Practice Responses</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {practiceResponses.map((response, index) => {
          const arrowIcon = showEmergencyInfo && response.title === 'Emergency Introduction'
            ? arrowDownIcon
            : rightArrowIcon;

          const iconStyle = response.title === 'Aggression Stage Zero'
            ? styles.aggressionStageZeroIcon
            : response.title === 'Emergency Introduction'
              ? styles.emergencyIntroductionIcon
              : styles.icon;

          return (
            <View key={index}>
              <TouchableOpacity
                style={styles.card}
                onPress={() => handlePress(response.title)}>
                <View style={styles.cardHeader}>
                  <Image source={response.image} style={iconStyle} resizeMode="contain" />
                  <View style={styles.textContainer}>
                    <Text style={[
                      styles.title,
                      response.title === 'Emergency Introduction' && styles.emergencyTitle
                    ]}>
                      {response.title}
                    </Text>
                    {response.subtitle ? <Text style={styles.subtitle}>{response.subtitle}</Text> : null}
                    {response.title !== 'Emergency Introduction' && (
                      <Text style={styles.level}>
                        <Text style={styles.levelBold}>Aggression Level-</Text>
                        <Text style={styles.levelValue}>{response.level}</Text>
                      </Text>
                    )}
                  </View>
                  <Image source={arrowIcon} style={styles.arrowIcon} />
                </View>
              </TouchableOpacity>

              {showEmergencyInfo && response.title === 'Emergency Introduction' && (
                <View style={styles.emergencyInfo}>

                  {emergencyTextContent}
                </View>
              )}
            </View>
          );
        })}
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
  },

  darkContainer: {
    backgroundColor: 'white', // Dark background color
  },
  lightContainer: {
    backgroundColor: '#fff', // Light background color
  },
  header: {
    height: hp('8%'), // Responsive height
    backgroundColor: '#9d0808',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp('3%'), // Responsive horizontal padding
  },
  backButton: {
    position: 'absolute',
    left: wp('3%'), // Responsive left position
  },
  backIcon: {
    width: wp('7%'), // Responsive width
    height: hp('4%'), // Responsive height
    tintColor: 'white',
  },
  headerText: {
    color: 'white',
    fontSize: wp('5%'), // Responsive font size
    fontWeight: 'bold',
  },
  scrollContainer: {
    padding: wp('2%'), // Responsive padding
    paddingBottom: hp('10%'), // Responsive bottom padding
  },
  card: {
    padding: wp('2%'), // Responsive padding
    marginVertical: hp('1%'), // Responsive vertical margin
    marginRight: wp('2%'), // Responsive right margin
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('1%'), // Responsive vertical padding
  },
  textContainer: {
    flex: 1,
    marginLeft: wp('2%'), // Responsive left margin
  },
  title: {
    fontSize: wp('5.7%'), // Responsive font size
    color: '#9d0808',
    marginTop: wp('0%'),
  },
  subtitle: {
    fontSize: wp('4.3%'), // Responsive font size
    color: 'black',
  },
  level: {
    fontSize: wp('4.5%'), // Responsive font size
    color: 'black',
  },
  levelBold: {
    fontWeight: 'bold',
  },
  levelValue: {
    fontWeight: 'bold',
  },
  arrowIcon: {
    width: wp('5%'), // Responsive width
    height: hp('2.5%'), // Responsive height
    tintColor: '#9d0808',
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
    height: hp('4%'), // Responsive height
    tintColor: 'white',
  },
  icon: {
    width: wp('5%'), // Responsive width
    height: hp('3%'), // Responsive height
    tintColor: '#9d0808',
    marginBottom: hp('5%'), // Responsive bottom margin
    marginLeft: wp('5%'), // Responsive left margin
    marginRight: wp('5%'), // Responsive right margin
  },
  aggressionStageZeroIcon: {
    width: wp('5%'), // Responsive width
    height: hp('3%'), // Responsive height
    tintColor: '#9d0808',
    marginBottom: hp('2%'), // Responsive bottom margin
    marginLeft: wp('5%'), // Responsive left margin
    marginRight: wp('5%'), // Responsive right margin
  },
  emergencyIntroductionIcon: {
    width: wp('5%'), // Responsive width
    height: hp('3%'), // Responsive height
    tintColor: '#9d0808',
    marginBottom: hp('1%'), // Responsive bottom margin
    marginLeft: wp('5%'), // Responsive left margin
    marginRight: wp('2%'), // Responsive right margin
  },
  emergencyInfo: {
    padding: wp('4%'), // Responsive padding
    marginVertical: hp('1%'), // Responsive vertical margin
  },
  emergencyText: {
    fontSize: wp('4%'), // Responsive font size
    color: 'black',
    lineHeight: hp('3%'), // Responsive line height
    textAlign: 'justify',
    paddingLeft: wp('5%'), // Responsive left padding
  },
  emergencyTitle: {
    fontSize: wp('5%'), // Responsive font size
    color: 'black',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  spacer: {
    height: hp('2%'), // Responsive height for spacing
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
    padding: wp('5%'), // Responsive padding
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
    marginBottom: hp('2%'), // Responsive bottom margin
    color: 'black',
  },
  modalText: {
    fontSize: wp('4%'), // Responsive font size
    marginBottom: hp('2%'), // Responsive bottom margin
    color: 'grey',
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    borderRadius: 5,
    padding: wp('3%'), // Responsive padding
    marginHorizontal: wp('2%'), // Responsive horizontal margin
    backgroundColor: '#9d0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Responsive font size
  },
  ptext: {
    fontSize: wp('4%'), // Responsive font size
    marginBottom: hp('2%'), // Responsive bottom margin
    textAlign: 'center',
  },
});

export default BestPracticeScreen;