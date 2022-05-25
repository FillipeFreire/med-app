import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  containerBlue: {
    flex: 1,
    backgroundColor: '#009BFF',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white'
  },
  containerHeader: {
    backgroundColor: 'white',
    color: 'black',
    borderEndWidth: 1,
    marginTop: 0,
  },
  title: {
    fontSize: 16,
    marginTop: 28,
  },
  input: {
    height: 40,
    fontSize: 16,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 12,
    marginBottom: 12,
    paddingLeft: 10,
  },
  buttonPrimary: {
    backgroundColor: '#009BFF',
    borderRadius: 50,
    paddingVertical: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    marginBottom: 10,
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    marginBottom: 10,
    buttonText: {
      fontSize: 18,
      color: 'black',
      fontWeight: 'bold'
    },
  },
});