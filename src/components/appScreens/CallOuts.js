import React from 'react';
import {View,Text,TouchableOpacity,SafeAreaView,TextInput,ScrollView,Image,StatusBar,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from './common/Card';
import PTRView from 'react-native-pull-to-refresh'
import MapView ,{PROVIDER_GOOGLE} from 'react-native-maps';



class CallOuts extends React.Component{


    onRefresh=()=>{
        return new Promise((resolve) => {
            this.forceUpdate();
            setTimeout(()=>{resolve()}, 2000)
        });
    }


    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
                <View style={{flex:1}}>
                    <View style={{height:80,elevation:5,backgroundColor:'white',borderBottomWidth:1,borderBottomColor:'#dddddd',flexDirection:'row',alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.toggleDrawer()}>
                            <Icon name="ios-menu" size={30} style={{marginLeft:20,marginTop:10}}/>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate('Announcement')}
                            style={{justifyContent:'center',flexDirection:'row',paddingLeft:10,marginTop:10,borderRadius:5,backgroundColor:'white',marginHorizontal:20,alignItems:'center',elevation:2,marginRight:60,borderColor:'#000'}}>
                            
                                <Icon name="ios-create" size={20} style={{marginRight:10}}/>
                                <Text style={{height:30,alignSelf:'center',flex:1,fontWeight:'700',backgroundColor:'white',marginTop:14}}>Make an announcement</Text>
                        
                        </TouchableOpacity>
                        
                    </View>
                    <View style={{flex:1}}>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                        >
                        </MapView>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

/*const styles={
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
}*/
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });

/*{
    <PTRView onRefresh={this.onRefresh} >
                        <Card navigation={this.props.navigation}    src={require('../images/user.png')}/>
                        <Card navigation={this.props.navigation}    src={require('../images/book2.png')}/>
                        <Card navigation={this.props.navigation}    src={require('../images/book3.png')}/>
                        <Card navigation={this.props.navigation}    src={require('../images/book4.png')}/>
                        <Card navigation={this.props.navigation}   />
                        <Card navigation={this.props.navigation}   />
                    </PTRView>
}*/

//<TextInput placeholder="Make an announcement" placeholderTextColor="grey" style={{flex:1,fontWeight:'700',backgroundColor:'white'}}/>

export {CallOuts};