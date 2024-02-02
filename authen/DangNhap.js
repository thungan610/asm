import React, { useState } from 'react';
import { View, StatusBar, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Image, Text, Modal, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AxiosInstance from '../helpers/AxiosInstance';

const Login = () => {
  const navigation = useNavigation();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [messageModal, setMessageModal] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false)

  const eye = require('../../../icon/eye.png');
  const eyeOff = require('../../../icon/eyeoff.png');


  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSignUp = () => {
    navigation.navigate('DangKy');
  }
  

  const anHienModal = () => {
    setIsModalVisible(!isModalVisible);
  }

  const handleLogin = async () => {

    const REGEX_EMAIL = /\S+@\S+\.\S+/;


    try {
      const ktEmail = REGEX_EMAIL.test(userName);


      if (userName.length == 0) {
        setMessageModal('Vui lòng nhập email')
        return setIsModalVisible(!isModalVisible)
      } else

        if (!ktEmail) {
          setMessageModal('Email không đúng')
          return setIsModalVisible(!isModalVisible);
        } else

          if (password.length < 4) {
            setMessageModal('Mật khẩu quá ngắn')
            return setIsModalVisible(!isModalVisible);
          } else

            if (ktEmail) {

              const body = {
                email: userName,
                password: password
              }

              const result = await AxiosInstance().post('/users/login', body);

              if (result) {
                navigation.navigate('TabNavigation');
              } else {
                setMessageModal('Đăng nhập thất bại')
                return setIsModalVisible(!isModalVisible);
              }
            }
            else {
              setMessageModal('Đăng nhập thất bại')
              return setIsModalVisible(!isModalVisible);
            }

    } catch (err) {
      console.log(err);
      setMessageModal('Đăng nhập thất bại')
      return setIsModalVisible(!isModalVisible);
    }


  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={'#0C0F14'}
      />
      <View style={styles.align}>
        <Image
          resizeMode='center'
          style={styles.sizeImg}
          source={require('../../../img/logo.png')}
        />
        <Text style={styles.txtWelcome}>Welcome to Lungo !!</Text>
        <Text style={styles.txtLogin}>Login to continue</Text>
      </View>


      <View>
        <TextInput
          style={styles.txtInput}
          placeholder='Email Address'
          keyboardType='email-address'
          placeholderTextColor={'#828282'}
          onChangeText={setuserName}
        />
      </View>

      <View>
        <TextInput
          style={styles.txtInput}
          placeholder='Password'
          placeholderTextColor={'#828282'}
          secureTextEntry={!isPasswordVisible}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.icon}
          onPress={togglePasswordVisibility}
        >
          <Image source={isPasswordVisible ? eyeOff : eye} style={styles.sizeIcon}/>
        </TouchableOpacity>
      </View>

      {/* Nút đăng nhập */}
      <View>
        <TouchableOpacity
          style={styles.btnSignIn}
          onPress={handleLogin}
        >
          <Text
           style={styles.btnSignInText}>Sign In</Text>
        </TouchableOpacity>

        <Modal
          visible={isModalVisible}
          animationType='fade'
          transparent={true}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modal}>
            <View style={styles.contentModal}>
              <Text style={styles.txtContentModal}>{messageModal}</Text>
              <View style={styles.rowModal}>

                <TouchableOpacity
                  style={styles.sizeBtnConfirm}
                  onPress={anHienModal}>
                  <Text style={styles.txtContentModal}>OK</Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>
        </Modal>
      </View>

      {/* Button Sign In with Goolge*/}
      <View>
        <Pressable
          style={styles.touch}
          onPress={() => alert('Helloooooo')}
        >
          <Image
            source={require('../../../icon/iconGG.png')}
            style={styles.sizeIconGG}
          />
          <Text style={styles.touchLabel}>Sign in with Google</Text>
          <View></View>
        </Pressable>
      </View>

      <View style={[styles.align, { marginTop: 30 }]}>

        <Text style={styles.txtLogin}>
          Dont have account? Click
          <Text onPress={handleSignUp} style={{ color: '#D17842' }}> Register</Text>
        </Text>

        <Text style={styles.txtLogin}>
          Forget Password? Click
          <Text style={{ color: '#D17842' }}> Reset</Text>
        </Text>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  sizeIconGG: {
    width: 20,
    height: 20,
    marginTop: 5
  },
  touchLabel: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  touch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 25,
    borderRadius: 20,
    height: 57,
    marginTop: 10
  },
  btnSignIn: {
    height: 57,
    backgroundColor: '#D17842',
    paddingVertical: 16,
    borderRadius: 20,
    marginTop: 40
  },
  btnSignInText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  txtInput: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#252A32',
    marginTop: 36,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
  },
  txtLogin: {
    color: '#828282',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  txtWelcome: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  align: {
    alignItems: 'center',
    marginTop: 80,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0C0F14',
    paddingHorizontal: 14,
  },
  sizeImg: {
    width: 160,
    height: 160,
  },
  icon: {
    position: 'absolute',
    top: 43,
    right: 20,
  },
  contentModal: {
    width: 328,
    height: 172,
    backgroundColor: '#0C0F14',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  sizeBtnConfirm: {
    backgroundColor: '#D17842',
    width: 133,
    height: 47,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtContentModal: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  rowModal: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 48
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    opacity: 0.9

  },
  sizeIcon: {
    width: 24,
    height: 24,
    marginTop: 5
    }
});

export default Login;
