import { StyleSheet, StatusBar, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import SourceIcon from '../SourceIcon';
import SourceImage from '../SourceImage';

const PersionalDetails = () => {

    const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
    const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);

    const icon = SourceIcon();
    const srcImage = SourceImage();

    const navigation = useNavigation();

    const backToSetting = () => {
        navigation.navigate('Setting')
    }
    const handleSave = () => {
        navigation.navigate('Setting')
    }

    const togglePasswordVisibility1 = () => {
        setIsPasswordVisible1(!isPasswordVisible1);
    };

    const togglePasswordVisibility2 = () => {
        setIsPasswordVisible2(!isPasswordVisible2);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor={'#0C0F14'}
            />
            <View style={styles.row1}>

                <LinearGradient
                    colors={['#21262E', '#0C0F14']}
                    style={styles.positionBack}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <TouchableOpacity
                        onPress={backToSetting}
                        style={styles.touchBack}>
                        <Image
                            style={styles.abs}
                            source={icon.arowLeft}
                        />
                    </TouchableOpacity>
                </LinearGradient>

                <Text style={[styles.txt, { fontSize: 22 }]}>Persional Details</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <Image
                    style={styles.asbImage}
                    source={srcImage.avartar}
                />
            </View>

            <View>
                <TextInput
                    style={styles.txtInput}
                    value='Ngan '
                    placeholderTextColor={'#828282'}
                />
            </View>

            <View>
                <TextInput
                    style={styles.txtInput}
                    value='Thu Ngan@gmail.com'
                    placeholder='Email'
                    keyboardType='email-address'
                    placeholderTextColor={'#828282'}
                />
            </View>

            <View>
                <TextInput
                    style={styles.txtInput}
                    placeholder='Password'
                    placeholderTextColor={'#828282'}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.icon}
                    onPress={togglePasswordVisibility1}
                >
                    <Icon name={isPasswordVisible1 ? 'eye-slash' : 'eye'} size={30} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            <View>
                <TextInput
                    style={styles.txtInput}
                    placeholder='Re-type password'
                    placeholderTextColor={'#828282'}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.icon}
                    onPress={togglePasswordVisibility2}
                >
                    <Icon name={isPasswordVisible2 ? 'eye-slash' : 'eye'} size={30} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={handleSave}
                style={styles.btnSave}>
                <Text style={styles.btnSignInText}>Save</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default PersionalDetails

const styles = StyleSheet.create({
    btnSave: {
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
    icon: {
        position: 'absolute',
        top: 43,
        right: 20,
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
    asbImage: {
        marginTop: 40,
    },
    abs: {
        height: 13,
        width: 13,
    },
    txt:
    {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    touchBack: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    positionBack: {
        borderColor: '#21262E',
        borderWidth: 1,
        width: 40,
        height: 40,
        borderRadius: 10,
        position: 'absolute',
        left: 0,
    },
    row1: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: '#0C0F14',
        paddingHorizontal: 24,
        width: '100%',
        height: '100%'
    }
})