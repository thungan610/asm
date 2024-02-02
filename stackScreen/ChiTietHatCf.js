import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, StatusBar, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import SourceIcon from '../SourceIcon'
import SourceImage from '../SourceImage'

const BeanDetailsScreen = () => {

    const [selectItem, setselectItem] = useState(null);
    const [showModal, setshowModal] = useState(false)

    const navigation = useNavigation();

    const srcIcon = SourceIcon();
    const srcImage = SourceImage();

    const colorLinear = ['#21262E', '#0C0F14'];
    const start = { x: 0, y: 0 };
    const end = { x: 1, y: 0 };

    const handeBtnBack = () => {
        navigation.navigate('TrangChu');
    }

    const handleAddToCart = () => {
        return selectItem === null ? setshowModal(true) : navigation.navigate('GioHang')
    }

    const handleCloseModal = () => {
        setshowModal(false)
    }

    const handleClickITem = ({ item }) => {
        setselectItem(item);
    }

    const renderWeight = ({ item }) => (
        <TouchableOpacity
            onPress={() => handleClickITem({ item })}
            style={styles.spaceTouchAble}>
            <Text style={selectItem === item ? styles.txtOrgangeSize : styles.txtLightSize}>{item.weight}</Text>
        </TouchableOpacity>
    )


    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={'transparent'}
                translucent
            />
            <View style={styles.sizeBanner}>
                <Image
                    style={styles.imgBanner}
                    source={srcImage.beanDetail}
                />

                <View style={styles.headerRow}>

                    <LinearGradient
                        colors={colorLinear}
                        style={styles.positionBack}
                        start={start}
                        end={end}
                    >
                        <TouchableOpacity
                            onPress={handeBtnBack}
                            style={styles.touchBack}
                        >
                            <Image
                                style={styles.sizeIconArowLeft}
                                source={srcIcon.arowLeft}
                            />
                        </TouchableOpacity>
                    </LinearGradient>

                    <LinearGradient
                        colors={colorLinear}
                        style={styles.positionBack}
                        start={start}
                        end={end}
                    >
                        <TouchableOpacity
                            style={styles.touchBack}
                        >
                            <Image
                                style={styles.sizeIconHeart}
                                source={srcIcon.redHeartIcon}
                            />
                        </TouchableOpacity>
                    </LinearGradient>

                </View>

                <View style={styles.sizeDetail}>

                    <View style={styles.nameAndLocationRow}>
                        <View>
                            <Text style={styles.nameProduct}>Robusta Beans</Text>
                            <Text style={styles.txtBrand}>From Africa</Text>

                        </View>

                        <View style={styles.typeAndLocationRow}>
                            <View
                                style={styles.sizeType}
                            >
                                <Image
                                    style={styles.sizeIconBean}
                                    source={srcIcon.logoBean}
                                />
                                <Text style={styles.txtNameType}>Bean</Text>
                            </View>

                            <View
                                style={styles.sizeType}
                            >
                                <Image
                                    style={styles.sizeIconLocation}
                                    source={srcIcon.locationIcon}
                                />
                                <Text style={styles.txtNameType}>Bean</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.previewRow}>

                        <View style={styles.rateRow}>
                            <Image
                                style={styles.sizeIconStar}
                                source={srcIcon.starIcon}
                            />
                            <Text style={styles.txtRate}>4.5</Text>
                            <Text style={styles.txtView}>(6,879)</Text>

                        </View>

                        <Text style={styles.backgroundType}>Medium Roasted</Text>
                    </View>
                </View>
            </View>

            <View style={styles.columnBody}>

                <Text style={styles.txtLabel}>Description</Text>
                <Text style={styles.txtDecription}>Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! </Text>

                <Text style={styles.txtLabelSize}>Size</Text>

                <FlatList
                    data={dataWeight}
                    renderItem={renderWeight}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                <View style={styles.rowAddToCart}>

                    <View>
                        <Text style={styles.txtPrice}>Price</Text>
                        <Text style={styles.charactorDolar}>$
                            <Text style={styles.txtNumberPrice}>10.50</Text>
                        </Text>

                    </View>

                    <TouchableOpacity
                        onPress={handleAddToCart}
                        style={styles.btnAddToCart}>
                        <Text style={styles.txtAddToCart}>Add to cart</Text>
                    </TouchableOpacity>

                    <Modal
                        visible={showModal}
                        animationType='fade'
                        transparent
                        statusBarTranslucent
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.contentModal}>

                                <Text style={styles.txtMessage}>Vui lòng chọn size</Text>

                                <TouchableOpacity
                                    onPress={handleCloseModal}
                                    style={styles.touchAbleOK}
                                >
                                    <Text style={styles.txtOK}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </Modal>
                </View>

            </View>

        </View>
    )
}

export default BeanDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C0F14'
    },
    sizeBanner: {
        width: '100%',
        flex: 1
    },
    imgBanner: {
        height: '100%',
        width: '100%'
    },
    headerRow: {
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 40
    },
    sizeIconArowLeft: {
        height: 20,
        width: 10,
    },
    sizeIconHeart: {
        height: 20,
        width: 20,
    },
    touchBack: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    positionBack: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    sizeDetail: {
        height: 148.2,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 20
    },
    nameProduct: {
        color: 'white',
        fontSize: 20
    },
    txtBrand: {
        color: '#AEAEAE',
        fontSize: 14
    },
    sizeType: {
        backgroundColor: '#141921',
        width: 55.71,
        height: 55.71,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    sizeIconBean: {
        width: 22.33,
        height: 22.85
    },
    sizeIconLocation: {
        width: 17.75,
        height: 20.5
    },
    txtNameType: {
        color: '#AEAEAE',
        fontSize: 10
    },
    nameAndLocationRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 18.94
    },
    typeAndLocationRow: {
        flexDirection: 'row',
        gap: 20
    },
    sizeIconStar: {
        width: 22.29,
        height: 22.29
    },
    previewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 13.73,
    },
    rateRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtRate: {
        color: 'white',
        fontSize: 16,
        marginLeft: 5.57,
        marginRight: 3.34
    },
    txtView: {
        color: '#AEAEAE',
        fontSize: 10
    },
    backgroundType: {
        backgroundColor: '#141921',
        color: '#AEAEAE',
        fontSize: 10,
        width: 131.49,
        height: 44.57,
        borderRadius: 10,
        textAlign: 'center',
        paddingTop: 12.14
    },
    txtLabel: {
        color: '#AEAEAE',
        fontSize: 14,
        marginTop: 19.8,
        marginBottom: 15
    },
    txtDecription: {
        color: 'white',
        fontSize: 12,
        lineHeight: 20
    },
    txtLabelSize: {
        color: '#AEAEAE',
        fontSize: 14,
        marginTop: 8,
        marginBottom: 12
    },
    columnBody: {
        paddingHorizontal: 20
    },
    rowSize: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtOrgangeSize: {
        color: '#D17842',
        fontSize: 12,
        borderWidth: 2,
        borderColor: '#D17842',
        borderRadius: 10,
        width: 100,
        height: 40,
        textAlign: 'center',
        paddingTop: 10,
        backgroundColor: '#141921'
    },
    txtLightSize: {
        color: '#AEAEAE',
        fontSize: 12,
        borderColor: '#D17842',
        borderRadius: 10,
        width: 100,
        height: 40,
        textAlign: 'center',
        paddingTop: 10,
        backgroundColor: '#141921'
    },
    spaceTouchAble: {
        marginRight: 25
    },
    rowAddToCart: {
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
        fontSize: 20
    },
    txtNumberPrice: {
        color: 'white',
        fontSize: 20
    },
    btnAddToCart: {
        backgroundColor: '#D17842',
        width: 240,
        height: 60,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtAddToCart: {
        color: 'white',
        fontSize: 16
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    contentModal: {
        width: 250,
        height: 150,
        backgroundColor: '#0C0F14',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        borderRadius: 20
    },
    txtMessage: {
        color: 'white',
        fontSize: 14
    },
    touchAbleOK: {
        backgroundColor: '#D17842',
        padding: 10,
        width: 80,
        borderRadius: 10
    },
    txtOK: {
        color: '#AEAEAE',
        fontSize: 16,
        textAlign: 'center'
    }
})

var dataWeight = [
    {
        id: 0,
        weight: '250gm'
    },
    {
        id: 1,
        weight: '500gm'
    },
    {
        id: 2,
        weight: '1kg'
    }
]