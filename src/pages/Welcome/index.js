import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

import InfoCarousel from '../../components/InfoCarousel';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image 
          animation='fadeInUp'
          source={require('../../assets/images/logo.png')} 
          style={{ width: '70%' }} 
          resizeMode='contain'
        />
      </View>

      <Animatable.View 
        delay={2000}
        animation='fadeInUp' 
        style={styles.containerForm}
      >
        <View style={{ height: 200 }}>
          <InfoCarousel />
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Register')}
            style={styles.buttonSecundary}
          >
            <Text style={styles.buttonSecundary.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate('SignIn')}
            style={styles.buttonPrimary}
          >
            <Text style={styles.buttonPrimary.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009BFF',
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#009BFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    top: '30%',
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    width: '96%',
    height: '40%',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  containerButton: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#009BFF',
    borderRadius: 50,
    paddingVertical: 8,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    buttonText: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold'
    },
  },
  buttonSecundary: {
    borderColor: '#DEDEDE',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingVertical: 8,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    buttonText: {
      fontSize: 18,
      color: 'black',
      fontWeight: 'bold'
    },
  },
});
