import React, { useState } from 'react';
import { View, StatusBar, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Image, Text, Modal, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AxiosInstance from '../helpers/AxiosInstance';

const DangKy = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
    const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
    const [messageModal, setMessageModal] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false)

    const navigation = useNavigation();

    const eye = require('../../../icon/eye.png');
    const eyeOff = require('../../../icon/eyeoff.png');

    const backToLogin = () => {
        navigation.navigate('DangNhap');
    }

    const togglePasswordVisibility1 = () => {
        setIsPasswordVisible1(!isPasswordVisible1);
    };

    const togglePasswordVisibility2 = () => {
        setIsPasswordVisible2(!isPasswordVisible2);
    };

    const anHienModal = () => {
        setIsModalVisible(!isModalVisible);
    }

    const xuLyDangKy = async () => {

        try {
            const REGEX_EMAIL = /\S+@\S+\.\S+/;
            const checkEmail = REGEX_EMAIL.test(email);
            const checkPassword = password === confirmPassword;

            const checkName = name.length >= 4;

            if (name.length == 0) {
                setMessageModal('Vui lòng nhập tên')
                return setIsModalVisible(!isModalVisible)
            } else

                if (!checkName) {
                    setMessageModal('Vui lòng nhập đầy đủ họ và tên')
                    return setIsModalVisible(!isModalVisible)
                } else

                    if (!checkEmail) {
                        setMessageModal('Email chưa đúng hoặc bị bỏ trống')
                        return setIsModalVisible(!isModalVisible);
                    } else

                        if (password.length < 4 || confirmPassword.length < 4) {
                            setMessageModal('Mật khẩu trống hoặc quá ngắn')
                            return setIsModalVisible(!isModalVisible);
                        } else

                            if (!checkPassword) {
                                setMessageModal('Mật khẩu không khớp')
                                return setIsModalVisible(!isModalVisible);
                            }

            const body = {
                name: name,
                email: email,
                password: password
            }

            const result = await AxiosInstance().post('/users/register', body);

            console.log(result);
            if (result) {
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');

                navigation.navigate('Login');

            } else {
                setMessageModal('Đăng ký thất bại')
                return setIsModalVisible(!isModalVisible);
            }

        } catch (err) {
            console.log('err', err);
            setMessageModal('Đăng ký thất bại')
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
                <Text style={styles.txtLogin}>Register to continue</Text>
            </View>

            <View>
                <TextInput
                    style={[styles.txtInput, { marginTop: 30 }]}
                    placeholder='Name'
                    placeholderTextColor={'#828282'}
                    onChangeText={setName}
                    value={name}
                />
            </View>

            <View>
                <TextInput
                    style={styles.txtInput}
                    placeholder='Email'
                    keyboardType='email-address'
                    placeholderTextColor={'#828282'}
                    onChangeText={setEmail}
                    value={email}
                />
            </View>

            <View>
                <TextInput
                    style={styles.txtInput}
                    placeholder='Password'
                    placeholderTextColor={'#828282'}
                    secureTextEntry={!isPasswordVisible1}
                    onChangeText={setPassword}
                    value={password}
                />
                <TouchableOpacity
                    style={styles.icon}
                    onPress={togglePasswordVisibility1}
                >
                    <Image source={isPasswordVisible1 ? eyeOff : eye} style={styles.sizeIcon} />
                </TouchableOpacity>
            </View>

            <View>
                <TextInput
                    style={styles.txtInput}
                    placeholder='Re-type password'
                    placeholderTextColor={'#828282'}
                    secureTextEntry={!isPasswordVisible2}
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                />
                <TouchableOpacity
                    style={styles.icon}
                    onPress={togglePasswordVisibility2}
                >
                    <Image source={isPasswordVisible2 ? eyeOff : eye} style={styles.sizeIcon} />
                </TouchableOpacity>
            </View>

            {/* Nút đăng ký */}
            <View>
                <TouchableOpacity
                    onPress={xuLyDangKy}
                    style={styles.btnSignIn}>
                    <Text style={styles.btnSignInText}>Register</Text>
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


            <View style={[styles.align, { marginTop: 30 }]}>

                <Text style={styles.txtLogin}>
                    You have an account? Click
                    <Text
                        onPress={backToLogin}
                        style={{ color: '#D17842' }}
                    > Sign in</Text>
                </Text>

            </View>
        </SafeAreaView>
    )
}

export default DangKy

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
        marginTop: 16,
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
        top: 23,
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
})