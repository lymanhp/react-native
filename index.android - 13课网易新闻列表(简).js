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

const Header=require('./header');

class BaiYou extends Component{
	render(){
		return (
		<View style={styles.flex}>
			<Header></Header>
			<List title='第一条信息，你是否看得清楚明白'></List>
			<List title='第二条信息，上条没看清楚，这条白搭'></List>
			<List title='第三条信息，还不死心，放弃吧！'></List>
			<List title='第四条信息，别玩了，回家洗了睡！'></List>
			<ImportantNews
				news={[
				'这是网易新闻的的第一条信息，你是否看得清楚明白',
				'这是网易新闻的的第二条信息，上条没看清楚，这条白搭',
				'这是网易新闻的的第三条信息，还不死心，放弃吧！',
				'这是网易新闻的的第四条信息，别玩了，回家洗了睡！',
				]}>
			</ImportantNews>
		</View>
		);
	}
}

class List extends Component{
	render(){
		return (
			<View style={styles.list_item}>
				<Text style={styles.list_item_font}>{this.props.title}</Text>
			</View>
		)
	}
}

class ImportantNews extends Component{
	show(title) {
		alert(title);
	}

	render(){
		var news = [];
		for(var i in this.props.news) {
			var text = (
				<Text
					onPress = {this.show.bind(this,this.props.news[i])}
					numberOfLines={1}
					style={styles.news_item} key={i}>
						{this.props.news[i]}
				</Text>
			);
			news.push(text);
		}

		return (
			<View style={styles.flex}>
				<Text style={styles.news_title}>今日要闻</Text>
				{news}
			</View>
		);

	}
}

const styles = StyleSheet.create({
	flex:{
		flex:1,
	},
	list_item:{
		height:40,
		marginLeft:10,
		marginRight:10,
		borderBottomWidth:1,
		borderBottomColor:'#ddd',
		justifyContent:'center',
	},
	list_item_font:{
		fontSize:16,
	},
	news_title:{
		fontSize:20,
		fontWeight:'bold',
		color:'#cd1d1c',
		marginLeft:10,
		marginTop:15,
	},
	news_item:{
		marginLeft:10,
		marginRight:10,
		fontSize:15,
		lineHeight:40,
	}
})

AppRegistry.registerComponent('BaiYou', () => BaiYou);
