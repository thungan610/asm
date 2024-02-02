import { StyleSheet, StatusBar, Image, View, SafeAreaView, Text } from 'react-native'
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {

  const navigation = useNavigation();

  // chuyển màn hình
  useEffect(() => {
    const transScreen = setTimeout(() => {
      navigation.navigate('DangNhap');
    }, 3000);
    return () => clearTimeout(transScreen);
  }, [navigation]);


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
      </View>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  align: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0C0F14'
  },
  sizeImg: {
    width: 190,
    height: 190,
  }
})