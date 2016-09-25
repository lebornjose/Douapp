// 音乐栏目
import Util from '../common/util'
import Search from '../common/search'
import ServiceURL from './../common/service'
import webView from './../common/webview'
import React from 'react'
import {
	StyleSheet,  //样式
	View,        //页面
	Text,        // 文字
	ListView,      //  列表展示
	Image,          // 图片
	TouchableOpacity,    //本组件用于封装视图，使其可以正确响应触摸操作。当按下的时候，封装的视图的不透明度会降低。这个过程并不会真正改变视图层级，大部分情况下很容易添加到应用中而不会带来一些奇怪的副作用
} from 'react-native'

const Music =  React.createClass({
    getInitialState: ()=> {
			  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows([]),
            keywords: '千山万水',
            show: false
        };
    },
    render(){
        return(
            <View style={[styles.flex_1,{marginBottom:44}]}>

                <View style={[styles.search, styles.row]}>
                    <View style={styles.flex_1}>
                        <Search placeholder="请输入歌曲/歌手名称" onChangeText={this._changeText}  defaultValue={this.state.keywords}/>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={this._search}>
                        <Text style={styles.fontFFF}>搜索</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.show ?
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow}
                        />
                        : Util.loading
                }

            </View>
        );
    },

    componentDidMount: function(){
        this._getData();
    },

    _changeText: function(val){
        this.setState({
            keywords: val
        });
    },

    _search: function(){
        this._getData();
    },

    _renderRow: function(row){
        let authors = row.author;
        let names = [];
        for(let i in authors){
            names.push(authors[i].name);
        }
        return (
            <View style={styles.item}>
                <View style={styles.center}>
                    <Image style={styles.img} source={{uri: row.image}}/>
                </View>
                <View style={[styles.row]}>
                    <Text style={[styles.flex_1,{marginLeft:20}]} numberOfLines={1}>曲目：{row.title}</Text>
                    <Text style={[styles.textWidth]} numberOfLines={1}>演唱：{names}</Text>
                </View>
                <View style={[styles.row]}>
                    <Text style={[styles.flex_1, {marginLeft:20}]} numberOfLines={1}>时间：{row.attrs['pubdate']}</Text>
                    <Text style={styles.textWidth} numberOfLines={1}>评分：{row['rating']['average']}</Text>
                </View>
                <View style={[styles.center]}>
                    <TouchableOpacity style={[styles.goDou, styles.center]} onPress={this._goDouBan.bind(this, row.title, row.mobile_link)}>
                        <Text>详情</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    },

    _getData: function(){
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let that = this;
        let baseURL = ServiceURL.music_search + '?count=10&q=' + this.state.keywords;
        this.setState({
            show: false
        });
        Util.get(baseURL, function(data){
            if(!data.musics || !data.musics.length){
                return alert('音乐服务出错');
            }
            let musics = data.musics;
            that.setState({
                dataSource: ds.cloneWithRows(musics),
                show: true
            });
        }, function(err){
            alert(err);
        });
    },

    _goDouBan: function(title, url){
        this.props.navigator.push({
            component: webView,
            passProps:{
                title: title,
                url: url,
                backName: '音乐'
            }
        });
    }
});


let styles = StyleSheet.create({
    flex_1:{
        flex:1,
    },
    search:{
        paddingLeft:5,
        paddingRight:5,
        marginBottom:5,
        height:40,
    },
    btn:{
        width:40,
        backgroundColor:'#0091FF',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:Util.pixel,
    },
    fontFFF:{
        color:'#fff'
    },
    row:{
        flexDirection:'row'
    },
    img:{
        width:70,
        height:70,
        borderRadius:35
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    item:{
        marginTop:10,
        borderTopWidth:Util.pixel,
        borderBottomWidth:Util.pixel,
        borderColor:'#ddd',
        paddingTop:10,
        paddingBottom:10
    },
    textWidth:{
        width:120
    },
    goDou:{
        height:35,
        width:60,
        borderWidth:Util.pixel,
        borderColor:'#3082FF',
        borderRadius:3
    }
});

module.exports=Music
