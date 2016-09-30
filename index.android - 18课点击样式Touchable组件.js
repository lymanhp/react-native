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
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
    } from 'react-native';

class BaiYou extends Component {
    render() {

        return (

            <View style={styles.flex}>

                <TouchableHighlight onPress={this.show.bind(this,'欢迎学习React Native技术')} underlayColor='#999' >
                    <Text style={styles.item}>欢迎学习React Native技术-TouchableHighlight</Text>
                </TouchableHighlight>

                <TouchableOpacity onPress={this.show.bind(this,'这是一个有点击效果的例子Q：19668017')}>
                    <Text style={styles.item}>这是一个有点击效果的例子Q：19668017-TouchableOpacity</Text>
                </TouchableOpacity>

                <TouchableWithoutFeedback onPress={this.show.bind(this,'这是一个没有效果的例子：19668017')}>
                    <Text style={styles.item}>这是一个没有效果的例子：19668017-TouchableWithoutFeedback</Text>
                </TouchableWithoutFeedback>

            </View>

        );
    }

    show(txt){
        alert(txt);
    }
}



const styles = StyleSheet.create({

    flex:{
        flex:1,
        marginTop:25,
    },

    item:{
        fontSize:18,
        color:'#434343',
        marginLeft:5,
        marginTop:10,
    },

});

AppRegistry.registerComponent('BaiYou', () => BaiYou);
