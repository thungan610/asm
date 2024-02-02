import { SafeAreaView, StatusBar, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import SourceIcon from '../SourceIcon'
import SourceImage from '../SourceImage'
import { useNavigation } from '@react-navigation/native'

const Payment = () => {

    const navigation = useNavigation();


    const colorLinear = ['#262B33', '#0C0F14'];
    const start = { x: 0, y: 0 };
    const end = { x: 1, y: 0 };

    const srcIcon = SourceIcon();
    const srcImage = SourceImage();

    const handleClickPayment = () => {
        navigation.navigate('LichSuGiaoDich');
    }

    const handleClickBack = () => {
        navigation.goBack();
    }

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
                        onPress={handleClickBack}
                        style={styles.touchBack}
                    >
                        <Image
                            style={styles.abs}
                            source={srcIcon.arowLeft}
                        />
                    </TouchableOpacity>
                </LinearGradient>

                <Text style={styles.txtLabelScreen}>Payment</Text>
            </View>

            <View style={styles.cardContainer}>
                <Text style={styles.txtLabelCard}>Credit Card</Text>
                <Image
                    style={styles.sizeCard}
                    source={srcImage.visa}
                />
            </View>

            <View style={styles.bodySize}>
                {/* Wallet */}
                <LinearGradient
                    colors={colorLinear}
                    start={start}
                    end={end}
                    style={styles.rowSelect}>
                    <View style={styles.rowInRow}>
                        <Image
                            style={styles.sizeIconWallet}
                            source={srcIcon.walletIcon}
                        />
                        <Text style={styles.txtLabelCard}>Wallet</Text>
                    </View>

                    <Text style={styles.txtPrice}>$ 100.50</Text>
                </LinearGradient>

                {/* Google pay  */}
                <LinearGradient
                    colors={colorLinear}
                    start={start}
                    end={end}
                    style={styles.rowSelect}>
                    <View style={styles.rowInRow}>
                        <Image
                            style={styles.sizeIconGG}
                            source={srcIcon.googlePayIcon}
                        />
                        <Text style={styles.txtLabelCard}>Google Pay</Text>
                    </View>

                </LinearGradient>

                {/* Apple pay  */}
                <LinearGradient
                    colors={colorLinear}
                    start={start}
                    end={end}
                    style={styles.rowSelect}>
                    <View style={styles.rowInRow}>
                        <Image
                            style={styles.sizeIconApple}
                            source={srcIcon.appleIcon}
                        />
                        <Text style={styles.txtLabelCard}>Apple Pay</Text>
                    </View>

                </LinearGradient>

                {/* Amazon pay  */}
                <LinearGradient
                    colors={colorLinear}
                    start={start}
                    end={end}
                    style={styles.rowSelect}>
                    <View style={styles.rowInRow}>
                        <Image
                            style={styles.sizeIconAmazon}
                            source={srcIcon.amazonPayIcon}
                        />
                        <Text style={styles.txtLabelCard}>Amazon Pay</Text>
                    </View>

                </LinearGradient>
            </View>

            <View style={styles.rowPay}>

                <View>
                    <Text style={styles.txtPrice}>Price</Text>
                    <Text style={styles.charactorDolar}>$
                        <Text style={styles.txtNumberPrice}> 10</Text>
                    </Text>

                </View>

                <TouchableOpacity 
                onPress={handleClickPayment}
                style={styles.btnPay}>
                    <Text style={styles.txtPay}>Pay from Credit Card</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Payment

const styles = StyleSheet.create({
    row1: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center'
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
    touchBack: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    abs: {
        height: 20,
        width: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#0C0F14',
        paddingHorizontal: 20
    },
    txtLabelScreen: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },
    cardContainer: {
        height: 'auto',
        borderWidth: 2,
        borderRadius: 25,
        borderColor: '#D17842',
        marginTop: 30,
        padding: 15,
        gap: 10
    },
    txtLabelCard: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
    },
    sizeCard: {
        width: 320,
        height: 186
    },
    sizeIconWallet: {
        width: 25,
        height: 20
    },
    txtPrice: {
        fontSize: 14,
        color: 'white'
    },
    rowSelect: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 19,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#262B33',
        height: 50,
        alignItems: 'center'
    },
    rowInRow: {
        flexDirection: 'row',
        gap: 14,
        alignItems: 'center'
    },
    sizeIconGG: {
        width: 29.35,
        height: 25
    },
    sizeIconApple: {
        width: 20.83,
        height: 25
    },
    sizeIconAmazon: {
        width: 27.5,
        height: 25
    },
    rowPay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20
    },
    txtPrice: {
        color: '#AEAEAE',
        fontSize: 12
    },
    charactorDolar: {
        color: '#D17842',
        fontSize: 20,
    },
    txtNumberPrice: {
        color: 'white',
        fontSize: 20,
    },
    btnPay: {
        backgroundColor: '#D17842',
        width: 240,
        height: 60,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtPay: {
        color: 'white',
        fontSize: 16
    },
    bodySize: {
        flex: 1
    }


})