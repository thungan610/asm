import React, { createContext } from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SourceIcon from './SourceIcon';

// Màn hình Stack
import Welcome from './authen/Welcome'
import DangNhap from './authen/DangNhap';
import DangKy from './authen/DangKy'
import ChiTietHatCf from './stackScreen/ChiTietHatCf';
import ChiTietCf from './stackScreen/ChiTietCf';
import ThanhToan from './stackScreen/ThanhToan';
import CaiDat from './stackScreen/CaiDat'
import ThongTinCaNhan from './stackScreen/ThongTinCaNhan'

// Màn hình Tab
import GioHang from './tabScreen/GioHang';
import TrangChu from './tabScreen/TrangChu';
import YeuThich from './tabScreen/YeuThich';
import LichSuGiaoDich from './tabScreen/LichSuGiaoDich';

const srcIcon = SourceIcon();

const MyContext = createContext();




const TabNavigation = () => {

    const Tab = createBottomTabNavigator();

    const setIconBottomBar = ({ focused, route }) => {
        let tabName = route.name;

        if (tabName === 'TrangChu') {
            return focused ? <Image style={styles.sizeIconSelect} source={srcIcon.homeIconSelect} /> : <Image style={styles.sizeIconNonSelect} source={srcIcon.homeIcon} />
        } else if (tabName === 'GioHang') {
            return focused ? <Image style={styles.sizeIconSelect} source={srcIcon.storeIconSelect} /> : <Image style={styles.sizeIconNonSelect} source={srcIcon.storeIcon} />
        } else if (tabName === 'YeuThich') {
            return focused ? <Image style={styles.sizeIconSelect} source={srcIcon.heartIconSelect} /> : <Image style={styles.sizeIconNonSelect} source={srcIcon.heartIcon} />
        } else if (tabName === 'LichSuGiaoDich') {
            return focused ? <Image style={styles.sizeIconSelect} source={srcIcon.bellIconSelect} /> : <Image style={styles.sizeIconNonSelect} source={srcIcon.bellIcon} />
        }
    }

    return (
            <Tab.Navigator
                initialRouteName='TrangChu'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => setIconBottomBar({ focused, route }),
                    headerShown: false,
                    tabBarLabel: () => null,
                    tabBarStyle: { backgroundColor: '#0C0F14', borderColor: '#0C0F14' },

                })}
            >
                <Tab.Screen name="TrangChu" component={TrangChu} />
                <Tab.Screen name="GioHang" component={GioHang} />
                <Tab.Screen name="YeuThich" component={YeuThich} />
                <Tab.Screen name="LichSuGiaoDich" component={LichSuGiaoDich} />
            </Tab.Navigator>
    )
}

const ScreenNavigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='Welcome'
        >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="DangKy" component={DangKy} />
            <Stack.Screen name="DangNhap" component={DangNhap} />
       

            <Stack.Screen name="CaiDat" component={CaiDat} />
            <Stack.Screen name='ThongTinCaNhan' component={ThongTinCaNhan} />
            <Stack.Screen name='ChiTietHatCf' component={ChiTietHatCf} />
            <Stack.Screen name='ChiTietCf' component={ChiTietCf} />
            <Stack.Screen name='ThanhToan' component={ThanhToan} />
            <Stack.Screen name='TabNavigation' component={TabNavigation} />
        </Stack.Navigator>
    )
}

export default ScreenNavigation

const styles = StyleSheet.create({
    sizeIconSelect: {
        width: 24,
        height: 24
    },
    sizeIconNonSelect: {
        width: 20,
        height: 20
    },

})