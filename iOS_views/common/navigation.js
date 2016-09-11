/**
 * Created by wangning on 16/5/8.
 */
import React from 'react';
import {Navigator, View} from 'react-native';

const Navigation = React.createClass({
    render(){
        return (
            <Navigator
                initialRoute={
                    {
                      name: '',
                      component: this.props.component,
                      index: 0
                    }
                  }
                configureScene={
                    () => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }
                }
                renderScene = {
                    (route,navigator) => {
                        console.log(route);
                        let Component = route.component;
                        return (
                            <View style={{flex:1,marginTop:20}}>
                                <Component navigator={navigator} route={route} {...route.passProps}/>
                            </View>
                        )
                    }
                }
            />
        )
    }
});
export default Navigation;
