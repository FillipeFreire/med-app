import React from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { globalStyles } from '../../assets/styles';

export default function Signin() {
  const navigation = useNavigation();

  return (
    <Animatable.View
      style={globalStyles.containerLight}
      animation='fadeInLeft'
    >
      <StatusBar
        backgroundColor='white' 
        barStyle='dark-content'
      />
      <Appbar.Header style={globalStyles.containerHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Login" />
      </Appbar.Header>

      <View 
        style={styles.containerForm}
      >
        <Text style={styles.title}>Email</Text>
        <TextInput
          keyboardType='email-address'
          placeholder='Digite um email'
          style={globalStyles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          keyboardType='visible-password'
          placeholder='Digite um email'
          style={globalStyles.input}
        />

        <View style={styles.containerButton}>
          <TouchableOpacity style={globalStyles.buttonSecundary}>
            <Text style={globalStyles.buttonSecundary.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.buttonPrimary}>
            <Text style={globalStyles.buttonPrimary.buttonText}>Enter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    flex: 1,
    backgroundColor: 'white',
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  containerButton: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    marginTop: 28,
  },
});
