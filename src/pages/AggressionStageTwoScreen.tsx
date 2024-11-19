// import React, { useState, useRef } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// interface Item {
//   title: React.ReactNode;
//   explanation: React.ReactNode;
//   expanded: boolean;
// }

// const AggressionStageTwoScreen: React.FC = () => {
// const navigation = useNavigation();
//   const [items, setItems] = useState<Item[]>([
//     {
//       title: (
//         <Text>
//           <Text style={{ fontSize: wp('6.3%'),fontWeight: 'bold' }}>Introduction</Text>{"\n"}
//           <Text style={styles.titleSub}>Stage Two Introduction</Text>
//         </Text>
//       ),
//       explanation: (
//         <Text style={styles.info}>
//           <Text style={{ fontWeight: 'bold' }}>Cognitive (Intent-driven) Aggression:</Text>
//           {"\n\n"}Cognitive (Intent-driven) Aggression at the Second Stage is referred to as Harmful Debate. This is not healthy debate; it is often cloaked in cutthroat- competitiveness, obstructionistic, proleptic and/or antagonistic behavior. This aggressor can become fixated on his point of view, overly competitive and distrustful. As an aggressor turns away from others they turn inwardly and become fixated on his own views and position. He tends to become more competitive for competitive sake and distrustful of others' intentions.says "go ahead, try and move me!" This is adversarial, which is destructive and therefore aggressive.
//           {"\n\n"}We encourage healthy, constructive and "assertive" debate, but this aggressor is using harmful, destructive and "aggressive" debate. He is establishing a position versus expressing his interests. When he takes a position, he actually says "go ahead,try and move me!" This is adversarial, which is destructive and therefore aggressive.
//           {"\n\n"}On the other hand, I can say, "Here are my interests. What are your interests? Let us find some common ground so we can move forward." This is cooperative, constructive and therefore assertive and not aggressive. Understanding this difference is very important because, no matter where on the Meter of Emerging Aggression you happen to be, you can stop your upward motion on the Meter of Emerging Aggression Continuum by making this very constructive statement. By doing so, you and your aggressor will typically start de-escalating.
//           {"\n\n"}<Text style={{ fontWeight: 'bold' }}>Primal (adrenaline-driven) Aggression:</Text>
//           {"\n\n"}On the other hand, I can say, "Here are my interests. What are your interests? Let us find some common ground so we can move forward." This is cooperative, constructive and therefore assertive and not aggressive. Understanding this difference is very important because, no matter where on the Meter of Emerging Aggression you happen to be, you can stop your upward motion on the Meter of Emerging Aggression Continuum by making this very constructive statement. By doing so, you and your aggressor will typically start de-escalating.
//           {"\n\n"}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>. either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
//         </Text>
//       ),
//       expanded: false
//     },
//     {
//       title: (
//         <Text>
//           <Text style={{ fontSize: wp('6.3%'),fontWeight: 'bold'}}>Perspective One</Text>{"\n"}
//           <Text style={styles.titleSub}>What if you are the aggressor?</Text>
//         </Text>
//       ),
//       explanation: (
//         <Text style={styles.info}>
//          How should you respond if you are the aggressor? Are you perpetrating in cloaked cutthroat-competition, obstructionism, proleptic and/or antagonistic behaviour? It is not instinctual for humans to attack other humans.
//           {"\n\n"}Therefore, when most humans realize they are "aggressing" in this way, not wanting to be seen as "aggressive," they naturally move away from this destructive behavior. We know that one of the best ways to diffuse aggressive behavior is to share our issues and come to common ground. Are you sharing your issues and coming to common ground?
//           {"\n"}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text> , either Certified Aggression Managers or Ambassadors' (train-the- trainers) Webinar-based Workshops.
//         </Text>
//       ),
//       expanded: false
//     },
//     {
//       title: (
//         <Text>
//           <Text style={{ fontSize: wp('6.3%'),fontWeight: 'bold'}}>Perspective Two</Text>{"\n"}
//           <Text style={styles.titleSub}>What if you are observing an aggressor?</Text>
//         </Text>
//       ),
//       explanation: (
//         <Text style={styles.info}>
//           How should you respond if you are observing another or others that are aggressive? Here are some suggestions:
//           {"\n\n"}<Text style={{ fontSize: 16,fontWeight: 'bold'}}> Global versus Linear Thinkers:</Text>
//           {"\n"}Most people are motivated through either global thinking or linear thinking. To persuade a Global Thinking aggressor, you need to present the big picture, the main idea, the macro view instead of getting bogged down in details and specifics. Global thinking aggressor sees the big picture. They can follow a linear presentation of specific details but global thinking aggressors get bored very quickly.
//           {"\n\n"}To persuade a Linear Thinking aggressor, start at the beginning and make each step precise and detailed. More extreme linear thinkers may have difficulty grasping the bigger picture. It may be more effective to communicate your position in a more sequential way. Make sure he grasps each step before going to the next step.
//           {"\n\n"}Regardless of whether this emerging aggressor is Global or Linear, the more you incorporate all their senses, the greater the effect. Draw colored pictures in their minds, let them hear the strength and conviction in your voice, let them feel your resolve and desire to team with them moving forward with your solution.
//           {"\n\n"}<Text style={{ fontSize: 16,fontWeight: 'bold'}}>Status Quo versus Change Thinkers:</Text>
//           {"\n"}Most individuals are motivated through either a desire to maintain constancy - the status quo - or through the excitement of change. In fact, change is the only constant we can count on! Change always upsets the individual who wants things as they've always been. With Status Quo Aggressors, it's better to explain how the path of change is not so different (an update) than what he's used to. Discuss advantages of the change that will help him make his job easier, and make his future more secure. Because the Status Quo aggressor resists change, it's hard to persuade this aggressor with words like "new", "different", and "revolutionary." He needs reassurance that change will not endanger that with which he is so comfortable - starting with his job! Also, reassure him that he can count on you to be there to help with this process.
//           {"\n\n"}Change-oriented individuals, on the other hand, look forward to and embrace change. You can persuade this aggressor with words like "new", "different", and "revolutionary." Offer the Change Thinker the opportunity of an adventure. Point out that he is the only person who can resolve this issue, and describe him as uniquely qualified and capable. "Sam, change. You can persuade this aggressor with words like "new", "different", and "revolutionary." Offer the Change Thinker the opportunity of an adventure. Point out that he is the only person who can resolve this issue, and describe him as uniquely qualified and capable. "Sam, you've got the intellect and skills to help us solve this problem like no one else I can think of."
  
//           {"\n\n"}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>. either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
//         </Text>
//       ),
//       expanded: false
//     },
//     {
//       title: (
//         <Text>
//           <Text style={{ fontSize: wp('6.3%'),fontWeight: 'bold' }}>Perspective Three</Text>{"\n"}
//           <Text style={styles.titleSub}>Illustrates CAPS Trust Tenet</Text>
//         </Text>
//       ),
//       explanation: (
//         <Text style={styles.info}>
//           The fear of conflict, aggressive and threating behaviors undermine trust. Trust is required for genuine Commitment, Teamwork, Loyalty & Leadership. These are Human Resource issues, and if identified early on, can prevent future incidents that occur due to a lack of trust.Since "threat" and "trust" are at opposing ends of a spectrum, the more you engender trust, the less you are perceived as a threat. This is particularly important to understand as an Aggression Manager.
//           {"\n\n"}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text> either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
//         </Text>
//       ),
//       expanded: false
//     },
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
//         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//           <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Aggression Stage Two</Text>
//       </View>
//       <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollView}>
//         {items.map((item, index) => (
//           <View key={index} style={styles.card}>
//             <TouchableOpacity onPress={() => expandItem(item)} style={styles.cardHeader}>
//               <Image source={require('../assets/img/escolaimg.png')} style={styles.clip} />
//               <View style={{ flex: 1 }}>{item.title}</View>
//               <Image
//                 source={require('../assets/img/right-arrow.png')}
//                 style={[item.expanded ? styles.arrowDown : styles.arrow, { tintColor: '#9d0808' }]}
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
//     color: '#1E90FF',
//     textDecorationLine: 'underline',
//   },
//   info: {
//     fontSize: 16,
//     lineHeight: 22,
//     color: '#666',
//     textAlign: 'justify',
//   },
//   backIcon: {
//     width: 25,
//     height: 25,
//     tintColor: '#fff',
//   },
//   scrollView: {
//     paddingHorizontal: 16,
//   },
//   card: {
//     marginVertical: 15,
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
//     marginHorizontal: 10,
//   },
//   arrow: {
//     width: 15,
//     height: 15,
//     tintColor: '#b71c1c',
//   },
//   arrowDown: {
//     width: 15,
//     height: 15,
//     transform: [{ rotate: '90deg' }],
//   },
//   cardContent: {
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//   },
//   titleSub: {
//     fontSize: 14,
//     color: 'gray',
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

// export default AggressionStageTwoScreen;

import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking,Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Item {
  title: React.ReactNode;
  explanation: React.ReactNode;
  expanded: boolean;
}

const AggressionStageTwoScreen: React.FC = () => {
  const [showFooter, setShowFooter] = useState(true);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
const navigation = useNavigation();
  const [items, setItems] = useState<Item[]>([
    {
      title: (
        <Text>
          <Text style={{ fontSize: wp('6.3%'),fontWeight: 'bold', color:'black' }}>Introduction</Text>{"\n"}
          <Text style={styles.titleSub}>Stage Two Introduction</Text>
        </Text>
      ),
      explanation: (
        <Text style={styles.info}>
          <Text style={{ fontWeight: 'bold' }}>Cognitive (Intent-driven) Aggression:</Text>
          {"\n\n"}Cognitive (Intent-driven) Aggression at the Second Stage is referred to as Harmful Debate. This is not healthy debate; it is often cloaked in cutthroat- competitiveness, obstructionistic, proleptic and/or antagonistic behavior. This aggressor can become fixated on his point of view, overly competitive and distrustful. As an aggressor turns away from others they turn inwardly and become fixated on his own views and position. He tends to become more competitive for competitive sake and distrustful of others' intentions.says "go ahead, try and move me!" This is adversarial, which is destructive and therefore aggressive.
          {"\n\n"}We encourage healthy, constructive and "assertive" debate, but this aggressor is using harmful, destructive and "aggressive" debate. He is establishing a position versus expressing his interests. When he takes a position, he actually says "go ahead,try and move me!" This is adversarial, which is destructive and therefore aggressive.
          {"\n\n"}On the other hand, I can say, "Here are my interests. What are your interests? Let us find some common ground so we can move forward." This is cooperative, constructive and therefore assertive and not aggressive. Understanding this difference is very important because, no matter where on the Meter of Emerging Aggression you happen to be, you can stop your upward motion on the Meter of Emerging Aggression Continuum by making this very constructive statement. By doing so, you and your aggressor will typically start de-escalating.
          {"\n\n"}<Text style={{ fontWeight: 'bold' }}>Primal (adrenaline-driven) Aggression:</Text>
          {"\n\n"}On the other hand, I can say, "Here are my interests. What are your interests? Let us find some common ground so we can move forward." This is cooperative, constructive and therefore assertive and not aggressive. Understanding this difference is very important because, no matter where on the Meter of Emerging Aggression you happen to be, you can stop your upward motion on the Meter of Emerging Aggression Continuum by making this very constructive statement. By doing so, you and your aggressor will typically start de-escalating.
          {"\n\n"}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>. either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
        </Text>
      ),
      expanded: false
    },
    {
      title: (
        <Text>
          <Text style={{ fontSize: wp('6.3%'),fontWeight: 'bold',color:'black' }}>Perspective One</Text>{"\n"}
          <Text style={styles.titleSub}>What if you are the aggressor?</Text>
        </Text>
      ),
      explanation: (
        <Text style={styles.info}>
         How should you respond if you are the aggressor? Are you perpetrating in cloaked cutthroat-competition, obstructionism, proleptic and/or antagonistic behaviour? It is not instinctual for humans to attack other humans.
          {"\n\n"}Therefore, when most humans realize they are "aggressing" in this way, not wanting to be seen as "aggressive," they naturally move away from this destructive behavior. We know that one of the best ways to diffuse aggressive behavior is to share our issues and come to common ground. Are you sharing your issues and coming to common ground?
          {"\n"}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text> , either Certified Aggression Managers or Ambassadors' (train-the- trainers) Webinar-based Workshops.
        </Text>
      ),
      expanded: false
    },
    {
      title: (
        <Text>
          <Text style={{ fontSize: wp('6.3%'),fontWeight: 'bold',color:'black' }}>Perspective Two</Text>{"\n"}
          <Text style={styles.titleSub}>What if you are observing an aggressor?</Text>
        </Text>
      ),
      explanation: (
        <Text style={styles.info}>
          How should you respond if you are observing another or others that are aggressive? Here are some suggestions:
          {"\n\n"}<Text style={{ fontSize: 16,fontWeight: 'bold'}}> Global versus Linear Thinkers:</Text>
          {"\n"}Most people are motivated through either global thinking or linear thinking. To persuade a Global Thinking aggressor, you need to present the big picture, the main idea, the macro view instead of getting bogged down in details and specifics. Global thinking aggressor sees the big picture. They can follow a linear presentation of specific details but global thinking aggressors get bored very quickly.
          {"\n\n"}To persuade a Linear Thinking aggressor, start at the beginning and make each step precise and detailed. More extreme linear thinkers may have difficulty grasping the bigger picture. It may be more effective to communicate your position in a more sequential way. Make sure he grasps each step before going to the next step.
          {"\n\n"}Regardless of whether this emerging aggressor is Global or Linear, the more you incorporate all their senses, the greater the effect. Draw colored pictures in their minds, let them hear the strength and conviction in your voice, let them feel your resolve and desire to team with them moving forward with your solution.
          {"\n\n"}<Text style={{ fontSize: 16,fontWeight: 'bold'}}>Status Quo versus Change Thinkers:</Text>
          {"\n"}Most individuals are motivated through either a desire to maintain constancy - the status quo - or through the excitement of change. In fact, change is the only constant we can count on! Change always upsets the individual who wants things as they've always been. With Status Quo Aggressors, it's better to explain how the path of change is not so different (an update) than what he's used to. Discuss advantages of the change that will help him make his job easier, and make his future more secure. Because the Status Quo aggressor resists change, it's hard to persuade this aggressor with words like "new", "different", and "revolutionary." He needs reassurance that change will not endanger that with which he is so comfortable - starting with his job! Also, reassure him that he can count on you to be there to help with this process.
          {"\n\n"}Change-oriented individuals, on the other hand, look forward to and embrace change. You can persuade this aggressor with words like "new", "different", and "revolutionary." Offer the Change Thinker the opportunity of an adventure. Point out that he is the only person who can resolve this issue, and describe him as uniquely qualified and capable. "Sam, change. You can persuade this aggressor with words like "new", "different", and "revolutionary." Offer the Change Thinker the opportunity of an adventure. Point out that he is the only person who can resolve this issue, and describe him as uniquely qualified and capable. "Sam, you've got the intellect and skills to help us solve this problem like no one else I can think of."
  
          {"\n\n"}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>. either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
        </Text>
      ),
      expanded: false
    },
    {
      title: (
        <Text>
          <Text style={{ fontSize: wp('6.3%'),fontWeight: 'bold',color:'black'  }}>Perspective Three</Text>{"\n"}
          <Text style={styles.titleSub}>Illustrates CAPS Trust Tenet</Text>
        </Text>
      ),
      explanation: (
        <Text style={styles.info}>
          The fear of conflict, aggressive and threating behaviors undermine trust. Trust is required for genuine Commitment, Teamwork, Loyalty & Leadership. These are Human Resource issues, and if identified early on, can prevent future incidents that occur due to a lack of trust.Since "threat" and "trust" are at opposing ends of a spectrum, the more you engender trust, the less you are perceived as a threat. This is particularly important to understand as an Aggression Manager.
          {"\n\n"}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text> either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
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
        <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Aggression Stage Two</Text>
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

export default AggressionStageTwoScreen;