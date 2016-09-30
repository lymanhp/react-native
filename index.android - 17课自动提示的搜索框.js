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
	TextInput,
	Text,
	View
} from 'react-native';

var onePT = 1 / PixelRatio.get();	//取屏幕一个象素宽度

class BaiYou extends Component {
	render() {
		return (
			<View style={[styles.flex,styles.topStatus]}>
				<Search></Search>
			</View>
		);
	}
}

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show:false,
			value:null,
		};
	}

	hide(val) {
		this.setState({
			show:false,
			value:val,
		});
	}

	getValue(text) {
		this.setState({
			show:true,
			value:text,
		});
	}

	render() {
		return (
			<View style={styles.flex}>

				<View style={styles.flexDirection}>
					<View style={[styles.flex,styles.input]}>
						<TextInput
							keyboardType="web-search"
							placeholder="请输入关键词"
							value={this.state.value}
							onChangeText={this.getValue.bind(this)} />
					</View>
					<View style={styles.btn}>
						<Text style={styles.search} onPress={this.hide.bind(this,this.state.value)}>搜索</Text>
					</View>
				</View>

				{this.state.show ?
					<View style={styles.result}>
						<Text onPress={this.hide.bind(this, this.state.value + '加东方QQ')}
							  style={styles.item} numberOfLines={1}>{this.state.value}加东方QQ</Text>
						<Text onPress={this.hide.bind(this, this.state.value + '园街')}
							  style={styles.item} numberOfLines={1}>{this.state.value}园街</Text>
						<Text onPress={this.hide.bind(this, 80 + this.state.value + '综合商店')}
							  style={styles.item} numberOfLines={1}>80{this.state.value}综合商店</Text>
						<Text onPress={this.hide.bind(this, this.state.value + '桃')}
							  style={styles.item} numberOfLines={1}>{this.state.value}桃</Text>
						<Text onPress={this.hide.bind(this, '东方耀' + this.state.value )}
							  style={styles.item} numberOfLines={1}>东方耀{this.state.value}</Text>
					</View>
					: null
				}

			</View>
		);
	}
}

const styles = StyleSheet.create({
	item:{
		fontSize:16,
		paddingTop:5,
		paddingBottom:10,
	},
	result:{
		marginTop:onePT,
		marginLeft:18,
		marginRight:5,
		height:200,
	},
	flex:{
		flex:1,
	},
	flexDirection:{
		flexDirection:'row',
	},
	topStatus:{
		marginTop:25,
	},
	input:{
		height:45,
		borderColor:'red',
		borderWidth:1,
		marginLeft:10,
		paddingLeft:10,
		borderRadius:5,
	},
	btn:{
		width:80,
		marginLeft:-5,
		marginRight:10,
		height:45,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'green',
	},
	search:{
		color:'#FFF',
		fontSize:15,
		fontWeight:'bold',
	}
});



AppRegistry.registerComponent('BaiYou', () => BaiYou);
