/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    Image,
    TouchableOpacity,
    DrawerLayoutAndroid,
    ProgressBarAndroid,
    View
    } from 'react-native';

class BaiYou extends Component {
    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: 'pink'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>我是抽屉!</Text>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>这里放你的菜单嘛!</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={150}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}
                >

                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 26, textAlign: 'right'}}>左滑一下,有抽屉哦</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>React Native World!</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
});

AppRegistry.registerComponent('BaiYou', () => BaiYou);
