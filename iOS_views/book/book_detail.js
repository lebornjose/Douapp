import Util from './../common/util';
import Header from './../common/header';
import ServiceURL from './../common/service';
import BookItem from './book_item';

import React from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity,ScrollView} from 'react-native';

let styles = {
    flex_1:{
        flex:1
    },
    title: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        marginLeft: 10,
        marginRight: 10,
        color: '#000D22'
    }
}

const BookDetail = React.createClass({
    getInitialState:function () {
        return {
            data:null
        }
    },
    render(){
        return (
            <View style={styles.flex_1}>
                <Header
                    navigator={this.props.navigator}
                    initObj={{
                        backName:'图书',
                        title:this.state.data?this.state.data.title:''
                    }} />
                <ScrollView>
                    {
                        this.state.data?
                            <View>
                                <BookItem row={this.state.data} />
                                <View>
                                    <Text style={[styles.title]}>图书简介</Text>
                                    <Text style={styles.text}>{this.state.data.summary}</Text>
                                </View>
                                 <View>
                                     <Text style={[styles.title]}>作者简介</Text>
                                     <Text style={styles.text}>{this.state.data.author_intro}</Text>
                                 </View>
                                <View style={{height:50}}></View>
                            </View>
                            : Util.loading
                    }
                </ScrollView>
            </View>
        )
    },
    componentDidMount:function () {
        let id = this.props.id;
        let that = this;
        let url = ServiceURL.book_search_id+'/'+id;
        Util.get(url,function (data) {
            that.setState({
                data:data
            })
        },function (err) {
            return alert(err);
        })
    }
});
module.exports = BookDetail;
