import React from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Register() {

  return (
    <View style={styles.container}>
      <Animatable.View  
        animation='fadeInLeft' 
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Register</Text> 
      </Animatable.View>

      <Animatable.View 
        style={styles.containerForm}
        animation={'fadeInUp'}
      >
        <Text style={styles.title}>Email</Text>
        <TextInput
          keyboardType='email-address'
          placeholder='Digite um email'
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          keyboardType='visible-password'
          placeholder='Digite um email'
          style={styles.input}
        />

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Enter</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009BFF'
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  containerForm: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  containerButton: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#009BFF',
    borderRadius: 50,
    paddingVertical: 8,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },

});
