/**
 * Created by wangning on 16/5/8.
 */
import React from 'react';
import {TouchableOpacity,View,Text,StyleSheet} from 'react-native';
import Icon from './left_icon';
import Util from './util';

let styles = StyleSheet.create({
    row:{
        flexDirection:'row'
    },
    header:{
        height:Util.navigationHeight,
        backgroundColor:Util.navigationBarBGColor,
        marginTop:0
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    fontFFF:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'
    },
    title:{
        flex:1
    },
    titlePos:{
        width:100,
        marginLeft:-20
    }
});
const Header = React.createClass({
    _pop:function () {
        this.props.navigator.pop();
    },
    render(){
        let {initObj} = this.props
        return (
            <View style={[styles.row,styles.header,styles.center]}>
                <TouchableOpacity style={[styles.row,styles.center]} onPress={this._pop}>
                    <Icon/>
                    <Text style={styles.fontFFF}>{initObj.backName}</Text>
                </TouchableOpacity>
                <View style={[styles.title, styles.center]}>
                    <Text style={[styles.fontFFF, styles.titlePos]} numberOfLines={1}>{initObj.title}</Text>
                </View>
            </View>
        )
    }
});

export default Header;
