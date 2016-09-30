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
    TouchableOpacity,
    ProgressBarAndroid,
    Picker,
    View
    } from 'react-native';

var imgs = [
    'http://pic.qiantucdn.com/01/12/81/83bOOOPIC6f.jpg',
    'http://s8.sinaimg.cn/mw690/9506a669tcc26bd241fc7&690',
    'http://pic2.duowan.com/jx3/1004/134806503411/134808190512.jpg',
    'http://img3.duitang.com/uploads/item/201609/20/20160920083746_cQjMx.jpeg'
];

class BaiYou extends Component {
    constructor(props){
        super(props);
        this.state = {
            language:null,
            index:null,
        };
    }



    //箭头函数 ES6
    render() {
        return (
            <View style={[styles.flex,{marginTop:45}]}>

                <Text>Picker组件</Text>

                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang,k) => {
                        this.setState({
                        language: lang,
                        index:k,
                        })
                        }
                    }
                    mode="dialog"
                    style={{color:'blue'}}
                    >
                    <Picker.Item label="Java" key="111" value="java值" style={{color:'green'}} />
                    <Picker.Item label="JavaScript" key="222" value="js值" />
                    <Picker.Item label="C语言" key="333" value="c值" />
                    <Picker.Item label="PHP开发" key="444" value="php值" />
                </Picker>

                <Text>{this.state.language}</Text>
                <Text>{this.state.index}</Text>

                <ProgressBarAndroid styleAttr="Horizontal" />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
});

AppRegistry.registerComponent('BaiYou', () => BaiYou);
