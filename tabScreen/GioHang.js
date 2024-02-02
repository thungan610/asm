import { SafeAreaView, StatusBar, TouchableOpacity, Image, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import SourceIcon from '../SourceIcon';
import SourceImage from '../SourceImage';

const Cart = () => {

    const navigation = useNavigation();

    const srcIcon = SourceIcon();
    const srcImage = SourceImage();

    const colorLinear = ['#262B33', 'rgba(38, 43, 51, 0)'];
    const startLinear = { x: 0, y: 0 };
    const endLinear = { x: 0, y: 1 };

    const goToSetting = () => {
        navigation.navigate('CaiDat');
    }

    const handleClickPay = () => {
        navigation.navigate('ThanhToan');
    }

    const renderTableItem = ({ item }) => (
        <LinearGradient
            style={styles.tableItem}
            colors={colorLinear}
            start={startLinear}
            end={endLinear}
        >
            {/* row 1 */}
            <View style={styles.rowDetailInTable}>
                <Image
                    style={styles.sizeImageInTable}
                    source={item.photo}
                />

                <View>
                    <Text style={styles.txtNameItemInTable}>{item.name}</Text>
                    <Text style={styles.txtTypeInTable}>{item.type}</Text>
                    <Text style={styles.txtSizeInTable}>Medium Roasted</Text>
                </View>
            </View>



            <View style={styles.tableSize}>

                {/* Size S  */}
                <View style={styles.rowSize}>
                    <Text style={styles.txtSizeSmall}>S</Text>
                    <Text style={styles.symbol}>$</Text>
                    <Text style={styles.txtPrice}>4.20</Text>

                    <TouchableOpacity
                        style={styles.backgroundMinusAndPlus}  >
                        <Image
                            style={styles.sizeIconMinus}
                            source={srcIcon.minusIcon}
                        />
                    </TouchableOpacity>

                    <Text style={styles.backgroundQuantity}>1</Text>

                    <TouchableOpacity
                        style={styles.backgroundMinusAndPlus}  >
                        <Image
                            style={styles.sizeIconPlus}
                            source={srcIcon.plusIcon}
                        />
                    </TouchableOpacity>
                </View>

                {/* Size M  */}
                <View style={styles.rowSize}>
                    <Text style={styles.txtSizeSmall}>M</Text>
                    <Text style={styles.symbol}>$</Text>
                    <Text style={styles.txtPrice}>4.20</Text>

                    <TouchableOpacity
                        style={styles.backgroundMinusAndPlus}  >
                        <Image
                            style={styles.sizeIconMinus}
                            source={srcIcon.minusIcon}
                        />
                    </TouchableOpacity>

                    <Text style={styles.backgroundQuantity}>1</Text>

                    <TouchableOpacity
                        style={styles.backgroundMinusAndPlus}  >
                        <Image
                            style={styles.sizeIconPlus}
                            source={srcIcon.plusIcon}
                        />
                    </TouchableOpacity>
                </View>

                {/* Size L  */}
                <View style={styles.rowSize}>
                    <Text style={styles.txtSizeSmall}>L</Text>
                    <Text style={styles.symbol}>$</Text>
                    <Text style={styles.txtPrice}>4.20</Text>

                    <TouchableOpacity
                        style={styles.backgroundMinusAndPlus}  >
                        <Image
                            style={styles.sizeIconMinus}
                            source={srcIcon.minusIcon}
                        />
                    </TouchableOpacity>

                    <Text style={styles.backgroundQuantity}>1</Text>

                    <TouchableOpacity
                        style={styles.backgroundMinusAndPlus}  >
                        <Image
                            style={styles.sizeIconPlus}
                            source={srcIcon.plusIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )

    const renderSingleItem = ({ item }) => (
        <LinearGradient
            style={styles.singleItem}
            colors={colorLinear}
            start={startLinear}
            end={endLinear}
        >

            <Image
                style={styles.sizeImgSingleItem}
                source={item.photo}
            />

            <View style={styles.columnDetail}>
                <Text style={styles.txtNameItemInTable}>{item.name}</Text>
                <Text style={styles.txtTypeInTable}>{item.type}</Text>

                <View style={styles.rowSizeAndPrice}>
                    <Text style={styles.txtSizeSmall}>M</Text>

                    <View style={styles.rowSymbolAndPrice}>
                        <Text style={styles.symbol}>$</Text>
                        <Text style={styles.txtPrice}>4.20</Text>
                    </View>
                </View>

                <View style={styles.rowSize}>
                    <TouchableOpacity
                        style={styles.backgroundMinusAndPlus}  >
                        <Image
                            style={styles.sizeIconMinus}
                            source={srcIcon.minusIcon}
                        />
                    </TouchableOpacity>

                    <Text style={styles.backgroundQuantity}>1</Text>

                    <TouchableOpacity
                        style={styles.backgroundMinusAndPlus}  >
                        <Image
                            style={styles.sizeIconPlus}
                            source={srcIcon.plusIcon}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </LinearGradient>
    )

    const validRender = ({ item }) => {
        return item.status === false ? renderTableItem({ item }) : renderSingleItem({ item })
    }

    const separator = () => <View style={styles.spaceFlatlist} />

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor={'#0C0F14'}
            />

            <View style={styles.rowToolBar}>
                <TouchableOpacity>
                    <Image
                        source={srcImage.menuIcon}
                    />
                </TouchableOpacity>

                <Text style={styles.txtLabelScreen}>Cart</Text>

                <TouchableOpacity
                    onPress={goToSetting}>
                    <Image
                        source={srcImage.miniAvatar}
                    />
                </TouchableOpacity>
            </View>

            <FlatList
                data={dataItem}
                renderItem={validRender}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={separator}
            />

            <View style={styles.rowPay}>

                <View>
                    <Text style={styles.txtPrice}>Total Price</Text>
                    <Text style={styles.charactorDolar}>$
                        <Text style={styles.txtNumberPrice}> 10</Text>
                    </Text>

                </View>

                <TouchableOpacity
                    onPress={handleClickPay}
                    style={styles.btnPay}>
                    <Text style={styles.txtPay}>Pay</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default Cart

const styles = StyleSheet.create({
    rowToolBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginBottom: 11
    },
    container: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: '#0C0F14'
    },
    txtLabelScreen: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    tableItem: {
        height: 255,
        borderRadius: 23,
        paddingHorizontal: 17,
        paddingTop: 9,
        paddingBottom: 15
    },
    sizeImageInTable: {
        width: 100,
        height: 100,
        borderRadius: 16
    },
    rowDetailInTable: {
        flexDirection: 'row',
        gap: 22
    },
    txtNameItemInTable: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        paddingVertical: 5
    },
    txtTypeInTable: {
        color: '#AEAEAE',
        fontSize: 10
    },
    txtSizeInTable: {
        backgroundColor: '#141921',
        width: 118,
        height: 40,
        borderRadius: 10,
        color: '#AEAEAE',
        fontSize: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginTop: 10
    },
    txtSizeSmall: {
        width: 72,
        height: 35,
        backgroundColor: '#0C0F14',
        borderRadius: 10,
        paddingVertical: 8,
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    symbol: {
        color: '#D17842',
        fontSize: 16,
        fontWeight: '500'
    },
    txtPrice: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    },
    backgroundMinusAndPlus: {
        backgroundColor: '#D17842',
        width: 28.44,
        height: 28.44,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowSize: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sizeIconMinus: {
        width: 8,
        height: 3
    },
    sizeIconPlus: {
        width: 8,
        height: 8
    },
    backgroundQuantity: {
        backgroundColor: '#0C0F14',
        borderWidth: 1,
        borderColor: '#D17842',
        borderRadius: 7,
        width: 50,
        height: 30,
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
        paddingVertical: 5,
        textAlign: 'center'
    },
    tableSize: {
        gap: 8,
        marginTop: 10
    },
    singleItem: {
        height: 154,
        borderRadius: 23,
        paddingVertical: 12,
        paddingLeft: 12,
        paddingRight: 22,
        flexDirection: 'row',
        gap: 12
    },
    sizeImgSingleItem: {
        width: 126,
        height: 126,
        borderRadius: 16
    },
    rowSizeAndPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        marginVertical: 8
    },
    rowSymbolAndPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    columnDetail: {
        flex: 1,
        gap: 2
    },
    spaceFlatlist: {
        height: 16
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
    }
})

var dataItem = [
    {
        id: 1,
        name: 'Cappuccino',
        type: 'With Steamed Milk',
        size: 'Medium Roasted',
        price: 4.20,
        photo: require('../../../img/cfhd.png'),
        status: false
    },
    {
        id: 2,
        name: 'Cappuccino',
        type: 'With Steamed Milk',
        size: 'Medium Roasted',
        price: 4.20,
        photo: require('../../../img/cfhd2.png'),
        status: true
    },
    {
        id: 3,
        name: 'Robusta Beans',
        type: 'From Africa',
        size: 'Medium Roasted',
        price: 4.20,
        photo: require('../../../img/cfBean1.png'),
        status: true
    },
    {
        id: 4,
        name: 'Liberica Coffee Beans',
        type: 'With Steamed Milk',
        size: 'Medium Roasted',
        price: 4.20,
        photo: require('../../../img/cfBean3.png'),
        status: false
    }
]