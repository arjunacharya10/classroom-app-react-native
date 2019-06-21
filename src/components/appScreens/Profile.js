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
                </View>
            </SafeAreaView>
        )
    }
}

export {Profile};