import React from 'react';
import {View,Text,TouchableOpacity,SafeAreaView,TextInput,Image,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class Profile extends React.Component{

    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                    <View style={{height:80,elevation:5,backgroundColor:'white',borderBottomWidth:1,borderBottomColor:'#dddddd',flexDirection:'row',alignItems:'center'}}>
                        <View style={{flexDirection:'row',paddingLeft:10,marginTop:10,backgroundColor:'116466',marginHorizontal:20,alignSelf:'center',felx:1}}>
                            <Text style={{fontSize:24,fontFamily:'roboto',fontWeight:'700',textAlign:'center'}}>Profile</Text>
                        </View>
                    </View>
                    <View style={{flex:2,justifyContent:'center',alignItems:'center',marginTop:10}}>
                        <Image source={require('../images/user.png')} height={50} width={50} style={{borderRadius:25}}/>
                    </View>
                    <View style={{flex:1}}>
                            <Text>User Name</Text>
                    </View>
                    <View style={{flex:1}}>
                            <Text>User Name</Text>
                    </View>
                    <View style={{flex:1}}>
                            <Text>User Name</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export {Profile};