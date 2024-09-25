import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Item {
  title: string;
  explanation: React.ReactNode;
  expanded: boolean;
}

const RpTestBestPracticeResponseScreen: React.FC = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState<Item[]>([
    {
      title: (
        <Text>
          <Text style={{ fontSize: 20 }}>RP test sub1 title 1</Text>{"\n"}
          <Text style={styles.titleSub}>RP test sub1 title 2</Text>
        </Text>
      ),
      explanation: <Text style={styles.info}>body</Text>,
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
              <Text style={styles.cardTitle}>{item.title}</Text>
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
    marginTop: 20,
    fontSize: 20,
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

export default RpTestBestPracticeResponseScreen;