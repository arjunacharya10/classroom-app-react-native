import React from 'react';
import {Text,View,SafeAreaView} from 'react-native';
import PTRView from 'react-native-pull-to-refresh';
import Card from '../appScreens/common/Card';

export default class RegisteredEvents extends React.Component{
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                    <View style={{height:80,elevation:5,backgroundColor:'white',borderBottomWidth:1,borderBottomColor:'#dddddd',flexDirection:'row',alignItems:'center'}}>
                        <View style={{flexDirection:'row',paddingLeft:10,marginTop:10,backgroundColor:'116466',marginHorizontal:20,alignSelf:'center',felx:1}}>
                            <Text style={{fontSize:24,fontFamily:'roboto',fontWeight:'700',textAlign:'center'}}>Registered Events</Text>
                        </View>
                    </View>
                    <PTRView onRefresh={this.onRefresh} >
                        <Card navigation={this.props.navigation}    src={require('../images/user.png')}/>
                        <Card navigation={this.props.navigation}    src={require('../images/book2.png')}/>
                        <Card navigation={this.props.navigation}    src={require('../images/book3.png')}/>
                        <Card navigation={this.props.navigation}    src={require('../images/book4.png')}/>
                        <Card navigation={this.props.navigation}   />
                        <Card navigation={this.props.navigation}   />
                    </PTRView>
                </View>
            </SafeAreaView>
        )
    }
}