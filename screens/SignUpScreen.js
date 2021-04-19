import React from 'react';
import {
  Image,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const initialState = {
  userName: '',
  password: '',
  confirmPassword: '',
  isValidUserName: false,
  secureTextEntry: true,
  confirmSecureTextEntry: true,
}

const SignUpScreen = ({ navigation }) => {
  const [data, setData] = React.useState(initialState);
  const onInputChange = (key, value) => {
    const validData = key === 'userName'
      ? { isValidUserName: !!value.length }
      : {};
    setData({
      ...data,
      [key]: value,
      ...validData,
    });
  }
  const setSecureTextEntry = (key) => {
    setData({
      ...data,
      [key]: !data[key],
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View
        style={styles.footer}
        animation="fadeInUpBig"
      >
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <FontAwesome 
            name="user-o"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Enter UserName"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => onInputChange('userName', val)}
          />
          {data.isValidUserName && (
            <Animatable.View
              animation="bounceIn"  
            >
              <Feather 
                name="check-circle"
                color="green"
                size={20}
              />
            </Animatable.View>
          )}
        </View>
        <Text style={[styles.text_footer, {
          marginTop: 35,
        }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome 
            name="lock"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Enter Password"
            secureTextEntry={data.secureTextEntry}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => onInputChange('password', val)}
          />
          <TouchableOpacity
            onPress={() => setSecureTextEntry('secureTextEntry')}
          >
            <Feather 
              name={`eye${data.secureTextEntry ? '-off' : ''}`}
              color="grey"
              size={20}
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.text_footer, {
          marginTop: 35,
        }]}>Confirm Password</Text>
        <View style={styles.action}>
          <FontAwesome 
            name="lock"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={data.confirmSecureTextEntry}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => onInputChange('confirmPassword', val)}
          />
          <TouchableOpacity
            onPress={() => setSecureTextEntry('confirmSecureTextEntry')}
          >
            <Feather 
              name={`eye${data.confirmSecureTextEntry ? '-off' : ''}`}
              color="grey"
              size={20}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <LinearGradient
            colors={['#881359', '#581359']}
            style={styles.signIn}
          >
            <Text style={[styles.textSign, styles.whiteColor]}>Sign Up</Text>
          </LinearGradient>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignInScreen')}
            style={[styles.signIn, {
              borderColor: '#581359',
              borderWidth: 1,
              marginTop: 15,
            }]}
          >
            <Text style={[styles.textSign, styles.brandColor]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#581359'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold',
  },
  whiteColor: {
    color: '#fff',
  },
  brandColor: {
    color: '#581359',
  },
});
