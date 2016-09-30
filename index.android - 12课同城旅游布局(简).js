/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  Text,
  View
} from 'react-native';

class BaiYou extends Component{
	render(){
		return (
			<View style={styles.flex}>
				<View style={styles.container}>
				
					<View style={[styles.item,styles.center]}>
						<Text style={styles.font}>洒店</Text>
					</View>
					
					<View style={[styles.item,styles.lineLeftRight]}>
						<View style={[styles.flex,styles.center,styles.lineCenter]}>
							<Text style={styles.font}>海外洒店</Text>
						</View>
						<View style={[styles.flex,styles.center]}>
							<Text style={styles.font}>特惠洒店</Text>
						</View>
					</View>
					
					<View style={styles.item}>
						<View style={[styles.flex,styles.center,styles.lineCenter]}>
							<Text style={styles.font}>团购</Text>
						</View>
						<View style={[styles.flex,styles.center]}>
							<Text style={styles.font}>客栈，公寓</Text>
						</View>
					</View>
					
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		marginTop:100,
		marginLeft:5,
		marginRight:5,
		height:84,
		flexDirection:'row',
		borderRadius:5,
		padding:2,
		backgroundColor:'#FF0067',
	},
	item:{
		flex:1,
		height:80,
	},
	center:{
		justifyContent:'center',
		alignItems:'center',
	},
	flex:{
		flex:1,
	},
	font:{
		color:'#fff',
		fontSize:16,
		fontWeight:'bold',
	},
	lineLeftRight:{
		borderLeftWidth:1/PixelRatio.get(),
		borderRightWidth:1/PixelRatio.get(),
		borderColor:'#fff',
	},
	lineCenter:{
		borderBottomWidth:1/PixelRatio.get(),
		borderColor:'#fff',
	}
});

AppRegistry.registerComponent('BaiYou', () => BaiYou);
