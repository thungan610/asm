import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import SourceImage from '../SourceImage'
import SourceIcon from '../SourceIcon'

const Home = () => {

    const navigation = useNavigation();

    const srcImage = SourceImage();
    const srcIcon = SourceIcon();


    const goToSetting = () => {
        navigation.navigate('Setting')
    }


    const handlleClickItem = ({ item }) => {
        return item.kindOfItem === 'coffee' ?
            navigation.navigate('ChiTietCf') :
            navigation.navigate('ChiTietHatCf')
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => handlleClickItem({item})}
                style={styles.backGroundItem}
            >
                <View style={styles.sizeImg}>
                    <Image
                        style={styles.img}
                        source={item.photo}
                    />
                    <View style={styles.rate}>
                        <Image
                            style={styles.sizeIconStar}
                            source={srcIcon.starIcon}
                        />
                        <Text style={{ color: 'white' }}>{item.rate}</Text>
                    </View>
                </View>

                <View style={styles.txtName}>
                    <Text style={{ color: 'white', fontSize: 13 }}>{item.name}</Text>
                    <Text style={{ color: 'white', fontSize: 9 }}>{item.type}</Text>
                </View>

                <View style={styles.rowPrice}>
                    <View style={styles.txtPrice}>
                        <Text style={styles.icDolar}>$</Text>
                        <Text style={[styles.icDolar, { color: 'white' }]}>{item.price}</Text>
                    </View>

                    <TouchableOpacity>
                        <View style={styles.backgroundPlus}>
                            <Image
                                style={{ width: 8, height: 8 }}
                                source={srcImage.plusWhite}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

            </TouchableOpacity>
        )
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

                <TouchableOpacity
                    onPress={goToSetting}>
                    <Image
                        source={srcImage.miniAvatar}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.txtLabel}>Find the best
                    coffee for you</Text>

                <View style={styles.search}>

                    <Image
                        style={styles.icSeach}
                        source={srcIcon.searchIcon}
                    />

                    <TextInput
                        placeholder='Find your coffee'
                        placeholderTextColor={'#52555A'}

                    >
                    </TextInput>
                </View>

                <ScrollView
                    style={styles.spaceScrollView}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.columnStyle}>
                        <Text style={styles.txtTypeAll}>All</Text>
                        <Image
                            style={styles.icDot}
                            source={srcImage.dot} />

                    </View>

                    <Text style={styles.txtType}>Cappuccino</Text>
                    <Text style={styles.txtType}>Espresso</Text>
                    <Text style={styles.txtType}>Americano</Text>
                    <Text style={styles.txtType}>Macchiato</Text>

                </ScrollView>

                {/* Row item 1 */}
                <FlatList
                    data={dataItemCoffee}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    style={styles.spaceFlatList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.txtSmallLabel}>Coffee beans</Text>

                {/* Row item 2 */}

                <FlatList
                    data={dataItemBean}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.spaceFlatList}

                />
            </ScrollView>


        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    spaceFlatList: {
        marginVertical: 22
    },
    txtSmallLabel: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },

    txtName: {
        alignItems: 'flex-start',
        marginTop: 10,
        gap: 5
    },
    txtPrice: {
        flexDirection: 'row',
        gap: 5
    },
    backgroundPlus: {
        backgroundColor: '#D17842',
        padding: 10,
        width: 28.44,
        height: 28.44,
        borderRadius: 7
    },
    rowPrice: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    icDolar: {
        fontSize: 15,
        color: '#D17842',
        fontWeight: 'bold'

    },
    sizeImg: {
        flexDirection: 'row',
        height: 136,
        marginTop: 12,

    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        backgroundColor: "rgba(0,0,0,0.6)",
        position: 'absolute',
        right: 0,
        borderTopRightRadius: 18,
        borderBottomLeftRadius: 26,
        paddingHorizontal: 12,
        height: 22

    },
    img: {
        borderRadius: 18,
        width: '100%',
        height: '100%'
    },
    backGroundItem: {
        backgroundColor: '#252A32',
        borderRadius: 23,
        width: 149,
        height: 245.68,
        paddingHorizontal: 10,
        marginRight: 22

    },
    spaceScrollView: {
        marginTop: 28,
        flex: 1,
    },
    columnStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6
    },
    icDot: {
        width: 10,
        height: 10
    },
    txtTypeAll: {
        color: '#D17842',
        fontSize: 16,
        fontWeight: 'bold'
    },
    txtType: {
        color: '#52555A',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 19
    },
    icSeach: {
        width: 20,
        height: 20,
        marginStart: 20
    },
    search: {
        backgroundColor: '#141921',
        borderRadius: 15,
        height: 45,
        marginTop: 28,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    txtLabel: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 31,
        width: 195
    },
    rowToolBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    container: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: '#0C0F14'
    },
    sizeIconStar: {
        width: 10,
        height: 10
    }
})

var dataItemCoffee = [
    {
        id: 0,
        name: 'Cappuccino',
        type: 'With Steamed Milk',
        kindOfItem: 'coffee',
        rate: 4.5,
        price: 4.20,
        photo: require('../../../img/cfhd.png'),
    },
    {
        id: 1,
        name: 'Espresso',
        type: 'With Steamed Milk',
        kindOfItem: 'coffee',
        rate: 4.5,
        price: 4.20,
        photo: require('../../../img/cfhd2.png'),
    },
    {
        id: 2,
        name: 'Americano',
        type: 'With Steamed Milk',
        kindOfItem: 'coffee',
        rate: 4.5,
        price: 4.20,
        photo: require('../../../img/cfhd.png'),
    },
    {
        id: 3,
        name: 'Macchiato',
        type: 'With Steamed Milk',
        kindOfItem: 'coffee',
        rate: 4.5,
        price: 4.20,
        photo: require('../../../img/cfhd2.png'),
    }
];

var dataItemBean = [
    {
        id: 0,
        name: 'Robusta Beans',
        type: 'From Africa',
        kindOfItem: 'bean',
        rate: 4.5,
        price: 4.20,
        photo: require('../../../img/cfBean1.png'),
    },
    {
        id: 1,
        name: 'Robusta Beans',
        type: 'From Africa',
        kindOfItem: 'bean',
        rate: 4.5,
        price: 4.20,
        photo: require('../../../img/cfBean2.png'),
    },
    {
        id: 2,
        name: 'Robusta Beans',
        type: 'From Africa',
        kindOfItem: 'bean',
        rate: 4.5,
        price: 4.20,
        photo: require('../../../img/cfBean3.png'),
    },
    {
        id: 3,
        name: 'Robusta Beans',
        type: 'From Africa',
        kindOfItem: 'bean',
        rate: 4.5,
        price: 4.20,
        photo: require('../../../img/cfBean4.png'),
    }
]