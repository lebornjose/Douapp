/**
 * Created by wangning on 16/5/8.
 */
import React from 'react';
import {
	StyleSheet,
	View,Text,
	Image,
	TouchableOpacity   // 本组件用于封装视图,使其可以正确响应触摸事件，当按下的时候，封装的视图的不透明度会降低。这个过程并不会真正改变视图层级，大部分情况下很容易添加到应用中而不会带来一些奇怪的副作用。（译注：此组件与TouchableHighlight的区别在于并没有额外的颜色变化，更适于一般场景）
} from 'react-native';
import Util from '../common/util';

let styles = StyleSheet.create({
    row:{
        flexDirection:'row'
    },
    item:{
        height:120,
        borderTopWidth:Util.pixel,
        borderBottomWidth:Util.pixel,
        marginTop:5,
        marginBottom:5,
        borderColor:'#ccc'
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    book_image:{
        width:80,
        height:100,
        resizeMode:Image.resizeMode.contain
    },
    content:{
        flex:1,
        marginTop:10,
        marginLeft:10,
        marginRight:10
    },
    publisher:{
        color:'#A3A3A3',
        fontSize:13
    },
    price:{
        color:'#2BB2A3',
        fontSize:16
    },
    pages:{
        marginLeft:10,
        color:'#A7A0A0'
    }
});

const BookItems = React.createClass({
    render(){
        let row = this.props.row;
        return (
            <TouchableOpacity style={[styles.row,styles.item]} {...this.props}>
                <View style={[styles.center]}>
                    <Image style={styles.book_image} source={{uri:row.image}}></Image>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={{flex:1}} numberOfLines={1}>{row.title}</Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={[styles.publisher,{flex:1}]}>{row.publisher}</Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={[styles.publisher, {flex:1}]}>{row.author}</Text>
                    </View>
                    <View style={[styles.row,{marginTop:10,flex:1}]}>
                        <Text style={styles.price}>{row.price}</Text>
                        <Text style={styles.pages}>{row.pages}页</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
});
module.exports = BookItems;
