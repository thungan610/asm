import { SafeAreaView, StatusBar, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import SourceIcon from '../SourceIcon';
import SourceImage from '../SourceImage';


const Favorite = () => {

    const navigation = useNavigation();

    const srcIcon = SourceIcon();
    const srcImage = SourceImage();

    const goToSetting = () => {
        navigation.navigate('CaiDat')
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor={'#0C0F14'}
            />

            <View style={styles.rowToolBar}>
                <TouchableOpacity>
                    <Image
                        source={srcImage.menu}
                    />
                </TouchableOpacity>

                <Text style={styles.txtLabelScreen}>Favorites</Text>

                <TouchableOpacity
                    onPress={goToSetting}>
                    <Image
                        source={srcImage.miniAvatar}
                    />
                </TouchableOpacity>
            </View>

            <View>
                <View>
                    <Image
                        style={styles.sizeImage}
                        source={srcImage.cfhd}
                    />

                    <LinearGradient
                        colors={['#21262E', '#0C0F14']}
                        style={styles.sizeContainerHeart}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <TouchableOpacity
                            style={styles.sizeTouch}
                        >
                            <Image
                                style={styles.sizeIconHeart}
                                source={srcIcon.redHeartIcon}
                            />
                        </TouchableOpacity>
                    </LinearGradient>

                    <View style={styles.sizeDetail}>

                        <View style={styles.nameAndLocationRow}>
                            <View>
                                <Text style={styles.nameProduct}>Cappuccino</Text>
                                <Text style={styles.txtBrand}>With Steamed Milk</Text>

                            </View>

                            <View style={styles.typeAndLocationRow}>
                                <View
                                    style={styles.sizeType}
                                >
                                    <Image
                                        style={styles.sizeIconBean}
                                        source={srcIcon.logoCoffee}
                                    />
                                    <Text style={styles.txtNameType}>Coffee</Text>
                                </View>

                                <View
                                    style={styles.sizeType}
                                >
                                    <Image
                                        style={styles.sizeIconLocation}
                                        source={srcIcon.logoMilk}
                                    />
                                    <Text style={styles.txtNameType}>Milk</Text>
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

                <LinearGradient
                    colors={['#262B33', 'rgba(38, 43, 51, 0)']}
                    style={styles.sizeDescription}>
                    <Text style={styles.txtLabelDescription}>Description</Text>
                    <Text style={styles.txtContentDescription}>Cappuccino is a latte
                        made with more foam than
                        steamed milk, often with
                        a sprinkle of cocoa powder
                        or cinnamon on top.</Text>
                </LinearGradient>
            </View>
        </SafeAreaView>
    )
}

export default Favorite

const styles = StyleSheet.create({
    rowToolBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginBottom: 11
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#0C0F14'
    },
    txtLabelScreen: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    sizeImage: {
        height: 457,
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
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
    txtLabelDescription: {
        color: '#AEAEAE',
        fontSize: 14
    },
    txtContentDescription: {
        fontSize: 12,
        color: 'white',
        lineHeight: 20
    },
    sizeDescription: {
        paddingLeft: 31,
        paddingRight: 18,
        justifyContent: 'center',
        height: 120,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    sizeIconHeart: {
        width: 16,
        height: 16,
        borderRadius: 10
    },
    sizeContainerHeart: {
        position: 'absolute',
        right: 20,
        top: 26,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#21262E'
    },
    sizeTouch: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})