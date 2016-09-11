/**
 * Created by wangning on 16/5/8.
 */
import React from 'react';
import {StyleSheet,TextInput,View,Text} from 'react-native';
import Util from './util';

let styles = {
    flex_1: {
        flex: 1
    },
    input:{
        borderWidth:Util.pixel,
        borderColor:'#DDDDDD',
        paddingLeft: 5,
        height:40
    }
};
const Search = React.createClass({
    render(){
        return (
            <View style={styles.flex_1}>
                <TextInput style={[styles.flex_1,styles.input]} autoCaptialize="none" clearButtonMode="while-editing" {...this.props} />
            </View>
        )
    }
});


export default Search;
