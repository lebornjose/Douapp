/**
 * Created by wangning on 16/5/8.
 */
import Util from './util';
import React from 'react';
import {View,StyleSheet} from 'react-native';

let styles = StyleSheet.create({
   go:{
       width:15,
       height:15,
       borderLeftWidth:4*Util.pixel,
       borderBottomWidth:4*Util.pixel,
       transform:[{
           rotate:'45deg'
       }],
       borderColor:'#FFF',
       marginLeft: 10
   }
});

const LeftIcon = React.createClass({
    render(){
        return (
            <View>
                <View style={styles.go}>
                </View>
            </View>
        )
    }
});

export default LeftIcon;
