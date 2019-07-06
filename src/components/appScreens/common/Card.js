import React from 'react';
import {View,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Card extends React.Component{
    render(){
        return(
            <View style={{flex:1,elevation:2,borderRadius:3,backgroundColor:'white',borderBottomWidth:0,borderColor:'#ddd',margin:10,marginHorizontal:20,justifyContent:'center'}}>
                <View style={{flex:1,flexDirection:'row',alignContent:'flex-start',padding:10,borderBottomWidth:1,borderBottomColor:'#ddd'}}>
                    
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <Text style={{color:'#000',fontSize:12,fontFamily:'roboto',fontWeight:'700'}}></Text>
                    </View>

                    <View style={{flex:2,alignItems:'center'}}>
                        <Text style={{color:'#000',fontSize:15,fontFamily:'roboto',fontWeight:'700'}}>Subject</Text>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <Text style={{color:'#000',fontSize:12,fontFamily:'roboto',fontWeight:'700'}}>Date</Text>
                    </View>
                     
                </View>
                <View style={{flex:2,padding:10}}>
                    <Text style={{color:'#111'}}>Christopher Columbus was an Italian explorer, navigator, and colonist who completed four voyages across the Atlantic Ocean under the auspices of the Catholic Monarchs of Spain. He led the first European expeditions to the Caribbean, Central America, and South America, initiating the permanent European colonization of the Americas.</Text>
                    {
                        this.props.src?
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Image',{src:this.props.src})}>
                            <Image style={{alignSelf:'center'}} source={this.props.src} height={100} width={100} resizeMode='contain'/>
                        </TouchableOpacity>:
                        <View></View>
                    }
                </View>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                    <TouchableOpacity style={{flex:1,flexDirection:'row',borderWidth:1,borderColor:'#ddd',padding:10,alignItems:"center",justifyContent:'center'}}>
                            <Icon color="#116466" name="ios-arrow-dropup-circle" size={20}/>
                            <Text style={{color:'#116466',paddingLeft:10}}>Upvote</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,flexDirection:'row',borderWidth:1,borderColor:'#ddd',padding:10,alignItems:'center',justifyContent:'center'}}>
                            <Icon color="red" name="ios-arrow-dropdown-circle" size={20}/>
                            <Text style={{color:'red',paddingLeft:10}}>Downvote</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Card;