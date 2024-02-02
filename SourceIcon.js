import { View, Text } from 'react-native'
import React, {createContext} from 'react'

const IconContext = createContext();

const SourceIcon = (props) => {
    
    const icons = {
        arowLeft: require('../../icon/arowLeft.png'),
        ellipseIcon: require('../../icon/EllipseIcon.png'),
        historyIcon: require('../../icon/History.png'),
        arrowRight: require('../../icon/arrowRight.png'),
        persionalIcon: require('../../icon/Persional.png'),
        addressIcon: require('../../icon/Adress.png'),
        paymentIcon: require('../../icon/payment.png'),
        aboutIcon: require('../../icon/About.png'),
        helpIcon: require('../../icon/Help.png'),
        logoutIcon: require('../../icon/Logout.png'),
        searchIcon: require('../../icon/search.png'),
        homeIconSelect: require('../../icon/icHomeSelect.png'),
        homeIcon: require('../../icon/icHome.png'),
        storeIcon: require('../../icon/icStore.png'),
        storeIconSelect: require('../../icon/icStoreSelect.png'),
        heartIcon: require('../../icon/icHeart.png'),
        heartIconSelect: require('../../icon/icHeartSelect.png'),
        bellIcon: require('../../icon/icBell.png'),
        bellIconSelect: require('../../icon/icBellSelect.png'),
        starIcon: require('../../icon/star.png'),
        redHeartIcon: require('../../icon/icRedHeart.png'),
        logoBean: require('../../icon/LogoBean.png'),
        locationIcon: require('../../icon/IconLocation.png'),
        logoCoffee: require('../../icon/logoCoffee.png'),
        logoMilk: require('../../icon/logoMilk.png'),
        minusIcon: require('../../icon/Minus.png'),
        plusIcon: require('../../icon/Plus.png'),
        walletIcon: require('../../icon/IconWallet.png'),
        googlePayIcon: require('../../icon/icGooglePay.png'),
        appleIcon: require('../../icon/icApple.png'),
        amazonPayIcon: require('../../icon/icAmazonPay.png'),


    };

    return icons;
}

export default SourceIcon