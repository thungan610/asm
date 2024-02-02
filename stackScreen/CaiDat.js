import { StyleSheet, StatusBar, Text, View, SafeAreaView, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import SourceIcon from '../SourceIcon'

const CaiDat = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const navigation = useNavigation();

    const srcIcon = SourceIcon();





    const handeBtnBack = () => {
        navigation.navigate('TrangChu');
    }
    const handlePersionalDetails = () => {
        navigation.navigate('ThongTinCaNhan');
    }
    const handleLogout = () => {
        setIsModalVisible(!isModalVisible);
    }

    const confirmLogout = () => {
        setIsModalVisible(!isModalVisible);
        navigation.navigate('DangNhap');
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
                        style={styles.touchBack}
                        onPress={handeBtnBack}
                    >
                        <Image
                            style={styles.abs}
                            source={srcIcon.arowLeft}
                        />
                    </TouchableOpacity>
                </LinearGradient>

                <Text style={[styles.txt, { fontSize: 22 }]}>Setting</Text>
            </View>

            <View style={{ marginTop: 40 }}>
                <TouchableOpacity style={styles.rowContainer}>
                    <View style={styles.backgroundIcon}>
                        <Image
                            style={styles.icon}
                            source={srcIcon.ellipseIcon}
                        />
                        <View style={styles.absImg}>
                            <Image
                                style={styles.sizeIcon}
                                source={srcIcon.historyIcon}
                            />
                        </View>
                    </View>

                    <Text style={[styles.txt, styles.txtAbs]}>History</Text>

                    <Image
                        style={styles.arrowIcon}
                        source={srcIcon.arrowRight}
                    />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    onPress={handlePersionalDetails}
                    style={styles.rowContainer}>
                    <View style={styles.backgroundIcon}>
                        <Image
                            style={styles.icon}
                            source={srcIcon.ellipseIcon}
                        />
                        <View style={styles.absImg}>
                            <Image
                                style={styles.sizeIcon}
                                source={srcIcon.persionalIcon}
                            />
                        </View>
                    </View>

                    <Text style={[styles.txt, styles.txtAbs]}>Persional Details</Text>

                    <Image
                        style={styles.arrowIcon}
                        source={srcIcon.arrowRight}
                    />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.rowContainer}>
                    <View style={styles.backgroundIcon}>
                        <Image
                            style={styles.icon}
                            source={srcIcon.ellipseIcon}
                        />
                        <View style={styles.absImg}>
                            <Image
                                style={styles.sizeIcon}
                                source={srcIcon.addressIcon}
                            />
                        </View>
                    </View>

                    <Text style={[styles.txt, styles.txtAbs]}>Adress</Text>

                    <Image
                        style={styles.arrowIcon}
                        source={srcIcon.arrowRight}
                    />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.rowContainer}>
                    <View style={styles.backgroundIcon}>
                        <Image
                            style={styles.icon}
                            source={srcIcon.ellipseIcon}
                        />
                        <View style={styles.absImg}>
                            <Image
                                style={styles.sizeIcon}
                                source={srcIcon.paymentIcon}
                            />
                        </View>
                    </View>

                    <Text style={[styles.txt, styles.txtAbs]}>Payment Menthod</Text>

                    <Image
                        style={styles.arrowIcon}
                        source={srcIcon.arrowRight}
                    />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.rowContainer}>
                    <View style={styles.backgroundIcon}>
                        <Image
                            style={styles.icon}
                            source={srcIcon.ellipseIcon}
                        />
                        <View style={styles.absImg}>
                            <Image
                                style={styles.sizeIcon}
                                source={srcIcon.aboutIcon}
                            />
                        </View>
                    </View>

                    <Text style={[styles.txt, styles.txtAbs]}>About</Text>

                    <Image
                        style={styles.arrowIcon}
                        source={srcIcon.arrowRight}
                    />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.rowContainer}>
                    <View style={styles.backgroundIcon}>
                        <Image
                            style={styles.icon}
                            source={srcIcon.ellipseIcon}
                        />
                        <View style={styles.absImg}>
                            <Image
                                style={styles.sizeIcon}
                                source={srcIcon.helpIcon}
                            />
                        </View>
                    </View>

                    <Text style={[styles.txt, styles.txtAbs]}>Help</Text>

                    <Image
                        style={styles.arrowIcon}
                        source={srcIcon.arrowRight}
                    />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    onPress={handleLogout}
                    style={styles.rowContainer}>
                    <View style={styles.backgroundIcon}>
                        <Image
                            style={styles.icon}
                            source={srcIcon.ellipseIcon}
                        />
                        <View style={styles.absImg}>
                            <Image
                                style={styles.sizeIcon}
                                source={srcIcon.logoutIcon}
                            />
                        </View>
                    </View>

                    <Text style={[styles.txt, styles.txtAbs, { color: 'red' }]}>Log Out</Text>

                    <Image
                        style={styles.arrowIcon}
                        source={srcIcon.arrowRight}
                    />


                </TouchableOpacity>
            </View>

            <Modal
                visible={isModalVisible}
                animationType='fade'
                transparent={true}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modal}>
                    <View style={styles.contentModal}>
                        <Text style={styles.txtContentModal}>Are you sure want to logout!</Text>
                        <View style={styles.rowModal}>

                            <TouchableOpacity
                                style={styles.sizeBtnCancel}
                                onPress={handleLogout}>
                                <Text style={styles.txtContentModal}>No</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.sizeBtnConfirm}
                                onPress={confirmLogout}>
                                <Text style={styles.txtContentModal}>Yes</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>


        </SafeAreaView>
    )
}

export default CaiDat

const styles = StyleSheet.create({
    contentModal: {
        width: 328,
        height: 172,
        backgroundColor: '#0C0F14',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    sizeBtnCancel: {
        width: 133,
        height: 47,
        alignItems: 'center',
        justifyContent: 'center'
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
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24
    },

    icon: {
        width: 35,
        height: 35,
    },
    sizeIcon: {
        width: 20,
        height: 20,
    },
    absImg: {
        position: 'absolute',
    },
    backgroundIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
    ,
    sizeIcon: {
        width: 20,
        height: 20,
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
    abs: {
        height: 20,
        width: 10,
    },
    txt:
    {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    txtAbs: {
        position: 'absolute',
        left: 60
    },
    container: {
        backgroundColor: '#0C0F14',
        paddingHorizontal: 24,
        width: '100%',
        height: '100%'
    }

})