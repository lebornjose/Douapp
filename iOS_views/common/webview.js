/**
 * Created by wangning on 16/5/8.
 */
import Header from './header';
import Util from './util';
import React from 'react';
import {WebView,View} from 'react-native';

const webView  = React.createClass({
    render(){
        console.log(this.props.url)
        return (
            <View>
                <Header
                    navigator={this.props.navigator}
                    initObj={{
                        backName:this.props.backName,
                        title:this.props.title
                    }} />
                <WebView
                    startInLoadingState={true}
                    source={{url:this.props.url}}
                    style={{width:Util.size.width,height:Util.size.height - Util.navigationHeight -44}}>
                </WebView>
            </View>
        )
    }
});

export default webView;
