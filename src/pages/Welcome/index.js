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
import { globalStyles } from '../../assets/styles';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.containerBlue}>
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
            style={{ ...globalStyles.buttonSecundary, width: 160 }}
          >
            <Text style={globalStyles.buttonSecundary.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate('SignIn')}
            style={{ ...globalStyles.buttonPrimary, width: 160 }}
          >
            <Text style={globalStyles.buttonPrimary.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
