/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Navigation from './iOS_views/common/navigation'
import {
  AppRegistry,   
  //React-native 基本模块也是最常用模块，AppRegistry模块是React Native应用JavaScript运行的入口。应用的跟组件应用使用AppRegistry.registerComponent进行注册自己。然后原生系统就可以进行加载运行bundle文件包，最后就会可以调用AppRegistry.runApplication进行运行起来应用
  StyleSheet,  // 样式模块
  Text,  //  text，文字模块
  View,   // 页面模块
  TabBarIOS, // 底部Tab切换组件
  ScrollView,  //滑动组件
  StatusBarIOS  //改变tab 状态和颜色
} from 'react-native';

class Dou extends Component{
  constructor(props) {
    super(props);
    this.state = {selectedTab: '图书'};
  }
  render() {
    return(
      <TabBarIOS tintColor="white"
                 barTintColor="darkslateblue">
      <TabBarIOS.Item
        title="图书"
        icon={require('image!book')}
        onPress={() => {
          this.setState({
            selectedTab: '图书'
          });
        }}>
        <Navigation component='图书'/>
      </TabBarIOS.Item>

      <TabBarIOS.Item
          title="电影"
          icon={require('image!movie')}
          onPress={() => {
            this.setState({
              selectedTab: '电影'
            });
          }}>
          <Navigation component='电影'/>
       </TabBarIOS.Item>
       <TabBarIOS.Item
          title="音乐"
          icon={require('image!music')}
          onPress={() => {
            this.setState({
              selectedTab: '音乐'
            });
          }}>
          <Navigation component='音乐'/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
};


AppRegistry.registerComponent('Dou', () => Dou);
