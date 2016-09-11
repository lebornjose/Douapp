import React from 'react';
import Util from '../common/util';
import Search from '../common/search';
import ServiceURL from '../common/service';
import BookItem from './book_item';
import BookDetail from './book_detail';
import {StyleSheet,View,Text,Image,TouchableOpacity,ScrollView,ListView} from 'react-native';

let styles={
		flex_1:{
			flex:1
	},
	row:{
			flexDirection:'row'
	},
	search:{
			paddingLeft:5,
			paddingRight:5,
			height:40,
			marginBottom:5
	},
	btn: {
			width: 40,
			backgroundColor: '#0091FF',
			justifyContent: 'center',
			alignItems: 'center',
			marginLeft: Util.pixel,
	},
	fontFFF: {
			color: '#fff'
	}
}

const BookList=React.createClass({
	getInitialState: function(){
		  var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
			return {
					 dataSource:ds.cloneWithRows([]),
					 keywords:'c语言',
					 show:false
			}
	},
	render(){
			return (
					<View style={[styles.flex_1,{marginBottom:44}]}>
							<View style={[styles.row,styles.search]}>
									<View  style={styles.flex_1}>
											<Search placeholder="请输入图书的名称" onChangeText={this._changeText} defaultValue={this.state.keywords}></Search>
									</View>
									<TouchableOpacity onPress={this._search} style={styles.btn}>
											<Text style={styles.fontFFF}>搜索</Text>
									</TouchableOpacity>
							</View>
							{this.state.show?
									<ListView
											dataSource={this.state.dataSource}
											renderRow={this._renderRow}
									/>
									:
									Util.loading
							}
					</View>
			)
	},
	componentDidMount:function(){
			this.getData();
	},
	_renderRow:function (row) {
			return (
					<BookItem row={row} onPress={this._loadPage.bind(this,row.id)}></BookItem>
			)
	},
	_changeText:function (val) {
			this.setState({
					keywords:val
			})
	},
	_search:function () {
			this.getData()
	},
	getData:function () {
			var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
			let that = this;
			let baseURL = ServiceURL.book_search+'?count=10&q='+this.state.keywords;
			this.setState({
					show:false
			});
			Util.get(baseURL,function (data) {
					if(!data.books || !data.books.length){
							return alert('图书服务出错');
					}
					let books = data.books;
					that.setState({
							dataSource:ds.cloneWithRows(books),
							show:true
					})
			},function (err) {
					alert(err)
			})
	},
	_loadPage:function (id) {
			console.log(id);
			this.props.navigator.push({
					component:BookDetail,
					passProps:{
							id:id
					}
			})
	}
})


module.exports = BookList
